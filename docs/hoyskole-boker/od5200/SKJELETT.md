# Bokskjelett: OD5200 Samfunnsodontologi, pedodonti og oral protetikk (UiO) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT kapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — `exercise`-blokker INLINE rett etter
> teorien/eksempelet de trener, aldri all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve stoff som ikke er dekket tidligere i kapitlet
> eller i eksplisitt refererte forkunnskaper (flytt teoribiten tidligere ved
> behov). I jus-/regelkapitlene er løkka «regel med hjemmel → subsumsjonseksempel
> → mini-kortsvar»; i økonomikapitlene «modell/figur → gjennomgått figurdrøfting →
> figuroppgave»; i pedodonti-/protetikk-kapitlene «faktabit/klinisk regel →
> kasus-illustrasjon → diagnose-/behandlingsoppgave». Autoritativ kilde: README
> «Leserkrav» + arketypenes DNA-filer. Unntak: prøve-/øvingseksamens-/
> modellbesvarelseskapitler følger sin egen arketype (komplett sett/oppgave
> først, løsninger i collapsibles). Kvotene og innholdskontraktene i dette
> skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (UiO-arkivet 2022–2025: 14 filer fordelt på tre skriftlige
> deleksamener — **samfunnsodontologi ~3 lesbare sittinger, pedodonti ~3,
> oral protetikk ~1**; 2–3 filer er rene skann/bildevedlegg og er utelatt med
> vilje). Alle oppgaver, kasus og molekyl-/pasienteksempler i boka skal være
> NYSKREVNE (se §6). Lovhenvisninger, tannnumre (FDI), HELFO-takstbetegnelser,
> standard traumeprotokoll og alminnelig markeds-/forsikringsteori er ikke
> opphavsrettslig beskyttet og brukes fritt.
>
> **Verifisering er kritisk her (helsejus + takster).** Samfunnsodontologiens
> jus-/HELFO-innhold speiler **rettstilstanden i oppgavens år**. Tannhelse­
> tjenesteloven § 1-3 ble endret i 2024, og HELFO-takster/beløp justeres årlig.
> **Alle konkrete paragrafer, takstsatser og kronebeløp er merket `(verifiser mot
> gjeldende regelverk)`** og MÅ kontrolleres mot gjeldende tannhelsetjenestelov,
> folketrygdloven kap. 5 og HELFO-takstplakat FØR de brukes som fasit. Byggefasen
> skal ha en **Lovdata-/HELFO-verifikatør** (jf. jus-DNA fase 6).
>
> **Bildeavhengighet håndteres eksplisitt (ufravikelig, fra analysens §0/§8).**
> Samfunnsodontologi er **nesten bildeuavhengig** (kun studentens egne økonomi­
> skisser). Pedodonti og oral protetikk er **høyt bildeavhengige** (klinisk foto +
> røntgen/panoramarøntgen er selve diagnosegrunnlaget). Boka løser dette
> **uten opphavsrettsbeskyttede bilder**: bildeavhengige kasus bygges på **presise
> tekstbeskrivelser av funn/kasuistikk** (frembruddsstatus, opasitetsmønster,
> resorpsjonstype, lommedybder, panorama-funn beskrevet i ord) — nyskrevet, aldri
> gjengitt fra arkivet. Der en sjanger genuint krever at studenten *leser* et
> ekte bilde (tann-ID på røntgen, «beskriv dette fotoet»), merkes det ÆRLIG i
> kapitlet med en `warning`: boka trener resonnementet fra en tekstbeskrivelse,
> og leseren oppfordres til å øve mot ekte foto/røntgen i klinikk/atlas. Én
> valgfri, ikke-kvotebærende SVG (skjematisk tannkart / frembruddstidslinje /
> økonomifigur — egne strektegninger, ingen kliniske foto) kan wires der den
> hjelper.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `od5200` |
| Tittel | **OD5200 Samfunnsodontologi, pedodonti og oral protetikk (UiO) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | UiO (Det odontologiske fakultet). Visningsnavn i `institusjoner.ts`: «OD5200 Samfunnsodontologi, pedodonti og oral protetikk». |
| Arketype | **Hybrid (dokumentert) — tre parallelle delbøker.** Primærramme: **fakta/pugg-klinisk** (`DNA-drofting.md` som strukturell base for pedodonti/protetikk-kasusdrøfting), med **jus-DNA** (`DNA-jus.md`) for samfunnsodontologiens helsejus-/HELFO-del og **regnefag-DNA** (`DNA-regnefag.md`) for tannhelseøkonomi-/figurdelen. Hybridvalgene er dokumentert i §2. Nærmeste forbilder: `od2200` (fakta/pugg-klinisk), `med1100` (fakta/pugg-hybrid), `jus1111` (helsejus-metode), `econ1310` (figurdrøfting). |
| Antall kapitler | **34** (Del 0: 2 · samfunnsodontologi Del 1–4: 11 · pedodonti Del 5–8: 11 · oral protetikk Del 9–11: 6 · eksamenstrening Del 12: 4) |
| Estimert totaltid | **~1 815 min ≈ 30 timer** (per kapittel under) |
| Quiz totalt | **506** (krav ≥500; per-kapittel-sum, ingen justering) |
| Flashcards totalt | **534** (rå per-kapittel-sum 466 + kvotegulv-justering 68; jus-vilkårslister + takstregler + kliniske fakta → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** OD5200 avsluttes IKKE med én eksamen, men med **tre
separate skriftlige deleksamener** — samfunnsodontologi (~2 t), pedodonti (~4 t)
og oral protetikk (~4 t) — alle vurdert **bestått/ikke bestått** (A–F for V2026,
overgang til bestått/ikke-bestått fra V2027 *(verifiser)*), pluss en praktisk-
klinisk prøve som ikke ligger i arkivet. De tre har helt ulikt format og fagområde
og behandles som tre nesten uavhengige delbøker med ulik ambisjon. **Samfunns­
odontologi er den klart sterkeste, mest puggbare og nesten bildeuavhengige
delen:** ren fritekst, fast todeling **Del A jus/HELFO (~30 %)** + **Del B marked/
økonomi/epidemiologi (~70 %)**, med gjengangere som er nesten sikre: unntak fra
taushetsplikt, HELFO-takst 101/501, tannhelsetjenesteloven § 1-3, refusjons­
begreper, markeds-/egenandelsfigur og «adverse selection». **Pedodonti** er
kasus- og bildeavhengig: ~20 flervalg (traumer, farmakologi, jus/etikk, MIH) +
tre kliniske kasus (diagnose → aldersanslag → behandlingsplan) med et eksplisitt
etikk-innslag (SME-refleksjon). **Oral protetikk** er ett gjennomgående
pasientkasus (11 delspørsmål: diagnose → behandlingsplan → rehabiliterings­
alternativer → TMD → HELFO), lavest prioritert for selvstudiebok. Boka er bygd
baklengs fra det sensor faktisk premierer: **presis jus** (riktig paragraf +
fullstendig oppramsing), **fullstendig økonomifigur** (riktig kurveretning +
skravert kostnadsareal), **begrunnet diagnose forankret i funn**, og **helhetlig
klinisk resonnement uten sekvensfeil**.

**Kritisk plattformbetingelse — tekstbeskrivelse i stedet for kliniske bilder
(gjelder pedodonti og protetikk):** Faget er visuelt (foto + røntgen), men boka
kan og skal **ikke** bruke opphavsrettsbeskyttede kliniske bilder. Alle kasus
bygges på **nyskrevne, presise tekstbeskrivelser av funn** — f.eks. «tann 21:
velavgrenset gulhvit opasitet på hele kronen, isende ved luftblås, ingen
kavitering» eller «panorama: horisontalt bentap 4–5 mm regio 16–14,
periapikal oppklaring apikalt 26». Denne beskrivelses­notasjonen er broen mellom
en bildeeksamen og en tekstplattform og brukes konsekvent. Der eksamen genuint
krever bildelesing (tann-ID på røntgen), sier kapitlet det ÆRLIG (se
bildeavhengighets-avsnittet over).

**Kritisk verifiseringsregel (gjelder HELE samfunnsodontologi-delen):** ALLE
konkrete lovparagrafer, HELFO-takster, satser, tidskrav (30 min, 14 ganger/år)
og kronebeløp (NPE-grense ~10 000 kr) merkes `(verifiser mot gjeldende
regelverk)` og speiler oppgavens år. De skal kontrolleres mot gjeldende regelverk
i byggefasen. Det ER lov å lære prinsippene (hva en takst forutsetter, hvordan
refusjonsbegrepene henger sammen); det er de eksakte tallene og gruppeinndelingene
som er ferskvare.

---

## 2. Makrostruktur

Rekkefølgen følger de tre deleksamenene i synkende byggeverdighet (analysens §7):
samfunnsodontologi først (sterkest, mest quiz/flashcard-bærende), så pedodonti, så
protetikk (lavest). Innen hver delbok styrer faglig avhengighet rekkefølgen (jus/
begrepsapparat før anvendelse; grunnleggende traumeprotokoll før kasusdrill;
diagnose før behandlingsplan). Frekvensen styrer *omfanget*: de nesten sikre
gjengangerne får flest kapitler og høyest kvote; lavfrekvent stoff (epidemiologi,
spektroskopi-analoge fotnoter) får kompakte kapitler.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | perfekt (meta) | Tre-eksamens-strukturen, bestått/ikke-bestått-formen, verifiseringsforbeholdet (lov/takst = ferskvare), bildeavhengigheten og bokas notasjon (tekstbeskrivelse av funn + figurdrøfting) må etableres FØR fagstoffet. |
| 1 | Samfunnsodontologi: helsejus | 4 | perfekt (Del A, ~30 %) | Taushetsplikt+unntak (3/3), § 1-3 (3/3), journalføring/innsyn (2/3), samtykke (2/3), klage-/erstatningsapparat (2/3). Ren fritekst, puggbar, jus-DNA-drill. Den sikreste delen av hele boka. |
| 2 | Samfunnsodontologi: HELFO og refusjon | 2 | perfekt (Del A, ~30 %) | HELFO-takst 101/501 (3/3), refusjonsbegreper (2/3), stønadspunkt periodontitt, § 5-6 sjeldne tilstander. Tallpresisjon + `(verifiser)`. |
| 3 | Samfunnsodontologi: tannhelseøkonomi og marked | 4 | perfekt (Del B, ~50 %) | Frikonkurransemarkedet + figur (2/3), egenandeler + trygdekostnad (2/3), adverse selection/forsikring (signaturtema), sviktende konkurranse, tannlegetetthet. Figurdrøfting = regnefag-DNA. Den tyngste delen (poeng). |
| 4 | Samfunnsodontologi: epidemiologi | 1 | kjenne (Del B, lite fast innslag) | Dødsårsaker + trend (1/3). Lite, men fast — ett kompakt kapittel. |
| 5 | Pedodonti: tanntraumer | 3 | perfekt (høy) | Traumer i flere flervalg + kjerne i langsvarskasus. Fraktur/luksasjon/eksartikulasjon, resorpsjon/nekrose, fikseringstid, primær vs. permanent + kasusdrill. |
| 6 | Pedodonti: diagnostikk, utviklingsforstyrrelser og karies | 3 | perfekt (høy) | Funnbeskrivelse + aldersanslag fra frembrudd (kasusmalen), MIH + diff.diagnostikk, karies primære tenner (gradering/ekskavering/pulpotomi) + kasusdrill. |
| 7 | Pedodonti: farmakologi, sedasjon og infeksjon | 2 | kunne (høy for flervalg) | Sedasjon/benzodiazepiner/ASA/faste, kontraindikasjoner, herpes/HSV-1, fluoridtoksisitet. Puggbar flervalgsbank. |
| 8 | Pedodonti: rettsodontologi, jus/etikk og barnevern | 3 | perfekt for etikk (eksplisitt vektet 2023) | Rettsodontologi/ID (2/3), barnevern/meldeplikt (2/3), samtykke 16–18, SME-refleksjonsmodell + etikkdrill. Jus-DNA + drøfting. |
| 9 | Oral protetikk: diagnose og behandlingsplanlegging | 2 | kunne (kjerne i kasuset) | Diagnoser fra anamnese + panorama, behandlingsplanleggingens faser, forbehandling. Kasusstart. |
| 10 | Oral protetikk: rehabiliteringsalternativer | 2 | kunne | Fast bro / implantat / avtakbar (indikasjon/muligheter/begrensninger per kjeve), behandlingsgang inkl. avtrykk. |
| 11 | Oral protetikk: TMD og HELFO ved protetikk | 2 | kunne / kjenne | TMD (definisjon/årsak/behandling), HELFO-refusjon ved protetikk (stønadsrett, forskjeller — uten konkrete beløp `(verifiser)`). |
| 12 | Eksamenstrening | 4 | perfekt (meta) | Sjangerspill (A–L) + tre komplette øvingseksamener: ett samfunnsodontologi-sett, ett pedodonti-sett (flervalg + kasus), ett protetikk-kasus — med bestått-terskel og Sensorblikket. |

Rasjonale: samfunnsodontologi (Del 1–4, 11 kapitler) bærer flest kapitler og
høyest kvote fordi den er tekstbasert, puggbar og nesten bildeuavhengig — den
sikreste bokgevinsten. Pedodonti (Del 5–8, 11 kapitler) er bredt testet men
bildeavhengig; den bygges som flervalgsdrill + kasusresonnement fra
tekstbeskrivelser + etikk. Protetikk (Del 9–11, 6 kapitler) prioriteres lavest
(ett langt integrert kasus gir lite gjenbrukbart drillmateriale) og bygges som
eksempelgjennomganger.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og håndverk |
| 1 | Samfunnsodontologi: helsejus |
| 2 | Samfunnsodontologi: HELFO og refusjon |
| 3 | Samfunnsodontologi: tannhelseøkonomi og marked |
| 4 | Samfunnsodontologi: epidemiologi |
| 5 | Pedodonti: tanntraumer |
| 6 | Pedodonti: diagnostikk, utviklingsforstyrrelser og karies |
| 7 | Pedodonti: farmakologi, sedasjon og infeksjon |
| 8 | Pedodonti: rettsodontologi, jus/etikk og barnevern |
| 9 | Oral protetikk: diagnose og behandlingsplanlegging |
| 10 | Oral protetikk: rehabiliteringsalternativer |
| 11 | Oral protetikk: TMD og HELFO ved protetikk |
| 12 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under)

Samfunnsodontologi: **A** Lovkortsvar (gitt paragraf/situasjon → gjengi innhold
presist, strukturert oppramsing; jus, ~30 %) · **B** HELFO-takstoppgave (når kan
taksten brukes, tidskrav, repetisjon, maks per år; tallpresisjon `(verifiser)`) ·
**C** Økonomisk figurdrøfting (tegn etterspørsel/tilbud → markedslikevekt / effekt
av egenandel / gratis behandling; egen skisse med korrekt kurveretning + skravert
areal) · **D** Forsikringsteori-essay (adverse selection — hele sammenbruddsspiralen)
· **E** Epidemiologi-kortsvar (ranger dødsårsaker + trend). Pedodonti: **F**
Flervalg (velg ett / velg flere / rangér / sant-usant — traume, farmakologi, jus,
virologi) · **G** Klinisk langsvarskasus (beskriv funn → diagnose → aldersanslag
m/begrunnelse → prognose → behandling kort/lang sikt; bildeavhengig, tekst­
beskrevet) · **H** Kortsvarskasus (samme kjede komprimert; ofte akuttpasient) ·
**I** Etisk refleksjonsoppgave (identifiser *etisk* problem, anvend SME-modellen).
Protetikk: **J** Sekvensielt pasientkasus (11 delspørsmål, rød tråd fra diagnose
til refusjon) · **K** Behandlingsgang-beskrivelse (trinnvis klinisk arbeidsgang,
respekter avgrensninger som «beskriv ikke kirurgi») · **L** Muligheter/
begrensninger-drøfting (vei rehabiliteringsalternativer opp mot hverandre per
kjeve).

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** samfunnsodontologi- og pedodonti-fasitene er stikkords-/
> momentbaserte sensorveiledninger («berør følgende punkter»), ikke modellsvar;
> protetikk-veiledning foreligger kun for ett kasus. Der sensorpremisser er
> sluttet indirekte, er de merket `(verifiser)`.

1. **Presisjon i jus (samfunn):** riktig paragraf/takst og FULLSTENDIG oppramsing
   av lovbestemte elementer (alle fem taushetsplikt-unntak; alt takst 501
   forutsetter). Fasiten er en punktliste — momentene må dekkes.
2. **Figur kreves i økonomidelen (samfunn):** flere fasiter sier «besvares enklest
   med figurer»; full uttelling forutsetter korrekt kurveretning OG at riktig
   areal (trygdens kostnad / skravert atferdsendring) identifiseres.
3. **Fullstendig resonnementskjede i forsikringsteori (samfunn):** hele spiralen
   (lavrisiko faller ut → premie ↑ → nye faller ut → sammenbrudd) må vises — ikke
   bare nevne «adverse selection».
4. **Tallpresisjon der oppgaven ber om det** (beløp, andeler, tidskrav) — men
   `(verifiser)` mot gjeldende år.
5. **Sammenhengende tekst, ikke stikkord (pedodonti):** veiledningen sier
   eksplisitt at studenten skal skrive «sammenhengende tekst» og vise at gitte
   opplysninger har betydning for funn/diagnose. Forkortelser forklares.
6. **Begrunnelse kreves gjennomgående (pedodonti):** «begrunn svaret» går igjen —
   diagnose, alder og prognose forankres i konkrete funn (frembruddsstatus,
   resorpsjonstype, opasitetsmønster). Behandlingsalternativer tilpasses det
   aktuelle kasuset og forklares, ikke bare listes.
7. **Skille etisk fra faglig (pedodonti):** i refleksjonsoppgaven skal en *etisk*
   (ikke faglig) problemstilling identifiseres og en refleksjonsmodell (SME)
   anvendes.
8. **Helhetlig klinisk resonnement (protetikk):** senere svar bygger på diagnosene
   fra oppgave 1; behandlingsvalg begrunnes i kasusets funn (periodontal status,
   TMD, økonomi). Behandlingsgang korrekt sekvensert og innenfor avgrensningene.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under)

**F1** **Utdatert lovtekst** — særlig tannhelsetjenesteloven § 1-3 (endret 2024);
gammel gruppeinndeling gir feil. · **F2** **Feil/utdaterte takstsatser/beløp**
(takst 501-regler, NPE-grense, kronebeløp — justeres årlig). · **F3**
**Ufullstendig oppramsing** av lovbestemte elementer (glemmer ett taushetsplikt-
unntak eller ett element takst 501 forutsetter). · **F4** **Økonomifigur uten
skravert areal / feil kurveretning** — beskriver med ord uten grafisk å vise
trygdens kostnadskomponenter. · **F5** **Forveksler refusjonstakst/honorartakst/
egenandel/mellomlegg.** · **F6** **Stopper forsikringsresonnementet** ved «adverse
selection» uten å vise sammenbruddsspiralen. · **F7** **Diagnose uten begrunnelse
i funn** (oppgir «MIH» uten opasitetsmønster/symmetri/ising). · **F8** **Feil
aldersanslag** ved ikke å lese frembruddsstatus systematisk. · **F9** **Forveksler
erstatningsresorpsjon** (irreversibel, endodonti hjelper ikke) med behandlbar
patologi → feil prognose; feil traumeprotokoll (fikseringstid, primær vs.
permanent, førstehjelp ved eksartikulasjon). · **F10** **Sedasjonsfeil** (overser
faste/ASA, gir sedasjon til kontraindisert pasient). · **F11** **Blander faglig og
etisk problemstilling** i refleksjonsoppgaven; stikkordssvar uten sammenhengende
tekst. · **F12** **Manglende rød tråd i protetikk** — behandlingsvalg som ikke
henger sammen med de stilte diagnosene; overser forbehandlingsbehov (periodonti/
karies) eller TMD-komponenten; ufullstendig/feil sekvensert behandlingsgang.

### Arketypetilpasning (dokumenterte hybridvalg og avvik)

1. **Tre delbøker med ulik arketype under én bok.** OD5200 er ikke ett fag med én
   eksamensform, men tre. Samfunnsodontologi-jus (Del 1–2) følger **jus-DNA**
   (regel med hjemmel → subsumsjonseksempel → mini-kortsvar; vilkårslister som
   flashcard-kilde). Tannhelseøkonomi (Del 3) følger **regnefag-DNA** (modell/
   figur → gjennomgått figurdrøfting → figuroppgave; figurkrav = SVG). Pedodonti
   (Del 5–7) og protetikk (Del 9–11) følger **fakta/pugg-klinisk-strukturen** (fra
   drøfting-DNAs temakapittel-mal, tilpasset klinikk): klinisk regel/faktabit →
   kasus-illustrasjon (tekstbeskrevet funn) → diagnose-/behandlingsoppgave.
   Etikk-kapitlet (8.3) og protetikk-drøftingene (10–11) låner drøfting-DNAs
   selvrettingsrubrikk. Alle løkker følger Teori→Eksempel→Oppgave-kontrakten.
2. **«Symbol- og formelliste» → arketype-riktig oppslag per delkapittel.** README-
   kravet om et `collapsible` rett etter Forkunnskaper omtolkes per del: jus-
   kapitlene får **«Paragraf- og takstregister»** (lov/takst → én linjes innhold →
   `(verifiser)`), økonomikapitlene får **«Symbol- og formelliste»** (etterspørsel/
   tilbud, likevekt, egenandel — `p`, `q`, MK), pedodonti-/protetikk-kapitlene får
   **«Faktakontrakt-oppslag»** (traumetyper ↔ håndtering; frembruddsalder ↔ tann;
   ASA-klasser; MIH-kriterier; behandlingsalternativer ↔ indikasjon).
3. **Figurkrav for økonomidelen (regnefag-DNA, UFRAVIKELIG).** Del 3s figur­
   drøfting SKAL ha statiske SVG-figurer (utgangslikevekt + hvert skift/skravert
   areal som drilles: etterspørsel/tilbud/likevekt, egenandelseffekt, gratis
   behandling → trygdekostnad). Egne strektegninger — ALDRI kliniske foto. Filer
   `public/images/textbook/od5200/<navn>.svg`; kjør
   `npx tsx scripts/upload-media-storage.ts` etter skriving (ellers 404 i prod).
4. **Flashcards jus-/faktatunge (534).** Faget premierer vilkårslister, takstregler
   og kliniske fakta som skal sitte: **taushetsplikt-unntakene**, **takst 101/501-
   reglene**, **§ 1-3-gruppene** `(verifiser)`, **refusjonsbegrepene**, **traume­
   protokoll ↔ håndtering**, **frembruddsalder ↔ tann**, **MIH-kriteriene**,
   **ASA-klasser + fasteregler**, **SME-trinnene**, **TMD-definisjon/behandling**,
   **rehabiliteringsalternativ ↔ indikasjon**. **Quiz-profilen** driller nabobegrep-
   distraktorer (refusjonstakst/honorartakst/egenandel/mellomlegg; enantiomer-
   analogt: erstatnings- vs. betennelsesresorpsjon; MIH vs. amelogenesis
   imperfecta; SN1/SN2-analogt: opplysningsrett vs. opplysningsplikt vs.
   meldeplikt). Alle takst-/beløp-distraktorer er `(verifiser)`-forankret så en
   utdatert sats ikke smugles inn som «riktig».
5. **Bildeavhengighet håndtert eksplisitt og ærlig (analysens §0/§8).** Pedodonti-/
   protetikk-kasus bygges på nyskrevne tekstbeskrivelser av funn (se §1). Der
   sjangeren genuint krever bildelesing (tann-ID på røntgen, «beskriv fotoet»),
   varsler kapitlet det med en `warning` og trener resonnementet fra
   tekstbeskrivelsen. Ingen opphavsrettsbeskyttede bilder brukes.
6. **Ingen oppdiktede kilder, satser eller diagnoser.** Usikre paragrafer,
   takstsatser, beløp, medisinske grenser og sensorpremisser merkes `(verifiser)`.
   Modellbesvarelser er NYSKREVNE (analysens §6), aldri «ekte» studentsvar; de
   merkes ærlig etter nivå (bestått-på-marginen / midt / topp), og siden eksamen
   er bestått/ikke-bestått rammes «A-språk» inn som bilde på kvalitet, ikke som
   karakter (jf. README «Karakter-realisme», jus-DNA).
7. **Karaktersjargong tilpasset bestått/ikke-bestått.** Del 0 sier eksplisitt at
   alle tre deleksamener er bestått/ikke-bestått (A–F kun V2026 `(verifiser)`).
   Modellbesvarelsene har minst én **«bestått-på-marginen»**-besvarelse per
   deleksamen (terskelen nedenfra), ikke bare polerte toppsvar.

**Avvik fra prompt-ordningen (dokumentert):** Prompt-strukturen behandler OD5200
som ett fag. Det er lagt inn som tre delbøker (Del 1–4 / 5–8 / 9–11) med hver sin
øvingseksamen fordi de tre deleksamenene er separate bestått/ikke-bestått-prøver
med helt ulik form. Epidemiologi (analysens tynne, men faste innslag) er skilt ut
som eget kompakt Del 4-kapittel i stedet for å bakes inn i økonomidelen, fordi det
er en egen sjanger (E). Etikk-refleksjon (I) er lagt i pedodontiens Del 8 sammen
med rettsodontologi/jus fordi den eksplisitt var vektet oppgave i 2023 og deler
jus-/etikk-metoden.

### Kapittel-DNA A — jus/regel-kapittel (Del 1, 2, 8-jus)

1. `tip` **Eksamensvinkel** — frekvens/vekt, sjangre (A/B/F/I), hva sensor ser
   etter. Fylles fra Eksamensbelegg — forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** + kryssbok-lenker, etterfulgt av `collapsible`
   **Paragraf- og takstregister** (lov/takst → én linjes innhold → `(verifiser)`).
3. `text` **Plassering** — hvor regelsettet hører hjemme, hvilke situasjoner det
   regulerer (kort, gjerne med hverdagsanker: en pasient ber om innsyn i journalen).
4. `definition` **Hovedregelen/taksten** — presist omskrevet med paragraf-/takst-
   henvisning `(verifiser)`. **Toppnivå med `title` — flashcard-kilden.**
5. `text` **Vilkårene/elementene ett for ett** — hvert med innhold og terskel; for
   takster: tidskrav, repetisjon, maks per år `(verifiser)`.
6. `example` × 2–3 **Subsumsjons-/kortsvarseksempel** — kort situasjon → presist
   lovsvar (paragraf + strukturert oppramsing) slik en sterk besvarelse gjør det.
7. `warning` **Typiske feil** — F1–F3/F5 + «riktig svar uten fullstendig
   oppramsing = redusert uttelling».
8. `exercise` × 4–8 INLINE — mini-kortsvar (gitt situasjon → hvilken paragraf/takst
   + hvilke elementer), stigende til eksamensnivå. Alle med `solution` + `hints`
   (første hint = riktig paragraf/takst, aldri konklusjonen).
9. `collapsible` **Repetisjon** — 4–6 kontrollpunkter.

### Kapittel-DNA B — økonomi/figur-kapittel (Del 3)

Følger regnefag-DNA: `tip` Eksamensvinkel → `text` Forkunnskaper + `collapsible`
Symbol- og formelliste → `text` Motivasjon (hverdagsanker) → `definition`/`text`
modellen (etterspørsel/tilbud/likevekt) med SVG-figur → `text` figurdrøftings­
prosedyre (algoritmisk: identifiser kurve → retning → nytt likevektspunkt →
skraver areal → mekanisme i ord) → `warning` (F4/F6) → `example` × 2–4 gjennomgått
figurdrøfting med figur → `exercise` × 6–12 INLINE figuroppgaver + kald bank.

### Kapittel-DNA C — klinisk kasus-/faktakapittel (Del 5–7, 9–11)

1. `tip` **Eksamensvinkel** — frekvens/vekt, sjangre (F/G/H/J/K/L), hva sensor ser
   etter (begrunnelse, sammenhengende tekst).
2. `text` **Forkunnskaper** + kryssbok-lenker + `collapsible` **Faktakontrakt-
   oppslag** (traumetyper ↔ håndtering; frembruddsalder ↔ tann; ASA-klasser;
   rehabiliteringsalternativ ↔ indikasjon — «må sitte»).
3. `text` **Klinisk oversikt** — kort: hva temaet tester, gjerne rammet i et
   nyskrevet kasus (hverdagsanker: en 8-åring med isende fortenner).
4. `definition` **Faktakontrakt** — kjernebegreper, diagnosekriterier, regler.
   **Toppnivå med `title` — flashcard-kilden.**
5. `text` **Diagnose-/behandlingsprosedyre** — algoritmisk «slik leser du funnene
   → stiller diagnose → begrunner → velger behandling», avsluttet med
   begrunnelsesmalen (koble funn → diagnose → prognose → tiltak).
6. `warning` **Typiske feil** — F7–F12 + `warning` om bildeavhengighet der
   relevant (boka trener fra tekstbeskrivelse; øv mot ekte foto/røntgen).
7. `example` × 2–4 **Modellkasus** — første enkelt, siste på eksamensnivå (sjanger
   G/H/J): funnbeskrivelse i tekst → diagnose m/begrunnelse → aldersanslag →
   behandlingsplan kort/lang sikt, i sammenhengende tekst.
8. `exercise` × 6–10 INLINE — kasusvarianter med endrede funn, stigende. Alle med
   `solution` (sammenhengende tekst) + `hints`. Merket med sjangerkode.
9. `collapsible` **Repetisjon** — 4–6 kontrollpunkter.

### Kapittel-DNA D — etikk-/drøftingskapittel (8.3)

Følger drøfting-DNA: SME-modellen som håndverk (identifiser etisk vs. faglig
problem → berørte parter → verdier → handlingsalternativer → begrunnet landing),
med binær selvrettingsrubrikk (☐ etisk problem identifisert? ☐ skilt fra det
faglige? ☐ berørte parter? ☐ verdier navngitt? ☐ handlingsalternativer veid?
☐ begrunnet landing?), gjennomskrevet modell-refleksjon og nyskrevne dilemma-
oppgaver med momentliste-fasit.

### Kapittel-DNA E — øvingseksamen (12.2–12.4)

Komplett nyskrevet sett i respektiv deleksamens mal (samfunnsodontologi: Del A jus
+ Del B figur; pedodonti: ~20 flervalg + kasus; protetikk: ett 11-delers kasus),
løsning per oppgave i `collapsible` (modellsvar + `(verifiser)`-merking av
satser), `tip` **Sensorblikket** (bestått-terskel + momentliste). Minst én
«bestått-på-marginen»-besvarelse.

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt («X/3 sittinger» per delfag,
> telte belegg fra analysen) + sjangerkoder (A–L) + prioritetsklasse
> (perfekt/kunne/kjenne/grunnlag/meta). **Faktakontrakt** = begreper/regler som
> SKAL med (flashcard-kilden). **Kvote** = quiz/flashcards. Alle satser/paragrafer
> er `(verifiser mot gjeldende regelverk)`. Kryssbok-lenker peker på eksisterende
> jus-/helse-/økonomi-kapitler (`(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og håndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes OD5200
**id:** `od5200-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** De tre separate skriftlige deleksamenene (samfunnsodontologi ~2 t,
  pedodonti ~4 t, oral protetikk ~4 t), bestått/ikke-bestått-formen, temafrekvensene
  per delfag, sensorkravene, verifiseringsforbeholdet (lov/takst = ferskvare) og
  bildeavhengigheten — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2022–2025). Skal formidle: (a)
  **de tre eksamenene** som separate bestått/ikke-bestått-prøver (A–F kun V2026
  `(verifiser)`) + praktisk-klinisk prøve utenfor arkivet; (b) **formene** —
  samfunn: Del A jus (~30 %) + Del B marked/økonomi/epidemiologi (~70 %), ren
  fritekst; pedodonti: ~20 flervalg (20 %) + langsvarskasus (40 %) + to kortsvars­
  kasus (2×20 %); protetikk: ett kasus, 11 oppgaver, 100 p; (c) **de nesten sikre
  gjengangerne** per delfag (fra analysen §2/§7); (d) **sensorkravene** (§2); (e)
  **verifiseringsforbeholdet** — alle satser/paragrafer/beløp er ferskvare, merket
  `(verifiser)`; (f) **bildeavhengigheten** — samfunn nesten bildefri, pedodonti/
  protetikk bygd på tekstbeskrevne funn (henvis til 0.2). Prioritet: perfekt (meta).
- **Innholdskontrakt:** Sjangerkatalogen A–L som studentens sjekkliste med frekvens
  per sjanger og deleksamen; prognosen for neste sett (samfunn: taushetsplikt +
  én HELFO-takst + § 1-3 + refusjonsbegreper + markeds-/egenandelsfigur + adverse
  selection; pedodonti: traume m/resorpsjon + MIH + karies primær + aldersanslag +
  sedasjon + jus-/rettsodontologi-flervalg; protetikk: diagnose fra panorama →
  faseplan → fast/implantat/avtakbar → TMD → HELFO). **Del 0-pakken (README):**
  «Slik leser du denne boka»-boks (`text`/`tip`, forklarer bestått/ikke-bestått,
  sjangerkodene, at feil har register); «Lite tid?»-boks (hurtigrute 3–5 dager +
  10–12-ukers deltidsrute, gjøre- vs. lese-tid ×1,5); kildenote (arkivet 2022–2025,
  14 filer, hvilke deleksamener/år, forbehold om nye sett — fra EKSAMENSANALYSE §8);
  prosedyre-/sjangerkort på ÉN side (sjanger → én linjes oppskrift → tidsbudsjett →
  vanligste feil). Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** 3–4 refleksjonsoppgaver: «gitt en 2-timers samfunns-mal med
  Del A + Del B — sett opp tidsbudsjett»; «avgjør av en oppgavetekst om den krever
  paragrafhenvisning (A), figur (C) eller kasusresonnement (G)».
- **Typiske feil:** Metafeilene: bruke utdatert lov/takst (F1/F2 — les
  verifiseringsforbeholdet); beskrive figuren i ord uten å tegne (F4); stikkordssvar
  i pedodonti (F11); tro at ett sett er hele bildet (les kildenoten).
- **Kvote:** 12 quiz / 12 flashcards (de tre formene, gjengangerne, sensorkravene,
  sjangerkodene, verifiseringsforbeholdet, bildeavhengigheten).

#### Kapittel 0.2: Håndverket — lovsvar, figurdrøfting og funnbeskrivelse
**id:** `od5200-0-2` · **number:** 0.2 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-0-1`

- **Kapitteltype:** håndverkskapittel (meta — de tre svarhåndverkene + notasjon).
- **Description:** De tre ferdighetene som gir poeng på tvers av eksamenene: å
  skrive et **presist lovsvar** (paragraf + fullstendig oppramsing), å **tegne og
  drøfte en økonomifigur** (kurveretning + skravert areal), og å **beskrive
  kliniske funn i tekst** og bygge diagnose → begrunnelse → tiltak. Etablerer bokas
  notasjon (SVG-figurer for økonomi; tekstbeskrivelse av funn for klinikk).
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 5, 6 på tvers av alle
  sjangre). Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1; [Slik leser du en lovhenvisning](/bok/jus1111/jus1111-0-2)
  `(verifiser lenke)`, [Marked og likevekt](/bok/econ1310/econ1310-1-1) `(verifiser lenke)`.
  `collapsible` **Oppslag:** «jf.» = jamfør; «§ 1-3 (2)» = annet ledd; figur­
  konvensjonene (fallende etterspørsel, stigende tilbud, likevekt der de krysser);
  funnbeskrivelses-notasjonen (tann-FDI, funn, symptom).
- **Faktakontrakt (flashcard-kilde):** **Lovsvarsmalen** (paragraf `(verifiser)` →
  strukturert oppramsing av alle lovbestemte elementer → kort subsumsjon); **figur­
  malen** (akser, kurveretning, likevekt, skravert areal = trygdens kostnad/
  atferdsendring); **FDI-tannnummerering** (kvadrant 1–4 permanent, 5–8 primær; 21
  = venstre sentrale overkjeveincisiv, 84 = venstre 1. primære molar underkjeve);
  **funnbeskrivelses-malen** (tann → klinisk funn → røntgenfunn → symptom → varighet);
  **begrunnelsesmalen** (funn → diagnose → prognose → tiltak).
- **Tegne-/løsningsprosedyre:** (1) jus: finn hjemmel, ramp opp ALLE elementer,
  subsumér kort; (2) økonomi: tegn utgangslikevekt, identifiser skift, skraver
  arealet, forklar mekanismen i ord; (3) klinikk: les funnene systematisk, koble
  hvert funn til diagnosen, begrunn alder/prognose, skriv sammenhengende.
- **Typiske feil:** F3 (ufullstendig oppramsing), F4 (figur uten skravert areal),
  F7 (diagnose uten funnforankring), F11 (stikkord i stedet for sammenhengende
  tekst). `warning` **Bildeavhengighet:** boka trener kliniske funn fra tekst­
  beskrivelser — øv i tillegg mot ekte foto/røntgen (klinikk/atlas).
- **Modellsvar:** «Skriv et fullstendig lovsvar på 'når kan takst 501 brukes'
  `(verifiser)`»; «Tegn (beskriv SVG-en) og drøft effekten av økt egenandel på
  trygdens kostnad»; «Beskriv funnene på tann 21 og bygg en MIH-diagnose med
  begrunnelse».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av øvingseksamenene i Del 12).

### Del 1 — Samfunnsodontologi: helsejus *(prioritet: PERFEKT — Del A, ~30 %)*

#### Kapittel 1.1: Taushetsplikt og unntakene fra den
**id:** `od5200-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** jus/regelkapittel (perfekt).
- **Description:** Hovedregelen om taushetsplikt og de fem unntakene (samtykke,
  anonymitet, opplysningsrett, opplysningsplikt, meldeplikt) — den sikreste
  gjengangeren i hele Del A.
- **Eksamensbelegg:** **3/3 sittinger** (samfunn). Sjanger A. Full oppramsing av
  unntakene forventes; forveksling opplysningsrett/-plikt/meldeplikt straffes.
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Taushetsplikt i helseretten](/bok/jus1111/jus1111-1-1)
  `(verifiser lenke)`. `collapsible` **Paragraf- og takstregister:** helsepersonell­
  loven § 21 flg. → taushetsplikt + unntakene `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **taushetsplikt** (hovedregel, hvem/hva);
  de **fem unntakene** hver for seg (samtykke; anonymitet; opplysningsrett;
  opplysningsplikt; meldeplikt) med skillet rett (kan) vs. plikt (skal); hvem
  opplysninger kan gis til `(verifiser paragrafer)`.
- **Typiske feil:** F3 (glemmer ett unntak); F5-analogt (forveksler opplysningsrett/
  -plikt/meldeplikt); svar uten paragrafhenvisning.
- **Modellsvar:** «En pårørende ber om opplysninger om en voksen pasient — gjør
  rede for taushetsplikten og når du likevel kan/må gi opplysninger» (full
  oppramsing + subsumsjon).
- **Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 1.2: Tannhelsetjenesteloven § 1-3 og Den offentlige tannhelsetjenesten
**id:** `od5200-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-1-1`

- **Kapitteltype:** jus/regelkapittel (perfekt).
- **Description:** Hvilke grupper som har rettigheter i Den offentlige tann­
  helsetjenesten (DOT) etter tannhelsetjenesteloven § 1-3, og hvordan endringen i
  2024 flyttet gruppeinndelingen — en høyrisiko-ferskvare.
- **Eksamensbelegg:** **3/3 sittinger** (samfunn). Sjanger A. § 1-3 er nesten sikker.
  **HØYRISIKO `(verifiser)`:** loven ble endret 2024 — gammel gruppeinndeling gir
  feil (F1). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Paragraf- og takstregister:**
  tannhelsetjenesteloven § 1-3 → gruppene A–E `(verifiser mot gjeldende lovtekst —
  endret 2024)`.
- **Faktakontrakt (flashcard-kilde):** **gruppene i § 1-3** `(verifiser)` (barn/
  ungdom 0–18/20; psykisk utviklingshemmede; eldre/uføre/kronisk syke i institusjon/
  hjemmesykepleie m.fl.); prinsippet om prioriterte grupper; **lovhistorikken kort**
  (endret 2024 — poenget først: hva DU må vite er gjeldende gruppeinndeling).
- **Typiske feil:** **F1 (utdatert lovtekst — den viktigste her)**; ufullstendig
  gruppeliste (F3); blande DOT-rettigheter med HELFO-refusjon.
- **Modellsvar:** «Hvilke pasientgrupper har rett til tannhelsehjelp i DOT etter
  gjeldende § 1-3? `(verifiser)`» (poeng-først lovhistorikk + gjeldende liste).
- **Kvote:** 18 quiz / 18 flashcards.

#### Kapittel 1.3: Journalføring, innsyn og samtykke
**id:** `od5200-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-1-1`

- **Kapitteltype:** jus/regelkapittel (perfekt/kunne).
- **Description:** Hva journalen skal inneholde, pasientens innsynsrett/-plikt, og
  samtykkealder i helselovgivningen (hovedregel 16 år, foreldreinformasjon 16–18).
- **Eksamensbelegg:** Journalføring **2/3**, samtykke **2/3**. Sjanger A. Prioritet:
  perfekt (journal) / kunne (samtykkedetaljer).
- **Forkunnskaper/kryssbok:** kap. 1.1; [Pasient- og brukerrettigheter](/bok/jus1111/jus1111-1-2)
  `(verifiser lenke)`. `collapsible` **Paragraf- og takstregister:** journalens
  innhold + innsyn (pasient- og brukerrettighetsloven vs. helsepersonelloven);
  samtykkealder § 3-4 tredje ledd `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **journalens innhold** (hva som SKAL
  føres `(verifiser)`); **innsynsrett/-plikt**; **samtykkealder** (hovedregel 16 år;
  foreldre kan informeres for 16–18-åringer `(verifiser paragraf)`); forskjellen
  pasient- og brukerrettighetsloven vs. helsepersonelloven.
- **Typiske feil:** F3 (ufullstendig journalinnhold); feil samtykkealder eller feil
  paragraf; blande innsynsrett (pasient) med utleveringsplikt.
- **Modellsvar:** «En 17-åring vil ikke at foreldrene skal informeres om en
  behandling — hva sier reglene? `(verifiser)`».
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 1.4: Klage-, erstatnings- og tilsynsapparatet
**id:** `od5200-1-4` · **number:** 1.4 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-1-1`

- **Kapitteltype:** jus/regelkapittel (perfekt/kunne).
- **Description:** Hvor pasienten klager og søker erstatning: NPE (nedre tapsgrense
  ~10 000 kr `(verifiser)`), NTFs klagenemnder, NTFs råd for tannlegeetikk,
  Statsforvalteren/Statens helsetilsyn, Forbrukertilsynet — og NPE/ansvars­
  forsikring for privatpraktiserende.
- **Eksamensbelegg:** Klage-/erstatningsorganer **2/3**, NPE/ansvarsforsikring
  **1/3**. Sjanger A. Prioritet: kunne (perfekt for NPE-hovedtrekk).
- **Forkunnskaper/kryssbok:** kap. 1.1. `collapsible` **Paragraf- og takstregister:**
  NPE (nedre grense `(verifiser beløp)`), NTFs organer, Statsforvalteren/
  Helsetilsynet, Forbrukertilsynet.
- **Faktakontrakt (flashcard-kilde):** **NPE** (rolle, nedre tapsgrense ~10 000 kr
  `(verifiser)`, ansvarsforsikring for privatpraktiserende); **NTFs klagenemnder**
  og **råd for tannlegeetikk**; **Statsforvalteren/Statens helsetilsyn** (tilsyn);
  hvem pasienten går til for hva.
- **Typiske feil:** F2 (utdatert NPE-grense); blande klageorgan med tilsynsorgan;
  glemme ansvarsforsikringskravet.
- **Modellsvar:** «En pasient mener seg feilbehandlet og vil ha erstatning — hvilke
  organer er aktuelle, og hva er NPEs rolle/grense? `(verifiser)`».
- **Kvote:** 12 quiz / 14 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A taushetsplikt + unntak · 1.B § 1-3 + DOT-grupper
`(verifiser)` · 1.C journal/innsyn/samtykke · 1.D samlet Del A-jusprøve på
eksamensnivå). Riktig/galt-fasitene VARIERER (aldri «alle felle»).

### Del 2 — Samfunnsodontologi: HELFO og refusjon *(prioritet: PERFEKT — Del A, ~30 %)*

#### Kapittel 2.1: HELFO-takstene 101 og 501
**id:** `od5200-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** jus/takstkapittel (perfekt).
- **Description:** Takst 101 «opplæring til egenomsorg» og takst 501 periodonti­
  behandling — når de kan brukes, tidskrav, repetisjonsregel, maks antall per år —
  den mest tallpresise gjengangeren i Del A.
- **Eksamensbelegg:** **3/3 sittinger** (samfunn). Sjanger B. Krever tallpresisjon
  (30 min, ≥60 min repeteres per 30. min, inntil 14 ganger/år, takst 1/2 per
  kalenderår) — **alle tall `(verifiser mot gjeldende takstplakat)`**. Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Paragraf- og takstregister:**
  takst 101 (tidsforbruk, repetisjonskrav) + takst 501 (min. 30 min; 30–59 min =
  én gang; ≥60 min = repeteres per 30. min; inntil 14 ganger/år) `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **takst 101** (opplæring til egenomsorg og
  forebyggende behandling — vilkår `(verifiser)`); **takst 501** (periodonti­
  behandling — minste tidsforbruk, repetisjonsregel, maks per år `(verifiser)`);
  systematisk vs. rutinemessig behandling; når taksten IKKE kan brukes.
- **Typiske feil:** **F2 (utdaterte takstregler — den viktigste her)**; F3 (glemmer
  ett vilkår takst 501 forutsetter); blande takst 101 og 501.
- **Modellsvar:** «Når kan takst 501 brukes, og hvor mange ganger per år?
  `(verifiser)`» (fullstendig vilkårsoppramsing).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 2.2: Refusjonsbegreper og stønad ved periodontitt / sjeldne tilstander
**id:** `od5200-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-2-1`

- **Kapitteltype:** jus/takstkapittel (perfekt/kunne).
- **Description:** Refusjonstakst/honorartakst/egenandel/mellomlegg presist skilt,
  stønadspunkt periodontitt (folketrygdloven §§ 5-6/5-6a), og § 5-6 sjeldne
  medisinske tilstander (SMT-listen, TAKO-senteret).
- **Eksamensbelegg:** Refusjonsbegreper **2/3**, stønad periodontitt / sjeldne
  tilstander **1–2/3**. Sjanger A/B. Prioritet: perfekt (refusjonsbegreper) / kunne.
- **Forkunnskaper/kryssbok:** kap. 2.1. `collapsible` **Paragraf- og takstregister:**
  refusjonsbegrepene; folketrygdloven §§ 5-6/5-6a periodontitt; § 5-6 SMT
  `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **refusjonstakst** (laveste), **honorartakst**
  (høyeste), **egenandel** (differansen), **mellomlegg** (honorar − refusjon) —
  skilt presist; **stønadspunkt periodontitt** (systematisk behandling for
  infeksjonskontroll; ikke stønad til rutinemessig tannrens/gingivitt); **§ 5-6
  sjeldne tilstander** (medfødte diagnoser ≤ 1:10 000, SMT-listen, TAKO-senteret)
  `(verifiser)`.
- **Typiske feil:** **F5 (forveksler refusjonstakst/honorartakst/egenandel/
  mellomlegg — den viktigste her)**; tro at gingivitt/rutinerens gir stønad.
- **Modellsvar:** «Forklar forskjellen på refusjonstakst, honorartakst, egenandel
  og mellomlegg med et regneeksempel `(verifiser satser)`».
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A takst 101/501 + tallpresisjon `(verifiser)` ·
2.B refusjonsbegreper + regneeksempel · 2.C stønad periodontitt/sjeldne tilstander ·
2.D samlet HELFO-prøve på eksamensnivå).

### Del 3 — Samfunnsodontologi: tannhelseøkonomi og marked *(prioritet: PERFEKT — Del B, ~50 %, tyngst i poeng)*

#### Kapittel 3.1: Frikonkurransemarkedet for tannhelse
**id:** `od5200-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** økonomi/figurkapittel (perfekt).
- **Description:** Etterspørsels- og tilbudskurven, markedslikevekt der honorar =
  marginalkostnad, og hvordan figuren tegnes og drøftes — grunnfiguren hele Del B
  bygger på.
- **Eksamensbelegg:** Frikonkurransemarkedet **2/3** med figurdrøfting. Sjanger C.
  Sensor forventer egen skisse med korrekt kurveretning. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2; [Tilbud og etterspørsel](/bok/econ1310/econ1310-1-1)
  `(verifiser lenke)`. `collapsible` **Symbol- og formelliste:** `p` pris/honorar,
  `q` mengde, etterspørsel (fallende), tilbud (stigende), MK marginalkostnad,
  likevekt. SVG: `marked-likevekt.svg`.
- **Faktakontrakt (flashcard-kilde):** **etterspørselskurve** (fallende — marginal
  betalingsvillighet); **tilbudskurve** (stigende — marginalkostnad); **markeds­
  likevekt** (honorar = marginalkostnad i frikonkurranse); hva som skjer ved skift.
- **Figur/prosedyre:** SVG med utgangslikevekt; algoritmisk figurdrøfting (kurve →
  retning → nytt punkt → areal → mekanisme i ord).
- **Typiske feil:** **F4 (figur uten skravert areal / feil kurveretning)**; beskrive
  likevekten i ord uten skisse.
- **Modellsvar:** «Tegn tannhelsemarkedet i frikonkurranse og forklar likevekten»
  (med figurbeskrivelse).
- **Kvote:** 20 quiz / 14 flashcards.

#### Kapittel 3.2: Egenandeler, gratis behandling og trygdens kostnader
**id:** `od5200-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-3-1`

- **Kapitteltype:** økonomi/figurkapittel (perfekt).
- **Description:** Hvordan egenandeler begrenser HELFO-utgifter og hvordan gratis
  behandling øker etterspørselen — med figuren som viser trygdens kostnad som
  skravert areal (den mest premierte figurdrøftingen).
- **Eksamensbelegg:** Egenandeler/trygdekostnad **2/3** med figur. Sjanger C. Full
  uttelling forutsetter korrekt skravert kostnadsareal (sensorkrav 2). Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  egenandel, `q₁` mengde ved gratis behandling, trygdekostnad = dekning +
  atferdsendrings-areal. SVG: `egenandel-effekt.svg`, `gratis-trygdekostnad.svg`.
- **Faktakontrakt (flashcard-kilde):** **egenandelseffekt** (høyere egenandel →
  lavere forbruk → lavere trygdekostnad); **gratis behandling** (etterspørsel til
  q₁ → trygdekostnad = forventet dekning + skravert atferdsendrings-areal);
  moralsk hasard kort.
- **Figur/prosedyre:** to SVG-er (egenandelsskift; gratis → skravert atferds­
  endring); figurdrøftingsprosedyren.
- **Typiske feil:** **F4**; identifisere feil areal som «trygdens kostnad»; glemme
  atferdsendringskomponenten ved gratis behandling.
- **Modellsvar:** «Vis grafisk hvordan innføring av gratis tannbehandling påvirker
  trygdens kostnad, og skraver kostnadskomponentene».
- **Kvote:** 20 quiz / 14 flashcards.

#### Kapittel 3.3: Tannhelseforsikring og adverse selection
**id:** `od5200-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-3-1`

- **Kapitteltype:** økonomi/forsikringskapittel (perfekt — signaturtema).
- **Description:** Hvorfor private tannforsikringer nesten ikke finnes i Norge:
  adverse selection (skjevt utvalg) og hele sammenbruddsspiralen — signaturtemaet
  som fikk hele Del B i 2024.
- **Eksamensbelegg:** Adverse selection **1/3**, men **signaturtema** (hele Del B
  2024). Sjanger D. Sensor krever HELE spiralen, ikke bare begrepet (sensorkrav 3).
  Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 3.1. `collapsible` **Symbol- og formelliste:**
  gjennomsnittspremie, risikogrupper (lav/høy), asymmetrisk informasjon.
- **Faktakontrakt (flashcard-kilde):** **adverse selection / skjevt utvalg**
  (definisjon); **sammenbruddsspiralen** (lavrisiko faller ut ved gjennomsnitts­
  premie → premie ↑ → nye faller ut → ordningen bryter sammen); hvorfor dette
  forklarer fraværet av private tannforsikringer i Norge.
- **Typiske feil:** **F6 (stopper ved «adverse selection» uten spiralen — den
  viktigste her)**; blande adverse selection med moralsk hasard.
- **Modellsvar:** «Forklar hvorfor private tannforsikringer nesten ikke finnes i
  Norge — vis hele resonnementskjeden» (full spiral).
- **Kvote:** 18 quiz / 12 flashcards.

#### Kapittel 3.4: Sviktende konkurranse og tannlegetetthet
**id:** `od5200-3-4` · **number:** 3.4 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-3-1`

- **Kapitteltype:** økonomi/drøftingskapittel (kunne).
- **Description:** Hva som svekker konkurransen i tannhelsemarkedet (asymmetrisk
  informasjon, tilbudsindusert etterspørsel, geografisk konsentrasjon) og hvordan
  tannlegetetthet varierer nasjonalt/nordisk/fylkesvis.
- **Eksamensbelegg:** Sviktende konkurranse **1/3**, tannlegetetthet **1/3**.
  Sjanger C/D. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 3.1, 3.3. `collapsible` **Symbol- og formelliste:**
  asymmetrisk informasjon, tilbudsindusert etterspørsel, tannleger per innbygger.
- **Faktakontrakt (flashcard-kilde):** **sviktende konkurranse** (asymmetrisk
  informasjon, tilbudsindusert etterspørsel, geografisk konsentrasjon → høyere
  pasientkostnad); **tannlegetetthet** (nordisk sammenligning, sentrum–periferi-
  gradient `(verifiser tall)`).
- **Typiske feil:** synsing uten mekanisme; blande sviktende konkurranse med
  adverse selection.
- **Modellsvar:** «Hva svekker konkurransen i tannhelsemarkedet, og hvilken
  konsekvens har det for pasientkostnaden?».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A markedslikevekt-figur · 3.B egenandel/gratis +
skravert trygdekostnad · 3.C adverse selection-spiral · 3.D samlet Del B-økonomiprøve
på eksamensnivå). Kald bank (uten hint) plasseres i Del 12.

### Del 4 — Samfunnsodontologi: epidemiologi *(prioritet: KJENNE — lite, men fast innslag)*

#### Kapittel 4.1: Dødsårsaker og trendutvikling i Norge
**id:** `od5200-4-1` · **number:** 4.1 · **estimatedMinutes:** 40 · **prerequisites:** `od5200-0-1`

- **Kapitteltype:** epidemiologi/faktakapittel (kjenne).
- **Description:** De viktigste dødsårsakene i Norge (kreft, hjerte-kar, demens,
  lungesykdom) og trendutviklingen siste tiår (demens ↑, hjerte-kar/kreft ↓) — det
  lille, men faste epidemiologiske innslaget i Del B.
- **Eksamensbelegg:** Dødsårsaker + trend **1/3** (samfunn, Del B). Sjanger E.
  Prioritet: kjenne. **`(verifiser rekkefølge/tall)`** mot gjeldende SSB/FHI-
  statistikk.
- **Forkunnskaper/kryssbok:** kap. 0.1; [Epidemiologi og folkehelse](/bok/med1100/med1100-1-1)
  `(verifiser lenke)`. `collapsible` **Faktakontrakt-oppslag:** dødsårsaker rangert
  `(verifiser)`; trendretning per årsak.
- **Faktakontrakt (flashcard-kilde):** **de viktigste dødsårsakene** rangert
  `(verifiser)`; **trend siste tiår** (demens ↑, hjerte-kar/kreft ↓); begrepene
  insidens/prevalens/mortalitet kort.
- **Typiske feil:** feil rangering/tall (les `(verifiser)`); forveksle insidens og
  prevalens.
- **Modellsvar:** «Ranger de viktigste dødsårsakene i Norge og beskriv trenden
  siste ti år `(verifiser)`».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A dødsårsaker + rangering `(verifiser)` · 4.B
trendutvikling · 4.C epidemiologiske grunnbegreper · 4.D samlet epidemiologiprøve).
Prøvene er korte (~20 min) — «kan trygt deles over flere kvelder».

### Del 5 — Pedodonti: tanntraumer *(prioritet: PERFEKT — høy)*

#### Kapittel 5.1: Kronefraktur, rotfraktur og fikseringstid
**id:** `od5200-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** klinisk kasus-/faktakapittel (perfekt).
- **Description:** Emalje-/dentinfraktur, komplisert/ukomplisert kronefraktur,
  rotfraktur med fikseringstid (apikal/midtre tredjedel) og skillet primær vs.
  permanent tannsett — kjernen i traumeprotokollen.
- **Eksamensbelegg:** Tanntraumer **høy** (flere flervalg + kjerne i langsvarskasus).
  Sjanger F/G/H. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (FDI-nummerering). `collapsible` **Fakta­
  kontrakt-oppslag:** frakturtype ↔ håndtering; fikseringstid apikal/midtre
  tredjedel; primær vs. permanent.
- **Faktakontrakt (flashcard-kilde):** **emalje-/dentinfraktur**, **komplisert vs.
  ukomplisert kronefraktur** (pulpaeksponering); **rotfraktur** (fikseringstid
  varierer med bruddsted); **fikseringsbue** (skal tillate fysiologisk mobilitet);
  primær vs. permanent tannsett-forskjeller i håndtering.
- **Typiske feil:** **F9 (feil traumeprotokoll — fikseringstid, primær vs.
  permanent)**; F7 (diagnose uten funnforankring). `warning` bildeavhengighet
  (funn tekstbeskrevet — øv mot ekte røntgen).
- **Modellsvar:** «En 9-åring har brukket tann 11 med synlig rødt punkt sentralt i
  bruddflaten — diagnose, håndtering og prognose» (komplisert kronefraktur, i
  sammenhengende tekst).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 5.2: Luksasjon, eksartikulasjon og replantasjon
**id:** `od5200-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-5-1`

- **Kapitteltype:** klinisk kasus-/faktakapittel (perfekt).
- **Description:** Luksasjonstyper, eksartikulasjon (avslått tann) og førstehjelp/
  replantasjon (replanter umiddelbart / oppbevar i melk) — den akutte
  traumehåndteringen.
- **Eksamensbelegg:** Traumer **høy**. Sjanger F/G/H. Førstehjelp ved eksartikulasjon
  er nesten sikkert flervalg. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1. `collapsible` **Faktakontrakt-oppslag:**
  luksasjonstyper; eksartikulasjon → replantasjonsråd; oppbevaringsmedium.
- **Faktakontrakt (flashcard-kilde):** **luksasjon** (subluksasjon, ekstrusjon,
  lateral, intrusjon); **eksartikulasjon** (fullstendig avslått); **førstehjelp**
  (replanter umiddelbart; ellers melk/fysiologisk saltvann; ikke skrubb roten);
  forskjell primær (replanteres IKKE) vs. permanent tann.
- **Typiske feil:** **F9 (feil førstehjelp — skrubbe rot / feil medium; replantere
  primær tann)**; feil fikseringstid.
- **Modellsvar:** «En 10-åring får slått ut tann 21 på fotballkamp — hva er
  førstehjelpen og hva avgjør prognosen?».
- **Kvote:** 14 quiz / 16 flashcards.

#### Kapittel 5.3: Resorpsjon, nekrose og prognose — traumedrill
**id:** `od5200-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-5-2`

- **Kapitteltype:** klinisk drillkapittel (perfekt).
- **Description:** Erstatningsresorpsjon (irreversibel, endodonti hjelper ikke) vs.
  betennelsesresorpsjon (behandlbar) vs. pulpanekrose, og hvordan resorpsjonstypen
  avgjør prognosen — med kasusdrill på hele traumekjeden.
- **Eksamensbelegg:** Resorpsjon/nekrose **høy** (kjerne i langsvarskasus). Sjanger
  G/H. Forveksling erstatnings-/betennelsesresorpsjon straffes (F9). Prioritet:
  perfekt.
- **Forkunnskaper/kryssbok:** kap. 5.1, 5.2. `collapsible` **Faktakontrakt-oppslag:**
  resorpsjonstype ↔ reversibilitet ↔ prognose ↔ tiltak.
- **Faktakontrakt (flashcard-kilde):** **erstatningsresorpsjon** (ankylose,
  irreversibel, endodonti hjelper ikke); **betennelsesresorpsjon** (infeksjons­
  drevet, kan stoppes ved endodonti); **pulpanekrose** (tegn, behandling); hvordan
  resorpsjonstype styrer prognose.
- **Typiske feil:** **F9 (forveksler erstatnings- og betennelsesresorpsjon → feil
  prognose — den viktigste her)**; behandle irreversibel resorpsjon med endodonti.
- **Modellsvar:** gjennomtegnet kasus (tekstbeskrevet) med margnotater om hvor
  poengene faller: funn → resorpsjonstype → prognose → tiltak.
- **Kvote:** 20 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A kronefraktur/rotfraktur + fikseringstid · 5.B
eksartikulasjon/replantasjon-førstehjelp · 5.C resorpsjonstype → prognose · 5.D
samlet traume-kasusprøve på eksamensnivå).

### Del 6 — Pedodonti: diagnostikk, utviklingsforstyrrelser og karies *(prioritet: PERFEKT — høy)*

#### Kapittel 6.1: Funnbeskrivelse og aldersbestemmelse fra frembrudd
**id:** `od5200-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** klinisk kasus-/faktakapittel (perfekt — selve kasusmalen).
- **Description:** Å beskrive funn per tann (klinisk + røntgen) systematisk og
  anslå alder fra frembruddsstatus (incisiver >8 år, hjørnetenner/premolar 10–11
  år, 7-ere <12 → ca. 11 år) — selve malen for pedodonti-kasusene.
- **Eksamensbelegg:** Diagnostikk fra funn **høy** (kasusmalen); aldersbestemmelse
  **høy**. Sjanger G/H. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 0.2 (FDI + funnbeskrivelse). `collapsible`
  **Faktakontrakt-oppslag:** frembruddsalder ↔ tann; systematisk funnrekkefølge.
- **Faktakontrakt (flashcard-kilde):** **systematisk funnbeskrivelse** (tann → funn
  → symptom); **frembruddstidslinje** (incisiver, hjørnetenner, premolar, 2. molar
  `(verifiser aldre)`); hvordan frembruddsstatus gir aldersanslag. Valgfri SVG:
  `frembrudd-tidslinje.svg` (egen strektegning).
- **Typiske feil:** **F8 (feil aldersanslag — ikke lese frembrudd systematisk)**;
  usystematisk funnbeskrivelse. `warning` bildeavhengighet.
- **Modellsvar:** «Gitt frembruddsstatus (tekstbeskrevet) — anslå alder med
  begrunnelse» (systematisk lesning).
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 6.2: MIH og differensialdiagnostikk
**id:** `od5200-6-2` · **number:** 6.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-6-1`

- **Kapitteltype:** klinisk kasus-/faktakapittel (perfekt).
- **Description:** Molar-incisiv-hypomineralisering (velavgrensede opasiteter,
  ising, PEB) med differensialdiagnostikk mot amelogenesis imperfecta og hypoplasi,
  og behandling (fluorpensling, fissurforsegling, tooth mousse, sølvfluorid).
- **Eksamensbelegg:** MIH + diff.diagnostikk **høy**. Sjanger G/H. Diagnose uten
  opasitetsmønster/symmetri/ising straffes (F7). Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1. `collapsible` **Faktakontrakt-oppslag:** MIH-
  kriterier; MIH vs. amelogenesis imperfecta vs. hypoplasi; behandlingstiltak.
- **Faktakontrakt (flashcard-kilde):** **MIH** (velavgrensede gul-/hvite opasiteter
  på 6-ere/incisiver, ising, PEB = post-eruptiv breakdown); **diff.diagnoser**
  (amelogenesis imperfecta = generell/arvelig; hypoplasi = kvantitativ defekt);
  **behandling** (fluorpensling, fissurforsegling, tooth mousse, sølvfluorid).
- **Typiske feil:** **F7 (MIH uten funnbegrunnelse — den viktigste her)**; blande
  MIH med amelogenesis imperfecta.
- **Modellsvar:** «Tann 16, 26 og 11 har velavgrensede gulhvite opasiteter, tann 16
  isende — diagnose med begrunnelse og behandlingsforslag».
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 6.3: Karies i primære tenner — gradering, ekskavering og pulpotomi
**id:** `od5200-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-6-1`

- **Kapitteltype:** klinisk kasus-/faktakapittel (perfekt/kunne).
- **Description:** Kariesgradering 1–5, selektiv/trinnvis ekskavering, partiell
  pulpotomi ved vital pulpa (2 mm kasse, kalsiumhydroksid, stanse frisk blødning)
  og ekstraksjon ved nekrose — behandlingsvalgene i primære tenner.
- **Eksamensbelegg:** Karies primære tenner **høy**. Sjanger G/H. Prioritet: perfekt.
- **Forkunnskaper/kryssbok:** kap. 6.1; [Kariologi](/bok/od4200/od4200-1-1) `(verifiser lenke)`.
  `collapsible` **Faktakontrakt-oppslag:** kariesgradering 1–5; ekskaveringsvalg;
  pulpotomi-prosedyre; nasjonal faglig retningslinje 0–20 år.
- **Faktakontrakt (flashcard-kilde):** **kariesgradering 1–5**; **selektiv/trinnvis
  ekskavering** (unngå pulpaeksponering); **partiell pulpotomi** (vital pulpa: 2 mm
  kasse, kalsiumhydroksid, stanse frisk blødning); **ekstraksjon ved nekrose**;
  **nasjonal faglig retningslinje «Tannhelsetjenester til barn og unge 0–20 år»**
  (kariesrisikovurdering før innkallingsintervall).
- **Typiske feil:** F7 (behandlingsvalg uten funnforankring); pulpotomi på nekrotisk
  pulpa; feil innkallingslogikk.
- **Modellsvar:** «5-åring med dyp karies i tann 84, vital pulpa ved eksponering —
  behandlingsvalg med begrunnelse».
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A funnbeskrivelse + aldersanslag · 6.B MIH +
diff.diagnostikk · 6.C karies primær + ekskavering/pulpotomi · 6.D samlet
diagnostikk-kasusprøve på eksamensnivå).

### Del 7 — Pedodonti: farmakologi, sedasjon og infeksjon *(prioritet: KUNNE — høy for flervalg)*

#### Kapittel 7.1: Sedasjon, atferdsstyring og ASA-vurdering
**id:** `od5200-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** klinisk fakta-/flervalgskapittel (kunne — høy for flervalg).
- **Description:** Benzodiazepiner (diazepam, midazolam, oxazepam, flunitrazepam —
  ulik halveringstid), ASA-klasser, fasteregler, kontraindikasjoner og når sedasjon
  IKKE skal gis; narkose ved dårlig samarbeid — den farmakologiske flervalgsbanken.
- **Eksamensbelegg:** Sedasjon/atferd **høy** (flervalg, inkl. halveringstid-
  rangering). Sjanger F. Prioritet: kunne (høy flervalgsverdi).
- **Forkunnskaper/kryssbok:** kap. 0.2. `collapsible` **Faktakontrakt-oppslag:**
  benzodiazepin ↔ halveringstid; ASA-klasser I–V; fasteregler; kontraindikasjoner.
- **Faktakontrakt (flashcard-kilde):** **benzodiazepiner** (navn + relativ
  halveringstid `(verifiser)`); **ASA-klasser** (I–V, hva de betyr); **fasteregler**
  før sedasjon `(verifiser)`; **kontraindikasjoner**; **narkose** ved manglende
  samarbeid («fang-til-fang» som siste utvei); analgesi = uten smerte.
- **Typiske feil:** **F10 (sedasjonsfeil — overse faste/ASA, sedere kontraindisert
  pasient)**; feil halveringstidsrangering.
- **Modellsvar:** «Ranger diazepam, midazolam og oxazepam etter halveringstid og
  begrunn valg av sedasjonsmiddel for en engstelig 6-åring `(verifiser)`».
- **Kvote:** 20 quiz / 16 flashcards.

#### Kapittel 7.2: Virusinfeksjon og fluoridtoksisitet
**id:** `od5200-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-7-1`

- **Kapitteltype:** klinisk fakta-/flervalgskapittel (kunne/kjenne).
- **Description:** Herpes simplex primærinfeksjon (HSV-1: vesikler/sår, feber,
  forløp) og fluoridtoksisitet (nedre skadelig grense ~50 mg F⁻ ≈ 1 tube tannkrem).
- **Eksamensbelegg:** Herpes **2/3**, fluoridtoksisitet **1/3**. Sjanger F/H.
  Prioritet: kunne (herpes) / kjenne (fluorid).
- **Forkunnskaper/kryssbok:** kap. 7.1. `collapsible` **Faktakontrakt-oppslag:**
  HSV-1 primærinfeksjon (kliniske tegn, forløp); fluorid nedre skadegrense
  `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **herpes simplex primærinfeksjon** (HSV-1;
  vesikler/sår med rød halo; feber; lav CRP; forløp 1–2 uker; symptomatisk
  behandling); **fluoridtoksisitet** (nedre skadelig grense ~50 mg F⁻ ≈ 1 tube
  tannkrem `(verifiser)`; håndtering ved svelging).
- **Typiske feil:** blande herpes med annen oral infeksjon; feil fluoridgrense
  (les `(verifiser)`).
- **Modellsvar:** «2-åring med feber, ømme vesikler i hele munnen og lav CRP —
  diagnose, forløp og behandling».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A sedasjon/benzodiazepin + halveringstid
`(verifiser)` · 7.B ASA + fasteregler + kontraindikasjoner · 7.C herpes/fluorid ·
7.D samlet farmakologi-/infeksjonsflervalgsprøve). Flervalgsfasitene STOKKES (aldri
«alle a»).

### Del 8 — Pedodonti: rettsodontologi, jus/etikk og barnevern *(prioritet: PERFEKT for etikk (eksplisitt vektet 2023))*

#### Kapittel 8.1: Rettsodontologi og identifisering
**id:** `od5200-8-1` · **number:** 8.1 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** jus/faktakapittel (kunne).
- **Description:** Identifisering ved masseulykke (ID-gruppen Kripos har ansvaret;
  DNA/fingeravtrykk/odontologi likeverdige metoder) og utlevering av tannjournal
  til politi.
- **Eksamensbelegg:** Rettsodontologi/ID **2/3** (flervalg + kortsvar). Sjanger F/H.
  Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 1.1 (taushetsplikt). `collapsible` **Paragraf- og
  takstregister:** utlevering til politi; ID-arbeid ved masseulykke `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **ID-gruppen Kripos** (ansvar ved
  masseulykke); **likeverdige metoder** (DNA, fingeravtrykk, odontologi);
  **utlevering** (full tannjournal + røntgen ved samtykke/hjemmel `(verifiser)`).
- **Typiske feil:** tro at odontologi er underordnet DNA; utlevere uten hjemmel.
- **Modellsvar:** «Hvem har ansvaret for identifisering ved en masseulykke, og
  hvilken rolle spiller odontologi?».
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 8.2: Barnevern, meldeplikt og samtykke 16–18 år
**id:** `od5200-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-8-1`

- **Kapitteltype:** jus/regelkapittel (kunne/perfekt for meldeplikt).
- **Description:** Meldeplikt ved mistanke om mishandling (barnevernsloven,
  helsepersonelloven § 33, FNs barnekonvensjon art. 3/19) og samtykke 16–18 år i
  barnetannpleien.
- **Eksamensbelegg:** Barnevern/jus **2/3** (flervalg). Sjanger F. Feil paragraf­
  henvisning straffes. Prioritet: kunne (perfekt for meldeplikthjemmel).
- **Forkunnskaper/kryssbok:** kap. 1.1, 1.3, 8.1. `collapsible` **Paragraf- og
  takstregister:** helsepersonelloven § 33 opplysningsplikt; barnevernsloven; FNs
  barnekonvensjon art. 3/19 `(verifiser)`.
- **Faktakontrakt (flashcard-kilde):** **opplysningsplikt til barnevernet**
  (helsepersonelloven § 33 `(verifiser)` — når plikten utløses); **barnevernsloven**
  kort; **FNs barnekonvensjon** (art. 3 barnets beste, art. 19 beskyttelse mot
  vold); samtykke 16–18 år i behandling.
- **Typiske feil:** feil paragrafhenvisning (F1-analogt); blande meldeplikt (skal)
  med opplysningsrett (kan); tro taushetsplikten går foran meldeplikten.
- **Modellsvar:** «Du mistenker mishandling av en 4-åring — hva er plikten din og
  hvilken hjemmel? `(verifiser)`».
- **Kvote:** 12 quiz / 14 flashcards.

#### Kapittel 8.3: Etisk refleksjon — SME-modellen
**id:** `od5200-8-3` · **number:** 8.3 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-8-2`

- **Kapitteltype:** etikk-/drøftingskapittel (perfekt for etikk).
- **Description:** Å identifisere en *etisk* (ikke faglig) problemstilling og anvende
  en refleksjonsmodell (SME): berørte parter, verdier, handlingsalternativer,
  begrunnet landing — den eksplisitt vektede refleksjonsoppgaven fra 2023.
- **Eksamensbelegg:** Etisk refleksjon **1/3**, men **eksplisitt vektet oppgave i
  2023**. Sjanger I. Å blande etisk og faglig problem straffes (sensorkrav 7, F11).
  Prioritet: perfekt (for etikkoppgaven).
- **Forkunnskaper/kryssbok:** kap. 8.2; [Etikk og profesjonsansvar](/bok/med1100/med1100-2-1)
  `(verifiser lenke)`. `collapsible` **Faktakontrakt-oppslag:** SME-trinnene;
  skillet etisk vs. faglig problem.
- **Faktakontrakt (flashcard-kilde):** **SME-modellen** (identifiser etisk problem
  → berørte parter → verdier i spill → handlingsalternativer → begrunnet landing);
  **etisk vs. faglig problem** (skillet med eksempler); binær selvrettingsrubrikk.
- **Typiske feil:** **F11 (blander etisk og faglig problemstilling — den viktigste
  her)**; hoppe over berørte parter eller verdiavveiingen; ikke lande begrunnet.
- **Modellsvar:** gjennomskrevet SME-refleksjon på et nyskrevet dilemma (f.eks.
  foreldre nekter anbefalt behandling for barnet), med margnotater + rubrikk.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A rettsodontologi/ID · 8.B barnevern/meldeplikt
+ hjemmel `(verifiser)` · 8.C SME-refleksjon på nyskrevet dilemma · 8.D samlet jus-/
etikkprøve). 8.C-fasiten refererer selvrettingsrubrikken.

### Del 9 — Oral protetikk: diagnose og behandlingsplanlegging *(prioritet: KUNNE — kjerne i kasuset)*

#### Kapittel 9.1: Diagnose fra anamnese og panoramarøntgen
**id:** `od5200-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-0-2`

- **Kapitteltype:** klinisk kasus-/faktakapittel (kunne — kasusstart).
- **Description:** Å stille orale diagnoser punktvis fra anamnese + panoramarøntgen
  og trekke ut de protetisk relevante funnene — starten på det gjennomgående
  protetikk-kasuset.
- **Eksamensbelegg:** Diagnose fra anamnese + panorama **kjerne** (oppgave 1 i
  kasuset). Sjanger J. Senere svar bygger på disse diagnosene (sensorkrav 8).
  Prioritet: kunne. `warning` bildeavhengighet (panorama tekstbeskrevet).
- **Forkunnskaper/kryssbok:** kap. 0.2 (funnbeskrivelse); [Periodonti](/bok/od4200/od4200-2-1)
  `(verifiser lenke)`. `collapsible` **Faktakontrakt-oppslag:** panorama-funn ↔
  protetisk relevans; diagnoseliste-oppsett.
- **Faktakontrakt (flashcard-kilde):** **systematisk oral diagnoseliste** (karies,
  periodonti, endodonti, tanntap, okklusjon); **panorama-funn** (bentap,
  periapikale oppklaringer, retinerte tenner — tekstbeskrevet); protetisk relevans
  av hvert funn.
- **Typiske feil:** F12 (ufullstendig diagnoseliste → senere svar mister forankring);
  overse periodontal status.
- **Modellsvar:** «65-årig mann, tanntap i overkjeve, periodontal historie
  (tekstbeskrevet panorama) — sett opp diagnoseliste med protetisk relevans».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 9.2: Behandlingsplanleggingens faser og forbehandling
**id:** `od5200-9-2` · **number:** 9.2 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-9-1`

- **Kapitteltype:** klinisk kasus-/faktakapittel (kunne).
- **Description:** Den systematiske faseinndelingen av behandlingsplanleggingen
  (hovedtrekk ved hver fase) og forbehandlingen (periodontal sanering, karies,
  ekstraksjoner) som må på plass før protetikk.
- **Eksamensbelegg:** Behandlingsplanleggingens faser **kjerne**; forbehandling
  **kjerne**. Sjanger J/K. Å overse forbehandlingsbehov straffes (F12). Prioritet:
  kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1. `collapsible` **Faktakontrakt-oppslag:**
  behandlingsfasene i rekkefølge; forbehandlingstiltak ↔ indikasjon.
- **Faktakontrakt (flashcard-kilde):** **behandlingsfasene** (systematisk
  rekkefølge med hovedtrekk); **forbehandling** (periodontal sanering før protetikk;
  kariessanering; strategiske ekstraksjoner); hvorfor rekkefølgen betyr noe.
- **Typiske feil:** **F12 (overser forbehandling / feil faserekkefølge)**; planlegge
  protetikk før periodontal status er sanert.
- **Modellsvar:** «Sett opp behandlingsplanleggingens faser for kasuset fra 9.1 og
  begrunn forbehandlingen».
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A diagnoseliste fra panorama · 9.B behandlings­
faser · 9.C forbehandling → protetikk-rekkefølge · 9.D samlet plan-kasusprøve).

### Del 10 — Oral protetikk: rehabiliteringsalternativer *(prioritet: KUNNE)*

#### Kapittel 10.1: Fast tannstøttet bro, implantat og avtakbar protese
**id:** `od5200-10-1` · **number:** 10.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-9-2`

- **Kapitteltype:** klinisk kasus-/drøftingskapittel (kunne).
- **Description:** De tre rehabiliteringsalternativene — fast tannstøttet bro,
  implantatstøttet protetikk, avtakbar del-/helprotese — med indikasjoner,
  muligheter og begrensninger per kjeve.
- **Eksamensbelegg:** Rehabiliteringsalternativer **kjerne** (oppgave 4–8 i kasuset).
  Sjanger L. Vei alternativer opp mot hverandre per kjeve. Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1, 9.2. `collapsible` **Faktakontrakt-oppslag:**
  alternativ ↔ indikasjon ↔ muligheter/begrensninger per kjeve.
- **Faktakontrakt (flashcard-kilde):** **fast tannstøttet bro** (indikasjon,
  begrensning); **implantatstøttet protetikk** (indikasjon, forutsetninger);
  **avtakbar del-/helprotese** (indikasjon, begrensning); hvordan valget varierer
  overkjeve vs. underkjeve.
- **Typiske feil:** **F12 (behandlingsvalg uten forankring i diagnosene)**; liste
  alternativer uten å veie muligheter/begrensninger.
- **Modellsvar:** «For kasuset (overkjeve tannløs, underkjeve delvis bevart) — vei
  rehabiliteringsalternativene per kjeve med muligheter/begrensninger».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 10.2: Klinisk behandlingsgang og avtrykk
**id:** `od5200-10-2` · **number:** 10.2 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-10-1`

- **Kapitteltype:** klinisk prosedyrekapittel (kunne).
- **Description:** Den trinnvise kliniske arbeidsgangen for fast protetikk (til og
  med avtrykk), med respekt for oppgavens avgrensninger (f.eks. «beskriv ikke
  kirurgi»).
- **Eksamensbelegg:** Behandlingsgang **kjerne** (delspørsmål i kasuset). Sjanger K.
  Å holde seg innenfor avgrensningene og sekvensere korrekt premieres. Prioritet:
  kunne.
- **Forkunnskaper/kryssbok:** kap. 10.1. `collapsible` **Faktakontrakt-oppslag:**
  behandlingsgang-trinnene i rekkefølge; avtrykksmetode.
- **Faktakontrakt (flashcard-kilde):** **behandlingsgang fast protetikk** (trinnene
  t.o.m. avtrykk); **avtrykkstaking**; NB-instrukser (respekter avgrensninger som
  «kirurgi skal ikke beskrives»).
- **Typiske feil:** **F12 (hoppe over kliniske trinn / beskrive avgrenset bort-stoff
  som kirurgi)**; feil sekvens.
- **Modellsvar:** «Beskriv behandlingsgangen for en fast bro til og med avtrykk —
  kirurgi skal ikke beskrives».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 10:** 4 prøver (10.A alternativ ↔ indikasjon · 10.B muligheter/
begrensninger per kjeve · 10.C behandlingsgang + avtrykk · 10.D samlet
rehabiliterings-kasusprøve).

### Del 11 — Oral protetikk: TMD og HELFO ved protetikk *(prioritet: KUNNE / KJENNE)*

#### Kapittel 11.1: TMD — definisjon, årsak og behandling
**id:** `od5200-11-1` · **number:** 11.1 · **estimatedMinutes:** 50 · **prerequisites:** `od5200-9-1`

- **Kapitteltype:** klinisk kasus-/faktakapittel (kunne).
- **Description:** Temporomandibulær dysfunksjon (definisjon, multifaktoriell årsak,
  pasientinformasjon) og prioritert behandling (informasjon, skinne, avspenning før
  invasive tiltak).
- **Eksamensbelegg:** TMD **kjerne** (oppgave 9–10 i kasuset). Sjanger J/L. Å overse
  TMD-komponenten i prioriteringen straffes (F12). Prioritet: kunne.
- **Forkunnskaper/kryssbok:** kap. 9.1. `collapsible` **Faktakontrakt-oppslag:** TMD-
  definisjon; årsaksfaktorer; behandlingstrapp (konservativt før invasivt).
- **Faktakontrakt (flashcard-kilde):** **TMD** (definisjon: temporomandibulær
  dysfunksjon); **multifaktoriell årsak** (muskulær/parafunksjon/stress;
  palpasjonsømhet m. masseter/m. temporalis); **prioritert behandling**
  (informasjon → skinne → avspenning FØR invasive tiltak).
- **Typiske feil:** **F12 (overser TMD i behandlingsprioriteringen)**; hoppe rett til
  invasiv behandling.
- **Modellsvar:** «Pasienten har palpasjonsøm masseter og knepping i kjeveledd —
  forklar TMD til pasienten og angi prioritert behandling».
- **Kvote:** 14 quiz / 14 flashcards.

#### Kapittel 11.2: HELFO-refusjon ved protetikk
**id:** `od5200-11-2` · **number:** 11.2 · **estimatedMinutes:** 45 · **prerequisites:** `od5200-11-1`

- **Kapitteltype:** klinisk/jus-kapittel (kjenne).
- **Description:** Rett til stønad ved protetisk rehabilitering og refusjons­
  forskjeller mellom behandlingsvalg — uten å angi konkrete takster/beløp
  `(verifiser)`.
- **Eksamensbelegg:** HELFO ved protetikk **kjerne** (oppgave 11 i kasuset).
  Sjanger J. Prioritet: kjenne. **`(verifiser)`** — konkrete satser/beløp utelates
  og merkes.
- **Forkunnskaper/kryssbok:** kap. 2.2 (refusjonsbegreper). `collapsible` **Paragraf-
  og takstregister:** stønadsrett ved protetikk; refusjonsforskjeller mellom
  behandlingsvalg `(verifiser — ingen konkrete beløp)`.
- **Faktakontrakt (flashcard-kilde):** **stønadsrett ved protetikk** (prinsippene —
  når stønad gis `(verifiser)`); **refusjonsforskjeller** mellom fast/implantat/
  avtakbar (prinsipp, ikke beløp); kobling til refusjonsbegrepene fra 2.2.
- **Typiske feil:** F2 (oppgi utdaterte beløp — utelat dem); tro at alle
  behandlingsvalg refunderes likt.
- **Modellsvar:** «Har pasienten i kasuset rett til HELFO-stønad, og hvordan skiller
  refusjonen seg mellom behandlingsvalgene? `(verifiser — prinsipp, ikke beløp)`».
- **Kvote:** 12 quiz / 12 flashcards.

**Prøve-kvote Del 11:** 4 prøver (11.A TMD-definisjon/årsak · 11.B TMD-behandlings­
trapp · 11.C HELFO-stønadsrett `(verifiser)` · 11.D samlet TMD/HELFO-kasusprøve).

### Del 12 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 12.1: Sjangerspill — løsningsoppskrifter for A–L
**id:** `od5200-12-1` · **number:** 12.1 · **estimatedMinutes:** 55 · **prerequisites:** `od5200-11-2`

- **Kapitteltype:** sjangerdrill/konsolidering.
- **Description:** Alle tolv oppgavesjangrene (A–L) med løsningsoppskriftene samlet
  på ett sted — studentens hurtigreferanse rett før hver av de tre deleksamenene.
- **Eksamensbelegg:** Meta (alle sjangre, alle tre deleksamener). Sensorkravene 1–8.
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** hele boka. `collapsible` **Hurtigreferanse:** sjanger­
  oppskriftene + paragraf-/takstregisteret + reaksjonsbanken i kortform.
- **Innhold:** `text` **Sjangerguiden** — for hver sjanger A–L: kjennetegn,
  løsningsoppskrift, sensorpremie og vanligste feil (feilkode). `definition`/
  `collapsible` **Hurtigreferanse** (flashcard-kilde): lovsvarsmalen; takst-101/501-
  kortet `(verifiser)`; figurdrøftingsprosedyren; adverse-selection-spiralen;
  traumeprotokoll-kortet; frembruddstidslinjen; MIH-diff-kortet; SME-trinnene;
  protetikk-kasusrekkefølgen. `example` full gjennomgang av én oppgave per
  hovedsjanger. `exercise` = «identifiser sjanger + skisser angrepsplan» for
  blandede oppgavestammer. **Samlet oppslagskort** (README): hjemmels-/takstkart
  (lov/takst → én linjes innhold `(verifiser)` → kapittellenke).
- **Typiske feil:** hele F1–F12-katalogen med kobling til forebyggende kapittel.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 12.2: Øvingseksamen — samfunnsodontologi (Del A + Del B)
**id:** `od5200-12-2` · **number:** 12.2 · **estimatedMinutes:** 90 · **prerequisites:** `od5200-12-1`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett, nyskrevet samfunnsodontologi-sett i arkivmalen:
  **Del A jus/HELFO (~30 p)** + **Del B marked/økonomi/epidemiologi (~70 p)**, ren
  fritekst, med figurdrøfting i Del B.
- **Eksamensbelegg:** Meta — speiler temafordelingen i analysen §2 (samfunn).
  Prioritet: perfekt (meta).
- **Innhold:** Del A: taushetsplikt-unntak, en HELFO-takstoppgave `(verifiser)`,
  § 1-3 `(verifiser)`, refusjonsbegreper. Del B: markeds-/egenandelsfigur (skravert
  areal), adverse-selection-spiral, et lite epidemiologisk kortsvar. `collapsible`
  full løsning per oppgave (modellsvar: lovsvar med paragraf `(verifiser)`,
  figurbeskrivelse, full spiral); **minst én «bestått-på-marginen»-besvarelse**;
  `tip` **Sensorblikket** (bestått-terskel + momentliste). Kildeforbehold + `(verifiser)`.
- **Typiske feil:** F1–F6 anvendt i sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 12.3: Øvingseksamen — pedodonti (flervalg + kasus)
**id:** `od5200-12-3` · **number:** 12.3 · **estimatedMinutes:** 90 · **prerequisites:** `od5200-12-2`

- **Kapitteltype:** øvingseksamen.
- **Description:** Et komplett pedodonti-sett i arkivmalen: **~20 flervalg (20 %)** +
  **ett langsvarskasus (40 %)** + **to kortsvarskasus (2×20 %)**, med
  tekstbeskrevne funn (ingen opphavsrettsbeskyttede bilder).
- **Eksamensbelegg:** Meta — speiler analysens §2 (pedodonti). Prioritet: perfekt
  (meta).
- **Innhold:** flervalg på traume, farmakologi/halveringstid, jus/barnevern, MIH;
  langsvarskasus (funnbeskrivelse → diagnose m/begrunnelse → aldersanslag →
  prognose → behandling kort/lang sikt); to kortsvarskasus (akutttraume; MIH/karies);
  ett etikk-/SME-innslag. `collapsible` full løsning (sammenhengende tekst,
  begrunnelser); flervalgsfasiten STOKKET; **bestått-på-marginen**-besvarelse;
  `tip` **Sensorblikket**. `warning` bildeavhengighet.
- **Typiske feil:** F7–F11 anvendt i sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

#### Kapittel 12.4: Øvingseksamen — oral protetikk (integrert 11-delers kasus)
**id:** `od5200-12-4` · **number:** 12.4 · **estimatedMinutes:** 90 · **prerequisites:** `od5200-12-3`

- **Kapitteltype:** øvingseksamen.
- **Description:** Ett gjennomgående nyskrevet pasientkasus med **11 delspørsmål,
  sum 100 p**: diagnose fra panorama → behandlingsplanens faser → forbehandling →
  rehabiliteringsalternativer over-/underkjeve → TMD → HELFO.
- **Eksamensbelegg:** Meta — speiler analysens §2 (protetikk). Prioritet: perfekt
  (meta).
- **Innhold:** ett kasus (tekstbeskrevet panorama + anamnese) med 11 oppgaver i fast
  dramaturgi (diagnoser → faseplan → forbehandling → fast/implantat/avtakbar per
  kjeve → behandlingsgang t.o.m. avtrykk → TMD definisjon/årsak/behandling → HELFO
  `(verifiser)`). `collapsible` full løsning per oppgave med rød tråd (senere svar
  bygger på diagnosene); **bestått-på-marginen**-besvarelse; `tip` **Sensorblikket**
  (bestått-terskel, hvor rød-tråd-poengene faller). `warning` bildeavhengighet.
  Til sammen dekker de tre øvingseksamenene sjangrene A–L minst én gang.
- **Typiske feil:** F12 (rød tråd, forbehandling, TMD, sekvens) i sensorblikket.
- **Kvote:** 6 quiz / 2 flashcards.

**Prøve-kvote Del 12:** ingen egen prøve (Del 12 ER de tre øvingseksamenene 12.2–12.4,
én per deleksamen).

---

## 4. Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Quiz | Flashcards (rå) | Prøver |
|---|---|---|---|---|
| 0 | 2 | 26 | 28 | 0 (dekkes av øvingseksamenene) |
| 1 | 4 | 68 | 68 | 4 |
| 2 | 2 | 34 | 34 | 4 |
| 3 | 4 | 70 | 52 | 4 |
| 4 | 1 | 12 | 12 | 4 |
| 5 | 3 | 54 | 50 | 4 |
| 6 | 3 | 54 | 48 | 4 |
| 7 | 2 | 32 | 28 | 4 |
| 8 | 3 | 40 | 40 | 4 |
| 9 | 2 | 28 | 28 | 4 |
| 10 | 2 | 26 | 26 | 4 |
| 11 | 2 | 26 | 26 | 4 |
| 12 | 4 | 36 | 26 | 0 (= 3 øvingseksamener) |
| **Sum** | **34** | **506 ✓ (≥500)** | **466 (rå) → 534 justert ✓** | **44 + 3 øvingseksamener** |

Summeringskontroll per del (quiz / flashcards rå):
- Del 0: 12+14 = **26** / 12+16 = **28**
- Del 1: 20+18+18+12 = **68** / 20+18+16+14 = **68**
- Del 2: 20+14 = **34** / 18+16 = **34**
- Del 3: 20+20+18+12 = **70** / 14+14+12+12 = **52**
- Del 4: 12 = **12** / 12 = **12**
- Del 5: 20+14+20 = **54** / 18+16+16 = **50**
- Del 6: 20+20+14 = **54** / 18+16+14 = **48**
- Del 7: 20+12 = **32** / 16+12 = **28**
- Del 8: 12+12+16 = **40** / 12+14+14 = **40**
- Del 9: 14+14 = **28** / 14+14 = **28**
- Del 10: 14+12 = **26** / 14+12 = **26**
- Del 11: 14+12 = **26** / 14+12 = **26**
- Del 12: 18+6+6+6 = **36** / 20+2+2+2 = **26**
- **Totalt: 506 quiz / 466 flashcards (rå).**

> **KVOTEGULV — quiz:** per-kapittel-summen er **506 quiz ✓ (≥500)** uendret, uten
> justering. (Quiz-tallene i §3 ble hevet med +4 i 13 høyfrekvens-/perfekt-kapitler
> — 1.1, 1.2, 1.3, 2.1, 3.1, 3.2, 3.3, 5.1, 5.3, 6.1, 6.2, 7.1, 8.3 — så
> per-kapittel-summen bærer gulvet ærlig; disse tallene STÅR allerede i §3.)
>
> **KVOTEGULV-JUSTERING — flashcards:** rå per-kapittel-summen er 466 flashcards,
> **under 500-gulvet**. For å nå gulvet med margin **økes flashcard-kvoten med +4 i
> hvert av 17 utpekte flashcard-rike kapitler** (jus-vilkårslister og kliniske
> faktakontrakter tåler det uten fyll): 1.1, 1.2, 1.3, 2.1, 2.2, 5.1, 5.2, 5.3,
> 6.1, 6.2, 6.3, 7.1, 8.2, 8.3, 9.1, 10.1, 11.1 → **+68 flashcards**. Justert
> flashcard-total: **466 + 68 = 534 ✓ (≥500)**. Disse +4-ene er **minimum** og
> ligger i tillegg til per-kapittel-flashcard-tallene i §3 (forfatteren skal bygge
> minst det justerte tallet i disse 17 kapitlene).

**Autoritative totaler: 506 quiz / 534 flashcards (begge ≥500).**

Kvotene er minimum per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler byggeverdighet og frekvens: samfunnsodontologi (Del 0–4, 13
kapitler) bærer 210 av 506 quiz og 214 av 534 flashcards fordi den er den
sterkeste, mest puggbare og nesten bildeuavhengige delen; pedodonti (Del 5–8, 11
kapitler) bærer bredt (traume/diagnostikk/farmakologi/etikk); protetikk (Del 9–11,
6 kapitler) er lettest vektet fordi ett integrert kasus gir minst gjenbrukbart
drillmateriale.

**Flashcard-profilen (534)** ligger over gulvet fordi faget premierer vilkårs­
lister, takstregler og kliniske fakta som skal sitte. Korttyper: **jus-vilkår**
(taushetsplikt-unntakene; § 1-3-gruppene `(verifiser)`; journalinnhold), **takst­
regel** (takst 101/501-vilkår `(verifiser)`; refusjonsbegrepene), **økonomibegrep**
(likevekt, egenandelseffekt, adverse-selection-spiralen), **traumeprotokoll**
(frakturtype ↔ håndtering; resorpsjonstype ↔ prognose), **frembrudd** (alder ↔
tann), **diagnosekriterium** (MIH-kriterier; kariesgradering), **farmakologi**
(benzodiazepin ↔ halveringstid; ASA-klasser), **etikk** (SME-trinnene),
**protetikk** (rehabiliteringsalternativ ↔ indikasjon; TMD-behandlingstrapp).
**Quiz-profilen** driller nabobegrep-distraktorer (refusjonstakst/honorartakst/
egenandel/mellomlegg; opplysningsrett/-plikt/meldeplikt; erstatnings- vs.
betennelsesresorpsjon; MIH vs. amelogenesis imperfecta; adverse selection vs.
moralsk hasard; fast bro vs. implantat vs. avtakbar). **Alle takst-/beløp-
distraktorer er `(verifiser)`-forankret** så en utdatert sats ikke smugles inn som
«riktig».

### Prøver (4 per temadel, 44 totalt)

Fire prøver per temadel (Del 1–11). Hver prøve speiler respektive deleksamens mal
i miniatyr: jus-kortsvar med paragrafhenvisning + oppramsing (Del 1–2, 8), figur­
drøfting med skravert areal (Del 3), epidemiologi-kortsvar (Del 4), traume-/
diagnostikk-kasus med begrunnelse i sammenhengende tekst (Del 5–6), farmakologi-/
etikkflervalg og -refleksjon (Del 7–8), protetikk-kasusdelspørsmål (Del 9–11).
Omfang 20–40 min. Alle oppgaver NYSKREVNE. Flervalgs-/riktig-galt-fasitene STOKKES/
VARIERER (aldri «alle a», aldri «alle felle»). Prøvekapittel-id `od5200-<del>-prove`,
chapterNumber `<del>.P` (jf. BYGGEKONTRAKT). Del 0 og Del 12 har ingen egen prøve
(Del 12s tre øvingseksamener dekker helheten). Prøvetitlene er spesifisert per del i
§3 (Prøve-kvote-linjene). Prøvene deklareres som «4 prøver à ~X min — kan trygt
deles over flere kvelder, én per økt».

### Komplette øvingseksamener (3 — kapitlene 12.2–12.4)

Tre nyskrevne sett, ett per deleksamen: (12.2) samfunnsodontologi (Del A jus/HELFO
+ Del B marked/økonomi/epidemiologi, figurdrøfting), (12.3) pedodonti (~20 flervalg
+ langsvarskasus + to kortsvarskasus, tekstbeskrevne funn), (12.4) oral protetikk
(ett integrert 11-delers kasus). Full modellsvar-fasit per oppgave, minst én
«bestått-på-marginen»-besvarelse per sett, og Sensorblikket per oppgave. **Kilde-
og verifiseringsforbehold i alle tre:** sensorlogikken er stikkords-/momentbasert
`(verifiser)`, satser/paragrafer/beløp er ferskvare `(verifiser mot gjeldende
regelverk)`, og kasusene er tekstbeskrevet uten opphavsrettsbeskyttede bilder. Til
sammen dekker de tre settene sjangrene A–L minst én gang.

---

## 5. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — de tre separate deleksamenene (samfunn ~2 t / pedodonti
   ~4 t / protetikk ~4 t), bestått/ikke-bestått (A–F kun V2026 `(verifiser)`),
   praktisk-klinisk prøve utenfor arkivet, verifiseringsforbeholdet (lov/takst =
   ferskvare) og bildeavhengigheten (fra kap. 0.1).
2. **Håndverket** — de tre svarhåndverkene: presist lovsvar (paragraf + fullstendig
   oppramsing), figurdrøfting (kurveretning + skravert areal), funnbeskrivelse +
   klinisk begrunnelse (funn → diagnose → prognose → tiltak) (fra kap. 0.2).
3. **Prioriteringskartet** — temafrekvensene som tre lesenivåer per delfag:
   *perfekt* (samfunn: taushetsplikt 3/3, takst 101/501 3/3, § 1-3 3/3, markeds-/
   egenandelsfigur, adverse selection; pedodonti: traume, MIH, karies primær,
   aldersanslag, SME-etikk), *kunne* (samfunn: journal/samtykke, sviktende
   konkurranse; pedodonti: sedasjon/ASA, herpes; protetikk: diagnose, faseplan,
   rehabiliteringsalternativer, behandlingsgang, TMD), *kjenne* (epidemiologi,
   fluoridtoksisitet, HELFO ved protetikk).
4. **Sjangerguiden** — oppgavetypene A–L med løsningsoppskriftene i kortform
   (lovsvarsmalen; takst-kortet `(verifiser)`; figurdrøftingsprosedyren; adverse-
   selection-spiralen; traumeprotokoll-kortet; frembruddstidslinjen; MIH-diff;
   SME-trinnene; protetikk-kasusrekkefølgen) (fra kap. 12.1).
5. **Registerarket** — paragraf-/takstregisteret og faktakontrakt-oppslagene samlet
   (siden alt må sitte og satsene er ferskvare); hvert takst-/beløp-punkt merket
   `(verifiser mot gjeldende regelverk)`.
6. **Sensorreglene** — de åtte sensorkravene (§2) + bestått-terskelen per deleksamen
   (samfunn: dekker de sikre gjengangerne + løser figuren med riktig retning;
   pedodonti: standard traumeprotokoll + MIH-håndtering + begrunnet diagnose;
   protetikk: hovedalternativer + rød tråd). Alle sensorpremisser merket `(verifiser)`
   der utledet indirekte.
7. **Feilkatalogen** — de tolv typiske feilene (F1–F12) samlet, hver med henvisning
   til kapitlet som forebygger den (F1 utdatert lov → 1.2; F2 utdatert takst → 2.1/
   1.4; F3 ufullstendig oppramsing → 1.1; F4 figur uten areal → 3.1/3.2; F5
   refusjonsbegreper → 2.2; F6 forsikringsspiral → 3.3; F7 diagnose uten funn →
   6.2; F8 aldersanslag → 6.1; F9 resorpsjon/traumeprotokoll → 5.2/5.3; F10 sedasjon
   → 7.1; F11 etisk/faglig → 8.3; F12 protetikk rød tråd → 9.2/10.1/11.1).
8. **Studieløp** — anbefalt progresjon (10–12-ukers deltidsvariant + 3-ukers
   intensiv): Del 0 → 1 → 2 → 3 (samfunn samlet, den sikreste gevinsten) → 4 → 5 →
   6 → 7 → 8 (pedodonti) → 9 → 10 → 11 (protetikk) → 12; sjangerspillet (12.1) spres
   utover; de tre øvingseksamenene de siste ukene under tidspress (én per deleksamen,
   på tid), aldri stablet i siste uke.

---

## 6. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først:** `TextbookCourse`-oppføring for `od5200` (mønster
   `COURSE_BI_OKONOMI`, skrives til `textbook-courses-hoyskole.ts`): id `od5200`,
   title «OD5200 Samfunnsodontologi, pedodonti og oral protetikk (UiO) —
   eksamensrettet», `level: 'Høyskole'`, alle 34 kapitler med id/number/title/
   description/estimatedMinutes/topics/competenceGoals/prerequisites, `sectionNames`
   fra §2. Registrer i `institusjoner.ts` under UiO. Sjekk at helse-/jus-heuristikken
   i `hoyskole-disclaimer.tsx` treffer od5200 (helse + jus/HELFO) — utvid ved behov.
2. **Del 0 → 12 i rekkefølge** (faglig avhengighet), én byggeagent per del, maks 2
   samtidige. Læringsløkke (Teori→Eksempel→Oppgave inline) i alle fagkapitler.
3. **Kvotene fra kvotesammendraget (§4: 506 quiz / 534 flashcards justert) er
   fasit** — bygg minst det justerte flashcard-tallet i de 17 utpekte kapitlene.
4. **SVG-figurer for Del 3** (marked-likevekt, egenandel-effekt, gratis-trygdekostnad;
   valgfri frembrudd-tidslinje for 6.1) — egne strektegninger, ALDRI kliniske foto;
   valider XML; kjør `npx tsx scripts/upload-media-storage.ts` etter skriving.
5. **Prøver** (4 per temadel Del 1–11) + narrativ-versjoner + quiz-merge + wiring
   (registry, linkedChapterId) per PRODUKSJONSLOYPE fase 5.

### Verifikasjon (fase 6)

- **Lovdata-/HELFO-verifikatør (UFRAVIKELIG):** hver `(verifiser)`-markert paragraf,
  takst, sats og beløp kontrolleres mot gjeldende tannhelsetjenestelov (særlig § 1-3,
  endret 2024), folketrygdloven kap. 5 og gjeldende HELFO-takstplakat. Utdaterte tall
  rettes eller merkes tydelig som årsavhengige; ingen distraktor skal presentere en
  utdatert sats som «riktig».
- **Medisinsk-faglig verifikatør:** traumeprotokoll (fikseringstider, resorpsjons­
  typer), MIH-diff.diagnostikk, sedasjons-/ASA-/fasteregler, fluoridgrense og
  herpes-forløp kontrolleres mot gjeldende nasjonal faglig retningslinje/pensum;
  usikre punkter beholder `(verifiser)`.
- **Bildeavhengighets-sjekk:** ingen opphavsrettsbeskyttede kliniske bilder er brukt;
  bildeavhengige sjangre er ærlig merket med `warning`; kasusene bygger på nyskrevne
  tekstbeskrevne funn.
- **Byggeport:** `npm run build` grønn + prod-server-curl (200 + innholdssjekk) på et
  utvalg kapittelruter FØR ferdigmelding. Commit + push til slutt (jf. TODO-OPUS.md).

> **Etterfølger-/statusmerknad:** OD5200 er verifisert **AKTIVT** ved UiO
> (Det odontologiske fakultet, 10. semester, vår; verifisert mot uio.no-emnesiden
> 2026-07-11). Emnet avlegges av alle tannlegestudenter der. `(verifiser)` beholdes
> på karakterregimet (A–F kun V2026, overgang til bestått/ikke-bestått fra V2027)
> fordi status kan endres.

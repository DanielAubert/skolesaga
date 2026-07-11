# Bokskjelett: IS225 Helse, kultur, idrett og samfunn (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT temakapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — én løkke per begrep/teoribit: begrep med
> pensumforankring (`definition` + evt. `text` om posisjoner) → anvendt
> mini-case som viser begrepet i bruk (`example`) → drøftings-/anvendelsesoppgave
> på samme begrep (`exercise`), plassert INLINE i `content[]` rett etter
> eksempelet (plattformen renderer oppgaver inline). Deretter neste begrep, til
> alt stoffet i delkapitlet er dekket. IKKE all teori øverst med oppgavene samlet
> nederst. Ingen oppgave får kreve et begrep/en teori/en posisjon leseren ikke
> har møtt ennå — bare stoff dekket tidligere i SAMME kapittel (t.o.m. eksempelet
> rett foran) eller i et tidligere kapittel som er eksplisitt referert i
> Forkunnskaper-blokken. `tip` Eksamensvinkel og `warning` Typiske feil kan stå
> der de er mest relevante. Autoritativ kilde: README «Leserkrav» + `DNA-drofting.md`.
> Unntak: sjanger-/modellbesvarelses-/prøvekapitler (Del 10) følger sin egen
> arketype (oppgave/oppskrift først, modelltekst i collapsibles). Kvotene og
> innholdskontraktene i dette skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (NIH-arkivet: **6 oppgavesett + 6 tilhørende
> sensorveiledninger** for studieårene 2022/23, 2023/24 og 2024/25 — komplette
> ordinær+utsatt-par, alle lest grundig). Alle oppgaver, caser og formuleringer i
> boka skal være NYSKREVNE (se § opphavsrett). Begreper, teoriapparat (Bourdieu,
> Foucault, WHO-definisjonen, folkehelsebølger) og fagterminologi er ikke
> opphavsrettslig beskyttet og brukes fritt.
>
> **Pensumforankring er kritisk.** Faget har ingen fasit; sensor belønner
> **presise, pensumforankrede begreper** (navngitt forfatter/verk) og
> **selvstendig drøfting**. Faktapåstander forfatteren er usikker på — særlig
> **forfatter↔begrep-koblinger**, som er utgave-sensitive ved pensumrevisjon —
> merkes `(verifiser)` for fagfellesjekk. Reelle forfattere/verk fra analysens §6
> brukes; **aldri oppdiktede referanser**.
>
> **Kildeforbehold (ufravikelig — settes i Del 0-kildenoten og gjentas i
> modellbesvarelsene):** Kalibreringen bygger på et **kort tidsvindu** (tre
> studieår, 2022/23–2024/25). Formatet skiftet **to ganger** i perioden
> (1-ukes hjemmeeksamen → få-dagers hjemmeeksamen → 4-timers skoleeksamen uten
> hjelpemidler), og emneansvaret skiftet (Fiona Dowling → Mari Kristin Sisjord),
> noe som forklarer den økte vekten på folkehelse-faktastoff i de nyeste settene.
> **Skoleeksamensformatet (2024/25→) er styrende for prognosen.** Frekvenstall
> leses med dette forbeholdet; nye sett kan endre bildet.
>
> **Emnestatus (verifisert):** IS225 (10 studiepoeng) er **AKTIVT** ved NIH
> (Årsstudium i idrett og samfunn) — verifisert mot NIH-emnesider juli 2026
> (`EKSAMENSANALYSE.md` topptekst + §1), og arkivet har komplette sett t.o.m.
> studieåret 2024/25 under dagens skoleeksamensform. **Byggefasen bør skaffe og
> verifisere mot eventuelle nyere sett (H2025→)** før boka meldes helt ferdig.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-is225` |
| Tittel | **IS225 Helse, kultur, idrett og samfunn (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «IS225 Helse, kultur, idrett og samfunn». |
| Arketype | **Drøftingsfag** (`DNA-drofting.md`). Samfunnsfaglig, kritisk-sosiologisk folkehelseemne uten fasit; sensor vurderer begrepspresisjon, ekte pensumforankring (navngitte forfattere/studier), selvstendig drøfting og koherent struktur. Samme familie som `sosant1000`, `sos2200`. Se §2 «Arketypetilpasning» for de tre drøftingsspesifikke særtrekkene (begrepsbank tungt vektet, kritisk grunnholdning, dobbeltregister teori+faktastoff). |
| Nærmeste søsteremne | **`nih-is205`** (idrettssosiologi) — deler Bourdieu, kjønn, etnisitet, sosial ulikhet. Se §2 «Krysslenking». |
| Antall kapitler | **26** (Del 0: 2 · temadeler 1–9: 20 · eksamenstrening Del 10: 4) |
| Estimert totaltid | **~1 340 min ≈ 22 timer** (lesetid; se §4-merknad) |
| Quiz totalt | **512** (krav ≥500 — se §4-summeringskontroll) |
| Flashcards totalt | **506** (krav ≥500 — se §4-summeringskontroll) |

**Pitch (ett avsnitt):** IS225-eksamen er en **drøftingseksamen uten fasit**.
Dagens form er **4-timers skriftlig skoleeksamen uten hjelpemidler**, der
kandidaten besvarer **3 av 4 oppgaver som teller likt** (kombinert med en
obligatorisk muntlig gruppepresentasjon som arbeidskrav — ikke gradert). Nesten
hver oppgave har en fast todeling: et **«gjør rede for / forklar …»-ledd**
(dette er C-nivået) etterfulgt av et **«drøft …»-ledd** (dette leddet avgjør
A/B kontra C). Emnets **ubestridte signaturtema er helsedyrking/helsisme**
(«du er din egen helsesmed» — Fugelli & Ingstad), som går igjen nesten hvert
år. **Ryggraden er de tre ulikhetsaksene** — klasse, kjønn, etnisitet — koblet
til fysisk aktivitet og helse. **Bourdieu** (habitus + tre kapitalformer +
symbolsk vold) og **Foucault** (teknologi av selvet, biomakt, bio-pedagogikk)
er de to teoretiske grunnpilarene. Skiftet til skoleeksamen (2024/25) tilførte
to nye krav: (a) **hukommelsesbasert begrepskunnskap** (presise definisjoner,
hvem som «eier» hvert begrep, uten oppslag) og (b) mer **folkehelse-faktastoff**
(helsedefinisjoner, folkehelsebølger, forventet levealder, helseparadokset).
Den nye **«fem-begreper»-oppgaven** (oppgave 4 i begge skoleeksamener) er den
viktigste enkeltendringen boka kalibreres mot — den gjør en solid, pensumforankret
**begrepsbank** direkte eksamensrelevant. Boka er bygd baklengs fra det sensor
premierer: **presise pensumforankrede begreper**, **overgangen fra redegjørelse
(C) til selvstendig drøfting (A/B)**, og en **kritisk grunnholdning** der
individualiseringen av helse SKAL problematiseres, ikke tas for gitt.

**Kritisk fagholdning (gjelder HELE boka) — den kritiske grunnholdningen:** IS225
er et **kritisk-sosiologisk** emne. Å reprodusere «du er din egen helsesmed»-logikken
ukritisk er en **faglig kjernefeil** (analysen §5.8): helse er et kollektivt/
strukturelt anliggende, ikke bare et individuelt prosjekt. Modellsvarene i boka
skal gjennomgående **problematisere** individualiseringen — vise hvem som har
definisjonsmakt, hvordan ulikhet reproduseres, og hvorfor «den gode borger»-logikken
ikke er nøytral. Denne holdningen er selve karakterhevende drøftingsstoffet.

**Kritisk plattformbetingelse — begrepsbank som flashcard-kilde:** Fordi
skoleeksamen premierer hukommelsesbasert begrepskunnskap, er `definition`-blokkene
(begrep + presis definisjon + **navngitt pensumforankring** + ett eksempel) selve
ryggraden i både lærestoffet og flashcard-kvoten. Hver definition-blokk er
kalibrert mot «fem-begreper»-oppgaven: begrep ↔ forfatter/verk-koblinger er
det tyngste flashcard-råstoffet. Begrepsbanken/pensumkartet i hvert kapittel
åpner med standard-notisen «Begrepsbanken er flashcard-/repetisjonsstoff — den
gjentar det du nettopp har lest. Hopp trygt over ved førstegangslesing;
tidsanslaget gjelder kjernestoffet» (README-leserkrav).

**Kildeforankringsregel (gjelder HELE boka):** Hvert sentralt begrep skal
tilskrives sin pensumkilde ved presentasjon — «helsedyrking (Fugelli & Ingstad,
*Helse på norsk*)», «teknologi av selvet (Foucault, via Lupton)», «habitus
(Bourdieu, anvendt av Fitzpatrick)». Definisjoner uten avsender er C-stoff
(analysen §4). Direkte sitat unngås (opphavsrett) — poenget gjengis med egne ord.

**Bevisst nedprioritert (begrunnes i Del 0):** **digital helseteknologi**
(fremtredende i hjemmeeksamenene 2022–2023, ikke gjenfunnet i skoleeksamenene),
**medikalisering** som selvstendig begrep (inngår ellers i flere temaer) og
**idrettshistorie: helsesport** (perifert, ett enkeltbelegg) samles i ett
kompakt kapittel (Del 9) og merkes «bør kjenne til».

---

## 2. Makrostruktur

Rekkefølgen følger drøftingsarketypen: Del 0 (eksamenskart + essayhåndverk) →
temadeler etter frekvens-score → eksamenstrening (sjangerkapitler +
modellbesvarelser). Teoriapparatet (Foucault, Bourdieu) plasseres tidlig fordi
signaturtemaet helsedyrking og de tre ulikhetsaksene **bruker** dette apparatet
— leseren må ha verktøyet før anvendelsen. Frekvensen styrer omfanget: de fem
⭐⭐⭐-temaene (score 5–6) får hver sin del med to kapitler og høyest kvote;
de mellomfrekvente (score 2–3) får ett til to kapitler; det lavfrekvente stoffet
samles i ett kompakt kapittel.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og drøftingshåndverk | 2 | perfekt (meta) | Formen (4-t skoleeksamen, 3 av 4 oppgaver, «forklar + drøft»-todeling, «fem-begreper»-oppgaven), temafrekvensene, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. **Drøftingshåndverket (0.2)** er unikt kritisk fordi overgangen redegjørelse→drøfting er selve karakterskillet. |
| 1 | Helsedyrking og helsisme | 3 | perfekt (score 6) | **Emnets signaturtema.** «Du er din egen helsesmed» (Fugelli & Ingstad) i 6 av 12 sett. Fast todeling: (a) hva helsedyrking er og hvorfor det oppsto (risikosamfunn, medikalisering, nyliberalisme), (b) drøft uheldige konsekvenser for samfunnet og utsatte grupper. Modellbesvarelse obligatorisk. |
| 2 | Foucault: makt, biomakt og bio-pedagogikk | 2 | perfekt (score 5) | Teknologi av selvet, biomakt, normalisering, bio-pedagogikk — grunnlaget for helsedyrking OG helsekampanje-oppgavene. I 5 av 12 sett. |
| 3 | Bourdieu: habitus, kapital og symbolsk vold | 2 | perfekt (score 5) | Det dominerende teoriapparatet for klasse/deltakelse. Habitus + tre kapitalformer + symbolsk vold/felt/doxa. Terskelkrav for C i Bourdieu-oppgaver. I 5 av 12 sett. **Delt teorikjerne med `nih-is205`.** |
| 4 | Sosial klasse og sosial ulikhet i helse | 2 | perfekt (score 5) | Emnets erklærte kjerne: «helse er sosialt strukturert», helsegapet, sosial gradient, reproduksjon av ulikhet. I 5 av 12 sett. |
| 5 | Etnisitet, innvandring og deltakelse | 2 | perfekt (score 5) | Etnisitet vs. rase, interseksjonalitet, integrasjon, barrierer for minoritetsdeltakelse. I 5 av 12 sett. **Delt teorikjerne med `nih-is205`.** |
| 6 | Kjønn og den kjønnede idretten | 2 | perfekt (score 5) | Biologisk vs. sosialt kjønn, kjønnede diskurser, skjønnhets-/forbruksdiskurs. I 5 av 12 sett. **Delt teorikjerne med `nih-is205`.** |
| 7 | Helsedefinisjoner og helsemodeller | 2 | kunne (score 3, stigende) | Biomedisinsk vs. sosiomedisinsk modell, WHO-definisjonen, med styrker OG svakheter. Sterkt inne i skoleeksamensformatet. I 3 av 12 sett. |
| 8 | Folkehelse: begrep og historisk utvikling | 2 | kunne (score 2, stigende) | Folkehelsebølger, forventet levealder, sykdomspanorama, helseparadokset, helsegapet, medikalisering. **Faset kraftig inn med skoleeksamenen** — mer faktabasert enn diskursanalytisk. I 2 av 12 sett, men styrende for skoleeksamen. |
| 9 | Helsekampanjer, kroppen som symbol og periferitemaer | 3 | kjenne (score 1–3) | Helsekampanjer/«avsky»-strategier (score 3), kroppen som symbol/kroppsprosjekt (score 3), + samlekapittel for **digital helseteknologi, medikalisering som eget begrep, helsesport-historie** (bør kjenne til). |
| 10 | Eksamenstrening | 4 | perfekt (meta) | Sjangerkapittel (de 6 oppgavesjangrene + begrepsbank-drill) + **3 modellbesvarelses-kapitler** på de faste gjengangerne (helsedyrking, Bourdieu/klasse, folkehelseutvikling), hver på flere karakternivåer (A/B/C). |

Rasjonale: de fem ⭐⭐⭐-temaene (helsedyrking, Bourdieu, klasse, etnisitet,
kjønn) + Foucault-apparatet får hver sin del med to kapitler og høyest kvote;
helsedefinisjoner og folkehelse får to kapitler hver fordi de er styrende for
skoleeksamensformatet selv om totalfrekvensen er lavere; periferitemaene samles
i én del. **Bredden testes i «fem-begreper»-oppgaven** — prioriteringen styrer
dybde og oppgavemengde, ikke *om* et tema er med.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og drøftingshåndverk |
| 1 | Helsedyrking og helsisme |
| 2 | Foucault: makt, biomakt og bio-pedagogikk |
| 3 | Bourdieu: habitus, kapital og symbolsk vold |
| 4 | Sosial klasse og sosial ulikhet i helse |
| 5 | Etnisitet, innvandring og deltakelse |
| 6 | Kjønn og den kjønnede idretten |
| 7 | Helsedefinisjoner og helsemodeller |
| 8 | Folkehelse: begrep og historisk utvikling |
| 9 | Helsekampanjer, kroppen som symbol og periferitemaer |
| 10 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — skrives ALLTID fullt ut ved første bruk; brukes i «Eksamensbelegg» under)

Kodene er BOKAS interne merkelapper for oppgavetypene, ikke offisielle NIH-koder.
Forklares i Del 0-orienteringsboksen og fullt ut ved første bruk i hvert kapittel.

- **DRØFT** (forklar + drøft) — Den store todelte drøftingsoppgaven
  (kjernearketypen). Ledd 1: gjør rede for et begrep/en teori presist med
  pensumforankring (C-nivå). Ledd 2: drøft, anvend, problematiser, vurder
  styrker/svakheter (avgjør A/B mot C). Var Del A (40 %) i hjemmeeksamenene,
  er de tunge oppgavene 1–3 i skoleeksamen.
- **RED+** (begreps-redegjørelse med drøftingshale) — Kortere variant:
  (a) gjør rede for ett begrep, (b) drøft dets betydning/anvendelse. Krever
  presis, pensumforankret definisjon FØR drøftingen.
- **FEM** («fem begreper») — Skoleeksamens-spesifikk (2024H, 2025V):
  forklar fem av flere oppgitte begreper. Presis definisjon + pensumforankring
  + ett eksempel per begrep. Den viktigste enkeltendringen boka kalibreres mot.
- **ABC** (flerleddet A/B/C-oppgave) — Tre+ delspørsmål som stiger fra
  redegjørelse til drøfting (f.eks. helsedefinisjon → folkehelseutvikling →
  drøft paradokser). Alle ledd må besvares; c-leddet avgjør karakteren.
- **VEIE** (sammenlign / styrker og svakheter) — Vurder en modell/definisjon fra
  flere sider (WHO-definisjonens styrker og svakheter; kritikk av «avsky»-strategier).
  Krever å veie for og imot og trekke inn hvem som har definisjonsmakt.
- **HIST** (historisk-faktabasert, sjelden) — Konkret idrettshistorisk kunnskap
  (helsesport, «Helsesport for alle»). Marginal sjanger, ett belegg.

### Sensorkrav (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

1. **Redegjørelse vs. drøfting er karakterskillet.** C = god redegjørelse.
   A/B = redegjørelse **pluss** selvstendig drøfting. Sensor sier eksplisitt at
   det løfter oppgaven når kandidaten bruker **mer plass på drøfting enn på
   gjengivelse**. Boka driller overgangen eksplisitt (egen `tip`-markering av
   *hvor* redegjørelse blir til drøfting).
2. **Pensumforankring er obligatorisk.** Navngi den konkrete forfatteren/studien.
   Mangelfull referansebruk trekker ned; «jo flere relevante kilder, jo sterkere».
   Definisjoner uten avsender er C-stoff.
3. **Presise, pensumforankrede definisjoner.** Treffer den bestemte forfatterens
   bruk (Bourdieus habitus, Fugelli & Ingstads helsedyrking, Foucaults teknologi
   av selvet). Upresise definisjoner som ikke treffer pensumforfatteren = D/E.
4. **Styrker OG svakheter.** Å identifisere velbegrunnede svakheter (WHO-definisjonen,
   «avsky»-strategier, helsedyrking) premieres. Bare styrker = ufullstendig.
5. **Kritiske perspektiver premieres.** Faget er kritisk-sosiologisk; «den gode
   borger»-logikken og individualiseringen av helse skal problematiseres.
6. **Sammenlign kilder eksplisitt** der oppgaven forutsetter flere tekster
   (hva to artikler har felles/skiller). For to-kilders-oppgaver må **begge**
   refereres for C eller bedre.
7. **Terskelkrav i konkrete oppgaver:** for Bourdieu-oppgaven **må** habitus og
   **alle tre** kapitalformene være nevnt for C.
8. **Sammenhengende tekst** med tydelig innledning–hoveddel–avslutning og «rød
   tråd»; punktlister uten resonnement premieres ikke. Egne, gjerne aktuelle
   eksempler belønnes.

### Feilkoder (fra analysen §5 — glosses ved FØRSTE bruk i HVERT kapittel; brukes i «Typiske feil»)

**#1 Stopper på redegjørelse — dropper drøftingen.** Den desidert vanligste
grunnen til at et ellers godt svar ikke kommer over C. · **#2 Upresise
definisjoner** som ikke treffer pensumforfatterens begrep (habitus uten koblingen
til sosial klasse; helsedyrking uten «superverdi»/individuelt prosjekt). ·
**#3 Utelater påkrevde begreper** (Bourdieu-oppgave uten ett eller flere av
habitus/de tre kapitalformene → automatisk under C). · **#4 Refererer bare én
kilde** der oppgaven forutsetter minst to. · **#5 Beskriver bare styrker, ikke
svakheter.** · **#6 Tett parafrase / direkte sitat** i stedet for egne ord —
trekker ned selv med riktig innhold. · **#7 Ren oppramsing uten resonnement**
(punktlister av årsaker/konsekvenser uten å anvende dem). · **#8 Individualiserer
helse ukritisk** — reproduserer «du er din egen helsesmed»-logikken i stedet for
å problematisere den. **Faglig kjernefeil i et kritisk-sosiologisk emne.** ·
**#9 Bruker ikke litteraturen aktivt** — synsing uten pensumforankring (E-nivå). ·
**#10 Overser oppgavens presise formulering** — drøfter et beslektet, men annet
spørsmål (helse generelt i stedet for konsekvenser for *bestemte* grupper). ·
**#11 Kobler ikke teorien til det konkrete** (nevner Bourdieu uten å anvende ham). ·
**#12 Blander biologisk og sosialt kjønn / rase og etnisitet** — sensor tester
nettopp skillet mellom biologisk størrelse og sosial konstruksjon.

### Arketypetilpasning (dokumenterte hybridvalg og særtrekk)

1. **Ren drøftingsarketype med tre særtrekk.** IS225 følger `DNA-drofting.md`
   fullt ut (begrep + forankring → posisjoner/spenninger → anvendelse → typiske
   feil → oppgaver → pensumkart, i læringsløkker). De tre særtrekkene mot
   søsteremnene: **(a)** den nye skoleeksamensformen krever hukommelsesbasert
   begrepskunnskap → **begrepsbanken vektes tungt** (definition-blokkene er
   flashcard-kilden, kalibrert mot «fem-begreper»-oppgaven); **(b)** den
   **kritiske grunnholdningen** (individualisering av helse SKAL problematiseres)
   må gjennomsyre modellsvarene; **(c)** faget kombinerer **diskursanalytisk teori**
   (Foucault/Bourdieu) med **konkret folkehelse-faktastoff** (bølger, levealder,
   sykdomspanorama) — boka mestrer begge registre.
2. **Utgave-sensitive forfatterkoblinger merkes `(verifiser)`.** Begrepene er
   stabile, men forfatter↔begrep-koblingene kan endres ved pensumrevisjon
   (emneansvaret skiftet Dowling → Sisjord i perioden). Skjelettet merker de
   koblingene som er mest utgave-sensitive; byggefasen kontrollerer mot gjeldende
   pensumliste.
3. **Modellbesvarelser på flere karakternivåer (Del 10).** Fordi karakterskillet
   (redegjørelse→drøfting) er selve læringsmålet, får boka ≥3 modellbesvarelses-
   kapitler med **ærlig merket** A/B/C-nivå (README «Karakter-realisme»): en
   «C-besvarelse» skal VÆRE en C, og minst én autentisk B-/midtnivå-besvarelse
   (ekte studentspråk, litt rotete men god) skal vise terskelen ovenfra.
4. **Sitatlager-bro og erfarings-bro (DNA-drofting bølge 4–5).** Der bokas egne
   parafraser av pensumpoenger trenes, forklares ved første forekomst hvordan et
   ekte pensumutdrag skiller seg (oversettelse, sidetall, ofte lengre). Der faget
   møter leserens helse-/skole-/omsorgserfaring, vises hvordan erfaringen
   KONVERTERES til pensumforankret argument (start i tenkerens begrep → bruk
   erfaringen som ILLUSTRASJON → koble tilbake til drøftingsaksen).
5. **Vippe-caser og konklusjonsvariasjon.** Minst én drøftingscase der to
   landinger er fullt forsvarlige (merket «(omstridt — begge forsvarlige)»), og
   minst én modellbesvarelse som konkluderer SKARPT og likevel er toppnivå
   (forbehold er verktøy, ikke obligatorisk garnityr).

### Krysslenking til `nih-is205` (idrettssosiologi) — forkunnskaps-KRYSSREFERANSER i prosa

IS225 og **`nih-is205`** («Sosiologiske perspektiver på idrett», nærmeste søster)
deler et betydelig teoriapparat. **Begge bøker er ennå ikke bygget** — derfor
brukes **prosa-kryssreferanser** («samme apparat drøftes i idrettssosiologien»),
IKKE markdown-lenker til is205-kapitler (ingen døde lenker). Del 3 (Bourdieu),
Del 5 (etnisitet) og Del 6 (kjønn) markerer i Forkunnskaper-blokken at
teorikjernen deles med idrettssosiologi-emnet, men at IS225 vinkler apparatet
mot **helse/folkehelse** mens is205 vinkler mot **idrettsdeltakelse som sådan**
— for å unngå dybdegjentakelse. Kryssreferansene skrives som prosa; når
`nih-is205` senere bygges, kan de oppgraderes til markdown-lenker.

### Kapittel-DNA — temakapittel (drøftingsarketype)

Obligatorisk blokk-rekkefølge (plattformens blokktyper), i læringsløkker per begrep:

1. `tip` **Eksamensvinkel** — frekvens/vekt, hvilke sjangre (DRØFT/RED+/FEM/…)
   temaet inngår i, hva sensor ser etter. Fylles fra skjelettets Eksamensbelegg —
   forfatteren finner IKKE på frekvenstall.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + prosa-kryssreferanse
   til `nih-is205` der teorikjernen deles (README-leserkrav; «Sist du var her»-
   oppfrisking av nøkkelbegreper i sene/tunge kapitler).
3. `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på, hvor
   det står i faglige debatter. Åpner de mest testede ABSTRAKTE temaene med et
   **konkret hverdagsanker** før begrepsapparatet (README «Hverdagsanker»).
4. **Læringsløkke per begrep** (gjentas): `definition` **Kjernebegrep** (presist +
   navngitt pensumforankring, flashcard-kilde) → `text` posisjoner/spenninger der
   pensum rommer uenighet → `example` anvendt mini-case (skrevet slik en god
   besvarelse ville, med eksplisitte pensumreferanser) → `exercise` INLINE
   drøftings-/anvendelsesoppgave på samme begrep. Deretter neste begrep.
5. `warning` **Typiske feil** — feilkodene (#1–#12) som gjelder temaet, glosset
   ved første bruk; inkl. eksplisitt «stopper på redegjørelse» (#1) og der
   relevant «individualiserer helse ukritisk» (#8).
6. `exercise` (samlet, hvis noen ikke er inline) × til kvoten — 2–3 begreps-/
   kontrollspørsmål (lett, ren gjengivelse med egne ord), 1–2 kortdrøftinger
   (løsning = disposisjonsforslag + momentliste), 1–2 eksamenslike essayoppgaver
   (løsning = momentliste + disposisjon, ikke fullt essay). Hint på alle (første
   hint = begrepet/forankringen/første grep, ALDRI konklusjonen). Difficulty
   spredt; minst noen «(krevende)».
7. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → hvilke begreper/
   poenger de «eier» (flashcard-råstoff). Åpner med begrepsbank-notisen.

### Kapittel-DNA — sjangerkapittel (Del 10.1)

1. `tip` Eksamensvinkel: sjangeren over årene. · 2. `text` **Oppskrift** —
trinn-for-trinn disponering per sjanger, med tidsbudsjett for 4-t-eksamen. ·
3. `example` gjennomskrevet besvarelse med margkommentarer. · 4. `exercise`
nyskrevne oppgaver i sjangeren med momentliste-løsninger. Inkl. den **binære
selvrettingsrubrikken** for drøfting (0/1-sjekkliste, DNA-drofting) og «hvem
eier hva»-kortet.

### Kapittel-DNA — modellbesvarelse (Del 10.2–10.4)

1. Nyskrevet eksamensoppgave i reell sjanger. · 2. `collapsible` **A-besvarelse**
(full tekst, margnotater «her: begrep + forankring», «her: motargument — løfter
til A»; pausepunkt-markører). · 3. `collapsible` **Kommentert C-besvarelse**
(samme oppgave, korrekt men flat, ærlig merket som C, med gapet opp til A). ·
4. `collapsible` **Autentisk B-/midtnivå-besvarelse** (ekte studentspråk, litt
rotete men god, med de 2–3 grepene som skiller den fra A). · 5. `tip`
**Sensorblikket** — momentliste og vektlegging + selvdiagnose-sjekkliste (☐).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = telte belegg (år/oppgaver) + sjangerkoder
> (DRØFT/RED+/FEM/ABC/VEIE/HIST) + prioritetsklasse, alt «per 2022/23–2024/25-arkivet».
> **Begrepskontrakt** = begreper som SKAL defineres, med pensumforankring
> (forfatter/verk) per begrep (flashcard-kilden; forfatterkoblinger `(verifiser)`
> er utgave-sensitive). **Drøftingsakser** = spenningene kapitlet ruster til å
> drøfte. **Kvote** = quiz/flashcards.

### Del 0 — Eksamenskart og drøftingshåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes IS225
**id:** `nih-is225-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen (4-timers skriftlig skoleeksamen uten hjelpemidler,
  3 av 4 oppgaver som teller likt, «forklar + drøft»-todelingen, «fem-begreper»-
  oppgaven, muntlig gruppepresentasjon som arbeidskrav), de sentrale temaene,
  temafrekvensene, sensorkravene og kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet 2022/23–2024/25). Skal formidle:
  (a) **formen** — dagens ordning er 4-t skoleeksamen uten hjelpemidler, velg 3 av 4
  oppgaver som teller likt; tidligere hjemmeeksamener (1-uke, så 3-dager) er fortsatt
  relevant øvingsmateriale; (b) **signaturtemaet** helsedyrking + de tre
  ulikhetsaksene (klasse, kjønn, etnisitet) + de to teorigrunnpilarene (Bourdieu,
  Foucault); (c) **temafrekvens-tabellen** (analysen §2); (d) **sensorkravene** (§2);
  (e) **kildeforbeholdet** — kort tidsvindu (3 år), format skiftet to ganger,
  emneansvar skiftet Dowling → Sisjord → skoleeksamen styrer prognosen; (f) den nye
  **«fem-begreper»-oppgaven** som viktigste enkeltendring. Prioritet: perfekt (meta).
- **Innholdskontrakt:** (1) **Orienteringsboks «Slik leser du denne boka»**
  (type `text`/`tip`, IKKE `definition`): karakterskalaen og hva «C-stoff»/«A-markør»
  betyr, at C er en god og vanlig karakter (særlig tidlig i studiet), sjangerkodene
  (DRØFT/RED+/FEM/ABC/VEIE/HIST) skrevet fullt ut, og at typiske feil har et samlet
  register (#1–#12). (2) **Kildenote for frekvens-/sensor-empirien:** eksakt hvilke
  sett/veiledninger analysen bygger på (6 sett + 6 sensorveiledninger, 2022/23–2024/25)
  og forbeholdet om nye sett — hentet fra EKSAMENSANALYSE.md, ALDRI oppdiktet.
  (3) **Prognosen:** nesten sikkert kommer helsedyrking, minst én av
  klasse/kjønn/etnisitet, Bourdieu- og/eller Foucault-anvendelse, og (skoleeksamen)
  en «fem-begreper»-oppgave. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver: «gitt en 4-t
  skoleeksamen med 4 oppgaver — sett opp tidsbudsjett og velg-3-av-4-strategi»;
  «avgjør av en oppgavetekst om den er DRØFT, RED+ eller FEM».
- **Typiske feil:** Metafeilene: tro at hjemmeeksamensbredden holder for skoleeksamen
  (må kunne pensum utenat); overse «fem-begreper»-formatet; svare på flere enn 3
  oppgaver (ingen ekstra uttelling).
- **Kvote:** 12 quiz / 10 flashcards (formfakta, temafrekvens, sensorkravene,
  sjangerkodene, kildeforbeholdet).

#### Kapittel 0.2: Drøftingshåndverket — fra redegjørelse til drøfting
**id:** `nih-is225-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-0-1`

- **Kapitteltype:** håndverkskapittel (meta — essaystruktur + karakterskillet).
- **Description:** De to ferdighetene som gir uttelling på hver oppgave: å bygge en
  **koherent drøftingsbesvarelse** (problemforståelse → begrepsavklaring MED
  pensumreferanse → strukturert drøfting med motargumenter → konklusjon som svarer
  på spørsmålet) og å **krysse terskelen fra redegjørelse (C) til selvstendig
  drøfting (A/B)**. Etablerer strukturen resten av boka trener.
- **Eksamensbelegg:** Gjennomgående (sensorkrav 1, 2, 8 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper:** kap. 0.1. Ingen fagforkunnskap.
- **Begrepskontrakt (flashcard-kilde):** **redegjørelse** (RED — presis, pensum-
  forankret gjengivelse; C-nivået) vs. **drøfting** (anvendelse, problematisering,
  veiing av styrker/svakheter, sammenligning av kilder; A/B-nivået); **pensumforankring**
  (navngitt forfatter/verk); **rød tråd** (koherent innledning–hoveddel–avslutning);
  **motargument/innvending** (fra navngitt pensumtenker); **definisjonsmakt** (hvem
  får definere hva helse/god kropp er). **Den binære selvrettingsrubrikken** (0/1):
  ☐ standpunkt i første avsnitt? ☐ minst én eksplisitt kobling («som vist over»)?
  ☐ innvending fra navngitt pensumtenker? ☐ svart på innvendingen? ☐ forbehold i
  konklusjonen? ☐ alle delspørsmål besvart?
- **Drøftingsakser:** Når er en konklusjon skarp vs. veid (begge kan være A);
  hvor mye plass redegjørelse vs. drøfting bør få (drøfting tyngst).
- **Case-forslag:** Ta en kort ren-redegjørelse-tekst om helsedyrking og vis
  før/etter: samme innhold, men med drøftingsledd tilføyd → hvordan svaret løftes
  fra C til A/B. **Erfarings-broen:** vis hvordan «jeg jobber på helsestasjon og
  ser …» konverteres til pensumforankret argument.
- **Typiske feil:** #1 (stopper på redegjørelse), #6 (tett parafrase), #7 (oppramsing),
  #9 (synsing uten forankring).
- **Innholdskontrakt (Del 0-pakken, README-leserkrav):** (a) **«Lite tid?»-boks**
  (`tip`): hurtigrute for 3–5 dager (kapittelrekkefølge + timeanslag av summerte
  estimatedMinutes) — med presisering at tidsanslagene er LESEtid (skriv-for-hånd ≈ ×1,5);
  (b) **fulltidsplan** og (c) **deltidsrute** (10–12-ukers plan ~8 t/uke, øvingseksamener
  fordelt på flere økter — aldri stablet i siste uke); (d) **prosedyre-/sjangerkort på
  ÉN side** (sjanger → én linjes oppskrift → tidsbudsjett → vanligste feil), ikke en
  lenkeliste; (e) **«lese mye, skrive lite»-boks** (legitim rute + minimumsråd: skriv
  minst ÉN øvingseksamen for hånd på tid — fire timer håndskrift er en fysisk ferdighet);
  (f) **«hvem eier hva»-kort** (collapsible: gjennomgående eksempel → tenker → poeng)
  som gjenopptaksverktøy.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av eksamenstreningen i Del 10).

### Del 1 — Helsedyrking og helsisme *(prioritet: PERFEKT — signaturtema, score 6)*

#### Kapittel 1.1: Hva helsedyrking er — og hvorfor det oppsto
**id:** `nih-is225-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (perfekt — emnets signaturtema).
- **Description:** Helsedyrking/helsisme som fenomen: helse som «superverdi»/panverdi
  og individuelt prosjekt («du er din egen helsesmed»), og fremveksten (risikosamfunn,
  medikalisering, nyliberalisme, helse som moralsk plikt og statussymbol). Ledd 1 i
  emnets faste signatur-oppgave.
- **Eksamensbelegg:** Signaturtemaet, i **6 av 12 sett** (2022H Del A, 2023V O2,
  2023H O4, 2024V O1-kobling, 2024H O4 som «fem-begreper»-element, 2025V O3+O4).
  Sjangre: DRØFT (kjernearketypen), FEM (helsisme som begrep). Oppgaven **resirkuleres
  nesten ordrett** (2022H/2023H/2025V) — direkte eksamensrelevant å trene på. Prioritet:
  perfekt.
- **Forkunnskaper:** kap. 0.2 (drøftingshåndverket). **Hverdagsanker** før apparatet:
  aktivitetsklokka/treningsappen som «prosjekt» de fleste kjenner.
- **Begrepskontrakt (flashcard-kilde):** **helsedyrking/helsisme** (Fugelli & Ingstad,
  *Helse på norsk*, «Tre forståelseshorisonter» — helse som superverdi/panverdi);
  **«du er din egen helsesmed»** (individualisering av helseansvar); **helse som
  individuelt prosjekt** vs. kollektivt/strukturelt anliggende; **risikosamfunn**
  (Beck, via pensum `(verifiser)`); **medikalisering** (stadig flere livsområder
  forstås medisinsk); **nyliberalisme** (helse som eget ansvar, marked); **helse som
  moralsk plikt og statussymbol** (Lupton 2015; Evans & Davies 2004 `(verifiser)`);
  **helse som forbruksvare**.
- **Drøftingsakser:** Individuelt ansvar vs. strukturell/kollektiv årsak; helse som
  frigjøring vs. helse som ny moralsk tvang; medikalisering som fremskritt vs.
  problematisk utvidelse.
- **Case-forslag:** En nyliberalistisk «ta ansvar for egen helse»-kampanje analysert
  gjennom «superverdi»- og «individuelt prosjekt»-begrepene, med Fugelli & Ingstad
  eksplisitt referert.
- **Typiske feil:** #2 (helsedyrking uten «superverdi»/individuelt prosjekt),
  #8 (reproduserer helsesmed-logikken ukritisk — faglig kjernefeil), #9 (synsing).
- **Kvote:** 24 quiz / 28 flashcards.

#### Kapittel 1.2: Uheldige konsekvenser — samfunnet og utsatte grupper
**id:** `nih-is225-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-1-1`

- **Kapitteltype:** temakapittel (perfekt — drøftingsleddet i signatur-oppgaven).
- **Description:** Ledd 2 i signatur-oppgaven: drøft hvilke uheldige konsekvenser en
  forståelse av helse som individuelt prosjekt kan ha for **samfunnet generelt** og
  for **utsatte sosiale grupper spesielt** (skam/skyld/stigmatisering, reprodusert
  ulikhet, «victim blaming»). Her ligger A/B-stoffet.
- **Eksamensbelegg:** Del 2 av signatur-oppgaven (samme 6 sett som 1.1). Sjanger:
  DRØFT (ledd 2 avgjør A/B mot C). Prioritet: perfekt.
- **Forkunnskaper:** kap. 1.1 (helsedyrking-begrepene). Kobler framover til Foucault
  (Del 2) og sosial ulikhet (Del 4) — nevnes som utdypning der.
- **Begrepskontrakt (flashcard-kilde):** **victim blaming** (den syke får skylden for
  egen sykdom); **stigmatisering/skam/skyld** (Lupton 2015); **reproduksjon av ulikhet**
  (de med minst ressurser rammes hardest av individualiseringen); **helsegapet**
  (introduseres her, utdypes i Del 4); **moralisering av helse** (helse som dyd);
  **fatalistisk aksept av risiko** (de som opplever helse som uoppnåelig gir opp).
- **Drøftingsakser:** Rammer individualiseringen alle likt, eller forsterker den
  eksisterende ulikhet? Er skam en effektiv motivator eller en skadelig mekanisme?
- **Case-forslag:** En «livsstilssykdom»-diskurs som legger ansvaret på individet,
  drøftet mot at sosiale determinanter (klasse, bosted, økonomi) styrer handlingsrommet.
  **Vippe-case** «(omstridt — begge forsvarlige)»: er statlige aktivitetskampanjer et
  folkehelsegode eller en individualiserende moraliseringsmekanisme?
- **Typiske feil:** #1 (blir stående i redegjørelse fra 1.1), #8 (ukritisk
  individualisering), #10 (drøfter helse generelt i stedet for konsekvenser for
  *bestemte* grupper).
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 1.3: Helsedyrking i praksis — modellsvar og drøftingstrening
**id:** `nih-is225-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-is225-1-2`

- **Kapitteltype:** anvendelses-/treningskapittel (perfekt).
- **Description:** Full gjennomgang av signatur-oppgaven fra oppgavetekst til
  disposisjon: hvordan strukturere «forklar (1.1) + drøft konsekvenser (1.2)» slik
  at drøftingen veier tyngst, med eksplisitt markering av *hvor* redegjørelse blir
  til drøfting. Bindeledd til modellbesvarelsen i Del 10.
- **Eksamensbelegg:** Signatur-oppgaven samlet (6 av 12 sett). Sjanger: DRØFT.
  Prioritet: perfekt.
- **Forkunnskaper:** kap. 1.1 + 1.2. «Sist du var her»-oppfrisking av de tre
  fremvekstårsakene og «superverdi»-definisjonen.
- **Innholdskontrakt:** Én gjennomskrevet **kort modelldisposisjon** (momentliste,
  ikke fullt essay) + `tip` med tidsbudsjett for oppgaven i en 4-t-eksamen. **Kald
  bank** (del av eksamenstreningen): 3–4 uvante vinklinger på helsedyrking uten hint
  (fasit = momentliste).
- **Oppgavesjangre:** DRØFT-kloner (nyskrevne, endret kampanje/gruppe), med
  disposisjonsforslag + binær selvrettingsrubrikk i fasit.
- **Typiske feil:** #1, #7, #10 (som over).
- **Kvote:** 18 quiz / 14 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A helsedyrking-begrepene · 1.B fremvekst-
årsakene · 1.C konsekvenser for utsatte grupper · 1.D samlet DRØFT-prøve på
eksamensnivå). «Kan trygt deles over flere kvelder — én prøve per økt.»

### Del 2 — Foucault: makt, biomakt og bio-pedagogikk *(prioritet: PERFEKT — score 5)*

#### Kapittel 2.1: Teknologi av selvet, biomakt og normalisering
**id:** `nih-is225-2-1` · **number:** 2.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (perfekt — teoretisk grunnpilar).
- **Description:** Foucaults maktapparat anvendt på helse: teknologi av selvet
  (selvovervåking og selvregulering), biomakt (makt over liv og befolkning),
  disiplinering og normalisering («i det sunnes navn»). Grunnlaget for helsedyrking
  og helsekampanjer.
- **Eksamensbelegg:** I **5 av 12 sett** (2022H Del A teknologi av selvet, 2024H O3
  bio-pedagogikk, 2023H O3 avsky-strategier, 2024V O1 kropp). Sjangre: DRØFT, RED+,
  FEM. Prioritet: perfekt.
- **Forkunnskaper:** kap. 0.2. Kobler til helsedyrking (Del 1). **Hverdagsanker:**
  skrittelleren som får deg til å overvåke deg selv = teknologi av selvet i praksis.
- **Begrepskontrakt (flashcard-kilde):** **teknologi av selvet** (technology of the
  self — Foucault, via Lupton/Nettleton; individet regulerer seg selv etter en norm);
  **biomakt** (makt rettet mot befolkningens liv, helse og reproduksjon); **disiplinering
  og selvovervåking**; **normalisering** (avvik måles mot en konstruert normal);
  **«i det sunnes navn»** (helse som legitimerende maktdiskurs). Forfatterkoblinger
  `(verifiser)` (Foucault leses via sekundærlitteratur: Lupton 2015, Nettleton 2013).
- **Drøftingsakser:** Er selvovervåking frigjøring eller ny disiplinering? Hvem setter
  «normalen»? Makt som undertrykkende vs. produktiv (Foucaults poeng: makt skaper
  subjekter, ikke bare forbyr).
- **Case-forslag:** En helseapp som «myndiggjør» brukeren, analysert som teknologi
  av selvet — brukeren disiplinerer seg selv frivillig etter en helsenorm.
- **Typiske feil:** #2 (teknologi av selvet uten selvregulerings-koblingen),
  #11 (nevner Foucault uten å anvende ham), #6 (parafrase).
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 2.2: Bio-pedagogikk og helsekampanjenes «avsky»-strategier
**id:** `nih-is225-2-2` · **number:** 2.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Bio-pedagogikk (hvordan skole/kampanjer lærer befolkningen «riktig»
  kropps- og helseatferd) og mobilisering av **avsky/legemlig ubehag** («pedagogy of
  disgust») som virkemiddel — hensikt + kritisk problematisering (moralisering, skam,
  manglende evidens).
- **Eksamensbelegg:** I 3 av 12 sett (2023H O3, 2024H O3 bio-pedagogikk, 2025V O4c
  avsky). Sjangre: RED+, VEIE, FEM. **RED+-eksempel:** «Gjør rede for bio-pedagogikk.
  Drøft hvordan undervisning fundert på bio-pedagogikk kan ha negative effekter.»
  Prioritet: perfekt (høyfrekvent Foucault-anvendelse).
- **Forkunnskaper:** kap. 2.1 (biomakt, normalisering). «Sist du var her»-oppfrisking
  av teknologi av selvet.
- **Begrepskontrakt (flashcard-kilde):** **bio-pedagogikk** (Wright/Burrows `(verifiser)`;
  disiplinerende læring om kropp/helse); **«pedagogy of disgust»/avsky-strategi**
  (Lupton 2015; mobilisering av legemlig ubehag mot f.eks. fedme); **«den gode
  borger»** (helse som borgerplikt); **moralisering**; **manglende evidens** (avsky
  virker ofte mot sin hensikt).
- **Drøftingsakser:** Effektivitet vs. skade ved avsky-kampanjer; folkeopplysning vs.
  stigmatisering; helse som individuell plikt vs. kollektivt anliggende.
- **Case-forslag:** En anti-fedme-kampanje som bruker frastøtende bilder, drøftet som
  bio-pedagogisk avsky-strategi — hensikt, mekanisme og hvorfor den kan ramme skjevt.
- **Typiske feil:** #5 (bare beskriver kampanjen, veier ikke styrker/svakheter),
  #8 (ukritisk), #12 (blander bio-pedagogikk med ren informasjon).
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A Foucault-begrepene · 2.B teknologi av selvet
anvendt · 2.C bio-pedagogikk (RED+) · 2.D avsky-strategier (VEIE) på eksamensnivå).

### Del 3 — Bourdieu: habitus, kapital og symbolsk vold *(prioritet: PERFEKT — score 5; delt teorikjerne med `nih-is205`)*

#### Kapittel 3.1: Habitus og de tre kapitalformene
**id:** `nih-is225-3-1` · **number:** 3.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (perfekt — det dominerende teoriapparatet).
- **Description:** Bourdieus verktøykasse for å analysere klasse og deltakelse:
  habitus (kroppsliggjorte disposisjoner formet av oppvekstmiljø) og de **tre
  kapitalformene** (økonomisk, kulturell, sosial) + symbolsk kapital. Terskelkravet
  for C i Bourdieu-oppgaver.
- **Eksamensbelegg:** I **5 av 12 sett** (2023V Del A, 2024H O4c symbolsk vold, 2025V
  O1 klasse, 2025V O4f habitus). Sjangre: DRØFT, FEM. Bourdieu/klasse-oppgaven
  **resirkuleres** (2023V, 2025V). **Terskelkrav:** habitus + alle tre kapitalformene
  MÅ være nevnt for C (#3). Prioritet: perfekt.
- **Forkunnskaper:** kap. 0.2. **Prosa-kryssreferanse til `nih-is205`:** samme
  Bourdieu-apparat drøftes i idrettssosiologien, men der vinklet mot idrettsdeltakelse;
  her vinklet mot helse/aktivitet. **Hverdagsanker:** hvorfor «vokser» noen inn i
  friluftsliv/golf og andre ikke — smak som klasse, ikke tilfeldighet.
- **Begrepskontrakt (flashcard-kilde):** **habitus** (Bourdieu, anvendt av Fitzpatrick
  2020, Wiltshire, Lee & Williams 2019 `(verifiser)`; kroppsliggjorte disposisjoner);
  **økonomisk kapital** (materielle ressurser); **kulturell kapital** (utdanning,
  smak, kunnskap — også kroppsliggjort); **sosial kapital** (nettverk, relasjoner);
  **symbolsk kapital** (anerkjennelse, prestisje). Alle fire med presis definisjon.
- **Drøftingsakser:** Er smak/livsstil fritt valg eller klassebetinget? Kan kapital
  konverteres mellom formene? Reproduseres helseulikhet via habitus (framoverkobling
  til Del 4)?
- **Case-forslag:** To ungdommer fra ulik klassebakgrunn og deres ulike vei inn i
  (eller ut av) organisert idrett, analysert med habitus + kapitalformene.
- **Typiske feil:** #3 (glemmer én eller flere av habitus/de tre kapitalformene →
  automatisk under C), #2 (habitus uten klasse-koblingen), #11 (nevner Bourdieu uten
  å anvende ham).
- **Kvote:** 24 quiz / 28 flashcards.

#### Kapittel 3.2: Symbolsk vold, felt og doxa — anvendt på aktivitet
**id:** `nih-is225-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-3-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Bourdieus videre apparat: symbolsk vold (den dominerte anerkjenner
  dominansen som legitim), felt (arena med egne spilleregler) og doxa (det tatt-for-gitte).
  Verktøyet for A/B-drøfting av hvordan idrettens/helsens «selvfølgeligheter» reproduserer
  ulikhet.
- **Eksamensbelegg:** I 2 av 12 sett som eget ledd (2024H O4c symbolsk vold, + inngår
  i DRØFT-oppgavene). Sjangre: DRØFT, FEM. Prioritet: perfekt (A/B-hevende Bourdieu-stoff).
- **Forkunnskaper:** kap. 3.1 (habitus, kapital). «Sist du var her»-oppfrisking av de
  tre kapitalformene.
- **Begrepskontrakt (flashcard-kilde):** **symbolsk vold** (den dominerte oppfatter den
  rådende orden som naturlig/legitim); **felt** (relativt autonom arena med egne
  innsatser og regler — f.eks. «idrettsfeltet»); **doxa** (det uuttalt selvfølgelige
  som ikke settes spørsmålstegn ved); **legitim kropp/smak** (den dominerende gruppens
  standard framstår som «den riktige»).
- **Drøftingsakser:** Hvordan blir én kroppsnorm/aktivitetsform «den legitime»? Er
  symbolsk vold forenlig med at aktørene opplever frie valg?
- **Case-forslag:** En «riktig» treningskropp som norm alle måler seg mot, analysert
  som symbolsk vold + doxa i helsefeltet.
- **Typiske feil:** #2 (symbolsk vold forvekslet med fysisk tvang), #11 (begrepet nevnt
  uten anvendelse), #1 (stopper på redegjørelse).
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A habitus + de tre kapitalformene (terskelsjekk) ·
3.B kapitalkonvertering · 3.C symbolsk vold/felt/doxa · 3.D Bourdieu+klasse (DRØFT)
på eksamensnivå).

### Del 4 — Sosial klasse og sosial ulikhet i helse *(prioritet: PERFEKT — score 5)*

#### Kapittel 4.1: Helse er sosialt strukturert — gradient og helsegap
**id:** `nih-is225-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-3-1`

- **Kapitteltype:** temakapittel (perfekt — emnets erklærte kjerne).
- **Description:** At helse er **sosialt strukturert**: den sosiale gradienten (helse
  følger sosioøkonomisk status trinnvis), helsegapet, og hvordan ulikhet reproduseres
  — koblet til Bourdieus habitus fra Del 3.
- **Eksamensbelegg:** I **5 av 12 sett** (2023H O1 digital ulikhet, 2024V O2 klasse+kjønn,
  2025H O4a+O4b, 2025V O1). Sjangre: DRØFT, FEM, ABC. Emneplanens erklærte læringsutbytte.
  Prioritet: perfekt.
- **Forkunnskaper:** kap. 3.1 (habitus/kapital — reproduksjonsmekanismen). «Sist du var
  her»-oppfrisking av habitus. **Hverdagsanker:** hvorfor lever direktøren i snitt lenger
  enn renholderen — helse følger posisjon.
- **Begrepskontrakt (flashcard-kilde):** **helse er sosialt strukturert** (Mæland 2021;
  Øversveen & Rydland 2021 `(verifiser)`); **sosial gradient** (helse bedres trinnvis
  oppover den sosiale rangstigen — ikke bare fattig/rik); **helsegapet** (systematisk
  forskjell i helse mellom sosiale grupper); **reproduksjon av helseulikhet** (via
  habitus, ressurser, handlingsrom); **sosial klasse** (som analytisk variabel).
- **Drøftingsakser:** Er helseulikhet et resultat av individuelle valg eller strukturelle
  betingelser? (Kobler til #8.) Hvorfor lukkes ikke gapet av folkehelsetiltak?
- **Case-forslag:** Aktivitetsnivå fordelt etter utdanning/inntekt, drøftet som sosial
  gradient snarere enn ulik «viljestyrke».
- **Typiske feil:** #8 (individualiserer det strukturelle), #4 (bruker bare én kilde),
  #11 (nevner klasse uten å bruke den som analyseverktøy).
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 4.2: Klasse i kombinasjon — interseksjon og reproduksjon
**id:** `nih-is225-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-4-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Klasse i samspill med de andre aksene (kjønn, etnisitet) —
  interseksjonalitet som analyseverktøy — og hvordan ulikhet reproduseres over
  generasjoner. Oppgavene kombinerer ofte to akser (klasse + kjønn 2024V).
- **Eksamensbelegg:** I 2 av 12 sett som kombinasjonsoppgave (2024V O2 klasse+kjønn,
  2025V O1). Sjanger: DRØFT. Prioritet: perfekt (A/B-hevende kombinasjonsstoff).
- **Forkunnskaper:** kap. 4.1 (gradient/gap). Foregriper etnisitet (Del 5) og kjønn
  (Del 6) — begrepene defineres kort her, utdypes der. Prosa-kryssreferanse til
  `nih-is205` (sosial ulikhet i idrettsdeltakelse).
- **Begrepskontrakt (flashcard-kilde):** **interseksjonalitet** (Crenshaw `(verifiser)`;
  ulikhetsakser virker sammen, ikke additivt); **kumulativ ulempe** (flere aksers
  samvirkning forsterker); **sosial reproduksjon** (ulikhet føres videre via familie,
  skole, habitus).
- **Drøftingsakser:** Virker aksene additivt eller multiplikativt? Kan ett tiltak
  treffe alle akser samtidig, eller kreves målrettede tiltak?
- **Case-forslag:** En gruppe (f.eks. minoritetsjenter fra lavinntektsfamilier) og
  deres lave deltakelse, drøftet interseksjonelt (klasse × kjønn × etnisitet).
- **Typiske feil:** #12 (behandler aksene som uavhengige), #1 (redegjør for hver akse
  uten å drøfte samspillet), #10.
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A sosial gradient/helsegap · 4.B reproduksjon via
habitus · 4.C interseksjonalitet · 4.D klasse+kjønn kombinasjonsoppgave (DRØFT) på
eksamensnivå).

### Del 5 — Etnisitet, innvandring og deltakelse *(prioritet: PERFEKT — score 5; delt teorikjerne med `nih-is205`)*

#### Kapittel 5.1: Etnisitet, rase og integrasjon
**id:** `nih-is225-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Det avgjørende skillet **etnisitet** (felles opprinnelse/kultur,
  sosialt konstruert) vs. **rase** (biologisk kategori) som sensor tester, og
  integrasjons-begrepet (typer integrasjon).
- **Eksamensbelegg:** I **5 av 12 sett** (2022H Del B O2, 2024V O3 minoriteter, 2025H
  O2 etnisitet, 2025V O4d+O4e). Sjangre: RED+, FEM. **RED+-eksempel:** «Gjør rede for
  begrepet etnisitet. Drøft betydningen av etnisitet for deltakelse i idrett og fysisk
  aktivitet.» Prioritet: perfekt.
- **Forkunnskaper:** kap. 0.2. Prosa-kryssreferanse til `nih-is205` (etnisitet/integrasjon
  i idrett — delt kjerne). **Hverdagsanker:** hvorfor er noen idretter «norske» og andre
  «innvandreridretter»?
- **Begrepskontrakt (flashcard-kilde):** **etnisitet** (Lenneis & Pfister 2016; Sisjord,
  Fasting & Sand 2011 `(verifiser)`; felles opprinnelse/kultur — sosialt, ikke biologisk);
  **rase** (biologisk kategori — sensor tester skillet, #12); **integrasjon** (typer:
  strukturell, kulturell, sosial — Fekjær `(verifiser)`); **assimilering** vs. **integrasjon**.
- **Drøftingsakser:** Er «integrasjon gjennom idrett» en realistisk vei eller en
  forenkling? Hvem skal tilpasse seg hvem?
- **Case-forslag:** Et integreringstiltak via fotball, drøftet: fremmer det integrasjon
  eller reproduserer det majoritetens normer?
- **Typiske feil:** #12 (blander etnisitet og rase), #2 (etnisitet uten det sosiale/
  konstruerte), #1.
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 5.2: Barrierer for minoritetsdeltakelse
**id:** `nih-is225-5-2` · **number:** 5.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-5-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** De forklarte barrierene for etniske minoriteters deltakelse i idrett/
  fysisk aktivitet: kulturelle/religiøse normer, kjønnsroller, sosioøkonomi, rasisme og
  eksklusjon — og drøfting av hvilke som veier tyngst.
- **Eksamensbelegg:** I 3 av 12 sett (2024V O3, 2025H O2 drøftingsledd, 2025V O4e
  «forklaringer på lav minoritetsdeltakelse»). Sjangre: DRØFT, FEM. Prioritet: perfekt.
- **Forkunnskaper:** kap. 5.1 (etnisitet/integrasjon). Kobler til kjønn (Del 6) og klasse
  (Del 4) — interseksjonell forklaring. «Sist du var her»-oppfrisking av etnisitet-definisjonen.
- **Begrepskontrakt (flashcard-kilde):** **kulturelle/religiøse normer** (som barriere,
  f.eks. bekledning, kjønnsdeling); **sosioøkonomiske barrierer** (kostnad, tid, transport);
  **rasisme og eksklusjon** (Hamzeh & Oliver 2012; Strandbu m.fl. 2019 `(verifiser)`);
  **interseksjonell barriere** (kjønn × etnisitet × klasse virker sammen).
- **Drøftingsakser:** Ligger barrieren hos minoriteten («kultur») eller i
  majoritetssamfunnets strukturer? (Unngå kulturaliserende forklaring — #8/#11.)
- **Case-forslag:** Lav svømmedeltakelse blant minoritetsjenter, drøftet interseksjonelt
  framfor som ren «kulturforklaring».
- **Typiske feil:** #11 (kulturaliserer uten strukturell analyse), #4 (én kilde),
  #10 (drøfter integrasjon generelt i stedet for barrierene oppgaven spør om).
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A etnisitet vs. rase (skillet) · 5.B integrasjonstyper ·
5.C barrierer for minoritetsdeltakelse · 5.D etnisitet+deltakelse (RED+/DRØFT) på
eksamensnivå).

### Del 6 — Kjønn og den kjønnede idretten *(prioritet: PERFEKT — score 5; delt teorikjerne med `nih-is205`)*

#### Kapittel 6.1: Biologisk vs. sosialt kjønn og kjønnede diskurser
**id:** `nih-is225-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Skillet **biologisk kjønn (sex)** vs. **sosialt kjønn (gender)** som
  sensor tester, og hvordan kjønnede normer/diskurser (maskuline diskurser i idrett/
  kroppsøving) former deltakelse og kroppsidealer.
- **Eksamensbelegg:** I **5 av 12 sett** (2023V O4 kjønnsperspektiv, 2023H O2 kjønnede
  normer, 2024V O2, 2024H O4d «den kjønnede idretten», 2025V O2). Sjangre: DRØFT, FEM.
  Prioritet: perfekt.
- **Forkunnskaper:** kap. 0.2. Prosa-kryssreferanse til `nih-is205` (den kjønnede idretten —
  delt kjerne). **Hverdagsanker:** hvorfor forbindes styrketrening med «maskulint» og
  yoga med «feminint»?
- **Begrepskontrakt (flashcard-kilde):** **biologisk kjønn (sex)** (biologisk kategori);
  **sosialt kjønn (gender)** (sosialt konstruert, Metcalfe & Lindsey 2020; Clark 2018
  `(verifiser)`); **kjønnede normer/diskurser** (forventninger knyttet til kjønn);
  **maskuline diskurser i idrett**; **kjønnet habitus** (kobler til Bourdieu, Del 3).
- **Drøftingsakser:** Er kjønnsforskjeller i idrett biologiske eller sosialt skapte?
  Reproduserer idretten kjønnsnormer eller utfordrer den dem?
- **Case-forslag:** Ulik framstilling av mannlige og kvinnelige utøvere i media,
  analysert som kjønnet diskurs (sex/gender-skillet eksplisitt).
- **Typiske feil:** #12 (blander biologisk og sosialt kjønn — kjernefeilen sensor
  tester), #2, #11.
- **Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 6.2: Skjønnhets- og forbruksdiskurs, kroppsidealer
**id:** `nih-is225-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-6-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Skjønnhetsdiskursen og forbruksdiskursen rundt (særlig kvinne)kroppen —
  kroppen som forbruks-/skjønnhetsprosjekt — og behovet for et mer kjønnsnøytralt narrativ.
- **Eksamensbelegg:** I 2 av 12 sett (2023V O4 vedlikehold av kropp, 2024H O4d/O4e).
  Sjangre: DRØFT, FEM. Prioritet: perfekt (A/B-hevende kjønnsstoff). Overlapper med
  «kroppen som symbol» (Del 9) — her vinklet mot kjønn.
- **Forkunnskaper:** kap. 6.1 (sex/gender, kjønnede diskurser). «Sist du var her»-
  oppfrisking av sex/gender-skillet.
- **Begrepskontrakt (flashcard-kilde):** **skjønnhetsdiskurs** (McGannon & Spence 2012;
  Nettleton 2013 `(verifiser)`; kroppen bedømt etter utseendenorm); **forbruksdiskurs**
  (helse/kropp som noe man kjøper seg til); **kjønnsnøytralt narrativ** (behovet for et
  alternativ til de kjønnede diskursene); **kroppslig kapital** (kobler til Bourdieu).
- **Drøftingsakser:** Rammer skjønnhets-/forbruksdiskursen kjønnene likt? Er
  «vedlikehold av kropp» frigjøring eller ny disiplinering (kobler til Foucault, Del 2)?
- **Case-forslag:** Treningssentrenes markedsføring mot kvinner, drøftet som skjønnhets-
  + forbruksdiskurs — sammenlign med hvordan menn tiltales.
- **Typiske feil:** #5 (beskriver diskursen uten å veie), #8, #1.
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A biologisk vs. sosialt kjønn (skillet) · 6.B kjønnede
diskurser i idrett · 6.C skjønnhets-/forbruksdiskurs · 6.D den kjønnede idretten (DRØFT)
på eksamensnivå).

### Del 7 — Helsedefinisjoner og helsemodeller *(prioritet: KUNNE — score 3, stigende i skoleeksamen)*

#### Kapittel 7.1: Biomedisinsk vs. sosiomedisinsk modell
**id:** `nih-is225-7-1` · **number:** 7.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** temakapittel (kunne → konseptuelt viktig i skoleeksamen).
- **Description:** De to grunnleggende helsemodellene: **biomedisinsk** (sykdom = organfeil,
  mekanisk kroppssyn, teknologisk optimisme, verdinøytralitet) vs. **sosiomedisinsk/
  sosialmedisinsk** (helse sosialt skapt, ressurs i hverdagen) — med styrker og svakheter.
- **Eksamensbelegg:** I **3 av 12 sett** (2023V O3 WHO/sosiomedisinsk, 2025H O1a, 2025V
  O4a biomedisinsk). Sjangre: VEIE, ABC, FEM. Prioritet: kunne (stigende — sentralt i
  skoleeksamen).
- **Forkunnskaper:** kap. 0.2. **Hverdagsanker:** legen behandler «feilen» vs. helse
  som noe du har ressurser til å leve godt med.
- **Begrepskontrakt (flashcard-kilde):** **biomedisinsk modell** (Fugelli & Ingstad 2009;
  Mæland 2021 `(verifiser)`; sykdom = organfeil, mekanisk kropp, verdinøytral);
  **sosiomedisinsk/sosialmedisinsk modell** (helse sosialt skapt, ressurs i hverdagen);
  **helse som fravær av sykdom** vs. **helse som velvære/ressurs**.
- **Drøftingsakser:** Hvilken modell har definisjonsmakt i helsevesenet? Styrker og
  svakheter ved hver (VEIE-sjangeren krever begge sider — #5).
- **Case-forslag:** Samme pasient forstått gjennom begge modellene — hva ser hver, hva
  overser den?
- **Typiske feil:** #5 (bare styrker, ikke svakheter), #2 (biomedisinsk uten det mekaniske
  kroppssynet), #1.
- **Kvote:** 22 quiz / 26 flashcards.

#### Kapittel 7.2: WHO-definisjonen — styrker og svakheter
**id:** `nih-is225-7-2` · **number:** 7.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-is225-7-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** WHO-definisjonen (helse som fullstendig fysisk, psykisk og sosialt
  velvære) og den klassiske VEIE-oppgaven: styrker (helhetlig, positiv) og svakheter
  (utopisk, gjør «alle» syke, medikaliserende).
- **Eksamensbelegg:** I 2 av 12 sett (2023V O3, 2025H O1a). Sjanger: VEIE, ABC.
  Prioritet: kunne. Den mest resirkulerte VEIE-oppgaven.
- **Forkunnskaper:** kap. 7.1 (de to modellene). «Sist du var her»-oppfrisking av
  sosiomedisinsk modell.
- **Begrepskontrakt (flashcard-kilde):** **WHO-definisjonen** (helse = fullstendig
  velvære, ikke bare fravær av sykdom); **styrker** (helhetlig, positivt helsebegrep,
  løfter psykisk/sosialt); **svakheter** (utopisk «fullstendig», potensielt
  medikaliserende, vanskelig å måle); **definisjonsmakt** (hvem definerer helse).
- **Drøftingsakser:** Er WHO-definisjonen et fremskritt eller en umulig standard? Bidrar
  den til medikalisering (kobler til Del 8)?
- **Case-forslag:** WHO-definisjonen brukt til å «diagnostisere» normal livsvariasjon
  som u-helse — drøft styrke vs. svakhet.
- **Typiske feil:** #5 (bare den ene siden), #1, #6 (parafraserer definisjonen tett).
- **Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A biomedisinsk vs. sosiomedisinsk · 7.B WHO-definisjonen ·
7.C styrker og svakheter (VEIE) · 7.D helsedefinisjon-ABC på eksamensnivå).

### Del 8 — Folkehelse: begrep og historisk utvikling *(prioritet: KUNNE — score 2, styrende for skoleeksamen)*

#### Kapittel 8.1: Folkehelsebølgene og sykdomspanoramaet
**id:** `nih-is225-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-7-1`

- **Kapitteltype:** temakapittel (kunne — faktastoff, styrende i skoleeksamen).
- **Description:** Folkehelsens historiske utvikling: folkehelsebølgene (fattigdoms-
  sykdommer → livsstilssykdommer → samsykdommer), forventet levealder, barnedødelighet
  og det skiftende sykdomspanoramaet i Norge fra 1900. Mer faktabasert enn diskursanalytisk.
- **Eksamensbelegg:** I **2 av 12 sett** (2024V O3 folkehelse, 2025H O1b+O1c). Sjangre:
  ABC, FEM. **Faset kraftig inn med skoleeksamenen** (Sisjord-profilen). Prioritet: kunne
  (men styrende for skoleeksamensformatet).
- **Forkunnskaper:** kap. 7.1 (helsemodeller). **Hverdagsanker:** oldemor døde av
  tuberkulose, vi dør av livsstilssykdommer — sykdomsbildet har snudd.
- **Begrepskontrakt (flashcard-kilde):** **folkehelsebølger** (Mæland 2021 `(verifiser)`;
  fattigdomssykdommer → livsstilssykdommer → samsykdommer/«den nye sykeligheten»);
  **forventet levealder**; **barnedødelighet**; **sykdomspanorama** (hvilke sykdommer
  dominerer i en epoke); **den «nye sykeligheten»** (kroniske/sammensatte lidelser);
  **folkehelse** (befolkningens helse som kollektivt anliggende).
- **Drøftingsakser:** Hva forklarer levealdersøkningen — medisin eller levekår? Er
  livsstilssykdommer et individ- eller samfunnsansvar (kobler til #8)?
- **Case-forslag:** Levealdersutviklingen 1900→i dag koblet til bølgene og til hva som
  faktisk drev endringen (levekår før medisin).
- **Typiske feil:** #7 (ramser opp bølgene uten å forklare drivkreftene), #8, #9.
- **Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 8.2: Helseparadokset, helsegapet og medikalisering
**id:** `nih-is225-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-8-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Paradoksene i moderne folkehelse: **helseparadokset** (aldri
  friskere, aldri mer bekymret for helse), **helsegapet** (vedvarende sosial ulikhet
  tross velstand) og **medikalisering** (stadig mer av livet forstås medisinsk).
  C-/drøftingsleddet i folkehelse-ABC-oppgavene.
- **Eksamensbelegg:** I 2 av 12 sett (2025H O1c drøft paradokser, 2025V O4b
  medikalisering). Sjangre: ABC (c-leddet), FEM. Prioritet: kunne.
- **Forkunnskaper:** kap. 8.1 (bølger/sykdomspanorama) + kap. 4.1 (helsegapet).
  «Sist du var her»-oppfrisking av helsegapet.
- **Begrepskontrakt (flashcard-kilde):** **helseparadokset** (bedre objektiv helse,
  økende subjektiv helsebekymring); **helsegapet** (sosial ulikhet i helse består tross
  velstandsøkning); **medikalisering** (Lian 2007 `(verifiser)`; utvidelse av det
  medisinske domenet til stadig flere livsområder); **alternativ medisin** (som symptom
  på medikalisering/umettet helsebehov).
- **Drøftingsakser:** Hvorfor lukkes ikke helsegapet av velstand? Er medikalisering
  fremskritt eller sykeliggjøring av det normale (kobler til WHO-kritikk, Del 7)?
- **Case-forslag:** En «normal» livsbelastning omdefinert til diagnose, drøftet som
  medikalisering + helseparadoks.
- **Typiske feil:** #5, #8, #10 (drøfter folkehelse generelt i stedet for paradokset
  oppgaven spør om).
- **Kvote:** 20 quiz / 18 flashcards.

**Prøve-kvote Del 8:** 4 prøver (8.A folkehelsebølgene · 8.B levealder/sykdomspanorama ·
8.C helseparadokset/helsegapet · 8.D folkehelseutvikling-ABC (1900→) på eksamensnivå).

### Del 9 — Helsekampanjer, kroppen som symbol og periferitemaer *(prioritet: KJENNE — score 1–3)*

#### Kapittel 9.1: Kroppen som symbol og kroppsprosjekt
**id:** `nih-is225-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-6-2`

- **Kapitteltype:** temakapittel (kjenne → moderat testet).
- **Description:** Kroppen som identitetsmarkør og tegn på «god/dårlig» helse:
  kroppssyn (naturalistisk/sosialkonstruktivistisk/fenomenologisk), kroppsprosjekt,
  kroppsmodifikasjon, kroppslig kapital, kropp som varemerke.
- **Eksamensbelegg:** I **3 av 12 sett** (2023V O4 vedlikehold av kropp, 2024V O1 kropp
  som symbol, 2024H O4e «kropp som varemerke»). Sjangre: DRØFT, FEM. Prioritet: kjenne
  (moderat, men konkret «fem-begreper»-stoff).
- **Forkunnskaper:** kap. 6.2 (skjønnhets-/forbruksdiskurs) + kap. 2.1 (selvovervåking).
  «Sist du var her»-oppfrisking av kroppslig kapital.
- **Begrepskontrakt (flashcard-kilde):** **kroppen som symbol og varemerke** (Engelsrud
  2006 `(verifiser)`; kroppen som identitetsmarkør/tegn); **kroppsprosjekt** (kroppen som
  noe man kontinuerlig arbeider med); **kroppssyn** (naturalistisk vs. sosialkonstruktivistisk
  vs. fenomenologisk); **kroppslig kapital** (Bourdieu-koblet); **kroppsmodifikasjon**.
- **Drøftingsakser:** Er kroppsprosjektet frigjøring eller disiplinering (Foucault)? Blir
  kroppen et klasse-/kjønnstegn (Bourdieu/kjønn)?
- **Case-forslag:** En veltrent kropp lest som «tegn på god helse og moral», drøftet som
  symbol + kroppslig kapital.
- **Typiske feil:** #2 (kroppssynene forvekslet), #1, #11.
- **Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 9.2: Digital helseteknologi
**id:** `nih-is225-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-is225-2-1`

- **Kapitteltype:** temakapittel (kjenne — «bør kjenne til»; mulig comeback-tema).
- **Description:** Fitness-apper/aktivitetsmålere, stordata, personvern, og sosial
  ulikhet i tilgang — velferds- vs. helseteknologi. **Fremtredende i hjemmeeksamenene
  (2022–2023), ikke gjenfunnet i skoleeksamen** — merkes «bør kjenne til».
- **Eksamensbelegg:** I 2 av 12 sett, begge hjemmeeksamener (2022H Del B O3, 2023H O1
  digital ulikhet). Sjangre: DRØFT, VEIE. Prioritet: kjenne (lavfrekvent i skoleeksamen —
  plasseres ETTER de viktigere temaene, jf. README «kun eksamensrelevant»).
- **Forkunnskaper:** kap. 2.1 (teknologi av selvet) + kap. 4.1 (sosial ulikhet). Prosa-
  kryssreferanse.
- **Begrepskontrakt (flashcard-kilde):** **fitness-apper/aktivitetsmålere**; **stordata
  og maktkonsentrasjon** (van Dijck, Poell & de Waal 2018 `(verifiser)`); **personvern
  vs. tilgjengeliggjøring**; **teknologien er ikke nøytral** (reproduserer sosial ulikhet
  — Øversveen 2020); **velferdsteknologi vs. helseteknologi**; **motstand mot
  «klokkelogikk»**.
- **Drøftingsakser:** Myndiggjør helseteknologi brukeren eller disiplinerer den (Foucault)?
  Utjevner eller forsterker den sosial ulikhet i tilgang?
- **Case-forslag:** To artikler om helseapper sammenlignet (sensor belønner eksplisitt
  kildesammenligning — #4/sensorkrav 6).
- **Typiske feil:** #4 (bare én kilde der to kreves), #5, #11.
- **Kvote:** 18 quiz / 16 flashcards.

#### Kapittel 9.3: Medikalisering som eget begrep og helsesport-historien
**id:** `nih-is225-9-3` · **number:** 9.3 · **estimatedMinutes:** 40 · **prerequisites:** `nih-is225-8-2`

- **Kapitteltype:** samlekapittel (kjenne — «bør kjenne til»).
- **Description:** Medikalisering som selvstendig «fem-begreper»-begrep (utover Del 8),
  og det perifere, men konkrete idrettshistoriske faktastoffet: **helsesport** («Helsesport
  for alle», Hadeland-konferansen 1960, STUI, handikapidrettens forbund i NIF 1971).
- **Eksamensbelegg:** Medikalisering: 2025V O4b (FEM) + inngår i flere temaer.
  Helsesport: **1 av 12 sett** (2022H Del B O4, HIST-sjangeren). Sjangre: FEM, HIST.
  Prioritet: kjenne (helsesport perifert, men konkret faktastoff til begrepsbank/dybde).
- **Forkunnskaper:** kap. 8.2 (medikalisering-grunnlaget). «Sist du var her»-oppfrisking
  av medikalisering-definisjonen.
- **Begrepskontrakt (flashcard-kilde):** **medikalisering** (som selvstendig begrep —
  repetert fra 8.2, kalibrert for FEM); **«Helsesport for alle»** (Andersen 1996
  `(verifiser)`; Hadeland-konferansen 1960); **STUI**; **mosjonsidrett vs. toppidrett**;
  **handikapidrettens forbund i NIF (1971)**; **Ridderrennet** (grupper med særlige behov).
- **Drøftingsakser (helsesport, HIST):** Nådde helsesporten virkelig «alle», eller var
  den forbeholdt noen grupper? (Sensor tester bruk av Andersen-teksten — E-nivå plasserer
  begrepet omtrentlig uten kilden.)
- **Case-forslag:** «Helsesport for alle»-slagordet drøftet kritisk mot hvem som faktisk
  ble inkludert.
- **Typiske feil:** #9 (helsesport omtrentlig plassert uten Andersen-teksten — E-nivå),
  #2, #6.
- **Kvote:** 16 quiz / 14 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A kroppen som symbol/kroppssyn · 9.B digital
helseteknologi (kildesammenligning) · 9.C medikalisering (FEM) · 9.D helsesport-historien
(HIST) på eksamensnivå).

### Del 10 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 10.1: Sjangerspill — de seks oppgavetypene og begrepsbank-drill
**id:** `nih-is225-10-1` · **number:** 10.1 · **estimatedMinutes:** 60 · **prerequisites:** `nih-is225-0-2`

- **Kapitteltype:** sjangerkapittel (meta).
- **Description:** Løsningsoppskrift for hver av de seks sjangrene (DRØFT, RED+, FEM,
  ABC, VEIE, HIST) med tidsbudsjett for 4-t-eksamen, pluss konsentrert **begrepsbank-drill**
  kalibrert mot «fem-begreper»-oppgaven (begrep ↔ forfatter ↔ ett eksempel).
- **Eksamensbelegg:** Alle sjangrene fra analysen §3 (hele arkivet). Prioritet: perfekt
  (meta).
- **Forkunnskaper:** kap. 0.2 + alle temadeler (repetisjonskapittel). «Hvem eier hva»-kortet
  fra Del 0 gjentas her som samlet oppslag.
- **Innholdskontrakt:** Per sjanger: én linjes oppskrift → tidsbudsjett → vanligste feil
  → ett gjennomskrevet mini-eksempel. **Den binære selvrettingsrubrikken** for DRØFT
  (0/1-sjekkliste). **Begrepsbank-drill:** samlet FEM-øving over de sentrale begrepene
  (helse sosialt strukturert, helsegapet, symbolsk vold, den kjønnede idretten, kropp
  som varemerke, helsisme, biomedisinsk modell, medikalisering, integrasjon, habitus,
  avsky, forklaringer på lav minoritetsdeltakelse) — hver med presis definisjon +
  forfatter + ett eksempel. **Kald bank** (8–10 oppgaver, uvante vinklinger, uten hint,
  fasit = momentliste, tydelig merket).
- **Oppgavesjangre:** Blandet — én av hver sjanger + FEM-drill.
- **Typiske feil:** Sjangerforveksling (drøfter der oppgaven ber om å redegjøre og omvendt);
  #10 (overser oppgavens presise formulering).
- **Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 10.2: Modellbesvarelse — helsedyrking og konsekvenser (A/B/C)
**id:** `nih-is225-10-2` · **number:** 10.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-is225-1-3`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet DRØFT-oppgave på signaturtemaet (forklar helsedyrking +
  drøft konsekvenser for utsatte grupper), gjennomført på tre karakternivåer med
  margnotater om *hvor* redegjørelse blir til drøfting.
- **Eksamensbelegg:** Signatur-oppgaven (6 av 12 sett). Sjanger: DRØFT. Prioritet: perfekt.
- **Forkunnskaper:** Del 1 (helsedyrking), Del 2 (Foucault), Del 4 (sosial ulikhet).
- **Innholdskontrakt:** `collapsible` **A-besvarelse** (full tekst, margnotater «her:
  begrep + forankring», «her: motargument — løfter til A»; pausepunkt-markører; **skarp,
  veid konklusjon** — konklusjonsvariasjon); `collapsible` **kommentert C-besvarelse**
  (ærlig merket C — korrekt redegjørelse, tynn drøfting, med gapet opp til A); `collapsible`
  **autentisk B-besvarelse** (ekte studentspråk, litt rotete men god); `tip` **Sensorblikket**
  + selvdiagnose-sjekkliste (☐). **Meta-fasit forbudt** — drøftelsen skrives faktisk UT.
- **Typiske feil:** #1, #8, #10 (illustrert i C-besvarelsen).
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 10.3: Modellbesvarelse — Bourdieu og klasse (A/B/C)
**id:** `nih-is225-10-3` · **number:** 10.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-3-2`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet DRØFT-oppgave på Bourdieu + klasse og idrettsdeltakelse
  (resirkulert oppgave 2023V/2025V), på tre karakternivåer — med eksplisitt visning av
  **terskelkravet** (habitus + alle tre kapitalformene MÅ med for C, #3).
- **Eksamensbelegg:** Bourdieu/klasse-oppgaven (5 av 12 sett). Sjanger: DRØFT. Prioritet:
  perfekt.
- **Forkunnskaper:** Del 3 (Bourdieu) + Del 4 (sosial ulikhet).
- **Innholdskontrakt:** Samme tre-nivå-struktur som 10.2. C-besvarelsen illustrerer
  **terskelfeilen** (glemmer symbolsk kapital → under C). A-besvarelsen kobler habitus
  → kapital → symbolsk vold → reproduksjon. **Vippe-case** valgfri landing markert.
- **Typiske feil:** #3 (utelater påkrevd kapitalform), #11 (Bourdieu uten anvendelse), #1.
- **Kvote:** 16 quiz / 12 flashcards.

#### Kapittel 10.4: Modellbesvarelse — folkehelseutvikling og paradokser (A/B/C)
**id:** `nih-is225-10-4` · **number:** 10.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-is225-8-2`

- **Kapitteltype:** modellbesvarelse (meta).
- **Description:** Nyskrevet ABC-oppgave på folkehelse (a: helsedefinisjoner → b:
  folkehelseutvikling gjennom 1900-tallet → c: drøft paradokser/utfordringer), på tre
  karakternivåer — det faktatunge skoleeksamensregisteret.
- **Eksamensbelegg:** Folkehelse-ABC (2025H O1). Sjanger: ABC. Prioritet: perfekt (styrende
  skoleeksamensoppgave).
- **Forkunnskaper:** Del 7 (helsemodeller) + Del 8 (folkehelse).
- **Innholdskontrakt:** Samme tre-nivå-struktur. Viser at **alle ledd må besvares** og at
  c-leddet (drøft paradokset) avgjør karakteren. C-besvarelsen leverer a+b greit men svak
  c. `tip` Sensorblikket + selvdiagnose (☐: besvarte du alle tre ledd? drøftet du i c?).
- **Typiske feil:** #7 (ramser opp bølgene i b uten drivkrefter), #1 (svak c-drøfting), #10.
- **Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 10:** 4 øvings-/generalprøver på eksamensnivå (10.A ren FEM-prøve
(fem begreper) · 10.B RED+/VEIE-blandet · 10.C full DRØFT-generalprøve · 10.D
komplett øvingseksamen: 4 oppgaver, velg 3, 4-t-format). «Fordel over flere økter —
aldri stablet i siste uke; skriv minst én for hånd på tid.»

---

## 4. Kvotesammendrag med summeringskontroll

> Per-kapittel-kvotene i §3 er BINDENDE. Tabellen under gjentar dem, summerer per
> del, og kontrollteller totalene. Krav: ≥500 quiz og ≥500 flashcards. Kontrollen
> er kjørt før totalen ble skrevet — per-kapittel-summen stemmer eksakt med totalen.

**Per-kapittel-kvoter (bindende — identisk med Kvote-linjene i §3):**

| Del | Kapitler (quiz / flashcards) | Quiz-sum | FC-sum |
|---|---|---|---|
| 0 | 0.1 (12/10), 0.2 (14/14) | **26** | **24** |
| 1 | 1.1 (24/28), 1.2 (22/22), 1.3 (18/14) | **64** | **64** |
| 2 | 2.1 (22/26), 2.2 (20/20) | **42** | **46** |
| 3 | 3.1 (24/28), 3.2 (20/20) | **44** | **48** |
| 4 | 4.1 (22/26), 4.2 (20/20) | **42** | **46** |
| 5 | 5.1 (22/26), 5.2 (20/18) | **42** | **44** |
| 6 | 6.1 (24/26), 6.2 (20/18) | **44** | **44** |
| 7 | 7.1 (22/26), 7.2 (18/16) | **40** | **42** |
| 8 | 8.1 (22/22), 8.2 (20/18) | **42** | **40** |
| 9 | 9.1 (20/18), 9.2 (18/16), 9.3 (16/14) | **54** | **48** |
| 10 | 10.1 (24/24), 10.2 (16/12), 10.3 (16/12), 10.4 (16/12) | **72** | **60** |

**Kontrollsummering av del-summene:**

- Quiz: 26 + 64 + 42 + 44 + 42 + 42 + 44 + 40 + 42 + 54 + 72 = **512**.
  Kumulativt: 26 → 90 → 132 → 176 → 218 → 260 → 304 → 344 → 386 → 440 → **512**.
- Flashcards: 24 + 64 + 46 + 48 + 46 + 44 + 44 + 42 + 40 + 48 + 60 = **506**.
  Kumulativt: 24 → 88 → 134 → 182 → 228 → 272 → 316 → 358 → 398 → 446 → **506**.

### Endelige totaler (BINDENDE for byggeren)

| Mål | Sum | Krav | Status |
|---|---|---|---|
| **Quiz totalt** | **512** | ≥500 | ✓ |
| **Flashcards totalt** | **506** | ≥500 | ✓ |
| Kapitler | 26 | 15–30 | ✓ |
| Modellbesvarelses-kapitler | 3 (10.2–10.4) | ≥3 | ✓ |
| Prøver per temadel | 4 per del (Del 1–10) | ≥4 | ✓ |
| Estimert totaltid | ~1 340 min ≈ 22 t | — | — |

> **Byggemerknad om tid:** Tidsanslagene (`estimatedMinutes`) gjelder kjernestoffet
> (jf. begrepsbank-notisen); summen ≈ 1 340 min er LESEtid — den som skriver
> oppgavene for hånd bør regne ca. ×1,5 (jf. «Lite tid?»-boksen i Del 0).

---

## 5. Pensumforankring — utgave-sensitive koblinger (fra analysen §6)

Alle forfatter↔begrep-koblinger er reelle kjernelitteratur-oppføringer fra
sensorveiledningene (analysen §6). **Begrepene er stabile; forfatterkoblingene
er utgave-sensitive** (emneansvaret skiftet Dowling → Sisjord). Koblinger merket
`(verifiser)` i §3 kontrolleres mot gjeldende pensumliste i byggefasen. De
stabile ankrene:

- **Helsedyrking/helsisme:** Fugelli & Ingstad, *Helse på norsk*; Lupton (2015);
  Evans & Davies (2004); Dowling (2012).
- **Foucault/makt:** via Lupton (2015), Nettleton (2013), Burrows & Wright.
- **Bourdieu:** Fitzpatrick (2020); Wiltshire, Lee & Williams (2019).
- **Helsedefinisjoner/modeller:** Fugelli & Ingstad (2009); Mæland,
  *Forebyggende helsearbeid*; Øversveen & Rydland (2021).
- **Folkehelse:** Mæland (2021); Lian (2007).
- **Etnisitet:** Lenneis & Pfister (2016); Sisjord, Fasting & Sand (2011).
- **Kjønn:** Metcalfe & Lindsey (2020); Clark (2018); McGannon & Spence (2012).
- **Digital helseteknologi:** van Dijck, Poell & de Waal (2018); Øversveen (2020).
- **Kroppen som symbol:** Engelsrud (2006); Nettleton (2013).
- **Helsesport-historie:** Andersen (1996), «Helse og idrett».

**Opphavsrett (ufravikelig):** Eksamensoppgaver og sensorveiledninger brukes som
grunnlag (mønstre, temavekting, vurderingskriterier), aldri ordrett — alle
oppgaver i boka er nyskrevne. Pensumlitteratur refereres (forfatter/verk/begrep),
aldri sitert i lengde. Refererte synspunkter tilskrives riktig.

## 6. Juridiske/plattform-krav ved bygging

- Registrer emnet i `src/app/bok/trinn/hoyere/institusjoner.ts` under Norges
  idrettshøgskole (NIH) med visningsnavn «IS225 Helse, kultur, idrett og samfunn».
- **Helse-heuristikk i `hoyskole-disclaimer.tsx`:** IS225 er et helse-/folkehelseemne
  — sjekk at helse-linjen («ikke helseråd») treffer emnet; utvid heuristikken om ikke.
- `competenceGoals` er Skolesagas EGNE, eksamensforankrede formuleringer (destillert
  fra analysen), aldri kopier av NIHs offisielle læringsutbytte. Sjangerkoder/feilkoder
  skal ALDRI stå ukjente i competenceGoals.
- Bokinnhold skal aldri fremstille seg som offisielt/institusjonstilknyttet; frekvens-
  påstander formidles med kildenote + forbehold (Del 0-kildenoten).

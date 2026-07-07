# Bokskjelett: TDT4186 Operativsystemer — eksamensrettet lærebok

> Dette dokumentet er forfatter-agentens (Opus) eneste kilde til eksamensbelegg —
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (6 NTNU-sett des 2010 – aug 2016, hvorav 5 med fullstendige
> løsningsforslag, samt NTNUs emnebeskrivelse for det gjenåpnede emnet). Arketype:
> **DNA-regnefag** (`DNA-regnefag.md`) som primærmal, med **lånte drøftingselementer
> fra `DNA-drofting.md`** — faget har to eksamenstradisjoner, én beregningstung og
> én diskursiv, og boka må trene begge sjangrene per kjernetema (se §1, «Avvik fra
> DNA»). Kapittel-DNA-ene (teori / drill / øvingseksamen) er obligatoriske og
> gjentas ikke i sin helhet her.
>
> **Kritisk forbehold som styrer hele boka:** Arkivet inneholder **to helt ulike
> eksamenstradisjoner** — **tradisjon A** (Bratsberg, 2010–2012, pensum Tanenbaum:
> konseptuelle kortsvar **+ konkrete beregninger** — sideerstatnings-trace,
> blokkallokering, avbruddstiming, SJF-rekkefølge, kodelesing) og **tradisjon B**
> (Nygård, 2015–2016, pensum Stallings: **rent diskursivt**, malbasert, RAID,
> sanntid/EDF/RMS, arbeidssett, Bankier). Dagens emne (fra vår 2027, faglærer **Di
> Liu**, pensumbok ukjent) styres av en **tredje, ukjent faglærer**. Boka dekker
> derfor **unionen** av begge tradisjonene, ikke gjennomsnittet, og bygger hvert
> kjernetema slik at det kan besvares **både** som trinnvis beregning **og** som
> presis begrepsdrøfting. Pensumbokspesifikk terminologi presenteres **språknøytralt**;
> pensumavhengige detaljer merkes `(verifiser)`.
>
> **Opphavsrett:** Alle oppgaver, tall, referansestrenger, kodebiter, scenarioer og
> innpakninger i den ferdige boka skal være **nyskrevne** — egne verdier og
> kontekster. Algoritmenavn, standardnotasjon og beregningsformler er allmenn faglig
> kunnskap, men ingen oppgavetekster, fasiter eller sensorformuleringer fra reelle
> sett gjengis. Pensum (Tanenbaum, Stallings) refereres (begrep/verk), aldri siteres
> i lengde.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4186` |
| Tittel | **TDT4186 Operativsystemer (NTNU)** |
| Institusjon | **NTNU** (Norges teknisk-naturvitenskapelige universitet — legges inn i `institusjoner.ts` ved fase 5 hvis ikke allerede lagt inn for TDT4120) |
| Level | `'Høyskole'` |
| Arketype | **Regnefag / hybrid** — primær DNA-regnefag (faste, gjentakende beregnings­mønstre) + lånte drøftingselementer fra DNA-drøfting (den diskursive tradisjonen: sammenlign-/drøft-sjangre og Nygård-malen) |
| Antall kapitler | **32** (1 eksamenskart + 27 tema/drill + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 470 min ≈ 41 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **608** (krav ≥500 — begrepsrikt systemfag, kalibrert høyt) |
| Flashcards totalt | **650** (krav ≥500 — svært begrepsrikt fag med to terminologitradisjoner, siktet høyt) |
| Prøver | **24** (4 per temadel 1–6) + **3 øvingseksamener** (kap. 7.2–7.4) |

**Pitch (én avsnitt):** TDT4186 er NTNUs emne i hvordan et operativsystem
fungerer — fra prosesser og tråder, gjennom planlegging, synkronisering og
minnehåndtering, til filsystemer, I/O og multiprosessorer. Vurderingen er én
**firetimers skriftlig skoleeksamen**, karakter **A–F**, som teller **100 %**, med
**hjelpemiddelkode D** (ingen trykte/håndskrevne hjelpemidler; kun enkel kalkulator);
obligatoriske øvinger må være godkjent for å gå opp. Eksamen er **ikke flervalg** —
den består av **frisvarsoppgaver**: forklar, drøft, sammenlign, definer, list opp,
og (i den ene tradisjonen) regn ut. Det som styrer boka er en **strukturell innsikt
fra analysen**: arkivet deler seg i to helt ulike tradisjoner. **Tradisjon A**
(Bratsberg, Tanenbaum) blander konsepter med **konkrete beregninger** —
sideerstatnings-trace med sidefeiltelling, blokkallokering i FAT vs. inode,
avbruddstiming, SJF-rekkefølge. **Tradisjon B** (Nygård, Stallings) er **rent
diskursiv** og sterkt malbasert — «hva er problemet → hvordan implementere →
drøft resultatene» — med RAID, sanntidsplanlegging (EDF/RMS) og arbeidssett.
Dagens faglærer (Di Liu, fra 2027) er ukjent. Derfor dekker boka **unionen** og
trener hvert kjernetema i **to sjangre**: som mekanisk beregning (utføre) **og** som
presis begrepsdrøfting (forklare *hvorfor*). De seks 100 %-gjengangerne
(OS-fundamenter, minne/virtuelt minne, I/O, multiprosessor, prosesser/tråder,
synkronisering) er ryggraden; de tallregnbare mønstrene (sideerstatning,
blokkallokering, scheduling, Bankier) får hver sitt drillkapittel; og den diskursive
Nygård-malen læres som en egen eksamensferdighet.

**Kritisk stilregel (gjelder HELE boka) — «regn OG drøft, kort og presist, med
antagelser»:**

1. **Regn OG drøft hvert kjernetema.** Fordi en fremtidig faglærer kan arve enten
   regne- eller drøfte-tradisjonen, bygges hvert kjernetema slik at studenten kan
   besvare det **begge veier**. Sideerstatning, blokkallokering og scheduling *kan*
   komme både som tall (trad. A) og som drøfting (trad. B). Hvert kjernekapittel har
   derfor både en **beregnings-/utføre-del** (theorem-prosedyre + gjennomregnet
   eksempel + drilloppgaver) og en **drøfte-/forklare-del** (definisjon, «hvorfor»,
   sammenlign-oppgave). Drillkapitlene er tyngst på beregning; teorikapitlene bærer
   drøftingen. Dokumentér dette valget i teksten der begge sjangrene inngår.

2. **Korte, konsise, presise svar ønskes — MEN pluss for korrekt ekstra detalj.**
   Alle sett ber om korte, presise svar; ordrikdom belønnes ikke. Men **til
   forskjell fra TDT4120** («lange svar teller ikke positivt») gir dette faget
   **eksplisitt bonus** for relevant tilleggsinnhold: «pluss hvis studenten forklarer
   hva hver av disse er», «pluss for hvert element fra tabellen». Løsningsforslag
   svarer derfor **presist på det som spørres først**, og legger deretter til
   **korrekt, relevant** dybde som gir uttelling — men aldri fyllstoff. Boka lærer:
   treff kjernen, så dekk bredt der bredde premieres.

3. **Oppgi alltid antagelsene.** Fast sensorinstruks, særlig for beregninger:
   blokkstørrelse, pekerstørrelse, om katalogen leses, om modifiserte sider stjeles,
   enheter (ns/µs). **Eksplisitte, konsistente antagelser gir full uttelling selv når
   oppgaven er underbestemt** — løsningsforslagene sier flere steder at en oppgave er
   «litt vag» og godtar alternative tolkninger. Hvert beregningseksempel i boka
   **åpner med antagelsene**.

4. **Flere gyldige svar godtas.** Løsningsforslagene lister ofte 2–4 akseptable svar
   (f.eks. tre gyldige svar på RR-gjennomstrømningsspørsmålet, intervall-svar ved
   ukjent variabel). Løsningsforslagene i boka viser den foretrukne besvarelsen, men
   nevner de andre gyldige tolkningene der sensuren er robust for konsistente
   resonnementer.

5. **Les oppgaveteksten meget nøye.** Fast instruks i trad. B: mange deloppgaver har
   en spissformulering (`*minst* to måter`, `*sammenlign* mht. relevans *og* ytelse`,
   «hva et OS er *og* brukes til») der uttellingen henger på å treffe akkurat det.
   Boka trener presis lesing av oppgaveverbet.

6. **Emnets/pensumbøkenes notasjon, presentert språknøytralt (verifiser pensum).**
   Bruk standard OS-terminologi og de mekanismene oppgavene faktisk krever. Der
   arkivet peker på en pensumbok, følg dennes navn (Tanenbaum for trad. A, Stallings
   for trad. B) — men presenter begrepene **språknøytralt** siden dagens faglærer og
   pensumbok er **ukjent**. Engelsk fagterm i parentes ved første forekomst der det er
   innarbeidet: «arbeidssett (*working set*)», «gjensidig utelukkelse (*mutual
   exclusion*)», «sideerstatning (*page replacement*)». **Alle pensumavhengige
   detaljer merkes `(verifiser)`** (f.eks. konkret antall direktepekere i en inode,
   RMS-utnyttelsesgrensens eksakte form, om dagens pensum bruker Mesa- eller
   Hoare-monitorsemantikk).

7. **To-tradisjons-regelen (skal stå i Del 0 og styre hele boka):** Arkivet er to
   uavhengige tradisjoner. Konsekvens for boka: **kjernen (§7 nivå 1) dekkes både
   mekanisk og diskursivt**; **randtemaene er komplementære** — sikkerhet/malware,
   meldingssending og virtualisering finnes **bare** i trad. A; sanntid (EDF/RMS),
   RAID og arbeidssett finnes **bare** i trad. B. En bok som bare speiler ett sett
   har store hull. Alle randtemaer dekkes for sikkerhets skyld, men vektes lavere.

**Avvik fra DNA/README-malen (dokumentert):**

- **Hybrid regnefag + drøftingslån — HOVEDAVVIKET.** DNA-regnefag forutsetter
  «entydige(re) fasitsvar» og målrettet regnedrill. Det passer trad. A, men **ikke**
  trad. B, som er rent diskursiv uten tallregning. Boka bruker derfor DNA-regnefag som
  primærmal (Del 0-eksamenskart, drillkapitler, øvingseksamener, theorem-prosedyrer)
  **og låner tre elementer fra DNA-drøfting** for den diskursive tradisjonen: (i) en
  **drøftesjanger-katalog** (§3, sjangre D1–D4, inkl. **Nygård-malen**); (ii)
  **sammenlign-/drøft-oppgaver** i teorikapitlene der analysen krever diskursiv
  besvarelse (bruker/kjernetråd, buffering/caching, segmentering/paging, Mesa/Hoare-
  monitor); (iii) **modellbesvarelser på karakternivå** (E/C/A) i eksamenstrening-
  delen, siden trad. B ikke har entydig fasit. Beregnings-DNA-en beholdes uendret for
  trad. A. Valget dokumenteres i Del 0 og i hvert dobbeltsjanger-kapittel.
- **«Symbol- og formelliste» → «Begreps- og beregningsliste».** README krever en
  `collapsible` «Symbol- og formelliste» per delkapittel. For et **begrepstungt
  systemfag** er apparatet ikke primært formler, men **presise begreper med den faste
  distraktoren** (latch/nivåstyrt osv. finnes ikke her, men f.eks. mutex vs. tellende
  semafor, buffering vs. caching, usikker tilstand vs. vranglås) pluss de få
  beregningsformlene (CPU-utnyttelse `1 − pⁿ`, blokkformel, RMS-grense, avbruddstiming).
  Blokken heter derfor **«Begreps- og beregningsliste»** og lister ALT delkapitlet
  bruker, med kort presisjon per begrep og formel. Regelen «per delkapittel, ikke arv»
  beholdes. Unntak kun for kapitler helt uten begreps-/formelapparat (finnes knapt).
- **`theorem`-blokker for beregningsprosedyrer.** Der DNA-en bruker `theorem` for
  matematiske resultater, brukes den her for de faste **beregningsprosedyrene** som
  må sitte: sideerstatnings-trace (per algoritme), blokkallokering (FAT-formel +
  inode-regel med indirekteblokker), diskaksess-telling, avbruddstiming, SJF-sortering,
  RMS-/EDF-utnyttelsesbetingelse, CPU-utnyttelse `1 − pⁿ`, og Bankier-
  sikkerhetssjekken. Disse er bokas «teoremer» — hver med gjennomregnet eksempel som
  åpner med antagelsene.
- **Flashcards kalibreres som begrep ↔ presis definisjon ↔ fast distraktor, siktet
  høyt (650).** Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`.
  Faget er svært begrepsrikt (to terminologitradisjoner, systemmekanismer,
  algoritmenavn, formelle betingelser), og eksamen er hjelpemiddelfri, så flashcards
  siktes høyt og kalibreres som gjenkalling: **begrep → presis definisjon + den faste
  feilslutningen** (f.eks. «Mutex → to tilstander, kun gjensidig utelukkelse — **ikke**
  teller + generell venting som en semafor»; «Usikker tilstand → *kan* lede til
  vranglås hvis alle krever maks samtidig — **er ikke** i seg selv vranglås»; «Skitne
  sider → må skrives ut før de kan stjeles»). Dette ER puggematerialet.
- **Drillkapitler ligger i sine temadeler** (ikke samlet i siste del), fordi hver
  høyfrekvent beregningssjanger må drilles umiddelbart etter teorien. Del 7 beholder
  kun sjangerguiden (regne + drøfte) og de komplette øvingseksamenene.
- **Kapittelantall (32) ligger midt i DNA-veiledningen (20–35).** Bredden er
  eksamensformen (som i TDT4120): alle åtte pensumbolkene kommer minst 50 % av
  settene, så ingen kan droppes. 27 tema-/drillkapitler dekker de seks 100 %-
  kjernetemaene med teori + drøfting + (der relevant) beregningsdrill, pluss nivå
  2–3-temaene kompakt.

---

## 2. Makrostruktur

Delene ordnes etter **faglig avhengighet** (DNA-regnefag §1), ikke frekvens —
frekvensen styrer *omfanget* innad. Kjernetemaene får teori + drøfting + drillkapittel;
randtemaene får ett kompakt kapittel. `sectionNames` (bokforsiden) settes fra kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Innhold og prioritet |
|---|---|---|---|
| 0 | Eksamenskart | 1 | Prioriteringsverktøyet; kjerne i studieguiden. De to tradisjonene, unionen, regn-og-drøft-dualiteten. |
| 1 | OS-fundamenter, prosesser og tråder | 6 | **Perfekt.** Hva et OS er; systemkall/kjernemodus/avbrudd; prosesser og tilstander; bruker- vs. kjernetråder; meldingssending; drill i begrepskortsvar. |
| 2 | CPU-tidsstyring (planlegging) | 4 | **Kunne + sanntid.** Planleggingsmål; batch/interaktiv (SJF/RR — beregning); sanntid (EDF/RMS/LLF — drøfting+beregning); scheduling-drill (tidslinjer/Gantt). |
| 3 | Synkronisering og vranglås | 5 | **Perfekt sync + kunne vranglås.** Kritiske seksjoner/TSL; semaforer/mutekser; monitorer/condvar/guarded wait; vranglås + Bankier; drill (kodelesing + Bankier-beregning). |
| 4 | Minnehåndtering og virtuelt minne | 5 | **Perfekt (tyngst i trad. A).** Minneabstraksjon; paging/segmentering/TLB; virtuelt minne/arbeidssett/thrashing; sideerstatningsalgoritmer; sideerstatnings-trace-drill. |
| 5 | Filsystemer og I/O | 4 | **Kunne fil + perfekt I/O.** Filallokering (FAT/inode); blokkallokerings- og diskaksess-drill; I/O-prinsipper/DMA/buffering/avbruddstiming; RAID og diskplanlegging. |
| 6 | Multiprosessor, virtualisering og sikkerhet | 3 | **Perfekt multiprosessor + kjenne virt/sikkerhet.** Multiprosessor/multikjerne (100 %, undervurdert); virtualisering/hypervisorer; sikkerhet/malware/angrep. |
| 7 | Eksamenstrening | 4 | Sjangerguide (regne + drøfte, inkl. Nygård-malen) + 3 komplette øvingseksamener (trad. A / trad. B / blandet). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang — fulgt her. **To justeringer:** (1)
**multiprosessor** er et 100 %-gjengangertema (nivå 1/perfekt), men henger mekanistisk
sammen med synkronisering (TSL/spinning) og scheduling; det gis likevel **eget kapittel
(6.1)** framfor å spres tynt, fordi analysen (funn 3) kaller det «undervurdert
høyfrekvent» og det krever samlet behandling av organisering + sync + cache-koherens +
scheduling. (2) De **tradisjonsavhengige randtemaene** (virtualisering, sikkerhet)
samles i Del 6 sammen med multiprosessor for å holde kjernedelene rene. Drillkapitlene
(1.6, 2.4, 3.5, 4.5, 5.2) ligger i sine deler. Del 7 beholder sjangerguiden og de tre
øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har **to sjangerakser**: **regne-sjangre (R1–R8)** fra den beregningstunge
tradisjon A, og **drøfte-sjangre (D1–D4)** fra den diskursive tradisjon B. Hvert
kapittel refererer de sjangrene det trener; kjernekapitler trener **begge akser**. Del 0
presenterer begge for studenten. Destillert fra EKSAMENSANALYSE §3.

### Regne-sjangre (R) — tradisjon A (Tanenbaum/Bratsberg), tallregning

| Kode | Regnesjanger | Del | Frekvens (trad. A) | Metode/fasitform |
|---|---|---|---|---|
| **R1** | Sideerstatnings-trace (NRU/LRU/FIFO/Optimal/andre-sjanse/WSClock/aging) | 4 | alle 3 sett | Kjør algoritmen mekanisk på referansestrengen, **tell sidefeil**, vis rammetabell med **R/M-bit** per tidspunkt. Skitne sider skrives ut før de stjeles. |
| **R2** | Blokkallokering (FAT vs. inode/UNIX V7) | 5 | trad. A | FAT/kontinuerlig = `⌈(høyeste_adr + skrivestørrelse)/blokkstr.⌉`, **ingen hull**. Inode = bare berørte blokker, **men tell indirekteblokkene**. |
| **R3** | Diskaksess-telling (lenket vs. FAT) | 5 | trad. A | Lenket = følg kjeden fra start (vokser med avstand). FAT = kjede i minne, kun datablokker fra disk. **Oppgi antagelser.** |
| **R4** | Avbruddstiming (maks avbrudd/sek, %CPU) | 5 | trad. A (I/O) | `maks = 1/(lagre + gjenopprett registre)`; `%CPU = avbrudd/sek × betjeningstid`. Riktige **enheter** (ns/µs). |
| **R5** | Scheduling-beregning (SJF-rekkefølge/ventetid, RR-gjennomstrømning, EDF/RMS-tidslinje) | 2 | trad. A (SJF/RR), trad. B (sanntid) | **SJF** = sorter stigende på kjøretid (minimerer snittventetid); ukjent variabel Y → **intervall-svar**. **RR** = kvantum vs. prosesskifte-overhead (flere gyldige svar). **EDF/RMS** = tegn tidslinje + sjekk utnyttelsesgrense. |
| **R6** | Bankier-beregning (sikker/usikker tilstand) | 3 | trad. B (juni 2016) | Sett opp allokering/behov/tilgjengelig; finn en sikker sekvens; **usikker ≠ vranglås**. |
| **R7** | CPU-utnyttelse (`1 − pⁿ`) | 4 | trad. A (thrashing) | `p` = I/O-ventefraksjon, `n` = multiprogrammeringsgrad. **Gjelder bare når alle prosesser er i minnet** (ikke ved thrashing). |
| **R8** | Kodelesing (pthreads / synkronisering) | 3 | trad. A (2011–2012) | Forklar hva et utdrag gjør. Kanonisk: produsent/konsument med mutex + `while(betingelse) cond_wait`. Nøkkel: **guarded wait** (while, ikke if) + at `cond_wait` slipper mutex atomisk. |

### Drøfte-sjangre (D) — tradisjon B (Stallings/Nygård), diskursiv

| Kode | Drøftesjanger | Del | Frekvens | Krav |
|---|---|---|---|---|
| **D1** | Konseptuelt kortsvar (definer / forklar / sammenlign) | alle | begge trad. (dominerer i antall) | Kort, presist, dekkende. Gjengangere: «Hva er et OS?» (**abstrakt maskin OG ressurshåndterer** — begge halvdeler); prosess vs. tråd; mutex vs. semafor; bruker- vs. kjernetråd; buffering vs. caching. **Treff begge sider av en sammenligning.** |
| **D2** | **Nygård-malen** (problem → moderne utfordringer → implementer/sammenlign → drøft resultater) | 7 + kjerne | hele trad. B | Gjenkjenn de faste leddene. **a)** navngi problemet delsystemet løser; **b)** «moderne utfordringer» langs **fire akser** (tilbuds-/teknologi-/funksjonalitets-/etterspørselsutvikling); **c/e)** konkrete implementasjoner sammenlignet mht. **relevans OG ytelse**; **f)** vurder resultater mot alternativer. **Å svare i strukturen gir uttelling i seg selv.** |
| **D3** | Konkret illustrasjon av klassisk problem/algoritme | 2, 3 | trad. B | Bruk et navngitt scenario til å vise mekanismen: **spisende filosofer** (begge gafler atomisk under monitor), **EDF** (der den virker og der den svikter), **rate monotonic** (kortest periode = høyest prioritet + garantibetingelse), **Bankier** (sikker vs. usikker). Gi den **formelle** definisjonen, ikke bare navnet. |
| **D4** | Ren opplisting med kort forklaring | alle | begge trad. | Faktakunnskap direkte. Faste lister: **fire vranglåsbetingelser** + hvordan angripe hver; **fem systemkall**; **fem malware-typer**; **RAID-nivåer 0–6**. Pluss for hvert korrekt element. |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/regler/
prosedyrer kapitlet SKAL lære (i språknøytral OS-notasjon; pensumavhengige detaljer
merket `(verifiser)`). **Begreps- og beregningsliste** = det `collapsible`-apparatet
delkapitlet krever. Prioritetsklasser: **perfekt** / **kunne** / **kjenne**. Hvert
teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` → Forkunnskaper-`text` +
Begreps-og-beregningsliste-`collapsible` → Motivasjon → `definition`/`theorem` (i
emnets notasjon) → utledning/prosedyre m/intuisjon → 2–4 `example` (siste på
eksamensnivå; **beregnings-eksempel åpner med antagelsene**, drøfte-eksempel skrevet
som A-besvarelse) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på
eksamensnivå, **både regne- og drøftesjangre der kapitlet trener begge**, alle med
`solution` + `hints`) → Repetisjons-`collapsible`. Drillkapitler: Eksamensvinkel →
løsningsoppskrift → sensor-kommentert case → 10–15 oppgaver på eksamensnivå.

---

### Del 0 — Eksamenskart

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4186

- **id:** `tdt4186-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers frisvarseksamen, kode D, A–F, 100 %), de to eksamenstradisjonene (regne vs. drøfte) og hvorfor boka dekker unionen, temafrekvensene, sjangrene R1–R8/D1–D4, Nygård-malen, sensor-metareglene og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (6 sett, 2010–2016) + emnebeskrivelsen. Skal gjengi: (i) **formen** — skriftlig skoleeksamen, **4 timer**, kode **D** (ingen hjelpemidler utover enkel kalkulator), A–F, teller 100 %, obligatoriske øvinger godkjent; **ikke flervalg** — frisvar (forklar/drøft/sammenlign/definer/list/regn); (ii) **de to tradisjonene** — trad. A (Bratsberg/Tanenbaum: konsept **+ beregning**, 8 ulikt vektede oppgaver 5–25 %) og trad. B (Nygård/Stallings: **rent diskursivt**, malbasert, 5–6 likt vektede oppgaver); **dagens faglærer (Di Liu, 2027) er ukjent** → boka dekker **unionen**, ikke gjennomsnittet `(verifiser pensum)`; (iii) **regn-OG-drøft-dualiteten** — hvert kjernetema kan komme som tall eller drøfting; studenten som kan mekanismene **både** mekanisk og konseptuelt er robust; (iv) **temafrekvens-tabellen** (§2 i analysen): OS-fund 100 %, minne/VM 100 %, I/O 100 %, multiprosessor 100 %, prosess/tråd 100 %, sync 100 %, CPU-tidsstyring 83 %, filsystem 83 %, sideerstatning 67 % (trace kun trad. A), vranglås 50 %, sikkerhet 50 % (kun A), sanntid 50 % (kun B), systemkall/avbrudd 50 %, virtualisering 33 % (kun A), RAID 33 % (kun B), meldingssending 33 % (kun A), diskplanlegging 17 %; (v) **de seks 100 %-gjengangerne** som garantert kommer uansett faglærer; (vi) **Nygård-malen** som egen ferdighet i trad. B (fire-akse-svaret på «moderne utfordringer»); (vii) **randtemaenes komplementaritet** — sikkerhet/melding/virt kun i A, sanntid/RAID/arbeidssett kun i B.
- **Innholdskontrakt:** Regne-sjangrene R1–R8 og drøfte-sjangrene D1–D4 (§3) som studentens sjekkliste med typisk del og metode. **Sensor-metareglene** (§1): korte presise svar, **men pluss for korrekt ekstra detalj**; **oppgi alltid antagelsene**; flere gyldige svar godtas; les oppgaveverbet nøye. **Prognosen for neste ordinære eksamen** (§7 i analysen): 5–8 frisvarsoppgaver; garantert OS-fundamenter (oppgave 1), minne/VM + minst én sideerstatning, prosess/tråd, synkronisering, I/O, multiprosessor; sannsynlig scheduling (SJF/RR eller EDF/RMS avhengig av tradisjon), filsystem-allokering, vranglås. Avslutt med **leseplanen**: nivå 1 (de seks kjernetemaene) må sitte **både** som beregning og drøfting; nivå 2 (scheduling, filsystem, vranglås, sanntid) avgjør C→A; nivå 3 (sikkerhet, virtualisering, melding, RAID, systemkall, diskplanlegging) fyller ut settet.
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «En oppgave ber deg *forklare og drøfte* buffering — hvorfor holder det ikke å bare definere?» og «Rangér de seks 100 %-temaene etter hvor mange garanterte poeng de gir uansett tradisjon.»
- **Typiske feil:** Metafeilene — pugge bare den ene tradisjonen (miste halve pensum); tro «korte svar» betyr *tynne* svar (faget gir pluss for korrekt dekning); **glemme å oppgi antagelser** ved beregninger; overse den andre halvdelen av en definisjon (bare «abstrakt maskin» uten «ressurshåndterer»); ikke gjenkjenne Nygård-malens ledd i trad. B.
- **Quiz: 16 · Flashcards: 18** (form, de to tradisjonene, sjangre R1–R8/D1–D4, frekvenser, sensor-metaregler, Nygård-malen)

---

### Del 1 — OS-fundamenter, prosesser og tråder

> De billigste garanterte poengene i faget ligger her: «Hva er et OS?» og prosess vs.
> tråd er 100 %-gjengangere i begge tradisjoner (alltid oppgave 1). Bruker- vs.
> kjernetråd-sammenligningen er fast. Systemkall/kjernemodus og meldingssending er
> lettere randtemaer. Kapittel 1.6 driller begrepskortsvarene.

#### Kapittel 1.1: Hva er et operativsystem

- **id:** `tdt4186-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** OS-ets to roller — **abstrakt/utvidet maskin** som skjuler maskinvaredetaljer, og **ressurshåndterer** som styrer tids- og plassdeling av CPU, minne og enheter — samt målene ved OS-utvikling og hvorfor begge halvdeler kreves i en definisjon.
- **Eksamensbelegg:** Sjanger D1, **100 %** (6/6). Alltid oppgave 1; lettest tilgjengelige poeng. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **operativsystem** — todelt: (1) **abstrakt/utvidet maskin** (skjuler maskinvarens detaljer bak et penere grensesnitt: filer i stedet for disksektorer, prosesser i stedet for CPU-registre); (2) **ressurshåndterer** (styrer **tidsdeling** — CPU, skriver — og **plassdeling** — minne, disk — mellom konkurrerende prosesser). `text` **mål ved OS-utvikling** (fire utviklingsakser, jf. Nygård-malen D2): tilbuds-, teknologi-, funksjonalitets- og etterspørselsutvikling. `definition` **kjerne (*kernel*)** og skille kjernemodus/brukermodus (utdypes i 1.2). **Begreps- og beregningsliste:** abstrakt/utvidet maskin, ressurshåndterer, tidsdeling, plassdeling, kjerne, brukermodus/kjernemodus.
- **Oppgavesjangre:** D1 (forklar/definer). Mønstereksempel (nyskrevet, drøfte): «Forklar kort hva et operativsystem er.» → **begge** halvdeler: abstrakt maskin som skjuler detaljer + ressurshåndterer som deler tid/plass. Pluss for eksempler på hver.
- **Typiske feil:** Overse den andre halvdelen av definisjonen — svare bare «abstrakt maskin» og glemme «ressurshåndterer», eller omvendt (§ typiske feil #12); blande tids- og plassdeling; tro OS-et er «bare et program» uten ressursstyringsrollen.
- **Quiz: 20 · Flashcards: 30**

#### Kapittel 1.2: Systemkall, kjernemodus og avbruddssystemet

- **id:** `tdt4186-1-2` · **number:** 1.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4186-1-1` · **kapitteltype:** teori
- **description:** Hvordan et program ber OS-et om tjenester via **systemkall**, hvordan et systemkall skifter fra bruker- til kjernemodus, og hvorfor OS-utviklere må forstå **avbruddssystemet** (interrupts): asynkrone hendelser som stanser CPU-en og gir kontroll til en avbruddsrutine.
- **Eksamensbelegg:** Sjanger D1/D4 (systemkall 50 %, avbruddssystem juni 2016). «Gi fem eksempler på systemkall» er en fast opplisting (D4). Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **systemkall (*system call*)** — grensesnittet der et brukerprogram ber kjernen utføre en privilegert operasjon; utløser modusbytte. `theorem` **modusbytte**: systemkall → trap/programvareavbrudd → CPU går i **kjernemodus** → kjernen utfører → returner til brukermodus. `definition` **avbrudd (*interrupt*)** — asynkront maskinvaresignal som stanser gjeldende utførelse, lagrer tilstand og kjører en avbruddsrutine. `text` **avbruddssystemet** og hvorfor OS-et er avbruddsdrevet. `text`/`collapsible` **fem eksempler på systemkall** (D4): prosess (`fork`/`exec`/`exit`/`wait`), fil (`open`/`read`/`write`/`close`), katalog (`mkdir`/`link`) — velg fem `(verifiser navnekonvensjon mot dagens pensum)`. **Begreps- og beregningsliste:** systemkall, trap, brukermodus/kjernemodus, avbrudd (maskinvare/programvare), avbruddsrutine, avbruddsdrevet.
- **Oppgavesjangre:** D1 (forklar modusbytte), D4 (list fem systemkall). Mønstereksempel (D4): «Gi fem eksempler på systemkall og forklar kort hva hvert gjør.»
- **Typiske feil:** Blande systemkall (synkront, programstyrt) og avbrudd (asynkront, maskinstyrt); tro et vanlig funksjonskall skifter modus; liste systemkall uten å forklare hva de gjør (mister pluss-poengene for detalj).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 1.3: Prosesser og prosesstilstander

- **id:** `tdt4186-1-3` · **number:** 1.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4186-1-1` · **kapitteltype:** teori
- **description:** Prosessbegrepet (et program under utførelse med eget adresserom), prosesskontrollblokken (PCB), tilstandsdiagrammet (kjørende/klar/blokkert) og kontekstskifte — grunnlaget for planlegging (Del 2) og synkronisering (Del 3).
- **Eksamensbelegg:** Sjanger D1, del av prosess/tråd-temaet **100 %**. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **prosess** — et program under utførelse med **eget adresserom** (isolasjon), programteller, registre og ressurser. `definition` **prosesskontrollblokk (PCB)** — kjernens datastruktur for en prosess. `theorem` **tilstandsdiagram**: **kjørende → blokkert** (venter på I/O), **kjørende → klar** (avsatt av planleggeren), **klar → kjørende** (valgt), **blokkert → klar** (I/O ferdig). `definition` **kontekstskifte (*context switch*)** — lagre gjeldende prosess' tilstand, laste neste; ren overhead. **Begreps- og beregningsliste:** prosess, adresserom, PCB, prosesstilstander (kjørende/klar/blokkert), kontekstskifte, avsettelse (*preemption*).
- **Oppgavesjangre:** D1 (forklar tilstandsoverganger). Mønstereksempel (D1): «Hvilke tilstander kan en prosess være i, og hva utløser hver overgang?»
- **Typiske feil:** Blande «blokkert» (venter på hendelse) og «klar» (venter bare på CPU); tro kontekstskifte er nyttig arbeid (det er overhead); glemme at prosesser er isolerte (eget adresserom) — kontrasten til tråder (1.4).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 1.4: Tråder — bruker- vs. kjernetråder

- **id:** `tdt4186-1-4` · **number:** 1.4 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4186-1-3` · **kapitteltype:** teori
- **description:** Tråd vs. prosess (delt minne vs. isolasjon), og den faste sammenligningen bruker- vs. kjernetråder mht. kostnad, blokkerende systemkall og multiprosessor-utnyttelse — pluss kombinasjonsmodeller og tråder i klient-tjener.
- **Eksamensbelegg:** Sjanger D1, **100 %** (6/6). Bruker/kjernetråd-sammenligning er fast i begge tradisjoner. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **tråd** — utførelsesenhet innen en prosess med **delt adresserom/minne**, egen stakk og registre; mindre kontekst enn en prosess. `theorem`/`definition` **bruker- vs. kjernetråder** (sammenligningstabell — D1): **brukertråder** (håndteres i brukernivå-bibliotek: **billig** kontekstskifte, men et **blokkerende systemkall blokkerer hele prosessen**, og kan **ikke** utnytte flere CPU-er parallelt); **kjernetråder** (kjernen kjenner hver tråd: **dyrere**, men blokkering av én tråd blokkerer ikke de andre, og de **kan** kjøre på flere CPU-er). `definition` **kombinasjonsmodell** (mange-til-mange). `text` tråder i klient-tjener (én tråd per forespørsel). **Begreps- og beregningsliste:** tråd, delt adresserom, brukertråd, kjernetråd, blokkerende systemkall, multiprosessor-utnyttelse, kombinasjonsmodell.
- **Oppgavesjangre:** D1 (sammenlign — begge sider). Mønstereksempel (D1): «Sammenlign bruker- og kjernetråder mht. kostnad, blokkering og multiprosessor-utnyttelse.» → treff **alle tre** aksene for hver.
- **Typiske feil:** Bare nevne kostnadsforskjellen og glemme blokkerings-/multiprosessor-argumentet (mister halve sammenligningen); tro brukertråder kan kjøre parallelt på flere CPU-er (de kan ikke); forveksle prosess (isolert) og tråd (delt minne).
- **Quiz: 20 · Flashcards: 30**

#### Kapittel 1.5: Meldingssending mellom prosesser

- **id:** `tdt4186-1-5` · **number:** 1.5 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4186-1-3` · **kapitteltype:** teori
- **description:** Kommunikasjon mellom prosesser med `send`/`receive`, skillet synkron vs. asynkron sending, og bufferbeskyttelse ved ikke-blokkerende send. Lavfrekvent randtema (kun trad. A) — merkes «bør kjenne til».
- **Eksamensbelegg:** Sjanger D1, **33 %** (2/6, kun trad. A). Prioritet: **kjenne**. Ligger sist blant teorikapitlene i delen; merkes «bør kjenne til».
- **Innholdskontrakt:** `definition` **meldingssending (*message passing*)** — `send(mottaker, melding)` / `receive(sender, melding)` som IPC uten delt minne. `theorem` **synkron vs. asynkron**: **synkron/blokkerende** — sender venter til mottaker har mottatt (rendezvous); **asynkron/ikke-blokkerende** — sender fortsetter umiddelbart, meldingen bufres. `warning` **bufferbeskyttelse**: ved ikke-blokkerende send må meldingsbufferen beskyttes til den er levert (senderen kan ellers overskrive den). **Begreps- og beregningsliste:** send/receive, synkron/blokkerende, asynkron/ikke-blokkerende, rendezvous, meldingsbuffer.
- **Oppgavesjangre:** D1 (forklar/sammenlign). Mønstereksempel (D1): «Hva er forskjellen på blokkerende og ikke-blokkerende send, og hvilket bufferproblem gir det siste?»
- **Typiske feil:** Blande synkron (venter) og asynkron (fortsetter); glemme bufferbeskyttelsesproblemet ved ikke-blokkerende send; tro meldingssending krever delt minne (den unngår det).
- **Quiz: 14 · Flashcards: 18**

#### Kapittel 1.6: DRILL — begrepskortsvar: OS-fundamenter, prosess og tråd

- **id:** `tdt4186-1-6` · **number:** 1.6 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4186-1-5` · **kapitteltype:** drill
- **description:** Systematisk drill på de garanterte konseptuelle kortsvarene (sjanger D1/D4) i Del 1: OS-definisjon (begge halvdeler), prosess vs. tråd, bruker- vs. kjernetråd, systemkall-listing — trent til presise, dekkende svar.
- **Eksamensbelegg:** Sjanger D1/D4, **100 %** (OS-fund + prosess/tråd). De billigste garanterte poengene. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** For hvert kortsvar: 1) **treff kjernen først** (den etterspurte definisjonen/forskjellen); 2) **dekk begge sider** av en sammenligning eller definisjon; 3) **legg til korrekt relevant detalj/eksempel** (pluss-poeng); 4) hold det kort. Sensor-kommentert case (OS-definisjon) med margnotat om hvor pluss-poengene ligger og hvor man mister dem ved å glemme halvparten. 10–15 oppgaver (D1/D4): definer OS, prosess vs. tråd, bruker- vs. kjernetråd, systemkall-liste, tilstandsdiagram.
- **Oppgavesjangre:** D1/D4. Mønstereksempel (D1): «Sammenlign prosess og tråd på tre punkter.» (adresserom/isolasjon; kontekststørrelse; kommunikasjon.)
- **Typiske feil:** Glemme den andre halvdelen (§#12); tynne svar uten den premierte detaljen; blande de tre trådmodellene.
- **Quiz: 24 · Flashcards: 12**

**Prøve-kvote Del 1:** 4 prøver (OS-fundamenter, prosesser og tråder)
1. Prøve 1.A (25 min): OS-definisjon + mål ved OS-utvikling (D1/D4).
2. Prøve 1.B (25 min): Systemkall, kjernemodus, avbruddssystem (D1/D4).
3. Prøve 1.C (25 min): Prosesser, tilstandsdiagram, kontekstskifte (D1).
4. Prøve 1.D (25 min): Bruker- vs. kjernetråder + meldingssending (D1).

---

### Del 2 — CPU-tidsstyring (planlegging)

> CPU-tidsstyring er 83 % og treffer begge tradisjoner ulikt: trad. A **regner**
> SJF-rekkefølge og RR-gjennomstrømning; trad. B **drøfter** sanntid (EDF/RMS/LLF).
> Boka trener begge. Kapittel 2.4 driller tidslinjene (Gantt) — det viktigste
> beregningskapitlet i delen.

#### Kapittel 2.1: Planleggingsmål og -kriterier

- **id:** `tdt4186-2-1` · **number:** 2.1 · **estimatedMinutes:** 35 · **prerequisites:** `tdt4186-1-3` · **kapitteltype:** teori
- **description:** Hva en planlegger optimaliserer — gjennomstrømning, gjennomsnittlig ventetid, responstid, rettferdighet — og hvordan målene skiller batch-, interaktive og sanntidssystemer, samt skillet avsettbar (*preemptive*) vs. ikke-avsettbar planlegging.
- **Eksamensbelegg:** Sjanger D1, del av CPU-tidsstyring **83 %**. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **planlegger (*scheduler*)** og kriteriene: **gjennomstrømning** (jobber/tid), **ventetid** (tid i klar-kø), **omløpstid (*turnaround*)**, **responstid**, **rettferdighet**, **CPU-utnyttelse**. `theorem` **målkonflikt**: kriteriene trekker i ulike retninger (kort responstid vs. høy gjennomstrømning). `definition` **avsettbar vs. ikke-avsettbar** planlegging. `text` batch/interaktiv/sanntid som tre regimer med ulike mål. **Begreps- og beregningsliste:** gjennomstrømning, ventetid, omløpstid, responstid, rettferdighet, avsettbar/ikke-avsettbar, planlegger.
- **Oppgavesjangre:** D1 (forklar/kontraster mål). Mønstereksempel (D1): «Hvorfor kan ikke en planlegger maksimere både gjennomstrømning og responstid samtidig?»
- **Typiske feil:** Blande ventetid (i kø) og omløpstid (total); tro ett kriterium er «best» uansett kontekst; forveksle avsettbar/ikke-avsettbar.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 2.2: Batch- og interaktiv planlegging (SJF, RR, prioritet)

- **id:** `tdt4186-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4186-2-1` · **kapitteltype:** teori
- **description:** De klassiske algoritmene FCFS, **korteste jobb først (SJF)**, korteste gjenstående tid (SRTF), **round-robin (RR)** og prioritetsplanlegging — med både beregnings-siden (rekkefølge/ventetid, kvantumseffekt) og drøfte-siden (fordeler/ulemper, prioritetsinvertering).
- **Eksamensbelegg:** Sjanger R5 (beregning) + D1 (drøfting), CPU-tidsstyring **83 %**. SJF regnet i 2011, RR i 2012. Prioritet: **perfekt** (beregningsryggrad).
- **Innholdskontrakt:** `definition` FCFS, SJF, SRTF, RR, prioritet. `theorem` **SJF minimerer gjennomsnittlig ventetid** → sorter jobber **stigende etter kjøretid**; med ukjent variabel Y → gi **intervall-svar** (Y plasseres relativt). `theorem` **round-robin**: tidskvantum vs. **prosesskifte-overhead** vs. gjennomstrømning — lite kvantum = god responstid men mye overhead; stort kvantum → nærmer seg FCFS. `definition` **prioritetsinvertering** — en høyprioritetsprosess blokkeres av en lavprioritetsprosess som holder en lås. **Begreps- og beregningsliste:** FCFS, SJF, SRTF, round-robin, tidskvantum, prosesskifte-overhead, prioritet, prioritetsinvertering, gjennomsnittlig ventetid.
- **Oppgavesjangre:** R5 (S-beregning) + D1 (drøft). Mønstereksempel (R5, nyskrevet): «Fire jobber med kjøretid 8, 3, 12 og 5 ms ankommer samtidig. Hvilken SJF-rekkefølge minimerer snittventetiden, og hva blir den?» (sorter 3,5,8,12 → ventetider 0,3,8,16 → snitt 6,75 ms). Drøfte-mønster: «Hvordan påvirker RR-kvantumet gjennomstrømningen?» (flere gyldige svar godtas).
- **Typiske feil:** Sortere SJF synkende; glemme at ankomsttid endrer regnestykket; tro RR har ett riktig gjennomstrømningssvar (flere godtas ved ulike modellantagelser); **ikke oppgi antagelsene** (kontekstskiftetid, ankomst).
- **Quiz: 22 · Flashcards: 24**

#### Kapittel 2.3: Sanntidsplanlegging (EDF, rate monotonic, least-laxity)

- **id:** `tdt4186-2-3` · **number:** 2.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4186-2-2` · **kapitteltype:** teori
- **description:** Sanntidsplanleggerne fra Stallings-tradisjonen — **earliest deadline first (EDF)**, **rate monotonic (RMS)** og **least-laxity/slakk (LLF)** — med de formelle garantibetingelsene, pluss fair-share-planlegging. Kun trad. B, men merkes tydelig fordi den ene tradisjonen tester det tungt.
- **Eksamensbelegg:** Sjanger D3 (illustrasjon) + R5 (tidslinje), sanntid **~50 %** (2–3/6, kun trad. B). Prioritet: **kunne** (avgjør C→A i trad. B). Merkes «tradisjonsavhengig — kommer i drøfte-tradisjonen».
- **Innholdskontrakt:** `definition` **EDF** — planlegg alltid oppgaven med **tidligste tidsfrist** først; optimal for én prosessor, men **garanterer for snitt, ikke varians**. `theorem`/`definition` **rate monotonic (RMS)** — statisk prioritet: **kortest periode = høyest prioritet**; garantibetingelse via **utnyttelsesgrense** `U ≤ n(2^{1/n} − 1)` `(verifiser eksakt form mot dagens pensum)`. `definition` **least-laxity (LLF)** — minst slakk (frist − gjenstående kjøretid) først. `definition` **fair-share** (UNIX) og **prioritetsinvertering** (fra 2.2). `text` **EDF virker og svikter**: vis et scenario der EDF holder alle frister og ett der overlast gir sammenbrudd (D3). **Begreps- og beregningsliste:** tidsfrist, periode, EDF, rate monotonic, utnyttelsesgrense, laxity/slakk, LLF, fair-share.
- **Oppgavesjangre:** D3 (illustrer EDF/RMS) + R5 (tegn tidslinje, sjekk grense). Mønstereksempel (D3): «Vis med et konkret oppgavesett ett tilfelle der EDF holder alle frister og ett der den svikter.» Beregnings-mønster (R5): «Tre periodiske oppgaver — sjekk om de er RMS-planleggbare via utnyttelsesgrensen.»
- **Typiske feil:** Bare navngi EDF/RMS uten den **formelle betingelsen** (§#11 — mister toppsjikt); tro RMS gir høyest prioritet til lengst periode (motsatt); forveksle EDF (dynamisk frist) og RMS (statisk periode).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 2.4: DRILL — scheduling-beregning (tidslinjer/Gantt)

- **id:** `tdt4186-2-4` · **number:** 2.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4186-2-3` · **kapitteltype:** drill
- **description:** Full beregningsdrill på planlegging: SJF-rekkefølge og gjennomsnittlig ventetid, RR-gjennomstrømning med gitt kvantum, og EDF/RMS-tidslinjer (Gantt-diagram) med garantisjekk — begge tradisjoners regnesjangre.
- **Eksamensbelegg:** Sjanger R5, CPU-tidsstyring 83 %. Prioritet: **perfekt** (beregning) / **kunne** (sanntid). Trener både trad. A (SJF/RR) og trad. B (EDF/RMS-tidslinje).
- **Innholdskontrakt (løsningsoppskrift):** 1) **SJF**: sorter stigende på kjøretid, regn ventetider og snitt; ved ukjent Y → intervall-svar; 2) **RR**: velg kvantum, kjør Gantt-runde for runde, tell prosesskifter, drøft gjennomstrømning; 3) **EDF/RMS**: tegn tidslinje/Gantt, marker frister, sjekk utnyttelsesgrense; 4) **oppgi alltid antagelsene** (ankomst, kontekstskiftetid, kvantum). Sensor-kommentert case (SJF med ukjent Y) med margnotat om hvorfor svaret blir et intervall og hvor antagelser gir uttelling. 10–15 oppgaver (R5): SJF-ventetid, RR-Gantt, EDF-/RMS-tidslinje, blandet.
- **Oppgavesjangre:** R5. Mønstereksempel (R5): «Kjør round-robin med kvantum 4 ms på fire jobber (kjøretid 6, 9, 3, 5) og tegn Gantt-diagrammet; hvor mange prosesskifter?»
- **Typiske feil:** Sortere SJF feil vei; glemme ankomsttid; ikke tegne tidslinjen (hopper til svar og bommer på overlapp); glemme utnyttelsesgrensen ved RMS; ikke oppgi antagelser.
- **Quiz: 26 · Flashcards: 12**

**Prøve-kvote Del 2:** 4 prøver (CPU-tidsstyring)
1. Prøve 2.A (25 min): Planleggingsmål og -kriterier (D1).
2. Prøve 2.B (30 min): SJF-rekkefølge/ventetid + RR-gjennomstrømning (R5).
3. Prøve 2.C (30 min): Sanntid — EDF/RMS-tidslinje + utnyttelsesgrense (R5/D3).
4. Prøve 2.D (25 min): Blandet planlegging — regn + drøft (R5/D1).

---

### Del 3 — Synkronisering og vranglås

> Synkronisering er 100 % (semafor/mutex/monitor/condvar) og vranglås 50 % (Bankier
> kun juni 2016). Delen trener både drøfting (mutex vs. semafor, Mesa vs. Hoare) og
> beregning (Bankier sikker/usikker, kodelesing av guarded wait). Kapittel 3.5 er
> drillkapitlet.

#### Kapittel 3.1: Kritiske seksjoner og gjensidig utelukkelse

- **id:** `tdt4186-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4186-1-4` · **kapitteltype:** teori
- **description:** Kappløpsproblemet (*race condition*), kritiske seksjoner, kravene til en korrekt gjensidig-utelukkelse-løsning, og de lavnivå-mekanismene TSL (test-and-set-lock) og «skru av avbrudd» — inkludert hvorfor sistnevnte **ikke** virker på multiprosessor.
- **Eksamensbelegg:** Sjanger D1, del av synkronisering **100 %**; TSL/multiprosessor knyttet til multiprosessor-temaet (6.1). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **kappløp (*race condition*)** og **kritisk seksjon**. `theorem` **krav til løsning**: gjensidig utelukkelse, framgang, begrenset venting, ingen antagelse om hastighet. `definition` **TSL (test-and-set-lock)** — atomisk maskininstruksjon for busslåsing. `warning`/`theorem` **«skru av avbrudd» virker ikke på multiprosessor** — det stanser bare avbrudd på **én** CPU; de andre kjernene kjører videre, så man må bruke **TSL med bysslåsing** (peker fram til 6.1). **Begreps- og beregningsliste:** kappløp, kritisk seksjon, gjensidig utelukkelse, TSL, busslåsing, spinlock, avbrudd av/på.
- **Oppgavesjangre:** D1 (forklar). Mønstereksempel (D1): «Hvorfor løser ikke ‘skru av avbrudd’ synkroniseringsproblemet på en flerkjerne-maskin?»
- **Typiske feil:** Tro «disable interrupts» løser synkronisering på multiprosessor (§#5); glemme et av kravene til en korrekt løsning; forveksle kritisk seksjon (koden) og lås (mekanismen).
- **Quiz: 18 · Flashcards: 24**

#### Kapittel 3.2: Semaforer og mutekser

- **id:** `tdt4186-3-2` · **number:** 3.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4186-3-1` · **kapitteltype:** teori
- **description:** Semaforen (teller + ventekø, `down`/`up`), muteksen (to tilstander, `lock`/`unlock`), den faste sammenligningen mutex vs. tellende semafor, og produsent-konsument-mønsteret.
- **Eksamensbelegg:** Sjanger D1, synkronisering **100 %**. Mutex vs. semafor er en fast sammenligning. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **semafor** — en heltallsteller med to atomiske operasjoner: `down()`/`P()` (dekrementer, blokkér hvis < 0) og `up()`/`V()` (inkrementer, vekk en venter); har **ventekø**. `definition` **mutex** — binær lås med **to tilstander** (låst/ulåst), kun **gjensidig utelukkelse**. `theorem` **mutex vs. tellende semafor**: mutex = to tilstander, én ressurs; tellende semafor = teller + ventekø, N ressurser og **generell venting/signalering**. `example` **produsent-konsument** med semaforer (tom/full/mutex). **Begreps- og beregningsliste:** semafor, down/up (P/V), teller, ventekø, mutex, binær semafor, produsent-konsument.
- **Oppgavesjangre:** D1 (sammenlign — begge sider). Mønstereksempel (D1): «Hva er forskjellen på en mutex og en tellende semafor?» → to tilstander vs. teller+kø; utelukkelse vs. generell venting.
- **Typiske feil:** Tro en mutex kan telle (den har to tilstander); glemme at en semafor har en ventekø; blande `down`/`up`-retningene; bruke mutex der man trenger en tellende semafor.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 3.3: Monitorer, betingelsesvariabler og guarded wait

- **id:** `tdt4186-3-3` · **number:** 3.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4186-3-2` · **kapitteltype:** teori
- **description:** Monitoren som høynivå-synkroniseringskonstruksjon, betingelsesvariabler med `wait`/`signal`, skillet **vanlig (Hoare) vs. Mesa-monitor**, prinsippet **guarded wait** (retest i while-løkke), spisende filosofer, og kodelesing av pthread-utdrag.
- **Eksamensbelegg:** Sjanger D1/D3 + R8 (kodelesing), synkronisering **100 %**. Monitor (vanlig vs. Mesa) fast i trad. B; kodelesing i trad. A (2011–2012). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **monitor** — modul med automatisk gjensidig utelukkelse; kun én tråd inne om gangen. `definition` **betingelsesvariabel (*condition variable*)** — `wait` (slipp monitoren, blokkér) / `signal` (vekk en venter). `theorem` **Hoare vs. Mesa**: **Hoare** — den vekte tråden kjører umiddelbart; **Mesa** — den signalerte tråden settes i klar-kø og **må reteste betingelsen** (`Cnotify`/`Cbroadcast`) `(verifiser hvilken semantikk dagens pensum bruker)`. `theorem` **guarded wait**: sjekk betingelsen i en **`while`-løkke, ikke `if`** — en annen tråd kan ha endret tilstanden mellom signal og oppvåkning; `cond_wait` **slipper mutexen atomisk** mens den venter og tar den tilbake ved oppvåkning. `example` **spisende filosofer** løst med monitor (begge gafler tas atomisk under monitorens utelukkelse — D3). `example` **kodelesing** (R8): pthread produsent/konsument med `while(betingelse) pthread_cond_wait`. **Begreps- og beregningsliste:** monitor, betingelsesvariabel, wait/signal, Hoare-monitor, Mesa-monitor, guarded wait, cond_wait (atomisk mutex-slipp), spisende filosofer.
- **Oppgavesjangre:** D1/D3 (forklar Mesa/spisende filosofer) + R8 (kodelesing). Mønstereksempel (R8): «Forklar hva dette pthread-utdraget gjør» → produsent/konsument, guarded wait i while, atomisk mutex-slipp.
- **Typiske feil:** Guarded wait med `if` i stedet for `while` (§#4); tro `cond_wait` holder mutexen mens den venter (den slipper den); blande Hoare (kjør straks) og Mesa (retest); glemme at spisende filosofer-løsningen tar begge gafler atomisk.
- **Quiz: 20 · Flashcards: 28**

#### Kapittel 3.4: Vranglås — betingelser, unngåelse og Bankier

- **id:** `tdt4186-3-4` · **number:** 3.4 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4186-3-2` · **kapitteltype:** teori
- **description:** De fire vranglåsbetingelsene og hvordan angripe hver, skillet **usikker tilstand ≠ vranglås**, og **Bankier-algoritmen** (sikkerhetssjekk før tildeling) — både drøfte-siden (betingelser, unngåelse) og beregnings-siden (sikker/usikker tilstand).
- **Eksamensbelegg:** Sjanger D4 (betingelser) + D3/R6 (Bankier), vranglås **50 %** (Bankier kun juni 2016). Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **fire vranglåsbetingelser** (alle må gjelde samtidig): **gjensidig utelukkelse**, **hold-og-vent**, **ikke-avbrytbar (*no preemption*)**, **sirkulær venting** — pluss hvordan **angripe** hver (D4). `definition` **usikker tilstand** vs. **vranglås**: en usikker tilstand *kan* lede til vranglås **hvis alle prosesser krever maksimalbehovet samtidig**, men er **ikke i seg selv** en vranglås. `theorem`/`example` **Bankier-algoritmen** (R6/D3): gitt allokering, maksbehov og tilgjengelige ressurser — finn en **sikker sekvens** der hver prosess kan fullføre etter tur; tildel bare hvis resultatet forblir sikkert. **Begreps- og beregningsliste:** vranglås, de fire betingelsene, ressursangrep, sikker/usikker tilstand, sikker sekvens, Bankier-algoritmen, maksbehov/allokering/tilgjengelig.
- **Oppgavesjangre:** D4 (list + angrip betingelsene), R6/D3 (Bankier). Mønstereksempel (R6, nyskrevet): «Gitt allokerings- og behovsmatrisene under — er tilstanden sikker? Finn en sikker sekvens hvis den finnes.»
- **Typiske feil:** Forveksle usikker tilstand med vranglås (§#8); glemme én av de fire betingelsene; tro Bankier oppdager en eksisterende vranglås (den *unngår* ved å nekte usikre tildelinger); hoppe over antagelser i sikkerhetssjekken.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 3.5: DRILL — synkronisering og Bankier

- **id:** `tdt4186-3-5` · **number:** 3.5 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4186-3-4` · **kapitteltype:** drill
- **description:** Full drill på begge synkroniseringssjangrene: kodelesing av pthread-utdrag (guarded wait), semafor-/monitorresonnement, og Bankier-algoritmens sikkerhetssjekk (sikker/usikker tilstand + sikker sekvens).
- **Eksamensbelegg:** Sjanger R8 (kodelesing) + R6 (Bankier) + D1/D3, synkronisering 100 % / vranglås 50 %. Prioritet: **perfekt** (sync) / **kunne** (Bankier).
- **Innholdskontrakt (løsningsoppskrift):** 1) **kodelesing**: identifiser mutex/condvar, sjekk om `while` (guarded wait) eller `if`, forklar det atomiske mutex-slippet; 2) **Bankier**: sett opp behov = maks − allokering, finn en prosess hvis behov ≤ tilgjengelig, «kjør» den, frigi ressursene, gjenta → sikker sekvens eller usikker; 3) **oppgi antagelsene**. Sensor-kommentert case (Bankier) med margnotat om hvorfor en tilstand er usikker uten å være vranglås. 10–15 oppgaver (R8/R6): kodelesing, semafor-resonnement, Bankier-sikkerhetssjekk med nyskrevne matriser.
- **Oppgavesjangre:** R8/R6/D3. Mønstereksempel (R8): «Denne koden bruker `if` i stedet for `while` rundt `cond_wait` — hvilken feil kan oppstå?» (missed/spurious wakeup — betingelsen ikke lenger sann).
- **Typiske feil:** Godta `if` som guarded wait (§#4); regne Bankier med maks i stedet for behov; kalle en usikker tilstand for vranglås; glemme å frigi ressursene mellom stegene i sikkerhetssjekken.
- **Quiz: 24 · Flashcards: 12**

**Prøve-kvote Del 3:** 4 prøver (Synkronisering og vranglås)
1. Prøve 3.A (25 min): Kritiske seksjoner, TSL, hvorfor «disable interrupts» svikter (D1).
2. Prøve 3.B (30 min): Semafor/mutex/monitor + guarded wait + kodelesing (D1/R8).
3. Prøve 3.C (30 min): Vranglåsbetingelser + usikker tilstand ≠ vranglås (D4).
4. Prøve 3.D (30 min): Bankier-algoritmen — sikker/usikker + sekvens (R6).

---

### Del 4 — Minnehåndtering og virtuelt minne

> Det tyngst vektede temaet i trad. A (15–20 %) og 100 % i begge tradisjoner.
> Sideerstatning er 67 % (trace **kun** i trad. A, men da tungt) og LRU/LFU/aging
> drøftes i trad. B. Delen trener både trace-beregning og konseptuell forklaring.
> Kapittel 4.5 er det store drillkapitlet.

#### Kapittel 4.1: Minneabstraksjon — adresserom, relokering og swapping

- **id:** `tdt4186-4-1` · **number:** 4.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4186-1-3` · **kapitteltype:** teori
- **description:** Hvordan OS-et gir hver prosess et eget adresserom: fysisk vs. logisk adresse, relokering (base/grense), og swapping av hele prosesser inn/ut av minnet — grunnlaget for paging (4.2).
- **Eksamensbelegg:** Sjanger D1, del av minne/VM **100 %**. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **fysisk vs. logisk (virtuell) adresse**. `definition` **relokering** — base/grense-register (*base/limit*) for beskyttelse og flytting. `definition` **swapping** — hele prosesser flyttes mellom primær- og sekundærlager. `text` fragmentering (intern/ekstern) som motivasjon for paging. **Begreps- og beregningsliste:** fysisk/logisk adresse, adresserom, base/grense-register, relokering, swapping, intern/ekstern fragmentering.
- **Oppgavesjangre:** D1. Mønstereksempel (D1): «Hva er forskjellen på en logisk og en fysisk adresse, og hvem oversetter mellom dem?»
- **Typiske feil:** Blande intern (i en blokk) og ekstern (mellom blokker) fragmentering; tro relokering skjer i programvaren (MMU gjør det i maskinvare); forveksle swapping (hel prosess) og paging (sider).
- **Quiz: 16 · Flashcards: 22**

#### Kapittel 4.2: Paging, segmentering og TLB

- **id:** `tdt4186-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4186-4-1` · **kapitteltype:** teori
- **description:** Paging (sider/rammer/sidetabell), segmentering, kombinasjonen av begge, oversettelsesbufferen **TLB** (soft/hard miss), og strukturer for store adresserom (multinivå og inverterte sidetabeller) — pluss sidestørrelse-avveiningen.
- **Eksamensbelegg:** Sjanger D1, minne/VM **100 %** (ofte tyngst vektet i trad. A). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **paging** — logisk adresse = (sidenr, forskyvning); **sidetabell** oversetter sidenr → rammenr. `definition` **segmentering** — variabellange, logiske segmenter; `theorem` **paging vs. segmentering vs. kombinasjon** (sammenlign — D1). `definition` **TLB (*translation lookaside buffer*)** — hurtigbuffer for sidetabelloppslag; `theorem` **soft vs. hard miss** (soft = siden i minnet men ikke i TLB; hard = ekte sidefeil, siden på disk). `definition` **multinivå** og **invertert sidetabell** for store adresserom. `text` **sidestørrelse-avveining** (liten = mindre intern fragmentering men større tabell). **Begreps- og beregningsliste:** side/ramme, sidetabell, forskyvning, segment, TLB, soft/hard miss, multinivå sidetabell, invertert sidetabell, sidestørrelse.
- **Oppgavesjangre:** D1 (sammenlign/forklar). Mønstereksempel (D1): «Sammenlign paging og segmentering; hvorfor kombinerer mange systemer dem?»
- **Typiske feil:** Blande soft miss (i minnet) og hard miss/sidefeil (på disk); tro segmentering unngår all fragmentering; glemme at store adresserom krever multinivå/inverterte tabeller; forveksle side (fast størrelse) og segment (variabel).
- **Quiz: 22 · Flashcards: 30**

#### Kapittel 4.3: Virtuelt minne — arbeidssett, thrashing og CPU-utnyttelse

- **id:** `tdt4186-4-3` · **number:** 4.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4186-4-2` · **kapitteltype:** teori
- **description:** Virtuelt minne som «mer minne enn det fysiske», lokalitet og **arbeidssett** (Stallings-signatur), **thrashing**, og formelen for **CPU-utnyttelse `1 − pⁿ`** — inkludert de to fellene: når formelen ikke gjelder, og hvorfor **mer fysisk minne** (ikke større disk) løser thrashing.
- **Eksamensbelegg:** Sjanger D1 + R7 (utnyttelse), minne/VM **100 %**; arbeidssett kun trad. B. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **virtuelt minne** og **lokalitet** (tidsmessig/romlig). `definition` **arbeidssett (*working set*)** — settet av sider en prosess bruker aktivt i et tidsvindu. `definition` **thrashing** — for høy multiprogrammering → prosessene bruker mer tid på paging enn arbeid. `theorem` **CPU-utnyttelse = `1 − pⁿ`** (p = I/O-ventefraksjon, n = multiprogrammeringsgrad) — `warning`: **gjelder bare når alle prosesser er i primærlager**; ved thrashing bryter modellen sammen (§#6). `warning` **mer disk hjelper ikke mot thrashing** — det gir bare mer swap-plass; løsningen er mer **fysisk minne** (§#7). **Begreps- og beregningsliste:** virtuelt minne, lokalitet, arbeidssett, thrashing, multiprogrammeringsgrad `n`, I/O-ventefraksjon `p`, CPU-utnyttelse `1 − pⁿ`.
- **Oppgavesjangre:** D1 (forklar arbeidssett/thrashing) + R7 (regn utnyttelse). Mønstereksempel (R7): «Fem prosesser venter hver 80 % på I/O. Hva er teoretisk CPU-utnyttelse, og under hvilken antagelse gjelder formelen?» (`1 − 0,8⁵ ≈ 0,67`; forutsetter alle i minnet).
- **Typiske feil:** Bruke `1 − pⁿ` ved thrashing (§#6); tro større disk hjelper mot thrashing (§#7); blande arbeidssett (aktive sider) og hele adresserommet; glemme antagelsen om at alle prosesser er i minnet.
- **Quiz: 20 · Flashcards: 26**

#### Kapittel 4.4: Sideerstatningsalgoritmer

- **id:** `tdt4186-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4186-4-3` · **kapitteltype:** teori
- **description:** Hele repertoaret av sideerstatningsalgoritmer — NRU, FIFO, andre-sjanse, klokke, LRU, Optimal, aging, WSClock, LFU — med R/M-bit-mekanikken og den kritiske regelen at **modifiserte (skitne) sider må skrives ut før de kan stjeles**. Grunnlaget for trace-drillen (4.5).
- **Eksamensbelegg:** Sjanger R1 (trace) + D1 (forklar), sideerstatning **67 %** (trace kun trad. A, alle 3 sett; LRU/LFU/aging drøftes i trad. B). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **R-bit** (referert) og **M-bit** (modifisert/skitten). `theorem` per algoritme: **NRU** (fire klasser etter (R,M); R nullstilles ved klokketikk); **FIFO** (eldst ut); **andre-sjanse** (FIFO + R-bit gir «ny sjanse»); **klokke** (sirkulær andre-sjanse); **LRU** (tidsstempel/stakk); **Optimal** (framoverblikk — brukes til sammenligning); **aging** (skiftregister — tilnærmet LRU, glemmer eldre bruk, oppløser rekkefølge innen et klokketikk); **WSClock** (virtuell tid, «time of last use», arbeidssett-grense **tau**, viser); **LFU** (minst brukt). `warning`/`theorem` **skitne sider kan ikke stjeles** uten å skrives ut først — endrer offervalget. **Begreps- og beregningsliste:** R-bit, M-bit, sidefeil, NRU, FIFO, andre-sjanse, klokke, LRU, Optimal, aging, WSClock, tau, LFU.
- **Oppgavesjangre:** R1 (trace) + D1 (sammenlign). Mønstereksempel (D1): «Hvorfor er aging bare en tilnærming til LRU, og hva mister den?»
- **Typiske feil:** Glemme at skitne sider ikke kan stjeles (§#1); blande andre-sjanse (R-bit) og LRU (tidsstempel); tro aging er eksakt LRU; feil tau/viser-håndtering i WSClock; nullstille R på feil tidspunkt i NRU.
- **Quiz: 22 · Flashcards: 30**

#### Kapittel 4.5: DRILL — sideerstatnings-trace

- **id:** `tdt4186-4-5` · **number:** 4.5 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4186-4-4` · **kapitteltype:** drill
- **description:** Full beregningsdrill på fagets signatur-regnesjanger: kjør NRU/LRU/FIFO/Optimal/andre-sjanse/WSClock mekanisk på en referansestreng, vis rammetabellen med R/M-bit per tidspunkt, og **tell sidefeil** — pluss den konseptuelle forklaringen av LRU/LFU/aging.
- **Eksamensbelegg:** Sjanger R1, sideerstatning-trace i alle 3 trad. A-sett. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **sett opp rammetabellen** med én kolonne per referanse; 2) **kjør algoritmen mekanisk** — for hver referanse: treff eller sidefeil, oppdater R/M-bit, velg offer etter algoritmens regel; 3) **modifiserte sider skrives ut** før de gjenbrukes (behandles annerledes ved offervalg); 4) **tell sidefeilene** og **oppgi antagelsene** (klokketikk-intervall, tau, hvordan uavgjort brytes). Sensor-kommentert case (WSClock-trace) med margnotat om tau/viser og hvorfor en skitten side ikke velges. 12–15 oppgaver (R1): samme referansestreng kjørt med ulike algoritmer, tell og sammenlign sidefeil.
- **Oppgavesjangre:** R1. Mønstereksempel (R1, nyskrevet): «Kjør FIFO, LRU og Optimal på referansestrengen 4 3 2 1 4 3 5 4 3 2 1 5 med 3 rammer; hvor mange sidefeil hver?»
- **Typiske feil:** Glemme skitne-side-regelen (§#1); nullstille R feil (NRU); rote tau/viser (WSClock); telle treff som sidefeil; ikke oppgi hvordan uavgjort brytes.
- **Quiz: 28 · Flashcards: 14**

**Prøve-kvote Del 4:** 4 prøver (Minnehåndtering og virtuelt minne)
1. Prøve 4.A (25 min): Minneabstraksjon + paging/segmentering/TLB (D1).
2. Prøve 4.B (30 min): Virtuelt minne, arbeidssett, thrashing + CPU-utnyttelse `1 − pⁿ` (D1/R7).
3. Prøve 4.C (30 min): Sideerstatningsalgoritmer — begreper + skitne sider (D1).
4. Prøve 4.D (35 min): Sideerstatnings-trace — tell sidefeil (R1).

---

### Del 5 — Filsystemer og I/O

> Filsystem er 83 % (regnes i trad. A, drøftes i trad. B) og I/O er 100 % (bred
> paraply: drivere, avbrudd, DMA, buffering/caching, RAID). Delen trener
> blokkallokerings- og diskaksess-beregning (kap. 5.2) sammen med I/O-drøfting og
> avbruddstiming.

#### Kapittel 5.1: Filsystem — allokeringsmetoder

- **id:** `tdt4186-5-1` · **number:** 5.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4186-4-1` · **kapitteltype:** teori
- **description:** Hvordan filer legges på disk: kontinuerlig, lenket, FAT og **inode/UNIX V7** (direktepekere + enkelt/dobbelt/trippelt indirekte), med fordeler/ulemper og skillet i hullhåndtering — grunnlaget for blokkallokerings-drillen (5.2).
- **Eksamensbelegg:** Sjanger D1 (sammenlign) + grunnlag for R2/R3, filsystem **83 %**. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **kontinuerlig**, **lenket**, **FAT** (*file allocation table*) og **inode** (indeksnode). `theorem` **inode/UNIX V7-struktur**: ~10 direktepekere + **enkelt/dobbelt/trippelt indirekte** blokk; effektive pekere per indirekteblokk ≈ blokkstørrelse/pekerstørrelse `(verifiser eksakt antall direktepekere mot dagens pensum)`. `theorem` **hull**: FAT/kontinuerlig kan **ikke** ha hull; inode **kan** ha hull. `text` kataloger, EXT2-struktur (kort). **Begreps- og beregningsliste:** kontinuerlig/lenket/FAT/inode, direktepeker, indirekteblokk (enkelt/dobbelt/trippelt), hull, EXT2, pekere per blokk.
- **Oppgavesjangre:** D1 (sammenlign metodene). Mønstereksempel (D1): «Sammenlign FAT og inode mht. direkte aksess og støtte for hull.»
- **Typiske feil:** Tro FAT støtter hull (den gjør ikke — §#3); glemme indirekteblokkene i inode-strukturen; blande lenket (peker i hver blokk) og FAT (tabell i minne).
- **Quiz: 18 · Flashcards: 26**

#### Kapittel 5.2: DRILL — blokkallokering og diskaksess-telling

- **id:** `tdt4186-5-2` · **number:** 5.2 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4186-5-1` · **kapitteltype:** drill
- **description:** Full beregningsdrill på filsystem-sjangrene: antall diskblokker allokert i FAT/kontinuerlig vs. inode (inkludert indirekteblokker), og antall diskaksesser for et lese-/seek-program under lenket vs. FAT-implementasjon.
- **Eksamensbelegg:** Sjanger R2 (blokkallokering) + R3 (diskaksess), trad. A. Prioritet: **kunne** (avgjør C→A).
- **Innholdskontrakt (løsningsoppskrift):** 1) **FAT/kontinuerlig blokker** = `⌈(høyeste_adresse + skrivestørrelse)/blokkstørrelse⌉`, **ingen hull**; 2) **inode-blokker** = kun berørte datablokker, **men tell hver indirekteblokk** som trengs for å nå en høy blokk; 3) **diskaksesser lenket** = følg kjeden fra start (vokser med avstand); **FAT** = kjeden i minne, kun datablokker fra disk; 4) **oppgi alltid antagelsene** (blokkstørrelse, pekerstørrelse, om katalogen leses). Sensor-kommentert case (inode-allokering) med margnotat om **den glemte indirekteblokka**. 10–15 oppgaver (R2/R3) med nyskrevne adresser/størrelser.
- **Oppgavesjangre:** R2/R3. Mønstereksempel (R2, nyskrevet): «Blokkstørrelse 1 KiB, 12 direktepekere. Det skrives 4 byte til byte-adresse 20 000 i en tom fil. Hvor mange diskblokker allokeres under (a) inode med hull, (b) kontinuerlig?»
- **Typiske feil:** Glemme å allokere indirekteblokka (§#2); blande FAT og inode mht. hull (§#3); glemme takfunksjonen; ikke oppgi antagelser (§#13).
- **Quiz: 26 · Flashcards: 12**

#### Kapittel 5.3: I/O-prinsipper — drivere, avbrudd, DMA, buffering og caching

- **id:** `tdt4186-5-3` · **number:** 5.3 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4186-1-2` · **kapitteltype:** teori
- **description:** I/O-systemets deler: device-driverens oppgaver, avbruddshåndtering, **DMA** (direkte minneaksess), den faste sammenligningen **buffering vs. caching**, klokkeprogramvare — og avbruddstiming-beregningen (maks avbrudd/sek, %CPU).
- **Eksamensbelegg:** Sjanger D1 + R4 (avbruddstiming), I/O **100 %** (bred paraply). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **device-driver** (enhetsspesifikk kode) og oppgavene den har. `definition` **avbruddshåndtering** og **DMA** (overfører data uten CPU per byte). `theorem` **buffering vs. caching**: **buffering** = mellomlagring for **én** aksess om gangen mellom CPU og enhet (jevner ut hastighetsforskjell); **caching** = holder data for **flere** aksesser, utnytter **lokalitet** (D1, fast sammenligning). `definition` buffering-varianter (uten/enkel/dobbel/sirkulær) og cache-erstatning (LRU/LFU/FBS). `text` **klokkeprogramvare**. `theorem` **avbruddstiming** (R4): `maks avbrudd/sek = 1/(tid å lagre + gjenopprette registre)`; `%CPU = avbrudd/sek × betjeningstid`; **riktige enheter** (ns/µs), hvert register **både pushes og poppes**. **Begreps- og beregningsliste:** device-driver, avbruddshåndtering, DMA, buffering (uten/enkel/dobbel/sirkulær), caching (LRU/LFU/FBS), klokkeprogramvare, avbruddstiming, register-lagring.
- **Oppgavesjangre:** D1 (buffering vs. caching) + R4 (avbruddstiming). Mønstereksempel (R4, nyskrevet): «Å lagre og gjenopprette 22 registre tar 2 minneord-aksesser hver à 50 ns. Hva er maks antall avbrudd per sekund?»
- **Typiske feil:** Blande buffering (én aksess) og caching (flere, lokalitet — §-sammenligning); enhetsfeil ns/µs i avbruddstiming (§#10); glemme at hvert register både pushes og poppes (§#10); tro DMA bruker CPU per byte.
- **Quiz: 22 · Flashcards: 28**

#### Kapittel 5.4: Sekundærlager — RAID og diskplanlegging

- **id:** `tdt4186-5-4` · **number:** 5.4 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4186-5-1` · **kapitteltype:** teori
- **description:** RAID-nivåene 0–6 (striping, speiling, paritet) med datainnhold og nytte per nivå, og klassisk diskplanlegging (FCFS, SSTF, SCAN «heisalgoritmen») — begge randtemaer, men RAID er en Stallings-signatur i trad. B.
- **Eksamensbelegg:** Sjanger D4 (RAID-liste) + D1 (diskplanlegging), RAID **33 %** (kun trad. B), diskplanlegging **17 %** (lavfrekvent). Prioritet: **kjenne**. Merkes «bør kjenne til — diskplanlegging er en pensum-klassiker, men lavfrekvent».
- **Innholdskontrakt:** `theorem`/`definition` **RAID 0–6** (D4): RAID 0 (striping, ingen redundans), RAID 1 (speiling), RAID 4/5 (blokk-paritet, distribuert i 5), RAID 6 (dobbel paritet) `(verifiser nivådefinisjoner mot dagens pensum)`. `definition` **diskplanlegging**: **FCFS**, **SSTF** (korteste søketid først), **SCAN** («heisalgoritmen» — feier fram og tilbake). `text` hvorfor SSTF kan sulte ytterspor. **Begreps- og beregningsliste:** RAID 0–6, striping, speiling, paritet, FCFS, SSTF, SCAN/heisalgoritmen, søketid.
- **Oppgavesjangre:** D4 (RAID-nivåer) + D1 (diskplanlegging). Mønstereksempel (D4): «Beskriv RAID 0, 1 og 5 og hva hvert nivå gir mht. ytelse og feiltoleranse.»
- **Typiske feil:** Blande RAID 0 (ytelse, ingen redundans) og RAID 1 (speiling); tro paritet (RAID 5) er speiling; forveksle SSTF og SCAN; overvekte diskplanlegging (lavfrekvent — §funn 5).
- **Quiz: 18 · Flashcards: 24**

**Prøve-kvote Del 5:** 4 prøver (Filsystemer og I/O)
1. Prøve 5.A (25 min): Filallokeringsmetoder — FAT/inode/lenket (D1).
2. Prøve 5.B (35 min): Blokkallokering + diskaksess-telling (R2/R3).
3. Prøve 5.C (30 min): I/O — drivere/DMA/buffering vs. caching + avbruddstiming (D1/R4).
4. Prøve 5.D (25 min): RAID 0–6 + diskplanlegging (D4/D1).

---

### Del 6 — Multiprosessor, virtualisering og sikkerhet

> Multiprosessor er et **undervurdert 100 %-gjengangertema** (nivå 1/perfekt) —
> organisering, TSL/spinning, cache-koherens og multiprosessor-scheduling.
> Virtualisering (33 %, kun trad. A) og sikkerhet (50 %, kun trad. A) er lettere
> randtemaer med lettvinte poeng når de kommer.

#### Kapittel 6.1: Multiprosessor og multikjerne

- **id:** `tdt4186-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4186-3-1` · **kapitteltype:** teori
- **description:** OS på flere CPU-er: organiseringsmodellene (eget OS per CPU / master-slave / SMP), multiprosessor-synkronisering (TSL/spinning/cache-busstrafikk), **cache-koherens**, og multiprosessor-scheduling (delt kø, affinity, space sharing, gang scheduling). Det undervurderte høyfrekvente temaet.
- **Eksamensbelegg:** Sjanger D1, multiprosessor **100 %** (6/6, i én eller annen form hvert sett — funn 3). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **OS-organisering**: **eget OS per CPU**, **master-slave**, **SMP** (symmetrisk multiprosessering) — fordeler/ulemper. `theorem` **multiprosessor-synkronisering**: **TSL med spinning** (busslås); **cache-busstrafikk**-problemet ved spinning; hvorfor «disable interrupts» **ikke** virker (peker til 3.1). `definition` **cache-koherens** — protokoll som holder flere cacher konsistente. `definition` **multiprosessor-scheduling**: **delt kø** vs. **affinity** (prosessor-tilhørighet), **space sharing**, **gang scheduling**. **Begreps- og beregningsliste:** SMP, master-slave, eget OS per CPU, TSL/spinning, cache-busstrafikk, cache-koherens, prosessor-affinity, space sharing, gang scheduling.
- **Oppgavesjangre:** D1 (forklar/sammenlign). Mønstereksempel (D1): «Hvorfor gir naiv spinning på en TSL-lås mye busstrafikk, og hva er cache-koherensens rolle?»
- **Typiske feil:** Tro «disable interrupts» virker på multiprosessor (§#5); glemme cache-busstrafikk-problemet ved spinning; blande affinity (holde prosess på samme CPU) og gang scheduling (kjøre relaterte tråder samtidig); forveksle master-slave og SMP.
- **Quiz: 22 · Flashcards: 30**

#### Kapittel 6.2: Virtualisering og hypervisorer

- **id:** `tdt4186-6-2` · **number:** 6.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4186-1-2` · **kapitteltype:** teori
- **description:** Virtuelle maskiner og hypervisorer: **Type 1** (bar-metall, trap ved sensitiv instruksjon), **Type 2** (vertsbasert, binæroversetting/emulering), og **paravirtualisering** (sensitive instruksjoner erstattes med systemkall til hypervisoren). Randtema, kun trad. A (2011–2012).
- **Eksamensbelegg:** Sjanger D1, virtualisering **33 %** (2/6, kun trad. A). Prioritet: **kjenne**. Merkes «bør kjenne til».
- **Innholdskontrakt:** `definition` **hypervisor / virtuell maskin**. `theorem` **Type 1 vs. Type 2**: Type 1 kjører direkte på maskinvaren (**trap** ved sensitiv instruksjon → hypervisoren emulerer); Type 2 kjører over et verts-OS (**binæroversetting/emulering**). `definition` **paravirtualisering** — gjeste-OS-et endres slik at sensitive instruksjoner blir eksplisitte **hyperkall** (systemkall til hypervisoren). `definition` **sensitiv instruksjon** — instruksjon som må fanges for korrekt virtualisering. **Begreps- og beregningsliste:** hypervisor, virtuell maskin, Type 1/Type 2, trap, binæroversetting, paravirtualisering, hyperkall, sensitiv instruksjon.
- **Oppgavesjangre:** D1 (sammenlign Type 1/2). Mønstereksempel (D1): «Hva skiller en Type 1- fra en Type 2-hypervisor, og hva gjør paravirtualisering annerledes?»
- **Typiske feil:** Blande Type 1 (bar-metall, trap) og Type 2 (vertsbasert, oversetting); tro paravirtualisering ikke endrer gjeste-OS-et (det gjør det); forveksle sensitiv og privilegert instruksjon.
- **Quiz: 16 · Flashcards: 20**

#### Kapittel 6.3: Sikkerhet, malware og angrep

- **id:** `tdt4186-6-3` · **number:** 6.3 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4186-4-1` · **kapitteltype:** teori
- **description:** OS-sikkerhetens ytre kant: malware-typene (trojaner, virus, orm, spyware, rootkit) og angrep mot programmeringsfeil (bufferoverflyt, formatstreng, return-to-libc, heltallsoverflyt, kodeinjeksjon, privilegieeskalering). Randtema, kun trad. A, men lettvinte opplistingspoeng.
- **Eksamensbelegg:** Sjanger D4 (malware-liste) + D1, sikkerhet **50 %** (3/6, kun trad. A). Prioritet: **kjenne**. Merkes «bør kjenne til — lettvinte poeng når det kommer».
- **Innholdskontrakt:** `definition` **fem malware-typer** (D4): **trojaner**, **virus** (minneresident/boot-sektor/driver), **orm**, **spyware**, **rootkit** — kort hva hver er. `definition` **angrepstyper** mot programmeringsfeil: **bufferoverflyt**, **formatstreng**, **return-to-libc**, **heltallsoverflyt**, **kodeinjeksjon**, **privilegieeskalering**. `text` hvorfor OS-et er siste forsvarslinje. **Begreps- og beregningsliste:** trojaner, virus, orm, spyware, rootkit, bufferoverflyt, formatstreng, return-to-libc, heltallsoverflyt, kodeinjeksjon, privilegieeskalering.
- **Oppgavesjangre:** D4 (list + forklar). Mønstereksempel (D4): «Nevn fem typer malware og forklar kort hva som skiller dem.»
- **Typiske feil:** Blande virus (trenger vert) og orm (selvspredende); liste uten kort forklaring (mister pluss-poeng); forveksle bufferoverflyt (skriver forbi buffer) og heltallsoverflyt (wraparound).
- **Quiz: 16 · Flashcards: 22**

**Prøve-kvote Del 6:** 4 prøver (Multiprosessor, virtualisering og sikkerhet)
1. Prøve 6.A (30 min): Multiprosessor-organisering + TSL/spinning/cache-koherens (D1).
2. Prøve 6.B (25 min): Multiprosessor-scheduling — delt kø/affinity/gang (D1).
3. Prøve 6.C (25 min): Virtualisering — Type 1/2 + paravirtualisering (D1).
4. Prøve 6.D (25 min): Malware + angrepstyper (D4).

---

### Del 7 — Eksamenstrening

#### Kapittel 7.1: Eksamensdisiplinen — regne og drøfte, begge tradisjoner

- **id:** `tdt4186-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4186-0-1` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: hvordan gjenkjenne hvilken tradisjon en oppgave tilhører, hvordan svare **presist men med premiert dybde**, hvordan strukturere et svar etter **Nygård-malen** (trad. B), hvordan **oppgi antagelser** i beregninger, og hvordan disponere fire timer over 5–8 oppgaver.
- **Eksamensbelegg:** Metakapittel over alle sjangre R1–R8/D1–D4. Trener de viktigste føringene — *treff kjernen, dekk så bredt der bredde premieres*, *oppgi antagelser*, *gjenkjenn Nygård-malen*, *gi den formelle betingelsen*. Prioritet: **perfekt** (påvirker alle temaer).
- **Innholdskontrakt:** `tip`/`text`: (i) **tradisjonsgjenkjenning** — regneverb (regn ut/tell/hvor mange) → trad. A-metode; drøfteverb (drøft/sammenlign/forklar/vurder) → trad. B-mal; (ii) **svarstrategi** — treff det etterspurte først, legg til korrekt relevant detalj (pluss-poeng), hold det kort; (iii) **Nygård-malen** — de faste leddene (problem → moderne utfordringer langs fire akser → implementer/sammenlign mht. relevans OG ytelse → drøft resultater); (iv) **beregningsdisiplin** — oppgi antagelser, riktige enheter, vis mellomregning, godta at flere svar kan være gyldige; (v) **den formelle betingelsen** — gi RMS-/EDF-grensen og Bankier-sikkerheten, ikke bare navnet (§#11); (vi) **tidsbudsjett** — fordel etter vekt (trad. A ulik vekt 5–25 %; trad. B likt vektet), ~30 min per stor oppgave. Sammendrag av sensor-metareglene (korte presise svar + pluss for detalj, oppgi antagelser, flere gyldige svar, les verbet nøye).
- **Oppgavesjangre:** Alle R1–R8/D1–D4 (metanivå). 6–8 «hvordan bør du svare?»-oppgaver: gitt en oppgaveformulering, avgjør tradisjon, sjanger og beste struktur (f.eks. gjenkjenn Nygård-malen, sett opp antagelser før beregning).
- **Typiske feil:** Pugge bare én tradisjon; tynne svar uten premiert dybde; glemme antagelser; navngi en algoritme uten den formelle betingelsen (§#11); ikke gjenkjenne Nygård-malens ledd; bruke for lang tid på lavt vektede oppgaver.
- **Quiz: 16 · Flashcards: 14**

#### Kapittel 7.2: Øvingseksamen 1 — regne-tradisjonen (Tanenbaum/trad. A)

- **id:** `tdt4186-7-2` · **number:** 7.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4186-7-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i tradisjon A-stilen: 8 **ulikt vektede** oppgaver (5–25 %) som blander konseptuelt kortsvar med **konkrete beregninger** — sideerstatnings-trace, blokkallokering, diskaksess, avbruddstiming, SJF/RR, kodelesing og sikkerhet.
- **Eksamensbelegg/miks:** Speiler trad. A (§1/§7). **Oppgave 1** (5 %): OS-fundamenter (D1). **Oppgave 2** (20 %): prosesser/tråder + synkronisering (D1/R8-kodelesing). **Oppgave 3** (15–20 %): minne/VM + **sideerstatnings-trace** (R1). **Oppgave 4** (10–15 %): filsystem + **blokkallokering/diskaksess** (R2/R3). **Oppgave 5** (10 %): I/O + **avbruddstiming** (R4). **Oppgave 6** (10 %): **SJF/RR-beregning** (R5). **Oppgave 7** (10 %): multiprosessor (D1). **Oppgave 8** (5–10 %): sikkerhet/malware + virtualisering (D4/D1). Alle nyskrevne (egne tall/strenger/kode/kontekster). **Løsningsforslag i `collapsible` per oppgave**, skrevet som A-besvarelse med **antagelsene oppgitt** og **enheter/mellomregning vist**; `tip` om poengvekt per oppgave. Innledende `tip` om tidsbudsjett (fordel etter vekt).
- **Innholdskontrakt:** Dekker sjangrene R1–R8 + D1/D4 i trad. A-format.
- **Oppgavesjangre:** R1–R8, D1, D4.
- **Quiz: 10 · Flashcards: 0**

#### Kapittel 7.3: Øvingseksamen 2 — drøfte-tradisjonen (Stallings/trad. B)

- **id:** `tdt4186-7-3` · **number:** 7.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4186-7-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers sett i tradisjon B-stilen: 5–6 **likt vektede** frisvarsoppgaver bygd på **Nygård-malen** (problem → moderne utfordringer → implementer/sammenlign → drøft resultater), med RAID, sanntid (EDF/RMS), arbeidssett, monitor og Bankier — rent diskursivt, ingen tallregning utenom Bankier/RMS-grense.
- **Eksamensbelegg/miks:** Speiler trad. B (§1/§3, sjanger D2/D3). **Oppgave 1**: OS-mål + prosess/tråd (D1/D2). **Oppgave 2**: synkronisering — semafor/monitor (vanlig vs. Mesa) + spisende filosofer (D1/D3). **Oppgave 3**: minne/virtuelt minne + **arbeidssett** + LRU/LFU-drøfting (D1). **Oppgave 4**: sanntid — **EDF/RMS** med formell garantibetingelse (D3/R5). **Oppgave 5**: I/O — buffering vs. caching + **RAID 0–6** (D1/D4). **Oppgave 6** (evt. høyest vekt): **Bankier** + vranglåsbetingelser (R6/D4). Hver oppgave følger Nygård-malens ledd der det passer. Alle nyskrevne. **Løsningsforslag som modellbesvarelse på karakternivå** (fra DNA-drøfting-lånet): vis en E-, en C- og en A-besvarelse for minst to oppgaver, med `tip` om hva som løfter fra C til A (formell betingelse, begge sider av sammenligningen, Nygård-malens fire akser).
- **Innholdskontrakt:** Dekker D1–D4 + R5/R6 i trad. B-format; demonstrerer Nygård-malen og karakternivåene.
- **Oppgavesjangre:** D1–D4, R5, R6.
- **Quiz: 12 · Flashcards: 0**

#### Kapittel 7.4: Øvingseksamen 3 — blandet, robust sett (unionen)

- **id:** `tdt4186-7-4` · **number:** 7.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4186-7-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett som dekker **unionen** av begge tradisjonene — hvert kjernetema kommer **både** som beregning og som drøfting, slik en robust student må kunne møte en ukjent faglærer. Fanger de seks 100 %-gjengangerne og de viktigste nivå 2-temaene.
- **Eksamensbelegg/miks:** 6–8 oppgaver, bred dekning. Hvert kjernetema i **dobbel sjanger**: minne (sideerstatnings-**trace** R1 + arbeidssett-**drøfting** D1); scheduling (SJF-**beregning** R5 + EDF/RMS-**garanti** D3); synkronisering (**kodelesing** R8 + Mesa-monitor-**drøfting** D1); filsystem (**blokkallokering** R2 + FAT/inode-**sammenligning** D1); OS-fundamenter (D1); multiprosessor (D1); pluss ett randtema (Bankier R6 eller RAID D4). Alle nyskrevne. **Løsningsforslag** viser for hvert kjernetema **både** den mekaniske besvarelsen og drøftingsbesvarelsen, med `tip` om at den robuste studenten behersker begge. De tre settene sammen dekker alle sjangre R1–R8/D1–D4 og alle temaer flere ganger.
- **Innholdskontrakt:** Dekker R1–R8 + D1–D4; hvert kjernetema i begge sjangre.
- **Oppgavesjangre:** R1–R8, D1–D4.
- **Quiz: 12 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1 | 16 | 18 |
| 1 | 1.1–1.6 | 20+16+18+20+14+24 = **112** | 30+22+26+30+18+12 = **138** |
| 2 | 2.1–2.4 | 16+22+18+26 = **82** | 20+24+24+12 = **80** |
| 3 | 3.1–3.5 | 18+20+20+20+24 = **102** | 24+26+28+26+12 = **116** |
| 4 | 4.1–4.5 | 16+22+20+22+28 = **108** | 22+30+26+30+14 = **122** |
| 5 | 5.1–5.4 | 18+26+22+18 = **84** | 26+12+28+24 = **90** |
| 6 | 6.1–6.3 | 22+16+16 = **54** | 30+20+22 = **72** |
| 7 | 7.1–7.4 | 16+10+12+12 = **50** | 14+0+0+0 = **14** |
| **Sum** | **32 kap.** | **608 ≥ 500 ✓** | **650 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride.
Fordelingen speiler eksamensformen og fagets natur: **flashcards siktes høyt (650)**
fordi faget er svært begrepsrikt med **to terminologitradisjoner** (Tanenbaum- og
Stallings-begreper) og eksamen er hjelpemiddelfri — begreps­kapitlene (1.1/1.4
prosess/tråd, 3.2/3.3 synkronisering, 4.2/4.4 minne, 5.3 I/O, 6.1 multiprosessor) bærer
tettest flashcard-dekning (26–30 hver), mens drillkapitlene (1.6, 2.4, 3.5, 4.5, 5.2)
har lav flashcard-vekt (12–14) fordi de er **treningsbanker** for regnesjangrene og
høyest på quiz (24–28). **Quiz (608)** er kalibrert som eksamenstrening i begge
tradisjoner: konseptuelle kortsvar (D1/D4) og regnesjangre (R1–R8) i quizform, med
forklaringer som begrunner både riktig svar og de sentrale distraktorene. De to
tyngste kjernedelene får mest quiz — synkronisering (Del 3: 102) og minne (Del 4: 108) —
mens randtemadelen (Del 6: 54) ligger lavere. Øvingseksamenene (7.2–7.4) gir 0
flashcards (rene oppgavesett) men 10–12 quiz hver (matcher oppgaveantallet i hvert
tradisjonsformat).

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–6 → 24 prøver)

Hver prøve er nyskrevne oppgaver i eksamens sjangre (R1–R8/D1–D4), med løsningsforslag
som holder sensorens form (korte presise svar med premiert dybde, oppgitte antagelser,
formell betingelse der den kreves) og oppgir poengfordeling. Prøvekapitler bygges som
`tdt4186-<del>-prove` (chapterNumber `<del>.P`) etter plattformmønsteret, eller som egne
exercise-seksjoner i delens siste kapittel. Prøvekvotene per del står i sluttblokken til
hver del over (Del 1–6). Del 0 og Del 7 får ikke egne prøver (Del 7 **er**
øvingseksamenene). Prøvene dekker både beregnings- og drøftesjangre der temaet trener
begge.

### Øvingseksamener (3 komplette sett — se kap. 7.2–7.4)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (7.2) | Regne-tradisjonen (Tanenbaum/trad. A) | 8 ulikt vektede oppgaver (5–25 %), tung på R1–R8 (trace, blokkallokering, avbruddstiming, SJF/RR, kodelesing) |
| Øvingseksamen 2 (7.3) | Drøfte-tradisjonen (Stallings/trad. B) | 5–6 likt vektede oppgaver på Nygård-malen (D1–D4), RAID/sanntid/arbeidssett/Bankier, modellbesvarelser på E/C/A-nivå |
| Øvingseksamen 3 (7.4) | Blandet/robust (unionen) | 6–8 oppgaver, hvert kjernetema i **både** beregnings- og drøftesjanger |

De tre settene dekker til sammen **begge eksamenstradisjonene** flere ganger og alle
sjangre R1–R8/D1–D4. Sett 1 og 2 lærer studenten hver tradisjons særpreg; sett 3 sikrer
robusthet mot en ukjent faglærer. Løsningsforslag for trad. B (7.3) bruker
DNA-drøfting-lånet med **modellbesvarelser på karakternivå**.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers frisvarseksamen (kode D, A–F, 100 %), **to
   eksamenstradisjoner** (regne vs. drøfte), **ukjent dagens faglærer** → boka dekker
   unionen, **regn-OG-drøft-dualiteten**, obligatoriske øvinger godkjent — fra kap.
   0.1/7.1.
2. **Prioriteringskartet** — temafrekvens-tabellen omgjort til tre lesenivåer:
   **perfekt** (OS-fundamenter, minne/virtuelt minne, sideerstatning, prosesser/tråder,
   synkronisering, I/O, multiprosessor — de seks 100 %-gjengangerne + sideerstatning),
   **kunne** (CPU-tidsstyring, filsystemer, vranglås, sanntid), **kjenne** (sikkerhet,
   virtualisering, meldingssending, RAID, systemkall/avbrudd, diskplanlegging).
3. **Sjangerguiden** — regne-sjangrene R1–R8 (med løsningsoppskriftene fra drillkapitlene
   1.6, 2.4, 3.5, 4.5, 5.2) og drøfte-sjangrene D1–D4 (med **Nygård-malens fire akser**)
   i kortform, fra kap. 7.1.
4. **Sensorreglene** — korte presise svar **med premiert dybde** (pluss for korrekt
   detalj); **oppgi alltid antagelsene**; flere gyldige svar godtas; les oppgaveverbet
   nøye; gi den **formelle betingelsen** (RMS/EDF-grense, Bankier-sikkerhet), ikke bare
   navnet; dekk **begge halvdeler** av en definisjon/sammenligning.
5. **Feilkatalogen** — de faste fellene (§5 i analysen) samlet, hver med henvisning til
   kapitlet som forebygger den: skitne sider kan ikke stjeles (4.4/4.5), glemt
   indirekteblokk (5.1/5.2), FAT/inode-hull (5.1/5.2), guarded wait med `if` (3.3/3.5),
   «disable interrupts» på multiprosessor (3.1/6.1), `1 − pⁿ` ved thrashing (4.3),
   større disk mot thrashing (4.3), usikker tilstand = vranglås (3.4/3.5),
   enhetsfeil i avbruddstiming (5.3), navngi algoritme uten formell betingelse
   (2.3/3.4), overse den andre halvdelen av OS-definisjonen (1.1/1.6), ikke oppgi
   antagelser (alle drill).
6. **Begreps- og beregningsark** — samlet puggeark for en hjelpemiddelfri eksamen:
   OS-definisjonen (begge halvdeler), prosess/tråd-skillet, bruker/kjernetråd-
   sammenligningen, semafor/mutex/monitor + guarded wait, de fire vranglåsbetingelsene,
   Bankier-sikkerhetssjekken, sideerstatnings-repertoaret + R/M-bit + skitne-side-
   regelen, **CPU-utnyttelse `1 − pⁿ`** (med gyldighetsbetingelse), **blokkformelen**
   `⌈(høyeste_adr + skrivestr.)/blokkstr.⌉` + inode-indirekteregelen, diskaksess
   (lenket vs. FAT), **avbruddstiming** (enheter!), SJF-sortering, **RMS-/EDF-grensen**,
   buffering vs. caching, RAID 0–6, malware-typene.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): fordi
   bredden *er* eksamensformen og faglæreren ukjent, dekk **begge tradisjoner** —
   prioritér de seks 100 %-kjernetemaene tidlig (Del 1 prosess/tråd → Del 3
   synkronisering → Del 4 minne + sideerstatning), drill de tallregnbare mønstrene
   (2.4 scheduling, 4.5 trace, 5.2 blokkallokering) og lær Nygård-malen (7.1); legg
   deretter nivå 2 (Del 2 sanntid, Del 5 filsystem/I-O, Del 6 multiprosessor) og
   nivå 3-randtemaene; kjør prøvene underveis + de tre øvingssettene de siste ukene
   under tidspress (240 min) — ett trad. A, ett trad. B, ett blandet.

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4186` med alle 32 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i
   `src/lib/data/textbook-courses-matte.ts`; `sectionNames` fra §2-tabellen (obligatorisk).
   **`number` er del-basert** («4.2», ALDRI lineær «18» — jf. JUS1111-lærdommen;
   prosareferanser i innholdet bruker samme form, «kap. 4.2»).
2. **Del 0** (kap. 0.1) — etablerer de to tradisjonene, sjangrene R1–R8/D1–D4,
   frekvenstallene, regn-OG-drøft-dualiteten, Nygård-malen og sensor-metareglene resten
   refererer til.
3. **De seks temadelene** bygges i faglig avhengighetsrekkefølge Del 1 → Del 6 (innad
   følger kapitlene forkunnskaper: 1.1 før 1.4/1.6; 2.1 før 2.2/2.4; 3.1 før 3.2 før 3.3;
   3.4 før 3.5; 4.1 før 4.2 før 4.3 før 4.4 før 4.5; 5.1 før 5.2; 6.1 avhenger av 3.1).
   Prioritér innhold/kvalitet på de seks 100 %-kjernetemaene (Del 1 prosess/tråd, Del 3
   synkronisering, Del 4 minne, 6.1 multiprosessor). **Bygg hvert kjernetema i BEGGE
   sjangre** (beregning + drøfting) der kapitlet angir det.
4. Del 7 (eksamenstreningen) til slutt — den gjenbruker alle sjangre; øvingseksamenene
   speiler de to tradisjonsformatene (7.2 trad. A, 7.3 trad. B med karakternivå-
   modellbesvarelser, 7.4 unionen).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som
   kapitlene ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/
   exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"`
  i norske sitattegn og i pthread-/kodebiter; `\\` for LaTeX-kommandoer); `npm run build`
  grønn.
- [ ] **Begge tradisjoner dekket**: hvert kjernetema (§7 nivå 1) har **både** en beregnings-/
  utføre-del (theorem-prosedyre + gjennomregnet eksempel) og en drøfte-/forklare-del
  (definisjon + «hvorfor» + sammenligning); randtemaene (sikkerhet/virt/melding kun A;
  sanntid/RAID/arbeidssett kun B) er alle med. Del 0 forklarer union-strategien.
- [ ] **Beregningsprosedyrene som `theorem` (med antagelser)**: sideerstatnings-trace per
  algoritme + R/M-bit + skitne-side-regel; blokkformel `⌈(høyeste_adr+skrivestr.)/blokkstr.⌉`
  + inode-indirekteregel; diskaksess (lenket vs. FAT); avbruddstiming (enheter!); SJF-
  sortering; RMS-/EDF-utnyttelsesbetingelse; CPU-utnyttelse `1 − pⁿ` (m/gyldighetsbetingelse);
  Bankier-sikkerhetssjekk — alle med gjennomregnet eksempel som **åpner med antagelsene**.
- [ ] **Nygård-malen lært (trad. B)**: kap. 7.1 + øvingseksamen 7.3 viser de faste leddene
  (problem → moderne utfordringer langs **fire akser** → implementer/sammenlign mht.
  relevans OG ytelse → drøft resultater); modellbesvarelser på E/C/A-nivå i 7.3.
- [ ] **Begreps- og beregningsliste per delkapittel**: hvert delkapittel med begreps-/
  formelapparat har `collapsible` «Begreps- og beregningsliste» rett etter Forkunnskaper,
  som forklarer ALT delkapitlet bruker (begreper med fast distraktor + formler — per
  delkapittel, ikke arv).
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin felle —
  skitne sider (4.4/4.5), indirekteblokk (5.2), FAT/inode-hull (5.1/5.2), guarded wait
  `if`/`while` (3.3/3.5), disable-interrupts-på-multiprosessor (3.1/6.1), `1 − pⁿ` ved
  thrashing (4.3), disk mot thrashing (4.3), usikker tilstand ≠ vranglås (3.4/3.5),
  avbruddstiming-enheter (5.3), formell betingelse mangler (2.3/3.4), halv OS-definisjon
  (1.1/1.6), manglende antagelser (alle drill).
- [ ] **Sensor-metareglene i løsningsforslagene**: korte presise svar **med premiert korrekt
  dybde** (ikke bare rått som TDT4120 — dette faget gir pluss for detalj); antagelser
  oppgitt; flere gyldige svar nevnt der sensuren er robust; formell betingelse gitt.
- [ ] **Pensumusikkerhet merket**: alle pensumavhengige detaljer (antall direktepekere i
  inode, RMS-grensens form, Mesa/Hoare-semantikk, RAID-nivådefinisjoner, systemkallnavn)
  merket `(verifiser)`; begreper presentert **språknøytralt** (Tanenbaum/Stallings som
  referanse, ikke fasit).
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå; beregnings-
  eksempel med antagelser, drøfte-eksempel som A-besvarelse), 6–12 øvinger (R- og
  D-sjangre der kapitlet trener begge) med `solution` + `hints`, repetisjons-`collapsible`;
  drillkapitler har løsningsoppskrift + sensor-kommentert case + 10–15 oppgaver.
- [ ] **Quiz-sum ≥ 608 og flashcard-sum ≥ 650** per kvotetabellen (§5); quiz kalibrert som
  eksamenstrening i begge sjangre; flashcards som begrep ↔ presis definisjon ↔ fast
  distraktor.
- [ ] **Prøver**: 4 per temadel 1–6 (24 stk) + 3 øvingseksamener (kap. 7.2–7.4) som sammen
  dekker sjangrene R1–R8/D1–D4 og **begge eksamenstradisjonene** flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, referansestrenger, kodebiter, scenarioer og
  innpakninger nyskrevne — egne verdier/kontekster; algoritmenavn, standardnotasjon og
  beregningsformler er allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/
  sensorformuleringer fra reelle sett gjengis; pensum (Tanenbaum/Stallings) refereres
  (begrep/verk), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 +
  innhold), jf. lærdommen om `getChapterMeta`.
- [ ] **Institusjon NTNU**: legges inn i `src/app/bok/trinn/hoyere/institusjoner.ts` med
  visningsnavn «TDT4186 Operativsystemer» (fase 5); del institusjonsblokk med TDT4120 hvis
  den allerede er lagt inn.

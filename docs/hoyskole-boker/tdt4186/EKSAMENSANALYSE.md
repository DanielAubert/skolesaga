# Eksamensanalyse: TDT4186 Operativsystemer (NTNU)

> Grunnlagsdokument for eksamensrettet lærebok. Bygger på **6 eksamenssett** fra NTNU (des 2010 – aug 2016), hvorav **5 har fullstendige løsningsforslag** (H2010, H2011, H2012, aug 2015, aug 2016) og ett har bare oppgavetekst (juni 2016). Alle oppgavetekster er på bokmål (ett engelsk kont-sett fra 2015 er brukt til kryssjekk), og analysen dekker NTNUs emnebeskrivelse. **Alt innhold er omskrevet med egne ord** — ingen ordrette gjengivelser av oppgavetekster eller løsningsforslag. Analysen er kvantitativ der kildene tillater det.
>
> **Kritisk forbehold — les før alt annet:** Arkivet inneholder **to helt ulike eksamenstradisjoner** med forskjellige faglærere og pensumbøker, og dagens emne styres av en **tredje, ukjent faglærer**. Se del 1. Læreboka må derfor dekke **unionen** av de to dokumenterte tradisjonene, ikke gjennomsnittet.

---

## 1. Eksamensform og utvikling

### Grunnform (gjeldende)

Skriftlig skoleeksamen, **4 timer**, karakterskala **A–F**, teller **100 %**. Hjelpemiddelkode **D**: ingen trykte eller håndskrevne hjelpemidler; kun «bestemt, enkel kalkulator» tillatt. Denne koden er **konstant** gjennom hele arkivet (2010–2016) og gjentas i NTNUs emnebeskrivelse for det gjenåpnede emnet (undervisning vår 2027). Obligatoriske øvinger må være godkjent for å gå opp. Ingen midtsemesterprøve teller — hele karakteren avgjøres på slutteksamen.

Eksamen er **ikke flervalg**. Den består gjennomgående av **frisvarsoppgaver** — forklar, drøft, sammenlign, definer, og (i den ene tradisjonen) regn ut. Et fast metabudskap i alle sett: **korte, konsise, presise svar ønskes**. Ordrikdom belønnes ikke; men merk den viktige forskjellen fra f.eks. TDT4120: her gir sensor **eksplisitt pluss for ekstra korrekt detalj** («pluss hvis studenten forklarer …» opptrer flere ganger i løsningsforslagene). Presisjon *og* dekning teller.

### To eksamenstradisjoner — den viktigste strukturelle innsikten

Arkivet deler seg rent i to blokker med ulik faglærer, pensumbok og oppgavestil:

| Tradisjon | Sett | Faglærer | Antatt pensumbok | Stil |
|---|---|---|---|---|
| **A — «regne-tradisjonen»** | des 2010, des 2011, des 2012 | Svein Erik Bratsberg (+ Arvid Staupe/Roger Midtstraum) | **Tanenbaum, *Modern Operating Systems*** | Blanding av konsept + **konkrete beregninger** (sideerstatnings-trace, blokkallokering, avbruddstiming, SJF-rekkefølge, kodelesing) |
| **B — «drøfte-tradisjonen»** | aug 2015, juni 2016, aug 2016 | Mads Nygård | **Stallings, *Operating Systems: Internals and Design Principles*** | Rent **diskursivt**, sterkt malbasert; ingen tallregning; RAID-nivåer, arbeidssett, sanntid, buddy-system, Bankier |
| **C — dagens emne (ukjent)** | fra vår 2027 | Di Liu | ukjent (mulig OSTEP / Silberschatz / Tanenbaum) | ukjent |

**Bevis for pensumtilhørighet.** Tradisjon A refererer eksplisitt til Tanenbaum-kapitler og -figurer (f.eks. «figur 10-34 … som UNIX V7», inode med 10 direktepekere + enkelt/dobbelt/trippelt indirekte, NRU/andre-sjanse/WSClock/aging-terminologi, «Kap 3.4.2»). Tradisjon B tester temaer som er Stallings-signatur: arbeidssett (working sets), sju RAID-nivåer, rate monotonic + EDF + least-laxity, buddysystem, frekvensbasert stakk (FBS), fair-share-scheduling og prioritetsinvertering.

**Konsekvens for lærebok:** dekk begge. Studenten kan ikke vite hvilken tradisjon en fremtidig faglærer arver — men **kjernepensumet (del 2, «100 %-radene») er identisk** i begge, og skiller seg bare i om det testes med tall eller med drøfting. Bygg hvert kjernetema slik at det kan besvares **både** som en trinnvis beregning **og** som en presis begrepsdrøfting.

### Underformater som går igjen

**Tradisjon A (Bratsberg):**
1. **Konseptuelt kortsvar** — «Hva er X?», «Forklar Y», «Sammenlign X og Y». Dominerer i antall.
2. **Sideerstatnings-trace** — kjør NRU/LRU/FIFO/Optimal/andre-sjanse/WSClock på en referansestreng og tell sidefeil; vis rammetabell med R/M-bit.
3. **Blokkallokeringsregning** — «Hvor mange blokker allokeres?» for FAT vs. inode/UNIX V7 gitt skriv til gitte adresser.
4. **Diskaksess-telling** — «Hvor mange diskaksesser?» for et lese-/seek-program under lenket vs. FAT-filsystem.
5. **Avbruddstiming** — «maks antall avbrudd/sek» eller «% CPU-tid brukt på avbrudd».
6. **SJF-rekkefølge** — ordne jobber for minimal gjennomsnittlig ventetid (ofte med en ukjent variabel Y → intervall-svar).
7. **Kodelesing** — forklar hva et pthread-utdrag (mutex + cond_wait) gjør.
8. **Ren opplisting** — «Gi fem eksempler på systemkall», «Nevn de fire vranglåsbetingelsene», «Nevn 5 typer malware».

**Tradisjon B (Nygård) — sterkt malbasert.** Aug 2015/2016 bruker en tredelt mal per oppgave: **a) hva problemet er → b) hvordan implementere/sammenligne → c) illustrere en avveining**. Juni 2016 (ordinær) bruker en **enda strammere seksdelt mal** for *hver* av de fem oppgavene:
- **a)** hvilket generelt problem delsystemet løser
- **b)** «Drøft kort om moderne X må håndtere andre utfordringer» (fast firaksers svar: tilbuds-/teknologi-/funksjonalitets-/etterspørselsutvikling)
- **c)** sammenlign 2–3 implementasjoner mht. relevans og ytelse
- **d)** «Drøft kort hva [konsept] er og brukes til»
- **e)** «Angi konkret hvordan [konsept] kan implementeres» (høyest vekt, 25 %)
- **f)** «Drøft hvor gode resultater X gir sammenlignet med alternativer»

Å beherske denne malen er i seg selv en eksamensferdighet i tradisjon B.

### Struktur- og vektingsprofil

- **Tradisjon A:** 8 oppgaver med **eksplisitt ulik vekt** (5–25 %). De tyngste er nesten alltid minnehåndtering (15–20 %) og prosesser/tråder/synkronisering (20–25 %); de letteste er «Generelt» (5 %) og sikkerhet (5–10 %).
- **Tradisjon B:** 5–6 oppgaver som **teller likt**, med like tunge deloppgaver (unntatt juni 2016, der del e teller 25 %). Bred, jevn dekning — ingen enkeltoppgave dominerer.

---

## 2. Temafrekvens

Basert på de 6 settene, delt i de to tradisjonene (3 sett hver). Celleverdi = antall sett i tradisjonen der temaet forekommer i minst én oppgave. Fordi settene har få, brede oppgaver, treffer kjernetemaene nesten hvert sett; **gjenganger-scoren måler bredde/sikkerhet, ikke vekt**.

| Tema | Trad. A (3) | Trad. B (3) | **Score** | Merknad |
|---|---|---|---|---|
| **OS-fundamenter** (abstrakt maskin + ressurshåndterer, mål) | 3 | 3 | **6/6 = 100 %** | Alltid oppgave 1; lettest tilgjengelige poeng |
| **Minnehåndtering & virtuelt minne** (paging, segmentering, TLB, arbeidssett) | 3 | 3 | **6/6 = 100 %** | Ofte tyngst vektet i trad. A |
| **I/O-håndtering** (drivere, avbrudd, buffering/caching, DMA, RAID) | 3 | 3 | **6/6 = 100 %** | Bred paraply |
| **Multiprosessor / multikjerne** (organisering, sync, cache-koherens, scheduling) | 3 | 3 | **6/6 = 100 %** | Overraskende tungt — se funn 3 |
| **Prosesser & tråder** (prosess vs. tråd, bruker- vs. kjernetråder) | 3 | 3 | **6/6 = 100 %** | Bruker/kjernetråd-sammenligning er fast |
| **Synkronisering** (semafor, mutex, monitor, condvar, guarded wait) | 3 | 3 | **6/6 = 100 %** | Monitor (vanlig vs. Mesa) fast i trad. B |
| **CPU-tidsstyring** (SJF, RR, EDF, RMS, fair-share, prioritet) | 2 | 3 | **5/6 = 83 %** | Beregnes i A (SJF/RR), drøftes i B (sanntid) |
| **Filsystemer** (allokering, inode/FAT, blokk-/aksessberegning) | 3 | 2 | **5/6 = 83 %** | Regnes i A, drøftes i B |
| **Sideerstatningsalgoritmer** (NRU/LRU/FIFO/Optimal/2.-sjanse/WSClock/aging/LFU) | 3 | 1 | **4/6 = 67 %** | **Trace-beregning kun i trad. A** (alle 3) |
| **Vranglås** (4 betingelser, unngåelse, usikker tilstand, Bankier) | 2 | 1 | **3/6 = 50 %** | Bankier-algoritmen kun juni 2016 |
| **Sikkerhet / malware / angrep** | 3 | 0 | **3/6 = 50 %** | **Kun trad. A** — helt fraværende i B |
| **Sanntidsstyring** (EDF, RMS, least-laxity, tidsfrister) | 0 | 2–3 | **~3/6 = 50 %** | **Kun trad. B** |
| **Virtualisering / hypervisorer** (Type 1/2, paravirt., sensitive instr.) | 2 | 0 | **2/6 = 33 %** | Kun 2011–2012 |
| **RAID-nivåer** (0–6) | 0 | 2 | **2/6 = 33 %** | Kun trad. B |
| **Meldingssending** (send/recv, synkron/asynkron, bufferbeskyttelse) | 2 | 0 | **2/6 = 33 %** | Kun trad. A |
| **Systemkall / kjernemodus / avbruddssystem** | 2 | 1 | **3/6 = 50 %** | Systemkall (A), avbruddssystem (juni 2016) |
| **Diskplanlegging** (FCFS/SSTF/SCAN «heisalgoritmen») | 0 | 1 | **1/6 = 17 %** | Overraskende lavt — se funn 5 |

**Viktigste funn:**

1. **Seks temaer er 100 %-gjengangere** på tvers av begge tradisjoner: OS-fundamenter, minne/virtuelt minne, I/O, multiprosessor, prosesser/tråder og synkronisering. Disse *kommer garantert* uansett faglærer, og utgjør ryggraden i lærebokas kjerne. Alle åtte hovedbolkene i emnebeskrivelsen (prosesser/tråder, scheduling, minne, filsystem, deadlock, I/O, sync, sikkerhet) forekommer minst 50 % av settene.

2. **Faget har ingen enkelt «kjerneoppgave» — det har en bred kjernepensumliste.** Som i TDT4120 er bredden selve eksamensformen; du kan ikke droppe et hovedtema og satse på fravær.

3. **Multiprosessor/multikjerne er overraskende tungt (100 %).** Det dukker opp i én eller annen form i *hvert* sett: multiprosessor-synkronisering (TSL, spinning, cache-busstrafikk), OS-organisering (eget OS per CPU / master-slave / SMP), cache-koherensprotokoll, og multiprosessor-scheduling (delt kø, affinity, space sharing, gang scheduling). Dette er et undervurdert høyfrekvent tema.

4. **Tradisjonene er komplementære, ikke overlappende, i randtemaene.** Sikkerhet/malware, meldingssending og virtualisering finnes **bare** i trad. A; sanntid (EDF/RMS), RAID og arbeidssett finnes **bare** i trad. B. En lærebok som bare speiler ett sett vil ha store hull. Dekk begge.

5. **Klassisk diskplanlegging (heisalgoritmen SSTF/SCAN) er nesten fraværende** (1/6) — testes bare abstrakt i aug 2016. Ikke overvekt dette temaet, selv om det er en pensum-klassiker.

6. **Beregningsevne vs. drøfteevne er tradisjonsavhengig, men samme underliggende pensum.** Sideerstatning, blokkallokering og scheduling *kan* komme både som tall (A) og som drøfting (B). Læreboka bør trene begge for hvert kjernetema.

---

## 3. Oppgavetype-katalog

De sjangrene som faktisk går igjen. «Krav» oppsummerer løsningsforslagets foretrukne metode og presisjonsnivå.

### A. Konseptuelt kortsvar (definer / forklar / sammenlign)
- **Krav:** Kort, presist, dekkende. Gjengangere: «Hva er et OS?» (**abstrakt/utvidet maskin** som skjuler detaljer + **ressurshåndterer** som styrer tids- og plassdeling — begge halvdelene kreves); prosess vs. tråd (prosess = eget adresserom/isolasjon; tråd = delt minne, mindre kontekst); mutex vs. tellende semafor (mutex = to tilstander, kun gjensidig utelukkelse; semafor = teller + ventekø, også generell venting); bruker- vs. kjernetråder (bruker = billige men blokkerende systemkall, kan ikke utnytte multiprosessor; kjerne = dyre men ikke-blokkerende, utnytter multiprosessor); buffering vs. caching (buffering = én aksess om gangen mellom CPU og enhet; caching = flere aksesser, utnytter lokalitet).
- **Frekvens:** Hver deloppgave i trad. B; flere per sett i trad. A.

### B. Sideerstatnings-trace (håndkjøring)
- **Krav:** Kjør algoritmen mekanisk på referansestrengen og **tell sidefeil**; vis rammetabellen med **R- og M-bit** per tidspunkt. Repertoar: **NRU** (fire klasser etter (R,M); ved klokketikk nullstilles R), **LRU** (stakk/tidsstempel), **FIFO**, **Optimal** (framoverblikk), **andre-sjanse** (FIFO + R-bit), **WSClock** (virtuell tid, «time of last use», tau-grense, viserposisjon). Kritisk regel som løsningsforslaget fremhever: **modifiserte (skitne) sider kan ikke «stjeles» uten å skrives ut først** — de behandles annerledes ved valg av offer.
- **Frekvens:** Alle tre trad. A-sett; kun konseptuelt i trad. B (LRU/LFU).

### C. Blokkallokerings-beregning
- **Krav:** Regn ut antall diskblokker som allokeres når det skrives noen få byte til gitte adresser. To modeller: **FAT/kontinuerlig** — kan **ikke ha hull**, så *alle* blokker fra 0 til høyeste adresse allokeres (`⌈(høyeste_adresse + skrivestørrelse)/blokkstørrelse⌉`). **Inode/UNIX V7** — *kan* ha hull; bare de faktisk berørte blokkene allokeres, men **hver indirekte blokk som trengs for å nå en høy blokk må allokeres i tillegg** (typisk 8 eller 10 direktepekere + enkelt/dobbelt/trippelt indirekte). Vanlig felle: å glemme å telle med indirekteblokka.
- **Frekvens:** Trad. A, ofte kombinert med diskaksess-telling.

### D. Diskaksess-telling
- **Krav:** Tell diskaksesser for et lese-/seek-program. **Lenket implementasjon:** må følge kjeden fra start — antall aksesser vokser med hvor langt ut i fila man leser. **FAT-implementasjon:** kjeden ligger i minne, så bare selve datablokkene aksesseres fra disk. **Oppgi antagelser** (blokkstørrelse, pekerstørrelse, om katalogen må leses).
- **Frekvens:** Trad. A.

### E. Avbruddstiming-beregning
- **Krav:** Enkel aritmetikk. To varianter: (i) «maks avbrudd/sek» = 1 / (tid for å lagre + gjenopprette registre); f.eks. push+pop av (20 generelle + PC + PSW) registre à to minneord-aksesser. (ii) «% CPU-tid på avbrudd» = (avbrudd/sek) × (betjeningstid per avbrudd). Krever at man setter opp enhetene riktig (nanosekunder, mikrosekunder).
- **Frekvens:** Trad. A (I/O-oppgaven).

### F. SJF-/RR-rekkefølge og gjennomstrømning
- **Krav:** **Korteste jobb først** minimerer gjennomsnittlig ventetid → sorter jobbene stigende etter kjøretid. Med en ukjent variabel Y: gi svaret som et **intervall-sett** (Y plasseres der den passer relativt til de andre). For round-robin: drøft hvordan **tidskvantumets størrelse** påvirker gjennomstrømning via prosesskifte-overhead — og merk at svaret avhenger av modellantagelsene (løsningsforslaget godtar flere gyldige svar).
- **Frekvens:** Trad. A (SJF i 2011, RR i 2012).

### G. Kodelesing (pthreads / synkronisering)
- **Krav:** Forklar hva et utdrag gjør. Kanonisk eksempel: produsent/konsument med `pthread_mutex_lock` + `while(betingelse) pthread_cond_wait(&cond, &mutex)`. Nøkkelpoeng som må nevnes: **guarded wait** — betingelsen sjekkes på nytt i en **while-løkke** (ikke `if`) fordi en annen tråd kan ha endret tilstanden i mellomtiden; `cond_wait` **slipper mutexen atomisk** mens den venter og tar den tilbake ved oppvåkning.
- **Frekvens:** Trad. A (2011–2012).

### H. Nygård-malen (trad. B): problem → implementer → drøft resultater
- **Krav:** Gjenkjenn de faste ledene. **a)** navngi det generelle problemet delsystemet løser. **b)** «moderne utfordringer» besvares nesten alltid langs fire akser: **tilbudsutvikling** (spenn mellom maskintyper), **teknologiutvikling** (spenn mellom maskindeler: prosessor/lager/I/O), **funksjonalitetsutvikling** (singel → multiprosessor/multikjerne), **etterspørselsutvikling** (batch → interaktivitet, isolasjon → sammenkopling). **c/e)** oppgi konkrete implementasjoner og sammenlign mht. **relevans og ytelse**. **f)** vurder resultater mot alternativer. Å svare i denne strukturen gir uttelling i seg selv.
- **Frekvens:** Hele trad. B; hele juni 2016.

### I. Konkret illustrasjon av et klassisk problem/algoritme
- **Krav:** Bruk et navngitt scenario til å vise en mekanisme. Dokumenterte eksempler: **spisende filosofer** løst med monitor (begge gafler tas atomisk under monitorens gjensidige utelukkelse); **EDF** vist der den virker godt og der den svikter; **rate monotonic** (høyest prioritet = kortest periode; garantibetingelse via utnyttelsesgrense); **Bankier-algoritmen** (sikker vs. usikker tilstand). Kjenn den **formelle** definisjonen, ikke bare navnet.
- **Frekvens:** Trad. B (illustrasjons-delen c/d).

### J. Ren opplisting med kort forklaring
- **Krav:** Faktakunnskap direkte. Faste lister: fire vranglåsbetingelser (gjensidig utelukkelse, hold-og-vent, ikke-avbrytbar, sirkulær venting) + hvordan angripe hver; fem systemkall (fork/exit/wait/exec, read/write/open/close, mkdir/link …); fem malware-typer (trojaner, virus, orm, spyware, rootkit); RAID-nivåer 0–6.
- **Frekvens:** Begge tradisjoner.

---

## 4. Sensorens krav

### Faste metaregler (gjentas i settene)
1. **«Korte og konsise svar ønskes.»** Gjentas i alle trad. B-sett og i ånden i trad. A. Presisjon over lengde.
2. **«Les oppgaveteksten meget nøye — vurder hva det spørres etter.»** Fast instruks i trad. B. Mange deloppgaver har en spissformulering («*minst* to måter», «*sammenlign* mht. relevans *og* ytelse») der uttellingen henger på å treffe akkurat det.
3. **«Beskriv de antagelsene du gjør.»** Gjennomgående, særlig for beregninger (blokkstørrelse, pekerstørrelse, om katalogen leses, om modifiserte sider stjeles). Eksplisitte, konsistente antagelser gir full uttelling selv når oppgaven er underbestemt — løsningsforslagene sier flere steder at oppgaven er «litt vag» og godtar alternative tolkninger.
4. **Pluss for ekstra korrekt detalj.** I motsetning til TDT4120 («lange svar teller ikke positivt») gir dette faget **bonus** for relevant tilleggsinnhold: «pluss hvis studenten forklarer hva hver av disse er», «pluss for hvert element fra tabellen». Dekning premieres — men bare når den er *korrekt og relevant*.
5. **Flere gyldige svar godtas.** Løsningsforslagene lister ofte 2–4 akseptable svar (f.eks. tre gyldige svar på RR-gjennomstrømningsspørsmålet). Sensuren er robust for konsistente resonnementer.

### Hva som skiller karakternivåene
- **Bestått (E):** riktige definisjoner på grunnoppgavene (hva et OS er, prosess vs. tråd, vranglåsbetingelsene), riktig oppsett på minst de enkleste beregningene, og de faste listene.
- **Midtsjikt (C/D):** korrekt sideerstatnings-trace og blokkallokering med riktige antagelser; riktige sammenligninger (bruker vs. kjernetråd, buffering vs. caching, segmentering vs. sidedeling); treffer Nygård-malens ledd.
- **Toppsjikt (A/B):** fullfører de tunge beregningene feilfritt (WSClock med korrekt tau/viser-håndtering, inode-allokering *inkludert* indirekteblokker, avbruddstiming med riktige enheter); kjenner **hvorfor** (hvorfor modifiserte sider ikke kan stjeles, hvorfor guarded wait trenger while-løkke, hvorfor «disable interrupts» ikke virker på multiprosessor); og gir den formelle betingelsen (RMS-/EDF-utnyttelsesgrense, Bankier-sikkerhet), ikke bare navnet.

---

## 5. Typiske feil (eksplisitt eller implisitt i løsningsforslagene)

1. **Glemme at modifiserte (skitne) sider ikke kan stjeles** ved sideerstatning uten å skrives ut først — endrer hvilken side som velges som offer (fremhevet i H2010-fasiten).
2. **Glemme å allokere indirekteblokka** i inode-/UNIX V7-blokkregning — den høye datablokka nås via en enkelt/dobbelt indirekte blokk som *også* opptar diskplass.
3. **Blande FAT og inode mht. hull:** FAT/kontinuerlig kan *ikke* ha hull (allokerer *alle* blokker opp til høyeste adresse); inode *kan* ha hull (allokerer bare berørte blokker).
4. **Guarded wait med `if` i stedet for `while`** — betingelsen må sjekkes på nytt etter oppvåkning, siden en annen tråd kan ha endret tilstanden.
5. **Tro at «disable interrupts» løser synkronisering på multiprosessor** — det skrur bare av avbrudd for én CPU; man må bruke Test-and-Set-Lock (TSL) med bysslåsing.
6. **Bruke CPU-utnyttelsesformelen `1 − pⁿ` når prosessene ikke alle er i minnet** — modellen forutsetter at alle prosesser ligger i primærlager; den gjelder ikke ved thrashing (påpekt i H2012-fasiten).
7. **Tro at større disk hjelper mot thrashing** — det gir bare mer swap-plass; løsningen er mer *fysisk minne* (som reduserer paging).
8. **Forveksle usikker tilstand med vranglås** — en usikker tilstand *kan* lede til vranglås hvis alle prosesser krever maksimalbehovet samtidig, men er ikke i seg selv en vranglås.
9. **Bytte om head/tail eller glemme wraparound** i kø-/buffermekanikk.
10. **Enhetsfeil i avbruddstiming** — blande nanosekunder og mikrosekunder, eller glemme at hvert register både må pushes og poppes.
11. **Bare navngi en algoritme uten den formelle betingelsen** (RMS-/EDF-utnyttelsesgrense, Bankier-sikkerhetssjekk) — mister toppsjikt-uttelling i trad. B.
12. **Overse den andre halvdelen av OS-definisjonen** — svare bare «abstrakt maskin» og glemme «ressurshåndterer» (eller omvendt).
13. **Ikke oppgi antagelser** ved underbestemte beregninger — gir tap selv når regnestykket ellers er riktig.

---

## 6. Notasjons- og beregningsapparat

Læreboka bør bruke standard OS-terminologi og de mekanismene oppgavene faktisk krever. Der arkivet peker på en pensumbok, følg dennes navn (Tanenbaum for trad. A, Stallings for trad. B) — men presenter begrepene språknøytralt siden dagens faglærer er ukjent.

### Sideerstatning (må kunne utføre *og* forklare)
- **R/M-bit**, NRU sine fire klasser etter (R,M); **FIFO**, **andre-sjanse** (FIFO + R-bit gir «ny sjanse»), **klokke**, **LRU** (tidsstempel/stakk), **Optimal** (framoverblikk), **aging** (skiftregister — tilnærming til LRU, men glemmer eldre bruk og oppløser rekkefølge innen et klokketikk), **WSClock** (virtuell tid, «time of last use», arbeidssett-grense **tau**, viser). Regel: skitne sider skrives ut før de kan gjenbrukes.
- **CPU-utnyttelse = 1 − pⁿ** (p = andel tid en prosess venter på I/O, n = grad av multiprogrammering) — gjelder bare når alle prosesser er i minnet.

### Filsystem-beregning
- Blokker (FAT/kontinuerlig) = `⌈(høyeste_adresse + skrivestørrelse) / blokkstørrelse⌉`, ingen hull.
- Inode (UNIX V7): ~10 direktepekere + enkelt/dobbelt/trippelt indirekte; tillater hull; tell **indirekteblokker** som egne allokeringer. Effektiv pekere per indirekteblokk ≈ blokkstørrelse / pekerstørrelse.
- Diskaksesser: lenket = følg kjeden fra start; FAT = kjede i minne, kun datablokker fra disk.

### Scheduling
- **SJF** (minimerer gjennomsnittlig ventetid = sorter stigende på kjøretid); **round-robin** (tidskvantum vs. prosesskifte-overhead vs. gjennomstrømning); **prioritet** og **prioritetsinvertering**; **fair-share** (UNIX).
- **Sanntid (Stallings):** **EDF** (tidligste tidsfrist først — garanterer for snitt, ikke varians); **rate monotonic** (kortest periode = høyest prioritet; utnyttelsesgrense `U ≤ n(2^{1/n} − 1)`); **least-laxity/slakk**.

### Synkronisering
- **Semafor** (teller + ventekø, `down()`/`up()`); **mutex** (to tilstander, `lock`/`unlock`); **monitor** (vanlig/Hoare vs. **Mesa** — Mesa krever retesting av betingelse, har `Cnotify`/`Cbroadcast`); **condition-variabel** + **guarded wait**; **TSL** for multiprosessor.

### Vranglås
- Fire betingelser (gjensidig utelukkelse, hold-og-vent, ikke-avbrytbar, sirkulær venting) og hvordan angripe hver; **usikker tilstand ≠ vranglås**; **Bankier-algoritmen** (sikkerhetssjekk før tildeling).

### Multiprosessor / virtualisering / I/O
- OS-organisering: eget OS per CPU / master-slave / SMP; **cache-koherensprotokoll**; multiprosessor-scheduling (delt kø, affinity, space sharing, gang scheduling); **TSL/spinning**-problematikk.
- Hypervisor **Type 1** (trap ved sensitiv instruksjon), **Type 2** (binæroversetting/emulering), **paravirtualisering** (sensitive instr. → systemkall til hypervisor).
- **RAID-nivåer 0–6**; **DMA**; buffering (uten/enkel/dobbel/sirkulær) vs. caching (LRU/LFU/FBS); avbruddshåndtering; device-driver-oppgaver; klokkeprogramvare.

### Sikkerhet (kun trad. A)
- Malware: trojaner, virus (minneresident/boot-sektor/driver), orm, spyware, rootkit. Angrep: bufferoverflyt, formatstreng, return-to-libc, heltallsoverflyt, kodeinjeksjon, privilegieeskalering.

---

## 7. Prognose og prioritering

> **Forbehold:** arkivet stopper i 2016, og dagens emne (fra vår 2027, faglærer Di Liu) er ikke representert. Prioriteringen bygger på de **stabile kjernetemaene** som gikk igjen på tvers av to uavhengige faglærere/pensumbøker — disse er lavrisiko. Randtemaene er tradisjonsavhengige og bør dekkes for sikkerhets skyld, men vektes lavere.

### Nivå 1 — må beherskes perfekt (100 %-gjengangere, begge tradisjoner)
1. **OS-fundamenter** — abstrakt/utvidet maskin *og* ressurshåndterer; mål ved OS-utvikling. Billige, garanterte poeng.
2. **Minnehåndtering & virtuelt minne** — paging vs. segmentering vs. kombinasjon, TLB (soft/hard miss), relokering, arbeidssett, sidestørrelse-avveining, multinivå/inverterte sidetabeller for store adresserom.
3. **Sideerstatning** — kunne **utføre** NRU/LRU/FIFO/Optimal/andre-sjanse/WSClock feilfritt (trad. A) *og* forklare LRU/LFU/aging (trad. B). Modifiserte sider kan ikke stjeles.
4. **Prosesser & tråder** — prosess vs. tråd; bruker- vs. kjernetråder (ytelse + multiprosessor-utnyttelse); kombinasjonsmodeller; tråder i klient-tjener.
5. **Synkronisering** — semafor/mutex/monitor/condvar; guarded wait; vanlig vs. Mesa-monitor; spisende filosofer; TSL på multiprosessor.
6. **I/O-håndtering** — device-drivere, avbruddshåndtering (+ timing-beregning i trad. A), buffering vs. caching, DMA, klokkeprogramvare, RAID.
7. **Multiprosessor & multikjerne** — organisering, synkronisering (TSL/spinning/cache-busstrafikk), cache-koherens, multiprosessor-scheduling. Undervurdert høyfrekvent tema.

### Nivå 2 — må kunne (avgjør C→A)
8. **CPU-tidsstyring** — SJF (regne rekkefølge/ventetid), round-robin (kvantum vs. gjennomstrømning), prioritet/prioritetsinvertering, fair-share.
9. **Filsystemer** — kontinuerlig/lenket/FAT/inode med fordeler/ulemper; **blokkallokerings- og diskaksess-beregning** (trad. A); UNIX V7 / EXT2-struktur.
10. **Vranglås** — fire betingelser + angrep; usikker tilstand ≠ vranglås; Bankier-algoritmen.
11. **Sanntidsstyring** — EDF, rate monotonic (med utnyttelsesbetingelse), least-laxity, tidsfrister (trad. B).

### Nivå 3 — bør kjenne til (lavfrekvent / tradisjonsavhengig)
12. **Sikkerhet & malware** — fem malware-typer, angrepstyper mot programmeringsfeil (kun trad. A, men lettvinte poeng når det kommer).
13. **Virtualisering** — Type 1/2-hypervisorer, paravirtualisering, sensitive instruksjoner (kun 2011–2012).
14. **Meldingssending** — synkron/asynkron send/recv, bufferbeskyttelse ved ikke-blokkerende send.
15. **RAID-nivåer 0–6** — datainnhold og nytte per nivå (kun trad. B).
16. **Systemkall & kjernemodus / avbruddssystem** — hvordan et systemkall skifter til kjernemodus; hvorfor OS-utviklere må forstå avbruddssystemet.
17. **Diskplanlegging** — FCFS/SSTF/SCAN («heisalgoritmen»); lavfrekvent (1/6), men pensum-klassiker.

**Prognose for neste ordinære eksamen (kode D):** 5–8 frisvarsoppgaver, 4 timer, ingen hjelpemidler utover enkel kalkulator. Forvent garantert: OS-fundamenter (oppgave 1); minne/virtuelt minne + minst én sideerstatnings-oppgave; prosesser/tråder; synkronisering (semafor/mutex/monitor); I/O; multiprosessor. Sannsynlig: scheduling (SJF/RR eller EDF/RMS avhengig av tradisjon); filsystem-allokering; vranglås. Om ny faglærer arver **regne-tradisjonen** (Tanenbaum): forvent sideerstatnings-trace, blokkallokering og avbruddstiming som tallregning. Om **drøfte-tradisjonen** (Stallings): forvent den malbaserte «problem → implementer → drøft resultater»-strukturen med RAID og sanntid. Studenten som kan kjernemekanismene **både** mekanisk (utføre) **og** konseptuelt (forklare *hvorfor*), er robust mot begge.

---

## 8. Kildeliste

Alle filer ligger i `~/Desktop/Eksamner/NTNU/TDT4186/`.

**Løsningsforslag lest grundig (5 sett):**
- `H2010lf.pdf` (des 2010, Bratsberg/Staupe) — sideerstatning NRU/LRU/WSClock-trace, FAT/inode-allokering, avbruddstiming.
- `H2011lf.pdf` (des 2011, Bratsberg) — prosess/tråd, mutex/semafor/monitor, TLB, sideerstatning-telling, filimplementasjoner, vranglås, virtualisering, sikkerhet.
- `H2012lf.pdf` (des 2012, Bratsberg/Midtstraum) — kodelesing (cond_wait), guarded wait, RR-gjennomstrømning, thrashing, sideerstatning fra tabell, EXT2, diskaksesser, cache-koherens, hypervisorer, malware.
- `EKS-S15-B-LOES.pdf` (aug 2015 kont, Nygård) — OS-mål, prosess/tråd, semaforer, arbeidssett, sanntid (EDF/RMS/LLF), buffering vs. caching.
- `EKS-S-16-B-LOES.pdf` (aug 2016 kont, Nygård) — tråd-implementasjon, monitorer (vanlig/Mesa), virtuelt lager, rate monotonic, disk-scheduling, RAID.

**Oppgavesett brukt til format-/typebekreftelse:**
- `H2010bm.pdf`, `H2011bm.pdf`, `H2012bm.pdf` (bokmål, trad. A).
- `EKS-V-16-B-OPPG.pdf` (juni 2016 ordinær, Nygård) — **kun oppgavetekst**, ingen fasit; viser den seksdelte malen og Bankier-/fair-share-/buddysystem-temaene.
- `EKS-S-16-B-OPPG.pdf` (aug 2016, bokmål) og `EKS-S15-E-OPPG.pdf` (aug 2015, engelsk kont) — kryssjekk av oppgaveformulering og målform.

**Fagbeskrivelse:** omskrevet sammendrag av NTNUs emnebeskrivelse (scratchpad: `fagbeskrivelse-tdt4186.md`; kilde: <https://www.ntnu.no/studier/emner/TDT4186>). Emnet er **aktivt** — undervisning vår 2027, ordinær eksamen vår 2027, faglærer **Di Liu**. Vurdering: 4 timers skriftlig skoleeksamen, kode D, 100 %.

**Merknader om kildene:**
- **To faglærertradisjoner, to pensumbøker.** Bratsberg-settene (2010–2012) følger **Tanenbaum, *Modern Operating Systems*** (eksplisitte kapittel-/figurreferanser). Nygård-settene (2015–2016) følger etter alt å dømme **Stallings, *Operating Systems: Internals and Design Principles*** (arbeidssett, RAID-nivåer, rate monotonic, buddysystem, fair-share). Dagens faglærer (Di Liu) og pensumbok for 2027 er **ikke bekreftet** — verifiser pensum før endelig lærebokinnhold låses.
- **Arkivets alder.** Nyeste sett er fra 2016; emnet hadde deretter et opphold og gjenåpnes 2027. Kjernepensumet i OS er stabilt, men oppgaveformatet kan endres med ny faglærer. Analysen prioriterer derfor de tverr-tradisjonelle kjernetemaene høyest.
- **Datering.** Filnavn og intern datering avviker enkelte steder (f.eks. viser H2010-løsningsforslaget «Versjon: 20. nov 2012» selv om eksamensdato er 9. desember 2010). Analysen bruker eksamensdatoen i dokumentet.
- **Opphavsrett.** Alle beskrivelser av oppgaver, løsningsmetoder og sensorkommentarer er parafrasert og omstrukturert med egne ord. Ingen oppgavetekster, fasiter eller løsningsforslag er gjengitt ordrett. Algoritmenavn, standardnotasjon og beregningsformler er allmenn faglig kunnskap.

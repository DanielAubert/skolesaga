# Bokskjelett: TDT4160 Datamaskiner (NTNU) — eksamensrettet lærebok

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
> forfatteren leser IKKE eksamensarkivet. Alle frekvenser, vekter, sjangre,
> sensorkrav og typiske feil per kapittel er derfor angitt her, destillert fra
> `EKSAMENSANALYSE.md` (NTNUs eksamensarkiv for TDT4160: 6 unike sett 2015–2017,
> ordinær + kont, 3 med offisiell fasit signert Gunnar Tufte, samt NTNUs
> emnebeskrivelse med **oppdatert læringsutbytte 2026**, emneansvarlig Magnus Jahre).
> Arketype: **DNA-regnefag** (`DNA-regnefag.md`) — kapittel-DNA-ene der (teori / drill /
> øvingseksamen) er obligatoriske og gjentas ikke i sin helhet her, men er tilpasset et
> **frittekst, manuelt rettet regne-/kortsvarfag med sjenerøse delpoeng** (se §1).
>
> **⚠️ LÆREPLANSKIFTE — les før du bygger noe (utdypet i §1 og Del 0).** Arkivet
> (2015–17, Tufte) er bygget rundt **Tanenbaum / IJVM / Mic-1** og het den gang
> «Datamaskiner **og digitalteknikk**». Dagens emne (2026, Jahre) har (a) mistet
> «digitalteknikk» fra navnet, (b) nytt læringsutbytte som eksplisitt sier
> **RISC-V-assembly** + «enkelsyklus, flersyklus og pipelinet» prosessor +
> **flyttall/IEEE 754** + (trolig) **virtuelt minne**. Boka bygges derfor mot **dagens
> pensum**: IJVM-sporet behandles som **historisk appendiks** (Del 10, «bør kjenne
> til»), og flyttall + virtuelt minne + RISC-V-datasti bygges inn selv om de har
> **0 forekomster** i arkivet. Arkivets **oppgavesjangre og sensorstil** (minnekart,
> FSM-tabell, trace, formel + innsatte tall) er robuste og brukes som oppgavemal;
> arkivets **eksakte temavekting** for 2026 er svakt belagt og merkes gjennomgående
> **(verifiser)**. Skaff gjeldende pensumbok (trolig Harris & Harris eller Patterson &
> Hennessy, RISC-V-utgave) og evt. et nyere eksempelsett før kvotene låses helt.
>
> **All notasjon følger emnets og pensumbokas konvensjoner:** norsk brødtekst med
> **engelsk fagterm i parentes** ved første forekomst («hurtigbuffer (*cache*)»,
> «samlebånd (*pipeline*)», «trefforholdstall (*hit ratio*)»), **hex** for adresser og
> registerinnhold (`0xFFFF0000`), binær for bit-felt, RISC-V-mnemonics. Alle oppgaver,
> tall, kretser, RISC-V-kodebiter, minnekart og kontekster i den ferdige boka skal være
> **nyskrevne** (opphavsrett): instruksjonssett, tallverdier, standardnotasjon og
> RISC-V-konstruksjoner er allmenn faglig kunnskap, men ingen oppgavetekster, fasiter
> eller sensorformuleringer fra reelle sett gjengis.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `tdt4160` |
| Tittel | **TDT4160 Datamaskiner (NTNU)** |
| Institusjon | **NTNU** (Norges teknisk-naturvitenskapelige universitet — samme som TDT4186/TDT4100 m.fl.) |
| Level | `'Høyskole'` |
| Arketype | Regnefag (kvantitativt-teknisk fag med faste, gjentakende oppgavemønstre) — hybrid: garanterte regneteknikker (minnekart, trace, aksesstid, klokke) + tungt lag begreps-kortsvar (~40 % av settet) |
| Antall kapitler | **42** (2 eksamenskart/håndverk + 34 tema/drill + 2 historisk appendiks + 4 eksamenstrening) |
| Estimert totaltid | **≈ 2 760 min ≈ 46 timer** (inkl. 3 firetimers øvingseksamener) |
| Quiz totalt | **780** (krav ≥500; siktemål høyt — bredt fag, 42 kapitler, sterkt begrepslag) |
| Flashcards totalt | **584** (krav ≥500 — svært begrepsrikt fag, ~40 % kortsvar, hjelpemiddelfri eksamen → høy puggetetthet) |
| Prøver | **40** (4 per temadel 1–10) + **3 øvingseksamener** (kap. 11.2–11.4) |
| Læreplanmerknad | **(verifiser)** — arkivet er fra før et dokumentert læreplanskifte (Tanenbaum/IJVM → RISC-V, navnebytte, ny emneansvarlig). Temavekting for 2026 er svakt belagt; eksamens*form* og de tidløse kjerneregningene er sterkt belagt. |

**Pitch (ett avsnitt):** TDT4160 er NTNUs innføring i hvordan en datamaskin er bygget og
virker — fra bit og logisk port, gjennom sekvensielle kretser og tilstandsmaskiner, opp til
instruksjonssettarkitektur, datasti, minnehierarki og ytelse. Vurderingen er én **firetimers
skriftlig skoleeksamen**, karakter **A–F**, **hjelpemiddelkode D** (bestemt kalkulator,
ingen trykte/håndskrevne hjelpemidler), som teller 100 %. Formen styrer boka: eksamen er
**frittekst med regne- og «forklar kort»-oppgaver som rettes manuelt** — **ikke** flervalg.
Arkivet (2015–17) viser en ekstremt stabil «meny»: adressedekoding → minnekart, FSM
Moore/Mealy med excitation-/next-state-tabell, ISA-format + pseudokode-trace, cache-aksesstid
og pipeline-klokke — pluss et bredt lag begreps-kortsvar (superscalar, SIMD, ILP, Flynn,
Harvard, von Neumann, lokalitet, CMP). Men kurset har **skiftet DNA**: dagens emne bygger på
**RISC-V**, **flyttall (IEEE 754)** og trolig **virtuelt minne**, mens IJVM-mikroarkitekturen
er på vei ut. Boka driller derfor de tidløse sjangrene til feilfrihet (med arkivets
sensorstil), bygger inn det nye pensumet, og degraderer IJVM til et historisk appendiks man
«bør kjenne til».

**Kritisk stilregel (gjelder HELE boka) — «frittekst, formel + tall, tegn minnekartet,
sjenerøse delpoeng»:**

1. **Frittekst, manuelt rettet — IKKE flervalg.** Alle reelle oppgaver er frittekst.
   Løsningsforslag skal se ut som en **A-besvarelse for hånd**: regnesvar vises alltid som
   **formel → innsatte tall → svar med enhet** (`t̄ = c + (1−h)·m = 0,02 + (1−0,92)·1,5 =
   0,14 µs`). **Bare et tallsvar uten formel er svakt** (sensorkrav). Dette er hovedkontrasten
   mot UiOs IN2060, som er auto-rettet flervalg (se §9 i analysen). Plattformens MC-quiz er her
   **støtte/faktakontroll**, ikke selve eksamenstreningen — regnedrillen og «forklar kort»-
   modellsvarene ligger i `exercise`-blokkene (se avvik under).
2. **Minnekart MÅ tegnes for uttelling.** Fasit understreker at kandidaten får uttelling for
   selve **minnekartet**, ikke bare for adresseområdene. Alle adressedekodings-eksempler i boka
   tegner minnekartet **eksplisitt som en tabell (adresseområde ↔ enhet)**, ikke bare som en
   liste, og lesekontraktene sier at kartet skal tegnes.
3. **«Forklar kort» betyr kort.** Begrepsoppgavene besvares med **1–3 setninger** presis
   terminologi (evt. + kort begrunnelse), ikke essay. Boka gir hvert begrep en
   **modellsvar-formulering** på 1–3 setninger — dette er den sikreste karakteren i settet
   (~40 % av poengene) og drilles som begrepskompaktering ved siden av regnedrillen.
4. **Sjenerøse delpoeng — prosessen premieres, og «umulig» er et gyldig svar.** Fasitene
   (Tufte) er eksplisitt sjenerøse: «godkjenner alt som er rett», aksepterer **alternative
   løsninger** (andre rekkefølger på addisjon/mellomlagring, ulik tilstandskoding i FSM), og
   gir **rett for korrekt å konkludere at noe er UMULIG** (f.eks. at en operand ikke kan legges
   på bussen, eller at en klokkefrekvens ikke er oppnåelig) — fordi det viser modellforståelse.
   **Typo-toleranse:** der oppgaveteksten har trykkfeil godkjennes begge rimelige lesninger.
   Løsningsforslagene i boka gjør dette eksplisitt: de viser **hvorfor** et steg gir uttelling,
   og de har egne «umulig er et gyldig svar»-noter der modellen faktisk forbyr noe.
5. **Bygg mot DAGENS pensum (RISC-V), ikke arkivets temavekting.** RISC-V-assembly +
   enkelsyklus/pipelinet datasti + tallrepresentasjon/flyttall + minnehierarki (cache **og**
   virtuelt minne) er ryggraden. IJVM/mikroinstruksjoner er **historisk appendiks** (Del 10,
   «bør kjenne til»). Merk tydelig i teksten hva som er **RISC-V/moderne** (kjerne i dag) vs.
   **IJVM/historisk** (kan møtes i gamle sett), så leseren ikke drilles på utgått stoff. Der
   arkivets frekvenstall er svakt belagt for 2026, merkes de **(verifiser)**.
6. **Emnets/pensumbokas notasjon er fasit.** **Hex** for adresser/registerinnhold
   (`0x0040_0000`), binær for bit-felt; adresserom = `2^(antall adressebit)`; 2-komplement
   `A − B = A + (~B) + 1`; boolsk notasjon i excitation-ligninger (`·` AND, `+` OR, `~`/`¯` NOT,
   `⊕` XOR); FSM `Dᵢ = f(Q, inngang)`, `Qᵢ⁺ = Dᵢ`, antall vipper `⌈log₂(#tilstander)⌉`;
   IEEE 754 fortegn/eksponent/mantisse med bias; RISC-V-mnemonics (`add`, `sub`, `lw`, `sw`,
   `beq`, `bne`, `addi`, `slli` …) og registre (`x0`–`x31`, ABI-navn). Engelsk fagterm i
   parentes ved første forekomst.

**Fem-blokk-menyen (skal stå i Del 0 og styre lesestrategien — belagt for arkivet, projisert
mot 2026 med (verifiser)):** Arkivet er ekstremt stabilt: fem faste temablokker i samme
rekkefølge hvert år — (1) «litt av hvert»-kortsvar, (2) digitalt logisk nivå (adressedekoding,
FSM, ALU), (3) mikroarkitektur/IJVM, (4) ISA + pseudokode-trace, (5) ytelse. **Blokk 3 (IJVM)
er trolig erstattet** av RISC-V-datasti i dagens emne, og **flyttall + virtuelt minne er lagt
til**. Boka følger derfor **faglig progresjon mot dagens pensum**, ikke arkivets blokknummer
1:1 — men lærer studenten å kjenne igjen de robuste oppgavesjangrene.

**Avvik fra DNA/README-malen (dokumentert):**
- **Quiz er STØTTE/faktakontroll — ikke selve eksamenstreningen (motsatt av IN2060).** Fordi
  TDT4160-eksamen er **frittekst, manuelt rettet**, er ikke plattformens MC-quiz direkte
  eksamensform. Quiz brukes derfor til (a) begrepskontroll (recall av kortsvar-apparatet), (b)
  mellomsteg-sjekk i regneprosedyrer (f.eks. «hva er miss-raten når h = 0,9?»), og (c)
  klassifisering (Moore vs. Mealy, adresseringsmodus, RISC-trekk). Den **egentlige regnedrillen
  og «forklar kort»-treningen** ligger i `exercise`-blokkene (frittekst med `solution` + `hints`,
  minnekart tegnet, formel + tall vist) og i drillkapitlene. `options[0]` = riktig svar (runtime
  stokker); hver quiz-forklaring begrunner riktig svar og hvorfor sentrale distraktorer er gale.
  Kvoten er likevel høy (780) fordi faget er bredt og begrepstungt.
- **«Symbol- og formelliste» → «Notasjons- og begrepsliste».** README krever en `collapsible`
  «Symbol- og formelliste» per delkapittel. For et arkitekturfag med ~40 % begreps-kortsvar er
  det presise apparatet ikke bare formler, men **begreps- og notasjonsapparat**: binær/hex,
  IEEE 754-felt, boolsk/excitation-notasjon, RISC-V-mnemonics og registre, cache-/minneparametre,
  Flynn/parallellisme-taksonomien. Blokken heter derfor **«Notasjons- og begrepsliste»** og
  lister ALT delkapitlet bruker, med kort forklaring per element (per delkapittel, ikke arv).
  Unntak kun for kapitler helt uten notasjon/begreper (finnes knapt).
- **`theorem`-blokker brukes for regneprosedyrer, tegneprosedyrer og instruksjonskontrakter.**
  Der DNA-en bruker `theorem` for matematiske resultater, brukes den her for (a) de faste
  **regneprosedyrene** (2-komplement `~B+1`, IEEE 754-dekoding, adresserom `2ⁿ`, cache-aksesstid
  `c+(1−h)·m`, pipeline-klokke `1/tregeste`, utføringstid `k+N−1`, `⌈log₂⌉`), (b) den faste
  **minnekart-tegneprosedyren** (dekod CS-logikk → adresseområde i hex → tegn tabell adresse↔enhet
  → sjekk ledig plass/overlapp), (c) **FSM-tabellmalen** (excitation-ligning → next-state-tabell →
  utgangsbetingelse), og (d) **RISC-V-instruksjonskontrakter** (mnemonic ↔ virkning på
  register/PC/minne ↔ instruksjonsformat). Disse er bokas «teoremer».
- **Flashcards kalibreres som begrep/mønster ↔ presis 1–3-setnings definisjon ↔ fast
  feilslutning.** Flashcards genereres KUN fra toppnivå `definition`-blokker med `title`. Faget
  er svært begrepsrikt (Flynn-taksonomi, RISC-trekk, adresseringsmodi, cache-/minneparametre,
  Moore/Mealy-skillet, hazardtyper, IEEE 754-felt), og eksamen er **hjelpemiddelfri** (kode D),
  så flashcards ER puggematerialet. Siktes høyt (584) og kalibreres som gjenkalling: **begrep →
  presis definisjon + den faste feilslutningen** (f.eks. «Moore → utgang KUN av tilstand, **ikke**
  av inngang»; «Klokka i pipeline → bestemt av TREGESTE trinn, **ikke** summen»; «2-komplement →
  inverter **og +1**, ikke bare inverter»).
- **Drillkapitlene ligger i sine temadeler** (ikke samlet i siste del), fordi hver høyfrekvent
  regne-/tegnesjanger må drilles umiddelbart etter teorien (minnekart, FSM-tabell, RISC-V-trace,
  cache/pipeline-regning). Del 11 beholder sjangerguiden og de tre komplette øvingseksamenene.
- **Kapittelantall (42) ligger over DNA-veiledningen (20–35)** og er begrunnet: faget dekker
  **hele stabelen** fra tallrepresentasjon til virtuelt minne (11 innholdsdeler), det bygger inn
  **tre nye pensumområder** (IEEE 754-flyttall, RISC-V-datasti, virtuelt minne) i tillegg til
  arkivets stabile kjerne, og de fire 100 %-gjengangerne (minnekart, FSM, RISC-V-trace) + de to
  83 %-regnesjangrene (cache, pipeline) krever hver et eget drillkapittel. Et historisk appendiks
  (Del 10) er lagt til for IJVM slik at leseren kan møte gamle sett uten å drille utgått stoff.

---

## 2. Makrostruktur

Delene ordnes etter **faglig avhengighet mot dagens pensum** (representasjon → logikk → sekvens
→ ISA → datasti → minne → ytelse), IKKE etter arkivets blokknummer (som er farget av det utgåtte
IJVM-sporet). Frekvensen styrer **omfanget**: 100 %-gjengangere (minnekart, FSM, RISC-V-trace)
og 83 %-regnesjangrene (cache, pipeline) får teori + eget drillkapittel; «bør kjenne til»-stoff
(IJVM, flyttall-detaljer, shiftere) får kompakt dekning. `sectionNames` (bokforsiden) settes fra
kolonne 2.

| Del | `sectionName` (bokforsiden) | Kap. | Innhold / status |
|---|---|---|---|
| 0 | Eksamenskart og håndverk | 2 | Prioriteringsverktøyet + regne-/kortsvarhåndverket (formel + tall, tegn minnekart, «forklar kort»-form, «umulig er gyldig svar»). Kjerne i studieguiden. |
| 1 | Tallrepresentasjon | 4 | Binær/hex/desimal, adresserom `2ⁿ`, **2-komplement** (nå kjerne m/RISC-V), **IEEE 754-flyttall (NYTT)**. |
| 2 | Digital logikk | 3 | Porter, boolsk algebra, kretslesing, **1-bit ALU-analyse** (funksjonstabell). |
| 3 | Sekvensiell logikk og tilstandsmaskiner | 4 | Vipper/latch/klokking, **FSM Moore/Mealy + excitation-/next-state-tabell** (100 %), antall vipper `⌈log₂⌉`. |
| 4 | RISC-V: ISA og assembly | 5 | RISC-kjennetegn, Harvard, instruksjonsformater, **adresseringsmodi**, **pseudokode-/assembly-trace** (100 %). |
| 5 | Prosessoren: datasti og pipeline | 4 | von Neumann, **enkelsyklus RISC-V-datasti (NYTT)**, **pipelinet datasti** + hazards (RAW). |
| 6 | Minne: adressedekoding og minnekart | 4 | **Adressedekoding → minnekart (100 %, STOR)** — CS-logikk, hex-områder, overlapp; buss/arbitrering + I/O. |
| 7 | Cache og minnehierarki | 3 | Lokalitet, **cache-aksesstid `c+(1−h)·m` (83 %)**, minnehierarki-kost. |
| 8 | Virtuelt minne | 3 | **Paging, sidetabell, TLB, virtuell→fysisk (NYTT)** — 0 i arkivet, dagens pensum. |
| 9 | Ytelse, CPI og parallellisme | 4 | **Pipeline-klokke/utføringstid (83 %)**, CPU-tid/CPI/Amdahl, **parallellisme-kortsvar** (Flynn/SIMD/superscalar/ILP/CMP). |
| 10 | Historisk appendiks: IJVM/mikroarkitektur | 2 | **«Bør kjenne til»** — Mic-1, MAR/MDR/MBR, control store, mikroinstruksjoner. Trolig utgått; dekk konsept, ikke drill. |
| 11 | Eksamenstrening | 4 | Sjangerguide (A–H) + 3 komplette firetimers øvingseksamener (frittekst, RISC-V). |

**Avvik fra DNA-makrostrukturen (dokumentert):** DNA-en ordner temadelene etter faglig
avhengighet og lar frekvens styre omfang — det følges her. Til forskjell fra IN2060 (som følger
en fast eksamensblokk-rekkefølge) styres TDT4160-strukturen av **dagens pensums faglige
progresjon**, fordi arkivets blokk-rekkefølge er farget av det utgåtte IJVM-sporet (arkivets
blokk 3). Drillkapitlene (1.4, 2.3, 3.4, 4.5, 5.4, 6.4, 7.3, 8.3, 9.4) ligger i sine deler.
Del 10 (IJVM) er lagt inn som eksplisitt **historisk appendiks** for at leseren skal kunne møte
gamle eksamenssett uten å tro at IJVM er kjernepensum. Del 11 beholder sjangerguiden og de tre
øvingseksamenene.

---

## 3. Sjangerkatalog

Faget har to akser: **svarformen** (R1–R3 — hvordan et frittekstsvar rettes) og
**innholdssjangeren** (A–H, temablokkene fra EKSAMENSANALYSE §3). Hvert kapittel refererer
begge. Del 0 presenterer dem for studenten. Alt rettes **manuelt** med sjenerøse delpoeng.

### Svarformer (R) — frittekst, manuelt rettet, sjenerøse delpoeng

| Kode | Svarform | Sensorkrav | Fallgruve |
|---|---|---|---|
| **R1** | Regneoppgave (aksesstid, klokke, adresserom, trace, IEEE 754, `⌈log₂⌉`) | **Formel → innsatte tall → svar med enhet.** Bart tallsvar er svakt. Alternative korrekte veier godtas. | Snu en formel (bruke `h` i stedet for `(1−h)`); glemme `+1` i 2-komplement; blande bit vs. antall. |
| **R2** | «Forklar kort» (begreps-kortsvar) | **1–3 setninger** presis terminologi (+ evt. kort begrunnelse). Presisjon > lengde. | Skrive essay; upresis term (blande superscalar/SIMD/ILP); ikke svare på «hvorfor/hvorfor ikke». |
| **R3** | Tegn/konstruer (minnekart, FSM-tabell, funksjonstabell, datasti-forløp) | **Selve tegningen/tabellen gir uttelling** (minnekart MÅ tegnes). «Umulig» er et gyldig svar der modellen forbyr noe. | Bare liste opp områder uten å tegne kartet; ufullstendig tabell; tegne feil retning. |

> **Sjenerøs sensur (gjelder alle R):** fasit godkjenner alt som er rett, aksepterer alternative
> løsninger og typo-lesninger, og gir rett for **korrekt å konkludere at noe er umulig**
> (modellforståelse). Store poeng ligger i R1/R3 (regning + tegning); R2 gir mange billige,
> sikre poeng (~40 % av settet).

### Innholdssjangre (A–H) — destillert fra EKSAMENSANALYSE §3

| Kode | Innholdssjanger | Del | Frekvens (arkiv → 2026) |
|---|---|---|---|
| **A** | Begreps-kortsvar («forklar kort …»: superscalar, SIMD, ILP, Flynn, Harvard, von Neumann, lokalitet, CMP, avbrudd vs. busy-waiting, latency hiding, Moores lov) | 0, 5, 6, 9 | ~40 % av hvert sett; R2 **100 %** (menyen alltid) |
| **B** | Adressedekoding → **minnekart** (CS-logikk → hex-områder → tegn kart → ledig/overlapp) | 6 | **100 %** (R3) — den mest pålitelige konkrete oppgaven |
| **C** | FSM-analyse (Moore/Mealy, excitation-/next-state-tabell, antall vipper) | 3 | **100 %** (R3) — alltid i logikk-oppgaven |
| **D** | 1-bit ALU-analyse (funksjonstabell fra krets; 2-komplement-subtraksjon i sykler) | 2 | ~50 % (R3/R1) |
| **E** | IJVM-mikroinstruksjoner (registerfunksjon, skriv/eksekvér microinst., control store) | 10 | 100 % i arkivet, **trolig utgått** — historisk (R2/R3) |
| **F** | ISA / instruksjonsformat (klassifiser, adresseringsmodi, adresserom, RISC-trekk) → **RISC-V** | 4 | **100 %** (R1/R2) |
| **G** | **Pseudokode-/assembly-trace** (sluttverdi i register i hex, flagg, betinget hopp, løkker) → **RISC-V** | 4 | **100 %** (R1) — regn ut sluttverdi |
| **H** | Ytelsesregning (cache-aksesstid `c+(1−h)·m`; pipeline-klokke `1/tregeste` + `k+N−1`; datasti-forsinkelse; CPI/Amdahl) | 7, 9 | cache ~83 %, pipeline ~83 % (R1) |

---

## 4. Kapitler

Feltene følger DNA-ens «Skjelett-krav». **Innholdskontrakt** = definisjoner/teoremer/prosedyrer/
instruksjonskontrakter kapitlet SKAL lære (i emnets notasjon). **Notasjons- og begrepsliste** =
det `collapsible`-apparatet delkapitlet krever. Prioritetsklasser: **perfekt** / **kunne** /
**kjenne**. Hvert teorikapittel har standard-DNA-en: Eksamensvinkel-`tip` → Forkunnskaper-`text`
+ Notasjons-og-begrepsliste-`collapsible` → Motivasjon → `definition`/`theorem` (i emnets
notasjon) → utledning/prosedyre m/intuisjon → 2–4 `example` (siste på eksamensnivå, med formel +
tall / tegnet minnekart) → Typiske-feil-`warning` → 6–12 `exercise` (stigende, ender på
eksamensnivå, frittekst R1–R3, alle med `solution` + `hints`) → Repetisjons-`collapsible`.
Drillkapitler: Eksamensvinkel → løsningsoppskrift → sensor-kommentert case → 10–16 oppgaver på
eksamensnivå.

---

### Del 0 — Eksamenskart og håndverk

#### Kapittel 0.1: Eksamenskartet — slik testes TDT4160

- **id:** `tdt4160-0-1` · **number:** 0.1 · **estimatedMinutes:** 35 · **prerequisites:** ingen · **kapitteltype:** eksamenskart
- **description:** Eksamensformen (én firetimers frittekst skoleeksamen, kode D, A–F, manuelt rettet med sjenerøse delpoeng), den faste oppgavemenyen, temafrekvensene, læreplanskiftet (RISC-V vs. IJVM) og lesestrategien som styrer hele boka.
- **Eksamensbelegg:** Metakapittel — bygger på hele arkivet (6 sett 2015–17) + dagens læringsutbytte. Skal gjengi: (i) **formen** — skriftlig skoleeksamen, **4 timer**, **hjelpemiddelkode D** (bestemt kalkulator, ingen andre hjelpemidler), karakter A–F, teller 100 %; **frittekst med regne- og «forklar kort»-oppgaver, manuelt rettet** — **IKKE flervalg**; deloppgaver a–e med **synlig prosentvekt** (nyttig for tidsstyring); (ii) den **faste oppgavemenyen** (arkiv): «litt av hvert»-kortsvar → digitalt logisk nivå (adressedekoding, FSM, ALU) → mikroarkitektur (IJVM) → ISA + trace → ytelse; **samme meny hvert år, bare nye tall/figurer**; (iii) **⚠️ læreplanskiftet** — IJVM-blokken (~20–25 % av gamle sett) er **trolig utgått**, RISC-V-assembly + enkelsyklus/pipelinet datasti + flyttall (IEEE 754) + virtuelt minne er **nå pensum** (0 forekomster i arkivet); temavekting for 2026 er **(verifiser)**, men eksamens*form* og de tidløse regningene er sikre; (iv) **temafrekvens-tabellen** (A kortsvar ~40 %/R2 100 %, B minnekart 100 %, C FSM 100 %, D ALU 50 %, E IJVM 100 %⚠️utgått, F ISA 100 %, G trace 100 %, H cache 83 %/pipeline 83 %); (v) de **fire poengmagnetene**: adressedekoding/minnekart, FSM-tabell, RISC-V-trace, cache/pipeline-regning; (vi) at **~40 % er begreps-kortsvar** — billige, sikre poeng som dekker hele begrepsapparatet.
- **Innholdskontrakt:** Svarform-katalogen R1–R3 (§3) + innholdssjangrene A–H som studentens sjekkliste med typisk del og vekt. **Den gjennomgående regelen:** *regneferdighetene (minnekart, trace, aksesstid, klokke, 2-komplement, IEEE 754) er de sikreste konkrete poengene*, og *begreps-kortsvarene er de billigste*. **Prognosen for neste ordinære eksamen (verifiser):** logikk-oppgave (adressedekoding→minnekart + FSM Moore/Mealy + evt. ALU); ISA-oppgave (RISC-V-format + adresseringsmodi + trace til hex-sluttverdi); datasti/prosessor (enkelsyklus/pipelinet, hazards); minne/ytelse (cache-aksesstid + pipeline-klokke + evt. virtuelt minne); tallrepresentasjon (2-komplement + flyttall); og et bredt lag begreps-kortsvar spredt utover. Avslutt med **leseplanen** (tre nivåer, jf. §7).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver, f.eks.: «Hvorfor er det å tegne minnekartet (ikke bare liste områdene) verdt egne poeng?» og «Rangér de fem meny-blokkene etter hvor mange garanterte regnepoeng de rommer i dagens RISC-V-emne.»
- **Typiske feil:** Metafeilene — tro faget er flervalg (det er frittekst); gi bare tallsvar uten formel; ikke tegne minnekartet; **drille IJVM-mikroinstruksjoner som kjernepensum** (trolig utgått — se Del 10); overse at flyttall/virtuelt minne nå er pensum selv om de mangler i gamle sett.
- **Quiz: 14 · Flashcards: 12** (form, R1–R3, oppgavemenyen, frekvenser, læreplanskiftet, fire poengmagneter)

#### Kapittel 0.2: Regne- og kortsvarhåndverket — formel + tall, tegn minnekartet, «forklar kort»

- **id:** `tdt4160-0-2` · **number:** 0.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4160-0-1` · **kapitteltype:** teori (håndverk/sjangerguide)
- **description:** Selve besvarelseshåndverket faget belønner: hvordan sette opp et regnesvar (formel → innsatte tall → svar med enhet), hvordan tegne et minnekart som gir uttelling, hvordan skrive et «forklar kort»-svar på 1–3 setninger, og når «umulig» er det riktige svaret.
- **Eksamensbelegg:** Metakapittel destillert fra sensorkravene (analysen §4). Trener de fire føringene som avgjør delpoeng i **alle** deler: *formel + innsatte tall*, *tegn minnekartet*, *forklar kort og presist*, *si «umulig» når modellen forbyr noe*. Prioritet: **perfekt** (påvirker score i hele settet).
- **Innholdskontrakt:** `theorem` **regnesvar-oppskriften (R1)**: 1) skriv formelen symbolsk, 2) sett inn tallene, 3) regn ut, 4) oppgi svar **med enhet** og en kort tolkning; bart tall uten formel gir lite uttelling. `theorem` **minnekart-oppskriften (R3)**: 1) dekod CS-logikken per brikke, 2) finn adresseområde (start–slutt i **hex**), 3) **tegn en tabell adresse↔enhet** (ikke bare en liste), 4) marker ledig plass og evt. overlapp, 5) drøft om overlapp er et problem (avhenger av read-only vs. write-only). `text` **«forklar kort»-oppskriften (R2)**: 1–3 setninger, presis term, «hva er det + hvorfor/hvorfor ikke»; modellsvar-eksempler. `text`/`warning` **«umulig er et gyldig svar»**: der modellen forbyr noe (en operand kan ikke legges på en delt buss samtidig; en single-cycle-CPU kan ikke klokkes raskere enn tregeste minnebrikke tillater), er korrekt begrunnet «umulig» full uttelling. **Notasjons- og begrepsliste:** formel→tall→enhet, hex-adresseområde, minnekart-tabell, «forklar kort»-form, read-only/write-only, «umulig».
- **Oppgavesjangre:** R1/R2/R3 (metanivå). Mønstereksempler: (R1) «Sett opp `t̄ = c+(1−h)·m` med c=0,02 µs, m=1,5 µs, h=0,92 og vis hvert steg.»; (R3) «Tegn minnekartet for en RAM på `0x0000–0x3FFF` og en ROM på `0xC000–0xFFFF`; hvor er det ledig plass?»; (R2) «Forklar kort forskjellen på temporal og spatial lokalitet.»
- **Typiske feil:** Gi tallsvar uten formel; liste adresseområder uten å tegne kartet; skrive essay der 1–3 setninger kreves; ikke tørre å svare «umulig» når modellen faktisk forbyr det (og dermed miste poengene sensor gir for modellforståelse).
- **Quiz: 14 · Flashcards: 12** (regnesvar-oppskrift, minnekart-oppskrift, «forklar kort»-form, «umulig»-prinsippet, hex, enheter)

**Prøve-kvote Del 0:** ingen egen prøve (Del 0 er metakapitler; håndverket prøves i alle temadelers prøver).

---

### Del 1 — Tallrepresentasjon

> Del 1 rommer de billigste garanterte regnepoengene i den moderne utgaven av faget:
> binær/hex-konvertering, adresserom `2ⁿ`, og **2-komplement** (nå kjerne med RISC-V, ikke bare
> 17 % som i arkivet). **IEEE 754-flyttall (kapittel 1.3) er NYTT** — 0 forekomster i arkivet,
> men eksplisitt i dagens læringsutbytte. Kapittel 1.4 er drillkapitlet.

#### Kapittel 1.1: Tallsystemer, hex og adresserom

- **id:** `tdt4160-1-1` · **number:** 1.1 · **estimatedMinutes:** 45 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** Binær, heksadesimal og desimal, plassverdisystemet, konvertering begge veier (nibbelgruppering), og adresserom = `2^(antall adressebit)` — grunnlaget for minnekart og ISA.
- **Eksamensbelegg:** Sjanger F/H-støtte. Hex↔binær og adresserom `2ⁿ` er forutsetning for adressedekoding (Del 6) og ISA (Del 4). «32-bits adressebuss ⇒ `2³²` adresser» er en fast felle. Prioritet: **perfekt** (byggende).
- **Innholdskontrakt:** `definition` plassverdisystem og base. `theorem` **hex↔binær**: grupper i 4-bits nibbler (`0x0A55 = 0000 1010 0101 0101₂`); hex-sifferverdier A–F = 10–15. `theorem` **adresserom**: `antall adresser = 2^(antall adressebit)`; hold styr på **byte vs. ord** og på **bit vs. antall** (32 bit ⇒ `2³²`, ikke 32). `text` desimal↔binær via gjentatt divisjon / fallende 2-er-potenser. **Notasjons- og begrepsliste:** base/subskript, hex-sifferverdier, nibbelgruppering, `2ⁿ`-adresserom, byte/ord.
- **Oppgavesjangre:** F/H (R1). Mønstereksempel (R1): «En maskin har 24-bits adressebuss. Hvor mange byte kan adresseres, og hva er høyeste adresse i hex?» (`2²⁴ = 16 Mi byte`; `0xFFFFFF`.)
- **Typiske feil:** Forveksle **antall adressebit og antall adresser** (§ typiske feil #3); feil nibbelgruppering ved hex; blande byte og ord; blande hex-sifferverdiene A–F.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 1.2: To-komplement og heltallsaritmetikk

- **id:** `tdt4160-1-2` · **number:** 1.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-1-1` · **kapitteltype:** teori
- **description:** Hvordan negative heltall representeres på 2-komplement, metoden «inverter alle bit, legg til 1», og subtraksjon som `A − B = A + (~B) + 1` (grunnlaget for ALU-subtraksjon i Del 2).
- **Eksamensbelegg:** Sjanger D-støtte / F. Arkivet: 17 % (2017-kont, i ALU-oppgaven), men **nå kjerne** med RISC-V og ALU. Den klassiske fella er å glemme `+1`. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **2-komplement (n bit)**: verdi med fortegn = `−2^(n−1)·b_(n−1) + Σ2ⁱ·bᵢ`; mest signifikante bit har vekt **−2^(n−1)**. `theorem` **negasjonsmetoden**: skriv `|n|` binært → **inverter alle bit** → **+1**; tilbakeveien er samme operasjon. `theorem` **subtraksjon i maskinvare**: `A − B = A + (~B) + 1` (inverter B, carry-inn = 1) — koster derfor **to ekstra steg** utover ren addisjon (relevant for ALU-sykeltelling, Del 2). Rekkevidde `−2^(n−1) … 2^(n−1)−1`. **Notasjons- og begrepsliste:** fortegnsbit, `−2^(n−1)`-vekten, invertering, `+1`-steget, `~B+1`, rekkevidde.
- **Oppgavesjangre:** F/D (R1). Mønstereksempel (R1): «Skriv `−37₁₀` på 8-bits 2-komplement, og vis hvordan `54 − 37` regnes som addisjon.» (`37 = 00100101` → `11011010` → +1 = `11011011`; `54 + (−37)`.)
- **Typiske feil:** Regne 2-komplement **uten `+1`** (bare 1-er-komplement); glemme at fortegnsbiten har vekt `−2^(n−1)`; feil bitbredde; glemme at subtraksjon = inverter + carry-inn (koster sykler i ALU).
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 1.3: Flyttall og IEEE 754 *(NYTT — ikke i arkivet)*

- **id:** `tdt4160-1-3` · **number:** 1.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-1-2` · **kapitteltype:** teori
- **description:** Flyttallsrepresentasjon etter IEEE 754 (single precision): fortegn, eksponent med bias, normalisert mantisse med skjult 1-bit — koding og dekoding begge veier, og hvorfor flyttall gir stort spenn men begrenset presisjon.
- **Eksamensbelegg:** Sjanger F/A. **0 forekomster i arkivet**, men **eksplisitt i dagens læringsutbytte** — bygges inn. Frekvens/vekt for 2026 er **(verifiser)**. Prioritet: **kunne** (nytt kjernepensum; prioritér gitt læreplanskiftet).
- **Innholdskontrakt:** `definition` **flyttall (IEEE 754 single, 32 bit)**: 1 fortegnsbit + 8 eksponentbit + 23 mantissebit; verdi = `(−1)^s · 1,M · 2^(E−bias)`, **bias = 127**. `theorem` **dekoding**: les `s`, `E` (subtrahér bias 127), `M` (legg til skjult 1 → `1,M`); regn tallet. `theorem` **koding**: normalisér tallet til `1,f · 2^e`, sett `E = e + 127`, legg `f` i mantissen, `s` fra fortegnet. `text` normalisert form, skjult 1-bit, hvorfor stort spenn men begrenset presisjon (fast antall signifikante bit); kort om spesialverdier (0, ∞, NaN) — «bør kjenne til». **Notasjons- og begrepsliste:** fortegn/eksponent/mantisse, bias 127, skjult 1-bit, normalisert form, `(−1)^s·1,M·2^(E−127)`.
- **Oppgavesjangre:** F (R1). Mønstereksempel (R1): «Dekod IEEE 754 single `0x41C80000` til desimal.» (`s=0`, `E=131−127=4`, `1,M=1,5625` → `1,5625·2⁴ = 25,0`.)
- **Typiske feil:** Glemme **bias 127** på eksponenten; glemme den **skjulte 1-biten** i mantissen; tro flyttall gir mer presisjon jo større tallet er; blande antall eksponent- og mantissebit.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 1.4: DRILL — Tallkonvertering, 2-komplement og IEEE 754

- **id:** `tdt4160-1-4` · **number:** 1.4 · **estimatedMinutes:** 80 · **prerequisites:** `tdt4160-1-3` · **kapitteltype:** drill
- **description:** Systematisk drill: hex↔binær↔desimal begge veier, adresserom `2ⁿ`, 2-komplement fram og tilbake + subtraksjon `~B+1`, og IEEE 754-koding/dekoding — de garanterte tallpoengene i den moderne utgaven.
- **Eksamensbelegg:** Sjanger F, tallrepresentasjon. 2-komplement + IEEE 754 er dagens kjerne. Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **konvertering**: nibbelgruppering (hex↔binær), gjentatt divisjon (des→binær); 2) **adresserom**: `2^(antall bit)`, hold byte/ord; 3) **negativt tall**: `|n|` binært → inverter → `+1`; **tolke 2-komplement**: `−2^(n−1)·b + Σ2ⁱ·bᵢ`; 4) **IEEE 754**: dekod `(−1)^s·1,M·2^(E−127)`, kod ved å normalisere. Sensor-kommentert case med margnotat om hvorfor `+1`-steget og bias 127 er kritiske. 12–16 oppgaver (R1) som roterer alle variantene, alle med **formel + innsatte tall vist**.
- **Oppgavesjangre:** F. Mønstereksempel (R1): «`11011011₂` som 8-bits 2-komplement er hvilket desimaltall?» (`−128 + 91 = −37`.)
- **Typiske feil:** Glemme `+1` (§#8-analog); feil bitbredde; glemme bias 127 / skjult 1-bit i IEEE 754; forveksle bit vs. antall i adresserom.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 1:** 4 prøver (Tallrepresentasjon)
1. Prøve 1.A (20 min): Hex↔binær↔desimal + adresserom `2ⁿ` (sjanger F, R1).
2. Prøve 1.B (25 min): 2-komplement begge veier + subtraksjon `~B+1` (sjanger F/D, R1).
3. Prøve 1.C (25 min): IEEE 754 koding/dekoding + bias/skjult bit (sjanger F, R1).
4. Prøve 1.D (25 min): Blandet tallrepresentasjon — konvertering + 2-komplement + flyttall (F, R1).

---

### Del 2 — Digital logikk

> Del 2 dekker logikkgrunnlaget og den konkrete **1-bit ALU-analysen** (~50 %, R3): les
> kretsskissen (adder + logikk + mux styrt av F0–F2) og sett opp funksjonstabellen for alle
> styrekombinasjoner. TDT4160 gjør logikk via **direkte kretslesing og excitation-ligninger**,
> **ikke** Karnaugh-minimering (analysen §2). Kapittel 2.3 er drillkapitlet.

#### Kapittel 2.1: Logiske porter, boolsk algebra og kretslesing

- **id:** `tdt4160-2-1` · **number:** 2.1 · **estimatedMinutes:** 50 · **prerequisites:** ingen · **kapitteltype:** teori
- **description:** De grunnleggende portene (AND/OR/NOT/NAND/NOR/XOR), boolsk notasjon, og hvordan man leser en krets: propagér funksjonsuttrykket lag for lag fra inngang til utgang (uten Karnaugh — direkte).
- **Eksamensbelegg:** Sjanger D-grunnlag. Kretslesing er forutsetning for ALU-analyse (2.2) og FSM-excitation (Del 3). Prioritet: **perfekt** (byggende).
- **Innholdskontrakt:** `definition`-blokker: hver port med symbol, boolsk uttrykk og sannhetstabell (`AND = A·B`, `OR = A+B`, `NOT = ~A`/`Ā`, `NAND = ~(A·B)`, `NOR = ~(A+B)`, `XOR = A⊕B`). `theorem` **kretslesing**: propagér lag for lag fra inngangene; **boble = invertering**; sett opp sannhetstabell ved tvil. `theorem` **sentrale boolske lover** (brukes til å forenkle excitation-ligninger, ikke til Karnaugh-minimering): De Morgan `~(A·B) = ~A + ~B`, distribusjon, absorpsjon. **Notasjons- og begrepsliste:** portsymboler + boolsk skrivemåte (`·`, `+`, `~`/`¯`, `⊕`), boble-invertering, lag-for-lag-propagering, sannhetstabell.
- **Oppgavesjangre:** D/A (R1/R2). Mønstereksempel (R1): «Skriv utgangsuttrykket for en krets der A og B går inn i en NAND, hvis utgang XORes med C.» (`(~(A·B)) ⊕ C`.)
- **Typiske feil:** Propagere feil vei (fra utgang mot inngang); overse en boble (invertering); forveksle NAND (`~(A·B)`) og NOR (`~(A+B)`); tro faget krever Karnaugh (det gjør det ikke).
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 2.2: 1-bit ALU: funksjonstabell og subtraksjon

- **id:** `tdt4160-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-2-1` · **kapitteltype:** teori
- **description:** Les en 1-bit ALU-krets (adder + logikk + mux styrt av F0–F2), sett opp funksjonstabellen for alle styrekombinasjoner (000–111), og forklar hvorfor subtraksjon krever 2-komplement (`~B + 1`) og dermed flere klokkeperioder.
- **Eksamensbelegg:** Sjanger D, ~50 %. «Analysér hvilken funksjon logikken gir» og «hvor mange klokkeperioder for subtraksjon?» er faste varianter. Prioritet: **kunne** (høyfrekvent støtte).
- **Innholdskontrakt:** `theorem` **ALU-funksjonstabell (R3)**: for hver styrekombinasjon F0–F2, følg signalet gjennom mux-en og sett opp hva utgangen blir (AND/OR/NOT/sum/…); tegn hele tabellen 000–111. `theorem` **2-komplement-subtraksjon i sykler**: `A − B = A + (~B) + 1` → inverter B (1 steg), legg til 1 via carry-inn, så ADD → typisk **2 sykler** (jf. 1.2); korrekt begrunnet «umulig i én syklus uten carry-inn» gir uttelling. **Notasjons- og begrepsliste:** F0–F2 styrebit, mux, funksjonstabell, `~B+1`-subtraksjon, carry-inn.
- **Oppgavesjangre:** D (R3/R1). Mønstereksempel (R3): «Gitt en 1-bit ALU med mux styrt av F1F0: sett opp funksjonstabellen for F1F0 = 00,01,10,11.» + (R1) «Hvor mange klokkeperioder kreves for subtraksjon, og hvorfor?»
- **Typiske feil:** Lese mux-styringen feil; glemme at subtraksjon bruker `~B + 1` (ikke ren subtraksjon i logikken); ufullstendig funksjonstabell (ikke alle styrekombinasjoner); ikke tørre å svare «umulig»/«krever ekstra syklus».
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 2.3: DRILL — Kretslesing og 1-bit ALU-analyse

- **id:** `tdt4160-2-3` · **number:** 2.3 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4160-2-2` · **kapitteltype:** drill
- **description:** Full drill på sjanger D: les kretser til funksjonsuttrykk, sett opp fullstendige funksjonstabeller for 1-bit ALU-er, og regn sykler for subtraksjon.
- **Eksamensbelegg:** Sjanger D, ~50 %. Prioritet: **kunne** (drilles fordi det er R3 = tegnepoeng).
- **Innholdskontrakt (løsningsoppskrift):** 1) **kretslesing**: propagér lag for lag, hold styr på bobler; 2) **funksjonstabell**: for hver styrekombinasjon, spor signalet gjennom mux-en og fyll inn utgangen — **tegn hele tabellen** (R3-uttelling); 3) **subtraksjon**: `~B + 1`, tell sykler. Sensor-kommentert case med margnotat om at selve tabellen gir poeng og at «krever ekstra syklus» er et gyldig svar. 10–16 oppgaver (R1/R3) over varierte kretser.
- **Oppgavesjangre:** D. Mønstereksempel (R3): «Sett opp funksjonstabellen for ALU-en når F2F1F0 styrer {AND, OR, ADD, SUB}.»
- **Typiske feil:** Ufullstendig propagering; overse boble; ufullstendig funksjonstabell; glemme `~B+1` i subtraksjon.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 2:** 4 prøver (Digital logikk)
1. Prøve 2.A (20 min): Port-ID + kretslesing til uttrykk (sjanger D, R1).
2. Prøve 2.B (25 min): 1-bit ALU — funksjonstabell for alle styrekombinasjoner (sjanger D, R3).
3. Prøve 2.C (20 min): 2-komplement-subtraksjon i ALU + sykeltelling (sjanger D, R1).
4. Prøve 2.D (25 min): Blandet kretslesing + funksjonstabell (D, R1/R3).

---

### Del 3 — Sekvensiell logikk og tilstandsmaskiner

> Del 3 rommer en av de fire poengmagnetene: **FSM-analyse (100 %, R3)** — klassifiser Moore vs.
> Mealy, utled excitation-ligninger, skriv next-state-tabell, finn utgangsbetingelsen, og regn
> minste tilstandsregister (`⌈log₂ #tilstander⌉`). Kapittel 3.4 er det store drillkapitlet.

#### Kapittel 3.1: Vipper, latcher og klokking

- **id:** `tdt4160-3-1` · **number:** 3.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4160-2-1` · **kapitteltype:** teori
- **description:** D-vippe (flankestyrt) vs. latch (nivåstyrt), tilstandsregisteret som byggekloss, og hvordan neste tilstand lastes på klokkeflanken — grunnlaget for FSM-analysen.
- **Eksamensbelegg:** Sjanger C-grunnlag. Vippene er byggeklossen i FSM (3.2). Prioritet: **kunne** (byggende).
- **Innholdskontrakt:** `definition` **D-vippe (flip-flop)**: **flankestyrt** — laster D på stigende klokkeflanke; `Q⁺ = D`. `definition` **latch**: **nivåstyrt** — transparent når klokka er aktiv. `text` **tilstandsregister** = sett med D-vipper som holder tilstanden mellom flanker; kombinatorisk logikk regner ut neste tilstand `D = f(Q, inngang)`. **Notasjons- og begrepsliste:** D-vippe, latch, klokkeflanke, `Q`/`Q⁺`, tilstandsregister, nivå- vs. flankestyrt.
- **Oppgavesjangre:** C (R2/R1). Mønstereksempel (R2): «Forklar kort forskjellen på en latch og en D-vippe.» (Latch nivåstyrt/transparent; vippe flankestyrt.)
- **Typiske feil:** Forveksle latch (nivå) og vippe (flanke); tro tilstandsregisteret endrer seg kontinuerlig (bare på flanken); blande `Q` og `Q⁺`.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 3.2: FSM — Moore/Mealy, excitation- og next-state-tabell

- **id:** `tdt4160-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4160-3-1` · **kapitteltype:** teori
- **description:** Klassifiser en tilstandsmaskin som Moore eller Mealy, utled excitation-ligningene (D0, D1 …) fra kretsen, skriv next-state-tabellen, og angi når utgangen er aktiv — kjernen i den 100 %-tilbakevendende logikk-oppgaven.
- **Eksamensbelegg:** Sjanger C, **100 %** (R3). Alltid i logikk-oppgaven. Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition` **Moore vs. Mealy**: **Moore** ⇔ utgang avhenger **kun av tilstand**; **Mealy** ⇔ utgang avhenger av **tilstand OG inngang** (se om det går en pil fra inngangen inn i utgangsdekodingen). `theorem` **FSM-tabellmalen (R3)**: 1) les excitation-ligningene `Dᵢ = f(Q, inngang)` fra kretsen, 2) sett opp **next-state-tabellen** (`Qᵢ⁺ = Dᵢ` for hver nåværende tilstand + inngang), 3) angi **utgangsbetingelsen** (`Y = 1` når …). `theorem` **antall vipper** = `⌈log₂(#tilstander)⌉`; ubrukte tilstander → definer retur til IDLE. **Notasjons- og begrepsliste:** Moore/Mealy, excitation-ligning `Dᵢ`, next-state `Qᵢ⁺`, transisjonstabell, `⌈log₂ tilst.⌉`, IDLE.
- **Oppgavesjangre:** C (R3). Mønstereksempel (R3): «Gitt kretsen med D-vipper og excitation `D0 = Q1·x`, `D1 = Q0 + x`: klassifiser Moore/Mealy, skriv next-state-tabellen, og angi når Y=1.»
- **Typiske feil:** **Forveksle Moore og Mealy** (§ typiske feil #4) — glemme å sjekke om inngangen påvirker utgangsdekodingen; feil excitation-ligning; ufullstendig next-state-tabell (R3-tap); runde `log₂` ned for antall vipper.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 3.3: Tilstandsdiagram, tilstandskoding og antall vipper

- **id:** `tdt4160-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4160-3-2` · **kapitteltype:** teori
- **description:** Gå fra tilstandsdiagram til transisjonstabell, velg tilstandskoding (binær/one-hot), regn minste antall vipper, og håndter ubrukte tilstander — den andre halvdelen av FSM-oppgaven.
- **Eksamensbelegg:** Sjanger C, 100 %-blokk (variant: gitt diagram, fyll ut tabell + finn minste register). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **diagram → tabell**: for hver tilstand og inngang, les neste tilstand og utgang av diagrammet, fyll transisjonstabellen. `theorem` **antall vipper** = `⌈log₂(#tilstander)⌉` (binær); one-hot = én vippe per tilstand. `text` **ubrukte tilstander**: definer transisjon (typisk → IDLE) så maskinen ikke «henger». Sensoren aksepterer **alternative tilstandskodinger** (fasit er sjenerøs). **Notasjons- og begrepsliste:** tilstandsdiagram, transisjonstabell, binær/one-hot-koding, `⌈log₂ tilst.⌉`, ubrukte tilstander/IDLE.
- **Oppgavesjangre:** C (R3/R1). Mønstereksempel (R1): «En FSM har 6 tilstander. Hvor mange vipper trengs minst ved binærkoding?» (`⌈log₂6⌉ = 3`.)
- **Typiske feil:** Runde `log₂` ned; forveksle binær (`⌈log₂n⌉`) og one-hot (n) vippeantall; glemme å håndtere ubrukte tilstander; tro det finnes bare én riktig tilstandskoding.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 3.4: DRILL — FSM-analyse (Moore/Mealy, excitation, next-state)

- **id:** `tdt4160-3-4` · **number:** 3.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4160-3-3` · **kapitteltype:** drill
- **description:** Full drill på fagets klassiske FSM-oppgave: klassifiser Moore/Mealy, utled excitation-ligninger, skriv komplette next-state-tabeller, finn utgangsbetingelser, og regn antall vipper — begge retninger (krets→tabell og diagram→tabell).
- **Eksamensbelegg:** Sjanger C, 100 % (R3, en av fire poengmagneter). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **klassifiser** Moore/Mealy (pil fra inngang til utgangsdekoding?); 2) **excitation**: les `Dᵢ = f(Q, inngang)` fra kretsen; 3) **next-state-tabell**: `Qᵢ⁺ = Dᵢ`, alle tilstand×inngang-kombinasjoner — **tegn hele tabellen** (R3-uttelling); 4) **utgang**: angi `Y`-betingelsen; 5) **antall vipper** `⌈log₂⌉`, håndter ubrukte tilstander → IDLE; 6) fra diagram: fyll transisjonstabell. Sensor-kommentert case med margnotat om at alternative tilstandskodinger godtas og at komplett tabell gir full R3-uttelling. 12–16 oppgaver over krets- og diagramvarianter.
- **Oppgavesjangre:** C. Mønstereksempel (R3): «Gitt tilstandsdiagram med 4 tilstander og inngang x: fyll transisjonstabellen, klassifiser Moore/Mealy, og angi minste antall vipper.»
- **Typiske feil:** Forveksle Moore/Mealy (§#4); ufullstendig next-state-tabell; runde vippeantall ned; glemme ubrukte tilstander.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 3:** 4 prøver (Sekvensiell logikk og tilstandsmaskiner)
1. Prøve 3.A (20 min): Vipper/latcher + tilstandsregister (sjanger C, R1/R2).
2. Prøve 3.B (30 min): FSM — excitation + next-state-tabell + Moore/Mealy (sjanger C, R3).
3. Prøve 3.C (25 min): Tilstandsdiagram → transisjonstabell + antall vipper (sjanger C, R3/R1).
4. Prøve 3.D (30 min): Full FSM-analyse (klassifiser + tabell + utgang + vipper) (C, R3).

---

### Del 4 — RISC-V: instruksjonssettarkitektur og assembly

> Del 4 rommer to av de fire poengmagnetene: **ISA-format + adresseringsmodi (F, 100 %)** og
> **pseudokode-/assembly-trace (G, 100 %, R1 — regn sluttverdi i hex)**. Arkivet brukte en
> egendefinert enkel RISC-maskin; dagens emne bruker **RISC-V** — boka moderniserer sjangeren
> til RISC-V-assembly. Kapittel 4.5 er det store drillkapitlet.

#### Kapittel 4.1: ISA-grunnlag: RISC-kjennetegn, Harvard og adresserom

- **id:** `tdt4160-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-1-1` · **kapitteltype:** teori
- **description:** Hva en instruksjonssettarkitektur (ISA) er, RISC-kjennetegnene (load/store, fast instruksjonslengde, få adresseringsmodi, register-register, mange registre), Harvard vs. von Neumann, og adresserom fra adressebussbredden.
- **Eksamensbelegg:** Sjanger F/A, 100 %-blokk. RISC-trekk + Harvard er faste kortsvar (Harvard alltid koblet til ISA-oppgaven, ~67 %). Prioritet: **perfekt** (byggende).
- **Innholdskontrakt:** `definition` **ISA**: grensesnittet mellom maskinvare og programvare (instruksjoner, registre, adressemodi) — et program er bundet til arkitekturen, ikke implementasjonen. `theorem` **RISC-kjennetegn**: load/store (kun `lw`/`sw` rører minne), **fast instruksjonslengde** (32 bit), få adresseringsmodi, register-register-operasjoner, mange registre (RISC-V: `x0`–`x31`, `x0`=0). `definition` **Harvard vs. von Neumann**: Harvard = separate instruksjons- og databusser/-minner; von Neumann = felles. `theorem` **adresserom** = `2^(adressebussbredde)`. **Notasjons- og begrepsliste:** ISA, RISC-trekk, load/store, `x0`–`x31`, Harvard/von Neumann, adresserom `2ⁿ`.
- **Oppgavesjangre:** F/A (R2/R1). Mønstereksempel (R2): «Nevn tre kjennetegn ved en RISC-arkitektur, og forklar kort hva som skiller Harvard fra von Neumann.»
- **Typiske feil:** Forveksle adresserom (antall adresser vs. antall bit) (§#3); tro et program er bundet til implementasjonen; blande Harvard og von Neumann; tro RISC har mange adresseringsmodi.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 4.2: RISC-V-registre og instruksjonsformater

- **id:** `tdt4160-4-2` · **number:** 4.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-4-1` · **kapitteltype:** teori
- **description:** RISC-V-registerfilen (x0–x31 + ABI-navn), de sentrale instruksjonsformatene (R/I/S/B/U/J) og hvordan feltene (opcode, funct, rd, rs1, rs2, immediate) bygger opp en instruksjon.
- **Eksamensbelegg:** Sjanger F, 100 %-blokk (moderniser fra arkivets «klassifiser instruksjoner etter antall adresser»). Prioritet: **perfekt**.
- **Innholdskontrakt:** `definition`/`theorem` **RISC-V-formatene** (instruksjonskontrakter): **R-type** (register-register: `add rd, rs1, rs2`), **I-type** (immediate/load: `addi`, `lw`), **S-type** (store: `sw`), **B-type** (betinget hopp: `beq`, `bne`), **U/J-type** (kort). Felt: opcode, funct3/funct7, rd, rs1, rs2, immediate. `theorem` **instruksjonsklassifisering**: 0/1/2/3-adresse-taksonomien og hvor RISC-V ligger (register-register, 3-operand). **Notasjons- og begrepsliste:** `x0`–`x31` + ABI-navn (`zero`, `ra`, `sp`, `a0`…), R/I/S/B/U/J-format, opcode/funct/rd/rs1/rs2/imm.
- **Oppgavesjangre:** F (R2/R1). Mønstereksempel (R2): «Hvilket instruksjonsformat har `addi x5, x6, 12`, og hvilke felt inneholder det?» (I-type: opcode, rd, rs1, funct3, imm.)
- **Typiske feil:** Blande formatene (R vs. I vs. S); glemme at `x0` alltid er 0; forveksle rs1/rs2/rd-plassering; blande immediate og register-operander.
- **Quiz: 18 · Flashcards: 20**

#### Kapittel 4.3: Adresseringsmodi og RISC-V-assembly

- **id:** `tdt4160-4-3` · **number:** 4.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-4-2` · **kapitteltype:** teori
- **description:** RISC-V-adresseringsmodiene (immediate, register, base+offset for load/store, PC-relativ for branch), og hvordan man skriver enkel RISC-V-assembly for aritmetikk, minneaksess og hopp.
- **Eksamensbelegg:** Sjanger F, 100 %-blokk (identifiser adresseringsmodus er fast). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **adresseringsmodi i RISC-V**: **immediate** (`addi x5,x6,10`), **register** (`add x5,x6,x7`), **base + offset** for load/store (`lw x5, 8(x6)` → adresse `x6+8`), **PC-relativ** for branch (`beq` hopper `PC + imm`). `theorem` **assembly-grunnmønstre**: aritmetikk (`add/sub/addi`), minne (`lw/sw`), sammenligning+hopp (`beq/bne/blt`), skift (`slli/srli`). **Notasjons- og begrepsliste:** immediate/register/base+offset/PC-relativ, `lw`/`sw`-syntaks `offset(base)`, `beq`/`bne`/`blt`, `slli`/`srli`.
- **Oppgavesjangre:** F (R2/R1). Mønstereksempel (R2): «Hvilken adresseringsmodus bruker `lw x5, 12(x8)`, og hva blir den effektive adressen?» (Base + offset; `x8 + 12`.)
- **Typiske feil:** Forveksle base+offset og immediate; tro `lw` tar en absolutt adresse; blande register- og immediate-operander; feil på PC-relativ branch-mål.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 4.4: Assembly-trace — sluttverdi, flagg og betinget hopp

- **id:** `tdt4160-4-4` · **number:** 4.4 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4160-4-3` · **kapitteltype:** teori
- **description:** Trace en RISC-V-kodesnutt linje for linje gitt startverdier i registre og minne: oppgi sluttverdien i et register (hex), avgjør om et betinget hopp tas, og håndter løkker (teller + `bne`).
- **Eksamensbelegg:** Sjanger G, **100 %** (R1 — «regn ut sluttverdi i register i hex»). En av de fire poengmagnetene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **trace-prosedyren**: 1) skriv opp starttilstand (registre + minne); 2) gå **linje for linje**, oppdater tilstanden; 3) ved `beq/bne/blt`: avgjør om betingelsen er sann og om hoppet tas — **bare den siste sammenligningen før hoppet gjelder**; 4) løkker: følg telleren til betingelsen bryter; 5) oppgi sluttverdi i **hex**. `text` at RISC-V bruker eksplisitt sammenligning i branch (`beq x5,x6,mål`), ikke et separat flaggregister som eldre ISA-er — merk skillet fra arkivets Z-flagg-maskin. **Notasjons- og begrepsliste:** trace, starttilstand, `beq`/`bne`/`blt`, løkketeller, hex-sluttverdi.
- **Oppgavesjangre:** G (R1). Mønstereksempel (R1): «Trace: `addi x5,x0,3` / `addi x6,x0,0` / L: `add x6,x6,x5` / `addi x5,x5,-1` / `bne x5,x0,L`. Hva er `x6` til slutt (hex)?» (`3+2+1 = 6 = 0x6`.)
- **Typiske feil:** Stoppe tracen for tidlig / feil løkkeantall; avgjøre hopp på feil sammenligning (§ typiske feil #7-analog); glemme at `x0` alltid er 0; oppgi svar i desimal der hex kreves.
- **Quiz: 20 · Flashcards: 16**

#### Kapittel 4.5: DRILL — RISC-V-trace og instruksjonsklassifisering

- **id:** `tdt4160-4-5` · **number:** 4.5 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4160-4-4` · **kapitteltype:** drill
- **description:** Full drill på sjanger F+G: klassifiser instruksjoner (format, adresseringsmodus), og trace RISC-V-kodesnutter (inkl. løkker) til hex-sluttverdi — de to 100 %-gjengangerne i ISA-oppgaven.
- **Eksamensbelegg:** Sjanger F/G, 100 % (R1). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **klassifiser**: format (R/I/S/B), adresseringsmodus (immediate/register/base+offset/PC-relativ); 2) **trace**: starttilstand → linje for linje → håndter branch/løkke → **hex-sluttverdi**; 3) vis mellomtilstanden ryddig (register-tabell per steg). Sensor-kommentert case med margnotat om at alternative korrekte trace-veier godtas og at typo i oppgaveteksten leses velvillig. 12–16 oppgaver (R1) som roterer klassifisering + trace, inkl. løkker.
- **Oppgavesjangre:** F/G. Mønstereksempel (R1): «Trace løkken som summerer `x0..x4` og oppgi resultatet i `a0` (hex).»
- **Typiske feil:** Feil løkkeantall; hopp på feil sammenligning; glemme `x0 = 0`; blande instruksjonsformatene; desimal der hex kreves.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 4:** 4 prøver (RISC-V: ISA og assembly)
1. Prøve 4.A (20 min): RISC-trekk + Harvard + adresserom (sjanger F/A, R2/R1).
2. Prøve 4.B (25 min): Instruksjonsformater R/I/S/B + felt (sjanger F, R1/R2).
3. Prøve 4.C (25 min): Adresseringsmodi + effektiv adresse (sjanger F, R1/R2).
4. Prøve 4.D (30 min): Assembly-trace til hex-sluttverdi, inkl. løkke (sjanger G, R1).

---

### Del 5 — Prosessoren: datasti og pipeline

> Del 5 er den **moderne erstatningen for IJVM-sporet** (Patterson-tradisjonen): von
> Neumann-modellen, **enkelsyklus RISC-V-datasti (NYTT)** og **pipelinet datasti** med hazards
> (RAW). 0 direkte datasti-forekomster i arkivet, men eksplisitt i dagens læringsutbytte —
> vekt **(verifiser)**. Kapittel 5.4 er drillkapitlet.

#### Kapittel 5.1: Von Neumann-modellen og datastiens komponenter

- **id:** `tdt4160-5-1` · **number:** 5.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4160-4-2` · **kapitteltype:** teori
- **description:** Stored-program-prinsippet, von Neumann-modellens fem enheter (minne, kontroll, ALU, inn, ut), og hvordan disse settes sammen til en datasti (register, ALU, minne, kontroll) som utfører en instruksjon.
- **Eksamensbelegg:** Sjanger A/H-grunnlag. «Von Neumann / tilordne enheter til memory/control/ALU» forekom (33 %). Prioritet: **kunne** (byggende + kortsvar).
- **Innholdskontrakt:** `definition` **stored-program / von Neumann**: instruksjoner og data ligger i samme minne; de fem enhetene (minne, kontrollenhet, ALU, input, output). `text` **datasti (datapath)** vs. **kontroll**: datastien er dataveiene (registerfil, ALU, minne, mux-er); kontrollenheten genererer styresignalene. `definition` PC (program counter), registerfil, instruksjonsminne, dataminne. **Notasjons- og begrepsliste:** stored-program, von Neumann-enhetene, datapath/kontroll, PC, registerfil, ALU.
- **Oppgavesjangre:** A/H (R2). Mønstereksempel (R2): «Tilordne disse komponentene til von Neumann-enhetene: registerfil, adder, RAM.» (ALU, ALU, minne.)
- **Typiske feil:** Blande datapath (dataveier) og kontroll (styresignaler); tro von Neumann har separate instruksjons-/dataminner (det er Harvard); glemme PC-ens rolle.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 5.2: Enkelsyklus RISC-V-datasti *(NYTT)*

- **id:** `tdt4160-5-2` · **number:** 5.2 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-5-1` · **kapitteltype:** teori
- **description:** Hvordan en enkelsyklus-datasti utfører én RISC-V-instruksjon i én klokkeperiode: instruksjonens vei gjennom fetch → decode/registerlesing → ALU → minne → tilbakeskriving, og hvordan kontrollsignalene styrer mux-ene.
- **Eksamensbelegg:** Sjanger H (nytt datasti-pensum). 0 i arkivet, eksplisitt i læringsutbyttet — vekt **(verifiser)**. Prioritet: **kunne** (nytt kjernepensum).
- **Innholdskontrakt:** `theorem` **enkelsyklus-flyten**: 1) **fetch** (hent instruksjon fra `PC`); 2) **decode + les registre**; 3) **ALU** (regn resultat/adresse); 4) **minne** (`lw`/`sw`); 5) **write-back** (skriv til `rd`); alt på **én klokkeperiode**. `theorem` **klokkebegrensning**: perioden må romme **den lengste veien** gjennom datastien (`lw` er ofte lengst: fetch+les+ALU+minne+skriv) → `T_klokke ≥ Δ(sum forsinkelser på lengste vei)`. `text` at kontrollsignalene (ALU-op, MemRead/Write, RegWrite, mux-valg) følger av instruksjonstypen. **Notasjons- og begrepsliste:** fetch/decode/execute/memory/write-back, `PC`, kontrollsignaler, kritisk (lengste) vei, `T_klokke`.
- **Oppgavesjangre:** H (R2/R1). Mønstereksempel (R1): «Datastitrinnene har forsinkelser 200/100/150/250/100 ps. Hva er minste klokkeperiode for en enkelsyklus-CPU der `lw` bruker alle fem?» (`Σ = 800 ps`.)
- **Typiske feil:** Sette klokka etter **summen av alle instruksjoner** i stedet for lengste vei for én instruksjon; tro alle instruksjoner bruker alle trinn (`add` hopper over minne); blande datapath og kontroll.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.3: Pipelinet datasti og hazards

- **id:** `tdt4160-5-3` · **number:** 5.3 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-5-2` · **kapitteltype:** teori
- **description:** 5-stegs pipeline (IF/ID/EX/MEM/WB) med overlappende instruksjoner, hvorfor pipelining øker gjennomstrømning uten å redusere latens per instruksjon, og hazards — særlig data-hazards (RAW-avhengigheter) og kontroll-hazards.
- **Eksamensbelegg:** Sjanger H (nytt datasti-pensum + arkivets RAW ~33 %). Vekt **(verifiser)**. Prioritet: **kunne** (nytt kjernepensum; RAW er belagt).
- **Innholdskontrakt:** `definition` **pipeline (5 steg)**: IF (fetch), ID (decode/les), EX (ALU), MEM (minne), WB (write-back); instruksjoner overlapper → klokka settes av **tregeste trinn**, ikke summen. `definition` **data-hazard (RAW, *read-after-write*)**: en instruksjon trenger et resultat som en tidligere instruksjon ennå ikke har skrevet tilbake → stall eller forwarding. `definition` **kontroll-hazard**: branch avgjøres sent → usikkerhet om neste instruksjon. `text` at pipeline-CPI ≥ 1 pga. hazards (ikke selve oppdelingen). **Notasjons- og begrepsliste:** IF/ID/EX/MEM/WB, RAW-avhengighet, data-/kontroll-hazard, stall, forwarding, CPI ≥ 1.
- **Oppgavesjangre:** H (R2). Mønstereksempel (R2): «Forklar kort hva en RAW-hazard er, og gi et RISC-V-eksempel.» (`add x5,x6,x7` fulgt av `sub x8,x5,x9` — `x5` ikke skrevet ennå.)
- **Typiske feil:** Tro pipelining reduserer latens per instruksjon (den øker **gjennomstrømning**); tro CPI = 1 uansett (hazards gir ≥ 1); blande data- og kontroll-hazard; sette pipeline-klokka etter summen av trinn.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 5.4: DRILL — Datasti-analyse og pipeline-forløp

- **id:** `tdt4160-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4160-5-3` · **kapitteltype:** drill
- **description:** Full drill: regn minste klokkeperiode for enkelsyklus-datasti (lengste vei), sett opp pipeline-forløp (instruksjon × sykel), lokaliser RAW-hazards, og forklar hvorfor pipeline-klokka bestemmes av tregeste trinn.
- **Eksamensbelegg:** Sjanger H (datasti + pipeline). Vekt **(verifiser)**. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **enkelsyklus**: klokke = lengste vei (typisk `lw`); 2) **pipeline-forløp**: tegn instruksjon×sykel-diagram (IF/ID/EX/MEM/WB); 3) **hazard-lokalisering**: finn RAW (register skrevet av tidligere instruksjon, lest før WB); 4) **klokke**: tregeste trinn; 5) korrekt begrunnet «umulig å klokke raskere» der et trinn setter grensen. Sensor-kommentert case med margnotat om lengste-vei vs. tregeste-trinn-skillet. 10–16 oppgaver (R1/R2/R3).
- **Oppgavesjangre:** H. Mønstereksempel (R1): «Pipeline-trinnene har forsinkelser 180/120/170/200/110 ps. Hva er maks klokkefrekvens?» (`1/200 ps = 5 GHz`.)
- **Typiske feil:** Enkelsyklus-klokke etter feil (ikke lengste) vei; pipeline-klokke etter summen; overse RAW; tro pipeline gir CPI = 1.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 5:** 4 prøver (Prosessoren: datasti og pipeline)
1. Prøve 5.A (20 min): Von Neumann-enheter + datapath/kontroll (sjanger A/H, R2).
2. Prøve 5.B (25 min): Enkelsyklus-datasti — klokke fra lengste vei (sjanger H, R1).
3. Prøve 5.C (25 min): Pipeline-forløp + RAW-hazard-lokalisering (sjanger H, R2/R3).
4. Prøve 5.D (25 min): Blandet datasti + pipeline-klokke (H, R1/R2).

---

### Del 6 — Minne: adressedekoding og minnekart

> Del 6 rommer den mest pålitelige konkrete oppgaven i faget: **adressedekoding → minnekart (B,
> 100 %, R3)**. Kandidaten får uttelling for **selve minnekartet** (må tegnes). Delen dekker
> også buss (arbitrering/daisy chain ~67 %) og I/O (avbrudd vs. busy-waiting ~33 %). Kapittel
> 6.4 er det store drillkapitlet. **Den største delen i boka** (jf. prompten).

#### Kapittel 6.1: Adressebuss, chip-select og adressedekoding

- **id:** `tdt4160-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `tdt4160-1-1` · **kapitteltype:** teori
- **description:** Hvordan en adressebuss og chip-select-logikk (AND/OR/NAND/INV på adresselinjene A0–A15) velger hvilken brikke som svarer, og hvordan man dekoder CS-uttrykket til et adresseområde i hex.
- **Eksamensbelegg:** Sjanger B (grunnlag), 100 %-blokk. CS-dekoding er forutsetningen for minnekartet. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **CS-dekoding**: en brikke er aktiv når dens chip-select-uttrykk (funksjon av adresselinjene) er sant; regn ut hvilke adresser (i **hex**) som gir CS aktiv → det er brikkens adresseområde. `text` at høye adressebit typisk velger brikke, lave adressebit velger celle innad; adresserom `2ⁿ` per delkomponent. **Notasjons- og begrepsliste:** adressebuss, A0–A15, chip-select (CS), CS-uttrykk, hex-adresseområde, høye/lave adressebit.
- **Oppgavesjangre:** B (R1/R3). Mønstereksempel (R1): «En ROM har `CS = A15·A14` (aktiv høy). Hvilket adresseområde dekker den på en 16-bits adressebuss?» (`0xC000–0xFFFF`.)
- **Typiske feil:** Regne CS-uttrykket feil vei; blande høye/lave adressebit; feil hex-grense; glemme at aktiv-lav CS inverterer betingelsen.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 6.2: Minnekart — tegn område, ledig plass og overlapp

- **id:** `tdt4160-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `tdt4160-6-1` · **kapitteltype:** teori
- **description:** Sett sammen adresseområdene til flere brikker (RAM/ROM/sensor/alarm) til et komplett minnekart, tegn det som en tabell (adresseområde ↔ enhet), identifiser ledig plass, og drøft om overlapp er problematisk.
- **Eksamensbelegg:** Sjanger B, **100 %** (R3 — minnekartet MÅ tegnes for uttelling). En av de fire poengmagnetene. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **minnekart-tegneprosedyren (R3)**: 1) dekod hver brikkes CS → adresseområde (hex); 2) **tegn tabell** med kolonner adresseområde / enhet, sortert på adresse; 3) marker **ledig plass** (adresser ingen brikke dekker); 4) sjekk **overlapp**; 5) drøft om overlapp er et problem — **overlapp mellom en read-only-enhet (sensor) og en write-only-enhet (alarm) gir ingen konflikt** (begrunn ut fra R/W-retning). `warning` at «umulig/uproblematisk» er et gyldig, poenggivende svar der R/W-retningene ikke kolliderer. **Notasjons- og begrepsliste:** minnekart-tabell, adresseområde (hex), ledig plass, overlapp, read-only/write-only, R/W-retning.
- **Oppgavesjangre:** B (R3). Mønstereksempel (R3): «Tegn minnekartet for RAM `0x0000–0x7FFF`, sensor (read-only) `0x8000–0x8FFF` og alarm (write-only) `0x8000–0x8FFF`. Er overlappet et problem?» (Tegn tabell; overlapp uproblematisk — motsatt R/W-retning.)
- **Typiske feil:** **Bare liste områdene uten å tegne kartet** (R3-tap); tro alt overlapp er en konflikt (§ typiske feil #6-analog); glemme ledig plass; feil hex-grenser.
- **Quiz: 20 · Flashcards: 18**

#### Kapittel 6.3: Buss, arbitrering og I/O

- **id:** `tdt4160-6-3` · **number:** 6.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-6-1` · **kapitteltype:** teori
- **description:** Bussarbitrering (daisy chain — prioritet ved samtidige forespørsler), synkron vs. asynkron buss, og I/O-metodene busy-waiting (polling) vs. avbruddsdrevet (interrupt vector) — de faste buss-/I/O-kortsvarene.
- **Eksamensbelegg:** Sjanger A: buss/arbitrering ~67 %, I/O avbrudd vs. busy-waiting ~33 %. Prioritet: **kunne** (høyfrekvent støtte-kortsvar).
- **Innholdskontrakt:** `definition` **daisy chain-arbitrering**: enheter kobles i kjede; enheten nærmest arbitreren har høyest prioritet ved samtidig forespørsel. `definition` **synkron vs. asynkron buss**: synkron styres av felles klokke; asynkron bruker handshake. `definition` **I/O**: **busy-waiting/polling** (CPU spør gjentatt) vs. **avbruddsdrevet (interrupt)** (enheten varsler; interrupt vector peker på håndterer) — avbrudd frigjør CPU. **Notasjons- og begrepsliste:** buss, daisy chain, prioritet, synkron/asynkron, handshake, busy-waiting/polling, avbrudd/interrupt vector.
- **Oppgavesjangre:** A (R2). Mønstereksempel (R2): «Ved daisy chain-arbitrering: hvilken enhet vinner når to ber om bussen samtidig, og hvorfor?» (Den nærmest arbitreren — høyest prioritet i kjeden.)
- **Typiske feil:** Blande daisy chain-prioritet (nærmest = høyest); tro busy-waiting frigjør CPU (det gjør avbrudd); blande synkron og asynkron buss.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 6.4: DRILL — Adressedekoding og minnekart-tegning

- **id:** `tdt4160-6-4` · **number:** 6.4 · **estimatedMinutes:** 85 · **prerequisites:** `tdt4160-6-2` · **kapitteltype:** drill
- **description:** Full drill på fagets mest pålitelige oppgave: dekod CS-logikk til hex-områder, tegn komplette minnekart, finn ledig plass, og drøft overlapp ut fra R/W-retning.
- **Eksamensbelegg:** Sjanger B, 100 % (R3 — minnekartet gir uttelling). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **dekod** hver CS → adresseområde (hex); 2) **tegn** minnekart-tabellen (adresseområde ↔ enhet), sortert; 3) **ledig plass**: marker udekkede adresser; 4) **overlapp**: sjekk, og drøft ut fra read-only/write-only (motsatt R/W-retning = uproblematisk); 5) svar «uproblematisk/umulig konflikt» der modellen tilsier det. Sensor-kommentert case med margnotat om at **selve kartet** gir poeng og at R/W-drøftingen er full uttelling. 12–16 oppgaver med varierte brikkesett og CS-uttrykk.
- **Oppgavesjangre:** B. Mønstereksempel (R3): «Tegn minnekartet for fire brikker med gitte CS-uttrykk, marker ledig plass, og avgjør om noe overlapp er problematisk.»
- **Typiske feil:** Ikke tegne kartet; feil hex-grenser; overse ledig plass; tro alt overlapp er konflikt.
- **Quiz: 24 · Flashcards: 8**

**Prøve-kvote Del 6:** 4 prøver (Minne: adressedekoding og minnekart)
1. Prøve 6.A (25 min): CS-dekoding → adresseområde i hex (sjanger B, R1).
2. Prøve 6.B (30 min): Tegn minnekart + ledig plass + overlapp-drøfting (sjanger B, R3).
3. Prøve 6.C (20 min): Buss/arbitrering (daisy chain) + I/O avbrudd vs. busy-waiting (sjanger A, R2).
4. Prøve 6.D (30 min): Komplett minnekart-oppgave med R/W-drøfting (B, R3).

---

### Del 7 — Cache og minnehierarki

> Del 7 rommer den ene av de to 83 %-regnesjangrene: **cache-aksesstid `t̄ = c + (1−h)·m` (H,
> R1)** — lav vanskegrad, høy pålitelighet, men kandidaten MÅ vise formel + innsatte tall.
> Pluss lokalitet (temporal/spatial, ~33 %). Kapittel 7.3 er drillkapitlet.

#### Kapittel 7.1: Minnehierarki og lokalitet

- **id:** `tdt4160-7-1` · **number:** 7.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4160-1-1` · **kapitteltype:** teori
- **description:** Minnehierarkiet (register → cache → hovedminne → disk) og prinsippet om lokalitet (temporal og spatial) som gjør cache lønnsomt, pluss kostnads-/hastighetsavveiningen mellom nivåene.
- **Eksamensbelegg:** Sjanger A/H-grunnlag. Lokalitet ~33 % (alltid koblet til cache). Prioritet: **kunne** (byggende + kortsvar).
- **Innholdskontrakt:** `definition` **minnehierarki**: raskt/lite/dyrt øverst (register, cache), tregt/stort/billig nederst (disk); hvert nivå cacher det under. `definition` **temporal lokalitet** (nylig brukt data brukes snart igjen) vs. **spatial lokalitet** (data nær nylig brukt data brukes snart). `text` hvorfor lokalitet gjør cache effektivt. **Notasjons- og begrepsliste:** minnehierarki, register/cache/hovedminne/disk, temporal/spatial lokalitet, treff (hit)/bom (miss).
- **Oppgavesjangre:** A/H (R2). Mønstereksempel (R2): «Forklar kort forskjellen på temporal og spatial lokalitet med et eksempel.» (Løkkevariabel = temporal; array-gjennomgang = spatial.)
- **Typiske feil:** Bytte om temporal og spatial; tro cache hjelper uten lokalitet; feil rekkefølge i hierarkiet.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 7.2: Cache og gjennomsnittlig aksesstid

- **id:** `tdt4160-7-2` · **number:** 7.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-7-1` · **kapitteltype:** teori
- **description:** Cache-treff/bom, trefforholdstall (hit ratio h), og gjennomsnittlig aksesstid for ett cache-nivå: `t̄ = c + (1−h)·m` — den garanterte ytelsesregningen, alltid med formel + innsatte tall.
- **Eksamensbelegg:** Sjanger H, **~83 %** (R1). Kjerneregning, lav vanskegrad — men formel + tall kreves. Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **gjennomsnittlig aksesstid (ett nivå)**: `t̄ = c + (1 − h)·m`, der `c` = cache-tid, `m` = hovedminnetid, `h` = trefforholdstall (hit ratio); **`(1−h)` er bom-raten**. `text` intuisjon: alltid cache-tid `c`, pluss straffen `m` bare ved bom `(1−h)`. `text` utvidelse til flere nivåer (bør kjenne). **Notasjons- og begrepsliste:** `c`, `m`, `h` (hit ratio), `(1−h)` (miss ratio), `t̄`, treff/bom.
- **Oppgavesjangre:** H (R1). Mønstereksempel (R1): «Cache-tid 2 ns, hovedminne 60 ns, hit ratio 0,95. Regn gjennomsnittlig aksesstid.» (`2 + (1−0,95)·60 = 5 ns`.)
- **Typiske feil:** **Formelen snudd** — bruke `h` i stedet for `(1−h)`, eller glemme å gange bom-raten med `m` (§ typiske feil #2); gi bart tallsvar uten formel; blande `c` og `m`.
- **Quiz: 20 · Flashcards: 20**

#### Kapittel 7.3: DRILL — Cache-aksesstid og minnehierarki-kost

- **id:** `tdt4160-7-3` · **number:** 7.3 · **estimatedMinutes:** 70 · **prerequisites:** `tdt4160-7-2` · **kapitteltype:** drill
- **description:** Full drill på cache-aksesstid: `t̄ = c + (1−h)·m` med varierte tall og enheter, hierarki-kost, og hvordan hit ratio påvirker gjennomsnittstiden — alltid med formel + innsatte tall.
- **Eksamensbelegg:** Sjanger H, 83 % (R1). Prioritet: **perfekt**.
- **Innholdskontrakt (løsningsoppskrift):** 1) skriv `t̄ = c + (1−h)·m` symbolsk; 2) sett inn tallene (pass på **enheter** ns/µs); 3) regn; 4) tolk (hvor mye straffer bom?); 5) evt. finn `h` gitt `t̄` (løs formelen andre veien). Sensor-kommentert case med margnotat om at bart tall er svakt og at `(1−h)` er den vanligste fella. 10–16 oppgaver (R1) med varierte tall/enheter, inkl. «finn hit ratio».
- **Oppgavesjangre:** H. Mønstereksempel (R1): «Hvilken hit ratio gir `t̄ = 4 ns` når `c = 1 ns`, `m = 50 ns`?» (`4 = 1 + (1−h)·50 → h = 0,94`.)
- **Typiske feil:** `(1−h)` snudd (§#2); enhetsfeil; bart tall uten formel; blande `c` og `m`.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 7:** 4 prøver (Cache og minnehierarki)
1. Prøve 7.A (20 min): Minnehierarki + lokalitet (temporal/spatial) (sjanger A/H, R2).
2. Prøve 7.B (25 min): Cache-aksesstid `c+(1−h)·m` — formel + tall (sjanger H, R1).
3. Prøve 7.C (20 min): Finn hit ratio gitt `t̄` (invers) (sjanger H, R1).
4. Prøve 7.D (25 min): Blandet cache-regning + enheter + tolkning (H, R1).

---

### Del 8 — Virtuelt minne *(NYTT — 0 i arkivet)*

> Del 8 er **helt nytt pensum** (0 forekomster i arkivet, men i dagens minnesystem-pensum):
> paging, sidetabell, TLB og virtuell→fysisk oversettelse. Vekt for 2026 er **(verifiser)**.
> Kapittel 8.3 er drillkapitlet.

#### Kapittel 8.1: Virtuelt minne og paging

- **id:** `tdt4160-8-1` · **number:** 8.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-7-1` · **kapitteltype:** teori
- **description:** Hva virtuelt minne er og hvorfor det finnes (isolasjon/beskyttelse + illusjon av stort sammenhengende minne), paging, sidetabellen (ligger i hovedminne), og oppdelingen av en adresse i sidenummer + offset.
- **Eksamensbelegg:** Sjanger H/A (nytt pensum). 0 i arkivet — vekt **(verifiser)**. Prioritet: **kunne** (nytt kjernepensum).
- **Innholdskontrakt:** `definition` **virtuelt minne**: gir **isolasjon/beskyttelse** (to prosesser kan bruke samme virtuelle adresse uten konflikt) og illusjonen av stort sammenhengende minne; **ikke primært mer lagring**. `definition` **paging**: minnet deles i **sider (pages)** av fast størrelse; sidetabellen mapper virtuelt sidenummer → fysisk rammenummer; **sidetabellen ligger i hovedminnet** (ikke i cache). `theorem` **adresseoppdeling**: `offset-bit = log₂(sidestørrelse)`; `sidenummerbit = adressebredde − offset-bit`. **Notasjons- og begrepsliste:** virtuell/fysisk adresse, side (page)/ramme (frame), sidetabell (i hovedminne), sidestørrelse, offset-bit, sidenummerbit, isolasjon/beskyttelse.
- **Oppgavesjangre:** H/A (R1/R2). Mønstereksempel (R1): «32-bits virtuelle adresser, sidestørrelse 4 KiB. Hvor mange offset-bit og sidenummerbit?» (`offset = log₂4096 = 12`; `sidenummer = 32 − 12 = 20`.)
- **Typiske feil:** Tro virtuelt minne primært gir mer lagring (det gir isolasjon); plassere sidetabellen i cache (den ligger i hovedminne); feil offset/sidenummer-oppdeling; ikke bruke `log₂`.
- **Quiz: 16 · Flashcards: 18**

#### Kapittel 8.2: TLB og adresseoversettelse

- **id:** `tdt4160-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-8-1` · **kapitteltype:** teori
- **description:** TLB (translation lookaside buffer) som liten, ofte fullt assosiativ cache for adresseoversettelser, hele virtuell→fysisk-oversettelsen (TLB-treff/bom → sidetabelloppslag), og hvorfor TLB gjør paging rask.
- **Eksamensbelegg:** Sjanger H/A (nytt pensum). Vekt **(verifiser)**. Prioritet: **kunne**.
- **Innholdskontrakt:** `definition` **TLB**: liten, ofte **fullt assosiativ** cache som holder nylige virtuelle→fysiske oversettelser; TLB-treff sparer et sidetabelloppslag i hovedminnet. `theorem` **oversettelsesflyten**: 1) del virtuell adresse i sidenummer + offset; 2) slå opp sidenummer i TLB; 3) TLB-treff → fysisk ramme direkte; TLB-bom → slå opp i sidetabellen (hovedminne), fyll TLB; 4) sett sammen fysisk ramme + offset → fysisk adresse. **Notasjons- og begrepsliste:** TLB, fullt assosiativ, TLB-treff/bom, sidetabelloppslag, virtuell→fysisk oversettelse, ramme + offset.
- **Oppgavesjangre:** H/A (R2/R1). Mønstereksempel (R2): «Forklar kort hva TLB gjør og hvorfor en TLB-bom er dyrere enn et TLB-treff.» (Treff = fysisk ramme direkte; bom = ekstra sidetabelloppslag i hovedminne.)
- **Typiske feil:** Tro TLB er direktemappet (typisk fullt assosiativ); tro TLB lagrer data (den lagrer oversettelser); plassere sidetabellen i cache; blande ramme og offset.
- **Quiz: 18 · Flashcards: 18**

#### Kapittel 8.3: DRILL — Virtuelt minne og adresseoversettelse

- **id:** `tdt4160-8-3` · **number:** 8.3 · **estimatedMinutes:** 65 · **prerequisites:** `tdt4160-8-2` · **kapitteltype:** drill
- **description:** Full drill: del adresser i sidenummer + offset (bit-regning), utfør virtuell→fysisk oversettelse via TLB/sidetabell, og svar på TLB-/sidetabell-fakta.
- **Eksamensbelegg:** Sjanger H/A (nytt pensum). Vekt **(verifiser)**. Prioritet: **kunne**.
- **Innholdskontrakt (løsningsoppskrift):** 1) **bit-regning**: `offset = log₂(sidestørrelse)`, `sidenummer = adressebredde − offset`; 2) **oversettelse**: sidenummer → TLB → (treff: ramme; bom: sidetabell) → fysisk adresse = ramme·sidestørrelse + offset; 3) **fakta**: TLB fullt assosiativ, sidetabell i hovedminne. Sensor-kommentert case med margnotat om `log₂`-bit-regningen og TLB-flyten. 10–16 oppgaver (R1/R2).
- **Oppgavesjangre:** H/A. Mønstereksempel (R1): «Fysisk minne 1 GiB, sidestørrelse 4 KiB. Hvor mange rammenummerbit?» (`30 − 12 = 18`.)
- **Typiske feil:** Runde/feil `log₂`; sidetabell i cache; direktemappet TLB; feil sammensetting ramme + offset.
- **Quiz: 20 · Flashcards: 8**

**Prøve-kvote Del 8:** 4 prøver (Virtuelt minne)
1. Prøve 8.A (20 min): Virtuelt minne + paging + adresseoppdeling (sjanger H/A, R1/R2).
2. Prøve 8.B (25 min): TLB + virtuell→fysisk oversettelse (sjanger H/A, R2/R1).
3. Prøve 8.C (20 min): Bit-regning offset/sidenummer/ramme (sjanger H, R1).
4. Prøve 8.D (25 min): Blandet virtuelt minne + TLB-fakta (H/A, R1/R2).

---

### Del 9 — Ytelse, CPI og parallellisme

> Del 9 rommer den andre 83 %-regnesjangeren: **pipeline-klokke og utføringstid (H, R1)** —
> `f = 1/(tregeste trinn)` og `T = (k + N − 1)·T_klokke`. Pluss CPU-tid/CPI/Amdahl (nytt
> Patterson-pensum, (verifiser)) og det store **parallellisme-kortsvarlaget** (Flynn, SIMD,
> superscalar, ILP, CMP, Moores lov, latency hiding — ~83 % R2). Kapittel 9.4 er drillkapitlet.

#### Kapittel 9.1: Pipeline-klokke og utføringstid

- **id:** `tdt4160-9-1` · **number:** 9.1 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-5-3` · **kapitteltype:** teori
- **description:** Maksimal klokkefrekvens for en pipeline (`f = 1/(forsinkelse i tregeste trinn)`), utføringstid for N instruksjoner i en k-trinns pipeline (`T = (k + N − 1)·T_klokke`), og hvorfor pipeline uten samlebånd = summen av alle trinn.
- **Eksamensbelegg:** Sjanger H, **~83 %** (R1). Prioritet: **perfekt**.
- **Innholdskontrakt:** `theorem` **maks klokkefrekvens**: `f_maks = 1/(forsinkelse i tregeste trinn)` — **ikke** summen eller gjennomsnittet; uten pipeline er sykeltiden **summen** av alle trinn. `theorem` **utføringstid**: en k-trinns pipeline med N instruksjoner (uten hazards) bruker `k + N − 1` klokkeperioder → `T = (k + N − 1)·T_klokke`. `text` intuisjon: `k−1` sykler for å fylle røret, deretter én ferdig per sykel. **Notasjons- og begrepsliste:** `f = 1/t`, tregeste trinn, `k` (antall trinn), `N` (antall instruksjoner), `k + N − 1`, `T_klokke`, fylling.
- **Oppgavesjangre:** H (R1). Mønstereksempel (R1): «En 5-trinns pipeline (tregeste trinn 250 ps) utfører 100 instruksjoner. Regn maks frekvens og total utføringstid.» (`f = 1/250 ps = 4 GHz`; `T = (5+99)·250 ps = 26 ns`.)
- **Typiske feil:** **Klokke fra feil trinn** — summen/gjennomsnittet i stedet for tregeste (§ typiske feil #1); glemme fyllingen (`k−1`); blande pipeline og ikke-pipeline (sum); bart tall uten formel.
- **Quiz: 18 · Flashcards: 16**

#### Kapittel 9.2: CPU-tid, CPI og Amdahls lov

- **id:** `tdt4160-9-2` · **number:** 9.2 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-9-1` · **kapitteltype:** teori
- **description:** Ytelsesligningen `CPU-tid = IC × CPI × T_klokke`, hva CPI er, og Amdahls lov for hvor mye en delforbedring hjelper totalt — Patterson-tradisjonens ytelsesapparat (nytt vs. arkivet).
- **Eksamensbelegg:** Sjanger H. 0 i arkivet (Patterson-pensum) — vekt **(verifiser)**; bygges inn siden dagens pensum trolig bruker det. Prioritet: **kunne**.
- **Innholdskontrakt:** `theorem` **ytelsesligningen**: `CPU-tid = IC × CPI × T_klokke` (IC = antall instruksjoner, CPI = sykler per instruksjon, `T_klokke` = 1/frekvens). `theorem` **Amdahls lov**: speedup = `1 / ((1 − p) + p/s)` der `p` er andelen som forbedres og `s` forbedringsfaktoren — en delforbedring begrenses av den uforbedrede delen. `text` at datasti-forsinkelse (`Δw+Δx+Δy+Δz`) setter `T_klokke`. **Notasjons- og begrepsliste:** `IC`, `CPI`, `T_klokke`, CPU-tid, Amdahls lov, `p`/`s`/speedup, datasti-forsinkelse.
- **Oppgavesjangre:** H (R1/R2). Mønstereksempel (R1): «Et program har `IC = 10⁶`, `CPI = 2`, `T_klokke = 0,5 ns`. Regn CPU-tid.» (`10⁶ · 2 · 0,5 ns = 1 ms`.)
- **Typiske feil:** Blande CPI og `T_klokke`; tro en lokal forbedring gir global proporsjonal speedup (Amdahl); glemme IC; bart tall uten formel.
- **Quiz: 16 · Flashcards: 16**

#### Kapittel 9.3: Parallellisme — Flynn, superscalar, ILP og CMP

- **id:** `tdt4160-9-3` · **number:** 9.3 · **estimatedMinutes:** 50 · **prerequisites:** `tdt4160-5-3` · **kapitteltype:** teori
- **description:** Begrepsapparatet for parallellisme og skalering: Flynns taksonomi (SISD/SIMD/MISD/MIMD), superscalar vs. SIMD, ILP vs. CMP (multikjerne), Moores lov, energi ved overgang til CMP, og latency hiding — det store «forklar kort»-laget i «litt av hvert».
- **Eksamensbelegg:** Sjanger A, ~83 % (R2 — flere korte begrepssvar per sett). Billige, sikre poeng. Prioritet: **perfekt** (høyt poengutbytte per lest side).
- **Innholdskontrakt:** `definition` **Flynn**: SISD, **SIMD** (én instruksjon på mange dataelementer), MISD, MIMD. `definition` **superscalar** (flere funksjonelle enheter → flere instruksjoner per sykel) vs. **SIMD** (én instruksjon, mange data). `definition` **ILP** (instruction-level parallelism — **ikke** definert på ISA-nivå; samme ISA kan ha ulik ILP) vs. **CMP** (chip multiprocessor / multikjerne — processor-level parallelism); homogen vs. heterogen CMP. `definition` **Moores lov**, **energi** (hvorfor man går til CMP i stedet for høyere frekvens), **latency hiding**. **Notasjons- og begrepsliste:** Flynn (SISD/SIMD/MISD/MIMD), superscalar, ILP, CMP (homogen/heterogen), Moores lov, energi, latency hiding.
- **Oppgavesjangre:** A (R2). Mønstereksempel (R2): «Forklar kort forskjellen på superscalar og SIMD.» (Superscalar = flere funksjonelle enheter; SIMD = én instruksjon på mange dataelementer.)
- **Typiske feil:** Blande superscalar/SIMD/ILP (§ typiske feil #8); tro ILP er definert på ISA-nivå (det er mikroarkitektur); blande homogen/heterogen CMP; tro CMP primært øker klokkefrekvens.
- **Quiz: 18 · Flashcards: 22**

#### Kapittel 9.4: DRILL — Ytelsesregning (pipeline, CPI, Amdahl)

- **id:** `tdt4160-9-4` · **number:** 9.4 · **estimatedMinutes:** 75 · **prerequisites:** `tdt4160-9-3` · **kapitteltype:** drill
- **description:** Full drill på ytelse: pipeline-klokke og utføringstid (`1/tregeste`, `k+N−1`), CPU-tid via ytelsesligningen, Amdahl-speedup, og parallellisme-kortsvar — alltid med formel + innsatte tall.
- **Eksamensbelegg:** Sjanger H (regning) + A (parallellisme-kortsvar). Pipeline ~83 %. Prioritet: **perfekt** (pipeline) / **kunne** (CPI/Amdahl).
- **Innholdskontrakt (løsningsoppskrift):** 1) **pipeline-klokke**: `f = 1/(tregeste trinn)`; 2) **utføringstid**: `T = (k + N − 1)·T_klokke`; 3) **CPU-tid**: `IC × CPI × T_klokke`; 4) **Amdahl**: `1/((1−p) + p/s)`; 5) **kortsvar**: klassifiser Flynn/superscalar/ILP/CMP. Sensor-kommentert case med margnotat om tregeste-trinn-fella og at bart tall er svakt. 10–16 oppgaver (R1/R2).
- **Oppgavesjangre:** H/A. Mønstereksempel (R1): «Hvor mange klokkeperioder bruker en 6-trinns pipeline på 50 instruksjoner (uten hazards)?» (`6 + 49 = 55`.)
- **Typiske feil:** Klokke fra feil trinn (§#1); glemme fyllingen; Amdahl-feil (lokal → global); blande CPI/`T_klokke`; blande parallellisme-begrepene.
- **Quiz: 22 · Flashcards: 8**

**Prøve-kvote Del 9:** 4 prøver (Ytelse, CPI og parallellisme)
1. Prøve 9.A (25 min): Pipeline-klokke `1/tregeste` + utføringstid `k+N−1` (sjanger H, R1).
2. Prøve 9.B (20 min): CPU-tid `IC×CPI×T` + Amdahl (sjanger H, R1).
3. Prøve 9.C (20 min): Parallellisme-kortsvar — Flynn/superscalar/ILP/CMP (sjanger A, R2).
4. Prøve 9.D (25 min): Blandet ytelsesregning + parallellisme (H/A, R1/R2).

---

### Del 10 — Historisk appendiks: IJVM/mikroarkitektur *(«bør kjenne til»)*

> **⚠️ Historisk appendiks — trolig utgått pensum.** IJVM/Mic-1-mikroarkitekturen var 100 % i
> arkivet (2015–17, Tanenbaum), men er med stor sannsynlighet **erstattet av RISC-V-datasti**
> (Del 5) i dagens emne. Boka dekker den som **«bør kjenne til»** slik at leseren kan møte gamle
> eksamenssett uten å forvirres — men **driller den ikke** og markerer den tydelig som historisk.
> Vekt i 2026 antatt lav/null **(verifiser)**. Kun 2 kompakte kapitler.

#### Kapittel 10.1: Mikroarkitektur-konseptet og Mic-1/IJVM

- **id:** `tdt4160-10-1` · **number:** 10.1 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4160-5-1` · **kapitteltype:** teori (historisk)
- **description:** Hva en mikroarkitektur er (implementasjonen under ISA-en), og — historisk — Mic-1/IJVM-modellen med dens spesielle registre (MAR/MDR/MBR/PC/TOS), datasti og control store. Merket tydelig som historisk kontekst.
- **Eksamensbelegg:** Sjanger E, 100 % i arkivet men **trolig utgått**. Dekkes som **«bør kjenne til»** (møtes i gamle sett). Prioritet: **kjenne**.
- **Innholdskontrakt:** `definition` **mikroarkitektur**: den konkrete implementasjonen (datasti + kontroll) som realiserer en ISA — samme ISA kan ha flere mikroarkitekturer (kobling til 4.1 og Del 5). `text` (historisk) **Mic-1/IJVM**: registrene MAR (memory address), MDR (memory data), MBR (memory buffer), PC, TOS; hvilke er utilgjengelige for programmereren; datastien med A/B-buss og ALU. `text` at moderne emne bruker **RISC-V-datasti (Del 5)** i stedet — les dette kapitlet for historisk gjenkjenning, ikke som kjernepensum. **Notasjons- og begrepsliste:** mikroarkitektur, MAR/MDR/MBR/PC/TOS, A/B-buss, control store (historisk).
- **Oppgavesjangre:** E (R2). Mønstereksempel (R2): «Forklar kort hva en mikroarkitektur er, og hvorfor samme ISA kan ha flere.» (Implementasjon under ISA; ulik datasti/ytelse, samme instruksjonssett.)
- **Typiske feil:** Tro IJVM er dagens pensum (det er historisk — dagens er RISC-V-datasti); blande ISA og mikroarkitektur; tro et program er bundet til mikroarkitekturen.
- **Quiz: 12 · Flashcards: 14**

#### Kapittel 10.2: Mikroinstruksjoner og control store *(historisk)*

- **id:** `tdt4160-10-2` · **number:** 10.2 · **estimatedMinutes:** 40 · **prerequisites:** `tdt4160-10-1` · **kapitteltype:** teori (historisk)
- **description:** Historisk: hvordan en mikroinstruksjon styrer datastien (ALU-, C-, Mem-, B-felt), B-buss-begrensningen (kun én operand av gangen), control store og betingede mikrohopp (MPC) — som bakgrunn for gamle eksamenssett.
- **Eksamensbelegg:** Sjanger E, 100 % i arkivet men **trolig utgått**. **«Bør kjenne til».** Prioritet: **kjenne**.
- **Innholdskontrakt:** `text` (historisk) **mikroinstruksjon**: felt som styrer ALU, hvilke registre som lastes (C-felt), minneoperasjon (Mem), og hvilken kilde som legges på B-bussen. `text` **B-buss-begrensningen**: kun **én** operand på B-bussen per mikroinstruksjon → sum av flere operander krever **mellomlagring i H** over flere mikroinstruksjoner (klassisk «umulig i én»-innsikt: korrekt å svare at noe ikke kan gjøres i ett steg). `text` control store (36-bit ord × 512 = maks 512 mikroinstruksjoner) og MPC-bit for betingede mikrohopp. Merk gjennomgående at dette er **historisk** — dagens emne bruker RISC-V-datasti. **Notasjons- og begrepsliste:** mikroinstruksjon, ALU/C/Mem/B-felt, B-buss (én operand), H-register (mellomlagring), control store, MPC/mikrohopp (historisk).
- **Oppgavesjangre:** E (R2/R3). Mønstereksempel (R2): «Hvorfor krever en sum av tre operander flere mikroinstruksjoner i Mic-1?» (Kun én kilde på B-bussen om gangen → mellomlagring i H.)
- **Typiske feil:** Glemme B-buss-begrensningen (§ typiske feil #5); tro control store er ubegrenset; drille dette som om det var dagens pensum.
- **Quiz: 12 · Flashcards: 14**

**Prøve-kvote Del 10:** 4 prøver (Historisk appendiks — IJVM/mikroarkitektur; **lette, «bør kjenne til»**)
1. Prøve 10.A (15 min): Mikroarkitektur vs. ISA (sjanger E, R2).
2. Prøve 10.B (15 min): Mic-1-registrene (MAR/MDR/MBR) — funksjon og tilgjengelighet (sjanger E, R2).
3. Prøve 10.C (15 min): B-buss-begrensningen + mellomlagring i H (sjanger E, R2/R3).
4. Prøve 10.D (15 min): Control store + mikrohopp — historisk gjenkjenning (sjanger E, R2).

---

### Del 11 — Eksamenstrening

#### Kapittel 11.1: Eksamensdisiplinen — sjangerguide, formel + tall, tegn minnekartet

- **id:** `tdt4160-11-1` · **number:** 11.1 · **estimatedMinutes:** 45 · **prerequisites:** `tdt4160-0-1` · **kapitteltype:** teori (sjangerguide)
- **description:** Selve eksamensdisiplinen: hvordan besvare R1 (formel + innsatte tall + enhet), R3 (tegn minnekartet / FSM-tabellen) og R2 («forklar kort» på 1–3 setninger), hvordan disponere 4 timer over den faste menyen, og hvordan utnytte sjenerøs sensur («umulig» er et gyldig svar).
- **Eksamensbelegg:** Metakapittel over alle svarformer (R1–R3) og sjangre (A–H). Trener de viktigste føringene — *formel + tall*, *tegn minnekartet*, *forklar kort*, *si «umulig» når modellen forbyr noe*, *alternative løsninger godtas*. Prioritet: **perfekt** (påvirker score i hele settet).
- **Innholdskontrakt:** `tip`/`text`: (i) **svarform-strategi** — R1: alltid formel → tall → enhet → kort tolkning; R3: tegn kartet/tabellen fullstendig (det gir poengene); R2: 1–3 setninger presis term; (ii) **sjenerøs sensur** — alternative korrekte veier og typo-lesninger godtas, og korrekt «umulig»/«uproblematisk» gir uttelling (modellforståelse); (iii) **menydisponering** — den faste oppgavemenyen (logikk/adressedekoding/FSM, ISA/trace, datasti, minne/ytelse, tall, kortsvar), synlig prosentvekt per deloppgave → styr tiden; sikre de fire poengmagnetene (minnekart, FSM, RISC-V-trace, cache/pipeline) og de billige kortsvarene (~40 %); (iv) **læreplanmerknad** — ikke overinvester i IJVM (historisk); flyttall/virtuelt minne er nå pensum; (v) **tidsbudsjett** — ~10 min per 25 %, ikke bli sittende fast. Sammendrag av sensor-metareglene (formel + tall, tegn kartet, kort og presist, «umulig» gyldig).
- **Oppgavesjangre:** Alle R1–R3 (metanivå). 6–8 «hvordan bør du svare?»-oppgaver: gitt en svarform og en situasjon, avgjør beste strategi (vis formel, tegn kart, svar kort, si «umulig»).
- **Typiske feil:** Gi tallsvar uten formel; ikke tegne minnekartet/FSM-tabellen; skrive essay der 1–3 setninger kreves; ikke tørre å svare «umulig»; overinvestere i IJVM.
- **Quiz: 14 · Flashcards: 10**

#### Kapittel 11.2: Øvingseksamen 1 — typisk sett (moderne meny)

- **id:** `tdt4160-11-2` · **number:** 11.2 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4160-11-1` · **kapitteltype:** øvingseksamen
- **description:** Komplett 4-timers frittekstsett etter dagens antatte meny: tallrepresentasjon (2-komplement + IEEE 754), digital logikk (ALU-funksjonstabell), FSM (Moore/Mealy + next-state), RISC-V (format + adresseringsmodi + trace), datasti/pipeline, minne (adressedekoding→minnekart), cache-aksesstid, virtuelt minne, og et bredt lag begreps-kortsvar. Kode D (kalkulator), A–F.
- **Eksamensbelegg/miks:** Speiler prognosen (§1/§7) mot **dagens pensum**. **Tall:** 2-komplement + IEEE 754 (R1). **Logikk:** 1-bit ALU-funksjonstabell (R3). **FSM:** excitation + next-state + Moore/Mealy (R3). **ISA:** RISC-V-format + adresseringsmodus + trace til hex-sluttverdi (R1). **Datasti:** enkelsyklus-klokke / pipeline-forløp (R1/R3). **Minne:** adressedekoding → **tegn minnekart** + overlapp-drøfting (R3). **Cache:** `c+(1−h)·m` (R1). **Virtuelt minne:** adresseoppdeling/TLB (R1/R2). **Kortsvar:** Flynn/superscalar/ILP/CMP/lokalitet/buss/I/O (R2). Alle nyskrevne (egne tall/kretser/RISC-V-kode/minnekart). **Løsningsforslag i `collapsible` per oppgave**, skrevet som A-besvarelse med **formel + innsatte tall vist** og **minnekart/FSM-tabell tegnet**, `tip` om delpoeng/vekting. Innledende `tip` om tidsbudsjett (~10 min/25 %) og kode D.
- **Innholdskontrakt:** Dekker sjangrene A–D og F–H (E/IJVM utelatt — historisk).
- **Oppgavesjangre:** A–D, F–H; svarformer R1–R3.
- **Quiz: 22 · Flashcards: 0**

#### Kapittel 11.3: Øvingseksamen 2 — regne- og trace-tungt sett

- **id:** `tdt4160-11-3` · **number:** 11.3 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4160-11-2` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på de garanterte regne-/tegnesjangrene (adressedekoding→minnekart, RISC-V-trace, cache-aksesstid, pipeline-klokke, 2-komplement/IEEE 754) — men fortsatt full bredde.
- **Eksamensbelegg/miks:** Full meny med ekstra vekt på regning/tegning: tyngre 2-komplement + IEEE 754; større adressedekoding med **flere brikker → tegn minnekart** + R/W-overlapp; RISC-V-trace med **løkke** til hex-sluttverdi; cache-aksesstid + **invers** (finn hit ratio); pipeline-klokke `1/tregeste` + utføringstid `k+N−1`; virtuelt minne-bit-regning. Alle svarformer, alle nyskrevne. **Løsningsforslag som A-besvarelse** med margnotat om de faste fellene (glemt `+1`, `(1−h)` snudd, klokke fra feil trinn, minnekart ikke tegnet, bit vs. antall).
- **Innholdskontrakt:** Dekker A–D, F–H; supplerer 11.2 med tyngre regning/tegning.
- **Oppgavesjangre:** A–D, F–H; R1–R3.
- **Quiz: 22 · Flashcards: 0**

#### Kapittel 11.4: Øvingseksamen 3 — begreps- og modellforståelsestungt sett

- **id:** `tdt4160-11-4` · **number:** 11.4 · **estimatedMinutes:** 240 · **prerequisites:** `tdt4160-11-3` · **kapitteltype:** øvingseksamen
- **description:** Komplett sett med tyngdepunkt på begreps-kortsvarene («forklar kort») og modellforståelse — inkludert oppgaver der «umulig/uproblematisk» er det riktige svaret, og et historisk IJVM-innslag (bør kjenne til).
- **Eksamensbelegg/miks:** Full meny med ekstra vekt på R2-kortsvar og modellforståelse: parallellisme (Flynn/superscalar/ILP/CMP), lokalitet, buss/arbitrering, I/O avbrudd vs. busy-waiting, Harvard/von Neumann, RISC-trekk; FSM Moore/Mealy-klassifisering; minnekart med **overlapp der «uproblematisk» er svaret** (motsatt R/W); datasti «umulig å klokke raskere»-oppgave; ett **historisk IJVM-kortsvar** (bør kjenne til). Alle svarformer, alle nyskrevne. **Løsningsforslag som eksplisitt begrunner hvorfor et «umulig/uproblematisk»-svar gir full uttelling** (modellforståelse premieres), med `tip` om at presis terminologi teller mer enn lengde. De tre settene sammen dekker sjangrene A–H (E kun som historisk innslag) flere ganger.
- **Innholdskontrakt:** Dekker A–H (E kun ett historisk innslag); vekt på R2 + modellforståelse.
- **Oppgavesjangre:** A–H; R1–R3.
- **Quiz: 22 · Flashcards: 0**

---

## 5. Summeringskontroll (quiz/flashcards) — AUTORITATIV

| Del | Kapitler | Quiz | Flashcards |
|---|---|---|---|
| 0 | 0.1–0.2 | 14+14 = **28** | 12+12 = **24** |
| 1 | 1.1–1.4 | 18+20+18+24 = **80** | 16+18+18+8 = **60** |
| 2 | 2.1–2.3 | 18+18+22 = **58** | 20+18+8 = **46** |
| 3 | 3.1–3.4 | 16+20+16+24 = **76** | 18+20+16+8 = **62** |
| 4 | 4.1–4.5 | 16+18+18+20+24 = **96** | 18+20+18+16+8 = **80** |
| 5 | 5.1–5.4 | 16+18+18+22 = **74** | 18+18+18+8 = **62** |
| 6 | 6.1–6.4 | 18+20+16+24 = **78** | 18+18+18+8 = **62** |
| 7 | 7.1–7.3 | 16+20+22 = **58** | 16+20+8 = **44** |
| 8 | 8.1–8.3 | 16+18+20 = **54** | 18+18+8 = **44** |
| 9 | 9.1–9.4 | 18+16+18+22 = **74** | 16+16+22+8 = **62** |
| 10 | 10.1–10.2 | 12+12 = **24** | 14+14 = **28** |
| 11 | 11.1–11.4 | 14+22+22+22 = **80** | 10+0+0+0 = **10** |
| **Sum** | **42 kap.** | **780 ≥ 500 ✓** | **584 ≥ 500 ✓** |

Kvotene er **minimum** per kapittel; forfatteren kan overskyte, aldri underskride. Fordelingen
er **skalert til fagets bredde og natur** (jf. audit-lærdommen «≥500 er et gulv»): 42 kapitler
som dekker hele stabelen fra bit til virtuelt minne, med tre nye pensumområder (IEEE 754,
RISC-V-datasti, virtuelt minne) og et sterkt begrepslag (~40 % kortsvar) → **quiz 780**,
**flashcards 584**. **Quiz** er kalibrert høyt fordi faget er bredt, men er her **støtte/
faktakontroll** (ikke selve eksamensformen, som er frittekst) — den egentlige regne-/tegnedrillen
ligger i `exercise`-blokkene. De fire poengmagnetene får tyngst quiz-dekning: FSM (Del 3: 76),
RISC-V ISA/trace (Del 4: 96, med 5 kapitler), adressedekoding/minnekart (Del 6: 78) og cache
(Del 7: 58 på bare 3 kap., høy tetthet). Drillkapitlene (1.4, 2.3, 3.4, 4.5, 5.4, 6.4, 7.3, 8.3,
9.4) har høyest quiz (22–24) fordi de rommer treningsbanken. **Flashcards** vektes mot **begrep/
mønster → presis 1–3-setnings definisjon → fast feilslutning** og siktes høyt (584) fordi faget
er svært begrepsrikt (Flynn, RISC-trekk, adresseringsmodi, Moore/Mealy, hazardtyper, IEEE 754,
cache-/minneparametre) og eksamen er **hjelpemiddelfri** (kode D). Del 10 (historisk IJVM) får
lav quiz (24) men beholder flashcards (28) for gjenkjenning i gamle sett. Øvingseksamenene
(11.2–11.4) gir 0 flashcards (rene oppgavesett) men bidrar med 22 quiz hver.

---

## 6. Prøver og øvingseksamener

### Kapittel-/temaprøver (4 per temadel 1–10 → 40 prøver)

Hver prøve er nyskrevne frittekstoppgaver i eksamens svarformer (R1–R3), med løsningsforslag som
holder sensorens form (**formel + innsatte tall**, **tegnet minnekart/FSM-tabell**, 1–3-setnings
kortsvar) og oppgir poengfordeling. Prøvekapitler bygges som `tdt4160-<del>-prove` (chapterNumber
`<del>.P`) etter plattformmønsteret, eller som egne exercise-seksjoner i delens siste kapittel.
Prøvekvotene per del står i sluttblokken til hver del over (Del 1–10). **Del 10s prøver er lette
og «bør kjenne til»** (historisk IJVM — ikke drill). Del 0 og Del 11 får ikke egne prøver (Del 0
er metakapitler; Del 11 **er** øvingseksamenene).

### Øvingseksamener (3 komplette sett — se kap. 11.2–11.4)

| Sett | Profil | Miks |
|---|---|---|
| Øvingseksamen 1 (11.2) | Typisk moderne sett (RISC-V-menyen) | Full bredde over A–D, F–H, alle R1–R3, kode D |
| Øvingseksamen 2 (11.3) | Regne- og trace-tungt sett | Vekt på minnekart, RISC-V-trace, cache/pipeline, 2-komplement/IEEE 754 |
| Øvingseksamen 3 (11.4) | Begreps-/modellforståelsestungt sett | Vekt på «forklar kort» + «umulig/uproblematisk»-svar + ett historisk IJVM-innslag |

Hvert sett er bygd som en **4-timers frittekstseksamen (kode D, A–F) etter den faste menyen**, med
løsningsforslag som A-besvarelse (formel + tall vist, minnekart/FSM-tabell tegnet, kortsvar
presist). Til sammen dekker de tre settene sjangrene A–H (E kun som historisk gjenkjenning) flere
ganger. **IJVM-tunge oppgaver er bevisst nedtonet** (historisk) til fordel for RISC-V, flyttall og
virtuelt minne, jf. læreplanskiftet.

---

## 7. Studieguide-disposisjon

Studieguiden settes sammen av Del 0 (kjernen) + kapitlenes Eksamensvinkel-blokker:

1. **Slik ser eksamen ut** — én firetimers frittekst skoleeksamen, **kode D** (kalkulator), A–F,
   manuelt rettet med **sjenerøse delpoeng**, den faste oppgavemenyen, og **læreplanskiftet**
   (RISC-V + flyttall + virtuelt minne inn; IJVM ut/historisk) — fra kap. 0.1/11.1.
2. **Prioriteringskartet** — temafrekvensen omgjort til tre lesenivåer: **perfekt**
   (adressedekoding→minnekart, FSM Moore/Mealy + excitation/next-state, RISC-V-format +
   adresseringsmodi + trace, cache-aksesstid, pipeline-klokke, 2-komplement, parallellisme-
   kortsvar), **kunne** (1-bit ALU, enkelsyklus/pipelinet datasti, virtuelt minne/TLB, IEEE 754,
   CPU-tid/CPI/Amdahl, buss/I/O, tilstandskoding), **kjenne** (IJVM/mikroinstruksjoner —
   historisk, flyttall-spesialverdier, shift-detaljer). Merk **(verifiser)** på temavekting.
3. **Svarform- og sjangerguiden** — R1 (formel + tall), R2 («forklar kort», 1–3 setninger),
   R3 (tegn minnekart/FSM-tabell/funksjonstabell) med strategien fra kap. 11.1, og
   innholdssjangrene A–H med løsningsoppskriftene fra drillkapitlene (1.4, 2.3, 3.4, 4.5, 5.4,
   6.4, 7.3, 8.3, 9.4) i kortform.
4. **Sensorreglene** — **formel + innsatte tall + enhet** (bart tall er svakt); **minnekartet MÅ
   tegnes** for uttelling; «forklar kort» = 1–3 setninger presis term; **alternative løsninger og
   typo-lesninger godtas**; **korrekt «umulig/uproblematisk» gir uttelling** (modellforståelse);
   følg emnets notasjon (hex for adresser, RISC-V-mnemonics, IEEE 754-felt).
5. **Feilkatalogen** — de faste fellene (§5 i analysen) samlet, hver med henvisning til kapitlet
   som forebygger den: klokke fra feil trinn (9.1/9.4), `(1−h)` snudd i cache-formelen (7.2/7.3),
   bit vs. antall i adresserom (1.1/4.1), forveksle Moore/Mealy (3.2/3.4), glemme `+1` i
   2-komplement (1.2/1.4), overlapp ≠ automatisk konflikt (6.2/6.4), hopp på feil sammenligning i
   trace (4.4/4.5), blande superscalar/SIMD/ILP (9.3), single-cycle kan ikke klokkes raskere enn
   tregeste minne (5.2), B-buss-begrensning i IJVM (10.2, historisk), sidetabell i cache /
   direktemappet TLB (8.1/8.2), ikke tegne minnekartet (0.2/6.2/6.4).
6. **Notasjons- og formelark** — samlet puggeark for en hjelpemiddelfri eksamen: hex↔binær +
   adresserom `2ⁿ`; 2-komplement (`−2^(n−1)·b + Σ`, `inverter + 1`, subtraksjon `~B+1`);
   IEEE 754 (`(−1)^s·1,M·2^(E−127)`, bias 127); boolsk/excitation-notasjon; FSM (`Dᵢ`, `Qᵢ⁺`,
   `⌈log₂ tilst.⌉`, Moore/Mealy-skillet); RISC-V (formater R/I/S/B, adresseringsmodi,
   `x0`–`x31`, trace-prosedyre); minnekart-tegneprosedyren + R/W-overlappregelen;
   cache-aksesstid `c+(1−h)·m`; pipeline-klokke `1/tregeste` + `k+N−1`; CPU-tid `IC×CPI×T` +
   Amdahl; virtuelt minne (offset/sidenummer-bit, TLB fullt assosiativ); Flynn/parallellisme-
   taksonomien.
7. **Studieløp** — anbefalt progresjon (12-ukers og 3-ukers intensivvariant): sikre de fire
   poengmagnetene og de garanterte regnepoengene tidlig (Del 6 minnekart → Del 3 FSM → Del 4
   RISC-V-trace → Del 7 cache + Del 9 pipeline-klokke → Del 1 tall/2-komplement), bygg deretter
   inn det nye pensumet (Del 5 datasti, Del 1.3 flyttall, Del 8 virtuelt minne), legg til
   begrepslaget (Del 9.3 parallellisme, Del 6.3 buss/I/O), og les IJVM (Del 10) **kun** for
   historisk gjenkjenning. Kjør prøvene underveis + de tre øvingssettene de siste ukene under
   tidspress (240 min, kode D).

---

## 8. Byggerekkefølge og verifikasjon (for Opus)

### Rekkefølge

1. **Metadata først**: `TextbookCourse`-oppføring for `tdt4160` med alle 42 kapitler
   (id/number/title/description/estimatedMinutes/topics/competenceGoals/prerequisites/
   linkedChapterId) etter mønster `COURSE_BI_OKONOMI` i `src/lib/data/textbook-courses-matte.ts`;
   `sectionNames` fra §2-tabellen (obligatorisk). **`number` er del-basert** («4.2», ALDRI lineær
   «18» — jf. JUS1111-lærdommen; prosareferanser i innholdet bruker samme form, «kap. 4.2»).
   Institusjon: **NTNU** (opprett hvis den ikke finnes i `institusjoner.ts`), visningsnavn
   «TDT4160 Datamaskiner».
2. **Del 0** (kap. 0.1–0.2) — etablerer svarformene R1–R3, sjangrene A–H, den faste menyen,
   **læreplanskiftet (RISC-V vs. IJVM, (verifiser))** og regne-/kortsvarhåndverket (formel + tall,
   tegn minnekart, «forklar kort», «umulig er gyldig svar») som resten refererer til.
3. **De ti temadelene** bygges i faglig rekkefølge Del 1 → Del 10 (innad følger kapitlene
   forkunnskaper). Prioritér innhold/kvalitet på de fire poengmagnetene (Del 3 FSM, Del 4 RISC-V,
   Del 6 minnekart, Del 7 cache + Del 9 pipeline). **Merk gjennomgående RISC-V/moderne vs.
   IJVM/historisk** slik at leseren ikke drilles på utgått stoff; Del 10 skrives eksplisitt som
   historisk appendiks.
4. Del 11 (eksamenstreningen) til slutt — den gjenbruker alle svarformer og sjangre;
   øvingseksamenene speiler den moderne menyen (RISC-V, flyttall, virtuelt minne; IJVM nedtonet).
5. Narrativ-versjoner (`<id>-narrativ.json`) og quiz per kapittel etter hvert som kapitlene
   ferdigstilles; prøvene (§6) legges i respektive delers prøvekapittel/exercise-seksjoner.

### Sjekkliste før «ferdig»

- [ ] **JSON-validering**: hver kapittelfil parser med `json.load`/`JSON.parse` (escape `"` i
  norske sitattegn og i RISC-V/kode; `\\` for LaTeX-kommandoer); `npm run build` grønn.
- [ ] **Frittekst, ikke flervalg**: løsningsforslag er A-besvarelser for hånd; regnesvar vises
  som **formel → innsatte tall → svar med enhet** (bart tall er svakt). Quiz er **støtte/
  faktakontroll** (`options[0]` = riktig svar, runtime stokker; forklaring begrunner riktig +
  distraktorer); den egentlige regne-/tegnedrillen ligger i `exercise`-blokkene.
- [ ] **Minnekart tegnes eksplisitt**: alle adressedekodings-eksempler (6.1/6.2/6.4 + 0.2) tegner
  minnekartet som **tabell adresse↔enhet**, ikke bare liste; lesekontraktene sier at kartet gir
  uttelling; overlapp drøftes ut fra read-only/write-only.
- [ ] **«Umulig er et gyldig svar»**: kapitler der modellen forbyr noe (6.2 R/W-overlapp, 5.2
  klokkegrense, 2.2 subtraksjon i én syklus, 10.2 B-buss) har egne noter om at korrekt
  «umulig/uproblematisk»-svar gir full uttelling (modellforståelse premieres).
- [ ] **Læreplanskiftet håndtert**: RISC-V + IEEE 754 + virtuelt minne + enkelsyklus/pipelinet
  datasti er bygget inn (Del 1.3, 4, 5, 8); IJVM er **historisk appendiks** (Del 10, «bør kjenne
  til», ikke drillet); temavekting merket **(verifiser)** der arkivet er svakt belegg for 2026.
- [ ] **Notasjons- og begrepsliste per delkapittel**: hvert delkapittel som bruker
  notasjon/begreper har `collapsible` «Notasjons- og begrepsliste» rett etter Forkunnskaper, som
  forklarer ALT delkapitlet bruker (per delkapittel, ikke arv).
- [ ] **Regneprosedyrene som `theorem`**: hex/adresserom `2ⁿ`, 2-komplement (`~B+1`), IEEE 754
  (`(−1)^s·1,M·2^(E−127)`), cache-aksesstid `c+(1−h)·m`, pipeline-klokke `1/tregeste` + `k+N−1`,
  CPU-tid `IC×CPI×T`/Amdahl, `⌈log₂⌉`, virtuelt-minne-bit — alle med gjennomregnet eksempel
  (formel + innsatte tall).
- [ ] **Tegneprosedyrer som `theorem`**: minnekart-tegneprosedyren (6.2/6.4) og FSM-tabellmalen
  (3.2/3.4: excitation → next-state → utgang) med komplett tegnet eksempel; 1-bit ALU-
  funksjonstabell (2.2/2.3).
- [ ] **RISC-V-instruksjonskontrakter**: kap. 4.2–4.4 har `theorem`-blokker (mnemonic ↔ virkning
  ↔ format/adresseringsmodus); trace-eksempler viser mellomtilstand steg for steg til hex-
  sluttverdi; `x0` alltid 0.
- [ ] **De faste fellene som warnings**: hvert relevant kapittel har `warning` for sin felle —
  Moore/Mealy (3.2/3.4), `(1−h)` snudd (7.2/7.3), klokke fra feil trinn (9.1/9.4), bit vs. antall
  (1.1/4.1), `+1` i 2-komplement (1.2/1.4), overlapp ≠ konflikt (6.2/6.4), hopp på feil
  sammenligning (4.4), superscalar/SIMD/ILP (9.3), sidetabell-i-cache/TLB (8.1/8.2), ikke tegne
  minnekartet (6.2/6.4).
- [ ] **Begreps-kortsvar-laget (~40 %)**: parallellisme (9.3), buss/I/O (6.3), lokalitet (7.1),
  Harvard/von Neumann/RISC-trekk (4.1/5.1) har `definition`-blokker med **modellsvar på 1–3
  setninger** — dette er flashcard-materialet og de billige poengene.
- [ ] **Kapittel-DNA**: hvert teorikapittel har Eksamensvinkel-`tip` (med tallene fra dette
  skjelettet), Typiske feil-`warning`, 2–4 eksempler (siste på eksamensnivå, R1–R3), 6–12 øvinger
  (R1–R3) med `solution` + `hints`, repetisjons-`collapsible`; drillkapitler har løsningsoppskrift
  + sensor-kommentert case + 10–16 oppgaver.
- [ ] **Quiz-sum ≥ 780 og flashcard-sum ≥ 584** per kvotetabellen (§5); quiz som støtte/
  faktakontroll; flashcards som begrep/mønster ↔ presis definisjon ↔ fast feilslutning.
- [ ] **Prøver**: 4 per temadel 1–10 (40 stk; Del 10 lette/historiske) + 3 øvingseksamener
  (kap. 11.2–11.4) som sammen dekker sjangrene A–H (E kun historisk), svarformene R1–R3 og hele
  menyen flere ganger.
- [ ] **Opphavsrett**: ALLE oppgaver, tall, kretser, RISC-V-kodebiter, minnekart og kontekster
  nyskrevne — egne verdier/kontekster; instruksjonssett, tallverdier, standardnotasjon og
  RISC-V-konstruksjoner er allmenn faglig kunnskap, men ingen oppgavetekster/fasiter/
  sensorformuleringer fra reelle sett gjengis; pensum (Harris & Harris / Patterson & Hennessy)
  refereres (begrep/verk), aldri siteres i lengde.
- [ ] **Verifiser rendering**: prod-server + curl mot kapittel- og narrativ-ruter (200 + innhold),
  jf. lærdommen om `getChapterMeta`.

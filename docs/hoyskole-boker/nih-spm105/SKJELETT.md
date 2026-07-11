# Bokskjelett: SPM105 Idrettens organisasjoner og organisering (NIH) — eksamensrettet lærebok

> **LÆRINGSLØKKE-KONTRAKT (ufravikelig, produkteier 9. juli 2026):** Ved bygging
> struktureres HVERT temakapittels `content[]` som gjentatte små løkker
> **Teori → Eksempel → Oppgave** — én løkke per begrep/teoribit: begrep med
> pensumforankring (`definition` + evt. `text` om posisjoner) → anvendt mini-case
> som viser begrepet i bruk (`example`) → drøftings-/anvendelsesoppgave på samme
> begrep (`exercise`), plassert INLINE i `content[]` rett etter eksempelet.
> Deretter neste begrep, osv., til alt stoffet i delkapitlet er dekket. ALDRI alle
> begreper øverst og alle oppgaver samlet nederst. Ingen oppgave får kreve stoff
> som ikke er dekket tidligere i kapitlet eller i eksplisitt refererte
> forkunnskaper (flytt teoribiten tidligere ved behov). `tip` Eksamensvinkel og
> `warning` Typiske feil kan stå der de er mest relevante. Autoritativ kilde:
> README «Leserkrav» + `DNA-drofting.md`. Unntak: sjanger- og
> modellbesvarelseskapitler (Del 9) følger sin egen arketype (oppskrift/oppgave
> først, modellbesvarelse i collapsibles). Kvotene og innholdskontraktene i dette
> skjelettet er uendret — løkka styrer REKKEFØLGEN.

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE eksamensarkivet —
> alt eksamensbelegg som trengs står i dette skjelettet, destillert fra
> `EKSAMENSANALYSE.md` (**NIHs eget arkiv for SPM105: 7 komplette oppgavesett + 7
> tilhørende sensorveiledninger fra 2023/24, 2024/25 og 2025/26**). Alle oppgaver,
> caser og formuleringer i boka skal være NYSKREVNE (se README «Opphavsrett»):
> eksamensoppgaver og sensorveiledninger brukes som mønster/temavekting/
> vurderingskriterier, ALDRI ordrett. Pensumlitteratur refereres (forfatter/verk/
> begrep), aldri siteres i lengde.
>
> **Emnestatus (verifisert mot nih.no 2026-07-11):** SPM105 er **AKTIVT** —
> emnesiden «SPM105 Idrettens organisasjoner og organisering (Høst 2025)» er
> publisert (heldigitalt nettemne, **10 studiepoeng**, individuell skriftlig
> hjemmeeksamen A–F, seks nettmoduler). Emneansvarlig gjennom hele det dokumenterte
> arkivet er **Dag Vidar Hanstad**; H2025-emnesiden oppgir **Anette Skilbred** som
> emneansvarlig *(verifiser — kan være et skifte fra og med studieåret 2025/26)*.
> Skrivemåten «Idrettens organisasjon og organisering» forekommer i én forside,
> samme emne. **Byggefase-forbehold:** kalibreringen bygger på 2023/24–2025/26-
> arkivet; nye sett kan justere bildet, og byggefasen bør sjekke ferskeste
> emneplan/sensorveiledning før boka meldes helt ferdig.
>
> **Evidensstyrke (les før kvotene tolkes):** Arkivet er middels stort med et
> **markant formatbrudd**. Epoke 1 (H2023–V2025): treukers hjemmeeksamen, 3000–3500
> ord, tre likt vektede moduldrøftinger, **rike** sensorveiledninger med kapittel-/
> sidetall og ordrett A–F-nøkkel. Epoke 2 (H2025→): prosjektlignende tiltaks-/
> utfordringsoppgave på 2500 ord (én rød tråd → interessentanalyse →
> implementering), forankret i **Hanstad (2025)**; kortere, mer skjønnsbaserte
> veiledninger. Karakterkriteriene (§ sensorkrav) er **dokumentert** for epoke 1;
> epoke 2-veiledningene er kortere. Selve pensumbøkene (Hanstad 2019 og 2025) ligger
> ikke i arkivet — de er kjent kun via sidereferansene i veiledningene, så
> sidetallsspesifikke påstander merkes `(verifiser)`.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `nih-spm105` |
| Tittel | **SPM105 Idrettens organisasjoner og organisering (NIH) — eksamensrettet** |
| Level | `'Høyskole'` |
| Institusjon (navigasjon) | Norges idrettshøgskole (NIH). Visningsnavn i `institusjoner.ts`: «SPM105 Idrettens organisasjoner og organisering». |
| Arketype | **Drøfting** (`DNA-drofting.md`). Rendyrket drøftings-/essayfag: ingen fasit, ingen regning, ingen flervalg — sensor vurderer begrepspresisjon, PENSUMFORANKRING (navngitte forfattere/verk), selvstendig drøfting og struktur. Se §2 «Arketypetilpasning» for de to hybridtrekkene (epoke 2s tiltaks-/prosjektløp og interessent-/implementeringsteori). |
| Antall kapitler | **30** (Del 0: 2 · temadeler 1–8: 23 · eksamenstrening Del 9: 5) |
| Estimert totaltid | **~1 640 min ≈ 27 timer** (per kapittel under) |
| Quiz totalt | **502** (krav ≥500) |
| Flashcards totalt | **544** (begrep↔forfatter-koblinger + fakta-tett stoff → høy tetthet; krav ≥500) |

**Pitch (ett avsnitt):** SPM105-eksamen er en **drøftingseksamen med alle
hjelpemidler tillatt** — men hjelpemidler hjelper lite, for sensor premierer ikke
gjengivelse, men **evnen til å drøfte med pensumforankring**. Faget er organisert i
seks nettmoduler som styrer temautvalget på hvert eneste sett: (1) den norske
idrettsmodellen, (2) idrettens organisering, (3) idrett i politikk – politikk i
idrett, (4) idrettens økonomi, (5) Norge og internasjonal idrett, (6) makt og
idrettens interessenter. Fem temaer bærer nesten hvert sett: **idrettsmodellen**,
**stat–idrett-politikken**, **makt og interessenter**, **økonomien** og
**organiseringen/Idrettstinget** — mens **NIF–IOC** og **barneidrett** er
lavfrekvente, men krever høy faktapresisjon når de kommer. Fra H2025 er formatet
lagt kraftig om: i stedet for tre frittstående moduldrøftinger følger studenten
**ett selvvalgt tiltak / én selvvalgt utfordring** gjennom hele besvarelsen —
interessentanalyse og implementeringsteori er den viktigste nye sjangeren å trene
på. Boka er bygd baklengs fra det sensor faktisk premierer: **drøfting fremfor
gjengivelse**, **balansert fordeler/ulemper**, **korrekt APA 7** og noen få
**faktatunge presisjonspunkter** (fremst NIF–IOC-forholdet) der ett feilaktig svar
trekker uansett hvor god drøftingen ellers er.

**Kritisk sjanger-/formatbetingelse (gjelder HELE boka):** SPM105 har **ingen
flervalg, ingen regneoppgaver, ingen kortsvar med fasit, ingen muntlig** — alt er
sammenhengende akademisk drøftetekst med APA 7-referanser. Boka trener derfor to
ferdighetslag parallelt: **fagstoffet** (de seks modulene) og **drøftingshåndverket**
(disponere, avklare begreper med pensumavsender, føre motargument, konkludere,
sitere korrekt). Bokas egne quizer/flashcards er interne selvtester (plattformen
har flervalg) og bryter IKKE med at selve eksamen er ren essay — dette rammes
eksplisitt inn i Del 0 (jf. README «Ingen uforklart sjargong»: forklar at bokas
quiz ≠ eksamensform).

**Kritisk kilde-/uavhengighetsregel (gjelder HELE boka):** (a) **Ingen
eksempelbesvarelser finnes i arkivet** — modellbesvarelsene i Del 9 er NYSKREVNE og
bygd på sensorveiledningenes nivåbeskrivelser og fasit-momenter, ALDRI på faktiske
A-svar (jf. minne «sannferdige påstander»: modellbesvarelser = nyskrevne, aldri
«ekte»). (b) Frekvenspåstander formidles alltid med kildenote + forbehold (jf.
README-leserkravet); tall = **telte belegg** fra §2 (7 sett). (c) Boka fremstiller
seg ALDRI som offisielt/godkjent/NIH-tilknyttet materiale (plattformens
`hoyskole-disclaimer.tsx` deklarerer uavhengigheten automatisk). (d) Pensum-
sidereferanser fra veiledningene merkes `(verifiser)` — bøkene ligger ikke i
arkivet.

---

## 2. Makrostruktur

Rekkefølgen følger faglig oppbygging (DNA-drofting): eksamenskart og essayhåndverk
først; deretter de seks modulene i en rekkefølge der grunnlaget (idrettsmodellen,
organiseringen) kommer før det som bygger på det (politikk, økonomi, det
internasjonale), og **makt/interessenter** — epoke 2s ryggrad — får bredest dekning;
til slutt en egen del for epoke 2s implementering/strategi/samfunnsansvar og en
eksamenstreningsdel med sjangerkapitler og modellbesvarelser. Frekvensen (§2.2 i
analysen) styrer *omfanget*, ikke om et tema er med: nesten hele bredden testes over
tid.

| Del | Tittel | Kap. | Prioritet | Begrunnelse for omfang (analysen §2/§7) |
|---|---|---|---|---|
| 0 | Eksamenskart og essayhåndverk | 2 | perfekt (meta) | Formen (hjemmeeksamen A–F, to epoker, tre deler, ordgrenser, APA 7, KI-holdning), sjangerkatalogen, sensorkravene og kildeforbeholdet må etableres FØR fagstoffet. **Drøftingshåndverket (0.2) er unikt kritisk** fordi «drøft, ikke gjengi» er sensors gjennomgående hovedkriterium. |
| 1 | Den norske idrettsmodellen | 3 | perfekt (★★★★★, 3/7 + berøres) | Modul 1. Inngangsporten til faget; kreves også indirekte i tiltaks-oppgavene. «Idrettsglede for alle», kjerneelementer, barrierer (økonomi/profesjonalisering/inkludering). |
| 2 | Norsk idretts organisering og Idrettstinget | 3 | kunne→perfekt (★★★★☆, 3/7) | Modul 2. Organisasjonskartet + Idrettstinget (idrettskretser vs. særforbund — nesten ordrett resirkulert klassiker V2024=H2024). Grunnlag for makt-, politikk- og case-delene. |
| 3 | Idrett i politikk – politikk i idrett | 3 | perfekt (★★★★★, 4/7) | Modul 3. Autonomi, statlige føringer, stortingsmeldinger, KUD; nesten alltid koblet til finansiering. En av de tre bærebjelkene. |
| 4 | Idrettens økonomi og finansiering | 3 | kunne (★★★★☆, 4/7) | Modul 4. Spillemidler, særforbunds inntekter, momskompensasjon, økonomi som barriere; ofte sammenvevd med politikk-delen. |
| 5 | Norge og internasjonal idrett (NIF–IOC) | 2 | kjenne (★★★☆☆, 2/7) | Modul 5. Lav frekvens, men **høyt presisjonskrav** — NIF–IOC-forvekslingen er fagets klassiske faktafeil (sensorkrav 4). |
| 6 | Makt og idrettens interessenter | 4 | perfekt (★★★★★, 4/7, dominerer epoke 2) | Modul 6. **Interessentanalyse er selve ryggraden i det nye formatet.** Makttyper/maktkilder, interessentidentifikasjon/-analyse, samfunnsansvar, case-/rolleoppgaver. Bredest dekning. |
| 7 | Barneidrett | 2 | kjenne (★★★☆☆, 1/7 + barriere-eksempel) | Berøringspunkt i «barriere»-oppgaver, egen del bare én gang (H2024) — men da med høyt faktakrav (barneidrettsmodell, rettigheter, bestemmelser). |
| 8 | Implementering, strategi og samfunnsansvar (epoke 2) | 3 | kunne (★★★☆☆, 2/7 epoke 2, forventet fast fremover) | Nytt i 2025. Interessent-/implementeringsteori (Hanstad 2025 kap. 2), tiltaksvalg + rød tråd, strategiske valg (ressurser/økonomi/anlegg), styrker/svakheter/implikasjoner. |
| 9 | Eksamenstrening | 5 | perfekt (meta) | Sjangerkapittel (oppskrifter RED-SO-DRØFT/FOR-ULEMP/CASE/TILTAK/VELG-ETT) + **3 modellbesvarelseskapitler** på flere karakternivåer (A, autentisk B, ærlig C), begge epoker. |

Rasjonale: de tre bærebjelkene (idrettsmodellen, stat–idrett-politikken, makt/
interessenter) og de to nest-tyngste (organisering, økonomi) får hver sin fulle del;
makt/interessenter får bredest dekning fordi den bærer epoke 2. Det internasjonale og
barneidrett får hver sin kompakte del med høyt presisjonskrav. Epoke 2s nye apparat
(implementering/samfunnsansvar) får egen del fordi det nesten sikkert går igjen
fremover.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og essayhåndverk |
| 1 | Den norske idrettsmodellen |
| 2 | Norsk idretts organisering og Idrettstinget |
| 3 | Idrett i politikk – politikk i idrett |
| 4 | Idrettens økonomi og finansiering |
| 5 | Norge og internasjonal idrett (NIF–IOC) |
| 6 | Makt og idrettens interessenter |
| 7 | Barneidrett |
| 8 | Implementering, strategi og samfunnsansvar |
| 9 | Eksamenstrening |

### Sjangerkoder (fra analysen §3 — brukes i «Eksamensbelegg» under; forklares FULLT UT ved første bruk i Del 0)

**RED-SO-DRØFT** «beskriv-så-drøft» (to-trinns: kort redegjørelse med hard ordgrense
+ etterfølgende drøfting; drøftingen avgjør karakteren) · **FOR-ULEMP** fordeler-og-
ulemper-drøfting (balansert avveiing — begge sider MÅ frem) · **CASE** case-/scenario-
oppgave med rolle-innramming (studenten plasseres i en rolle og handler innenfor
scenarioet; må vise riktig myndighetsnivå og relevante interessenter) · **TILTAK**
tiltaks-/prosjektoppgave med gjennomgående rød tråd (epoke 2, dominerende: velg
tiltak/utfordring → interessentanalyse → implementering) · **VELG-ETT** «velg ett av
tre»-drøfting (velg ett gitt dilemma og bygg drøfting som trekker inn litteratur
utover kapitlet). *(Ingen flervalg, ingen regneoppgaver, ingen kortsvar med fasit.)*

### Vurderingsakser (fra analysen §4 — etableres i Del 0, refereres i hvert kapittel)

> **Kildeforbehold:** A–F-nøkkelen er ordrett dokumentert for epoke 1; epoke 2-
> veiledningene er kortere og mer skjønnsbaserte. Epoke 2-vurderingskriteriene er
> derfor merket `(verifiser)` der de er sluttet fra kortere veiledninger.

1. **Drøfting fremfor gjengivelse (den viktigste karakterskilleren).** «Vi er mer ute
   etter evnen til å drøfte» / «det er refleksjonsnivået som skiller». Ren gjengivelse
   av en stortingsmelding, modell eller et kapittel gir lav uttelling selv om
   innholdet er korrekt.
2. **Litteraturforankring på riktig nivå.** A: innsikt fra relevant litteratur,
   avansert begrepsforståelse, helhet; C: de mest sentrale delene, noen mangler; E:
   minimumskravet, klare mangler/overfladiskhet; F (ikke bestått / stryk): manglende
   innsikt, argumentasjon uten kobling til nødvendig litteratur — **eller** én av
   delene ikke besvart. Sterke svar går **utover pensumboka** til anbefalt litteratur.
3. **Kildebruk og APA 7 (selvstendig karakterelement).** A krever ALLE referanser
   korrekte etter APA 7; F gis bl.a. når sitering ikke «utviser innsikt». Fra V2025:
   advarsel mot KI-genererte «falske referanser».
4. **Presisjon på faktatunge deloppgaver.** På enkelte oppgaver finnes ett *riktig*
   svar som må sitte uansett drøfting — fremst **NIF–IOC-forholdet** (§Del 5).

**Epoke 2-tillegg `(verifiser)`:** i hvilken grad studenten klart beskriver tiltaket,
kobler det til læringsutbytte, identifiserer interessenter og deres roller, viser
forståelse for **interessentteori** og **implementeringsteori** (Hanstad 2025 kap. 2),
og reflekterer over styrker/svakheter/implikasjoner.

### Feilkoder (fra analysen §5 — brukes i «Typiske feil» under; glosses ved FØRSTE bruk per kapittel)

**#1** **Gjengivelse i stedet for drøfting** — referere modell/melding/kapittel uten
selvstendig analyse (den hyppigst nevnte fallgruven). · **#2** **Sprenge den korte
redegjørelsen** — bruke halve delen på ren beskrivelse der ordgrensen er hard (maks
200 ord modellen, maks 150 ord særforbunds inntekter), så drøftingen taper plass. ·
**#3** **Ensidig fordeler/ulemper** — bare argumentere for eller mot i FOR-ULEMP-
oppgaver. · **#4** **NIF–IOC-forvekslingen** — tro at NIF er medlem av IOC, eller at
norske IOC-medlemmer representerer Norge/NIF i IOC. Fagets klassiske faktafeil. ·
**#5** **Feil myndighetsnivå i case-oppgaver** — ikke vise at idrettslag/idrettsråd
jobber mot **kommunen**, mens krets går indirekte via idrettsrådet og særforbund/NIF
påvirker lokalt. · **#6** **Canvas som hovedkilde** — lene seg på nettmodulene i
stedet for kjerne-/anbefalt litteratur. · **#7** **Svak/feil APA 7** — manglende
sidetall, referanser bare i tekst eller bare i liste, uklar kildebruk. · **#8**
**(Epoke 2) Manglende teorikobling** — interessentdel uten interessentteori,
implementeringsdel uten implementeringsteori. · **#9** **(Epoke 2) Løs rød tråd** —
ulike tiltak/utfordringer i de tre delene i stedet for ett gjennomgående case. ·
**#10** **Uopplyst/uredelig KI-bruk** — særlig falske referanser fra KI (advart fra
V2025).

### Kapittel-DNA A — temakapittel (Del 1–8)

Obligatorisk blokk-struktur (plattformens blokktyper), bygd som **læringsløkker**
(begrep → eksempel → oppgave), IKKE tre samlede bolker:

1. `tip` **Eksamensvinkel** — frekvens/vekt (fra Eksamensbelegg — forfatteren finner
   IKKE på tall), hvilke sjangre (RED-SO-DRØFT/FOR-ULEMP/CASE/TILTAK/VELG-ETT) temaet
   inngår i, typiske (omskrevne) oppgaveformuleringer, og hva sensor ser etter.
2. `text` **Forkunnskaper** — kapitler i boka det bygger på + kryssbok-lenker (README-
   leserkrav), som markdown-lenker til kapitler som finnes.
3. `text` **Temaet i fagets landskap** — hvilket problem temaet svarer på, hvor det står
   i modul-strukturen og i faglige debatter (kort, konkret, «du»-form).
4. **Løkke per begrep** (gjentas gjennom kapitlet): `definition` **Kjernebegrep** (presist
   definert OG pensumforankret: hvem/hvilket verk bruker det slik — **toppnivå med
   `title`, flashcard-kilden**) → evt. `text` **Posisjoner og spenninger** (der pensum
   rommer uenighet) → `example` **Anvendelse** (begrepet brukt på en konkret case, med
   eksplisitte pensumreferanser) → `exercise` INLINE (drøftings-/anvendelsesoppgave på
   samme begrep). Deretter neste begrep.
5. `warning` **Typiske feil** — feilkodene (#1–#10) som gjelder temaet; plasseres der
   mest relevant (ofte etter en oppgave, jf. README «signalbokser etter oppgaven»).
6. `collapsible` **Pensumkart for kapitlet** — forfatter → verk → hvilke begreper/
   poenger de «eier» (flashcard-råstoff; åpner med begrepsbank-notisen fra README).

Oppgavefordeling per temakapittel: 2–3 begreps-/kontrollspørsmål (én lett innstegs-
oppgave tidlig, difficulty lett), 1–2 kortdrøftinger (løsning = disposisjonsforslag +
momentliste), 1–2 eksamenslike essayoppgaver i reell sjanger (løsning = momentliste +
disposisjon + binær selvrettingssjekkliste, IKKE fullt essay). Alle med utfylte
`hints` (første hint = disposisjonsgrep/pensumavsender, ALDRI konklusjonen).

### Kapittel-DNA B — sjangerkapittel (9.1)

1. `tip` **Eksamensvinkel** — sjangeren over årene (begge epoker).
2. `text` **Oppskrift** — trinn-for-trinn disponering per sjanger, med tidsbudsjett.
3. `text` **Binær selvrettingsrubrikk** (0/1-sjekkliste for drøfting, jf. DNA-drofting).
4. `example` **Gjennomskrevet besvarelse** med margkommentarer om hva som gir uttelling.
5. `exercise` × 3–6 nyskrevne oppgaver i sjangeren med momentliste-løsninger.

### Kapittel-DNA C — modellbesvarelse (9.2–9.4)

1. Nyskrevet eksamensoppgave i reell sjanger (merk epoke).
2. `collapsible` **A-besvarelse** — full nyskrevet tekst, margnotater («her: begrep +
   forankring», «her: motargument — dette løfter til A»), pausepunkt-markører i lange svar.
3. `collapsible` **Autentisk B-/midtnivå-besvarelse** — ekte studentspråk, litt rotete
   men god, med notater om hva som er BRA NOK og de 2–3 grepene som skiller fra A.
4. `collapsible` **Kommentert C-besvarelse** — korrekt men flat (gjengivelse uten
   drøfting, tynn forankring); ÆRLIG merket (en «C-besvarelse» skal VÆRE en C).
5. `tip` **Sensorblikket** — momentliste, vektlegging, selvdiagnose-sjekkliste (☐).

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = frekvens/vekt (telte belegg av 7 sett) +
> sjangerkoder + prioritetsklasse (perfekt/kunne/kjenne/grunnlag/meta), alt «per
> 2023/24–2025/26-arkivet». **Begrepskontrakt** = begreper som SKAL defineres med
> pensumforankring (flashcard-kilden). **Drøftingsakser** = spenningene/posisjonene
> kapitlet ruster studenten til å drøfte. **Case-forslag** = anvendelseseksempler.
> **Kvote** = quiz/flashcards. Kryssbok-lenker peker på NIH-klyngens søsken-bøker
> (thp-serien, lki235, idr109, ma460, nih-ti100/ti300/met200/met402/is205/is225/
> faf311/ppu406/spm102/spm103/spm245) — disse er ikke bygget ennå, så lenker gjøres i
> **prosa som forkunnskaps-kryssreferanser** (ingen døde markdown-lenker før bøkene
> finnes; `(verifiser lenke)` der usikker).

### Del 0 — Eksamenskart og essayhåndverk *(prioritet: PERFEKT (meta))*

#### Kapittel 0.1: Eksamenskartet — slik testes SPM105
**id:** `nih-spm105-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart (meta).
- **Description:** Eksamensformen (hjemmeeksamen A–F med alle hjelpemidler, de to
  epokene, tre deler, ordgrenser, APA 7, KI-holdningen), de seks modulene,
  temafrekvensene, vurderingsaksene, feilregisteret, sjangerkatalogen og
  kildeforbeholdet — verktøyet som styrer hele boka.
- **Eksamensbelegg:** Metakapittel (hele arkivet, 7 sett). Skal formidle: (a) **formen**
  — heldigitalt nettemne, hjemmeeksamen, gradert A–F, WISEflow + plagiatkontroll; **to
  epoker** (epoke 1 H2023–V2025: treukers, 3000–3500 ord, tre likt vektede
  moduldrøftinger; epoke 2 H2025→: 2500 ord ± 10 %, ett tiltak/utfordring → interessent-
  analyse → implementering, ulik ordfordeling per del); **alle deler obligatoriske**
  (leveres ikke én del → ikke bestått / F); (b) **de seks modulene** som styrer
  temautvalget; (c) **temafrekvenstabellen** (7 sett) — de fem bærebjelkene
  (idrettsmodellen 3/7, politikk 4/7, makt/interessenter 4/7, økonomi 4/7, organisering
  3/7) + lavfrekvente (NIF–IOC 2/7, barneidrett 1/7, implementering 2/7); (d)
  **vurderingsaksene** (§2, akse 1–4); (e) **kildeforbeholdet** — 7 sett + 7 veiledninger,
  epoke 1-veiledninger rike/ordrett A–F-nøkkel, epoke 2 kortere; **ingen
  eksempelbesvarelser** i arkivet → modellbesvarelser nyskrevne; pensumbøker ikke i
  arkivet → sidetall `(verifiser)`; (f) **KI-holdningen** — tidlig tillatt hvis opplyst/
  dokumentert, fra V2025 eksplisitt uønsket, advarsel mot falske referanser; (g)
  **quiz ≠ eksamensform** — bokas selvtester er flervalg, eksamen er ren essay.
  Prioritet: perfekt (meta).
- **Del 0-pakken (README-leserkrav):** (a) **«Slik leser du denne boka»-boks** (`text`/`tip`,
  IKKE `definition`): forklarer karakterskalaen A–F (og at **C er en god, vanlig
  karakter**, jf. README «Karakter-realisme»; unngå «A-kandidat»-språk der eksamen er
  A–F men mange stryker på formkrav), sjangerkodene skrevet fullt ut, og at feil har et
  samlet register (#1–#10). (b) **«Lite tid?»-boks** (`tip`): hurtigrute for 3–5 dager
  (kapittelrekkefølge + timeanslag av summerte `estimatedMinutes`) + presisering at
  tidsanslag er LESEtid (skrivetrening ×1,5). (c) **Kildenote for frekvens-/sensor-
  empirien**: 7 sett + 7 sensorveiledninger fra 2023/24, 2024/25, 2025/26 (semestre
  listet), med forbehold om at nye sett kan endre bildet — hentet fra EKSAMENSANALYSE.md,
  ALDRI oppdiktet. (d) **Prosedyre-/sjangerkort på ÉN side** (sjanger → én linjes oppskrift
  → tidsbudsjett → vanligste feil). (e) **Deltidsrute**: 10–12-ukers plan (~8 t/uke) med
  øvingseksamener fordelt på flere økter. (f) **«Lese mye, skrive lite»-boks**: legitim
  rute for lese-øveren + minimumsråd (skriv minst én øvingsdel for hånd på tid).
- **Innholdskontrakt:** Sjangerkatalogen som studentens sjekkliste med frekvens per
  sjanger; prognosen for neste sett (nesten sikkert epoke 2-format: tiltak/utfordring →
  interessentanalyse → implementering, forankret i Hanstad 2025; men modellen,
  politikken, økonomien og organiseringen «i beltet»). **Gjengangeroppgavene** nevnes
  eksplisitt som drillmål: idrettskretser vs. særforbund på Idrettstinget (V2024=H2024,
  nesten ordrett), «idrettsglede for alle» + barrierer, makt-scenariet
  (anleggsrealisering), NIF–IOC-figuren. Ingen forkunnskapsblokk (metakapittel).
- **Oppgavesjangre:** Ingen fagoppgaver; 3–4 refleksjonsoppgaver av typen «gitt en
  epoke 2-mal (2500 ord, tre deler 500/1000/1000) — sett opp tidsbudsjett og
  ordfordeling» og «avgjør av en oppgavetekst hvilken sjanger den er og hvilken epoke».
- **Typiske feil:** Metafeilene: tro at gjengivelse holder (#1); overse ordgrensen på
  redegjørelsen (#2); tro at arkivfrekvensene er ferske uten forbehold; bruke bokas
  quiz-form som mal for eksamenssvaret; uopplyst KI-bruk (#10).
- **Kvote:** 12 quiz / 12 flashcards (formfakta, de to epokene, modulene, temafrekvens,
  vurderingsaksene, sjangerkodene, feilregisteret, kildeforbeholdet).

#### Kapittel 0.2: Drøftingshåndverket — fra pensum til A-besvarelse
**id:** `nih-spm105-0-2` · **number:** 0.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-0-1`

- **Kapitteltype:** håndverkskapittel (meta — drøftings- og siteringshåndverk).
- **Description:** De ferdighetene som gir poeng på hver eneste del: å **disponere en
  drøfting** (problemforståelse → begrepsavklaring MED pensumavsender → strukturert
  drøfting med motargument → konklusjon som svarer på spørsmålet), å **veie balansert**,
  og å **sitere korrekt etter APA 7**. Etablerer drøftingsmalen resten av boka viser.
- **Eksamensbelegg:** Gjennomgående (vurderingsakse 1–3 på tvers av alle sjangre).
  Prioritet: perfekt (meta).
- **Forkunnskaper/kryssbok:** kap. 0.1. Kort kryssreferanse i prosa: generell akademisk
  skrive-/metodetrening deles med NIHs metodeemner **nih-met200 / nih-met402** (samfunns-
  vitenskapelig metode) og drøftingsdisiplinen med **nih-spm102 (Lederskap i idrett)** og
  **nih-spm103 (Idrett og bærekraft)**, som har samme treukers epoke 1-format og A–F-nøkkel
  — de bøkene er ikke bygget ennå, så dette skrives som prosa-forkunnskap `(verifiser)`.
- **Begrepskontrakt (flashcard-kilde):** **drøfting** (veie argumenter for/mot, ikke
  gjengi) vs. **redegjørelse** (kort, presis fremstilling — RED, forkortelsen forklart);
  **begrepsavklaring med avsender** (definisjon uten navngitt pensumkilde = C-stoff);
  **motargument/innvending**; **konklusjon som svarer på spørsmålet**; **APA 7**-grunnregler
  (forfatter-år i tekst, sidetall ved konkret poeng/sitat, samsvar mellom tekst og
  referanseliste); **anbefalt vs. kjernelitteratur** (A-svar går utover pensumboka);
  **KI-deklarering** (opplyses/dokumenteres; fra V2025 uønsket). **Binær selvrettings-
  rubrikk** (0/1): ☐ standpunkt i første avsnitt? ☐ minst én eksplisitt kobling til eget
  materiale? ☐ innvending fra navngitt pensumtenker? ☐ svart på innvendingen? ☐ forbehold
  i konklusjonen? ☐ alle delspørsmål besvart?
- **Drøftingsakser:** kompromiss-konklusjon vs. skarp veid konklusjon (jf. README
  «A-konklusjonsvariasjon» — forbehold er verktøy, ikke obligatorisk garnityr);
  hvor mye redegjørelse før det tipper over i #2 (sprengt redegjørelse).
- **Case-forslag:** vis samme mini-tema («bør spillemidler erstattes av fast
  budsjettpost?») disponert som (a) svak gjengivelse (C) og (b) balansert drøfting (A),
  med margnotater om forskjellen.
- **Typiske feil:** #1 (gjengivelse), #2 (sprengt redegjørelse), #3 (ensidig), #7 (svak
  APA 7); i tillegg: definisjon uten avsender, konklusjon som ikke svarer på spørsmålet.
- **Kvote:** 14 quiz / 14 flashcards.

**Prøve-kvote Del 0:** ingen egen prøve (dekkes av sjanger-/modellbesvarelseskapitlene i Del 9).

### Del 1 — Den norske idrettsmodellen *(prioritet: PERFEKT — ★★★★★, 3/7 + berøres i barneidrett/utsatt-H25)*

#### Kapittel 1.1: Idrettsmodellen og «idrettsglede for alle»
**id:** `nih-spm105-1-1` · **number:** 1.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-0-2`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Hva den norske idrettsmodellen ER — kjerneelementer (frivillighet,
  medlemsdemokrati, én samlet paraply, idrett for alle-visjonen), og visjonen
  «idrettsglede for alle» — inngangsporten til hele faget.
- **Eksamensbelegg:** ★★★★★ (3/7 som egen del: H2023 ordinær + utsatt, V2024; berøres i
  barneidrett H2024 og utfordrings-oppgaven H2025-utsatt). Sjanger RED-SO-DRØFT (ofte
  maks 200 ord redegjørelse + drøfting). Prioritet: perfekt. **Belegg (telt): 3 av 7
  sett som egen del, + 2 sett indirekte.**
- **Begrepskontrakt (flashcard-kilde):** **den norske idrettsmodellen** (Hanstad 2019/2025;
  Rafoss & Tangen 2017 «i utakt med tiden?»); **idrettsglede for alle** (visjon, NIF);
  **frivillighet/medlemsdemokrati**; **enhetsidretten** (én paraply, NIF); Meld. St. 26
  (2011–2012) «Den norske idrettsmodellen». Merk **utgave-sensitiv** forankring: modellens
  kjerne er stabil på tvers av Hanstad 2019 og 2025 `(verifiser sidetall)`.
- **Drøftingsakser:** modellens idealer (inkludering) vs. praksis (hvem faller utenfor);
  er modellen «i utakt med tiden» (Rafoss & Tangen) eller robust? topp vs. bredde ligger
  latent (utdypes i 6/8).
- **Case-forslag:** et idrettslag som vil realisere «idrettsglede for alle» men møter
  økonomiske/geografiske barrierer — hvilke modell-elementer hjelper, hvilke skurrer?
- **Typiske feil:** #1 (gjengi modellen uten å drøfte), #2 (sprenge 200-ords-
  redegjørelsen), #6 (Canvas som eneste kilde).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.2: Barrierer og hvem som faller utenfor
**id:** `nih-spm105-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-1-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Barrierene mot «idrett for alle» — økonomi, profesjonalisering/spissing,
  inkludering (sosial, geografisk, kjønn, funksjonsevne) — og hvorfor noen faller utenfor.
- **Eksamensbelegg:** ★★★★★ (fast «barriere»-oppgave; egen del H2023 utsatt, gjennomgående
  som drøftingsvinkel; økonomi som barriere også i økonomidelen). Sjanger RED-SO-DRØFT.
  Prioritet: perfekt. **Belegg (telt): 3 av 7 (H2023 ord./utsatt, V2024) som eksplisitt
  barriere-drøfting.**
- **Begrepskontrakt (flashcard-kilde):** **økonomi som barriere** (Oslo Economics/KUD 2020;
  Hanstad); **profesjonalisering/spissing/topping**; **inkludering** (kjønn — Hovden 2011
  «kvinner i kjønnsklemme»; sosial/geografisk/funksjonsevne); **frafall**. Forankrings-
  bredde premieres (anbefalt litteratur).
- **Drøftingsakser:** økonomisk barriere vs. profesjonalisering — hvilken veier tyngst?
  tiltak mot barrierer (kontingentstøtte, lavterskel) vs. deres bivirkninger; kjønn/
  ledelse (Hovden) som egen barriere.
- **Case-forslag:** en familie med to barn som ikke har råd til utstyr/kontingent i en
  spisset ungdomsidrett — koble til Oslo Economics-rapporten og modellens visjon.
- **Typiske feil:** #1 (liste barrierer uten å drøfte vekt), #6 (Canvas), #7 (APA på
  rapport/melding).
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 1.3: Idrettsmodellen i drøfting — dilemmaer og selvvalgt fokus
**id:** `nih-spm105-1-3` · **number:** 1.3 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm105-1-2`

- **Kapitteltype:** temakapittel (perfekt — anvendt drøfting).
- **Description:** Å velge ETT element ved modellen og drøfte et dilemma ved det (V2024-
  formatet), og å bruke modellen som ramme for et selvvalgt tiltak (epoke 2). Trener
  overgangen fra beskrivelse til selvstendig, avgrenset drøfting.
- **Eksamensbelegg:** ★★★★★ (V2024 «selvvalgt dilemma ved ett element»; grunnlag for TILTAK-
  oppgavens del 1 i epoke 2). Sjanger RED-SO-DRØFT + TILTAK-forberedelse. Prioritet:
  perfekt. **Belegg (telt): 1 av 7 eksplisitt (V2024), + rammefunksjon i 2 epoke 2-sett.**
- **Begrepskontrakt (flashcard-kilde):** **selvvalgt fokus/avgrensning**; **dilemma** (to
  legitime hensyn i konflikt); kobling **modell → læringsutbytte** (epoke 2-krav);
  **samfunnsrelevans** som begrunnelse.
- **Drøftingsakser:** hvilket modell-element bærer best en drøfting? hvordan avgrense uten
  å bli overfladisk? (vippe-case: to elementer er begge forsvarlige å velge).
- **Case-forslag:** student velger «medlemsdemokrati» og drøfter spenningen mellom bredt
  demokrati og handlekraft — merk som vippe-case (flere valg forsvarlige).
- **Typiske feil:** #1, #9 (løs rød tråd hvis brukt som epoke 2-inngang), #2.
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 1:** 4 prøver (1.A idrettsmodellens kjerneelementer + «idrettsglede for
alle» · 1.B barrierer og frafall · 1.C selvvalgt dilemma/avgrensning på eksamensnivå
(RED-SO-DRØFT) · 1.D samlet modell-prøve, epoke 1- og epoke 2-vinkel).

### Del 2 — Norsk idretts organisering og Idrettstinget *(prioritet: KUNNE→PERFEKT — ★★★★☆, 3/7)*

#### Kapittel 2.1: Organisasjonskartet — fra idrettslag til NIF
**id:** `nih-spm105-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-1-1`

- **Kapitteltype:** temakapittel (grunnlag→kunne).
- **Description:** Hvordan norsk idrett er organisert — idrettslag → idrettsråd →
  idrettskrets / særkrets / særforbund → NIF sentralt — og de to organiseringslinjene
  (geografisk vs. gren). Fundamentet for makt-, politikk- og case-delene.
- **Eksamensbelegg:** ★★★★☆ (grunnlag i praktisk talt hvert sett; forutsetning for CASE og
  interessentanalyse). Sjanger RED-SO-DRØFT/CASE. Prioritet: kunne (grunnlag for
  topptemaene). **Belegg (telt): 3 av 7 som eksplisitt organiseringsdel (V2024, H2024,
  + berøres bredt).**
- **Begrepskontrakt (flashcard-kilde):** **idrettslag**, **idrettsråd** (kommunenivå),
  **idrettskrets** (geografisk/fylke), **særkrets**, **særforbund** (gren), **NIF** (paraply);
  **to organiseringslinjer** (geografisk vs. gren); Hanstad (organisasjonskart figur
  `(verifiser sidetall)`).
- **Drøftingsakser:** dobbeltorganisering (geografisk + gren) — styrke (bred kontakt) vs.
  svakhet (rolleuklarhet/dobbeltarbeid); hvor ligger makten i kartet?
- **Case-forslag:** et nytt idrettslag som skal orientere seg — hvem henvender de seg til
  for anlegg (idrettsråd → kommune) vs. for gren-spørsmål (særforbund)? (forbereder #5).
- **Typiske feil:** #5 (feil myndighetsnivå), #1, #6.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.2: Idrettstinget og lik delegatfordeling
**id:** `nih-spm105-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-2-1`

- **Kapitteltype:** temakapittel (perfekt for denne resirkulerte klassikeren).
- **Description:** Idrettstinget som øverste myndighet, og den faste eksamensklassikeren:
  fordeler og ulemper ved at **idrettskretser og særforbund har like mange delegater**.
- **Eksamensbelegg:** ★★★★☆ og **nesten ordrett resirkulert** (V2024 og H2024 praktisk talt
  identiske). Sjanger FOR-ULEMP. Prioritet: perfekt for denne sjangeren. **Belegg (telt):
  2 av 7 nesten identiske (V2024, H2024).**
- **Begrepskontrakt (flashcard-kilde):** **Idrettstinget** (øverste myndighet, hvert 4. år);
  **lik delegatfordeling** (idrettskretser = særforbund); **geografisk vs. gren-interesse**;
  historisk betinget kompromiss (Hanstad `(verifiser)`).
- **Drøftingsakser:** FOR (balanserer geografi og gren, sikrer bred forankring) vs. IMOT
  (særforbund representerer flere medlemmer → underrepresentert; rolleuklarhet). **Begge
  sider MÅ frem** (sensorkrav; #3 er hovedfellen her).
- **Case-forslag:** et stort særforbund som mener det er underrepresentert — skriv den
  balanserte avveiingen begge veier.
- **Typiske feil:** #3 (ensidig — den store fellen her), #1, #7.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 2.3: Organisering i drøfting — modellens styrker og svakheter
**id:** `nih-spm105-2-3` · **number:** 2.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-2-2`

- **Kapitteltype:** temakapittel (kunne — anvendt drøfting).
- **Description:** Å drøfte organisasjonsmodellen som helhet — historisk betinget kontra
  hensiktsmessig i dag, god myndighetskontakt vs. dobbeltarbeid — og koble organisering
  til makt og interessenter.
- **Eksamensbelegg:** ★★★★☆ (organiseringsdrøfting inngår i flere sett). Sjanger DRØFT/
  FOR-ULEMP. Prioritet: kunne (differensierer). **Belegg (telt): inngår i 3 av 7
  organiseringssett som drøftingsvinkel.**
- **Begrepskontrakt (flashcard-kilde):** **historisk betinget modell**; **rolleuklarhet/
  dobbeltarbeid**; **myndighetskontakt** (bred tilgang til politikk); kobling organisering
  → makt (bro til Del 6).
- **Drøftingsakser:** «modellen er utdatert» (Rafoss & Tangen) vs. «modellen sikrer unik
  frivillig forankring»; sentralisering vs. lokal autonomi.
- **Case-forslag:** foreslå én endring i organiseringen og drøft hvem som vinner/taper
  (kobler til interessenter, Del 6).
- **Typiske feil:** #1, #3, #6.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 2:** 4 prøver (2.A organisasjonskartet + myndighetsnivåer · 2.B
Idrettstinget: fordeler/ulemper ved lik delegatfordeling (FOR-ULEMP, balansert) · 2.C
organiseringsmodellen i drøfting · 2.D samlet organiseringsprøve på eksamensnivå).

### Del 3 — Idrett i politikk – politikk i idrett *(prioritet: PERFEKT — ★★★★★, 4/7)*

#### Kapittel 3.1: Statlig idrettspolitikk og idrettens autonomi
**id:** `nih-spm105-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Forholdet mellom stat og organisert idrett — statlige føringer via
  stortingsmeldinger og Kultur- og likestillingsdepartementet (KUD), og idrettens
  autonomi (selvstyre) overfor staten.
- **Eksamensbelegg:** ★★★★★ (4/7; V2025 «statlig idrettspolitikk via stortingsmeldinger»).
  Sjanger RED-SO-DRØFT. Prioritet: perfekt. **Belegg (telt): 4 av 7 (H2023 ord.,
  V2024, V2025, + berøres H2023 utsatt).**
- **Begrepskontrakt (flashcard-kilde):** **idrettens autonomi** (selvstyre); **statlige
  føringer**; **stortingsmelding** (Meld. St. 26 2011–2012); **KUD** (Kultur- og
  likestillingsdepartementet); «armlengdes avstand»; Næss (2021) om idrett/politikk/
  menneskerettigheter.
- **Drøftingsakser:** autonomi vs. statlig styring (den som betaler, bestemmer?);
  legitim politisk føring vs. uønsket innblanding; idrett som politisk redskap.
- **Case-forslag:** en stortingsmelding stiller nye krav (f.eks. bærekraft/inkludering)
  som betingelse for midler — drøft spenningen mot autonomien.
- **Typiske feil:** #1 (gjengi meldingen i stedet for å drøfte — hovedfellen), #2, #7.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.2: Politikk i idretten — idrettens egen politikk
**id:** `nih-spm105-3-2` · **number:** 3.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-3-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Idrettens EGEN politikk (idrettspolitisk dokument, anleggspolitikk,
  prioriteringer topp/bredde) og hvordan idretten selv utøver politikk — ikke bare
  mottar statlig politikk.
- **Eksamensbelegg:** ★★★★★ (læringsutbytte «idrettens egen politikk, inkludert
  anleggspolitikk»; inngår i politikk-/makt-sett). Sjanger RED-SO-DRØFT/CASE. Prioritet:
  perfekt. **Belegg (telt): idrettens egen politikk inngår i 4 av 7 politikk-/makt-sett.**
- **Begrepskontrakt (flashcard-kilde):** **idrettspolitisk dokument** (NIFs eget);
  **anleggspolitikk**; **topp vs. bredde-prioritering**; **høring** (påvirke langtidsplan);
  Tangen (2024) om anleggenes politiske/sosiale betydning.
- **Drøftingsakser:** topp vs. bredde i idrettens egne prioriteringer; anlegg som
  politisk gode; demokrati i idrettens interne politikk (bro til kap. 12-dilemmaene, 6/8).
- **Case-forslag:** løfte bærekraft inn i en langtidsplan gjennom høring (H2023-utsatt-
  vinkel) — hvilke virkemidler har idretten selv?
- **Typiske feil:** #1, #5 (feil nivå ved anleggspåvirkning), #6.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 3.3: Stat–idrett i drøfting — føringer, autonomi og finansieringskobling
**id:** `nih-spm105-3-3` · **number:** 3.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-3-2`

- **Kapitteltype:** temakapittel (perfekt — anvendt drøfting; bro til Del 4).
- **Description:** Å føre den fulle drøftingen av stat–idrett-forholdet der politikk og
  finansiering nesten alltid er sammenvevd — forbereder økonomidelen.
- **Eksamensbelegg:** ★★★★★ (politikk koblet til finansiering i nesten hvert politikk-sett).
  Sjanger DRØFT. Prioritet: perfekt. **Belegg (telt): politikk↔finansiering-kobling i 4
  av 7.**
- **Begrepskontrakt (flashcard-kilde):** **føring gjennom finansiering** (spillemidler som
  styringsverktøy — utdypes i Del 4); **legitimitet**; **måloppnåelsesrapportering**.
- **Drøftingsakser:** finansiering som subtil politisk styring; er autonomien reell når
  staten kontrollerer pengestrømmen? skarp vs. kompromiss-konklusjon (konklusjons-
  variasjon — minst én skarp landing).
- **Case-forslag:** staten knytter spillemidler til nye inkluderingskrav — drøft om det er
  legitim politikk eller uthuling av autonomien (skriv en SKARP konklusjon her).
- **Typiske feil:** #1, #3, #7.
- **Kvote:** 18 quiz / 20 flashcards.

**Prøve-kvote Del 3:** 4 prøver (3.A autonomi + stortingsmelding + KUD · 3.B idrettens egen
politikk + anleggspolitikk · 3.C stat–idrett-drøfting med finansieringskobling
(eksamensnivå) · 3.D samlet politikkprøve, begge epoker).

### Del 4 — Idrettens økonomi og finansiering *(prioritet: KUNNE — ★★★★☆, 4/7)*

#### Kapittel 4.1: Spillemidler og finansieringssystemet
**id:** `nih-spm105-4-1` · **number:** 4.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-3-1`

- **Kapitteltype:** temakapittel (kunne→perfekt for spillemidler).
- **Description:** Hvordan norsk idrett finansieres — spillemidler (Norsk Tippings
  overskudd, tildelt etter søknad, anlegg som største post), momskompensasjon,
  medlemsinntekter, sponsor — og hvordan systemet henger sammen med politikken.
- **Eksamensbelegg:** ★★★★☆ (4/7; spillemidler vs. fast budsjettpost er fast drøftingstema).
  Sjanger RED-SO-DRØFT/FOR-ULEMP. Prioritet: kunne (differensierer). **Belegg (telt): 4 av
  7 økonomisett (H2023 ord./utsatt, V2024, + berøres bredt).**
- **Begrepskontrakt (flashcard-kilde):** **spillemidler** (Norsk Tipping-overskudd, søknad
  via NIF, anlegg største post); **momskompensasjon**; **medlemsinntekter/kontingent**;
  **sponsor/kommersielle inntekter**; **enerettsmodellen** (Norsk Tipping); Hanstad
  (økonomikapittel `(verifiser sidetall)`).
- **Drøftingsakser:** spillemidler vs. fast statsbudsjettpost (forutsigbarhet vs. politisk
  binding); anleggenes dominans i tildelingen; kommersialisering vs. frivillighet.
- **Case-forslag:** et forbund vurderer å be om fast budsjettpost i stedet for spillemidler
  — drøft fordeler og ulemper balansert (FOR-ULEMP).
- **Typiske feil:** #3 (ensidig i budsjettpost-drøftingen), #1, #7.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 4.2: Særforbundenes inntekter og økonomistyring
**id:** `nih-spm105-4-2` · **number:** 4.2 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm105-4-1`

- **Kapitteltype:** temakapittel (kunne).
- **Description:** Særforbundenes inntektssammensetning og økonomistyring — inkludert den
  faste case-oppgaven om å snu et forbunds underskudd (hard 150-ords redegjørelse + tiltak).
- **Eksamensbelegg:** ★★★★☆ (H2023 utsatt: særforbunds inntekter + snu underskudd; maks 150
  ord). Sjanger RED-SO-DRØFT/CASE. Prioritet: kunne. **Belegg (telt): 2 av 7 eksplisitt
  om særforbundsøkonomi (H2023 utsatt + berøres).**
- **Begrepskontrakt (flashcard-kilde):** **inntektssammensetning** (spillemidler, sponsor,
  medlem, arrangement, TV/media); **kostnadsdrivere**; **budsjettbalanse/underskudd**;
  **økonomistyring** i frivillig organisasjon (grensesnitt mot SPM 245).
- **Drøftingsakser:** inntektsdiversifisering vs. avhengighet av spillemidler;
  kommersialisering som løsning vs. verdikonflikt; kortsiktige kutt vs. langsiktig
  bærekraft.
- **Case-forslag:** generalsekretær skal snu et underskudd — prioriter tiltak og begrunn
  (hold redegjørelsen kort, #2).
- **Typiske feil:** #2 (sprenge 150-ords-redegjørelsen), #1, #3.
- **Kvote:** 18 quiz / 20 flashcards.
- **Kryssbok (prosa):** for tallmekanikk/regnskap henvises til **nih-spm245 (Økonomi)** —
  et komplementært, regne-/fasitbasert emne; SPM105 holder seg til den idrettspolitiske/
  organisatoriske økonomien (drøftende), ikke tallutledning. Boka nih-spm245 er ikke
  bygget ennå → skriv som prosa-kryssreferanse `(verifiser)`.

#### Kapittel 4.3: Økonomi som barriere og økonomien i drøfting
**id:** `nih-spm105-4-3` · **number:** 4.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-4-2`

- **Kapitteltype:** temakapittel (kunne — anvendt drøfting; kobler til Del 1).
- **Description:** Økonomi som barriere mot «idrett for alle» (Oslo Economics/KUD 2020) og
  den fulle økonomidrøftingen der finansiering, barrierer og politikk møtes.
- **Eksamensbelegg:** ★★★★☆ (økonomi som barriere gjennomgående; kobler modell + politikk +
  økonomi). Sjanger DRØFT. Prioritet: kunne. **Belegg (telt): økonomi-som-barriere inngår
  i 3 av 7 (modell-/økonomisett).**
- **Begrepskontrakt (flashcard-kilde):** **økonomi som barriere** (Oslo Economics/KUD 2020);
  **kostnadsnivå/utstyrspress**; **omfordelingsvirkemidler** (fritidskort, kontingentstøtte);
  kobling til inkludering (Del 1).
- **Drøftingsakser:** markedsfinansiering vs. omfordeling; når blir idretten et
  klassegode? tiltakenes utilsiktede virkninger.
- **Case-forslag:** en kommune innfører fritidskort — drøft virkning på barrierer og på
  idrettslagenes økonomi (bro til Del 8 samfunnsansvar).
- **Typiske feil:** #1, #6, #7.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (4.A spillemidler + finansieringssystem · 4.B spillemidler
vs. fast budsjettpost + særforbundsøkonomi (FOR-ULEMP/CASE) · 4.C økonomi som barriere i
drøfting · 4.D samlet økonomiprøve på eksamensnivå).

### Del 5 — Norge og internasjonal idrett (NIF–IOC) *(prioritet: KJENNE — ★★★☆☆, 2/7, høyt presisjonskrav)*

#### Kapittel 5.1: NIF, IOC og den kritiske forskjellen
**id:** `nih-spm105-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm105-2-1`

- **Kapitteltype:** temakapittel (kjenne — men faktapresisjon perfekt).
- **Description:** Norsk idretts kobling til internasjonale organisasjoner — og fagets
  klassiske faktafeil: NIF er nasjonal olympisk komité, men **ikke medlem av IOC**; IOC
  velger individuelle medlemmer; et norsk IOC-medlem representerer **IOC i NIFs styre**,
  ikke NIF i IOC.
- **Eksamensbelegg:** ★★★☆☆ i frekvens (2/7: H2024, V2025, nesten identiske) men **høyt
  presisjonskrav** (vurderingsakse 4 — feil trekker uansett drøfting). Sjanger RED-SO-DRØFT/
  FOR-ULEMP. Prioritet: kjenne (frekvens), perfekt (presisjon). **Belegg (telt): 2 av 7
  (H2024, V2025).**
- **Begrepskontrakt (flashcard-kilde):** **NIF** (Norges idrettsforbund og olympiske og
  paralympiske komité — nasjonal olympisk komité); **IOC** (Den internasjonale olympiske
  komité); **IOC ≠ NIF-medlemskap** (IOC velger individuelle medlemmer); **IOC-medlem i
  NIFs styre representerer IOC** (ikke NIF); **særforbund → internasjonale særforbund**
  (egen linje); Lesjø (2017) «Styrt fra Lausanne?».
- **Drøftingsakser:** internasjonal påvirkning på norsk idrett (Lesjø); NIFs handlingsrom
  vs. IOC-føringer; automatisk IOC-medlemskap i NIF-styret — legitimt eller
  demokratisk problematisk (FOR-ULEMP).
- **Case-forslag:** forklar en medstudent hvorfor et norsk IOC-medlem IKKE er «Norges
  representant i IOC» — skriv det presise svaret (direkte mot #4).
- **Typiske feil:** #4 (NIF–IOC-forvekslingen — den navngitte fellen), #1, #7.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 5.2: IOCs demokrati og internasjonal styring
**id:** `nih-spm105-5-2` · **number:** 5.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-5-1`

- **Kapitteltype:** temakapittel (kjenne).
- **Description:** IOCs oppbygging og demokrati — sesjonens sammensetning, hvordan
  medlemmer velges, Agenda 2020-reformene — og drøftingen av hvor demokratisk
  internasjonal idrett egentlig er.
- **Eksamensbelegg:** ★★★☆☆ (H2024 «IOCs demokrati»; V2025 «IOC-medlemmer i NIF-styret»).
  Sjanger DRØFT. Prioritet: kjenne. **Belegg (telt): 2 av 7 (H2024, V2025).**
- **Begrepskontrakt (flashcard-kilde):** **IOC-sesjonen** (medlemssammensetning `(verifiser
  70+15+15+15-tallene)`); **individuelt valgte medlemmer** (kooptasjon); **Agenda 2020**
  (reformpakke); **legitimitet/representativitet** i internasjonal idrett; Lesjø (2017).
- **Drøftingsakser:** IOC som selvsupplerende elite vs. reformert (Agenda 2020); demokrati
  vs. autonomi på internasjonalt nivå; norsk innflytelse i praksis.
- **Case-forslag:** drøft om Agenda 2020 faktisk gjorde IOC mer demokratisk (bruk Lesjø
  som motstemme).
- **Typiske feil:** #4 (bland IOC-struktur med NIF), #1, #7.
- **Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 5:** 4 prøver (5.A NIF–IOC-forskjellen (faktapresisjon, direkte mot #4) ·
5.B IOCs demokrati + Agenda 2020 · 5.C automatisk IOC-medlemskap i NIF-styret (FOR-ULEMP) ·
5.D samlet internasjonal-prøve på eksamensnivå).

### Del 6 — Makt og idrettens interessenter *(prioritet: PERFEKT — ★★★★★, 4/7, ryggraden i epoke 2)*

#### Kapittel 6.1: Makttyper og maktkilder i idrettsorganisasjonen
**id:** `nih-spm105-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-2-1`

- **Kapitteltype:** temakapittel (perfekt).
- **Description:** Ulike former for makt og maktkilder i idrettsorganisasjonen — og hvordan
  makt utøves på ulike nivåer (leder, styre, forbund, ting).
- **Eksamensbelegg:** ★★★★★ (læringsutbytte «identifisere og forklare ulike former for
  makt»; makt-scenariet gjennomgående). Sjanger RED-SO-DRØFT/CASE. Prioritet: perfekt.
  **Belegg (telt): makt/interessenter i 4 av 7, dominerer epoke 2.**
- **Begrepskontrakt (flashcard-kilde):** **makttyper** (posisjons-/ekspert-/relasjons-/
  ressursmakt e.l. `(verifiser Hanstad-typologi)`); **maktkilder**; **formell vs. uformell
  makt**; **avtroppende leders makt** (H2023-scenario); Skaset (2011) «Kampen om makten i
  NIF».
- **Drøftingsakser:** legitim vs. illegitim maktbruk; makt konsentrert vs. spredt i
  modellen; makt og demokrati (bro til kap. 12-dilemmaene).
- **Case-forslag:** en avtroppende leder bruker sin makt for å realisere et anlegg før
  avgang — drøft maktkildene og legitimiteten (Skaset som ramme).
- **Typiske feil:** #1 (liste makttyper uten å drøfte), #5 (feil nivå i case), #6.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 6.2: Interessenter — identifikasjon og analyse
**id:** `nih-spm105-6-2` · **number:** 6.2 · **estimatedMinutes:** 60 · **prerequisites:** `nih-spm105-6-1`

- **Kapitteltype:** temakapittel (perfekt — epoke 2s ryggrad).
- **Description:** Interessentteori som eksamens-ryggrad — å identifisere interessenter,
  analysere deres makt/interesse, og drøfte muligheter/utfordringer i samarbeidet. **Den
  viktigste enkeltferdigheten i dagens format.**
- **Eksamensbelegg:** ★★★★★ (interessentanalyse er del 2 i BEGGE epoke 2-sett; kjerne i
  makt-delen). Sjanger TILTAK/CASE. Prioritet: perfekt. **Belegg (telt): interessentanalyse
  eksplisitt i 2 av 7 (begge epoke 2-sett) + implisitt i makt-sett.**
- **Begrepskontrakt (flashcard-kilde):** **interessent** (stakeholder — enhver som påvirker
  eller påvirkes); **interessentanalyse** (identifisere → kartlegge makt/interesse →
  prioritere); **primær vs. sekundær interessent**; **interessentteori** (Hanstad 2025
  kap. 2 `(verifiser)`; utgave-sensitiv — ny i 2025-boka); **samarbeidsrelasjon**
  (muligheter/utfordringer).
- **Drøftingsakser:** hvilke interessenter er kritiske for et gitt tiltak; makt/interesse-
  matrise som verktøy; interessekonflikt vs. felles verdiskaping.
- **Case-forslag:** et lavterskel-tiltak i et idrettslag — identifiser 2–3 interessenter
  (kommune, sponsor, foreldre, krets) og analyser samarbeidet (direkte epoke 2-del 2).
- **Typiske feil:** #8 (interessentdel uten interessentteori), #9 (løs rød tråd), #1.
- **Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 6.3: Case og roller — å handle på riktig nivå
**id:** `nih-spm105-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-6-2`

- **Kapitteltype:** temakapittel (perfekt — CASE-sjangeren).
- **Description:** Case-/scenario-oppgaven der studenten plasseres i en rolle
  (styremedlem, generalsekretær, yngste medlem i et lagsstyre) og må handle — med korrekt
  myndighetsnivå og relevante interessenter for nettopp den rollen.
- **Eksamensbelegg:** ★★★★★ (CASE gjennomgående: anleggsrealisering, snu underskudd,
  bærekraft i langtidsplan). Sjanger CASE. Prioritet: perfekt. **Belegg (telt): rolle-case i
  3 av 7 (H2023 ord./utsatt makt-scenario, V2024/organisering-case).**
- **Begrepskontrakt (flashcard-kilde):** **rolle-/nivåbevissthet**: idrettslag/idrettsråd →
  **kommunen**; krets → indirekte via idrettsrådet; særforbund/NIF → påvirke lokalt;
  **anleggsrealisering** (hvem eier virkemidlene); **høringsprosess**.
- **Drøftingsakser:** hvilke virkemidler har rollen; interessenter for og imot; hva
  sensor belønner (vise riktig nivå — direkte mot #5).
- **Case-forslag:** yngste medlem i et lagsstyre vil løfte bærekraft inn i langtidsplanen
  via høring — hvilket nivå, hvilke interessenter?
- **Typiske feil:** #5 (feil myndighetsnivå — kjernefellen i CASE), #1, #9.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 6.4: Makt og interessenter i drøfting — samfunnsansvar
**id:** `nih-spm105-6-4` · **number:** 6.4 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-6-3`

- **Kapitteltype:** temakapittel (perfekt — anvendt drøfting; bro til Del 8).
- **Description:** Å knytte interessentanalyse til **samfunnsansvar** — hvordan
  interessentsamarbeid former en klubbs/organisasjons samfunnsansvar — og den fulle
  drøftingen av makt og interessenter.
- **Eksamensbelegg:** ★★★★★ (samfunnsansvar-kobling eksplisitt i begge epoke 2-sett).
  Sjanger TILTAK/DRØFT. Prioritet: perfekt. **Belegg (telt): interessenter↔samfunnsansvar i
  2 av 7 (epoke 2) + makt-drøfting bredt.**
- **Begrepskontrakt (flashcard-kilde):** **samfunnsansvar** (CSR i idrettskontekst);
  **samfunnsengasjement**; **interessent → samfunnsansvar-kobling**; **legitimitet gjennom
  interessentdialog**.
- **Drøftingsakser:** samfunnsansvar som verdi vs. omdømmeverktøy; interessentmakt som
  driver for samfunnsansvar; grenser for en frivillig organisasjons ansvar.
- **Case-forslag:** en klubb bruker et inkluderingstiltak til å bygge samfunnsansvar —
  drøft interessentenes rolle (skarp konklusjon her, konklusjonsvariasjon).
- **Typiske feil:** #8, #1, #9.
- **Kvote:** 20 quiz / 20 flashcards.

**Prøve-kvote Del 6:** 4 prøver (6.A makttyper/maktkilder + avtroppende leders makt · 6.B
interessentidentifikasjon + interessentanalyse (TILTAK/CASE) · 6.C rolle-case med riktig
myndighetsnivå (direkte mot #5) · 6.D interessenter, samfunnsansvar og makt i samlet
drøfting på eksamensnivå).

### Del 7 — Barneidrett *(prioritet: KJENNE — ★★★☆☆, 1/7 egen del + barriere-eksempel)*

#### Kapittel 7.1: Barneidrettsmodellen, rettigheter og bestemmelser
**id:** `nih-spm105-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm105-1-2`

- **Kapitteltype:** temakapittel (kjenne — men faktapresisjon når det kommer).
- **Description:** Barneidretten som eget tema — barneidrettsmodellen, Idrettens
  barnerettigheter og barneidrettsbestemmelsene — og barnas plass i den norske
  idrettsmodellen.
- **Eksamensbelegg:** ★★★☆☆ (egen del bare H2024, men da med høyt faktakrav; yndet
  barriere-eksempel ellers). Sjanger RED-SO-DRØFT. Prioritet: kjenne. **Belegg (telt): 1 av
  7 som egen del (H2024) + berøres via barrierer i 2 sett.**
- **Begrepskontrakt (flashcard-kilde):** **barneidrettsmodellen**; **Idrettens
  barnerettigheter** (NIF); **barneidrettsbestemmelsene** (alders-/konkurranseregler);
  **allsidighet vs. tidlig spesialisering**; **barnets beste**.
- **Drøftingsakser:** rettighetsvern vs. konkurranseidrettens logikk; allsidighet vs.
  spissing; foreldre-/trenerpress.
- **Case-forslag:** et lag vil starte tidlig konkurranse for 9-åringer — drøft mot
  barneidrettsbestemmelsene og barnas rettigheter.
- **Typiske feil:** #1, #2, #6 (Canvas i stedet for bestemmelsene).
- **Kvote:** 16 quiz / 18 flashcards.

#### Kapittel 7.2: Barneidrett i drøfting — styrker, utfordringer og barrierer
**id:** `nih-spm105-7-2` · **number:** 7.2 · **estimatedMinutes:** 40 · **prerequisites:** `nih-spm105-7-1`

- **Kapitteltype:** temakapittel (kjenne — anvendt drøfting; kobler til Del 1).
- **Description:** Styrker og utfordringer i barneidretten, og barneidrett som
  barriere-eksempel (økonomi, profesjonalisering) — kobler barneidrett til modellens
  inkluderingsvisjon.
- **Eksamensbelegg:** ★★★☆☆ (H2024 «styrker/utfordringer»; barriere-vinkel ellers). Sjanger
  DRØFT. Prioritet: kjenne. **Belegg (telt): styrker/utfordringer eksplisitt 1 av 7
  (H2024) + barriere-berøring 2 sett.**
- **Begrepskontrakt (flashcard-kilde):** **profesjonalisering i barneidrett**; **økonomisk
  barriere for barn** (Oslo Economics/KUD 2020); **frafall i ungdomsidrett**; **inkludering**.
- **Drøftingsakser:** barneidrettens styrker (bredde, mestring) vs. utfordringer (press,
  kostnad); tiltak og bivirkninger.
- **Case-forslag:** drøft om barneidrettsbestemmelsene løser eller flytter
  profesjonaliseringsproblemet (vippe-case).
- **Typiske feil:** #1, #3, #6.
- **Kvote:** 14 quiz / 16 flashcards.

**Prøve-kvote Del 7:** 4 prøver (7.A barneidrettsmodellen + rettigheter + bestemmelser · 7.B
styrker og utfordringer i barneidretten · 7.C barneidrett som barriere-eksempel i drøfting ·
7.D samlet barneidrettsprøve på eksamensnivå).

### Del 8 — Implementering, strategi og samfunnsansvar (epoke 2) *(prioritet: KUNNE — ★★★☆☆, 2/7 epoke 2, forventet fast fremover)*

#### Kapittel 8.1: Tiltaksoppgaven — velg, begrunn og hold den røde tråden
**id:** `nih-spm105-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-6-2`

- **Kapitteltype:** temakapittel (kunne — epoke 2s inngang).
- **Description:** Det nye formatets del 1: å velge et konkret tiltak / en utfordring,
  beskrive det, begrunne samfunnsrelevansen og koble til et læringsutbytte — og bygge
  hele besvarelsen på ÉN rød tråd.
- **Eksamensbelegg:** ★★★☆☆ (TILTAK-del 1 i begge epoke 2-sett; nesten sikker fremover).
  Sjanger TILTAK. Prioritet: kunne. **Belegg (telt): 2 av 7 (H2025 ord./utsatt).**
- **Begrepskontrakt (flashcard-kilde):** **tiltak vs. utfordring** (H2025 ord. = tiltak,
  utsatt = utfordring); **samfunnsrelevans**; **kobling til læringsutbytte**; **rød tråd**
  (samme case gjennom alle tre deler); Hanstad (2025) kap. 1 «utfordringer i samfunnet»
  `(verifiser)`.
- **Drøftingsakser:** hvilket tiltak bærer en hel besvarelse; avgrensning vs. bredde;
  samfunnsrelevans som reell begrunnelse vs. floskel.
- **Case-forslag:** velg «et gratis lavterskeltilbud for barn i en levekårsutsatt bydel»
  og begrunn valget + koble til læringsutbytte (start på en gjennomgående case brukt i
  8.2/8.3).
- **Typiske feil:** #9 (løs rød tråd — kjernefellen), #1, #8.
- **Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 8.2: Implementeringsteori og strategiske valg
**id:** `nih-spm105-8-2` · **number:** 8.2 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-8-1`

- **Kapitteltype:** temakapittel (kunne — epoke 2s teorianker).
- **Description:** Implementeringsteori som eksplisitt etterspurt teori — å velge en
  implementeringstilnærming, begrunne den, og drøfte strategiske valg (ressurser, økonomi,
  anlegg) for tiltaket.
- **Eksamensbelegg:** ★★★☆☆ (implementering = del 3 i begge epoke 2-sett; teori eksplisitt
  krevd). Sjanger TILTAK. Prioritet: kunne. **Belegg (telt): 2 av 7 (H2025 ord./utsatt).**
- **Begrepskontrakt (flashcard-kilde):** **implementering** (fra plan til praksis);
  **implementeringsteori** (Hanstad 2025 kap. 2 `(verifiser)`; utgave-sensitiv — ny i
  2025); **top-down vs. bottom-up** `(verifiser)`; **ressurser/økonomi/anlegg** som
  implementeringsbetingelser; **barrierer for gjennomføring**.
- **Drøftingsakser:** valg av implementeringstilnærming og hvorfor; ressurskrav vs.
  realisme; kobling implementering ↔ interessenter (Del 6).
- **Case-forslag:** implementer lavterskeltiltaket fra 8.1 — velg tilnærming, begrunn,
  drøft ressurs-/anleggsbehov (samme røde tråd).
- **Typiske feil:** #8 (implementeringsdel uten implementeringsteori), #9, #1.
- **Kvote:** 18 quiz / 20 flashcards.

#### Kapittel 8.3: Refleksjon — styrker, svakheter og implikasjoner
**id:** `nih-spm105-8-3` · **number:** 8.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-8-2`

- **Kapitteltype:** temakapittel (kunne — epoke 2s avslutning).
- **Description:** Å reflektere over tiltakets styrker, svakheter og implikasjoner — den
  avsluttende drøftingen som binder tiltak, interessenter og implementering sammen.
- **Eksamensbelegg:** ★★★☆☆ (refleksjon over styrker/svakheter/implikasjoner eksplisitt
  etterspurt, epoke 2). Sjanger TILTAK/DRØFT. Prioritet: kunne. **Belegg (telt): 2 av 7
  (H2025 ord./utsatt).**
- **Begrepskontrakt (flashcard-kilde):** **styrker/svakheter** (kritisk selvvurdering);
  **implikasjoner** (konsekvenser for interessenter/organisasjon/samfunn); **bærekraft i
  tiltaket** (bro til nih-spm103); **helhetlig refleksjon**.
- **Drøftingsakser:** ærlig svakhetsvurdering vs. skjønnmaling; kortsiktig effekt vs.
  langsiktig implikasjon; skarp vs. forbeholden konklusjon (konklusjonsvariasjon).
- **Case-forslag:** vurder lavterskeltiltaket kritisk — hva kan gå galt, og for hvem?
  (avslutt den gjennomgående casen).
- **Typiske feil:** #1 (ukritisk gjengivelse), #9, #8.
- **Kvote:** 18 quiz / 18 flashcards.
- **Kryssbok (prosa):** bærekraftvinkelen på tiltak deles med **nih-spm103 (Idrett og
  bærekraft)** — samme treukers epoke 1-arkitektur, men SPM103 eier bærekraftteorien;
  boka er ikke bygget ennå → prosa-kryssreferanse `(verifiser)`.

**Prøve-kvote Del 8:** 4 prøver (8.A tiltaksvalg + samfunnsrelevans + rød tråd · 8.B
interessentanalyse for et tiltak (kobler Del 6) · 8.C implementeringsteori + strategiske
valg · 8.D full epoke 2-generalprøve: tiltak → interessentanalyse → implementering
(2500-ords-format, tre deler)).

### Del 9 — Eksamenstrening *(prioritet: PERFEKT (meta))*

#### Kapittel 9.1: Sjangerspillet — oppskrifter for RED-SO-DRØFT, FOR-ULEMP, CASE, TILTAK, VELG-ETT
**id:** `nih-spm105-9-1` · **number:** 9.1 · **estimatedMinutes:** 55 · **prerequisites:** `nih-spm105-0-2`

- **Kapitteltype:** sjangerkapittel (meta — Kapittel-DNA B).
- **Description:** Én oppskrift per sjanger (disponering trinn-for-trinn + tidsbudsjett for
  begge epoker), den binære selvrettingsrubrikken, og et gjennomskrevet mini-eksempel per
  sjanger med margkommentarer.
- **Eksamensbelegg:** Metakapittel (alle 7 sett). Skal formidle: for hver sjanger — typisk
  formulering (omskrevet), disposisjon, tidsbudsjett, vanligste feil, hva sensor premierer.
  Prioritet: perfekt (meta).
- **Innholdskontrakt:** **RED-SO-DRØFT** (kort redegjørelse innenfor ordgrense → drøfting
  som bærer karakteren); **FOR-ULEMP** (begge sider balansert); **CASE** (rolle → nivå →
  interessenter → handling); **TILTAK** (rød tråd: velg → interessentanalyse →
  implementering, epoke 2, 2500 ord tre deler); **VELG-ETT** (velg ett dilemma, trekk inn
  litteratur utover kapitlet). Binær 0/1-rubrikk (fra 0.2). **«Hvem eier hva»-kort**
  (collapsible): gjennomgående eksempler → tenker → poeng. Sitatlager-bro er ikke relevant
  (SPM105 bruker ikke utdragstolkning) — men vis hvordan pensumforankring konkret ser ut i
  en setning.
- **Oppgavesjangre:** 5–6 disposisjonsoppgaver (én per sjanger): gitt en oppgavetekst, sett
  opp disposisjon + tidsbudsjett + selvrettingssjekk (løsning = momentliste + disposisjon).
- **Typiske feil:** #1–#3, #7, #9 (per sjanger der de treffer).
- **Kvote:** 12 quiz / 12 flashcards.

#### Kapittel 9.2: Modellbesvarelse I — idrettsmodellen (RED-SO-DRØFT, epoke 1)
**id:** `nih-spm105-9-2` · **number:** 9.2 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-1-3`

- **Kapitteltype:** modellbesvarelse (meta — Kapittel-DNA C).
- **Description:** Nyskrevet epoke 1-oppgave om idrettsmodellen + barrierer, med A-, B- og
  C-besvarelse og sensorblikk. Viser karakternivåene på fagets inngangstema.
- **Eksamensbelegg:** Modellbesvarelse bygd på H2023/V2024-mønsteret (RED-SO-DRØFT).
  **Ingen ekte eksempelbesvarelse finnes** — alt nyskrevet fra sensorveiledningenes
  nivåbeskrivelser. Prioritet: perfekt (meta).
- **Innholdskontrakt:** A-besvarelse (full, margnotater «begrep + forankring», «motargument
  løfter til A», pausepunkt-markører); autentisk B-besvarelse (ekte studentspråk, BRA NOK +
  2–3 grep til A); ærlig C-besvarelse (korrekt men flat gjengivelse, tynn forankring);
  sensorblikk (momentliste + ☐-selvdiagnose). Minst denne ELLER en annen modellbesvarelse
  lander SKARPT (konklusjonsvariasjon).
- **Oppgavesjangre:** 1 nyskrevet RED-SO-DRØFT-oppgave (idrettsmodell + barriere, maks
  200 ord redegjørelse).
- **Typiske feil:** #1, #2, #6, #7 (vist i C-besvarelsen, rettet i A).
- **Kvote:** 10 quiz / 10 flashcards.

#### Kapittel 9.3: Modellbesvarelse II — Idrettstinget/økonomi (FOR-ULEMP, epoke 1)
**id:** `nih-spm105-9-3` · **number:** 9.3 · **estimatedMinutes:** 45 · **prerequisites:** `nih-spm105-2-2`

- **Kapitteltype:** modellbesvarelse (meta — Kapittel-DNA C).
- **Description:** Nyskrevet epoke 1-oppgave i FOR-ULEMP-sjangeren (lik delegatfordeling
  på Idrettstinget, eller spillemidler vs. fast budsjettpost), med A-/B-/C-besvarelse.
  Trener balansert avveiing.
- **Eksamensbelegg:** Modellbesvarelse bygd på V2024=H2024-klassikeren (FOR-ULEMP). Nyskrevet.
  Prioritet: perfekt (meta).
- **Innholdskontrakt:** A-besvarelse (begge sider veid, navngitt forankring, skarp veid
  konklusjon — konklusjonsvariasjon); B-besvarelse (god men skjev balanse); C-besvarelse
  (ensidig — viser #3 direkte); sensorblikk + ☐-selvdiagnose. Vippe-case-margnotat der
  begge landinger er forsvarlige.
- **Oppgavesjangre:** 1 nyskrevet FOR-ULEMP-oppgave (delegatfordeling eller
  finansieringsform).
- **Typiske feil:** #3 (ensidig — kjernen), #1, #7.
- **Kvote:** 10 quiz / 10 flashcards.

#### Kapittel 9.4: Modellbesvarelse III — tiltaksoppgaven (TILTAK, epoke 2)
**id:** `nih-spm105-9-4` · **number:** 9.4 · **estimatedMinutes:** 50 · **prerequisites:** `nih-spm105-8-3`

- **Kapitteltype:** modellbesvarelse (meta — Kapittel-DNA C).
- **Description:** Nyskrevet epoke 2-oppgave i det fulle tiltaksformatet (tiltak → interessent-
  analyse → implementering, 2500 ord tre deler), med A-/B-/C-besvarelse. **Den viktigste
  modellbesvarelsen for dagens studenter.**
- **Eksamensbelegg:** Modellbesvarelse bygd på H2025-mønsteret (TILTAK). Nyskrevet; epoke 2-
  vurderingskriterier `(verifiser)`. Prioritet: perfekt (meta).
- **Innholdskontrakt:** A-besvarelse (tydelig tiltak, læringsutbytte-kobling, interessent-
  teori + implementeringsteori eksplisitt, rød tråd holdt, pausepunkt-markører mellom de
  tre delene); B-besvarelse (god case men tynn teorikobling — viser #8); C-besvarelse (løs
  rød tråd — viser #9); sensorblikk + ☐-selvdiagnose.
- **Oppgavesjangre:** 1 nyskrevet TILTAK-oppgave (2500 ord, tre deler med ordfordeling).
- **Typiske feil:** #8 (manglende teorikobling), #9 (løs rød tråd), #1.
- **Kvote:** 10 quiz / 10 flashcards.

#### Kapittel 9.5: Generalprøve og sjekklister — begge epoker
**id:** `nih-spm105-9-5` · **number:** 9.5 · **estimatedMinutes:** 40 · **prerequisites:** `nih-spm105-9-1`

- **Kapitteltype:** eksamenstrening (meta — samlet generalprøve + oppslag).
- **Description:** En full epoke 2-generalprøve (kald bank — uvante vinklinger, uten hint,
  fasit = momentliste) + samlet ☐-selvrettingssjekkliste + «Lite tid?»-repetisjon +
  APA 7-sjekkliste. Bokas printbare oppslagskort.
- **Eksamensbelegg:** Metakapittel (alle 7 sett). Prioritet: perfekt (meta).
- **Innholdskontrakt:** **Kald bank** (8–10 uvante drøftings-/case-oppgaver på tvers av
  modulene, UTEN hint, fasit = momentliste — tydelig merket kald, jf. README); samlet binær
  selvrettingsrubrikk; «Hvem eier hva»-kort (repetisjon); APA 7-huskeliste;
  deltidsrute-repetisjon (generalprøven kan deles over flere økter — «én prøve per økt»).
- **Oppgavesjangre:** kald bank (uvante kombinasjoner) + 1 full generalprøve (epoke 2-format).
- **Typiske feil:** hele registeret #1–#10 som sluttsjekk.
- **Kvote:** 10 quiz / 10 flashcards.

**Prøve-kvote Del 9:** 4 prøver (9.A sjangergjenkjenning + disposisjon (alle sjangre) · 9.B
epoke 1-modellbesvarelse-vurdering (ranger A/B/C selv) · 9.C epoke 2-tiltaks-generalprøve ·
9.D kald bank på tvers av moduler (uvante vinklinger, uten hint)). *(Del 9s prøver er
eksamenstrenings-prøver på tvers av temaene — de teller mot ≥4-per-del-kravet for
treningsdelen.)*

---

## 4. Kvotesammendrag og summeringskontroll

> **Summeringskontroll:** per-kapittel-kvotene under er summert eksplisitt per del, og
> deltallene er summert til totalen. Totalen er den REELLE per-kapittel-summen (ikke et
> påstått tall). Kvotegulv: ≥500 quiz OG ≥500 flashcards.

| Del | Kapitler | Quiz (per kap.) | Quiz-sum | FC (per kap.) | FC-sum |
|---|---|---|---|---|---|
| 0 | 0.1, 0.2 | 12, 14 | **26** | 12, 14 | **26** |
| 1 | 1.1, 1.2, 1.3 | 20, 20, 18 | **58** | 22, 22, 20 | **64** |
| 2 | 2.1, 2.2, 2.3 | 18, 18, 16 | **52** | 20, 20, 18 | **58** |
| 3 | 3.1, 3.2, 3.3 | 20, 20, 18 | **58** | 22, 22, 20 | **64** |
| 4 | 4.1, 4.2, 4.3 | 20, 18, 16 | **54** | 22, 20, 18 | **60** |
| 5 | 5.1, 5.2 | 18, 16 | **34** | 20, 18 | **38** |
| 6 | 6.1, 6.2, 6.3, 6.4 | 20, 22, 20, 20 | **82** | 22, 24, 22, 20 | **88** |
| 7 | 7.1, 7.2 | 16, 14 | **30** | 18, 16 | **34** |
| 8 | 8.1, 8.2, 8.3 | 20, 18, 18 | **56** | 22, 20, 18 | **60** |
| 9 | 9.1, 9.2, 9.3, 9.4, 9.5 | 12, 10, 10, 10, 10 | **52** | 12, 10, 10, 10, 10 | **52** |

**Quiz totalt:** 26 + 58 + 52 + 58 + 54 + 34 + 82 + 30 + 56 + 52 = **502** (krav ≥500 ✔)
**Flashcards totalt:** 26 + 64 + 58 + 64 + 60 + 38 + 88 + 34 + 60 + 52 = **544** (krav ≥500 ✔)

**Prøver totalt:** 8 temadeler × 4 + Del 9 × 4 = **36 prøver** (≥4 per temadel ✔). Del 0 har
ingen egen prøve (dekkes av Del 9s sjanger-/modellbesvarelseskapitler og generalprøver).

**Kapitler totalt:** 30 (Del 0: 2 · Del 1–8: 23 · Del 9: 5).
**Estimert totaltid:** 40+55 + 55+55+50 + 55+55+45 + 55+55+45 + 55+50+45 + 50+45 + 55+60+55+45
+ 50+40 + 55+55+45 + 55+45+45+50+40 = **~1 640 min ≈ 27 timer** (kjernestoff; jf. README —
skrivetrening ×1,5).

---

## 5. Kilder og forbehold (fra EKSAMENSANALYSE.md)

- **Eksamensarkiv:** NIHs eget arkiv for SPM105, 7 komplette oppgavesett + 7
  sensorveiledninger fra 2023/24 (H ord./utsatt, V), 2024/25 (H ord., V), 2025/26 (H ord./
  utsatt). Emneansvarlig gjennom arkivet: Dag Vidar Hanstad. Alt eksamensinnhold i boka er
  NYSKREVET (README «Opphavsrett»).
- **Kjernelitteratur:** Hanstad (2019) *Organisasjon og lederskap i idretten* (epoke 1,
  kap. 1–6, 12); Hanstad (2025) [ny utgave] (epoke 2, kap. 1, 2, 4, 5, 6, 7). Sidetall/
  kapitteltilordning `(verifiser)` — bøkene ligger ikke i arkivet.
- **Anbefalt litteratur (A/B-svar):** Hovden (2011, kjønn/ledelse), Lesjø (2017,
  internasjonal innflytelse), Næss (2021, menneskerettigheter), Skaset (2011, makt i NIF),
  Rafoss & Tangen (2017, «i utakt med tiden?»), Tangen (2024, anlegg), Meld. St. 26
  (2011–2012), Oslo Economics/KUD (2020, økonomi som barriere).
- **Forbehold:** ingen eksempelbesvarelser i arkivet → modellbesvarelser nyskrevne; epoke 2
  bare observert i 2 sett → epoke 2-vurderingskriterier `(verifiser)`; pensumbøker ikke i
  arkivet → sidetall `(verifiser)`; emneansvarlig-skifte H2025 (Skilbred) `(verifiser)`.
  Frekvenstall = telte belegg av 7 sett, formidles med kildenote (Del 0-pakken).

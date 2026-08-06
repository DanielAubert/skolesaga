# Bokskjelett: EXFAC03-SPR Examen facultatum, språkvitenskap (UiO) — eksamensrettet lærebok

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

> Byggedokument for forfatter-agent (Opus). Forfatteren leser IKKE
> eksamensarkivet — alt eksamensbelegg som trengs står i dette skjelettet,
> destillert fra `EKSAMENSANALYSE.md`. Grunnlaget er **seks eksamensterminer,
> høst 2011 – høst 2025**, dokumentert gjennom **tre oppgavesett-filer (3
> terminer)** og **fire sensorveiledninger (4 terminer)** fra Universitetet i
> Oslo. Arkivet inneholder **null frittstående løsningsforslag og null
> fasitark** — se «Talldisiplin» under, som er ufravikelig. Alle oppgaver,
> transkripsjoner, segmenteringer, analysetrær, eksempelord og modellbesvarelser
> i boka skal være NYSKREVNE (se del 6). Pensumlitteratur skal **ikke navngis** —
> arkivet oppgir verken tittel, forfatter, utgave eller sidetall for pensumboka.

---

## Talldisiplin (LES FØRST — ufravikelig)

Tallene under er talt i emnemappa. De er de eneste lovlige nevnerne i boka.
Hver «N av M»-påstand skal oppgi nevneren eksplisitt, og delmengder skal summere.

| | |
|---|---|
| **Terminer dokumentert** | **6** — H2011, H2018, H2020, H2021, H2022, H2025 |
| Årsspenn | 15 kalenderår, 2011–2025 |
| Vårterminer / høstterminer | **0 / 6** |
| Filer i emnemappa | **7** |
| Unike filer etter md5-dedup | **7** — ingen dubletter |
| **Oppgavesett-filer** | **3**, dekker **3 terminer** (H2011, H2021, H2022) |
| **Sensorveiledninger** | **4**, dekker **4 terminer** (H2018, H2020, H2022, H2025) |
| **Løsningsforslag / fasitark som egne dokumenter** | **0** |
| Terminer med ordrett oppgavetekst | **5 av 6** (alle unntatt H2020) |
| Terminer med kjent temafordeling | **6 av 6** |
| Terminer med poengsetting | **2** (H2022, H2025) |
| Terminer med oppgitt karakterskala | **2** (H2022, H2025) — og de er **ulike** |
| **Spørsmål totalt** | **45** |
| **Poeng totalt i de poengsatte terminene** | **114** (H2022: 49 · H2025: 65) |

**Kontrollsummer:** 3 oppgavesett + 4 sensorveiledninger = 7 filer ✓ · 0 vår +
6 høst = 6 terminer ✓ · 6 + 8 + 8 + 7 + 7 + 9 spørsmål = **45** ✓ · 49 + 65 =
**114** ✓ · 5 terminer med ordrett oppgavetekst + 1 uten = 6 ✓

### De fem lovlige nevnerne — og bare de fem

| nevner | hva den måler | brukes til |
|---|---|---|
| **6** | terminer i arkivet | temafrekvens og sjangerfrekvens |
| **45** | spørsmål over de seks terminene | oppgavefordeling |
| **114** | poeng i de to poengsatte terminene | vekting |
| **4** | sensorveiledninger | alt om hva sensor belønner og straffer |
| **2** | terminer med oppgitt karakterskala | alt om karakterer og terskler |

Står tallet ikke her eller i en belegg-blokk i del 3, skal det ikke skrives i boka.

### Ni regler som følger av tallene

1. **Grunnlaget er tynt, og boka skal si det.** Seks terminer over femten år.
   Kildenoten i kap. 0.1 skal oppgi nøyaktig hva boka er kalibrert mot, og boka
   skal aldri antyde bredere dekning. Bare de tre saksområdene med 6 av 6 er
   robuste mot at ett sett skulle mangle.
2. **Ni høstterminer mangler helt:** H2012, H2013, H2014, H2015, H2016, H2017,
   H2019, H2023, H2024. 6 + 9 = 15 ✓. Perioden 2012–2017 er helt tom.
3. **Ingen vårtermin finnes.** Boka skal aldri skrive «vår», «V20xx» eller
   antyde at materialet dekker begge semestre. Der boka beskriver materialet,
   heter det **høsteksamen**, og det skal stå at høstplasseringen er en slutning
   fra hva UiO har publisert, ikke et dokumentert faktum.
4. **Aldri «alle eksamener», og aldri et årstall før 2011.** Emnet er eldre enn
   arkivet.
5. **Aldri «fasit» eller «løsningsforslag» om arkivet.** UiO har publisert null
   av hver. Det som finnes, er **sensorveiledninger** (4 stykker), og tre av dem
   inneholder utskrevne modellsvar. Boka skal si «sensorveiledning» når den
   mener det, og omtale sine egne modellbesvarelser som **nyskrevne** — aldri
   som ekte studentbesvarelser eller offisielle løsninger.
6. **Sensorkrav har nevner 4.** Ingen påstand om hva sensor belønner eller
   straffer kan bygge på H2011 eller H2021 — de har oppgavesett, men ingen
   veiledning.
7. **Veiledningene uttrykker forhåndsforventninger, ikke observerte feil.** Ikke
   ett sted rapporterer en sensor hva kandidatene faktisk gjorde galt.
   Feilregisteret skal rammes inn slik der det presenteres.
8. **Ingen påstander om strykprosent, karakterfordeling eller sensurstatistikk.**
   Materialet inneholder ingenting om det.
9. **Lavfrekvens er grunn til færre minutter, aldri til å skrive et tema ut.**
   Språkendring falt til null poeng i H2025, men står i 4 av 6 terminer. H2025
   innførte samtidig en helt ny oppgaveform (glossert baskisk-materiale) som
   ingen tidligere termin har. Et emne som kan finne på det, kan også hente
   tilbake retorikken. **Alle ti saksområdene i temafrekvenstabellen skal dekkes.**

### Fem ting som IKKE står i arkivet

Disse må enten utelates eller merkes eksplisitt som uverifiserte. De skal
**aldri** skrives som fakta i boka:

- **Studiepoeng, semesterplassering og adgangskrav.** Ingen av de sju filene
  oppgir dem. Verifiseres mot UiOs emneside før de nevnes; til da omtales de ikke.
- **Pensumboka.** Verken tittel, forfatter, utgave, årstall eller sidetall står i
  arkivet. ⚠ **Boka skal aldri navngi pensumboka.** Kapittelnummer og sidetall som
  forekommer i oppgavetekstene, brukes ikke.
- **Varighet og hjelpemidler for H2025** — den nyeste terminen, altså den boka
  kalibreres mot. De fire timene gjelder de fem terminene der de faktisk er oppgitt.
- **Når karakterskalaen skiftet.** H2022 var bestått/ikke bestått, H2025 er A–F.
  De to terminene mellom (H2023, H2024) mangler. Overgangen kan ikke tidfestes.
- **Hvordan analysetrær leveres i en digital eksamen.** H2025 er dokumentert
  digital (kandidaten limer inn IPA-tegn fra et vedlagt dokument), men
  leveranseformen for trær står ingen steder. Veiledningens eget modellsvar er
  håndtegnet, men det er sensorens arbeidsdokument.

---

## 1. Bokens identitet

| Felt | Verdi |
|---|---|
| Kurs-id | `exfac03-spr` |
| Tittel | **EXFAC03-SPR Examen facultatum, språkvitenskap** |
| Level | `'Høyskole'` |
| Institusjon | Universitetet i Oslo (UiO), Det humanistiske fakultet |
| Arketype | **Formell-hybrid** — strukturfagene etter `DNA-regnefag.md`, resten etter `DNA-drofting.md` (dokumentert i § 1.1) |
| Antall kapitler | **47** (Del 0: 2 · temadeler 1–9: 36 · eksamenstrening Del 10: 9) + **10 prøvekapitler** (ett per del 1–10) |
| Estimert totaltid | **2 570 minutter ≈ 42,8 timer** (temakapitler; prøvekapitlene kommer i tillegg) |
| Quiz totalt | **882** (krav ≥500) |
| Flashcards totalt | **792** (krav ≥500) |

**BOKCONFIG `description` (hardt formatkrav — testet mot parserens egen regex):**

```
Eksamensrettet lærebok for EXFAC03-SPR ved UiO — kalibrert mot seks høsteksamener 2011–2025: fonetisk transkripsjon, fonemanalyse, morfologisk segmentering, syntaktiske analysetrær og språktypologi
```

Ingress 46 tegn (maks ~90), kalibreringsledd uten kolon, fem temaledd på 1–3 ord,
samlet 198 tegn (maks 250). Parseren i `src/app/[courseId]/page.tsx` splitter
temalista på **både komma og « og »**, så ingen av de fem leddene inneholder
ordet «og». Ingen semikolon, tankestrek eller kolon inne i leddene. Kildetallene
hører i `kildegrunnlag.ts`, ikke her.

⚠ **Tittelen utløser ingen jus-heuristikk, og det er riktig.** `erJus()` i
`hoyskole-disclaimer.tsx` krever `^jus` i kurs-id-en eller
`\brett(s\w*)?\b|juridisk` i tittelen — «EXFAC03-SPR Examen facultatum,
språkvitenskap» treffer ingen av delene. Emnet er ikke et jusfag, så
Lovdata-forbeholdet skal ikke vises. Endres tittelen senere, skal den fortsatt
ikke treffe mønsteret.

**Pitch:** EXFAC03-SPR er en bred innføring i allmenn språkvitenskap, og
eksamensmaterialet gir ett svar som styrer hele boka: **tre saksområder bærer
70 % av poengene.** Fonetikk og fonologi, morfologi og syntaks utgjør 35 av 49
poeng i H2022 og 45 av 65 i H2025 — **80 av 114 samlet, 70,2 %** — og andelen er
praktisk talt uendret over tre år og to helt ulike oppgavesett. De tre står
dessuten i **6 av 6** terminer. Boka er bygget baklengs fra dette: strukturfagene
først og størst, med prosedyrer, drill og fasit, og semantikk, pragmatikk,
typologi, språkendring og grunnlagsspørsmål etterpå i poengrekkefølge. Emnets
signaturoppgave er **fonetisk og fonemisk transkripsjon av et langt sammensatt
norsk ord** — og den har fagets mest særegne vurderingsregel: kandidaten
transkriberer sin **egen** uttale, så kriteriet er **intern konsistens med den
bakgrunnen hun oppgir**, ikke likhet med et fasitsvar. Ordene er nye hver gang, så
det nytter ikke å pugge ferdige transkripsjoner. Boka lærer prosedyren og bygger
en variantkatalog over hvilke fenomener som er plantet i denne ordtypen, slik at
studenten kan møte et ord hun aldri har sett.

### 1.1 Arketypevalg og hybrid-dokumentasjon (ufravikelig)

Faget kombinerer to arketyper, som i LING1100. **Valget er dokumentert her og
styrer kapittel-DNA-en per del:**

- **Strukturfagene (Del 1–5: fonetikk, fonologi, transkripsjon, morfologi,
  syntaks) bygges etter `DNA-regnefag.md`.** Transkripsjon, artikulatorisk
  beskrivelse, fonemanalyse, morfologisk segmentering, setningsleddanalyse og
  trebygging er **oppgavetyper med prosedyre og etterprøvbart svar**, og de er
  poengsatt med trekk per feil i den nyeste terminen (0,5 per feil i tre ulike
  oppgaver i H2025). Disse kapitlene har: `theorem`-blokker for prosedyrene,
  gjennomførte `example`-er med fullt utskrevet løsning, `exercise`-er med
  `solution`, og **drillkapitler** med løsningsoppskrift og variantkatalog. De
  egner seg best til quiz og flashcards — kvoten er satt høyt her.
- **Redegjørelsesfagene (Del 6–9: semantikk, pragmatikk, typologi,
  språkendring, grunnlagsspørsmål) bygges etter `DNA-drofting.md`.** Her er
  kriteriet presis begrepsbruk, obligatoriske fagtermer og **begrunnelse
  framfor konklusjon**. Disse kapitlene har `definition`-blokker (flashcard-kilden),
  `example`-anvendelser med egne eksempler, og **begrunnelsesdrill** i stedet
  for fasitdrill.
- **Grenselandet, og det er stort:** transkripsjonsoppgaven ser ut som et
  fasitfag, men er det ikke. Den har prosedyre og trekk per feil **og** et
  vurderingskriterium som godtar flere ulike svar. Del 3 er derfor bygget som
  regnefag i formen (prosedyre, drill, trekkregnskap) og som drøftingsfag i
  kriteriet (konsistens og forsvar av valg). Dette er bokas viktigste
  enkeltkonstruksjon og finnes ikke i noen annen bok i katalogen.

**Avvik fra begge DNA-maler (dokumentert):**

1. **47 kapitler — over DNA-taket (20–35).** Emnet dekker **ni saksområder** som
   alle er prøvd, og de tre tyngste krever hvert sitt fullstendige apparat
   bygget fra bunnen (IPA-inventaret, fonemanalysen, morfsegmenteringen,
   trebyggingen). Bredden kan ikke kuttes: regel 9 i talldisiplinen forbyr å
   skrive ut lavfrekvente saksområder, og de tre tunge kan ikke komprimeres uten
   å underforberede kandidaten på 70 % av poengene.
2. **Egen del for transkripsjon (Del 3), som ikke finnes i noen DNA-mal.**
   Transkripsjonsoppgaven står i 4 av 6 terminer og er den best betalte
   enkeltoppgaven i den nyeste poengsatte terminen (10 av 65). Den krever en egen
   **uttalekontrakt** — oppgi bakgrunn, transkriber konsistent med den, forsvar
   de valgene som avviker fra en normaluttale — som ikke hører hjemme verken i
   fonetikk- eller fonologidelen, men bygger på begge.
3. **Drillkapitler ligger i temadelene** (1.5, 2.4, 3.3, 4.3), ikke samlet til
   slutt, fordi prosedyrene må drilles rett etter teorien de hviler på.
   Del 10 beholder sjangerbanken, feilvaksinen og modellbesvarelsene.
4. **Modellbesvarelsene er poengsatt.** H2022 og H2025 setter poeng per
   delspørsmål med trekk for feil. En modellbesvarelse uten poengregnskap ville
   ikke ligne på det studenten faktisk vurderes etter.

### 1.2 IPA-kontrakten (ufravikelig — bokas tekniske hovedrisiko)

Fonetisk transkripsjon er emnets signatur, og notasjonen berører nesten halve
boka. Kontrakten er **verifisert teknisk** mot plattformen: IPA-tegnene fra
materialet overlever `json.dumps`/`json.loads` uendret, inneholder ingen
backslash, ingen `$`, ingen `%` og ingen kontrolltegn, og gir **null treff** i
`sjekk-latex.py`s mønstre. Kravet er disiplin i skrivingen, ikke en teknisk
hindring.

**De to negative reglene, som er de viktigste:**

1. **ALDRI LaTeX-innpakning av IPA.** Ikke `\textipa{}`, ikke `\v{s}`, ikke
   `\int` som stand-in for ʃ, ikke `\ng` for ŋ. En løs backslash slår ut i
   `sjekk-latex.py` og gir rå kildekode til leseren.
2. **ALDRI IPA inne i `$…$`.** Transkripsjon er ikke matematikk. Et
   `$`-tegn i en IPA-streng ville dessuten kunne gi oddetall `$` i tekstfeltet,
   og da vises resten av strengen som rå LaTeX.

**De positive reglene:**

3. **IPA skrives som direkte Unicode i JSON-strengen.** ɑː ɛ ə æ ʉ ʊ ø œ ɔ y ·
   ɳ ʈ ɖ ɭ ʂ · ç ʃ ŋ ɾ ʁ ɽ · pʰ tʰ kʰ · ɱ · ˈ ˌ ː.
4. **Kombinerende diakritika skrives som grunntegn + kombinerende tegn**, aldri
   som en LaTeX-konstruksjon: stavelsesbærende n̩ og l̩ (n + U+0329),
   ustemthet n̥ (U+0325), dental t̪ (U+032A). Skriv tegnene direkte; ikke bygg
   dem med markup.
5. **Fonemisk form mellom skråstreker, fonetisk form i klammer.** /ˈkjɛks/ mot
   [ˈçɛks]. Ortografisk form i kursiv, betydning i enkle anførselstegn:
   *kjeks* ‘kjeks’.
6. **Inline i prosa settes transkripsjonen i backticks** slik at proporsjonal
   font ikke skiller tegnene fra hverandre. ⚠ **Unntak: `description`-feltet.**
   Der er backticks forbudt (feltet er ren tekst og havner i søketreffet), så
   IPA i en beskrivelse står bart eller utelates.
7. **Lengdetegnet er ː (U+02D0)**, ikke kolon. **Trykkmarkørene er ˈ (U+02C8) og
   ˌ (U+02CC)**, ikke apostrof og komma. Grep-sjekk: ingen `:` og ingen `'`
   inne i en transkripsjon.
8. **Velg ÉN form for g og bruk den i hele boka.** Bokas standard er vanlig
   ASCII-g (U+0067), fordi det er tegnet studenten faktisk har på tastaturet og
   fordi de to formene er visuelt nesten identiske. Grep-sjekk at IPA-ɡ
   (U+0261) har **null** forekomster. Bland aldri de to.
9. **Tonelag er et valg, ikke et krav.** Markerer boka tonelag, brukes ¹ og ²
   foran den trykksterke stavelsen, og boka sier eksplisitt at markeringen er
   valgfri og at kandidaten må være konsekvent. Arkivet dokumenterer ikke at
   tonemmarkering kreves, og boka skal ikke påstå at den gjør det.
10. **Analysetrær tegnes, aldri beskrives i ord.** Treet settes som innrykket
    tekst i en kodeblokk (fenced code block) eller som merket klammenotasjon —
    `[helsetning [SUBJEKT …] [FINITT VERBAL …]]`. **Aldri** LaTeX-pakker
    (`qtree`, `tikz`, `forest`). Ber en oppgave om et tre, SKAL fasiten vise et
    faktisk tre; «treet i ord» er ikke et svar. Velger boka ekte grafikk i
    stedet, må SVG-en lastes opp med `upload-media-storage.ts` — ellers blir
    figuren 404 for leseren.
11. **Emnet er formelfritt.** Ingen LaTeX skal forekomme i boka i det hele tatt.
    Trekkregnskap skrives i ren tekst («trekk 0,5 per feil»), poengsummer som
    «10 av 65». Grep-sjekk: `$` har null forekomster i kapittelfilene.
12. **«Symbol- og formelliste» blir her en symbol- og termliste.** Kolonnene er
    Symbol og Betydning, og listen skal inneholde **alle** IPA-tegn brukt i
    delkapitlet med artikulatorisk beskrivelse og et norsk eksempelord — per
    delkapittel, ikke arvet fra tidligere kapitler. Dette er samtidig bokas mest
    brukte oppslagsverk. Åpningslinjen er «Oppslagsverk — alt her forklares
    underveis i kapitlet.», slik at symbolveggen ikke leses som en inngangsdør.

### 1.3 Forholdet til LING1100 — hva som er nytt her

Katalogen har allerede én lingvistikkbok: **LING1100 Innføring i semantikk og
pragmatikk** (UiO). Overlappet er reelt, men avgrenset — og det treffer bare de
**letteste** delene av EXFAC03-SPR.

**LING1100 dekker ikke kjernen.** LING1100s egen byggekontrakt slår fast at
fonetikk/fonologi, morfologisk segmentering, syntaktisk trebygging,
sosiolingvistikk, språkendring, språktypologi og språktilegnelse **ikke** er
pensum der. Det er en nøyaktig beskrivelse av **80 av EXFAC03-SPRs 114 poeng**.

| EXFAC03-SPR-tema | LING1100-kapittel | Kryssbok-lenke |
|---|---|---|
| Betydningsrelasjoner (kap. 6.1) | 2.1 Meningsrelasjoner | `/ling1100/ling1100-2-1` |
| Antonymi i dybden (kap. 6.1) | 2.2 Antonymi i fem typer | `/ling1100/ling1100-2-2` |
| Referanse (kap. 6.1) | 1.3 Referanse og bestemte beskrivelser | `/ling1100/ling1100-1-3` |
| Grice og maksimene (kap. 7.3) | 8.1 Samarbeidsprinsippet | `/ling1100/ling1100-8-1` |
| Implikaturens egenskaper (kap. 7.3) | 8.2 Huangs sju egenskaper, Horn | `/ling1100/ling1100-8-2` |
| Performativer (kap. 7.2) | 9.1 Austin | `/ling1100/ling1100-9-1` |
| Talehandlingstyper (kap. 7.2) | 9.2 Searles fem kategorier | `/ling1100/ling1100-9-2` |
| Semantiske roller (kap. 5.6) | 6.1 Roller, theta-grid, argument mot adjunkt | `/ling1100/ling1100-6-1` |
| Deiksis som del av kontekst (kap. 7.1) | 10.1 Deiksis og Kaplan | `/ling1100/ling1100-10-1` |

Til sammen berører overlappet **semantikk (12 av 114 poeng)** og **pragmatikk
(13 av 114)** — altså **25 av 114, 21,9 %**.

**Reglene for kryssbok-lenker (ufravikelige):**

- ⚠ **Ingen av de fire sensorveiledningene nevner LING1100 med ett ord.** Det
  finnes ingen dokumentert bro mellom emnene, og boka skal ikke antyde en.
- Lenkene er tillatt **kun** i kapitlene i tabellen over, og **kun** som
  fordypning: «vil du lenger ned i antonymitypene, står de i LING1100». Aldri
  som eksamensrelevant snarvei.
- ⚠ **Den farlige retningen skal skrives ut i boka**, i kap. 0.1 og i den første
  lenken som forekommer: LING1100s dybde i semantikk og pragmatikk overstiger
  EXFAC03-SPRs behov betydelig. En student som leser LING1100-kapitlene i stedet
  for sine egne, bruker tiden sin på 22 % av poengene og mister de 70 % som
  ligger i strukturfagene.
- **Ingen kryssbok-lenker fra Del 1–5.** LING1100 har ingenting der, og en lenke
  ville vært et løfte boka ikke kan holde.

### 1.4 Sjangerkoder (brukes i eksamensbelegget under)

Emnet har **sju gjenkjennelige sjangre**. Kodene er **byggespråk** — de skal
skrives fullt ut i klarspråk ved første bruk per kapittel og aldri stå kalde i
`competenceGoals` eller i kapitlets første tekstboks.

| kode | sjanger | frekvens (nevner **6 terminer**) | kjennetegn |
|---|---|---|---|
| **TRA** | transkripsjonsoppgaven | **4 av 6** (H2011-2, H2018-4, H2021-2, H2025-4) | transkriber fonetisk **og** fonemisk, oppgi din språklige bakgrunn, forklar hva forskjellene skyldes. Best betalte enkeltoppgave: 10 av 65 poeng i H2025 |
| **BES** | beskrivelsesoppgaven | **3 av 6** (H2011-2c, H2018-3, H2025-3) | symbol → beskrivelse, beskrivelse → symbol, eller term → systematikk. 1 poeng per fonembeskrivelse i H2025, fem poeng totalt |
| **SEG** | segmenteringsoppgaven | **3 av 6** (H2021-3, H2022-2c, H2025-6) | del ordet i morfer og merk hver morf. 10 av 65 poeng i H2025, 2 poeng per ord, trekk 0,5 per feil |
| **TRE** | treoppgaven | **4 av 6** (H2011-4, H2018-6, H2021-4, H2025-9) | funksjonsmerket konstituenttre. 10 av 65 i H2025; trevarianten i H2022 var 5 av 49 |
| **RED** | redegjørelsesoppgaven | **6 av 6** | «hva betyr begrepene», «forklar hva som skiller», «gjør kort greie for». Den vanligste byggeklossen; flere av dem har en **obligatorisk fagterm** |
| **EGE** | egeneksempel-oppgaven | **6 av 6** | «et ord du velger selv», «døme du finn på sjølv», ofte som punktliste a–e med spesifikasjon per punkt |
| **KLA** | klassifiserings- og begrunnelsesoppgaven | **3 av 6** (H2018-8, H2021-6, H2025-1, H2025-7) | sorter data i kategorier. **Begrunnelsen er verdt tre ganger så mye som svaret** i H2025-typologioppgaven |

⚠ **KLA-raden har fire belegg i tre terminer** (H2025 har to). Det er ikke en
regnefeil — nevneren er terminer, og H2025 teller én gang.

### 1.5 Feilkoder (brukes i «Typiske feil» under — fra analysens § 6)

Alle 16 er hjemlet i minst én navngitt sensorveiledning, og **nevneren er 4
veiledninger**. Hver kode glosses i klarspråk ved første bruk **per kapittel**,
og hele registeret forklares samlet i Del 0-orienteringsboksen og i kap. 10.8.

**#1** transkribere uten å oppgi språklig bakgrunn · **#2** transkribere
inkonsistent med den bakgrunnen man oppga · **#3** forklare forskjellen mellom
fonetisk og fonemisk nivå med en generell frase i stedet for konkrete tegn ·
**#4** nevne fagtermer uten å forklare systematikken bak dem · **#5** hoppe over
ett av oppgavens ledd · **#6** gi et eksempel uten å begrunne det · **#7** gi
færre eksempler enn oppgaven ber om · **#8** svare på et klassifiseringsspørsmål
uten begrunnelse · **#9** tro at et klassifiseringsspørsmål har ett riktig svar ·
**#10** utelate fellesbetegnelsen i språkendringsoppgaven · **#11** analysere
setningsstruktur uten posisjonstermene · **#12** begrunne PRO uten å nevne
kontroll · **#13** definere synonymi som identisk referanse · **#14** beskrive en
performativ setning uten å bruke og forklare termen, og uten å nevne talerens
autorisasjon · **#15** gjengi lærebokas eksempler i stedet for å lage egne ·
**#16** beskrive et fonem så løst at det ikke skiller det fra andre fonemer.

⚠ **Ærlighetsforbeholdet SKAL stå der registeret presenteres:** de fire
veiledningene uttrykker sensors **forhåndsforventninger**, ikke observerte
studentfeil. Ikke ett sted i materialet rapporterer en sensor hva kandidatene
faktisk gjorde galt. Registeret er hva veiledningene sier skal trekke.

### 1.6 De seks obligatoriske termene

Flere oppgaver har en term som **må stå der** for full uttelling, og uten den er
svaret ufullstendig uansett hvor godt det ellers er. Dette er den billigste
poengkilden i hele emnet og en ren huskeliste:

| term | hvor kravet er hjemlet | kapittel som eier den |
|---|---|---|
| **betinga lydendringer** (fellesbetegnelsen) | H2018 | 9.2 |
| **kontroll** (om PRO) | H2018 | 5.7 |
| **tema(tiserings)posisjon** | H2020 | 5.5 |
| **finittposisjon** | H2020 | 5.5 |
| **performativ** — brukt OG forklart | H2025 | 7.2 |
| **talerens autorisasjon** | H2025 | 7.2 |

Kap. 10.5 driller alle seks samlet.

### 1.7 Karakterrammen — og forbeholdet som alltid følger med

Boka kalibreres mot **A–F**, fordi det er den nyeste dokumenterte skalaen
(H2025). **Men den skal si rett ut, hver gang skalaen brukes til noe, at:**

- **H2022 hadde todelt skala:** bestått 20–49 poeng, ikke bestått 0–19.
  Terskelen var 20 av 49 = 40,8 %.
- **H2025 har A–F med poenggrenser:** A 58,5–65 · B 52,0–58,0 · C 45,5–51,5 ·
  D 39,0–45,0 · E 30,0–38,5 · F under 30,0. E-terskelen er 30 av 65 = 46,2 %,
  A-terskelen 58,5 av 65 = 90 %.
- **Overgangen kan ikke tidfestes.** Den skjedde i H2023 eller H2024, og begge
  mangler i arkivet.
- **Poenggrensene er veiledende.** H2025 sier uttrykkelig at helhetsinntrykket av
  besvarelsen også teller, og at sensors skjønn kan gi justeringer.
- ⚠ **Det finnes ingen kvalitativ karakterbeskrivelse i noen av de fire
  veiledningene.** Ingen «A-besvarelsen viser …»-tabell. Dette emnet skiller
  karakterer med **poeng**, ikke med prosa, og boka kan ikke oppfinne en
  kvalitativ skala den ikke har belegg for.

All karaktersjargong («A-besvarelse», «C-nivå») skal rammes inn av dette, ikke
brukes kaldt. **«C er en god og vanlig karakter» skal stå eksplisitt i Del 0.**

### 1.8 Eksamensformen — hva som er dokumentert per termin

| Termin | Form | Hjelpemidler | Spørsmål | Poeng | Skala |
|---|---|---|---|---|---|
| H2011 | skoleeksamen, kl. 9–13 | **ingen** (uttrykt) | 6 | ikke oppgitt | ikke oppgitt |
| H2018 | ⚠ ikke oppgitt, kl. 9–13 | ⚠ ikke oppgitt | 8 | ikke oppgitt | ikke oppgitt |
| H2020 | **hjemmeeksamen**, kl. 15–19 | **alle** | 8 | ikke oppgitt | ikke oppgitt |
| H2021 | **hjemmeeksamen**, kl. 15–19 | ⚠ ikke oppgitt | 7 | ikke oppgitt | ikke oppgitt |
| H2022 | skoleeksamen, kl. 9–13 | **ingen** (uttrykt) | 7 | **49** | **bestått / ikke bestått** |
| H2025 | ⚠ digital (IPA limes inn fra vedlagt dokument) | ⚠ ikke oppgitt | 9 | **65** | **A–F** |

Fem av seks terminer er **fire timers skriftlig eksamen**. Boka skal formidle:

- **Hjemmeeksamen var korona, ikke en reform.** H2020-veiledningen skriver at
  studentene «denne gangen» satt hjemme med lærebok og alle pdf-ene på Canvas.
  Ordet «denne gangen» er belegget for at det var et unntak. H2022 er
  tilbakevendingen: campus, ingen hjelpemidler, skrevet ut på begge målformer.
- ⚠ **En observasjon, ikke en regel:** de to bekreftede campus-terminene lå
  kl. 9–13 og de to bekreftede hjemmeterminene kl. 15–19. Mønsteret hviler på
  fire terminer og skal formuleres som en observasjon.
- **Dagens eksamen krever svar på alt.** H2022 skriver «Alle oppgavene skal
  besvares» på begge målformer. Tre eldre terminer (H2018, H2020, H2021) sa
  uttrykkelig det motsatte — at man kan bestå uten å svare på alt. Boka skal
  formidle H2022-regelen som gjeldende og si at eldre sett kandidaten trener på
  hadde en mildere regel.
- **Svarspråk:** H2018 tillater norsk, svensk, dansk eller engelsk. H2011, H2021
  og H2022 er publisert på både bokmål og nynorsk. ⚠ Dette er filenes innhold,
  ikke en regel om hva UiO tilbyr i dag.

### 1.9 Språk- og formregler for hele boka

- **Ingen byggespråk i overskrifter.** «Løkke 3», «Bolk B», «Blokk 2», «Runde N»
  er forbudt i alle former: med tall, med bokstav, med liten forbokstav i prosa,
  og som tabellkolonne. Overskriften sier hva avsnittet handler om; tidsanslaget
  `(~14 min)` skal stå. Vis til tidligere avsnitt ved **navn**, aldri ved nummer.
- **Frasen «Sist du var her» er forbudt**, også i overskrifter, likeså «som du
  sikkert husker», «du har jo allerede sett», «dette kan du fra før».
  Forkunnskapsblokka heter `## Forkunnskaper` og skriver om *innholdet*:
  «Fra kap. 1.3: …», «Dette sto der: …».
- **`description` er REN TEKST** — ingen `$…$`, ingen `**fet**`, ingen backticks.
  Feltet havner uendret i søketreffet og lenkeforhåndsvisningen. Gjelder både
  kapittelfila og metadataen, som må skrives ordrett likt begge steder.
- **Deloppgaver merkes a), b), c)** med liten bokstav, hver på egen linje og i
  fet. Aldri romertall i oppgavetekst. Er listen et sett selvstendige påstander
  og ikke deloppgaver av én oppgave, er (i), (ii), (iii) et gyldig valg.
- **Kap-referanser er klikkbare markdown-lenker** til eksisterende filer, aldri
  død «se kapittel»-tekst, og aldri lenker i `title`-felt.
- **Ingen direktesitater** fra oppgavetekster eller sensorveiledninger.
- **Forbudt-termer (grep-sjekkes):** «fasit» og «løsningsforslag» om arkivet ·
  «offisiell løsning» · «modellbesvarelse fra UiO» · «alle eksamener» ·
  «sensorveiledning» brukt om noe annet enn de fire som finnes · «Sist du var
  her» · «Prioritet: perfekt» · «vår 20», «V20» og enhver våreksamen · ethvert
  årstall før 2011 · navnet på pensumboka eller dens forfatter · `\textipa`,
  `\v{`, `$` · IPA-ɡ (U+0261).

---

## 2. Makrostruktur

**Rekkefølgen følger poengvekten, ikke en lærebokdisposisjon.** De tre
strukturfagene først og størst, deretter semantikk, pragmatikk, typologi,
språkendring og grunnlagsspørsmål i den rekkefølgen poengtabellen gir.
Frekvensen styrer omfanget: saksområder med 6 av 6 terminer får flere kapitler
og egne drillkapitler, saksområder med 1 av 6 dekkes kompakt og merkes
«bør kjenne til» — men ingen saksområde får null (talldisiplinens regel 9).

| Del | Seksjonstittel | Kap. | Vekt og begrunnelse |
|---|---|---|---|
| 0 | Eksamenskart og svarhåndverket | 2 | Metadel. Poengvekten, de sju sjangrene, uttalekontrakten og «begrunn først» må etableres FØR fagstoffet. |
| 1 | Fonetikk og beskrivelsesapparatet | 5 | Fonetikk/fonologi: **6 av 6 terminer**, **8 av 45 spørsmål**, **29 av 114 poeng (25,4 %)** — tyngste saksområde. Beskrivelsesoppgaven står i 3 av 6 og er den mest mekanisk trenbare oppgaven i emnet. |
| 2 | Fonologi, fonem og stavelse | 4 | Samme saksområde. Fon/allofon/fonem er kjernen i H2022-1, som alene var 14 av 49 poeng — den dyreste enkeltoppgaven i den terminen. Stavelse og sonoritet: H2022-1d, 3 av de 14. |
| 3 | Transkripsjonsverkstedet | 3 | Emnets signatur: **4 av 6 terminer**, 10 av 65 poeng i H2025. Egen del fordi uttalekontrakten er et selvstendig håndverk som hviler på både Del 1 og Del 2. |
| 4 | Morfologi | 5 | **6 av 6 terminer**, **8 av 45 spørsmål**, **25 av 114 poeng (21,9 %)**. Segmenteringsoppgaven er 10 av 65 i H2025 med trekk 0,5 per feil. |
| 5 | Syntaks | 7 | **6 av 6 terminer**, **10 av 45 spørsmål** (flest av alle), **26 av 114 poeng (22,8 %)**. Treoppgaven i 4 av 6, setningsledd uten tre i H2025-8, posisjonstermene obligatoriske i H2020. |
| 6 | Semantikk | 3 | **4 av 6 terminer**, 4 av 45 spørsmål, **12 av 114 poeng (10,5 %)**. H2025 gir 8 poeng og krever at synonymi nyanseres, ikke brukes flatt. |
| 7 | Pragmatikk og kontekst | 3 | **4 av 6 terminer**, 4 av 45, **13 av 114 poeng (11,4 %)**. Språkhandlinger er 8 av 65 i H2025 med to obligatoriske termer. Kontekstlære (1 av 6) absorberes her, ikke som egen del. |
| 8 | Språktypologi | 3 | **4 av 6 terminer**, 4 av 45, **7 av 114 poeng (6,1 %)**. H2025 innførte glossert fremmedspråksdata — en helt ny form der begrunnelsen er verdt 3 poeng og svaret 1. |
| 9 | Språkendring og lingvistikkens grunnlag | 3 | Språkendring **4 av 6 terminer** men bare **2 av 114 poeng**; grunnlagsspørsmål 1 av 6; retorikk 1 av 6. Lav vekt, høy frekvens — få minutter, men aldri utelatt. |
| 10 | Eksamenstrening | 9 | Sju sjangerkapitler + feilvaksinen + poengsatte modellbesvarelser. |

**Kapittelkontroll:** 2 + 5 + 4 + 3 + 5 + 7 + 3 + 3 + 3 + 3 + 9 = **47** ✓

### Temafrekvensen boka bygger på

Nevner **6 terminer** for kolonnen «terminer», **45 spørsmål** for kolonnen
«spørsmål», **114 poeng** for kolonnen «poeng». Radene overlapper ikke: hvert av
de 45 spørsmålene er tilordnet nøyaktig ett saksområde.

| Saksområde | Terminer | Spørsmål | Poeng | Del |
|---|---|---|---|---|
| Fonetikk og fonologi | **6 av 6** | 8 av 45 | **29 av 114** | 1–3 |
| Syntaks | **6 av 6** | **10 av 45** | 26 av 114 | 5 |
| Morfologi | **6 av 6** | 8 av 45 | 25 av 114 | 4 |
| Pragmatikk | 4 av 6 | 4 av 45 | 13 av 114 | 7 |
| Semantikk | 4 av 6 | 4 av 45 | 12 av 114 | 6 |
| Språktypologi | 4 av 6 | 4 av 45 | 7 av 114 | 8 |
| Språkendring | 4 av 6 | 4 av 45 | 2 av 114 | 9 |
| Kontekstlære | 1 av 6 | 1 av 45 | — | 7.1 |
| Lingvistikkens grunnlag | 1 av 6 | 1 av 45 | — | 9.3 |
| Retorikk | 1 av 6 | 1 av 45 | — | 9.3 |

**Kontrollregning spørsmål:** 10 + 8 + 8 + 4 + 4 + 4 + 4 + 1 + 1 + 1 = **45** ✓
(og 6 + 8 + 8 + 7 + 7 + 9 = 45 ✓)
**Kontrollregning poeng:** 29 + 26 + 25 + 13 + 12 + 7 + 2 = **114** ✓
**Strukturfagene samlet:** 29 + 26 + 25 = **80 av 114 = 70,2 %** — 35 av 49 i
H2022 (71,4 %) og 45 av 65 i H2025 (69,2 %). ✓

⚠ **Om pragmatikk-raden:** kontekstlære (H2011-1) er beslektet med pragmatikk og
er i noen framstillinger en del av den, men er talt som egen rad fordi oppgaven
selv merker den som kontekststoff. Leser man radene sammen, blir pragmatikk 5 av
6. **Boka skal bruke 4 av 6 som hovedtall** og kan nevne den bredere lesningen
der den er relevant.

### Det som ser ut til å være på vei ut — og hvorfor det er usikkert

Seks terminer med ni års hull kan ikke bære en utfasingspåstand. Tabellen står i
kap. 0.1 med akkurat dette forbeholdet:

| Stoff | Sist prøvd | Vurdering |
|---|---|---|
| Retorikkens fem faser | H2018 | ⚠ Sannsynligvis ute — men det er én forekomst mot fire fravær. Dekkes kort i kap. 9.3, merkes «bør kjenne til» |
| Kontekstlære som eget spørsmål | H2011 | Stoffet er ikke borte, det er absorbert i pragmatikken (4 av 6). Dekkes i kap. 7.1, ikke som eget tema |
| Behaviorisme og mentalisme | H2021 | Prøvd så sent som 2021. Dekkes kort i kap. 9.3 |
| PRO og kontroll | H2018 | Ikke sett siden 2018, men ett av de mest teoritunge punktene i emnet. Eget kort kapittel (5.7), merket «bør kjenne til» |
| Språkendring | H2022 | ⚠ **Ikke utfaset.** Står i 4 av 6 terminer. At H2025 ikke har det, er én termin |

⚠ **Motsatt vei, og dette er den viktigste påminnelsen:** H2025 innførte
baskisk-data som typologioppgave — en helt ny form uten sidestykke i noen
tidligere termin. Et emne som kan finne på det, kan også hente tilbake
retorikken.

### Seksjonstitler (`sectionNames` i metadata)

| Del | Seksjonstittel |
|---|---|
| 0 | Eksamenskart og svarhåndverket |
| 1 | Fonetikk og beskrivelsesapparatet |
| 2 | Fonologi, fonem og stavelse |
| 3 | Transkripsjonsverkstedet |
| 4 | Morfologi |
| 5 | Syntaks |
| 6 | Semantikk |
| 7 | Pragmatikk og kontekst |
| 8 | Språktypologi |
| 9 | Språkendring og lingvistikkens grunnlag |
| 10 | Eksamenstrening |

Ingen seksjonstittel inneholder kolon, fordi `wire-bok.py` bygger
prøvekapitlenes tittel som «Prøver til del N: <seksjonstittel>».

---

## 3. Kapitler

> Feltforklaring: **Eksamensbelegg** = terminforekomster med spørsmålsnummer
> (nevner **6 terminer** / **45 spørsmål**), poengvekt der den er dokumentert
> (nevner **114 poeng**, kun H2022 og H2025), sjangerkoder og prioritetsklasse.
> **Innholdskontrakt** = begreper, prosedyrer og symboler som SKAL med.
> **Kvote** = quiz/flashcards, minimum per kapittel — kan overskytes, aldri
> underskrides.

### Del 0 — Eksamenskart og svarhåndverket

#### Kapittel 0.1: Slik testes EXFAC03-SPR
**id:** `exfac03-spr-0-1` · **number:** 0.1 · **estimatedMinutes:** 40 · **prerequisites:** ingen

- **Kapitteltype:** eksamenskart.
- **Description:** Eksamensformen slik de seks dokumenterte høstterminene viser den, poengvekten som gjør tre saksområder til 70 prosent av karakteren, de sju oppgavesjangrene og karakterrammen med sine forbehold.

**Eksamensbelegg:** Metakapittel — bygger på hele arkivet (6 terminer,
H2011–H2025). Skal formidle:
(a) **Eksamensformen:** fem av seks terminer er fire timers skriftlig eksamen
der alle spørsmål skal besvares; 6 til 9 nummererte spørsmål per termin.
Tabellen i skjelettets § 1.8 gjengis, med alle ⚠-ene intakt.
(b) **Poengvekten, som er bokas viktigste enkeltfunn:** strukturfagene er
**80 av 114 poeng (70,2 %)** — 35 av 49 i H2022 og 45 av 65 i H2025 — og andelen
er praktisk talt uendret over tre år og to helt ulike sett. Full temafrekvenstabell
med de tre nevnerne (6, 45, 114).
(c) **De sju sjangrene** med frekvens, presentert som studentens sjekkliste.
(d) **Karakterrammen** etter § 1.7, med hele forbeholdet: A–F fra H2025, todelt
skala i H2022, overgangen ikke daterbar, poenggrensene veiledende fordi
helhetsinntrykket teller, og ingen kvalitativ karakterbeskrivelse finnes.
**«C er en god og vanlig karakter» skal stå her.**
(e) **Kildenoten**, ordrett i innhold: boka er bygget på **tre oppgavesett og
fire sensorveiledninger fra UiO, seks høstterminer 2011–2025**; **ingen
løsningsforslag eller fasitark finnes for emnet**; **alle oppgaver,
transkripsjoner, trær og modellbesvarelser i boka er nyskrevne**; **arkivet
inneholder ingen våreksamen, og ni av femten høstterminer mangler**.
(f) **«Lite tid?»-boksen:** hurtigrute på 3–5 dager som prioriterer Del 1–5, med
uke- og deltidsplan summert fra `estimatedMinutes`. Anslagene er **lesetid** og
ganges med ca. 1,5 ved håndskriving.
(g) **«Slik leser du denne boka»-orienteringsboksen** (type `text` eller `tip`,
**aldri** `definition`): karakterskalaen, den kompakte kodelista for de sju
sjangrene, og at feilene har et samlet register i kap. 10.8.
(h) **LING1100-advarselen** fra § 1.3: en student som leser LING1100 i stedet
for denne boka, bruker tiden på 22 % av poengene. Prioritet: høyeste (meta).

**Innholdskontrakt:** Prioriteringskartet — hvilke deler som er de tunge, og
hvorfor. Tabellen «på vei ut» fra § 2 med forbeholdet om at seks terminer ikke
kan bære en utfasingspåstand. Kort forklaring av at hjemmeeksamen i to terminer
var korona og ikke en reform, og at eldre sett har en mildere regel om hvor mye
som må besvares.

**Oppgavesjangre:** Ingen egne — kapitlet presenterer sjangerkatalogen.

**Typiske feil:** Metafeilen å lese pensum lineært i stedet for å prioritere de
tre strukturfagene; å tro at trening på gamle sett gir gjenkjennelse av ordene
(de er nye hver gang, se kap. 3.3); #5 hoppe over ett av oppgavens ledd —
introduseres her fordi H2022 krever at alt besvares.

**Kvote:** 14 quiz / 12 flashcards (eksamensform, temafrekvens, sjangerkatalog,
karakterramme, kildegrunnlagets omfang og forbehold).

#### Kapittel 0.2: Svarhåndverket: begrunn først, bruk termen, lag ditt eget eksempel
**id:** `exfac03-spr-0-2` · **number:** 0.2 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-0-1`

- **Kapitteltype:** håndverk.
- **Description:** De tre ferdighetene som går igjen i alle sju sjangrene: å skrive begrunnelsen før konklusjonen, å bruke den obligatoriske fagtermen eksplisitt, og å lage et eget eksempel og forklare hvorfor det passer.

**Eksamensbelegg:** Destillat av sensorkravene fra de **fire
sensorveiledningene**. Skal operasjonalisere:
(a) **Begrunnelse framfor konklusjon — den klareste linjen i materialet.** H2025
fordeler **1 poeng for riktig svar og 3 for forklaringen** i typologioppgaven, og
skriver at begrunnelsen er viktigere enn svaret «siden det er 50/50 sjanse for å
gjette riktig». Om synonymioppgaven skriver den at flere ulike konklusjoner kan
aksepteres hvis de er godt begrunnet.
(b) **Den obligatoriske termen.** De seks termene fra § 1.6, med hjemmelen for
hver. Uten termen er svaret ufullstendig uansett hvor godt det ellers er.
(c) **Egne eksempler, forklart.** H2011 ber om begrunnelse direkte; H2020 sier at
begrunnede egne eksempler «teller litt mer» **selv når begrunnelse ikke er bedt
om**, fordi undervisningen har understreket at man skal vise sin forståelse.
(d) **Systematikken forklart, ikke bare gjengitt.** H2018 krever at både
systematikken i konsonanttermene og systemet for vokalbeskrivelse er forklart,
ikke bare nevnt, for full uttelling.
(e) **Konkret der oppgaven ber om konkret.** H2025 avviser uttrykkelig et
generelt utsagn om at allofonisk variasjon ikke tas med i en fonemisk
transkripsjon — det er riktig, og det gir null poeng.
(f) **Å svare med egne formuleringer.** H2020, fra hjemmeeksamenssituasjonen: det
som teller er at kandidaten resonnerer på en måte som viser at stoffet er
tilegnet. Prioritet: høyeste.

**Innholdskontrakt:** **Svararkitekturen resten av boka refererer til.**
Tretrinnsformen for et begrunnet svar: (1) skriv begrunnelsen, (2) trekk
konklusjonen av den, (3) navngi termen som gjør begrunnelsen faglig.
Firetrinnsformen for et eget eksempel: (1) navngi fenomenet, (2) gi eksempelet,
(3) si **eksplisitt** hvilken del av eksempelet som svarer til hvilken del av
definisjonen, (4) si hva som ville gjort eksempelet til et dårlig eksempel.
Punkt 3 og 4 er hele forskjellen. **Poengregnskapet som lesehjelp:** hvordan
trekk på 0,5 per feil og «1 for svaret, 3 for begrunnelsen» oversettes til
tidsbruk under eksamen. **Sjangerkortet på én side** — de sju sjangrene med
bestilling, typisk poeng og førstegrep, som eget oppslagskort (kortet selv, ikke
en lenkeliste). Prosedyrekortet for de tre tunge prosedyrene (transkripsjon,
segmentering, tre) med henvisning videre.

**Oppgavesjangre:** Alle sju, i miniatyr. Innstegsoppgaven er en ren
gjengivelsesoppgave (difficulty lett): para hver av de seks obligatoriske
termene med saksområdet den hører til.

**Typiske feil:** #8 svare på et klassifiseringsspørsmål uten begrunnelse; #6 gi
et eksempel uten å begrunne det; #3 svare generelt der oppgaven ber om konkret;
#4 nevne en term uten å forklare systematikken bak den. Alle fire glosses i
klarspråk her, siden dette er kapitlet registeret introduseres i.

**Kvote:** 16 quiz / 14 flashcards (de tre ferdighetene, de seks obligatoriske
termene, poengregnskapet, sjangerkortets bestillinger).

**Prøve-kvote Del 0:** ingen — metadel, dekkes av øvingseksamenene i Del 10.

### Del 1 — Fonetikk og beskrivelsesapparatet *(6 av 6 terminer · 29 av 114 poeng sammen med Del 2–3 · høyeste prioritet)*

#### Kapittel 1.1: Taleapparatet og de tre aksene i konsonantbeskrivelsen
**id:** `exfac03-spr-1-1` · **number:** 1.1 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-0-2`

- **Kapitteltype:** teori (formell — prosedyre og etterprøvbart svar).
- **Description:** Talelydenes tre beskrivelsesakser: artikulasjonssted, artikulasjonsmåte og stemthet, og hvordan de til sammen navngir enhver konsonant entydig.

**Forkunnskaper (kryssbok):** Kap. 0.2. Ingen eksterne forkunnskaper — dette er
bokas første fagkapittel og skal kunne leses av en som aldri har sett et
IPA-tegn. Obligatorisk `collapsible` **Symbol- og termliste** til slutt, med alle
konsonanttegn brukt i kapitlet, artikulatorisk beskrivelse og norsk eksempelord.

**Eksamensbelegg:** Fonetikk og fonologi står i **6 av 6 terminer** og er **29 av
114 poeng (25,4 %)** — 14 av 49 i H2022, 15 av 65 i H2025. Beskrivelsesoppgaven
(BES) står i **3 av 6** (H2011-2c, H2018-3, H2025-3). **Sensorkravet er
uvanlig eksplisitt:** H2018 ber kandidaten forklare *alle* termene i «stemt
lamino-alveolar plosiv» og «ustemt apiko-postalveolar frikativ», og sier at
**systematikken må være forklart, ikke bare nevnt**, for full uttelling. Å ramse
opp aksene holder ikke; man må vise hva de gjør. Sjangre: BES, RED, EGE.
Prioritet: høyeste.

**Innholdskontrakt:** Taleapparatets deler i klarspråk før terminologien.
**Artikulasjonssted:** bilabial, labiodental, dental, alveolar, postalveolar,
retrofleks, palatal, velar, uvular, glottal. **Finkornet stedsangivelse:** den
aktive artikulatoren (apiko-, lamino-, dorso-) mot den passive (-dental,
-alveolar, -postalveolar) — nøyaktig den konstruksjonen H2018 ber om å få
forklart. **Artikulasjonsmåte:** plosiv (lukkelyd), nasal, frikativ, approksimant,
lateral, tapp og vibrant, affrikat. **Stemthet:** stemt mot ustemt, og hva
stemmebåndene faktisk gjør. Symbolene: p b t d k g · m n ŋ ɱ · f v s ʃ ç j h ·
l r ɾ ʁ. **Prosedyren:** gitt et symbol, les av de tre aksene; gitt tre
akseverdier, finn symbolet. Læringsløkkene veksler mellom de to retningene fra
første avsnitt.

**Oppgavesjangre:** BES begge veier, RED (forklar systematikken), EGE (gi tre ord
som begynner med en gitt lyd i din egen uttale — formen H2018 bruker).

**Typiske feil:** #4 nevne termene uten å forklare systematikken bak dem — dette
kapitlet er feilens hovedhjem, og koden glosses i klarspråk her; #16 beskrive en
lyd så løst at beskrivelsen passer på flere lyder; å blande aktiv og passiv
artikulator i de sammensatte stedstermene.

**Kvote:** 24 quiz / 26 flashcards (symbol ↔ tre akseverdier ↔ norsk eksempelord
for hver konsonant).

#### Kapittel 1.2: Vokalene og vokalbeskrivelsens akser
**id:** `exfac03-spr-1-2` · **number:** 1.2 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-1-1`

- **Kapitteltype:** teori (formell).
- **Description:** Vokalsystemets akser — tungehøyde, fremre mot bakre, rundethet og lengde — og hvordan de norske vokalene plasseres i vokalfirkanten.

**Forkunnskaper (kryssbok):** Kap. 1.1. Obligatorisk `collapsible` Symbol- og
termliste med alle vokaltegn brukt i kapitlet.

**Eksamensbelegg:** Vokalbeskrivelse er belagt begge veier: **H2011-2c** går fra
beskrivelse til symbol («rundet, trang-midtre, fremre» — hvilket IPA-tegn?), og
**H2025-3** går fra symbol til beskrivelse, med /uː/ og /æ/ blant de fem
fonemene, **1 poeng per riktig beskrivelse og fem poeng totalt**. H2018 krever
uttrykkelig at **systemet for vokalbeskrivelse er forklart**, ikke bare brukt.
⚠ H2025 formulerer bestillingen som et **skillekrav**: beskrivelsen skal skille
fonemet fra alle andre fonemer i norsk, og det gis ingen delpoeng. Sjangre: BES,
RED. Prioritet: høyeste.

**Innholdskontrakt:** **Vokalfirkanten** som kart, med de fire aksene:
tungehøyde (trang, trang-midtre, åpen-midtre, åpen), horisontal plassering
(fremre, midtre, bakre), **rundethet** (rundet mot urundet — og at norsk skiller
tre rundede fremre vokaler der mange språk har null), og **lengde** (ː). De
norske vokaltegnene: i y ʉ u e ø o ɛ œ ɔ æ ɑ ə ʊ. **Skillekravet som prosedyre:**
gitt et vokalsymbol, oppgi så mange akseverdier at ingen annen norsk vokal
passer på beskrivelsen — og kontroller det ved å prøve beskrivelsen mot naboene i
firkanten. **Diftonger** som bevegelse mellom to posisjoner.
**Reduksjonsvokalen** ə i trykksvak stavelse introduseres her og hentes opp igjen
i kap. 1.3 og Del 3.

**Oppgavesjangre:** BES begge veier, RED (forklar systemet), EGE (finn et ordpar
som skilles av bare én akseverdi).

**Typiske feil:** #16 beskrive et fonem så løst at det ikke skiller det fra andre
fonemer — det er nøyaktig bestillingen i H2025-3, og fella koster hele poenget
siden det ikke gis delpoeng; #4 bruke aksene uten å forklare dem; å glemme
rundethet, som er den aksen norsk trenger mest.

**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 1.3: Norske særfenomener: retroflekser, palataler, aspirasjon og assimilasjon
**id:** `exfac03-spr-1-3` · **number:** 1.3 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-1-2`

- **Kapitteltype:** teori (formell).
- **Description:** De norske lydfenomenene eksamensordene er konstruert for å tvinge fram: retroflekser, palatal frikativ, aspirasjon i trykksterk stavelse, nasalassimilasjon og stavelsesbærende konsonanter.

**Forkunnskaper (kryssbok):** Kap. 1.1 og 1.2. Obligatorisk `collapsible` Symbol-
og termliste med ɳ ʈ ɖ ɭ ʂ ç ʃ pʰ tʰ kʰ ɱ ŋ ə n̩ l̩ ɽ.

**Eksamensbelegg:** Dette er kapitlet som gjør resten av boka mulig.
**Ordene som skal transkriberes, er nye hver termin** — H2011 *skjærgårdsjeep* og
*pyntehåndkle*, H2018 *stasjonsbygning*, H2020 et sammensatt østnorsk ord med
retrofleks og stavelsesbærende nasal, H2021 *kjekspakka* og *pengediskusjoner*,
H2022 *bringebærdrops*, H2025 *partilederkonferanse* — men **fenomenene er de
samme**. Ordene er alltid lange, sammensatte og norske, valgt slik at de tvinger
fram nettopp disse fenomenene. H2022-1c ber uttrykkelig om egne eksempler med
konsonant i stavelseskjernen og med to allofoner av samme fonem. Sjangre: TRA,
BES, EGE. Prioritet: høyeste.
⚠ **Ordene over navngis bare som dokumentasjon av ordtypen. Boka transkriberer
dem ikke** — alle transkripsjonseksempler og drilloppgaver bruker nyskrevne ord.

**Innholdskontrakt:** **Retrofleksjon:** r + dental gir ɳ ʈ ɖ ɭ ʂ, og
regelen krysser morfem- og ordgrenser. **Palatal frikativ** ç i skriftbildets
`kj` og `ki`, mot postalveolar ʃ i `sj`, `skj` og `ski` — og den utbredte
sammenfallet mellom dem, som er en variantregel kandidaten må ta stilling til i
uttalekontrakten. **Aspirasjon:** pʰ tʰ kʰ i trykksterk ansats, uaspirert etter
s og i trykksvak stavelse. **Nasalassimilasjon:** n blir ɱ foran f og v, og
ŋ foran k og g. **Stavelsesbærende konsonanter:** n̩ og l̩ i trykksvake
endelser, skrevet som grunntegn + kombinerende tegn. **Reduksjonsvokal** ə mot
full vokal i trykksvak stavelse. **Tjukk l** ɽ som dialektavhengig fenomen.
**Trykk** ˈ og bitrykk ˌ i sammensetninger — der bitrykket er selve signalet om
at ordet er sammensatt, som binder dette kapitlet til Del 4.

**Oppgavesjangre:** EGE (finn et ord som viser fenomenet), BES, TRA-forberedelse.

**Typiske feil:** å glemme at retrofleksregelen virker på tvers av ordgrensen i
en sammensetning; å markere aspirasjon i trykksvak stavelse; å bruke full vokal
der uttalen har ə; #7 gi færre eksempler enn oppgaven ber om, som er en reell
felle i punktlistene denne sjangeren bruker.

**Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 1.4: IPA-tegnene, diakritikaene og hvordan de settes
**id:** `exfac03-spr-1-4` · **number:** 1.4 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-1-3`

- **Kapitteltype:** teori (formell, oppslagsnært).
- **Description:** Hele symbolinventaret samlet: konsonanttabellen, vokalfirkanten, diakritikaene for lengde, trykk, stavelsesbærende konsonant og aspirasjon, og hvordan tegnene skrives på maskin.

**Forkunnskaper (kryssbok):** Kap. 1.1–1.3. Kapitlet ER den store symbol- og
termlisten; den obligatoriske `collapsible` til slutt er her en kortversjon med
bare de tegnene som er nye i dette kapitlet.

**Eksamensbelegg:** **H2025 er dokumentert digital:** veiledningen instruerer
kandidaten i å kopiere og lime inn IPA-tegn fra et vedlagt dokument, og
presiserer at dokumentet bare inneholder tegn som ikke finnes på vanlig
tastatur. Det betyr at besvarelsen skrives på maskin, og at praktisk
tegnhåndtering er en reell eksamensferdighet. ⚠ **Hvordan analysetrær leveres i
en digital eksamen, står ikke noe sted** — boka kan ikke påstå noe om det, og
skal si at den ikke vet. Beskrivelsesoppgaven (BES) står i **3 av 6 terminer** og
er den mest mekanisk trenbare oppgaven i emnet. Sjangre: BES. Prioritet: høyeste.

**Innholdskontrakt:** **Konsonanttabellen** med sted på tvers og måte nedover, og
stemt/ustemt i hver celle — lest som et kart, ikke som en liste. **Vokalfirkanten**
med de norske vokalene plassert. **Diakritikaene:** ː lengde, ˈ hovedtrykk,
ˌ bitrykk, ʰ aspirasjon, ̩ stavelsesbærende, ̥ ustemthet, ̪ dental. **De to
klammetypene** og hva de betyr — introduseres formelt her og utfoldes i kap. 3.1.
**Praktisk tegnhåndtering:** hvilke tegn som ikke finnes på et norsk tastatur, og
hva det betyr for tidsbruken når de skal limes inn ett for ett. **Bokas egen
notasjonsstandard** fra § 1.2 presenteres for leseren i klarspråk: skråstreker
for fonemisk, klammer for fonetisk, kursiv for ortografi, enkle anførselstegn for
betydning.

**Oppgavesjangre:** BES i ren form, i begge retninger, med tidtaking.

**Typiske feil:** #16 for løs beskrivelse; å forveksle lengdetegnet ː med kolon
og trykkmarkøren ˈ med apostrof, som gir en transkripsjon sensor må gjette seg
til; å blande ç og ʃ i skrift selv når man skiller dem i tale.

**Kvote:** 24 quiz / 26 flashcards.

#### Kapittel 1.5: Drill: fra symbol til beskrivelse og tilbake
**id:** `exfac03-spr-1-5` · **number:** 1.5 · **estimatedMinutes:** 65 · **prerequisites:** `exfac03-spr-1-4`

- **Kapitteltype:** drill (fasitnær, DNA-regnefag).
- **Description:** Hele beskrivelsesapparatet drillet til automatikk, i begge retninger, med skillekravet som fasitkriterium og et poengregnskap som speiler eksamen.

**Eksamensbelegg:** Dekker BES samlet — **3 av 6 terminer**, og den formen som
gir raskest poeng per minutt i hele emnet. H2025-3 gir **1 poeng per riktig
fonembeskrivelse, fem poeng totalt, og ingen delpoeng**. H2011-2c går motsatt
vei, fra beskrivelse til symbol. H2018-3 krever i tillegg at systematikken
forklares og at kandidaten gir **tre ord som begynner med hver av to lyder i sin
egen uttale**. Prioritet: høyeste.

**Innholdskontrakt:** **Løsningsoppskriften** i fire trinn: (1) plasser lyden på
alle aksene; (2) prøv beskrivelsen mot nabolydene og legg til akseverdier til
ingen nabo passer; (3) skriv beskrivelsen i fast rekkefølge — stemthet, sted,
måte for konsonanter; høyde, plassering, rundethet, lengde for vokaler; (4) legg
ved et norsk eksempelord. **Variantkatalogen:** hvilke lydpar som er lettest å
forveksle, og hvilken akse som skiller hvert par. **30 nyskrevne
drilloppgaver** i seks bolker med stigende vanskegrad, fasit til hver, og et
poengregnskap etter H2025-modellen (1 poeng per beskrivelse, ingen delpoeng) så
leseren ser hva et halvferdig svar faktisk koster. Én merket kald bank uten hint
til slutt. **Selvdiagnose-sjekkliste (☐)** etter fasiten.

**Oppgavesjangre:** BES, alle varianter; EGE i formen «tre ord som begynner med
denne lyden i din uttale».

**Typiske feil:** Hele fellekatalogen fra 1.1–1.4 under tidspress; #16;
#7 gi tre eksempler der oppgaven ber om tre og bare levere to.

**Kvote:** 18 quiz / 8 flashcards.

**Prøve-kvote Del 1:** 4 prøver (spesifisert i § 4).

### Del 2 — Fonologi, fonem og stavelse *(6 av 6 terminer · kjernen i H2022-1, som alene var 14 av 49 poeng)*

#### Kapittel 2.1: Fon, fonem og allofon — distinktiv opposisjon og minimale par
**id:** `exfac03-spr-2-1` · **number:** 2.1 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-1-5`

- **Kapitteltype:** teori (formell).
- **Description:** Skillet mellom den fysiske lyden, den betydningsskillende enheten og dens varianter, og minimale par som verktøyet som avgjør hva som er hva.

**Forkunnskaper (kryssbok):** Kap. 1.1–1.4. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** Fon, allofon og fonem er kjernen i **H2022-1**, som alene var
**14 av 49 poeng** — den dyreste enkeltoppgaven i den terminen — og i **H2021-2**.
Saksområdet står i **6 av 6 terminer**. H2022-1a og 1e ber om «et ord du velger
selv» og «et ordpar du velger selv»; H2022-1c ber om et ord med **to allofoner av
samme fonem**. Sjangre: RED, EGE, KLA. Prioritet: høyeste.

**Innholdskontrakt:** **Fon** = den fysiske talelyden, det klammene omslutter.
**Fonem** = den minste betydningsskillende enheten, det skråstrekene omslutter.
**Allofon** = en variant av et fonem, uten betydningsskillende kraft.
**Distinktiv opposisjon** som kriteriet, og **minimalt par** som testen: bytt ut
én lyd i én posisjon og se om ordet blir et annet ord. **Prosedyren:** (1) sett
opp kandidatparet; (2) kontroller at bare én lyd skiller dem og at alt annet er
likt; (3) konkluder — og skriv begrunnelsen før konklusjonen. **Grensetilfellene**
der et minimalt par ikke finnes, og hva man da kan og ikke kan slutte. Hele
kapitlet bygger mot uttalekontrakten i Del 3: hvilke fonemer et menneske har,
avhenger av hvilken varietet hun snakker.

**Oppgavesjangre:** RED (forklar forskjellen mellom fon, fonem og allofon), EGE
(lag ditt eget minimale par og forklar hva det viser), KLA.

**Typiske feil:** #6 gi et minimalt par uten å forklare hva det viser; å velge et
par som skiller seg i mer enn én lyd; å bruke klammer og skråstreker om
hverandre; å tro at to lyder som *høres* forskjellige ut, uten videre er
forskjellige fonemer.

**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 2.2: Komplementær distribusjon, hovedallofon og biallofon
**id:** `exfac03-spr-2-2` · **number:** 2.2 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-2-1`

- **Kapitteltype:** teori (formell).
- **Description:** Hvordan man viser at to lyder er varianter av samme fonem, og hvordan hovedallofon skilles fra biallofon ut fra hvilke omgivelser hver av dem opptrer i.

**Forkunnskaper (kryssbok):** Kap. 2.1. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** Del av fonologikjernen i **H2022-1** (14 av 49 poeng) og
**H2021-2**; saksområdet står i **6 av 6 terminer**. Distribusjonsanalyse er
også forutsetningen for å kunne forklare **konkret** hvorfor to transkripsjonsnivåer
skiller lag — det H2025 krever i transkripsjonsoppgaven og uttrykkelig avviser at
man svarer generelt på. Sjangre: RED, KLA, EGE. Prioritet: høyeste.

**Innholdskontrakt:** **Komplementær distribusjon** = lydene opptrer aldri i
samme omgivelse, og der den ene kan stå, kan den andre ikke.
**Fri variasjon** som kontrast. **Hovedallofon** = varianten med den videste
distribusjonen, den som opptrer der ingen særskilt betingelse gjelder;
**biallofon** = varianten som er bundet til en bestemt omgivelse. **Prosedyren:**
(1) list alle omgivelsene hver lyd opptrer i; (2) sjekk om listene overlapper;
(3) hvis de ikke overlapper, formuler betingelsen for biallofonen; (4) navngi
hovedallofonen og begrunn hvorfor den er hoved. Anvendt på de norske
særfenomenene fra kap. 1.3: aspirasjon, retroflekser, nasalassimilasjon,
ə mot full vokal. **Broen til Del 3:** allofonisk variasjon er nøyaktig det som
står i klammer og ikke mellom skråstreker.

**Oppgavesjangre:** KLA (avgjør om to lyder er allofoner av samme fonem, og
begrunn), RED, EGE.

**Typiske feil:** #8 konkludere uten begrunnelse; å påstå komplementær
distribusjon uten å sette opp omgivelsene; å utpeke biallofonen som hovedallofon
fordi den er lettest å legge merke til; #3 forklare nivåforskjellen generelt i
stedet for med de konkrete tegnene.

**Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 2.3: Stavelsen: ansats, kjerne, koda — og sonoritetsprinsippet
**id:** `exfac03-spr-2-3` · **number:** 2.3 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-2-2`

- **Kapitteltype:** teori (formell).
- **Description:** Stavelsens indre struktur, åpne mot lukkede stavelser, sonoritetshierarkiet — og hvordan man kommenterer et brudd på sonoritetsprinsippet.

**Forkunnskaper (kryssbok):** Kap. 1.3 og 2.1. Obligatorisk `collapsible` Symbol-
og termliste.

**Eksamensbelegg:** **H2022-1d** er belegget og gir **3 av de 14 poengene** i
oppgaven, og den ber uttrykkelig om at kandidaten kommenterer et **brudd** på
sonoritetsprinsippet — ikke bare gjengir prinsippet. **H2022-1c** ber om
egne eksempler etter spesifikasjon: et tostavelsesord med konsonant i
stavelseskjernen, og en lukket stavelse med velar lukkelyd og likvid i ansatsen.
**H2022-2c** ber om fonemisk transkripsjon med **stavelsesgrenser** markert.
Sjangre: RED, EGE, KLA. Prioritet: bør beherskes.

**Innholdskontrakt:** **Ansats, kjerne og koda** som stavelsens tre plasser, og
at bare kjernen er obligatorisk. **Åpen mot lukket stavelse.**
**Stavelsesbærende konsonant** som kjerne — koblingen til n̩ og l̩ fra kap. 1.3.
**Sonoritetshierarkiet** fra plosiv til vokal, og **sonoritetsprinsippet**:
sonoriteten stiger mot kjernen og faller etter den. **Brudd på prinsippet** —
hvilke konsonantforbindelser i norsk som bryter det, og hvordan bruddet
formuleres i en besvarelse: navngi prinsippet, vis den konkrete sekvensen, si
hvilket ledd som bryter, og hvorfor stavelsen likevel er velformet i norsk.
**Stavelsesgrensen i sammensetninger**, som binder kapitlet til Del 3 og Del 4.

**Oppgavesjangre:** EGE (finn et ord som oppfyller en gitt stavelsesspesifikasjon
— nøyaktig H2022-1c-formen), KLA, RED.

**Typiske feil:** #5 gjengi prinsippet og hoppe over bruddet oppgaven faktisk
spør om; #7 levere to eksempler der spesifikasjonen ber om tre; å plassere
stavelsesgrensen etter ortografien i stedet for etter uttalen.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 2.4: Drill: fonemanalyse og stavelsesstruktur
**id:** `exfac03-spr-2-4` · **number:** 2.4 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-2-3`

- **Kapitteltype:** drill (fasitnær, DNA-regnefag).
- **Description:** Fonemanalysen og stavelsesanalysen drillet samlet, med begrunnelsen skrevet før konklusjonen i hver eneste oppgave.

**Eksamensbelegg:** Dekker fonologidelen av **H2022-1** (14 av 49 poeng) og
**H2021-2** samlet. Variantkatalog: minimale par, komplementær distribusjon,
hoved- mot biallofon, stavelsesspesifikasjon, sonoritetsbrudd. Prioritet: høyeste.

**Innholdskontrakt:** **Fem løsningsoppskrifter** — én per oppgavetype — hver på
under ti linjer og hver med begrunnelsen som første trinn. **25 nyskrevne
drilloppgaver** med fullstendig fasit, fordelt på de fem typene, med stigende
vanskegrad og med grensetilfeller der fasiten skriver ut begge lesningene og
merker oppgaven «(omstridt — begge forsvarlige)». **Poengregnskap** etter
H2022-modellen så leseren ser hva hvert delsvar er verdt. Hint på alle oppgaver
unntatt den merkede kalde banken; første hint gir første grep, aldri
konklusjonen. **Selvdiagnose-sjekkliste (☐)** etter fasiten.

**Oppgavesjangre:** RED, EGE, KLA i kombinasjon, slik terminene faktisk stiller
dem.

**Typiske feil:** #8 svare uten begrunnelse under tidspress; #9 tro at et
klassifiseringsspørsmål har ett riktig svar; #6 eksempel uten begrunnelse.

**Kvote:** 18 quiz / 8 flashcards.

**Prøve-kvote Del 2:** 4 prøver (spesifisert i § 4).

### Del 3 — Transkripsjonsverkstedet *(4 av 6 terminer · 10 av 65 poeng i H2025 · emnets signatur)*

#### Kapittel 3.1: De to nivåene: fonetisk transkripsjon mot fonemisk
**id:** `exfac03-spr-3-1` · **number:** 3.1 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-2-4`

- **Kapitteltype:** teori (formell).
- **Description:** Hva som står i klammer og hva som står mellom skråstreker, og hvordan man forklarer forskjellen mellom nivåene tegn for tegn i stedet for med en generell frase.

**Forkunnskaper (kryssbok):** Kap. 2.1–2.2. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** Transkripsjonsoppgaven (TRA) står i **4 av 6 terminer**
(H2011-2, H2018-4, H2021-2, H2025-4) og er den best betalte enkeltoppgaven i den
nyeste poengsatte terminen: **10 av 65 poeng**, med **trekk 0,5 per feil**.
Bestillingen er stabil i alle fire: transkriber fonetisk **og** fonemisk, oppgi
din språklige bakgrunn, og forklar hva forskjellene skyldes.
**⚠ Det skarpeste sensorkravet i hele materialet står her:** H2025 avviser
uttrykkelig et generelt utsagn av typen «allofonisk variasjon tas ikke med i en
fonemisk transkripsjon». Utsagnet er riktig, og det gir **null poeng**.
Forklaringen må ta for seg **konkrete tegn** og si hvorfor de oppstår i den
gitte konteksten. Sjangre: TRA. Prioritet: høyeste.

**Innholdskontrakt:** **Hva de to nivåene gjør:** fonemisk form registrerer
hvilke betydningsskillende enheter ordet består av; fonetisk form registrerer hva
munnen faktisk gjør. **Hvilke fenomener som forsvinner** når man går fra klammer
til skråstreker: aspirasjon, retroflektering, nasalassimilasjon, reduksjonsvokal,
stavelsesbærende konsonant — hvert av dem hentet fra kap. 1.3 og forklart som en
allofonisk variasjon som er **forutsigbar fra omgivelsen** og derfor overflødig i
den fonemiske formen. **Forklaringsmalen som gir poeng:** for hvert tegn som
skiller de to formene, skriv én setning etter mønsteret «her står X i klammer og
Y mellom skråstreker, fordi …» med den konkrete omgivelsen navngitt.
**Kontrasten skrives ut i en `warning`:** den generelle frasen mot den konkrete
forklaringen, side om side, med poengverdien til hver.

**Oppgavesjangre:** TRA — forklaringsleddet isolert og drillet for seg, før hele
oppgaven settes sammen i kap. 3.3.

**Typiske feil:** #3 forklare nivåforskjellen med en generell frase — dette
kapitlet er feilens hovedhjem, og koden glosses i klarspråk her; å transkribere
det samme på begge nivåer og dermed ikke vise noen forskjell i det hele tatt; å
sette skråstreker rundt en form som inneholder allofoniske detaljer.

**Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 3.2: Uttalekontrakten: din bakgrunn, din uttale, ditt ansvar
**id:** `exfac03-spr-3-2` · **number:** 3.2 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-3-1`

- **Kapitteltype:** håndverk (hybrid — prosedyre med skjønnsbasert kriterium).
- **Description:** Fagets mest særegne vurderingsregel: kandidaten transkriberer sin egen uttale, så kriteriet er intern konsistens med den bakgrunnen hun oppgir, ikke likhet med et fasitsvar.

**Forkunnskaper (kryssbok):** Kap. 3.1 og 1.3. Obligatorisk `collapsible` Symbol-
og termliste.

**Eksamensbelegg:** **H2025 sier det rett ut:** siden kandidatene skal
transkribere sin **egen** uttale, godtas ulike varianter så lenge de vurderes som
en mulig eller sannsynlig uttale gitt kandidatens oppgitte bakgrunn. H2020 gir én
foreslått østnorsk transkripsjon og kaller den nettopp **et forslag**.
Bestillingen «oppgi din språklige bakgrunn» står uttrykkelig i **H2018-4,
H2021-2 og H2025-4**. **Kriteriet er altså intern konsistens, ikke likhet med et
fasitsvar** — og det finnes ingen tilsvarende regel i noe annet emne i katalogen.
Sjangre: TRA. Prioritet: høyeste.

**Innholdskontrakt:** **Uttalekontrakten i tre trinn:** (1) **oppgi bakgrunnen**
— hvor du er fra, hvilken varietet du transkriberer, og hvilke valg det låser;
(2) **transkriber konsistent med den** gjennom hele besvarelsen, også i senere
oppgaver på samme sett; (3) **forsvar de valgene som avviker** fra en
normaluttale, med én setning per valg. **Valgpunktene kandidaten må ta stilling
til**, hver med de vanligste variantene og hva de forplikter til: skarre-r mot
rulle-r og hva det gjør med retrofleksene, ç mot ʃ og et eventuelt sammenfall,
tjukk l, palatalisering av dentaler, trykkplassering i importord,
reduksjonsvokalens kvalitet. **`warning` «Konsistens slår normaluttale»:** en
gjennomført vestnorsk transkripsjon uten retroflekser er et bedre svar enn en
halvveis østnorsk med dem. **Erfaringsbroen:** leseren har allerede en uttale —
kapitlet lærer henne å beskrive den, ikke å bytte den ut.

**Oppgavesjangre:** TRA — bakgrunnsleddet og konsistenskontrollen isolert.
Gyldighetsdrill: åtte korte transkripsjoner med oppgitt bakgrunn, der leseren
skal avgjøre om transkripsjonen er konsistent med bakgrunnen; noen treffer, noen
bommer på en identifiserbar måte, og to er grensetilfeller der fasiten skriver ut
begge lesningene.

**Typiske feil:** #1 transkribere uten å oppgi språklig bakgrunn — uten den kan
sensor ikke vurdere om transkripsjonen er en sannsynlig uttale, og hele
vurderingskriteriet faller bort; #2 transkribere inkonsistent med den bakgrunnen
man oppga. Begge koder glosses i klarspråk her.

**Kvote:** 18 quiz / 14 flashcards.

#### Kapittel 3.3: Variantkatalogen og transkripsjonsdrillen
**id:** `exfac03-spr-3-3` · **number:** 3.3 · **estimatedMinutes:** 75 · **prerequisites:** `exfac03-spr-3-2`

- **Kapitteltype:** drill (hybrid — prosedyre og trekkregnskap, konsistens som kriterium).
- **Description:** Katalogen over hvilke lydfenomener som er plantet i lange sammensatte norske ord, og full transkripsjonsdrill på nyskrevne ord med poengregnskap og trekk.

**Eksamensbelegg:** **Ordene gjentar seg aldri, formen gjør det alltid.** I de
fire terminene med transkripsjonsoppgave (H2011, H2018, H2021, H2025) er ordene
forskjellige hver gang, men alltid lange, sammensatte og norske, valgt slik at de
tvinger fram de samme fenomenene: retrofleks fra r + dental, aspirasjon i
trykksterk stavelse, palatal frikativ, nasalassimilasjon, reduksjonsvokal i
trykksvak stavelse og bitrykk som markør for sammensetning. **Konsekvensen er
bokas designnøkkel:** det nytter ikke å pugge ferdige transkripsjoner. H2025
trekker **0,5 poeng per feil** og gir **10 av 65** for oppgaven. Prioritet: høyeste.
⚠ **Boka skal ikke love at trening på gamle sett gir gjenkjennelse** — bare at
oppgavetypen er stabil. Og alle ord i dette kapitlet er **nyskrevne**; arkivets
ord verken transkriberes eller brukes som oppgave.

**Innholdskontrakt:** **Variantkatalogen** — sju fenomenkort, ett per fenomen,
hvert med: hva som utløser det, hvordan det ser ut i klammer, hva som skjer med
det mellom skråstreker, og hvilken setning som forklarer det konkret.
**Prosedyren for et ukjent ord i seks trinn:** (1) si ordet høyt og hør etter
sammensetningsfugen; (2) sett trykk og bitrykk; (3) del i stavelser; (4)
transkriber fonetisk fenomen for fenomen etter katalogen; (5) fjern det
forutsigbare og skriv den fonemiske formen; (6) skriv én forklaringssetning per
tegn som skiller formene. **Minst 60 nyskrevne eksamensord** ordnet etter hvilke
fenomener de inneholder, med fullstendig fasit på begge nivåer **for minst to
oppgitte bakgrunner**, slik at leseren ser at to ulike svar kan være like riktige.
**Trekkregnskapet skrevet ut:** hva 0,5 per feil betyr for om man skal gjette
eller la et tegn stå. **Selvdiagnose-sjekkliste (☐)** etter fasiten.
**Naturlig pausepunkt** midtveis — kapitlet er 75 minutter.

**Oppgavesjangre:** TRA i full form: transkriber begge nivåer, oppgi bakgrunn,
forklar forskjellene. Én merket kald bank uten hint til slutt.

**Typiske feil:** #1, #2 og #3 samlet, under tidspress; å transkribere ortografien
i stedet for uttalen; å gi opp forklaringsleddet fordi transkripsjonen tok all
tiden — som er den dyreste enkeltdisponeringsfeilen i oppgaven.

**Kvote:** 22 quiz / 10 flashcards.

**Prøve-kvote Del 3:** 4 prøver (spesifisert i § 4).

### Del 4 — Morfologi *(6 av 6 terminer · 8 av 45 spørsmål · 25 av 114 poeng)*

#### Kapittel 4.1: Morf, morfem og allomorf
**id:** `exfac03-spr-4-1` · **number:** 4.1 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-0-2`

- **Kapitteltype:** teori.
- **Description:** Morfologiens tre grunnenheter og forholdet mellom dem, med samme logikk som fonologiens fon, fonem og allofon.

**Forkunnskaper (kryssbok):** Kap. 0.2. Kapitlet leser med fordel etter Del 2,
fordi parallellen til fon, fonem og allofon bærer hele framstillingen, men det
kan leses selvstendig. `collapsible` Symbol- og termliste med
morfologinotasjonen boka bruker.

**Eksamensbelegg:** Morfologi står i **6 av 6 terminer**, er **8 av 45 spørsmål**
og **25 av 114 poeng (21,9 %)** — 10 av 49 i H2022 og 15 av 65 i H2025. Belegg:
H2011-3 · H2018-5 · H2020-4 og H2020-5 · H2021-3 · H2022-2 · H2025-5 og H2025-6.
Sjangre: RED, EGE. Prioritet: høyeste.

**Innholdskontrakt:** **Morf** = det konkrete segmentet i ordet. **Morfem** = den
abstrakte enheten med innhold. **Allomorf** = variantformer av samme morfem, med
norske eksempler på både lydbetingede og leksikalsk betingede varianter.
**Nullmorf** og hva den gjør i et paradigme. **Prosedyren:** hvordan man viser at
to segmenter er allomorfer av samme morfem — samme innhold, komplementær
fordeling, og en formulerbar betingelse. **Broen til fonologien:** allomorfi og
allofoni er samme tankefigur på to nivåer, og boka bruker den likheten som
læringsgrep i stedet for å bygge apparatet på nytt.

**Oppgavesjangre:** RED (forklar hva som skiller de tre begrepene), EGE (lag ditt
eget allomorfpar og forklar betingelsen).

**Typiske feil:** #6 gi et allomorfpar uten å formulere betingelsen; å bruke
«morf» og «morfem» om hverandre; å tro at ortografisk likhet er morfemidentitet.

**Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 4.2: Rot, stamme og de tre formativtypene
**id:** `exfac03-spr-4-2` · **number:** 4.2 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-4-1`

- **Kapitteltype:** teori (formell).
- **Description:** Byggeklossene i segmenteringsoppgaven: rot og stamme, og skillet mellom avledningsformativ, bøyningsformativ og sammensetningsformativ.

**Forkunnskaper (kryssbok):** Kap. 4.1. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** Dette er apparatet segmenteringsoppgaven (SEG) måler, og den
står i **3 av 6 terminer** (H2021-3, H2022-2c, H2025-6) med **10 av 65 poeng** i
H2025. **Sensorkravene er skarpe og går begge veier:** H2020 sier at
opplysningene om røtter, stammer, avlednings- og bøyningsformativer må være
**eksplisitte hele veien**; H2025 sier at oppsettet ikke er viktig så lenge
analysen er forståelig — men at **merkingen må være fullstendig**. H2022 legger
til at morfene skal ordnes «etter funksjon og form». Sjangre: SEG, RED, EGE.
Prioritet: høyeste.

**Innholdskontrakt:** **Rot** = den leksikalske kjernen som ikke kan brytes ned
videre. **Stamme** = det bøyningsformativet fester seg til.
**Avledningsformativ** = lager et nytt leksem, kan skifte ordklasse.
**Bøyningsformativ** = uttrykker en grammatisk kategori uten å lage et nytt ord.
**Sammensetningsformativ** = fugemorfen som binder to røtter, med norsk -s- og
-e- som hovedtilfellene. **Testene som skiller dem:** skifter ordklassen? står
formativet i et paradigme? kan det stå ytterst? kommer noe etter det?
**Rekkefølgeregelen:** bøyningsformativ står ytterst, avledning innenfor. ⚠ H2025
viser at veiledningen selv **aksepterer alternativer** i grensetilfeller — det
samme segmentet kan godtas både som rot og som avledning når analysen er
begrunnet. Det er belegget for at kapitlet må lære leseren å skrive begrunnelsen,
ikke bare merkingen.

**Oppgavesjangre:** SEG (forberedende), RED (forklar hva som skiller de tre
formativtypene), EGE (H2022-2b-formen: fire ord etter morfologisk spesifikasjon).

**Typiske feil:** #4 nevne formativtypene uten å forklare hva som skiller dem;
å merke noen morfer og la resten stå umerket, som H2020 uttrykkelig avviser;
#7 levere færre ord enn spesifikasjonen ber om.

**Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 4.3: Segmenteringsprosedyren med full merking
**id:** `exfac03-spr-4-3` · **number:** 4.3 · **estimatedMinutes:** 70 · **prerequisites:** `exfac03-spr-4-2`

- **Kapitteltype:** drill (fasitnær, DNA-regnefag).
- **Description:** Hele segmenteringsoppgaven drillet på nyskrevne lange ord, med fullstendig merking av hver morf og et trekkregnskap som speiler eksamen.

**Eksamensbelegg:** SEG står i **3 av 6 terminer** og er den tyngst poengsatte
morfologioppgaven: **10 av 65 i H2025**, med **2 poeng per ord og trekk 0,5 per
feil**. Bestillingen er stabil: del ordet i morfer og merk hver morf som rot,
avledningsformativ, bøyningsformativ eller sammensetningsformativ. **Ordene er
nye hver gang** og av samme type som transkripsjonsordene: lange, sammensatte og
norske, konstruert slik at de inneholder avledning og bøyning i samme ord og en
sammensetningsfuge. Prioritet: høyeste.
⚠ Alle ord i kapitlet er **nyskrevne**; arkivets ord brukes ikke som oppgave.

**Innholdskontrakt:** **Prosedyren i fem trinn:** (1) finn rota eller røttene ved
å lete etter det som bærer den leksikalske betydningen; (2) skrell av
bøyningsformativet ytterst; (3) identifiser avledningene innenfra og ut; (4)
merk fugemorfene; (5) skriv én begrunnelseslinje for hver merking som ikke er
opplagt. **Oppsettet:** boka viser to gyldige oppsett side om side — lineær
merking og tabell — og sier eksplisitt at oppsettet er fritt så lenge analysen er
forståelig og merkingen fullstendig. **Grensetilfellene**, med begge analyser
skrevet ut og merket «(omstridt — begge forsvarlige)», som er nøyaktig det H2025
gjør. **25 nyskrevne drilloppgaver** med stigende lengde og fasit til hver.
**Trekkregnskapet:** hva 0,5 per feil betyr når ordet har åtte morfer, og hvorfor
en umerket morf koster like mye som en feilmerket. **Selvdiagnose-sjekkliste (☐)**.
**Naturlig pausepunkt** midtveis — kapitlet er 70 minutter.

**Oppgavesjangre:** SEG i full form. Én merket kald bank uten hint til slutt.

**Typiske feil:** #5 merke noen morfer og hoppe over resten; å segmentere etter
ortografien i stedet for etter morfene; #9 tro at grensetilfellet har ett riktig
svar; å bruke tid på et vakkert oppsett i stedet for på merkingen.

**Kvote:** 22 quiz / 12 flashcards.

#### Kapittel 4.4: Orddanning: sammensetning, avledning og de øvrige måtene
**id:** `exfac03-spr-4-4` · **number:** 4.4 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-4-2`

- **Kapitteltype:** teori.
- **Description:** Hvordan nye ord blir til i norsk, med sammensetning og avledning som hovedveiene og forkorting, sammentrekning, konversjon og lån som de øvrige.

**Forkunnskaper (kryssbok):** Kap. 4.2. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** Orddanning er belagt i **H2011-3**, som er en punktliste
a–e der hvert punkt ber om et ord som passer en beskrivelse, «og forklar kort
hvorfor du mener eksemplene dine er riktige». **H2018-5** ber om **to eksempler
på hver av orddanningsmåtene**, og veiledningen sier uttrykkelig at færre
eksempler enn bestilt trekker. **H2020-6** har tre deloppgaver med egne
eksempler. Saksområdet står i **6 av 6 terminer**. Sjangre: EGE, RED.
Prioritet: bør beherskes.

**Innholdskontrakt:** **Sammensetning** — hode og utfylling, fugemorf, og at
hodet står til høyre i norsk (broen til typologien i kap. 8.1).
**Avledning** — prefiks og suffiks, ordklasseskifte, produktive mot uproduktive
avledninger. **De øvrige måtene:** forkorting, sammentrekning, konversjon
(ordklasseskifte uten formativ), lån og tilbakedanning. **Eksempelverkstedet i
miniatyr:** gitt en spesifikasjon, finn et ord som oppfyller den og skriv én
setning om hvorfor det gjør det — nøyaktig H2011-3-formen. Bokas
egeneksempel-mal fra kap. 0.2 brukes her første gang på fullt fagstoff.

**Oppgavesjangre:** EGE i punktlisteform a)–e), med begrunnelseskrav på hvert
punkt; RED.

**Typiske feil:** #7 gi ett eksempel der oppgaven ber om to — H2018 er hjemmelen,
og dette er den billigste feilen i hele emnet; #6 gi eksempler uten begrunnelse
selv når begrunnelse ikke er uttrykkelig bedt om, som H2020 sier teller;
#15 gjengi lærebokas eksempler i stedet for å lage egne.

**Kvote:** 20 quiz / 22 flashcards.

#### Kapittel 4.5: Bøyningsklasser og paradigmer
**id:** `exfac03-spr-4-5` · **number:** 4.5 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-4-2`

- **Kapitteltype:** teori.
- **Description:** Hva en bøyningsklasse er, hvordan et paradigme settes opp, og hvordan man begrunner at to ord hører til samme eller ulik klasse.

**Forkunnskaper (kryssbok):** Kap. 4.1 og 4.2. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2025-5** er belegget og gir **5 av 65 poeng**. Temaet er
**nytt i materialet** — ingen tidligere termin har det, og det er derfor et
varselpunkt: emnet endrer seg, og den nyeste terminen er den boka kalibreres mot.
Sjangre: RED, EGE, KLA. Prioritet: bør beherskes.
⚠ **Én forekomst i én termin er et tynt belegg.** Kapitlet er kort av den grunn,
og boka skal si at temaet er nytt og bare dokumentert én gang.

**Innholdskontrakt:** **Bøyningsklasse** = sett av ord som tar samme
bøyningsformativer. **Paradigme** som oppsett: kategorier langs én akse, former
langs den andre. De norske hovedklassene for substantiv, verb og adjektiv, med
det som faktisk skiller dem. **Prosedyren:** (1) sett opp paradigmet for ordet;
(2) sammenlign med et referanseord; (3) navngi den formen som avgjør; (4)
konkluder med begrunnelsen først. **Uregelmessige former** og hvordan de omtales
uten å bli kalt feil. **Broen til kap. 4.1:** klasseskillet er ofte et
allomorfiskille.

**Oppgavesjangre:** KLA (plasser ord i bøyningsklasse og begrunn), RED, EGE.

**Typiske feil:** #8 plassere uten å begrunne; å bruke ordboksformen i stedet for
paradigmet som grunnlag; #4 nevne klassenavnet uten å si hva som definerer den.

**Kvote:** 18 quiz / 18 flashcards.

**Prøve-kvote Del 4:** 4 prøver (spesifisert i § 4).

### Del 5 — Syntaks *(6 av 6 terminer · 10 av 45 spørsmål, flest av alle · 26 av 114 poeng)*

#### Kapittel 5.1: Ordklasser og frasekategorier
**id:** `exfac03-spr-5-1` · **number:** 5.1 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-4-2`

- **Kapitteltype:** teori.
- **Description:** Ordklassene og frasene de bygger, og hvorfor frasekategorien alltid bestemmes av hodet.

**Forkunnskaper (kryssbok):** Kap. 4.2. `collapsible` Symbol- og termliste med
frasekategoriforkortelsene boka bruker.

**Eksamensbelegg:** Syntaks står i **6 av 6 terminer**, er **10 av 45 spørsmål**
— flest av alle saksområder — og **26 av 114 poeng (22,8 %)**: 11 av 49 i H2022
og 15 av 65 i H2025. Frasekategoriene er det nederste laget i analyseapparatet
H2025s modellsvar bruker i treoppgaven, der NP, AdjP og AdvP står under
funksjonene med ordklasse nederst. Sjangre: TRE, RED. Prioritet: høyeste.

**Innholdskontrakt:** **Ordklassene** med de kriteriene som faktisk skiller dem —
form, funksjon og betydning, i den rekkefølgen. **Frasebegrepet:** en frase er en
gruppe ord som oppfører seg som en enhet, og den heter det hodet heter.
**Frasetypene:** nominalfrase, verbalfrase, adjektivfrase, adverbfrase,
preposisjonsfrase. **Hodet og utfyllingene**, og hvordan man finner hodet ved å
stryke resten. **Konstituenttestene:** flyttetesten, erstatningstesten og
spørsmålstesten — de tre verktøyene hele Del 5 hviler på, og som H2018 uttrykkelig
belønner at kandidaten bruker som argument.

**Oppgavesjangre:** RED, TRE-forberedelse (identifiser frasene i en setning).

**Typiske feil:** #4 nevne frasetypene uten å bruke testene; å kalle en frase
etter det lengste ordet i den i stedet for etter hodet; å blande ordklasse og
setningsledd — den mest gjennomgripende forvekslingen i hele delen.

**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 5.2: Setningsleddene og testene som identifiserer dem
**id:** `exfac03-spr-5-2` · **number:** 5.2 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-5-1`

- **Kapitteltype:** teori (formell).
- **Description:** Subjekt, finitt og infinitt verbal, direkte og indirekte objekt, predikativ og adverbial, og de flytte- og erstatningstestene som avgjør hva som er hva.

**Forkunnskaper (kryssbok):** Kap. 5.1. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** **H2025-8** ber om setningsleddanalyse på helsetningsnivå
uten tre — en billigere og raskere variant av det samme apparatet — og
veiledningen oppgir **trekk 0,5 for feil**. Funksjonsetikettene i H2025s eget
modellsvar er SUBJEKT, FINITT VERBAL, INFINITT VERBAL, DIREKTE OBJEKT,
SUBJEKTSPREDIKATIV og ADVERBIAL, og boka bruker nøyaktig dette settet.
Saksområdet står i **6 av 6 terminer**. Sjangre: TRE, RED. Prioritet: høyeste.

**Innholdskontrakt:** **De sju leddene** med definisjon, test og typisk
frasekategori. **Testene:** subjektstesten (samsvar og plassering ved spørsmål),
objektstesten (passivering og pronomenerstatning), predikativtesten (hva leddet
sier noe om), adverbialtesten (kan flyttes fritt). **Skillet finitt mot infinitt
verbal**, som er selve fundamentet for kap. 5.5. **Prosedyren for en
helsetningsanalyse i fire trinn:** (1) finn det finitte verbalet; (2) finn
subjektet med samsvarstesten; (3) del resten i ledd med flyttetesten; (4) merk
hvert ledd med funksjon og frasekategori. **`warning` «Ordklasse er ikke
setningsledd»** med den vanligste forvekslingen skrevet ut i begge retninger.

**Oppgavesjangre:** Setningsleddanalyse i H2025-8-formen, med trekkregnskap.

**Typiske feil:** #5 analysere noen ledd og la resten stå; å merke ordklasse der
oppgaven ber om funksjon; å overse det infinitte verbalet fordi det står langt
fra det finitte.

**Kvote:** 24 quiz / 24 flashcards.

#### Kapittel 5.3: Leddsetninger, subjunksjonaler og innleiring
**id:** `exfac03-spr-5-3` · **number:** 5.3 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-5-2`

- **Kapitteltype:** teori (formell).
- **Description:** Hvordan en setning kan være et ledd inne i en annen setning, hvilke typer leddsetninger norsk har, og hvilken funksjon subjunksjonalen fyller.

**Forkunnskaper (kryssbok):** Kap. 5.2. Obligatorisk `collapsible` Symbol- og
termliste.

**Eksamensbelegg:** **Setningene i treoppgaven er komplekse med vilje**, i alle
fire terminene med TRE: H2011 har en relativsetning i subjektet og en
infinitivssetning; H2018 har to relativsetninger og en betingelsessetning; H2021
har tre nivåer av innleiring; H2025 har en relativsetning i subjektet og en
at-setning som direkte objekt. H2025s modellsvar bruker etikettene `leddsetning`
og `subjunksjonal` for innleiringene, og boka bruker de samme. Sjangre: TRE, RED.
Prioritet: høyeste.

**Innholdskontrakt:** **Helsetning mot leddsetning.** **Innleiring** som begrep:
en leddsetning fyller en leddfunksjon i oversetningen, og skal derfor merkes med
den funksjonen. **Leddsetningstypene:** at-setning, relativsetning,
spørresetning, betingelsessetning, infinitivssetning. **Subjunksjonalen** — hva
den er, hvor den står, og hvorfor den får en egen etikett i treet.
**Prosedyren:** (1) finn det finitte verbalet i hver setning; (2) tell dem for å
vite hvor mange setninger du har; (3) avgjør for hver leddsetning hvilken
funksjon den fyller i oversetningen; (4) merk innleiringsnivået.
**Relativsetning i subjektet** får et eget avsnitt, siden den formen står i to av
de fire treoppgavene og er den vanligste kilden til feil tilhekting.

**Oppgavesjangre:** TRE-forberedelse, RED.

**Typiske feil:** å telle setninger etter kommaer i stedet for etter finitte
verbal; å merke leddsetningen som «leddsetning» og glemme funksjonen den fyller;
å hekte en betingelsessetning på feil nivå.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.4: Analysetreet: å bygge et funksjonsmerket konstituenttre
**id:** `exfac03-spr-5-4` · **number:** 5.4 · **estimatedMinutes:** 75 · **prerequisites:** `exfac03-spr-5-3`

- **Kapitteltype:** drill (fasitnær, DNA-regnefag).
- **Description:** Treoppgaven fra bunnen: hvordan et funksjonsmerket konstituenttre bygges lag for lag, og hva som skiller et nær korrekt tre fra et som trekker.

**Forkunnskaper (kryssbok):** Kap. 5.2 og 5.3. Obligatorisk `collapsible` Symbol-
og termliste.

**Eksamensbelegg:** Treoppgaven (TRE) står i **4 av 6 terminer** (H2011-4,
H2018-6, H2021-4, H2025-9) og er den dyreste enkeltoppgaven i H2025 med **10 av
65 poeng**; trevarianten i H2022 var 5 av 49. **Analyseapparatet i H2025s eget
modellsvar:** `helsetning` øverst, funksjonsetiketter på leddene,
`leddsetning` og `subjunksjonal` for innleiringer, frasekategorier under
funksjonene, ordklasse nederst.
**⚠ Sensorkravet er uvanlig mildt, og det skal stå i kapitlets åpning:** H2025
sier at perfekte analysetrær er sjeldne, og at et tre som er **nær korrekt** får
full uttelling; trekket er **0,5 per feilanalysert setningsledd**. H2018 går
lenger og sier at en **alternativ tilhekting kan være et pluss** hvis kandidaten
argumenterer for den. Det gjør treoppgaven til en av de mest lønnsomme i emnet å
forsøke seg på. Prioritet: høyeste.

**Innholdskontrakt:** **Byggeprosedyren nedenfra og opp i seks trinn**, med et
gjennomført eksempel per trinn. **Notasjonen:** treet settes som innrykket tekst
i kodeblokk, med klammenotasjon som alternativ; begge former vises, og boka sier
at oppsettet er fritt så lenge nivåene er entydige. ⚠ **Hver treoppgave i boka
har et faktisk utskrevet tre i fasiten** — aldri «treet i ord».
**Tilhektingsspørsmålet:** hvor en preposisjonsfrase eller en betingelsessetning
hører hjemme, og hvordan man **argumenterer** for sitt valg med erstatning og
flytting — som er nøyaktig det H2018 gir pluss for. **12 nyskrevne setninger**
av økende kompleksitet, minst tre med innleiring i to eller tre nivåer, alle med
fullstendig tre i fasiten og et trekkregnskap etter H2025-modellen.
**«Nær korrekt er godt nok»-boksen** — plassert **etter** de første oppgavene, ikke
foran, så den ikke leses som en invitasjon til slurv. **Selvdiagnose-sjekkliste (☐)**.
**Naturlig pausepunkt** midtveis — kapitlet er 75 minutter.

**Oppgavesjangre:** TRE i full form. Én merket kald bank uten hint til slutt.

**Typiske feil:** å bygge treet ovenfra og ned og gå tom for plass; å merke
frasekategori der funksjonen skal stå; å hekte feil og ikke si noe om det — der
en setning om hvorfor du valgte som du gjorde, kan gjøre feilen til et pluss;
å droppe oppgaven fordi treet virker uoverkommelig, når nær korrekt gir full
uttelling.

**Kvote:** 22 quiz / 14 flashcards.

#### Kapittel 5.5: Norsk setningsskjema: temaposisjon og finittposisjon
**id:** `exfac03-spr-5-5` · **number:** 5.5 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-5-3`

- **Kapitteltype:** teori.
- **Description:** Setningsstrukturen i norsk beskrevet med posisjoner, og hvorfor flytting til finittposisjonen er obligatorisk mens flytting til temaposisjonen ikke er det.

**Forkunnskaper (kryssbok):** Kap. 5.2 og 5.3. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2020-6 og H2020-7** er belegget, og sensorkravet er
uvanlig konkret: **uttellingen avhenger av at kandidaten bruker termene
«tema(tiserings)posisjon» og «finittposisjon»**, og av at hun sier at flytting
til finittposisjonen er **obligatorisk** mens flytting til temaposisjonen **ikke**
er det. Dette er to av de seks obligatoriske termene i emnet.
⚠ **H2020 er den ene terminen uten ordrett oppgavetekst** — veiledningen røper hva
det ble spurt om, men ikke hvordan spørsmålet var formulert. Boka kan derfor
gjengi kravet, men aldri påstå noe om ordlyden. Sjangre: RED. Prioritet: høyeste
(billig poeng, ren huskeliste).

**Innholdskontrakt:** **Setningsskjemaet** som posisjonsrekke, i klarspråk før
termene. **Finittposisjonen** — den andre plassen i en fortellende helsetning, og
at det finitte verbalet **må** dit. **Temaposisjonen** — den første plassen, og at
hvilket ledd som havner der, er et valg. **Hva som kan stå i temaposisjonen** og
hva flyttingen gjør med informasjonsstrukturen. **Leddsetningens avvikende
skjema.** **Svarmalen som gir full uttelling:** navngi begge posisjoner
eksplisitt, si hvilken flytting som er obligatorisk og hvilken som ikke er det,
og gi ett eget eksempel per posisjon. `warning`-boks med de to termene i fet, som
huskeliste.

**Oppgavesjangre:** RED med obligatoriske termer; EGE.

**Typiske feil:** #11 analysere setningsstruktur uten posisjonstermene — koden
glosses i klarspråk her, og dette kapitlet er dens hovedhjem; å beskrive
ordstillingen korrekt uten å bruke termene, som gir riktig innhold og redusert
uttelling; å bytte om hvilken flytting som er obligatorisk.

**Kvote:** 20 quiz / 18 flashcards.

#### Kapittel 5.6: Argumenter, adjunkter og semantiske roller
**id:** `exfac03-spr-5-6` · **number:** 5.6 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-5-2`

- **Kapitteltype:** teori.
- **Description:** Skillet mellom ledd verbet krever og ledd som kan legges til fritt, verbets argumentstruktur, og de semantiske rollene leddene fyller.

**Forkunnskaper (kryssbok):** Kap. 5.2. `collapsible` Symbol- og termliste.
Kryssbok-lenke som **fordypning**: LING1100 [kap. 6.1](/ling1100/ling1100-6-1)
går dypere i theta-grid og proto-roller. ⚠ Lenken skal ledsages av setningen om
at LING1100-stoffet ligger utenfor det EXFAC03-SPR prøver.

**Eksamensbelegg:** **H2021-5** og **H2022-3b og 3c** er belegget; H2022-3c ber om
«eksempler du finner på selv». Syntaks samlet er **26 av 114 poeng**.
Sjangre: RED, EGE, KLA. Prioritet: bør beherskes.

**Innholdskontrakt:** **Argument** = ledd verbet krever for å være fullstendig;
**adjunkt** = ledd som kan tas bort uten at setningen blir ugrammatisk.
**Testene:** strykningstesten, og at et adjunkt kan gjentas mens et argument ikke
kan. **Argumentstruktur** — hvor mange argumenter et verb tar, og at tallet er en
egenskap ved verbet. **Semantiske roller:** agens, patiens, mottaker,
instrument, erfarer, sted — hver med definisjon og test. **Prosedyren:** (1)
strøk leddet og vurder resultatet; (2) konkluder argument eller adjunkt; (3)
tildel rollen ut fra hva leddet **gjør** i situasjonen, ikke ut fra hvilken
funksjon det har. **`warning` «Setningsledd er ikke semantisk rolle»:** samme ledd
kan være subjekt i to setninger og ha ulik rolle.

**Oppgavesjangre:** KLA (argument eller adjunkt, med begrunnelse), RED, EGE.

**Typiske feil:** #8 klassifisere uten begrunnelse; å lese rollen av
setningsleddet i stedet for av situasjonen; #6 gi egne eksempler uten å forklare
hvorfor de passer.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 5.7: PRO og kontroll i infinitivssetninger
**id:** `exfac03-spr-5-7` · **number:** 5.7 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-5-6`

- **Kapitteltype:** teori (bør kjenne til — plassert sist i delen og merket).
- **Description:** Det usynlige subjektet i infinitivssetninger, og hvordan man viser hvem som kontrollerer det i den enkelte setningen.

**Forkunnskaper (kryssbok):** Kap. 5.3 og 5.6. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2018-7** er hovedbelegget, med **H2011-4** som eldre
forekomst. **Sensorkravet er presist:** termen **«kontroll» må stå**, og
kandidaten må vise **hvem som kontrollerer PRO i hver av setningene** — og at
kontrolløren skifter mellom verb av *love*-typen og verb av *anbefale*-typen.
⚠ **Ikke prøvd siden H2018**, altså fraværende i de tre siste terminene, men det
er ett av de mest teoritunge punktene i emnet og en av de seks obligatoriske
termene. **Dekkes kort og merkes «bør kjenne til».** Sjangre: RED. Prioritet:
bør kjenne til.

**Innholdskontrakt:** **Infinitivssetningen** som setning uten synlig subjekt.
**PRO** som det usynlige subjektet, og hvorfor man postulerer det.
**Kontroll** — relasjonen mellom PRO og det leddet som bestemmer hvem PRO viser
til. **Subjektskontroll mot objektskontroll**, med minst fire nyskrevne
setningspar der kontrolløren skifter med verbet. **Svarmalen:** navngi PRO,
navngi kontroll, pek ut kontrolløren i hver enkelt setning, og si hva som gjør at
den skifter. `warning`-boks med termen «kontroll» i fet.

**Oppgavesjangre:** RED med obligatorisk term.

**Typiske feil:** #12 begrunne PRO uten å nevne kontroll — koden glosses her og
kapitlet er dens hovedhjem; å oppgi én kontrollør for alle setningene når
oppgaven nettopp tester at den skifter; å behandle PRO som et pronomen.

**Kvote:** 16 quiz / 16 flashcards.

**Prøve-kvote Del 5:** 4 prøver (spesifisert i § 4).

### Del 6 — Semantikk *(4 av 6 terminer · 12 av 114 poeng)*

#### Kapittel 6.1: Betydning, referanse og betydningsrelasjonene
**id:** `exfac03-spr-6-1` · **number:** 6.1 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-0-2`

- **Kapitteltype:** teori (redegjørende, DNA-drofting).
- **Description:** Hva et ord betyr og hva det viser til, og de faste relasjonene mellom ordbetydninger: synonymi, antonymi, hyponymi og meronymi.

**Forkunnskaper (kryssbok):** Kap. 0.2. Kryssbok-lenker som **fordypning**:
LING1100 [kap. 2.1](/ling1100/ling1100-2-1) om meningsrelasjoner,
[kap. 2.2](/ling1100/ling1100-2-2) om antonymi i fem typer og
[kap. 1.3](/ling1100/ling1100-1-3) om referanse. ⚠ Den første av disse lenkene
skal ledsages av setningen fra § 1.3: LING1100 går mye dypere enn EXFAC03-SPR
prøver, og en student som bytter ut sine egne kapitler med LING1100s, bruker
tiden på 22 % av poengene. `collapsible` Symbol- og termliste (her: term og
betydning, emnet er formelfritt).

**Eksamensbelegg:** Semantikk står i **4 av 6 terminer** (H2018-1, H2020-1,
H2022-4, H2025-1), er **4 av 45 spørsmål** og **12 av 114 poeng (10,5 %)** — 4 av
49 i H2022 og 8 av 65 i H2025. **H2022-4a** gjelder referanse. **H2020-1** gjelder
ordpar. Sjangre: RED, KLA, EGE. Prioritet: bør beherskes.

**Innholdskontrakt:** **Betydning mot referanse** — hva uttrykket betyr mot hva
det peker på i verden, med de klassiske tilfellene der to uttrykk har samme
referent og ulik betydning. **Betydningsrelasjonene:** synonymi, antonymi (med
undertypene), hyponymi og hyperonymi, meronymi. **Testen for hver relasjon**, og
prosedyren: navngi relasjonen, kjør testen, skriv begrunnelsen først.
**Egne eksempler** som fast krav, etter malen fra kap. 0.2.

**Oppgavesjangre:** KLA (oppgi relasjonen for hvert ordpar og begrunn), RED, EGE.

**Typiske feil:** #8 oppgi relasjonen uten test; å blande hyponymi og meronymi;
#15 gjengi lærebokas ordpar i stedet for egne.

**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 6.2: Polysemi, homonymi og homofoni — og når flere svar er riktige
**id:** `exfac03-spr-6-2` · **number:** 6.2 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-6-1`

- **Kapitteltype:** teori (redegjørende).
- **Description:** Hvordan man skiller beslektede betydninger fra tilfeldig like former, og hvorfor sensor kan godta flere ulike konklusjoner på det samme ordparet.

**Forkunnskaper (kryssbok):** Kap. 6.1. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2025-1** er belegget, og den er en klassifiseringsoppgave
(KLA). **⚠ Den mest oppsiktsvekkende sensorkommentaren i materialet står her:**
veiledningen godtar **både polysemi og homofoni** som svar på ett og samme ordpar,
når konklusjonen er godt begrunnet — og skriver at diskusjonen er viktigere enn
hvilken konklusjon kandidaten lander på. Semantikk samlet er **12 av 114 poeng**.
Sjangre: KLA, RED. Prioritet: bør beherskes.

**Innholdskontrakt:** **Polysemi** = én form, flere beslektede betydninger.
**Homonymi** = én form, urelaterte betydninger. **Homofoni** = lik uttale, ulik
skrivemåte. **Homografi** som fjerde tilfelle. **Testene:** er betydningene
relaterbare gjennom en identifiserbar overføring? har formene ulik opprinnelse?
skiller uttalen eller skrivemåten dem? **`warning` «Flere svar kan være
riktige»:** kapitlet lærer leseren å skrive **begge** lesningene, velge én, og
begrunne valget — fordi det er nøyaktig det H2025 belønner. **Prosedyren:** skriv
argumentet for hver lesning, sammenlign dem, konkluder, og si hva som ville fått
deg til å konkludere motsatt.

**Oppgavesjangre:** KLA i den formen H2025 bruker: klassifiser og begrunn, der
begrunnelsen bærer poengene.

**Typiske feil:** #9 tro at klassifiseringsspørsmålet har ett riktig svar — denne
koden glosses i klarspråk her, og kapitlet er dens hovedhjem; #8 konkludere uten
begrunnelse; å velge lesningen som er lettest å skrive om, uten å nevne den andre.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 6.3: Full synonymi som stridsspørsmål: konnotasjon, bruksbetingelser og sosial betydning
**id:** `exfac03-spr-6-3` · **number:** 6.3 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-6-2`

- **Kapitteltype:** teori (redegjørende, med drill).
- **Description:** Hvorfor to ord som peker på det samme likevel ikke er fullt synonyme, og hvordan konnotasjon, bruksbetingelser og sosial betydning skrives inn i et svar.

**Forkunnskaper (kryssbok):** Kap. 6.1 og 6.2. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2025-1** er belegget, og sensorkravet er eksplisitt: **full
synonymi krever mer enn identisk referanse.** Konnotasjon, bruksbetingelser og
sosial betydning skiller ordpar som ellers peker på det samme — veiledningen
bruker et nøytralt og et nedsettende ord om samme yrkesgruppe som illustrasjon.
Å definere synonymi som identisk referanse er hjemlet som feil. Sjangre: KLA,
RED. Prioritet: bør beherskes.
⚠ Belegget er **én termin**. Boka skal si at kravet er dokumentert i den nyeste
terminen og ikke påstå at det har stått lenge.

**Innholdskontrakt:** **De tre dimensjonene** som skiller nær-synonymer:
**konnotasjon** (verdiladningen), **bruksbetingelser** (register, sjanger,
situasjon) og **sosial betydning** (hva ordvalget sier om taleren og forholdet
til lytteren). **Prosedyren:** (1) fastslå at referansen er den samme; (2) prøv
paret mot hver av de tre dimensjonene; (3) konkluder om synonymien er full eller
delvis, med begrunnelsen først. **12 nyskrevne ordpar** som drill, med fasit som
viser hvilken dimensjon som avgjør i hvert tilfelle, og med minst to
grensetilfeller merket «(omstridt — begge forsvarlige)». **Broen til
pragmatikken:** bruksbetingelser og sosial betydning peker rett inn i Del 7.
**Selvdiagnose-sjekkliste (☐)** etter drillen.

**Oppgavesjangre:** KLA, RED, EGE (finn et eget ordpar som er synonymt på én
dimensjon og ikke på en annen).

**Typiske feil:** #13 definere synonymi som identisk referanse — koden glosses her
og kapitlet er dens hovedhjem; #8 konkludere uten å ha prøvd dimensjonene; å
nevne konnotasjon som ord uten å vise hva den gjør i det konkrete paret.

**Kvote:** 18 quiz / 16 flashcards.

**Prøve-kvote Del 6:** 4 prøver (spesifisert i § 4).

### Del 7 — Pragmatikk og kontekst *(4 av 6 terminer · 13 av 114 poeng · kontekstlære 1 av 6 absorbert her)*

#### Kapittel 7.1: Kontekst: språklig kontekst, situasjonskontekst og kulturkontekst
**id:** `exfac03-spr-7-1` · **number:** 7.1 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-6-1`

- **Kapitteltype:** teori (redegjørende).
- **Description:** De tre kontekstnivåene en ytring tolkes mot, og hvordan hvert av dem endrer hva den samme setningen kommuniserer.

**Forkunnskaper (kryssbok):** Kap. 6.1. Kryssbok-lenke som **fordypning**:
LING1100 [kap. 10.1](/ling1100/ling1100-10-1) om deiksis.
`collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2011-1** er belegget — **1 av 6 terminer, 1 av 45
spørsmål**. Oppgaven merker seg selv som kontekststoff og ikke som pragmatikk,
og er derfor talt som egen rad i temafrekvenstabellen. ⚠ **Stoffet er ikke borte
— det er absorbert i pragmatikken**, som står i 4 av 6. Derfor et eget, kort
kapittel plassert som inngang til pragmatikkdelen, ikke som egen del.
⚠ Leser man kontekstraden og pragmatikkraden sammen, blir pragmatikk 5 av 6;
boka bruker **4 av 6** som hovedtall og kan nevne den bredere lesningen her.
Sjangre: RED, EGE. Prioritet: bør kjenne til, men med bro videre.

**Innholdskontrakt:** **Språklig kontekst** — det som står før og etter i teksten.
**Situasjonskontekst** — deltakere, sted, tid, hva som skjer.
**Kulturkontekst** — de felles forutsetningene som gjør ytringen tolkbar.
**Deiktiske uttrykk** som det klareste tilfellet der situasjonskonteksten er
nødvendig for tolkningen: person, sted, tid. **Prosedyren:** gitt en ytring, vis
hvordan hvert av de tre nivåene bidrar, og hva som skjer med tolkningen når
nivået fjernes. **Broen framover:** samarbeidsprinsippet i kap. 7.3 er en
kontekstteori, og språkhandlingene i kap. 7.2 hviler på situasjonskonteksten.

**Oppgavesjangre:** RED, EGE (lag én ytring som tolkes ulikt i to
situasjonskontekster, og forklar forskjellen).

**Typiske feil:** #6 gi eksempler uten å forklare hvilket kontekstnivå som gjør
arbeidet; å bruke «kontekst» som samlebetegnelse uten å skille de tre nivåene;
#5 behandle to av tre nivåer når oppgaven ber om alle.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 7.2: Språkhandlinger: performativer, vellykkethetsbetingelser og talerens autorisasjon
**id:** `exfac03-spr-7-2` · **number:** 7.2 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-7-1`

- **Kapitteltype:** teori (redegjørende, med to obligatoriske termer).
- **Description:** Ytringer som utfører en handling i stedet for å beskrive noe, betingelsene som må være oppfylt for at handlingen skal lykkes, og hvorfor talerens autorisasjon er et eget krav.

**Forkunnskaper (kryssbok):** Kap. 7.1. Kryssbok-lenker som **fordypning**:
LING1100 [kap. 9.1](/ling1100/ling1100-9-1) om Austin og
[kap. 9.2](/ling1100/ling1100-9-2) om Searles kategorier.
`collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2025-2** er belegget og gir **8 av 65 poeng** — den
dyreste ikke-strukturelle oppgaven i den terminen. **Sensorkravet er delt i to
halvdeler med hver sin obligatoriske komponent:** termen **«performativ» må
brukes og forklares**, og **talerens autorisasjon må nevnes**, for full uttelling.
Begge er blant emnets seks obligatoriske termer. Pragmatikk samlet står i
**4 av 6 terminer** og er **13 av 114 poeng (11,4 %)** — 5 av 49 i H2022 og
8 av 65 i H2025. Sjangre: RED, EGE. Prioritet: høyeste (dyrest per minutt utenfor
strukturfagene, og kravet er en huskeliste).

**Innholdskontrakt:** **Performativ ytring** — den utfører handlingen den nevner,
i motsetning til den konstative som beskriver noe som kan være sant eller usant.
**Eksplisitt mot implisitt performativ.** **Vellykkethetsbetingelsene:** riktig
prosedyre, riktig utført, riktige omstendigheter, og **riktig person** — det siste
er talerens autorisasjon, og det er den betingelsen H2025 løfter fram særskilt.
**Hva som skjer når en betingelse svikter**, med nyskrevne eksempler på hvert
sviktende ledd. **Svarmalen som gir full uttelling:** bruk ordet «performativ»,
forklar hva som gjør ytringen performativ, gå gjennom vellykkethetsbetingelsene,
og si eksplisitt hvilken autorisasjon taleren må ha. `warning`-boks med begge
obligatoriske komponenter i fet.

**Oppgavesjangre:** RED med to obligatoriske termer; EGE (lag en performativ
ytring og en der autorisasjonen svikter, og forklar begge).

**Typiske feil:** #14 beskrive en performativ setning uten å bruke og forklare
termen, og uten å nevne talerens autorisasjon — koden glosses her og kapitlet er
dens hovedhjem; #5 svare på den ene halvdelen av oppgaven og hoppe over den
andre, som koster nøyaktig sin andel av de åtte poengene; #15 bruke lærebokas
standardeksempler i stedet for egne.

**Kvote:** 22 quiz / 24 flashcards.

#### Kapittel 7.3: Samarbeidsprinsippet og maksimene
**id:** `exfac03-spr-7-3` · **number:** 7.3 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-7-1`

- **Kapitteltype:** teori (redegjørende).
- **Description:** Det uskrevne samarbeidet mellom taler og lytter, de fire maksimene, og hva som kommuniseres når en maksime brytes med vilje.

**Forkunnskaper (kryssbok):** Kap. 7.1. Kryssbok-lenker som **fordypning**:
LING1100 [kap. 8.1](/ling1100/ling1100-8-1) om samarbeidsprinsippet og
[kap. 8.2](/ling1100/ling1100-8-2) om implikaturens egenskaper.
`collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2021-1** og **H2022-5** er belegget — **2 av 6 terminer**.
H2022-5 gir **5 av 49 poeng med 1 poeng per maksime**, altså en oppgave der
poengene er direkte knyttet til fullstendighet. Pragmatikk samlet er **13 av 114
poeng**. Sjangre: RED, EGE. Prioritet: bør beherskes.

**Innholdskontrakt:** **Samarbeidsprinsippet** som utgangspunkt: lytteren antar
at taleren bidrar slik samtalen krever. **De fire maksimene** — kvantitet,
kvalitet, relasjon og måte — hver med definisjon, ett nyskrevet eksempel på at
den følges og ett på at den brytes. **Implikatur** som det som kommuniseres uten
å sies, og **maksimebrudd** som mekanismen bak. **Prosedyren for en
implikaturanalyse:** (1) hvilken maksime ser ut til å være brutt? (2) hva må
lytteren anta for at taleren likevel er samarbeidende? (3) det er implikaturen.
**`warning` «Poeng per maksime»:** når oppgaven gir 1 poeng per maksime, koster
en glemt maksime nøyaktig ett poeng — fullstendighet er hele oppgaven.

**Oppgavesjangre:** RED (gjør rede for prinsippet og de fire maksimene), EGE
(lag ett eget eksempel per maksime).

**Typiske feil:** #7 behandle tre av fire maksimer — den dyreste og enkleste
feilen i denne oppgaven; #6 gi eksempler uten å si hvilken maksime som brytes;
å forveksle brudd på en maksime med at taleren lyver.

**Kvote:** 22 quiz / 22 flashcards.

**Prøve-kvote Del 7:** 4 prøver (spesifisert i § 4).

### Del 8 — Språktypologi *(4 av 6 terminer · 7 av 114 poeng · ny oppgaveform i H2025)*

#### Kapittel 8.1: Hode og dependent — ordstillingstypologi
**id:** `exfac03-spr-8-1` · **number:** 8.1 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-5-2`

- **Kapitteltype:** teori (redegjørende med klassifiseringsprosedyre).
- **Description:** Hvordan språk sorteres etter rekkefølgen mellom hode og dependent, og hvorfor rekkefølgen henger sammen på tvers av ulike konstruksjoner i samme språk.

**Forkunnskaper (kryssbok):** Kap. 5.1 og 5.2. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** Språktypologi står i **4 av 6 terminer** (H2011-5, H2020-8,
H2022-6, H2025-7), er **4 av 45 spørsmål** og **7 av 114 poeng (6,1 %)** — 3 av 49
i H2022 og 4 av 65 i H2025. Hode- og dependentrekkefølge er den formen som går
igjen. Sjangre: RED, KLA. Prioritet: bør beherskes.

**Innholdskontrakt:** **Hode og dependent** som relasjon, hentet opp fra
frasebegrepet i kap. 5.1 og fra sammensetningen i kap. 4.4. **De sentrale
konstruksjonene** der rekkefølgen varierer: verb og objekt, substantiv og
adjektiv, substantiv og genitiv, adposisjon og komplement, hovedsetning og
leddsetning. **Korrelasjonene** — at et språk som setter hodet først i én
konstruksjon, ofte gjør det i de andre — presentert som en tendens med
unntak, aldri som en lov. **Norsk** plassert i systemet, med de
konstruksjonene der norsk ikke oppfører seg konsekvent. **Prosedyren:**
identifiser hodet, noter rekkefølgen, sammenlign på tvers av konstruksjoner,
konkluder med forbehold.

**Oppgavesjangre:** RED, KLA.

**Typiske feil:** #8 klassifisere uten begrunnelse; å presentere korrelasjonene
som lover og bli stående når et unntak dukker opp; å utpeke feil ledd som hode.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 8.2: Markerthet, ikonisitet og økonomi
**id:** `exfac03-spr-8-2` · **number:** 8.2 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-8-1`

- **Kapitteltype:** teori (redegjørende).
- **Description:** Markerthet som forklaringsbegrep, og spenningen mellom ikonisitet og økonomi som to krefter som drar språket i hver sin retning.

**Forkunnskaper (kryssbok):** Kap. 8.1. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** **H2020-8** er belegget for markerthet og kasus, og
veiledningen gir en punktvis liste over hva oppgaven krever.
⚠ **H2020 er den ene terminen uten ordrett oppgavetekst** — boka kan gjengi
kravet, men aldri påstå noe om formuleringen. **H2022-6** hører til samme
saksområde, som er **7 av 114 poeng**. Sjangre: RED, EGE. Prioritet: bør
beherskes.

**Innholdskontrakt:** **Markerthet** — det umarkerte leddet er det enkleste,
vanligste og mest generelle; det markerte er formelt mer komplekst og snevrere i
bruk. **Markerthetskriteriene:** formell kompleksitet, frekvens, distribusjon,
nøytralitet i spørsmål. Anvendt på tall, kjønn, tempus og **kasus**.
**Ikonisitet** — at formen ligner innholdet: mengde, avstand og rekkefølge.
**Økonomi** — at det hyppige blir kort. **Spenningen mellom dem** som forklaring
på hvorfor språk ser ut som de gjør, med nyskrevne eksempler der de to kreftene
trekker mot hvert sitt utfall. **Svarmalen:** navngi prinsippet, vis det på et
konkret eksempel, og si hvilket annet prinsipp som taler imot.

**Oppgavesjangre:** RED, EGE (finn et eget eksempel på ikonisitet og ett der
økonomien vinner).

**Typiske feil:** #4 bruke «markert» som synonym for «uvanlig» uten å oppgi
kriteriene; #6 gi eksempler uten å begrunne dem; å behandle ikonisitet og økonomi
hver for seg når oppgaven spør etter forholdet mellom dem.

**Kvote:** 20 quiz / 20 flashcards.

#### Kapittel 8.3: Glossert data fra et ukjent språk — begrunnelsen er verdt tre ganger svaret
**id:** `exfac03-spr-8-3` · **number:** 8.3 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-8-2`

- **Kapitteltype:** drill (klassifisering med begrunnelse).
- **Description:** Den nyeste oppgaveformen i emnet: les glossert materiale fra et språk du ikke kan, slutt deg til en typologisk egenskap, og skriv begrunnelsen som bærer poengene.

**Forkunnskaper (kryssbok):** Kap. 8.1 og 8.2. `collapsible` Symbol- og termliste
med glosseringskonvensjonene boka bruker.

**Eksamensbelegg:** **H2025-7** er belegget, og formen er **helt ny** — ingen
tidligere termin har noe lignende. **⚠ Sensorkommentaren er den skarpeste i hele
materialet:** begrunnelsen er viktigere enn selve svaret, «siden det er 50/50
sjanse for å gjette riktig», og poengene fordeles **1 for riktig svar og 3 for
forklaringen**. Oppgaven er dermed i realiteten en argumentasjonsoppgave forkledd
som en klassifiseringsoppgave. Sjangre: KLA. Prioritet: bør beherskes.
⚠ **Én forekomst i én termin.** Boka skal si at formen er ny og ikke påstå at den
er etablert — men også si hvorfor den likevel trenes: et emne som innfører en ny
form, kan gjøre det igjen.

**Innholdskontrakt:** **Hvordan man leser glossert materiale:** originallinje,
morfemglossering, fri oversettelse — og hva hver linje gir deg.
**Prosedyren i fem trinn:** (1) segmenter og pare morfemer mot glossene; (2)
finn den konstruksjonen oppgaven spør om; (3) formuler hypotesen; (4) test den
mot **hver** datalinje og skriv ut testen; (5) konkluder, og si hvilken
datalinje som ville falsifisert hypotesen. **Trinn 4 og 5 er de tre poengene.**
**8 nyskrevne datasett** fra konstruerte språk, hvert med 5–8 glosserte linjer og
fullstendig fasit der begrunnelsen er skrevet ut i sin helhet — aldri som «en god
besvarelse ville pekt på …». **Poengregnskapet** etter H2025-modellen synliggjort
i hver fasit. **Selvdiagnose-sjekkliste (☐)**.
⚠ **Datasettene er nyskrevne.** Boka bruker ikke materialet fra arkivets oppgave,
og navngir ikke språket den oppgaven brukte som om det var pensum.

**Oppgavesjangre:** KLA i ren form.

**Typiske feil:** #8 svare uten begrunnelse — her koster det tre av fire poeng;
å teste hypotesen mot én datalinje og stoppe; #9 tro at det finnes ett riktig svar
når flere godt begrunnede analyser kan aksepteres.

**Kvote:** 16 quiz / 12 flashcards.

**Prøve-kvote Del 8:** 4 prøver (spesifisert i § 4).

### Del 9 — Språkendring og lingvistikkens grunnlag *(språkendring 4 av 6 terminer men 2 av 114 poeng · grunnlag og retorikk 1 av 6 hver)*

#### Kapittel 9.1: Synkroni og diakroni — og hva som endrer seg i et språk
**id:** `exfac03-spr-9-1` · **number:** 9.1 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-2-1`

- **Kapitteltype:** teori (redegjørende).
- **Description:** Skillet mellom å beskrive et språk på ett tidspunkt og å følge det gjennom tid, og de fire nivåene språkendring kan ramme.

**Forkunnskaper (kryssbok):** Kap. 2.1. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** Språkendring står i **4 av 6 terminer** (H2011-6, H2018-8,
H2021-6, H2022-7) og er **4 av 45 spørsmål** — men bare **2 av 114 poeng**: 2 av
49 i H2022 og **null i H2025**. **H2022-7** er den korteste oppgaven i hele
materialet: 2 poeng for forskjellen mellom synkroni og diakroni.
⚠ **Kombinasjonen høy frekvens og lav vekt er selve grunnen til at delen er kort
og skal leses.** Temaet er ikke utfaset — at H2025 ikke har det, er én termin.
Sjangre: RED. Prioritet: bør beherskes, men få minutter.

**Innholdskontrakt:** **Synkroni** = språket beskrevet på ett tidspunkt.
**Diakroni** = språket fulgt gjennom tid. **Hvorfor skillet er metodisk og ikke
bare tidsmessig.** **Endringsnivåene:** lydendring, morfologisk endring,
syntaktisk endring, betydningsendring — med ett nyskrevet norsk eksempel på
hvert. **Språkstadiene** boka trenger som ramme: urnordisk, norrønt, moderne
norsk, og at dialektforskjeller ofte er ulikt utfall av samme endring. **Den
korte svarmalen:** en to-poengs oppgave skal besvares på fem linjer — én
definisjon av hvert begrep, ett eksempel på hver, én setning om hva skillet gjør
for analysen. **`tip` «Kort er en instruks»:** å skrive en side om synkroni og
diakroni gir fortsatt 2 poeng, og stjeler tid fra en treoppgave verdt 10.

**Oppgavesjangre:** RED i kortform, med tidtaking.

**Typiske feil:** #5 hoppe over den ene halvdelen av begrepsparet; å skrive langt
der oppgaven er billig — den dyreste disponeringsfeilen i emnet; #6 nevne et
eksempel uten å si hvilket nivå endringen rammer.

**Kvote:** 16 quiz / 16 flashcards.

#### Kapittel 9.2: Betinga lydendringer — typene, årsakene og fellesbetegnelsen
**id:** `exfac03-spr-9-2` · **number:** 9.2 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-9-1`

- **Kapitteltype:** teori (redegjørende med klassifiseringsprosedyre).
- **Description:** Lydendringene som skjer bare i bestemte omgivelser, hvordan hver type navngis og forklares, og hvorfor fellesbetegnelsen må stå i svaret.

**Forkunnskaper (kryssbok):** Kap. 9.1, 1.3 og 2.2. `collapsible` Symbol- og
termliste med de lydendringstypene kapitlet bruker.

**Eksamensbelegg:** Dette er den ene oppgaven i emnet som er dokumentert gitt
**nesten ordrett to ganger**: **H2018-8 og H2021-6** stiller fire lydendringer
med samme parentetiske forbehold og samme avsluttende krav om en
fellesbetegnelse; eneste forskjell er punktrekkefølgen.
**⚠ Sensorkravet er absolutt:** H2018 sier at uttrykket **«betinga lydendringer»
kreves for full uttelling**. Det er en av emnets seks obligatoriske termer.
⚠ **To gjentakelser over seks terminer er ikke belegg for at emnet resirkulerer
oppgaver systematisk.** Boka skal si at oppgave**typen** er stabil, ikke at
trening på gamle sett gir gjenkjennelse. Sjangre: KLA, RED. Prioritet: bør
beherskes.

**Innholdskontrakt:** **Betinga mot ubetinga lydendring** — den betinga skjer
bare i en bestemt omgivelse, og omgivelsen er en del av forklaringen.
**Typene:** assimilasjon (med retning og grad), bortfall, innskudd, omlyd,
metatese, sammensmelting. Hver type med definisjon, omgivelsen den krever, og
ett nyskrevet norsk eller nordisk eksempel. **Prosedyren for hver oppgitt
endring:** (1) sammenlign de to formene tegn for tegn; (2) navngi hva som er
endret; (3) navngi omgivelsen som utløste det; (4) navngi endringstypen; (5)
avslutt med fellesbetegnelsen for hele settet. **`warning` «Fellesbetegnelsen er
et eget poeng»** med termen i fet — fire riktige typeanalyser uten
fellesbetegnelsen er et ufullstendig svar. **15 nyskrevne endringspar** som
drill, med fullstendig fasit.

**Oppgavesjangre:** KLA med obligatorisk term; RED.

**Typiske feil:** #10 utelate fellesbetegnelsen — koden glosses her og kapitlet
er dens hovedhjem; #8 navngi typen uten å oppgi omgivelsen, som er halve
forklaringen; å forveksle assimilasjonens retning.

**Kvote:** 22 quiz / 22 flashcards.

#### Kapittel 9.3: Behaviorisme og mentalisme — og retorikkens fem faser
**id:** `exfac03-spr-9-3` · **number:** 9.3 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-0-2`

- **Kapitteltype:** teori (bør kjenne til — plassert sist og merket).
- **Description:** De to grunnsynene på hva språkkunnskap er, og en kort oversikt over talerens fem arbeidsfaser i klassisk retorikk.

**Forkunnskaper (kryssbok):** Kap. 0.2. Kapitlet kan leses uten annen
forkunnskap. `collapsible` Symbol- og termliste.

**Eksamensbelegg:** To selvstendige småtemaer, hvert med **1 av 6 terminer og 1
av 45 spørsmål**. **H2021-7** gjelder behaviorisme og mentalisme — prøvd så sent
som 2021 og derfor ikke å regne som ute. **H2018-2** gjelder talerens fem faser i
retorikken, og veiledningen viser til et eget sidespenn i pensum.
⚠ **Retorikken er sannsynligvis på vei ut:** én forekomst mot fire terminer uten.
Men **én forekomst mot fire fravær er ikke nok til å erklære et tema utfaset** når
grunnlaget er seks terminer med ni års hull — og H2025 viste at emnet kan innføre
helt nye former. Begge temaene **dekkes kort og merkes «bør kjenne til»**.
Sjangre: RED. Prioritet: bør kjenne til.

**Innholdskontrakt:** **Behaviorisme** — språk som innlært atferd, formet av
stimulus, respons og forsterkning; hva synet forklarer godt og hva det sliter
med. **Mentalisme** — språkkunnskap som en indre, medfødt kapasitet; hvilke
observasjoner den bygger på. **Kontrasten** satt opp punkt for punkt, som er den
formen oppgaven ber om. **Retorikkens fem faser** — å finne stoffet, å ordne det,
å utforme språket, å huske det, å framføre det — hver med én setning om hva fasen
går ut på, presentert som en huskeliste og ikke som et apparat. **Boka sier
eksplisitt hva den vet:** at retorikken er dokumentert prøvd én gang, i én
termin, og at nevneren er seks.

**Oppgavesjangre:** RED i kortform for begge temaer.

**Typiske feil:** #5 behandle det ene grunnsynet og hoppe over det andre når
oppgaven ber om kontrasten; #7 gjengi fire av de fem retorikkfasene; å bruke mer
tid på dette stoffet enn frekvensen forsvarer.

**Kvote:** 16 quiz / 18 flashcards.

**Prøve-kvote Del 9:** 4 prøver (spesifisert i § 4).

### Del 10 — Eksamenstrening

#### Kapittel 10.1: Transkripsjonsoppgaven fra bestilling til poeng
**id:** `exfac03-spr-10-1` · **number:** 10.1 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-3-3`

- **Kapitteltype:** sjanger.
- **Description:** Emnets best betalte enkeltoppgave ført fra bestilling til ferdig svar, med tidsdisponering og et poengregnskap som viser hva hvert ledd er verdt.

**Eksamensbelegg:** Transkripsjonsoppgaven står i **4 av 6 terminer** (H2011-2,
H2018-4, H2021-2, H2025-4) og gir **10 av 65 poeng** i den nyeste poengsatte
terminen, med **trekk 0,5 per feil**. Bestillingen har tre ledd i alle fire
terminene: transkriber fonetisk og fonemisk, oppgi språklig bakgrunn, forklar
forskjellene. **Vurderingsregelen:** ulike varianter godtas så lenge de vurderes
som en mulig eller sannsynlig uttale gitt kandidatens oppgitte bakgrunn (H2025);
H2020 kaller sin egen transkripsjon et forslag. Prioritet: høyeste.

**Innhold (sjangerkapittel):** Bestillingens tre ledd dekomponert, med
tidsbudsjett per ledd og en anbefalt rekkefølge som sikrer at forklaringsleddet
faktisk blir skrevet. **Gjennomskrevet eksempel** på et nyskrevet ord, med
margkommentarer som viser hvor poengene ligger og hvor trekkene kommer.
**4 nyskrevne øvingsoppgaver** med fullstendig fasit for **to ulike oppgitte
bakgrunner** hver, slik at leseren ser konsistenskriteriet i praksis.
Poengregnskap i hver fasit.

**Typiske feil:** #1 uten oppgitt bakgrunn; #2 inkonsistent med bakgrunnen;
#3 generell forklaring der oppgaven ber om konkrete tegn.

**Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.2: Beskrivelsesoppgaven — symbol mot ord, begge veier
**id:** `exfac03-spr-10-2` · **number:** 10.2 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-1-5`

- **Kapitteltype:** sjanger.
- **Description:** Den mest mekanisk trenbare oppgaven i emnet, med skillekravet som fasitkriterium og en fast rekkefølge på akseverdiene.

**Eksamensbelegg:** Beskrivelsesoppgaven står i **3 av 6 terminer** og går begge
veier: fra beskrivelse til symbol (H2011-2c), fra symbol til beskrivelse
(H2025-3, **1 poeng per riktig beskrivelse, fem poeng totalt, ingen delpoeng**),
og fra term til systematikk (H2018-3, som i tillegg krever tre egne ord per lyd).
**Sensorkravet:** systematikken må være **forklart, ikke bare nevnt** (H2018), og
beskrivelsen må skille fonemet fra **alle andre** fonemer i norsk (H2025).
Prioritet: høyeste — best poeng per minutt i hele emnet.

**Innhold (sjangerkapittel):** Den faste rekkefølgen på akseverdiene og hvorfor
den sparer tid. **Skillekontrollen** som fast siste trinn. **Gjennomskrevet
eksempel** i begge retninger med margkommentarer. **4 nyskrevne
øvingsoppgaver** med fasit og poengregnskap etter H2025-modellen, hvorav én i
H2018-formen med krav om tre egne ord per lyd.

**Typiske feil:** #16 for løs beskrivelse; #4 nevne termene uten systematikken;
#7 gi to ord der oppgaven ber om tre.

**Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.3: Segmenteringsoppgaven
**id:** `exfac03-spr-10-3` · **number:** 10.3 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-4-3`

- **Kapitteltype:** sjanger.
- **Description:** Morfologisk segmentering med fullstendig merking, ført som eksamenssvar med trekkregnskap og med grensetilfellene begrunnet.

**Eksamensbelegg:** Segmenteringsoppgaven står i **3 av 6 terminer** (H2021-3,
H2022-2c, H2025-6) og gir **10 av 65 poeng** i H2025, med **2 poeng per ord og
trekk 0,5 per feil**. **Sensorkravene:** merkingen må være fullstendig, men
oppsettet er fritt så lenge analysen er forståelig (H2025); opplysningene om
røtter, stammer, avlednings- og bøyningsformativer må være eksplisitte hele veien
(H2020); morfene skal ordnes etter funksjon og form (H2022). ⚠ H2025 aksepterer
uttrykkelig **alternative analyser** i grensetilfeller. Prioritet: høyeste.

**Innhold (sjangerkapittel):** Føringsmalen — segmentering, merking,
begrunnelseslinje for hvert grensetilfelle. **Gjennomskrevet eksempel** med
margkommentarer. **4 nyskrevne øvingsoppgaver** med fem ord hver og
fullstendig fasit, minst to grensetilfeller merket «(omstridt — begge
forsvarlige)» med begge analyser skrevet ut. Poengregnskap i hver fasit.

**Typiske feil:** #5 la morfer stå umerket; #9 tro at grensetilfellet har ett
riktig svar; å bruke tid på oppsett i stedet for på merking.

**Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 10.4: Treoppgaven og setningsleddanalysen
**id:** `exfac03-spr-10-4` · **number:** 10.4 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-5-4`

- **Kapitteltype:** sjanger.
- **Description:** De to syntaktiske analyseoppgavene side om side: det fullstendige treet og den raskere leddanalysen uten tre, med argumentasjon for tilhekting.

**Eksamensbelegg:** Treoppgaven står i **4 av 6 terminer** og er den dyreste
enkeltoppgaven i H2025 med **10 av 65 poeng**; trevarianten i H2022 var 5 av 49.
**H2025-8** er den billigere leddanalysen uten tre. Trekket er **0,5 per
feilanalysert setningsledd**. **⚠ De to mildeste sensorkravene i hele materialet
står her:** et tre som er **nær korrekt** får full uttelling (H2025), og en
alternativ tilhekting **kan være et pluss** hvis kandidaten argumenterer for den
med erstatning og flytting (H2018). Prioritet: høyeste.

**Innhold (sjangerkapittel):** Når man skal bygge tre og når man skal svare med
leddanalyse, og hva som er raskest per poeng. **Tilhektingsargumentet** som egen
ferdighet, med to nyskrevne setninger der to analyser begge er forsvarlige og
begge skrives ut. **Gjennomskrevet eksempel** med margkommentarer og faktisk
utskrevet tre. **4 nyskrevne øvingsoppgaver** med tre og leddanalyse i fasiten,
poengregnskap, og trekkregnskap per feilanalysert ledd. ⚠ Alle fasiter viser et
**faktisk tre**, aldri «treet i ord».

**Typiske feil:** å hoppe over oppgaven fordi treet virker uoverkommelig, når nær
korrekt gir full uttelling; #5 analysere deler av setningen; å hekte feil uten å
si noe om valget, når en setning om det kan gjøre feilen til et pluss.

**Kvote:** 14 quiz / 8 flashcards.

#### Kapittel 10.5: Redegjørelsen og de seks obligatoriske termene
**id:** `exfac03-spr-10-5` · **number:** 10.5 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-0-2`

- **Kapitteltype:** sjanger.
- **Description:** Emnets vanligste byggekloss, og huskelista over de seks termene som må stå i svaret for at det skal gi full uttelling.

**Eksamensbelegg:** Redegjørelsesoppgaven står i **alle 6 terminer** og er den
vanligste byggeklossen: «hva betyr begrepene», «forklar hva som skiller»,
«forklar forskjellen mellom», «gjør kort greie for». **De korteste er billige** —
H2022-7 gir 2 poeng for synkroni mot diakroni, H2025-3 gir 1 poeng per
fonembeskrivelse. **De lengste er dyre** — H2025-2 gir 8 poeng for
pragmatikkspørsmålet. **Mønsteret som gjør kapitlet nødvendig:** flere oppgaver
har en **obligatorisk term** som må stå der, og uten den er svaret ufullstendig
uansett hvor godt det ellers er. Prioritet: høyeste — dette er den billigste
poengkilden i hele emnet, og det er en ren drill.

**Innhold (sjangerkapittel):** Firetrinnsformen — avgrens hva spørsmålet gjelder,
definer presist, sett opp mot kontrastbegrepet, presiser ett grensetilfelle.
**«Kort er en instruks»-boksen:** poengene forteller hvor langt svaret skal være,
og å skrive en side på en to-poengs oppgave er den dyreste
disponeringsfeilen i emnet. **Termdrillen:** alle seks obligatoriske termer med
hjemmel, hvilken oppgavetype de hører til, og en setningsmal som får dem inn
naturlig — betinga lydendringer, kontroll, tema(tiserings)posisjon,
finittposisjon, performativ, talerens autorisasjon. **4 nyskrevne
øvingsoppgaver** i ulik lengde, med momentlister som fasit strukturert som
må-punkter, pluss-punkter og feller.

**Typiske feil:** #10, #11, #12 og #14 — de fire som handler om en manglende
term, samlet og drillet her; #5 hoppe over ett av oppgavens ledd.

**Kvote:** 14 quiz / 10 flashcards.

#### Kapittel 10.6: Eksempelverkstedet
**id:** `exfac03-spr-10-6` · **number:** 10.6 · **estimatedMinutes:** 50 · **prerequisites:** `exfac03-spr-10-5`

- **Kapitteltype:** sjanger.
- **Description:** Sjangeren som ikke kan pugges: gitt en spesifikasjon, finn et ord eller en ytring som oppfyller den, og skriv ut hvorfor den gjør det.

**Eksamensbelegg:** Egeneksempel-oppgaven står i **alle 6 terminer**, ofte som en
punktliste med egen bestilling per punkt: H2011-3 har fem punkter a–e med kravet
«forklar kort hvorfor du mener eksemplene dine er riktige»; H2020-6 har tre
deloppgaver; H2022-1c ber om tre IPA-eksempler etter spesifikasjon; H2022-2b om
fire ord etter morfologisk spesifikasjon; H2022-1a, 1e og 3c ber om «et ord du
velger selv», «et ordpar du velger selv» og «eksempler du finner på selv».
**Sensorkravet går lenger enn bestillingen:** H2020 sier at svar med begrunnelse
av egne eksempler **teller litt mer selv når begrunnelse ikke er bedt om**, fordi
undervisningen har understreket at man skal vise sin forståelse. Prioritet:
høyeste.

**Innhold (sjangerkapittel):** Firetrinnsformen fra kap. 0.2 anvendt fullt ut:
navngi fenomenet, gi eksempelet, si eksplisitt hvilken del av eksempelet som
svarer til hvilken del av definisjonen, si hva som ville gjort eksempelet
dårlig. **Eksempelbanken:** ferdig begrunnede eksempler for hvert av de ni
saksområdene, slik at leseren har et forråd og ser mønsteret i begrunnelsene.
**Gyldighetsdrillen:** tolv nyskrevne eksempler der leseren skal avgjøre om
eksempelet faktisk oppfyller spesifikasjonen — fire treffer, fire bommer på en
identifiserbar måte, fire er grensetilfeller der fasiten skriver ut begge
lesningene og merker oppgaven «(omstridt — begge forsvarlige)». **4 nyskrevne
øvingsoppgaver** i punktlisteform a)–e), med begrunnelseskrav på hvert punkt.

**Typiske feil:** #6 gi eksempler uten begrunnelse; #7 gi færre eksempler enn
bestilt; #15 gjengi lærebokas eksempler i stedet for å lage egne — alle tre
glosses samlet her.

**Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 10.7: Klassifisering med begrunnelse — skriv begrunnelsen først
**id:** `exfac03-spr-10-7` · **number:** 10.7 · **estimatedMinutes:** 45 · **prerequisites:** `exfac03-spr-10-5`

- **Kapitteltype:** sjanger.
- **Description:** Oppgaven som ser ut som en sorteringsjobb, men er en argumentasjonsoppgave: begrunnelsen er verdt tre ganger så mye som konklusjonen.

**Eksamensbelegg:** Klassifiseringsoppgaven står i **3 av 6 terminer** (H2018-8,
H2021-6, H2025-1, H2025-7 — fire belegg, tre terminer). **Sensorkommentarene er
de skarpeste i hele materialet:** i typologioppgaven fordeler H2025 **1 poeng for
riktig svar og 3 for forklaringen**, med begrunnelsen at det er 50/50 sjanse for
å gjette riktig; i synonymioppgaven skriver den at diskusjonen er viktigere enn
hvilken konklusjon kandidaten lander på, og at flere ulike svar kan aksepteres
hvis de er godt begrunnet. Prioritet: høyeste.

**Innhold (sjangerkapittel):** **Snuoperasjonen:** skriv argumentet, så
konklusjonen — motsatt av hva de fleste gjør. Femtrinnsformen: sett opp
kandidatkategoriene, prøv dataene mot hver, skriv ut testen, konkluder, si hva
som ville endret konklusjonen. **«Flere svar kan være riktige»-boksen**, plassert
etter de første oppgavene så den ikke leses som en invitasjon til vaghet.
**4 nyskrevne øvingsoppgaver** hentet fra ulike saksområder — lydendringstyper,
betydningsrelasjoner, hode- og dependentrekkefølge, argument mot adjunkt — med
poengregnskap etter 1-og-3-modellen i hver fasit.

**Typiske feil:** #8 svare uten begrunnelse; #9 tro at det finnes ett riktig
svar; å begrunne konklusjonen etterpå i stedet for å la begrunnelsen bestemme
den.

**Kvote:** 12 quiz / 8 flashcards.

#### Kapittel 10.8: Feilvaksinen: de seksten feilene
**id:** `exfac03-spr-10-8` · **number:** 10.8 · **estimatedMinutes:** 55 · **prerequisites:** `exfac03-spr-10-7`

- **Kapitteltype:** sjanger.
- **Description:** Alle seksten feilene de fire sensorveiledningene navngir, hver drillet med en svak og en sterk versjon av samme passasje.

**Eksamensbelegg:** Analysens feilregister i sin helhet — **nevneren er 4
sensorveiledninger**, og hvert punkt er hjemlet i minst én navngitt veiledning.
De tyngste: **#3** generell frase der oppgaven ber om konkrete tegn (H2025) ·
**#1** og **#2** transkripsjon uten eller mot oppgitt bakgrunn (H2018, H2021,
H2025) · **#8** klassifisering uten begrunnelse (H2025) · **#4** termer uten
systematikk (H2018) · **#14** performativ uten term og uten autorisasjon (H2025).
Prioritet: høyeste — feilunngåelse er billigere enn å hente inn et karaktertrinn.
⚠ **Ærlighetsforbeholdet skal stå i kapitlets åpning:** de fire veiledningene
uttrykker sensors **forhåndsforventninger**, ikke observerte studentfeil. Ikke ett
sted i materialet rapporterer en sensor hva kandidatene faktisk gjorde galt.
Dette skiller emnet fra flere søskenemner, og leseren har krav på å vite det.

**Innhold (sjangerkapittel):** Alle seksten kodene med hjemmel, hvilken sjanger
de rammer, og en **omskrivingsøvelse** per kode: samme passasje i svak og sterk
versjon, med den konkrete endringen markert. **Feilkortet** — de seksten som
énlinjers varsellamper, med ærlighetsforbeholdet trykt ved siden av.
**Selvdiagnose-sjekkliste (☐)** som leseren kan kjøre på sin egen besvarelse.
**Naturlig pausepunkt** midtveis — kapitlet er 55 minutter.

**Typiske feil:** Alle seksten, samlet. Metafeilen kapitlet advarer mot: å lese
registeret som en liste over ting andre gjør galt.

**Kvote:** 16 quiz / 10 flashcards.

#### Kapittel 10.9: Modellbesvarelser med poengregnskap
**id:** `exfac03-spr-10-9` · **number:** 10.9 · **estimatedMinutes:** 60 · **prerequisites:** `exfac03-spr-10-8`

- **Kapitteltype:** modellbesvarelse.
- **Description:** Tre fullstendige besvarelser på samme nyskrevne oppgavesett, ført på tre ulike nivåer, med poeng satt per delspørsmål og forskjellene forklart.

**Eksamensbelegg:** **H2022 og H2025 setter poeng per delspørsmål** med
kommentarkolonne som sier hva poengene gis for, og H2025 oppgir dessuten trekk
(0,5 per feil i tre ulike oppgaver). **En modellbesvarelse uten poengregnskap
ville ikke ligne på det studenten faktisk vurderes etter** — derfor er alle tre
poengsatt. **Karakterrammen:** A–F fra H2025, med grensene A 58,5–65 · B
52,0–58,0 · C 45,5–51,5 · D 39,0–45,0 · E 30,0–38,5 · F under 30,0, og med
merknaden om at grensene er **veiledende** fordi helhetsinntrykket teller.
⚠ **Forbeholdet skal stå i kapitlets åpning:** skalaen var todelt så sent som
H2022 (bestått fra 20 av 49), overgangen kan ikke tidfestes, og **ingen av de
fire veiledningene har en kvalitativ karakterbeskrivelse**. Nivåene under er
derfor definert av **poengsum**, ikke av prosa om hva en A-besvarelse «viser».
Prioritet: høyeste.

**Innhold:** **Ett nyskrevet oppgavesett** på ni spørsmål med poengfordeling som
speiler H2025 (strukturfagene ca. 70 %), besvart tre ganger:
**(a) en besvarelse i A-sjiktet** — komplett, med begrunnelser og egne
eksempler, som lander skarpt der oppgaven inviterer til det;
**(b) en besvarelse i C-sjiktet** — faglig riktig i hovedsak, men med
gjenkjennelige tap: en generell forklaring der oppgaven ba om konkrete tegn, en
manglende obligatorisk term, et eksempel uten begrunnelse. Den er **ærlig merket
som C**, og teksten sier eksplisitt at C er en god og vanlig karakter;
**(c) en besvarelse på marginen** — akkurat over E-terskelen på 30 av 65, som
viser hva som faktisk skal til for å komme gjennom, og som også leses som
«bestått på marginen» for den som trener på H2022-format.
Etter hver besvarelse: **poengregnskap per delspørsmål**, **oppgraderingsmenyen**
(hva som skiller denne besvarelsen fra den over, punkt for punkt, med poengverdi)
og en avkryssbar selvdiagnose (☐). ⚠ **Ingen meta-fasit:** drøftelsene er
faktisk utskrevet, aldri erstattet av «en A-besvarelse ville ha …».
**Naturlige pausepunkter** mellom besvarelsene — kapitlet er 60 minutter.

**Typiske feil:** De fire som faktisk skiller nivåene i besvarelsene: #3, #6,
#8 og en manglende obligatorisk term. Metafeilen å lese A-besvarelsen som en mal
å kopiere i stedet for som et sett grep.

**Kvote:** 8 quiz / 6 flashcards.

**Prøve-kvote Del 10:** 4 prøver — én sjangerprøve og tre komplette
øvingseksamener (spesifisert i § 4).

---

## Kvotesammendrag (AUTORITATIV for alle senere faser)

| Del | Kapitler | Minutter | Quiz | Flashcards | Prøver |
|---|---|---|---|---|---|
| 0 | 2 | 90 | 30 | 26 | 0 (dekkes av øvingseksamenene i del 10) |
| 1 | 5 | 295 | 112 | 108 | 4 |
| 2 | 4 | 225 | 82 | 74 | 4 |
| 3 | 3 | 190 | 60 | 42 | 4 |
| 4 | 5 | 285 | 104 | 98 | 4 |
| 5 | 7 | 390 | 144 | 136 | 4 |
| 6 | 3 | 160 | 60 | 60 | 4 |
| 7 | 3 | 165 | 64 | 66 | 4 |
| 8 | 3 | 165 | 56 | 52 | 4 |
| 9 | 3 | 150 | 54 | 56 | 4 |
| 10 | 9 | 455 | 116 | 74 | 4 (én sjangerprøve + tre øvingseksamener) |
| **Sum** | **47** | **2 570** | **882** ✓ (≥500) | **792** ✓ (≥500) | **40** |

**Summeringskontroll per del — quiz:** Del 0: 14+16=30. Del 1:
24+22+24+24+18=112. Del 2: 22+22+20+18=82. Del 3: 20+18+22=60. Del 4:
20+24+22+20+18=104. Del 5: 22+24+20+22+20+20+16=144. Del 6: 22+20+18=60.
Del 7: 20+22+22=64. Del 8: 20+20+16=56. Del 9: 16+22+16=54. Del 10:
14+14+12+14+14+12+12+16+8=116.
Totalt 30+112+82+60+104+144+60+64+56+54+116 = **882** ✓

**Summeringskontroll per del — flashcards:** Del 0: 12+14=26. Del 1:
26+24+24+26+8=108. Del 2: 24+22+20+8=74. Del 3: 18+14+10=42. Del 4:
22+24+12+22+18=98. Del 5: 24+24+20+14+18+20+16=136. Del 6: 24+20+16=60.
Del 7: 20+24+22=66. Del 8: 20+20+12=52. Del 9: 16+22+18=56. Del 10:
8+8+8+8+10+8+8+10+6=74.
Totalt 26+108+74+42+98+136+60+66+52+56+74 = **792** ✓

**Kapittelkontroll:** 2+5+4+3+5+7+3+3+3+3+9 = **47** ✓
**Minuttkontroll:** 90+295+225+190+285+390+160+165+165+150+455 = **2 570** ✓

**Fordelingen speiler poengvekten.** Del 1–5 (strukturfagene) har **24 av 47
kapitler**, **1 385 av 2 570 minutter (53,9 %)** og **502 av 882 quiz (56,9 %)**.
Sammen med Del 10s sjangerkapitler for de samme fagene ligger tyngdepunktet der
de 70,2 prosentene av poengene ligger. Del 6–9 har til sammen 12 kapitler for de
34 av 114 poengene som ligger utenfor strukturfagene.

**Flashcard-profil:** hovedvekten ligger på **symbol ↔ beskrivelse ↔ eksempelord**,
fordi det er nøyaktig presisjonen beskrivelsesoppgaven måler, og på
**term ↔ definisjon ↔ test**. Korttyper: IPA-symbol ↔ stemthet, sted og måte ↔
norsk eksempelord · vokalsymbol ↔ høyde, plassering, rundethet, lengde ·
fenomen ↔ hva som utløser det ↔ hva som skjer mellom skråstreker ·
formativtype ↔ hva den gjør ↔ testen · setningsledd ↔ testen som identifiserer
det ↔ typisk frasekategori · betydningsrelasjon ↔ testen · lydendringstype ↔
omgivelsen som utløser den · obligatorisk term ↔ hvilken oppgave den hører til.
⚠ **Flashcards genereres kun fra toppnivå `definition`-blokker med `title`** —
begrepsbankene må derfor bygges som ekte definition-blokker, ikke som tekstlister.

**Quiz-profil:** flervalg med **nabobegrep-distraktorer**, fordi det er der
emnets feilregister sitter: ç mot ʃ · retrofleks mot dental · aspirert mot
uaspirert · fonem mot allofon mot fon · komplementær distribusjon mot fri
variasjon · hovedallofon mot biallofon · avledningsformativ mot bøyningsformativ
mot sammensetningsformativ · rot mot stamme · ordklasse mot setningsledd ·
frasekategori mot funksjon · temaposisjon mot finittposisjon · argument mot
adjunkt · polysemi mot homonymi mot homofoni · synonymi mot delvis synonymi ·
performativ mot konstativ · hode mot dependent · markert mot umarkert ·
assimilasjon mot bortfall mot omlyd · synkroni mot diakroni. I tillegg
«hvilken feil begår denne kandidaten»-spørsmål bygget på de seksten feilkodene,
og «hvilken obligatorisk term mangler i dette svaret»-spørsmål. Distraktorene
skal være **reelle feller fra analysen**, aldri bokas egne nyanser gjengitt som
galt svar; nær-sanne distraktorer forklares eksplisitt i fasit-kommentaren.
⚠ **Fasitfordelingen rebalanseres til slutt (jevn a/b/c/d).** Og
lengde-fella: riktig alternativ skal **ikke** systematisk være det lengste —
kjør `quiz-lengdesjekk.mjs` før ferdigmelding.
⚠ **IPA i quiz-alternativer** følger § 1.2: direkte Unicode, ingen LaTeX, ingen
`$…$`. Et alternativ som består av en transkripsjon, settes uten backticks i
`options`-strengen.

---

## 4. Prøver

### Temadelprøver (4 per temadel 1–9 = 36 prøver)

Hver prøve speiler eksamensformatet i miniatyr og er dimensjonert for
**20–45 minutter**. Alle oppgaver, ord, setninger, datasett og transkripsjoner er
**nyskrevne**. Hver prøve deklarerer «fire prøver à ~X min» og at prøvene trygt
kan deles over flere kvelder — én prøve per økt. Etter hver prøvefasit følger en
avkryssbar selvdiagnose-sjekkliste (☐). Flervalg i prøve-collapsibles har
**stokkede** fasitbokstaver — aldri «alle a» — og prøve-tipen sier hvor
flervalget bor. Fasitene har **poengregnskap per delspørsmål** etter mønsteret
fra de to poengsatte terminene, og strukturen **må-punkter / pluss-punkter /
feller** der oppgaven er redegjørende. Kap-referanser i fasitene er markdown-lenker.

**Prøve-kvote Del 1 (Fonetikk og beskrivelsesapparatet):**
1. *Konsonantkartet:* 12 flervalg med nabolyd-distraktorer + 4 beskrivelser fra
   symbol til ord, med skillekontroll i fasiten.
2. *Vokalfirkanten (25 min):* 6 vokalsymboler beskrives fullt ut, 4 beskrivelser
   oversettes til symbol, poengregnskap 1 poeng per riktig og ingen delpoeng.
3. *Norske særfenomener:* 10 flervalg + 5 nyskrevne ord der leseren skal
   identifisere hvilket fenomen ordet er konstruert for å vise.
4. *Systematikken forklart (30 min):* to sammensatte artikulatoriske termer skal
   forklares ledd for ledd, med tre egne ord per lyd — H2018-formen, med
   fasitens felle: å ramse opp aksene uten å forklare dem.

**Prøve-kvote Del 2 (Fonologi, fonem og stavelse):**
1. *Minimale par:* 12 flervalg + 6 kandidatpar der leseren avgjør om paret er
   minimalt og begrunner.
2. *Distribusjonsanalyse (30 min):* to lyder med oppgitte omgivelser; leseren
   setter opp fordelingen, konkluderer om allofoni, og utpeker hovedallofonen med
   begrunnelse.
3. *Stavelsesstruktur:* 10 flervalg + 4 egne eksempler etter spesifikasjon
   (H2022-1c-formen) med begrunnelse på hvert punkt.
4. *Sonoritetsbruddet (25 min):* tre nyskrevne ord der prinsippet brytes;
   leseren navngir prinsippet, viser sekvensen og forklarer bruddet.

**Prøve-kvote Del 3 (Transkripsjonsverkstedet):**
1. *Nivåene skilt:* 10 flervalg + 5 tegnpar der leseren skriver
   forklaringssetningen for hvert — prøven er bygget rundt feilen å svare
   generelt.
2. *Uttalekontrakten:* 8 korte transkripsjoner med oppgitt bakgrunn der leseren
   avgjør om de er konsistente; to er grensetilfeller med begge lesninger
   skrevet ut.
3. *Full transkripsjon (35 min):* ett nyskrevet sammensatt ord, begge nivåer,
   oppgitt bakgrunn, forklaringsledd — fasit for to ulike bakgrunner, med
   trekkregnskap 0,5 per feil.
4. *Under tidspress (30 min):* to nyskrevne ord på tjue minutter, med
   poengregnskap som viser hva forklaringsleddet er verdt hvis transkripsjonen
   spiser tiden.

**Prøve-kvote Del 4 (Morfologi):**
1. *Formativtypene:* 12 flervalg med nabobegrep-distraktorer + 6 morfer som skal
   merkes og begrunnes.
2. *Segmentering (35 min):* fem nyskrevne lange ord med full merking,
   poengregnskap 2 poeng per ord og trekk 0,5 per feil, og ett grensetilfelle med
   begge analyser i fasiten.
3. *Orddanning:* punktliste a)–e) der hvert punkt ber om to egne ord etter
   spesifikasjon, med begrunnelse — prøven er bygget rundt feilen å levere
   færre eksempler enn bestilt.
4. *Bøyningsklasser (25 min):* fire ord plasseres i klasse med paradigmet som
   belegg, og to kortsvar om hva som definerer klassen.

**Prøve-kvote Del 5 (Syntaks):**
1. *Ledd eller ordklasse:* 12 flervalg bygget rundt den vanligste
   forvekslingen + 6 ledd som skal merkes med funksjon og frasekategori.
2. *Leddanalyse uten tre (30 min):* to helsetninger analyseres i H2025-8-formen,
   med trekkregnskap 0,5 per feilanalysert ledd.
3. *Treoppgaven (40 min):* én nyskrevet setning med innleiring i to nivåer;
   fasiten viser et faktisk utskrevet tre, og ett tilhektingsvalg er begrunnet
   begge veier.
4. *Posisjonstermene (25 min):* setningsskjemaet forklart med begge termene
   obligatorisk, pluss argument mot adjunkt på fire ledd — prøven er bygget rundt
   feilen å beskrive ordstillingen korrekt uten å bruke termene.

**Prøve-kvote Del 6 (Semantikk):**
1. *Betydningsrelasjonene:* 12 flervalg + 8 ordpar som klassifiseres med test og
   begrunnelse.
2. *Polysemi eller homofoni (25 min):* seks ordpar der to er grensetilfeller;
   fasiten skriver ut begge lesningene og godtar begge når de er begrunnet.
3. *Full synonymi (30 min):* fire nær-synonyme par prøves mot konnotasjon,
   bruksbetingelser og sosial betydning, med konklusjon og begrunnelse.
4. *Referanse og betydning:* 10 flervalg + to kortsvar om når to uttrykk har
   samme referent og ulik betydning.

**Prøve-kvote Del 7 (Pragmatikk og kontekst):**
1. *Kontekstnivåene:* 10 flervalg + én ytring som tolkes i to
   situasjonskontekster, med forklaring av hva som gjorde forskjellen.
2. *Performativer (35 min):* full oppgave i H2025-2-formen med begge
   obligatoriske komponenter, og en fasit som viser hva som faller bort når den
   ene mangler.
3. *Vellykkethetsbetingelsene:* seks nyskrevne ytringer der én betingelse
   svikter i hver; leseren utpeker hvilken og begrunner.
4. *Maksimene (25 min):* de fire maksimene med ett eget eksempel hver på brudd,
   og implikaturen skrevet ut — poengregnskap 1 poeng per maksime, slik H2022
   gjør det.

**Prøve-kvote Del 8 (Språktypologi):**
1. *Hode og dependent:* 12 flervalg + fem konstruksjoner der rekkefølgen skal
   avgjøres og korrelasjonen kommenteres med forbehold.
2. *Markerthet (25 min):* fire kategoripar plasseres på markerthetsaksen med
   kriteriene skrevet ut.
3. *Ikonisitet mot økonomi (25 min):* tre nyskrevne tilfeller der de to
   prinsippene trekker mot hvert sitt utfall; leseren forklarer spenningen.
4. *Glossert data (35 min):* to nyskrevne datasett fra konstruerte språk, med
   poengregnskap 1 for svaret og 3 for begrunnelsen — prøven er bygget rundt
   feilen å gjette uten å teste hypotesen mot hver datalinje.

**Prøve-kvote Del 9 (Språkendring og lingvistikkens grunnlag):**
1. *Synkroni og diakroni:* 10 flervalg + kortsvar på fem linjer, med tidtaking —
   prøven driller at en billig oppgave skal besvares kort.
2. *Betinga lydendringer (30 min):* fire nyskrevne endringspar der type og
   omgivelse skal navngis, og fellesbetegnelsen kreves til slutt. Fasiten viser
   hva svaret er verdt uten den.
3. *Endringsnivåene:* 10 flervalg + fire endringer som plasseres på riktig nivå
   med begrunnelse.
4. *Grunnsyn og retorikk (20 min):* behaviorisme mot mentalisme punkt for punkt,
   pluss de fem retorikkfasene som huskeliste — kortprøve, med den eksplisitte
   merknaden om at begge temaene står i 1 av 6 terminer.

### Prøve-kvote Del 10 (Eksamenstrening) — én sjangerprøve og tre øvingseksamener

Alle i H2025-form: **ni nummererte spørsmål, 65 poeng**, med poengfordeling som
speiler den dokumenterte vektingen (strukturfagene ca. 70 %). Fasitene har
poengregnskap per delspørsmål, trekk der terminene oppgir trekk, og momentlister
strukturert som må-punkter, pluss-punkter og feller. **Alle oppgaver, ord,
setninger og datasett er nyskrevne.** Øvingseksamenene sier eksplisitt til
leseren at arkivet ikke inneholder løsningsforslag eller fasitark, og at bokas
besvarelser er skrevet av oss.

1. *Sjangerprøven (30 min):* 25 flervalg fordelt over de sju sjangrene og de
   seksten feilkodene, med stokkede fasitbokstaver. Prøven måler om leseren
   kjenner igjen **hva en oppgave ber om**, før hun begynner å svare.
2. **Øvingseksamen A — strukturtung profil.** Ni spørsmål med transkripsjon,
   fonemanalyse, segmentering, tre og leddanalyse blant dem; semantikk,
   pragmatikk og typologi dekket med ett spørsmål hver. Speiler H2025s
   poengfordeling nærmest mulig.
3. **Øvingseksamen B — bredde.** Ni spørsmål der **alle ni saksområdene** i
   temafrekvenstabellen er representert, inkludert språkendring,
   grunnlagsspørsmål og retorikk. Formålet er scenarioet der studenten møter
   stoff hun leste minst på. ⚠ Øvingseksamenen sier eksplisitt at fordelingen er
   konstruert for trening og **ikke** en spådom om neste sett — grunnlaget er seks
   terminer.
4. **Øvingseksamen C — under tidspress, med poengstrategi.** Ni spørsmål der
   poengfordelingen er oppgitt på forsiden, og der leseren først skal **planlegge
   rekkefølgen** i fem minutter og begrunne den, deretter skrive. Fasiten
   inneholder en tidslinje som viser hva planleggingen var verdt, og
   oppgraderingsmenyen fra kap. 10.9.

---

## 5. Studieguide-disposisjon

1. **Slik er eksamen** — formen slik de seks dokumenterte høstterminene viser
   den, karakterrammen med hele forbeholdet (A–F fra H2025, todelt i H2022,
   overgangen ikke daterbar, grensene veiledende), og kildenoten ordrett.
2. **Poengkartet på én side** — de ti saksområdene med terminfrekvens (av 6),
   spørsmålsandel (av 45) og poengvekt (av 114), sortert etter poeng. Studentens
   prioriteringsverktøy.
3. **IPA-kortet** — konsonanttabellen og vokalfirkanten på én side, med
   artikulatorisk beskrivelse og norsk eksempelord for hvert tegn. Bokas mest
   brukte oppslag.
4. **Fenomenkortet** — de sju lydfenomenene som er plantet i eksamensordene: hva
   som utløser hvert, hvordan det ser ut i klammer, og hva som skjer med det
   mellom skråstreker.
5. **Uttalekontrakten på ett kort** — de tre trinnene og valgpunktene kandidaten
   må ta stilling til, med plass til å skrive inn sin egen bakgrunn før eksamen.
6. **Prosedyrekortene** — transkripsjon, segmentering, tre og leddanalyse, hver
   som en nummerert trinnliste på under ti linjer. Kortene selv, ikke en
   lenkeliste.
7. **Termkortet** — de seks obligatoriske termene med hjemmel og setningsmal.
   Emnets billigste poeng, på et halvt ark.
8. **Begrepsbanken** — alle begreper fra innholdskontraktene, alfabetisk, hver med
   én-setnings definisjon og den testen som identifiserer den. Flashcard-speilet
   i prosaform.
9. **Feilkortet** — de seksten feilene som énlinjers varsellamper, med
   ærlighetsforbeholdet om at dette er sensors forventninger og ikke observerte
   feil.
10. **Hva vi ikke vet** — de fem tingene som ikke står i arkivet (studiepoeng,
    pensumbok, varighet for H2025, når skalaen skiftet, hvordan trær leveres
    digitalt), og de ni terminene som mangler. Leseren har krav på å vite hvor
    boka slutter å ha belegg.
11. **Ukeplan** — 3–5-dagers hurtigrute, 6-ukers løp og 10–12-ukers deltidsrute,
    summert fra `estimatedMinutes`, med prøve-innplassering (temadelprøver
    underveis, sjangerprøven midtveis, øvingseksamen A, B og C den siste uka).
    Anslagene er **lesetid** og ganges med ca. 1,5 ved håndskriving. Egen
    «lese mye, skrive lite»-boks for den som har kort tid.

---

## 6. Byggerekkefølge og verifikasjon

### Rekkefølge for forfatter-agenten

1. **Metadata først:** `TextbookCourse`-oppføring med id `exfac03-spr`, `level:
   'Høyskole'`, alle 47 kapitler med id, number, title, description,
   estimatedMinutes, topics og prerequisites fra dette skjelettet, og
   `sectionNames` fra tabellen i § 2. `BOKCONFIG.json` med description-strengen
   fra § 1 (hardt formatkrav) og `prøvedeler: [1,2,3,4,5,6,7,8,9,10]`.
   ⚠ `description` skrives **ordrett likt** i kapittelfila og i metadataen, og som
   **ren tekst** uten markdown.
2. **Del 0** — setter tonen og etablerer det resten av boka refererer til:
   uttalekontrakten som prinsipp, «begrunnelsen før konklusjonen», og de seks
   obligatoriske termene. Orienteringsboksen «Slik leser du denne boka» må ligge
   her, som `text` eller `tip` — **aldri** `definition`.
3. **Del 1 → 2 → 3** i rekkefølge. Del 3 hviler helt på begge de foregående og
   kan ikke skrives før de finnes.
4. **Del 4 → 5** i rekkefølge. 5.1 bygger på 4.2.
5. **Del 6 → 7 → 8 → 9.** 8.1 bygger på 5.2, og 9.2 bygger på 1.3 og 2.2 —
   rekkefølgen over respekterer dette.
6. **Del 10** til slutt: sjangerkapitlene gjenbruker prosedyrer og eksempler fra
   temadelene, og modellbesvarelsene i 10.9 forutsetter feilregisteret i 10.8.
7. **Prøvekapitler** (`exfac03-spr-<del>-prove`, chapterNumber `<del>.P`) etter at
   alle temakapitler finnes.
8. **Quiz-staging telles mot antall temakapitler FØR wiring.** JUROFF1500 ble
   wiret med 750 av 774 spørsmål fordi ett kapittels quizfil ble skrevet etter
   wiringen, og bokporten var grønn likevel. Tell 47 quizfiler før
   `wire-bok.py` kjøres.
9. **Narrativ-versjoner** og quiz-registrering til slutt. Narrativ-id-er må
   registreres slik at toggelen faktisk rendrer — verifiser med prod-server og
   curl at narrativ-rutene gir 200, ikke bare at filene finnes.

Per kapittel gjelder arketypens blokkstruktur, med læringsløkka som styrer
rekkefølgen: `tip` Eksamensvinkel → `text` Forkunnskaper → så gjentatte løkker av
teori (`text`/`definition`/`theorem`) → `example` → `exercise` inline → … →
`warning` Typiske feil → `collapsible` repetisjon → `collapsible` Symbol- og
termliste sist. Eksamensvinkel- og Typiske feil-blokkene fylles med belegget og
feilnumrene fra dette skjelettet — **forfatteren skal ikke finne på frekvenstall**.

### Verifikasjonssjekkliste (kjøres FØR ferdigmelding)

- [ ] **JSON-validering:** alle `src/lib/data/chapters/exfac03-spr-*.json` parser
      med `json.load`. `npm run build` grønn — vis output.
- [ ] **Metadata-konsistens:** alle 47 kapittel-id-er i course-oppføringen har
      eksisterende content-fil; prerequisites peker på eksisterende id-er;
      `sectionNames` satt; narrativ-ruter verifisert med prod-server og curl (200).
- [ ] **IPA-porten:** `python3 scripts/hoyskolebok/sjekk-latex.py exfac03-spr` = 0
      avvik. Grep i kapittelfilene: `\textipa` = 0 · `\v{` = 0 · `$` = 0 ·
      IPA-ɡ (U+0261) = 0 · kolon inne i en transkripsjon = 0 · apostrof brukt som
      trykkmarkør = 0. Kombinerende diakritika (n̩, l̩) verifisert med
      `json.dumps`/`json.loads`-rundtur.
- [ ] **Trær er tegnet, ikke beskrevet:** hver oppgave som ber om et analysetre,
      har et faktisk utskrevet tre i fasiten (kodeblokk eller klammenotasjon).
      Grep etter «treet i ord» og «figur i ord» = 0. Brukes SVG, er filene
      lastet opp med `upload-media-storage.ts` og
      `sjekk-figurer.py exfac03-spr` er grønn.
- [ ] **Talldisiplin:** hvert «N av M»-tall i boka står i dette skjelettets
      belegg-blokker eller i Talldisiplin-seksjonen, og nevneren er oppgitt
      eksplisitt ved hver påstand. Bare fem nevnere er lovlige: 6, 45, 114, 4 og
      2. Delmengder kontrollregnet. Grep etter «alle eksamener» = 0.
- [ ] **Ingen vårtermin, ingen årstall før 2011:** grep etter «vår 20», «V20»,
      «våreksamen» = 0, og etter årstall 2010 og eldre = 0.
- [ ] **Kildepåstander sannferdige:** kildenoten, BOKCONFIG-beskrivelsen og all
      omtale av grunnlaget nevner kun kildetypene som faktisk finnes:
      **oppgavesett** (3) og **sensorveiledninger** (4). Grep etter «fasit»,
      «løsningsforslag», «offisiell løsning» og «modellbesvarelse fra UiO» = 0
      treff utenfor de stedene der ordet brukes om at arkivet **ikke** har slikt.
      Bokas egne modellbesvarelser er merket **nyskrevne**.
- [ ] **Pensumboka ikke navngitt:** grep etter forfatternavn, boktittel, «utgave»,
      «s. » og sidetallshenvisninger = 0. Arkivet oppgir dem ikke.
- [ ] **Karakterrammen alltid rammet inn:** hvert sted A–F brukes, står
      forbeholdet om at H2022 var todelt, at overgangen ikke kan tidfestes, og at
      poenggrensene er veiledende. «C er en god og vanlig karakter» står
      eksplisitt i Del 0. Grep «Prioritet: perfekt» = 0 i leserrettet innhold.
- [ ] **Feilregisterets forbehold:** hvert sted registeret presenteres, står det
      at veiledningene uttrykker sensors forhåndsforventninger og ikke observerte
      studentfeil.
- [ ] **LING1100-reglene:** kryssbok-lenker finnes **kun** i kapitlene i § 1.3-
      tabellen, peker på eksisterende filer, og er merket som fordypning.
      **Null** lenker fra Del 1–5. Advarselen om at LING1100 dekker 22 % av
      poengene, står i kap. 0.1 og ved første lenke.
- [ ] **Kvotesum:** quiz ≥882 og flashcards ≥792 fordelt per kapittel som angitt
      (hardt minstekrav ≥500/≥500); 4 prøver per del 1–10 = 40 prøver;
      fasitfordelingen rebalansert (jevn a/b/c/d); `quiz-lengdesjekk.mjs` kjørt —
      riktig alternativ er ikke systematisk det lengste.
- [ ] **Læringsløkke:** `content[]` veksler teori → eksempel → oppgave i løkker
      med `exercise`-blokker inline — ikke all teori øverst og alle oppgaver
      nederst.
- [ ] **Forkunnskapsdekning:** hver `exercise` hviler kun på stoff introdusert
      tidligere i kapitlet eller i en referert forkunnskap. Særlig: ingen oppgave
      i Del 3 får kreve distribusjonsanalysen uten at kap. 2.2 er ført opp; ingen
      oppgave i Del 5 får kreve frasebegrepet uten kap. 5.1; ingen oppgave i
      Del 9 får kreve allofonibegrepet uten kap. 2.2.
- [ ] **Byggespråk:** `grep -rnE '#{2,4}[[:space:]]*Løkke|[Ll]økke[[:space:]]+[0-9A-ZÆØÅ]|\| Løkke \|'` = 0 treff. Ingen «Bolk N», «Blokk N», «Runde N» i
      overskrifter. Overskriftene sier hva avsnittet handler om; tidsanslaget står.
- [ ] **Deiksis:** grep «Sist du var her», «som du sikkert husker», «du har jo
      allerede sett», «dette kan du fra før» = 0 treff. Forkunnskapsblokka heter
      `## Forkunnskaper`.
- [ ] **`description` ren tekst:** ingen `$…$`, ingen `**fet**`, ingen backticks i
      noen `description` — verken i kapittelfilene eller i metadataen, som må
      sjekkes for seg. IPA i en beskrivelse står bart eller er utelatt.
- [ ] **Deloppgaver:** merket a), b), c) med liten bokstav, hver på egen linje og
      i fet. Ingen romertall i oppgavetekst. Oppgave og fasit bruker samme merking.
- [ ] **Nybegynner-inngang:** sjangerkodene TRA, BES, SEG, TRE, RED, EGE og KLA og
      feilkodene #1–#16 er skrevet fullt ut i klarspråk ved første bruk per
      kapittel; ingen kald kode i `competenceGoals` eller i kapitlets første
      tekstboks; Del 0 har orienteringsboksen som `text` eller `tip`.
- [ ] **Meta-fasit forbudt:** grep «en A-besvarelse ville», «ville ha drøftet»,
      «ville pekt på» = 0 — begrunnelsene er faktisk utskrevet.
- [ ] **Hints:** alle `exercise` har utfylte `hints`; første hint gir første grep,
      test eller term — aldri konklusjonen. Én merket kald bank uten hint i hvert
      drillkapittel og i eksamenstreningsdelen, med momentliste som fasit.
- [ ] **Prøve-flervalg:** fasitmønsteret stokket — riktig svar varierer posisjon,
      aldri «alle a». Nær-sanne distraktorer forklart i fasit-kommentaren.
      `sjekk-statiskflervalg.py` og `sjekk-fasitfordeling.py` kjørt.
- [ ] **Ingen tom collapsible:** feltet heter `content` og skal ha blokker.
      Symbol- og termlisten står sist i hvert kapittel og dekker **alle** tegn
      brukt i delkapitlet, uten arv.
- [ ] **Kap-referanser:** «kap. X.Y» i forkunnskaper og fasiter er markdown-lenker
      `[kap. X.Y](/exfac03-spr/exfac03-spr-X-Y)` til eksisterende filer; aldri
      lenker i `title`-felt.
- [ ] **Øktmerking:** kapitler over 45 minutter har tidsanslag per avsnitt og
      pausepunktmarkører; kap. 3.3, 4.3, 5.4, 10.8 og 10.9 har «— naturlig
      pausepunkt —».
- [ ] **Opphavsrett:** alle ord, setninger, datasett, transkripsjoner,
      segmenteringer, trær og besvarelser er NYSKREVNE. Arkivets
      transkripsjons- og segmenteringsord nevnes bare som dokumentasjon av
      ordtypen i kap. 1.3 og 3.3, og **transkriberes ikke** og brukes ikke som
      oppgave noe sted i boka.
- [ ] **Juridiske deklarasjoner:** innholdet fremstiller seg aldri som offisielt
      eller institusjonstilknyttet og lover aldri eksamensutfall. Ved wiring:
      registrer institusjonen i `institusjoner.ts`. Tittelen skal **ikke** treffe
      jus-heuristikken i `hoyskole-disclaimer.tsx`.
- [ ] **Ingen påstander om strykprosent, karakterfordeling eller
      sensurstatistikk** — slikt finnes ikke i materialet.

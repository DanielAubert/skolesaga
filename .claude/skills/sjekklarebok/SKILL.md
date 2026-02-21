---
name: sjekklærebok
description: Kvalitetssjekk en lærebok mot LK20-kompetansemål, innholdskrav og seriøsitetskrav
argument-hint: [kurs-id] f.eks. naturfag-10, biologi-1, historie-vg2
---

# Sjekk lærebok: Kvalitetskontroll mot LK20 og seriøsitetskrav

Denne skillen gjennomfører en grundig kvalitetssjekk av en lærebok for å sikre at den:
1. Dekker ALLE relevante LK20-kompetansemål
2. Ikke inneholder unødvendig eller irrelevant innhold
3. Har tilstrekkelige kilder, referanser og faglig forankring
4. Holder et kvalitetsnivå som gjør den troverdig som ekte lærebok

## Bruk

```
/sjekklærebok naturfag-10
/sjekklærebok biologi-1
/sjekklærebok historie-vg2
/sjekklærebok matematikk-1t
```

## Fremgangsmåte

### Fase 1: Identifiser kurset og hent LK20-kompetansemål

**Steg 1.1: Finn kursdefinisjon**

Finn kurset i course-filene:
```bash
grep -rn "[kurs-id]" src/lib/data/textbook-courses*.ts
```

**Steg 1.2: Finn alle innholdsfiler**
```bash
ls src/lib/data/textbook-content-[fag]*.ts
```

**Steg 1.3: Hent offisielle LK20-kompetansemål**

Hent kompetansemålene fra UDIR for det aktuelle faget og trinnet. Bruk web-søk:
```
søk: "kompetansemål [fag] [trinn] LK20 site:udir.no"
```

Eksempler på URL-er:
- https://www.udir.no/lk20/nat01-04/kompetansemaal-og-vurdering/kv6 (naturfag 10. trinn)
- https://www.udir.no/lk20/bio01-02/kompetansemaal-og-vurdering/kv77 (biologi 1)
- https://www.udir.no/lk20/his01-03/kompetansemaal-og-vurdering/kv79 (historie VG3)

**VIKTIG:** Bruk alltid de OFFISIELLE kompetansemålene fra UDIR, ikke de som allerede står i kursdefinisjonene (de kan være ufullstendige eller omskrevne).

**Steg 1.4: Lag komplett liste over kompetansemål**

Skriv ut ALLE kompetansemål for faget, nummerert:
```
KM1: [kompetansemål 1 - eksakt ordlyd fra UDIR]
KM2: [kompetansemål 2]
...
```

### Fase 2: Kompetansemåldekning

For HVERT kompetansemål, undersøk:

**Steg 2.1: Finn dekning i læreboken**

For hvert KM, søk i innholdsfilene:
- Er det et kapittel som eksplisitt dekker dette målet?
- Er kompetansemålet listet i `competenceGoals` på kapittelet?
- Dekker innholdet faktisk det kompetansemålet sier, eller bare overfladisk?

**Steg 2.2: Vurder dekningsgrad**

Kategoriser hvert kompetansemål:

| Kategori | Beskrivelse |
|----------|-------------|
| **DEKKET** | Grundig behandlet i ett eller flere kapitler med teori, eksempler og oppgaver |
| **DELVIS** | Nevnt eller overfladisk behandlet, men mangler dybde |
| **MANGLER** | Ikke dekket i det hele tatt |
| **FEIL-TILORDNET** | Kompetansemålet er listet på et kapittel som ikke faktisk dekker det |

**Steg 2.3: Sjekk verb-nivå**

LK20-kompetansemål bruker spesifikke verb som indikerer forventet nivå:

| Verb | Nivå | Krav til innhold |
|------|------|-----------------|
| **gjøre rede for** | Høyt | Grundig forklaring med årsaker, sammenhenger og konsekvenser |
| **drøfte** | Høyest | Flere perspektiver, fordeler/ulemper, argumenter for og mot |
| **beskrive** | Middels | Klar fremstilling med relevante detaljer |
| **gi eksempler på** | Middels | Minst 2-3 konkrete, relevante eksempler |
| **forklare** | Middels-høyt | Tydelig sammenheng mellom årsak og virkning |
| **vurdere** | Høyt | Kritisk analyse med begrunnelse |
| **bruke** | Praktisk | Praktiske oppgaver der eleven bruker ferdigheten |
| **planlegge og gjennomføre** | Praktisk | Oppgaver med metode, gjennomføring og konklusjon |
| **sammenligne** | Middels-høyt | Likheter og forskjeller eksplisitt behandlet |
| **reflektere over** | Høyt | Åpne drøftingsoppgaver |

Sjekk at innholdet matcher verb-nivået. F.eks. hvis KM sier "drøfte", holder det IKKE med bare en definisjon — det kreves at kapittelet presenterer flere sider av saken og at oppgavene involverer drøfting.

### Fase 3: Sjekk for unødvendig innhold

**Steg 3.1: Finn innhold som ikke dekker noe kompetansemål**

For hvert kapittel, sjekk:
- Kan dette innholdet knyttes til minst ett KM?
- Hvis ikke, er det nødvendig støtteinnhold (bakgrunnsstoff som trengs for å forstå KM-ene)?
- Eller er det "filler" som bør fjernes?

**Steg 3.2: Kategoriser unødvendig innhold**

| Kategori | Handling |
|----------|---------|
| **STØTTEINNHOLD** | Nødvendig bakgrunn for å forstå KM-ene. Behold, men merk at det er støtte. |
| **UTDYPNING** | Interessant tilleggsstoff som beriker forståelsen. Akseptabelt i moderat mengde. |
| **OVERFLØDIGE** | Innhold som verken dekker KM eller støtter forståelsen. Bør fjernes eller reduseres. |
| **FEIL NIVÅ** | Innhold som tilhører et annet trinn/fag. Bør fjernes. |

### Fase 4: Troverdighet og seriøsitet

Dette er kritisk for at læreboken skal tas seriøst. Sjekk følgende:

**Steg 4.1: Faglig korrekthet (stikkprøver)**

Les gjennom minimum 5 tilfeldige kapitler grundig og sjekk:
- Er fakta korrekte?
- Er formler/ligninger riktige?
- Er definisjoner presise og i tråd med fagtradisjonen?
- Brukes fagbegreper korrekt?
- Er forenklinger akseptable, eller er de misvisende?

**Steg 4.2: Kilder og referanser**

Sjekk hvert kapittel for:

| Krav | Hva betyr det | Alvorlighet |
|------|--------------|-------------|
| **Kompetansemålreferanse** | Hvert kapittel MÅ ha `competenceGoals` som matcher offisielle KM | KRITISK |
| **Faglige påstander** | Påstander bør kunne etterprøves. Store tall, statistikk og historiske fakta bør ha kilde | HØY |
| **Eksempler fra virkeligheten** | Eksempler bør referere til ekte fenomener, ikke oppdiktede | MIDDELS |
| **Lovverk og forskrifter** | Referanser til lover/forskrifter bør inkludere navn og årstall | HØY |
| **Vitenskapelige funn** | Bør referere til forskere, studier eller institusjoner | HØY |
| **Bilder og illustrasjoner** | Bør ha kilde/opphavsrett | MIDDELS |

**Steg 4.3: Pedagogisk kvalitet**

| Sjekk | Hva å se etter |
|-------|---------------|
| **Progresjon** | Bygger kapitlene logisk på hverandre? |
| **Introduksjon** | Har hvert kapittel en engasjerende introduksjon med læringsmål? |
| **Oppsummering** | Har hvert kapittel en oppsummering med nøkkelbegreper? |
| **Oppgavevariasjon** | Blanding av MC, classic, drøfting, kreative oppgaver? |
| **Vanskelighetsgrad** | Gradvis progresjon lett → middels → vanskelig? |
| **Nøkkelbegreper** | Har kapittelet `keyTerms`? Er alle viktige begreper med? |
| **Tverrfaglige koblinger** | Der relevant: kobling til andre fag (tverrfaglige temaer i LK20)? |

**Steg 4.4: LK20 tverrfaglige temaer**

LK20 har tre tverrfaglige temaer som skal integreres der relevant:
1. **Folkehelse og livsmestring**
2. **Demokrati og medborgerskap**
3. **Bærekraftig utvikling**

Sjekk om læreboken berører disse der det er naturlig for faget.

**Steg 4.5: Formelle krav**

| Krav | Sjekk |
|------|-------|
| **Rettskriving** | Stikkprøver for skrivefeil og grammatikk |
| **Markdown-formatering** | Er formateringen konsistent og korrekt? |
| **LaTeX-formler** | Kompilerer formlene korrekt? ($..$ for inline, $$...$$ for display) |
| **ID-er** | Er alle ID-er unike? Følger de navnekonvensjonen? |
| **Lenker** | Fungerer interne referanser (nextChapter, prevChapter, prerequisites)? |
| **estimatedMinutes** | Er tidsestimater realistiske? (1-2 min per innholdsblokk, 3-5 min per oppgave) |
| **exerciseCount** | Matcher `exerciseCount` i meta det faktiske antallet oppgaver? |

### Fase 5: Typesjekk

**Steg 5.1: Kjør TypeScript-kompilering**
```bash
npx tsc --noEmit
```

Fiks eventuelle typefeil som dukker opp.

### Fase 6: Generer rapport

Generer følgende rapport:

```markdown
# Kvalitetsrapport: [Kursnavn]

## Sammendrag

| Metrikk | Verdi |
|---------|-------|
| Antall kompetansemål (offisielt) | X |
| Kompetansemål dekket | X (Y%) |
| Kompetansemål delvis dekket | X (Y%) |
| Kompetansemål som mangler | X (Y%) |
| Antall kapitler | X |
| Kapitler med unødvendig innhold | X |
| Faglige feil funnet (stikkprøver) | X |
| Manglende kilder/referanser | X |
| TypeScript-feil | X |

### Totalvurdering

| Kategori | Score | Beskrivelse |
|----------|-------|-------------|
| **LK20-dekning** | X/10 | [Kommentar] |
| **Faglig korrekthet** | X/10 | [Kommentar] |
| **Pedagogisk kvalitet** | X/10 | [Kommentar] |
| **Kilder og referanser** | X/10 | [Kommentar] |
| **Formell kvalitet** | X/10 | [Kommentar] |
| **TOTALVURDERING** | **X/10** | **[Klar for lansering / Trenger arbeid / Betydelig omarbeiding]** |

### Vurderingsskala
- 9-10: Klar for lansering
- 7-8: Mindre justeringer nødvendig
- 5-6: Bør gjennomgås grundig
- 3-4: Betydelig omarbeiding nødvendig
- 0-2: Ikke publiserbar

---

## Del 1: LK20-kompetansemåldekning

### Offisielle kompetansemål (fra UDIR)

| # | Kompetansemål | Status | Kapitler | Kommentar |
|---|--------------|--------|----------|-----------|
| KM1 | [ordlyd] | DEKKET / DELVIS / MANGLER | [kap-id] | [evt. kommentar] |
| KM2 | [ordlyd] | ... | ... | ... |
| ... | ... | ... | ... | ... |

### Manglende kompetansemål (krever nye kapitler)

[Liste med KM som mangler og forslag til kapitler som bør opprettes]

### Delvis dekkede kompetansemål (krever utvidelse)

[Liste med KM som er delvis dekket og hva som mangler for full dekning]

### Feil-tilordnede kompetansemål

[Kapitler som har kompetansemål listet som de ikke faktisk dekker]

---

## Del 2: Unødvendig innhold

### Kapitler/innhold uten KM-tilknytning

| Kapittel | Type | Anbefaling |
|----------|------|-----------|
| [kap-id] | STØTTE / UTDYPNING / OVERFLØDIG / FEIL NIVÅ | [Handling] |

---

## Del 3: Faglig korrekthet (stikkprøver)

### Feil funnet

| Kapittel | Feil | Alvorlighet | Forslag til rettelse |
|----------|------|-------------|---------------------|
| [kap-id] | [Beskrivelse] | KRITISK / HØY / LAV | [Rettelse] |

---

## Del 4: Kilder og referanser

### Manglende kilder

| Kapittel | Påstand/innhold | Type kilde som trengs |
|----------|----------------|----------------------|
| [kap-id] | [Påstand] | Forskningsstudie / Statistikk / Lovverk / Fagbok |

### Anbefalinger for å styrke troverdigheten

[Generelle anbefalinger for kildebruk i dette faget]

**Minimumsstandard for kilder:**
- Hvert kapittel bør referere til minst 1-2 troverdige kilder
- Statistikk bør ha kilde og årstall
- Vitenskapelige påstander bør knyttes til forskning/forskere
- Lovverk bør navngis med korrekt tittel
- Historiske hendelser bør ha årstall og aktører

**Hvordan legge til kilder i innholdet:**
Kilder legges inn som del av tekst-blokker, typisk i fotnoter eller i selve teksten:
```
"Ifølge SSB (2024) var det 5,5 millioner innbyggere i Norge."
"Forskere ved UiO har vist at... (Larsen et al., 2022)"
"I henhold til opplæringslova § 1-1..."
```

---

## Del 5: Pedagogisk kvalitet

### Strukturelle mangler

| Kapittel | Problem | Anbefaling |
|----------|---------|-----------|
| [kap-id] | Mangler introduksjon / oppsummering / keyTerms / etc. | [Handling] |

### Oppgavekvalitet

| Sjekk | Status | Kommentar |
|-------|--------|-----------|
| Blanding av oppgavetyper | OK/MANGLER | [Kommentar] |
| Vanskelighetsgrad-progresjon | OK/MANGLER | [Kommentar] |
| Oppgaver etter teori (ikke samlet på slutten) | OK/MANGLER | [Kommentar] |
| Samleoppgaver markert | OK/MANGLER | [Kommentar] |
| Drøftingsoppgaver for "drøft"-KM | OK/MANGLER | [Kommentar] |

### Tverrfaglige temaer

| Tema | Dekket? | Kapitler |
|------|---------|----------|
| Folkehelse og livsmestring | JA/NEI/DELVIS | [kap-id] |
| Demokrati og medborgerskap | JA/NEI/DELVIS | [kap-id] |
| Bærekraftig utvikling | JA/NEI/DELVIS | [kap-id] |

---

## Del 6: Formelle feil

### TypeScript-feil
[Eventuelle kompileringsfeil]

### Formateringsfeil
[Markdown/LaTeX-problemer funnet]

### Metadata-feil
| Kapittel | Problem |
|----------|---------|
| [kap-id] | exerciseCount stemmer ikke / estimatedMinutes urealistisk / etc. |

---

## Handlingsplan (prioritert)

### Kritisk (må fikses før lansering)
1. [Handling 1]
2. [Handling 2]

### Høy prioritet (bør fikses)
1. [Handling 1]
2. [Handling 2]

### Middels prioritet (forbedringer)
1. [Handling 1]
2. [Handling 2]

### Lav prioritet (nice-to-have)
1. [Handling 1]
```

## Spesielle hensyn per fagområde

### Realfag (naturfag, fysikk, kjemi, biologi)
- Alle formler og ligninger MÅ være korrekte
- Enheter og benevninger må være konsistente (SI-enheter)
- Forsøksbeskrivelser bør være gjennomførbare
- Sikkerhetshensyn ved forsøk bør nevnes

### Matematikk
- Alle utregninger MÅ være korrekte — sjekk steg-for-steg
- Definisjoner må være matematisk presise
- GeoGebra-oppgaver bør referere til riktige verktøy
- Formler i LaTeX må rendere korrekt

### Samfunnsfag og historie
- Fakta og årstall MÅ være korrekte
- Kilder er SPESIELT viktig (historiske påstander trenger belegg)
- Politisk nøytralitet (kjør /politisk-nøytralitet i tillegg)
- Samiske perspektiver der relevant (LK20-krav)

### Språkfag
- Grammatikkeksempler MÅ være korrekte
- Primærtekster bør ha forfatter og kilde
- Rettskrivingsnormen (bokmål/nynorsk) må være konsistent

### KRLE
- Balansert fremstilling av alle religioner/livssyn
- Kilder til hellige tekster med korrekte referanser
- Etiske dilemmaer bør presenteres åpent

## Sjekkliste

- [ ] Hentet offisielle LK20-kompetansemål fra UDIR
- [ ] Kartlagt dekning av hvert kompetansemål
- [ ] Identifisert manglende kompetansemål
- [ ] Identifisert unødvendig innhold
- [ ] Gjennomført stikkprøver for faglig korrekthet (min. 5 kapitler)
- [ ] Sjekket kildebruk og referanser
- [ ] Sjekket pedagogisk kvalitet (intro, oppsummering, oppgaveflyt)
- [ ] Sjekket tverrfaglige temaer
- [ ] Kjørt TypeScript-kompilering
- [ ] Sjekket metadata (exerciseCount, estimatedMinutes, etc.)
- [ ] Generert rapport med prioritert handlingsplan
- [ ] Spurt bruker om de vil at funnene fikses automatisk

## Etter rapporten: Spør brukeren

Etter rapporten er generert, spør:

1. **Skal jeg fikse kritiske funn automatisk?** (faglige feil, manglende KM, etc.)
2. **Skal jeg legge til manglende kapitler** for kompetansemål som ikke er dekket?
3. **Skal jeg fjerne overflødige innhold?**
4. **Skal jeg legge til kilder** der det mangler?
5. **Er det noen funn du er uenig i?**

## Viktige prinsipper

1. **UDIR er fasiten** — bruk alltid offisielle kompetansemål, ikke omskrevne versjoner
2. **Verb-nivå betyr noe** — "drøfte" krever mer enn "beskrive"
3. **Kilder bygger troverdighet** — en lærebok uten kilder tas ikke seriøst
4. **Stikkprøver avslører mønster** — hvis 2 av 5 kapitler har feil, har sannsynligvis flere det
5. **Perfeksjon er ikke målet** — målet er et kvalitetsnivå som gjør boken publiserbar
6. **Vær ærlig** — ikke gi 9/10 for å være snill. Gi ærlige vurderinger.

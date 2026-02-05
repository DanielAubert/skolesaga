---
name: politisk-nøytralitet
description: Sjekk om lærebokinnhold er politisk nøytralt og balansert
argument-hint: [kurs-id] f.eks. historie, samfunnskunnskap, krle-10
---

# Politisk nøytralitet: Sjekk lærebokinnhold for balanse og upartiskhet

Denne skillen gjennomgår et helt kurs for å vurdere om innholdet er politisk nøytralt, balansert og presenterer kontroversielle temaer på en upartisk måte.

## Vurderingsprinsipper

### Moderne norsk kontekst (2020-tallet)
Vurderingen gjøres ut fra dagens norske samfunnsdebatt:
- Vitenskapelig konsensus aksepteres som fakta (f.eks. klimaendringer, evolusjon)
- Balansert fremstilling betyr ikke "begge sider" når det er klar vitenskapelig enighet
- Respekt for mangfold og ulike perspektiver
- Fakta fremfor ideologi, men anerkjenn at noen temaer er genuint kontroversielle
- Skille mellom vitenskapelige fakta og politiske løsninger/tiltak

### Hva som flagges

**Røde flagg (krever omformulering):**
- Ensidig fremstilling av kontroversielle politiske temaer
- Verdiladede formuleringer som favoriserer én politisk side
- Manglende nyansering av komplekse samfunnsspørsmål
- Religiøse/etiske spørsmål fremstilt med tydelig bias

**Gule flagg (bør vurderes):**
- Temaer der kun én side presenteres uten begrunnelse
- Formuleringer som kan oppfattes som ledende
- Manglende kontekst for kontroversielle påstander

**Grønne (akseptabelt):**
- Faktabasert, ensidig fremstilling av ukontroversielle historiske hendelser
- Balansert diskusjon av kontroversielle temaer
- Nøytral presentasjon av ulike synspunkter

### Temaer som krever ekstra varsomhet
- Klimapolitikk og miljøspørsmål
- Innvandring og integrering
- Likestilling og kjønnspolitikk
- Økonomisk politikk (marked vs. stat)
- Historiske konflikter og kriger
- Religiøse spørsmål og trossamfunn
- Urfolk og minoriteters rettigheter
- Internasjonale konflikter (Israel/Palestina, etc.)

## Bruk

```
/politisk-nøytralitet historie
/politisk-nøytralitet samfunnskunnskap
/politisk-nøytralitet krle-10
```

## Fremgangsmåte

### Fase 1: Identifiser kurset og innholdet

**Steg 1.1: Finn kursdefinisjon**
```bash
grep -n "COURSE_[FAG]" src/lib/data/textbook-courses.ts
```

**Steg 1.2: Finn alle innholdsfiler**
```bash
ls src/lib/data/textbook-content-[fag]*.ts
```

**Steg 1.3: List alle kapitler**
Lag en oversikt over alle kapitler som skal gjennomgås.

### Fase 2: Systematisk gjennomgang

For hvert kapittel, vurder:

1. **Tematisk sensitivitet**
   - Er dette et politisk/kontroversielt tema?
   - Krever det balansert fremstilling?

2. **Språklig analyse**
   - Er formuleringene nøytrale?
   - Brukes verdiladede ord (f.eks. "dessverre", "heldigvis", "naturligvis")?
   - Presenteres påstander som fakta uten belegg?

3. **Perspektivbalanse**
   - Presenteres flere sider av saken?
   - Gis ulike synspunkter lik behandling?
   - Er det tydelig hvem som mener hva?

4. **Kildebruk**
   - Refereres det til balanserte kilder?
   - Er påstander dokumentert?

### Fase 3: Kategorisering av funn

Kategoriser hvert funn som:

| Kategori | Beskrivelse | Handling |
|----------|-------------|----------|
| **KRITISK** | Tydelig politisk bias | Må omformuleres |
| **MODERAT** | Ensidig, men ikke ekstrem | Bør omformuleres |
| **MILD** | Kunne vært mer balansert | Vurder omformulering |
| **OK** | Akseptabelt innhold | Ingen handling |

### Fase 4: Generer rapport

Rapporten skal inneholde:

```markdown
# Politisk nøytralitetsrapport: [Kursnavn]

## Sammendrag
- **Totalt antall kapitler gjennomgått:** X
- **Kritiske funn:** X
- **Moderate funn:** X
- **Milde funn:** X
- **Nøytralitetsscore:** X/10

## Nøytralitetsscore
Scoren beregnes slik:
- Start med 10 poeng
- -2 poeng per kritisk funn
- -1 poeng per moderat funn
- -0.5 poeng per mildt funn
- Minimum 0 poeng

**Score-tolkning:**
- 9-10: Utmerket - Veldig balansert innhold
- 7-8: God - Mindre justeringer kan vurderes
- 5-6: Akseptabel - Bør gjennomgås
- 3-4: Problematisk - Krever omarbeiding
- 0-2: Kritisk - Betydelig bias, må omskrives

## Detaljerte funn

### Kritiske funn (må omformuleres)

#### Kapittel X.X: [Tittel]
**Sitat:** "[Problematisk tekst]"
**Problem:** [Beskrivelse av problemet]
**Forslag til omformulering:** "[Nøytral versjon]"

---

### Moderate funn (bør omformuleres)
[...]

### Milde funn (vurder omformulering)
[...]

## Temaer som håndteres godt
- [Liste over temaer som er balansert behandlet]

## Spørsmål til bruker
Før eventuelle endringer gjøres, ønsker jeg tilbakemelding på:

1. Skal jeg omformulere de kritiske funnene automatisk?
2. Skal jeg foreslå endringer for de moderate funnene?
3. Er det noen av funnene du er uenig i?
```

## Vurderingskriterier for spesifikke temaer

### Klimaspørsmål
- **Balansert:** Presenterer vitenskapelig konsensus OG nevner at det finnes ulike syn på tiltak
- **Ubalansert:** Fremstiller klimaskeptikere som uvitende ELLER bagatelliserer klimaendringer

### Økonomisk politikk
- **Balansert:** Presenterer fordeler og ulemper med både markedsløsninger og statlig styring
- **Ubalansert:** Fremstiller én økonomisk ideologi som overlegen

### Historiske konflikter
- **Balansert:** Forklarer ulike parters perspektiver og motivasjoner
- **Ubalansert:** Fremstiller én side som entydig "god" og den andre som "ond"

### Religiøse spørsmål
- **Balansert:** Behandler alle religioner med respekt og likeverdighet
- **Ubalansert:** Fremhever én religion som "bedre" eller mer "sivilisert"

### Kjønn og likestilling
- **Balansert:** Presenterer fakta og ulike perspektiver på kjønnsroller
- **Ubalansert:** Fremstiller tradisjonelle eller moderne syn som entydig riktige

## Eksempel på funn

### Kritisk funn (eksempel)
**Kapittel:** Samfunnskunnskap 3.2
**Sitat:** "Innvandring har dessverre ført til økte sosiale problemer i mange europeiske land."
**Problem:** Verdiladet ord ("dessverre"), ensidig fremstilling, mangler nyansering og positive aspekter.
**Forslag:** "Innvandring har medført både utfordringer og muligheter for europeiske samfunn. Forskere peker på økt kulturelt mangfold og arbeidskraft, samtidig som integreringsprosesser kan være krevende."

### Moderat funn (eksempel)
**Kapittel:** Historie 5.4
**Sitat:** "Kommunismen viste seg å være et feilslått eksperiment."
**Problem:** Konklusjon fremstilles som objektiv sannhet uten nyansering.
**Forslag:** "Sovjetunionens sammenbrudd i 1991 førte til at mange historikere konkluderte med at planøkonomien hadde betydelige svakheter. Andre peker på at ulike faktorer bidro til sammenbruddet."

## Sjekkliste

- [ ] Identifisert alle kapitler i kurset
- [ ] Gjennomgått hvert kapittel systematisk
- [ ] Kategorisert alle funn (kritisk/moderat/mild/OK)
- [ ] Beregnet nøytralitetsscore
- [ ] Generert rapport med forslag til omformuleringer
- [ ] Stilt spørsmål til bruker om videre handling

## Viktige prinsipper

1. **Vær rettferdig:** Ikke let etter problemer som ikke finnes
2. **Vær konsistent:** Bruk samme standard på alle temaer
3. **Vær pragmatisk:** Noen temaer har bred enighet og trenger ikke "begge sider"
4. **Vær forsiktig:** Religiøse og etiske spørsmål krever ekstra varsomhet
5. **Spør ved tvil:** Hvis du er usikker, spør brukeren før du foreslår endringer

# /sammenlikning

Sammenligner Skolesaga-lærebøker med eksisterende lærebøker i det norske lærebokmarkedet.

## Bruk

```
/sammenlikning <fag-id>
```

Eksempler:
- `/sammenlikning geofag-1`
- `/sammenlikning biologi-1`
- `/sammenlikning matematikk-1p`

## Hva skillen gjør

1. **Leser vårt innhold** for det spesifiserte faget
2. **Søker på nett** etter informasjon om konkurrerende lærebøker fra:
   - Cappelen Damm (Sinus, Connexus, m.fl.)
   - Gyldendal (Kosmos, Matematikk-serien, m.fl.)
   - Aschehoug (Sigma, Tellus, m.fl.)
   - Fagbokforlaget
3. **Analyserer og sammenligner** på tvers av fire hovedkategorier
4. **Genererer rapport** med prosentbasert scoring og forbedringsforslag

## Sammenligningskategorier

### 1. Faglig innhold og dybde (25%)
- Dekningsgrad av LK20-kompetansemål
- Faglig korrekthet og oppdaterthet
- Dybde i forklaringer
- Bruk av eksempler fra norsk kontekst

### 2. Pedagogisk tilnærming (25%)
- Variasjon i oppgavetyper
- Progresjon fra lett til vanskelig
- Differensieringsmuligheter
- Kvalitet på eksempler og illustrasjoner
- Læringsutbytte per kapittel

### 3. Struktur og navigasjon (25%)
- Kapittelinndeling og logisk oppbygging
- Oversiktlighet og brukervennlighet
- Sammendrag og oppsummeringer
- Indeksering og søkbarhet

### 4. Digitale ressurser (25%)
- Interaktive elementer
- Multimedia (video, animasjoner)
- Tilleggsressurser online
- Tilgjengelighet og plattformstøtte

## Rapportformat

### Sammendrag
- Kort oppsummering av hovedfunn
- Totalscore (prosent)

### Detaljert analyse per kategori
For hver kategori:
- Score (prosent)
- Styrker hos oss
- Styrker hos konkurrentene
- Konkret sammenligning

### Konkurrentoversikt
Tabell med:
| Forlag | Tittel | Pris | Vår vurdering |
|--------|--------|------|---------------|

### Identifiserte gap og forbedringsforslag
- Hva mangler vi som konkurrentene har?
- Konkrete forslag til forbedringer
- Prioritert liste over tiltak

### SWOT-oppsummering
- **Styrker**: Hva vi gjør bedre
- **Svakheter**: Hvor vi ligger etter
- **Muligheter**: Potensial for differensiering
- **Trusler**: Konkurranserisiko

## Instruksjoner for Claude

### Fase 1: Les vårt innhold
1. Les innholdsfilen for det spesifiserte faget
2. Tell antall kapitler, oppgaver, definisjoner, eksempler
3. Identifiser dekningsgrad av kompetansemål
4. Vurder pedagogisk struktur

### Fase 2: Undersøk konkurrenter
1. Bruk WebSearch for å finne informasjon om lærebøker i samme fag fra:
   - Cappelen Damm
   - Gyldendal
   - Aschehoug
   - Fagbokforlaget
2. Søk etter:
   - `[fag] lærebok VG2 Cappelen Damm`
   - `[fag] lærebok Gyldendal`
   - etc.
3. Hent informasjon om:
   - Tittel og pris
   - Kapittelstruktur (om tilgjengelig)
   - Digitale tilleggsressurser
   - Anmeldelser eller omtaler

### Fase 3: Analyser og sammenlign
1. Vurder hver kategori objektivt
2. Gi prosentbasert score (0-100%)
3. Identifiser konkrete styrker og svakheter
4. Sammenlign med beste praksis i markedet

### Fase 4: Generer rapport
1. Følg rapportformatet over
2. Vær konkret og spesifikk
3. Gi handlingsrettede forbedringsforslag
4. Prioriter forslagene etter viktighet

## Eksempel på output

```
# Sammenligning: Geofag 1

## Sammendrag
Skolesaga Geofag 1 scorer **78%** totalt sammenlignet med markedslederne.
Hovedstyrke: Omfattende kapittelstruktur (48 delkapitler).
Hovedsvakhet: Mangler videoinnhold som konkurrentene har.

## Kategorianalyse

### Faglig innhold og dybde: 85%
✅ Styrker hos oss:
- 48 detaljerte delkapitler vs. typisk 10-15 hos konkurrenter
- Grundige definisjoner og eksempler
...

### Pedagogisk tilnærming: 75%
✅ Styrker hos oss:
- Varierte oppgavetyper (multiple-choice, klassisk, utforskende)
⚠️ Konkurrenter har:
- Gruppeoppgaver og prosjektarbeid
...

## Konkurrentoversikt
| Forlag | Tittel | Pris | Score |
|--------|--------|------|-------|
| Cappelen Damm | Tellus Geofag 1 | 599,- | 72% |
| Gyldendal | Kosmos Geofag | 649,- | 80% |
...

## Forbedringsforslag (prioritert)
1. **Høy prioritet**: Legg til videoforklaringer for komplekse temaer
2. **Medium prioritet**: Inkluder gruppeoppgaver og prosjektforslag
3. **Lav prioritet**: Utvid bildemateriale for landformer
...
```

## Viktige retningslinjer

- Vær **objektiv** - ikke favoriser vårt innhold ufortjent
- Vær **ærlig** om svakheter - dette er for forbedring
- Vær **spesifikk** - unngå vage utsagn
- Baser vurderinger på **tilgjengelig informasjon**
- Marker tydelig når informasjon er **estimert/antatt**
- Søk etter **ferske kilder** (2024-2026) når mulig

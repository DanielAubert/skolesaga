---
name: utvidhistorie
description: Utvid historiekapitler med bilder, dybdestoff, kildetekster og flervalgsoppgaver
argument-hint: "[del-nummer] f.eks. del3 (kap 6-8), del4 (kap 9-12)"
---

# /utvidhistorie – Utvid historiekapitler med visuelt materiale og dybde

## Hva den gjor

Utvider eksisterende historiekapitler i en gitt del-fil med:
1. **Innholdsbilder** (kart + illustrasjoner) – generert via Gemini API
2. **Nye tekstblokker** – dybdeseksjoner som utvider fagstoffet
3. **Nye definisjoner** – viktige begreper som mangler
4. **Nye kildetekster** – primaerkilder med kildeanalyse
5. **Flervalgsoppgaver** (multiple-choice) – 3 per delkapittel
6. **Oppdaterer exerciseCount** i kursdefinisjonsfilen

## Bruk

```
/utvidhistorie del3
/utvidhistorie del4
```

## Fremgangsmate

### Fase 0: Analyse av naavaerende tilstand

1. Les den aktuelle delfilen: `src/lib/data/textbook-content-historie-{del}.ts`
2. For hvert delkapittel, tell opp:
   - Antall tekstblokker
   - Antall definisjoner
   - Antall kildetekster (type: 'example' med 'Kildetekst' i tittel)
   - Antall oppgaver (type: 'exercise')
   - Antall bilder (type: 'image')
3. Lag en oversiktstabell over naavaerende tilstand
4. Identifiser hva som mangler for hvert delkapittel:
   - **Bilder:** Hvert delkapittel bor ha 2 bilder (1 kart + 1 illustrasjon)
   - **Dybdestoff:** Minst 1-2 nye tekstblokker per delkapittel
   - **Kildetekster:** Minst 1 kildetekst per delkapittel (legges til der det mangler)
   - **Flervalgsoppgaver:** 3 per delkapittel

### Fase 1: Planlegg bilder

For hvert delkapittel som mangler bilder, planlegg 2 bilder:

**Karttyper (velg etter tema):**
- Politisk kart (riker, grenser)
- Tematisk kart (handelsruter, spredning, konflikter)
- Regionalt kart (Norge, Europa, verden)

**Illustrasjonstyper (velg etter tema):**
- Hierarki/struktur-illustrasjon
- Arkitektur/bygninger
- Hverdagsliv/naeringer
- Hendelse/scene
- Sammenlignings-illustrasjon (for/etter)

**Navnekonvensjon for filer:**
`kap{kapittel}-{beskrivende-slug}.webp`

Eksempler:
- `kap6-europa-kart-1789.webp`
- `kap6-storming-av-bastillen.webp`
- `kap7-industrialisering-illustrasjon.webp`

### Fase 2: Generer bilder

1. Lag batchfil `scripts/historie-vg2-innholdsbilder-{del}.txt` med prompts for alle bilder
2. Hver prompt skal:
   - Starte med `Lag en/et ...illustrasjon/kart i liggende format (2816x1536 piksler)`
   - Vaere pa norsk
   - Beskrive bildet detaljert (50-150 ord)
   - Inkludere norske tekster/etiketter der relevant
   - Avslutte med `Egnet for en norsk larebok`
3. Kjor generering:
   ```
   npx tsx scripts/generate-cover-image.ts --batch scripts/historie-vg2-innholdsbilder-{del}.txt --output-dir public/images/textbook/historie-vg2/ --aspect-ratio 16:9 --size 2K --delay 5
   ```
4. Konverter til WebP:
   ```
   for f in public/images/textbook/historie-vg2/kap{N}-*.png; do cwebp -q 80 "$f" -o "${f%.png}.webp" && rm "$f"; done
   ```

### Fase 3: Utvid innhold

For hvert delkapittel, legg til folgende i content-arrayen:

#### 3a. Bilder (ImageBlock)
Plasser 2 bilder per delkapittel:
- **Bilde 1:** I begynnelsen av kapittelet, for intro-teksten
- **Bilde 2:** Etter en relevant definisjon eller tekst

```typescript
{
  id: 'historie-{kap}-{beskrivelse}-bilde',
  type: 'image',
  src: '/images/textbook/historie-vg2/kap{N}-{slug}.webp',
  alt: 'Beskrivende alt-tekst',
  caption: 'Bildetekst med kontekst.',
},
```

#### 3b. Nye tekstblokker (TextBlock)
Legg til 1-2 nye dybdeseksjoner per delkapittel. Velg tema som:
- Utdyper et tema som bare er nevnt kort
- Gir nytt perspektiv (norsk vinkel, hverdagshistorie, konsekvenser)
- Dekker noe som mangler i laereboken

```typescript
{
  id: 'historie-{kap}-text-{tema}',
  type: 'text',
  content: `## Overskrift

Brødtekst med faglig dybde. 150-300 ord.
Bruk **fete ord** for nøkkelbegreper.
Bruk punktlister for oversikt.`,
},
```

#### 3c. Nye definisjoner (DefinitionBlock)
Legg til der nye begreper introduseres i dybdestoffet.

```typescript
{
  id: 'historie-{kap}-def-{begrep}',
  type: 'definition',
  title: '{Begrep}',
  content: `**{Begrep}** er ... Definisjon med kontekst og kronologi.`,
},
```

#### 3d. Nye kildetekster (ExampleBlock)
Legg til der det mangler, med full kildeanalyse.

```typescript
{
  id: 'historie-{kap}-kildetekst-{kilde}',
  type: 'example',
  title: 'Kildetekst: {Tittel} ({aar})',
  problem: 'Les kildeteksten nedenfor og svar pa sporsmaalene under.',
  solution: `*"Sitert tekst fra kilden..."*

**Kilde:** Forfatter, Verk, Aar

**Kontekst:** Bakgrunn for kilden.

**Kildeanalyse:**
- **Avsender:** Hvem skrev det og hvorfor
- **Formal:** Hva var hensikten
- **Perspektiv:** Hvem representerer kilden
- **Kildeverdi:** Hva kan vi laere – og hva kan vi IKKE laere`,
},
```

#### 3e. Flervalgsoppgaver (3 per delkapittel)
Plasser etter eksisterende innhold, for slutt-oppgavene.

```typescript
{
  id: 'historie-{kap}-mc-{nr}',
  type: 'exercise',
  exercise: {
    id: 'historie-{kap}-mc-{nr}',
    number: 'MC{nr}',
    type: 'multiple-choice',
    difficulty: 'medium',
    task: 'Sporsmaal?',
    options: [
      { id: 'a', text: 'Riktig svar', isCorrect: true },
      { id: 'b', text: 'Galt svar 1', isCorrect: false },
      { id: 'c', text: 'Galt svar 2', isCorrect: false },
      { id: 'd', text: 'Galt svar 3', isCorrect: false },
    ],
    solution: 'Forklaring av riktig svar med kontekst.',
  },
},
```

**Regler for flervalgsoppgaver:**
- Sporsmaalene tester kunnskap fra kapittelet
- Ett svar er riktig, tre er gale men plausible
- Loesningsforklaringen gir kontekst utover bare aa bekrefte riktig svar
- Varier mellom fakta-, forstaaelse- og vurderingssporsmaal
- Bruk `difficulty: 'medium'` (IKKE 'middels' – det er ugyldig type)

### Fase 4: Oppdater exerciseCount

I `src/lib/data/textbook-courses-vg2.ts`:
- For hvert delkapittel: `nytt tall = gammelt tall + 3` (3 nye MC-oppgaver)
- Oppdater bare de vanlige kapitlene, IKKE narrative versjoner

### Fase 5: Verifisering

1. `npx tsc --noEmit` – typesjekk
2. `npm run build` – full build
3. Verifiser at alle nye bildefiler finnes i `public/images/textbook/historie-vg2/`
4. Rapport:

| Hva | For | Etter |
|-----|-----|-------|
| Innholdsbilder | X | Y |
| Oppgaver (classic) | X | X |
| Oppgaver (MC) | 0 | Y |
| Kildetekster | X | Y |
| Tekstblokker | X | Y |
| Definisjoner | X | Y |

## Viktige regler

1. **Aldri endre eksisterende innhold** – bare legg til nytt
2. **Hold norsk fagsprak** – bruk norske termer konsekvent
3. **LK20-kompetansemal** – nytt stoff skal stotte eksisterende kompetansemal
4. **Historisk noyaktighet** – kildetekster og fakta skal vaere korrekte
5. **Kildeanalyse** – alle kildetekster skal ha SPOF-analyse (Sender, Purpose, Origin, Function)
6. **ImageBlock-format:** type: 'image', src, alt, caption (IKKE width med mindre nodvendig)
7. **ExerciseDifficulty-type:** Bruk `'medium'` (IKKE `'middels'`)
8. **ID-konvensjon:** `historie-{kapittel.delkapittel}-{type}-{beskrivelse}`

## Filer som endres

- `src/lib/data/textbook-content-historie-{del}.ts` – nytt innhold
- `src/lib/data/textbook-courses-vg2.ts` – exerciseCount
- `scripts/historie-vg2-innholdsbilder-{del}.txt` – ny batchfil (opprettes)
- `public/images/textbook/historie-vg2/` – nye bildefiler (opprettes)

---
name: oversettsamisk
description: Oversett matte-kapitler til nordsamisk (davvisámegiella) med termbase-forankring, Divvun-validering og adversariell revisjon — minst pilot-kvaliteten fra 1t-1-1…1t-1-9
argument-hint: [kapittel-id(er)] f.eks. 1t-2-1 eller "1t-2-1 1t-2-2 1t-2-3"
---

# Oversett til nordsamisk (davvisámegiella)

Oversetter matematikk-kapitler fra bokmål til nordsamisk og sikrer **minst** kvaliteten
fra pilot-kapitlene (1t-1-1 … 1t-1-9). Nordsamisk er lavressurs — ren MT/LLM finner opp
ord — så pipelinen er: **termbase-forankret maskinutkast → Divvun-validering → adversariell
revisjon → menneskelig sluttkontroll**. Resultatet er ALDRI publiseringsklart alene;
`_meta.status` settes til `draft-needs-human-review` og må sjekkes av en nordsamisktalende.

## Bruk

```
/oversettsamisk 1t-2-1                 # ett kapittel
/oversettsamisk 1t-2-1 1t-2-2 1t-2-3   # flere
```

Uten argument: list kapitler i en bok som mangler `src/lib/data/chapters/sme/<id>.json`,
og spør hvilke som skal oversettes.

## Faste ressurser (i repoet)

- **Termbase (fasit for fagord):** `scripts/sme-termbase.json` — 924 termer fra mattesatnelistu
  (Sámi oahpahusráđđi). Struktur: `{terms: {"<norsk>": {sme, syn}}}`.
- **Stilguide (faste NO→SME-termer + konvensjoner):** `.claude/skills/oversettsamisk/stilguide.md`.
- **Validering:** `scripts/sme-validate.mjs <id>` → `<id>.flags.json` (Divvun-stavekontroll).
- **Lokal draft-motor (valgfri):** `scripts/sme-draft.mjs` + `scripts/sme-draft-README.md`
  (NorMistral via Ollama). Krever ≥16 GB RAM-maskin; faller ellers tilbake på agent-metoden.
- **Korrekturminne:** Supabase-tabell `sme_corrections` (se [[nordsamisk-pilot]] i minnet);
  godkjente globale rettinger i `glossary_auto.json` auto-anvendes.

## Prosess (følg nøyaktig)

### 1. Oversett (ett kapittel per agent, parallelt)
For hvert kapittel, spawn en agent som:
1. Leser `.claude/skills/oversettsamisk/stilguide.md`, `scripts/sme-termbase.json`, og
   referanseoversettelsen `src/lib/data/chapters/sme/1t-1-1.json`.
2. Leser bokmål-kilden `src/lib/data/chapters/<id>.json`.
3. Oversetter **kun prosa-felt**: `title`, `description`, `content`, `problem`, `solution`,
   `task`, `buttonText`, `hints[]`, `competenceGoals[]`.
4. Holder **uendret**: all matte/LaTeX (`$...$`, `\frac`, `\sqrt`, tall, symboler ∪∩⊂∈∅),
   markdown-struktur, og feltene `id, type, courseId, chapterNumber, number, label,
   difficulty, answer, expressionAnswer, solutionVideo, youtubeId, allowsUpload,
   allowsCanvasDrawing, hideInlineSolution, estimatedMinutes`.
5. Forankrer fagord i termbasen. Mangler en sammensetning i termbasen og er usikker,
   skriv forslaget etterfulgt av `(no: originalord)` så revisor ser det.
6. Legger til `_meta`-blokken (se stilguiden) og skriver **minifisert JSON** (én linje) til
   `src/lib/data/chapters/sme/<id>.json`. Verifiserer `JSON.parse` før retur.

### 2. Integritetssjekk (matte/fasit urørt)
Sammenlign alle uforanderlige felt mot bokmål-kilden — de skal være byte-identiske.
Bruk dette skriptet (juster `ids`):
```js
// node integritet.mjs
import fs from 'fs';
const ids = process.argv.slice(2);
const IMMUT = new Set(['id','type','courseId','chapterNumber','answer','expressionAnswer','solutionVideo','youtubeId','label','difficulty','number','allowsUpload','allowsCanvasDrawing','hideInlineSolution','estimatedMinutes']);
function collect(n,acc){ if(Array.isArray(n))return n.forEach(x=>collect(x,acc));
  if(n&&typeof n==='object')for(const[k,v]of Object.entries(n)){ if(IMMUT.has(k)&&(typeof v!=='object'||v===null))acc.push(k+'='+JSON.stringify(v)); else collect(v,acc);} }
for(const id of ids){ const a=[],b=[];
  collect(JSON.parse(fs.readFileSync(`src/lib/data/chapters/${id}.json`)),a);
  collect(JSON.parse(fs.readFileSync(`src/lib/data/chapters/sme/${id}.json`)),b);
  const sa=[...a].sort(), sb=[...b].sort();
  const ok = sa.length===sb.length && sa.every((x,i)=>x===sb[i]);
  console.log(id, ok?'✓ identiske':'✗ AVVIK — matte/fasit rørt!'); }
```
Ved avvik: finn og rett (agenten har endret matte/svar — ikke tillatt).

### 3. Divvun-validering
```
node scripts/sme-validate.mjs <id>
```
Skriver `<id>.flags.json` (ukjente ord + grammatikk). API-et er tregt — kjør i bakgrunnen
ved mange kapitler.

### 4. Adversariell revisjon (én agent per kapittel)
Spawn en kritisk korrekturleser per kapittel som klassifiserer **hvert** flagget ord:
- **(a) ekte termbase-ord** → la stå (termbasen vinner ALLTID over stavekontrollen).
- **(b) engelsk huskeregel som finnes i bokmål-kilden** (f.eks. PEMDAS) → la stå.
- **(c) genuint oppdiktet/feilstavet** → rett til termbase- eller **speller-verifisert** form.

Verifiser kandidatformer mot Divvun før du retter:
```
curl -s -X POST https://api-giellalt.uit.no/speller/se -H 'Content-Type: application/json' -d '{"text":"ORD"}'
```
`is_correct:true` = gyldig form. Rett KUN høy-sikkerhets-feil (klare term-avvik,
genuint oppdiktede ord, glemt norsk prosa). **IKKE** auto-rett grammatikk/kasus/gradering
(f.eks. nubbi/nuppi, lea/leat) — la stå og rapporter for menneskelig revisor.

### 5. Bygg og verifiser
```
npx tsc --noEmit
npm run build      # combine-chapters bygger _all.sme.json + laster opp til Supabase Storage
```
Review-siden er offentlig på `/sme-review/<courseId>/<chapterId>` med navigasjon mellom
oversatte delkapitler, «Vis norsk (bokmål)», ⚑-rapportering og språksjekk-panel nederst.

### 6. Commit
Commit sme-filene (`<id>.json` + `<id>.flags.json`). Bygget laster opp til Storage ved deploy.

## Kritiske lærdommer (ikke bryt disse)

1. **Termbasen vinner over verktøyene.** Divvun-speller/GramDivvun kan avvise selve den
   offisielle termen (avviste `ovttamađodatmearka`, foreslo nubbi→nuppi mot termbasen).
   Aldri auto-fiks et termbase-ord fordi stavekontrollen klager.
2. **Verifiser former mot speller før retting.** Stavekontroll fanger oppdiktede ord
   (`bijjem`→false) men IKKE «gyldig form, feil ord». Og konsonantgradering er ekte:
   `doahkki` (mengde) har gyldig svakt stadium `doahki`/`doahkis`/`doahkit` — ikke «feil».
   Test alltid både gammel og ny form; behold `is_correct:true`.
3. **Rør aldri matte/LaTeX/fasit.** Kun prosa oversettes. Integritetssjekken (steg 2) er obligatorisk.
4. **Imperativ/kasus er menneskejobb.** Maskinutkast bommer ofte på imperativ (Geardde vs
   Gerdde) og kasus. Rett kun når speller entydig bekrefter; ellers flagg for revisor.
5. **`(no: ord)`-flagg** beholdes i teksten der termbasen mangler en sammensetning — det er
   bevisst og hjelper revisor. (Vises også i kapitteltittel/nav.)
6. **textbook-courses.ts er klient-importert** → fs må lastes lazy via `eval('require')`
   (se getMetaNn). Gjelder hvis du legger til server-only lesing der.

## Minneoppdatering
Oppdater `[[nordsamisk-pilot]]` i minnet med hvilke kapitler som er oversatt/revidert.

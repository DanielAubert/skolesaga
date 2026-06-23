# Stilguide: bokmål → nordsamisk (davvisámegiella) for matte-lærebøker

Dette er konvensjonene fra det verifiserte pilot-kapittelet `1t-1-1` (terminologi
forankret i mattesatnelistu, Sámi oahpahusráđđi). Følg dem NØYAKTIG for å holde
terminologien konsistent på tvers av kapitler.

## Faste termer (NO → SME) — bruk disse, ikke finn opp nye

| norsk | nordsamisk |
|---|---|
| regn ut (imperativ) | Rehkenaste |
| regn ut hvis mulig | Rehkenaste jos vejolaš |
| Løsning | Čoavddus |
| **Løsning:** | **Čoavddus:** |
| Eksempel N | Ovdamearka N |
| fortegn | ovddabealmearka (pl. ovddabealmearkkat) |
| addisjon / pluss | lasiheapmi / plussa |
| subtraksjon / minus | eretváldin / minus |
| multiplikasjon / gange | geardun |
| divisjon / dele | juohkin |
| potens(er) | poteansa (pl. poteanssat) |
| eksponent | eksponeanta |
| kvadratrot | nubbiruohtas (pl. nubbiruohttasat) |
| oddetall | leaskalohku |
| partall | bárralohku |
| positiv | positiiva |
| negativ | negatiiva |
| tall | lohku (pl. logut) |
| resultat / svar | boađus |
| regnerekkefølge | rehkenastinvuorru |
| parentes(er) | ruođut |
| sammendrag / oppsummering | Čoahkkáigeassu |
| Tilleggsoppgaver | Lassebihtát |
| Repetisjonsoppgaver | Geardduhanbihtát |
| Vis tilleggsoppgaver (knapp) | Čájet lassebihtáid |
| Vis repetisjonsoppgaver (knapp) | Čájet geardduhanbihtáid |
| brøk | cuovka |
| ligning/likning | ovttamađodat |
| faktor | fáktor |
| ledd | lađas |

For andre fagord: slå opp i `scripts/sme-termbase.json` (924 termer, nøkkel =
norsk, verdi.sme = nordsamisk). Finnes ordet IKKE i termbasen og du er usikker
på en sammensetning, BEHOLD det norske ordet i parentes etter ditt forslag, slik:
`ditt_forslag (no: originalord)` — så revisor ser det.

## Vanlige fraser fra 1t-1-1 (gjenbruk ordrett der de passer)
- "Minus ruođu ovddabealde mas lea negatiiva lohku addá plussa" (minus foran parentes med negativt tall gir pluss)
- "Mii eat sáhte váldit negatiiva loguid nubbiruohttasa (reála loguin)" (vi kan ikke ta kvadratrot av negative tall)
- "Váruha ovddabealmearkkaiguin" (pass på fortegnene)
- "Váldde dan lávki lávkái" (ta det steg for steg)
- "Álgge siskkimus ruođuin ja bargga olggos guvlui" (start med innerste parentes, jobb utover)

## Hva som IKKE skal oversettes (kopier ordrett)
- All matematikk og LaTeX: alt mellom `$...$`, alle tall, `\frac`, `\sqrt`, `\cdot`, `\div`, `^`, `+`, `−`, `=`, osv.
- Markdown-struktur: `##`, `**`, lister med `-`, linjeskift `\n`, mellomrom.
- Disse JSON-feltene beholdes 100% uendret: `id`, `courseId`, `chapterNumber`,
  `type`, `number`, `label`, `difficulty`, `answer`, `expressionAnswer`,
  `solutionVideo`, `allowsUpload`, `allowsCanvasDrawing`, `hideInlineSolution`,
  `estimatedMinutes`, `solutionImage`, og alle bilde-/medie-URL-er.

## Hvilke felt SKAL oversettes (kun prosa)
`title`, `description`, `content`, `problem`, `solution`, `task`, `buttonText`,
`hints` (array av strenger), `competenceGoals` (array av strenger).
MERK: i `solution`-felt med fasit-tabeller som "a) 17, b) 4" — behold tallene,
oversett kun ev. ord ("Ii čoavddus" = ingen løsning).

## _meta (legg til på topp-nivå, som i 1t-1-1)
```json
"_meta": {"malform":"sme","status":"draft-needs-human-review","translatedBy":"claude-code-pilot","note":"PILOT: nordsamisk utkast. Terminologi forankret i mattesatnelistu. Setningsgrammatikk, kasus og konstruerte sammensetninger MÅ verifiseres av nordsamisktalende revisor før publisering."}
```

## Output
Skriv gyldig JSON (samme struktur som kilden, samme rekkefølge på felt) til
`src/lib/data/chapters/sme/<id>.json`. Minifisert (én linje) er greit — som 1t-1-1.
VERIFISER at det er gyldig JSON før du er ferdig.

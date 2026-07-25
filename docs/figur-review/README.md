# Figurgjennomgang

Oppsett for å gå gjennom figurene i bøkene systematisk — laget 25. juli 2026, da
501 maskingenererte figurer ble koblet inn i de elleve matematikkbøkene.

Bakgrunnen er at maskingenererte figurer har vært en kjent svakhet: de ser
plausible ut, men kan vise noe annet enn bildeteksten lover. Derfor er hele
opplegget bygget rundt ett spørsmål — **stemmer figuren med det teksten sier at
den viser, og står den på rett sted?**

## Slik gjør du en gjennomgang

**1. Lag kontaktarket for boka**

```bash
python3 scripts/figur-kontaktark.py 1t
open docs/figur-review/1t.html
```

Én side per bok. Hver figur vises innebygd, ved siden av bildeteksten (bokmål og
nynorsk), alt-teksten, tekstetikettene som faktisk står i SVG-en, og hvilke
blokker figuren står mellom. SVG-ene er bygget inn i fila, så den virker uten
nett og uten server.

**2. Eller be en agent gjøre grovsorteringen**

```bash
python3 scripts/figur-manifest.py 1t > /tmp/1t-figurer.json
```

Samme opplysninger som maskinlesbar JSON. En agent kan lese etikettene mot
bildeteksten og flagge avvik uten å åpne bildene — men den *ser* dem ikke, så
den fanger ikke ombyttede akser, feil kurveform eller stygg typografi. Bruk
manifestet til grovsortering og kontaktarket til det visuelle.

**3. Registrer dommene**

I `vurderinger.json`, med blokk-id som nøkkel:

```json
{
  "1t-1-1-fig-tallinje-negative-tall": {"status": "ok"},
  "2p-5-4-fig-bat": {"status": "avvist", "merknad": "viser 5 km, eksempelet regner √34 ≈ 5,8"},
  "r1-2-3-fig-graf": {"status": "endre", "merknad": "y-aksen mangler enhet"}
}
```

| status | betyr |
|---|---|
| `ok` | figuren blir stående |
| `avvist` | bildeblokken fjernes fra både bokmål og nynorsk. SVG-fila beholdes |
| `endre` | blir stående, men listes som arbeid som gjenstår |

**4. Sett dommene ut i live**

```bash
python3 scripts/figur-vurdering.py          # tørrkjøring — viser hva som ville skjedd
python3 scripts/figur-vurdering.py --bruk   # skriver
```

Skriptet nekter å røre en fil som ikke har det forventede kompaktformatet, og
rapporterer hvor mange figurer som ennå ikke er vurdert.

## Det du må vite før du stoler på oppsettet

**Godkjenningslaget i klienten virker ikke.** `illustration-approval-context.tsx`
henter `/api/admin/illustration-feedback` for å skjule avviste bilder, men den
ruta er aldri bygget. Kallet feiler, `approvals` blir tom, og `isApproved`
returnerer `true` for alt — så alle figurer vises uansett. Å «avvise» en figur i
et framtidig admin-panel gjør altså ingenting i dag. Derfor fjerner
`figur-vurdering.py` blokken fra dataene i stedet. Bygges API-et senere, blir
databasen fasit og dette skriptet overflødig.

**Figurene serveres fra Supabase Storage, ikke fra `public/`.** `mediaUrl()`
skriver om alle `/images/`-stier. At fila ligger i repoet beviser ingenting —
kjør `python3 scripts/hoyskolebok/sjekk-figurer.py <bok>` for å bekrefte at den
svarer 200. Porten dekker hele `/images/`-treet.

**Teksten inne i SVG-ene er bokmål.** Nynorskutgavene får bokmålsetiketter i
selve tegningen selv om bildetekst og alt-tekst er nynorsk. Å rette det krever
egne nynorske SVG-varianter, altså en ny figur per figur. Ikke gjort.

**Nordsamisk ligger bak.** Seks 1T-kapitler har sme-utgave uten figurblokkene,
fordi samiske bildetekster krever termbasen og en revisor. Hører hjemme i
nordsamisk-løpet, ikke her.

**`alt` rendres rått som HTML-attributt.** Bare `caption` går gjennom
`LatexRenderer`. LaTeX i alt-teksten leses opp som «dollar a i andre» av en
skjermleser — skriv alt-tekst i talespråklig prosa.

## Hva som allerede er kontrollert

Figurene ble koblet inn av én agent per bok, med krav om å verifisere hver figur
mot kapittelinnholdet før innkobling — ikke mot filnavnet. Fire ble forkastet i
den runden (dublering, feil svar, allerede dekket av en eksisterende figur), og
flere ble flagget som tvilstilfeller i agentrapportene.

Det er **ikke** en visuell gjennomgang. Ingen har sett figurene rendret ved siden
av kapitlet de står i. Det er nettopp det denne mappa er til for.

# Oppdrag: modellaudit av Skolesaga-kapitler — bare skjønn ({{DATO}})

Kjøringsmappe: `{{MAPPE}}`
Kapitler: {{N_KAP}} · utdrag i alt ≈ {{TOKENS}} tokens{{ENDRET}}

Du er en streng fagkontrollør og leser som en 1T/2P-elev som strever. Maskinene har alt gjort det mekaniske; du skal
bruke tokens på det bare et menneske/en modell kan dømme.

## Les dette, og bare dette
- `utdrag/<id>.txt` — elevsynlig tekst per blokk: `[blokk-id|type|nr|vanskegrad]`, `OPPG:`, `LØSN:`, deloppgaver som
  ` a) … → løsning {svar=…}`, `HINT:`, alternativer `(✓)`/`( )`, `FASIT(skjult)`, `[figur: alt-tekst]`.
- IKKE les rå JSON. Trenger du å se én blokk i sin helhet (f.eks. en figur): slå opp bare den blokka.
- Figurer: alt-teksten står i utdraget. Åpne PNG-en bare når teksten bygger på noe i figuren som alt-teksten ikke viser.

## Dette er ALT sjekket maskinelt — ikke bruk tokens på det, og ikke rapporter det på nytt
{{PORTER}}
- `⚑maskin:` i en blokk-header = maskinfunn som alt er registrert (`maskin-funn.tsv`).
- `✓regnet N` = regn.py har kontrollert N likhetskjeder i blokka numerisk (sympy) — ikke regn dem etter.
- `?N ledd ikke tolket` = regn.py klarte ikke å lese N ledd — DER skal du regne selv.
- `⚑REGN …` = regn.py fant et avvik. Avgjør om det er en ekte feil (regn selv, kort, med python/sympy) og før det
  som funn med verdiene som bevis — eller skriv i dom.json at det er falskt positivt (så porten kan justeres).
- `⚑NN-AVVIK` = bm og nn har ulike tall/formler i blokka; nynorsken står under (`NN:`). Avgjør hvilken som er riktig.
  Nynorsk ellers er dekket av ordlisteporten — ikke språkvask.

## Dette SKAL du dømme
1. **Faglig riktighet der maskinen ikke nådde:** tekstsvar og resonnementer, likninger (sett inn løsningen), fortegn,
   enheter, avrunding i svaret, `{svar=…}`/`{uttrykk=…}` mot løsningen, riktig alternativ `(✓)`, figurtekst mot tallene.
2. **Løsningen svarer på sin egen oppgave:** samme tall som i oppgaven, alle deloppgaver besvart, svaret står sist.
3. **Elevperspektiv/pedagogikk:** mangler et mellomtrinn? uklart? teori → eksempel → oppgave i riktig rekkefølge?
   stigende vanskegrad? kan en svak elev lære temaet av kapitlet alene?
4. **Læreplan og trinn:** stoff fra riktig trinn (1T/2P: ingen ln/e; R1-stoff bare som «Fordypning»), norsk
   skolenotasjon og terminologi utover lista over.
5. **Føring og stil:** eksempler som føring (ett steg per linje, `**Svar:**` sist, ingen synlige stegnumre), saklig
   skriftspråk uten fortellerstemme, ingen «Hvorfor»-bokser, fremgangsmåte før ferdig formel.

## Kapitler
{{TABELL}}

## Leveranse (i `{{MAPPE}}`)
- `funn.jsonl` — én linje per funn:
  `{"kapittel":"…","fil":"bm|nn|narrativ","blokk":"<blokk-id fra headeren>","alvor":"feil|bør|kosmetisk","hva":"…","riktig":"… (regnet)","bevis":"…"}`
  `blokk` MÅ være id-en fra `[id|…]`-headeren — hukommelsen bruker den.
- `dom.json` — per kapittel `{"kapittel":"…","dom":"BESTÅTT|BESTÅTT_MED_SMÅ|IKKE_BESTÅTT","grunn":"…","falske_positive":["…"]}`.
- Kort sluttmelding på norsk: antall funn per alvor, dom per kapittel.

Etterpå (hovedsesjonen): `python3 scripts/audit/hukommelse.py fra-audit {{MAPPE}} --runde <navn> --hvem <agent>` —
blokker med funn (feil/bør) blir FUNN, resten av blokkene i utdraget GODKJENT. Neste audit etter retting startes med
`scripts/audit/kjor-audit.sh --bare-endret …` og ser bare blokker som er endret, nye eller har åpne funn.

## Harde regler
Du endrer INGENTING i Skolesaga (bare leser). Ingen git add/commit/push. Aldri rm, rmdir, mv eller overskrivende cp.
Skriv bare i kjøringsmappa. Vær økonomisk: budsjett ≈ utdragets tokens + 30 %.

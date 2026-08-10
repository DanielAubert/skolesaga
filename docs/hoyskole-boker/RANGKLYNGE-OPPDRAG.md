# Oppdrag: rett rangklyngen i quizbankene

Skrevet 10. august 2026. Gjelder 86 filer i `src/lib/data/quiz-data-*.ts`.

## Hva som er galt

Quiz-alternativene stokkes ved kjøretid, men `options[0]` er alltid fasiten i
dataene. Feilen er at fasitens **lengderang** — om den er lengst, nest lengst,
nest kortest eller kortest av de fire — ligger fast gjennom en hel bok.

Målt i katalogen: **86 av 190 filer** klumper seg på én rang. Verst er
`econ1310`, der fasiten er nest lengst i **87 % av 562 spørsmål**. En student
som lærer seg «kryss av det nest lengste» får 87 % rett uten å kunne faget.

⚠ **Ytterpunktmålingen er grønn i disse filene.** Den ser bare om fasiten er
lengst eller kortest, altså rang 1 og rang 4, og er blind for rang 2 og 3.
Derfor har feilen ligget der uoppdaget.

## Rotårsaken, målt

Rang r betyr «r−1 distraktorer er lengre enn fasiten». Hver skjev fil har sitt
**eget faste antall**:

| fil | 0 lengre | 1 lengre | 2 lengre | 3 lengre |
|---|---|---|---|---|
| econ1310 | 1 % | **89 %** | 7 % | 3 % |
| sosiologi-full | 4 % | 14 % | **82 %** | 0 % |
| entrebed | 11 % | 21 % | **67 %** | 1 % |
| jus1111 | 31 % | **64 %** | 4 % | 1 % |

Dette er en forfattervane per bok, ikke én feiende feil. Sannsynligvis er det en
overkorreksjon: for å bryte «fasiten er lengst» ble det lagt inn nøyaktig én
lengre distraktor — og da ble «fasiten er nest lengst» det nye signalet.

**Målet er derfor ikke en retning, men variasjon:** antallet distraktorer som er
lengre enn fasiten skal fordele seg fritt på 0, 1, 2 og 3, ca. 25 % hver.

## Verktøyet

```bash
npx tsx scripts/hoyskolebok/rangmaal.mjs <emne>           # måling + hva som må flyttes
npx tsx scripts/hoyskolebok/rangmaal.mjs <emne> --liste   # spørsmålene som ligger på den overrepresenterte rangen
npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs <emne>   # sluttport (alle tre målene)
```

`rangmaal.mjs` sier hvilke spørsmål som skal flyttes og hvilken vei. Ikke gjett —
da omskriver du distraktorer som allerede var i orden.

## Metoden

**Per spørsmål som skal flyttes, endre ÉN distraktor:**

- Fasiten skal få **lavere** rangtall (bli relativt lengre) → **kort ned** en
  distraktor som er lengre enn fasiten.
- Fasiten skal få **høyere** rangtall (bli relativt kortere) → **skriv ut** en
  distraktor som er kortere enn fasiten.

**Fem regler som ikke kan fravikes:**

1. **`options[0]` røres ALDRI.** Assertér maskinelt at alle fasiter er
   bit-identiske før og etter. Rører du fasiten, kan `explanation` komme i utakt
   med svaret sitt, og da må hver forklaring leses på nytt.
2. **Distraktorens PÅSTAND beholdes.** Du endrer bare hvor fyldig den er
   uttrykt. Bytter du innhold, treffer forklaringen feil alternativ.
3. **Oppskriving gjør påstanden mer SPESIFIKK — aldri lengre med fyllord.**
   «En feil i tellingen» → «En feil i tellingen, som skyldes at materialet er
   ujevnt avskrevet i de eldste årgangene». Distraktoren blir samtidig bedre,
   fordi den nå sier eksplisitt det steget forklaringen retter.
4. **Nedkorting må aldri lage en stubbe** — et alternativ under halvparten av
   snittlengden til de tre andre. Da er det strykbart på form før det leses, og
   spørsmålet blir i praksis trevalg: gjetteren går fra 25 % til 33 %.
5. **Ingen posisjonsreferanser.** Verken i det du skriver eller det du lar stå:
   «det andre alternativet», «den siste distraktoren», «de to neste» peker på et
   tilfeldig alternativ etter stokking. Siter alternativets tekst i stedet.

## Fellene

⚠ **Forankret erstatning har ødelagt kapittelinnhold i dette repoet tre ganger.**
Ankre på hele alternativstrengen, ikke på et fragment. Tell treffene før du
skriver, og verifiser at antallet er som ventet.

⚠ **`options` ligger på ÉN linje** som en JSON-array med doble anførselstegn.
Bevar formatet nøyaktig — dette er `.ts`-filer, ikke JSON, og resten av fila har
enkle anførselstegn i `question` og `explanation`.

⚠ **Filene importeres av verktøyet.** En syntaksfeil viser seg straks når du
kjører `rangmaal.mjs` på nytt. Kjør den etter hver bolk, ikke bare til slutt.

⚠ **Stubber og rang henger sammen.** Å skrive ut en stubbe-distraktor forbi
fasiten fikser begge deler i samme grep. Ta dem samtidig.

## Ferdigkrav

```bash
npx tsx scripts/hoyskolebok/quiz-lengdesjekk.mjs <emne>
```

- ingen rang over **35 %** (porttaket er 40 % — sikt lavere for margin)
- ytterpunkter (fasit strengt lengst / strengt kortest) under **35 %** hver vei
- stubber under **40 %**, og helst nær 0
- fortsatt fire alternativer, ingen duplikater, ingen fasit rørt

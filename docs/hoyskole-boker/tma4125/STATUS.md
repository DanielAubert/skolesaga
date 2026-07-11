# Statusnotat: TMA4125 Matematikk 4N (NTNU)

> §C9-statusverifisering, 11. juli 2026. Full eksamensanalyse foreligger
> (`EKSAMENSANALYSE.md`), men **ingen egen bok bygges** — se begrunnelse nederst.
> Mønster: `tma4185/STATUS.md` og `tma4212/STATUS.md`.

## Emneidentitet og status
- **Offisielt navn:** Matematikk 4N (engelsk: *Mathematics 4N*).
- **Studiepoeng:** 7,5. Eksamensform (historisk): 4-timers skriftlig skoleeksamen
  (09–13), hjelpemiddelkode C (kalkulator + vedlagt formelark + A5-ark), A–F,
  ingen flervalg.
- **Status:** **NEDLAGT.** NTNUs emneside (ntnu.no/studier/emner/TMA4125)
  bekrefter eksplisitt: *«Det tilbys ikke lenger undervisning i emnet.»* Emnet
  lever kun videre som eksamens-/studiepoenggrunnlag.
- **Studiepoengreduksjon (fra emnesiden):** SIF5013, MA2104/MA2105, TMA4130,
  TMA4122, TMA4120, **TMA4123, TMA4135** (fra H2012), TMA4106, TMA4111, TMA4121,
  MA2106 (fra H2025), og de nye **TMA4420/TMA4430/TMA4431/TMA4432** (fra H2026).
  Ingen enkelt-etterfølger med eget byggeverdig eksamensarkiv utpekes; H2026-
  kodene er nye og har intet eget arkiv å profilere mot.

## Faglig innhold (arkivet)
Arkivet `~/Desktop/Eksamner/NTNU/TMA4125/` (~116 PDF-er, ~52 løsningsforslag) er
**dominert av den felles Matematikk 4N/4D-eksamenspoolen**. Fra 2018 er TMA4125
(4N vår) / TMA4130 (4N høst) og **TMA4135 (4D)** felles eksamen med samme
oppgavepool — de fleste settene bærer koden «TMA4130/35» eller «TMA4125/30/35».
Fire søyler går igjen på hvert sett: (1) Laplace-transform, (2) Fourier (rekker +
transform), (3) separasjon av variable for PDE, (4) en bred numerikk-blokk.

## Hvorfor ingen egen bok — dekket av tma4135
1. **Nedlagt uten byggeverdig etterfølger.** De oppgitte etterfølgerkodene
   (TMA4420/4430/4431/4432, nye fra H2026) har intet eget eksamensarkiv; en
   etterfølger-profil (sos1004-mønster) ville vært ren spekulasjon.
2. **Nesten fullstendig faglig sammenfall med TMA4135**, som **allerede har en
   ferdig, gate-passert bok** (`tma4135/SKJELETT.md`, 37 kapittel). 4N og 4D
   deler samme oppgavepool fra 2018; kun **~1 oppgave per sett** har en
   emnespesifikk variant. Den eneste systematiske forskjellen er at 4N-varianten
   av splitt-oppgaven er numerikk-/transformtung (Fourier-transform-utregning
   eller avrundings-/avkuttingsfeil-analyse), mens 4D-varianten er
   PDE-verifikasjon/gradient.
3. **4N-signaturen er allerede dekket i tma4135-boka:**
   - Kapittel 4.1 «Fourier-transformen» + 4.2 «Fourier-transform for PDE på ℝ»
     (sjanger E/F — 4N-kjernen).
   - Kapittel 4.3 «Diskret Fourier-transform (DFT)».
   - Kapittel 8.1 «Differansekvotienter og avkuttingsfeil via Taylor» — dekker
     eksplisitt **4N-varianten** avrundings-/avkuttingsavveining
     (`h=O(ε^{1/3})`), merket som sådan i innholdskontrakten.
   - Kapittel 8.2–8.4 differansemetode + kodefeil-lokalisering.
   - Øvingseksamen 2 (kap 9.3) vrir tyngden mot nettopp «Fourier-transform og
     differansemetoder» — 4N-tyngdepunktet.
   Boka dekker altså både fellestemaene OG den 4N-spesifikke profilen. En egen
   TMA4125-bok ville vært en duplikat med marginal merverdi.
4. **Analysens egen konklusjon (§7):** «Gitt at TMA4125 er nedlagt, er den mest
   kostnadseffektive løsningen en 4N-variant/alias av tma4135 med det forsterkede
   numerikk-laget over — ikke en frittstående bok.»

## Anbefaling
**Hopp over — ingen egen bok.** Studenter som søker TMA4125-stoff dekkes fullt ut
av tma4135-boka (Matematikk 4D), som deler eksamenspool og allerede rommer
4N-signaturens Fourier-transform-, DFT- og feilanalyse-lag. Ved framtidig behov
kan tma4135-boka SEO-eksponeres/aliases mot emnekoden TMA4125 (og TMA4130) i
institusjonsmetadataen, uten å skrive en ny bok. Revurderes kun dersom en av de
nye H2026-etterfølgerne (TMA4420-serien) bygger opp et distinkt eget
eksamensarkiv.

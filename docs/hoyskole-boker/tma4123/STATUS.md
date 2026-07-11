# Statusnotat: TMA4123 Matematikk 4M (NTNU)

> §C9-statusverifisering, 11. juli 2026. Full eksamensanalyse foreligger
> (`EKSAMENSANALYSE.md`, 6 velkarakteriserte 4M-sett lest oppgave-for-oppgave),
> men **ingen egen bok bygges** — se begrunnelse nederst.

## Emneidentitet og status
- **Offisielt navn:** Matematikk 4M. Vår-varianten TMA4123 (paret med TMA4125
  Matematikk 4N i delt oppgavesett); høst-varianten hadde koden TMA4122.
- **Studiepoeng:** 7,5.
- **Eksamensform (historisk):** Skriftlig skoleeksamen, 4 timer, karakter A–F,
  hjelpemiddelkode C (enkel kalkulator + Rottmann + numerikk-formelark).
- **Status:** **NEDLAGT.** NTNUs emneside
  `https://www.ntnu.no/studier/emner/TMA4123` svarer «Det finnes ingen
  informasjon for dette studieåret / Ingen emner med denne koden er
  tilgjengelige» (verifisert 11. juli 2026). Emnet er del av den utfasede
  Matematikk 4-serien (4M/4N/4D), faset ut til fordel for TMA4420-serien fra
  H2026. Emnesiden oppgir **ingen enkelt-etterfølger** og **ingen
  studiepoengreduksjonskobling** mot en aktiv kode.

## Faglig innhold (arkivet — verifisert i EKSAMENSANALYSE.md)
Arkivet blander 4M/4N/4D (38 PDF-er). De 6 ekte 4M-settene bæres av fire søyler:
- **Fourier-rekker** (odde/like utvidelse, kompleks form, summering av tallrekke) — 100 %
- **Interpolasjon** (Lagrange / Newtons dividerte differanser + feilledd) — 83 %
- **PDE via separasjon av variable** (varmelikning, egenfunksjoner, superposisjon) — 83 %
- **Numerisk ODE-løser for system** (Heun/forbedret Euler, ett skritt) — 83 %
- pluss Fourier-transform (67 %), Gauss–Seidel/Jacobi + MATLAB (4M-distinkt, 67 %).

**Sentralt funn (korrigerer oppdragspremisset):** kompleks analyse forekommer
**ikke** i noe 4M-sett (0/6, 0 globale treff i arkivet). 4M-profilen er entydig
Fourier + PDE + numerikk. Det eneste som skiller 4M fra 4N i vårsplitten er at
4M **hopper over Laplace-oppgaven** (4N-only) og i stedet gjør en numerisk-
lineær-algebra-/MATLAB-oppgave.

## Hvorfor ingen egen bok bygges (§C9, case 2c)
Emnet er **nedlagt uten enkelt-etterfølger med eget arkiv**, og hele
pensumkjernen er **allerede dekket av bygde skjeletter**:

| 4M-lag (som arkivet faktisk viser) | Dekket av | Merknad |
|---|---|---|
| Fourier-rekker + Fourier-transform + PDE-separasjon | **tma4135** (Matematikk 4D — `SKJELETT.md` finnes) | Samme teoremer, notasjon og separasjonsteknikk |
| Numerikk (interpolasjon, kvadratur, Gauss–Seidel/Jacobi, Newton for system, Heun/Euler/RK) | **tma4135**s numerikk-blokk | Det 4M-distinkte (iterativ lin.alg. + MATLAB) er en delmengde av 4D-numerikken |
| Kompleks analyse (analytisitet, CR, residy, Laurent, konform) | **tma4121** (`SKJELETT.md` finnes) | **Ikke belagt i 4M-arkivet**; hører hjemme i kompleksanalyse-emnet, ikke i en 4M-rekonstruksjon |

4M-profilen slik arkivet viser den (Fourier + PDE + numerikk, uten kompleks
analyse, uten Laplace) er **nesten identisk med tma4135**. Arkivanalysens egen
§7 «Arbeidsdeling» konkluderer eksplisitt: «en egen TMA4123 4M-bok har lav
merverdi og bør ikke bygges fra bunn.» Å bygge et frittstående skjelett ville
duplisere tma4135 og påføre en 4M-bok et ubelagt kompleksanalyse-premiss.

Dette er samme mønster som de dokumenterte hoppene i C7/C9: nedlagt NTNU-matte-
emne der innholdet alt er dekket (jf. TMA4140→ma0301, TMA4240→tma4245,
TMA4115→tma4111-familien).

## Anbefaling
**Hopp over; ingen egen bok.** Kryssrefereres av tma4135 (Fourier/PDE/numerikk-
kjernen) og tma4121 (kompleks analyse, om ønsket). Analysen (`EKSAMENSANALYSE.md`)
beholdes som kildedokumentasjon og som grunnlag for en eventuell liten 4M-vri
(framhev Gauss–Seidel/Jacobi + MATLAB, tone ned Laplace) inne i tma4135-boka.
Revurderes kun hvis et aktivt enkelt-etterfølgeremne med eget eksamensarkiv
skulle dukke opp.

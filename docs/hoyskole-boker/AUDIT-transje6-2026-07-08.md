# Fable-revisjon av transje 6 (8. juli 2026)

Bestilt av bruker: «fullfør de nåværende agentene og review dem med fable».
Gjennomgang av de 10 fagene i transje 6 etter at alle skjeletter landet.

## Omfang
jus2211, econ3120/4120, ttm4135, econ3010, med1100, econ4915, tdt4237,
ttm4100 (+ analyser econ4915, ttm4100, tdt4237). Alle Opus-produsert; denne
revisjonen er Fable (hovedløkka), som ved audit nr. 1 og 2.

## Kontroller kjørt
1. **Kvalitetsport** på alle 10 → 10/10 KVALITETSPORT OK.
2. **Del-basert nummerering** (v3-krav, JUS1111-lærdommen): alle 10 bruker
   `number: <del>.<nr>` med flere del-prefiks (0–13 for med1100), ingen lineær.
3. **Lastbærende kalibrering** — verifisert at hvert skjelett faktisk bærer
   sin analyses avgjørende funn (grep-tellinger, alle rikt til stede):
   - econ3010: «ingen regning» (34) + pris-signal-svarnøkkel (79)
   - econ3120: metodelydighet (52) + differens/Bellman-2024 (40) + KT utgått (45) + to koder (8)
   - ttm4135: navngi teoremet (53) + 50/50 MCQ (22)
   - jus2211: fvl. 1967 (8) + koblingssjanger (78) + §41→§74 (11) + ny lov ikke i kraft (31)
   - med1100: tre blokker (229) + minuspoeng blokk 2 (43)
   - econ4915: identifikasjon foran korr. (34) + nøkkelstudie-bokser (61) + econ1910-kobling (54)
   - tdt4237: RMF (130) + misuse cases/attack trees (57) + STRIDE-avvik (15)
   - ttm4100: momentliste-sensur (50) + regne-verktøykasse (70) + top-down Kurose (34)
4. **Premiss-korreksjoner fanget av analysen** (beviser at analyse-først virker):
   sosant1090 = teorihistorie ikke metode; econ1910 = teori ikke RCT, mens
   econ4915 = RCT ER påkrevd; tdt4237 = STRIDE i fagbeskrivelsen men misuse
   cases + attack trees i praksis; econ3010 = «anvendt analyse»-lokkeordet
   (mekanismedesign/auksjoner) testes aldri.

## Funn og fiks (dokumentasjonshygiene)
- **4 fag manglet i README-statustavlen** (jus2211, econ3120, ttm4135,
  econ3010 — skjelettpromptene deres ba ikke agenten legge til rad, i motsetning
  til de fire siste). Lagt til. sosant1090-raden var også stale
  («analyse underveis» → «skjelett»; tittel rettet til «Antropologiens historie»).
- **KILDEGRUNNLAG.md hadde 4 «(bygges)»-oppføringer** fra da fagene fortsatt
  bygde. Regenerert med endelige tall (77 fag, 76 med kvote; econ2200 korrekt
  vist som droppet/nedlagt). Ryddet arketype-kosmetikk.
- **Ingen innholdsfeil funnet** i skjelettene — kalibreringen er tro mot
  analysene, kvotene ligger sunt over gulvet (econ3010 528/614 … med1100
  706/734), rettstilstand håndtert (jus2211 bygger på fvl. 1967 med ny lov i
  parentes, ikke på ukraftig lov).

## Rettstilstands-/pensumflagg videreført til fase 6
- **jus2211**: obligatorisk Lovdata-verifikatør + veiledningshenting (ingen
  sensorveiledning i arkivet; ny fvl. paragrafmapping må verifiseres ved
  ikrafttredelse). Samme for **jus4111**.
- **econ3120**: 2024-pensumskiftet (KT/substitusjon ut, differens/Bellman inn)
  bygget inn; verifiser eksakt gjeldende pensum.
- **ttm4135/ttm4100/tdt4237**: vektings-/formatskifte-caveats merket (verifiser).

## Verdikt
Transje 6 er solid — samme kvalitetsnivå som transje 1–5. Ingen skjeletter må
skrives om. De to funnene var rene dokumentasjonshull (statustavle + kildegrunnlag),
begge lukket. Algoritmen skalerer fortsatt trygt.

Status etter transje 6: **77 fag med rammeverk** (2 bøker live + 74 byggeklare
skjeletter + econ2200 analyse/droppet). Neste kandidater (transje 7) er notert i
TODO-OPUS: MET2910, SØK3500, TMA4111, TMA4106, LING1100, ECON4260, samt
JUS3112/JUS4212-4213/TMA4121 (splittede etterfølgere) og resten av BI-porteføljen.

# K2-gruppen — statusverifisering og kunnskaps-utvidelse

Bestilt av bruker 8.–9. juli 2026: «undersøk om K2-gruppen er aktive fag og
utvid det vi vet om dem (som K1) FØR vi eventuelt bygger.» K2 = arkiver med
løsningsforslag som lå UTENFOR det opprinnelige fagbeskrivelses-mandatet.

**Resultat: hele K2 (~120 fag, ≥5 løsningsforslag) er statusverifisert mot
institusjonenes emnesider.** ~74 nye fulle eksamensanalyser skrevet i første runde;
~18 nedlagt (hoppet eller etterfølger-notert). Alt committet.

**OPPDATERING 9. juli 2026 (bruker ba: «gjør a) så b)»):** De ~28 «aktive med
analyse gjenstående» er nå ANALYSERT FERDIG (fase 1 komplett for hele aktive K2).
Runde 2 (maks 4 samtidige enkeltfag-Opus-agenter, ingen fan-out):
- 17 NIH-idrettsfag (commit d3efd68d): fysiologiklyngen thp100/101/202/203/204 +
  lki235/idr109/ma460, ti100/ti300, met200/met402, is205/is225, faf311, ppu406, spm105.
- 11 UiO/OsloMet/HiØ (commit f723bed2): od2200/od4200/od5100/od5200, in2080,
  sos4010/sos4200, sosant1400/sosant2600, oslomet-data2500, hio-statistikk-okonomi.
Nå PÅGÅR fase 2 (b): skjelettbygging for de sterkeste kandidatene (se nederst).

## Buckets

| Kategori | Antall | Betydning |
|---|--:|---|
| AKTIV + full analyse skrevet | ~102 | Klar for fase 2 (skjelett) — HELE aktive K2 analysert per 9. juli |
| AKTIV — analyse gjenstår | 0 | Alle 28 restanalyser ferdige (commit d3efd68d + f723bed2) |
| Nedlagt m/etterfølger | ~10 | Bygg mot etterfølgerkoden (etterfølger-profilering) |
| Nedlagt/hoppet u/etterfølger el. dekket | ~8 | Ikke bygg-verdig |

## Klyngefunn

**NTNU matematikk (MA-grunnkurs, 7):** alle AKTIVE. MA1301 Tallteori er UNIKT
(ingen bok dekker tallteori — ma0301 er diskret matte). MA1101/1102/1103/1201/
1202 overlapper delvis mat1100/1110/1120 men er egne bevis-/NTNU-profiler.

**NTNU anvendt matte (TMA-serien, 14):** de fleste NEDLAGT (reform) men delt
eksamenspool med bygde tma4135/tma4121 — analysert for kunnskap; bør gjenbruke
tma4135-struktur ved evt. bygging. TMA4185 Kodeteori → appendiks til kryptografi.

**NTNU SOK-økonomi (21):** SOK1011 er kirurgisk KOMPLEMENT til bygde SOK1002
(dekker nøyaktig det SOK1002 utelater — bør bygges som par). SOK1000/1011/1012
er innføringssekvensen (eksamensaktiv for eldre kull). SOK2005 finansmarkeder +
SOK2007 utviklingsøkonomi + SOK3006 valuta/olje + SOK3007 offentlig økonomi er
aktive og fyller hull. SOK3514/3515 (økonometri) absorbert av bygde SOK3001.

**Ingeniør-/IT-matte:** HVL MAS116 Hydrodynamikk, HiØ ingeniør-/diskret-matte,
OsloMet diskret matte — alle AKTIVE og analysert. VIKTIGE KORRIGERINGER:
UiT «HIN-INGDES1» er IKKE matte — det er materialteknologi fra nedlagte
Høgskolen i Narvik (hoppet). OsloMet DATA2500 er operativsystemer (aktivt,
analyse gjenstår — trenger OS-forbilder). BI MET2911 = første halvdel av bygde
met2910-bi.

**UiO psykologi (13):** 11 analysert (helse, klinisk nevropsyk, profesjonsetikk,
kvant metode A, sexologi, kvalitativ/kvantitativ metode, arbeids-, kultur-,
personlighets-, kognitiv psyk), 2 nedlagt. PSYC2104/PSY2014 avgrenset mot bygde
psy1010; flere PSYC-koder har profesjonsstudie-alias (verifiser etter H2026).

**UiO samfunnsfag (SOS/SOSANT + STV/SGO/tverrfag, 25):** nesten alle AKTIVE og
drøftingsfag. STV1100/STV2110 overlapper exphil03; KULKOM1001/UTV1000 overlapper
sosant1000; STV1200/INTER1000 deler IR-pensum. Master-emner (TIK4001, OLA4001)
med nasjonale masterkriterier.

**UiO realfag (5):** MAT2410 kompleks analyse (aktiv, overlapper tma4121),
STK2100 maskinlæring (aktiv, bygger på stk1110), FYS-MEK1110→FYS1100 (etterfølger),
IN2080 beregnbarhet (aktiv, gjenstår), MAT-INF1100 nedlagt→etterfølger.

**UiO odontologi (4):** alle AKTIVE. OD2200 er sterkeste bokkandidat (klinisk
pugg som MED1100, rike sensorveiledninger, 0 bildeavhengighet). OD5200
(samfunnsodontologi) delvis. OD4200/OD5100 krever bildehåndtering — vent.

**NIH idrettsfag (20):** ALLE AKTIVE (nytt fagområde). 3 analysert. SPM245 er
egentlig bedriftsøkonomi (ikke ledelse). Fysiologi-klyngen (THP/LKI/MA460/IDR)
bør bygges som gruppe (nokut-afb/med1100-mal). Idrettsledelse (SPM) har svært
gode sensorveiledninger. Metode (MET) → econ2130-mal.

## Anbefaling om videre bygging (når/hvis mandatet utvides)
Sterkeste bok-kandidater fra K2, prioritert:
1. **MA1301 Tallteori** — unikt, ingen overlapp.
2. **SOK1011** — komplement-par til bygde SOK1002.
3. **OD2200** — odontologiens MED1100-ekvivalent.
4. **MAS116, STK2100, MAT2410** — sterke arkiver, aktive, delvis gjenbruk.
5. **NIH fysiologi-klyngen + SPM245/SPM-ledelse** — nytt men velbelagt fagfelt.
De ~28 «analyse gjenstår» er nå analysert ferdig (9. juli).

### Fase 2 (b) — skjelettbygging FULLFØRT (9. juli 2026)
Bygde 14 skjeletter (maks 4 samtidige Opus-agenter, gate + commit enkeltvis), alle
KVALITETSPORT OK, alt committet:
- **Tier 1 (6):** ma1301 (32 kap, 523q/548fc), sok1011 (27, 538/524, komplement
  SOK1002), od2200 (34, 560/656, lav bildeavh.), mas116-hvl (30, 556/588),
  stk2100 (28, 610/540), mat2410 (29, 564/566).
- **Tier 2 NIH fysiologiklynge (8):** thp100 (36, 554/576, fundament), thp101
  (30, 596/662, minuspoeng-MC), thp202 (21, 560/520, navet), thp203 (24, 560/586,
  regnefag 70/20/10), thp204 (26, 540/594, biokjemi), lki235 (29, 558/594,
  thp202-tvilling), idr109 (22, 590/596, anvendt), ma460 (30, 662/672, master).
Klyngen bygget med søsken-kryssreferanser (forkunnskaps-lenker, ikke dybdegjentakelse).

MERKNADER for fase 3–7 (bokbygging/wiring):
- Sjekk at NTNU/HVL/NIH finnes i src/app/bok/trinn/hoyere/institusjoner.ts.
- mat2410: gate rapporterte 0 prøve-kvote-linjer (prøver finnes, format-avvik) — verifiser prøvekvoter ved bokbygging.
- Alle skjeletter har *(verifiser)*-flagg på usikre tall/paragrafer/pensumankere — Opus må sjekke ved bygging.

GJENSTÅR i K2 (ikke bygget, dokumentert som lavere prioritet): øvrige ~88 aktive
K2-fag med analyse (bl.a. NTNU MA-grunnkurs 1101–1202, SOK-serien, UiO psykologi/
samfunnsfag/odontologi-rest, resten av NIH). Klare for skjelett hvis mandatet utvides.

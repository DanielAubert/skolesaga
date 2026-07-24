# Figurbestillinger — ECON2220 Mikroøkonomi 2

Kapittelforfatterne bygger ikke SVG-er selv. Hver linje under er en bestilling:
kapittel, ønsket filnavn og en presis beskrivelse av akser, kurver, skift og
merkede punkter. Figurene legges i `public/images/textbook/econ2220/` og MÅ
lastes opp med `npx tsx scripts/upload-media-storage.ts` før deploy.

| Kapittel | Filnavn | Innhold (akser, kurver, skift, merkede punkter) |
|---|---|---|
| econ2220-5-1 | econ2220-5-1-isokvantkart.svg | Isokvantkart. Vannrett akse: arbeid $L$. Loddrett akse: kapital $K$. Tre fallende, konvekse hyperbelkurver for $F(K,L)=\sqrt{KL}$ ved $\bar y = 4$, $\bar y = 6$ og $\bar y = 8$, merket innenfra og ut; kurvene krysser aldri hverandre og nærmer seg aksene asymptotisk. På mellomkurven ($\bar y = 6$) merkes punktene $A=(4,9)$ og $B=(9,4)$ med stiplede hjelpelinjer ned til begge akser. Pil utover merket «høyere produksjon». Ingen kostnadslinje i denne figuren. |
| econ2220-5-1 | econ2220-5-1-skalaregimer.svg | Tre små ruter side om side som viser skalautbytte-testen. Hver rute har vannrett akse $L$ og loddrett akse $K$, med to isokvanter: én for $\bar y = 1$ og én for $\bar y = 2$, samt strålen fra origo gjennom punktet $(K_0,L_0)$ på den nederste isokvanten og punktet $(2K_0,2L_0)$ lenger ut på strålen. Rute 1 «konstant»: dobling av faktorene treffer nøyaktig isokvanten $\bar y = 2$. Rute 2 «tiltakende»: doblingspunktet ligger utenfor $\bar y = 2$. Rute 3 «avtakende»: doblingspunktet ligger innenfor $\bar y = 2$. Doblingspunktet merkes $D$ i alle tre. |
| econ2220-3-1 | econ2220-3-1-beholdningsbudsjett.svg | Akser: $c_1$ (gulrøtter, kg) vannrett, $c_2$ (poteter, kg) loddrett. Budsjettlinje fra $(0,450)$ til $(300,0)$, helning $-1{,}5$. Beholdningspunktet $W=(200,150)$ merket på linjen med stiplede hjelpelinjer til begge akser. Området til venstre for $W$ merket «selger vare 1», til høyre «kjøper vare 1». |
| econ2220-3-1 | econ2220-3-1-rotasjon.svg | Samme akser. To budsjettlinjer: gammel fra $(0,450)$ til $(300,0)$ (helning $-1{,}5$) og ny fra $(0,550)$ til $(275,0)$ (helning $-2$). Begge går gjennom $W=(200,150)$; rotasjonspil om $W$. Stiplede hjelpelinjer fra $W$ til aksene. Ny linje ligger over den gamle til venstre for $W$, under til høyre. |
| econ2220-3-1 | econ2220-3-1-optimum-nettoselger.svg | Samme akser. Budsjettlinje $(0,450)$–$(300,0)$, beholdningspunkt $W=(200,150)$, optimum $E=(120,270)$ oppe til venstre for $W$ med tangerende, konveks indifferenskurve. Stiplede hjelpelinjer fra $E$ til $c_1=120$ og $c_2=270$; dobbeltpil langs $c_1$-aksen fra 120 til 200 merket «selger 80 kg». |

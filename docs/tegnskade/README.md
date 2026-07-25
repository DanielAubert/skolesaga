# Tegnskade: ø, å og æ skrevet som oe, aa og ae

Bøker skrevet i februar 2026 fikk norske tegn skrevet som ASCII-erstatninger.
Eleven leste «eldre **paa** sykehjem, handler om **aa moete** mennesker» og
«Moderne psykologi bruker systematiske metoder for **aa** studere».

Rettet 25. juli 2026: **105 621 forekomster i 1 996 filer, 97 bøker.**
Verst rammet var psykologi-1 (42 047), geografi (11 121) og geofag-1 (6 630).

## Hvorfor dette ikke var søk-og-erstatt

Fem ting ser like ut, men skal ikke røres. Hver av dem ble oppdaget ved å se på
faktiske data, ikke ved å tenke seg om:

**1. Ekte norske ord med samme bokstavpar.** «noe» (23 220 forekomster), «noen»
(18 229), «poeng», «koeffisient», «anaerob», «kollegaer», «videoer», «naboer»,
«kontoer». En blank `oe → ø`-regel ville laget «nø» og «nøn».

**2. Egennavn.** `vesaas → vesås` sto i den første autogenererte lista med 670
treff — det er Tarjei **Vesaas**. Også Caesar, Ivar Aasen, Aalesund, Haakon.
Løsning: former som oftest har stor forbokstav er utelatt.

**3. Feil fasit.** `kommandoer → kommandør` (flertall av kommando!),
`broer → brør`, `miljoet → miljøt`. Fasiten var selv en skrivefeil som tilfeldigvis
fantes i korpuset. Løsning: fasitformen må være **minst 10× vanligere** enn den
skadede.

**4. Målform.** «aatferd» er «atferd» på bokmål og **«åtferd» på nynorsk**. En
felles ordliste ville byttet målform på 784 steder. Løsning: to lister, hver
validert mot sitt eget korpus.

**5. Gammel rettskriving.** Norsk brukte «aa» for «å» før 1917. I `norsk-vg1` og
`norsk-vg2` står sitater fra Kongsspegelen der «paa», «aar» og «fraa» er
**periodekorrekt**: «Dit kom det folk fraa Island for mange aar sidan». Å rette
dem ville forfalsket kilden. Løsning: strenger med tre eller flere arkaiske
markører (`kallast`, `hev`, `um`, `Folki`, `fjelli`, `so`, …) får ikke rettet
aa-former. 414 treff i 11 filer står bevisst urørt.
Merk skillet: «oe» og «ae» har **aldri** vært norsk ortografi og rettes overalt.

## Hvordan ordlista ble laget

Ikke skrevet for hånd — bygget fra korpuset og validert mot det:

> En form med aa/oe/ae er skadet hvis den rettede formen finnes minst 10 ganger
> oftere i samme målform. «gjoer» → «gjør» finnes 21 945 ganger i uskadde bøker.
> «noe» → «nø» finnes ikke.

Resultat: `ordliste-bokmal.json` (1 809 former) og `ordliste-nynorsk.json`
(1 261 former). Begge er versjonert her og kan etterprøves.

## Bruk

```bash
python3 scripts/rett-tegnskade.py            # tørrkjøring, rapporterer
python3 scripts/rett-tegnskade.py --skriv    # skriver
python3 scripts/rett-tegnskade.py psykologi-1 --skriv   # én bok
```

Skriptet verner kodegjerder, inline-kode, matte, URL-er og tekniske felt
(`src`, `id`, `href`) — «maal» kan være et variabelnavn og «paa» et filnavn.

## Som port

Tørrkjøring skal rapportere **0 rettinger**. Gjør den ikke det, har ny skade
kommet inn:

```bash
python3 scripts/rett-tegnskade.py | head -1     # skal si «0 rettinger»
```

Kilden var forfatteragentene selv i februar, ikke en pipeline — det finnes ingen
translitterering i kodebasen. Men porten koster sekunder og fanger det om det
skjer igjen.

## Det som bevisst står igjen

Terskelen på 10× er konservativ, og noen ekte skader slipper unna. Kjent
eksempel: «aatferd» i nynorsk (784 treff) — «åtferd» er bare 3,4× vanligere, så
den faller under terskelen. Å senke terskelen ville tatt den, men også sluppet
inn feilrettinger som `broer → brør`.

Det er et bevisst valg: **heller la skade stå enn å innføre ny.** En andre runde
med manuelt gjennomgått liste kan ta resten.

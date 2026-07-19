import type { QuizQuestion } from './quiz-data';

const quizData_tma4245: Record<string, QuizQuestion[]> = {
  'tma4245-0-1': [
    {
      question: "Hvorfor lønner det seg ikke å pugge standardformlene for konfidensintervall og hypotesetest utenat?",
      options: ["Fordi de står i den tillatte formelsamlingen, så poengene ligger i å velge og bruke dem riktig.", "Fordi slike formler faktisk aldri blir spurt direkte om på en TMA4245-eksamen i det hele tatt.", "Fordi sensor gir trekk for svar som bruker ferdige formler i stedet for lange egne utledninger.", "Fordi formlene endres litt fra sett til sett, så en pugget versjon vil ganske raskt være utdatert."],
      explanation: "Formelsamlingen «Tabeller og formler i statistikk» ligger på pulten (hjelpemiddelkode C). Derfor tester eksamen valg og bruk — riktig formel, riktig kvantil, riktig frihetsgrad — ikke gjengivelse.",
    },
    {
      question: "Hvilket tema åpner nesten hvert eneste eksamenssett i TMA4245?",
      options: ["Normalfordelingsregning, som er med i omtrent 98 prosent av alle eksamenssettene i arkivet.", "Kombinatorikk, som nesten alltid er den aller første oppgaven i hvert eneste eksamenssett.", "Ordningsvariable, som brukes for å skille ut de aller beste kandidatene helt på toppen.", "Regresjon med residualtolkning, som fast pleier å utgjøre åpningsoppgaven på nyere sett."],
      explanation: "Normalfordeling med lineærkombinasjoner er i ~98 % av settene og ligger ofte først. Kombinatorikk (~39 %) og ordningsvariable (~22 %) er langt sjeldnere.",
    },
    {
      question: "Hva er den gjennomgående kjeden i den store eksamensoppgaven?",
      options: ["Modell, ML-estimator, egenskaper, konfidensintervall, full hypotesetest og til slutt styrke.", "Kombinatorikk, betinget sannsynlighet, Bayes, simultantabell og deretter selve korrelasjonen.", "Deskriptiv statistikk, histogram, boksplott, Q-Q-plott og til slutt en konklusjon skrevet i ord.", "Simulering, Monte Carlo, bootstrap, konfidensintervall og helt til slutt en simulert p-verdi."],
      explanation: "Kjeden modell → ML → egenskaper → konfidensintervall (pivotal) → test → styrke går igjen i praktisk talt hvert sett siden 2016 og utgjør 30–40 % av poengene.",
    },
    {
      question: "Hvorfor bør du ikke hoppe over Python- og Monte Carlo-oppgavene?",
      options: ["Fordi et kodeinnslag har vært med i hele 8 av de 9 siste settene siden desember 2023.", "Fordi de nesten alltid er verdt mer enn halvparten av poengene på hele eksamenssettet.", "Fordi de nå fullstendig erstatter den håndregnede inferensdelen på de moderne settene.", "Fordi de er obligatoriske forkunnskaper for i det hele tatt å få gå opp til eksamen."],
      explanation: "Python/Monte Carlo er nytt, men i 8 av de 9 siste settene. Å droppe sjangeren er å gi bort sikre poeng; den erstatter ikke resten av settet.",
    },
    {
      question: "Hva krever sensor at du gjør før du begynner å regne på en sannsynlighetsoppgave?",
      options: ["Definere størrelsene med egne symboler, som «La X = antall, da er X fordelt slik».", "Skrive ut hele fordelingsfunksjonen med et fullstendig bevis før du setter inn tall.", "Regne ferdig alle delpunktene først og deretter forklare hele framgangsmåten samlet.", "Sjekke svaret mot en kjørt simulering i Python før du fører tallet inn på svararket."],
      explanation: "Sensorkravet er å definere variablene før regning. Svar uten definerte størrelser regnes som ufullstendige, selv om tallsvaret er riktig.",
    },
    {
      question: "Hvilken karakter beskriver boka som «en god og vanlig karakter» å sikte mot?",
      options: ["C, som du oppnår ved å beherske selve standardregningen trygt uten pivotal-utledninger.", "A, siden alt under det gjerne regnes som en nokså svak prestasjon på et realfagsemne.", "E, som er det nivået de aller fleste kandidatene faktisk pleier å ende opp med til slutt.", "B, fordi den krever nøyaktig de samme ferdighetene som selve toppkarakteren A gjør."],
      explanation: "C er en god og vanlig karakter og oppnås ved å beherske standard konfidensintervall og tester. A krever i tillegg pivotaler, styrke og transformasjonsbevis.",
    },
    {
      question: "Hvorfor er det risikabelt å bare øve på sannsynlighetsdelen (Del 1–3)?",
      options: ["Fordi inferens-kjeden med ML, intervall, test og styrke er hele 50–60 % av poengene.", "Fordi sannsynlighetsdelen nesten aldri kommer på eksamen og bare er innledende teori.", "Fordi inferensoppgavene alltid kommer helt først og må være løst før sannsynlighet.", "Fordi sannsynlighet krever mye mer avansert matematikk enn det hele inferensdelen gjør."],
      explanation: "Sannsynlighet føles trygt, men inferens-kjeden er halvparten av poengene. Stopper du ved Del 1–3, mister du den delen som avgjør karakteren.",
    },
    {
      question: "Hva kjennetegner Inspera-hybridformatet på eksamen?",
      options: ["En digital kortsvarsdel med bare tallsvar og åpne papiroppgaver med full begrunnelse.", "En helt og holdent digital eksamen der alle utregninger føres inn og deretter gis delpoeng.", "En ren papireksamen der svarene til slutt bare blir registrert digitalt av en sensor.", "En muntlig del inne i Inspera kombinert med en skriftlig hjemmeoppgave rett i etterkant."],
      explanation: "Hybridformatet har en Inspera-kortsvarsdel (kun tallsvaret teller, 2–3 desimaler) og åpne papiroppgaver med begrunnelse. Kortsvarene gir ikke delpoeng.",
    },
    {
      question: "Hvilken pivotal for eksponensialfordelingen må du kunne utlede selv?",
      options: ["To ganger summen av X-ene delt på beta, som er kjikvadratfordelt med 2n frihetsgrader.", "Gjennomsnittet av alle X-ene delt på beta, som er standardnormalfordelt for store utvalg.", "Summen av alle X-ene delt på n, som blir t-fordelt med n minus én frihetsgrad i alt.", "Kvadratsummen av X-ene delt på sigma, som er kjikvadratfordelt med n frihetsgrader i alt."],
      explanation: "Pivotalen er 2·sum(X)/beta ~ kjikvadrat med 2n frihetsgrader. Den står ikke i formelsamlingen og må utledes; frihetsgraden er alltid 2n.",
    },
    {
      question: "På et rent papirsett der alle delpunktene teller likt, hva er den beste tidsstrategien?",
      options: ["Fordel tiden jevnt utover, og ikke grav deg ned i ett delpunkt du kanskje ikke får til.", "Bruk mest mulig tid på det aller første delpunktet så det blir helt perfekt først.", "Løs bare de delpunktene du selv synes er mest interessante, og hopp over resten helt.", "Ta de aller vanskeligste delpunktene helt først slik at du sikrer de høyeste poengene."],
      explanation: "Når alle delpunkter teller likt, er det dyrt å bruke uforholdsmessig lang tid på ett punkt mens lette punkter står ubesvart. Fordel tiden og kom heller tilbake.",
    },
  ],
  'tma4245-1-1': [
    {
      question: "Hva er komplementet $A^c$ til en hendelse $A$?",
      options: ["Alle utfall i $S$ som ikke ligger i $A$", "Alle utfall som ligger i både $A$ og $B$", "Alle utfall som ligger i minst én hendelse", "Den delen av $A$ som overlapper med $B$"],
      explanation: "$A^c$ er alt i utfallsrommet som ikke er i $A$ — «$A$ inntreffer ikke». $P(A^c)=1-P(A)$.",
    },
    {
      question: "Hva står symbolet $A \\cap B$ for?",
      options: ["Utfall som ligger i både $A$ og $B$ («og»)", "Utfall som ligger i minst én av dem («eller»)", "Utfall som ligger i $A$ men ikke i $B$", "Utfall som verken ligger i $A$ eller $B$"],
      explanation: "Snittet $A\\cap B$ er «$A$ og $B$ samtidig» — utfallene som er felles for begge.",
    },
    {
      question: "Hvilken formel er den generelle addisjonsregelen?",
      options: ["$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$", "$P(A \\cup B) = P(A) + P(B) + P(A \\cap B)$", "$P(A \\cup B) = P(A) \\cdot P(B) - P(A \\cap B)$", "$P(A \\cup B) = P(A) + P(B) - P(A)P(B)$"],
      explanation: "Overlappet $P(A\\cap B)$ telles én gang i hver av $P(A)$ og $P(B)$, så det trekkes fra én gang.",
    },
    {
      question: "Når forenkler addisjonsregelen seg til $P(A \\cup B) = P(A) + P(B)$?",
      options: ["Når hendelsene er disjunkte, altså $P(A \\cap B) = 0$", "Når hendelsene er uavhengige av hverandre", "Når begge hendelsene har positiv sannsynlighet", "Når summen $P(A) + P(B)$ er mindre enn 1"],
      explanation: "Uten overlapp ($A\\cap B=\\varnothing$) er fradraget null, så sannsynlighetene legges rett sammen.",
    },
    {
      question: "Hva er den presise definisjonen av at $A$ og $B$ er uavhengige?",
      options: ["$P(A \\cap B) = P(A)\\,P(B)$", "$P(A \\cap B) = 0$ for de to hendelsene", "$P(A \\cup B) = P(A) + P(B)$ nøyaktig", "$P(A) + P(B) = 1$ for de to hendelsene"],
      explanation: "Uavhengighet er produktregelen $P(A\\cap B)=P(A)P(B)$ — den ene endrer ikke sannsynligheten for den andre.",
    },
    {
      question: "To disjunkte hendelser har begge positiv sannsynlighet. Er de uavhengige?",
      options: ["Nei, disjunkte hendelser med positiv sannsynlighet er aldri uavhengige", "Ja, disjunkte hendelser er nødvendigvis også uavhengige av hverandre", "Ja, forutsatt at summen $P(A) + P(B)$ er mindre enn eller lik 1", "Det avhenger av om utfallsrommet er en uniform modell eller ikke"],
      explanation: "Disjunkt gir $P(A\\cap B)=0$, mens uavhengig krever $P(A)P(B)>0$. De kan ikke gjelde samtidig.",
    },
    {
      question: "$P(A) = 0{,}6$ og $P(B) = 0{,}7$. Kan $A$ og $B$ være disjunkte?",
      options: ["Nei, for da ville $P(A \\cup B) = 1{,}3$, som er umulig", "Ja, disjunkthet avhenger ikke av sannsynlighetene", "Ja, så lenge hendelsene er uavhengige av hverandre", "Bare hvis utfallsrommet har uendelig mange utfall"],
      explanation: "Var de disjunkte, ville unionen fått sannsynlighet $0{,}6+0{,}7=1{,}3>1$. Overlapp er tvunget.",
    },
    {
      question: "Kast av én rettferdig terning: $A=\\{5,6\\}$, $B=\\{2,4,6\\}$. Hva er $P(A \\cup B)$?",
      options: ["$\\tfrac{2}{3}$", "$\\tfrac{5}{6}$", "$\\tfrac{1}{2}$", "$\\tfrac{1}{6}$"],
      explanation: "$P(A)=\\tfrac13$, $P(B)=\\tfrac12$, $P(A\\cap B)=\\tfrac16$; sum $=\\tfrac13+\\tfrac12-\\tfrac16=\\tfrac23$. $\\tfrac56$ glemmer fradraget.",
    },
    {
      question: "Hva sier komplementregelen?",
      options: ["$P(A^c) = 1 - P(A)$ for enhver hendelse", "$P(A^c) = P(A) - 1$ for enhver hendelse", "$P(A^c) = 1 - P(A \\cap B)$ generelt", "$P(A^c) = P(B) - P(A)$ når $A \\subseteq B$"],
      explanation: "$A$ og $A^c$ dekker hele $S$ og overlapper ikke, så sannsynlighetene summerer til 1.",
    },
    {
      question: "To komponenter svikter uavhengig med sannsynlighet $0{,}05$ og $0{,}08$. Hva er $P(\\text{begge svikter})$?",
      options: ["$0{,}004$", "$0{,}130$", "$0{,}065$", "$0{,}013$"],
      explanation: "Uavhengige: $P(F_1\\cap F_2)=0{,}05\\cdot 0{,}08=0{,}004$.",
    },
    {
      question: "Samme to komponenter ($0{,}05$ og $0{,}08$, uavhengige). Hva er $P(\\text{minst én svikter})$?",
      options: ["$0{,}126$", "$0{,}130$", "$0{,}004$", "$0{,}874$"],
      explanation: "$1-(1-0{,}05)(1-0{,}08)=1-0{,}95\\cdot 0{,}92=1-0{,}874=0{,}126$. $0{,}874$ er «ingen svikter».",
    },
    {
      question: "I uniform modell er $P(A)$ lik hva?",
      options: ["Antall gunstige utfall delt på antall mulige utfall", "Antall gunstige utfall multiplisert med antall mulige", "Antall mulige utfall delt på antall gunstige utfall", "Antall utfall i $A$ pluss antall utfall i $A^c$"],
      explanation: "$P(A)=|A|/|S|$ — men bare når alle elementutfall er like sannsynlige.",
    },
    {
      question: "$B$ er en delhendelse av $A$ ($B \\subseteq A$). Hva er da $A \\cap B$?",
      options: ["$B$, siden alt i $B$ også ligger i $A$", "$A$, siden $A$ er den største mengden", "Den tomme mengden $\\varnothing$", "$A \\cup B$, siden de overlapper fullstendig"],
      explanation: "Ligger $B$ helt inne i $A$, er det felles området nettopp hele $B$: $A\\cap B=B$.",
    },
    {
      question: "Hvorfor kan man ikke lese av uavhengighet direkte fra et Venndiagram?",
      options: ["Uavhengighet handler om sannsynligheter og må regnes, ikke om overlapp", "Venndiagram viser bare komplementer, ikke snitt og union", "Uavhengige hendelser tegnes alltid uten noe overlapp", "Venndiagram kan bare brukes for disjunkte hendelser"],
      explanation: "Disjunkthet ser man (tomt overlapp), men uavhengighet krever at $P(A\\cap B)=P(A)P(B)$ — et regnestykke.",
    },
    {
      question: "Hva er den vanligste feilen med formelen $P(A \\cup B) = P(A) + P(B)$?",
      options: ["Å bruke den når hendelsene overlapper, så overlappet telles dobbelt", "Å bruke den når hendelsene er disjunkte og ikke overlapper", "Å trekke fra $P(A \\cap B)$ når hendelsene er uavhengige", "Å bruke den når begge sannsynlighetene er større enn null"],
      explanation: "Uten fradrag for $P(A\\cap B)$ dobbelttelles overlappet. Formelen gjelder kun for disjunkte hendelser.",
    },
  ],
  'tma4245-1-2': [
    {
      question: "Hva sier multiplikasjonsprinsippet?",
      options: ["Gang antall valg i hvert uavhengig trinn med hverandre", "Legg sammen antall valg i hvert av de ulike trinnene", "Del antall totale utfall på antall trinn i oppgaven", "Trekk fra det minste antallet valg blant alle trinn"],
      explanation: "Kan trinn 1 gjøres på $n_1$ måter og trinn 2 på $n_2$, er totalen $n_1\\cdot n_2$ — for hvert valg i trinn 1 finnes $n_2$ i trinn 2.",
    },
    {
      question: "En firesifret PIN-kode har sifre 0–9 som kan gjentas. Hvor mange koder finnes?",
      options: ["$10^4 = 10\\,000$", "$10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$", "$\\binom{10}{4} = 210$", "$4^{10} = 1\\,048\\,576$"],
      explanation: "Ordnet med tilbakelegging: 10 valg i hvert av 4 trinn gir $10^4$. $5040$ ville vært uten gjentakelse.",
    },
    {
      question: "Når bruker du $\\frac{n!}{(n-k)!}$ i stedet for $\\binom{n}{k}$?",
      options: ["Når rekkefølgen på de valgte teller (ordnet utvalg)", "Når rekkefølgen ikke teller (uordnet utvalg)", "Når elementene kan velges flere ganger", "Når alle $n$ elementene skal brukes samtidig"],
      explanation: "$\\frac{n!}{(n-k)!}$ teller ordnede utvalg (permutasjoner); $\\binom{n}{k}$ teller uordnede. Skillet er om en omstokking gir nytt utfall.",
    },
    {
      question: "Hva er $\\binom{10}{3}$?",
      options: ["$120$", "$720$", "$30$", "$1000$"],
      explanation: "$\\binom{10}{3}=\\frac{10\\cdot 9\\cdot 8}{3\\cdot 2\\cdot 1}=120$. $720$ er det ordnede tallet $10\\cdot 9\\cdot 8$.",
    },
    {
      question: "Et team på 4 velges fra 5 ingeniører og 4 teknikere, med krav om nøyaktig 2 av hver. Hvor mange team?",
      options: ["$\\binom{5}{2}\\binom{4}{2} = 60$", "$\\binom{5}{2}+\\binom{4}{2} = 16$", "$\\binom{9}{4} = 126$", "$\\binom{5}{2}\\binom{4}{2}\\cdot 2 = 120$"],
      explanation: "Begge krav må oppfylles samtidig, så vi ganger: $10\\cdot 6=60$. Å legge sammen er en klassisk feil.",
    },
    {
      question: "Hva teller den multinomiske koeffisienten $\\frac{n!}{n_1!\\,n_2!\\cdots n_r!}$?",
      options: ["Antall måter å dele $n$ objekter i grupper av gitte størrelser", "Antall måter å velge én gruppe på $k$ blant $n$", "Antall ordnede utvalg med tilbakelegging blant $n$", "Antall delmengder av en mengde med $n$ elementer"],
      explanation: "Den deler $n$ objekter i $r$ grupper av størrelse $n_1,\\ldots,n_r$; den teller også anagram av et ord.",
    },
    {
      question: "En pokerhånd er 5 kort av 52 (rekkefølgen teller ikke). Hvor mange hender finnes?",
      options: ["$\\binom{52}{5} = 2\\,598\\,960$", "$52^5 = 380\\,204\\,032$", "$\\frac{52!}{47!} = 311\\,875\\,200$", "$\\binom{52}{5}\\cdot 5! = 311\\,875\\,200$"],
      explanation: "Uordnet utvalg av 5 av 52 gir $\\binom{52}{5}$. De ordnede tallene teller hver hånd $5!$ ganger for mye.",
    },
    {
      question: "Hvordan finner du sannsynligheten for «minst ett ess» i 5 trukne kort raskest?",
      options: ["$1$ minus sannsynligheten for «ingen ess»", "Summen av sannsynlighetene for 1, 2, 3 og 4 ess hver for seg", "Sannsynligheten for «nøyaktig ett ess» alene", "$\\binom{4}{1}$ delt på det totale antallet hender"],
      explanation: "«Minst én» = $1 - $ «ingen», og «ingen ess» er ett enkelt uttrykk $\\binom{48}{5}/\\binom{52}{5}$. Å summere fire tilfeller gir samme svar, men tregere.",
    },
    {
      question: "Hva er den hypergeometriske tellingen egnet for?",
      options: ["Trekk av $k$ objekter uten tilbakelegging fra to typer", "Uavhengige forsøk med konstant suksess-sannsynlighet", "Ordnede koder der samme tegn kan gjentas", "Antall permutasjoner av $n$ helt like objekter"],
      explanation: "$\\frac{\\binom{a}{x}\\binom{b}{k-x}}{\\binom{a+b}{k}}$ gjelder trekk uten tilbakelegging — velg $x$ av type 1 og $k-x$ av type 2.",
    },
    {
      question: "Hva er $\\binom{n}{k}$ lik ifølge symmetriregelen?",
      options: ["$\\binom{n}{n-k}$", "$\\binom{n-1}{k}$", "$\\binom{n}{k-1}$", "$\\binom{k}{n}$"],
      explanation: "Å velge $k$ ut er like mange måter som å velge $n-k$ bort: $\\binom{n}{k}=\\binom{n}{n-k}$.",
    },
    {
      question: "Hvor mange delmengder har en mengde med 6 elementer?",
      options: ["$2^6 = 64$", "$6! = 720$", "$6^2 = 36$", "$\\binom{6}{3} = 20$"],
      explanation: "Hvert element er enten med eller ikke, så $2^6=64$ delmengder totalt (inkludert den tomme og hele mengden).",
    },
    {
      question: "Gull, sølv og bronse skal deles ut blant 8 løpere. Hvor mange utfall?",
      options: ["$8 \\cdot 7 \\cdot 6 = 336$", "$\\binom{8}{3} = 56$", "$8^3 = 512$", "$3^8 = 6561$"],
      explanation: "Medaljene er forskjellige, så rekkefølgen teller: ordnet uten tilbakelegging, $8\\cdot 7\\cdot 6=336$.",
    },
    {
      question: "Hva er $0!$ definert som?",
      options: ["$1$", "$0$", "Udefinert", "Uendelig"],
      explanation: "$0!=1$ per konvensjon; det trengs for at $\\binom{n}{k}=\\frac{n!}{k!(n-k)!}$ skal stemme, f.eks. $\\binom{n}{n}=1$.",
    },
    {
      question: "Hvor mange ulike ord kan lages av bokstavene i ordet KATT (K,A,T,T)?",
      options: ["$\\frac{4!}{2!} = 12$", "$4! = 24$", "$\\binom{4}{2} = 6$", "$4^2 = 16$"],
      explanation: "Fire bokstaver med T gjentatt to ganger: $\\frac{4!}{2!}=12$. Full $4!$ teller de to T-ene som forskjellige.",
    },
    {
      question: "En urne har 20 komponenter, 5 defekte. Ved trekk av 6 uten tilbakelegging, hva er $P(\\text{nøyaktig 2 defekte})$?",
      options: ["$\\frac{\\binom{5}{2}\\binom{15}{4}}{\\binom{20}{6}} \\approx 0{,}35$", "$\\binom{6}{2}(0{,}25)^2(0{,}75)^4 \\approx 0{,}30$", "$\\frac{\\binom{5}{2}}{\\binom{20}{6}} \\approx 0{,}0003$", "$\\frac{\\binom{15}{4}}{\\binom{20}{6}} \\approx 0{,}035$"],
      explanation: "Velg 2 av 5 defekte og 4 av 15 hele, delt på alle måter å velge 6 av 20: $\\frac{10\\cdot 1365}{38760}\\approx 0{,}352$.",
    },
  ],
  'tma4245-1-3': [
    {
      question: "Hva er definisjonen av betinget sannsynlighet $P(A \\mid B)$?",
      options: ["$P(A \\cap B) / P(B)$ når $P(B) > 0$", "$P(A \\cap B) / P(A)$ når $P(A) > 0$", "$P(A) \\cdot P(B)$ for de to hendelsene", "$P(A) + P(B) - P(A \\cap B)$ generelt"],
      explanation: "Vi krymper utfallsrommet til $B$ og spør hvor stor andel som også er $A$: $P(A\\cap B)/P(B)$.",
    },
    {
      question: "Hva sier multiplikasjonsregelen for snittet $P(A \\cap B)$?",
      options: ["$P(A \\mid B)\\,P(B)$", "$P(A \\mid B) / P(B)$", "$P(A) + P(B) - 1$", "$P(A \\mid B) + P(B)$"],
      explanation: "Ganger vi over kryss i definisjonen av betinget sannsynlighet: $P(A\\cap B)=P(A\\mid B)P(B)$.",
    },
    {
      question: "Hva kjennetegner en partisjon $B_1, \\ldots, B_k$ av utfallsrommet?",
      options: ["Bitene er disjunkte og dekker hele utfallsrommet", "Bitene overlapper og dekker hele utfallsrommet", "Bitene har alle nøyaktig samme sannsynlighet", "Bitene er uavhengige av hverandre parvis"],
      explanation: "En partisjon deler $S$ i disjunkte hendelser som til sammen dekker alt — nøyaktig én inntreffer alltid.",
    },
    {
      question: "Hva sier loven om total sannsynlighet?",
      options: ["$P(A) = \\sum_i P(A \\mid B_i)P(B_i)$ over en partisjon", "$P(A) = \\sum_i P(A \\mid B_i)$ over en partisjon", "$P(A) = \\prod_i P(A \\mid B_i)P(B_i)$ over en partisjon", "$P(A) = \\max_i P(A \\mid B_i)P(B_i)$ over en partisjon"],
      explanation: "Vi veier hver betinget sannsynlighet med scenariets sannsynlighet og summerer over partisjonen.",
    },
    {
      question: "Hva gjør Bayes' formel?",
      options: ["Snur betingingen fra $P(A \\mid B_j)$ til $P(B_j \\mid A)$", "Regner ut snittet av to uavhengige hendelser", "Finner unionen av alle biter i en partisjon", "Gir sannsynligheten for komplementet $P(A^c)$"],
      explanation: "Bayes uttrykker $P(B_j\\mid A)$ ved de kjente $P(A\\mid B_i)$ og $P(B_i)$ — den snur retningen på betingingen.",
    },
    {
      question: "Hva er sensitiviteten til en diagnostisk test?",
      options: ["$P(T \\mid S)$ — positiv test gitt at tilstanden er til stede", "$P(S \\mid T)$ — tilstanden til stede gitt positiv test", "$P(T^c \\mid S^c)$ — negativ test gitt frisk", "$P(S)$ — andelen syke i populasjonen"],
      explanation: "Sensitiviteten måler testens evne til å fange opp de syke: $P(T\\mid S)$.",
    },
    {
      question: "Hva er spesifisiteten til en test?",
      options: ["$P(T^c \\mid S^c)$ — negativ test gitt at tilstanden ikke foreligger", "$P(T \\mid S)$ — positiv test gitt at tilstanden foreligger her", "$P(S^c \\mid T^c)$ — frisk person gitt at testen er negativ", "$1 - P(S)$ — andelen friske individer i hele populasjonen"],
      explanation: "Spesifisiteten måler evnen til å frikjenne de friske: $P(T^c\\mid S^c)$. Falsk positiv rate er $1$ minus dette.",
    },
    {
      question: "Sensitivitet $0{,}82$, falsk positiv $0{,}04$, prevalens $0{,}02$. Hva er $P(\\text{positiv test})$?",
      options: ["$0{,}0556$", "$0{,}0164$", "$0{,}8200$", "$0{,}2950$"],
      explanation: "Total sannsynlighet: $0{,}82\\cdot 0{,}02 + 0{,}04\\cdot 0{,}98 = 0{,}0164+0{,}0392=0{,}0556$.",
    },
    {
      question: "Samme test (sens $0{,}82$, FP $0{,}04$, prev $0{,}02$). Hva er PPV $= P(S \\mid T)$?",
      options: ["$\\approx 0{,}295$", "$\\approx 0{,}820$", "$\\approx 0{,}960$", "$\\approx 0{,}056$"],
      explanation: "Bayes: $0{,}0164/0{,}0556\\approx 0{,}295$. Den lave prevalensen gjør PPV mye lavere enn sensitiviteten.",
    },
    {
      question: "Hvorfor kan PPV bli lav selv med høy sensitivitet og spesifisitet?",
      options: ["Fordi lav prevalens gir mange falske positive blant de mange friske", "Fordi høy sensitivitet alltid gir mange falske negative", "Fordi spesifisiteten ikke påvirker testresultatet i det hele tatt", "Fordi Bayes' formel undervurderer de ekte positive systematisk"],
      explanation: "Er tilstanden sjelden, gir de mange friske (via en liten falsk-positiv rate) flere falske enn ekte positive.",
    },
    {
      question: "Prosecutor's fallacy er å:",
      options: ["forveksle $P(A \\mid B)$ med $P(B \\mid A)$", "glemme å normalisere med total sannsynlighet", "anta at to hendelser er disjunkte", "bruke uniform modell der den ikke gjelder"],
      explanation: "Feilslutningen forveksler «testutslag gitt sykdom» med «sykdom gitt testutslag» — Bayes kobler dem, men de er ulike.",
    },
    {
      question: "Når er $A$ og $B$ uavhengige, uttrykt ved betinging?",
      options: ["Når $P(A \\mid B) = P(A)$", "Når $P(A \\mid B) = P(B)$", "Når $P(A \\mid B) = 0$", "Når $P(A \\mid B) = 1 - P(A)$"],
      explanation: "Uavhengighet betyr at betingingen ikke endrer sannsynligheten: $P(A\\mid B)=P(A)$.",
    },
    {
      question: "To kort trekkes uten tilbakelegging (4 ess av 52). Hva er $P(\\text{begge ess})$?",
      options: ["$\\frac{4}{52}\\cdot\\frac{3}{51} \\approx 0{,}0045$", "$\\frac{4}{52}\\cdot\\frac{4}{52} \\approx 0{,}0059$", "$\\frac{4}{52}+\\frac{3}{51} \\approx 0{,}136$", "$\\frac{4}{52}\\cdot\\frac{3}{52} \\approx 0{,}0044$"],
      explanation: "Multiplikasjonsregelen: $P(A_1)P(A_2\\mid A_1)=\\frac{4}{52}\\cdot\\frac{3}{51}$; etter ett ess er 3 igjen av 51.",
    },
    {
      question: "Falsk positiv rate er lik hva?",
      options: ["$1 - \\text{spesifisitet}$", "$1 - \\text{sensitivitet}$", "$1 - \\text{prevalens}$", "$1 - \\text{PPV}$"],
      explanation: "Falsk positiv rate er $P(T\\mid S^c)=1-P(T^c\\mid S^c)=1-\\text{spesifisitet}$.",
    },
    {
      question: "Hva er a priori-sannsynligheten i en diagnostisk oppgave?",
      options: ["Prevalensen $P(S)$ — sannsynligheten før testresultatet er kjent", "PPV $P(S \\mid T)$ — sannsynligheten etter positiv test", "Sensitiviteten $P(T \\mid S)$ til testen", "Nevneren $P(T)$ fra total sannsynlighet"],
      explanation: "A priori (på forhånd) er prevalensen $P(S)$; a posteriori er den oppdaterte $P(S\\mid T)$.",
    },
    {
      question: "60 % av varer fra linje 1 (2 % feil), 40 % fra linje 2 (5 % feil). Hva er $P(\\text{defekt})$?",
      options: ["$0{,}032$", "$0{,}070$", "$0{,}035$", "$0{,}020$"],
      explanation: "Total sannsynlighet: $0{,}02\\cdot 0{,}6 + 0{,}05\\cdot 0{,}4 = 0{,}012+0{,}020=0{,}032$.",
    },
    {
      question: "Samme linjer. En vare er defekt. Hva er $P(\\text{fra linje 2} \\mid \\text{defekt})$?",
      options: ["$0{,}625$", "$0{,}400$", "$0{,}050$", "$0{,}375$"],
      explanation: "Bayes: $\\frac{0{,}05\\cdot 0{,}4}{0{,}032}=\\frac{0{,}020}{0{,}032}=0{,}625$ — linje 2 dominerer de defekte.",
    },
    {
      question: "Hvorfor understreker sensor at hendelsene skal defineres med symboler før regning?",
      options: ["Fordi et svar uten definerte hendelser regnes som ufullstendig", "Fordi symboler gjør at Bayes' formel gir et annet svar", "Fordi definisjonen erstatter behovet for total sannsynlighet", "Fordi det bare er et krav i flervalgsoppgaver på Inspera"],
      explanation: "Fasit begynner alltid med «La $S=\\ldots$, $T=\\ldots$»; uten dette trekkes det for ufullstendig føring.",
    },
    {
      question: "Ved lav prevalens er den negative prediktive verdien (NPV) typisk:",
      options: ["svært høy — en negativ test er nesten alltid korrekt", "svært lav — en negativ test er nesten alltid feil", "alltid lik den positive prediktive verdien", "uavhengig av både sensitivitet og prevalens"],
      explanation: "Når nesten alle er friske, er en negativ test nesten alltid riktig, så NPV blir høy — mens PPV kan bli lav.",
    },
    {
      question: "Gjelder $P(A \\mid B) + P(A \\mid B^c) = 1$ generelt?",
      options: ["Nei — men $P(A \\mid B) + P(A^c \\mid B) = 1$ gjelder alltid", "Ja — summen er alltid 1 uansett hendelser", "Ja, forutsatt at $A$ og $B$ er uavhengige", "Nei, og heller ikke $P(A \\mid B) + P(A^c \\mid B) = 1$"],
      explanation: "Betinger vi på samme $B$ og varierer første hendelse, summerer det til 1. Å bytte betingelsen ($B$ mot $B^c$) gjør det ikke.",
    },
  ],
  'tma4245-1-4': [
    {
      question: "Hva er divisoren i den empiriske variansen $s^2$?",
      options: ["$n-1$, altså antall frihetsgrader", "$n$, altså antall observasjoner", "$n+1$, altså én mer enn antallet", "$n-2$, som i lineær regresjon"],
      explanation: "$s^2=\\frac{1}{n-1}\\sum(x_i-\\bar{x})^2$ — vi deler på $n-1$ fordi én frihetsgrad er brukt på $\\bar{x}$.",
    },
    {
      question: "Hvilket sentralmål er mest robust mot uteliggere?",
      options: ["Medianen, som bare avhenger av midtposisjonen", "Gjennomsnittet, som bruker alle verdiene likt", "Standardavviket, som måler typisk avstand", "Summen, som legger sammen alle tallene"],
      explanation: "Medianen påvirkes ikke av hvor ekstreme ytterverdiene er; gjennomsnittet trekkes mot dem.",
    },
    {
      question: "Hva viser streken inne i boksen i et boksplott?",
      options: ["Medianen ($Q_2$) til datasettet", "Gjennomsnittet til datasettet", "Den største observasjonen under uteliggergrensen", "Standardavviket regnet fra kvartilene"],
      explanation: "Boksstreken er medianen. Å lese den som gjennomsnitt er en vanlig feil.",
    },
    {
      question: "I en høyreskjev fordeling gjelder hvilken sammenheng?",
      options: ["$\\bar{x} > \\text{median}$", "$\\bar{x} < \\text{median}$", "$\\bar{x} = \\text{median}$", "$\\bar{x} = 0$"],
      explanation: "Den lange høyrehalen trekker gjennomsnittet over medianen; halen peker i skjevhetens retning.",
    },
    {
      question: "Hva betyr det at punktene i et Q-Q-plott ligger på en tilnærmet rett linje?",
      options: ["Dataene er forenlige med en normalfordeling", "Dataene er sterkt høyreskjeve", "Dataene har en tydelig uteligger", "Dataene har to atskilte topper"],
      explanation: "Rett linje i Q-Q-plottet betyr at observerte og teoretiske normalkvantiler står i fast forhold — forenlig med normal.",
    },
    {
      question: "Hva er interkvartilbredden IQR?",
      options: ["$Q_3 - Q_1$, spennet til den midterste halvparten", "$Q_3 + Q_1$, summen av de to kvartilene", "$\\text{maks} - \\text{min}$, hele variasjonsbredden", "$Q_2 - Q_1$, avstanden opp til medianen"],
      explanation: "IQR $=Q_3-Q_1$ dekker de midterste 50 % og er robust mot uteliggere.",
    },
    {
      question: "Datasettet 42, 47, 51, 53, 58, 61, 64, 70 har hvilket gjennomsnitt?",
      options: ["$55{,}75$", "$55{,}50$", "$53{,}00$", "$58{,}00$"],
      explanation: "Summen er $446$, delt på $8$ gir $55{,}75$. $55{,}50$ er medianen, ikke gjennomsnittet.",
    },
    {
      question: "Samme datasett (n=8). Hva er medianen?",
      options: ["$55{,}5$", "$55{,}75$", "$53$", "$58$"],
      explanation: "For $n$ partall er medianen snittet av 4. og 5. verdi: $(53+58)/2=55{,}5$.",
    },
    {
      question: "Hvorfor foretrekkes standardavviket $s$ ofte framfor variansen $s^2$ ved tolkning?",
      options: ["Fordi $s$ har samme enhet som dataene", "Fordi $s$ alltid er større enn $s^2$", "Fordi $s$ ikke påvirkes av uteliggere", "Fordi $s$ deler på $n$ i stedet for $n-1$"],
      explanation: "$s=\\sqrt{s^2}$ har samme enhet (timer, mm) og kan tolkes som en typisk avstand fra gjennomsnittet.",
    },
    {
      question: "Hva kjennetegner en uteligger i et boksplott?",
      options: ["En verdi lenger enn $1{,}5\\cdot\\text{IQR}$ utenfor kvartilene", "En verdi som ligger nøyaktig på medianstreken", "En verdi mellom $Q_1$ og $Q_3$ i boksen", "Den nest største verdien i datasettet"],
      explanation: "Uteliggere markeres som egne punkter utenfor værhårene, definert via $1{,}5\\cdot\\text{IQR}$-regelen.",
    },
    {
      question: "En bimodal fordeling (to topper) i et histogram tyder ofte på at:",
      options: ["dataene består av to blandede grupper", "dataene er perfekt normalfordelte", "variansen er lik null i datasettet", "alle observasjonene har samme verdi"],
      explanation: "To tydelige topper signaliserer ofte to underliggende grupper med ulikt nivå — vurder å analysere dem hver for seg.",
    },
    {
      question: "Hva krever sensor av en grafisk tolkning?",
      options: ["At den begrunnes i et konkret mønster, ikke «ser bra ut»", "At man oppgir standardavviket med tre desimaler", "At man alltid fjerner uteliggere før tolkning", "At man tegner figuren på nytt for hånd"],
      explanation: "Grafiske konklusjoner må forankres i mønstre som «spredningen øker med nivået», aldri i vage vurderinger.",
    },
    {
      question: "Hvordan finner du nedre kvartil $Q_1$?",
      options: ["Som medianen av den nedre halvdelen av de sorterte dataene", "Som gjennomsnittet av de to minste verdiene", "Som verdien nøyaktig midt mellom min og median", "Som den minste verdien pluss én fjerdedel av spennet"],
      explanation: "$Q_1$ er medianen i nedre halvdel; $Q_3$ er medianen i øvre halvdel.",
    },
    {
      question: "En oppadbøyd øvre hale i et Q-Q-plott (punktene bøyer over linja) tyder på:",
      options: ["en tyngre høyrehale enn normalt (høyreskjevhet)", "en tyngre venstrehale enn normalt", "at dataene er helt symmetriske", "at datasettet er for lite til å vurdere"],
      explanation: "Når de største observerte kvantilene ligger over normallinja, er høyrehalen tyngre enn normalfordelingen tilsier.",
    },
    {
      question: "Empirisk korrelasjon nær 0 betyr at variablene:",
      options: ["ikke har noen lineær sammenheng (men kan ha en krum)", "er helt uavhengige i enhver forstand", "har en sterk negativ sammenheng", "alltid er nøyaktig like store"],
      explanation: "Korrelasjon måler bare lineær sammenheng; en tydelig krum trend kan gi korrelasjon nær 0. Vurder mot spredningsplottet.",
    },
  ],
  'tma4245-10-1': [
    {
      question: "Kan to hendelser med $P(A)=0{,}3$ og $P(B)=0{,}8$ være disjunkte?",
      options: ["Nei, summen blir 1,1, og disjunkte hendelser har alltid sum høyst 1", "Ja, disjunkthet avhenger ikke av de enkelte sannsynlighetene her", "Ja, forutsatt at hendelsene ikke også er uavhengige av hverandre", "Det kan ikke avgjøres uten å kjenne verdien av $P(A\\cap B)$ først"],
      explanation: "Disjunkte hendelser har $P(A\\cup B)=P(A)+P(B)\\le 1$. Er summen 1,1 må hendelsene overlappe.",
    },
    {
      question: "Hva er $P(X=3)$ for en kontinuerlig stokastisk variabel $X$?",
      options: ["0, siden en enkeltverdi har sannsynlighet null når $X$ er kontinuerlig", "$f(3)$, altså verdien av tettheten $f$ evaluert i punktet $x=3$", "1, siden variabelen med sikkerhet antar en verdi et eller annet sted", "Avhenger av om tettheten $f(3)$ er større eller mindre enn tallet 1"],
      explanation: "For kontinuerlige variable er sannsynlighet areal; et enkeltpunkt har bredde null, så $P(X=x)=0$.",
    },
    {
      question: "Kan en sannsynlighetstetthet $f(x)$ anta verdier større enn 1?",
      options: ["Ja, en tetthet må bare være ikke-negativ og integrere til tallet 1", "Nei, en tetthet er en sannsynlighet og kan derfor aldri overstige 1", "Bare når fordelingen er diskret, men aldri for en kontinuerlig type", "Nei, med mindre variabelen er definert på et helt uendelig intervall"],
      explanation: "Tetthet er sannsynlighet per lengdeenhet, ikke sannsynlighet. Kravene er $f\\ge 0$ og totalareal 1.",
    },
    {
      question: "Hva er standardavviket når $X\\sim N(100,\\,25)$?",
      options: ["5, siden det andre argumentet er variansen og $\\sqrt{25}=5$", "25, siden det andre argumentet oppgir standardavviket direkte", "625, siden standardavviket er kvadratet av det andre argumentet", "10, siden standardavviket er halvparten av variansen i dette tilfellet"],
      explanation: "I $N(\\mu,\\sigma^2)$ er annet argument variansen. Standardavviket er $\\sigma=\\sqrt{25}=5$.",
    },
    {
      question: "Hvilken divisor skal brukes i den empiriske variansen $s^2$?",
      options: ["$n-1$, fordi gjennomsnittet allerede er estimert fra dataene", "$n$, fordi vi tar et gjennomsnitt av de kvadrerte avvikene", "$n+1$, for å korrigere for at utvalget er av endelig størrelse", "$n-2$, fordi både gjennomsnitt og varians estimeres samtidig"],
      explanation: "$s^2=\\frac{1}{n-1}\\sum(x_i-\\bar{x})^2$. Divisoren $n-1$ er frihetsgradene.",
    },
    {
      question: "Hva er $\\text{Var}(X-Y)$ når $X,Y$ er uavhengige med $\\text{Var}(X)=4$, $\\text{Var}(Y)=9$?",
      options: ["13, fordi variansene adderes også for en differanse", "$-5$, fordi variansen til en differanse er differansen av variansene", "5, siden man trekker den minste variansen fra den største verdien", "6,5, siden variansen til en differanse er gjennomsnittet av de to"],
      explanation: "$\\text{Var}(X-Y)=\\text{Var}(X)+\\text{Var}(Y)=13$ for uavhengige variable; en varians kan aldri bli negativ.",
    },
    {
      question: "Når må kovariansleddet være med i $\\text{Var}(aX+bY)$?",
      options: ["Når $X$ og $Y$ er korrelerte; ved uavhengighet faller leddet bort", "Alltid, uansett om variablene er uavhengige av hverandre eller ikke", "Aldri, siden variansen av en sum bare er summen av variansene", "Bare når koeffisientene $a$ og $b$ har nøyaktig samme fortegn"],
      explanation: "$\\text{Var}(aX+bY)=a^2\\text{Var}(X)+b^2\\text{Var}(Y)+2ab\\,\\text{Cov}(X,Y)$; ved uavhengighet er kovariansen 0.",
    },
    {
      question: "Hvilken fordeling er minneløs, altså $P(X>s+t\\mid X>s)=P(X>t)$?",
      options: ["Eksponensialfordelingen, som den eneste kontinuerlige fordelingen", "Weibullfordelingen, helt uavhengig av verdien på formparameteren", "Normalfordelingen, siden den er symmetrisk om sin forventningsverdi", "Alle levetidsfordelinger, som en helt generell og gjennomgående regel"],
      explanation: "Minneløshet er unik for eksponensialfordelingen. En Weibull med formparameter ulik 1 aldres.",
    },
    {
      question: "Hva betyr det at et konfidensintervall har dekningsgrad 95 %?",
      options: ["At metoden fanger den sanne parameteren i 95 % av gjentatte forsøk", "At det utregnede intervallet inneholder $\\mu$ med sannsynlighet 0,95", "At 95 % av de målte observasjonene ligger inne i det gitte intervallet", "At parameteren $\\mu$ er tilfeldig og ligger i intervallet 95 % av tiden"],
      explanation: "95 % er en egenskap ved metoden over gjentatte forsøk. Etter utregning ligger $\\mu$ enten inni eller utenfor.",
    },
    {
      question: "En tosidig test gir p-verdi 0,03 ved signifikansnivå $\\alpha=0{,}05$. Hva gjør vi?",
      options: ["Forkaster $H_0$, siden p-verdien er mindre enn signifikansnivået", "Beholder $H_0$, siden p-verdien tross alt er ganske liten og nær null", "Kan ikke konkludere før vi også kjenner den faktiske styrken til testen", "Forkaster $H_0$ kun dersom testen i tillegg viser seg å være ensidig"],
      explanation: "Beslutningsregelen er å forkaste $H_0$ når $p<\\alpha$. Her er $0{,}03<0{,}05$.",
    },
    {
      question: "Hva er den riktige tolkningen av en p-verdi?",
      options: ["Sannsynligheten, under $H_0$, for et minst like ekstremt utfall som observert", "Sannsynligheten for at nullhypotesen $H_0$ faktisk er en sann hypotese", "Sannsynligheten for at vi tar feil dersom vi velger å forkaste $H_0$", "Sannsynligheten for at alternativhypotesen $H_1$ er den som er riktig"],
      explanation: "p-verdien er en sannsynlighet for dataene gitt $H_0$ — ikke for $H_0$ selv. Feilsannsynligheten ved forkasting er $\\alpha$.",
    },
    {
      question: "Hvordan bør et parret design med målinger før og etter på samme enhet analyseres?",
      options: ["Med en t-test på differansene $D_i$, med $n-1$ frihetsgrader", "Som to uavhengige utvalg med pooled varians og $n_1+n_2-2$ frihetsgrader", "Ved å sammenligne de to gruppegjennomsnittene direkte uten differanser", "Med en z-test, siden parringen gjør standardavviket kjent på forhånd"],
      explanation: "Parring gir naturlige par; vi reduserer til ett utvalg av differanser og bruker $t_{n-1}$.",
    },
    {
      question: "Hva skiller et prediksjonsintervall (PI) fra et konfidensintervall (KI) i regresjon?",
      options: ["PI har et ekstra $1$-tall under rota og er derfor alltid bredere", "PI bruker $t_{n-1}$ mens KI bruker $t_{n-2}$ som antall frihetsgrader", "KI gjelder en ny enkeltmåling, mens PI gjelder den forventede responsen", "PI er alltid smalere fordi det bare gjelder én enkelt ny observasjon"],
      explanation: "PI legger til den nye målingens eget feilledd ($1$-tallet under rota) og er bredere. «Ny måling» → PI.",
    },
    {
      question: "En ingeniør skal angi et intervall for neste enkeltmåling ved en gitt $x_0$. Hvilket?",
      options: ["Prediksjonsintervallet, siden en ny observasjon har sitt eget feilledd", "Konfidensintervallet, siden det gjelder responsverdien ved denne $x_0$", "Begge fungerer likt, siden de gir samme bredde ved en gitt verdi $x_0$", "Konfidensintervallet, siden det alltid er det bredeste av de to typene"],
      explanation: "«Neste enkeltmåling» krever prediksjonsintervall; det ekstra feilleddet gjør det bredere enn KI.",
    },
    {
      question: "Hva viser en oppadbøyd øvre hale i et Q-Q-plott mot normalfordelingen?",
      options: ["En tyngre høyrehale enn normalt, altså at dataene er høyreskjeve", "At dataene er perfekt normalfordelte langs hele måleskalaen sin", "En tyngre venstrehale enn normalt, altså at dataene er venstreskjeve", "At variansen i dataene er nøyaktig lik tallet 1 oppe i den øvre halen"],
      explanation: "Ligger punktene på en rett linje, er dataene normale; en øvre hale som bøyer opp betyr høyreskjevhet.",
    },
  ],
  'tma4245-10-2': [
    {
      question: "På Inspera-kortsvarene i Øvingseksamen 1 rettes kun tallsvaret. Hva er den tryggeste regnestrategien?",
      options: ["Behold full presisjon underveis, og avrund bare det endelige svaret til to desimaler.", "Avrund hvert mellomledd til to desimaler slik at tallene blir enklere å håndtere videre.", "Oppgi svaret som en eksakt brøk eller et symbolsk uttrykk uten å regne det ut numerisk.", "Rund av både standardavviket og forventningen til nærmeste heltall før du standardiserer."],
      explanation: "Avrunding underveis forplanter seg til siste desimal og kan gjøre et autorettet svar galt. Behold full presisjon og avrund kun til slutt.",
    },
    {
      question: "I Oppgave 1 er $T=X+Y$ for korrelerte normale variable. Hvorfor er kovariansleddet avgjørende?",
      options: ["Fordi $\\text{Var}(X+Y)$ inneholder $2\\,\\text{Cov}(X,Y)$, som endrer variansen og dermed tallsvaret.", "Fordi kovariansleddet flytter forventningen $E(T)$ og gir en feil sentrering av hele fordelingen.", "Fordi summen $X+Y$ uten kovariansleddet ikke lenger er normalfordelt, men bare tilnærmet normal.", "Fordi kovariansen avgjør om variablene er disjunkte, noe som igjen bestemmer om de kan summeres."],
      explanation: "Kovariansen inngår kun i variansen (ikke forventningen). Er den positiv og glemmes, blir variansen for liten og tallsvaret galt.",
    },
    {
      question: "En Poisson-prosess har rate $0{,}5$ per km. Hva er riktig parameter for antall hendelser på $6$ km?",
      options: ["$\\lambda t=0{,}5\\cdot6=3$, fordi raten skaleres opp til lengden på intervallet.", "$\\lambda=0{,}5$, fordi raten er en fast egenskap ved prosessen uansett intervall.", "$\\lambda t=6/0{,}5=12$, fordi man deler lengden på raten for å finne parameteren.", "$\\lambda t=0{,}5+6=6{,}5$, fordi rate og lengde legges sammen til én felles parameter."],
      explanation: "For en Poisson-prosess er forventet antall $\\lambda t$ — raten ganges med intervallets størrelse.",
    },
    {
      question: "For eksponensialdata brukes pivotalen $2\\sum X_i/\\theta$. Hvilken fordeling og frihetsgrad har den?",
      options: ["$\\chi^2_{2n}$ — hver observasjon gir to frihetsgrader via faktoren 2.", "$\\chi^2_{n}$ — antall frihetsgrader er lik antall observasjoner i utvalget.", "$\\chi^2_{n-1}$ — én frihetsgrad tapes fordi forventningen må estimeres.", "$\\chi^2_{n-2}$ — to frihetsgrader tapes akkurat som i regresjonsmodellen."],
      explanation: "Eksponensialens kjikvadrat-pivotal har $2n$ frihetsgrader; $\\chi^2_n$ og $\\chi^2_{n-1}$ er de klassiske fellene.",
    },
    {
      question: "I Oppgave 7 spørres det om forbruket på ett nytt døgn. Hvilket intervall skal brukes?",
      options: ["Prediksjonsintervall (PI), med $1$-tallet for den nye observasjonens eget feilledd.", "Konfidensintervall for forventningen $E(Y_0)$, siden vi anslår responsen ved en gitt $x_0$-verdi.", "Konfidensintervall for helningen $\\beta$, siden det nettopp er $\\beta$ som styrer prediksjonen.", "Et intervall uten frihetsgrader i det hele tatt, fordi en enkeltmåling ikke har utvalgsvarians."],
      explanation: "«Én ny observasjon» krever PI, som legger til den nye målingens $\\varepsilon_0$ ($1$-tallet). KI for forventningen mangler dette leddet.",
    },
  ],
  'tma4245-10-3': [
    {
      question: "På et papirsett der alle delpunkter teller likt — hva er beste tidsstrategi?",
      options: ["Sikre de tidlige og enklere delpunktene i hver oppgave før du bryner deg på det tunge.", "Bruk mesteparten av tiden på det aller vanskeligste delpunktet siden det gir flest poeng.", "Løs oppgavene strengt i rekkefølge, og gå aldri videre før én oppgave er fullstendig ferdig.", "Hopp helt over de delpunktene som krever begrunnelse, og ta kun de rene regnepunktene først."],
      explanation: "Når delpunktene teller likt, gir de billige punktene mest uttelling per minutt. Ikke grav deg ned i ett tungt punkt.",
    },
    {
      question: "En test gir positivt utslag. Oppgaven spør om planten faktisk er infisert. Hvilken størrelse er dette?",
      options: ["$P(S\\mid T)$ — infeksjon gitt positivt utslag, funnet med Bayes' formel.", "$P(T\\mid S)$ — sensitiviteten, altså sannsynligheten for positivt utslag gitt at planten er infisert.", "$P(T)$ — den totale sannsynligheten for et positivt utslag i hele plantepopulasjonen sett under ett.", "$P(S)$ — prevalensen, altså andelen infiserte planter uavhengig av hva testen viser."],
      explanation: "«Faktisk infisert gitt positiv» er $P(S\\mid T)$. Å bruke $P(T\\mid S)$ er den klassiske forvekslingen (prosecutor's fallacy).",
    },
    {
      question: "To komponenter i parallell, systemet virker om minst én virker. Hvilken ordningsvariabel gir levetiden?",
      options: ["$\\max(X_1,X_2)$ — systemet lever til den sist fungerende komponenten svikter.", "$\\min(X_1,X_2)$ — systemet svikter i samme øyeblikk som den første komponenten svikter.", "$X_1+X_2$ — levetidene summeres fordi begge komponentene bidrar til systemets samlede levetid.", "$(X_1+X_2)/2$ — systemets levetid er gjennomsnittet av de to komponentenes levetider."],
      explanation: "Parallell (minst én virker) gir $\\max$; serie (alle må virke) gir $\\min$. Å bytte om er en vanlig felle.",
    },
    {
      question: "Den parrede $t$-testen og fortegnstesten spriker i styrke. Hva forklarer forskjellen?",
      options: ["Fortegnstesten bruker bare fortegnet og kaster informasjon, så den har lavere styrke.", "Fortegnstesten bruker størrelsen på differansene, og har derfor høyere styrke enn $t$-testen.", "$t$-testen er alltid feil på små utvalg, mens fortegnstesten alltid er den korrekte å bruke.", "De to testene svarer på helt ulike hypoteser, så resultatene kan ikke sammenlignes i det hele tatt."],
      explanation: "Fortegnstesten bruker bare fortegnet og ofrer styrke for robusthet; $t$-testen utnytter størrelsen (men forutsetter tilnærmet normalitet).",
    },
    {
      question: "Du skal estimere styrken til en test ved Monte Carlo. Hva må gjelde for datasettene du trekker?",
      options: ["De trekkes under alternativet, og styrken er andelen der $H_0$ forkastes.", "De trekkes under $H_0$, og styrken er andelen datasett der $H_0$ blir forkastet av testen.", "De trekkes under $H_0$, og styrken er andelen datasett der $H_0$ blir beholdt av testen.", "De trekkes under alternativet, og styrken er den gjennomsnittlige p-verdien over alle datasettene."],
      explanation: "Styrke = sannsynlighet for å forkaste når $H_0$ er falsk, så du simulerer under alternativet og teller forkastninger. (P-verdi simuleres derimot under $H_0$.)",
    },
  ],
  'tma4245-10-4': [
    {
      question: "Oppgave 2 gir en ukjent ekstremverdifordeling med oppgitt CDF. Hva er riktig tilnærming?",
      options: ["Bruk standardteknikkene på oppgitt CDF — CDF-regning, kvantil, ML og pivotal — uansett navn.", "Slå opp fordelingen i formelsamlingen, for der står alle de relevante fordelingene oppført.", "Tilnærm fordelingen med en normalfordeling, siden ekstremverdier alltid er tilnærmet normale.", "Anta at fordelingen er eksponensiell, ettersom CDF-en inneholder en eksponentialfunksjon."],
      explanation: "En oppskriftsfordeling løses med de vanlige teknikkene på oppgitt CDF/tetthet; navnet er uvesentlig. Den står ikke i formelsamlingen.",
    },
    {
      question: "Et $95\\,\\%$ KI for en forventning ble $(33,\\ 39)$. Hvilken tolkning er korrekt?",
      options: ["Gjentar vi prosedyren mange ganger, dekker ca. $95\\,\\%$ av intervallene den sanne forventningen.", "Det er $95\\,\\%$ sannsynlighet for at den sanne forventningen ligger et sted mellom $33$ og $39$.", "Omtrent $95\\,\\%$ av de observerte målingene i datasettet ligger mellom $33$ og $39$ enheter.", "Omtrent $95\\,\\%$ av framtidige enkeltmålinger vil falle innenfor intervallet fra $33$ til $39$."],
      explanation: "Konfidensnivået er en egenskap ved metoden over gjentatte utvalg. De tre andre er de klassiske feiltolkningene.",
    },
    {
      question: "To uavhengige datakilder deler parameter $\\beta$. Hvilken frihetsgrad har den kombinerte pivotalen?",
      options: ["$2(n_1+n_2)$ — frihetsgradene fra hver kilde legges sammen når kjikvadratene summeres.", "$2\\max(n_1,n_2)$ — den største av de to kildene bestemmer frihetsgraden helt alene.", "$2n_1+2n_2-2$ — to frihetsgrader tapes fordi $\\beta$ er en felles parameter for kildene.", "$2\\sqrt{n_1 n_2}$ — frihetsgraden blir et geometrisk snitt av de to kildenes størrelser."],
      explanation: "Uavhengige kjikvadrater summeres og frihetsgradene adderes, så pivotalen er $\\chi^2_{2(n_1+n_2)}$.",
    },
    {
      question: "I deltametode-koden trekkes eksponensialdata med `np.random.exponential`. Hva må du passe på?",
      options: ["`scale` er forventningen $\\beta$ (ikke raten), og empirisk varians krever `ddof=1`.", "`scale` er raten $1/\\beta$, og empirisk varians bruker `ddof=0`, som er standardverdien.", "`scale` er variansen $\\beta^2$, og resultatet må derfor kvadreres før du sammenligner.", "`scale` må settes til $\\sqrt{\\beta}$ for at de trukne verdiene skal få riktig forventning."],
      explanation: "`np.random.exponential(scale)` har `scale` lik forventningen $\\beta$; bruk `ddof=1` for forventningsrett empirisk varians.",
    },
    {
      question: "I regresjon uten konstantledd — hvilken frihetsgrad har variansestimatoren $s^2=\\text{SSE}/?$",
      options: ["$n-1$, siden bare parameteren $\\beta$ estimeres i origo-modellen.", "$n-2$, siden det alltid tapes nøyaktig to frihetsgrader i lineær regresjon.", "$n$, siden ingen parametre skal trekkes fra når konstantleddet mangler helt.", "$n-3$, siden både helning, konstantledd og varians må estimeres samtidig."],
      explanation: "Uten konstantledd estimeres bare $\\beta$, så én frihetsgrad tapes: $s^2=\\text{SSE}/(n-1)$.",
    },
  ],
  'tma4245-2-1': [
    {
      question: "Hva er variansen uttrykt ved momentene?",
      options: ["$\\text{Var}(X)=E(X^2)-[E(X)]^2$", "$\\text{Var}(X)=[E(X)]^2-E(X^2)$", "$\\text{Var}(X)=E(X^2)-E(X)$", "$\\text{Var}(X)=E(X)-[E(X)]^2$"],
      explanation: "Regneformelen: andre moment minus kvadratet av forventningen. Rekkefølgen er $E(X^2)$ først.",
    },
    {
      question: "Hva er $P(X=3)$ for en kontinuerlig variabel $X$?",
      options: ["Alltid lik 0, uansett hvilken fordeling", "Lik tettheten $f(3)$ i det punktet", "Lik verdien $F(3)$ i det aktuelle punktet", "Lik $1-F(3)$ over det aktuelle punktet"],
      explanation: "Et enkeltpunkt har bredde null, så arealet under $f$ er null. Derfor er $P(X=x)=0$ for kontinuerlige variable.",
    },
    {
      question: "Kan en tetthet $f(x)$ ha en verdi større enn 1?",
      options: ["Ja, for tettheten er ikke en sannsynlighet", "Nei, en sannsynlighet er alltid høyst 1", "Nei, da bryter den med normeringen", "Ja, men bare for diskrete variabler"],
      explanation: "$f(x)$ er en tetthet (per lengdeenhet), ikke en sannsynlighet. Bare arealet under kurven må ligge mellom 0 og 1.",
    },
    {
      question: "Hvordan henger tetthet og fordelingsfunksjon sammen?",
      options: ["$f(x)=F'(x)$, tettheten er den deriverte", "$f(x)=F(x)$, de er den samme funksjonen", "$F(x)=f'(x)$, fordelingen er den deriverte", "$f(x)=1-F(x)$, tettheten er halen"],
      explanation: "Tettheten er den deriverte av fordelingsfunksjonen, og $F$ er integralet av $f$.",
    },
    {
      question: "Hva er $E(aX+bY)$?",
      options: ["$aE(X)+bE(Y)$, uansett avhengighet", "$aE(X)+bE(Y)$, kun ved uavhengighet", "$aE(X)+bE(Y)+2ab\\,\\text{Cov}(X,Y)$", "$a^2E(X)+b^2E(Y)$, med kvadrater"],
      explanation: "Forventning er lineær og krever ingen forutsetning om uavhengighet — kovarians spiller ingen rolle her.",
    },
    {
      question: "Hva er $\\text{Var}(aX+b)$ for konstanter $a$ og $b$?",
      options: ["$a^2\\,\\text{Var}(X)$", "$a\\,\\text{Var}(X)+b$", "$a\\,\\text{Var}(X)$", "$a^2\\,\\text{Var}(X)+b^2$"],
      explanation: "Konstantleddet $b$ flytter fordelingen uten å endre spredningen, og faktoren $a$ kommer inn kvadrert.",
    },
    {
      question: "Hva er $\\text{Var}(aX+bY)$ for to variable?",
      options: ["$a^2\\text{Var}(X)+b^2\\text{Var}(Y)+2ab\\,\\text{Cov}(X,Y)$", "$a^2\\text{Var}(X)+b^2\\text{Var}(Y)$, uansett", "$a\\text{Var}(X)+b\\text{Var}(Y)+ab\\,\\text{Cov}(X,Y)$", "$a^2\\text{Var}(X)-b^2\\text{Var}(Y)+2ab\\,\\text{Cov}$"],
      explanation: "Kovariansleddet $2ab\\,\\text{Cov}$ må med med mindre variablene er uavhengige. Da er $\\text{Cov}=0$ og leddet forsvinner.",
    },
    {
      question: "Når forsvinner kovariansleddet i $\\text{Var}(X+Y)$?",
      options: ["Når $X$ og $Y$ er uavhengige", "Når $X$ og $Y$ har lik forventning", "Når $X$ og $Y$ har lik varians", "Når $X$ og $Y$ begge er kontinuerlige"],
      explanation: "Uavhengighet gir $\\text{Cov}(X,Y)=0$, så leddet $2\\,\\text{Cov}$ blir null. Da er $\\text{Var}(X+Y)=\\text{Var}(X)+\\text{Var}(Y)$.",
    },
    {
      question: "Hva er $\\text{Var}(X-Y)$ når $X$ og $Y$ er uavhengige?",
      options: ["$\\text{Var}(X)+\\text{Var}(Y)$", "$\\text{Var}(X)-\\text{Var}(Y)$", "$\\text{Var}(X)\\cdot\\text{Var}(Y)$", "$|\\text{Var}(X)-\\text{Var}(Y)|$"],
      explanation: "Varianser legges alltid til; kvadratet på $-1$ fjerner minustegnet. Å trekke dem fra hverandre kan gi en umulig negativ varians.",
    },
    {
      question: "Hva er $E(X)$ for en diskret variabel?",
      options: ["$\\sum_x x\\,p(x)$, en vektet sum av verdiene", "$\\sum_x p(x)$, summen av sannsynlighetene", "$\\sum_x x$, summen av de mulige verdiene", "$\\sum_x x^2\\,p(x)$, vektet med kvadratene"],
      explanation: "Forventningen er hver verdi vektet med sin punktsannsynlighet. Summen av $p(x)$ alene er alltid 1.",
    },
    {
      question: "Hvordan finner du $E(X^2)$ for en diskret variabel?",
      options: ["Vekte kvadratene: $\\sum_x x^2\\,p(x)$", "Kvadrere forventningen: $[\\sum_x x\\,p(x)]^2$", "Vekte verdiene: $\\sum_x x\\,p(x)$", "Kvadrere sannsynlighetene: $\\sum_x x\\,p(x)^2$"],
      explanation: "$E[g(X)]$ vekter funksjonsverdiene med fordelingen til $X$. Med $g(x)=x^2$ blir det $\\sum x^2 p(x)$ — ikke det samme som $[E(X)]^2$.",
    },
    {
      question: "Er det generelt sant at $E(X^2)=[E(X)]^2$?",
      options: ["Nei, differansen er nettopp variansen", "Ja, det følger av lineariteten", "Ja, når variabelen er kontinuerlig", "Nei, men bare for negative verdier"],
      explanation: "$E(X^2)-[E(X)]^2=\\text{Var}(X)\\ge 0$, så de er like bare når variabelen er konstant (varians null).",
    },
    {
      question: "Hva er standardavviket $\\text{SD}(X)$?",
      options: ["Kvadratroten av variansen", "Kvadratet av variansen", "Variansen delt på forventningen", "Forventningen minus variansen"],
      explanation: "Standardavviket er $\\sqrt{\\text{Var}(X)}$ og har samme enhet som $X$, derfor lettere å tolke enn variansen.",
    },
    {
      question: "For en diskret variabel med $p(a)>0$, hva gjelder om $P(X\\le a)$ og $P(X<a)$?",
      options: ["De er forskjellige; de skiller med $p(a)$", "De er alltid like, som for kontinuerlige", "$P(X<a)$ er alltid den største av dem", "De er begge nøyaktig lik $F(a)$ i punktet"],
      explanation: "For diskrete variable teller enkeltpunktet: $P(X\\le a)=P(X<a)+p(a)$. For kontinuerlige er de like fordi $P(X=a)=0$.",
    },
    {
      question: "Hva sier lineariteten $E(aX+b)=aE(X)+b$?",
      options: ["Faktor og konstantledd flyttes rett ut", "Forventningen av et produkt er produktet", "Variansen skalerer med $a^2$ og ledd $b$", "Kovariansen mellom $X$ og $b$ må med"],
      explanation: "Forventning er en lineær operasjon: faktoren $a$ og leddet $b$ behandles direkte, uten forutsetninger.",
    },
    {
      question: "Hva er forventning og varians av en konstant $c$?",
      options: ["$E(c)=c$ og $\\text{Var}(c)=0$", "$E(c)=0$ og $\\text{Var}(c)=c$", "$E(c)=c$ og $\\text{Var}(c)=c$", "$E(c)=0$ og $\\text{Var}(c)=0$"],
      explanation: "En konstant svinger ikke, så variansen er null; forventningen er konstanten selv.",
    },
    {
      question: "Hvordan finner du forventningen til en kontinuerlig variabel?",
      options: ["$E(X)=\\int x\\,f(x)\\,dx$ over støtten", "$E(X)=\\int f(x)\\,dx$ over støtten", "$E(X)=\\int F(x)\\,dx$ over støtten", "$E(X)=\\int x\\,F(x)\\,dx$ over støtten"],
      explanation: "Forventningen er tyngdepunktet: verdien $x$ vektet med tettheten $f(x)$ og integrert over støtten.",
    },
    {
      question: "Hva er $\\text{Cov}(X,X)$?",
      options: ["Lik $\\text{Var}(X)$", "Lik 0 for alle $X$", "Lik $E(X)$", "Lik $[E(X)]^2$"],
      explanation: "Kovariansen av en variabel med seg selv er variansen: $\\text{Cov}(X,X)=E(X^2)-[E(X)]^2=\\text{Var}(X)$.",
    },
    {
      question: "En variabel har $E(X)=5$ og $\\text{Var}(X)=4$. Hva er $\\text{Var}(3X)$?",
      options: ["$36$, siden faktoren kvadreres", "$12$, siden faktoren ganges inn", "$4$, siden faktoren ikke påvirker", "$9$, siden bare faktoren kvadreres"],
      explanation: "$\\text{Var}(3X)=3^2\\cdot 4=36$. Faktoren kommer inn kvadrert; forventningen er irrelevant for variansen.",
    },
    {
      question: "Hva gjelder alltid om variansen $\\text{Var}(X)$?",
      options: ["Den er aldri negativ", "Den er alltid mindre enn 1", "Den er lik forventningen", "Den er alltid et helt tall"],
      explanation: "Variansen er forventningen til et kvadrat, $E[(X-\\mu)^2]$, og dermed $\\ge 0$. Et negativt svar avslører regnefeil.",
    },
  ],
  'tma4245-2-2': [
    {
      question: "Hvilken situasjon passer den binomiske fordelingen?",
      options: ["Fast antall uavhengige forsøk med konstant $p$", "Hendelser i tid med en konstant rate $\\lambda$", "Antall forsøk til den første suksessen kommer", "Trekk uten tilbakelegging fra liten populasjon"],
      explanation: "Binomisk krever fast $n$, to utfall, konstant $p$ og uavhengige forsøk — man teller antall suksesser.",
    },
    {
      question: "Hva er forventning og varians for $\\text{bin}(n,p)$?",
      options: ["$E=np$ og $\\text{Var}=np(1-p)$", "$E=np(1-p)$ og $\\text{Var}=np$", "$E=np$ og $\\text{Var}=np$", "$E=p$ og $\\text{Var}=p(1-p)$"],
      explanation: "En binomisk variabel er en sum av $n$ Bernoulli-forsøk, så $E=np$ og $\\text{Var}=np(1-p)$.",
    },
    {
      question: "Hvilken fordeling teller antall hendelser i et intervall med konstant rate?",
      options: ["Poisson-fordelingen", "Binomisk fordeling", "Geometrisk fordeling", "Hypergeometrisk fordeling"],
      explanation: "Poisson beskriver antall hendelser i tid/rom når hendelsene inntreffer med en konstant rate.",
    },
    {
      question: "Hva er parameteren for antall hendelser i et intervall av lengde $t$?",
      options: ["$\\lambda t$, altså raten skalert med tiden", "$\\lambda$ alene, uavhengig av intervallet", "$\\lambda/t$, altså raten delt på lengden", "$t/\\lambda$, altså lengden delt på raten"],
      explanation: "Raten $\\lambda$ gjelder per tidsenhet; for lengde $t$ er forventet antall $\\lambda t$.",
    },
    {
      question: "Hva gjelder om forventning og varians for Poisson$(\\lambda)$?",
      options: ["De er like: $E=\\text{Var}=\\lambda$", "Variansen er kvadratet av forventningen", "Forventningen er kvadratet av variansen", "Variansen er alltid mindre enn forventningen"],
      explanation: "Et kjennetegn ved Poisson er at forventning og varians begge er $\\lambda$.",
    },
    {
      question: "Hvilken forutsetning for en Poisson-prosess er korrekt?",
      options: ["Antall i disjunkte intervaller er uavhengige", "Antall i disjunkte intervaller er alltid like", "To hendelser inntreffer alltid samtidig", "Raten øker jevnt utover i intervallet"],
      explanation: "Poisson-prosessen forutsetter uavhengige disjunkte intervaller, konstant rate og ingen samtidighet.",
    },
    {
      question: "Hvilken fordeling teller antall forsøk til og med den første suksessen?",
      options: ["Geometrisk fordeling", "Binomisk fordeling", "Negativ binomisk med $k=2$", "Poisson-fordelingen"],
      explanation: "Geometrisk fordeling teller antall uavhengige forsøk til første suksess, med $E(X)=1/p$.",
    },
    {
      question: "Hva er forventet antall forsøk til første suksess i geometrisk fordeling?",
      options: ["$1/p$", "$p$", "$1-p$", "$p/(1-p)$"],
      explanation: "For geometrisk fordeling er $E(X)=1/p$: er $p=0{,}2$, venter du i snitt 5 forsøk.",
    },
    {
      question: "Hvilken fordeling teller antall forsøk til og med den $k$-te suksessen?",
      options: ["Negativ binomisk fordeling", "Binomisk fordeling", "Hypergeometrisk fordeling", "Poisson-fordelingen"],
      explanation: "Negativ binomisk teller til $k$-te suksess, med $E(X)=k/p$; geometrisk er tilfellet $k=1$.",
    },
    {
      question: "Når skal du bruke hypergeometrisk fremfor binomisk fordeling?",
      options: ["Ved trekk uten tilbakelegging fra liten populasjon", "Ved trekk med tilbakelegging fra stor populasjon", "Når antallet forsøk ikke er kjent på forhånd", "Når hendelsene skjer med konstant rate i tiden"],
      explanation: "Uten tilbakelegging endres sammensetningen for hvert trekk, så forsøkene er avhengige — da er hypergeometrisk riktig.",
    },
    {
      question: "Hvordan finner du $P(X\\ge a)$ fra en kumulativ tabell?",
      options: ["$1-P(X\\le a-1)$", "$1-P(X\\le a)$", "$P(X\\le a)-P(X\\le a-1)$", "$P(X\\le a)$ direkte fra tabellen"],
      explanation: "«Minst $a$» er komplementet til «høyst $a-1$»; pass på å slå opp $a-1$, ikke $a$.",
    },
    {
      question: "Hva gir en kumulativ tabell for en diskret variabel?",
      options: ["$P(X\\le a)$, den oppsummerte sannsynligheten", "$P(X=a)$, punktsannsynligheten i punktet $a$", "$P(X\\ge a)$, den øvre halesannsynligheten", "$P(X>a)$, den strenge øvre halen"],
      explanation: "Den kumulative tabellen gir $F(a)=P(X\\le a)$; punktsannsynlighet fås som differansen $F(a)-F(a-1)$.",
    },
    {
      question: "En Poisson-prosess har rate 6 per år. Hva er parameteren for et halvår?",
      options: ["$3$, siden $\\lambda t=6\\cdot 0{,}5$", "$6$, siden raten er den samme", "$12$, siden man dobler raten", "$1{,}5$, siden man deler på fire"],
      explanation: "Skaler raten: $\\lambda t=6\\cdot 0{,}5=3$ hendelser forventet i halvåret.",
    },
    {
      question: "Hva er $P(X=0)$ for Poisson$(\\lambda)$?",
      options: ["$e^{-\\lambda}$", "$1-e^{-\\lambda}$", "$\\lambda e^{-\\lambda}$", "$\\lambda^0/\\lambda$"],
      explanation: "Sett $x=0$ i formelen: $P(X=0)=\\lambda^0 e^{-\\lambda}/0!=e^{-\\lambda}$.",
    },
    {
      question: "Hvordan regner du «minst to» hendelser for Poisson$(\\lambda)$?",
      options: ["$1-e^{-\\lambda}-\\lambda e^{-\\lambda}$", "$e^{-\\lambda}+\\lambda e^{-\\lambda}$", "$1-e^{-\\lambda}$", "$\\lambda^2 e^{-\\lambda}/2$"],
      explanation: "«Minst to» via komplement: $1-P(X=0)-P(X=1)=1-(1+\\lambda)e^{-\\lambda}$.",
    },
    {
      question: "Hva er standardavviket for Poisson$(\\lambda)$?",
      options: ["$\\sqrt{\\lambda}$", "$\\lambda$", "$\\lambda^2$", "$1/\\lambda$"],
      explanation: "Siden $\\text{Var}=\\lambda$ er $\\text{SD}=\\sqrt{\\lambda}$: spredningen vokser med kvadratroten av forventningen.",
    },
    {
      question: "Hva er $E(X)$ for en hypergeometrisk fordeling ($a$ av typen, $n$ trukket)?",
      options: ["$n\\,a/(a+b)$", "$a/(a+b)$", "$n\\,a$", "$n/(a+b)$"],
      explanation: "Forventningen er antall trekk ganger andelen av typen i populasjonen: $E=n\\,a/(a+b)$.",
    },
    {
      question: "Hva kjennetegner et Bernoulli-forsøk?",
      options: ["Ett forsøk med to mulige utfall", "Fast antall forsøk med mange utfall", "En hendelse som skjer med en rate", "Et trekk uten tilbakelegging fra urne"],
      explanation: "Bernoulli er ett enkelt forsøk med suksess (sannsynlighet $p$) eller fiasko; $E=p$, $\\text{Var}=p(1-p)$.",
    },
    {
      question: "Hva er summen av to uavhengige Poisson-variable med rater $\\lambda_1,\\lambda_2$?",
      options: ["Poisson$(\\lambda_1+\\lambda_2)$", "Poisson$(\\lambda_1\\lambda_2)$", "Binomisk med de to ratene", "Ikke lenger en Poisson"],
      explanation: "Slår du sammen to uavhengige hendelsesstrømmer, legges ratene sammen: summen er Poisson$(\\lambda_1+\\lambda_2)$.",
    },
    {
      question: "Hvorfor krever sensor «La $X$ = antall … , da er $X\\sim\\ldots$» i starten?",
      options: ["For at variabel og fordeling defineres før regning", "For at det endelige svaret skal ha flest mulige desimaler", "Fordi tallsvaret alene alltid gir full score", "For å slippe å måtte oppgi modellens parametre"],
      explanation: "Et tallsvar uten definert variabel og fordeling regnes som ufullstendig — definisjonen er billige poeng.",
    },
    {
      question: "Når kan en binomisk fordeling tilnærmes med en Poisson-fordeling?",
      options: ["Når $n$ er stor og $p$ liten, med $\\lambda=np$", "Når antallet $n$ er lite og $p$ er stor samtidig", "Når $p$ er nøyaktig $0{,}5$ i hvert forsøk", "Når variansen er større enn forventningen"],
      explanation: "For sjeldne hendelser i mange forsøk er $\\text{bin}(n,p)\\approx\\text{Poisson}(np)$.",
    },
    {
      question: "Betinget på totalt antall i et døgn, hvordan fordeler de seg på to like halvdøgn?",
      options: ["Binomisk med $p=0{,}5$", "Poisson med halvert rate i hver del", "Uniformt over alle mulige antall", "Geometrisk i den første halvdelen"],
      explanation: "Fordi halvdelene har lik rate og er uavhengige, er hver hendelse like sannsynlig i hver halvdel — antallet er $\\text{bin}(n,0{,}5)$.",
    },
    {
      question: "Hva er halesannsynligheten $P(X>k)$ for en geometrisk fordeling?",
      options: ["$(1-p)^k$", "$p^k$", "$1-p^k$", "$kp(1-p)$"],
      explanation: "«Ingen suksess i de første $k$ forsøkene» har sannsynlighet $(1-p)^k$.",
    },
    {
      question: "Hvilket spørsmål avgjør binomisk kontra geometrisk/negativ binomisk?",
      options: ["Er antall forsøk fast, eller teller vi til noe skjer?", "Er suksessannsynligheten større eller mindre enn $0{,}5$?", "Er variabelen diskret eller er den kontinuerlig?", "Trekker vi fra en stor eller en liten populasjon?"],
      explanation: "Fast antall forsøk gir binomisk; teller vi til første/$k$-te suksess, er det geometrisk/negativ binomisk.",
    },
    {
      question: "Hva er den vanligste feilen i Poisson-oppgaver?",
      options: ["Å glemme å skalere raten til intervallet", "Å bruke komplementregelen for «minst én» hendelse", "Å definere og oppgi variabelen før man regner", "Å bruke $e^{-\\lambda}$ for $P(X=0)$"],
      explanation: "Parameteren er $\\lambda t$, ikke $\\lambda$, når intervallet avviker fra én tidsenhet — dette glemmes ofte.",
    },
  ],
  'tma4245-2-3': [
    {
      question: "Hvordan er eksponensialfordelingen parametrisert i denne boka?",
      options: ["Med forventningen $\\beta$, slik at $E(X)=\\beta$", "Med raten $\\lambda$, slik at $E(X)=\\lambda$", "Med variansen $v$, slik at $E(X)=\\sqrt{v}$", "Med medianen $m$, slik at $E(X)=m\\ln 2$"],
      explanation: "Boka bruker forventnings-formen: $f(x)=\\tfrac{1}{\\beta}e^{-x/\\beta}$ med $E(X)=\\beta$ og $\\text{Var}(X)=\\beta^2$.",
    },
    {
      question: "Hva er halesannsynligheten $P(X>x)$ for $\\text{eksp}(\\beta)$?",
      options: ["$e^{-x/\\beta}$, altså $1-F(x)$", "$1-e^{-x/\\beta}$, altså $F(x)$", "$\\tfrac{1}{\\beta}e^{-x/\\beta}$, altså $f(x)$", "$e^{-\\beta x}$, med rate i eksponenten"],
      explanation: "Siden $F(x)=1-e^{-x/\\beta}$, er $P(X>x)=1-F(x)=e^{-x/\\beta}$.",
    },
    {
      question: "Hva sier minneløshet for eksponensialfordelingen?",
      options: ["$P(X>s+t\\mid X>t)=P(X>s)$", "$P(X>s+t\\mid X>t)=P(X>s+t)$", "$P(X>s+t\\mid X>t)=P(X>t)$", "$P(X>s+t\\mid X>t)=P(X<s)$"],
      explanation: "En brukt komponent er «like god som ny»: fortiden glemmes, så bare den ekstra tiden $s$ teller.",
    },
    {
      question: "Hvilke kontinuerlige fordelinger er minneløse?",
      options: ["Bare eksponensialfordelingen", "Eksponensial og Weibull sammen", "Alle vanlige levetidsfordelinger", "Både gamma og eksponensial"],
      explanation: "Minneløshet er unik for eksponensialfordelingen; for alle andre må betingede sannsynligheter regnes eksplisitt.",
    },
    {
      question: "Hva er forventning og varians for $\\text{eksp}(\\beta)$?",
      options: ["$E=\\beta$ og $\\text{Var}=\\beta^2$", "$E=\\beta^2$ og $\\text{Var}=\\beta$", "$E=1/\\beta$ og $\\text{Var}=1/\\beta^2$", "$E=\\beta$ og $\\text{Var}=\\beta$"],
      explanation: "For eksponensial er $E=\\beta$ og $\\text{Var}=\\beta^2$, så standardavviket er også $\\beta$.",
    },
    {
      question: "Hva er forventning og varians for uniform fordeling på $(a,b)$?",
      options: ["$E=(a+b)/2$ og $\\text{Var}=(b-a)^2/12$", "$E=(b-a)/2$ og $\\text{Var}=(a+b)^2/12$", "$E=(a+b)/2$ og $\\text{Var}=(b-a)/12$", "$E=ab$ og $\\text{Var}=(b-a)^2/2$"],
      explanation: "Uniform på $(a,b)$: midtpunktet er forventningen, og variansen er $(b-a)^2/12$.",
    },
    {
      question: "Hvordan regner du en sannsynlighet for en uniform fordeling?",
      options: ["Som et lengdeforhold, $(b-c)/(b-a)$", "Ved å integrere $e^{-x}$ over intervallet", "Som forholdet $(b-c)^2/(b-a)^2$", "Ved oppslag i en standard normaltabell"],
      explanation: "Tettheten er konstant, så sannsynligheten for et delintervall er andelen av lengden det utgjør.",
    },
    {
      question: "Hva er gammafordelingen $\\text{gamma}(n,\\beta)$?",
      options: ["Summen av $n$ uavhengige eksponensiale $(\\beta)$", "Produktet av $n$ uavhengige eksponensiale $(\\beta)$", "En eksponensial med $n$ ganger så stor rate", "En uniform fordeling delt opp i $n$ intervaller"],
      explanation: "Gamma er ventetiden til den $n$-te hendelsen: en sum av $n$ eksponensiale, med $E=n\\beta$ og $\\text{Var}=n\\beta^2$.",
    },
    {
      question: "Hvordan er Weibullfordelingen definert?",
      options: ["Ved CDF-en $F(x)=1-e^{-(x/\\theta)^k}$", "Ved tettheten $f(x)=\\tfrac{1}{\\theta}e^{-x/\\theta}$", "Ved punktsannsynligheten $\\theta^k e^{-\\theta}/k!$", "Ved forventningen $\\theta$ og formen $k=1$"],
      explanation: "Weibull oppgis via CDF-en $F(x)=1-e^{-(x/\\theta)^k}$; sannsynligheter og kvantiler regnes rett fra den.",
    },
    {
      question: "Er Weibullfordelingen med $k=2$ minneløs?",
      options: ["Nei; betingede sannsynligheter må regnes eksplisitt", "Ja; alle levetidsfordelinger er jo minneløse", "Ja; Weibull-fordelingen er alltid minneløs", "Nei; men utelukkende fordi skalaen $\\theta>1$ her"],
      explanation: "Bare $k=1$ (eksponensial) er minneløs. For $k=2$ er feilraten økende, så fortiden påvirker fremtiden.",
    },
    {
      question: "Hva er den viktige kjikvadrat-koblingen for eksponensielle data?",
      options: ["$2X/\\beta\\sim\\chi^2_2$", "$X/\\beta\\sim\\chi^2_1$", "$X\\beta\\sim\\chi^2_2$", "$2X\\beta\\sim\\chi^2_n$"],
      explanation: "Er $X\\sim\\text{eksp}(\\beta)$, er $2X/\\beta\\sim\\chi^2_2$; for et utvalg blir frihetsgraden $2n$.",
    },
    {
      question: "Hvordan finner du medianen til en kontinuerlig fordeling?",
      options: ["Løse den kumulative likningen $F(m)=0{,}5$", "Løse tetthetslikningen $f(m)=0{,}5$ for $m$", "Sette medianen $m$ lik forventningen $E(X)$", "Løse likningen $F(m)=1$ for grenseverdien"],
      explanation: "Medianen er 0,5-kvantilen: løs $F(m)=0{,}5$. Å sette $f(m)=0{,}5$ er en klassisk feil.",
    },
    {
      question: "Hva er første steg for en egendefinert tetthet med ukjent konstant $c$?",
      options: ["Normere: bestem $c$ fra $\\int f\\,dx=1$", "Derivere tettheten for å finne $F(x)$", "Sette $c=1$ og regne videre uten mer", "Finne medianen ved likningen $F(m)=0{,}5$"],
      explanation: "Normeringen bestemmer $c$; uten riktig $c$ blir fordelingsfunksjon, sannsynligheter og momenter alle gale.",
    },
    {
      question: "Hva gjør du når oppgaven gir en ukjent fordeling med oppgitt CDF?",
      options: ["Bruker standardteknikken direkte fra $F$", "Antar at den er eksponensiell og minneløs", "Slår fordelingen opp i formelsamlingen", "Tilnærmer den med en normalfordeling"],
      explanation: "Er $F$ oppgitt, trengs ikke navnet: $P(X>x)=1-F(x)$ og kvantiler ved $F(x_p)=p$.",
    },
    {
      question: "Hvordan henger eksponensialfordelingen sammen med en Poisson-prosess?",
      options: ["Den er ventetiden mellom hendelser, $\\beta=1/\\lambda$", "Den er antallet hendelser i et gitt tidsintervall", "Den er summen av samtlige hendelsestidspunkter", "Den er kvadratet av prosessens rate $\\lambda$"],
      explanation: "I en Poisson-prosess med rate $\\lambda$ er tiden mellom hendelser eksponensial med forventning $1/\\lambda$.",
    },
    {
      question: "Kan tettheten $f(x)$ til en kontinuerlig fordeling overstige 1?",
      options: ["Ja; bare arealer under $f$ må ligge i $[0,1]$", "Nei; en tetthet kan aldri overstige verdien 1", "Nei; det ville bryte med normeringskravet", "Ja; men utelukkende for Weibull-fordelinger"],
      explanation: "$f$ er en tetthet, ikke en sannsynlighet. For uniform på $(0,0{,}5)$ er $f=2$; det er arealet som teller.",
    },
    {
      question: "Hva er medianen til en eksponensialfordeling med forventning $\\beta$?",
      options: ["$\\beta\\ln 2\\approx 0{,}693\\,\\beta$, mindre enn $\\beta$", "$\\beta$, altså nøyaktig lik selve forventningen $E(X)$", "$2\\beta$, altså dobbelt så stor som forventningen", "$\\beta/2$, altså nøyaktig halve forventningen"],
      explanation: "$F(m)=0{,}5$ gir $m=\\beta\\ln 2\\approx 0{,}693\\beta$; medianen er mindre enn forventningen fordi fordelingen er høyreskjev.",
    },
    {
      question: "Hva forteller Weibulls formparameter $k$?",
      options: ["Hvordan feilraten utvikler seg med alderen", "Den forventede levetiden mer eller mindre direkte", "Antall komponenter som inngår i systemet", "Sannsynligheten for umiddelbar svikt ved start"],
      explanation: "$k=1$ gir konstant rate (eksponensial), $k>1$ økende (slitasje), $k<1$ avtakende rate.",
    },
    {
      question: "Hva er halesannsynligheten $P(X>x)$ for Weibull?",
      options: ["$e^{-(x/\\theta)^k}$, altså $1-F(x)$", "$1-e^{-(x/\\theta)^k}$, altså $F(x)$", "$e^{-x/\\theta}$, som for eksponensial", "$(x/\\theta)^k$, uten eksponentialledd"],
      explanation: "Siden $F(x)=1-e^{-(x/\\theta)^k}$, er $P(X>x)=e^{-(x/\\theta)^k}$.",
    },
    {
      question: "Hvordan finner du en betinget levetid $P(X>t+s\\mid X>t)$ generelt?",
      options: ["Dele halene: $P(X>t+s)\\,/\\,P(X>t)$", "Trekke fra: $P(X>t+s)-P(X>t)$ direkte", "Gange halene: $P(X>t+s)\\cdot P(X>t)$", "Bruke minneløshet: alltid lik $P(X>s)$"],
      explanation: "Betinget sannsynlighet med $\\{X>t+s\\}\\subseteq\\{X>t\\}$ gir brøken av halene; minneløshet gjelder kun eksponensial.",
    },
    {
      question: "Hva er frihetsgraden i eksponensialens kjikvadrat-pivotal for et utvalg $n$?",
      options: ["$2n$", "$n$", "$n-1$", "$n-2$"],
      explanation: "$2\\sum X_i/\\beta\\sim\\chi^2_{2n}$ — alltid $2n$ i eksponensialtilfellet, ikke $n$ eller $n-1$.",
    },
    {
      question: "Hvorfor er eksponensialfordelingen høyreskjev?",
      options: ["Medianen er mindre enn forventningen, med lang hale", "Medianen er større enn forventningen, med lang hale", "Fordelingen er symmetrisk om sin egen forventning", "Tettheten er størst for de store verdiene av $x$"],
      explanation: "Median $\\approx 0{,}693\\beta<\\beta$ og en lang hale mot høyre gir høyreskjevhet; typisk og gjennomsnittlig levetid skiller lag.",
    },
    {
      question: "Hva er forventning og varians for gamma$(n,\\beta)$?",
      options: ["$E=n\\beta$ og $\\text{Var}=n\\beta^2$", "$E=\\beta/n$ og $\\text{Var}=\\beta^2/n$", "$E=n\\beta$ og $\\text{Var}=n^2\\beta$", "$E=\\beta^n$ og $\\text{Var}=\\beta^{2n}$"],
      explanation: "Som sum av $n$ uavhengige eksponensiale: forventningene og variansene legges sammen, $E=n\\beta$, $\\text{Var}=n\\beta^2$.",
    },
    {
      question: "Hva brukes uniform fordeling på $(0,1)$ til utover ren modellering?",
      options: ["Som råstoff for simulering med inversjonsmetoden", "Som den eneste gyldige modellen for levetider", "Til å definere selve kjikvadratfordelingen", "Til å regne betingede normalsannsynligheter"],
      explanation: "Setter du $U\\sim U(0,1)$ inn i $F^{-1}$, får du en trekning fra en vilkårlig fordeling — grunnlaget for simulering.",
    },
    {
      question: "Hva er spesialtilfellet $k=1$ av Weibullfordelingen?",
      options: ["Eksponensialfordelingen", "Uniform fordeling", "Kjikvadratfordelingen", "Gamma med $n=2$"],
      explanation: "Med $k=1$ blir $F(x)=1-e^{-x/\\theta}$, altså eksponensial med $\\beta=\\theta$ og konstant feilrate.",
    },
  ],
  'tma4245-2-4': [
    {
      question: "Hva er første steg når du får en tetthet med ukjent konstant $c$?",
      options: ["Normere: bestem $c$ fra $\\int f\\,dx=1$ over støtten", "Derivere tettheten $f(x)$ for å finne $F(x)$", "Løse likningen $f(x)=0{,}5$ for å finne medianen", "Regne forventningen $E(X)$ ved delvis integrasjon"],
      explanation: "Normeringen kommer alltid først; uten riktig $c$ blir alt etterpå galt.",
    },
    {
      question: "Hvordan finner du fordelingsfunksjonen $F(x)$ fra tettheten?",
      options: ["Integrere opp: $F(x)=\\int_{\\text{start}}^x f(s)\\,ds$", "Derivere tettheten $f(x)$ med hensyn på $x$", "Sette $F(x)$ lik tettheten $f(x)$ i punktet", "Løse $f(x)=0{,}5$ og bruke symmetri om $m$"],
      explanation: "$F$ er integralet av $f$ fra støttens venstre ende; oppgi den stykkevis med 0 og 1 utenfor.",
    },
    {
      question: "Hvordan finner du medianen til en kontinuerlig fordeling?",
      options: ["Løse den kumulative likningen $F(m)=0{,}5$", "Løse tetthetslikningen $f(m)=0{,}5$ for $m$", "Sette medianen $m$ lik forventningen $E(X)$", "Derivere $F$ i punktet $m$ og sette lik null"],
      explanation: "Medianen deler arealet i to, så den løser $F(m)=0{,}5$ — ikke tetthetslikningen.",
    },
    {
      question: "For $f(x)=cx^3$ på $(0,1)$, hva er normeringskonstanten $c$?",
      options: ["$c=4$, fra likningen $\\int_0^1 cx^3=c/4=1$", "$c=3$, fra likningen $\\int_0^1 cx^3=c/3=1$", "$c=1$, fordi tettheten allerede er normert", "$c=1/4$, fra likningen $\\int_0^1 cx^3=4c=1$"],
      explanation: "$\\int_0^1 cx^3\\,dx=c/4=1$ gir $c=4$.",
    },
    {
      question: "Hvordan regner du en betinget sannsynlighet $P(X>b\\mid X>a)$ for $b>a$?",
      options: ["Dele halene: $(1-F(b))\\,/\\,(1-F(a))$", "Dele kumulative: $F(b)\\,/\\,F(a)$ direkte", "Trekke fra: $F(b)-F(a)$ over intervallet", "Gange halene: $(1-F(b))\\cdot(1-F(a))$"],
      explanation: "Del halesannsynlighetene, siden $\\{X>b\\}$ ligger inne i $\\{X>a\\}$.",
    },
    {
      question: "Hvordan finner du forventningen $E(X)$ fra en tetthet?",
      options: ["Integrere $\\int x\\,f(x)\\,dx$ over støtten", "Integrere $\\int f(x)\\,dx$ over støtten", "Integrere $\\int F(x)\\,dx$ over støtten", "Integrere $\\int x\\,F(x)\\,dx$ over støtten"],
      explanation: "Forventningen vekter $x$ med tettheten: $E(X)=\\int x f(x)\\,dx$.",
    },
    {
      question: "Hvordan finner du variansen etter å ha regnet momentene?",
      options: ["Regne $\\text{Var}(X)=E(X^2)-[E(X)]^2$", "Regne $\\text{Var}(X)=[E(X)]^2-E(X^2)$", "Regne $\\text{Var}(X)=E(X^2)-E(X)$ direkte", "Regne $\\text{Var}(X)=\\sqrt{E(X^2)}$ direkte"],
      explanation: "Regneformelen: andre moment minus kvadratet av forventningen.",
    },
    {
      question: "Hva må en fullstendig fordelingsfunksjon inneholde?",
      options: ["0 under støtten, uttrykket inne, og 1 over", "Bare det integrerte uttrykket inne i støtten", "Bare fordelingens verdi i medianpunktet $m$", "Tettheten $f(x)$ evaluert i hvert punkt $x$"],
      explanation: "Sensor krever den komplette, stykkevise $F$ — de tre delene må med.",
    },
    {
      question: "For en hale-tetthet $f(x)=c/x^p$ på $(1,\\infty)$, hva må du sjekke ved momentene?",
      options: ["At momentintegralet konvergerer og ikke divergerer", "At tettheten $f(x)$ er negativ et sted på støtten", "At medianen $m$ er nøyaktig lik forventningen", "At verdien $F(x)$ overstiger 1 for store $x$"],
      explanation: "For tunge haler kan $E(X)$ eller $E(X^2)$ divergere; kontroller konvergens før du oppgir et tall.",
    },
    {
      question: "For $f(x)=c/x^4$ på $(1,\\infty)$, hva er normeringskonstanten $c$?",
      options: ["$c=3$, fra likningen $\\int_1^\\infty cx^{-4}=c/3=1$", "$c=4$, fra likningen $\\int_1^\\infty cx^{-4}=c/4=1$", "$c=1$, fordi hale-tettheten alltid er normert", "$c=1/3$, fra likningen $\\int_1^\\infty cx^{-4}=3c=1$"],
      explanation: "$\\int_1^\\infty cx^{-4}\\,dx=c\\cdot\\tfrac{1}{3}=1$ gir $c=3$.",
    },
    {
      question: "Hvorfor må du vise mellomregningen i $E(X^2)$-integralet?",
      options: ["Et bart sluttsvar gir trekk selv om tallet stemmer", "Fordi integralet ellers alltid blir et negativt tall", "Fordi $E(X^2)$ alltid er nøyaktig lik $[E(X)]^2$", "Fordi medianen avhenger av de samme mellomleddene"],
      explanation: "Sensorkravet er fullstendige mellomregninger; det er også der regnefeilene lett sniker seg inn.",
    },
    {
      question: "For potens-tettheten $f(x)=cx^n$ på $(0,b)$, hva er medianen?",
      options: ["$m=b\\,(0{,}5)^{1/(n+1)}$, fra $F(m)=0{,}5$", "$m=b\\,(0{,}5)^{n+1}$, fra $F(m)=0{,}5$", "$m=b/2$ uansett verdien av eksponenten $n$", "$m=(0{,}5)^{1/n}$, uavhengig av grensen $b$"],
      explanation: "Med $F(x)=(x/b)^{n+1}$ gir $F(m)=0{,}5$ at $m=b\\,(0{,}5)^{1/(n+1)}$.",
    },
    {
      question: "Hva er den vanligste enkeltfeilen i sjanger C-oppgaver?",
      options: ["Å løse $f(m)=1/2$ i stedet for $F(m)=1/2$", "Å bruke komplement for halesannsynligheter", "Å normere tettheten før man regner videre", "Å oppgi fordelingsfunksjonen på stykkevis form"],
      explanation: "Medianen løser den kumulative likningen $F(m)=1/2$, aldri tetthetslikningen.",
    },
    {
      question: "Hva er $F^{-1}$ råstoff for, som du bør merke deg til senere?",
      options: ["Inversjonsmetoden for simulering senere i boka", "Å derivere tettheten $f(x)$ enda en gang", "Å finne forventningen $E(X)$ helt direkte", "Å normere en ny og ukjent tetthet raskt"],
      explanation: "Setter du $U\\sim U(0,1)$ inn i $F^{-1}$, får du en trekning fra fordelingen — grunnlaget for simulering.",
    },
    {
      question: "Hvilke grenser bruker du i integralet for en hale-tetthet fra $x_0$?",
      options: ["Fra $x_0$ og oppover, altså ikke fra 0", "Alltid fra 0 til 1, som for en andel", "Fra $-\\infty$ og opp til grensen $x_0$", "Fra 0 og opp til grensen $x_0$ hver gang"],
      explanation: "Integrer bare over støtten: for en hale-tetthet starter alt i $x_0$, ikke i 0.",
    },
  ],
  'tma4245-2-5': [
    {
      question: "Hvordan finner du marginalfordelingen til $X$ fra en simultantabell?",
      options: ["Ved å summere hver rad: $p_X(x)=\\sum_y p(x,y)$", "Ved å summere hver kolonne: $p_X(x)=\\sum_x p(x,y)$", "Ved å dele hver celle på radsummen", "Ved å gange radene med kolonnene"],
      explanation: "Marginalen til $X$ er radsummene; man summerer ut $Y$.",
    },
    {
      question: "Hvordan regner du den betingede fordelingen $p(y\\mid x)$?",
      options: ["$p(x,y)/p_X(x)$ — cellen delt på radsummen", "$p(x,y)\\cdot p_X(x)$ — cellen ganget med radsummen", "$p_X(x)/p(x,y)$ — radsummen delt på cellen", "$p(x,y)/p_Y(y)$ — cellen delt på kolonnesummen"],
      explanation: "Betinget fordeling er betinget sannsynlighet på tabellen: celle delt på radsum.",
    },
    {
      question: "Hva kreves for at $X$ og $Y$ skal være uavhengige?",
      options: ["$p(x,y)=p_X(x)p_Y(y)$ i alle celler", "$p(x,y)=p_X(x)p_Y(y)$ i minst én celle", "$\\text{Cov}(X,Y)=0$ er tilstrekkelig", "At marginalene er like store"],
      explanation: "Faktoriseringen må holde i hver eneste celle; én avvikende celle motbeviser uavhengighet.",
    },
    {
      question: "Hvor mange celler må avvike for å motbevise uavhengighet?",
      options: ["Én celle er nok", "Alle cellene må avvike", "Minst halvparten av cellene", "Ingen — uavhengighet kan aldri motbevises"],
      explanation: "Uavhengighet krever at alle celler faktoriserer, så én avvikende celle er nok til å motbevise det.",
    },
    {
      question: "Hvordan er kovariansen definert?",
      options: ["$\\text{Cov}(X,Y)=E(XY)-E(X)E(Y)$", "$\\text{Cov}(X,Y)=E(X)E(Y)-E(XY)$", "$\\text{Cov}(X,Y)=E(XY)+E(X)E(Y)$", "$\\text{Cov}(X,Y)=E(X^2)-[E(X)]^2$"],
      explanation: "Kovariansen er forventningen av produktet minus produktet av forventningene.",
    },
    {
      question: "Hvordan regner du $E(XY)$ fra en simultantabell?",
      options: ["$\\sum_x\\sum_y xy\\,p(x,y)$ over hele tabellen", "$E(X)\\cdot E(Y)$ fra marginalene", "$\\sum_x x\\,p_X(x)$ over radene", "$\\sum_y y\\,p_Y(y)$ over kolonnene"],
      explanation: "Vekt hvert produkt $xy$ med simultansannsynligheten; celler med $x=0$ eller $y=0$ bidrar null.",
    },
    {
      question: "Hva er korrelasjonen $\\rho$?",
      options: ["$\\text{Cov}(X,Y)/\\sqrt{\\text{Var}(X)\\text{Var}(Y)}$", "$\\text{Cov}(X,Y)\\cdot\\sqrt{\\text{Var}(X)\\text{Var}(Y)}$", "$\\text{Cov}(X,Y)/(\\text{Var}(X)\\text{Var}(Y))$", "$E(XY)/(E(X)E(Y))$"],
      explanation: "Korrelasjonen er kovariansen normalisert med standardavvikene, og ligger mellom $-1$ og $1$.",
    },
    {
      question: "Hvilket intervall ligger korrelasjonen $\\rho$ alltid i?",
      options: ["Mellom $-1$ og $1$", "Mellom $0$ og $1$", "Mellom $-\\infty$ og $\\infty$", "Mellom $0$ og $\\text{Var}(X)$"],
      explanation: "Korrelasjonen er normalisert og enhetsløs; den ligger alltid i $[-1,1]$.",
    },
    {
      question: "Hva gjelder om uavhengighet og korrelasjon?",
      options: ["Uavhengig gir ukorrelert, men ikke omvendt", "Ukorrelert gir uavhengig, men ikke omvendt", "De to er alltid ekvivalente", "Uavhengig gir alltid $\\rho=1$"],
      explanation: "Uavhengige variable har $\\text{Cov}=0$; men $\\rho=0$ betyr bare ingen lineær sammenheng, ikke uavhengighet.",
    },
    {
      question: "Hva er $\\text{Cov}(aX+b,\\ cY+d)$?",
      options: ["$ac\\,\\text{Cov}(X,Y)$", "$ac\\,\\text{Cov}(X,Y)+bd$", "$(a+c)\\,\\text{Cov}(X,Y)$", "$abcd\\,\\text{Cov}(X,Y)$"],
      explanation: "Kovariansen er bilineær: skaleringsfaktorene ganges inn, og konstantleddene $b,d$ faller bort.",
    },
    {
      question: "Hva skjer med korrelasjonen under positiv lineær skalering, $\\text{corr}(5X-2,10Y+3)$?",
      options: ["Den er uendret, lik $\\text{corr}(X,Y)$", "Den ganges med $5\\cdot 10=50$", "Den blir null", "Den skifter fortegn"],
      explanation: "Standardavvikene skalerer med samme faktorer som kovariansen, så de kanselleres; korrelasjonen er invariant under positiv skalering.",
    },
    {
      question: "Kan kovariansen være negativ?",
      options: ["Ja, i motsetning til variansen", "Nei, aldri — som variansen", "Nei, bare korrelasjonen kan være negativ", "Ja, men bare for kontinuerlige variable"],
      explanation: "Kovariansen kan være negativ (den ene stor når den andre er liten); et negativt svar er ikke nødvendigvis feil.",
    },
    {
      question: "Hvordan finner du marginaltettheten $f_X(x)$ for kontinuerlige variable?",
      options: ["$\\int f(x,y)\\,dy$ — integrer ut den andre variabelen", "$\\int f(x,y)\\,dx$ — integrer ut $x$", "Ved å derivere $f(x,y)$", "$f(x,y)/f_Y(y)$"],
      explanation: "Marginaltettheten fås ved å integrere simultantettheten over den andre variabelen.",
    },
    {
      question: "En celle har $p(x,y)=0$ mens begge marginalene er positive. Hva følger?",
      options: ["$X$ og $Y$ er avhengige", "$X$ og $Y$ er uavhengige", "$\\text{Cov}(X,Y)=0$", "Tabellen er feil avlest"],
      explanation: "Uavhengighet ville krevd $p(x,y)=p_X(x)p_Y(y)>0$; en nullcelle med positive marginaler motbeviser den straks.",
    },
    {
      question: "Hva gjelder $E(XY)$ og $E(X)E(Y)$ når $X$ og $Y$ er ukorrelerte?",
      options: ["De er like, så $\\text{Cov}=0$", "$E(XY)$ er alltid størst", "$E(X)E(Y)$ er alltid størst", "De er aldri like"],
      explanation: "Ukorrelert betyr $\\text{Cov}=E(XY)-E(X)E(Y)=0$, altså $E(XY)=E(X)E(Y)$.",
    },
  ],
  'tma4245-3-1': [
    {
      question: "I notasjonen $X \\sim N(\\mu, \\sigma^2)$, hva er det andre argumentet?",
      options: ["Variansen $\\sigma^2$", "Standardavviket $\\sigma$", "Forventningen $\\mu$", "Halvparten av $\\mu$"],
      explanation: "Boka bruker alltid variansen som annet argument. $N(100,25)$ betyr $\\sigma^2=25$, altså $\\sigma=5$.",
    },
    {
      question: "Hvordan standardiserer du $X \\sim N(\\mu, \\sigma^2)$?",
      options: ["$Z = (X - \\mu)/\\sigma$", "$Z = (X - \\mu)/\\sigma^2$", "$Z = (X - \\sigma)/\\mu$", "$Z = (X + \\mu)/\\sigma$"],
      explanation: "Trekk fra forventningen og del på standardavviket $\\sigma$ (ikke variansen). Da blir $Z \\sim N(0,1)$.",
    },
    {
      question: "Hva sier symmetriegenskapen til $\\Phi$?",
      options: ["$\\Phi(-z) = 1 - \\Phi(z)$", "$\\Phi(-z) = \\Phi(z) - 1$", "$\\Phi(-z) = -\\Phi(z)$", "$\\Phi(-z) = 1 + \\Phi(z)$"],
      explanation: "Standardnormalen er symmetrisk om 0, så arealet til venstre for $-z$ er $1-\\Phi(z)$.",
    },
    {
      question: "Hva er $\\Phi(z)$?",
      options: ["Sannsynligheten $P(Z \\le z)$ for standardnormalen", "Sannsynligheten $P(Z > z)$ for standardnormalen", "Tettheten til standardnormalen i $z$", "Sannsynligheten $P(Z = z)$ for standardnormalen"],
      explanation: "$\\Phi$ er fordelingsfunksjonen: arealet under klokkekurven til venstre for $z$.",
    },
    {
      question: "Fra tettheten $f(x) = \\frac{1}{\\sigma\\sqrt{2\\pi}} e^{-(x-\\mu)^2/(2\\sigma^2)}$, hvordan leser du $\\sigma^2$?",
      options: ["Nevneren i eksponenten er $2\\sigma^2$, så $\\sigma^2$ er halvparten", "Nevneren i eksponenten er $\\sigma^2$, så $\\sigma^2$ leses direkte", "Tallet som trekkes fra $x$ er $\\sigma^2$", "Faktoren foran er $\\sigma^2$"],
      explanation: "Eksponentens nevner er $2\\sigma^2$; deler du på 2, får du variansen. Tallet trukket fra $x$ er $\\mu$.",
    },
    {
      question: "Hva er $P(X > a)$ for $X \\sim N(\\mu, \\sigma^2)$?",
      options: ["$1 - \\Phi((a-\\mu)/\\sigma)$", "$\\Phi((a-\\mu)/\\sigma)$", "$1 - \\Phi((a-\\mu)/\\sigma^2)$", "$\\Phi((\\mu-a)/\\sigma) - 1$"],
      explanation: "Standardiser grensen og ta den øvre halen: $1$ minus arealet til venstre.",
    },
    {
      question: "$X \\sim N(3200, 150^2)$. Hva er $z$-verdien til $x = 3400$?",
      options: ["$z = 1{,}33$", "$z = 1{,}50$", "$z = 0{,}75$", "$z = 2{,}00$"],
      explanation: "$z = (3400-3200)/150 = 200/150 \\approx 1{,}33$.",
    },
    {
      question: "$X \\sim N(38, 4^2)$. Hvordan finner du $P(34 < X < 45)$?",
      options: ["$\\Phi(1{,}75) - \\Phi(-1{,}00)$", "$\\Phi(1{,}75) + \\Phi(-1{,}00)$", "$\\Phi(1{,}75) - \\Phi(1{,}00)$", "$1 - \\Phi(1{,}75) - \\Phi(1{,}00)$"],
      explanation: "Standardiser begge grensene ($z_1=-1$, $z_2=1{,}75$) og trekk det nedre oppslaget fra det øvre.",
    },
    {
      question: "Hvorfor er $P(X = 5) = 0$ for en normalfordelt $X$?",
      options: ["$X$ er kontinuerlig, så bare intervaller har positiv sannsynlighet", "Fordi $5$ ligger langt fra forventningen $\\mu$", "Fordi tettheten $f(5)$ alltid er null", "Fordi standardavviket gjør punktet umulig"],
      explanation: "For kontinuerlige variable er punktsannsynligheten alltid null; $f(x)$ er en tetthet, ikke en sannsynlighet.",
    },
    {
      question: "Hva betyr kvantilen $z_\\alpha$ i denne boka?",
      options: ["$z$-verdien med haleareal $\\alpha$ til høyre: $P(Z > z_\\alpha) = \\alpha$", "$z$-verdien med haleareal $\\alpha$ til venstre: $P(Z < z_\\alpha) = \\alpha$", "$z$-verdien der $\\Phi(z_\\alpha) = \\alpha$ direkte", "$z$-verdien i midten av fordelingen ved nivå $\\alpha$"],
      explanation: "Boka bruker øvre haleareal: $\\Phi(z_\\alpha) = 1 - \\alpha$. F.eks. $z_{0{,}05} = 1{,}6449$.",
    },
    {
      question: "Hvordan regner du $P(X > a \\mid X > b)$ når $a > b$?",
      options: ["Del halene: $[1-\\Phi(\\tfrac{a-\\mu}{\\sigma})] / [1-\\Phi(\\tfrac{b-\\mu}{\\sigma})]$", "Trekk fra: $[1-\\Phi(\\tfrac{a-\\mu}{\\sigma})] - [1-\\Phi(\\tfrac{b-\\mu}{\\sigma})]$", "Bruk minneløshet: $P(X > a - b)$", "Gang halene: $[1-\\Phi(\\tfrac{a-\\mu}{\\sigma})] \\cdot [1-\\Phi(\\tfrac{b-\\mu}{\\sigma})]$"],
      explanation: "Betinget sannsynlighet gir en brøk av de to halene. Normalfordelingen har ikke minneløshet.",
    },
    {
      question: "$X \\sim N(0, 4)$. Hva er standardavviket?",
      options: ["$\\sigma = 2$", "$\\sigma = 4$", "$\\sigma = 16$", "$\\sigma = 0{,}5$"],
      explanation: "Annet argument er variansen $\\sigma^2 = 4$, så $\\sigma = \\sqrt{4} = 2$.",
    },
    {
      question: "Hvor faller median og modus i en normalfordeling?",
      options: ["Begge er lik forventningen $\\mu$", "Median er $\\mu$, modus er $\\mu + \\sigma$", "Median er $\\mu - \\sigma$, modus er $\\mu$", "Begge er lik standardavviket $\\sigma$"],
      explanation: "Fordi kurven er symmetrisk om $\\mu$, faller median, modus og forventning sammen i $\\mu$.",
    },
    {
      question: "Hva er $\\Phi(0)$?",
      options: ["$0{,}5$", "$0$", "$1$", "$0{,}25$"],
      explanation: "Standardnormalen har halvparten av massen under null, så $\\Phi(0) = 0{,}5$.",
    },
    {
      question: "Hvordan finner du grensen $x$ slik at $P(X \\le x) = 0{,}90$?",
      options: ["Finn $z$ med $\\Phi(z) = 0{,}90$, så $x = \\mu + z\\sigma$", "Finn $z$ med $\\Phi(z) = 0{,}10$, så $x = \\mu + z\\sigma$", "Regn $x = 0{,}90 \\cdot \\mu + \\sigma$ direkte", "Finn $z$ med $\\Phi(z) = 0{,}90$, så $x = \\mu \\cdot z + \\sigma$"],
      explanation: "Les tabellen baklengs: $\\Phi(z) = 0{,}90$ gir $z \\approx 1{,}2816$, og oversett med $x = \\mu + z\\sigma$.",
    },
    {
      question: "Hva er $P(-1{,}96 < Z < 1{,}96)$ for standardnormalen?",
      options: ["$0{,}95$, siden $2\\Phi(1{,}96) - 1 = 0{,}95$", "$0{,}90$, siden $2\\Phi(1{,}96) - 1 = 0{,}90$", "$0{,}975$, siden $\\Phi(1{,}96) = 0{,}975$", "$0{,}99$, siden $2\\Phi(1{,}96) = 0{,}99$"],
      explanation: "Det tosidige sentralarealet er $2\\Phi(z)-1$. Med $\\Phi(1{,}96)=0{,}975$ blir det $0{,}95$.",
    },
    {
      question: "$X \\sim N(8{,}5, 1{,}2^2)$. Hva er $P(X < 7)$?",
      options: ["$\\Phi(-1{,}25) = 0{,}1056$", "$\\Phi(1{,}25) = 0{,}8944$", "$\\Phi(-1{,}25) = 0{,}8944$", "$1 - \\Phi(1{,}25) \\cdot 2 = 0{,}21$"],
      explanation: "$z = (7-8{,}5)/1{,}2 = -1{,}25$, og $\\Phi(-1{,}25) = 1 - 0{,}8944 = 0{,}1056$.",
    },
    {
      question: "Hva er den vanligste feilen ved standardisering?",
      options: ["Å dele på variansen $\\sigma^2$ i stedet for standardavviket $\\sigma$", "Å legge til $\\mu$ i stedet for å trekke fra", "Å bruke $\\Phi$-tabellen på intervaller", "Å regne med to desimaler i svaret"],
      explanation: "Standardisering deler på $\\sigma$. Deler du på $\\sigma^2$, blir $z$ (og dermed svaret) helt feil.",
    },
    {
      question: "Empirisk (68–95–99,7)-regelen: hvor stor andel ligger innenfor $\\mu \\pm 2\\sigma$?",
      options: ["Ca. $95 \\%$", "Ca. $68 \\%$", "Ca. $99{,}7 \\%$", "Ca. $50 \\%$"],
      explanation: "Ca. $68 \\%$ innenfor $\\pm\\sigma$, $95 \\%$ innenfor $\\pm 2\\sigma$, $99{,}7 \\%$ innenfor $\\pm 3\\sigma$.",
    },
    {
      question: "En tetthet har eksponenten $-\\frac{(x-50)^2}{18}$. Hva er $\\sigma$?",
      options: ["$\\sigma = 3$", "$\\sigma = 9$", "$\\sigma = 18$", "$\\sigma = 6$"],
      explanation: "Nevneren er $2\\sigma^2 = 18$, så $\\sigma^2 = 9$ og $\\sigma = 3$.",
    },
    {
      question: "Hva skjer med klokkekurven når $\\sigma$ øker?",
      options: ["Kurven blir bredere og lavere", "Kurven flytter mot høyre", "Kurven blir smalere og høyere", "Toppen flytter opp uten å endre bredde"],
      explanation: "$\\sigma$ er skalaparameteren: større $\\sigma$ gir en bredere, flatere kurve. $\\mu$ styrer plasseringen.",
    },
    {
      question: "$aX + b$ der $X \\sim N(\\mu, \\sigma^2)$. Hvilken fordeling har den?",
      options: ["$N(a\\mu + b,\\ a^2\\sigma^2)$", "$N(a\\mu + b,\\ a\\sigma^2)$", "$N(a\\mu,\\ a^2\\sigma^2 + b)$", "$N(a\\mu + b,\\ a\\sigma + b)$"],
      explanation: "En lineær transformasjon av en normal er normal; forventningen skaleres og forskyves, variansen ganges med $a^2$.",
    },
    {
      question: "Hvorfor bør du ikke avrunde $z$ for grovt før tabelloppslag i Inspera?",
      options: ["Kravet er 2–3 desimaler, og grov avrunding gir feil siste desimal", "Fordi tabellen bare har heltalls $z$-verdier", "Fordi $\\Phi$ ikke er definert for avrundede tall", "Fordi symmetrien da ikke lenger gjelder"],
      explanation: "Inspera godtar kun tallsvar med presisjon; avrund helt til slutt, ikke i mellomregninger.",
    },
    {
      question: "$X \\sim N(220, 15^2)$. Hva er $P(X > 250)$?",
      options: ["$1 - \\Phi(2{,}00) = 0{,}0228$", "$\\Phi(2{,}00) = 0{,}9772$", "$1 - \\Phi(1{,}00) = 0{,}1587$", "$1 - \\Phi(2{,}00) = 0{,}0456$"],
      explanation: "$z = (250-220)/15 = 2{,}00$, så $P(X > 250) = 1 - \\Phi(2{,}00) = 1 - 0{,}9772 = 0{,}0228$.",
    },
    {
      question: "Hva er tettheten $f(x)$ i en normalfordeling?",
      options: ["En funksjon som gir sannsynlighet som areal, ikke en sannsynlighet selv", "Sannsynligheten $P(X = x)$ for hvert punkt", "Alltid et tall mellom 0 og 1", "Fordelingsfunksjonen $P(X \\le x)$"],
      explanation: "Tettheten kan overstige 1; sannsynligheter er arealer under den, og $P(X=x)=0$.",
    },
  ],
  'tma4245-3-2': [
    {
      question: "Hva er $E(aX + bY)$?",
      options: ["$a\\mu_X + b\\mu_Y$", "$a^2\\mu_X + b^2\\mu_Y$", "$a\\mu_X + b\\mu_Y + \\text{Cov}(X,Y)$", "$ab(\\mu_X + \\mu_Y)$"],
      explanation: "Forventningen er lineær: vektene ganger forventningene, ingen kovariansledd.",
    },
    {
      question: "Hva er $\\text{Var}(aX + bY)$ for simultant normale $X, Y$?",
      options: ["$a^2\\sigma_X^2 + b^2\\sigma_Y^2 + 2ab\\,\\text{Cov}(X,Y)$", "$a\\sigma_X^2 + b\\sigma_Y^2 + 2ab\\,\\text{Cov}(X,Y)$", "$a^2\\sigma_X^2 + b^2\\sigma_Y^2 - 2ab\\,\\text{Cov}(X,Y)$", "$a^2\\sigma_X^2 + b^2\\sigma_Y^2$"],
      explanation: "Koeffisientene kvadreres, og kovariansleddet er $2ab\\,\\text{Cov}$ med fortegn fra $ab$.",
    },
    {
      question: "Hvilken fordeling har en lineærkombinasjon av simultant normale variable?",
      options: ["Den er selv normalfordelt", "Den er alltid standardnormal", "Den blir kjikvadratfordelt", "Den er normal bare hvis variablene er uavhengige"],
      explanation: "Enhver lineærkombinasjon av simultant normale er normal — også når de er korrelerte.",
    },
    {
      question: "Hva er $\\text{Var}(Y - X)$ for uavhengige $X, Y$?",
      options: ["$\\sigma_X^2 + \\sigma_Y^2$", "$\\sigma_Y^2 - \\sigma_X^2$", "$\\sigma_X^2 - \\sigma_Y^2$", "$\\sigma_X^2 + \\sigma_Y^2 - 2\\sigma_X\\sigma_Y$"],
      explanation: "Variansene legges sammen selv for en differanse; uavhengige gir null kovariansledd.",
    },
    {
      question: "Hva er fordelingen til gjennomsnittet $\\bar{X}$ av $n$ iid $N(\\mu, \\sigma^2)$?",
      options: ["$N(\\mu,\\ \\sigma^2/n)$", "$N(\\mu,\\ \\sigma^2)$", "$N(n\\mu,\\ n\\sigma^2)$", "$N(\\mu,\\ \\sigma/\\sqrt{n})$"],
      explanation: "Gjennomsnittet beholder forventningen $\\mu$, men variansen krymper til $\\sigma^2/n$.",
    },
    {
      question: "$X, Y$ simultant normale, $\\mu_X=10,\\mu_Y=12,\\sigma_X^2=4,\\sigma_Y^2=9,\\text{Cov}=2$. Hva er $\\text{Var}(2X+Y)$?",
      options: ["$33$", "$25$", "$41$", "$29$"],
      explanation: "$2^2\\cdot4 + 1^2\\cdot9 + 2\\cdot2\\cdot1\\cdot2 = 16 + 9 + 8 = 33$.",
    },
    {
      question: "Hva skjer med kovariansleddet når $X$ og $Y$ er uavhengige?",
      options: ["Det blir null, siden $\\text{Cov}(X,Y)=0$", "Det dobles i verdi", "Det blir lik produktet $\\sigma_X\\sigma_Y$", "Det skifter fortegn til negativt"],
      explanation: "Uavhengighet gir $\\text{Cov}=0$, så leddet $2ab\\,\\text{Cov}$ forsvinner.",
    },
    {
      question: "Hva kalles standardavviket $\\sigma/\\sqrt{n}$ til gjennomsnittet?",
      options: ["Standardfeilen", "Restvariansen", "Kovariansen", "Standardnormalen"],
      explanation: "Standardfeilen er spredningen til $\\bar{X}$; den krymper med $\\sqrt{n}$.",
    },
    {
      question: "For en differanse $Y - X$ av korrelerte normale: hva er variansen?",
      options: ["$\\sigma_X^2 + \\sigma_Y^2 - 2\\,\\text{Cov}(X,Y)$", "$\\sigma_Y^2 - \\sigma_X^2 - 2\\,\\text{Cov}(X,Y)$", "$\\sigma_X^2 + \\sigma_Y^2 + 2\\,\\text{Cov}(X,Y)$", "$\\sigma_X^2 - \\sigma_Y^2 + 2\\,\\text{Cov}(X,Y)$"],
      explanation: "Begge koeffisienter kvadreres til $+1$, mens $ab = -1$ gjør kovariansleddet negativt.",
    },
    {
      question: "Hvorfor er gjennomsnittet av mange målinger mer stabilt enn én enkelt?",
      options: ["Variansen krymper til $\\sigma^2/n$ når $n$ øker", "Forventningen øker med $n$", "Standardavviket øker med $n$", "Gjennomsnittet blir alltid standardnormalt"],
      explanation: "$\\text{Var}(\\bar{X}) = \\sigma^2/n$ blir mindre for større $n$, så $\\bar{X}$ konsentreres om $\\mu$.",
    },
    {
      question: "Firedobler du utvalgsstørrelsen $n$, hva skjer med standardfeilen $\\sigma/\\sqrt{n}$?",
      options: ["Den halveres", "Den firedobles", "Den fjerdedeles", "Den er uendret"],
      explanation: "$\\sqrt{4n} = 2\\sqrt{n}$, så standardfeilen $\\sigma/\\sqrt{n}$ blir halvert.",
    },
    {
      question: "$T = X_1 + \\cdots + X_4$ der $X_i$ er uavhengige $N(25, 1)$. Hva er $\\text{Var}(T)$?",
      options: ["$4$", "$0{,}25$", "$1$", "$16$"],
      explanation: "Summen av 4 uavhengige: $\\text{Var}(T) = 4 \\cdot 1 = 4$ (ikke $\\sigma^2/n$).",
    },
    {
      question: "Positiv kovarians mellom $X$ og $Y$ gjør variansen til $X + Y$:",
      options: ["Større enn summen $\\sigma_X^2 + \\sigma_Y^2$", "Mindre enn summen $\\sigma_X^2 + \\sigma_Y^2$", "Nøyaktig lik null", "Uendret av kovariansen"],
      explanation: "Kovariansleddet $+2\\,\\text{Cov}$ legges til, så positiv kovarians øker variansen til summen.",
    },
    {
      question: "Hva betyr det at $X$ og $Y$ er simultant normalfordelte?",
      options: ["Enhver lineærkombinasjon $aX + bY$ er normalfordelt", "$X$ og $Y$ er alltid uavhengige", "$X$ og $Y$ har samme forventning", "Bare summen $X + Y$ er normal"],
      explanation: "Simultant normal betyr at alle lineærkombinasjoner er normale — også ved korrelasjon.",
    },
    {
      question: "$\\text{Cov}(2X + 5,\\ 3Y - 1)$ er lik:",
      options: ["$6\\,\\text{Cov}(X, Y)$", "$5\\,\\text{Cov}(X, Y)$", "$6\\,\\text{Cov}(X, Y) + 4$", "$\\text{Cov}(X, Y)$"],
      explanation: "Konstantledd faller bort, og skaleringen gir $2 \\cdot 3 = 6$ ganger kovariansen.",
    },
    {
      question: "Hva er den vanligste fellen når kovariansen er oppgitt i en oppgave?",
      options: ["Å glemme kovariansleddet i variansen", "Å bruke feil forventning", "Å standardisere med feil grense", "Å glemme å ta kvadratrot av $\\mu$"],
      explanation: "Kovariansen oppgis ofte nettopp for å teste om du husker leddet $2ab\\,\\text{Cov}$.",
    },
    {
      question: "Hva må du standardisere med når du regner $P(2X + Y > c)$?",
      options: ["Standardavviket $\\sqrt{\\text{Var}(2X+Y)}$", "Variansen $\\text{Var}(2X+Y)$", "Kovariansen $\\text{Cov}(X,Y)$", "Summen $\\sigma_X + \\sigma_Y$"],
      explanation: "Alltid standardavviket: regn variansen, ta så kvadratroten før du deler.",
    },
    {
      question: "For $n$ iid $N(\\mu, \\sigma^2)$: variansen til summen kontra gjennomsnittet er:",
      options: ["$n\\sigma^2$ for summen, $\\sigma^2/n$ for gjennomsnittet", "$\\sigma^2/n$ for summen, $n\\sigma^2$ for gjennomsnittet", "$n\\sigma^2$ for begge", "$\\sigma^2$ for begge"],
      explanation: "Summen sprer seg ($n\\sigma^2$), gjennomsnittet konsentreres ($\\sigma^2/n$) — ikke bland dem.",
    },
    {
      question: "$X, Y$ uavhengige normale, $\\text{Var}(X)=9$, $\\text{Var}(Y)=16$. Hva er $\\text{Var}(X - Y)$?",
      options: ["$25$", "$7$", "$-7$", "$5$"],
      explanation: "$\\text{Var}(X - Y) = 9 + 16 = 25$; varianser trekkes aldri fra hverandre.",
    },
    {
      question: "Å legge til et konstantledd $c$ i en kombinasjon påvirker:",
      options: ["Forventningen, men ikke variansen", "Variansen, men ikke forventningen", "Både forventningen og variansen", "Verken forventningen eller variansen"],
      explanation: "Konstanter har ingen spredning: $\\text{Var}(aX + c) = a^2\\sigma_X^2$, mens forventningen forskyves med $c$.",
    },
  ],
  'tma4245-3-3': [
    {
      question: "Hvilke tre forutsetninger krever sentralgrenseteoremet?",
      options: ["Uavhengige, identisk fordelte, endelig varians", "Uavhengige, normalfordelte og med kjent forventning", "Identisk fordelte, symmetriske og med stor $n$", "Uavhengige, diskrete og med endelig forventning"],
      explanation: "CLT krever iid (uavhengige + identisk fordelte) og endelig varians $\\sigma^2 < \\infty$.",
    },
    {
      question: "Hva er $\\dfrac{\\bar{X} - \\mu}{\\sigma/\\sqrt{n}}$ tilnærmet fordelt som for stor $n$?",
      options: ["$N(0, 1)$", "$N(\\mu, \\sigma^2)$", "$N(0, \\sigma^2)$", "$N(\\mu, \\sigma^2/n)$"],
      explanation: "Det standardiserte gjennomsnittet går mot standardnormalen $N(0,1)$.",
    },
    {
      question: "Hva er den tilnærmede fordelingen til en andel $\\hat{p} = X/n$?",
      options: ["$N(p,\\ p(1-p)/n)$", "$N(p,\\ p(1-p))$", "$N(np,\\ np(1-p))$", "$N(p,\\ \\sqrt{p(1-p)/n})$"],
      explanation: "Andelen er tilnærmet normal med standardfeil $\\sqrt{p(1-p)/n}$ (variansen er $p(1-p)/n$).",
    },
    {
      question: "Hvilken gyldighetssjekk gjør sensor før normaltilnærming av binomisk?",
      options: ["At $np \\ge 5$ og $n(1-p) \\ge 5$ begge holder", "At antallet forsøk $n$ alene er minst 5", "At suksessraten $p$ er større enn $0{,}5$", "At variansen $\\sigma^2$ er kjent på forhånd"],
      explanation: "Begge $np$ og $n(1-p)$ må være store nok (minst 5) for at tilnærmingen skal være god.",
    },
    {
      question: "Hva må gjelde for fordelingen til de enkelte $X_i$ i CLT?",
      options: ["Ingenting — de kan være vilkårlig fordelt", "De må selv være tilnærmet normalfordelte", "De må være symmetriske om forventningen", "De må være kontinuerlige og ikke diskrete"],
      explanation: "Nettopp poenget: uansett fordeling på $X_i$ blir gjennomsnittet normalt når kravene holder.",
    },
    {
      question: "Hvilken tilnærming gjelder for $X \\sim \\text{Poisson}(\\lambda t)$ når $\\lambda t$ er stor?",
      options: ["$X \\approx N(\\lambda t,\\ \\lambda t)$", "$X \\approx N(\\lambda t,\\ \\sqrt{\\lambda t})$", "$X \\approx N(0,\\ \\lambda t)$", "$X \\approx N(\\lambda t,\\ 1)$"],
      explanation: "Poisson har $E = \\text{Var} = \\lambda t$, så tilnærmingen er $N(\\lambda t, \\lambda t)$.",
    },
    {
      question: "En meningsmåling har $n = 900$ og $p = 0{,}52$. Hva er standardfeilen til $\\hat{p}$?",
      options: ["$\\sqrt{0{,}52 \\cdot 0{,}48 / 900} \\approx 0{,}017$", "$\\sqrt{0{,}52 \\cdot 0{,}48 \\cdot 900} \\approx 15{,}0$", "$0{,}52 \\cdot 0{,}48 / \\sqrt{900} \\approx 0{,}008$", "$\\sqrt{0{,}52 / 900} \\cdot 0{,}48 \\approx 0{,}011$"],
      explanation: "Standardfeilen er $\\sqrt{p(1-p)/n} = \\sqrt{0{,}2496/900} \\approx 0{,}0167$.",
    },
    {
      question: "Hvorfor er gyldighetssjekken viktig å skrive ut?",
      options: ["Den er en obligatorisk del av fasiten", "Den endrer standardfeilen som brukes videre", "Den bestemmer forventningen i modellen", "Den erstatter standardiseringen fullstendig"],
      explanation: "Sensor krever sjekken eksplisitt; hopper du over den, mister du poeng selv med riktig tallsvar.",
    },
    {
      question: "Hva er variansen til gjennomsnittet $\\bar{X}$ i CLT?",
      options: ["$\\sigma^2/n$", "$\\sigma^2$", "$n\\sigma^2$", "$\\sigma/\\sqrt{n}$"],
      explanation: "Gjennomsnittet har varians $\\sigma^2/n$; en enkeltobservasjon har $\\sigma^2$.",
    },
    {
      question: "Hva er kontinuitetskorreksjonen for en heltallig $X$ i $P(X \\le k)$?",
      options: ["Bruk grensen $k + 0{,}5$: $\\Phi((k + 0{,}5 - \\mu)/\\sigma)$", "Bruk grensen $k - 0{,}5$: $\\Phi((k - 0{,}5 - \\mu)/\\sigma)$", "Bruk grensen $k$: $\\Phi((k - \\mu)/\\sigma)$", "Bruk grensen $k + 1$: $\\Phi((k + 1 - \\mu)/\\sigma)$"],
      explanation: "For $P(X \\le k)$ utvides grensen oppover med en halv enhet til $k + 0{,}5$.",
    },
    {
      question: "Når er normaltilnærmingen upålitelig?",
      options: ["Når $n$ er liten eller fordelingen sterkt skjev", "Når $n$ er stor og fordelingen er symmetrisk", "Når variansen er endelig og utvalget stort", "Når variablene er uavhengige og identisk fordelt"],
      explanation: "CLT er en grense-egenskap; liten $n$, sterk skjevhet eller $p$ nær 0/1 gir dårlig tilnærming.",
    },
    {
      question: "Hva gjelder for ML-estimatorer i store utvalg?",
      options: ["De er tilnærmet normalfordelte rundt sann verdi", "De er alltid eksakt normalfordelte uansett $n$", "De er kjikvadratfordelte for store utvalg", "De har alltid varians lik null i grensen"],
      explanation: "Asymptotisk normalitet: ML-estimatorer blir tilnærmet normale for stor $n$ (brukes i inferensdelen).",
    },
    {
      question: "Antall vs. andel: hvordan skiller standardfeilene seg for binomisk?",
      options: ["Antall: $\\sqrt{np(1-p)}$; andel: $\\sqrt{p(1-p)/n}$", "Antall og andel har samme standardfeil", "Antall: $\\sqrt{p(1-p)/n}$; andel: $\\sqrt{np(1-p)}$", "Antall: $np$; andel: $p$"],
      explanation: "Antallet $X$ har varians $np(1-p)$, andelen $\\hat{p}=X/n$ har varians $p(1-p)/n$.",
    },
    {
      question: "Hva betyr det at bidragene må være «identisk fordelte»?",
      options: ["Samme fordeling for alle $X_i$ (felles $\\mu, \\sigma^2$)", "Alle $X_i$ antar nøyaktig samme tallverdi", "Alle $X_i$ er normalfordelte med snitt null", "Alle $X_i$ er innbyrdes uavhengige størrelser"],
      explanation: "Identisk fordelt betyr samme underliggende fordeling; det er et eget krav ved siden av uavhengighet.",
    },
    {
      question: "$X \\sim \\text{binomisk}(200, 0{,}3)$. Hva er den tilnærmede fordelingen til antallet $X$?",
      options: ["$N(60,\\ 42)$", "$N(60,\\ 60)$", "$N(0{,}3,\\ 42)$", "$N(200,\\ 42)$"],
      explanation: "$np = 60$ og $np(1-p) = 200 \\cdot 0{,}3 \\cdot 0{,}7 = 42$, så $X \\approx N(60, 42)$.",
    },
  ],
  'tma4245-3-4': [
    {
      question: "Første trinn i seks-trinns-oppskriften for normal-regneoppgaven er:",
      options: ["Definere variabelen og skrive opp fordelingen", "Slå opp i $\\Phi$-tabellen med det aller første", "Regne ut kovariansen mellom variablene", "Avrunde svaret til to desimaler med en gang"],
      explanation: "Definer alltid $X$ og $X \\sim N(\\mu, \\sigma^2)$ først; oppslaget kommer sent i rutinen.",
    },
    {
      question: "$X \\sim N(100, 15^2)$. Hva er $P(X > 120)$?",
      options: ["$1 - \\Phi(1{,}33) = 0{,}0918$", "$1 - \\Phi(1{,}33) = 0{,}9082$", "$\\Phi(1{,}33) = 0{,}9082$", "$1 - \\Phi(1{,}50) = 0{,}0668$"],
      explanation: "$z = 20/15 \\approx 1{,}33$, så $P(X > 120) = 1 - \\Phi(1{,}33) = 1 - 0{,}9082 = 0{,}0918$.",
    },
    {
      question: "Fra tettheten $\\frac{1}{5\\sqrt{2\\pi}} e^{-(x-40)^2/50}$: hva er $\\sigma$?",
      options: ["$\\sigma = 5$", "$\\sigma = 25$", "$\\sigma = 50$", "$\\sigma = 10$"],
      explanation: "Nevneren $2\\sigma^2 = 50$ gir $\\sigma^2 = 25$, altså $\\sigma = 5$ (passer med faktoren $1/(5\\sqrt{2\\pi})$).",
    },
    {
      question: "$P(X > a \\mid X > b)$ for normalfordelt $X$ regnes som:",
      options: ["En brøk av de to halesannsynlighetene", "$P(X > a - b)$, som ved minneløshet", "Differansen mellom de to halesannsynlighetene", "Produktet av de to halesannsynlighetene"],
      explanation: "Normalfordelingen er ikke minneløs; betinget hale er $P(X>a)/P(X>b)$.",
    },
    {
      question: "Hvorfor bør du bruke $z_{0{,}05} = 1{,}6449$ i stedet for $1{,}64$?",
      options: ["For å unngå feil siste desimal i Inspera-svaret", "Fordi $\\Phi$-tabellen bare inneholder fire desimaler", "Fordi verdien $1{,}64$ gir helt feil fortegn", "Fordi symmetriregelen krever minst fire desimaler"],
      explanation: "Grov avrunding underveis er hovedkilden til «riktig metode, feil svar» i Inspera.",
    },
    {
      question: "$X, Y$ simultant normale med $\\text{Cov}(X, Y) = 4$. Hva er $\\text{Var}(X - Y)$ når $\\sigma_X^2 = 16$, $\\sigma_Y^2 = 9$?",
      options: ["$17$", "$25$", "$33$", "$13$"],
      explanation: "$\\text{Var}(X - Y) = 16 + 9 - 2 \\cdot 4 = 17$ — varianser legges sammen, kovariansleddet blir negativt.",
    },
    {
      question: "Gjennomsnittet $\\bar{X}$ av $n = 9$ målinger fra $N(250, 12^2)$ har standardavvik:",
      options: ["$4$", "$12$", "$16$", "$1{,}33$"],
      explanation: "$SD(\\bar{X}) = \\sigma/\\sqrt{n} = 12/3 = 4$; variansen er $144/9 = 16$.",
    },
    {
      question: "$X \\sim N(20, 3^2)$. Hva er $P(X < 25{,}5)$ til to desimaler?",
      options: ["$0{,}97$", "$0{,}93$", "$0{,}03$", "$0{,}95$"],
      explanation: "$z = 5{,}5/3 \\approx 1{,}83$, $\\Phi(1{,}83) = 0{,}9664 \\approx 0{,}97$.",
    },
    {
      question: "Hvordan standardiserer du grensen i en lineærkombinasjon $U = 2X + Y$?",
      options: ["Del på standardavviket $\\sqrt{\\text{Var}(U)}$", "Del på selve variansen $\\text{Var}(U)$", "Del på kovariansen $\\text{Cov}(X, Y)$", "Del på summen $\\sigma_X + \\sigma_Y$"],
      explanation: "Alltid standardavviket til kombinasjonen: regn variansen, ta kvadratroten, del så.",
    },
    {
      question: "$P(X > c) = 0{,}10$ for $X \\sim N(500, 20^2)$. Hva er $c$?",
      options: ["$c = 500 + 1{,}2816 \\cdot 20 = 525{,}63$", "$c = 500 + 1{,}6449 \\cdot 20 = 532{,}90$", "$c = 500 - 1{,}2816 \\cdot 20 = 474{,}37$", "$c = 500 + 0{,}10 \\cdot 20 = 502{,}00$"],
      explanation: "Øvre $10 \\%$ svarer til $z_{0{,}10} = 1{,}2816$, så $c = \\mu + z\\sigma = 525{,}63$.",
    },
    {
      question: "$P(60 < X < 90)$ for $X \\sim N(75, 10^2)$ er:",
      options: ["$\\Phi(1{,}50) - \\Phi(-1{,}50) = 0{,}8664$", "$\\Phi(1{,}50) + \\Phi(-1{,}50) = 1{,}0000$", "$\\Phi(1{,}50) - \\Phi(1{,}50) = 0$", "$1 - \\Phi(1{,}50) = 0{,}0668$"],
      explanation: "Symmetriske grenser: $2\\Phi(1{,}50) - 1 = 2 \\cdot 0{,}9332 - 1 = 0{,}8664$.",
    },
    {
      question: "Hva er kjerneregelen for Inspera-presisjon?",
      options: ["Behold nok desimaler underveis, avrund til slutt", "Avrund hvert eneste mellomsteg til to desimaler", "Bruk alltid avrundede heltall for $z$-verdien", "Rund $z$ til bare én desimal før tabelloppslaget"],
      explanation: "Kun tallsvaret teller; avrunding underveis flytter siste desimal og gir feil svar.",
    },
    {
      question: "$X \\sim N(1000, 50^2)$. $P(X > 1100 \\mid X > 1050)$ er:",
      options: ["$0{,}0228 / 0{,}1587 = 0{,}1437$", "$0{,}0228 - 0{,}1587 = -0{,}1359$", "$1 - \\Phi(1{,}00) = 0{,}1587$", "$0{,}0228 \\cdot 0{,}1587 = 0{,}0036$"],
      explanation: "Del halene: $P(X>1100) = 0{,}0228$, $P(X>1050) = 0{,}1587$, forholdet er $0{,}1437$.",
    },
    {
      question: "To uavhengige tider $X \\sim N(50, 6^2)$, $Y \\sim N(48, 8^2)$. Hva er $\\text{Var}(X - Y)$?",
      options: ["$100$", "$28$", "$-28$", "$14$"],
      explanation: "Uavhengige: $\\text{Var}(X - Y) = 36 + 64 = 100$; varianser legges sammen.",
    },
    {
      question: "En vanlig feil ved tetthetsavlesning er å:",
      options: ["Lese nevneren $2\\sigma^2$ som om den var $\\sigma^2$", "Lese av forventningen $\\mu$ fra faktoren foran", "Standardisere ved å dele på forventningen $\\mu$", "Bruke $\\Phi$-tabellen på tettheten $f(x)$ direkte"],
      explanation: "Nevneren i eksponenten er $2\\sigma^2$, så variansen er halvparten av den.",
    },
  ],
  'tma4245-4-1': [
    {
      question: "Hva er første steg i fordelingsfunksjonsteknikken for $Y = g(X)$?",
      options: ["Skrive $F_Y(y) = P(g(X) \\le y)$ og løse for $X$", "Derivere $g$ og sette den lik null for å finne toppunktet", "Regne ut forventningen $E(Y)$ direkte fra $E(g(X))$", "Sette opp den momentgenererende funksjonen til $Y$"],
      explanation: "CDF-metoden starter med $F_Y(y) = P(g(X) \\le y)$; deretter løser du ulikheten, setter inn $F_X$ og deriverer.",
    },
    {
      question: "Er $g$ en avtakende funksjon, hva blir $F_Y(y)$ etter at ulikheten er løst?",
      options: ["$1 - F_X(g^{-1}(y))$, fordi ulikheten snur", "$F_X(g^{-1}(y))$, akkurat som for voksende $g$", "$F_X(y) \\cdot g^{-1}(y)$, et produkt av de to", "$1 - g^{-1}(y)$, uavhengig av $F_X$"],
      explanation: "For avtakende $g$ blir $\\{g(X) \\le y\\} = \\{X \\ge g^{-1}(y)\\}$, som gir komplementet $1 - F_X(g^{-1}(y))$.",
    },
    {
      question: "$X$ er uniform på $(0,1)$ med $F_X(x) = x$. Hva er fordelingsfunksjonen til $Y = 2X$?",
      options: ["$F_Y(y) = y/2$ for $0 < y < 2$", "$F_Y(y) = 2y$ for $0 < y < 1$", "$F_Y(y) = y^2$ for $0 < y < 1$", "$F_Y(y) = 1 - y/2$ for $0 < y < 2$"],
      explanation: "$F_Y(y) = P(2X \\le y) = P(X \\le y/2) = y/2$ på $(0,2)$; det er en uniform fordeling på $(0,2)$.",
    },
    {
      question: "Når du deriverer $F_Y(y) = F_X(g^{-1}(y))$ for å finne tettheten, hva må du huske?",
      options: ["Å gange med den indre deriverte $\\frac{d}{dy}g^{-1}(y)$", "Å trekke fra $F_X(0)$ som en integrasjonskonstant", "Å dele på antall observasjoner $n$ helt til slutt i regningen", "Å sette $y = 0$ for å normere den nye tettheten"],
      explanation: "Kjerneregelen krever at du ganger med $\\frac{d}{dy}g^{-1}(y)$; en glemt indre derivert gir feil tetthet.",
    },
    {
      question: "For $X \\sim \\text{eksp}(\\beta)$ og $Y = \\sqrt{X}$, hva blir $F_Y(y)$?",
      options: ["$1 - e^{-y^2/\\beta}$ for $y > 0$", "$1 - e^{-y/\\beta}$ for $y > 0$", "$e^{-y^2/\\beta}$ for $y > 0$", "$1 - e^{-\\sqrt{y}/\\beta}$ for $y > 0$"],
      explanation: "$F_Y(y) = P(\\sqrt{X} \\le y) = P(X \\le y^2) = 1 - e^{-y^2/\\beta}$; en Weibull med form $k = 2$.",
    },
    {
      question: "Hva sier produktregelen for momentgenererende funksjoner?",
      options: ["MGF-en til summen av uavhengige variable er produktet av MGF-ene", "MGF-en til en sum er alltid summen av de enkelte MGF-ene", "MGF-en til et produkt er produktet av de enkelte forventningene", "MGF-en til en differanse er differansen mellom de to MGF-ene"],
      explanation: "For uavhengige variable er $M_{X_1+\\cdots+X_n}(t) = \\prod_i M_{X_i}(t)$; forutsetningen om uavhengighet er sentral.",
    },
    {
      question: "Du har regnet ut $M_S(t) = (1 - \\beta t)^{-n}$. Hva må til for å konkludere at $S \\sim \\text{gamma}(n,\\beta)$?",
      options: ["Entydighetsargumentet: MGF-en bestemmer fordelingen", "At du også regner ut variansen og sjekker at den stemmer", "At $n$ er stor nok til at sentralgrenseteoremet gjelder", "At du deriverer $M_S$ to ganger i $t = 0$"],
      explanation: "Identifikasjonen hviler på entydigheten — to fordelinger med samme MGF er like. Uten dette argumentet er konklusjonen ufullstendig.",
    },
    {
      question: "Summen av $n$ uavhengige Bernoulli$(p)$-variable har MGF $[(1-p) + pe^t]^n$. Hvilken fordeling er dette?",
      options: ["Binomisk $(n, p)$", "Poisson med parameter $np$", "Geometrisk med parameter $p$", "Negativ binomisk $(n, p)$"],
      explanation: "$[(1-p)+pe^t]^n$ er MGF-en til binomisk $(n,p)$ i formelsamlingens katalog; entydigheten gir konklusjonen.",
    },
    {
      question: "For $n$ uavhengige, identisk fordelte variable med fordelingsfunksjon $F$, hva er $F_{\\max}(y)$?",
      options: ["$[F(y)]^n$, fordi alle må være $\\le y$", "$n \\cdot F(y)$, en sum over de $n$ variablene", "$1 - [F(y)]^n$, komplementet av produktet", "$1 - [1 - F(y)]^n$, som for minimum"],
      explanation: "$\\max \\le y$ betyr at alle er $\\le y$; produktregelen for uavhengige gir $[F(y)]^n$.",
    },
    {
      question: "Hva er halesannsynligheten $P(\\min > y)$ for $n$ uavhengige, identisk fordelte variable?",
      options: ["$[1 - F(y)]^n$, fordi alle må være $> y$", "$[F(y)]^n$, fordi alle må være $\\le y$", "$1 - [F(y)]^n$, ett minus produktet", "$n[1 - F(y)]$, en sum over halene"],
      explanation: "$\\min > y$ krever at alle er $> y$, så $P(\\min > y) = [1 - F(y)]^n$, og $F_{\\min} = 1 - [1 - F]^n$.",
    },
    {
      question: "Et seriesystem svikter når den første komponenten svikter. Hvilken ordningsvariabel gir systemlevetiden?",
      options: ["Minimum av komponentlevetidene", "Maksimum av komponentlevetidene", "Summen av komponentlevetidene", "Gjennomsnittet av komponentlevetidene"],
      explanation: "Serie = min: systemet stopper ved første svikt, så levetiden er $\\min(X_1, \\ldots, X_n)$.",
    },
    {
      question: "Et parallellsystem lever så lenge minst én komponent virker. Hvilken ordningsvariabel gir systemlevetiden?",
      options: ["Maksimum av komponentlevetidene", "Minimum av komponentlevetidene", "Differansen mellom lengste og korteste levetid", "Produktet av komponentlevetidene"],
      explanation: "Parallell = maks: systemet lever til den siste komponenten svikter, så levetiden er $\\max(X_1, \\ldots, X_n)$.",
    },
    {
      question: "$n$ uavhengige eksponensiale har hver forventning $\\beta$. Hvilken fordeling har $\\min(X_1, \\ldots, X_n)$?",
      options: ["Eksponensial med forventning $\\beta/n$", "Eksponensial med forventning $n\\beta$", "Gamma $(n, \\beta)$, som summen", "Eksponensial med forventning $\\beta$, uendret"],
      explanation: "$P(\\min > y) = (e^{-y/\\beta})^n = e^{-y/(\\beta/n)}$, altså eksponensial med forventning $\\beta/n$ — første svikt kommer $n$ ganger raskere.",
    },
    {
      question: "Fire pumper i parallell har uavhengige eksponensiallevetider med $F(x) = 1 - e^{-x/3}$. Hva er $P(\\text{systemet lever} > 6)$?",
      options: ["$1 - (1 - e^{-2})^4$", "$(1 - e^{-2})^4$", "$1 - (e^{-2})^4$", "$4(1 - e^{-2})$"],
      explanation: "Parallell = maks, så $F_T(6) = (1 - e^{-6/3})^4 = (1 - e^{-2})^4$, og $P(T > 6) = 1 - (1 - e^{-2})^4 \\approx 0{,}441$.",
    },
    {
      question: "Hvilken feil beskrives ved å skrive $F_{\\max}(y) = n \\cdot F(y)$ for et maksimum?",
      options: ["Å addere i stedet for å multiplisere fordelingsfunksjonene", "Å bruke $1 - F$ der $F$ er den riktige størrelsen", "Å glemme den indre deriverte i kjerneregelen ved derivasjon", "Å bruke rate i stedet for forventning i eksponensialfordelingen"],
      explanation: "Ordningsvariable krever et produkt: $F_{\\max} = [F]^n$. Å legge sammen $F$-ene (gange med $n$) er en klassisk feil.",
    },
  ],
  'tma4245-4-2': [
    {
      question: "For $X \\sim \\text{eksp}(\\beta)$, hvilken fordeling har $2X/\\beta$?",
      options: ["$\\chi^2_2$ — kjikvadrat med 2 frihetsgrader", "$\\chi^2_1$ — kjikvadrat med 1 frihetsgrad", "Eksponensial med forventning $\\beta$, uendret", "$N(0, 1)$ — standardnormal"],
      explanation: "CDF-metoden gir $P(2X/\\beta \\le y) = 1 - e^{-y/2}$, som er $\\chi^2_2$ (en eksponensial med forventning 2).",
    },
    {
      question: "Hva er frihetsgraden til $2\\sum_{i=1}^{n} X_i/\\beta$ for $n$ uavhengige eksponensiale?",
      options: ["$2n$ — hver observasjon bidrar med $\\chi^2_2$", "$n$ — nøyaktig én frihetsgrad per observasjon", "$n - 1$ — som for variansen i normalfordelingen", "$2n - 1$ — én frihetsgrad mistes til gjennomsnittet"],
      explanation: "Hver $2X_i/\\beta \\sim \\chi^2_2$, og summen av $n$ slike er $\\chi^2_{2n}$. Frihetsgraden er $2n$, aldri $n$.",
    },
    {
      question: "Hvorfor blir $2X/\\beta$ parameterfri i utledningen?",
      options: ["Fordi $\\beta$ kanselleres i eksponenten når vi setter inn", "Fordi $\\beta$ per definisjon alltid er lik 1 i denne fordelingen", "Fordi vi hele tiden erstatter $\\beta$ med estimatet $\\bar{X}$", "Fordi $2X$ og parameteren $\\beta$ er helt uavhengige størrelser"],
      explanation: "Når $\\beta y/2$ settes inn i eksponensialhalen, kanselleres $\\beta$: $e^{-(\\beta y/2)/\\beta} = e^{-y/2}$. Det er nettopp derfor størrelsen er en pivotal.",
    },
    {
      question: "Hvilket verktøy identifiserer fordelingen til $2\\sum X_i/\\beta$ ut fra leddene?",
      options: ["Produktregelen for MGF-er: $\\prod(1-2t)^{-1} = (1-2t)^{-n}$", "Sentralgrenseteoremet, som gir en tilnærmet normalfordeling", "CDF-metoden anvendt direkte på hele summen $\\sum X_i$", "Invariansprinsippet for maximum-likelihood-estimatoren"],
      explanation: "Hver $2X_i/\\beta \\sim \\chi^2_2$ har MGF $(1-2t)^{-1}$; produktet $(1-2t)^{-n}$ er MGF-en til $\\chi^2_{2n}$.",
    },
    {
      question: "For Weibull-data med $F(x) = 1 - e^{-(x/\\theta)^k}$, hva gjør du før du bruker kjikvadrat-apparatet?",
      options: ["Potens-transformerer: $(X/\\theta)^k \\sim \\text{eksp}(1)$", "Bruker apparatet direkte på $X$, siden Weibull er nær eksponensial", "Standardiserer $X$ til en $N(0,1)$-variabel", "Kvadrerer $X$ og summerer, som for $\\chi^2$"],
      explanation: "Apparatet gjelder eksponensiale data. Potens-løftet $(X/\\theta)^k \\sim \\text{eksp}(1)$ gjør Weibull om til eksponensial først.",
    },
    {
      question: "Hva må sies eksplisitt når du har regnet ut $M_S(t) = (1-2t)^{-n}$ og vil konkludere $S \\sim \\chi^2_{2n}$?",
      options: ["Entydighetsargumentet: MGF-en bestemmer fordelingen", "At $S$ er ikke-negativ, som en $\\chi^2$-variabel må være", "At $n$ er stor nok til at tilnærmingen holder", "At variansen til $S$ er $4n$"],
      explanation: "Identifikasjonen via MGF hviler på entydigheten. Uten det argumentet har du bare regnet ut en funksjon.",
    },
    {
      question: "Bruk at $\\chi^2_2$ har hale $P(\\chi^2_2 > c) = e^{-c/2}$. Hva er $P(2X/\\beta > 3)$?",
      options: ["$e^{-3/2} \\approx 0{,}22$", "$e^{-3} \\approx 0{,}05$", "$1 - e^{-3/2} \\approx 0{,}78$", "$e^{-2/3} \\approx 0{,}51$"],
      explanation: "$2X/\\beta \\sim \\chi^2_2$, så $P(2X/\\beta > 3) = e^{-3/2} \\approx 0{,}2231$.",
    },
    {
      question: "En student skriver $2n\\bar{X}/\\hat{\\beta} \\sim \\chi^2_{2n}$ med $\\hat{\\beta} = \\bar{X}$. Hva er galt?",
      options: ["$2n\\bar{X}/\\bar{X} = 2n$ er en konstant, ikke stokastisk", "Frihetsgraden skulle da ha vært $n$ og ikke $2n$", "$\\hat{\\beta}$ er ikke maximum-likelihood-estimatoren for $\\beta$", "Man kan aldri bruke gjennomsnittet $\\bar{X}$ i en pivotal"],
      explanation: "Setter du estimatet $\\hat{\\beta} = \\bar{X}$ inn, blir det $2n$ — en konstant. Pivotalen krever den ukjente $\\beta$ i nevneren.",
    },
    {
      question: "For Pareto-data med $F(x) = 1 - x^{-\\alpha}$ ($x > 1$), hvilken transformasjon gir eksponensial(1)?",
      options: ["$W = \\alpha \\ln X$", "$W = X^\\alpha$", "$W = 1/X$", "$W = \\alpha X$"],
      explanation: "$P(\\alpha \\ln X \\le w) = P(X \\le e^{w/\\alpha}) = 1 - e^{-w}$, så $\\alpha \\ln X \\sim \\text{eksp}(1)$.",
    },
    {
      question: "Hva er hovedgrunnen til at $2\\sum X_i/\\beta$ kalles en pivotal?",
      options: ["Den bruker data og $\\beta$, men $\\chi^2_{2n}$ har ingen ukjente", "Den er alltid lik en fast konstant uansett hvilke data vi har", "Den er tilnærmet normalfordelt for enhver utvalgsstørrelse $n$", "Den kan bare brukes når parameteren $\\beta$ er kjent på forhånd"],
      explanation: "En pivotal er bygget av data og den ukjente parameteren, men har en fordeling ($\\chi^2_{2n}$) uten ukjente — nettopp det som lar oss lage et eksakt konfidensintervall.",
    },
  ],
  'tma4245-5-1': [
    {
      question: "Hva er forskjellen på en estimator og et estimat?",
      options: ["Estimatoren er en stokastisk oppskrift; estimatet er tallet den gir etter innsetting", "Estimatoren er selve tallet vi leser av, mens estimatet er den stokastiske oppskriften bak", "Estimatoren gjelder bare utvalget, mens estimatet alltid beskriver hele populasjonen presist", "Estimatoren er alltid forventningsrett, mens estimatet per definisjon alltid er forventningsskjevt"],
      explanation: "$\\hat{\\theta}$ (estimatoren) er stokastisk og har en fordeling; setter vi inn data får vi estimatet, ett bestemt tall.",
    },
    {
      question: "Hva betyr at en estimator $\\hat{\\theta}$ er forventningsrett for $\\theta$?",
      options: ["At $E(\\hat{\\theta})=\\theta$, altså at den treffer i gjennomsnitt", "At $\\hat{\\theta}=\\theta$ for hvert eneste utvalg man trekker", "At variansen $\\text{Var}(\\hat{\\theta})$ alltid er lik null", "At $\\hat{\\theta}$ alltid ligger nærmere $\\theta$ enn andre anslag"],
      explanation: "Forventningsrett betyr rett i forventning: $E(\\hat{\\theta})=\\theta$. Enkeltutslag kan likevel bomme.",
    },
    {
      question: "Hva er variansen til utvalgsgjennomsnittet $\\bar{X}$ av $n$ uavhengige målinger med varians $\\sigma^2$?",
      options: ["$\\sigma^2/n$", "$\\sigma^2$", "$n\\sigma^2$", "$\\sigma^2/\\sqrt{n}$"],
      explanation: "$\\text{Var}(\\bar{X})=\\sigma^2/n$; variansen synker med $n$, så flere målinger gir en skarpere estimator.",
    },
    {
      question: "Hvordan er MSE til en estimator sammensatt?",
      options: ["$\\text{MSE}=\\text{Var}(\\hat{\\theta})+[\\text{bias}]^2$", "$\\text{MSE}=\\text{Var}(\\hat{\\theta})-[\\text{bias}]^2$", "$\\text{MSE}=\\text{Var}(\\hat{\\theta})\\cdot[\\text{bias}]^2$", "$\\text{MSE}=[\\text{bias}]^2-\\text{Var}(\\hat{\\theta})$"],
      explanation: "MSE $=E[(\\hat{\\theta}-\\theta)^2]=\\text{Var}+[\\text{bias}]^2$ — spredning pluss skjevhet-kvadrert.",
    },
    {
      question: "Hvorfor deler den forventningsrette utvalgsvariansen $S^2$ på $n-1$?",
      options: ["Fordi $E[\\sum(X_i-\\bar{X})^2]=(n-1)\\sigma^2$, så divisor $n-1$ gir $E(S^2)=\\sigma^2$", "Fordi kvadratsummen $\\sum(X_i-\\bar{X})^2$ alltid overstiger $n\\sigma^2$ og må skaleres litt ned", "Fordi man i praksis alltid mister nøyaktig én observasjon under selve datainnsamlingen", "Fordi variansen ellers kunne blitt negativ for de aller minste utvalgene man møter"],
      explanation: "Kvadratsummen har forventning $(n-1)\\sigma^2$; deling på $n-1$ (ikke $n$) korrigerer for at $\\mu$ er erstattet av $\\bar{X}$.",
    },
    {
      question: "Hva er forventningen til ML-varianten $\\hat{\\sigma}^2=\\frac{1}{n}\\sum(X_i-\\bar{X})^2$?",
      options: ["$\\frac{n-1}{n}\\sigma^2$, altså en systematisk undervurdering", "$\\sigma^2$, altså helt forventningsrett akkurat som $S^2$", "$\\frac{n}{n-1}\\sigma^2$, altså en systematisk overvurdering", "$n\\sigma^2$, altså en kraftig oppblomstring med $n$"],
      explanation: "$E(\\hat{\\sigma}^2)=\\frac{n-1}{n}\\sigma^2<\\sigma^2$: ML-varianten er skjev og undervurderer, med skjevhet $-\\sigma^2/n$.",
    },
    {
      question: "To estimatorer er begge forventningsrette for $\\mu$. Hvordan velger man mellom dem?",
      options: ["Man velger den med minst varians, siden begge treffer i snitt", "Man velger den med størst varians, siden den er mest fleksibel", "Man velger vilkårlig, siden forventningsrette estimatorer er likeverdige", "Man velger den med størst skjevhet for å balansere feilen"],
      explanation: "Når begge er forventningsrette, avgjør variansen: minst varians betyr mest presis estimator.",
    },
    {
      question: "En skjev estimator har varians 5 og skjevhet 2. Hva er MSE?",
      options: ["9", "7", "3", "20"],
      explanation: "$\\text{MSE}=\\text{Var}+b^2=5+2^2=5+4=9$.",
    },
    {
      question: "Kan en skjev estimator ha lavere MSE enn en forventningsrett?",
      options: ["Ja, hvis den lavere variansen mer enn oppveier skjevheten", "Nei, en forventningsrett estimator har alltid lavest MSE", "Nei, MSE er kun definert for forventningsrette estimatorer", "Ja, men bare når skjevheten tilfeldigvis er nøyaktig null"],
      explanation: "MSE veier varians mot skjevhet-kvadrert; en skjev estimator med liten nok varians (som ML-$\\hat{\\sigma}^2$) kan ha lavere MSE.",
    },
    {
      question: "Hva er standardfeilen $\\text{SE}(\\bar{X})$ når hver måling har varians $\\sigma^2$?",
      options: ["$\\sigma/\\sqrt{n}$", "$\\sigma^2/n$", "$\\sigma/n$", "$\\sqrt{n}\\,\\sigma$"],
      explanation: "$\\text{SE}(\\bar{X})=\\sqrt{\\text{Var}(\\bar{X})}=\\sqrt{\\sigma^2/n}=\\sigma/\\sqrt{n}$.",
    },
    {
      question: "Hva er variansen til $\\hat{\\mu}=\\frac{1}{2}(X_1+X_2)$ når $X_1,X_2$ er uavhengige med varians $\\sigma^2$?",
      options: ["$\\sigma^2/2$", "$\\sigma^2$", "$2\\sigma^2$", "$\\sigma^2/4$"],
      explanation: "$\\text{Var}=\\left(\\tfrac12\\right)^2\\sigma^2+\\left(\\tfrac12\\right)^2\\sigma^2=\\tfrac14\\sigma^2+\\tfrac14\\sigma^2=\\sigma^2/2$; vektene kvadreres.",
    },
    {
      question: "Hva sier det første trinnet i sammenligningsprotokollen at du skal gjøre?",
      options: ["Sjekke forventningsretthet ved å regne $E(\\hat{\\theta})$ for hver kandidat", "Regne MSE for samtlige kandidater aller først, før noe som helst annet vurderes", "Velge estimatoren med det korteste regneuttrykket, rett og slett for enkelhets skyld", "Sette opp et konfidensintervall for hver eneste av de aktuelle kandidatene med en gang"],
      explanation: "Protokollen starter med forventningsretthet: regn $E(\\hat{\\theta})$ og se om den blir $\\theta$; deretter varianser, så MSE ved skjevhet.",
    },
    {
      question: "Hva menes med at $\\bar{X}$ er en konsistent estimator?",
      options: ["At den nærmer seg $\\mu$ når $n$ vokser, siden $\\text{Var}(\\bar{X})=\\sigma^2/n\\to 0$", "At den gir nøyaktig samme estimat uansett hvilket tilfeldig utvalg man tilfeldigvis trekker", "At estimatoren utelukkende kan brukes når dataene er strengt normalfordelte fra start", "At skjevheten til estimatoren øker jevnt og systematisk med utvalgsstørrelsen $n$"],
      explanation: "Konsistens: både skjevhet og varians går mot 0 når $n\\to\\infty$. For $\\bar{X}$ er variansen $\\sigma^2/n\\to 0$, så den samler seg om $\\mu$.",
    },
    {
      question: "For uavhengige $X_i$ og konstanter $a_i$, hva er $\\text{Var}(\\sum a_iX_i)$?",
      options: ["$\\sum a_i^2\\text{Var}(X_i)$", "$\\sum a_i\\text{Var}(X_i)$", "$(\\sum a_i)^2\\text{Var}(X_i)$", "$\\sum |a_i|\\text{Var}(X_i)$"],
      explanation: "Vektene kvadreres: $\\text{Var}(\\sum a_iX_i)=\\sum a_i^2\\text{Var}(X_i)$ når variablene er uavhengige.",
    },
    {
      question: "En estimator har $E(\\hat{\\theta})=\\theta+3$. Hva er skjevheten?",
      options: ["3", "$-3$", "0", "9"],
      explanation: "Skjevhet $b=E(\\hat{\\theta})-\\theta=(\\theta+3)-\\theta=3$; estimatoren overvurderer systematisk med 3.",
    },
  ],
  'tma4245-5-2': [
    {
      question: "Hva er likelihood-funksjonen for uavhengige observasjoner $x_1,\\ldots,x_n$?",
      options: ["Produktet $\\prod_{i=1}^n f(x_i;\\theta)$ sett som funksjon av $\\theta$", "Summen $\\sum_{i=1}^n f(x_i;\\theta)$ sett som en funksjon av observasjonen $x$", "Gjennomsnittet $\\frac{1}{n}\\sum f(x_i;\\theta)$ tatt over alle de $n$ observasjonene", "Tettheten $f(x_1;\\theta)$ for den aller første observasjonen alene, uten resten"],
      explanation: "Uavhengighet gjør simultantettheten til et produkt: $L(\\theta)=\\prod f(x_i;\\theta)$, sett som funksjon av parameteren.",
    },
    {
      question: "Hvorfor jobber vi med log-likelihooden $l(\\theta)=\\ln L(\\theta)$?",
      options: ["Fordi $\\ln$ gjør produkt til sum og er strengt voksende, så maksimumet bevares", "Fordi $\\ln$ forskyver maksimumet til et mer beleilig sted langs parameteraksen", "Fordi likelihooden $L(\\theta)$ aldri kan deriveres, mens $l(\\theta)$ alltid lar seg derivere", "Fordi log-likelihooden av og til gir et helt annet og riktigere estimat enn $L$ selv"],
      explanation: "$\\ln$ gjør produktet til en sum (lett å derivere) og er strengt voksende, så $\\hat\\theta$ er den samme.",
    },
    {
      question: "Hva er det siste trinnet i ML-ritualet?",
      options: ["Kontrollere at det kritiske punktet er et maksimum ($l''(\\hat\\theta)<0$ eller monotoni)", "Sette opp likelihooden som et produkt over samtlige uavhengige observasjoner i utvalget", "Ta logaritmen av likelihood-funksjonen for å gjøre produktet om til en enkel sum", "Derivere log-likelihooden og sette den deriverte lik null for å finne kandidaten"],
      explanation: "Trinn 5 er maksimumskontrollen — den skiller toppbesvarelsen, siden $l'(\\hat\\theta)=0$ bare gir et kritisk punkt.",
    },
    {
      question: "Hva er ML-estimatoren for forventningen $\\beta$ i en eksponensialfordeling?",
      options: ["$\\hat{\\beta}=\\bar{X}$", "$\\hat{\\beta}=1/\\bar{X}$", "$\\hat{\\beta}=\\bar{X}^2$", "$\\hat{\\beta}=\\sum X_i$"],
      explanation: "$l(\\beta)=-n\\ln\\beta-\\frac{1}{\\beta}\\sum x_i$ gir $\\hat{\\beta}=\\bar{X}$, som er forventningsrett.",
    },
    {
      question: "Hva er ML-estimatoren for $\\lambda$ i en Poisson-modell?",
      options: ["$\\hat{\\lambda}=\\bar{X}$", "$\\hat{\\lambda}=\\bar{X}^2$", "$\\hat{\\lambda}=1/\\bar{X}$", "$\\hat{\\lambda}=\\sqrt{\\bar{X}}$"],
      explanation: "$l'(\\lambda)=-n+\\sum x_i/\\lambda=0$ gir $\\hat{\\lambda}=\\bar{X}$, forventningsrett siden $E(X)=\\lambda$.",
    },
    {
      question: "En binomisk modell har $x$ suksesser i $n$ forsøk. Hva er ML-estimatoren for $p$?",
      options: ["$\\hat{p}=x/n$", "$\\hat{p}=x\\cdot n$", "$\\hat{p}=n/x$", "$\\hat{p}=(x+1)/(n+2)$"],
      explanation: "$l'(p)=x/p-(n-x)/(1-p)=0$ gir $\\hat{p}=x/n$, den observerte andelen (forventningsrett).",
    },
    {
      question: "Hva gir ML for variansen i en normalmodell, og hva er egenskapen?",
      options: ["$\\hat{\\sigma}^2=\\frac{1}{n}\\sum(X_i-\\bar{X})^2$, som er forventningsskjev", "$\\hat{\\sigma}^2=\\frac{1}{n-1}\\sum(X_i-\\bar{X})^2$, som er forventningsrett", "$\\hat{\\sigma}^2=\\frac{1}{n}\\sum(X_i-\\mu)^2$, som alltid overvurderer", "$\\hat{\\sigma}^2=\\frac{1}{n+1}\\sum(X_i-\\bar{X})^2$, som er forventningsrett"],
      explanation: "ML deler på $n$ og er skjev: $E(\\hat{\\sigma}^2)=\\frac{n-1}{n}\\sigma^2$. Den forventningsrette $S^2$ deler på $n-1$.",
    },
    {
      question: "Hva er ML-estimatoren for $\\mu$ i en normalmodell?",
      options: ["$\\hat{\\mu}=\\bar{X}$, som er forventningsrett", "$\\hat{\\mu}=$ medianen av observasjonene", "$\\hat{\\mu}=\\frac{1}{n}\\sum(X_i-\\bar{X})^2$", "$\\hat{\\mu}=$ det minste observerte $X_i$"],
      explanation: "$\\partial l/\\partial\\mu=\\frac{1}{\\sigma^2}\\sum(x_i-\\mu)=0$ gir $\\hat{\\mu}=\\bar{X}$, uansett $\\sigma^2$, og den er forventningsrett.",
    },
    {
      question: "To uavhengige datasett deler samme parameter $\\theta$. Hvordan bygges likelihooden?",
      options: ["Som produktet av begge datasettenes likelihood, over alle observasjoner", "Som likelihooden til utelukkende det største av de to uavhengige datasettene", "Som differansen mellom de to datasettenes separate likelihood-funksjoner hver for seg", "Som gjennomsnittet av de to helt separate ML-estimatene fra hvert enkelt datasett"],
      explanation: "Kombinert likelihood: $L(\\theta)=\\prod f(x_i;\\theta)\\cdot\\prod g(y_j;\\theta)$; glem aldri kilde to.",
    },
    {
      question: "Hva er riktig fremgangsmåte for ML under en bibetingelse som $\\mu_A=2\\mu_B$?",
      options: ["Substituere bindingen inn i likelihooden før man deriverer", "Derivere med begge parametre og tvinge inn bindingen etterpå", "Estimere $\\mu_A$ og $\\mu_B$ hver for seg og ignorere bindingen", "Sette begge parametrene lik gjennomsnittet av alle data"],
      explanation: "Bindingen reduserer til én fri parameter — substituer den FØR derivasjon, ellers får du feil svar.",
    },
    {
      question: "Likelihoodligningen for null-trunkert Poisson blir $\\bar{x}=\\lambda/(1-e^{-\\lambda})$. Hva gjør du?",
      options: ["Setter opp likningen ryddig og løser den numerisk — den har ingen lukket løsning", "Løser den algebraisk for $\\lambda$ ved først å faktorisere ut leddet $e^{-\\lambda}$", "Konkluderer at hele modellen er ugyldig fordi ligningen ikke kan gå pent opp", "Bruker $\\hat{\\lambda}=\\bar{x}$ som vanlig, som om trunkeringen slett ikke fantes der"],
      explanation: "Likningen er transcendental (blander $\\lambda$ og $e^{-\\lambda}$); man oppgir den ryddig og løser numerisk.",
    },
    {
      question: "Hva sier invariansprinsippet for ML?",
      options: ["ML for $g(\\theta)$ er $g(\\hat{\\theta})$ — sett bare $\\hat{\\theta}$ inn i $g$", "ML for $g(\\theta)$ krever en helt ny utledning fra likelihooden helt fra bunnen av", "ML for $g(\\theta)$ er alltid nøyaktig lik ML-estimatoren for $\\theta$ selv uansett", "ML for $g(\\theta)$ finnes bare i tilfellene der funksjonen $g$ er strengt lineær"],
      explanation: "$\\widehat{g(\\theta)}=g(\\hat{\\theta})$; f.eks. ML for eksponensialens median $\\beta\\ln 2$ er $\\bar{X}\\ln 2$.",
    },
    {
      question: "For gamma med kjent form $\\alpha$ og ukjent skala $\\theta$, hva er ML-estimatoren?",
      options: ["$\\hat{\\theta}=\\bar{X}/\\alpha$", "$\\hat{\\theta}=\\alpha\\bar{X}$", "$\\hat{\\theta}=\\bar{X}$", "$\\hat{\\theta}=\\alpha/\\bar{X}$"],
      explanation: "$l'(\\theta)=\\sum x_i/\\theta^2-n\\alpha/\\theta=0$ gir $\\hat{\\theta}=\\bar{X}/\\alpha$; forventningsrett siden $E(X)=\\alpha\\theta$.",
    },
    {
      question: "Hvordan skrives den ferdige ML-estimatoren korrekt?",
      options: ["Med stor bokstav og hatt, f.eks. $\\hat{\\beta}=\\bar{X}$ (stokastisk)", "Med liten bokstav, f.eks. $\\hat{\\beta}=\\bar{x}$ (et fast tall)", "Uten hatt, bare som parameteren $\\beta$ selv", "Som selve likelihood-funksjonen $L(\\beta)$"],
      explanation: "Estimatoren er stokastisk: stor bokstav med hatt ($\\hat{\\beta}=\\bar{X}$). Med små bokstaver blir det et estimat (tall).",
    },
    {
      question: "Hvorfor er maksimumskontrollen med $l''(\\hat\\theta)<0$ viktig?",
      options: ["Fordi $l'(\\hat\\theta)=0$ alene ikke skiller maksimum fra minimum eller sadelpunkt", "Fordi den til sist bestemmer selve tallverdien til estimatoren $\\hat{\\theta}$ i svaret", "Fordi den er strengt nødvendig for å kunne ta logaritmen av likelihooden i det hele", "Fordi den fullstendig erstatter behovet for å derivere $l$ i den vanlige utledningen"],
      explanation: "$l'(\\hat\\theta)=0$ gir bare et kritisk punkt; $l''(\\hat\\theta)<0$ bekrefter at det er et toppunkt.",
    },
    {
      question: "I den kombinerte likelihooden er kilde 2 Poisson med forventning $3\\lambda$. Hva blir nevneren i $\\hat{\\lambda}$?",
      options: ["$n+3m$ (kilde 2 vektes med faktor 3)", "$n+m$ (hver observasjon teller likt)", "$3n+m$ (kilde 1 vektes med faktor 3)", "$nm$ (produktet av utvalgsstørrelsene)"],
      explanation: "$E(\\sum Y_j)=3m\\lambda$, så $\\hat{\\lambda}=(\\sum x_i+\\sum y_j)/(n+3m)$; forventningsrett med nevner $n+3m$.",
    },
    {
      question: "Hva er en klassisk feil ved kombinert likelihood fra to kilder?",
      options: ["Å glemme kilde to og bare bruke det ene datasettet", "Å multiplisere hver observasjon med antall kilder", "Å ta logaritmen bare av den ene kildens bidrag", "Å bruke ulik parameter for de to kildene når de deler én"],
      explanation: "Likelihooden må inneholde produktet over alle observasjoner fra begge kilder — å slippe kilde to er den vanligste feilen.",
    },
    {
      question: "Hva er ML-estimatoren for eksponensialens median $\\beta\\ln 2$?",
      options: ["$\\bar{X}\\ln 2$ (invariansprinsippet)", "$\\ln(\\bar{X})\\,/\\,2$ etter invariansprinsippet", "$\\bar{X}\\,/\\,\\ln 2$ ved en direkte innsetting", "medianen av de rå observasjonene selv"],
      explanation: "Ved invarians er $\\widehat{\\beta\\ln 2}=\\hat{\\beta}\\ln 2=\\bar{X}\\ln 2$, siden $\\hat{\\beta}=\\bar{X}$.",
    },
    {
      question: "Hva bør du gjøre før du deriverer, med log-likelihooden?",
      options: ["Forenkle den med logaritmeregler så produkter blir summer", "Kvadrere hele uttrykket for å fjerne fortegn", "Erstatte hver observasjon med gjennomsnittet $\\bar{x}$", "Sette parameteren lik null og se hva som skjer"],
      explanation: "$\\ln$ av et produkt splittes i en sum ($\\ln(ab)=\\ln a+\\ln b$, $\\ln(a^b)=b\\ln a$), som gjør derivasjonen enkel.",
    },
    {
      question: "Hva kjennetegner et ML-tilfelle «uten lukket løsning»?",
      options: ["Likelihoodligningen er transcendental og må løses numerisk", "Likelihooden har ingen maksimumsverdi i det hele tatt", "Dataene inneholder for få observasjoner til å estimere", "Parameteren er kjent på forhånd og trenger ikke estimeres"],
      explanation: "Da kan $l'(\\theta)=0$ ikke løses algebraisk (som $\\bar{x}=\\lambda/(1-e^{-\\lambda})$); man setter opp likningen og løser numerisk.",
    },
  ],
  'tma4245-5-3': [
    {
      question: "Hva sier asymptotisk normalitet for en ML-estimator?",
      options: ["For stor $n$ er $\\hat{\\theta}$ tilnærmet $N(\\theta,\\text{Var}(\\hat{\\theta}))$", "For stor $n$ er $\\hat{\\theta}$ eksakt lik parameteren $\\theta$ med sannsynlighet 1", "For liten $n$ er $\\hat{\\theta}$ alltid uniformt fordelt over hele parameterrommet", "For stor $n$ vokser variansen til $\\hat{\\theta}$ ubegrenset mot uendelig med utvalget"],
      explanation: "Under regularitet er ML-estimatoren tilnærmet normal for stor $n$ — en konsekvens av sentralgrenseteoremet.",
    },
    {
      question: "Hva er den tilnærmede fordelingen til $\\hat{\\beta}=\\bar{X}$ i en eksponensialmodell?",
      options: ["$N(\\beta,\\beta^2/n)$", "$N(\\beta,\\beta^2)$", "$N(0,1)$ uansett $n$", "$N(\\beta^2,\\beta/n)$"],
      explanation: "$\\bar{X}$ er et gjennomsnitt av eksponensiale med $E=\\beta$, $\\text{Var}=\\beta^2$, så CLT gir $N(\\beta,\\beta^2/n)$.",
    },
    {
      question: "Hvordan ser et normaltilnærmet konfidensintervall for $\\theta$ ut?",
      options: ["$\\hat{\\theta}\\pm z_{\\alpha/2}\\,\\text{SE}(\\hat{\\theta})$", "$\\hat{\\theta}\\pm \\text{Var}(\\hat{\\theta})$", "$\\hat{\\theta}\\pm \\alpha\\,\\hat{\\theta}$", "$\\hat{\\theta}\\cdot z_{\\alpha/2}\\,\\text{SE}(\\hat{\\theta})$"],
      explanation: "Standard normal-logikk gir $\\hat{\\theta}\\pm z_{\\alpha/2}\\text{SE}$, med $z_{0{,}025}=1{,}96$ for 95 %.",
    },
    {
      question: "Hva er deltametodens formel for variansen til $g(\\hat{\\theta})$?",
      options: ["$[g'(\\mu)]^2\\,\\text{Var}(\\hat{\\theta})$", "$g'(\\mu)\\,\\text{Var}(\\hat{\\theta})$", "$[g'(\\mu)]^2/\\text{Var}(\\hat{\\theta})$", "$g(\\mu)^2\\,\\text{Var}(\\hat{\\theta})$"],
      explanation: "$\\text{Var}(g(\\hat{\\theta}))\\approx[g'(\\mu)]^2\\text{Var}(\\hat{\\theta})$ — den deriverte kvadreres.",
    },
    {
      question: "Hvor evalueres den deriverte $g'$ i deltametoden?",
      options: ["I forventningen $\\mu=E(\\hat{\\theta})$ (eller estimatet)", "I den aller minste observerte verdien $x_{(1)}$ i hele datasettet vårt", "I en helt tilfeldig valgt enkelt observasjon $x_i$ fra det aktuelle utvalget", "I null uansett hvilken funksjon $g$ det så skulle dreie seg om her"],
      explanation: "$g'$ settes inn i parameterverdien $\\mu$; å bruke en enkelt observasjon er en klassisk feil.",
    },
    {
      question: "Hva er Taylor-argumentet som ligger bak deltametoden?",
      options: ["$g(\\hat{\\theta})\\approx g(\\mu)+g'(\\mu)(\\hat{\\theta}-\\mu)$, en lineær tilnærming", "$g(\\hat{\\theta})\\approx g(\\mu)\\cdot(\\hat{\\theta}-\\mu)$, en ren skalering", "$g(\\hat{\\theta})=g(\\mu)$ fordi $\\hat{\\theta}=\\mu$ eksakt", "$g(\\hat{\\theta})\\approx g''(\\mu)(\\hat{\\theta}-\\mu)^2$, en annenordens form"],
      explanation: "Førsteordens Taylor gjør $g(\\hat{\\theta})$ lineær i $\\hat{\\theta}$; variansen av $a+b\\hat{\\theta}$ er $b^2\\text{Var}(\\hat{\\theta})$ med $b=g'(\\mu)$.",
    },
    {
      question: "For uavhengige $X,Y$: hva er deltametodens varians for $g(X,Y)$?",
      options: ["$g_x^2\\text{Var}(X)+g_y^2\\text{Var}(Y)$", "$g_x\\text{Var}(X)+g_y\\text{Var}(Y)$", "$g_x^2\\text{Var}(X)\\cdot g_y^2\\text{Var}(Y)$", "$(g_x+g_y)^2(\\text{Var}(X)+\\text{Var}(Y))$"],
      explanation: "Leddene fra hver variabel legges sammen (uavhengige, ingen kovarians), hvert vektet med kvadratet av følsomheten.",
    },
    {
      question: "Hva er den vanligste feilen når man bruker deltametoden?",
      options: ["Å glemme å kvadrere den deriverte $g'$", "Å ta logaritmen av variansen først", "Å bruke $z$-kvantilen i stedet for $t$", "Å legge til kovarians for uavhengige variable"],
      explanation: "Deltametoden krever $[g'(\\mu)]^2$; glemmer man kvadratet, blir både enhet og tallverdi feil.",
    },
    {
      question: "Når bør du IKKE bruke deltametoden?",
      options: ["Når en eksakt fordeling er tilgjengelig og oppgaven ber om et eksakt svar", "Når parameteren tilfeldigvis er en funksjon av en annen parameter i modellen", "Når utvalgsstørrelsen $n$ er svært stor og tilnærmingen dermed er utmerket god", "Når estimatoren allerede er tilnærmet normalfordelt for det aktuelle utvalget"],
      explanation: "Deltametoden er en tilnærming; ber oppgaven om et eksakt intervall (f.eks. via $\\chi^2_{2n}$), skal det eksakte brukes.",
    },
    {
      question: "Halveringstiden er $T=\\ln 2/k$. Hva er $g'(k)$ i deltametoden?",
      options: ["$-\\ln 2/k^2$", "$\\ln 2/k$", "$-\\ln 2\\cdot k$", "$k^2/\\ln 2$"],
      explanation: "$g(k)=\\ln 2\\cdot k^{-1}$, så $g'(k)=-\\ln 2\\cdot k^{-2}=-\\ln 2/k^2$; fortegnet forsvinner ved kvadrering.",
    },
  ],
  'tma4245-5-4': [
    {
      question: "Hva er de tre siste trinnene i sjanger G-oppskriften (etter ML-ritualet)?",
      options: ["Forventningsretthet, varians, og ved flere kandidater MSE-protokollen med valg", "Standardisering, tabelloppslag og til slutt en konklusjon formulert tydelig i ord", "Formulering av hypoteser, valg av testobservator og beregning av en p-verdi til slutt", "Normering av tettheten, utledning av $F$ og deretter beregning av medianen"],
      explanation: "Trinn 6–8 er vurderingen: sjekk $E(\\hat{\\theta})$, regn $\\text{Var}(\\hat{\\theta})$, og ved flere kandidater bruk MSE-protokollen og velg.",
    },
    {
      question: "Ved kombinert likelihood der kilde 2 har forventning $2\\lambda$, hva blir nevneren i $\\hat{\\lambda}$?",
      options: ["$n+2m$", "$n+m$", "$2n+m$", "$2(n+m)$"],
      explanation: "$E(\\sum Y_j)=2m\\lambda$, så $\\hat{\\lambda}=(\\sum x_i+\\sum y_j)/(n+2m)$ — kilde 2 vektes med faktor 2.",
    },
    {
      question: "Når skal bibetingelsen $\\mu_A=3\\mu_B$ settes inn i likelihooden?",
      options: ["Før derivasjon, så det bare er én fri parameter", "Etter derivasjon, som en sjekk på svaret", "Aldri — man estimerer begge parametre fritt", "Bare hvis utvalgene er like store"],
      explanation: "Substituer bindingen FØR derivasjon; ellers får du feil svar (den klassiske Aug24-fellen).",
    },
    {
      question: "En oppgave gir en ukjent «oppskriftsfordeling» med oppgitt tetthet $f(x;\\theta)$. Hva gjør du?",
      options: ["Bruker det vanlige ML-ritualet på den oppgitte $f$ — navnet er uvesentlig", "Slår opp fordelingen i formelsamlingen og kopierer estimatoren rett derfra", "Antar uten videre at det er en normalfordeling og bruker rett og slett $\\bar{X}$", "Gir opp hele oppgaven, siden helt ukjente fordelinger umulig kan estimeres"],
      explanation: "Er $f$ oppgitt, gjelder samme fem-trinns-ritual; det ukjente navnet endrer ingenting.",
    },
    {
      question: "Hva er ML-estimatoren for Pareto-tettheten $f(x;\\theta)=\\theta x^{-(\\theta+1)}$, $x>1$?",
      options: ["$\\hat{\\theta}=n/\\sum\\ln x_i$", "$\\hat{\\theta}=\\sum\\ln x_i/n$", "$\\hat{\\theta}=\\bar{X}$", "$\\hat{\\theta}=n/\\sum x_i$"],
      explanation: "$l(\\theta)=n\\ln\\theta-(\\theta+1)\\sum\\ln x_i$, $l'=n/\\theta-\\sum\\ln x_i=0$ gir $\\hat{\\theta}=n/\\sum\\ln x_i$.",
    },
    {
      question: "Likelihoodligningen for null-trunkert Poisson blir $\\bar{x}=\\lambda/(1-e^{-\\lambda})$. Hva er riktig?",
      options: ["Den er transcendental og løses numerisk; man setter den opp ryddig", "Den løses greit algebraisk ved å faktorisere ut og forkorte leddet $\\lambda$ vekk", "Den viser rett og slett at $\\hat{\\lambda}=\\bar{x}$ akkurat som i det vanlige tilfellet", "Den har ingen løsning i det hele tatt, så modellen må forkastes umiddelbart"],
      explanation: "Ligningen blander $\\lambda$ og $e^{-\\lambda}$; ingen lukket formel, så $\\hat{\\lambda}$ finnes numerisk.",
    },
    {
      question: "To estimatorer er begge forventningsrette. Én bruker alle $n$ målinger, én bruker bare 4 av dem. Hvilken velges?",
      options: ["Den som bruker alle målingene, siden den har minst varians", "Den som bruker færrest målinger, siden den er raskere", "De er likeverdige når begge er forventningsrette", "Den med størst varians, for robusthet"],
      explanation: "Blant forventningsrette velges minst varians; å bruke all informasjon gir lavere varians.",
    },
    {
      question: "For regresjon uten konstantledd ($Y_i=\\beta x_i+\\varepsilon_i$), hva er minste kvadraters estimator?",
      options: ["$\\hat{\\beta}=\\sum x_iY_i/\\sum x_i^2$", "$\\hat{\\beta}=\\bar{Y}/\\bar{x}$", "$\\hat{\\beta}=\\frac{1}{n}\\sum Y_i/x_i$", "$\\hat{\\beta}=\\sum Y_i/\\sum x_i$"],
      explanation: "$\\hat{\\beta}=\\sum x_iY_i/\\sum x_i^2$ er forventningsrett med $\\text{Var}=\\sigma^2/\\sum x_i^2$ — minst varians blant de lineære.",
    },
    {
      question: "Hvorfor er maksimumskontrollen (trinn 5) verdt et eget poeng?",
      options: ["Fordi $l'(\\hat{\\theta})=0$ alene ikke skiller maksimum fra minimum", "Fordi selve kontrollen faktisk endrer den ferdige tallverdien til $\\hat{\\theta}$ i svaret", "Fordi den er helt nødvendig for å kunne regne ut variansen til estimatoren etterpå", "Fordi den avgjør om estimatoren i det hele tatt er forventningsrett eller ei"],
      explanation: "Likelihoodligningen gir bare et kritisk punkt; $l''(\\hat{\\theta})<0$ bekrefter at det er et maksimum.",
    },
    {
      question: "Hva kreves for å sammenligne en forventningsrett og en skjev kandidat?",
      options: ["MSE $=\\text{Var}+\\text{bias}^2$ for begge, ikke bare variansen", "Bare variansen holder her, siden skjevheten aldri teller i denne sammenhengen", "Bare skjevheten er relevant, siden variansen her er fullstendig sekundær for oss", "Standardavviket til de rå dataene alene, uten noe hensyn til selve estimatoren"],
      explanation: "Er en kandidat skjev, må hele MSE-en sammenlignes — en skjev estimator kan ha lavere MSE.",
    },
    {
      question: "Hva er ML-estimatoren for skalaparameteren i gamma med kjent form $\\alpha$?",
      options: ["$\\hat{\\theta}=\\bar{X}/\\alpha$", "$\\hat{\\theta}=\\alpha\\bar{X}$", "$\\hat{\\theta}=\\bar{X}$", "$\\hat{\\theta}=\\alpha/\\bar{X}$"],
      explanation: "$l'(\\theta)=\\sum x_i/\\theta^2-n\\alpha/\\theta=0$ gir $\\hat{\\theta}=\\bar{X}/\\alpha$; forventningsrett siden $E(X)=\\alpha\\theta$.",
    },
    {
      question: "I den kombinerte likelihooden fra to kilder, hva er den vanligste feilen?",
      options: ["Å glemme å ta med kilde to i produktet", "Å ta logaritmen to ganger", "Å bruke ulik parameter for de to kildene", "Å derivere før man tar logaritmen"],
      explanation: "Likelihooden må inneholde alle observasjoner fra begge kilder; å slippe kilde to er den klassiske feilen.",
    },
    {
      question: "Hva er variansen til ML-estimatoren $\\hat{\\beta}=\\bar{X}$ i eksponensialmodellen?",
      options: ["$\\beta^2/n$", "$\\beta/n$", "$\\beta^2$", "$n/\\beta^2$"],
      explanation: "$\\text{Var}(\\bar{X})=\\text{Var}(X)/n=\\beta^2/n$, siden $\\text{Var}(X)=\\beta^2$ for eksponensial.",
    },
    {
      question: "Hva er ML-estimatoren for medianlevetiden $\\beta\\ln 2$ i eksponensialmodellen?",
      options: ["$\\bar{X}\\ln 2$ (invariansprinsippet)", "$\\ln(\\bar{X})\\,/\\,2$ etter invariansprinsippet", "$\\bar{X}\\,/\\,\\ln 2$ ved en direkte innsetting", "medianen av de rå observasjonene selv"],
      explanation: "Ved invarians er $\\widehat{\\beta\\ln 2}=\\hat{\\beta}\\ln 2=\\bar{X}\\ln 2$, siden $\\hat{\\beta}=\\bar{X}$.",
    },
    {
      question: "Hvordan skal svaret på trinn 8 (valget mellom kandidater) formuleres?",
      options: ["Med et eksplisitt valg begrunnet i varians eller MSE", "Med begge kandidatene oppgitt uten å velge", "Med den som har kortest regneuttrykk", "Med et valg uten begrunnelse, siden tallet taler for seg"],
      explanation: "Trinn 8 krever at du VELGER og begrunner med varians (eller MSE) — et valg uten begrunnelse gir ikke full uttelling.",
    },
  ],
  'tma4245-6-1': [
    {
      question: "Standardavviket i en normalfordelt måleserie er ukjent. Hvilket intervall for forventningen $\\mu$ er riktig?",
      options: ["$\\bar{x} \\pm t_{n-1,\\alpha/2}\\,s/\\sqrt{n}$", "$\\bar{x} \\pm z_{\\alpha/2}\\,s/\\sqrt{n}$", "$\\bar{x} \\pm t_{n,\\alpha/2}\\,s/\\sqrt{n}$", "$\\bar{x} \\pm z_{\\alpha/2}\\,\\sigma/\\sqrt{n}$"],
      explanation: "Ukjent $\\sigma$ krever t-fordelingen med $n-1$ frihetsgrader og estimatet $s$. z brukes bare når $\\sigma$ er kjent.",
    },
    {
      question: "Et 95 % konfidensintervall for $\\mu$ ble regnet til $[36{,}8,\\; 40{,}2]$. Hvilken tolkning er korrekt?",
      options: ["Metoden fanger den sanne $\\mu$ i 95 % av gjentatte forsøk", "Det er 95 % sannsynlig at $\\mu$ ligger i $[36{,}8,\\; 40{,}2]$", "95 % av observasjonene ligger i $[36{,}8,\\; 40{,}2]$", "$\\mu$ er tilfeldig og treffer intervallet 95 % av tiden"],
      explanation: "KI-tolkningen gjelder metoden før data. Etter utregning er $\\mu$ fast og intervallet enten riktig eller galt.",
    },
    {
      question: "Hvor mange frihetsgrader har t-kvantilen i konfidensintervallet for $\\mu$ når $n = 12$?",
      options: ["11", "12", "10", "24"],
      explanation: "t-intervallet bruker $n-1$ frihetsgrader, altså $12-1 = 11$.",
    },
    {
      question: "Konfidensintervallet for variansen $\\sigma^2$ er:",
      options: ["$[(n-1)s^2/\\chi^2_{n-1,\\alpha/2},\\; (n-1)s^2/\\chi^2_{n-1,1-\\alpha/2}]$", "$s^2 \\pm z_{\\alpha/2}\\,s^2/\\sqrt{n}$", "$[(n-1)s^2/\\chi^2_{n-1,1-\\alpha/2},\\; (n-1)s^2/\\chi^2_{n-1,\\alpha/2}]$", "$s^2 \\pm \\chi^2_{n-1,\\alpha/2}\\,s^2/\\sqrt{n}$"],
      explanation: "Kjikvadratfordelingen er skjev, så intervallet er asymmetrisk; den store kvantilen ($\\chi^2_{n-1,\\alpha/2}$) står under den nedre grensen.",
    },
    {
      question: "For konfidensintervallet for en andel $p$ må gyldighetssjekken oppfylles. Hvilken er den?",
      options: ["$n\\hat{p} \\ge 5$ og $n(1-\\hat{p}) \\ge 5$ samtidig", "$n \\ge 5$ og $\\hat{p}$ mellom $0{,}1$ og $0{,}9$", "$n\\hat{p} \\ge 5$ alene er tilstrekkelig her", "$\\hat{p}(1-\\hat{p}) \\ge 5$ for hele utvalget"],
      explanation: "Normaltilnærmingen krever nok observasjoner i begge kategorier: både $n\\hat{p}$ og $n(1-\\hat{p})$ minst 5.",
    },
    {
      question: "Hva skiller et prediksjonsintervall (PI) fra et konfidensintervall (KI) for $\\mu$?",
      options: ["PI har et ekstra 1-tall under rota, for en ny måling", "PI er alltid smalere enn KI ved samme datasett", "PI bruker $z$ der KI bruker $t$, ellers likt", "PI fanger parameteren $\\mu$, mens KI fanger data"],
      explanation: "PI: $\\bar{x} \\pm t_{n-1,\\alpha/2}\\,s\\sqrt{1+1/n}$ — det ekstra leddet er observasjonens egen spredning, så PI er bredere og gjelder en ny enkeltmåling.",
    },
    {
      question: "En oppgave spør: «Hvor mye veier neste, tilfeldig valgte komponent trolig?» Hvilket intervall passer?",
      options: ["Prediksjonsintervall for en ny observasjon", "Konfidensintervall for forventningen $\\mu$", "Konfidensintervall for variansen $\\sigma^2$", "Konfidensintervall for andelen $p$ i alt"],
      explanation: "Spørsmålet gjelder én ny enkeltobservasjon, ikke en parameter, så man bruker prediksjonsintervallet.",
    },
    {
      question: "For et **ensidig** 95 % konfidensintervall (bare nedre grense), hvilken kvantil brukes?",
      options: ["$z_{0{,}05} = 1{,}645$", "$z_{0{,}025} = 1{,}96$", "$z_{0{,}005} = 2{,}576$", "$z_{0{,}10} = 1{,}282$"],
      explanation: "Ensidig legger hele $\\alpha = 0{,}05$ i én hale, så kvantilen er $z_{0{,}05} = 1{,}645$, ikke $z_{0{,}025}$.",
    },
    {
      question: "$\\sigma = 6$ er kjent, $n = 36$, $\\bar{x} = 50$. Hva er feilmarginen i et 95 % KI for $\\mu$?",
      options: ["$1{,}96 \\cdot 1 = 1{,}96$", "$1{,}96 \\cdot 6 = 11{,}76$", "$1{,}645 \\cdot 1 = 1{,}645$", "$2{,}306 \\cdot 1 = 2{,}306$"],
      explanation: "Standardfeil $\\sigma/\\sqrt{n} = 6/6 = 1$; feilmargin $z_{0{,}025} \\cdot 1 = 1{,}96$.",
    },
    {
      question: "Hvorfor er t-kvantilen større enn den tilsvarende z-kvantilen?",
      options: ["t-fordelingen har tyngre haler pga. usikkerhet i $s$", "t-fordelingen har mindre varians enn normalen har", "t-kvantilen er alltid nøyaktig dobbelt så stor som z", "z-kvantilen gjelder bare for svært små utvalg"],
      explanation: "Å estimere $\\sigma$ med $s$ gir ekstra usikkerhet; t-fordelingens tyngre haler gir $t_{n-1,\\alpha/2} > z_{\\alpha/2}$, og intervallet blir litt bredere.",
    },
    {
      question: "Hva skjer med bredden på et KI hvis konfidensnivået økes fra 95 % til 99 %?",
      options: ["Intervallet blir bredere", "Intervallet blir smalere", "Bredden er uendret", "Intervallet blir symmetrisk"],
      explanation: "Høyere konfidensnivå gir større kvantil ($2{,}576 > 1{,}96$), så feilmarginen og bredden øker.",
    },
    {
      question: "$n = 10$ måling gir $s^2 = 4$. Hva er $(n-1)s^2$ i kjikvadrat-intervallet for $\\sigma^2$?",
      options: ["$36$", "$40$", "$9$", "$4$"],
      explanation: "$(n-1)s^2 = 9 \\cdot 4 = 36$. Divisor $n-1 = 9$, ikke $n = 10$.",
    },
    {
      question: "Kvantilnotasjonen $z_\\alpha$ i boka betyr:",
      options: ["tallet med øvre haleareal $\\alpha$: $P(Z > z_\\alpha) = \\alpha$", "tallet med nedre haleareal $\\alpha$: $P(Z < z_\\alpha) = \\alpha$", "medianen i intervallet med sannsynlighet $\\alpha$", "standardfeilen ganget med $\\alpha$"],
      explanation: "Boka bruker øvre-hale-konvensjonen: $P(Z > z_\\alpha) = \\alpha$, så et 95 %-intervall bruker $z_{0{,}025} = 1{,}96$.",
    },
    {
      question: "En andel estimeres fra $n = 30$ med $\\hat{p} = 0{,}10$. Er normaltilnærmingen gyldig?",
      options: ["Nei, fordi $n\\hat{p} = 3 < 5$", "Ja, fordi $n = 30 \\ge 5$", "Ja, fordi $n(1-\\hat{p}) = 27 \\ge 5$", "Nei, fordi $\\hat{p} < 0{,}5$"],
      explanation: "$n\\hat{p} = 30 \\cdot 0{,}10 = 3 < 5$, så kravet svikter i «suksess»-kategorien selv om $n(1-\\hat{p}) = 27$ er stort nok.",
    },
    {
      question: "I det asymmetriske $\\sigma^2$-intervallet, hvilken kvantil hører til den **nedre** grensen?",
      options: ["Den store, $\\chi^2_{n-1,\\alpha/2}$", "Den lille, $\\chi^2_{n-1,1-\\alpha/2}$", "Medianen $\\chi^2_{n-1,0{,}5}$", "Alltid $\\chi^2_{n-1,0{,}05}$"],
      explanation: "Vi deler på kvantilen, så den store kvantilen gir den lille (nedre) grensen: $(n-1)s^2/\\chi^2_{n-1,\\alpha/2}$.",
    },
    {
      question: "En rapport sier «95 % av målingene ligger i konfidensintervallet». Hva er galt?",
      options: ["KI handler om parameteren, ikke om enkeltobservasjoner", "KI-et skulle vært regnet på 99 % nivå i stedet", "Ingenting — dette er en helt korrekt tolkning", "Man skulle brukt $z$ i stedet for $t$ i formelen"],
      explanation: "Konfidensintervallet fanger $\\mu$, ikke enkeltmålinger. Spredningen av observasjoner beskrives av prediksjonsintervallet, som er langt bredere.",
    },
    {
      question: "Hvordan endres feilmarginen hvis utvalgsstørrelsen $n$ firedobles (alt annet likt)?",
      options: ["Den halveres", "Den firedobles", "Den blir uendret", "Den dobles"],
      explanation: "Feilmarginen avtar som $1/\\sqrt{n}$, så $n \\to 4n$ gir $1/\\sqrt{4} = 1/2$ — feilmarginen halveres.",
    },
    {
      question: "$n = 16$, $\\bar{x} = 100$, $s = 8$ (ukjent $\\sigma$), $t_{15,0{,}025} = 2{,}131$. Hva er feilmarginen i 95 % KI for $\\mu$?",
      options: ["$2{,}131 \\cdot 2 = 4{,}262$", "$2{,}131 \\cdot 8 = 17{,}05$", "$1{,}96 \\cdot 2 = 3{,}92$", "$2{,}131 \\cdot 0{,}5 = 1{,}066$"],
      explanation: "Standardfeil $s/\\sqrt{n} = 8/4 = 2$; feilmargin $t_{15,0{,}025} \\cdot 2 = 2{,}131 \\cdot 2 = 4{,}262$.",
    },
    {
      question: "Hvilket intervall er riktig når $\\sigma$ er **oppgitt kjent**?",
      options: ["$\\bar{x} \\pm z_{\\alpha/2}\\,\\sigma/\\sqrt{n}$", "$\\bar{x} \\pm t_{n-1,\\alpha/2}\\,\\sigma/\\sqrt{n}$", "$\\bar{x} \\pm t_{n-1,\\alpha/2}\\,s/\\sqrt{n}$", "$\\bar{x} \\pm z_{\\alpha/2}\\,s/\\sqrt{n}$"],
      explanation: "Kjent $\\sigma$ gir z-intervallet med den sanne $\\sigma$ i standardfeilen — ingen estimering, ingen t.",
    },
    {
      question: "Prediksjonsintervallets bredde når $n \\to \\infty$:",
      options: ["nærmer seg $\\bar{x} \\pm t\\,s$, krymper ikke mot null", "krymper mot null akkurat som KI-et gjør", "vokser uten grense mot det uendelige", "blir til slutt lik variansintervallet"],
      explanation: "Leddet $\\sqrt{1+1/n} \\to 1$, ikke 0, fordi en ny enkeltobservasjon alltid har egen spredning $s$. Derfor krymper PI ikke mot null.",
    },
  ],
  'tma4245-6-2': [
    {
      question: "Hva kjennetegner en pivotal størrelse?",
      options: ["Den bygger på data og parameteren, men har fordeling fri for parameteren", "Den er selve punktestimatet for parameteren, uten videre krav", "Den er en datastørrelse hvis fordeling avhenger av parameteren", "Den er en fast konstant som overhodet ikke avhenger av dataene eller av parameterens verdi"],
      explanation: "En pivotal inneholder parameteren, men fordelingen er fri for den — derfor kan man sette faste kvantiler rundt og løse ut parameteren.",
    },
    {
      question: "Eksponensialpivotalen $\\frac{2\\sum X_i}{\\beta}$ har hvilken fordeling?",
      options: ["$\\chi^2_{2n}$", "$\\chi^2_{n}$", "$\\chi^2_{n-1}$", "$t_{n-1}$"],
      explanation: "Hver observasjon bidrar med $\\chi^2_2$, så summen har $2n$ frihetsgrader — aldri $n$ eller $n-1$.",
    },
    {
      question: "I det eksakte intervallet $[2\\sum x_i/\\chi^2_{2n,\\alpha/2},\\; 2\\sum x_i/\\chi^2_{2n,1-\\alpha/2}]$, hvilken kvantil står under den **nedre** grensen?",
      options: ["Den store, $\\chi^2_{2n,\\alpha/2}$", "Den lille, $\\chi^2_{2n,1-\\alpha/2}$", "Medianen $\\chi^2_{2n,0{,}5}$ alltid", "En vilkårlig av de to kvantilene"],
      explanation: "Vi deler på kvantilen, så den store kvantilen gir den lille (nedre) grensen — en følge av at $\\beta$ inverteres.",
    },
    {
      question: "Når $\\beta$ sitter i nevneren og du inverterer dobbeltulikheten, hva skjer?",
      options: ["Ulikheten snur og endepunktene bytter plass", "Ulikheten beholdes uendret i alle ledd", "Bare det midterste leddet endrer fortegn", "Intervallet blir automatisk symmetrisk om $\\hat{\\beta}$"],
      explanation: "Invertering av en ulikhet snur alle tegn; dermed bytter de to endepunktene plass, og den store kvantilen havner under nedre grense.",
    },
    {
      question: "Hvorfor foretrekkes det eksakte kjikvadrat-intervallet framfor det normaltilnærmede ved liten $n$?",
      options: ["Det eksakte har nøyaktig dekning $1-\\alpha$ for alle $n$", "Det eksakte er alltid det smaleste av de to", "Det normaltilnærmede intervallet lar seg ikke regne ut når $n$ er liten", "Det eksakte intervallet er alltid perfekt symmetrisk om punktestimatet"],
      explanation: "Det eksakte respekterer fordelingens skjevhet og har korrekt dekning uansett $n$; det normaltilnærmede er bare tilnærmet riktig for stor $n$.",
    },
    {
      question: "En student sier: «Det normaltilnærmede intervallet er smalere, så det er riktigere.» Hva er feilen?",
      options: ["Smalt betyr ikke korrekt dekning; tilnærmingen kan svikte", "Ingenting er feil — det aller smaleste intervallet er alltid det beste valget", "Det normaltilnærmede intervallet er i virkeligheten alltid det bredeste", "Feilen er at han brukte $z$ i stedet for $t$"],
      explanation: "Et smalt intervall som ikke faktisk dekker $1-\\alpha$ undervurderer usikkerheten; smalt er ikke det samme som korrekt.",
    },
    {
      question: "$[L, U]$ er et 95 % KI for $\\theta$, og $g$ er strengt **voksende**. Hva er KI for $g(\\theta)$?",
      options: ["$[g(L),\\, g(U)]$", "$[g(U),\\, g(L)]$", "$[g(L),\\, g(L)]$", "$[L,\\, U]$ uendret"],
      explanation: "For voksende $g$ er $L \\le \\theta \\le U$ ekvivalent med $g(L) \\le g(\\theta) \\le g(U)$, så endepunktene beholder rekkefølgen.",
    },
    {
      question: "$[L, U]$ er et KI for $\\theta$, og $g$ er strengt **avtakende**. Hva er KI for $g(\\theta)$?",
      options: ["$[g(U),\\, g(L)]$ — endepunktene bytter plass", "$[g(L),\\, g(U)]$ — samme rekkefølge", "$[g(L),\\, g(L)]$ — kollapser til et punkt", "man kan ikke transformere med avtakende $g$"],
      explanation: "Avtakende $g$ snur ulikheten, så $g(U) \\le g(\\theta) \\le g(L)$ — endepunktene bytter plass.",
    },
    {
      question: "Medianlevetiden for en eksponensialfordeling er $\\beta\\ln 2$. Hvordan får man KI for medianen fra KI $[L,U]$ for $\\beta$?",
      options: ["Gang begge endepunkter med $\\ln 2$ (voksende $g$)", "Del begge endepunkter på $\\ln 2$", "Bytt om endepunktene og gang med $\\ln 2$", "Ta $\\ln 2$ opphøyd i hvert endepunkt"],
      explanation: "$g(\\beta) = \\beta\\ln 2$ er voksende, så KI for medianen er $[L\\ln 2,\\, U\\ln 2]$ — bare gang endepunktene med $\\ln 2 \\approx 0{,}693$.",
    },
    {
      question: "Hvilket er det **første** steget i pivotal-metoden?",
      options: ["Finn en størrelse med kjent fordeling fri for parameteren", "Slå opp tabellkvantilene og sett dem rett inn i en ferdig formel fra samlingen", "Regn ut punktestimatet og den tilhørende standardfeilen med en gang", "Løs dobbeltulikheten for parameteren"],
      explanation: "Steg 1 er å finne pivotalen; deretter setter man kvantiler rundt (steg 2) og løser ut parameteren (steg 3).",
    },
    {
      question: "$n = 10$ eksponensiale gir $\\sum x_i = 84$. Hva er $2\\sum x_i$ i intervallet for $\\beta$?",
      options: ["$168$", "$84$", "$8{,}4$", "$336$"],
      explanation: "$2\\sum x_i = 2 \\cdot 84 = 168$; dette teller-tallet deles på kvantilene $\\chi^2_{20}$.",
    },
    {
      question: "Det normaltilnærmede intervallet for $\\beta$ er $\\hat{\\beta} \\pm z_{\\alpha/2}\\,\\hat{\\beta}/\\sqrt{n}$. Hva bygger det på?",
      options: ["At $\\bar{X}$ er tilnærmet normal via sentralgrenseteoremet", "At $\\bar{X}$ er nøyaktig eksakt normalfordelt for absolutt enhver verdi av $n$", "At $2\\sum X_i/\\beta \\sim \\chi^2_{2n}$ holder helt eksakt", "At eksponensialfordelingen er minneløs"],
      explanation: "Standardfeilen er $\\hat{\\beta}/\\sqrt{n}$ fordi $\\text{Var}(\\bar{X}) = \\beta^2/n$, og CLT gir tilnærmet normalitet for stor $n$.",
    },
    {
      question: "Hvilken pivotal brukes for et konfidensintervall for $\\sigma^2$ i en normalfordeling?",
      options: ["$\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$", "$\\frac{2\\sum X_i}{\\sigma^2} \\sim \\chi^2_{2n}$", "$\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t_{n-1}$", "$\\frac{nS^2}{\\sigma^2} \\sim \\chi^2_{n}$"],
      explanation: "For normalvariansen er pivotalen $(n-1)S^2/\\sigma^2 \\sim \\chi^2_{n-1}$ — frihetsgrad $n-1$, ikke $2n$.",
    },
    {
      question: "Hvorfor er $\\bar{X}$ (alene) ikke en pivotal for $\\mu$?",
      options: ["Fordelingen $N(\\mu, \\sigma^2/n)$ inneholder selv $\\mu$", "Fordi $\\bar{X}$ ikke kan beregnes fra data", "Fordi $\\bar{X}$ er en konstant, ikke stokastisk", "Fordi $\\bar{X}$ alltid er lik $\\mu$ nøyaktig"],
      explanation: "En pivotal må ha fordeling FRI for parameteren; $\\bar{X} \\sim N(\\mu, \\sigma^2/n)$ avhenger av $\\mu$, så den duger ikke.",
    },
    {
      question: "Ved et eksakt intervall for $\\beta$ havner nedre grense høyere enn øvre grense i utregningen. Hva har trolig skjedd?",
      options: ["Kvantilene er byttet om mellom endepunktene", "Frihetsgraden ble satt til $2n$ ved en feil", "$2\\sum x_i$ ble regnet riktig, alt er i orden", "Konfidensnivået var for høyt til å regne ut"],
      explanation: "Nedre > øvre er umulig og et sikkert tegn på ombyttede kvantiler: den store $\\chi^2_{2n,\\alpha/2}$ skal stå under nedre grense.",
    },
  ],
  'tma4245-7-1': [
    {
      question: "Hva sier nullhypotesen $H_0$ i en typisk test?",
      options: ["En presis påstand om parameteren som vi tester mot, ofte status quo", "Det utfallet forskeren håper å påvise med dataene", "At dataene er normalfordelte med kjent standardavvik", "At testobservatoren er større enn den kritiske verdien"],
      explanation: "$H_0$ er utgangspunktet (status quo/påstanden). Det man vil påvise, legges i $H_1$.",
    },
    {
      question: "Når skal du bruke t-test i stedet for z-test for forventningen?",
      options: ["Når standardavviket er ukjent og estimeres med $s$", "Når utvalget er tosidig i stedet for ensidig", "Når signifikansnivået er 0,01 i stedet for 0,05", "Når nullhypotesen gjelder en andel i stedet for et snitt"],
      explanation: "Ukjent $\\sigma$ (estimert med $s$) gir t-fordeling med $n-1$ frihetsgrader; kjent $\\sigma$ gir z.",
    },
    {
      question: "Testobservatoren $Z=\\frac{\\bar{X}-\\mu_0}{\\sigma/\\sqrt{n}}$ har hvilken fordeling under $H_0$?",
      options: ["Standardnormal $N(0,1)$", "t-fordeling med $n-1$ frihetsgrader", "Kjikvadrat med $n-1$ frihetsgrader", "Normal med forventning $\\mu_0$ og varians $\\sigma^2$"],
      explanation: "Med kjent $\\sigma$ er den standardiserte størrelsen $N(0,1)$ når $\\mu=\\mu_0$.",
    },
    {
      question: "Hva er den korrekte definisjonen av p-verdien?",
      options: ["Sannsynligheten under $H_0$ for et minst like ekstremt utfall som det observerte", "Sannsynligheten for at nullhypotesen $H_0$ er sann gitt dataene", "Sannsynligheten for at vi gjør en type I-feil i denne testen", "Sannsynligheten for at alternativhypotesen $H_1$ er sann"],
      explanation: "p-verdien er en sannsynlighet for dataene beregnet gitt $H_0$ — ikke en sannsynlighet for hypotesene.",
    },
    {
      question: "En ingeniør vil påvise at en gjennomsnittlig responstid overstiger 200 ms. Hvilken $H_1$ er riktig?",
      options: ["$H_1: \\mu > 200$ (ensidig oppover)", "$H_1: \\mu < 200$ (ensidig nedover)", "$H_1: \\mu \\ne 200$ (tosidig)", "$H_1: \\mu = 200$ (likhet)"],
      explanation: "Det man vil påvise legges i $H_1$, og «overstiger» gir retning oppover.",
    },
    {
      question: "Hva betyr signifikansnivået $\\alpha$?",
      options: ["Sannsynligheten for å forkaste $H_0$ når $H_0$ faktisk er sann", "Sannsynligheten for å beholde $H_0$ når $H_1$ er sann", "Sannsynligheten for at det observerte utvalget er representativt", "Andelen av dataene som ligger i forkastningsområdet"],
      explanation: "$\\alpha = P(\\text{forkaste }H_0 \\mid H_0\\text{ sann})$ — type I-feilsannsynligheten, valgt på forhånd.",
    },
    {
      question: "For en tosidig test regnes p-verdien slik i forhold til den ensidige halen:",
      options: ["Den er det dobbelte av den ene halen", "Den er nøyaktig lik den ene halen", "Den er halvparten av den ene halen", "Den er kvadratet av den ene halen"],
      explanation: "Tosidig teller like ekstreme utfall i begge haler, så p-verdien dobles.",
    },
    {
      question: "Hvilken standardfeil brukes i testobservatoren for en andel?",
      options: ["$\\sqrt{p_0(1-p_0)/n}$ med $p_0$ fra nullhypotesen", "$\\sqrt{\\hat{p}(1-\\hat{p})/n}$ med det estimerte $\\hat{p}$", "$\\sigma/\\sqrt{n}$ med kjent standardavvik", "$s/\\sqrt{n}$ med empirisk standardavvik"],
      explanation: "Testen bruker den påståtte $p_0$ i standardfeilen; konfidensintervallet bruker $\\hat{p}$.",
    },
    {
      question: "Hvilken formulering er korrekt når testen ikke forkaster $H_0$?",
      options: ["Det er ikke grunnlag for å forkaste $H_0$", "$H_0$ er bevist sann av dataene", "Vi aksepterer $H_0$ som den riktige hypotesen", "Sannsynligheten for at $H_0$ er sann er over 95 %"],
      explanation: "Vi beviser aldri $H_0$; vi finner bare (mangel på) belegg mot den.",
    },
    {
      question: "En tosidig 5 %-z-test forkaster $H_0$ når:",
      options: ["$|Z| > z_{0{,}025} = 1{,}96$", "$|Z| > z_{0{,}05} = 1{,}645$", "$Z > z_{0{,}05} = 1{,}645$ (bare øvre hale)", "$Z < z_{0{,}025} = 1{,}96$"],
      explanation: "Tosidig fordeler $\\alpha$ i to haler, så kritisk verdi er $z_{\\alpha/2}=1{,}96$.",
    },
    {
      question: "Forutsetningssjekken $np_0 \\ge 5$ og $n(1-p_0) \\ge 5$ gjelder:",
      options: ["Normaltilnærmingen i testen for en andel", "Valget mellom ensidig og tosidig test", "Om standardavviket er kjent eller ukjent", "Om p-verdien skal dobles eller ikke"],
      explanation: "Andelstesten hviler på CLT, som krever nok observasjoner i begge kategorier.",
    },
    {
      question: "Hvorfor må testobservatorens fordeling under $H_0$ oppgis (steg 2)?",
      options: ["Den er grunnlaget for både kritisk verdi og p-verdi", "Den avgjør om utvalget er tilfeldig trukket", "Den bestemmer hvor mange desimaler svaret skal ha", "Den erstatter behovet for en forutsetningssjekk"],
      explanation: "Uten den kjente nullfordelingen kan vi verken sette kritisk verdi eller regne p-verdi.",
    },
    {
      question: "Dualiteten mellom en tosidig test og et konfidensintervall sier at:",
      options: ["$H_0: \\mu=\\mu_0$ forkastes hvis og bare hvis $\\mu_0$ ligger utenfor $(1-\\alpha)$-KI-et", "Testen og intervallet alltid gir motsatt konklusjon", "Konfidensintervallet erstatter behovet for en testobservator", "p-verdien alltid er lik intervallets bredde"],
      explanation: "Forkasting på nivå $\\alpha$ svarer nøyaktig til at $\\mu_0$ faller utenfor $(1-\\alpha)$-intervallet.",
    },
    {
      question: "En p-verdi på 0,033 gir hvilken konklusjon på henholdsvis 5 %- og 1 %-nivå?",
      options: ["Forkast på 5 %, men ikke på 1 %", "Forkast på begge nivåer", "Forkast på ingen av nivåene", "Forkast på 1 %, men ikke på 5 %"],
      explanation: "$0{,}033 < 0{,}05$ (forkast) men $0{,}033 > 0{,}01$ (forkast ikke) — derfor må nivået oppgis.",
    },
    {
      question: "En type II-feil er:",
      options: ["Å beholde $H_0$ selv om $H_1$ faktisk er sann", "Å forkaste $H_0$ selv om $H_0$ er sann", "Å velge feil retning på alternativhypotesen", "Å bruke z der man skulle brukt t"],
      explanation: "Type II er å overse en reell effekt; type I er den motsatte (falsk alarm).",
    },
    {
      question: "En stor p-verdi (godt over $\\alpha$) betyr at:",
      options: ["Dataene er forenlige med $H_0$, så vi forkaster ikke", "$H_0$ er bevist sann med høy sikkerhet", "Testen har gjort en type I-feil", "Effekten er stor og praktisk viktig"],
      explanation: "Stor p betyr at dataene ikke motsier $H_0$ — ikke at $H_0$ er bevist.",
    },
    {
      question: "Hva er den kritiske verdien i en ensidig 5 %-t-test med $n=12$ observasjoner?",
      options: ["$t_{11;\\,0{,}05} = 1{,}796$", "$t_{11;\\,0{,}025} = 2{,}201$", "$t_{12;\\,0{,}05} = 1{,}782$", "$z_{0{,}05} = 1{,}645$"],
      explanation: "Ensidig legger hele 5 % i én hale, og frihetsgraden er $n-1=11$.",
    },
    {
      question: "En statistisk signifikant effekt betyr strengt tatt at:",
      options: ["Vi kan slå fast at det finnes en forskjell, men ikke at den er stor", "Forskjellen er både reell og praktisk betydningsfull", "Sannsynligheten for at $H_0$ er sann er under $\\alpha$", "Utvalget var stort nok til å garantere riktig svar"],
      explanation: "Signifikans handler om statistisk sikkerhet, ikke om effektens størrelse eller viktighet.",
    },
    {
      question: "I andelstesten i eksempelet ($p_0=0{,}05$, $n=200$, $\\hat{p}=0{,}08$) ble $Z=1{,}947$. Hva blir konklusjonen ensidig oppover på 5 %-nivå?",
      options: ["Forkast $H_0$, siden $1{,}947 > 1{,}645$", "Forkast ikke, siden $1{,}947 < 1{,}96$", "Forkast ikke, siden $Z$ er positiv", "Testen er ugyldig fordi $np_0 < 5$"],
      explanation: "Ensidig kritisk verdi er $z_{0{,}05}=1{,}645$, og $1{,}947>1{,}645$; dessuten er $np_0=10\\ge5$.",
    },
    {
      question: "Hvilken feil beskriver «å bruke $z_{0{,}05}$ på en tosidig 5 %-test»?",
      options: ["Feil kritisk verdi — tosidig krever $z_{0{,}025}$", "Feil standardfeil i nevneren", "Feil frihetsgrader i t-fordelingen", "Å glemme forutsetningssjekken for andeler"],
      explanation: "Tosidig test fordeler $\\alpha$ i to haler, så riktig kvantil er $z_{\\alpha/2}=z_{0{,}025}$.",
    },
  ],
  'tma4245-7-2': [
    {
      question: "Hvilken testobservator brukes for å teste en påstand om variansen $\\sigma^2$?",
      options: ["$\\frac{(n-1)S^2}{\\sigma_0^2}$, som er $\\chi^2_{n-1}$ under $H_0$", "$\\frac{\\bar{X}-\\mu_0}{S/\\sqrt{n}}$, som er $t_{n-1}$ under $H_0$", "$\\frac{\\hat{p}-p_0}{\\sqrt{p_0(1-p_0)/n}}$, som er $N(0,1)$", "$\\frac{\\bar{D}}{S_D/\\sqrt{n}}$, som er $t_{n-1}$"],
      explanation: "Variansen testes med kjikvadrat-observatoren $(n-1)S^2/\\sigma_0^2 \\sim \\chi^2_{n-1}$.",
    },
    {
      question: "Hvorfor er forkastningsområdet for varianstesten asymmetrisk?",
      options: ["Kjikvadratfordelingen er skjev, så halene krever ulike kvantiler", "Fordi variansen alltid er positiv og derfor ensidig", "Fordi frihetsgraden er $n-1$ og ikke $n$", "Fordi standardavviket estimeres separat fra forventningen"],
      explanation: "$\\chi^2$-fordelingen er ikke symmetrisk, så et tosidig område bruker to ulike kvantiler.",
    },
    {
      question: "Når bør du bruke en eksakt binomisk test i stedet for normaltilnærmingen?",
      options: ["Når $np_0 < 5$ eller $n(1-p_0) < 5$ (forutsetningen feiler)", "Når utvalget er stort og andelen nær 0,5", "Når standardavviket er kjent på forhånd", "Når testen er tosidig i stedet for ensidig"],
      explanation: "Feiler gyldighetssjekken for normaltilnærmingen, brukes binomisk-fordelingen direkte.",
    },
    {
      question: "Hva kjennetegner et parret design?",
      options: ["Målingene kommer i naturlige par, f.eks. samme enhet før og etter", "To uavhengige grupper med hver sin varians sammenlignes", "Antall suksesser telles blant $n$ uavhengige forsøk", "Variansen testes mot en oppgitt referanseverdi"],
      explanation: "Parret betyr at hver observasjon i den ene serien hører til én bestemt i den andre.",
    },
    {
      question: "Hvordan analyseres parrede data korrekt?",
      options: ["Som ETT utvalg av differanser $D_i$ med observator $\\bar{D}/(S_D/\\sqrt{n}) \\sim t_{n-1}$", "Som to uavhengige utvalg med pooled varians og $t_{n_1+n_2-2}$", "Med kjikvadrat-observatoren $(n-1)S^2/\\sigma_0^2$", "Med normaltilnærming for en andel"],
      explanation: "Parret design reduseres til én-utvalgs t-test på differansene.",
    },
    {
      question: "Hvor mange frihetsgrader har den pooled to-utvalgs t-testen?",
      options: ["$n_1 + n_2 - 2$", "$n_1 + n_2$", "$n_1 + n_2 - 1$", "$\\min(n_1, n_2) - 1$"],
      explanation: "To gjennomsnitt estimeres, så to trekkes fra: $n_1+n_2-2$.",
    },
    {
      question: "Hvilken antagelse ligger bak pooled varians $S_p^2$?",
      options: ["At de to gruppene har lik varians", "At de to gruppene har lik forventning", "At observasjonene er parret", "At variansen er kjent på forhånd"],
      explanation: "Pooling forutsetter felles varians i de to gruppene — en antagelse som skal oppgis.",
    },
    {
      question: "Hva er testobservatoren i fortegnstesten under $H_0$?",
      options: ["$U = $ antall positive differanser $\\sim \\text{binomisk}(n, \\tfrac{1}{2})$", "$\\bar{D}/(S_D/\\sqrt{n}) \\sim t_{n-1}$", "$(n-1)S^2/\\sigma_0^2 \\sim \\chi^2_{n-1}$", "$\\sum D_i \\sim N(0, \\sigma^2)$"],
      explanation: "Under $H_0$ er opp/ned like sannsynlig, så antall positive er binomisk$(n, 1/2)$.",
    },
    {
      question: "Hvorfor kan en parret t-test og en fortegnstest på samme data gi ulikt svar?",
      options: ["Fortegnstesten ignorerer størrelsen på differansene og har lavere styrke", "Fortegnstesten bruker en annen $\\alpha$ enn t-testen", "t-testen krever at dataene er binomiske", "Fortegnstesten er alltid tosidig, t-testen alltid ensidig"],
      explanation: "Fortegnstesten bruker bare fortegn (mindre informasjon), så den er robust men mindre følsom.",
    },
    {
      question: "Hva gjør du med par som har differanse nøyaktig null i en fortegnstest?",
      options: ["Forkaster dem før $n$ telles", "Teller dem som positive", "Teller dem som negative", "Fordeler dem likt på positive og negative"],
      explanation: "Nuller gir ingen retningsinformasjon og tas ut før binomisk-modellen settes opp.",
    },
    {
      question: "For $H_1: p > p_0$ i en eksakt binomisk test med $x_{\\text{obs}} = 5$, hva er p-verdien?",
      options: ["$P(X \\ge 5) = 1 - P(X \\le 4)$", "$P(X > 5) = 1 - P(X \\le 5)$", "$P(X \\le 5)$", "$P(X = 5)$"],
      explanation: "Halen inkluderer det observerte utfallet: $P(X \\ge x_{\\text{obs}})$.",
    },
    {
      question: "En kjikvadrat-test for varians er spesielt følsom for:",
      options: ["Avvik fra normalfordelingen i dataene", "Om utvalget er parret eller ikke", "Valget mellom p-verdi og forkastningsområde", "Antall desimaler i svaret"],
      explanation: "Variansestimatets fordeling avhenger sterkt av normalitet; testen er lite robust.",
    },
    {
      question: "Aug20 la en felle der før/etter-data ble presentert. Hva er den riktige testen?",
      options: ["Parret t-test på differansene", "To-utvalgs pooled t-test", "Kjikvadrat-test for variansen", "Eksakt Poisson-test"],
      explanation: "Samme enheter målt to ganger er parret; å bruke to-utvalgstest er fellen.",
    },
    {
      question: "Hva tester fortegnstesten strengt tatt?",
      options: ["Om differansenes median er null", "Om differansenes varians er null", "Om de to variansene er like", "Om andelen defekte er under en grense"],
      explanation: "Fortegnstesten gjelder medianen (om opp/ned er like sannsynlig), ikke forventningen.",
    },
    {
      question: "Hva er riktig kvantilbruk for $H_1: \\sigma^2 > \\sigma_0^2$ på nivå $\\alpha$?",
      options: ["Forkast hvis observatoren $> \\chi^2_{n-1,\\alpha}$ (øvre hale)", "Forkast hvis observatoren $< \\chi^2_{n-1,1-\\alpha}$ (nedre hale)", "Forkast hvis $|$observator$| > \\chi^2_{n-1,\\alpha/2}$", "Forkast hvis observatoren $> t_{n-1,\\alpha}$"],
      explanation: "Ensidig oppover legger hele $\\alpha$ i øvre hale: $\\chi^2_{n-1,\\alpha}$.",
    },
    {
      question: "Hvorfor er et parret design ofte mer følsomt enn to uavhengige utvalg?",
      options: ["Parringen fjerner variasjonen mellom enhetene, så bare endringen står igjen", "Parringen øker antall frihetsgrader", "Parringen gjør dataene normalfordelte", "Parringen fjerner behovet for en forutsetningssjekk"],
      explanation: "Hver enhet er sin egen kontroll, så mellom-enhet-variasjon elimineres.",
    },
    {
      question: "En eksakt Poisson-test er aktuell når:",
      options: ["Raten $\\lambda_0$ er lav, så normaltilnærmingen er upålitelig", "Antall forsøk $n$ er fast og stort", "Variansen skal testes mot en referanse", "To grupper skal sammenlignes"],
      explanation: "Ved lav rate brukes Poisson-fordelingen direkte i stedet for normaltilnærming.",
    },
    {
      question: "I to-utvalgstesten er standardfeilen til $\\bar{X}_1 - \\bar{X}_2$:",
      options: ["$S_p\\sqrt{1/n_1 + 1/n_2}$", "$S_p\\sqrt{n_1 + n_2}$", "$S_p/\\sqrt{n_1 + n_2}$", "$S_D/\\sqrt{n}$"],
      explanation: "Med pooled varians blir standardfeilen $S_p\\sqrt{1/n_1+1/n_2}$.",
    },
    {
      question: "Hva er en fordel med fortegnstesten framfor den parrede t-testen?",
      options: ["Den krever ikke at differansene er normalfordelte", "Den har alltid høyere styrke", "Den bruker størrelsen på differansene mer effektivt", "Den trenger færre observasjoner for samme styrke"],
      explanation: "Fortegnstesten er robust mot ikke-normalitet fordi den bare bruker fortegn.",
    },
    {
      question: "Hvilken frihetsgrad har parret t-test med $n = 14$ par (ingen nuller)?",
      options: ["13", "14", "26", "12"],
      explanation: "Parret t-test på differansene har $n-1 = 13$ frihetsgrader.",
    },
  ],
  'tma4245-7-3': [
    {
      question: "Hva er styrken til en test?",
      options: ["Sannsynligheten for å forkaste $H_0$ når $H_1$ faktisk er sann", "Sannsynligheten for å forkaste $H_0$ når $H_0$ faktisk er sann", "Sannsynligheten for at nullhypotesen $H_0$ er sann i utgangspunktet", "Sannsynligheten for å beholde $H_0$ når $H_1$ faktisk er sann"],
      explanation: "Styrken er $P(\\text{forkast } H_0 \\mid H_1 \\text{ sann}) = 1$ minus type II-sannsynligheten. Alternativ 2 beskriver $\\alpha$ (type I), og siste alternativ er selve type II-sannsynligheten.",
    },
    {
      question: "Under hvilken parameterverdi skal styrken regnes?",
      options: ["Under den sanne verdien $\\mu_1$ som vi ønsker å oppdage", "Under nullhypotesens verdi $\\mu_0$ som vi tester mot", "Under utvalgsgjennomsnittet $\\bar{x}$ fra de innsamlede dataene", "Under gjennomsnittet av $\\mu_0$ og $\\mu_1$ til de to hypotesene"],
      explanation: "Styrken er sannsynligheten for å forkaste når $\\bar{X} \\sim N(\\mu_1, \\sigma^2/n)$. Regner man under $\\mu_0$, får man bare $\\alpha$ tilbake — den vanligste feilen.",
    },
    {
      question: "Hva er en type II-feil?",
      options: ["Å beholde $H_0$ når $H_1$ i virkeligheten er sann", "Å forkaste $H_0$ når $H_0$ i virkeligheten er sann", "Å velge feil signifikansnivå $\\alpha$ før dataene samles inn", "Å bruke t-fordelingen der z-fordelingen skulle vært brukt"],
      explanation: "Type II-feil er en oversett effekt: $H_1$ er sann, men vi forkaster ikke. Alternativ 2 er type I-feilen (falsk alarm), med sannsynlighet $\\alpha$.",
    },
    {
      question: "Hvordan rundes utvalgsstørrelsen $n$ av i en dimensjonering?",
      options: ["Alltid opp til nærmeste hele tall, ellers blir styrken for lav", "Alltid ned til nærmeste hele tall for å spare observasjoner", "Til nærmeste hele tall etter vanlige avrundingsregler", "Den trenger ikke rundes, et desimalt antall er akseptabelt"],
      explanation: "Et desimalt $n$ gir styrke *under* kravet, så vi må ta det neste hele tallet. Runder man ned, faller styrken under den ønskede verdien.",
    },
    {
      question: "Hva skjer med styrken når utvalgsstørrelsen $n$ øker, alt annet likt?",
      options: ["Styrken øker, fordi standardfeilen $\\sigma/\\sqrt{n}$ krymper", "Styrken synker, fordi flere observasjoner gir mer usikkerhet", "Styrken er uendret, siden $n$ ikke inngår i styrkeformelen", "Styrken øker bare dersom $\\alpha$ samtidig gjøres mindre"],
      explanation: "Standardfeilen $\\sigma/\\sqrt{n}$ blir mindre, så brøken $(\\mu_1-\\mu_0)/(\\sigma/\\sqrt{n})$ vokser og styrken stiger. Dette er spaken vi selv styrer i dimensjoneringen.",
    },
    {
      question: "Hva er sammenhengen mellom signifikansnivået $\\alpha$ og styrken?",
      options: ["Større $\\alpha$ gir høyere styrke, men også flere type I-feil", "Større $\\alpha$ gir lavere styrke og samtidig flere type I-feil", "$\\alpha$ og styrken er uavhengige størrelser uten sammenheng", "Mindre $\\alpha$ gir høyere styrke uten noen ulempe å snakke om"],
      explanation: "Øker $\\alpha$, blir $z_\\alpha$ mindre og forkastningsgrensen flyttes nærmere $\\mu_0$, så styrken øker — men type I-feilen (falske alarmer) øker samtidig. Det er en avveining.",
    },
    {
      question: "Hvilken kvantil svarer til styrke 0,90 i dimensjoneringsformelen?",
      options: ["$z_\\beta = z_{0{,}10} = 1{,}282$", "$z_\\beta = z_{0{,}90} = -1{,}282$", "$z_\\beta = z_{0{,}05} = 1{,}645$", "$z_\\beta = z_{0{,}20} = 0{,}842$"],
      explanation: "Styrke 0,90 betyr type II-sannsynlighet 0,10, så $z_\\beta = z_{0{,}10} = 1{,}282$. $z_{0{,}05}$ hører til styrke 0,95 og $z_{0{,}20}$ til styrke 0,80.",
    },
    {
      question: "Hva menes med å «re-standardisere» forkastningsgrensen i en styrkeregning?",
      options: ["Standardisere den kritiske grensen $k$ på nytt med $\\mu_1$ i telleren", "Regne den kritiske grensen $k$ på nytt for et større signifikansnivå $\\alpha$", "Trekke fra $\\mu_0$ i stedet for $\\mu_1$ når grensen $k$ standardiseres på nytt", "Bytte fra z-fordeling til t-fordeling i den kritiske forkastningsgrensen"],
      explanation: "Grensen $k = \\mu_0 + z_\\alpha\\sigma/\\sqrt{n}$ finnes under $H_0$, men styrken $P(\\bar{X}>k)$ regnes med $\\bar{X}\\sim N(\\mu_1,\\sigma^2/n)$, altså med $\\mu_1$ i standardiseringen $(k-\\mu_1)/(\\sigma/\\sqrt{n})$.",
    },
    {
      question: "En test forkaster ikke $H_0$, men hadde lav styrke. Hva kan vi konkludere?",
      options: ["Resultatet er inkonklusivt — lav styrke er ikke bevis for $H_0$", "$H_0$ er bevist sann, siden testen ikke fant noen effekt", "En reell effekt er utelukket fordi $p$-verdien var stor", "Testen må ha brukt feil signifikansnivå $\\alpha$"],
      explanation: "At vi ikke forkaster kan skyldes at effekten ikke finnes *eller* at testen var for svak (for lite data). En ikke-signifikant test med lav styrke er inkonklusiv, ikke en bekreftelse av $H_0$.",
    },
    {
      question: "Hva skjer med styrken når avstanden $|\\mu_1 - \\mu_0|$ øker?",
      options: ["Styrken øker, fordi en større effekt er lettere å oppdage", "Styrken synker, fordi grensen ligger lenger fra $\\mu_1$", "Styrken er lik $\\alpha$ uansett hvor stor avstanden er", "Styrken øker bare dersom $n$ samtidig gjøres mindre"],
      explanation: "Brøken $(\\mu_1-\\mu_0)/(\\sigma/\\sqrt{n})$ vokser med effekten, så styrken stiger. Ved $\\mu_1=\\mu_0$ er styrken akkurat $\\alpha$, og den øker mot 1 når $\\mu_1$ fjerner seg.",
    },
    {
      question: "Hvorfor bruker dimensjoneringsformelen for en andelstest ulike standardfeil?",
      options: ["Fordi standardfeilen bygger på $p_0$ under $H_0$ og på $p_1$ under sannheten", "Fordi $p_0$ og $p_1$ i praksis alltid er så nære at forskjellen mellom dem er ubetydelig", "Fordi andeler alltid krever en t-fordeling med sine egne frihetsgrader", "Fordi normaltilnærmingen ikke gjelder for andeler i det hele tatt"],
      explanation: "Under $H_0$ er variansen $p_0(1-p_0)$, mens den under den sanne $p_1$ er $p_1(1-p_1)$. Derfor har formelen $z_\\alpha\\sqrt{p_0(1-p_0)} + z_\\beta\\sqrt{p_1(1-p_1)}$ i telleren.",
    },
    {
      question: "En ensidig z-test har $\\mu_1 = \\mu_0$. Hva blir styrken?",
      options: ["Nøyaktig $\\alpha$, siden $H_0$ da faktisk er sann", "Nøyaktig $1 - \\alpha$, siden vi nesten alltid beholder $H_0$", "Nøyaktig $0{,}5$, siden $\\bar{X}$ er sentrert på grensen", "Udefinert, fordi styrke krever at $\\mu_1 \\ne \\mu_0$"],
      explanation: "Når $\\mu_1 = \\mu_0$ er $H_0$ sann, og «å forkaste» er da per definisjon type I-feilen med sannsynlighet $\\alpha$. Styrkefunksjonen starter altså i $\\alpha$ og stiger derfra.",
    },
    {
      question: "Hva er den kritiske grensen $k$ i $\\bar{X}$-skala for en ensidig oppover-z-test?",
      options: ["$k = \\mu_0 + z_\\alpha\\,\\sigma/\\sqrt{n}$", "$k = \\mu_1 + z_\\alpha\\,\\sigma/\\sqrt{n}$", "$k = \\mu_0 + z_{\\alpha/2}\\,\\sigma/\\sqrt{n}$", "$k = \\mu_0 - z_\\alpha\\,\\sigma/\\sqrt{n}$"],
      explanation: "Vi forkaster når $\\bar{X}$ overstiger $\\mu_0 + z_\\alpha\\sigma/\\sqrt{n}$. Grensen bygger på $\\mu_0$ (ikke $\\mu_1$), og en ensidig test bruker $z_\\alpha$ (ikke $z_{\\alpha/2}$).",
    },
    {
      question: "Hvordan påvirker mindre målestøy $\\sigma$ styrken, alt annet likt?",
      options: ["Styrken øker, akkurat som når $n$ øker", "Styrken synker, fordi mindre spredning skjuler effekten", "Styrken er upåvirket, siden $\\sigma$ ikke inngår i styrken", "Styrken øker bare for tosidige tester, ikke ensidige"],
      explanation: "Mindre $\\sigma$ gir mindre standardfeil $\\sigma/\\sqrt{n}$, som løfter brøken $(\\mu_1-\\mu_0)/(\\sigma/\\sqrt{n})$ og dermed styrken — samme mekanisme som større $n$.",
    },
    {
      question: "Hva er type II-sannsynligheten?",
      options: ["Sannsynligheten for å beholde $H_0$ når $H_1$ er sann", "Sannsynligheten for å forkaste $H_0$ når $H_0$ er sann", "Sannsynligheten for et minst like ekstremt utfall gitt $H_0$", "Sannsynligheten for å velge riktig testobservator"],
      explanation: "Type II-sannsynligheten er $P(\\text{behold } H_0 \\mid H_1 \\text{ sann})$, og styrken er $1$ minus denne. Alternativ 2 er $\\alpha$, og det tredje er p-verdiens definisjon.",
    },
  ],
  'tma4245-7-4': [
    {
      question: "Hvor mange frihetsgrader har eksponensial-pivotalen $\\frac{2\\sum X_i}{\\beta}$?",
      options: ["$2n$", "$n$", "$n-1$", "$2n-1$"],
      explanation: "For $n$ iid eksponensiale er $\\frac{2\\sum X_i}{\\beta} \\sim \\chi^2_{2n}$. Hver observasjon bidrar med 2 frihetsgrader. Å bruke $n$ eller $n-1$ er den vanligste feilen i kjeden.",
    },
    {
      question: "Hva er ML-estimatoren for forventningen $\\beta$ i en eksponensialfordeling?",
      options: ["Gjennomsnittet $\\bar{X} = \\frac{1}{n}\\sum X_i$", "Den samlede summen $\\sum X_i$ av alle de observerte verdiene", "Den minste observerte verdien i utvalget, altså $\\min_i X_i$", "Medianen til de observerte levetidsverdiene i utvalget"],
      explanation: "Log-likelihooden $\\ell(\\beta) = -n\\ln\\beta - \\frac{1}{\\beta}\\sum x_i$ deriveres og settes lik null, som gir $\\hat{\\beta} = \\bar{X}$. Det samme gjelder Poisson-raten.",
    },
    {
      question: "Hva er det første leddet i enhver kjedeoppgave?",
      options: ["Definere modellen: «$X_i$ iid med tetthet …», parameteren ukjent", "Regne ut konfidensintervallet direkte fra de oppgitte summene i teksten", "Sette opp hypotesene $H_0$ og $H_1$ med en grundig begrunnet retning", "Finne den kritiske verdien ved å slå opp i riktig kvantiltabell"],
      explanation: "Modelldefinisjonen er sensorkrav 1 og fundamentet for alt videre — et eget poeng. Uten den henger resten av kjeden i løse lufta.",
    },
    {
      question: "I det eksakte KI-et $\\left[\\frac{2\\sum x_i}{\\chi^2_{2n;\\,\\alpha/2}}, \\frac{2\\sum x_i}{\\chi^2_{2n;\\,1-\\alpha/2}}\\right]$, hvor havner den store kvantilen?",
      options: ["I nedre endepunkt, fordi vi deler på den", "I øvre endepunkt, fordi den er størst", "I begge endepunkt, siden intervallet er symmetrisk", "Utenfor intervallet, som en ren kontrollverdi"],
      explanation: "Vi deler $2\\sum x_i$ på kvantilen, så den *store* kvantilen $\\chi^2_{2n;\\,\\alpha/2}$ gir det *minste* (nedre) endepunktet. Å snu dette gir et intervall der nedre > øvre.",
    },
    {
      question: "Under hvilken parameterverdi regnes styrken i kjedens siste ledd?",
      options: ["Under den sanne verdien $\\beta_1$ som vi vil oppdage", "Under nullhypotesens verdi $\\beta_0$ som vi tester mot", "Under ML-estimatet $\\hat{\\beta}$ regnet ut fra de innsamlede dataene", "Under midtpunktet i det tilhørende konfidensintervallet"],
      explanation: "Styrken er $P(\\text{forkast} \\mid \\beta_1)$ — sannsynligheten regnes med den sanne $\\beta_1$ satt inn i pivotalens fordeling. Regner man under $\\beta_0$, får man bare $\\alpha$.",
    },
    {
      question: "For en eksponensialtest med $H_1: \\beta < \\beta_0$, i hvilken hale forkaster vi?",
      options: ["I nedre hale, fordi kort levetid gir liten observator", "I øvre hale, fordi vi tester en nedgang", "I begge haler, siden testen er tosidig", "Verken øvre eller nedre, vi bruker p-verdi i stedet"],
      explanation: "Liten $\\beta$ gir liten $\\sum X_i$ og dermed liten observator $\\frac{2\\sum X_i}{\\beta_0}$, så forkastningsområdet er nedre hale: forkast hvis observatoren $< \\chi^2_{2n;\\,1-\\alpha}$.",
    },
    {
      question: "Hva betyr det å «miste tråden» i en kjedeoppgave?",
      options: ["Å bytte ut estimatet halvveis i stedet for å bruke samme videre", "Å glemme å definere modellen skikkelig i det aller første leddet", "Å bruke for få desimaler i sluttsvaret på hver enkelt deloppgave", "Å skrive konklusjonen i ord i stedet for å oppgi den som et tall"],
      explanation: "Estimatet fra ML brukes i egenskaper, KI, test og styrke. Bruker man $\\bar{x}$ ett sted og et annet tall et annet sted, rakner kjeden. Samme størrelse skal følge hele veien.",
    },
    {
      question: "Hvorfor gir det å bruke pivotalen som testobservator en *eksakt* test?",
      options: ["Fordi pivotalens fordeling ($\\chi^2_{2n}$) gjelder uten normaltilnærming", "Fordi pivotalen alltid gir en lavere p-verdi enn alle andre testmetoder", "Fordi den bruker vesentlig flere frihetsgrader enn en vanlig z-test gjør", "Fordi den fullstendig unngår å bruke kvantiltabeller i beregningen"],
      explanation: "Pivotalen $\\frac{2\\sum X_i}{\\beta}$ er eksakt kjikvadratfordelt for alle $n$, så testen krever ingen CLT-tilnærming — i motsetning til en normaltilnærmet z-test som bare gjelder for stor $n$.",
    },
    {
      question: "To pumper har samme eksponensielle levetid $\\beta$. Hva er den samlede ML-estimatoren?",
      options: ["$\\frac{\\sum x_i + \\sum y_j}{n_1 + n_2}$, det totale snittet", "Gjennomsnittet av de to gruppesnittene $\\frac{\\bar{x} + \\bar{y}}{2}$", "Den største av de to gruppesnittene $\\bar{x}$ og $\\bar{y}$", "$\\frac{\\sum x_i + \\sum y_j}{n_1 \\cdot n_2}$, produktet i nevneren"],
      explanation: "Alle $n_1 + n_2$ observasjonene er iid med samme $\\beta$, så én felles likelihood gir det totale snittet. Snittet av snittene feilvekter den minste gruppen når $n_1 \\ne n_2$.",
    },
    {
      question: "En Weibull$(k=2)$-variabel $Y$ skal analyseres. Hvilken transformasjon gir eksponensialfordeling?",
      options: ["$W = Y^2$, som blir eksponensial med forventning $\\beta^2$", "$W = \\sqrt{Y}$, som blir eksponensial med forventning $\\beta$", "$W = \\ln Y$, som blir eksponensial med forventning $\\beta$", "$W = 1/Y$, som blir eksponensial med forventning $1/\\beta$"],
      explanation: "$P(Y^2 \\le w) = 1 - e^{-w/\\beta^2}$, altså eksponensial med forventning $\\beta^2$. Generelt gjør $Y^k$ en Weibull med form $k$ om til eksponensial, så hele pivotal-maskineriet kan brukes.",
    },
    {
      question: "To forventningsrette estimatorer for $\\beta$: $\\bar{X}$ (varians $\\beta^2/n$) og $n\\cdot X_{(1)}$ (varians $\\beta^2$). Hvilken er best?",
      options: ["$\\bar{X}$, fordi den har $n$ ganger mindre varians", "$n\\cdot X_{(1)}$, fordi den bruker den mest ekstreme verdien", "De er like gode, siden begge er forventningsrette", "Det avhenger av hvilken verdi $\\beta$ faktisk har"],
      explanation: "Blant forventningsrette estimatorer foretrekkes den med minst varians. $\\bar{X}$ har $\\beta^2/n$ mot $\\beta^2$, altså $n$ ganger mindre — den utnytter alle observasjonene, ikke bare minimum.",
    },
    {
      question: "Hva er forventningsrett-egenskapen til en estimator $\\hat{\\theta}$?",
      options: ["At $E(\\hat{\\theta}) = \\theta$ for alle verdier av $\\theta$", "At $\\hat{\\theta}$ alltid treffer $\\theta$ nøyaktig i hvert utvalg", "At variansen $\\text{Var}(\\hat{\\theta})$ er null uansett $n$", "At $\\hat{\\theta}$ konvergerer mot medianen når $n$ vokser"],
      explanation: "Forventningsrett betyr at estimatorens forventning er lik den sanne parameteren; i snitt over mange utvalg treffer den riktig. Det utelukker ikke variasjon fra utvalg til utvalg.",
    },
    {
      question: "Hvorfor tar vi logaritmen av likelihooden før vi deriverer?",
      options: ["Fordi logaritmen gjør produktet $\\prod f(x_i)$ om til en sum", "Fordi logaritmen flytter maksimumet til et annet sted", "Fordi bare logaritmen kan deriveres analytisk", "Fordi logaritmen fjerner alle ukjente parametre"],
      explanation: "$\\ln$ gjør produktet til en sum, som er langt lettere å derivere ledd for ledd. Logaritmen er strengt voksende, så maksimumspunktet er uendret — bare regningen blir enklere.",
    },
    {
      question: "Hvilken frihetsgrad har pivotalen $\\frac{2\\sum X_i}{\\theta}$ for en gamma$(k,\\theta)$ med kjent form $k$?",
      options: ["$2nk$, fordi hver observasjon svarer til $k$ eksponensialledd", "$2n$, akkurat som for ren eksponensial", "$nk-1$, som for en variansestimator", "$n-2$, som i regresjon"],
      explanation: "En gamma$(k,\\theta)$ er summen av $k$ eksponensialledd, så $\\sum X_i$ er gamma$(nk,\\theta)$ og $\\frac{2\\sum X_i}{\\theta} \\sim \\chi^2_{2nk}$. For $k=1$ faller det tilbake til $2n$.",
    },
    {
      question: "Hva skal avslutte hvert ledd i en kjedeoppgave for full uttelling?",
      options: ["En konklusjon i ord som knytter tallet til konteksten", "En kontroll av at svaret har riktig antall desimaler", "En henvisning til hvilken kvantiltabell som ble brukt", "En gjentakelse av modelldefinisjonen fra første ledd"],
      explanation: "Estimat, KI, test og styrke skal hver avsluttes med en setning i kontekst. Et rent tall uten tolkning gir sjelden full uttelling — sensor vil se at du forstår hva tallet betyr.",
    },
  ],
  'tma4245-8-1': [
    {
      question: "Hva er de tre feilantagelsene i regresjonsmodellen $Y_i=\\alpha+\\beta x_i+\\varepsilon_i$?",
      options: ["Uavhengige feil, konstant varians og normalfordelte feil", "Faste feil, voksende varians og uniform fordeling av feil", "Avhengige feil, konstant forventning og normalfordelte $x_i$", "Uavhengige feil, konstant kovarians og normalfordelte $Y_i$-snitt"],
      explanation: "Modellen krever $\\varepsilon_i$ uavhengige, $\\text{Var}(\\varepsilon_i)=\\sigma^2$ (konstant) og $\\varepsilon_i\\sim N(0,\\sigma^2)$.",
    },
    {
      question: "Hvilken av $Y_i$ og $x_i$ regnes som stokastisk i enkel lineær regresjon?",
      options: ["$Y_i$ er stokastisk; $x_i$ er faste, kjente tall", "$x_i$ er stokastisk; $Y_i$ er faste, kjente tall", "Begge er stokastiske og innbyrdes uavhengige", "Begge er faste; bare $\\varepsilon_i$ varierer tilfeldig"],
      explanation: "All tilfeldighet ligger i feilleddet, så $Y_i$ er stokastisk mens $x_i$ er valgte, faste nivåer.",
    },
    {
      question: "Hva er LS-estimatet for stigningstallet uttrykt ved de sentrerte summene?",
      options: ["$\\hat{\\beta}=S_{xy}/S_{xx}$ — kryss-sum i teller, $x$-kvadratsum i nevner", "$\\hat{\\beta}=S_{xx}/S_{xy}$ — $x$-kvadratsum i teller, kryss-sum i nevner", "$\\hat{\\beta}=S_{xy}/S_{yy}$ — kryss-sum i teller, $y$-kvadratsum i nevner", "$\\hat{\\beta}=S_{yy}/S_{xx}$ — $y$-kvadratsum i teller, $x$-kvadratsum i nevner"],
      explanation: "$\\hat{\\beta}=S_{xy}/S_{xx}$; teller er kryss-summen, nevner er $x$-kvadratsummen. Å snu dem er en klassisk feil.",
    },
    {
      question: "Hva er LS-estimatet for konstantleddet $\\hat{\\alpha}$?",
      options: ["$\\hat{\\alpha}=\\bar{y}-\\hat{\\beta}\\bar{x}$ — linja gjennom tyngdepunktet", "$\\hat{\\alpha}=\\bar{y}+\\hat{\\beta}\\bar{x}$ — snittet pluss helning ganger $\\bar{x}$", "$\\hat{\\alpha}=\\bar{x}-\\hat{\\beta}\\bar{y}$ — $x$-snittet minus helning ganger $\\bar{y}$", "$\\hat{\\alpha}=\\hat{\\beta}\\bar{x}-\\bar{y}$ — helning ganger $\\bar{x}$ minus snittet"],
      explanation: "$\\hat{\\alpha}=\\bar{y}-\\hat{\\beta}\\bar{x}$, som sikrer at linja går gjennom tyngdepunktet $(\\bar{x},\\bar{y})$.",
    },
    {
      question: "Med $S_{xx}=500$ og $S_{xy}=-350$, hva er $\\hat{\\beta}$?",
      options: ["$-0{,}70$ — responsen avtar når $x$ vokser", "$-1{,}43$ — responsen avtar når $x$ vokser", "$0{,}70$ — responsen vokser når $x$ vokser", "$1{,}43$ — responsen vokser når $x$ vokser"],
      explanation: "$\\hat{\\beta}=S_{xy}/S_{xx}=-350/500=-0{,}70$. Verdien $-1{,}43$ oppstår hvis du snur teller og nevner.",
    },
    {
      question: "Hva minimerer minste kvadraters metode?",
      options: ["Summen av kvadrerte residualer $\\sum(y_i-a-bx_i)^2$", "Summen av residualene $\\sum(y_i-a-bx_i)$ uten kvadrat", "Summen av absolutte residualer $\\sum|y_i-a-bx_i|$", "Summen av kvadrerte $x$-avvik $\\sum(x_i-\\bar{x})^2$"],
      explanation: "LS velger linja som gjør kvadratsummen av residualene minst; kvadreringen hindrer at avvik opphever hverandre.",
    },
    {
      question: "Hvorfor gir maximum likelihood samme $\\hat{\\alpha},\\hat{\\beta}$ som LS under normalfeil?",
      options: ["Kvadratsummen står med minustegn i $l$, så å maksimere $l$ er å minimere den", "Likelihooden er lineær i parametrene, så begge metoder gir samme derivert", "ML setter variansen $\\sigma^2$ lik null, og da forsvinner forskjellen", "Normalfordelingen er symmetrisk, så gjennomsnittet blir estimatet uansett"],
      explanation: "Log-likelihooden inneholder $-\\frac{1}{2\\sigma^2}\\sum(y_i-\\alpha-\\beta x_i)^2$; å maksimere den er å minimere kvadratsummen.",
    },
    {
      question: "Hvilken divisor gir det forventningsrette estimatet for $\\sigma^2$ i regresjon?",
      options: ["$n-2$, fordi to parametre ($\\alpha,\\beta$) er estimert først", "$n-1$, fordi én parameter ($\\bar{y}$) er estimert først", "$n$, fordi alle $n$ residualene brukes i summen", "$n-3$, fordi $\\alpha$, $\\beta$ og $\\sigma^2$ alle er estimert"],
      explanation: "$s^2=\\text{SSE}/(n-2)$; to frihetsgrader er brukt på $\\hat{\\alpha}$ og $\\hat{\\beta}$ før residualene måles.",
    },
    {
      question: "Hva er regnesnarveien for residualkvadratsummen SSE fra summene?",
      options: ["$\\text{SSE}=S_{yy}-\\hat{\\beta}S_{xy}$", "$\\text{SSE}=S_{yy}+\\hat{\\beta}S_{xy}$", "$\\text{SSE}=S_{xx}-\\hat{\\beta}S_{yy}$", "$\\text{SSE}=S_{xy}-\\hat{\\beta}S_{xx}$"],
      explanation: "SSE $=S_{yy}-\\hat{\\beta}S_{xy}$, som følger av oppdelingen SST $=$ SSR $+$ SSE.",
    },
    {
      question: "Med $S_{yy}=310$, $\\hat{\\beta}=-0{,}70$, $S_{xy}=-350$ og $n=12$, hva er $s^2$?",
      options: ["$6{,}5$ — SSE $=65$ delt på $n-2=10$", "$5{,}9$ — SSE $=65$ delt på $n-1=11$", "$5{,}4$ — SSE $=65$ delt på $n=12$", "$7{,}2$ — SSE $=65$ delt på $n-3=9$"],
      explanation: "SSE $=310-(-0{,}70)(-350)=65$; $s^2=65/(12-2)=6{,}5$. Divisor $n-1$ eller $n$ er feil.",
    },
    {
      question: "Hva er forventningen $E(\\hat{\\beta})$ til LS-estimatoren?",
      options: ["$\\beta$ — estimatoren er forventningsrett", "$0$ — estimatoren sentreres alltid rundt null", "$\\bar{y}/\\bar{x}$ — forholdet mellom snittene", "$\\beta+\\alpha$ — summen av begge parametrene"],
      explanation: "Med $\\hat{\\beta}=\\sum c_iY_i$ og $\\sum c_ix_i=1$, $\\sum c_i=0$ blir $E(\\hat{\\beta})=\\beta$.",
    },
    {
      question: "Hva er variansen til helningsestimatoren $\\hat{\\beta}$?",
      options: ["$\\sigma^2/S_{xx}$ — liten når $x$-verdiene er godt spredt", "$\\sigma^2/S_{yy}$ — liten når $y$-verdiene er godt spredt", "$\\sigma^2 S_{xx}$ — stor når $x$-verdiene er godt spredt", "$\\sigma^2/n$ — liten når utvalget er stort"],
      explanation: "$\\text{Var}(\\hat{\\beta})=\\sigma^2/S_{xx}$; stor spredning i $x$ (stor $S_{xx}$) gir presis helning.",
    },
    {
      question: "Hvilken egenskap ved $x_i$ brukes når $S_{xx}$ trekkes utenfor $\\text{Var}(\\cdot)$?",
      options: ["At $x_i$ er faste tall, så $S_{xx}$ er en konstant", "At $x_i$ er normalfordelte, så $S_{xx}$ har kjent fordeling", "At $x_i$ er uavhengige av hverandre, så kovariansene forsvinner", "At $x_i$ har forventning null, så leddene faller bort"],
      explanation: "Fordi $x_i$ er faste, er $\\bar{x}$ og $S_{xx}$ konstanter og kan trekkes ut av variansregningen.",
    },
    {
      question: "Hva er standardfeilen $\\text{SE}(\\hat{\\beta})$ til helningen?",
      options: ["$s/\\sqrt{S_{xx}}$ — med $s=\\sqrt{s^2}$ inn for $\\sigma$", "$s^2/\\sqrt{S_{xx}}$ — med variansestimatet i telleren", "$s/\\sqrt{S_{yy}}$ — med $y$-kvadratsummen i nevneren", "$s/\\sqrt{n}$ — med utvalgsstørrelsen i nevneren"],
      explanation: "$\\text{SE}(\\hat{\\beta})=s/\\sqrt{S_{xx}}$ estimerer $\\sqrt{\\text{Var}(\\hat{\\beta})}=\\sigma/\\sqrt{S_{xx}}$.",
    },
    {
      question: "For $\\sigma^2$ gir ML en annen divisor enn den forventningsrette estimatoren. Hvilken?",
      options: ["ML deler på $n$; den forventningsrette deler på $n-2$", "ML deler på $n-2$; den forventningsrette deler på $n$", "ML deler på $n-1$; den forventningsrette deler på $n-2$", "ML og den forventningsrette bruker begge $n-2$"],
      explanation: "ML deler kvadratsummen på $n$, mens den forventningsrette estimatoren deler på $n-2$.",
    },
  ],
  'tma4245-8-2': [
    {
      question: "Hvilken fordeling har testobservatoren $T=\\frac{\\hat{\\beta}-\\beta_0}{s/\\sqrt{S_{xx}}}$ under $H_0$?",
      options: ["$t$-fordeling med $n-2$ frihetsgrader", "$t$-fordeling med $n-1$ frihetsgrader", "Standardnormal $N(0,1)$ uansett $n$", "Kjikvadrat med $n-2$ frihetsgrader"],
      explanation: "$s$ estimerer $\\sigma$, og to parametre er brukt, så $T\\sim t_{n-2}$ — samme frihetsgrad som i $s^2$.",
    },
    {
      question: "Hva betyr det å teste $H_0:\\beta=0$ i en regresjon?",
      options: ["Om $x$ har lineær forklaringskraft for responsen $Y$", "Om konstantleddet $\\alpha$ er lik null", "Om residualene er normalfordelte", "Om feilvariansen $\\sigma^2$ er kjent på forhånd i modellen"],
      explanation: "$\\beta=0$ betyr ingen lineær sammenheng; forkastes $H_0$, har $x$ forklaringskraft.",
    },
    {
      question: "Hva er forskjellen mellom KI for $E(Y_0)$ og PI for en ny observasjon $Y_0$?",
      options: ["PI har et ekstra $1$-tall under rottegnet og er alltid bredere", "KI har et ekstra $1$-tall under rottegnet og er alltid bredere", "PI bruker $t_{n-1}$ mens KI bruker $t_{n-2}$", "KI gjelder framtidige målinger, PI gjelder gjennomsnittet"],
      explanation: "Den nye målingens eget feilledd $\\varepsilon_0$ gir PI et ekstra $1$ under rottegnet, så PI er bredere.",
    },
    {
      question: "Ved hvilken $x_0$-verdi er prediksjonsintervallet smalest?",
      options: ["Ved $x_0=\\bar{x}$, der $(x_0-\\bar{x})^2=0$", "Ved den minste $x_0$ i datasettet", "Ved den største $x_0$ i datasettet", "Ved $x_0=0$, uansett hvor $\\bar{x}$ ligger"],
      explanation: "Leddet $(x_0-\\bar{x})^2/S_{xx}$ er null i $\\bar{x}$ og vokser utover, så intervallet er smalest der.",
    },
    {
      question: "Du skal predikere strømforbruket for én bestemt framtidig dag. Hvilket intervall bruker du?",
      options: ["Prediksjonsintervall, som tar med målingens egen støy", "Konfidensintervall (KI) for forventningen, som er smalere", "Konfidensintervall for helningen $\\beta$", "Et intervall uten frihetsgrad, siden det gjelder én dag"],
      explanation: "En enkelt ny måling krever PI, der målingens eget feilledd $\\varepsilon_0$ er tatt med.",
    },
    {
      question: "Hva er hovedfaren ved å ekstrapolere utenfor dataområdet?",
      options: ["Intervallet er bredt og linjeformen er ubekreftet", "Testobservatoren bytter fortegn utenfor dataområdet", "Frihetsgraden endres fra $n-2$ til $n-1$", "Punktprediksjonen blir alltid negativ"],
      explanation: "Langt fra $\\bar{x}$ vokser $(x_0-\\bar{x})^2$, og vi har ingen data som bekrefter at linja gjelder der.",
    },
    {
      question: "Et residualplott mot predikert verdi viser en tydelig traktform. Hvilken antagelse rammes?",
      options: ["Konstant varians (homoskedastisitet)", "Uavhengighet mellom feilene", "At $x_i$ er faste tall", "At estimatoren $\\hat{\\beta}$ er forventningsrett"],
      explanation: "Systematisk voksende spredning betyr at $\\text{Var}(\\varepsilon_i)$ ikke er konstant — heteroskedastisitet.",
    },
    {
      question: "Residualene er systematisk positive i midten av $x$-området og negative i endene. Hva tyder det på?",
      options: ["Et krumningsledd mangler i modellen", "Feilene har for stor varians ved lave $x$-verdier", "Normalitetsantagelsen er brutt i halene", "Utvalget er for lite til å estimere $\\beta$"],
      explanation: "Bueform i residualene betyr at middelverdistrukturen ikke er rett; legg til et $x^2$-ledd.",
    },
    {
      question: "Hva sjekker et Q-Q-plott av residualene?",
      options: ["Om feilene er normalfordelte", "Om variansen er konstant over $x$", "Om helningen $\\beta$ er lik null", "Om $x_i$-verdiene er godt spredt"],
      explanation: "Q-Q-plottet sammenligner residualene med normalkvantiler; krumning bryter normalitetsantagelsen.",
    },
    {
      question: "I en ln-lineær modell $\\ln Y=\\alpha+\\beta x+\\varepsilon$ regnes et PI på $\\ln$-skalaen til $(1{,}8,\\ 3{,}2)$. Hva blir PI for $Y_0$?",
      options: ["$(e^{1{,}8},\\ e^{3{,}2})$ — transformer endepunktene med $\\exp$", "$(\\ln 1{,}8,\\ \\ln 3{,}2)$ — ta logaritmen av endepunktene", "$(1{,}8,\\ 3{,}2)$ — intervallet er allerede på riktig skala", "$(e^{-1{,}8},\\ e^{-3{,}2})$ — bruk negativ eksponent"],
      explanation: "Fordi $\\exp$ er monotont voksende, transformeres endepunktene med $\\exp$ og dekningsgraden bevares.",
    },
    {
      question: "Hvorfor kan vi transformere endepunktene i et ln-intervall direkte tilbake med $\\exp$?",
      options: ["Fordi $\\exp$ er monotont voksende og bevarer rekkefølgen", "Fordi $\\exp$ er en lineær funksjon av argumentet", "Fordi intervallet er symmetrisk om punktprediksjonen", "Fordi variansen er den samme på begge skalaer"],
      explanation: "Monotone funksjoner bevarer ulikheter, så $L<\\ln Y_0<U$ gir $e^L<Y_0<e^U$ med samme dekning.",
    },
    {
      question: "Et $95\\,\\%$ KI for $\\beta$ er $(0{,}3,\\ 1{,}1)$. Hva konkluderer du om $H_0:\\beta=0$ på $5\\,\\%$-nivå?",
      options: ["$H_0$ forkastes, siden $0$ ligger utenfor intervallet", "$H_0$ beholdes, siden $0$ ligger utenfor intervallet", "Man kan ikke konkludere fra et KI om en test", "$H_0$ forkastes bare hvis hele intervallet er negativt"],
      explanation: "Ligger nullverdien utenfor KI-et, forkastes $H_0$ på tilsvarende nivå — test og KI er ekvivalente.",
    },
    {
      question: "Modellen $Y=\\alpha+\\beta x+\\gamma x^2+\\varepsilon$ kalles «lineær i parametrene». Hva betyr det?",
      options: ["Parametrene inngår lineært, så LS kan brukes", "At $Y$ er en rett linje i $x$", "At $\\gamma$ må være null for at LS skal virke", "At modellen bare gjelder for positive $x$-verdier"],
      explanation: "LS krever linearitet i parametrene, ikke i $x$; $x^2$ brukes som en ekstra forklaringsvariabel.",
    },
    {
      question: "Hvilken standardfeil brukes i testobservatoren for helningen?",
      options: ["$\\text{SE}(\\hat{\\beta})=s/\\sqrt{S_{xx}}$", "$\\text{SE}(\\hat{\\beta})=s/\\sqrt{n}$", "$\\text{SE}(\\hat{\\beta})=s^2/\\sqrt{S_{xx}}$", "$\\text{SE}(\\hat{\\beta})=s/\\sqrt{S_{yy}}$"],
      explanation: "$\\text{SE}(\\hat{\\beta})=s/\\sqrt{S_{xx}}$ estimerer $\\sqrt{\\text{Var}(\\hat{\\beta})}=\\sigma/\\sqrt{S_{xx}}$.",
    },
    {
      question: "Et residualplott mot $x$ er en jevn, strukturløs sky rundt null med konstant spredning. Hva betyr det?",
      options: ["Modellantagelsene ser ut til å holde", "At helningen $\\beta$ er signifikant forskjellig fra null", "At prediksjonsintervallet er unødvendig bredt", "At normalitet er brutt men varians er konstant"],
      explanation: "Fravær av mønster (sky rundt null, jevn spredning) er nettopp den sunne diagnosen.",
    },
  ],
  'tma4245-8-3': [
    {
      question: "Hvordan ser regresjonsmodellen uten konstantledd ut?",
      options: ["$Y_i=\\beta x_i+\\varepsilon_i$ (tvunget gjennom origo)", "$Y_i=\\alpha+\\beta x_i+\\varepsilon_i$, med fritt konstantledd", "$Y_i=\\alpha+\\varepsilon_i$, uten forklaringsvariabel", "$Y_i=\\beta x_i^2+\\varepsilon_i$, med kvadratisk ledd"],
      explanation: "Origo-modellen dropper $\\alpha$: $Y_i=\\beta x_i+\\varepsilon_i$, brukt når $E(Y)=0$ ved $x=0$.",
    },
    {
      question: "Hva er LS-estimatoren for $\\beta$ i origo-modellen?",
      options: ["$\\hat{\\beta}=\\sum x_iY_i/\\sum x_i^2$, fra råsummene", "$\\hat{\\beta}=S_{xy}/S_{xx}$, fra de sentrerte summene", "$\\hat{\\beta}=\\sum Y_i/\\sum x_i$, fra de rene summene", "$\\hat{\\beta}=\\bar{Y}-\\bar{x}$, fra snittene"],
      explanation: "Minimering av $\\sum(Y_i-\\beta x_i)^2$ gir $\\hat{\\beta}=\\sum x_iY_i/\\sum x_i^2$ — råsummer, ikke sentrerte.",
    },
    {
      question: "Når er det faglig riktig å bruke regresjon gjennom origo?",
      options: ["Når teorien gir $E(Y)=0$ ved $x=0$ (proporsjonal)", "Alltid, siden det gir én parameter mindre å estimere", "Når residualplottet viser en traktform", "Når utvalget er lite, typisk under ti observasjoner"],
      explanation: "Origo-modellen krever en faglig grunn til at responsen er null ved $x=0$; ellers behold konstantleddet.",
    },
    {
      question: "De tre kandidatene $\\hat{\\beta}_1=\\sum x_iY_i/\\sum x_i^2$, $\\hat{\\beta}_2=\\frac{1}{n}\\sum Y_i/x_i$ og $\\hat{\\beta}_3=\\bar{Y}/\\bar{x}$ — hva har de felles?",
      options: ["Alle tre er forventningsrette for $\\beta$", "Alle tre har nøyaktig samme varians", "Alle tre krever $n-2$ frihetsgrader", "Bare $\\hat{\\beta}_1$ er en lineærkombinasjon av $Y_i$"],
      explanation: "Med $E(Y_i)=\\beta x_i$ gir hver av dem $E(\\hat{\\beta}_k)=\\beta$; de skiller seg i varians, ikke forventning.",
    },
    {
      question: "Hvilken av de tre estimatorene har minst varians og bør velges?",
      options: ["$\\hat{\\beta}_1$ (LS), med $\\text{Var}=\\sigma^2/\\sum x_i^2$", "$\\hat{\\beta}_2$, med $\\text{Var}=\\frac{\\sigma^2}{n^2}\\sum 1/x_i^2$", "$\\hat{\\beta}_3$, med $\\text{Var}=\\sigma^2/(n\\bar{x}^2)$", "De er likeverdige, så valget er vilkårlig"],
      explanation: "LS-estimatoren $\\hat{\\beta}_1$ har minst varians (Gauss–Markov / Cauchy–Schwarz), og alle er forventningsrette.",
    },
    {
      question: "Hva er variansen til $\\hat{\\beta}_2=\\frac{1}{n}\\sum Y_i/x_i$?",
      options: ["$\\frac{\\sigma^2}{n^2}\\sum \\frac{1}{x_i^2}$", "$\\frac{\\sigma^2}{n^2}\\sum \\frac{1}{x_i}$", "$\\frac{\\sigma^2}{n}\\sum \\frac{1}{x_i^2}$", "$\\frac{\\sigma^2}{\\sum x_i^2}$"],
      explanation: "Med vekter $c_i=1/(nx_i)$ er $\\text{Var}=\\sigma^2\\sum c_i^2=\\frac{\\sigma^2}{n^2}\\sum 1/x_i^2$; husk kvadratet på $x_i$.",
    },
    {
      question: "Hvilken frihetsgrad har testobservatoren for $\\beta$ i origo-modellen?",
      options: ["$n-1$, fordi bare $\\beta$ er estimert", "$n-2$, som i modellen med konstantledd", "$n$, fordi ingen parametre koster frihetsgrad", "$n-3$, fordi $\\beta$ og $\\sigma^2$ begge estimeres"],
      explanation: "Uten konstantledd estimeres bare $\\beta$, så bare én frihetsgrad tapes: $t_{n-1}$.",
    },
    {
      question: "Hvordan estimeres feilvariansen $\\sigma^2$ i origo-modellen?",
      options: ["$s^2=\\text{SSE}/(n-1)$", "$s^2=\\text{SSE}/(n-2)$", "$s^2=\\text{SSE}/n$", "$s^2=\\text{SSE}/(n+1)$"],
      explanation: "Bare én parameter estimeres, så divisoren er $n-1$: $s^2=\\text{SSE}/(n-1)$.",
    },
    {
      question: "Hva er den vanligste regnefeilen når variansene til de tre kandidatene skal sammenlignes?",
      options: ["Å glemme kvadratet på $x_i$ i nevneren", "Å bruke $t$-fordeling i stedet for normalfordeling", "Å regne forventningen i stedet for variansen", "Å dele på $n$ i stedet for $n-1$ i selve estimatet"],
      explanation: "Variansene inneholder $\\sum x_i^2$ og $\\sum 1/x_i^2$; skriver du $\\sum x_i$ eller $\\sum 1/x_i$, blir alt galt.",
    },
    {
      question: "Hvorfor holder det ikke å vise forventningsretthet når man velger blant de tre estimatorene?",
      options: ["Fordi alle tre er forventningsrette; variansen må avgjøre valget", "Fordi forventningsretthet er umulig å vise for $\\hat{\\beta}_3$", "Fordi bare skjeve estimatorer kan sammenlignes", "Fordi variansen alltid er lik for forventningsrette estimatorer"],
      explanation: "Alle tre treffer $\\beta$ i snitt, så det er presisjonen (minst varians) som skiller dem — velg $\\hat{\\beta}_1$.",
    },
  ],
  'tma4245-9-1': [
    {
      question: "Hva sier inversjonsmetoden?",
      options: ["Er $U\\sim\\text{uniform}(0,1)$, har $X=F^{-1}(U)$ fordelingsfunksjon $F$", "Er $U\\sim\\text{uniform}(0,1)$, har $X=f^{-1}(U)$ tetthet $f$", "Er $U\\sim\\text{uniform}(0,1)$, har $Y=F(U)$ fordeling $F^{-1}$", "Er $X\\sim\\text{uniform}(0,1)$, har $U=F^{-1}(X)$ tetthet $f$"],
      explanation: "Metoden mater uniforme tall inn i den inverse fordelingsfunksjonen $F^{-1}$; resultatet har fordelingsfunksjon $F$. Man går alltid via $F$, ikke tettheten $f$.",
    },
    {
      question: "Hvilken kjede av likheter er beviset for inversjonsmetoden?",
      options: ["$P(F^{-1}(U)\\le x)=P(U\\le F(x))=F(x)$", "$P(F^{-1}(U)\\le x)=P(U\\ge F(x))=1-F(x)$", "$P(F^{-1}(U)\\le x)=P(U\\le f(x))=f(x)$ direkte", "$P(F^{-1}(U)\\le x)=P(F(U)\\le x)=F(x)$ per def."],
      explanation: "Fordi $F$ er voksende, er $F^{-1}(U)\\le x$ ekvivalent med $U\\le F(x)$, og for uniform er $P(U\\le u)=u$ med $u=F(x)$.",
    },
    {
      question: "Får du en tetthet $f$, er første steg i inversjonsmetoden å:",
      options: ["integrere $f$ opp til fordelingsfunksjonen $F$", "løse likningen $f(x)=u$ direkte for $x$-verdien", "trekke $u$ og sette den rett inn i tettheten $f$", "derivere $f$ for å finne den inverse funksjonen $F^{-1}$"],
      explanation: "Metoden bruker $F$, ikke $f$. Du integrerer $f$ til $F$, løser $F(x)=u$, og implementerer $F^{-1}$.",
    },
    {
      question: "For eksponensial med forventning $\\beta$ ($F(x)=1-e^{-x/\\beta}$) er den inverse:",
      options: ["$F^{-1}(u)=-\\beta\\ln(1-u)$", "$F^{-1}(u)=-\\ln(u)/\\beta$", "$F^{-1}(u)=\\beta\\,e^{-u/\\beta}$", "$F^{-1}(u)=1-e^{-u/\\beta}$"],
      explanation: "Løs $1-e^{-x/\\beta}=u$: $e^{-x/\\beta}=1-u$, så $x=-\\beta\\ln(1-u)$. I kode: `-beta*np.log(1-u)`.",
    },
    {
      question: "For en hale-tetthet med $F(x)=1-x^{-k}$ på $(1,\\infty)$ er den inverse:",
      options: ["$F^{-1}(u)=(1-u)^{-1/k}$", "$F^{-1}(u)=(1-u)^{-k}$", "$F^{-1}(u)=(1-u)^{1/k}$", "$F^{-1}(u)=u^{-1/k}$"],
      explanation: "Løs $1-x^{-k}=u$: $x^{-k}=1-u$, så $x=(1-u)^{-1/k}$. I kode: `(1-u)**(-1/k)`.",
    },
    {
      question: "Hva gjør `np.random.uniform(size=n)`?",
      options: ["trekker $n$ uavhengige tall fra uniform$(0,1)$", "trekker ett enkelt tall fra uniform$(0,n)$ per kall, i en løkke", "trekker $n$ tall fra en standardnormal fordeling med $\\sigma=1$", "trekker $n$ heltall jevnt fordelt mellom 0 og $n$ (terningkast)"],
      explanation: "Den gir hele råstoffvektoren på én gang (vektorisert), klar til å settes inn i $F^{-1}$.",
    },
    {
      question: "Skal du simulere $X\\sim N(100,\\,25)$ (varians 25), hva skriver du?",
      options: ["`np.random.normal(loc=100, scale=5, size=n)`", "`np.random.normal(loc=100, scale=25)`", "`np.random.normal(loc=5, scale=100)`", "`np.random.normal(loc=100, var=25)`"],
      explanation: "`scale` er standardavviket $\\sigma=\\sqrt{25}=5$, ikke variansen. Å sende 25 gir en altfor bred fordeling.",
    },
    {
      question: "I `np.random.normal(loc, scale, size=n)` er `scale`:",
      options: ["standardavviket $\\sigma$", "variansen $\\sigma^2$", "forventningen $\\mu$ selv", "halve bredden på et 95 %-intervall"],
      explanation: "`loc` er forventningen og `scale` er standardavviket. Dette er den vanligste numpy-fella i emnet.",
    },
    {
      question: "Hvorfor bruker vi `np.var(x, ddof=1)` for empirisk varians?",
      options: ["den deler på $n-1$ og blir forventningsrett", "den deler på $n$ og gir raskere utregning enn standard", "den deler på $n+1$ og korrigerer for veldig store utvalg", "den deler på $\\sqrt{n}$ og gir standardfeilen med det samme"],
      explanation: "Standard `np.var` deler på $n$; `ddof=1` deler på $n-1$, som gir utvalgsvariansen $S^2$ fra kap. 5.1 ($E(S^2)=\\sigma^2$).",
    },
    {
      question: "Hva estimerer `np.mean(x > 2)` når `x` er en vektor av trekk?",
      options: ["sannsynligheten $P(X>2)$, altså andelen av trekkene over 2", "forventningen $E(X)$ blant trekk over 2", "antallet trekk som er større enn tallet 2", "variansen til trekkene som overstiger 2"],
      explanation: "`x > 2` er en boolsk vektor; gjennomsnittet av den er andelen `True`, altså et estimat på $P(X>2)$.",
    },
    {
      question: "Hva er hovedfordelen med å vektorisere framfor en `for`-løkke?",
      options: ["hele vektoren trekkes og transformeres elementvis på én gang", "løkken gir mer nøyaktige tilfeldige tall enn vektorisering gjør", "vektorisering fjerner behovet for å importere numpy i det hele tatt", "en løkke trengs fordi `np.random.uniform` bare gir ett tall om gangen"],
      explanation: "`np.random.uniform(size=n)` gir hele vektoren, og uttrykk som `-beta*np.log(1-u)` regnes elementvis — idiomatisk numpy.",
    },
    {
      question: "En snutt returnerer `-3*np.log(1-u)` med uniform `u`. Hvilken fordeling?",
      options: ["eksponensial med forventning $\\beta=3$", "eksponensial med forventning $\\beta=1/3$", "normalfordeling med forventning 3", "uniform på intervallet $(0,3)$"],
      explanation: "`-beta*np.log(1-u)` er inversjonsmetoden $-\\beta\\ln(1-u)$ med $\\beta=3$.",
    },
    {
      question: "Koden `return (1 - u)**(-1/4)` genererer trekk med fordelingsfunksjon:",
      options: ["$F(x)=1-x^{-4}$ for $x>1$", "$F(x)=1-x^{-1/4}$ for $x>1$", "$F(x)=x^{4}$ for $0<x<1$", "$F(x)=1-e^{-4x}$ for $x>0$"],
      explanation: "$(1-u)^{-1/4}=F^{-1}(u)$ løser $1-x^{-4}=u$, altså hale-tettheten med $F=1-x^{-4}$.",
    },
    {
      question: "Hvilket funksjonsmønster følger simuleringene i kapitlet?",
      options: ["trekk `u = np.random.uniform(size=n)`, returner $F^{-1}(u)$", "kall `np.random.uniform(F(n))` og returner det i én enkelt linje", "løkk `for i in range(n)` og trekk ett og ett tall om gangen", "returner `f(u)` der `f` er selve tettheten til fordelingen"],
      explanation: "Trekk råstoffet på én linje, transformer vektorisert på neste. Alt av simulering bruker dette skjelettet.",
    },
    {
      question: "Hvorfor gir «delvis» simuleringskode ofte bare delvis uttelling?",
      options: ["sensorkravet er at koden er komplett og faktisk kjørbar", "delvis kode regnes alltid som helt feil og gir null poeng totalt", "delvis kode gir full uttelling så lenge selve ideen er riktig nok", "koden vurderes ikke i det hele tatt, bare den analytiske utledningen"],
      explanation: "Python/MC-oppgavene måler at du kan skrive kode som kjører; ufullstendig kode gir tilsvarende ufullstendig uttelling.",
    },
  ],
  'tma4245-9-2': [
    {
      question: "Hvorfor kan en sannsynlighet estimeres med et gjennomsnitt?",
      options: ["en sannsynlighet er en forventet indikator: $E[\\mathbf{1}(A)]=P(A)$", "et gjennomsnitt er alltid lik medianen når utvalget blir stort nok", "indikatoren $\\mathbf{1}(A)$ er alltid lik 1 uansett hvilken hendelse", "variansen til en indikatorvariabel er alltid nøyaktig lik null"],
      explanation: "Indikatoren er 1 ved treff og 0 ellers, så forventningen er $P(A)$; et gjennomsnitt av indikatorer estimerer den.",
    },
    {
      question: "Hva er Monte Carlo-estimatet $\\hat p$ i numpy?",
      options: ["`np.mean(betingelse)`, andelen sanne trekk", "`np.sum(betingelse)`, antallet trekk som er sanne totalt", "`np.var(betingelse, ddof=1)`, spredningen i betingelsen", "`np.max(betingelse)`, det aller mest ekstreme trekket"],
      explanation: "$\\hat p=\\frac{1}{B}\\sum\\mathbf{1}(A)$ er nettopp gjennomsnittet av indikatorene, altså `np.mean(betingelse)`.",
    },
    {
      question: "Hva er variansen til MC-estimatet $\\hat p$ ved $B$ simuleringer?",
      options: ["$p(1-p)/B$, så SE avtar som $1/\\sqrt{B}$", "$p(1-p)$, altså helt uavhengig av antall simuleringer $B$", "$p(1-p)\\cdot B$, så usikkerheten vokser når $B$ øker", "$\\sqrt{p(1-p)/B}$, altså identisk med selve standardfeilen"],
      explanation: "Antall treff er binomisk, så $\\text{Var}(\\hat p)=p(1-p)/B$; firedobling av $B$ halverer standardfeilen.",
    },
    {
      question: "En simulert p-verdi skal genereres under hvilken fordeling?",
      options: ["under $H_0$, altså med parametrene satt til nullverdiene", "under alternativet $\\mu_1$, den sanne verdien", "under snittet av $H_0$ og $\\mu_1$", "under den empiriske fordelingen til dataene"],
      explanation: "P-verdien er sannsynligheten, beregnet under $H_0$, for en observator minst så ekstrem som den observerte.",
    },
    {
      question: "For en ensidig test oppover er den simulerte p-verdien:",
      options: ["`np.mean(t_sim >= t_obs)`", "`np.mean(t_sim <= t_obs)`", "`np.mean(np.abs(t_sim) <= t_obs)`", "`np.mean(t_sim == t_obs)`"],
      explanation: "«Minst så ekstrem» oppover betyr minst så stor, altså `>=`. Retningen må følge $H_1$.",
    },
    {
      question: "En simulert styrke skal genereres under hvilken fordeling?",
      options: ["under alternativet $\\mu_1$, den sanne parameterverdien i modellen", "under $H_0$, altså nullverdien $\\mu_0$", "under den kritiske grensen $k$", "under en uniform fordeling over parametrene"],
      explanation: "Styrken er sannsynligheten for å forkaste når $H_1$ er sann, så dataene trekkes under den sanne $\\mu_1$.",
    },
    {
      question: "I en styrkesimulering trekkes data under $\\mu_1$, men observatoren standardiseres mot:",
      options: ["$\\mu_0$, verdien vi tester mot", "$\\mu_1$, som er den sanne verdien i modellen", "gjennomsnittet av $\\mu_0$ og $\\mu_1$ til sammen", "det simulerte gjennomsnittet i hvert enkelt datasett"],
      explanation: "Dette speiler re-standardiseringen i kap. 7.3: data fra sannheten $\\mu_1$, men observator målt mot påstanden $\\mu_0$.",
    },
    {
      question: "Hva skjer om du trekker under $\\mu_0$ når du skal estimere styrken?",
      options: ["du får omtrent signifikansnivået $\\alpha$ i stedet", "du får omtrent styrken pluss $\\alpha$ lagt sammen til ett tall", "du får alltid nøyaktig 0,5 helt uansett hvilke verdier du bruker", "du får den tosidige p-verdien i stedet for styrken du ville ha"],
      explanation: "Under $H_0$ er andelen forkastninger per definisjon $\\alpha$, ikke styrken. Det er den vanligste feilen i delen.",
    },
    {
      question: "I feilforplantning ved simulering estimeres variansen med:",
      options: ["`np.var(g_verdier, ddof=1)`, en empirisk varians", "`np.mean(g_verdier)`, altså gjennomsnittet av de avledede verdiene", "`np.var(g_verdier)` med standard `ddof=0` (deler på $n$)", "`np.std(g_verdier)` opphøyd i fjerde potens for sikkerhets skyld"],
      explanation: "Man trekker inngangene, regner $g(\\cdot)$ per trekk og tar den empiriske variansen med `ddof=1`, som kontrolleres mot deltametoden.",
    },
    {
      question: "Hva er forskjellen på $B$ og $n$ i en styrkesimulering?",
      options: ["$B$ er antall simuleringer; $n$ er utvalget i hver", "$B$ og $n$ er rett og slett to ulike navn på det samme antallet trekk", "$B$ er utvalgsstørrelsen i testen; $n$ er antall Monte Carlo-simuleringer", "$B$ er antall haler i testen; $n$ er signifikansnivået $\\alpha$ vi velger"],
      explanation: "$B$ styrer hvor skarpt MC-estimatet er ($1/\\sqrt{B}$); $n$ hører til selve testen. Å blande dem er en klassisk feil.",
    },
    {
      question: "For et parallellsystem av komponenter er systemets levetid:",
      options: ["$M=\\max$ av levetidene (systemet lever til den aller siste komponenten dør)", "$M=\\min$ av levetidene (dør med den første)", "summen av levetidene til komponentene", "gjennomsnittet av levetidene i systemet"],
      explanation: "Parallell = maks (kobling kap. 4.1); serie = min. I numpy: `np.maximum` mot `np.minimum`.",
    },
    {
      question: "`np.random.exponential(scale=6, size=B)` trekker fra:",
      options: ["eksponensial med forventning $\\beta=6$", "eksponensial med rate $\\lambda=6$ per tidsenhet", "eksponensial med varians lik 6 (ikke forventning)", "uniform fordeling på intervallet fra 0 til 6"],
      explanation: "numpys `scale` er forventningen $\\beta$ — samme parametrisering som inversjonsmetoden `-6*np.log(1-u)`.",
    },
    {
      question: "Hvorfor bruker vi stor $B$ (f.eks. $10^6$) i Monte Carlo?",
      options: ["SE $\\sqrt{p(1-p)/B}$ krymper som $1/\\sqrt{B}$", "stor $B$ fjerner behovet for å sette en seed i simuleringen", "stor $B$ gjør at estimatet blir eksakt lik den analytiske fasiten", "stor $B$ endrer hvilken fordeling dataene faktisk trekkes fra"],
      explanation: "Presisjonen øker med antall simuleringer; MC-svar varierer med seed, så stor $B$ demper støyen.",
    },
    {
      question: "Hvordan kan en simulering kontrollere et deltametode-svar?",
      options: ["regn $g$ per trekk og ta `np.var(..., ddof=1)`, sammenlign med delta", "deriver $g$ på nytt og sjekk fortegnet", "øk antall desimaler i den analytiske utregningen", "bytt variansen med standardavviket i formelen"],
      explanation: "Simuleringen gir en empirisk varians for $g$; ligger den tett på $[g'(\\mu)]^2\\text{Var}(\\hat\\theta)$, er begge kontrollert (kap. 5.3).",
    },
    {
      question: "Liten og stor $B$ gir samme forventede estimat, men skiller seg i:",
      options: ["presisjonen — liten $B$ gir mer støyete estimater", "forventningsrettheten — liten $B$ gir systematisk skjeve estimater hver gang", "hvilken hendelse som estimeres — liten $B$ endrer selve betingelsen som telles", "retningen på testen — liten $B$ gjør en ensidig test tosidig automatisk"],
      explanation: "MC-estimatet er forventningsrett uansett $B$; det er variansen ($p(1-p)/B$) som avhenger av $B$.",
    },
  ],
};

export default quizData_tma4245;

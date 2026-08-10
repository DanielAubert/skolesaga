import type { QuizQuestion } from './quiz-data';

const quizData_econ2310: Record<string, QuizQuestion[]> = {
  'econ2310-0-1': [
    {
      question: "Hva er eneste tillatte hjelpemiddel på ECON2310-eksamen?",
      options: ["Ordbok", "Ordbok og kalkulator", "Formelsamling og kalkulator", "Egne notater på inntil to sider"],
      explanation: "Eksamen er en tretimers skoleeksamen i Inspera der ordbok er eneste tillatte hjelpemiddel. Du trenger heller ikke kalkulator: emnet har ingen rene regneoppgaver.",
    },
    {
      question: "Hvordan er ECON2310-eksamen bygget opp?",
      options: ["Få og store oppgaver med til sammen 5–12 delspørsmål", "En kortsvarsdel etterfulgt av to store oppgaver", "Ett stort essay uten deloppgaver i alle sett", "Tjue korte spørsmål med lik vekt"],
      explanation: "Formatet er få, store oppgaver med 5–12 delspørsmål totalt. Kortsvarsbatteriet finnes ikke i dette emnet — det er den største formforskjellen fra ECON1310. Ett sett hadde riktignok én stor drøftingsoppgave uten deloppgaver, men det er en variant av storoppgaveformatet, ikke regelen.",
    },
    {
      question: "Oppgaveteksten gir deg et relasjonssett uten forklaring. Hva forventer sensor at du gjør?",
      options: ["Definerer symbolene, forklarer den økonomiske logikken i hver ligning og angir fortegn, før du regner eller tegner", "Setter inn i ligningene og løser for den etterspurte variabelen", "Gjengir relasjonene ordrett slik de står i oppgaveteksten, og går deretter rett videre til figuren og regnestykket", "Velger den ene relasjonen du husker best og bruker bare den"],
      explanation: "Relasjonene oppgis bevisst uforklart fordi forklaringen ER oppgaven — dette er sensorens metaregel nummer én. Å regne på uforklarte ligninger gir svært lite uttelling, selv om regnestykket er riktig.",
    },
    {
      question: "Hvilke to emneblokker bytter på å bære eksamenssettene i ECON2310?",
      options: ["Vekstmodellen og åpen økonomi med renteregel", "Vekstmodellen og nasjonalregnskapet", "Åpen økonomi og arbeidsmarkedsteori", "Pengeteori og offentlige finanser"],
      explanation: "Vekstmodellen er i 7 av 13 sett og den åpne modellen i 6 av 13. Nasjonalregnskap er ECON1310-stoff og har null forekomster her.",
    },
    {
      question: "Hva har vært mønsteret på utsatt eksamen i ECON2310?",
      options: ["Rent vekstsett tre år på rad", "Rent åpen økonomi-sett tre år på rad", "Alltid en blanding med halvparten fra hver blokk", "Kortsvarsoppgaver i stedet for storoppgaver"],
      explanation: "Utsatt eksamen har fulgt sin egen mal: hele settet er vekstmodellen, bygget over samme kjede med oppsett, figurer, komparativ statikk og en utvidelse til slutt.",
    },
    {
      question: "Hvilket av disse temaene har null forekomster på de 13 settene?",
      options: ["Modeller med LM-kurve", "Renteparitet og valutakurs", "Gullregelen", "Modeller med flere likevekter"],
      explanation: "Apparatet med LM-kurve, prisnivådiagrammer av AD-AS-typen og intertemporale vekstmodeller er utelatt fra emnet. De tre andre er derimot testet: renteparitet i 3 sett, gullregelen i 2 og flere likevekter i 4.",
    },
    {
      question: "Sensorveiledningen skiller B fra A. Hva er skillet i praksis?",
      options: ["Selvstendig begrepsbruk — for eksempel at du selv trekker inn kontrasten mellom tilbudsbestemt og etterspørselsbestemt produksjon", "Antall riktige delsvar — en A krever at samtlige delspørsmål er besvart uten regnefeil eller utelatelser, mens en B typisk har ett eller to hull i utregningene", "Lengden på besvarelsen", "At besvarelsen er helt uten feil i samtlige delspørsmål, også det siste og vanskeligste, og at alle figurer er tegnet nøyaktig"],
      explanation: "Alt riktig med brukbare forklaringer ligger an til B; det som løfter til A er reell innsikt og at kandidaten trekker inn begrepsapparatet uoppfordret. Feilfrihet er uttrykkelig ikke kravet — se metaregel 6.",
    },
    {
      question: "Du har regnet ut virkningen på samlet produksjon og rente. Hva sier metaregel 3 at du skal gjøre videre?",
      options: ["Spore virkningen videre til konsum, investeringer, eksport, import, ledighet og inflasjon", "Kontrollere regnestykket en gang til, siden det er i regningen de fleste taper poeng på denne typen oppgave", "Tegne figuren på nytt i større målestokk", "Gå videre til neste delspørsmål, siden hovedstørrelsene er funnet"],
      explanation: "Dette er å åpne panseret. Redusert form gir bare hovedstørrelsene; komponentene bak kan bevege seg i motsatt retning av hverandre, og det er ofte der de ubestemte fortegnene dukker opp.",
    },
    {
      question: "Modellen gir at konsumet trekkes i to retninger samtidig. Hva skal du skrive?",
      options: ["At effekten er ubestemt, og hva den avhenger av", "Den retningen som virker mest sannsynlig", "At effekten er null fordi de to virkningene oppveier hverandre", "At modellen er uegnet til å svare på spørsmålet"],
      explanation: "Ubestemte fortegn signeres aldri, men de er heller ikke et ikke-svar: du skal si eksplisitt hva utfallet avhenger av. At de to virkningene nøyaktig oppveier hverandre, er et spesialtilfelle du ikke kan påstå uten begrunnelse.",
    },
    {
      question: "Hvorfor er tallene i frekvenstabellen beheftet med større usikkerhet enn i et emne med to eksamener i året?",
      options: ["Emnet har bare høsteksamen, så grunnlaget er 13 sett", "Sensorveiledningene mangler for alle utsatt-settene", "Oppgavene er ulike fra år til år uten gjenkjennelig mønster", "Frekvensene er anslag og ikke opptalte belegg"],
      explanation: "Grunnlaget er 25 dokumenter fordelt på 13 sett fordi emnet bare har høsteksamen. Frekvensene er faktisk opptalte belegg, og rotasjonsmønsteret og sensorkravene har vært stabile — men ett nytt sett flytter prosentene mer enn i et emne med dobbelt så mange sett.",
    },
  ],
  'econ2310-1-1': [
    {
      question: "Hva betyr konstant skalaavkastning i produktfunksjonen $Y=F(K,L)$?",
      options: ["At en dobling av både kapital og arbeidskraft dobler produksjonen", "At en dobling av kapitalen alene også dobler produksjonen, uavhengig av hvor mange arbeidere som finnes", "At produksjonen per arbeider holder seg konstant over tid, uansett kapital", "At kapitalslitet utgjør en fast andel av kapitalbeholdningen hvert år"],
      explanation: "Konstant skalaavkastning gjelder når begge innsatsfaktorene skaleres likt: $F(\\lambda K,\\lambda L)=\\lambda F(K,L)$. Dobling av kapitalen alene gir mindre enn dobling av produksjonen — det er nettopp derfor grenseproduktiviteten avtar.",
    },
    {
      question: "Hvorfor kan modellen skrives på formen $y=f(k)$?",
      options: ["Fordi konstant skalaavkastning lar oss skalere med $\\lambda=1/L$", "Fordi vi i tillegg antar at arbeidskraften er konstant", "Fordi produktfunksjonen antas å være lineær", "Fordi kapitalslitet er proporsjonalt med kapitalen"],
      explanation: "Per arbeider-formen er en konsekvens av skalaantakelsen, ikke en ny forutsetning. Setter du $\\lambda=1/L$ i homogenitetsegenskapen, får du $Y/L=F(K/L,1)$.",
    },
    {
      question: "Hva er den økonomiske begrunnelsen for at $f''(k)<0$?",
      options: ["Når bare kapitalen per arbeider øker, blir arbeidskraften den knappe faktoren", "Fordi maskiner slites ut over tid og må erstattes av nye investeringer i hver eneste periode", "Fordi spareraten er mindre enn 1, slik at bare en del av produksjonen investeres", "Fordi befolkningen vokser, slik at kapitalen hele tiden må deles på stadig flere"],
      explanation: "Konkaviteten følger av at skalaantakelsen gjelder når BEGGE faktorene øker. Øker bare kapitalen, holdes arbeidskraften fast, og hver ny maskin per arbeider gir mindre tillegg. Slitasje og befolkningsvekst hører hjemme i utvanningsleddet, ikke i produktfunksjonens form.",
    },
    {
      question: "Hva sier bevegelsesligningen $\\Delta k = s f(k) - (n+\\delta)k$?",
      options: ["Kapitalen per arbeider endres med investering per arbeider minus utvanning", "Produksjonen per arbeider er lik sparingen per arbeider fratrukket kapitalslitet i samme periode", "Samlet kapital vokser med spareraten fratrukket befolkningsveksten i hver periode", "Konsumet per arbeider er lik produksjonen minus investeringene"],
      explanation: "Ligningen er en bevegelsesligning for en beholdning målt per arbeider: tilførselen $sf(k)$ minus avgangen $(n+\\delta)k$. Den handler verken om nivået på $y$ eller om konsumet direkte.",
    },
    {
      question: "Hva består utvanningsleddet $(n+\\delta)k$ av?",
      options: ["Erstatning for slitasje pluss kapital til de nye arbeiderne", "Sparing pluss investering", "Konsum pluss offentlige utgifter", "Bruttoinvestering minus nettoinvestering i utlandet"],
      explanation: "Delen $\\delta k$ erstatter kapital som er slitt ut, og delen $nk$ utstyrer de nye arbeiderne slik at gjennomsnittet per arbeider ikke faller.",
    },
    {
      question: "Hvorfor havner $n$ og $\\delta$ i samme parentes?",
      options: ["Begge senker kapitalen per arbeider proporsjonalt med $k$", "Begge er vekstrater som inngår direkte i produktfunksjonen og dermed bestemmer nivået på produksjonen", "Begge inngår direkte i produktfunksjonen som egne argumenter", "Begge bestemmes av spareraten i modellen"],
      explanation: "For brøken $K/L$ er det likegyldig om telleren krymper (slit) eller nevneren vokser (flere arbeidere) — begge deler krever samme type ekstra investering for å motvirkes. Derfor blir kravet ett samlet ledd, og strålen får helning $n+\\delta$.",
    },
    {
      question: "Hvilke størrelser er eksogene i vekstmodellen?",
      options: ["$s$, $n$ og $\\delta$", "$k$ og $y$", "$K$ og $Y$", "Konsum og investering per arbeider"],
      explanation: "Spareraten, befolkningsveksten og kapitalslitet er gitt utenfra. Modellen bestemmer selv utviklingen i $k$, og dermed i $y$, konsum og investering per arbeider.",
    },
    {
      question: "Når er «sparerate» et dekkende navn på parameteren $s$?",
      options: ["Bare i en lukket økonomi, der sparing og investering nødvendigvis er like store", "Alltid, siden $s$ per definisjon er sparingen delt på inntekten, uansett hvordan investeringene finansieres", "Bare når befolkningsveksten er null, slik at kapitalen ikke må fordeles på flere arbeidere", "Bare når kapitalslitet er null, slik at ingen maskiner må erstattes"],
      explanation: "I en åpen økonomi kan kapitaloppbygging finansieres utenfra, gjennom direkteinvesteringer, lån eller bistand — da er $s$ strengt tatt en investeringsrate. Verken $n$ eller $\\delta$ har noe med saken å gjøre.",
    },
    {
      question: "Hva er $k$ i denne delen av boka?",
      options: ["Realkapital per arbeider, $K/L$", "Ekstraordinær lønnsvekst", "Kapitalslitet per periode", "Konsum per arbeider"],
      explanation: "I hele Del 1 er $k=K/L$. Advarselen om at samme bokstav brukes om ekstraordinær lønnsvekst i hovedkursmodellen i Del 5, er nettopp derfor verdt å merke seg: eksamenssettene bruker begge tradisjonene.",
    },
    {
      question: "En besvarelse skriver bare: «Vi antar $f''(k)<0$.» Hva mangler?",
      options: ["Begrunnelsen for antakelsen, som følger av skalaavkastningen", "Ingenting — antakelsen er standard og kan postuleres", "En numerisk verdi for andrederiverte", "En henvisning til at kapitalen slites"],
      explanation: "Sjanger A ber uttrykkelig om at antakelsene begrunnes økonomisk, og begrunnelsen ligger allerede i skalaantakelsen. Å postulere fortegnet er nettopp det trekket sensorveiledningene peker på.",
    },
    {
      question: "Hva er investeringen per arbeider i modellen?",
      options: ["$s f(k)$", "$(n+\\delta)k$", "$(1-s)f(k)$", "$\\delta k$"],
      explanation: "Hver arbeider produserer $f(k)$, og andelen $s$ av dette spares og investeres. Uttrykket $(n+\\delta)k$ er utvanningen, $(1-s)f(k)$ er konsumet og $\\delta k$ er bare slitasjedelen.",
    },
    {
      question: "Hva er forbruket per arbeider i modellen?",
      options: ["$(1-s)f(k)$", "$s f(k)$", "$f(k)-\\delta k$", "$f(k)-nk$"],
      explanation: "Andelen $s$ av produksjonen per arbeider spares, og resten forbrukes. Dette uttrykket er utgangspunktet for gullregelen senere i delen.",
    },
    {
      question: "Bevegelsesligningen for SAMLET kapital er $\\Delta K = sY - \\delta K$. Hvorfor står ikke $n$ i den?",
      options: ["Fordi befolkningsvekst ikke ødelegger kapital — den fordeler den bare på flere", "Fordi $n$ er antatt lik null i totalversjonen av ligningen", "Fordi befolkningsveksten allerede er regnet inn i kapitalslitet $\\delta$ i denne versjonen av ligningen", "Fordi samlet kapital er en eksogen størrelse som modellen ikke selv bestemmer her"],
      explanation: "Flere arbeidere endrer ikke kapitalbeholdningen i seg selv. Det er først når vi regner per arbeider at befolkningsveksten blir et krav til investeringene — derfor dukker $nk$ bare opp i per arbeider-versjonen.",
    },
    {
      question: "Hva er nettoinvesteringen i modellen?",
      options: ["$sY - \\delta K$", "$sY$", "$\\delta K$", "$sY + \\delta K$"],
      explanation: "Nettoinvesteringen er bruttoinvesteringen $sY$ fratrukket kapitalslitet $\\delta K$ — altså den delen som faktisk øker kapitalbeholdningen. Den kan godt være negativ.",
    },
    {
      question: "Hvordan skriver eldre eksamenssett spareraten?",
      options: ["$\\gamma$", "$\\delta$", "$n$", "$\\beta$"],
      explanation: "Eldre sett bruker $\\gamma$ for spareraten, mens nyere sett gjerne skriver $d$ for kapitalslitet i stedet for $\\delta$. Boka skriver $s$ og $\\delta$, men du skal kjenne igjen variantene.",
    },
    {
      question: "Hva skjer med produksjonen per arbeider hvis både $K$ og $L$ dobles?",
      options: ["Den er uendret", "Den dobles", "Den mer enn dobles", "Den halveres"],
      explanation: "Med konstant skalaavkastning dobles $Y$, men $L$ dobles også, så $y=Y/L$ er uendret. Kapitalintensiteten $k=K/L$ er også uendret — økonomien står i samme punkt på figuren.",
    },
    {
      question: "Hva er den første tingen forklaringsmalen krever at du gjør med en oppgitt relasjon?",
      options: ["Definerer symbolene og sier hva de måler", "Løser ligningen for den endogene variabelen", "Tegner figuren som hører til den aktuelle relasjonen", "Setter inn tallverdier for parametrene i relasjonen"],
      explanation: "Malen går: symboler, økonomisk logikk, fortegn og mekanisme, og hva som er eksogent — før regning og figur. Rekkefølgen er hele poenget, siden relasjonene oppgis uforklart.",
    },
    {
      question: "Anta at antakelsen om avtakende grenseproduktivitet erstattes med $f(k)=Ak$. Hva skjer?",
      options: ["Modellen får ingen indre likevekt for $k$", "Modellen får to likevekter i stedet for én", "Likevekten blir ustabil, men finnes fortsatt", "Kapitalen per arbeider blir konstant uansett startpunkt"],
      explanation: "Både sparekurven og utvanningen blir da rette linjer gjennom origo, og de kan bare krysse i origo. Uten konkaviteten forsvinner hele apparatet med steady state, tilpasningsbane og komparativ statikk.",
    },
    {
      question: "Hva forutsetter modellen om arbeidsledighet?",
      options: ["Den ser bort fra ledighet — alle i arbeidsstyrken er sysselsatt", "Ledigheten bestemmes av spareraten", "Ledigheten er lik befolkningsveksten", "Ledigheten faller gradvis når kapitalen per arbeider stiger, og er null når økonomien er i likevekt"],
      explanation: "Vekstmodellen handler om langsiktig kapitaloppbygging, ikke om konjunkturer. Forenklingen er verdt å nevne når du setter opp modellen, fordi den sier hvilken horisont du befinner deg på.",
    },
    {
      question: "Hvilken av disse påstandene om vekstmodellen er riktig?",
      options: ["Produksjonen bestemmes av tilbudssiden: kapital og arbeidskraft", "Produksjonen bestemmes av samlet etterspørsel på kort sikt", "Produksjonen bestemmes av rentenivået", "Produksjonen bestemmes av valutakursen"],
      explanation: "I vekstmodellen er produksjonen tilbudsbestemt. Kontrasten mot etterspørselsbestemt produksjon er emnets røde tråd, og det er et poeng sensor belønner når kandidaten trekker det inn selv.",
    },
  ],
  'econ2310-1-2': [
    {
      question: "Hva kjennetegner steady state i vekstmodellen?",
      options: ["Kapitalen per arbeider endrer seg ikke", "All produksjon i økonomien står helt stille, både målt per arbeider og målt samlet", "Sparingen i økonomien er lik null hvert år", "Kapitalslitet er null, slik at ingen kapital forsvinner"],
      explanation: "Steady state betyr $\\Delta k = 0$: investeringen per arbeider dekker akkurat utvanningen. Produksjonen per arbeider står stille, men samlet produksjon vokser med raten $n$.",
    },
    {
      question: "Hva er likevektsbetingelsen i vekstmodellen?",
      options: ["$s f(k^*) = (n+\\delta)k^*$", "$f(k^*) = (n+\\delta)k^*$", "$s f(k^*) = \\delta k^*$", "$s f(k^*) = n k^*$"],
      explanation: "Sett $\\Delta k = 0$ i bevegelsesligningen. Både slitasjen og utvanningen fra befolkningsvekst må dekkes, og bare andelen $s$ av produksjonen investeres.",
    },
    {
      question: "Hvilken form har sparekurven i fasediagrammet?",
      options: ["Stigende og konkav", "En rett linje gjennom origo", "Stigende og konveks", "Fallende og konkav"],
      explanation: "Formen arves fra produktfunksjonen: $f$ er stigende og konkav, og $s$ er bare en positiv konstant som skalerer kurven ned. En rett linje er utvanningsleddet, ikke sparekurven.",
    },
    {
      question: "Hvilken form har utvanningsleddet $(n+\\delta)k$ i fasediagrammet?",
      options: ["En rett stråle fra origo med helning $n+\\delta$", "En konkav kurve fra origo, siden kravet avtar når kapitalbeholdningen blir stor", "En vannrett linje, uavhengig av kapitalbeholdningen", "En konveks kurve som blir stadig brattere for høy $k$"],
      explanation: "Kravet er proporsjonalt med kapitalbeholdningen per arbeider, siden $k$ inngår lineært. Dobbelt så mye kapital betyr dobbelt så mye slitasje og dobbelt så mye å utstyre nye arbeidere med.",
    },
    {
      question: "Hva ligger på den horisontale aksen i fasediagrammet?",
      options: ["Kapital per arbeider $k$", "Tiden $t$", "Produksjon per arbeider $y$", "Spareraten $s$"],
      explanation: "Fasediagrammet har $k$ horisontalt; det er tidsbanediagrammet som har tiden på den horisontale aksen. Å blande de to aksekonvensjonene gjør figuren uleselig.",
    },
    {
      question: "Hva betyr den vertikale avstanden mellom sparekurven og utvanningsstrålen?",
      options: ["$\\Delta k$ — endringen i kapital per arbeider", "Produksjonen per arbeider, altså nivået på $f(k)$ i punktet man leser av", "Konsumet per arbeider i det punktet man leser av", "Kapitalslitet per arbeider i punktet"],
      explanation: "Avstanden er nettopp $s f(k) - (n+\\delta)k$, altså farten økonomien beveger seg med. Derfor kan fasediagrammet svare både på hvor økonomien ender og på hvor fort det går.",
    },
    {
      question: "Hvorfor krysser de to kurvene hverandre nøyaktig én gang utenom origo?",
      options: ["Sparekurven starter brattest og flater ut, mens strålen holder helningen", "Fordi begge kurvene starter i origo og stiger derfra", "Fordi spareraten er mindre enn 1, og kurven derfor ligger under produktfunksjonen", "Fordi begge kurvene starter i origo og derfor må møtes minst én gang til lenger ute på aksen"],
      explanation: "Konkaviteten gjør at sparekurvens helning avtar mens strålens er konstant, så strålen tar igjen sparekurven én gang — og siden helningen bare avtar videre, kan de ikke møtes igjen.",
    },
    {
      question: "Hvilken antakelse er avgjørende for at likevekten finnes i det hele tatt?",
      options: ["Avtakende grenseproduktivitet, $f''(k)<0$", "At spareraten er konstant og uavhengig av inntektsnivået i økonomien", "At befolkningsveksten er positiv i hele forløpet", "At kapitalslitet er positivt i hver periode"],
      explanation: "Uten konkavitet, for eksempel med $f(k)=Ak$, blir begge kurvene rette linjer gjennom origo og kan bare krysse der. Da forsvinner hele apparatet med steady state og tilpasningsbane.",
    },
    {
      question: "For $k$ mindre enn $k^*$: hva gjelder?",
      options: ["$s f(k) > (n+\\delta)k$, så $\\Delta k > 0$", "$s f(k) < (n+\\delta)k$, så $\\Delta k < 0$", "$s f(k) = (n+\\delta)k$, så $\\Delta k = 0$", "Fortegnet på $\\Delta k$ kan ikke bestemmes"],
      explanation: "Til venstre for likevekten ligger sparekurven over strålen: det investeres mer per arbeider enn utvanningen krever, og kapitalintensiteten vokser.",
    },
    {
      question: "Hva viser dynamikkpilene i fasediagrammet?",
      options: ["Hvilken vei økonomien beveger seg i hvert intervall", "Hvor bratt produktfunksjonen er i hvert enkelt punkt langs den horisontale aksen", "Hvor stort konsumet per arbeider er i hvert enkelt punkt", "Hvordan spareraten endres over tid"],
      explanation: "Pilene er den grafiske formen på stabilitetsargumentet: mot høyre der sparekurven ligger over strålen, mot venstre der den ligger under. I modeller med flere skjæringspunkter er de den raskeste måten å avgjøre hvilke likevekter som er stabile.",
    },
    {
      question: "Hvorfor er likevekten $k^*$ stabil?",
      options: ["Fordi $\\Delta k$ er positiv til venstre og negativ til høyre for $k^*$", "Fordi begge kurvene er kontinuerlige og glatte", "Fordi spareraten er eksogen og derfor ikke endrer seg når kapitalen endres", "Fordi spareraten er fast og uavhengig av inntektsnivået, slik at sparingen aldri endrer seg"],
      explanation: "Pilene peker mot likevekten fra begge sider, så økonomien vender tilbake etter en forstyrrelse. Stabilitetsargumentet er en egen del av svaret i denne sjangeren, ikke noe som følger av seg selv.",
    },
    {
      question: "Hvorfor er veksten sterkest i starten når økonomien ligger langt under $k^*$?",
      options: ["Avstanden mellom sparekurven og strålen er størst der", "Spareraten er høyere når landet er fattig enn når det er rikt", "Befolkningsveksten er lavere når landet er fattig enn senere", "Kapitalslitet er lavere når kapitalbeholdningen er liten i absolutte tall"],
      explanation: "Avstanden mellom kurvene ER $\\Delta k$, og den er størst langt til venstre. Bak dette ligger avtakende grenseproduktivitet: der kapitalen er knappest, gir hver ny enhet mest. Ingen av parametrene endrer seg underveis.",
    },
    {
      question: "Hva ligger på den horisontale aksen i tidsbanediagrammet?",
      options: ["Tiden $t$", "Kapital per arbeider $k$", "Produksjon per arbeider $y$", "Investering per arbeider"],
      explanation: "Tidsbanen viser utviklingen over tid, så $t$ ligger horisontalt og nivået på $k$ eller $y$ vertikalt. Fasediagrammet har $k$ horisontalt.",
    },
    {
      question: "Hvilken form har $k$-kurven i tidsbanediagrammet når økonomien starter under likevekten?",
      options: ["Stigende og konkav mot en vannrett asymptote", "Stigende og rett, uten å flate ut", "Stigende og konveks uten grense, siden kapitalen fortsetter å bygges opp for alltid", "Vannrett hele veien, uten noen bevegelse i kapitalen"],
      explanation: "Banen er brattest helt i starten og flater ut mot asymptoten $k^*$, som den nærmer seg uten å nå. Formen er den grafiske versjonen av at $\\Delta k$ krymper mot null.",
    },
    {
      question: "Hva skjer med samlet kapital $K$ i steady state?",
      options: ["Den vokser med raten $n$", "Den står stille", "Den vokser med raten $s$", "Den faller med raten $\\delta$"],
      explanation: "Siden $k = K/L$ er konstant og $L$ vokser med raten $n$, må $K$ vokse med nøyaktig samme rate. Å påstå at $K$ står stille, er den feilen en sensorveiledning kaller positivt feil.",
    },
    {
      question: "Hva skjer med samlet produksjon $Y$ i steady state?",
      options: ["Den vokser med raten $n$", "Den står stille", "Den vokser med raten $n+\\delta$", "Den faller gradvis"],
      explanation: "Samlet produksjon er $Y = f(k^*)\\cdot L$. Produksjonen per arbeider er konstant, mens arbeidsstyrken vokser med $n$, så $Y$ vokser med $n$. Landet blir større, ikke rikere per hode.",
    },
    {
      question: "Hvorfor er påstanden «i steady state står produksjonen stille» problematisk?",
      options: ["Den blander produksjon per arbeider med samlet produksjon", "Den forutsetter at kapitalslitet er null", "Den forutsetter at spareraten er null", "Den gjelder bare hvis befolkningsveksten er negativ"],
      explanation: "Per arbeider-størrelsene er konstante; totalstørrelsene vokser med $n$. Presiseringen koster én setning, og en sensorveiledning omtaler den motsatte påstanden som positivt feil.",
    },
    {
      question: "Hva er forbruket per arbeider i steady state?",
      options: ["$(1-s)f(k^*)$", "$f(k^*)$", "$s f(k^*)$", "$(n+\\delta)k^*$"],
      explanation: "Andelen $s$ av produksjonen per arbeider spares, og resten forbrukes. Uttrykket $(n+\\delta)k^*$ er investeringen i likevekt, som er like stor som $s f(k^*)$.",
    },
    {
      question: "To ellers like land ligger begge under sin likevekt, men land A har mindre kapital per arbeider. Hva sier modellen?",
      options: ["Land A vokser raskest nå, og de ender i samme likevekt", "Land A vokser raskest nå, og ender permanent høyere", "Land B vokser raskest nå fordi det er rikest", "Begge vokser like raskt siden parametrene er like"],
      explanation: "Likevekten avhenger bare av $s$, $n$, $\\delta$ og produktfunksjonen, som er felles her. Land A er lengre fra likevekten, der avstanden mellom kurvene er størst, og vokser derfor raskest — men det ender ikke høyere.",
    },
    {
      question: "Hva er det viktigste forbeholdet ved modellens spådom om innhenting?",
      options: ["Den gjelder bare land som er like på de eksogene størrelsene", "Den gjelder bare på svært kort sikt", "Den gjelder bare hvis befolkningsveksten er null", "Den gjelder bare hvis økonomien er åpen"],
      explanation: "Innhentingen er betinget: land med ulik sparerate, befolkningsvekst, kapitalslit eller teknologi har hver sin likevekt og trenger ikke nærme seg hverandre i det hele tatt.",
    },
    {
      question: "Et land mister brått en femtedel av arbeidsstyrken, mens kapitalbeholdningen er uendret. Hva skjer med $k$?",
      options: ["Den hopper opp, siden nevneren i $K/L$ faller", "Den hopper ned, siden det blir mindre samlet produksjon", "Den er uendret, siden $s$, $n$ og $\\delta$ er uendret", "Den faller gradvis mot en ny og lavere likevekt, fordi det blir færre arbeidere til å produsere investeringsvarene"],
      explanation: "Kapitalintensiteten er $K/L$: faller nevneren brått, hopper brøken opp. Likevekten $k^*$ flytter seg derimot ikke, siden ingen av parametrene er endret — så økonomien glir etterpå tilbake mot samme $k^*$.",
    },
    {
      question: "Hva bestemmer HVOR økonomien ender, og hva bestemmer bare hvor den starter?",
      options: ["$s$, $n$, $\\delta$ og $f$ bestemmer sluttpunktet; $k_0$ bestemmer startpunktet", "$k_0$ bestemmer sluttpunktet; parametrene bestemmer bare farten", "Både start- og sluttpunkt bestemmes av $k_0$", "Både start- og sluttpunkt bestemmes av spareraten alene"],
      explanation: "Skillet er viktig fordi mange oppgaver spiller på det: et sjokk i startverdien gir en overgangsfase, mens et sjokk i en parameter flytter selve likevekten.",
    },
    {
      question: "Hva vil det si at tilnærmingen til $k^*$ er asymptotisk?",
      options: ["Økonomien nærmer seg $k^*$ uten noen gang å nå det helt", "Økonomien når $k^*$ etter et bestemt antall år", "Økonomien svinger rundt $k^*$", "Økonomien passerer $k^*$ og fortsetter"],
      explanation: "Hvert år lukkes en del av det gjenstående gapet, men gapet lukkes aldri helt. Praktisk konsekvens: skriv «nærmer seg», ikke «når», og tegn kurven som at den flater ut mot en stiplet linje.",
    },
    {
      question: "En besvarelse leverer et perfekt fasediagram uten tekst. Hva sier sensorstandarden?",
      options: ["Figur med forklarende tekst er fullgodt svar — figuren alene er ikke det", "Figuren alene er nok, siden figurer er førsteklasses svar", "Teksten alene er nok, siden figurer bare er illustrasjon", "Bare hvis figuren er tegnet med linjal"],
      explanation: "Kravet har to sider, og begge håndheves: uten forklaring kan sensor ikke se om du forsto det du tegnet, og uten figur mangler svaret det oppgaven eksplisitt ber om.",
    },
    {
      question: "Hva menes med «kort sikt» i vekstmodellen?",
      options: ["Overgangsfasen, der $k$ er forhåndsbestemt og fortsatt beveger seg", "Perioden der prisene er faste, slik at det er etterspørselen som bestemmer produksjonen", "Ett kalenderår, slik kort sikt vanligvis avgrenses i nasjonalregnskapet", "Perioden før spareraten rekker å endre seg"],
      explanation: "I vekstmodellen betyr kort sikt at kapitalintensiteten ikke har rukket å tilpasse seg: den kan ikke hoppe med mindre selve kapitalbeholdningen eller arbeidsstyrken hopper. Faste priser er kortsiktsbegrepet i Del 4, som er noe helt annet.",
    },
  ],
  'econ2310-1-3': [
    {
      question: "Spareraten øker varig. Hvilken kurve skifter i fasediagrammet?",
      options: ["Sparekurven $s f(k)$ skifter opp", "Utvanningsstrålen blir brattere, siden mer sparing krever mer vedlikehold", "Begge kurvene skifter opp samtidig", "Ingen av kurvene skifter — bare startpunktet flyttes mot høyre"],
      explanation: "Bare den kurven som inneholder parameteren, skifter. Strålen $(n+\\delta)k$ inneholder ikke $s$ og står helt stille.",
    },
    {
      question: "Hva skjer med $k^*$ og $y^*$ ved varig høyere sparerate?",
      options: ["Begge stiger", "Begge faller", "$k^*$ stiger, $y^*$ er uendret", "Begge er uendret på lang sikt"],
      explanation: "Skjæringspunktet med den faste strålen flytter seg mot høyre, så $k^*$ stiger. Siden $f$ er stigende, følger $y^*=f(k^*)$ samme vei.",
    },
    {
      question: "Hva skjer med forbruket per arbeider i selve øyeblikket spareraten øker?",
      options: ["Det faller brått", "Det stiger brått", "Det er uendret", "Det faller gradvis over flere år"],
      explanation: "Forbruket er $(1-s)f(k)$. Kapitalbeholdningen er forhåndsbestemt, så $f(k)$ er uendret i øyeblikket, mens andelen $(1-s)$ er blitt mindre. Dette er den ene størrelsen som gjør et vertikalt hopp ved et sparesjokk.",
    },
    {
      question: "Hva er effekten av varig høyere sparerate på forbruket per arbeider på LANG sikt?",
      options: ["Ubestemt — den avhenger av hvor spareraten lå i utgangspunktet", "Entydig positiv, siden produksjonen per arbeider stiger", "Entydig negativ, siden en større andel spares", "Null, siden forbruket alltid vender tilbake til utgangspunktet"],
      explanation: "Produksjonen per arbeider stiger, men den forbrukte andelen faller. Modellen avgjør ikke hvilken effekt som dominerer; det avhenger av om økonomien lå under eller over gullregelnivået. At $s=1$ gir maksimal produksjon og null forbruk, viser at mer sparing ikke kan være entydig bedre.",
    },
    {
      question: "Gir varig høyere sparerate varig høyere vekstrate i produksjonen per arbeider?",
      options: ["Nei — den gir overgangsvekst og deretter et varig høyere nivå", "Ja, vekstraten blir permanent høyere", "Ja, men bare hvis befolkningsveksten er null", "Nei, den gir verken høyere nivå eller høyere vekst"],
      explanation: "I den nye likevekten er veksten i produksjonen per arbeider igjen null. Den ekstra veksten hører til overgangsfasen. Nivået på $y^*$ er derimot varig høyere.",
    },
    {
      question: "Befolkningsveksten øker varig. Hva skjer med utvanningsstrålen?",
      options: ["Den blir brattere", "Den blir slakere", "Den forskyves oppover parallelt", "Den er uendret"],
      explanation: "Helningen er $n+\\delta$, så høyere $n$ roterer strålen oppover om origo. Den forskyves ikke parallelt — begge kurvene i figuren går alltid gjennom origo.",
    },
    {
      question: "Hva skjer med $k^*$ og $y^*$ ved varig høyere befolkningsvekst?",
      options: ["Begge faller", "Begge stiger", "$k^*$ faller, $y^*$ stiger", "Begge er uendret"],
      explanation: "Den brattere strålen møter den faste sparekurven lenger til venstre, så $k^*$ faller — og dermed også $y^*$. Mekanismen er utvanning: flere nye arbeidere skal utstyres med kapital.",
    },
    {
      question: "Hva skjer med VEKSTRATEN i samlet produksjon ved varig høyere befolkningsvekst?",
      options: ["Den stiger, til den nye raten $n_1$", "Den faller, siden produksjonen per arbeider faller", "Den er uendret, både på kort og lang sikt", "Den blir null, slik at økonomien slutter å vokse"],
      explanation: "I den nye likevekten vokser $K$ og $Y$ med den nye befolkningsveksten. Landet blir fattigere per hode, men vokser raskere som samlet økonomi — dette er den nyansen oppfølgingsspørsmål ofte er ute etter.",
    },
    {
      question: "Hva skjer med forbruket per arbeider på lang sikt ved varig høyere befolkningsvekst?",
      options: ["Det faller — svaret er entydig her", "Det er ubestemt, som ved en spareøkning", "Det stiger, siden flere arbeidere produserer mer", "Det er uendret"],
      explanation: "Forbruket er $(1-s)f(k^*)$, og andelen $(1-s)$ er uendret siden $s$ ikke er endret. Når $f(k^*)$ faller, faller forbruket. Ubestemtheten oppstår bare når $s$ selv endres.",
    },
    {
      question: "Kapitalslitet øker varig. Hva skjer i figuren?",
      options: ["Strålen blir brattere — samme figur som ved høyere befolkningsvekst", "Sparekurven skifter ned, siden mer av produksjonen går til å erstatte slitasje", "Sparekurven blir flatere mens utvanningsstrålen blir stående helt i ro", "Både sparekurven og utvanningsstrålen skifter nedover i hele diagrammet"],
      explanation: "Helningen er $n+\\delta$, så det er likegyldig for figuren om det er $n$ eller $\\delta$ som øker. Forskjellen mellom de to skiftene ligger utenfor figuren, i totalstørrelsene.",
    },
    {
      question: "Hva skjer med vekstraten i samlet produksjon ved varig høyere kapitalslit?",
      options: ["Den er uendret lik $n$, men nivået på $Y$ blir varig lavere", "Den stiger til $n+\\delta$", "Den faller under $n$ for godt", "Den blir null på lang sikt"],
      explanation: "Kapitalslitet påvirker nivået på $y^*$, ikke veksten i arbeidsstyrken. Derfor er økt kapitalslit entydig negativt, i motsetning til økt befolkningsvekst.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom økt $n$ og økt $\\delta$?",
      options: ["De virker likt per arbeider, men ulikt på totalstørrelsene", "De virker ulikt per arbeider, men likt på totalstørrelsene", "Økt $n$ senker $k^*$, mens økt $\\delta$ hever den", "Økt $\\delta$ gir en kortsiktseffekt, mens økt $n$ ikke gjør det"],
      explanation: "Begge senker $k^*$, $y^*$ og forbruket per arbeider like sikkert. Men flere arbeidere er også en tilførsel av produksjonsevne, mens mer slitasje bare er et krav — derfor stiger vekstraten i samlet produksjon i det ene tilfellet og ikke i det andre.",
    },
    {
      question: "Økonomien ligger i likevekt, og kapitalslitet øker varig. Hva skjer med $y$ i selve endringsøyeblikket?",
      options: ["Ingenting — $k$ er forhåndsbestemt, så $y$ begynner bare å synke gradvis", "$y$ faller brått og fortsetter deretter å falle helt ned til det nye nivået", "$y$ faller brått og stiger deretter igjen", "$y$ stiger brått, fordi investeringsbehovet øker og dermed også etterspørselen i økonomien"],
      explanation: "Kapitalbeholdningen er bygget opp over år og hopper ikke fordi en parameter endres i dag. Det som endres umiddelbart, er fortegnet på $\\Delta k$ — nivåene begynner å bevege seg.",
    },
    {
      question: "Hvilken størrelse KAN hoppe brått ved et parametersjokk i vekstmodellen?",
      options: ["Forbruket per arbeider, når det er $s$ som endres", "Kapitalen per arbeider, når det er $s$ som endres", "Produksjonen per arbeider, når det er $\\delta$ som endres", "Samlet produksjon, når det er $n$ som endres"],
      explanation: "Bare størrelser som avhenger direkte av den endrede parameteren, kan hoppe. Forbruket er $(1-s)f(k)$ og inneholder $s$ direkte; alle de andre går gjennom kapitalbeholdningen, som er forhåndsbestemt.",
    },
    {
      question: "Hva menes med «kort sikt» i en skiftanalyse i vekstmodellen?",
      options: ["Selve endringsøyeblikket og tiden rett etter, mens $k$ fortsatt beveger seg", "Perioden der prisene er faste, slik at det er samlet etterspørsel som bestemmer produksjonen", "De første tolv månedene etter at endringen fant sted", "Perioden før den nye parameterverdien har rukket å tre i kraft i hele økonomien"],
      explanation: "Det avgjørende ved kort sikt her er at kapitalintensiteten er forhåndsbestemt. Kortsiktsbegrepet med faste priser hører til konjunkturmodellene i Del 4 og betyr noe helt annet.",
    },
    {
      question: "Hva er forskjellen mellom et parametersjokk og et startverdisjokk?",
      options: ["Parametersjokket flytter likevekten; startverdisjokket flytter bare økonomien bort fra den", "Startverdisjokket flytter likevekten; parametersjokket gjør ikke det", "Bare parametersjokk kan gi overgangsfaser, siden et startverdisjokk virker umiddelbart og fullt ut", "De er to navn på nøyaktig samme ting, siden begge flytter økonomien til et nytt punkt i figuren"],
      explanation: "En endring i $s$, $n$ eller $\\delta$ gir ny $k^*$. Et brått hopp i $K$ eller $L$ — som krigsødeleggelser eller innvandring — flytter derimot bare startpunktet; likevekten blir liggende der den er.",
    },
    {
      question: "Et land mister mye realkapital i en naturkatastrofe, mens $s$, $n$ og $\\delta$ er uendret. Hva skjer på lang sikt?",
      options: ["Økonomien vender tilbake til samme $k^*$ som før", "Økonomien ender i en varig lavere likevekt, siden kapitalen som gikk tapt aldri bygges opp igjen", "Økonomien ender i en varig høyere likevekt enn før katastrofen", "Likevekten blir ustabil etter katastrofen"],
      explanation: "Ingen parametre er endret, så $k^*$ er den samme. Katastrofen flytter startpunktet mot venstre, og økonomien vokser tilbake — raskest i begynnelsen, siden avstanden mellom kurvene er størst der.",
    },
    {
      question: "Hvorfor er avstanden mellom kurvene interessant i en skiftanalyse?",
      options: ["Den er $\\Delta k$, altså farten økonomien beveger seg med", "Den er nivået på produksjonen per arbeider i punktet man leser av", "Den er forbruket per arbeider i akkurat det punktet man leser av", "Den viser hvor mange år tilpasningen til den nye likevekten kommer til å ta"],
      explanation: "Avstanden gir farten, ikke tiden: stor avstand betyr at det skjer mye i starten, og farten dør ut når økonomien nærmer seg den nye likevekten. Hvor mange år tilpasningen tar, sier modellen ingenting presist om.",
    },
    {
      question: "Spareraten faller varig OG befolkningsveksten faller varig. Hva skjer med $k^*$?",
      options: ["Effekten er ubestemt — de to skiftene trekker mot hverandre", "$k^*$ faller entydig, siden begge skiftene trekker i samme retning", "$k^*$ stiger entydig, siden lavere befolkningsvekst dominerer", "$k^*$ er uendret, siden de to virkningene nøyaktig oppveier hverandre"],
      explanation: "Lavere sparerate senker $k^*$, lavere befolkningsvekst hever den. Riktig framgangsmåte er å behandle skiftene ett for ett, si at de trekker mot hverandre, og si hva utfallet avhenger av — nemlig de to endringenes relative størrelse.",
    },
    {
      question: "Hva menes med at et skift i sparekurven er «proporsjonalt»?",
      options: ["Hele kurven ganges med forholdet $s_1/s_0$ og starter fortsatt i origo", "Kurven forskyves parallelt oppover med et fast beløp, likt for alle $k$", "Kurven blir rett i stedet for konkav, siden den samme andelen spares ved alle nivåer på kapitalen", "Bare den høyre delen av kurven flyttes oppover"],
      explanation: "Skiftet skalerer kurven; det forskyver den ikke. Derfor beholder den formen og går fortsatt gjennom origo — en kurve som ikke starter i origo, ville betydd en fast investering uavhengig av kapitalbeholdningen.",
    },
    {
      question: "Hva er IKKE endret etter et skift i $s$, $n$ eller $\\delta$?",
      options: ["Formen på produktfunksjonen $f$", "Skjæringspunktet mellom kurvene", "Fortegnet på $\\Delta k$ i utgangspunktet", "Likevektsverdien for produksjon per arbeider"],
      explanation: "Ingen av de tre parametrene sier noe om teknologien, så $f$ er den samme, fortsatt stigende og konkav. De tre andre alternativene endres alle av et skift.",
    },
    {
      question: "Hvordan ser tidsbanen for forbruket per arbeider ut etter en varig spareøkning?",
      options: ["Vannrett, så et vertikalt fall, så stigende mot en ny asymptote", "Vannrett, så et vertikalt hopp opp, så fallende", "Jevnt stigende hele veien, uten hopp", "Jevnt fallende hele veien, uten hopp"],
      explanation: "Fallet kommer i selve sjokkøyeblikket fordi andelen $(1-s)$ blir mindre, og deretter stiger forbruket fordi $k$ og $f(k)$ vokser. Den nye asymptoten kan ligge både over og under det opprinnelige nivået.",
    },
    {
      question: "En besvarelse skriver: «Alle effektene her er ubestemte, så vi kan ikke si noe sikkert.» Hva er galt?",
      options: ["Retningen på $k^*$ og $y^*$ er entydig i hvert enkeltskift — bare forbrukseffekten ved en spareøkning er ubestemt", "Ingenting — alle langsiktseffekter i vekstmodellen er ubestemte", "Alle effektene er entydige, også forbrukseffekten, siden fortegnene følger direkte av de deriverte i modellen uten flere forutsetninger", "Ubestemte effekter skal alltid signeres med det mest sannsynlige fortegnet"],
      explanation: "Å gjøre alt betinget viser like lite som å signere alt. Forbehold er et verktøy: signer det modellen bestemmer, og flagg det den ikke bestemmer — med hva det avhenger av.",
    },
    {
      question: "Hva mangler informasjon om, når den langsiktige forbrukseffekten av høyere sparerate skal signeres?",
      options: ["Om økonomien lå under eller over gullregelnivået", "Hvor stor befolkningsveksten er", "Hvor stort kapitalslitet er", "Hvor lang tid tilpasningen tar"],
      explanation: "Gullregel-spareraten er den som maksimerer langsiktig forbruk per arbeider. Under den gir høyere sparing høyere forbruk, over den gir det lavere. Betingelsen utledes i kapittel 1.5.",
    },
    {
      question: "Hva er investeringen per arbeider i en ny likevekt etter en spareøkning?",
      options: ["Lik utvanningen $(n+\\delta)k^*$, men på et høyere nivå enn før", "Null, siden kapitalen per arbeider ikke lenger vokser", "Lik hele produksjonen per arbeider", "Lavere enn før, siden kapitalbeholdningen nå er ferdig oppbygd og ikke trenger mer tilførsel"],
      explanation: "I enhver steady state gjelder $s f(k^*)=(n+\\delta)k^*$. Etter en spareøkning er begge sider større, både fordi $s$ er større og fordi $f(k^*)$ er større. At investeringen «bare dekker utvanningen», betyr ikke at den er liten.",
    },
    {
      question: "Hvorfor er analysen i dette emnet symbolsk og ikke numerisk?",
      options: ["Modellen er skrevet med en generell $f$, og eksamen har ingen rene talloppgaver", "Fordi kalkulator er tillatt hjelpemiddel og gjør regning uinteressant", "Fordi tallverdier på parametrene ikke finnes i norsk statistikk", "Fordi retningen på effekten alltid er den samme uansett tallverdier"],
      explanation: "Likevektsbetingelsen kan normalt ikke løses eksplisitt når $f$ er generell, og på åtte år er det ikke gitt én oppgave der svaret er et tall. Presisjonen ligger i mekanismen og fortegnene.",
    },
    {
      question: "Hva skjer med samlet kapital $K$ ved varig høyere kapitalslit, på lang sikt?",
      options: ["Den vokser fortsatt med $n$, men fra et lavere nivå", "Den vokser med $n+\\delta$", "Den faller for godt", "Den står stille"],
      explanation: "I enhver steady state vokser $K$ og $Y$ med befolkningsveksten, siden $k$ er konstant og $L$ vokser med $n$. Kapitalslitsøkningen senker nivået på $k^*$, ikke vekstraten.",
    },
    {
      question: "Økonomien ligger i steady state. Spareraten øker varig. Hva er fortegnet på $\\Delta k$ rett etter?",
      options: ["Positivt — sparingen er nå større enn utvanningen ved den gamle kapitalintensiteten", "Negativt — mer sparing betyr mindre forbruk og lavere aktivitet", "Null — økonomien er fortsatt i likevekt", "Ubestemt, avhengig av hvor stor økningen er"],
      explanation: "Ved den gamle $k$ gjelder nå $s_1 f(k_0^*) > (n+\\delta)k_0^*$. Fortegnet er positivt uansett hvor liten økningen er — størrelsen på økningen bestemmer bare hvor langt økonomien flytter seg.",
    },
    {
      question: "Hvilke fire bestanddeler skal et fullt svar i denne sjangeren ha?",
      options: ["Figur, kort sikt, lang sikt og mekanismen i ord", "Figur, tallverdier, tidsangivelse og konklusjon", "Modelloppsett, derivasjon, tabell og graf", "Kort sikt, lang sikt og to figurer — mekanismen følger av figurene"],
      explanation: "Mangler ett av de fire, mangler svaret noe sensorveiledningene ber om. Mekanismen i ord er en egen bestanddel: den følger ikke av figuren, den forklarer den.",
    },
    {
      question: "Hva er den vanligste unøyaktigheten når høyere sparerate skal beskrives?",
      options: ["Å skrive «varig høyere vekst» i stedet for «varig høyere nivå»", "Å skrive at $k^*$ stiger", "Å tegne strålen som en rett linje", "Å nevne overgangsfasen"],
      explanation: "Nivå og vekstrate er to ulike ting. Grunnmodellen gir en nivåeffekt pluss en periode med overgangsvekst; vekstraten i produksjonen per arbeider er null i begge likevekter.",
    },
  ],
  'econ2310-1-4': [
    {
      question: "Hva betyr $k$ i modellen med produktivitetsvekst?",
      options: ["Kapital per effektivitetsenhet, $K/(AL)$", "Kapital per arbeider, $K/L$, som før", "Produktivitetsnivået delt på kapitalbeholdningen i økonomien", "Vekstraten i kapitalbeholdningen per arbeider over tid"],
      explanation: "Symbolet er det samme, men nevneren er nå den effektive arbeidsstyrken $AL$. Å blande de to betydningene er nettopp konsistensfellen sensor ser etter.",
    },
    {
      question: "Hvor fort vokser den effektive arbeidsstyrken $AL$?",
      options: ["Med om lag $n+g$", "Med $n$", "Med $g$", "Med $n+g+\\delta$"],
      explanation: "Antallet arbeidere vokser med $n$ og produktiviteten med $g$. Kapitalslitet $\\delta$ har ingenting å gjøre med arbeidsstyrken — det hører til kapitalbeholdningen.",
    },
    {
      question: "Hva er bevegelsesligningen med produktivitetsvekst?",
      options: ["$\\Delta k = s f(k) - (n+g+\\delta)k$", "$\\Delta k = s f(k) - (n+\\delta)k$", "$\\Delta k = s f(k) - g k$", "$\\Delta k = s f(k) - (n+\\delta)k + g$"],
      explanation: "Utvanningen har nå tre grunner: slitasje, flere arbeidere og høyere produktivitet per arbeider. Alle tre inngår i helningen på strålen.",
    },
    {
      question: "Hvorfor står $g$ i utvanningsleddet?",
      options: ["Fordi nevneren i $K/(AL)$ vokser med $n+g$, så telleren må vokse like fort", "Fordi teknologisk fremgang gjør gammelt utstyr foreldet og dermed øker den effektive slitasjen på kapitalen", "Fordi høyere produktivitet gjør at husholdningene sparer en mindre del av inntekten", "Fordi produktivitetsvekst i seg selv gir et høyere kapitalslit i hver periode"],
      explanation: "Leddet er regneteknisk, ikke fysisk: kapitalen skal fordeles på flere effektivitetsenheter. Teknologisk fremgang ødelegger ingenting i denne modellen.",
    },
    {
      question: "Hva er vekstraten for kapital per effektivitetsenhet i steady state?",
      options: ["Null", "$g$", "$n+g$", "$n$"],
      explanation: "Steady state er nettopp definert ved at $\\Delta k = 0$ når $k$ måles per effektivitetsenhet. Størrelsene per arbeider og totalstørrelsene vokser derimot.",
    },
    {
      question: "Hva er vekstraten for produksjonen per ARBEIDER i steady state med produktivitetsvekst?",
      options: ["$g$", "Null", "$n+g$", "$n$"],
      explanation: "Produksjonen per arbeider er $y\\cdot A$, der $y$ er konstant i likevekt og $A$ vokser med $g$. Dette er hele grunnen til at varianten med produktivitetsvekst finnes.",
    },
    {
      question: "Hva er vekstraten for samlet produksjon $Y$ i steady state med produktivitetsvekst?",
      options: ["$n+g$", "$g$ alene, siden det bare er produktiviteten som vokser på lang sikt", "$n$", "Null"],
      explanation: "Produksjonen per arbeider vokser med $g$, og antallet arbeidere med $n$. Samlet kapital $K$ vokser med samme rate, slik at $K/Y$ er konstant.",
    },
    {
      question: "Hva er den eneste kilden til varig vekst i produksjonen per arbeider i dette pensumet?",
      options: ["Teknologisk fremgang", "Varig høyere sparerate", "Lavere befolkningsvekst", "Varig lavere kapitalslit"],
      explanation: "De tre andre hever nivået på velstandsbanen, men ikke helningen. Grunnen er avtakende avkastning på kapital: den kilden tørker ut, mens produktivitetsvekst ikke møter samme grense.",
    },
    {
      question: "Produktivitetsveksten $g$ øker varig. Hva skjer med $k^*$ per effektivitetsenhet?",
      options: ["Den faller, siden strålen blir brattere", "Den stiger, siden økonomien blir mer produktiv og sparer mer", "Den er uendret, siden bare vekstraten er endret", "Den faller først og stiger deretter over det gamle nivået"],
      explanation: "Helningen er $n+g+\\delta$, så figuren er identisk med et $n$- eller $\\delta$-skift. Spareraten er uendret, så sparekurven står stille.",
    },
    {
      question: "Hvorfor er lavere $k^*$ per effektivitetsenhet IKKE et tegn på lavere velstand?",
      options: ["Fordi nevneren $AL$ nå vokser raskere — det er en måleeffekt", "Fordi kapitalbeholdningen ikke har noen betydning for velstanden når teknologien først vokser", "Fordi spareraten kan økes tilstrekkelig til å motvirke fallet", "Fordi kapitalslitet samtidig faller like mye"],
      explanation: "Kapitalen per arbeider, $K/L = k\\cdot A$, vokser tvert imot med $g$ på den nye banen. Størrelsen $k$ er en regneteknisk hjelpestørrelse, ikke et velferdsmål.",
    },
    {
      question: "Hva skjer med den langsiktige vekstraten for produksjonen per arbeider når $g$ dobles?",
      options: ["Den dobles også", "Den er uendret", "Den halveres", "Den blir null"],
      explanation: "Produksjonen per arbeider vokser med $g$ i steady state, så en dobling av $g$ dobler vekstraten. Det er banens helning som endres, ikke bare nivået.",
    },
    {
      question: "Hva skjer med veksten i produksjonen per arbeider RETT ETTER at $g$ har økt?",
      options: ["Den stiger umiddelbart, men ikke helt opp til den nye raten", "Den hopper rett opp til den nye raten $g_1$ allerede i endringsøyeblikket", "Den faller først, siden kapitalen per effektivitetsenhet faller, og tar seg opp igjen først etter tilpasningen", "Den er uendret helt til tilpasningen er ferdig"],
      explanation: "To krefter virker: $A$ vokser raskere (opp), mens $y=f(k)$ faller mot den nye likevekten (ned). Nettoresultatet er en umiddelbar økning som deretter nærmer seg $g_1$ etter hvert som fallet i $k$ dør ut.",
    },
    {
      question: "Hva skjer med NIVÅET på produksjonen per arbeider i selve øyeblikket $g$ øker?",
      options: ["Ingenting — nivået er kontinuerlig, det er helningen som endres", "Det hopper opp, siden produktiviteten øker", "Det hopper ned, siden kapitalen per effektivitetsenhet faller brått", "Det hopper opp og deretter ned igjen, ettersom kapitalen per effektivitetsenhet tilpasser seg det nye nivået"],
      explanation: "Både kapitalbeholdningen og produktivitetsnivået er forhåndsbestemte; det er vekstraten i $A$ som er endret, ikke nivået på $A$. Derfor knekker banen, den hopper ikke.",
    },
    {
      question: "Hvorfor er en logaritmisk vertikalakse nyttig når vekstbaner skal tegnes?",
      options: ["En konstant vekstrate blir en rett linje, så en endring i vekstraten blir en synlig knekk", "Fordi tallene blir mindre og lettere å tegne", "Fordi den fjerner behovet for å merke aksene", "Fordi den viser nivået mer nøyaktig enn en vanlig akse"],
      explanation: "I vanlig skala er konstant vekst en krum, eksponentiell kurve, og da er en endring i helningen nesten umulig å se. Logaritmen gjør endringen i vekstraten synlig.",
    },
    {
      question: "Hva er den logiske feilen i å tegne strålen $(n+\\delta)k$ og konkludere at produksjonen per arbeider vokser med $g$?",
      options: ["De to halvdelene hører til ulike modellvarianter", "Strålen skal alltid være $(n+g+\\delta)k$, uansett variant", "Produksjonen per arbeider vokser aldri med $g$", "Konklusjonen er riktig, men figuren mangler dynamikkpiler og merking av gammel og ny likevekt"],
      explanation: "Strålen $(n+\\delta)k$ hører til modellen uten produktivitetsvekst, der produksjonen per arbeider er konstant i steady state. Sjekkspørsmålet er: hva er nevneren i min $k$?",
    },
    {
      question: "Hva skjer med kapitalen per ARBEIDER, $K/L$, i steady state med produktivitetsvekst?",
      options: ["Den vokser med raten $g$", "Den er konstant, akkurat som kapitalen per effektivitetsenhet", "Den vokser med raten $n+g$", "Den faller gradvis over tid"],
      explanation: "Kapitalen per arbeider er $k\\cdot A$: $k$ er konstant per effektivitetsenhet, og $A$ vokser med $g$. Hver arbeider får altså stadig mer utstyr.",
    },
    {
      question: "Spareraten øker varig i en økonomi med produktivitetsvekst. Hva skjer med den langsiktige vekstraten for produksjonen per arbeider?",
      options: ["Den er uendret lik $g$", "Den stiger permanent, siden mer kapital gir mer produksjon hvert år", "Den faller permanent på lang sikt", "Den blir lik null på sikt"],
      explanation: "Vekstraten bestemmes utelukkende av $g$, som ikke er endret. Spareøkningen løfter nivået på banen: samme helning, forskjøvet oppover — med en overgangsfase der veksten er høyere enn $g$.",
    },
    {
      question: "Hva menes med en balansert vekstbane?",
      options: ["Alle størrelser vokser med konstante rater, slik at forholdene mellom dem er stabile", "Alle størrelser i økonomien står helt stille, både målt per arbeider og målt for økonomien samlet", "Sparing og investering er like store i hver enkelt periode, slik at ingenting hoper seg opp", "Befolkningsveksten er lik produktivitetsveksten"],
      explanation: "På en slik bane vokser $K$ og $Y$ med samme rate $n+g$, slik at $K/Y$ er konstant. Likevekt betyr her at forholdene står stille, ikke at nivåene gjør det.",
    },
    {
      question: "Hva er $K/Y$ i steady state med produktivitetsvekst?",
      options: ["Konstant, siden $K$ og $Y$ vokser med samme rate", "Voksende med $g$", "Voksende med $n+g$", "Fallende mot null"],
      explanation: "Begge vokser med $n+g$, så forholdet er konstant. Modellen spår derfor at kapital-produksjonsforholdet skal være stabilt over tid — en av dens mest brukte empiriske implikasjoner.",
    },
    {
      question: "Hvilken parameter i vekstmodellen påvirker den langsiktige VEKSTRATEN, og ikke bare nivåene?",
      options: ["$g$", "$s$", "$n$", "$\\delta$"],
      explanation: "Sparerate, befolkningsvekst og kapitalslit bestemmer hvor høyt $k^*$ og $y^*$ ligger. Bare produktivitetsveksten bestemmer hvor bratt produksjonen per arbeider vokser på lang sikt.",
    },
  ],
  'econ2310-1-5': [
    {
      question: "Hva er gullregelbetingelsen?",
      options: ["$f'(k^*) = n+\\delta$", "$s f(k^*) = (n+\\delta)k^*$", "$f(k^*) = (n+\\delta)k^*$", "$f'(k^*) = s$"],
      explanation: "Dette er betingelsen for det kapitalnivået som maksimerer varig forbruk per arbeider. Uttrykket $s f(k^*)=(n+\\delta)k^*$ er likevektsbetingelsen, som gjelder for ALLE sparerater, ikke bare den optimale.",
    },
    {
      question: "Hva maksimerer gullregel-spareraten?",
      options: ["Forbruket per arbeider i steady state", "Produksjonen per arbeider i steady state", "Kapitalen per arbeider i steady state", "Vekstraten i produksjonen per arbeider på lang sikt"],
      explanation: "Produksjon og kapital per arbeider er høyest når spareraten er så nær 1 som mulig. Vekstraten per arbeider er null i grunnmodellen uansett sparerate.",
    },
    {
      question: "Hvordan kan forbruket i steady state skrives?",
      options: ["$f(k^*) - (n+\\delta)k^*$", "$f(k^*) - \\delta k^*$", "$s f(k^*)$", "$f(k^*) + (n+\\delta)k^*$"],
      explanation: "Omskrivingen bruker likevektsbetingelsen: i steady state er sparingen per arbeider lik utvanningen, så det som er igjen til forbruk, er produksjonen minus utvanningen. Grafisk er dette avstanden mellom $f(k)$ og strålen.",
    },
    {
      question: "Hva er den grafiske tolkningen av gullregelen?",
      options: ["Tangenten til $f(k)$ er parallell med utvanningsstrålen", "Sparekurven skjærer utvanningsstrålen i det punktet der forbruket er høyest", "Produktfunksjonen skjærer utvanningsstrålen i det punktet", "Tangenten til $f(k)$ er vannrett, altså helt uten helning"],
      explanation: "Betingelsen sier at kurvens helning er lik strålens helning. Der er den vertikale avstanden mellom dem — altså forbruket — størst. At sparekurven skjærer strålen, kjennetegner enhver steady state, ikke gullregelpunktet.",
    },
    {
      question: "Hva står på venstresiden i gullregelbetingelsen, økonomisk sett?",
      options: ["Hva én ekstra kapitalenhet per arbeider gir i ekstra produksjon", "Hva én ekstra kapitalenhet koster i varig vedlikehold", "Den andelen av produksjonen som spares", "Den samlede produksjonen per arbeider i likevekt, altså nivået på $f(k^*)$ i skjæringspunktet"],
      explanation: "Venstresiden er grenseproduktiviteten $f'(k^*)$. Høyresiden $n+\\delta$ er vedlikeholdskostnaden. I optimum er de like store.",
    },
    {
      question: "Hvorfor er gullregelpunktet et maksimum og ikke et minimum?",
      options: ["Fordi $f''(k) < 0$, så forbrukskurven krummer nedover", "Fordi spareraten alltid ligger et sted mellom 0 og 1, slik at forbruket er positivt", "Fordi $f'(k) > 0$, slik at mer kapital alltid gir mer produksjon", "Fordi befolkningsveksten er positiv og dermed krever investeringer"],
      explanation: "Den andrederiverte av $c^*(k^*)=f(k^*)-(n+\\delta)k^*$ er $f''(k^*)$, som er negativ når produktfunksjonen er konkav. Det er samme antakelse som gir modellen en likevekt i det hele tatt.",
    },
    {
      question: "Hvorfor kan $s=1$ ikke være optimalt?",
      options: ["Fordi hele produksjonen da spares, slik at forbruket er null", "Fordi kapitalen per arbeider da vokser uten grense og aldri finner noen likevekt", "Fordi likevekten da blir ustabil og økonomien sprer seg bort fra den", "Fordi produksjonen per arbeider da faller"],
      explanation: "Med $s=1$ er kapital og produksjon per arbeider på sitt høyeste, men ingen forbruker noe. Ytterpunktet viser at «jo mer sparing, jo bedre» ikke kan holde som generell regel.",
    },
    {
      question: "Hvilken form har langsiktig forbruk per arbeider som funksjon av spareraten?",
      options: ["Klokkeformet: null i begge ender, med en topp i mellom", "Stigende hele veien fra $s=0$ til $s=1$, siden mer kapital alltid gir mer å fordele", "Fallende hele veien fra $s=0$ til $s=1$", "En rett linje med positiv helning gjennom hele intervallet"],
      explanation: "Ved $s=0$ forvitrer kapitalen og forbruket går mot null; ved $s=1$ er forbruket null. Siden det er positivt i mellom, må kurven ha en topp — og den ligger ved gullregel-spareraten.",
    },
    {
      question: "Økonomien ligger UNDER gullregelnivået. Hva gjelder da?",
      options: ["$f'(k^*) > n+\\delta$, og høyere sparerate gir høyere langsiktig forbruk", "$f'(k^*) < n+\\delta$, og høyere sparerate gir høyere langsiktig forbruk", "$f'(k^*) > n+\\delta$, og høyere sparerate gir lavere langsiktig forbruk", "$f'(k^*) = n+\\delta$, så spareraten er allerede optimal"],
      explanation: "Under gullregelnivået er kapitalen knapp, så grenseproduktiviteten er høy — den siste enheten gir mer enn den koster. Da er det rom for å øke forbruket ved å spare mer.",
    },
    {
      question: "Økonomien ligger OVER gullregelnivået. Hva gir høyere sparerate?",
      options: ["Lavere langsiktig forbruk per arbeider", "Høyere langsiktig forbruk per arbeider", "Uendret langsiktig forbruk per arbeider", "Lavere produksjon per arbeider på lang sikt"],
      explanation: "Over gullregelnivået koster den siste kapitalenheten mer i vedlikehold enn den gir i produksjon. Produksjonen per arbeider stiger fortsatt — det er forbruket som faller.",
    },
    {
      question: "Hvilken ubestemthet fra kapittel 1.3 løser gullregelen opp?",
      options: ["Effekten av høyere sparerate på langsiktig forbruk per arbeider", "Effekten av høyere sparerate på $k^*$", "Effekten av høyere befolkningsvekst på $y^*$", "Effekten av høyere kapitalslit på vekstraten i samlet produksjon"],
      explanation: "De tre andre effektene er entydige. Bare forbrukseffekten av en spareøkning trakk i to retninger, og det som manglet, var hvor økonomien lå i forhold til gullregelnivået.",
    },
    {
      question: "Et land ligger over gullregelnivået og senker spareraten dit. Hva skjer med forbruket?",
      options: ["Det stiger både umiddelbart og på lang sikt", "Det faller umiddelbart og stiger på lang sikt", "Det stiger umiddelbart, men faller på lang sikt fordi kapitalbeholdningen per arbeider blir mindre", "Det er uendret på kort sikt og stiger på lang sikt"],
      explanation: "Kapitalbeholdningen er forhåndsbestemt, så produksjonen er uendret i øyeblikket mens andelen $(1-s)$ blir større: forbruket hopper opp. Og siden økonomien flytter seg mot toppen av forbrukskurven, ender det også høyere.",
    },
    {
      question: "Hvorfor er de to avvikene fra gullregelen ikke symmetriske?",
      options: ["Oversparing kan rettes uten at forbruket faller i noen periode; undersparing kan ikke", "Oversparing kan ikke rettes i det hele tatt", "Undersparing gir lavere produksjon per arbeider i alle perioder, uansett hva som gjøres med spareraten", "Bare oversparing gir en overgangsfase"],
      explanation: "Å senke spareraten hever forbruket straks og varig. Å øke den koster forbruk i dag for gevinst senere — og om det er verdt det, kan modellen ikke avgjøre, siden den ikke inneholder noen avveining mellom nåtid og framtid.",
    },
    {
      question: "Beveger økonomien seg av seg selv mot gullregelnivået?",
      options: ["Nei — spareraten er eksogen, og økonomien går mot den likevekten den sender den til", "Ja, markedet driver spareraten mot det nivået som gir høyest varig forbruk per arbeider", "Ja, men bare hvis befolkningsveksten er null", "Nei, men den svinger rundt gullregelnivået over tid"],
      explanation: "Gullregelen er et referansepunkt for å vurdere en observert sparerate, ikke en prognose. Modeller der sparebeslutningen bestemmes inne i modellen, er utenfor dette emnets pensum.",
    },
    {
      question: "Hva blir gullregelbetingelsen med produktivitetsvekst?",
      options: ["$f'(k^*) = n+g+\\delta$, med $k$ per effektivitetsenhet", "$f'(k^*) = n+\\delta$, uendret", "$f'(k^*) = g$", "$f'(k^*) = n+g$"],
      explanation: "Vedlikeholdskostnaden per kapitalenhet har nå tre komponenter, siden antallet effektivitetsenheter vokser med $n+g$. Formen og tolkningen er ellers den samme.",
    },
    {
      question: "To land har samme produktfunksjon og samme kapitalslit, men ulik befolkningsvekst. Begge sparer sin egen gullregel-sparerate. Hvilket har høyest $k^*$?",
      options: ["Landet med lavest befolkningsvekst", "Landet med høyest befolkningsvekst", "De har samme $k^*$, siden begge sparer optimalt gitt sin egen produktfunksjon", "Det kan ikke avgjøres uten å vite spareratene"],
      explanation: "Gullregelen krever $f'(k^*)=n+\\delta$. Høyere $n$ gir høyere krav til $f'$, og siden $f'$ er avtakende i $k$, betyr det lavere $k^*$. Der befolkningen vokser raskt, er det dyrere å holde en gitt kapitalintensitet.",
    },
    {
      question: "Hva er den mest presise innvendingen mot påstanden «jo mer et land sparer, desto bedre får innbyggerne det på lang sikt»?",
      options: ["Den mangler betingelsen: sparing hever forbruket bare opp til gullregelnivået", "Den er helt gal — mer sparing gjør alltid innbyggerne fattigere", "Den er riktig, siden mer sparing alltid gir høyere produksjon per arbeider", "Den er umulig å vurdere innenfor vekstmodellen, siden spareraten er gitt utenfra"],
      explanation: "Påstanden er riktig så lenge landet sparer mindre enn gullregelnivået, og gal så snart det sparer mer. Modellen kan altså svare presist — men svaret er betinget, og betingelsen er hele poenget.",
    },
    {
      question: "Hva er $n+\\delta$ i gullregelbetingelsen?",
      options: ["Den varige vedlikeholdskostnaden per enhet kapital per arbeider", "Vekstraten i samlet produksjon når økonomien er i steady state", "Den optimale spareraten", "Grenseproduktiviteten til kapital"],
      explanation: "Andelen $\\delta$ erstatter slitasje og andelen $n$ utstyrer nye arbeidere. Størrelsen er samtidig helningen på utvanningsstrålen.",
    },
    {
      question: "Hvorfor er det praktisk å maksimere over $k^*$ i stedet for over $s$?",
      options: ["Fordi hver $s$ svarer til nøyaktig én $k^*$, og uttrykket blir enklere", "Fordi $s$ ikke kan varieres i modellen, siden den er gitt utenfra og holdes konstant", "Fordi $k^*$ er eksogen", "Fordi $f$ ikke er derivbar i $s$"],
      explanation: "Sammenhengen mellom $s$ og $k^*$ er monoton, så vi kan velge $k^*$ indirekte. Da forsvinner besværet med at $s$ virker både direkte på forbruksandelen og indirekte gjennom kapitalbeholdningen.",
    },
    {
      question: "Hva bør du si eksplisitt i starten av et svar om «hvor mye et land bør spare»?",
      options: ["Hvilken størrelse du tolker som velferdsmålet — forbruk, ikke produksjon", "Hvor mange år tilpasningen tar", "Hvilken tallverdi du antar for spareraten", "At modellen ikke kan si noe om normative spørsmål"],
      explanation: "Valget av målestokk avgjør hele svaret: produksjonen per arbeider er høyest ved maksimal sparing, forbruket ved gullregelnivået. Modellen kan svare normativt — gullregelen ER et normativt resultat — men bare gitt et mål.",
    },
  ],
  'econ2310-1-6': [
    {
      question: "Hva er grepet som gir vekstmodellen flere likevekter?",
      options: ["Å la en parameter avhenge av inntektsnivået", "Å fjerne kapitalslitet fra bevegelsesligningen helt", "Å øke spareraten varig og for alle inntektsnivåer", "Å innføre produktivitetsvekst i produktfunksjonen"],
      explanation: "Da får én av de to kurvene et sprang, og «bare én kryssing»-argumentet faller bort. Produktivitetsvekst gjør bare strålen brattere og gir fortsatt én likevekt.",
    },
    {
      question: "Hvorfor har grunnmodellen bare én likevekt utenom origo?",
      options: ["Fordi en konkav kurve og en rett stråle fra origo bare kan møtes én gang", "Fordi spareraten er en fast andel mellom null og én", "Fordi befolkningsveksten er antatt konstant og positiv gjennom hele forløpet", "Fordi kapitalslitet er proporsjonalt med kapitalbeholdningen, slik at utvanningen vokser jevnt med $k$"],
      explanation: "Sparekurven starter brattere og flater ut, mens strålen holder helningen. Etter møtet blir avstanden bare større. Argumentet hviler på at parametrene er konstante — og det er nettopp det som brytes her.",
    },
    {
      question: "Med trappetrinnssparing: hvilken kurve får et sprang?",
      options: ["Sparekurven, som hopper opp i terskelen", "Utvanningsstrålen, som blir brattere i terskelen", "Produktfunksjonen, som knekker i terskelen", "Begge kurvene, som skifter samtidig i terskelen"],
      explanation: "Spareraten står i sparekurven $s f(k)$, så det er den som får hoppet. Strålen $(n+\\delta)k$ er uendret, siden verken $n$ eller $\\delta$ er berørt.",
    },
    {
      question: "Med endogen befolkningsvekst: hvilken kurve får et sprang?",
      options: ["Utvanningsstrålen, som knekker fra bratt til slakere", "Sparekurven, som hopper opp i terskelen og blir liggende høyere", "Produktfunksjonen, som får en knekk oppover ved terskelverdien", "Ingen av dem — det er bare startpunktet for økonomien som flyttes til et annet sted på aksen"],
      explanation: "Befolkningsveksten står i helningen $n+\\delta$, så det er strålen som knekker: bratt der inntekten er lav, slakere der den er høy. Sparekurven er uendret.",
    },
    {
      question: "Hvor mange stabile likevekter har modellen med et sprang i sparekurven?",
      options: ["To", "En", "Tre, siden også terskelen er en likevekt økonomien kan ligge i", "Ingen"],
      explanation: "De to skjæringspunktene $k_L^*$ og $k_H^*$ er stabile. I tillegg finnes terskelen $\\bar{k}$, men den er ustabil: pilene peker bort fra den.",
    },
    {
      question: "Hva kjennetegner terskelen $\\bar{k}$?",
      options: ["Den er ustabil — dynamikkpilene peker bort fra den i begge retninger", "Den er den mest stabile av de tre likevektene, og økonomien søker mot den", "Den er der forbruket per arbeider er høyest", "Den er der produksjonen per arbeider er høyest, siden den ligger mellom de to likevektene"],
      explanation: "Starter økonomien litt under, glir den ned til lavlikevekten; litt over, vokser den opp til høylikevekten. Ingen økonomi blir liggende på terskelen.",
    },
    {
      question: "Hvorfor kalles lavlikevekten en «felle»?",
      options: ["Fordi den er stabil: økonomien glir tilbake dit etter små forstyrrelser", "Fordi produksjonen der faller over tid", "Fordi den er ustabil og økonomien kan havne hvor som helst", "Fordi spareraten der er så lav at kapitalbeholdningen krymper år for år uten stans"],
      explanation: "Punktet er en helt ordinær steady state, men en stabil en. Landet vokser seg ikke ut av den ved tålmodighet, og bare et løft forbi terskelen endrer utfallet.",
    },
    {
      question: "I intervallet mellom lavlikevekten og terskelen: hvilken vei peker dynamikkpilen?",
      options: ["Mot venstre — sparekurven ligger under strålen der", "Mot høyre — sparekurven ligger over strålen i hele intervallet", "Ingen vei — $\\Delta k$ er lik null i hele intervallet mellom punktene", "Retningen kan ikke bestemmes uten at man kjenner tallverdiene på parametrene"],
      explanation: "Her gjelder fortsatt den lave spareraten, og strålen har tatt igjen kurven. Det er nettopp denne pilen som forklarer hvorfor små løft dør ut.",
    },
    {
      question: "Hva skjer med et lite tiltak som løfter kapitalen per arbeider, men ikke forbi terskelen?",
      options: ["Virkningen dør ut, og økonomien glir tilbake til lavlikevekten", "Virkningen blir varig, men mindre enn ved et stort tiltak", "Økonomien vokser videre til høylikevekten, bare saktere", "Økonomien havner på terskelen og blir liggende der, siden det også er et punkt med $\\Delta k=0$"],
      explanation: "Pilene i intervallet mellom lavlikevekten og terskelen peker mot venstre. Modellen sier ikke at små tiltak er skadelige — den sier at de ikke endrer den langsiktige tilstanden.",
    },
    {
      question: "Hva skjer etter et engangsløft som bringer økonomien godt forbi terskelen?",
      options: ["Den vokser videre av seg selv opp til høylikevekten, uten at løftet gjentas", "Den blir liggende der løftet stanset, uten videre vekst", "Den glir gradvis tilbake til lavlikevekten, slik den ville gjort uten løftet", "Den vokser videre bare så lenge løftet vedvarer, og stanser når overføringen tar slutt"],
      explanation: "Over terskelen tar den nye parameterverdien over, sparingen overstiger utvanningen, og pilen peker mot høyre helt fram til $k_H^*$. Løftet må være stort nok, én gang.",
    },
    {
      question: "Kan et midlertidig sjokk få varige følger i denne modellen?",
      options: ["Ja — presses økonomien under terskelen, glir den videre ned til lavlikevekten", "Nei, midlertidige sjokk viskes alltid ut", "Bare hvis sjokket rammer en parameter og ikke en beholdning", "Bare hvis sjokket varer lenger enn den tiden økonomien bruker på å tilpasse seg"],
      explanation: "Dette er en kvalitativ forskjell fra grunnmodellen, der hvert midlertidig sjokk alltid ble visket ut. Årsaken kan være borte mens følgen består.",
    },
    {
      question: "Hva avgjør hvilken av de to likevektene et land ender i?",
      options: ["Hvilken side av terskelen det starter på", "Hvor høy spareraten er på oversiden av terskelen", "Hvor stort kapitalslitet er i hele intervallet", "Hvor bratt produktfunksjonen er nær origo, siden det bestemmer veksten i starten"],
      explanation: "Med flere likevekter får startpunktet varig betydning. To land med identiske parametre kan ende i helt ulike tilstander avhengig av hvor de begynte — noe som var umulig i grunnmodellen.",
    },
    {
      question: "Hvordan gjør du stabilitetsanalysen når det er flere likevekter?",
      options: ["Del aksen i intervaller og sjekk i hvert om sparekurven ligger over eller under strålen", "Deriver bevegelsesligningen med hensyn på spareraten", "Regn ut likevektsverdiene og sammenlign dem", "Sjekk om produktfunksjonen er konkav i hvert av de aktuelle punktene på aksen"],
      explanation: "Ligger sparekurven over strålen, er $\\Delta k>0$ og pilen peker mot høyre. Peker pilene innover mot et punkt fra begge sider, er det stabilt. Dette er den delen av svaret sensorveiledningene eksplisitt ber om.",
    },
    {
      question: "Hva er mekanismen som holder et land nede i lavlikevekten når befolkningsveksten er endogen?",
      options: ["Høy befolkningsvekst gjør at sparingen må spres på mange nye arbeidere", "Kapitalslitet er høyere i fattige land", "Produktfunksjonen er brattere i fattige land", "Spareraten faller når inntekten stiger, slik at rike land bygger mindre kapital enn fattige"],
      explanation: "Lav inntekt gir høy befolkningsvekst, og høy befolkningsvekst holder kapitalintensiteten nede — en selvforsterkende kombinasjon. Kommer landet over terskelen, faller fødselstallene og utvanningskravet blir mindre.",
    },
    {
      question: "Er varianten med endogen befolkningsvekst en annen modell enn varianten med trappetrinnssparing?",
      options: ["Nei — samme grep, bare en annen kurve som får spranget", "Ja, den bygger på en helt annen bevegelsesligning", "Ja, den gir bare én likevekt", "Ja, den krever produktivitetsvekst"],
      explanation: "Begge består i at en parameter avhenger av inntektsnivået. Hvilken kurve som får spranget, avgjør bare hvordan figuren ser ut — konklusjonen med to stabile likevekter og et ustabilt vippepunkt er den samme.",
    },
    {
      question: "Hvilken av de to stabile likevektene har høyest produksjon per arbeider?",
      options: ["Høylikevekten, entydig", "Lavlikevekten, entydig", "Det avhenger av hvor høy spareraten er i området over terskelen", "De har like høy produksjon per arbeider"],
      explanation: "$k_H^* > k_L^*$, og siden $f$ er stigende, er $f(k_H^*) > f(k_L^*)$. Det er FORBRUKET som eventuelt kan være høyest i lavlikevekten, ikke produksjonen.",
    },
    {
      question: "Under hvilken betingelse kan forbruket per arbeider være høyest i lavlikevekten?",
      options: ["Hvis den høye spareraten er så stor at høylikevekten ligger langt over gullregelnivået", "Alltid, siden fattige land forbruker en større andel av inntekten", "Hvis befolkningsveksten er lik null i begge likevekter", "Aldri — høylikevekten gir alltid høyest forbruk"],
      explanation: "Forbruket er avstanden mellom $f(k)$ og strålen, og den er størst ved gullregelnivået. Ligger $k_H^*$ langt over, sluker vedlikeholdet så mye at forbruket kan være lavere der enn i lavlikevekten. Det er ikke det typiske tilfellet, men det er mulig.",
    },
    {
      question: "Er det riktig å kalle lavlikevekten en «felle» selv om forbruket skulle være høyest der?",
      options: ["Ja — «felle» handler om stabilitet og innelåsning, ikke om forbruksnivået", "Nei — da er den ikke en felle i det hele tatt", "Ja, men bare hvis produksjonen også er høyest der", "Nei — begrepet gjelder bare i de tilfellene der spareraten er lav i hele intervallet"],
      explanation: "Egenskapen som gjør den til en felle, er at økonomien ikke kommer ut ved egen kraft. Det som endres, er den normative vurderingen: da er det ikke opplagt ønskelig å løfte landet over terskelen.",
    },
    {
      question: "Hva skjer hvis spareraten stiger JEVNT med inntekten i stedet for å hoppe?",
      options: ["Sparekurven får en S-form og kan krysse strålen tre ganger", "Modellen får bare én likevekt igjen", "Terskelen forsvinner helt", "Strålen får en knekk i stedet"],
      explanation: "Da er det midterste skjæringspunktet et ordentlig krysningspunkt, og det er ustabilt. Logikken og konklusjonen er identisk med den diskrete varianten — den diskrete er bare lettere å tegne under tidspress.",
    },
    {
      question: "Hva forklarer modellen med flere likevekter IKKE?",
      options: ["Hvorfor spareraten eller befolkningsveksten avhenger av inntektsnivået", "Hvorfor lavlikevekten er stabil", "Hvorfor små tiltak ikke gir varig virkning", "Hvorfor startpunktet får betydning for utfallet"],
      explanation: "Modellen tar sammenhengen som gitt og viser konsekvensene. Den sier heller ingenting om hvor terskelen ligger i praksis — den viser en mulighet som er kvalitativt viktig, ikke en oppskrift med tall.",
    },
  ],
  'econ2310-1-7': [
    {
      question: "Hva er steg 1 i løsningsoppskriften for en vekstoppgave?",
      options: ["Å oversette de verbale egenskapene til relasjoner og fortegn", "Å tegne fasediagrammet og markere likevekten før modellen er presentert", "Å regne ut likevektsverdien for kapital per arbeider før relasjonene er forklart", "Å avgjøre hvilken av utvidelsesvriene oppgaven bruker, slik at du vet hvor analysen skal ende"],
      explanation: "Kjeden starter med oversettelsen: ett strekpunkt om gangen blir én relasjon eller ett fortegn. Figuren kommer i steg 3, etter at modellen er presentert og begrunnet.",
    },
    {
      question: "Hvilket steg er det flest kandidater hopper over?",
      options: ["Begrunnelsene og tolkningen av leddene", "Fasediagrammet med likevekten markert", "Tidsbanen", "Skiftanalysen med kort og lang sikt"],
      explanation: "Ligningene kan de fleste. Det er «hvorfor $f''<0$» og «hva betyr leddet $nk$» som skiller — og det er der de fleste poengene i en oppsettsoppgave ligger.",
    },
    {
      question: "Hvilke fire utvidelsesvrier dekker nesten alle avsluttende delspørsmål i vekstblokken?",
      options: ["Gullregelen, flere likevekter, produktivitetsvekst og en ny parametervariasjon", "Gullregelen, valutakurs, renteregelen og prisvekst", "Kortsvar, tallregning, tabellanalyse og tolkning", "Nasjonalregnskap, sparebegreper, investeringsfunksjoner og utenrikshandel"],
      explanation: "At katalogen er så kort, er hele poenget: har du de fire klare, møter du aldri det siste delspørsmålet uforberedt. De tre andre alternativene hører til andre deler av pensum eller finnes ikke i emnet.",
    },
    {
      question: "Hvorfor skal det siste delspørsmålet ha et tidstak, selv om det er det vanskeligste?",
      options: ["Fordi det vurderes mildere enn resten, så ekstra tid gir lite igjen", "Fordi det alltid teller minst av alle delspørsmålene i oppgaven, uansett sett", "Fordi det sjelden er mulig å svare riktig på det", "Fordi sensor leser det siste delspørsmålet mindre nøye enn de foregående delspørsmålene"],
      explanation: "Sensorveiledningene sier at de bevisst kinkige avslutningsspørsmålene vurderes mildere. Ti minutter ekstra der er dårligere brukt enn ti minutter på et delspørsmål du kan svare fullt på.",
    },
    {
      question: "Hva er konsistenssjekken du skal gjøre i en vekstbesvarelse?",
      options: ["Spørre hva nevneren i min $k$ er", "Kontrollere at figuren er tegnet med linjal", "Sjekke at alle tallverdier er satt inn riktig", "Kontrollere at spareraten ligger mellom null og én"],
      explanation: "Er nevneren $L$, skal strålen være $(n+\\delta)k$ og produksjonen per arbeider er konstant i likevekt. Er den $AL$, skal strålen være $(n+g+\\delta)k$ og produksjonen per arbeider vokser med $g$.",
    },
    {
      question: "Hvilken setning må med hver gang du er i steady state?",
      options: ["At per arbeider-størrelsene er konstante mens totalstørrelsene vokser", "At spareraten er eksogen, og at det er den som bestemmer nivået på kapitalen", "At produktfunksjonen er konkav, slik at grenseproduktiviteten til kapitalen avtar", "At likevekten er stabil, slik at økonomien nærmer seg den fra begge sider"],
      explanation: "Det motsatte — at $K$ og $Y$ står stille — omtales i en sensorveiledning som positivt feil. Setningen koster deg fem sekunder og forebygger den enkleste tapte poengsummen i vekstblokken.",
    },
    {
      question: "En oppgave gir relasjonene i oppgaveteksten. Hva skal du gjøre med dem?",
      options: ["Forklare dem, selv om du ikke trenger å utlede dem", "Gå rett til regningen, siden relasjonene allerede er oppgitt i teksten", "Utlede dem på nytt fra grunnprinsipper", "Gjengi dem ordrett slik de står i oppgaveteksten, og gå deretter videre til figuren"],
      explanation: "Relasjonene oppgis bevisst uforklart, og forklaringen er selve oppgaven — sensorens metaregel nummer én. Du slipper utledningen, men ikke forklaringen.",
    },
    {
      question: "Spareraten FALLER varig. Hva skjer med forbruket per arbeider i selve øyeblikket?",
      options: ["Det hopper opp", "Det hopper ned", "Det er uendret", "Det faller gradvis"],
      explanation: "Forbruket er $(1-s)f(k)$. Kapitalbeholdningen er forhåndsbestemt, så produksjonen er uendret, mens andelen $(1-s)$ er blitt større. Dette er speilbildet av spareøkningen.",
    },
    {
      question: "Spareraten faller varig. Hva er den langsiktige effekten på forbruket per arbeider?",
      options: ["Ubestemt — positiv hvis økonomien lå over gullregelnivået", "Entydig negativ, siden produksjonen per arbeider faller", "Entydig positiv, siden en større andel av produksjonen nå forbrukes hvert år", "Null, siden forbruket per arbeider vender tilbake til utgangspunktet"],
      explanation: "Både retningen og betingelsen speiles når skiftet snur: lå økonomien OVER gullregelnivået, gir lavere sparerate høyere langsiktig forbruk. Mange lærer «ubestemt» som frase og glemmer at betingelsen snur.",
    },
    {
      question: "Befolkningsveksten faller varig. Hva skjer med per arbeider-størrelsene?",
      options: ["$k^*$, $y^*$ og forbruket per arbeider stiger alle tre", "$k^*$ stiger, men forbruket per arbeider er ubestemt uten mer informasjon", "Alle tre faller, siden det blir færre arbeidere til å produsere", "Alle tre er uendret, siden befolkningsveksten ikke står i produktfunksjonen"],
      explanation: "Strålen blir slakere, så $k^*$ og $y^*$ stiger. Forbruket er $(1-s)f(k^*)$ med uendret $s$, så også det stiger. Ubestemtheten oppstår bare når $s$ selv endres.",
    },
    {
      question: "Produktivitetsveksten øker varig. Hva er det viktigste skillet i svaret?",
      options: ["Nivået per effektivitetsenhet faller, men banen for produksjonen per arbeider blir brattere", "Nivået per effektivitetsenhet stiger, men banen for produksjonen per arbeider blir flatere", "Både nivået per effektivitetsenhet og banen for produksjonen per arbeider faller", "Verken nivået eller banen endres — bare vekstraten i arbeidsstyrken"],
      explanation: "De to svarene peker i motsatt retning, og det er derfor spørsmålet skiller. Å bare gi det første ser ut som om økt produktivitetsvekst er skadelig, og det er feil — det lavere nivået er en måleeffekt.",
    },
    {
      question: "To skift trekker $k^*$ i motsatt retning. Hva er riktig framgangsmåte?",
      options: ["Behandle skiftene ett for ett, si at de trekker mot hverandre, og si hva utfallet avhenger av", "Velge det skiftet som virker størst og se bort fra det andre", "Konkludere at ingenting skjer, siden de to skiftene nøyaktig oppveier hverandre og $k^*$ blir liggende", "Unngå å konkludere i det hele tatt, siden modellen ikke kan brukes når to skift virker samtidig"],
      explanation: "Å vise at du forstår begge mekanismene gir uttelling selv om summen ikke kan signeres. At effektene nøyaktig oppveier hverandre, er et spesialtilfelle du ikke kan påstå uten begrunnelse.",
    },
    {
      question: "Hva er det avgjørende du må gjøre når du har tegnet to kryssinger i fasediagrammet?",
      options: ["Drøfte stabiliteten i hvert punkt og tegne dynamikkpilene", "Regne ut avstanden mellom de to likevektene langs den vannrette aksen", "Angi tallverdier for terskelen, slik at vippepunktet kan leses av", "Tegne tidsbanen for begge likevektene samtidig, i samme diagram med tid horisontalt"],
      explanation: "Å vise to kryssinger uten stabilitetsanalyse er den hyppigst flaggede feilen i denne sjangeren. Pilene ER argumentet for at terskelen er et vippepunkt.",
    },
    {
      question: "Kapitalslitet avhenger av inntektsnivået: høyt i fattige land, lavt i rike. Hvilken kurve får et sprang?",
      options: ["Utvanningsstrålen, som knekker fra bratt til slakere", "Sparekurven, som hopper opp i terskelen der kapitalslitet endres", "Produktfunksjonen, som får en knekk", "Ingen av kurvene — dette gir bare ett skjæringspunkt, akkurat som i grunnmodellen"],
      explanation: "Kapitalslitet står i helningen $n+\\delta$, så strålen knekker — akkurat som når befolkningsveksten avhenger av inntekten. Det er samme grep, og du trenger ikke ha sett varianten før.",
    },
    {
      question: "Hvorfor er det viktig å merke aksene i figurene?",
      options: ["Fordi fasediagrammet og tidsbanen har helt ulike horisontalakser", "Fordi sensor gir egne poeng for aksenavn", "Fordi figuren ellers ikke kan tegnes med linjal", "Fordi tallverdiene på aksene ellers ikke kan leses av på en entydig måte"],
      explanation: "Fasediagrammet har kapital per arbeider horisontalt, tidsbanen har tiden. Uten aksenavn kan sensor ikke se hvilken av de to figurene du har tegnet.",
    },
    {
      question: "Hva kjennetegner malen utsatt eksamen har fulgt tre år på rad?",
      options: ["Hele settet er vekstmodellen, bygget over samme oppgavekjede", "Hele settet er åpen økonomi med renteregel", "Settet er delt likt mellom vekst og åpen økonomi, med to oppgaver fra hver blokk", "Settet består av kortsvarsoppgaver med korte, avgrensede spørsmål"],
      explanation: "Kjeden er: oppsett med begrunnelser, likevekt grafisk, tilpasningsbane, ett eller to skift, og en utvidelsesvri til slutt. Skal du opp til utsatt eksamen, kan du øve nettopp denne kjeden.",
    },
    {
      question: "Hva gir mer uttelling: figuren eller forklaringen til figuren?",
      options: ["Forklaringen — sensorveiledningene sier «figur med forklarende tekst»", "Figuren alene, siden figurer er førsteklasses svar", "De teller like mye, uansett oppgave", "Verken den ene eller den andre teller, dersom relasjonene allerede er oppgitt i oppgaveteksten"],
      explanation: "Kravet har to sider og begge håndheves: uten forklaring kan sensor ikke se om du forsto det du tegnet. Uten figur mangler svaret det oppgaven ba om.",
    },
    {
      question: "Hvilken feil er det å skrive «det avhenger av» om effekten av høyere sparerate på $k^*$?",
      options: ["Å unnlate å signere noe modellen faktisk bestemmer", "Ingen feil — alle langsiktseffekter er betingede", "Å blande kort sikt og lang sikt i samme setning", "Å bruke feil modellvariant"],
      explanation: "Retningen på $k^*$ og $y^*$ er entydig ved en spareøkning. Forbehold er et verktøy, ikke garnityr: signer det modellen bestemmer, og flagg bare det den ikke bestemmer.",
    },
    {
      question: "Hva er den vanligste tidsfellen i en vekstoppgave?",
      options: ["Å bruke for lang tid på de lette første delspørsmålene", "Å tegne for mange figurer i starten", "Å skrive for kort på det siste delspørsmålet", "Å lese oppgaveteksten for grundig, slik at det går tid før skrivingen starter"],
      explanation: "Oppsett og figurer går fort når du har øvd. Kommer du til utvidelsesvrien med ti minutter igjen, taper du der de største poengene per minutt ligger — og katalogen av vrier er kort nok til at du kunne vært forberedt.",
    },
    {
      question: "Hvilken rekkefølge gjelder når oppgaven ber om både modelloppsett og figur?",
      options: ["Relasjoner og begrunnelser først, figur etterpå", "Figur først, siden den er raskest å lage", "Rekkefølgen er likegyldig", "Bare figuren er nødvendig når modellen er standard"],
      explanation: "Oppsettet er et eget delspørsmål med egne poeng. Å hoppe rett til fasediagrammet føles produktivt, men koster hele det delspørsmålet — figuren er et argument om en modell du allerede har presentert.",
    },
  ],
  'econ2310-2-1': [
    {
      question: "Hva bestemmer produksjonen i Keynes-krysset?",
      options: ["Samlet etterspørsel", "Kapitalbeholdningen, arbeidsstyrken og teknologien", "Sentralbankens rentesetting, som styrer aktiviteten", "Sparingen"],
      explanation: "Modellen forutsetter faste priser og ledige ressurser. Da møter bedriftene høyere etterspørsel med høyere produksjon i stedet for høyere priser, og det er etterspørselen som avgjør $Y$. Alternativet om kapital og arbeidskraft beskriver vekstmodellen, som gjelder på lang sikt. Alternativet om sparing snur kausaliteten: i denne modellen tilpasser sparingen seg investeringene, ikke omvendt.",
    },
    {
      question: "I modellen $Y = C + I_0$ med $C = c_0 + c_1 Y$: hva er realisert sparing i likevekt?",
      options: ["$I_0$", "$c_0 + I_0$, altså summen av autonomt konsum og autonome investeringer", "$\\dfrac{c_0 + I_0}{1 - c_1}$", "$\\dfrac{c_0}{1 - c_1}$"],
      explanation: "Innsetting av likevekts-$Y$ i $S = -c_0 + (1-c_1)Y$ gir $S = -c_0 + c_0 + I_0 = I_0$. Verken $c_0$ eller $c_1$ står igjen. Alternativet $(c_0+I_0)/(1-c_1)$ er likevektsproduksjonen $Y$, ikke sparingen.",
    },
    {
      question: "Hvordan henger spareraten $\\gamma$ sammen med den marginale konsumtilbøyeligheten $c_1$?",
      options: ["$\\gamma = 1 - c_1$", "$\\gamma = c_1$", "$\\gamma = 1/c_1$", "$\\gamma = c_1 - 1$"],
      explanation: "En ekstra krone inntekt går enten til forbruk eller til sparing, så de to andelene summerer seg til 1. Å blande dem er en av de vanligste feilene på dette stoffet, og H2018 vekslet bevisst mellom skrivemåtene.",
    },
    {
      question: "Husholdningene blir mer sparevillige i grunnmodellen med eksogene investeringer. Hva skjer med realisert sparing?",
      options: ["Den er uendret, og det er produksjonen som faller i stedet", "Den stiger, siden alle sparer en større andel av inntekten", "Den stiger, men mindre enn den ønskede sparingen", "Den faller, fordi investeringene faller"],
      explanation: "I likevekt må $S = I_0$, og $I_0$ er eksogent gitt. Inntekten faller helt til husholdningene med sin nye sparevilje sparer nøyaktig $I_0$. Alternativet om at sparingen faller, er riktig i varianten med akselerator ($I = I_0 + \\alpha Y$), men ikke her — modellvarianten avgjør svaret.",
    },
    {
      question: "Hvorfor er multiplikatoren $1/(1-c_1)$ større enn 1?",
      options: ["Fordi ny etterspørsel skaper inntekt, som gir nytt konsum, som gir ny inntekt, og så videre i flere runder", "Fordi prisene stiger når etterspørselen stiger, slik at hver krone i ny etterspørsel gir mer målt i kroner enn den gjorde i utgangspunktet", "Fordi investeringene er eksogene", "Fordi sparingen er lik investeringene i likevekt"],
      explanation: "Summen av alle rundene i kjedereaksjonen overstiger den første impulsen. Prisalternativet er utelukket i denne modellen: prisene er faste.",
    },
    {
      question: "Hva får multiplikatorprosessen til å konvergere i stedet for å løpe løpsk?",
      options: ["At bare andelen $c_1 < 1$ av hver runde går videre; resten lekker ut i sparing", "At produksjonskapasiteten setter et tak for hvor mye som kan produseres i hver runde", "At sentralbanken hever renten når aktiviteten stiger for mye", "At prisene stiger og demper realetterspørselen underveis i prosessen"],
      explanation: "Lekkasjen i hver runde gjør rundene stadig mindre, og summen konvergerer mot $1/(1-c_1)$ ganger den første impulsen. De tre andre mekanismene finnes ikke i denne modellen — de kommer inn i de større modellene senere i boka.",
    },
    {
      question: "En økonomi beskrives ved $S = \\gamma Y$ og $I = I_0 + \\alpha Y$ med $\\gamma > \\alpha > 0$. Hva er likevektsproduksjonen?",
      options: ["$Y = \\dfrac{I_0}{\\gamma - \\alpha}$", "$Y = \\dfrac{I_0}{\\gamma + \\alpha}$", "$Y = \\dfrac{I_0}{1 - \\gamma}$", "$Y = I_0(\\gamma - \\alpha)$"],
      explanation: "Likevekt krever $S = I$, altså $\\gamma Y = I_0 + \\alpha Y$, som gir $(\\gamma-\\alpha)Y = I_0$. Nevneren er netto lekkasje per krone inntekt: det som spares, minus det som automatisk kommer tilbake som investeringsetterspørsel.",
    },
    {
      question: "Hva er den økonomiske betydningen av betingelsen $\\gamma > \\alpha$?",
      options: ["At netto lekkasje ut av inntektsstrømmen er positiv, slik at prosessen konvergerer", "At spareraten er høyere enn det som er samfunnsøkonomisk ønskelig på lang sikt", "At investeringene alltid ligger under sparingen, slik at det bygges opp en reserve", "At økonomien befinner seg i full sysselsetting når likevekten er nådd"],
      explanation: "Grafisk betyr betingelsen at sparelinjen er brattere enn investeringslinjen. Uten den ville hver runde i prosessen vært større enn den forrige, og uttrykket $I_0/(\\gamma-\\alpha)$ ville gitt negativ produksjon.",
    },
    {
      question: "I varianten $S = \\gamma Y$, $I = I_0 + \\alpha Y$ med $\\alpha > 0$ øker spareraten $\\gamma$. Hva skjer med realisert sparing?",
      options: ["Den faller", "Den er uendret, akkurat som i grunnmodellen med eksogene investeringer", "Den stiger proporsjonalt med økningen i spareraten $\\gamma$", "Den stiger, men mindre enn proporsjonalt, fordi produksjonen faller samtidig"],
      explanation: "$S^* = \\gamma I_0/(\\gamma-\\alpha)$ gir $\\partial S^*/\\partial \\gamma = -\\alpha I_0/(\\gamma-\\alpha)^2 < 0$. Når aktiviteten faller, faller også investeringene, og sparingen må følge dem ned. Alternativet «uendret» er nettopp spesialtilfellet $\\alpha = 0$ — der er det riktig, men her er $\\alpha > 0$.",
    },
    {
      question: "Hva er forskjellen på ønsket og realisert sparing?",
      options: ["Ønsket sparing er hvor mye husholdningene planlegger å spare ved et gitt inntektsnivå; realisert sparing er hvor mye de faktisk sparer når inntekten har tilpasset seg", "Ønsket sparing er husholdningenes sparing, mens realisert sparing er summen av husholdningenes, bedriftenes og statens sparing i nasjonalregnskapet", "Ønsket sparing måles før skatt, mens realisert sparing måles etter skatt", "Ønsket sparing er en nominell størrelse, mens realisert sparing er en realstørrelse"],
      explanation: "Husholdningene styrer linjen — hvor mye de vil spare ved hver inntekt — men ikke punktet, altså hvilken inntekt de faktisk får. Det er nettopp derfor det er mulig å ønske seg mer sparing uten å ende opp med den.",
    },
    {
      question: "Hva representerer $c_0$ i konsumfunksjonen $C = c_0 + c_1 Y$?",
      options: ["Den delen av forbruket som ikke skyldes løpende inntekt, men formue, forventninger, tillit og kredittilgang", "Forbruket til de husholdningene som ikke har noen inntekt i det hele tatt, og som derfor må tære på oppspart formue for å klare seg", "Minstebeløpet en husholdning må bruke for å dekke livsnødvendige utgifter", "Den andelen av en ekstra inntektskrone som brukes på forbruk i stedet for å spares"],
      explanation: "$c_0$ er modellens skiftvariabel for sparevilje: bestemmer husholdningene seg for å spare mer ved uendret inntekt, faller $c_0$, og hele etterspørselslinjen flyttes ned. Alternativet om andelen av en ekstra inntektskrone beskriver $c_1$, ikke $c_0$.",
    },
    {
      question: "Hva betyr $\\alpha$ i relasjonen $I = I_0 + \\alpha Y$?",
      options: ["Akseleratoren — hvor mye investeringene øker per ekstra krone produksjon", "Importandelen i konsumprisindeksen", "Investeringenes rentefølsomhet", "Investeringsvarenes andel av produksjonen"],
      explanation: "Begrunnelsen for $\\alpha > 0$ er at høy aktivitet presser kapasiteten, gir bedre inntjening og lettere finansiering. Alternativet om importandelen er den andre betydningen $\\alpha$ har i denne boka — den gjelder i kapittel 3.2 og i hovedkursmodellen, ikke her. Sjekk alltid hvilken modell oppgaven bruker.",
    },
    {
      question: "Hvilke forutsetninger bærer spareparadokset?",
      options: ["Faste priser, ledige ressurser, eksogene investeringer og lukket økonomi", "Fleksible priser og full sysselsetting i utgangspunktet", "At sentralbanken klarer å holde inflasjonen nøyaktig på målet", "At husholdningene har rasjonelle forventninger om sin framtidige inntekt"],
      explanation: "Faller én av forutsetningene, endres konklusjonen. Er økonomien allerede på kapasitetsgrensen, frigjør økt sparing ressurser til investering i stedet for å senke produksjonen.",
    },
    {
      question: "Hvorfor er det ingen motsetning mellom at én husholdning kan spare mer, og at alle ikke kan gjøre det samtidig?",
      options: ["Fordi den enkelte er for liten til å påvirke sin egen inntekt, mens alle samlet nettopp bestemmer hverandres inntekt", "Fordi bankene bare har plass til en viss mengde innskudd i systemet", "Fordi noen husholdninger nødvendigvis må ta opp lån når andre sparer, slik at den samlede nettoposisjonen i økonomien ikke kan endres", "Fordi den enkeltes sparing er nominell, mens samlet sparing måles i faste priser"],
      explanation: "Dette er en sammensetningsfeilslutning: det som gjelder for én aktør isolert, gjelder ikke nødvendigvis for summen. Å nevne poenget eksplisitt er billig og gir uttelling.",
    },
    {
      question: "Hvorfor kan likevekten i Keynes-krysset ligge under full sysselsetting?",
      options: ["Fordi likevektsnivået bestemmes av etterspørselen, og ingenting i modellen knytter det til hvor mye arbeidskraft og kapital som finnes", "Fordi lønningene i modellen alltid ligger over det nivået arbeidsmarkedet tåler, slik at bedriftene ikke finner det lønnsomt å ansette alle som vil jobbe", "Fordi bedriftene bevisst holder produksjonen nede for å presse prisene opp", "Fordi ønsket sparing i denne modellen alltid overstiger ønskede investeringer"],
      explanation: "Alternativet om at ønsket sparing alltid overstiger ønskede investeringer kan ikke stemme: i likevekt ER sparing lik investering, det er nettopp det som definerer likevekten. Poenget er at produktmarkedet kan klarere på et nivå der arbeidsmarkedet ikke gjør det, og at ingen mekanisme i modellen lukker gapet av seg selv.",
    },
    {
      question: "I hvilken retning går kausaliteten mellom sparing og investering i denne modellen?",
      options: ["Investeringene er gitt, og inntekten justerer seg til sparingen matcher dem", "Sparingen skaffer midlene som gjør investeringene mulige", "Renten justerer seg opp eller ned helt til ønsket sparing og ønsket investering møtes i kapitalmarkedet", "Begge bestemmes samtidig av kapitalbeholdningen i økonomien"],
      explanation: "$S = I_0$ er en likevektsbetingelse, ikke en finansieringsmekanisme. Alternativet om at sparingen skaffer midler er den vanligste feiltolkningen — og det forutsetter i realiteten en økonomi på kapasitetsgrensen, altså en helt annen modell.",
    },
    {
      question: "Hvilke størrelser er endogene i modellen $Y = C + I_0$, $C = c_0 + c_1 Y$?",
      options: ["$Y$ og $C$ — de to variablene modellens to ligninger bestemmer", "$Y$, $C$ og $I_0$ — alle tre størrelsene som opptrer i likevektsbetingelsen", "$c_0$ og $c_1$", "$Y$, $C$, $c_0$ og $c_1$"],
      explanation: "Endogen betyr bestemt inne i modellen. To ligninger bestemmer to variabler, $Y$ og $C$. $I_0$, $c_0$ og $c_1$ mates inn utenfra og er dermed eksogene.",
    },
    {
      question: "Investeringsviljen stiger, slik at $I_0$ øker i grunnmodellen. Hva skjer med realisert sparing?",
      options: ["Den stiger med nøyaktig like mye som økningen i $I_0$", "Den er uendret, siden husholdningenes sparevilje ikke har endret seg i det hele tatt her", "Den faller, fordi konsumet stiger når inntekten stiger", "Den stiger med $1/(1-c_1)$ ganger økningen i $I_0$, altså med multiplikatorens styrke"],
      explanation: "$S = I_0$ i likevekt, så $\\Delta S = \\Delta I_0$. Det er produksjonen som stiger med multiplikatoren $1/(1-c_1)$ — alternativet som ganger $\\Delta I_0$ med multiplikatoren forveksler de to størrelsene.",
    },
    {
      question: "Hvordan flytter etterspørselslinjen i Keynes-krysset seg når $c_0$ faller?",
      options: ["Den forskyves parallelt nedover, uten at helningen endres", "Den blir brattere, siden husholdningene reagerer sterkere", "Den blir slakere og roterer om skjæringspunktet", "Den ligger i ro, mens 45-graderslinjen flytter seg"],
      explanation: "$c_0$ er skjæringspunktet med den vertikale aksen, ikke helningen — derfor et parallelt skift nedover og en ny krysning til venstre for den gamle. Modelleres økt sparevilje i stedet som lavere $c_1$, blir linjen slakere; da roterer den, men det er en annen måte å modellere det samme sjokket på.",
    },
    {
      question: "Hva er sensorens viktigste enkeltregel når et relasjonssett oppgis uten kommentar på eksamen?",
      options: ["Forklar relasjonene du bruker, før du regner på dem", "Regn ut likevekten så raskt som mulig for å spare tid til de siste delspørsmålene", "Gjengi relasjonene ordrett i besvarelsen, slik at sensor tydelig ser at du har lest og forstått hva som er oppgitt", "Velg den modellvarianten som gir det enkleste og mest entydige svaret"],
      explanation: "Relasjonssettene oppgis bevisst uforklart, med formuleringen at de kan komme til nytte. Sensorveiledningene sier gjentatte ganger at forklaring forventes — å regne på uforklarte ligninger gir ikke uttelling.",
    },
  ],
  'econ2310-2-2': [
    {
      question: "Hva menes med at produksjonen er tilbudsbestemt?",
      options: ["At produksjonsnivået er bestemt av kapasiteten, fordi alle ressurser allerede er i bruk", "At bedriftene selv bestemmer prisene sine i stedet for å ta dem for gitt fra markedet, og derfor kan velge produksjonsnivå fritt", "At produksjonen bestemmes av hvor mye myndighetene tillater at det produseres i hver næring", "At tilbudet av arbeidskraft er større enn etterspørselen etter den"],
      explanation: "Når skranken binder på tilbudssiden, kan økt etterspørsel etter én ting bare møtes ved at noe annet produseres mindre. Dette er forutsetningen som ligger under hele vekstmodellen, selv om den sjelden skrives ned der.",
    },
    {
      question: "Hvilken av modellene beskriver etterspørselsbestemt produksjon?",
      options: ["Keynes-krysset", "Vekstmodellen, der produksjonen per arbeider er gitt ved produktfunksjonen $y=f(k)$", "Begge to", "Ingen av dem"],
      explanation: "Keynes-krysset forutsetter faste priser og ledige ressurser, slik at bedriftene produserer det de får solgt. Vekstmodellen nevner ikke etterspørsel i det hele tatt: der er $y = f(k)$.",
    },
    {
      question: "Hvorfor er sparing bra i vekstmodellen og et problem i Keynes-krysset?",
      options: ["Fordi produksjonen er tilbudsbestemt i den ene modellen og etterspørselsbestemt i den andre", "Fordi vekstmodellen ser på en lukket økonomi uten utenrikshandel, mens Keynes-krysset er utviklet for en åpen økonomi med eksport og import", "Fordi vekstmodellen regner i faste priser mens Keynes-krysset regner i løpende priser og dermed måler noe annet", "Fordi den ene modellen er riktig, mens den andre er en tidlig forenkling som faget siden har forlatt"],
      explanation: "Med ressursene i bruk er sparing en omdisponering fra konsumvarer til investeringsvarer; med ledige ressurser er den bortfall av etterspørsel som ingen tar over. Modellene er ikke uenige om et faktum — de beskriver ulike skranker.",
    },
    {
      question: "Hva sier gullregelforbeholdet?",
      options: ["At høyere sparerate gir høyere produksjon per arbeider, men ikke nødvendigvis høyere forbruk per arbeider", "At det finnes en sparerate som gir maksimal produksjon per arbeider på lang sikt", "At spareraten alltid bør settes så høyt som mulig på lang sikt", "At sparingen må være lik investeringen i enhver likevekt"],
      explanation: "Langsiktig konsum per arbeider er $(1-s)f(k^*)$: en større kake, men en mindre andel av den til forbruk. Hvilken effekt som vinner, avhenger av gullregelposisjonen — derfor kan fortegnet ikke signeres uten mer informasjon. Alternativet om maksimal produksjon er feil: produksjonen per arbeider stiger monotont med $s$; det er forbruket som har et maksimum.",
    },
    {
      question: "En varig høyere sparerate i vekstmodellen gir en …",
      options: ["nivåeffekt", "vekstrateeffekt, altså en varig endring i hvor raskt produksjonen per arbeider vokser", "midlertidig nivåeffekt som forsvinner igjen", "effekt som ikke kan signeres"],
      explanation: "Produksjon per arbeider blir varig høyere, og veksten er midlertidig sterkere underveis, men i den nye steady state er veksttakten tilbake til utgangspunktet. Bare produktivitetsveksten $g$ gir en varig endring i veksttakten.",
    },
    {
      question: "Hva er det som egentlig avgjør om etterspørselsmodellen eller vekstmodellen er relevant?",
      options: ["Om det finnes ubrukte ressurser i økonomien", "Om økonomien er åpen eller lukket, siden utenrikshandelen avgjør hvor mye av etterspørselen som lekker ut av landet", "Om landet er rikt eller fattig", "Om myndighetene fører aktiv finanspolitikk eller ikke"],
      explanation: "Horisonten er en god tommelfingerregel fordi ressurssituasjonen henger sammen med tid — priser og lønninger er trege på kort sikt — men det er ressurssituasjonen som logisk avgjør saken. Et rikt land i dyp lavkonjunktur er etterspørselsbestemt; et fattig land i full sysselsetting er tilbudsbestemt.",
    },
    {
      question: "Hvorfor fungerer «kort sikt mot lang sikt» likevel som tommelfingerregel?",
      options: ["Fordi priser og lønninger er trege på kort sikt, mens de over tid tilpasser seg og presser produksjonen mot det tilbudssiden tillater", "Fordi vekstmodellen matematisk sett bare er utledet for perioder på over ti år", "Fordi konjunktursvingninger per definisjon varer under ett år", "Fordi kapitalbeholdningen er tilnærmet konstant på kort sikt"],
      explanation: "Tregheten i priser og lønninger er grunnen til at et etterspørselsfall gir ledighet i stedet for lavere priser på kort sikt. Over tid forsvinner den tregheten, og da binder kapasiteten.",
    },
    {
      question: "Hva er den dokumenterte forskjellen mellom en besvarelse der alt er riktig og en som viser reell innsikt, ifølge H2018-veiledningen?",
      options: ["At kandidaten selv innfører begrepsparet tilbudsbestemt og etterspørselsbestemt, uten at oppgaven ber om det", "At kandidaten regner ut multiplikatoren eksplisitt og viser hvert steg i utregningen i stedet for bare å oppgi resultatet", "At kandidaten tegner begge figurene i stedet for bare den ene, og stiller dem opp mot hverandre i det samme svaret", "At kandidaten bruker flest mulig modeller i det samme svaret, uansett tema"],
      explanation: "Oppgaveteksten lot bevisst være å nevne begrepsparet. Merk at det ikke gis premie for antall modeller — bare for at en ekstra modell tilfører noe.",
    },
    {
      question: "I hvilken retning leses sammenhengen $S = I$ i vekstmodellen?",
      options: ["Fra sparing til investering: den sparte andelen $s$ av produksjonen blir investering", "Fra investering til sparing: investeringene er eksogent gitte, og det er inntekten som justerer seg helt til sparingen matcher dem", "Begge veier samtidig, siden $S = I$ er en identitet i begge modellene", "Ingen av veiene — sammenhengen gjelder ikke i vekstmodellen, men bare i Keynes-krysset med faste priser"],
      explanation: "I Keynes-krysset går kausaliteten motsatt vei: $I_0$ er gitt, og inntekten justerer seg til sparingen matcher den. Samme likhetstegn, motsatt fortolkning — og det er nettopp derfor konklusjonene om sparing spriker.",
    },
    {
      question: "Et land har full sysselsetting, men lite kapital per arbeider. Hvilken modell passer for å analysere virkningen av høyere sparerate?",
      options: ["Vekstmodellen, siden det ikke finnes ledige ressurser å mobilisere med økt etterspørsel", "Keynes-krysset, siden fattige land mangler kjøpekraft og derfor først og fremst trenger et løft i samlet etterspørsel", "Keynes-krysset, siden spareraten er en av parametrene som inngår i multiplikatoren i den modellen", "Ingen av modellene kan brukes på fattige land, siden begge forutsetter et utviklet markedssystem"],
      explanation: "Full sysselsetting betyr at kapasiteten binder. Mer etterspørsel ville gitt prispress, ikke mer produksjon. Skal produksjonen per arbeider opp, må kapitalen per arbeider opp.",
    },
    {
      question: "Hva er en bindende kapasitetsskranke?",
      options: ["At alle ressurser er i bruk, slik at mer av én ting bare kan produseres ved at noe annet må vike", "At bedriftene har nådd grensen for hvor mye de får låne i bankene, slik at finansieringen setter taket for hvor mye de kan produsere", "At myndighetene har satt et tak på hvor mye som kan importeres", "At kapitalslitet er høyere enn nyinvesteringene"],
      explanation: "Når skranken binder, har etterspørselspolitikk ingen varig virkning på samlet produksjon — bare på sammensetningen og på prisene.",
    },
    {
      question: "Et produksjonsgap er negativt. Hva forteller det deg?",
      options: ["At det finnes ledige ressurser, slik at etterspørselsmodellen er den relevante", "At kapitalbeholdningen per arbeider ligger under steady state-nivået $k^*$, slik at økonomien fortsatt er i en overgangsfase", "At landet har underskudd på handelsbalansen, altså at importen er større enn eksporten", "At spareraten ligger under gullregelnivået, slik at forbruket per arbeider kan økes"],
      explanation: "Negativt produksjonsgap betyr at faktisk produksjon ligger under normal utnyttelse — det er arbeidsledige og maskiner som står stille. De tre andre alternativene beskriver reelle forhold, men ikke det et produksjonsgap måler.",
    },
    {
      question: "Hvilken feil gjør denne setningen: «Høyere sparerate gir varig høyere vekst og dermed høyere forbruk på lang sikt»?",
      options: ["To feil: den forveksler nivå- og vekstrateeffekt, og den signerer forbrukseffekten uten gullregelinformasjon", "Én feil: forbruket per arbeider faller alltid når spareraten stiger, siden en større andel av produksjonen settes av til sparing", "Én feil: produksjonen per arbeider stiger ikke av høyere sparerate", "Ingen feil — setningen er en korrekt oppsummering av vekstmodellen"],
      explanation: "Produksjonen per arbeider blir varig høyere, men veksttakten er tilbake til utgangspunktet i den nye steady state. Og forbrukseffekten avhenger av om økonomien lå under eller over gullregelnivået — den kan ikke signeres uten den informasjonen.",
    },
    {
      question: "Hvor i boka møter du kontrasten mellom tilbuds- og etterspørselssiden igjen, inne i én og samme modell?",
      options: ["I analysen av en sterk lønns- og prisreaksjon i den åpne modellen (kap. 4.3)", "I kapitlet om udekket renteparitet (kap. 3.1), der valutakursen kobler rentenivået hjemme til aktiviteten i økonomien", "I kapitlet om konsumprisindeksen (kap. 3.2)", "I drillkapitlet om vekstmodellen (kap. 1.7)"],
      explanation: "Når lønns- og prisreaksjonen på høy aktivitet er sterk, oppfører modellen seg som om tilbudssiden er i ferd med å binde, og etterspørselsstimulanser får langt mindre effekt på produksjonen. Kontrasten er altså en gradvis overgang, ikke bare et skille mellom to pensumdeler.",
    },
    {
      question: "Regjeringen kutter offentlige utgifter midt i et kraftig fall i privat etterspørsel, med den begrunnelse at landet «må spare for framtiden». Hva er den treffende innvendingen?",
      options: ["At det langsiktige argumentet er riktig i seg selv, men brukt på et tidspunkt der etterspørselen er skranken, slik at innstrammingen forsterker nedgangen", "At sparing heller ikke hjelper på lang sikt, siden produksjonsnivået uansett bestemmes av teknologi og befolkningsvekst", "At offentlig sparing ikke teller med i samlet sparing i vekstmodellen", "At produksjonen på lang sikt uansett er uavhengig av spareraten"],
      explanation: "Innvendingen er en timing-innvending, ikke en avvisning av vekstargumentet: sparing hjelper når ressursene er i bruk, ikke når de står ledige. Nettopp derfor er «stram inn når krisen er over» en nødvendig del av svaret, ikke en høflighetsfrase.",
    },
  ],
  'econ2310-3-1': [
    {
      question: "Kursen går fra 11,60 til 12,10 kroner per euro. Hva har skjedd med krona?",
      options: ["Den har svekket seg", "Den har styrket seg", "Kursen måler bare euroens verdi", "Det avhenger av prisnivåene i de to landene"],
      explanation: "$E$ er prisen på utenlandsk valuta målt i kroner. Når du må betale flere kroner for én euro, er utenlandsk valuta blitt dyrere og krona mindre verdt. Høyere $E$ betyr altså svakere krone. Alternativet om prisnivåer gjelder *realvalutakursen*; her spørres det om den nominelle.",
    },
    {
      question: "Hva er paritetsbetingelsen i bokstandardens form?",
      options: ["$E = E^e + \\kappa(i^F - i)$", "$E = E^e + \\kappa(i - i^F)$, altså med norsk rente først i parentesen", "$E = E^e - \\kappa(i^F + i)$", "$E = E^e\\kappa(i^F - i)$"],
      explanation: "Rekkefølgen i parentesen er avgjørende: utenlandsk rente først, med positivt fortegn, slik at høyere $i^F$ gir høyere $E$ og dermed svakere krone. Bytter du om, snur alle fortegnene dine.",
    },
    {
      question: "Norges Bank hever renten uventet. Hva skjer med kronekursen?",
      options: ["$E$ faller, altså styrkes krona", "$E$ stiger, altså svekkes krona", "$E$ er uendret, siden renten ikke står i paritetsbetingelsen", "Effekten kan ikke signeres uten å kjenne $\\kappa$"],
      explanation: "Kroneplasseringer blir mer attraktive, kapital strømmer inn, og krona blir dyrere. I relasjonen står $i$ med negativt fortegn, så høyere $i$ senker $E$. Alternativet om $\\kappa$ er feil: $\\kappa$ påvirker hvor *mye* kursen beveger seg, men ikke retningen, siden $\\kappa > 0$.",
    },
    {
      question: "Den amerikanske sentralbanken hever renten. Hva skjer med krona?",
      options: ["Den svekkes", "Den styrkes", "Den er upåvirket, siden Norge har flytende valutakurs", "Den svekkes bare dersom Norges Bank kutter samtidig"],
      explanation: "Høyere $i^F$ gjør utenlandske plasseringer mer attraktive, kapital strømmer ut, og $E$ stiger. At Norge har flytende kurs er nettopp grunnen til at kursen *kan* bevege seg — med fast kurs hadde renten måttet følge etter i stedet.",
    },
    {
      question: "Markedet nedjusterer synet på norsk eksportevne på lang sikt. Hva skjer?",
      options: ["$E^e$ stiger, og dagens kurs følger like mye opp", "Ingenting skjer i dag; kursen endrer seg først når eksportsvikten faktisk inntreffer om mange år", "$E^e$ faller, siden svakere eksport betyr mindre behov for valuta", "Norges Bank må heve renten før kursen kan endre seg"],
      explanation: "$E^e$ inngår med koeffisient 1, så dagens kurs følger ankeret én for én. Dette er tillitskanalen, og den forklarer hvorfor kursen reagerer i dag på nyheter om forhold mange år fram i tid.",
    },
    {
      question: "Hvorfor strømmer ikke all kapital til landet med høyest rente?",
      options: ["Fordi dagens kurs justerer seg slik at høyrentelandets valuta forventes å svekke seg", "Fordi kapitalkontroll og andre reguleringer i praksis hindrer store kapitalflyttinger mellom land", "Fordi investorene er risikoaverse og derfor sprer plasseringene sine jevnt", "Fordi rentene i praksis alltid tilpasser seg hverandre over tid"],
      explanation: "Det er ikke rentene som tilpasser seg, men dagens kurs. Når kapital strømmer inn, styrker krona seg i dag, mens forventningen $E^e$ ligger fast — dermed forventes en svekkelse framover, og det forventede kurstapet spiser opp renteforspranget.",
    },
    {
      question: "Hva betyr «udekket» i udekket renteparitet?",
      options: ["At investoren ikke har sikret seg mot kursrisikoen, men bærer den selv", "At betingelsen ikke er dekket av empiriske data, og derfor bare gjelder som en teoretisk konstruksjon", "At bare en del av kapitalstrømmene er omfattet av betingelsen", "At sentralbanken ikke garanterer noen bestemt valutakurs"],
      explanation: "Motstykket er *dekket* renteparitet, der vekslingskursen avtales på forhånd gjennom en terminkontrakt. Den udekkede varianten bygger på en forventning, $E^e$; den dekkede på en avtalt pris.",
    },
    {
      question: "Hva er $E^e$?",
      options: ["Markedets anslag på framtidig valutakurs", "Kursen sentralbanken mener er den riktige for norsk økonomi", "Gjennomsnittskursen de siste tolv månedene, brukt som referanse", "Den kursen som ville gitt handelsbalanse mellom Norge og utlandet"],
      explanation: "$E^e$ er kursens anker. Det oppsummerer alt markedet tror om norsk økonomis langsiktige stilling: konkurranseevne, bytteforhold, petroleumsinntekter og tillit til politikken.",
    },
    {
      question: "Hva sier $\\kappa$ i paritetsbetingelsen?",
      options: ["Hvor sterkt kursen reagerer på renteforskjellen", "Hvor stor andel av kapitalen som er internasjonalt mobil i utgangspunktet", "Hvor lang tid det tar før en renteendring slår ut i valutakursen", "Hvor mye krona er over- eller undervurdert i forhold til langsiktskursen"],
      explanation: "$\\kappa > 0$ er en følsomhetsparameter. Stor $\\kappa$ gir store kursutslag av små renteendringer. Du trenger ikke kjenne verdien for å bruke relasjonen — det er fortegnet som bærer analysen.",
    },
    {
      question: "Global uro får investorer til å kreve høyere kompensasjon for å holde små valutaer. Hva skjer med krona?",
      options: ["Den svekkes, siden risikopremien virker som høyere utenlandsk avkastning", "Den styrkes, siden norsk økonomi i internasjonal sammenheng oppfattes som solid og gjeldfri", "Den er upåvirket, siden risikopremien ikke inngår i paritetsbetingelsen", "Den svekkes bare dersom uroen også hever den utenlandske renten"],
      explanation: "Risikopremien kan skrives som et tillegg til utenlandsk avkastning, $E = E^e + \\kappa(i^F + \\rho - i)$, så høyere $\\rho$ gir høyere $E$. Dette er en viktig del av forklaringen på at små valutaer svekkes i kriser, helt uavhengig av rentene.",
    },
    {
      question: "Norges Bank hever renten nøyaktig så mye som markedet hadde ventet. Hva skjer med kursen?",
      options: ["Ingenting skjer med kursen", "Krona styrker seg", "Krona svekker seg, siden hevingen viser at inflasjonen er et problem", "Krona styrker seg, men bare halvparten så mye"],
      explanation: "Bare den uventede delen av en renteendring flytter kursen. Den forventede delen ligger allerede i dagens kurs. Alternativet om at krona styrker seg fordi renten «faktisk er blitt høyere», er nettopp fellen: markedet handlet på forventningen, ikke på vedtaket.",
    },
    {
      question: "Norges Bank hever renten, men krona svekker seg samme dag. Hva kan ha skjedd?",
      options: ["Hevingen var mindre enn ventet, eller ble lest som et signal som løftet $E^e$", "Paritetsbetingelsen gjelder ikke i praksis og kan derfor ikke brukes", "Sentralbanken må ha intervenert i valutamarkedet samtidig", "Kursen reagerer alltid med noen dagers forsinkelse på rentevedtak"],
      explanation: "Paritetsbetingelsen sier at høyere rente styrker krona *gitt* $E^e$ og $i^F$. Observerer du noe annet, har noe av det andre endret seg — eller hevingen var i realiteten en nedjustering målt mot forventningen. Å konkludere med at relasjonen er ubrukelig, er å kaste bort verktøyet som forklarer hva som skjedde.",
    },
    {
      question: "Hvordan ser paritetsbetingelsen ut i et diagram med norsk rente $i$ horisontalt og $E$ vertikalt?",
      options: ["Som en rett, fallende linje med helning $-\\kappa$", "Som en rett, stigende linje med helning $\\kappa$", "Som en konkav, fallende kurve som flater ut ved høye renter fordi kursens følsomhet avtar", "Som en loddrett linje, siden kursen bestemmes uavhengig av norsk rente"],
      explanation: "Skriv relasjonen som $E = (E^e + \\kappa i^F) - \\kappa i$: skjæringspunktet er $E^e + \\kappa i^F$, og helningen er $-\\kappa$. Linjen er rett fordi bokstandarden er en linearisert form av arbitrasjebetingelsen.",
    },
    {
      question: "Hva flytter deg langs paritetslinjen, og hva skifter hele linjen?",
      options: ["Norsk rente flytter deg langs linjen; de tre andre skifter den", "$i^F$ flytter deg langs linjen; norsk rente skifter linjen", "Alle fire variablene flytter deg langs linjen", "Alle fire variablene skifter hele linjen, siden ingen av dem er avlest direkte på aksene"],
      explanation: "Norsk rente står på den horisontale aksen, så en endring i den er en bevegelse langs linjen. De tre andre inngår i skjæringspunktet og gir derfor parallelle skift. Skillet er det samme grepet du bruker i alle skiftanalyser senere i boka.",
    },
    {
      question: "Hva er den tredje kanalen renten virker gjennom i en åpen økonomi?",
      options: ["Valutakurskanalen: krona styrkes, og eksporten faller", "Skattekanalen: høyere rente gir høyere skatteinntekter", "Lønnskanalen: høyere rente presser lønningene ned direkte", "Formueskanalen: høyere rente senker boligprisene og dermed husholdningenes formue og forbruk"],
      explanation: "De to første er konsum og investeringer, kjent fra ECON1310. Valutakurskanalen er den som oftest glemmes på eksamen, og den hviler helt på paritetsbetingelsen: uten en relasjon som knytter renten til kursen, finnes den ikke.",
    },
    {
      question: "Hva er UIP for en type sammenheng?",
      options: ["En likevektsbetingelse i valutamarkedet", "En empirisk lov som holder til enhver tid i markeder med fri kapitalflyt", "En atferdsligning for husholdningene", "En regnskapsidentitet som alltid holder"],
      explanation: "Betingelsen sier hva som må gjelde når ingen har noe å hente på å flytte kapital. Empirisk holder den dårlig på kort horisont, og å nevne det i én setning styrker besvarelsen. En regnskapsidentitet, derimot, kan ikke brytes — UIP kan.",
    },
    {
      question: "Hva består sjokkvariabelen $Z^E$ av i den åpne modellen i Del 4?",
      options: ["Endringer i utenlandsk rente, forventet langsiktskurs og risikopremie", "Endringer i eksportetterspørselen og i importprisene fra utlandet", "Endringer i offentlige kjøp, i investeringsviljen og i eksporten", "Endringer i inflasjonsforventningene hjemme og ute"],
      explanation: "$Z^E$ samler nettopp de valutakursimpulsene dette kapitlet handler om. Å kunne si hva $Z^E$ består av — og skille det fra $Z^\\pi$, som er inflasjonsimpulser — er en av de billigste presisjonene i Del 4.",
    },
    {
      question: "Hvorfor er $i^F$ eksogen i modellene i denne boka?",
      options: ["Fordi Norge er en liten økonomi og ikke påvirker verdensmarkedsrenten", "Fordi utenlandske renter endrer seg så langsomt at de i praksis kan regnes som konstante i modellsammenheng", "Fordi Norges Bank i praksis følger de utenlandske rentene tett", "Fordi kapitalkontroll skjermer norske renter fra utenlandske"],
      explanation: "Forutsetningen om en liten åpen økonomi er grunnen. Norsk pengepolitikk påvirker ikke verdensmarkedsrenten, men Norge påvirkes fullt ut av den — og det er nettopp derfor valutakursen blir en så viktig variabel.",
    },
    {
      question: "Hva sier trilemmaet?",
      options: ["At fast kurs, fri kapitalmobilitet og selvstendig pengepolitikk ikke kan kombineres", "At et land ikke kan ha lav inflasjon, lav ledighet og balanse i utenriksøkonomien samtidig", "At pengepolitikk, finanspolitikk og lønnspolitikk ikke kan koordineres samtidig", "At kursen ikke kan være både stabil, forutsigbar og markedsbestemt samtidig"],
      explanation: "Sammenhengen følger av paritetsbetingelsen: med fri kapitalmobilitet og fast kurs må den innenlandske renten følge den utenlandske. Norge har valgt fri kapitalmobilitet og selvstendig pengepolitikk, og lever derfor med flytende kurs.",
    },
    {
      question: "Den utenlandske renten stiger, og samtidig oppjusterer markedet norsk eksportevne på lang sikt. Hva skjer med krona?",
      options: ["Effekten kan ikke signeres", "Krona svekkes, siden rentekanalen alltid dominerer forventningskanalen", "Krona styrkes, siden en oppjustering av $E^e$ virker med full styrke", "Krona er uendret"],
      explanation: "Høyere $i^F$ løfter $E$ med $\\kappa\\Delta i^F$, mens en bedre langsiktsvurdering senker $E^e$ og dermed $E$. Hvilken som dominerer, avhenger av størrelsene, og modellen avgjør det ikke. Merk at alternativet om at krona styrkes «med full styrke», forveksler retningen: bedre eksportutsikter gir *lavere* $E^e$, ikke høyere.",
    },
    {
      question: "Hva bør en besvarelse gjøre når fortegnet på en effekt ikke kan signeres?",
      options: ["Si at effekten er ubestemt, hva den avhenger av, og hva som ville avgjort saken", "Velge det mest sannsynlige fortegnet, siden sensor krever et svar", "Hoppe over spørsmålet og bruke tiden på de delene som kan besvares", "Oppgi begge muligheter uten å kommentere hva forskjellen henger på"],
      explanation: "Å signere det usignerbare er en av de feilene som koster mest. Å flagge ubestemtheten og si hva den henger på, er tvert imot det tydeligste tegnet på at du forstår modellen. Alternativet om å oppgi begge muligheter uten kommentar er halvveis: å nevne begge utfall uten å si hva som avgjør, viser ikke at du har forstått mekanismen.",
    },
    {
      question: "Hva er konkurranseevne i denne sammenhengen?",
      options: ["Prisen på norske varer sammenlignet med utenlandske, målt i samme valuta", "Hvor produktive norske arbeidere er sammenlignet med utenlandske arbeidere i samme næring", "Hvor stor andel av norsk produksjon som eksporteres", "Hvor lav den norske renten er sammenlignet med utlandet"],
      explanation: "Konkurranseevnen bedres når krona svekkes, når norsk pris- og lønnsvekst er lavere enn ute, eller når produktiviteten hjemme vokser raskere. Det er via konkurranseevnen at kursen får betydning for aktivitet og sysselsetting.",
    },
    {
      question: "Hva er den mest presise måten å formulere fortegnsfasiten på eksamen?",
      options: ["Med forbeholdet «gitt forventet langsiktskurs og utenlandsk rente»", "Så kort og bastant som mulig, slik at sensor ser at fortegnene sitter", "Med et generelt forbehold om at empirien på dette området er usikker og omdiskutert", "Ved å oppgi begge retninger som like sannsynlige"],
      explanation: "Uten forbeholdet «alt annet likt» påstår du noe som er empirisk feil ofte nok til å være en reell svakhet. Med forbeholdet er påstanden presis, og du viser samtidig at du kjenner de andre kanalene — og du blir i stand til å håndtere oppgaver der to drivere trekker i motsatt retning.",
    },
    {
      question: "Hva sier omskrivningen $i \\approx i^F + (E^e - E)/E$?",
      options: ["At norsk rente er lik utenlandsk rente pluss forventet kronesvekkelse", "At norsk rente alltid ligger over utenlandsk rente i en liten åpen økonomi", "At valutakursen bestemmes av rentenivået alene, uten rolle for forventninger", "At forventet kronesvekkelse er lik forskjellen i prisvekst mellom de to landene over samme periode"],
      explanation: "Denne formen viser hva høy norsk rente *koster* markedet i forventet kurstap: er norsk rente høyere enn utenlandsk, må markedet forvente at krona skal svekke seg — ellers ville alle plassert i Norge. Alternativet om prisvekstforskjeller beskriver kjøpekraftsparitet, en helt annen sammenheng.",
    },
    {
      question: "Hvorfor er en «sterk» krone ikke uten videre gode nyheter?",
      options: ["Fordi norske varer blir dyrere for utlandet", "Fordi importerte varer blir dyrere målt i kroner", "Fordi sentralbanken da må heve renten for å holde kursen oppe", "Fordi oljeinntektene faller målt i dollar"],
      explanation: "En sterk krone er god for importører og demper prisveksten, men krevende for konkurranseutsatt næringsliv. Merk at alternativet om dyrere importvarer har fortegnet feil: med en sterkere krone blir importerte varer *billigere* i kroner, ikke dyrere.",
    },
  ],
  'econ2310-3-2': [
    {
      question: "Hva er konsumprisdefinisjonen?",
      options: ["$\\pi = \\alpha p_i + (1-\\alpha)p_s$", "$\\pi = \\alpha p_s + (1-\\alpha)p_i$, altså med norske varer først og importvarer sist", "$\\pi = p_i + p_s$, siden begge prisvekstene inngår fullt ut i indeksen", "$\\pi = \\alpha(p_i - p_s)$, altså differansen mellom de to prisvekstene"],
      explanation: "$\\alpha$ er importandelen, så den skal stå foran prisveksten på importerte varer $p_i$. Vektene summerer seg til 1 fordi alt husholdningene kjøper enten er importert eller produsert i Norge.",
    },
    {
      question: "Hva betyr $\\alpha$ i dette kapitlet?",
      options: ["Importandelen i konsumprisindeksen", "Akseleratoren i investeringsfunksjonen", "Valutakursens følsomhet for renteforskjellen", "Eksportandelen av produksjonen"],
      explanation: "$\\alpha$ er vekten importerte varer har i det husholdningene kjøper. Akseleratorbetydningen er den $\\alpha$ hadde i kapittel 2.1 — samme bokstav, ingen sammenheng. Importandel-betydningen er derimot den samme som i hovedkursmodellen i Del 5.",
    },
    {
      question: "Krona svekker seg. Hva skjer med prisveksten på importerte varer?",
      options: ["Den stiger raskt og mekanisk", "Den stiger, men først etter at lønnsveksten har tatt seg opp", "Den faller, siden norske varer blir mer konkurransedyktige", "Den er uendret"],
      explanation: "Importvarer er priset i utenlandsk valuta, så en svakere krone gjør dem dyrere i kroner umiddelbart. Kanalen krever ingen antakelser om arbeidsmarkedet — bare at kostnadsøkningen videreformidles. Alternativet om at importprisveksten faller overser at kroneprisen er den utenlandske prisen ganget med kursen.",
    },
    {
      question: "Hvor stort er det direkte gjennomslaget fra importprisvekst til KPI-inflasjon?",
      options: ["$\\alpha$", "1", "$1-\\alpha$", "$\\alpha/(1-\\alpha)$"],
      explanation: "$\\partial \\pi/\\partial p_i = \\alpha$. Gjennomslaget er altså mindre enn 1: en kronesvekkelse på ti prosent gir ikke ti prosent høyere konsumpriser, siden bare en del av konsumet er importert.",
    },
    {
      question: "Hvilken kanal går fra valutakurs til prisveksten på norskproduserte varer?",
      options: ["Den indirekte kanalen, via konkurranseevne, aktivitet, ledighet og lønnsvekst", "Den direkte kanalen, siden norske varer også inneholder importerte innsatsvarer", "Ingen kanal — norske varepriser er upåvirket av valutakursen", "Renteregelen, siden sentralbanken reagerer på kursendringer"],
      explanation: "Kjeden er: svakere krone gir bedret konkurranseevne, høyere $Y$, lavere ledighet, høyere lønnsvekst, høyere $p_s$. Den er treg fordi den må gjennom fire ledd, og betinget fordi hvert ledd hviler på en antakelse.",
    },
    {
      question: "Hva er riktig rekkefølge i den indirekte kanalen?",
      options: ["Konkurranseevne opp, $Y$ opp, ledighet ned, lønnsvekst opp, $p_s$ opp", "$p_s$ opp, lønnsvekst opp, ledighet ned, $Y$ opp, konkurranseevne opp", "Lønnsvekst opp, $Y$ opp, ledighet ned, konkurranseevne opp, $p_s$ opp", "Ledighet ned, konkurranseevne opp, $p_s$ opp, lønnsvekst opp, $Y$ opp"],
      explanation: "Kjeden går fra aktivitet til lønn til pris, gjennom arbeidsmarkedet. Å snu den — å påstå at prisene driver aktiviteten — er en av de feilene sensor flagger hyppigst, fordi den snur hele årsakssammenhengen i modellen.",
    },
    {
      question: "Krona svekker seg. Hva skjer med KPI-inflasjonen?",
      options: ["Den stiger, og retningen er entydig på kort sikt", "Den stiger bare hvis sentralbanken lar renten ligge uendret i hele perioden", "Effekten kan ikke signeres, siden de to kanalene trekker i motsatt retning", "Den faller, siden konkurranseevnen bedres og norske varer blir relativt billigere"],
      explanation: "Den direkte kanalen gir et positivt bidrag $\\alpha \\Delta p_i$ raskt og mekanisk, mens den indirekte kanalen virker over kvartaler og år. På den horisonten spørsmålet stilles, er retningen på KPI-inflasjonen ikke i tvil.",
    },
    {
      question: "Krona svekker seg. Hva skjer med prisveksten på norskproduserte varer?",
      options: ["Effekten kan ikke signeres", "Den stiger med sikkerhet, siden lønnsveksten alltid følger aktiviteten", "Den er uendret", "Den faller, siden bedret konkurranseevne demper prispresset"],
      explanation: "Effekten går via aktiviteten, og om aktiviteten faktisk stiger, avhenger av om sentralbanken motvirker kronesvekkelsen med høyere rente. Strammer banken nok inn, uteblir aktivitetsøkningen, og $p_s$ trenger ikke stige i det hele tatt.",
    },
    {
      question: "Hvorfor har de to inflasjonssvarene ulik grad av sikkerhet?",
      options: ["Fordi den direkte kanalen er en ren kostnadsmekanisme med ett ledd, mens den indirekte er en atferdskjede med fire", "Fordi KPI måles hver måned, mens prisveksten på norske varer bare måles årlig", "Fordi importandelen er kjent, mens andelen norske varer må anslås", "Fordi sentralbanken har inflasjonsmål for KPI, men ikke for norske varepriser"],
      explanation: "Den direkte kanalen krever bare at kostnadsøkninger videreformidles. Den indirekte hviler på antakelser i hvert ledd, og særlig i overgangen fra bedret konkurranseevne til høyere aktivitet — der pengepolitikken kan gripe direkte inn.",
    },
    {
      question: "Hva er suppleringsrefleksen?",
      options: ["Å legge til de relasjonene oppgaven har utelatt, og si eksplisitt at du gjør det", "Å supplere svaret med en ekstra modell for å vise bredde i besvarelsen", "Å legge til flere forbehold i konklusjonen for å gardere seg mot feil", "Å regne ut alle følgestørrelsene i modellen selv om oppgaven bare spør om én"],
      explanation: "Relasjonssettene på eksamen er bevisst ufullstendige: konsumprisdefinisjonen mangler, og paritetsbetingelsen ligger implisitt. Å oppdage hullet, fylle det og kommentere at man har gjort det, er en dokumentert forskjell mellom en mekanisk og en innsiktsfull besvarelse.",
    },
    {
      question: "Hvilken relasjon oppgis ikke på eksamen, og må legges til når oppgaven spør om inflasjonen?",
      options: ["Konsumprisdefinisjonen $\\pi = \\alpha p_i + (1-\\alpha)p_s$", "Phillips-kurven, som knytter aktivitetsnivået til prisveksten i økonomien", "Renteregelen, som beskriver hvordan sentralbanken setter renten", "Etterspørselsrelasjonen, som bestemmer produksjonen på kort sikt"],
      explanation: "De tre andre inngår typisk i relasjonssettene som oppgis. Konsumprisdefinisjonen gjør det ikke — og den er nødvendig for å kunne dele «inflasjonen» i en importert og en innenlandsk komponent.",
    },
    {
      question: "Prisene på varer Norge importerer stiger internasjonalt, uten at kursen endrer seg. Hvordan skiller dette seg fra en kronesvekkelse?",
      options: ["Den indirekte kanalen har motsatt fortegn: kjøpekraften svekkes i stedet for at konkurranseevnen bedres", "Den direkte kanalen virker ikke, siden kursen er uendret", "Virkningen er identisk, siden begge løfter prisveksten på importerte varer", "KPI-inflasjonen påvirkes ikke, bare prisveksten på norske varer"],
      explanation: "Den direkte kanalen er den samme gitt samme økning i $p_i$. Men dyrere importvarer bedrer ikke norsk konkurranseevne — norske varer er ikke blitt billigere ute. I stedet svekkes kjøpekraften, og aktiviteten dempes. Det ene er et etterspørselsløft med prispåslag, det andre et rent kostnadssjokk.",
    },
    {
      question: "Hvorfor er sentralbankens handlingsrom mindre ved et rent prissjokk utenfra enn ved en kronesvekkelse?",
      options: ["Fordi renten kan påvirke kursen, men ikke prisene i utlandet", "Fordi inflasjonsmålet ikke gjelder for importerte varer", "Fordi et prissjokk utenfra ikke slår inn i konsumprisindeksen i det hele tatt", "Fordi renten bare virker på investeringene, ikke på konsumet, ved kostnadssjokk"],
      explanation: "Fra paritetsbetingelsen trekker høyere rente kursen ned igjen, så banken kan dempe den direkte kanalen ved en kronesvekkelse. Ved høyere priser ute finnes ingen slik kanal, og renten kan bare virke gjennom å dempe aktiviteten ytterligere — i en situasjon der aktiviteten allerede faller.",
    },
    {
      question: "To land har samme kronesvekkelse, men land A har en langt større importandel $\\alpha$ enn land B. Hva følger av det?",
      options: ["KPI-inflasjonen stiger mer i A, siden det direkte gjennomslaget er $\\alpha$ ganget med importprisveksten", "KPI-inflasjonen stiger mer i B, fordi en liten importandel gir større utslag per krone", "Begge får samme utslag i KPI, siden gjennomslagsgraden er den samme", "Bare prisveksten på norskproduserte varer skiller de to landene"],
      explanation: "Det direkte gjennomslaget er $\\alpha \\cdot p_i$: samme importprisvekst gir større KPI-utslag jo større importandelen er. Den indirekte kanalen virker i tillegg i begge land, men den går via $p_s$ og er ikke signerbar uten mer informasjon. Alternativet om at liten $\\alpha$ gir større utslag snur sammenhengen. Og alternativet om at utslagene blir like, forutsetter at gjennomslaget er uavhengig av importandelen — men gjennomslaget ER importandelen: $\\partial\\pi/\\partial p_i = \\alpha$.",
    },
    {
      question: "Hva er riktig vurderingskriterium for om sentralbanken har «sluppet» et kurssjokk inn i økonomien?",
      options: ["Utviklingen i prisveksten på norskproduserte varer og i lønnsveksten", "Nivået på KPI-inflasjonen, siden det er den inflasjonsmålet er formulert i", "Størrelsen på kronesvekkelsen målt i prosent", "Forskjellen mellom norsk og utenlandsk rente ved slutten av perioden"],
      explanation: "KPI-inflasjonen inneholder en importert komponent banken ikke kontrollerer, så høy KPI-inflasjon er ikke i seg selv bevis på at banken har feilet. Det banken kan hindre, er at kostnadsimpulsen setter seg i norsk lønns- og prisdannelse — og det leses av $p_s$ og lønnsveksten.",
    },
  ],
  'econ2310-4-1': [
    {
      question: "Hvilke tre kanaler går rentens virkning på produksjonen gjennom i den åpne IS-relasjonen?",
      options: ["Konsum, investeringer og valutakurs/nettoeksport", "Konsum, investeringer og offentlige kjøp over statsbudsjettet", "Konsum, sparing og skatteinngangen fra husholdningene", "Investeringer, importlekkasje og potensielt BNP"],
      explanation: "Rentekoeffisienten $m(c_2+b_2+a_2\\kappa)$ har tre ledd: konsum ($c_2$), investeringer ($b_2$) og valutakurs/nettoeksport ($a_2\\kappa$). Offentlige kjøp er en $Z^D$-impuls, ikke en rentekanal.",
    },
    {
      question: "Hvilken av rentens tre kanaler glemmes oftest på eksamen?",
      options: ["Valutakurskanalen", "Konsumkanalen", "Investeringskanalen", "Skattekanalen, som ikke finnes i modellen"],
      explanation: "Sensorveiledningene peker gjentatte ganger på at kandidater tar med konsum og investeringer, men glemmer at renta også virker via kronekursen og nettoeksporten.",
    },
    {
      question: "Hva betyr det i bokas notasjon at $E$ stiger?",
      options: ["Krona svekkes", "Krona styrker seg", "Rentedifferansen mot utlandet forsvinner", "Prisene på norske varer faller relativt til utenlandske"],
      explanation: "$E$ er kroner per enhet utenlandsk valuta. Flere kroner per euro betyr svakere krone (depresiering).",
    },
    {
      question: "Hva sier renteparitetsbetingelsen $E = E^e + \\kappa(i^F - i)$?",
      options: ["Kursen legger seg slik at forventet kursendring oppveier rentedifferansen", "Kursen fastsettes av sentralbanken for å nå inflasjonsmålet på lang sikt", "Kursen bestemmes av forholdet mellom norske og utenlandske vareprisnivåer", "Kursen holdes fast så lenge rentene hjemme og ute er like store"],
      explanation: "Betingelsen er en likegyldighetsbetingelse for investorene: forventet kursendring skal akkurat veie opp for renteforskjellen.",
    },
    {
      question: "Hva skjer med krona når norsk rente settes opp, alt annet likt?",
      options: ["Den styrker seg", "Den svekkes", "Den er upåvirket, siden $E^e$ er gitt", "Den svekkes bare hvis utenlandsk rente faller samtidig"],
      explanation: "Av $E = E^e + \\kappa(i^F-i)$ gir høyere $i$ lavere $E$, altså sterkere krone. Det er dette som gjør at eksporten faller — valutakurskanalen.",
    },
    {
      question: "Hva demper multiplikatoren i den åpne modellen med endogene priser, i tillegg til sparing og skatt?",
      options: ["Importlekkasjen og prisvirkningen", "Importlekkasjen alene, siden prisene er faste på kort sikt", "Renteregelens koeffisienter, som ligger inne i multiplikatoren", "Investeringsakseleratoren, som trekker etterspørselen nedover"],
      explanation: "Nevneren er $1-c_1(1-t)-b_1+a+a_3\\beta/Y^n$: import ($a$) og prisvirkning ($a_3\\beta/Y^n$) er de to lekkasjene i tillegg til sparing og skatt. Akseleratoren $b_1$ er en forsterker.",
    },
    {
      question: "Hvorfor gir en brattere Phillips-kurve (høyere β) mindre multiplikator?",
      options: ["Prisene reagerer sterkere, så konkurranseevnen svekkes raskere", "Sentralbanken setter renta opp, og renteøkningen inngår i multiplikatoren", "Importlekkasjen blir større fordi husholdningene kjøper mer fra utlandet", "Investeringene blir mer rentefølsomme når prisveksten tar seg opp"],
      explanation: "Høyere $Y$ gir lavere ledighet, høyere lønnsvekst og dyrere norske varer; nettoeksporten faller. Bidraget $a_3\\beta/Y^n$ i nevneren vokser med $\\beta$. Sentralbankens respons er en egen mekanisme utenfor multiplikatoren.",
    },
    {
      question: "Hva er den riktige rekkefølgen i prisvirkningens kjede?",
      options: ["Høyere $Y$ → lavere ledighet → høyere lønnsvekst → lavere nettoeksport", "Høyere $Y$ → høyere ledighet → lavere lønnsvekst → høyere nettoeksport", "Lavere $Y$ → lavere ledighet → høyere lønnsvekst → lavere nettoeksport", "Høyere $Y$ → lavere ledighet → lavere lønnsvekst → høyere nettoeksport"],
      explanation: "Høyere aktivitet strammer arbeidsmarkedet, lønnsveksten stiger, norske varer blir dyrere og nettoeksporten faller. Snus ett ledd, blir dempingen til en forsterkning.",
    },
    {
      question: "Hvilken impuls samler alt som svekker krona uten at norsk rente endres?",
      options: ["$Z^E$", "$Z^D$", "$Z^\\pi$", "$Z^i$"],
      explanation: "$Z^E = E^e + \\kappa i^F$ (+ risikopremie) samler utenlandsk rente, forventet langsiktskurs og risikopremie.",
    },
    {
      question: "Hvor havner en økning i offentlige kjøp av varer og tjenester i modellen?",
      options: ["I $Z^D$", "I $Z^E$, fordi kursen påvirkes av statsbudsjettet", "I $Z^\\pi$, fordi offentlig etterspørsel driver prisene", "I $Z^i$, fordi sentralbanken må reagere"],
      explanation: "Offentlige kjøp er en ren etterspørselsimpuls og treffer bare IS gjennom $Z^D$. At renta senere reagerer, er en følge av modellen, ikke en ny impuls.",
    },
    {
      question: "Hva er fortegnet på $Z^\\pi$-leddet i IS-relasjonen, og hvorfor?",
      options: ["Negativt, fordi dyrere norske varer svekker nettoeksporten", "Positivt, fordi høyere priser gir høyere nominelt BNP", "Negativt, fordi sentralbanken svarer med å sette opp renta", "Positivt, fordi inflasjon reduserer realverdien av gjelden"],
      explanation: "$-m a_3 Z^\\pi$: impulsen gjør norske varer relativt dyrere, konkurranseevnen svekkes og nettoeksporten faller. Rentereaksjonen skjer i renteregelen, ikke i IS.",
    },
    {
      question: "Hvilke størrelser er endogene i IS-RR-PK-modellen?",
      options: ["$Y$, $i$ og $\\pi$", "$Y$, $i$ og $Y^n$", "$Y$, $Z^D$ og $Z^E$", "$Y$, $\\pi$ og $\\kappa$"],
      explanation: "Modellen bestemmer produksjon, rente og inflasjon — og dermed indirekte valutakursen. $Y^n$, impulsene og alle parametre er eksogene.",
    },
    {
      question: "Hvorfor bestemmer IS-relasjonen alene ikke produksjonen?",
      options: ["Den gir bare kombinasjoner av $Y$ og $i$ — renta må bestemmes av en annen relasjon", "Den mangler et konstantledd, så nivået er ubestemt", "Den er en atferdsligning, og atferdsligninger bestemmer aldri noe", "Den gjelder bare på lang sikt, når prisene har tilpasset seg"],
      explanation: "Med to endogene ($Y$ og $i$) og bare én relasjon trengs renteregelen for at systemet skal være bestemt.",
    },
    {
      question: "Hva er helningen på IS-kurven i et $(Y,i)$-diagram?",
      options: ["$-1/[m(c_2+b_2+a_2\\kappa)]$", "$-m(c_2+b_2+a_2\\kappa)$", "$g_Y/Y^n$", "$-\\beta/Y^n$"],
      explanation: "IS er $Y = A - m(c_2+b_2+a_2\\kappa)i$; løses den for $i$, blir helningen den inverse med negativt fortegn. $g_Y/Y^n$ er renteregelens helning.",
    },
    {
      question: "Hva gjør en større multiplikator med IS-kurven?",
      options: ["Den blir flatere", "Den blir brattere", "Den skifter opp uten å endre helning", "Den blir loddrett i punktet $Y = Y^n$"],
      explanation: "Helningen i tallverdi er $1/[m(c_2+b_2+a_2\\kappa)]$: større $m$ gir mindre tallverdi, altså flatere kurve — små renteendringer flytter produksjonen mye.",
    },
    {
      question: "Valutakurskanalen er et produkt av to ledd. Hvilke?",
      options: ["Kursens rentefølsomhet $\\kappa$ og nettoeksportens kursfølsomhet $a_2$", "Multiplikatoren $m$ og importlekkasjen $a$", "Phillips-kurvens helning $\\beta$ og potensielt BNP $Y^n$", "Konsumets rentefølsomhet $c_2$ og investeringenes rentefølsomhet $b_2$"],
      explanation: "Kjeden er rente → kurs ($\\kappa$) → nettoeksport ($a_2$). Er ett av leddene svakt, er hele kanalen svak.",
    },
    {
      question: "Hva skjer med valutakurskanalen hvis nettoeksporten nesten ikke reagerer på kursen?",
      options: ["Kanalen blir svak selv om kursen beveger seg mye", "Kanalen blir sterk, siden kursbevegelsen fortsatt er stor", "Kanalen forsvinner helt og erstattes av konsumkanalen", "Kanalen snur fortegn og forsterker renteøkningen"],
      explanation: "Kanalen er produktet $a_2\\kappa$. Er $a_2$ nær null, blir produktet lite uansett hvor stor $\\kappa$ er.",
    },
    {
      question: "Hva er «under panseret»-formen av IS-relasjonen?",
      options: ["Formen der multiplikatoren og de strukturelle koeffisientene står synlige", "Formen der alle endogene variabler er eliminert fra begge sider", "Formen sentralbanken bruker internt når renta skal settes", "Formen som gjelder på lang sikt, når prisene er fullt fleksible"],
      explanation: "«Under panseret» betyr at $m$, $a_2$, $a_3$, $c_2$, $b_2$ og $\\kappa$ er synlige, slik at hver mekanisme kan pekes ut. Kompakte former må pakkes opp igjen i besvarelsen.",
    },
    {
      question: "Hvorfor holder det ikke å regne på IS-relasjonen uten å forklare den?",
      options: ["Relasjonen oppgis uforklart nettopp fordi forklaringen er oppgaven", "Fordi relasjonen inneholder feil som må rettes før den kan brukes", "Fordi regning uansett er forbudt på en eksamen uten hjelpemidler", "Fordi relasjonen ikke har entydig løsning før renteregelen legges til"],
      explanation: "Sensorveiledningene gjentar at forklaring forventes: regning på uforklarte ligninger gir lite uttelling. Dette er feil #7 i bokas feilregister.",
    },
    {
      question: "Hvilken parameter i pensumboka er satt lik 1 i eksamensformene av IS?",
      options: ["$m_i$", "$\\kappa$", "$a_3$", "$\\beta$"],
      explanation: "Pensumboka har en parameter $m_i$ foran rentekoeffisienten. I eksamensformene er den satt lik 1 og forsvinner fra uttrykkene.",
    },
    {
      question: "Hva betyr $Y^n$?",
      options: ["Produksjonsnivået som er forenlig med stabil inflasjon", "Det høyeste produksjonsnivået økonomien kan nå på kort sikt", "Produksjonen i fjor, brukt som referanse for vekstraten", "Produksjonsnivået der handelsbalansen er i balanse"],
      explanation: "Potensielt BNP svarer til likevektsledigheten og bestemmes av tilbudssiden. Det er ikke et tak, men nivået der prispresset er nøytralt.",
    },
    {
      question: "Hvilken av disse hendelsene er en $Z^E$-impuls?",
      options: ["Investorene krever høyere risikopremie for å sitte i kroner", "Etterspørselen fra handelspartnerne tar seg opp", "Et lønnsoppgjør gir høyere lønnsvekst i Norge enn hos handelspartnerne", "Bedriftene blir mer optimistiske og øker investeringene"],
      explanation: "Risikopremien på kroner står i $Z^E = E^e + \\kappa i^F$ (+ risikopremie), og treffer derfor både IS og renteregelen. Høyere etterspørsel fra handelspartnerne og sterkere investeringsvilje er $Z^D$ og treffer bare IS; et særnorsk lønnsoppgjør gjør norske varer relativt dyrere og er $Z^\\pi$. Og pass på skattekutt, som ikke er én kategori: lettelser som løfter etterspørselen virker som en $Z^D$-impuls, mens en endring i den marginale skattesatsen $t$ er en parameterendring i multiplikatoren $m$ — ikke en impuls.",
    },
    {
      question: "Hvilken impuls treffer både IS-relasjonen og renteregelen?",
      options: ["$Z^E$", "$Z^D$", "$Y^n$", "$c_2$"],
      explanation: "$Z^E$ løfter nettoeksporten i IS og utløser samtidig en renterespons i regelen. Det er nettopp derfor kronesvekkelse skifter begge kurver i skiftanalysen.",
    },
    {
      question: "Hva er forskjellen på $c_1$ og $c_2$?",
      options: ["$c_1$ kobler konsum til inntekt, $c_2$ kobler konsum til renta", "$c_1$ kobler konsum til renta, $c_2$ kobler konsum til inntekt", "$c_1$ gjelder husholdninger, $c_2$ gjelder bedrifter", "$c_1$ gjelder kort sikt, $c_2$ gjelder lang sikt"],
      explanation: "$c_1$ er marginal konsumtilbøyelighet (motoren i multiplikatoren), $c_2$ er konsumets rentefølsomhet (rentekanal 1).",
    },
    {
      question: "Hvorfor er importlekkasjen og prisvirkningen økonomisk forskjellige, selv om de står side om side i nevneren?",
      options: ["Importlekkasjen virker uten prisendring; prisvirkningen går via lønns- og prisdannelsen", "Importlekkasjen gjelder bare varer, prisvirkningen bare tjenester", "Importlekkasjen er endogen, mens prisvirkningen er eksogen", "Importlekkasjen virker på lang sikt, prisvirkningen på helt kort sikt"],
      explanation: "Den ene handler om hvor krona brukes og virker umiddelbart; den andre krever at ledighet, lønn og priser beveger seg, og virker med etterslep.",
    },
    {
      question: "Hva skjer med IS-kurven hvis konsumet blir mer rentefølsomt (høyere $c_2$)?",
      options: ["Den blir flatere", "Den blir brattere", "Den skifter til høyre uten å endre helning", "Den blir loddrett"],
      explanation: "Høyere $c_2$ gjør rentekoeffisienten større, altså helningen i tallverdi mindre — kurven blir flatere. Ingen skift, siden $c_2$ ikke er en impuls.",
    },
    {
      question: "Hva menes med at en effekt er «ubestemt» i modellen?",
      options: ["To mekanismer trekker hver sin vei, så fortegnet avhenger av styrkeforholdet", "Modellen er feilspesifisert og må settes opp på nytt", "Effekten er så liten at den kan settes til null", "Effekten inntreffer først på lang sikt og er derfor uinteressant"],
      explanation: "Ubestemthet er en reell egenskap ved modellen. Riktig håndtering er å si at fortegnet ikke kan signeres, og hva det avhenger av.",
    },
    {
      question: "Hva er forskjellen på å bevege seg langs IS-kurven og å skifte den?",
      options: ["Bevegelse langs kurven skyldes en renteendring, skift skyldes en impuls", "Bevegelse langs kurven skyldes en impuls, skift skyldes en renteendring", "Bevegelse langs kurven skjer på kort sikt, skift på lang sikt", "Det er ingen reell forskjell — begge deler flytter likevekten likt"],
      explanation: "Renta står som variabel på kurven, så en renteendring flytter oss langs den. $Z^D$, $Z^E$ og $Z^\\pi$ står som konstantledd og flytter hele kurven.",
    },
    {
      question: "Hvilken forutsetning gjør IS-apparatet meningsfullt på kort sikt?",
      options: ["Produksjonen bestemmes av etterspørselen", "Produksjonen bestemmes av kapitalbeholdningen", "Alle priser er fullt fleksible", "Valutakursen er fast"],
      explanation: "På kort sikt produserer bedriftene det de får solgt. I vekstmodellen i Del 1 er det motsatt: produksjonen er tilbudsbestemt.",
    },
    {
      question: "En student skriver: «Høyere utenlandsk rente er en $Z^\\pi$-impuls fordi den gir importert inflasjon.» Hva er galt?",
      options: ["Impulsen virker gjennom kursen og hører hjemme i $Z^E$", "Ingenting — utenlandsk rente hører hjemme i $Z^\\pi$", "Utenlandsk rente er endogen og kan ikke være en impuls i det hele tatt", "Utenlandsk rente hører hjemme i $Z^D$, siden den påvirker etterspørselen ute"],
      explanation: "$i^F$ inngår i $Z^E$ og virker først på kursen. At kursen deretter påvirker prisene, er en følge i modellen — ikke en egen prisimpuls.",
    },
    {
      question: "Hva er den samlede virkningen på produksjonen av at renta settes opp med én enhet?",
      options: ["$-m(c_2+b_2+a_2\\kappa)$", "$-(c_2+b_2+a_2\\kappa)$", "$-m(c_2+b_2)$", "$-m a_2\\kappa$"],
      explanation: "Den direkte demningen er $(c_2+b_2+a_2\\kappa)$, og den forsterkes gjennom inntektsstrømmen med multiplikatoren $m$.",
    },
  ],
  'econ2310-4-2': [
    {
      question: "Hva slags relasjon er renteregelen?",
      options: ["En reaksjonsfunksjon", "En likevektsbetingelse for kredittmarkedet", "En atferdsligning for husholdningene", "En budsjettbetingelse for staten"],
      explanation: "Regelen beskriver hva sentralbanken velger å gjøre gitt sitt mandat — ikke at to markedskrefter møtes. Å kalle den en markedsligning er feil #6 i bokas feilregister.",
    },
    {
      question: "Hvorfor reagerer en sentralbank med inflasjonsmål i det hele tatt på produksjonen?",
      options: ["Fordi produksjonsgapet varsler kommende inflasjon", "Fordi mandatet gir banken et tallfestet produksjonsmål", "Fordi høy produksjon i seg selv bryter med inflasjonsmålet", "Fordi renta ikke kan reagere på inflasjonen direkte"],
      explanation: "Phillips-kurven gjør produksjonsgapet til et varsel om inflasjon, og pengepolitikken virker med etterslep. I tillegg er stabil produksjon et hensyn i mandatet.",
    },
    {
      question: "Hva er helningen på RR-kurven i et $(Y,i)$-diagram?",
      options: ["$g_Y/Y^n$", "$-g_Y/Y^n$", "$\\beta/Y^n$", "$-1/[m(c_2+b_2+a_2\\kappa)]$"],
      explanation: "Renta stiger med produksjonsgapet, så kurven er stigende med helning $g_Y/Y^n$. Alternativet med negativ helning er IS-kurvens, ikke renteregelens.",
    },
    {
      question: "Hva bestemmer potensielt BNP?",
      options: ["Tilbudssiden: arbeidsstyrke, produktivitet, kapital og lønns-/prisdannelse", "Etterspørselen etter varer og tjenester, slik den bestemmes av konsum, investeringer og offentlige kjøp", "Sentralbankens inflasjonsmål og den rentesettingen banken bruker for å nå det", "Nivået på offentlige kjøp og på skattene, slik det fastsettes i statsbudsjettet"],
      explanation: "$Y^n$ er en tilbudssidestørrelse og svarer til likevektsledigheten. Etterspørselen bestemmer faktisk produksjon, ikke det bærekraftige nivået.",
    },
    {
      question: "Hvorfor står potensielt BNP i renteregelen?",
      options: ["Fordi bare gapet mellom faktisk og bærekraftig nivå sier noe om prispresset", "Fordi banken har et lovpålagt mål om at produksjonen skal treffe potensielt BNP i hvert enkelt år", "Fordi $Y^n$ er lettere å måle enn faktisk produksjon, som revideres i ettertid", "Fordi $Y^n$ vokser over tid og gir regelen en trend"],
      explanation: "«Høy produksjon» er meningsløst uten referansenivå. Bare når $Y = Y^n$, er prispresset nøytralt — derfor er gapet den relevante størrelsen.",
    },
    {
      question: "Kan faktisk produksjon ligge over $Y^n$?",
      options: ["Ja, men da tiltar lønns- og prisveksten", "Nei, $Y^n$ er et fysisk tak på kapasiteten", "Nei, banken hindrer det ved hjelp av renta", "Ja, og uten noen konsekvenser for prisveksten"],
      explanation: "$Y^n$ er ikke et tak. I en høykonjunktur ligger produksjonen over, med ledighet under likevektsledigheten og tiltakende prisvekst.",
    },
    {
      question: "Hva fanges av $Z^i$ i renteregelen?",
      options: ["Grunnivået: nøytral rente, linjeskifte og hensynet til finansielle ubalanser", "Produksjonsgapets virkning på renta, altså hele bankens konjunkturrespons", "Utenlandsk rente og forventet valutakurs", "Inflasjonsimpulser fra prisvekst ute"],
      explanation: "$Z^i$ er den delen av grunnivået som ikke skyldes kurs- eller prisimpulser: RR-kurvens skjæringspunkt er $Z^i + g_E Z^E + g_\\pi Z^\\pi$, så et løft i $Z^i$ skifter hele kurven loddrett uten å endre helningen. Produksjonsgapet står som variabel i regelen og er ikke en del av $Z^i$; utenlandsk rente og forventet kurs hører i $Z^E$, og prisimpulser utenfra i $Z^\\pi$.",
    },
    {
      question: "Hvorfor hever banken renta når krona svekkes?",
      options: ["Importvarer blir dyrere, og bedret konkurranseevne øker aktiviteten", "Fordi kursen er et selvstendig mål i mandatet ved siden av inflasjonen", "Fordi svakere krone senker prisveksten og dermed gir rom for tilstramming", "Fordi eksportbedriftene taper på en svak krone og derfor må skjermes av banken"],
      explanation: "To grunner: direkte prisvirkning gjennom importleddet i konsumprisindeksen, og indirekte prispress via høyere aktivitet. Kursen er ikke et selvstendig mål.",
    },
    {
      question: "Hva skjer med RR-kurven hvis banken vekter inflasjonsmålet tyngre?",
      options: ["Den blir brattere", "Den blir flatere", "Den skifter ned uten å endre helning", "Den blir vannrett"],
      explanation: "Tyngre vekt på inflasjon gir større $g_Y$, og helningen $g_Y/Y^n$ vokser. Renta reagerer kraftigere på konjunkturene.",
    },
    {
      question: "Hva betyr det at «Phillips-kurven ligger inne i $g_Y$»?",
      options: ["Bankens respons på gapet er begrunnet i at gapet skaper inflasjon", "At Phillips-kurven må settes inn i regelen ved regning før regelen i det hele tatt kan brukes", "$g_Y$ er tallmessig lik $\\beta$ i alle modellvarianter", "Renteregelen erstatter Phillips-kurven fullstendig i den åpne modellen"],
      explanation: "Banken bryr seg om gapet fordi gapet gir prispress. Er $\\beta$ større, blir $g_Y$ større — men de er ikke samme tall.",
    },
    {
      question: "En student skriver at «renta bestemmes der sparing møter kredittetterspørsel». Hva er hovedproblemet?",
      options: ["Renta settes av sentralbanken etter et mandat, ikke av markedskrefter", "Sparing og kredittetterspørsel finnes ikke i modellen", "Renta er eksogen i denne modellen og bestemmes ikke i det hele tatt", "Kredittmarkedet bestemmer bare realrenta, ikke den nominelle"],
      explanation: "Markedstolkningen fjerner begrunnelsen for regelen, og gjør det umulig å forklare hvorfor kurs- og prisimpulser står i den.",
    },
    {
      question: "Hvilken av disse hendelsene gir et skift i RR-kurven?",
      options: ["Banken justerer opp anslaget på nøytral rente", "Produksjonen stiger fordi offentlige kjøp har økt", "Produksjonen faller fordi investeringene svikter", "Renta settes opp i tråd med regelen etter et positivt gap"],
      explanation: "Bare endringer i $Z^i$, $Z^E$ eller $Z^\\pi$ skifter kurven. Endringer i $Y$ flytter oss langs den.",
    },
    {
      question: "Hva menes med fleksibel inflasjonsstyring?",
      options: ["Inflasjonen nær målet over tid, med vekt også på stabil produksjon", "At inflasjonsmålet justeres opp og ned alt etter hvor økonomien befinner seg i konjunkturforløpet", "Renta settes fleksibelt uten noen systematisk regel", "Banken velger fritt mellom inflasjonsmål og valutakursmål fra år til år"],
      explanation: "«Fleksibel» viser til at banken tar hensyn til produksjon og sysselsetting på veien mot målet — ikke at målet selv flyttes.",
    },
    {
      question: "Hvorfor føres pengepolitikken gradvis framfor i store sprang?",
      options: ["Fordi anslagene på $Y^n$ og på rentens virkning er usikre", "Fordi mandatet forbyr endringer større enn et kvart prosentpoeng", "Fordi renta bare kan endres på et fast antall rentemøter i året", "Fordi gradvishet gjør at renteendringen virker raskere på økonomien"],
      explanation: "Usikkerhet om potensielt BNP og om gjennomslaget taler for små skritt. Store bevegelser kan dessuten skape ustabilitet.",
    },
    {
      question: "Hva er sammenhengen mellom likevektsledigheten og $Y^n$?",
      options: ["$Y^n$ er produksjonsnivået som svarer til likevektsledigheten", "$Y^n$ er produksjonsnivået der ledigheten er null", "Likevektsledigheten er ledigheten når $Y$ er på sitt høyeste", "De to størrelsene har ingen systematisk sammenheng"],
      explanation: "De er to sider av samme sak, begge bestemt av tilbudssiden og av hvordan lønns- og prisdannelsen fungerer.",
    },
    {
      question: "Hvilken koeffisient avgjør om en kronesvekkelse ender med høyere eller lavere produksjon?",
      options: ["$g_E$", "$g_\\pi$", "$\\beta$", "$c_2$"],
      explanation: "$g_E$ er styrken i bankens kursrespons. Er den liten, dominerer konkurranseevnegevinsten; er den stor, spiser renteøkningen gevinsten opp.",
    },
    {
      question: "Hva er forskjellen på $Z^i$ og $i$?",
      options: ["$Z^i$ er grunnivået i regelen og eksogent, $i$ er renta som settes og er endogen", "$Z^i$ er realrenta i økonomien, mens $i$ er den nominelle renta bankene faktisk opererer med", "$Z^i$ er den utenlandske renta, mens $i$ er den norske renta som settes her hjemme", "$Z^i$ gjelder lang sikt, $i$ gjelder kort sikt"],
      explanation: "$Z^i$ er konstantleddet, $i$ er resultatet av hele regelen. Utenlandsk rente heter $i^F$ og inngår i $Z^E$.",
    },
    {
      question: "Hva innebærer det at renta er endogen i denne modellen?",
      options: ["Ethvert sjokk utløser automatisk en pengepolitisk respons", "At renta ikke lenger kan endres av sentralbanken, siden modellen bestemmer den", "Renta er til enhver tid lik den utenlandske renta, krone for krone", "Renta bestemmes utelukkende av inflasjonen"],
      explanation: "Regelen bestemmer renta sammen med IS. Å glemme responsen er en av de vanligste feilene i skiftanalyse.",
    },
    {
      question: "Hvorfor demper renteresponsen et etterspørselssjokk uten å oppheve det?",
      options: ["Banken hever renta som svar på gapet, men vil ikke kvele aktiviteten helt", "Fordi renta bare kan endres i små skritt hvert kvartal", "Fordi renta ikke virker på nettoeksporten i åpen økonomi", "Fordi produksjonsgapet er upåvirket av renta"],
      explanation: "Med en endelig $g_Y$ blir gapet dempet, ikke lukket. En uendelig kraftig respons ville låst produksjonen, men til store kostnader i renten og dens komponenter.",
    },
    {
      question: "Hvordan behandles hensynet til finansielle ubalanser i modellen?",
      options: ["Som et tilleggsargument som naturlig fanges av $Z^i$", "Som et selvstendig mål på linje med inflasjonsmålet, med egen koeffisient", "Som en del av produksjonsgapet", "Det er utelatt fra modellen og kan ikke nevnes"],
      explanation: "Hensynet kan tilsi litt høyere rente enn inflasjons- og produksjonshensynet alene, og fanges av grunnivået i regelen.",
    },
    {
      question: "Hva skjer med renta banken setter, dersom $Y^n$ oppjusteres mens faktisk $Y$ er uendret?",
      options: ["Renta blir lavere, fordi gapet er mindre enn antatt", "Renta blir høyere, fordi økonomien kan produsere mer", "Renta er uendret, siden $Y$ ikke har endret seg", "Renta blir lavere, fordi inflasjonsmålet er nådd"],
      explanation: "Gapet $(Y-Y^n)/Y^n$ krymper, så $g_Y$-leddet gir et lavere rentepåslag. Det er en tilpasning til større tåleevne, ikke en lettelse i politikken.",
    },
    {
      question: "Hvilket ledd i regelen ivaretar to hensyn i mandatet samtidig?",
      options: ["$g_Y$-leddet", "$g_E$-leddet", "$g_\\pi$-leddet", "$Z^i$-leddet"],
      explanation: "Et positivt gap varsler inflasjon (inflasjonsmålet), og renteøkningen demper konjunkturen (stabil produksjon og sysselsetting).",
    },
    {
      question: "Hvorfor kan ikke banken sikte mot et produksjonsnivå permanent over $Y^n$?",
      options: ["Da ville ledigheten ligget under likevektsledigheten og prisveksten tiltatt år etter år", "Da ville arbeidsstyrken blitt fysisk oppbrukt, slik at ingen flere kunne settes i arbeid noe sted", "Da ville renta måtte settes negativ i lange perioder", "Da ville valutakursen blitt fastlåst mot euroen"],
      explanation: "Vedvarende press i arbeidsmarkedet gir tiltakende lønns- og prisvekst, og inflasjonsmålet ville brutt sammen.",
    },
    {
      question: "Hva skjer med krona når banken hever renta som svar på en kronesvekkelse?",
      options: ["Krona trekkes delvis tilbake, siden høyere norsk rente styrker krona", "Krona svekkes ytterligere, siden renteøkningen demper aktiviteten", "Krona er upåvirket, siden kursen er eksogen", "Krona låses på nivået banken ønsker"],
      explanation: "Av renteparitetsbetingelsen styrker høyere $i$ krona. Banken motvirker altså delvis den impulsen den reagerer på — men bare delvis.",
    },
    {
      question: "Hvilken påstand om renteregelen er riktig?",
      options: ["Den flytter seg hvis banken endrer vurderinger eller mandat", "Den er en naturlov som gjelder uavhengig av hvem som styrer banken", "Den gjelder bare i lukket økonomi", "Den bestemmer renta uten at produksjonen spiller inn"],
      explanation: "Fordi regelen er en reaksjonsfunksjon, er den knyttet til bankens valg. Endres avveiningen, endres koeffisientene og konstantleddet.",
    },
    {
      question: "Hva er hovedforskjellen mellom IS og RR som relasjonstyper?",
      options: ["IS er en likevektsbetingelse, RR er en reaksjonsfunksjon", "IS er en reaksjonsfunksjon, RR er en likevektsbetingelse", "Begge er likevektsbetingelser, men for ulike markeder", "Begge er reaksjonsfunksjoner, men for ulike aktører"],
      explanation: "IS sier at produksjon møter etterspørsel; RR sier hva banken velger. Skillet avgjør hva det betyr at hver kurve skifter.",
    },
  ],
  'econ2310-4-3': [
    {
      question: "Hvor bestemmes likevekten i modellen?",
      options: ["Der IS krysser RR", "Der IS krysser Phillips-kurven", "Der RR krysser den loddrette linjen ved $Y^n$", "Der inflasjonen er lik målet"],
      explanation: "IS og RR inneholder bare $Y$ og $i$ og løses sammen. Phillips-kurven leser deretter av inflasjonen residualt.",
    },
    {
      question: "Hvordan bestemmes inflasjonen i systemet?",
      options: ["Residualt, ved å sette likevektsproduksjonen inn i Phillips-kurven", "Samtidig med produksjonen, i selve krysningspunktet mellom IS-kurven og RR-kurven", "Av sentralbanken direkte, siden banken har et inflasjonsmål å styre etter", "Av valutakursen alene, gjennom prisene på importerte varer og tjenester i konsumkorgen"],
      explanation: "Først finner IS og RR $Y$ og $i$; deretter gir PK inflasjonen. At $\\pi$ er residual, betyr ikke at den er uviktig — den ligger bak både $m$ og $g_Y$.",
    },
    {
      question: "Hvilke relasjoner skifter ved en kronesvekkelse ($Z^E$ opp)?",
      options: ["Både IS og RR", "Bare IS", "Bare RR", "Alle tre relasjonene"],
      explanation: "$Z^E$ står i både IS (nettoeksporten) og RR (bankens respons). Phillips-kurven skifter ikke, men inflasjonen endrer seg via produksjonen.",
    },
    {
      question: "Hvilke relasjoner skifter ved en økning i offentlige kjøp?",
      options: ["Bare IS", "Både IS og RR", "Både IS og Phillips-kurven", "Alle tre relasjonene"],
      explanation: "$Z^D$ står bare i IS. Renta endres likevel, men ved bevegelse langs en uendret RR-kurve.",
    },
    {
      question: "På hvor mange steder i modellen virker parameteren β?",
      options: ["Tre: i Phillips-kurven, i multiplikatoren og bak $g_Y$", "Ett: bare som Phillips-kurvens helning, og ingen andre steder i modellen", "To: i Phillips-kurvens helning og i renteparitetsbetingelsen for valutakursen", "Fire: i alle de tre relasjonene og i tillegg i valutakursbetingelsen"],
      explanation: "β er PK-helningen, den sitter i multiplikatoren gjennom $a_3\\beta/Y^n$, og den ligger bak størrelsen på bankens respons $g_Y$.",
    },
    {
      question: "Hva skjer med IS-kurven når β øker?",
      options: ["Den blir brattere", "Den blir flatere", "Den skifter mot høyre", "Den blir uendret"],
      explanation: "Større β gir mindre multiplikator, og helningen $-1/[m(c_2+b_2+a_2\\kappa)]$ vokser i tallverdi.",
    },
    {
      question: "Hva skjer med RR-kurven når β øker?",
      options: ["Den blir brattere, fordi banken svarer kraftigere på gapet", "Den blir flatere, fordi inflasjonen ordner seg selv", "Den skifter ned, fordi banken da kan nøye seg med en lavere rente", "Den er upåvirket, siden β ikke står noe sted i renteregelen slik den er skrevet"],
      explanation: "Et gitt gap gir mer inflasjon når β er stor, så banken velger en større $g_Y$ — og helningen er $g_Y/Y^n$.",
    },
    {
      question: "Hva skjer med produksjonsvirkningen av et etterspørselssjokk når β øker?",
      options: ["Den blir mindre, uten forbehold", "Den blir større, uten forbehold", "Den er uendret", "Retningen kan ikke avgjøres"],
      explanation: "I $\\Delta Y/\\Delta Z^D = m/[1+m(c_2+b_2+a_2\\kappa)g_Y/Y^n]$ krymper telleren og vokser nevneren. Begge kanaler trekker samme vei, så konklusjonen er ubetinget.",
    },
    {
      question: "I grensetilfellet der banken ikke tolererer noe produksjonsgap, hvor mye stiger renta ved en etterspørselsimpuls?",
      options: ["Om lag $\\Delta Z^D/(c_2+b_2+a_2\\kappa)$", "Om lag $m\\,\\Delta Z^D$", "Om lag $\\beta\\,\\Delta Z^D/Y^n$", "Renta stiger ikke i det hele tatt"],
      explanation: "Renta må stige akkurat nok til at de tre rentekanalene trekker ut like mye etterspørsel som impulsen la inn.",
    },
    {
      question: "Hvorfor blir virkningen på konsum og investeringer entydig i høy-β-tilfellet ved økte offentlige kjøp?",
      options: ["Fordi inntektseffekten faller bort når produksjonen står stille", "Fordi renta ikke endrer seg i det hele tatt, slik at bare inntekten virker", "Fordi konsumet ikke er rentefølsomt i høy-β-tilfellet, bare inntektsfølsomt", "Fordi krona ikke lenger reagerer på renta når prisreaksjonen er sterk nok"],
      explanation: "I standardtilfellet trekker inntekt opp og rente ned, så fortegnet er ubestemt. Med uendret produksjon står bare renteeffekten igjen: begge faller.",
    },
    {
      question: "Hva skjer med nettoeksporten i høy-β-tilfellet når offentlige kjøp øker?",
      options: ["Den faller, fordi høyere rente styrker krona", "Den stiger, fordi høyere aktivitet gir mer eksport", "Den er uendret, siden produksjonen er uendret", "Den faller, fordi importen stiger med inntekten"],
      explanation: "Av $E = Z^E - \\kappa i$ styrker høyere rente krona, konkurranseevnen svekkes og nettoeksporten faller. Inntekten er uendret, så importkanalen bidrar ikke.",
    },
    {
      question: "Hva menes med full fortrengning?",
      options: ["Økte offentlige kjøp motsvares av et like stort fall i de øvrige komponentene", "Staten overtar produksjonen fra privat sektor over tid", "Renta stiger så mye at samlet produksjon faller under nivået den lå på før impulsen", "Importen stiger nøyaktig like mye som offentlige kjøp, slik at nettoeksporten bærer alt"],
      explanation: "Med $Y$ låst og $G$ opp må $C + I + (X-Q)$ falle tilsvarende. Utenfor grensetilfellet er fortrengningen delvis.",
    },
    {
      question: "Hvorfor minner høy-β-økonomien om en tilbudsbestemt økonomi?",
      options: ["Produksjonsnivået er nesten låst, og etterspørselen flytter bare sammensetningen", "Fordi kapitalbeholdningen vokser raskere når prisene reagerer sterkt på aktiviteten", "Fordi sentralbanken slutter å reagere på gapet", "Fordi Phillips-kurven forsvinner ut av modellen når prisreaksjonen blir sterk nok"],
      explanation: "Nettopp slik vekstmodellen beskriver lang sikt: nivået er gitt, og etterspørselen fordeler det. Kontrasten belønnes når den nevnes uoppfordret.",
    },
    {
      question: "Skifter Phillips-kurven når offentlige kjøp øker?",
      options: ["Nei — vi beveger oss langs den til et større produksjonsgap", "Ja, den skifter opp fordi inflasjonen stiger", "Ja, den skifter ned fordi ledigheten faller", "Nei, kurven står stille, og inflasjonen er derfor også helt uendret"],
      explanation: "Kurven skifter bare når $Z^\\pi$ eller $Y^n$ endres. Inflasjonen stiger likevel, siden gapet er blitt større.",
    },
    {
      question: "Hva betyr det at $Y$ og $i$ bestemmes simultant?",
      options: ["Renta avhenger av produksjonen samtidig som produksjonen avhenger av renta", "At de begge er eksogent gitte størrelser i modellen", "At de alltid endrer seg like mye målt i prosent når en eksogen størrelse skifter", "At renta bestemmes først av regelen, og produksjonen deretter av IS-relasjonen"],
      explanation: "Derfor kan du ikke skrive skiftanalysen som en enkel kjede: du må finne det nye krysningspunktet, og deretter forklare mekanismen.",
    },
    {
      question: "Hva innebærer det at en $\\beta$ står direkte i multiplikatoren i noen eksamenssett?",
      options: ["Phillips-kurven er allerede satt inn i IS-relasjonen", "Det er en annen modell enn bokas, med andre konklusjoner", "Multiplikatoren gjelder bare i lukket økonomi", "Sentralbanken er tatt ut av modellen"],
      explanation: "Prisvirkningen er skrevet inn i stedet for å stå som egen relasjon. Apparatet og konklusjonene er de samme.",
    },
    {
      question: "Hvordan bør du håndtere at et sett skriver renteregelens koeffisienter som $\\gamma$-er?",
      options: ["Nevn at det er samme koeffisienter, og forklar notasjonen du bruker", "Bytt modell, siden $\\gamma$-formen bygger på en annen teori enn den boka bruker", "Ignorer notasjonsforskjellen helt, uten å kommentere den noe sted i svaret", "Skriv om hele oppgaven til bokas notasjon uten å nevne omskrivingen for sensor"],
      explanation: "Settene tillater egen notasjon så lenge den forklares. Å varsle notasjonsvalget er et lite grep som viser oversikt.",
    },
    {
      question: "Ligger likevekten alltid ved $Y = Y^n$?",
      options: ["Nei — banken veier hensyn og lukker ikke gapet fullstendig", "Ja, ellers ville ikke renteregelen vært oppfylt i den nye likevekten", "Ja, fordi Phillips-kurven krever det", "Nei, men bare i de tilfellene der prisimpulsen $Z^\\pi$ er ulik null"],
      explanation: "Krysningspunktet mellom IS og RR kan ligge på begge sider av $Y^n$. Fleksibel inflasjonsstyring betyr nettopp at gapet tolereres delvis.",
    },
    {
      question: "Høy $\\beta$ gjør IS brattere. Hva er den økonomiske grunnen til at det demper produksjonsvirkningen av et etterspørselssjokk?",
      options: ["Multiplikatoren $m$ er mindre, så en gitt impuls flytter IS-kurven kortere vei", "Renta virker mindre på etterspørselen, så likevekten flytter seg lite i $Y$", "Importlekkasjen forsvinner når kurven er bratt", "Produksjonen blir mer følsom for renteendringer når IS-kurven er bratt"],
      explanation: "Bratt IS kan komme av liten multiplikator ELLER liten rentekoeffisient — og de to virker motsatt vei. Det er $m$-kanalen som demper: en mindre multiplikator gjør selve IS-skiftet kortere. En mindre rentekoeffisient ville tvert imot gitt et større produksjonsutslag, så den vanlige formuleringen «renta virker mindre» er nettopp forvekslingen.",
    },
    {
      question: "Hvilken relasjon er en reaksjonsfunksjon, og hvilken er en likevektsbetingelse?",
      options: ["RR er reaksjonsfunksjon, IS er likevektsbetingelse", "IS er reaksjonsfunksjon, RR er likevektsbetingelse", "Begge er likevektsbetingelser", "Begge er reaksjonsfunksjoner"],
      explanation: "IS sier at produksjon møter etterspørsel; RR sier hva sentralbanken velger å gjøre gitt mandatet.",
    },
    {
      question: "Hvorfor er det presist å skrive «nesten uendret» framfor «uendret» produksjon i høy-β-tilfellet?",
      options: ["Med stor men endelig β finnes fortsatt et lite gap", "Fordi produksjonen alltid svinger litt tilfeldig", "Fordi modellen ikke kan si noe om nivåer", "Fordi renta bare endres i små skritt"],
      explanation: "Bare i grensetilfellet er gapet null. Utenfor grensen er både gapet og inflasjonsendringen små, men ikke null.",
    },
    {
      question: "Hvilket sjokk skifter alle tre relasjonene?",
      options: ["En innenlandsk prisimpuls ($Z^\\pi$ opp)", "En etterspørselsimpuls ($Z^D$ opp)", "En kursimpuls ($Z^E$ opp)", "En endring i bankens grunnivå ($Z^i$ opp)"],
      explanation: "$Z^\\pi$ står i IS (relativ pris), i RR (bankens respons) og i PK (inflasjonsimpulsen).",
    },
    {
      question: "Hva skjer med inflasjonen i høy-$\\beta$-tilfellet når offentlige kjøp øker?",
      options: ["Den stiger bare litt, siden gapet nesten ikke endres", "Den stiger kraftig, siden prisveksten reagerer sterkt på alt", "Den er uendret, siden Phillips-kurven ikke skifter", "Den faller, siden den sterkere krona demper prispresset"],
      explanation: "Med stor men endelig $\\beta$ er produksjonen nesten låst, så gapet — og dermed inflasjonsendringen — er lite, men ikke null. At kurven ikke skifter, betyr ikke at inflasjonen står stille: vi beveger oss langs den til et litt større gap. Og kursen står ikke i Phillips-kurven; den virker på norske priser bare indirekte gjennom aktiviteten.",
    },
    {
      question: "Når oppstår det en målkonflikt for sentralbanken i denne modellen?",
      options: ["Ved prisimpulser utenfra, der inflasjon og aktivitet peker hver sin vei", "Ved rene etterspørselssjokk, der begge målene trues samtidig", "Alltid, siden banken har to mål å ivareta samtidig", "Aldri, siden inflasjonsmålet har forrang"],
      explanation: "Ved etterspørselssjokk peker begge hensyn samme vei. Ved en prisimpuls stiger inflasjonen mens aktiviteten svekkes, og da må banken veie.",
    },
    {
      question: "Hva er «komparativ statikk»?",
      options: ["Å sammenligne likevekten før og etter en endring i noe eksogent", "Å regne ut hvor mange kvartaler tilpasningen tar", "Å sammenligne to lands økonomier", "Å holde alle variabler konstante i analysen"],
      explanation: "Uttrykket er insider-språk for «før mot etter». Vi spør hvor økonomien havner, ikke hvor lang tid den bruker dit.",
    },
  ],
  'econ2310-4-4': [
    {
      question: "Hva er første steg i en skiftanalyse?",
      options: ["Oversett hendelsen til en impuls i modellen", "Tegn diagrammet med begge kurvene og finn krysningen", "Finn ut hva som skjer med konsumet og investeringene først", "Regn ut multiplikatoren for den aktuelle økonomien"],
      explanation: "Uten et navn i modellen ($Z^D$, $Z^E$, $Z^\\pi$ eller $Z^i$) vet du ikke hvilke relasjoner som treffes.",
    },
    {
      question: "Offentlige kjøp øker og renta stiger — men RR-kurven har ikke flyttet seg. Hvorfor stiger renta?",
      options: ["Gapet er blitt større, og banken går oppover langs en uendret RR", "Fordi $Z^D$ også står i renteregelen", "Fordi banken reagerer på at krona styrker seg", "Fordi Phillips-kurven skifter opp og løfter inflasjonen"],
      explanation: "Produksjonen står som variabel i regelen, så et større gap flytter oss langs kurven i stedet for å skifte den. $Z^D$ står bare i IS; regelen reagerer på kursIMPULSEN $Z^E$, ikke på en kronestyrking som selv er en følge av renteøkningen; og Phillips-kurven skifter bare når $Z^\\pi$ eller $Y^n$ endres.",
    },
    {
      question: "Hva skjer med valutakursen når offentlige kjøp øker?",
      options: ["Krona styrker seg", "Krona svekkes", "Kursen er uendret", "Retningen kan ikke bestemmes"],
      explanation: "Høyere gap gir høyere rente, og $E = Z^E - \\kappa i$ gir lavere $E$ — altså sterkere krone. Kursen er her en følge, ikke en impuls.",
    },
    {
      question: "Hvorfor er virkningen på konsumet ubestemt når offentlige kjøp øker?",
      options: ["Inntekten trekker opp, renta trekker ned", "Fordi konsumet ikke avhenger av renta i åpen økonomi", "Fordi importlekkasjen gjør konsumvirkningen null", "Fordi krona styrker seg og importvarene blir billigere"],
      explanation: "Begge kanalene virker samtidig, og modellen sier ikke hvilken som dominerer. Riktig svar er å flagge og si hva det avhenger av.",
    },
    {
      question: "Hva skjer med handelsbalansen når offentlige kjøp øker?",
      options: ["Den svekkes entydig", "Den styrkes entydig", "Den er uendret", "Retningen kan ikke bestemmes"],
      explanation: "Eksporten faller (sterkere krone, dyrere norske varer) og importen stiger (høyere inntekt, billigere importvarer). Begge peker samme vei.",
    },
    {
      question: "Hvilke relasjoner treffes av en kronesvekkelse?",
      options: ["IS og RR", "Bare IS", "Bare RR", "IS og Phillips-kurven"],
      explanation: "$Z^E$ løfter nettoeksporten i IS og utløser en renterespons i RR. Det er derfor sjokket er det mest krevende.",
    },
    {
      question: "Hva skjer med renta ved en kronesvekkelse?",
      options: ["Den stiger entydig", "Den faller entydig", "Retningen kan ikke bestemmes", "Den er uendret hvis $g_E$ er null"],
      explanation: "Reagerer banken på kursen, stiger renta av det; reagerer den ikke, stiger aktiviteten og gapet, og renta stiger av det. Ingen kombinasjon gir lavere rente.",
    },
    {
      question: "Hva skjer med produksjonen ved en kronesvekkelse?",
      options: ["Ubestemt — avhenger av hvor kraftig banken reagerer på kursimpulsen", "Den stiger entydig, fordi konkurranseevnen bedres", "Den faller entydig, fordi renta stiger", "Den er uendret, siden de to motstridende virkningene alltid nøytraliserer hverandre eksakt"],
      explanation: "Konkurranseevnegevinsten trekker opp, renteøkningen ned. Utfallet avhenger av $g_E$ mot $a_2$ — og å nøytralisere eksakt er et spesialtilfelle, ikke regelen.",
    },
    {
      question: "Hva skjer med konsumprisveksten ved en kronesvekkelse?",
      options: ["Den stiger entydig", "Den faller entydig", "Retningen kan ikke bestemmes", "Den er uendret på kort sikt"],
      explanation: "Importvarer inngår i konsumkorgen og blir dyrere i kroner. Kanalen er direkte og krever ingen forutsetning om aktiviteten.",
    },
    {
      question: "Hva skjer med prisveksten på norskproduserte varer ved en kronesvekkelse?",
      options: ["Ubestemt — den avhenger av om produksjonen steg eller falt", "Den stiger entydig, siden all inflasjon stiger", "Den faller entydig, siden krona er svakere", "Den er uendret, siden norske kostnader ikke berøres av kursen på noe tidspunkt"],
      explanation: "Kursen virker på norske priser bare indirekte, gjennom aktivitet, ledighet og lønnsvekst. Siden produksjonseffekten er ubestemt, er også denne prisveksten ubestemt.",
    },
    {
      question: "Hvilken feil får produksjonen til å stige ENTYDIG i en analyse av en kronesvekkelse?",
      options: ["Å skifte bare IS og glemme at RR også skifter", "Å skifte bare RR og glemme at IS også skifter", "Å skifte Phillips-kurven i tillegg til de to andre", "Å regne på multiplikatoren i stedet for å tegne"],
      explanation: "Skifter du bare IS, får du renta til å stige for lite og produksjonen til å stige entydig — men det entydige fortegnet i dette sjokket er renta, ikke produksjonen. Skifter du bare RR, gjør du den motsatte feilen og får produksjonen til å falle entydig. Å skifte Phillips-kurven er også galt (den skifter bare når $Z^\\pi$ eller $Y^n$ endres), men gir ikke dette fortegnsfeilet, og multiplikatorregning erstatter ikke figuren.",
    },
    {
      question: "Hva skjer med krona på nettobasis etter en kronesvekkelses-impuls?",
      options: ["Den ender svakere, men mindre svak enn uten renteresponsen", "Den ender sterkere, fordi renta stiger", "Den ender nøyaktig der den startet", "Retningen er umulig å si noe om, siden kursen ikke lenger følger renteparitet"],
      explanation: "Impulsen svekker krona, og renteøkningen trekker den delvis tilbake. Bare ved en ekstremt kursorientert bank kan responsen mer enn oppveie impulsen.",
    },
    {
      question: "Et etterspørselsfall møtes av rentekutt. Hva skjer med produksjonen?",
      options: ["Den faller, men mindre enn uten renteresponsen", "Den er uendret, siden banken motvirker sjokket", "Den faller like mye som uten renterespons", "Den stiger, fordi rentekuttet dominerer"],
      explanation: "Produksjonsvirkningen $m/[1+m(c_2+b_2+a_2\\kappa)g_Y/Y^n]$ er strengt positiv for endelig $g_Y$: responsen demper, men nøytraliserer ikke.",
    },
    {
      question: "Hva skjer med krona ved et fall i privat etterspørsel?",
      options: ["Den svekkes, fordi renta faller", "Den styrker seg, fordi importen faller", "Den er uendret", "Retningen kan ikke bestemmes"],
      explanation: "Lavere rente gjør kroneplasseringer mindre attraktive: $E = Z^E - \\kappa i$ gir høyere $E$. Nettoeksporten virker dermed som en delvis støtdemper.",
    },
    {
      question: "Under hvilken forutsetning ville renteresponsen fullt ut nøytralisert et etterspørselssjokk?",
      options: ["Hvis bankens respons $g_Y$ var uendelig stor", "Hvis multiplikatoren var lik 1", "Hvis valutakursen var fast", "Hvis Phillips-kurven var helt vannrett i hele det relevante området"],
      explanation: "Bare med uendelig kraftig respons blir produksjonsvirkningen null. Det strider mot fleksibel inflasjonsstyring og mot usikkerheten om $Y^n$.",
    },
    {
      question: "Hvilke to virkninger har et prisløft ute?",
      options: ["Bedret konkurranseevne og importert prisvekst", "Svekket konkurranseevne og lavere importpriser", "Bedret konkurranseevne og lavere konsumprisvekst", "Uendret konkurranseevne, men høyere renter ute"],
      explanation: "Norske varer blir relativt billigere (IS skifter mot høyre), og importvarene dyrere i kroner (RR skifter opp).",
    },
    {
      question: "Hva skjer med krona ved et prisløft ute?",
      options: ["Den styrker seg, som følge av renteøkningen", "Den svekkes, fordi utenlandske priser stiger", "Den er uendret, siden ingen impuls treffer kursen", "Retningen kan ikke bestemmes"],
      explanation: "Ingen impuls treffer kursen direkte, men renta stiger — og $E = Z^E - \\kappa i$ gir da lavere $E$. Kontrast til kronesvekkelsen, der kursen selv er impulsen.",
    },
    {
      question: "Hvorfor kan produksjonen falle ved et prisløft ute?",
      options: ["Hvis banken er streng nok på inflasjonen, spiser renteøkningen opp konkurranseevnegevinsten", "Fordi eksporten alltid faller når prisene ute stiger", "Fordi importen alltid stiger mer enn eksporten", "Fordi Phillips-kurven skifter nedover og trekker prisveksten med seg"],
      explanation: "IS-skiftet trekker opp og RR-skiftet ned. Er $g_\\pi$ stor, dominerer renteøkningen. Dette er sensorens målkonflikt-poeng.",
    },
    {
      question: "Ved hvilket av standardsjokkene oppstår en ekte målkonflikt for sentralbanken?",
      options: ["Ved prisløft ute", "Ved økte offentlige kjøp", "Ved fall i privat etterspørsel", "Ved en økning i $Z^i$"],
      explanation: "Ved etterspørselssjokk peker inflasjons- og produksjonshensynet samme vei. Ved en prisimpuls utenfra peker de hver sin vei.",
    },
    {
      question: "Hvilke størrelser står på panser-listen du sporer i steg 5?",
      options: ["Konsum, investeringer, eksport, import, valutakurs, ledighet og inflasjon", "Bare konsum og investeringer, siden de er de private komponentene", "Bare produksjon og rente, som er modellens endogene variabler", "Bare inflasjonen, siden det er den størrelsen sentralbanken har som mål i mandatet"],
      explanation: "Panser-listen har sju poster, og den reduserte formen viser bare to av dem ($Y$ og $i$) — resten må du spore selv. Inflasjonen splittes i konsumprisvekst og prisvekst på norske varer. Å nøye seg med de private komponentene, med produksjon og rente, eller med inflasjonen alene, er tre varianter av samme utelatelse.",
    },
    {
      question: "Hva er riktig håndtering av et ubestemt fortegn?",
      options: ["Si at det er ubestemt, og si hva det avhenger av", "Skriv den mest sannsynlige retningen som modellens konklusjon", "Hopp over spørsmålet, siden modellen ikke gir svar", "Anta at effektene nøytraliserer hverandre eksakt"],
      explanation: "Å signere det usignerbare er feil #10 i bokas feilregister: du kan godt argumentere for hvilken kanal du tror dominerer, men da som en eksplisitt vurdering — aldri som noe modellen har vist. Å påpeke ubestemtheten og si hva den avhenger av, er selve svaret; eksakt nøytralisering er et spesialtilfelle du ikke kan påstå.",
    },
    {
      question: "Hvilket mønster går igjen i sjokk som treffer to relasjoner?",
      options: ["Renta blir entydig, mens produksjonen blir ubestemt", "Produksjonen blir entydig, mens renta blir ubestemt", "Begge blir entydige, siden to skift gir mer informasjon", "Begge blir ubestemte, siden skiftene motvirker hverandre"],
      explanation: "De to skiftene trekker produksjonen hver sin vei, men renta samme vei. Mønsteret gjelder både kronesvekkelse og prisløft ute.",
    },
    {
      question: "Skifter Phillips-kurven ved en kronesvekkelse?",
      options: ["Nei, men inflasjonen endrer seg fordi produksjonen endrer seg", "Ja, den skifter opp fordi importprisene stiger", "Ja, den skifter ned fordi konkurranseevnen bedres", "Nei, kurven står stille, og inflasjonen er derfor også uendret i modellen"],
      explanation: "Kurven skifter bare når $Z^\\pi$ eller $Y^n$ endres. Merk at konsumprisveksten likevel stiger direkte gjennom importleddet.",
    },
    {
      question: "Hvordan analyseres et kombinasjonssjokk?",
      options: ["Analyser hvert sjokk for seg og legg dem sammen etterpå", "Velg det sterkeste sjokket og se bort fra det andre", "Legg sammen impulsene før du klassifiserer dem", "Bruk to helt separate diagrammer og la det være å sammenligne dem"],
      explanation: "Hvert sjokk gir sine skift; deretter vurderer du hvilke fortegn som overlever. Entydige fortegn kan forsvinne når sjokk trekker hver sin vei.",
    },
    {
      question: "Hva er en god selvkontroll når du har sporet alle komponentene?",
      options: ["Sjekk at komponentfortegnene er forenlige med fortegnet på $\\Delta Y$", "Sjekk at renta har endret seg mindre enn produksjonen", "Sjekk at kursen har endret seg samme vei som renta", "Sjekk at inflasjonen er lik målet i ny likevekt"],
      explanation: "Emnet har ingen tallregning, så generalbudsjettligningen $Y = C + I + G + (X-Q)$ brukes som fortegnskontroll, ikke som en addisjon: stiger $Y$, må minst én komponent stige. Sier du at produksjonen stiger mens alle komponentene faller, er noe galt. De tre andre kontrollene er ingen krav i modellen — banken lukker ikke gapet fullt ut, og kursen kan gå både med og mot renta alt etter om den er impuls eller virkning.",
    },
    {
      question: "Når kan et ellers ubestemt fortegn signeres?",
      options: ["Når oppgaven gir informasjon om atferd eller parameterstyrke", "Aldri — ubestemte fortegn er en egenskap ved modellen", "Når du velger den retningen som virker mest sannsynlig", "Bare når alle impulsene i modellen er lik null samtidig"],
      explanation: "Får du vite at banken vekter kursen tungt, eller at prisreaksjonen er sterk, dominerer én kanal — og da skal du signere.",
    },
    {
      question: "Hva skjer med ledigheten ved en kronesvekkelse?",
      options: ["Ubestemt, siden den følger produksjonen", "Den faller entydig, siden eksporten stiger", "Den stiger entydig, siden renta stiger", "Den er upåvirket, siden ledigheten ikke er i modellen"],
      explanation: "Ledigheten er ikke en egen relasjon, men følger produksjonen. Er produksjonen ubestemt, er ledigheten det også.",
    },
    {
      question: "En bank vekter kronekursen svært tungt. Krona svekkes. Hva skjer med konsumet?",
      options: ["Det faller entydig, siden både rente og inntekt trekker ned", "Det stiger, siden eksporten løfter inntektene", "Ubestemt, som i standardtilfellet", "Det er uendret, siden krona likevel ender svakere enn i utgangspunktet"],
      explanation: "Med stor $g_E$ dominerer renteøkningen, produksjonen faller, og både inntekts- og renteeffekten trekker konsumet ned.",
    },
    {
      question: "Hvilken tolkning av $Z^\\pi$ bruker boka?",
      options: ["Prisveksten på norske varer relativt til utenlandske", "Konsumprisveksten målt ved KPI", "Prisveksten på importerte varer alene", "Sentralbankens tallfestede inflasjonsmål slik det er nedfelt i mandatet"],
      explanation: "Derfor er et prisløft ute en negativ $Z^\\pi$-impuls i IS: norske varer blir relativt billigere. Forutsetningen må sies eksplisitt og holdes.",
    },
    {
      question: "Hvorfor er det viktig å skille kursen som årsak fra kursen som virkning?",
      options: ["Fortegnet på kursen — og dermed på nettoeksporten — avhenger av det", "Fordi kursen ikke finnes i modellen når den er en virkning", "Fordi renteparitetsbetingelsen bare gjelder i det ene tilfellet", "Fordi sentralbanken bare reagerer på kursen i det ene av de to tilfellene"],
      explanation: "Er kursen impulsen, ender krona svakere; er den en følge av renteøkningen, ender den sterkere. Blander du, blir handelsbalansen feil.",
    },
    {
      question: "Hva bør en skiftanalyse avsluttes med?",
      options: ["Et svar på spørsmålet som ble stilt", "Et sammendrag av alle mekanismene i modellen", "En liste over alle parametrene som inngår", "En påminnelse om hvilke fortegn som var entydige"],
      explanation: "Å miste spørsmålet av syne er feil #8 i bokas feilregister. Disponer, spor komponentene, og land på svaret.",
    },
  ],
  'econ2310-4-5': [
    {
      question: "Hva betyr det å dosere to virkemidler til samme produksjonseffekt?",
      options: ["Å velge styrken slik at BNP-virkningen blir like stor i begge scenarioer", "Å bruke nøyaktig like mange kroner på hvert av de to virkemidlene i begge scenarioer", "Å sette renta og de offentlige kjøpene til nøyaktig den samme prosentvise endringen", "Å la sentralbanken og regjeringen handle samtidig og i samme retning gjennom hele forløpet"],
      explanation: "Doseringen er forutsetningen for sammenligningen: bare da skyldes forskjellene virkemidlenes egenskaper og ikke størrelsen på inngrepet.",
    },
    {
      question: "Hvorfor flytter pengepolitikk valutakursen?",
      options: ["Fordi den virker gjennom renta, og kursen følger renta", "Fordi sentralbanken kjøper og selger valuta direkte i markedet", "Fordi kursimpulsen $Z^E$ endres når renta endres", "Fordi importprisene endres før renta virker på etterspørselen"],
      explanation: "Av $E = Z^E - \\kappa i$ beveger kursen seg når renta endres. Kursimpulsen $Z^E$ er uendret; det er renteleddet som gjør jobben.",
    },
    {
      question: "Hvorfor gir finanspolitikk dosert ved uendret rente ingen valutakurseffekt?",
      options: ["Verken renta eller $Z^E$ endres, så den nominelle kursen ligger stille", "Fordi offentlige kjøp bare treffer innenlandske varer", "Fordi budsjettunderskudd finansieres i utenlandsk valuta", "Fordi kursen bare reagerer på inflasjonsforskjellen mot utlandet"],
      explanation: "Av $E = Z^E - \\kappa i$ beveger kursen seg bare når renta eller kursimpulsen endres, og i dette scenarioet er begge holdt fast. Merk presisjonen: det er den NOMINELLE kursen som ligger stille. Konkurranseevnen endres likevel, siden høyere aktivitet gir lavere ledighet, høyere lønns- og prisvekst og dermed relativt dyrere norske varer ($a_3$-leddet). Offentlige kjøp treffer også importerte varer, og underskuddet lånes i kroner.",
    },
    {
      question: "Hvilken komponent er høyest i finanspolitikk-scenarioet?",
      options: ["Offentlige kjøp", "Privat konsum", "Nettoeksport", "Investeringene i næringslivet"],
      explanation: "Der er det nettopp offentlige kjøp som holder aktiviteten oppe, mens de private komponentene ligger der de var etter sjokket.",
    },
    {
      question: "Hvilke komponenter er høyest i pengepolitikk-scenarioet?",
      options: ["Konsum, investeringer og nettoeksport", "Bare nettoeksporten, gjennom svakere krone", "Bare konsumet i husholdningene", "Offentlige kjøp av varer og tjenester, sammen med nettoeksporten"],
      explanation: "Lavere rente løfter konsum og investeringer, og den svakere krona løfter nettoeksporten. Offentlige kjøp er uendret.",
    },
    {
      question: "Hva skjer med krona i pengepolitikk-scenarioet?",
      options: ["Den svekkes", "Den styrker seg", "Den er uendret", "Retningen kan ikke bestemmes"],
      explanation: "Lavere rente gjør kroneplasseringer mindre attraktive: $E$ stiger, altså svakere krone og bedret konkurranseevne.",
    },
    {
      question: "Hvilken sektor merker forskjellen mellom de to virkemidlene sterkest?",
      options: ["Den konkurranseutsatte sektoren", "Offentlig sektor, som får flere oppdrag", "Finansnæringen, som lever av renteforskjeller", "Bygg- og anleggsnæringen, som lever av offentlige oppdrag"],
      explanation: "Eksportbedrifter og importkonkurrerende næringer får en reell konkurranseevnebedring bare i pengepolitikk-scenarioet, selv om BNP er identisk.",
    },
    {
      question: "Hva er galt med konklusjonen «virkemidlene er like siden BNP blir det samme»?",
      options: ["BNP er en sum som kan settes sammen på flere måter", "BNP blir aldri det samme, uansett dosering av virkemidlene", "Virkemidlene gir alltid ulik BNP i en åpen økonomi", "Konklusjonen gjelder bare hvis renta holdes fast"],
      explanation: "Ulik sammensetning og ulik valutakurs er hele poenget i sjangeren. «Samme BNP» er starten på svaret, ikke svaret.",
    },
    {
      question: "Hva skjer med investeringene i pengepolitikk-scenarioet etter et investeringsfall?",
      options: ["Fallet blir mindre, men investeringene er fortsatt lavere enn før sjokket", "De blir høyere enn før sjokket, siden den lavere renta mer enn oppveier fallet", "De er uendret fra før sjokket, siden BNP er tilbake", "De faller mer enn i finanspolitikk-scenarioet, siden renta gjør jobben alene"],
      explanation: "Rentekuttet henter tilbake en del av fallet i investeringsviljen, men ikke alt. Sammenlignet med finanspolitikk-scenarioet er de likevel høyere.",
    },
    {
      question: "Hvilket fortrinn har finanspolitikken ved et asymmetrisk sjokk?",
      options: ["Den kan målrettes mot den sektoren som faktisk er rammet", "Den virker raskere enn renta i alle situasjoner og alle faser", "Den svekker ikke budsjettbalansen", "Den flytter valutakursen mer presist enn et rentekutt gjør"],
      explanation: "Renta er én pris for alle og kan ikke skille mellom sektorer. Et rentekutt stimulerer også de delene av økonomien som går bra.",
    },
    {
      question: "Hvorfor kan hensynet til finansielle ubalanser tale for finanspolitikk?",
      options: ["Lav rente over tid kan drive opp gjeld og eiendomspriser", "Fordi finanspolitikk ikke berører husholdningenes gjeld", "Fordi renta ikke virker når gjelden er høy", "Fordi budsjettbalansen er et selvstendig mål i mandatet"],
      explanation: "Hensynet er et tilleggsargument i rentesettingen, ikke et mål på linje med inflasjonsmålet. Er gjelden høy, kan det tilsi at finanspolitikken bærer mer.",
    },
    {
      question: "Hvilken forutsetning gjelder for renta i finanspolitikk-scenarioet?",
      options: ["Renta holdes uendret, slik at virkemidlene kan sammenlignes hver for seg", "Renta følger renteregelen som ellers i modellen", "Renta settes lik utenlandsk rente", "Renta settes til null gjennom hele det scenarioet som analyseres"],
      explanation: "Forutsetningen skiller dette oppsettet fra den vanlige skiftanalysen, der banken reagerer på gapet. Den skal sies eksplisitt og holdes.",
    },
    {
      question: "Hvorfor er penge- og finanspolitikk ikke perfekte substitutter i denne modellen?",
      options: ["Bare pengepolitikk gir kursvirkning, og bare finanspolitikk kan målrettes", "Fordi de to virkemidlene alltid gir ulik BNP", "Fordi finanspolitikken virker gjennom renta i tillegg til budsjettet", "Fordi pengepolitikken ikke virker på nettoeksporten"],
      explanation: "De bidrar med noe forskjellig, og derfor kan en anbefaling ofte lande på en fordeling framfor et valg.",
    },
    {
      question: "Hva er den karakteristiske kostnadssiden ved finanspolitikk?",
      options: ["Budsjettbalansen svekkes", "Valutakursen svekkes", "Renta stiger nødvendigvis", "Inflasjonen faller"],
      explanation: "Et rentekutt koster ikke budsjettkroner; økte offentlige kjøp gjør det. Argumentet ligger utenfor modellen, men er relevant i en vurdering.",
    },
    {
      question: "Hvilke temaer skal du IKKE trekke inn som selvstendige poenger i denne sjangeren?",
      options: ["Budsjettregler, likviditetsfelle og Ricardiansk ekvivalens", "Rentens tre kanaler og renteparitetsbetingelsen", "Sammensetningen av etterspørselen etter komponenter", "Arbeidsdelingen mellom sentralbanken og statsbudsjettet i konjunkturstyringen"],
      explanation: "De tre første temaene hører til pensumet i ECON1310 og testes ikke som egne temaer her. Budsjettbalansen kan likevel nevnes som kostnadsside.",
    },
    {
      question: "Hva bør en vurderingsoppgave i denne sjangeren avsluttes med?",
      options: ["En begrunnet anbefaling", "En liste over alle hensyn som er nevnt", "Et sammendrag av modellen", "En påminnelse om doseringen"],
      explanation: "Å liste hensyn uten å konkludere er å miste spørsmålet av syne — feil #8 i bokas feilregister.",
    },
  ],
  'econ2310-4-6': [
    {
      question: "Hva er steg 1 i løsningsoppskriften for en oppgave i åpen økonomi?",
      options: ["Forklar relasjonene du skal bruke", "Klassifiser sjokket som en av modellens impulser", "Tegn diagrammet med begge kurvene", "Regn ut multiplikatoren for den aktuelle økonomien"],
      explanation: "Relasjonene oppgis uforklart på eksamen, og forklaringen er selve oppgaven. Klassifiseringen er steg 2.",
    },
    {
      question: "Hvordan skal du håndtere relasjonsforklaringen i senere delspørsmål?",
      options: ["Forklar én gang, og referer tilbake siden", "Gjenta hele forklaringen i hvert delspørsmål for sikkerhets skyld", "Hopp over forklaringen helt og gå rett på analysen", "Skriv forklaringen bare til slutt, som et vedlegg"],
      explanation: "Gjentakelse gir ingen ekstra uttelling og spiser tiden du trenger til panser-åpningen. Å hoppe over den første gang er derimot det dyreste.",
    },
    {
      question: "Et utenlandsk fall i etterspørselen etter norske varer — hvilken impuls er det?",
      options: ["$Z^D$ ned", "$Z^E$ opp", "$Z^\\pi$ ned", "$Z^i$ ned"],
      explanation: "Det er en ren etterspørselsimpuls og treffer bare IS. En vanlig felle er å tro at «utenlandsk» automatisk betyr at renteregelen treffes.",
    },
    {
      question: "Hva betyr opplysningen «norsk eksport er lite følsom for kursen» i modellspråk?",
      options: ["Liten $a_2$", "Liten $\\kappa$", "Stor $g_E$", "Liten $\\beta$"],
      explanation: "$a_2$ er nettoeksportens kursfølsomhet, altså siste ledd i kjeden rente → kurs → nettoeksport. Er $a_2$ liten, blir hele kanalen $a_2\\kappa$ svak selv om kursen beveger seg mye. $\\kappa$ er kursens rentefølsomhet, $g_E$ bankens kursrespons og $\\beta$ Phillips-kurvens helning — ingen av dem sier noe om eksportens kursfølsomhet.",
    },
    {
      question: "Hva betyr opplysningen «sentralbanken legger stor vekt på kronekursen» i modellspråk?",
      options: ["Stor $g_E$", "Stor $\\kappa$", "Stor $\\beta$", "Stor $a_2$"],
      explanation: "Opplysninger om atferd er parameterinformasjon. Stor $g_E$ betyr at RR-skiftet ved en kursimpuls blir kraftig, og at produksjonen kan falle.",
    },
    {
      question: "Hva betyr «lønnsdannelsen er lite koordinert» i modellspråk?",
      options: ["Stor $\\beta$", "Stor $g_E$", "Liten $\\kappa$", "Liten $a_3$"],
      explanation: "Lite koordinert lønnsdannelse gir sterk lønnsreaksjon på ledigheten, altså stor $\\beta$ — som gir brattere IS, brattere RR og mindre produksjonsvirkning av etterspørselssjokk.",
    },
    {
      question: "Hvorfor er tidsbudsjettet en del av løsningsoppskriften?",
      options: ["Fordi over halvparten av tiden bør gå til mekanisme og panser-åpning", "Fordi figuren er den delen av svaret som tar mest tid å tegne nøyaktig", "Fordi relasjonsforklaringen alene bør ta minst halvparten av tiden din", "Fordi utregningene krever mest tid når du ikke har kalkulator tilgjengelig"],
      explanation: "Steg 5–6 er best betalt og kuttes oftest ved tidsnød. Ingenting i sjangeren krever utregninger.",
    },
    {
      question: "Hvorfor holder det ikke å skrive «inflasjonen stiger» i panser-åpningen etter en kronesvekkelse?",
      options: ["Konsumprisveksten stiger entydig, men prisveksten på norske varer er ubestemt", "Inflasjonen er ikke en av postene på panser-listen", "Phillips-kurven skifter opp, så inflasjonen må tallfestes", "Inflasjonen er alltid lik målet i den nye likevekten"],
      explanation: "Panser-listen splitter inflasjonen i to: importvarene blir dyrere i kroner med en gang (entydig opp), mens prisveksten på norske varer følger produksjonen — og den er ubestemt ved dette sjokket. Å slå de to sammen er feil #4 i bokas feilregister. Phillips-kurven skifter ikke ved en kursimpuls, og banken lukker ikke gapet fullt ut, så inflasjonen lander ikke på målet.",
    },
    {
      question: "Hva er den drill-spesifikke fellen når en oppgave har mange delspørsmål?",
      options: ["Å gjenta hele modellforklaringen i hvert delspørsmål", "Å tegne for mange diagrammer underveis i besvarelsen", "Å bruke bokas notasjon i stedet for oppgavens", "Å svare på delspørsmålene i feil rekkefølge"],
      explanation: "Forklar én gang, referer siden. Notasjonsvalget er dessuten fritt så lenge du forklarer det.",
    },
    {
      question: "Hvilket sjokk gir entydig lavere rente og ubestemt produksjon?",
      options: ["En kronestyrking ($Z^E$ ned)", "En kronesvekkelse ($Z^E$ opp)", "Økte offentlige kjøp", "Et innenlandsk lønnsoppgjør over handelspartnernes"],
      explanation: "Speilbildet av kronesvekkelsen: begge skift trekker renta ned, mens konkurranseevnetap og rentekutt trekker produksjonen hver sin vei.",
    },
    {
      question: "Ved et særnorsk lønnsoppgjør over handelspartnernes: hva skjer med produksjonen?",
      options: ["Den faller entydig", "Den stiger entydig", "Ubestemt", "Uendret"],
      explanation: "IS skifter mot venstre (svekket konkurranseevne) og RR opp (prisimpuls), og begge demper produksjonen. Her er det renta som er ubestemt.",
    },
    {
      question: "Ved et særnorsk lønnsoppgjør over handelspartnernes: hva skjer med renta?",
      options: ["Ubestemt — prisimpulsen trekker opp, produksjonsfallet trekker ned", "Den stiger entydig, siden inflasjonen stiger og banken må stramme til", "Den faller entydig, siden produksjonen faller og banken må stimulere", "Den er uendret, siden de to leddene i renteregelen alltid veier presis like tungt"],
      explanation: "Dette er det ene standardsjokket der mønsteret er byttet om: produksjonen er entydig, renta ubestemt.",
    },
    {
      question: "Hva skjer med valutakurskanalen hvis $\\kappa$ faller mot null?",
      options: ["Den forsvinner, siden kanalen er produktet $a_2\\kappa$", "Den blir sterkere, siden en mer stabil kurs gir større utslag", "Den er upåvirket, siden koeffisienten $a_2$ ikke er endret", "Den snur fortegn og forsterker virkningen av renteøkningen på eksporten"],
      explanation: "Kanalen er en kjede: rente → kurs → nettoeksport. Brytes første ledd, faller hele kanalen bort, og IS blir brattere.",
    },
    {
      question: "Hvilken av bokas konklusjoner faller bort dersom kursen ikke reagerer på renta?",
      options: ["At penge- og finanspolitikk gir ulik valutakurs", "At renteregelen er en reaksjonsfunksjon og ikke en likevekt", "At Phillips-kurven bestemmer inflasjonen residualt", "At potensielt BNP bestemmes av forhold på tilbudssiden"],
      explanation: "Uten kursreaksjon gir et rentekutt ingen kronesvekkelse, og asymmetrien mellom virkemidlene forsvinner. De andre konklusjonene er uberørte.",
    },
    {
      question: "Du observerer: renta opp, krona svakere, produksjonen om lag uendret. Hvilket sjokk passer best?",
      options: ["En kursimpuls som svekker krona", "Økte offentlige kjøp av varer og tjenester", "Et fall i den private etterspørselen", "En innenlandsk prisimpuls fra lønnsoppgjøret"],
      explanation: "Bare et kurssjokk gir høyere rente sammen med svakere krone. Ved økte offentlige kjøp ville krona styrket seg, siden kursen der er en følge av renteøkningen.",
    },
    {
      question: "Hva er «halen» i en eksamensoppgave?",
      options: ["Det siste delspørsmålet, som endrer én forutsetning", "Sammendraget du skriver til slutt i besvarelsen", "Den delen av oppgaveteksten som oppgir relasjonene", "Poengfordelingen mellom delspørsmålene i den store oppgaven"],
      explanation: "Halen krever sjelden nytt stoff, bare et grep fra et annet kapittel — typisk høy $\\beta$, dosering eller en aktualitetsvinkling.",
    },
    {
      question: "Hva kjennetegner en figur som regnes som fullgodt svar?",
      options: ["Navngitte akser, merkede kurver, likevekter med bokstav og hjelpelinjer — pluss mekanismen i ord", "At den er tegnet med linjal og har nøyaktige tallverdier på aksene", "At den viser alle tre relasjonene i samme diagram", "At den er tegnet stort nok til å fylle en hel side, med tydelige farger på hver kurve"],
      explanation: "Sensorveiledningene godtar en korrekt figur med forklarende tekst som fullgodt svar. Figur uten forklaring er derimot ikke et svar.",
    },
    {
      question: "Hva er riktig håndtering når to sjokk trekker hver sin vei?",
      options: ["Analyser hvert sjokk for seg, og si hva nettoresultatet avhenger av", "Velg det sjokket som ser ut til å virke sterkest, og se bort fra det andre", "Konkluder at effektene nøytraliserer hverandre", "Slå impulsene sammen til én samlet impuls før du klassifiserer noe som helst"],
      explanation: "Entydige fortegn kan forsvinne når sjokk møtes. Da er svaret å si hvilke konklusjoner som overlever, og hva resten avhenger av.",
    },
    {
      question: "Hva er poenget med å skrive «avhenger av om $g_E$ er stor nok til at renteøkningen dominerer» framfor «det er vanskelig å si»?",
      options: ["Presis usikkerhet er et svar; vag usikkerhet er ikke", "Fordi sensor ikke godtar at noe er ubestemt", "Fordi $g_E$ alltid er den avgjørende parameteren", "Fordi den første formuleringen er kortere og sparer verdifull eksamenstid"],
      explanation: "Veiledningene premierer at kandidaten ser hva som er ubestemt — forutsatt at betingelsen navngis.",
    },
    {
      question: "I grensetilfellet der prisreaksjonen er svært sterk og offentlige utgifter kuttes: hva skjer med konsumet?",
      options: ["Det stiger, fordi renta faller og produksjonen er nesten uendret", "Det faller, fordi inntekten til husholdningene faller når utgiftene kuttes", "Ubestemt, akkurat som i standardtilfellet", "Det er uendret, siden det bare er offentlige kjøp som er endret i dette tilfellet"],
      explanation: "Med produksjonen tilnærmet låst er inntektseffekten borte, og bare renteeffekten står igjen. Fortegn som ellers var ubestemte, blir bestemte.",
    },
    {
      question: "Hvorfor er det galt å gjøre alle fortegn ubestemte for sikkerhets skyld?",
      options: ["Mange fortegn er entydige, og oppgaven gir ofte informasjon som avgjør resten", "Fordi modellen aldri gir ubestemte fortegn", "Fordi sensor trekker for hvert forbehold som nevnes", "Fordi ubestemte fortegn bare kan forekomme i en lukket økonomi uten handel"],
      explanation: "Renta ved kurssjokk, handelsbalansen ved etterspørselsimpulser og konsumprisveksten ved kronesvekkelse er entydige. Overdrevne forbehold er like galt som å signere alt.",
    },
    {
      question: "Hva bør du gjøre først når en oppgave endrer en forutsetning («hva om ...»)?",
      options: ["Finn hvor i modellen forutsetningen sitter", "Tegn diagrammet på nytt fra grunnen av", "Regn ut den nye likevekten numerisk", "Forklar alle relasjonene i modellen en gang til, fra grunnen av"],
      explanation: "Deretter sier du hva som skjer med kurvenes helning eller plassering, og til slutt hvilke av dine tidligere konklusjoner som fortsatt holder.",
    },
    {
      question: "Hvilke to sjangre trener oppgavene om å forklare relasjonene?",
      options: ["E (forklar IS) og F (forklar renteregelen)", "G (skiftanalyse) og H (valutakurs)", "K (virkemiddelsammenligning) og G (skiftanalyse)", "E (forklar IS) og K (virkemiddelsammenligning)"],
      explanation: "E gjelder etterspørselssiden med tre rentekanaler og multiplikator; F gjelder renteregelen begrunnet fra mandatet.",
    },
    {
      question: "Hva er den enkleste måten å sikre at ingen komponent glemmes i panser-åpningen?",
      options: ["Sette opp en fortegnstabell i kladden før du begynner", "Skrive svaret i kronologisk rekkefølge etter hva som skjer først", "Begynne med inflasjonen og jobbe bakover", "Bare nevne de komponentene oppgaven spør om"],
      explanation: "Tabellen med $Y$, $i$, $E$, $C$, $I$, nettoeksport, ledighet og de to inflasjonsbegrepene gjør utelatelser umulige og avslører inkonsistenser.",
    },
  ],
  'econ2310-5-1': [
    {
      question: "Hvorfor er konkurranseutsatt sektor lønnsledende i frontfagsmodellen?",
      options: ["Fordi den møter priser bestemt på verdensmarkedet og derfor har en lønnsevne gitt utenfra", "Fordi den er den største sektoren målt i sysselsatte", "Fordi bedriftene der kan velte kostnadene over i prisene", "Fordi produktivitetsveksten der alltid er lavere enn i skjermet sektor og lønna derfor må styres"],
      explanation: "Argumentet er et koordineringsargument: bare K-sektor har et ytre tak på lønnsveksten (prisvekst pluss produktivitetsvekst), og ved å la den forhandle først forankres hele lønnsdannelsen i det økonomien tåler i møte med utlandet. Størrelse er ikke begrunnelsen, og K-sektor kan nettopp IKKE velte kostnader over i prisen.",
    },
    {
      question: "Hva betyr symbolet $k$ i hovedkursmodellen?",
      options: ["Ekstraordinær lønnsvekst — lønnsvekst utover hovedkursen", "Kapital per arbeider, som i Del 1", "Produktivitetsveksten i konkurranseutsatt sektor, altså kostnadsbesparelsen per enhet", "Kroneprisveksten på konkurranseutsatte varer"],
      explanation: "$k = w - (p_k + z_k)$ måler hvor mye lønnsveksten avviker fra konkurranseutsatt sektors lønnsevne. Symbolet betyr noe helt annet enn i Del 1, der $k$ er kapital per arbeider — sjekk alltid hvilken modell du står i. Produktivitetsveksten i K-sektor heter $z_k$, og kroneprisveksten heter $p_k$.",
    },
    {
      question: "Relasjonen $p_s = w - z_s$ sier at ...",
      options: ["prisveksten i skjermet sektor er lønnsveksten minus produktivitetsveksten der", "prisnivået i skjermet sektor er lønnsnivået minus produktivitetsnivået", "lønnsveksten i skjermet sektor er prisveksten der pluss produktivitetsveksten", "prisveksten i skjermet sektor bestemmes på verdensmarkedet"],
      explanation: "Alle bokstavene er vekstrater, ikke nivåer. Lønn er hovedkostnaden i skjermet sektor, og med uendret påslag følger prisveksten kostnadsveksten per produsert enhet, altså $w - z_s$. Årsakspilen går fra lønn til pris her — motsatt av i konkurranseutsatt sektor.",
    },
    {
      question: "Hvilken relasjon oppgis IKKE på eksamen, og må du legge til selv?",
      options: ["Konsumprisdefinisjonen $\\pi = \\alpha p_i + (1-\\alpha)p_s$", "Lønnsrelasjonen $w = p_k + z_k + k$, som forankrer lønnsveksten i K-sektors lønnsevne", "Prisrelasjonen for skjermet sektor, $p_s = w - z_s$", "Kroneprisrelasjonen $p_k = q_k + v$"],
      explanation: "De fire relasjonene i settet bestemmer $p_k$, $p_i$, $w$ og $p_s$, men ingen av dem er konsumprisveksten. Uten den supplerte definisjonen kan modellen ikke svare på et eneste inflasjonsspørsmål — og å legge den til, og si at du gjør det, er dokumentert poenggivende.",
    },
    {
      question: "Hva måler $\\alpha$ i konsumprisdefinisjonen?",
      options: ["Importandelen i husholdningenes forbruk", "Andelen sysselsatte i konkurranseutsatt sektor", "Investeringenes følsomhet for produksjonen, som i Keynes-varianten i kap. 2.1", "Vekten av norske varer i konsumkorga"],
      explanation: "$\\alpha$ er vekten på importert prisvekst i konsumprisindeksen, og $1-\\alpha$ vekten på skjermede varer. Merk symbolkollisjonen: i Keynes-varianten i kap. 2.1 brukes $\\alpha$ om en investeringskoeffisient — samme bokstav, helt annen betydning.",
    },
    {
      question: "Hva betyr $v > 0$ i hovedkursmodellen?",
      options: ["At krona svekkes, slik at det koster flere kroner å kjøpe utenlandsk valuta", "At krona styrkes, slik at importerte varer blir billigere målt i norske kroner", "At verdensmarkedsprisene stiger, uavhengig av hva som skjer med valutakursen", "At produktivitetsveksten i konkurranseutsatt sektor er positiv i den aktuelle perioden"],
      explanation: "Boka følger konvensjonen fra kap. 3.1: høyere $E$ (og dermed positiv vekstrate $v$) betyr svakere krone. Det er derfor $v$ løfter kroneprisen på alt som handles med utlandet, både $p_k$ og $p_i$.",
    },
    {
      question: "Hva kalles summen $p_k + z_k$?",
      options: ["Hovedkursen — lønnsevnen i konkurranseutsatt sektor", "Konsumprisveksten husholdningene møter", "Reallønnsveksten i konkurranseutsatt sektor", "Bytteforholdet mellom eksport- og importpriser, målt i vekstrater"],
      explanation: "Hovedkursen er den lønnsveksten K-sektor kan bære med uendret lønnsomhet: prisveksten sektoren møter pluss produktivitetsveksten. Lønnsrelasjonen sier at faktisk lønnsvekst er hovedkursen pluss avviket $k$.",
    },
    {
      question: "En kandidat skriver: «Prisen i skjermet sektor er $w - z_s$.» Hva er problemet?",
      options: ["Det er prisVEKSTEN, ikke prisnivået, som er lik $w - z_s$ — alle bokstavene er vekstrater", "Fortegnet er feil: det skal være pluss $z_s$", "Relasjonen gjelder konkurranseutsatt sektor, ikke skjermet sektor, og skal skrives med fotskrift $k$", "Produktivitetsveksten hører ikke hjemme i en prisrelasjon"],
      explanation: "Hovedkursmodellen er skrevet i vekstrateform. Å si «prisen er» i stedet for «prisveksten er» er den vanligste sammenblandingen i Del 5, og den gjør resten av besvarelsen uklar. Fortegnet er riktig: produktivitetsvekst demper prisveksten.",
    },
    {
      question: "Hvorfor bestemmes prisen i konkurranseutsatt sektor utenfra?",
      options: ["Fordi kundene kan kjøpe tilsvarende varer fra utenlandske produsenter i stedet", "Fordi myndighetene regulerer industriprisene", "Fordi produktivitetsveksten der er så høy at bedriftene ikke trenger å tenke på kostnadene", "Fordi lønnsoppgjøret kommer før prisene er kjent"],
      explanation: "Konkurranse med utlandet gjør at en norsk produsent som setter prisen opp, taper kunder til utenlandske konkurrenter. Prisen er derfor i praksis gitt av verdensmarkedet, omregnet til kroner — og det er nettopp dette som gir sektoren et ytre tak på lønnsveksten.",
    },
    {
      question: "Hva er den viktigste grunnen til at sensor forventer at du forklarer relasjonene?",
      options: ["Relasjonene oppgis bevisst uforklart, og forklaringen er selve ferdigheten som testes", "Relasjonene inneholder ofte trykkfeil som må tolkes", "Forklaringen er nødvendig for å kunne bruke ordbok", "Eksamen har ingen regneoppgaver, så forklaringen brukes som erstatning for utregninger"],
      explanation: "Sensorveiledningene sier det gjentatte ganger: å regne på uforklarte ligninger gir ikke uttelling. Settene oppgir relasjonene med formuleringen at de «kan komme til nytte» nettopp for at kandidaten skal vise at hun forstår dem. Det stemmer at faget ikke har rene regneoppgaver, men det er ikke begrunnelsen for forklaringskravet.",
    },
    {
      question: "Hvilken størrelse svarer til «inflasjonen slik den måles i konsumprisindeksen»?",
      options: ["$\\pi$", "$p_s$", "$p_k$", "$p_i$"],
      explanation: "$\\pi = \\alpha p_i + (1-\\alpha)p_s$ dekker hele forbrukskurven. $p_s$ er prisveksten på norskproduserte skjermede varer alene, $p_i$ prisveksten på importvarer alene, og $p_k$ prisveksten på det Norge selger ut. Å bruke $p_s$ der spørsmålet gjelder konsumprisveksten er et eksplisitt vurderingspunkt.",
    },
    {
      question: "Hva er den økonomiske begrunnelsen for at $p_i = q_i + v$?",
      options: ["Kroneprisen er utenlandsk pris ganger valutakurs, og i vekstrater blir et produkt til en sum", "Importører legger på et fast påslag som er bestemt av importandelen $\\alpha$ i forbruket", "Importprisen følger lønnsveksten hjemme, siden transport og distribusjon skjer i Norge", "Norges Bank fastsetter importprisveksten indirekte gjennom sin renteregel og inflasjonsmålet"],
      explanation: "Sammenhengen er en ren omregning: pris i kroner = pris ute × kurs. Logaritmisk differensiering, eller bare regelen om at vekstrater adderes ved multiplikasjon, gir $p_i = q_i + v$. Ingenting av dette forutsetter påslag eller pengepolitikk.",
    },
    {
      question: "Hva forutsetter modellen når den opererer med bare ÉN lønnsvekst $w$?",
      options: ["At lønnsdannelsen er koordinert, slik at frontfagets ramme blir normgivende for alle", "At de to sektorene har like høy produktivitetsvekst og derfor like høy lønnsevne", "At arbeidskraften er fullstendig immobil mellom skjermet og konkurranseutsatt sektor", "At staten fastsetter lønnsveksten sentralt gjennom et årlig inntektspolitisk vedtak"],
      explanation: "Én felles $w$ er koordineringen skrevet inn i notasjonen. Modellen forutsetter altså ikke lik produktivitetsvekst — tvert imot er ulikheten i $z_k$ og $z_s$ det som gjør prisveksten forskjellig i de to sektorene.",
    },
    {
      question: "Et eksamenssett skriver lønnsrelasjonen som $w = p_k + z_k$, uten avviksledd. Hva har settet dermed forutsatt?",
      options: ["At lønnsveksten følger hovedkursen nøyaktig, slik at lønnsomheten i K-sektor er uendret", "At produktivitetsveksten i skjermet sektor er null i den perioden analysen gjelder", "At valutakursen er fast, slik at kroneprisveksten er lik den utenlandske prisveksten", "At importandelen i forbruket er så liten at den kan settes til null uten tap av innsikt"],
      explanation: "Uten $k$ er lønnsveksten per forutsetning lik sektorens lønnsevne, og konkurranseevnen er uendret. Skal du analysere et oppgjør som lander over industriens lønnsevne, må du utvide relasjonen selv — og si at du gjør det.",
    },
    {
      question: "Hva er FEIL å si om hovedkursmodellen?",
      options: ["At den bestemmer aktivitetsnivået og renta i økonomien", "At den er skrevet i vekstrater, slik at alle relasjonene består av plusser og minuser", "At den forankrer lønnsveksten i konkurranseutsatt sektors lønnsevne", "At den må suppleres med en definisjon av konsumprisveksten for å si noe om inflasjonen"],
      explanation: "Hovedkursmodellen handler om lønns- og prisdannelse, ikke om aktivitet, ledighet eller rentesetting — der trengs den åpne IS-RR-PK-modellen fra Del 4. De tre øvrige påstandene er riktige beskrivelser av modellen, og de to modellene brukes nettopp som komplementære innganger på eksamen.",
    },
  ],
  'econ2310-5-2': [
    {
      question: "Hva blir den reduserte formen for lønnsveksten i hovedkursmodellen?",
      options: ["$w = q_k + v + z_k + k$", "$w = q_i + v + z_s + k$", "$w = q_k + v - z_k + k$", "$w = q_k + z_k$"],
      explanation: "Sett $p_k = q_k + v$ inn i $w = p_k + z_k + k$. Merk at det er K-sektorens priser og produktivitet som inngår (ikke importprisene eller skjermet sektors produktivitet), og at produktivitetsveksten kommer inn med PLUSS: høyere produktivitet løfter lønnsevnen.",
    },
    {
      question: "Hvilken koeffisient har valutakursveksten $v$ i uttrykket for konsumprisveksten?",
      options: ["1 — fullt gjennomslag", "$\\alpha$ — bare den importerte delen av forbruket rammes", "$1-\\alpha$ — bare de norske varene rammes via lønnsdannelsen", "0 — intet gjennomslag"],
      explanation: "Krona treffer begge deler av forbrukskurven: importvarene direkte med vekt $\\alpha$, og de norske varene via lønnsdannelsen med vekt $1-\\alpha$. Vektene summerer til én, så gjennomslaget blir fullt uansett importandel.",
    },
    {
      question: "Hvilken størrelse faller HELT ut av uttrykket for reallønnsveksten?",
      options: ["Valutakursveksten $v$", "Produktivitetsveksten $z_k$", "Den ekstraordinære lønnsveksten $k$", "Importandelen"],
      explanation: "$v$ løfter lønnsveksten og konsumprisveksten nøyaktig like mye og nøytraliserer seg selv. De tre andre står i uttrykket $w-\\pi = \\alpha(q_k-q_i) + \\alpha z_k + (1-\\alpha)z_s + \\alpha k$.",
    },
    {
      question: "Hva er inflasjonsuttrykket i hovedkursmodellen?",
      options: ["$\\pi = \\alpha q_i + (1-\\alpha)q_k + v + (1-\\alpha)(z_k + k - z_s)$", "$\\pi = \\alpha q_k + (1-\\alpha)q_i + v + (1-\\alpha)(z_s + k - z_k)$", "$\\pi = \\alpha q_i + (1-\\alpha)q_k - v + \\alpha(z_k + k - z_s)$", "$\\pi = q_i + q_k + v + z_k + k - z_s$"],
      explanation: "Importvarene får vekt $\\alpha$ og de skjermede vekt $1-\\alpha$; valutakursen står alene med koeffisient 1; og det innenlandske leddet inneholder produktivitetsforskjellen $z_k - z_s$ pluss lønnsavviket $k$, alt veid med $1-\\alpha$.",
    },
    {
      question: "I spesialtilfellet ($q_k = q_i = \\pi^*$ og $z_k = z_s = z$) blir inflasjonen ...",
      options: ["$\\pi = \\pi^* + v + (1-\\alpha)k$", "$\\pi = \\pi^* + v + \\alpha k$", "$\\pi = \\pi^* - v + (1-\\alpha)k$", "$\\pi = \\pi^* + v + z + k$"],
      explanation: "De to prisleddene blir $\\alpha\\pi^* + (1-\\alpha)\\pi^* = \\pi^*$, produktivitetsdifferansen forsvinner, og $k$ blir stående med vekt $1-\\alpha$. Reallønnsuttrykket blir tilsvarende $w-\\pi = z + \\alpha k$, med $\\alpha$ som vekt der.",
    },
    {
      question: "Hva sier resultatet $w - \\pi = z + \\alpha k$?",
      options: ["Kjøpekraften vokser med produktivitetsveksten, justert for lønnsoppgjørets avvik fra hovedkursen", "Kjøpekraften vokser med utenlandsk inflasjon pluss produktivitetsveksten i skjermet sektor", "Nominell lønn vokser med produktivitetsveksten uansett hva som skjer med prisene ute", "Kjøpekraften er upåvirket av lønnsoppgjøret, siden alt velter over i norske priser"],
      explanation: "Reallønnsveksten er forankret i produktivitetsveksten. Ekstraordinær lønnsvekst bidrar, men bare med vekten $\\alpha$ — resten spises opp av at norske priser stiger i takt. Utenlandsk inflasjon inngår ikke.",
    },
    {
      question: "Hva skjer med norsk inflasjon når prisveksten ute stiger like mye på import- og eksportvarer, med uendret kurs og $k = 0$?",
      options: ["Den stiger én-til-én med den utenlandske", "Den stiger med $\\alpha$ ganger den utenlandske", "Den er upåvirket, siden lønnsdannelsen absorberer sjokket", "Den faller"],
      explanation: "Importvarene arver prisveksten direkte, og de norske varene arver den via industriens priser, lønnsevnen, lønnsveksten og til slutt de skjermede prisene. Vektene summerer til én, så gjennomslaget er fullt: $\\pi = \\pi^*$.",
    },
    {
      question: "Hva skjer med reallønnsveksten ved et symmetrisk prisløft ute (spesialtilfellet)?",
      options: ["Ingenting — $\\pi^*$ inngår ikke i uttrykket for $w - \\pi$", "Den faller med $\\alpha$ ganger prisveksten ute, siden importvarer blir dyrere", "Den faller én-til-én, siden hele forbrukskurven blir dyrere for husholdningene", "Den stiger, fordi lønnsevnen i konkurranseutsatt sektor øker mer enn prisene"],
      explanation: "Prisveksten ute løfter nominelle lønninger og konsumpriser like mye. Velstandstapet folk opplever ved importert inflasjon kommer enten fra et forverret bytteforhold ($q_i > q_k$) eller fra at lønnsoppgjørene henger etter — i modellspråk en periode med negativ $k$.",
    },
    {
      question: "Hva måler leddet $\\alpha(q_k - q_i)$ i reallønnsuttrykket?",
      options: ["Endringen i bytteforholdet mot utlandet", "Den samlede prisveksten på verdensmarkedet, veid med importandelen", "Forskjellen i produktivitetsvekst mellom de to sektorene", "Kursgjennomslaget til importprisene"],
      explanation: "Stiger prisene på det Norge selger raskere enn på det Norge kjøper, får landet mer igjen for eksporten, og kjøpekraften øker. Det er en ekte velstandsendring som ikke krever at noen arbeider mer.",
    },
    {
      question: "Hvorfor bidrar høyere $z_k$ til HØYERE inflasjon i denne modellen?",
      options: ["Fordi høyere lønnsevne i industrien løfter lønnsveksten for alle, og skjermet sektor tar det ut i pris", "Fordi mer effektiv produksjon krever dyrere importerte innsatsvarer over tid", "Fordi produktivitetsvekst svekker krona og dermed løfter kroneprisene på import", "Fordi bedriftene i konkurranseutsatt sektor øker påslaget når produktiviteten stiger"],
      explanation: "Koordinert lønnsdannelse gjør at industriens lønnsevne blir hele økonomiens lønnsvekst. Skjermet sektor har ikke tilsvarende produktivitetsvekst å dekke lønnsøkningen med, og priser seg deretter. Leddet er $(1-\\alpha)(z_k - z_s)$.",
    },
    {
      question: "Hva skjer med inflasjonen når produktivitetsveksten i SKJERMET sektor øker?",
      options: ["Den faller, med vekten $1-\\alpha$", "Den stiger, med vekten $1-\\alpha$", "Den er upåvirket, siden lønnsveksten er forankret i industrien", "Den faller, med vekten $\\alpha$"],
      explanation: "Med gitt lønnsvekst betyr høyere produktivitet i skjermet sektor at kostnaden per produsert enhet vokser saktere, så prisveksten der blir lavere. Leddet er $-(1-\\alpha)z_s$. Merk at $z_k$ og $z_s$ virker MOTSATT på inflasjonen.",
    },
    {
      question: "Prisveksten ute ligger over inflasjonsmålet, og krona holder seg uendret. Hva må da gjelde for at målet skal nås?",
      options: ["Den ekstraordinære lønnsveksten $k$ må være negativ", "Produktivitetsveksten må være høyere enn prisveksten ute i begge sektorer", "Importandelen $\\alpha$ må være tilstrekkelig nær null i forbrukskurven", "Bytteforholdet må forbedres, altså at eksportprisene stiger mer enn importprisene"],
      explanation: "Fra $\\pi = \\pi^* + v + (1-\\alpha)k$ må $(1-\\alpha)k = \\pi^{mål} - \\pi^* - v$, og med $\\pi^* > \\pi^{mål}$ og $v = 0$ er høyresiden negativ. Alternativet er kronestyrking ($v < 0$), som isteden legger byrden på konkurranseutsatt sektor.",
    },
    {
      question: "Hvorfor er det ikke en selvmotsigelse at valutakursen slår fullt ut i inflasjonen her, mens kap. 3.2 sier at bare den direkte kanalen har vekt $\\alpha$?",
      options: ["Kap. 3.2 beskriver den umiddelbare virkningen, mens hovedkursmodellen beskriver situasjonen etter at lønnsdannelsen har tilpasset seg", "Kap. 3.2 bruker en helt annen definisjon av valutakursen, med motsatt fortegnskonvensjon enn den boka ellers følger", "Kap. 3.2 gjelder bare når sentralbanken holder renta fast, noe hovedkursmodellen ikke gjør", "De to kapitlene motsier faktisk hverandre, og sensorveiledningen godtar begge svarene så lenge du velger ett av dem og holder deg konsekvent gjennom hele besvarelsen"],
      explanation: "Forskjellen er horisont, ikke faglig uenighet. Den indirekte kanalen (via aktivitet og lønnsdannelse) er treg og på kort sikt ubestemt, men i en vekstrate-modell der lønnsoppgjørene har fanget opp kursendringen, er den fullt virksom. Sier du hvilken horisont du snakker om, er begge svar riktige.",
    },
    {
      question: "Hva er den vanligste regnefeilen i utledningen av $\\pi$?",
      options: ["Å miste minustegnet foran $z_s$ når parentesen ganges ut", "Å bruke $\\alpha$ i stedet for $1-\\alpha$ på importprisveksten $q_i$ i definisjonen", "Å sette inn lønnsrelasjonen før kroneprisrelasjonen, som gir feil rekkefølge", "Å glemme å multiplisere valutakursveksten med importandelen $\\alpha$"],
      explanation: "$z_s$ kommer inn med negativt fortegn fra $p_s = w - z_s$ og skal beholde det gjennom multiplikasjonen med $1-\\alpha$. Kontrollen er enkel: koeffisienten foran $v$ i $\\pi$ skal være nøyaktig 1, og $v$ skal ikke stå i $w - \\pi$ i det hele tatt.",
    },
    {
      question: "Når kan du IKKE bruke spesialtilfellet?",
      options: ["Når oppgaven handler om at import- og eksportpriser utvikler seg forskjellig", "Når oppgaven oppgir at valutakursen endrer seg i løpet av perioden", "Når oppgaven ber deg tolke fortegnet på den ekstraordinære lønnsveksten", "Når oppgaven gjelder en åpen økonomi med flytende valutakurs"],
      explanation: "Spesialtilfellet forutsetter $q_k = q_i$, altså at bytteforholdsleddet er null. Er hele poenget at de to prisvekstene er ulike, mister du den mekanismen spørsmålet handler om. Valutakursen og $k$ står derimot fortsatt i de forenklede uttrykkene.",
    },
    {
      question: "Hva betyr «redusert form»?",
      options: ["En likning der en endogen variabel står alene, og bare eksogene størrelser står på høyre side", "En forenklet versjon av modellen der noen av relasjonene er utelatt for å spare tid", "En omskriving der alle variabler er uttrykt i nivåer i stedet for i vekstrater", "Den formen relasjonssettet har når det oppgis på eksamen, altså uten forklaringer"],
      explanation: "Fra en redusert form kan virkningen av ethvert sjokk leses direkte av koeffisientene. Uttrykkene for $\\pi$ og $w-\\pi$ er reduserte former. Begrepet går igjen i hele emnet — også i den åpne IS-RR-PK-modellen, der sensorkravet er å «åpne panseret» på den reduserte formen.",
    },
    {
      question: "Prisveksten på det Norge importerer stiger, mens prisveksten på det Norge eksporterer er uendret. Hva skjer med reallønnsveksten?",
      options: ["Den faller, med $\\alpha$ ganger økningen i importprisveksten", "Den er upåvirket, siden lønnsveksten justeres opp tilsvarende gjennom frontfagsoppgjøret", "Den faller én-til-én med økningen i importprisveksten, siden hele forbruket blir dyrere", "Den stiger, siden bytteforholdet forbedres når importprisene tar seg opp"],
      explanation: "Bytteforholdsleddet $\\alpha(q_k - q_i)$ blir negativt. Lønnsevnen i industrien er uendret (prisene på det Norge selger har ikke steget), mens levekostnadene stiger — kjøpekraften faller. Dette er et REALT tap som ikke kan forhandles bort, bare fordeles.",
    },
    {
      question: "Hva er kravet til føring når du har utledet uttrykkene?",
      options: ["Hvert ledd skal tolkes økonomisk — hva det står for, og hvorfor det har det fortegnet og den vekten det har", "Uttrykkene skal presenteres i innrammede bokser, slik at sensor lett finner sluttsvaret", "Alle mellomregninger skal skrives ut i detalj, siden det er algebraen og ikke tolkningen som gir uttelling hos sensor", "Uttrykkene skal omregnes til tall for en realistisk norsk økonomi før de tolkes"],
      explanation: "Sensorveiledningene omtaler en utledning uten tolkning som en mekanisk besvarelse. Algebraen er ikke der poengene ligger, og faget har ingen rene tallregningsoppgaver — det er den økonomiske lesningen av leddene som gir uttelling.",
    },
    {
      question: "Hva sier reduserte formen $p_s = q_k + v + z_k + k - z_s$?",
      options: ["At prisveksten på norske tjenester i hovedsak bestemmes av forhold utenfor tjenestesektoren", "At prisveksten i skjermet sektor bestemmes av importprisene og av sektorens eget påslag", "At skjermet sektor er lønnsledende, siden prisene der styrer resten av økonomien", "At prisveksten i skjermet sektor er uavhengig av valutakursen, som bare treffer import"],
      explanation: "Verdensmarkedspris, kronekurs og industriens produktivitet kommer inn via lønnsdannelsen; det eneste sektorinterne er $z_s$. Dette er en konsekvens av koordinert lønnsdannelse: uten felles lønnsvekst ville ikke industriens forhold slått inn i tjenesteprisene.",
    },
    {
      question: "Et lønnsoppgjør lander over hovedkursen ($k > 0$). Hva skjer med inflasjonen og reallønnsveksten?",
      options: ["Inflasjonen stiger med $(1-\\alpha)k$ og reallønnsveksten med $\\alpha k$", "Inflasjonen stiger med $\\alpha k$ og reallønnsveksten med $(1-\\alpha)k$", "Begge stiger med $k$, siden lønnsveksten slår fullt ut begge steder i modellen", "Inflasjonen stiger med $(1-\\alpha)k$, mens reallønnsveksten er uendret"],
      explanation: "Ekstra lønnsvekst velter over i de skjermede prisene med vekt $1-\\alpha$ (importprisene bryr seg ikke om norske oppgjør), og det som blir igjen til lønnstakerne, er $\\alpha k$. Vektene er altså byttet om mellom de to uttrykkene — en detalj det er lett å rote med.",
    },
  ],
  'econ2310-5-3': [
    {
      question: "Hva betyr $k > 0$ for konkurranseutsatt sektor?",
      options: ["Lønnskostnadene vokser raskere enn prisene sektoren får, så lønnsomheten svekkes", "Kapitalen per arbeider vokser, slik at produksjonen per sysselsatt stiger over tid", "Produktivitetsveksten i sektoren er høyere enn i skjermet sektor i samme periode", "Krona har svekket seg i løpet av perioden, slik at kroneprisene på eksportvarene har steget merkbart"],
      explanation: "$k = w - (p_k + z_k)$ er avviket fra hovedkursen. Positivt $k$ betyr at lønnsveksten overstiger lønnsevnen, så marginene presses — og siden $k$ er en vekstrate, bygger ulempen seg opp år for år. Merk at $k$ IKKE betyr kapital per arbeider her; det er betydningen i Del 1.",
    },
    {
      question: "Hva følger av $k < 0$ for lønnstakerne?",
      options: ["Reallønnsveksten blir lavere enn produktivitetsveksten", "Reallønnsveksten blir høyere enn produktivitetsveksten, siden prisene stiger saktere", "Reallønnsveksten er upåvirket, siden lønn og priser endres nøyaktig like mye", "Nominell lønnsvekst blir negativ, altså at kronelønna faktisk går ned"],
      explanation: "Fra $w - \\pi = z + \\alpha k$ gir $k < 0$ at $w - \\pi < z$. Lønnstakerne får ikke hele produktivitetsgevinsten; differansen tilfaller eierne i form av bedret lønnsomhet i konkurranseutsatt sektor. Negativ $k$ betyr ikke at lønna faller nominelt, bare at den vokser saktere enn hovedkursen.",
    },
    {
      question: "Prisveksten ute ligger over inflasjonsmålet. Hva sier målbetingelsen $v + (1-\\alpha)k = \\pi^{mål} - \\pi^*$?",
      options: ["At minst én av kronekursen og lønnsveksten må bidra negativt for at målet skal nås", "At inflasjonsmålet er uoppnåelig så lenge prisveksten ute ligger over det", "At importandelen må reduseres for at norsk inflasjon skal komme ned til målet", "At produktivitetsveksten må øke tilstrekkelig til å dekke inn prisveksten utenfra"],
      explanation: "Høyresiden er negativ, så $v < 0$ (kronestyrking) og/eller $k < 0$ (lønnsvekst under hovedkursen). Modellen gir bare disse to knappene, og produktivitetsveksten hjelper ikke — den står ikke i inflasjonsuttrykket i spesialtilfellet.",
    },
    {
      question: "Hvem bærer byrden når inflasjonsmålet nås gjennom kronestyrking?",
      options: ["Konkurranseutsatt sektor, som får svakere kroneinntekter uten tilsvarende kostnadsfall", "Lønnstakerne, som får en reallønnsvekst lavere enn produktivitetsveksten i økonomien", "Skjermet sektor, siden prisene der er de mest følsomme for endringer i valutakursen og importprisene", "Ingen — kronestyrking er et kostnadsfritt virkemiddel når prisveksten ute er høy"],
      explanation: "Kronestyrking trekker ned kroneprisene sektoren oppnår, mens lønnskostnadene ligger fast for året. Virkningen på lønnsomheten er den samme som av positiv $k$. Alternativet, negativ $k$, legger byrden på lønnstakerne i stedet — modellen sier at prisveksten ute må absorberes et sted.",
    },
    {
      question: "Hvilken variabel er broen mellom hovedkursmodellen og IS-RR-PK?",
      options: ["Valutakursen", "Produksjonen $Y$", "Produktivitetsveksten $z$", "Potensielt BNP $Y^n$"],
      explanation: "Rentesettingen bestemmer kursen gjennom paritetsbetingelsen, og veksten i den samme kursen er $v$ i hovedkursmodellen. $Y$ og $Y^n$ finnes bare i IS-RR-PK, og produktivitetsveksten bare i hovedkursmodellen (som $z$).",
    },
    {
      question: "Hva svarer hovedkursmodellen på, som IS-RR-PK IKKE svarer på?",
      options: ["Reallønnsveksten og lønnsomheten i konkurranseutsatt sektor", "Produksjonen og sentralbankens rentesetting i månedene etter et sjokk", "Valutakursen og hvordan den bestemmes av rentedifferansen mot utlandet", "Inflasjonen, som bare hovedkursmodellen av de to inneholder en relasjon for"],
      explanation: "IS-RR-PK har ingen lønnsdannelse og ingen sektorinndeling, så den kan ikke si noe om reallønnsvekst eller om lønnsomheten i K-sektor. Inflasjonen finnes i begge modeller — det er nettopp derfor det er verdt å si hvilken av dem du bruker til hva.",
    },
    {
      question: "Hva er sensorregelen for oppgaver med to oppgitte relasjonssett?",
      options: ["Det gis ingen premie for antall modeller, bare for at modell nummer to tilfører noe", "Begge modeller må brukes i full bredde, ellers regnes besvarelsen som ufullstendig av sensor", "Kandidaten skal velge én modell og begrunne hvorfor den andre er uegnet", "Modellene skal presenteres i den rekkefølgen de er oppgitt i oppgaveteksten"],
      explanation: "Sensorveiledningene sier det rett ut. Den praktiske testen før du skriver et avsnitt er: hvilket spørsmål besvarer dette, som det forrige avsnittet ikke besvarte? Har du ikke et svar, skal avsnittet ut.",
    },
    {
      question: "Sentralbanken hever renta. Hva skjer med krona, og hva betyr det i hovedkursmodellen?",
      options: ["Krona styrkes, altså $v < 0$, som trekker inflasjonen ned", "Krona svekkes, altså $v > 0$, som trekker inflasjonen opp gjennom importprisene", "Krona er upåvirket, siden renta bare virker på aktivitetsnivået i økonomien", "Krona styrkes, men uten virkning på inflasjonen, siden $v$ ikke inngår i uttrykket"],
      explanation: "Fra $E = E^e + \\kappa(i^F - i)$ gir høyere $i$ lavere $E$, altså sterkere krone. I hovedkursmodellen er det $v < 0$, som med koeffisient 1 trekker konsumprisveksten ned — og samtidig svekker lønnsevnen i konkurranseutsatt sektor.",
    },
    {
      question: "Hva betyr $g$ med fotskrift ($g_Y$, $g_E$, $g_\\pi$) i dette kapitlet?",
      options: ["Koeffisientene i renteregelen — hvor kraftig sentralbanken reagerer", "Produktivitetsveksten, slik symbolet brukes i vekstmodellen i kap. 1.4", "Vekstratene til produksjonen, valutakursen og inflasjonen over tid", "Sentralbankens mål for henholdsvis produksjon, valutakurs og inflasjon"],
      explanation: "Fotskriften avslører betydningen: står det en fotskrift, er det en rentekoeffisient. Uten fotskrift betyr $g$ produktivitetsvekst i vekstmodellen — en av bokas fire symbolkollisjoner. I hovedkursmodellen heter produktivitetsvekst $z$.",
    },
    {
      question: "Hva er strukturvirkningen av vedvarende positiv $k$?",
      options: ["Konkurranseutsatt sektor krymper, og økonomien blir mer avhengig av skjermet virksomhet", "Skjermet sektor krymper, siden lønnskostnadene der stiger raskest av alle", "Produktiviteten i økonomien faller, fordi investeringene systematisk rettes mot den feile sektoren", "Ingen strukturvirkning — $k$ påvirker bare fordelingen mellom lønn og overskudd"],
      explanation: "Svakere lønnsomhet i K-sektor gir først kutt i investeringer, deretter nedleggelser og utflytting, og til slutt en mindre konkurranseutsatt sektor. Fordelingsvirkningen er reell, men den er ikke den eneste — det er nettopp derfor tolkningen av $k$ er mer enn en fortegnsøvelse.",
    },
    {
      question: "Et kostnadssjokk utenfra beskrives hvordan i de to modellene?",
      options: ["Som høyere $q_k$ og $q_i$ i hovedkursmodellen, og som importert prispress i IS-RR-PK", "Som høyere $k$ i hovedkursmodellen, og som et skift i potensielt BNP $Y^n$ i IS-RR-PK-apparatet", "Som lavere $z_k$ i hovedkursmodellen, og som en etterspørselsimpuls $Z^D$ i IS-RR-PK", "Som høyere $v$ i hovedkursmodellen, og som en renteimpuls $Z^i$ i IS-RR-PK"],
      explanation: "Det er samme hendelse i to modellspråk: i IS-RR-PK skifter IS mot høyre (norske varer blir relativt billigere — en negativ $Z^\\pi$ i bokas relative tolkning) mens RR skifter opp gjennom importert prisvekst. Å påpeke at det er samme hendelse gjør overgangen mellom de to delene av besvarelsen naturlig — og viser at du har forstått hva modellene er, ikke bare hvordan de regnes på.",
    },
    {
      question: "Hvorfor er produksjonsvirkningen av en kronesvekkelse ubestemt?",
      options: ["Fordi den avhenger av hvor kraftig sentralbanken svarer på valutakursimpulsen", "Fordi eksportbedriftene kan velge om de vil justere prisene sine eller ikke", "Fordi importandelen $\\alpha$ i forbruket ikke er kjent i modellen", "Fordi bytteforholdet kan endres i begge retninger samtidig med kursen"],
      explanation: "Kronesvekkelsen skifter IS ut (bedret konkurranseevne) og RR opp (importert prispress). Renta stiger entydig, men produksjonen er summen av en positiv etterspørselsimpuls og en negativ renteeffekt. Effekten skal flagges som ubestemt med akkurat den begrunnelsen — å signere den er feil.",
    },
    {
      question: "Hva krever disponeringsregelen i en stor drøftingsoppgave?",
      options: ["Si innledningsvis hvilke modeller du bruker til hva, bruk mellomtitler, og avslutt med å svare på spørsmålet", "Presenter all relevant teori først, og gjør analysen samlet til slutt i besvarelsen", "Skriv like mye om hver av de oppgitte modellene, slik at vektingen mellom dem blir helt jevn", "Begynn med et sammendrag av besvarelsen, slik at sensor ser konklusjonen først"],
      explanation: "Struktur er eksplisitt vurdert ved toppkarakter i dette emnet. Merk avslutningen: å svare på spørsmålet er noe annet enn å oppsummere alt du har skrevet — sammendrag til slutt er en av de vanligste svakhetene i denne formen.",
    },
    {
      question: "Hvordan løser horisontskillet opp tilsynelatende motsetninger mellom modellene?",
      options: ["Hovedkursmodellen gjelder når lønnsoppgjørene har tilpasset seg, IS-RR-PK gjelder konjunkturhorisonten", "Hovedkursmodellen gjelder lukket økonomi, IS-RR-PK gjelder åpen økonomi med flytende kurs", "Hovedkursmodellen gjelder små sjokk, IS-RR-PK gjelder store og varige sjokk i økonomien", "Hovedkursmodellen er tilbudssidedrevet, IS-RR-PK forutsetter at prisene er helt faste"],
      explanation: "Eksempel: i hovedkursmodellen slår en kronesvekkelse fullt ut i konsumprisveksten, mens den umiddelbare virkningen i kortsiktsanalysen bare er den direkte importkanalen. Begge er riktige — på hver sin horisont. Merk at hovedkursmodellen gjelder en åpen økonomi den også.",
    },
    {
      question: "Hva er den vanligste utelatelsen når hovedkursmodellen brukes på eksamen?",
      options: ["At fortegnet på $k$ ikke oversettes til hva det betyr for lønnsomhet og arbeidsplasser", "At uttrykket for reallønnsveksten ikke utledes, men bare uttrykket for konsumprisveksten", "At kandidaten glemmer å oppgi hvilke av variablene som er vekstrater", "At spesialtilfellet brukes selv om oppgaven ber om de fulle uttrykkene"],
      explanation: "Tolkningen av $k$ var eksplisitt påkrevd i begge settene der modellen har vært brukt. Å skrive at $k$ er positiv uten å si at det betyr press på marginene, svakere investeringer og over tid nedleggelser, er et halvt svar.",
    },
  ],
  'econ2310-6-1': [
    {
      question: "Hva er det første steget i aktualitetsoversettelsen?",
      options: ["Avgjøre hvilke modeller som er relevante for spørsmålets horisont", "Skifte den kurven som er mest berørt av hendelsen, og finne ny likevekt", "Skrive ned alt du husker om temaet, så sensor ser bredden", "Vurdere hvor sannsynlig hendelsen er"],
      explanation: "Modellvalget må komme først, fordi hvilke eksogene variabler som i det hele tatt finnes, avhenger av modellen: $Z^D$ finnes ikke i vekstmodellen, og spareraten $s$ finnes ikke i IS-RR-PK. Velger du modell etter at du har begynt å analysere, ender du med den du husker best.",
    },
    {
      question: "Hvilken sjokkvariabel treffer BÅDE IS og RR?",
      options: ["$Z^E$", "$Z^D$", "$Z^\\pi$", "$Z^i$"],
      explanation: "Valutakursimpulsen treffer IS gjennom konkurranseevnen og eksporten, og RR gjennom importert prispress som sentralbanken reagerer på. Derfor stiger renta entydig ved kronesvekkelse, mens produksjonsvirkningen er ubestemt. $Z^D$ treffer bare IS, $Y^n$ bare RR (gjennom produksjonsgapet), $Z^i$ bare RR — og $Z^\\pi$ treffer alle tre.",
    },
    {
      question: "Den amerikanske sentralbanken hever renta kraftig. Hva skjer med krona?",
      options: ["Den svekkes, siden høyere $i^F$ gir høyere $E$", "Den styrkes, siden uro får investorer til å søke mot kroner", "Den er upåvirket av utenlandske renter", "Retningen kan ikke bestemmes uten å kjenne importandelen"],
      explanation: "Fra $E = E^e + \\kappa(i^F - i)$ gir høyere $i^F$ høyere $E$, altså svakere krone: utenlandske plasseringer blir relativt mer attraktive. Merk at norsk rente ikke behøver å endres for at kursen skal bevege seg — det er differansen som betyr noe.",
    },
    {
      question: "Hva er hovedpoenget med å påpeke at én hendelse er flere sjokk?",
      options: ["At nettovirkningen blir en vurdering du må begrunne, ikke noe som leses av", "At oppgaven da ikke kan besvares, og at du bør velge en annen inngang", "At du bør analysere alle kanalene like grundig for å få full uttelling", "At modellen ikke er egnet, siden den bare håndterer ett sjokk om gangen"],
      explanation: "Formen på et godt svar er: kanal A trekker $Y$ ned, kanal B trekker $Y$ opp, nettovirkningen avhenger av noe konkret, og jeg tror A dominerer fordi ... Å analysere to kanaler grundig og nevne en tredje kort er bedre enn å nevne åtte og analysere ingen.",
    },
    {
      question: "Hvordan skal en oppgave som starter med et tolv linjers utdrag håndteres?",
      options: ["Plukk de to til fire påstandene som angir retning på en modellstørrelse, og la resten ligge", "Kommentér utdraget setning for setning, slik at sensor ser at du har lest alt nøye", "Ignorér utdraget og svar på det generelle spørsmålet med standardanalysen", "Gjengi utdraget med egne ord først, og analysér deretter hele innholdet samlet"],
      explanation: "Kriteriet er om setningen sier noe om retningen på en størrelse som finnes i en modell — «har steget», «ligger over», «har avtatt». Bakgrunn, forbehold og politiske formuleringer er kontekst. Å kommentere alt er den vanligste tidstyven i denne oppgaveformen.",
    },
    {
      question: "En pandemi senker befolkningsveksten $n$. Hva gjør det isolert med kapitalen per arbeider i ny likevekt?",
      options: ["Den øker, siden strålen $(n+\\delta)k$ blir slakere", "Den faller, siden det blir mindre samlet sparing i økonomien", "Den er uendret, siden $n$ bare påvirker totalstørrelsene og ikke per arbeider", "Den øker først, men faller tilbake til det opprinnelige nivået på lang sikt"],
      explanation: "Lavere $n$ gjør strålen slakere, så den krysser sparekurven lenger til høyre: både $k^*$ og $y^*$ stiger. Det er et ubehagelig men riktig modellresultat, og det er verdt å presisere at det er en ren per arbeider-effekt — samlet produksjon faller.",
    },
    {
      question: "Hvorfor er andelen importert utstyr viktig når forsvarsbudsjettet økes?",
      options: ["Fordi import er en lekkasje som gjør $Z^D$-impulsen på norsk produksjon mindre", "Fordi importerte varer belastes toll, som gir staten inntekter tilbake", "Fordi importen bare påvirker valutakursen og ikke produksjonen i det hele tatt", "Fordi importerte varer inngår med vekt $\\alpha$ i konsumprisindeksen"],
      explanation: "En krone brukt på norske lønninger går videre inn i norsk konsum og skaper ny norsk inntekt; en krone brukt på et utenlandsk fly gjør det i liten grad. Å behandle hele budsjettøkningen som en ren $Z^D$-impuls overdriver virkningen på norsk produksjon.",
    },
    {
      question: "Hvilken felle er den motsatte av «kreativ historie uten modell»?",
      options: ["En teknisk korrekt skiftanalyse som aldri kobles tilbake til hendelsen", "En besvarelse som bruker for mange modeller på samme spørsmål", "En besvarelse som flagger for mange fortegn som ubestemte", "En besvarelse som velger vekstmodellen der konjunkturmodellen passer bedre"],
      explanation: "Sjangeren krever at oversettelsen går begge veier: fra nyhet til modell, og fra modellens konklusjon tilbake til nyheten. En skiftanalyse som ikke nevner hendelsen igjen etter første setning, svarer ikke på spørsmålet.",
    },
    {
      question: "Hva er den raske og hva er den langsomme kanalen når oljeprisen faller varig?",
      options: ["Raskt: oljeinvesteringene faller. Langsomt: statens formue vokser saktere, som over tid demper offentlig etterspørsel", "Raskt: statens formue faller. Langsomt: oljeinvesteringene tilpasser seg det nye prisnivået", "Raskt: kronekursen svekkes. Langsomt: importprisene stiger og løfter inflasjonen", "Begge kanalene virker samtidig, siden markedene priser inn all informasjon umiddelbart"],
      explanation: "Investeringskanalen preger konjunkturbildet de nærmeste årene, fordi petroleumsinvesteringene er store og konsentrerte i tid. Formueskanalen er et langsiktig budsjetthensyn med mange års forsinkelse. Skillet i hastighet er verdt å nevne.",
    },
    {
      question: "Hvorfor bør et sektorspesifikt sjokk ikke behandles som et aggregert etterspørselsfall?",
      options: ["Fordi politikken virker annerledes når én sektor ikke kan levere", "Fordi multiplikatoren alltid er større i skjermet enn i konkurranseutsatt sektor", "Fordi et sektorsjokk aldri påvirker samlet aktivitet", "Fordi renteregelen ikke reagerer på næringssjokk"],
      explanation: "Generell stimulans treffer dårlig når en sektor er administrativt stengt eller teknologisk hindret — pengene lekker til sparing eller til den sektoren som alt går for fullt. Rammen for slike sjokk er den todelte modellen i kap. 6.2, og å hente den inn uoppfordret er et selvstendig poeng.",
    },
    {
      question: "Hva sier sensorveiledningene om kreativitetsrommet i aktualitetsspørsmål?",
      options: ["Flere ulike spor godtas, så lenge analysen henger sammen og svarer på spørsmålet", "Bare det ene sporet som står i sensorveiledningen, gir full uttelling på slike spørsmål", "Kreativitet vurderes strengere enn de øvrige delspørsmålene i settet", "Kandidaten må dekke alle mulige kanaler for å få uttelling på disse spørsmålene"],
      explanation: "Disse delspørsmålene vurderes dessuten mildere enn de øvrige. Derfor er det sjelden lønnsomt å hoppe over dem for å pusse på det du alt har skrevet — et halvferdig svar her er ofte bedre betalt.",
    },
    {
      question: "Hva er den viktigste forskjellen mellom kunstig intelligens som erstatter og som forsterker arbeidskraft?",
      options: ["Erstatning byr ned lønna til den arbeidskraften teknologien konkurrerer med, forsterkning trekker lønna opp", "Erstatning øker produktivitetsveksten $g$, mens forsterkning bare påvirker spareraten $s$", "Erstatning virker på kort sikt, mens forsterkning bare har virkning over flere tiår", "Erstatning er et etterspørselssjokk, mens forsterkning er et rent tilbudssidesjokk"],
      explanation: "Der teknologien erstatter arbeidskraft, virker den som «nye arbeidere» som konkurrerer med de eksisterende, og avkastningen tilfaller den som eier teknologien. Der den forsterker, stiger de ansattes produktivitet, og lønna trekkes opp. Samme teknologi kan derfor løfte lønna i ett yrke og senke den i et annet.",
    },
    {
      question: "Hvorfor er det galt å si at høyere produktivitetsvekst gir «et hopp i levestandarden»?",
      options: ["Fordi høyere $g$ gir en brattere vekstbane, ikke et engangsløft i nivået", "Fordi produktivitetsvekst ikke påvirker produksjonen per arbeider i det hele tatt", "Fordi gevinsten av produktivitetsvekst i sin helhet tilfaller kapitaleierne", "Fordi høyere $g$ senker $k^*$, slik at levestandarden faller på lang sikt"],
      explanation: "Nivået endres ikke i det øyeblikket teknologien kommer; det er veksttakten som endres, og forskjellen bygger seg opp over tid. Kapitalen per effektivitetsenhet faller riktignok i ny likevekt, men produksjon og konsum per arbeider vokser med den nye, høyere raten $g$.",
    },
    {
      question: "Aktiviteten ute faller, og styringsrentene ute settes ned. Hvordan virker rentenedsettelsen ute på norsk økonomi?",
      options: ["Krona styrker seg, men produksjonsvirkningen kan ikke signeres", "Krona styrker seg, og dermed forsterkes etterspørselsfallet entydig", "Krona svekkes, og etterspørselsfallet dempes", "Krona styrker seg, og norsk inflasjon løftes av dyrere import"],
      explanation: "Lavere $i^F$ er en negativ $Z^E$-impuls: $E = Z^E - \\kappa i$ gir lavere $E$, altså sterkere krone, og siden både IS og renteregelen treffes, faller renta entydig. Men de to skiftene trekker produksjonen hver sin vei — IS mot venstre (svakere konkurranseevne), RR ned (banken ser lavere importert prispress) — så produksjonsvirkningen avhenger av $g_E$ mot $a_2$, speilvendt av kronesvekkelsen i kap. 4.4. Å skrive at fallet forsterkes entydig er å signere det usignerbare; sterkere krone gir dessuten billigere import, ikke dyrere, og at norsk rente er uendret er ingen forutsetning her.",
    },
    {
      question: "Hva bør du gjøre når to kanaler fra samme hendelse trekker i motsatt retning?",
      options: ["Si at nettovirkningen er en vurdering, velge et syn og begrunne det", "Konkludere at virkningen er null, siden effektene opphever hverandre", "Velge den kanalen som er lettest å analysere og se bort fra den andre", "Utsette konklusjonen til du har regnet ut hvilken effekt som er størst"],
      explanation: "Å signere det usignerbare er feil, men å nekte å konkludere er også svakt. Løsningen er å si eksplisitt at det er en vurdering, si hva den hviler på, og hva som ville endret den. Faget har ingen tallregningsoppgaver, så noen utregning av hvilken effekt som «er størst», finnes ikke.",
    },
  ],
  'econ2310-6-2': [
    {
      question: "Hva er kryssvis etterspørsel i den todelte modellen?",
      options: ["At inntekt skapt i den ene sektoren delvis brukes på den andre sektorens produkter", "At de to sektorene konkurrerer om samme arbeidskraft og dermed presser lønningene opp", "At staten fordeler offentlige kjøp jevnt mellom de to sektorene i økonomien", "At begge sektorene eksporterer til samme utenlandske marked og deler konjunkturene"],
      explanation: "Dette er koblingen som gjør at modellen har noe å fortelle: uten den ville sektorene vært to uavhengige økonomier, og en nedstenging av tjenester ville ikke berørt varesektoren i det hele tatt.",
    },
    {
      question: "Hvorfor merker varesektoren en nedstenging som bare rammer tjenestesektoren?",
      options: ["Fordi tjenesteansatte mister inntekt og dermed kjøper mindre varer", "Fordi varesektoren må overta produksjonen av de tjenestene som ikke kan leveres", "Fordi nedstengingen alltid følges av en renteøkning som rammer alle sektorer likt", "Fordi importprisene stiger når innenlandsk tjenesteproduksjon faller bort"],
      explanation: "Kjeden går gjennom den kryssvise etterspørselen. Fallet i varesektoren gir så inntektsbortfall der, som gir lavere etterspørsel etter tjenester igjen — runde for runde med avtakende utslag, akkurat som en multiplikatorprosess.",
    },
    {
      question: "Hva er nedstengingsparameteren i modellen?",
      options: ["En tilbudsbegrensning som hindrer én sektor fra å levere", "En etterspørselsimpuls som senker husholdningenes ønske om å kjøpe tjenester", "En parameter som måler hvor stor del av forbruket som er importert", "Sentralbankens vekting av aktivitet mot inflasjon i en krisesituasjon"],
      explanation: "Poenget med å skille den fra et etterspørselssjokk er at et etterspørselssjokk kan motvirkes ved å stimulere etterspørselen, mens en stengt sektor ikke kan levere uansett hvor stor etterspørselen er.",
    },
    {
      question: "Hvilket virkemiddel gir høyest etterspørsel per krone når én sektor er administrativt stengt?",
      options: ["Offentlige kjøp rettet mot den åpne sektoren", "Generell skattelette til alle", "Rentekutt fra sentralbanken, som virker bredt og raskt", "Brede kontantoverføringer til hele befolkningen"],
      explanation: "Beløpet blir i sin helhet produksjon, siden den åpne sektoren både kan og får levere, og inntekten går videre inn i kretsløpet. Forbeholdet er at det må finnes ledig kapasitet der — går sektoren alt for fullt, gir kjøpene pris- og rentepress i stedet.",
    },
    {
      question: "Hvorfor treffer generell stimulans dårlig når en sektor er stengt?",
      options: ["Fordi den delen som rettes mot stengte tilbud, blir tvungen sparing og ikke produksjon", "Fordi generelle virkemidler alltid har lavere multiplikator enn målrettede virkemidler", "Fordi husholdningene ikke reagerer på stimulans i perioder med stor usikkerhet", "Fordi generell stimulans utelukkende treffer importerte varer og dermed lekker ut"],
      explanation: "Generelle virkemidler fordeler etterspørselen omtrent som forbruket ellers, altså også mot den stengte sektoren. I en normal nedgangskonjunktur, der alle sektorer har ledig kapasitet, ville samme virkemiddel vært langt mer treffsikkert.",
    },
    {
      question: "Hvorfor er kompensasjon til permitterte også et makroøkonomisk virkemiddel?",
      options: ["Fordi den stopper smittekjeden: den som beholder kjøpekraft, fortsetter å kjøpe varer", "Fordi den øker samlet sparing, som over tid finansierer flere investeringer", "Fordi den senker likevektsledigheten og dermed hever potensielt BNP", "Fordi den svekker krona og bedrer konkurranseevnen i den åpne sektoren"],
      explanation: "Kompensasjonen reduserer selve behovet for etterspørselsstimulans, i tillegg til å bevare arbeidsforhold og kapasitet til gjenåpningen. Fordelingsargumentet står i tillegg på egne ben, uavhengig av multiplikatorer.",
    },
    {
      question: "Hva er forskjellen mellom et symmetrisk og et asymmetrisk sjokk?",
      options: ["Et asymmetrisk sjokk rammer deler av økonomien, et symmetrisk treffer bredt", "Et asymmetrisk sjokk er alltid større i omfang enn et symmetrisk sjokk", "Et asymmetrisk sjokk kommer fra utlandet, et symmetrisk oppstår innenlands", "Et asymmetrisk sjokk rammer tilbudssiden, et symmetrisk alltid etterspørselssiden"],
      explanation: "Skillet har direkte politikkonsekvenser: ved symmetriske sjokk har alle sektorer ledig kapasitet og generell stimulans er riktig medisin, mens virkemidlene må rettes når noen deler av økonomien ikke kan ta imot mer etterspørsel.",
    },
    {
      question: "Kan den todelte rammen brukes på en energikrise som stanser kraftintensiv industri?",
      options: ["Ja — rammen krever bare at sjokket er asymmetrisk, ikke at hindringen er et vedtak", "Nei — modellen er utformet spesielt for administrative nedstenginger og gjelder bare slike tilfeller", "Nei — energikriser er prissjokk, og prissjokk håndteres kun i hovedkursmodellen", "Ja, men bare dersom industrien er skjermet fra utenlandsk konkurranse"],
      explanation: "Industrien har da rollen som «stengt» sektor og tjenestesektoren som «åpen». En viktig forskjell er at energikrisen også er et prissjokk, altså en inflasjonsimpuls, som gir sentralbanken en målkonflikt nedstengingen ikke ga.",
    },
    {
      question: "Hva skjer med den tvungne sparingen når en stengt sektor åpner igjen?",
      options: ["Den kan gi et kraftig etterspørselsoppsving i nettopp de bransjene som har hatt for lite", "Den forsvinner, siden sparing som ikke ble brukt i perioden, går tapt", "Den forblir spart, siden husholdningene har endret forbruksvaner permanent", "Den brukes i sin helhet på importerte varer og påvirker ikke norsk aktivitet"],
      explanation: "Konsekvensen er at problemet kan snu raskt: fra for lav til for høy etterspørsel, og fra fare for ledighet til fare for prispress. Derfor må krisetiltak være innrettet slik at de faktisk kan trekkes tilbake.",
    },
    {
      question: "Hva er det viktigste forbeholdet ved å anbefale offentlige kjøp i den åpne sektoren?",
      options: ["At det må finnes ledig kapasitet der, ellers gir kjøpene pris- og rentepress", "At kjøpene må rettes mot importerte varer for å unngå prispress hjemme", "At kjøpene bare virker dersom sentralbanken samtidig setter renta ned og holder den lav en stund", "At kjøpene må være midlertidige for at multiplikatoren skal bli stor nok"],
      explanation: "Argumentet om høy etterspørsel per krone hviler på at arbeidskraft og utstyr står ledig. Forutsetningen er normalt oppfylt i en krise med stigende ledighet, men å si den eksplisitt er en billig måte å vise modellforståelse på.",
    },
  ],
  'econ2310-6-3': [
    {
      question: "Hva menes med en endogen risikopremie?",
      options: ["At bankenes påslag over styringsrenta avhenger av aktivitetsnivået i økonomien", "At sentralbanken justerer styringsrenta etter hvor risikabelt konjunkturbildet er", "At risikopremien fastsettes av myndighetene gjennom regulering av bankenes utlån", "At premien er den samme for alle låntakere uansett hvordan det går i økonomien"],
      explanation: "Premien kalles endogen fordi den bestemmes inne i modellen, av noe modellen selv forklarer. Konsekvensen er en ny tilbakekopling: aktivitet → risikovurdering → lånerente → etterspørsel → aktivitet.",
    },
    {
      question: "Hvorfor kan en endogen risikopremie gjøre en nedgang selvforsterkende?",
      options: ["Fordi lån blir dyrere nettopp når aktiviteten faller, slik at etterspørselen faller videre", "Fordi bankene slutter å låne ut penger i det hele tatt under en nedgangskonjunktur", "Fordi sentralbanken må heve styringsrenta for å forsvare valutakursen i en krise", "Fordi husholdningene sparer mer når renta faller, slik at forbruket går ytterligere ned i en nedgang"],
      explanation: "Kjeden er: lavere aktivitet → høyere vurdert konkursrisiko → høyere utlånsrente → lavere investeringer og forbruk → lavere aktivitet. I motsetning til styringsrenta, som beveger seg i dempende retning, beveger risikopremien seg i forsterkende retning.",
    },
    {
      question: "Med tre skjæringspunkter mellom etterspørselskurven og 45-graders linjen — hvilke er stabile?",
      options: ["De to ytterste; det midterste er en ustabil terskel", "Bare det midterste, siden det ligger nærmest normal kapasitetsutnytting", "Alle tre, siden ethvert skjæringspunkt er en likevekt i modellen", "Bare det øverste, siden økonomien alltid søker mot høyest mulig aktivitet"],
      explanation: "Regelen er at likevekten er stabil der etterspørselskurven er slakere enn 45-graders linjen, og ustabil der den er brattere. Det midterste punktet er derfor ikke et hvilested, men et vippepunkt som skiller de to områdene.",
    },
    {
      question: "Hva er den viktigste innsikten fra modellen med kriselikevekter?",
      options: ["At et midlertidig sjokk kan gi en varig nedgang dersom det skyver aktiviteten under terskelen", "At alle nedgangskonjunkturer blir varige dersom finansmarkedene fungerer dårlig i en periode", "At sentralbanken alltid kan hindre en krise ved å kutte styringsrenta raskt nok", "At risikopremien er den viktigste enkeltfaktoren bak norsk konjunkturutvikling, og at den derfor bør styre politikken"],
      explanation: "Det er sjokkets størrelse i forhold til terskelen som avgjør, ikke hvor lenge sjokket varer. Er det mindre, henter økonomien seg inn av seg selv; er det stort nok, blir den liggende i kriselikevekten også etter at sjokket er over.",
    },
    {
      question: "Hva følger for finanspolitikken dersom økonomien har havnet i kriselikevekten?",
      options: ["Tiltaket må være stort nok til å løfte aktiviteten over terskelen for å virke varig", "Tiltaket bør trappes gradvis opp, slik at man unngår å overstimulere økonomien", "Finanspolitikken er virkningsløs her, siden problemet ligger i finansmarkedene og ikke i etterspørselen", "Tiltaket bør rettes mot sparing, slik at bankenes utlånskapasitet styrkes"],
      explanation: "Dette snur den vanlige avveiningen: gradvis opptrapping er dårlig fordi hvert trinn er for lite til å passere terskelen, slik at virkningen forsvinner når tiltaket trappes ned. Konklusjonen forutsetter at flere likevekter faktisk finnes.",
    },
    {
      question: "Hva er det felles grepet bak fattigdomsfella og kriselikevekten?",
      options: ["At en parameter gjøres avhengig av nivået på den variabelen den skal forklare", "At begge forutsetter at sentralbanken ikke reagerer på fallet i aktiviteten", "At begge bygger på at kapitalen per arbeider faller under et kritisk nivå", "At begge gjelder land med lav inntekt og dårlig utviklede finansmarkeder, ikke modne økonomier"],
      explanation: "I fattigdomsfella avhenger spareraten eller befolkningsveksten av inntekten; her avhenger risikopremien av aktiviteten. Begge gir dobbeltkryssing og samme politikkonklusjon. Forskjellen er horisonten: langsiktig vekstlikevekt mot kortsiktig etterspørselslikevekt.",
    },
    {
      question: "Hva betyr det at roboter virker som «nye arbeidere»?",
      options: ["At de øker tilbudet av arbeidskraft av samme type og dermed byr lønna ned", "At de øker etterspørselen etter arbeidskraft og dermed presser lønna opp", "At de får utbetalt lønn på samme måte som menneskelige arbeidstakere", "At de øker produktiviteten til de menneskene de arbeider sammen med"],
      explanation: "Det som blir mer av, blir mindre verdt på marginen — enten det kommer i form av mennesker eller maskiner. Merk at samlet produksjon likevel stiger; det er fordelingen som endres. Alternativet om produktivitetsøkning beskriver forsterkende, ikke erstattende, teknologi.",
    },
    {
      question: "Hva er funksjonell inntektsfordeling?",
      options: ["Fordelingen av samlet inntekt mellom arbeid og kapital", "Fordelingen av inntekt mellom personer med høy og lav utdanning", "Fordelingen av inntekt mellom offentlig og privat sektor i økonomien", "Fordelingen av inntekt mellom konkurranseutsatt og skjermet sektor"],
      explanation: "Begrepet gjelder produksjonsfaktorer, ikke personer. Det er nødvendig for KI-spørsmålet fordi erstattende teknologi flytter inntekt fra lønn til kapital — og fordi en person kan være både lønnstaker og eier, og dermed tape på den ene siden og vinne på den andre.",
    },
    {
      question: "Hvorfor kan samlet inntekt per person stige selv om lønnsandelen faller?",
      options: ["Fordi avkastningen av teknologien kan komme tilbake gjennom bredt eierskap og fellesgoder", "Fordi lavere lønnsandel automatisk betyr at flere kommer i arbeid", "Fordi lavere lønninger gir lavere priser, slik at reallønna er uendret", "Fordi teknologien alltid forsterker arbeidskraften på lang sikt"],
      explanation: "«Robotlønna» forsvinner ikke — den tilfaller den som eier teknologien. Er eierskapet spredt gjennom pensjonsordninger, direkte eierskap eller statlige fond som finansierer fellesgoder, kommer avkastningen tilbake som kapitalinntekt eller offentlige tjenester.",
    },
    {
      question: "Hvilken politikk følger IKKE av KI-analysen i vekstmodellen?",
      options: ["Å bremse teknologien", "Å styrke omstilling gjennom utdanning", "Å spre eierskapet", "Å beskatte kapitalavkastning for å finansiere fellesgoder"],
      explanation: "Å bremse teknologien ville gjort samlet produksjon lavere uten å løse fordelingsproblemet — man gir opp gevinsten for å slippe å fordele den. Analysen sier at kaka blir større, og at utfordringen ligger i fordelingen, ikke i størrelsen.",
    },
  ],
  'econ2310-6-4': [
    {
      question: "Hva er det første steget i oppskriften for den store drøftingsoppgaven?",
      options: ["Formulere spørsmålet med egne ord", "Forklare alle de oppgitte relasjonene grundig før du leser videre i oppgaven", "Tegne diagrammet, slik at du har figuren klar før analysen begynner", "Bestemme hvor mange minutter du skal bruke på hvert avsnitt i besvarelsen"],
      explanation: "Setningen «spørsmålet er hva som skjer med X, Y og Z» er ankeret gjennom tre timer. Nesten alle svake besvarelser i denne formen svarer på et litt annet spørsmål enn det som ble stilt. Relasjonsforklaringen er steg 4 — og bare for de relasjonene du faktisk bruker.",
    },
    {
      question: "Hva er formens hovedfelle?",
      options: ["Å tømme sekken: gjengi alt om modellene i stedet for å svare på spørsmålet", "Å bruke for få minutter på relasjonsforklaringene tidlig, slik at analysen kommer i gang for sent", "Å tegne for mange figurer i stedet for å forklare mekanismene i ord underveis", "Å velge bare én av modellene når oppgaven oppgir to relasjonssett i oppgaveteksten"],
      explanation: "Uten deloppgaver finnes ingen ytre grense for hva som kan nevnes, og en usikker kandidat skriver mer. Men uttellingen følger relevans, ikke volum. Merk at det å avgrense — velge bort en modell og si hvorfor — er et faglig valg som gir uttelling, ikke en svakhet.",
    },
    {
      question: "Hvilken setning avslutter sensorveiledningene til begge de store drøftingsoppgavene i arkivet?",
      options: ["Bruk modellene konstruktivt og informert, og ikke mist spørsmålet av syne", "Besvarelsen må vise at kandidaten kan alle modellene i pensum", "Regnetekniske feil vurderes mildere enn manglende forklaringer av de oppgitte relasjonene", "Kandidaten bør bruke minst to av relasjonssettene for å kunne oppnå toppkarakter"],
      explanation: "Formuleringen er ordrett den samme i begge veiledningene. Den praktiske formen er å skrive spørsmålet med egne ord først, og lese det igjen etter hver mellomtittel.",
    },
    {
      question: "Hvordan skal arbeidet fordeles mellom de to relasjonssettene?",
      options: ["Hovedkursmodellen på lønn og priser, IS-RR-PK på aktivitet, rente og valutakurs", "Hovedkursmodellen på kort sikt, IS-RR-PK på lang sikt i den samme analysen", "Hovedkursmodellen på innenlandske sjokk, IS-RR-PK på de sjokkene som kommer utenfra", "Begge brukes på alle spørsmål, slik at konklusjonene kan kontrolleres mot hverandre"],
      explanation: "Hovedkursmodellen inneholder ingen produksjon og ingen rente; IS-RR-PK inneholder ingen sektorer og ingen lønnsdannelse. Å skrive én setning om arbeidsdelingen tar tjue sekunder og gir uttelling.",
    },
    {
      question: "Hva er den ene koblingen som gjør en tomodellsbesvarelse til mer enn to besvarelser etter hverandre?",
      options: ["Valutakursen: renteresponsen bestemmer kursen, og kursveksten er $v$ i hovedkursmodellen", "Produksjonen, som inngår både i IS-relasjonen og i hovedkursmodellens lønnsrelasjon for K-sektor", "Produktivitetsveksten, som er felles parameter i begge relasjonssettene", "Inflasjonsmålet, som begge modellene tar som gitt utenfra i analysen"],
      explanation: "Høyere rente styrker krona, som trekker inflasjonen ned med fullt gjennomslag og samtidig svekker kroneinntektene i konkurranseutsatt sektor. Merk at produksjonen ikke finnes i hovedkursmodellen i det hele tatt.",
    },
    {
      question: "Hvordan bør en stor drøftingsoppgave avsluttes?",
      options: ["Med et svar på spørsmålet, element for element, med ubestemthet flagget", "Med et sammendrag av alle mekanismene som er gjennomgått i besvarelsen", "Med en liste over de forutsetningene analysen har hvilt på", "Med en vurdering av hvilke deler av pensum som ikke ble berørt"],
      explanation: "Anti-mønsteret er «Som vi har sett, påvirker sjokket både inflasjonen, aktiviteten og renta gjennom flere kanaler» — sant, men ikke et svar. Forutsetningene hører tidligere i besvarelsen, der de brukes.",
    },
    {
      question: "Hva er et «skjult delspørsmål» i denne oppgaveformen?",
      options: ["Et krav som ligger i scenariet uten å være stilt som spørsmål", "Et delspørsmål som står i sensorveiledningen men ikke i oppgaveteksten", "Et spørsmål kandidaten selv formulerer for å strukturere besvarelsen", "Den delen av oppgaven som vurderes mildere enn resten av settet"],
      explanation: "Typisk tre: en oversettelse som må gjøres, en relasjon som må suppleres, og en kobling mellom modellene som ikke er nevnt. Bruk to minutter på å lete etter dem før du begynner å skrive.",
    },
    {
      question: "Hvor stor del av tiden bør gå til analysen i en tre timers drøftingsoppgave?",
      options: ["Om lag halvparten — resten går til diagnose, relasjonsforklaring, avslutning og buffer", "Nesten all tiden, siden analysen er det eneste som gir uttelling", "Om lag en tredel, siden relasjonsforklaringene bør ta minst en time", "Det avhenger helt av scenariet, så noe tidsbudsjett kan ikke settes opp på forhånd i denne formen"],
      explanation: "Budsjettet er omtrent 10 min diagnose, 20 min relasjonsforklaring og disposisjon, 90 min analyse, 20 min avslutning og 20 min buffer. Det er ikke sløseri: en analyse uten forklaringer får ikke uttelling uansett hvor riktig den er.",
    },
    {
      question: "Hva bør du sjekke før du bruker spesialtilfellet i hovedkursmodellen?",
      options: ["Om prisveksten ute og produktivitetsveksten faktisk er lik i de to sektorene", "Om valutakursen har vært stabil gjennom hele perioden analysen gjelder", "Om sentralbanken har holdt renta uendret siden forrige lønnsoppgjør ble gjennomført i frontfaget", "Om importandelen i forbruket er større eller mindre enn en halv"],
      explanation: "Spesialtilfellet forutsetter $q_k = q_i$ og $z_k = z_s$. Er eksportprisene steget mer enn importprisene, forsvinner bytteforholdsleddet — og det er nettopp den mekanismen som gjør at Norge kan tjene på et prissjokk som rammer andre land.",
    },
    {
      question: "Hva kjennetegner en skarp konklusjon i denne formen?",
      options: ["Den lander på et standpunkt og sier hva som skiller det fra det sterkeste motargumentet", "Den lister alle relevante hensyn og konkluderer med at de må avveies", "Den unngår å konkludere der modellen gir ubestemte fortegn noe sted i analysen", "Den gjentar konklusjonen fra hvert avsnitt i samme rekkefølge som avsnittene"],
      explanation: "En avveining som ender i «begge hensyn er viktige», er ikke en konklusjon. Forbehold er et verktøy, ikke garnityr: flagg det som faktisk er ubestemt i modellen, og vær tydelig på resten.",
    },
  ],
  'econ2310-7-1': [
    {
      question: "Hva er sensorens viktigste enkeltregel i dette emnet?",
      options: ["At relasjonene du bruker, skal forklares økonomisk — de oppgis uforklart med vilje", "At du skal kombinere så mange modeller som mulig i hvert svar, siden veiledningene premierer bredde framfor dybde i drøftingsoppgavene", "At alle svar skal oppgis med to desimalers nøyaktighet, siden regnestykket er hovedsaken i settene", "At du skal gjengi hele pensum for den modellen oppgaven nevner, også det delspørsmålet ikke spør om"],
      explanation: "Relasjonssettene oppgis bevisst uten forklaring, og veiledningene sier gjentatte ganger at forklaringen forventes av kandidaten. Å regne på uforklarte ligninger gir ikke uttelling. Faget har for øvrig ingen tallregningsoppgaver, så desimalsvar er ikke tema.",
    },
    {
      question: "Hvilke fire spørsmål skal en fullgod relasjonsforklaring svare på?",
      options: ["Hva symbolene er, hvilken adferd relasjonen beskriver, hvilken vei den virker og hvorfor, og hva som er gitt utenfra", "Hvem som utledet relasjonen, når, i hvilken lærebok og med hvilke data", "Hvor mange parametre relasjonen har, hvilke fortegn de er antatt å ha, hvor mange ledd som står på høyresiden, og hvilke av dem som er størst i tallverdi", "Hvilken figur den hører til, hvilken akse den tegnes mot, hvilken helning kurven har og hvilket skjæringspunkt den gir"],
      explanation: "Malen er fire trinn: symbolene, den økonomiske logikken, fortegn og mekanisme, og skillet endogent mot eksogent. Det siste trinnet er det som oftest droppes.",
    },
    {
      question: "En kandidat skriver: «Renten avhenger av produksjonsgapet, og når gapet er positivt, stiger renten.» Hva er problemet?",
      options: ["Det er parafrase, ikke forklaring — ingen adferd og ingen begrunnelse er gitt", "Fortegnet er feil; renten faller når produksjonsgapet er positivt, fordi banken da vil stimulere aktiviteten", "Produksjonsgapet hører ikke hjemme i renteregelen, som bare skal inneholde inflasjonen og inflasjonsmålet", "At kandidaten bruker ord i stedet for symboler — sensor forventer at fortegn og mekanismer uttrykkes som deriverte, ikke som setninger på norsk"],
      explanation: "Påstanden er riktig, men den gjentar bare ligningen med ord. Forklaringen mangler at dette er sentralbankens valg og hvorfor banken reagerer på nettopp gapet. Det er ingenting galt i å bruke ord.",
    },
    {
      question: "Hvorfor er renteregelen en reaksjonsfunksjon og ikke en markedslikevekt?",
      options: ["Fordi den beskriver hvordan sentralbanken selv velger å sette renten ut fra sitt mandat", "Fordi renten i modellen bestemmes av tilbudet av og etterspørselen etter penger, slik at regelen beskriver et marked som klarerer i likevekt", "Fordi den bare gjelder på lang sikt, når prisene har justert seg", "Fordi den inneholder eksogene variabler som inflasjonsmålet, og markedsligninger inneholder aldri slike"],
      explanation: "Regelen oppsummerer bankens avveining mellom inflasjonsmålet og hensynet til stabil produksjon og sysselsetting. Å behandle den som en markedsligning er en dokumentert felle.",
    },
    {
      question: "Hva er $Y^n$ i renteregelen?",
      options: ["Produksjonsnivået som er forenlig med stabil inflasjon, bestemt av tilbudssiden", "Sentralbankens ønskede produksjonsnivå, som banken selv fastsetter for hvert år ut fra hvor sterk aktivitet den mener økonomien tåler", "Produksjonen i fjor, som sentralbanken bruker som referansepunkt når årets rente skal settes", "Det høyeste produksjonsnivået økonomien fysisk kan nå når alle maskiner og all arbeidskraft er i bruk"],
      explanation: "$Y^n$ svarer til likevektsledigheten og bestemmes av lønnsdannelse, matching, konkurranse og produktivitet. Renten flytter aktiviteten rundt $Y^n$, ikke $Y^n$ selv.",
    },
    {
      question: "Hvorfor står nettopp gapet mellom $Y$ og $Y^n$ i renteregelen, og ikke produksjonsnivået alene?",
      options: ["Fordi det er avviket, ikke nivået, som forteller om prisveksten er på vei opp eller ned", "Fordi produksjonsnivået er ukjent for sentralbanken når renten settes", "Fordi gapet per definisjon alltid er positivt og derfor er lettere å regne med enn selve produksjonsnivået", "Fordi nivået på produksjonen inngår i Phillips-kurven i stedet, og renteregelen derfor må bruke gapet for ikke å telle den samme informasjonen to ganger"],
      explanation: "Phillips-kurven kobler gapet til inflasjonen, og banken har inflasjonen som mål. Gapet er altså en inflasjonsindikator — derfor reagerer banken på det.",
    },
    {
      question: "Hvilke tre kanaler går rentens virkning på produksjonen gjennom?",
      options: ["Konsum, investeringer og valutakurs/eksport", "Konsum, offentlige kjøp og skatteinntekter", "Investeringer, importpriser og befolkningsvekst", "Sparing, lønnsdannelse og produktivitet — de tre størrelsene som avgjør hvor mye økonomien kan produsere når renten endres"],
      explanation: "Rentekoeffisienten er $m(c_2+b_2+a_2\\kappa)$: lavere konsum, lavere investeringer og sterkere krone som demper eksporten. Alle tre skal alltid med.",
    },
    {
      question: "Hvilken kanal glemmes oftest når rentens virkning skal forklares?",
      options: ["Valutakurskanalen, altså at sterkere krone svekker eksporten", "Konsumkanalen, altså at husholdningene bruker mindre", "Investeringskanalen, altså at færre prosjekter er lønnsomme når renten stiger", "Skattekanalen, altså at renteutgifter er fradragsberettigede, slik at en renteøkning delvis kompenseres over skatteseddelen"],
      explanation: "Veiledningene flagger nettopp valutakurskanalen som den som oftest mangler. Skattefradrag er ikke en av modellens kanaler.",
    },
    {
      question: "Hvilken relasjon ligger «skjult» inne i rentens valutakurskanal, og må hentes fram selv?",
      options: ["Paritetsbetingelsen $E = E^e + \\kappa(i^F-i)$", "Phillips-kurven $\\pi = Z^\\pi + \\beta(Y-Y^n)/Y^n$, som er lagt inn i rentekoeffisienten og gjør at prisveksten virker på etterspørselen", "Bevegelsesligningen $\\Delta k = s f(k)-(n+\\delta)k$", "Konsumfunksjonen $C = c_0 + c_1 Y$"],
      explanation: "Kursen står ikke i den reduserte formen — den er allerede satt inn og ligger i produktet $a_2\\kappa$. Skal kanalen begrunnes, må paritetsbetingelsen skrives opp.",
    },
    {
      question: "En kronesvekkelse er ventet. Hva skjer med konsumprisveksten og med prisveksten på norske varer?",
      options: ["Konsumprisveksten stiger direkte via importandelen; prisveksten på norske varer påvirkes bare indirekte og er ubestemt", "Begge stiger like mye og umiddelbart, siden en svakere krone løfter alle priser i økonomien proporsjonalt med kurssvekkelsen", "Begge er upåvirket, siden valutakursen er en nominell størrelse og derfor ikke endrer prisene målt i kroner, verken ute eller hjemme", "Prisveksten på norske varer stiger direkte via importandelen, mens konsumprisveksten bare påvirkes indirekte og er ubestemt"],
      explanation: "Importvarer blir dyrere i kroner med én gang, med importandelen som vekt. Norske varepriser går via aktiviteten og Phillips-kurven, og retningen avhenger blant annet av sentralbankens respons.",
    },
    {
      question: "Hvorfor gir en brattere Phillips-kurve en mindre multiplikator?",
      options: ["Fordi høyere aktivitet da gir sterkere lønns- og prisvekst, som svekker konkurranseevnen og trekker eksporten ned", "Fordi sentralbanken da slutter å reagere på produksjonsgapet, slik at renten ligger fast gjennom hele forløpet og ikke demper utslaget", "Fordi importlekkasjen blir større når prisene stiger, slik at mer av etterspørselen går til utlandet", "Fordi høyere aktivitet da gir høyere ledighet og lavere lønnsvekst, slik at norske varer blir billigere og eksporten forsterker oppgangen"],
      explanation: "Kjeden er: høyere $Y$, lavere ledighet, høyere lønnsvekst, dyrere norske varer, lavere eksport. Alternativet med høyere ledighet snur kjeden feil vei — en dokumentert felle.",
    },
        {
      question: "Oppgaven sier bare «forklar relasjonen». Hva må med for at forklaringen skal telle som fullstendig?",
      options: ["Hva variabelen på venstresiden bestemmes av, hvilken vei hvert ledd trekker, og hvorfor mekanismen virker slik", "En presis gjengivelse av relasjonen med alle symboler definert, slik den er skrevet i oppgavesettet", "En tolkning av fortegnet på hver koeffisient, uten å gå inn på mekanismen bak", "En figur der relasjonen er tegnet inn med navngitte akser og skjæringspunkter"],
      explanation: "Sensorens regel nr. 1 er å forklare relasjonene du bruker: hva bestemmes, av hva, i hvilken retning, og gjennom hvilken mekanisme. Å gjengi relasjonen eller bare lese av fortegn er beskrivelse, ikke forklaring — figuren er støtte i tillegg.",
    },
    {
      question: "Hva betyr det at høyere $E$ innebærer svakere krone?",
      options: ["At $E$ måler hvor mange kroner en enhet utenlandsk valuta koster", "At $E$ måler hvor mange enheter utenlandsk valuta én krone kjøper, slik at høyere $E$ betyr sterkere krone", "At $E$ er en realvalutakurs justert for prisnivåforskjeller mellom Norge og handelspartnerne, slik at den måler konkurranseevne direkte", "At $E$ er sentralbankens styringsrente i valutamarkedet, altså renten banken tilbyr på plasseringer i kroner"],
      explanation: "Konvensjonen er kroner per enhet utenlandsk valuta. Stiger $E$, må vi gi flere kroner, altså er krona svakere.",
    },
    {
      question: "Hva skjer med krona når rentenivået ute stiger, alt annet likt?",
      options: ["Den svekkes, fordi utenlandske plasseringer blir mer attraktive", "Den styrkes, fordi rentedifferansen mot Norge øker og gjør det mer lønnsomt å plassere penger i kroner enn i utenlandsk valuta", "Den er upåvirket, siden bare den norske renten står i paritetsbetingelsen", "Den styrkes på kort sikt og svekkes igjen på lang sikt, når forventningene har justert seg"],
      explanation: "I $E = E^e + \\kappa(i^F-i)$ gir høyere $i^F$ høyere $E$, altså svakere krone. Motsatt styrker en uventet norsk renteøkning krona.",
    },
    {
      question: "Hva er $E^e$, og hvorfor er den viktig?",
      options: ["Markedets syn på kronas verdi på lang sikt — endres det, flytter kursen seg i dag uten at noen rente er endret", "Sentralbankens offisielle kursmål, som publiseres hvert kvartal", "Gjennomsnittskursen de siste tolv månedene", "Kursen som gir balanse i utenrikshandelen på lang sikt, altså det nivået der eksport og import er like store målt i kroner"],
      explanation: "$E^e$ er ankeret i paritetsbetingelsen. Svekket tillit til norsk økonomi løfter $E^e$ og dermed dagens kurs én til én.",
    },
    {
      question: "Et sett oppgir hovedkursmodellens fire relasjoner og spør om konsumprisveksten. Hva må du gjøre først?",
      options: ["Legge til definisjonen $\\pi = \\alpha p_i + (1-\\alpha)p_s$ selv, og si at du gjør det", "Anta at konsumprisveksten er lik prisveksten i skjermet sektor, siden det er der de fleste varene og tjenestene folk kjøper, produseres", "Sette valutakursveksten til null, slik at prisene blir sammenlignbare", "Bruke Phillips-kurven i stedet, siden den også gir inflasjon"],
      explanation: "Settene oppgir aldri KPI-definisjonen. Uten den finnes ikke konsumprisveksten i modellen i det hele tatt, og suppleringen er dokumentert god eksamensadferd.",
    },
    {
      question: "Hva er $k$ i hovedkursmodellen?",
      options: ["Lønnsvekst utover det hovedkursen tilsier — ekstraordinær lønnsvekst", "Kapital per arbeider, slik symbolet brukes i vekstmodellen", "Produktivitetsveksten i konkurranseutsatt sektor", "Konsumprisveksten korrigert for avgifter"],
      explanation: "Symbolet $k$ har to betydninger i faget. I hovedkursmodellen er det den ekstraordinære lønnsveksten; positiv $k$ presser lønnsomheten i konkurranseutsatt sektor.",
    },
    {
      question: "Hva betyr en negativ $k$ i hovedkursmodellen?",
      options: ["Økte overskudd i konkurranseutsatt sektor, og reallønnsvekst lavere enn produktivitetsveksten skulle tilsi", "At lønningene faller nominelt, slik at lønnstakerne får mindre utbetalt i kroner enn de gjorde året før", "At produktiviteten i skjermet sektor faller", "At importandelen i konsumet synker"],
      explanation: "Reallønnsveksten i spesialtilfellet er $z + \\alpha k$, som er lavere enn $z$ når $k<0$. Lavere lønnskostnadsvekst enn normen styrker lønnsomheten i konkurranseutsatt sektor.",
    },
    {
      question: "Hvorfor står ikke valutakursveksten $v$ i uttrykket for reallønnsveksten $w-\\pi$?",
      options: ["Fordi $v$ løfter både konsumprisene og lønnsveksten i samme takt, slik at virkningene opphever hverandre", "Fordi valutakursen bare påvirker prisene på importvarer og ikke lønnsdannelsen", "Fordi $v$ per definisjon er null i modellen", "Fordi reallønnen måles i utenlandsk valuta"],
      explanation: "Kursveksten går inn i kroneprisene i konkurranseutsatt sektor, løfter lønnsveksten gjennom frontfaget, og løfter konsumprisene like mye. Nettovirkningen på kjøpekraften blir null i modellen.",
    },
    {
      question: "Et sett skriver $\\Delta k = \\gamma f(k) - (n+d)k$. Hva er $\\gamma$ og $d$?",
      options: ["Spareraten og kapitalslitet — samme størrelser som bokas $s$ og $\\delta$", "Konsumtilbøyeligheten og befolkningsveksten — de to størrelsene som bestemmer hvor mye av inntekten som blir igjen til investeringer", "Produktivitetsveksten og avskrivningsperioden", "To parametre som ikke finnes i bokas versjon av modellen"],
      explanation: "Notasjonen varierer mellom sett. Les symbolets plass: står bokstaven foran $f(k)$, er det spareraten; ganges den med $k$ sammen med $n$, er det kapitalslitet.",
    },
    {
      question: "Hva er den anbefalte metoden når notasjonen i settet avviker fra bokas?",
      options: ["Skrive én oversettelseslinje først, og deretter holde seg konsekvent til settets notasjon", "Skrive om hele settet til bokas notasjon uten å kommentere det, slik at sensor slipper å forholde seg til to notasjoner samtidig", "Veksle mellom notasjonene der det passer best i hvert delspørsmål", "Be om at settet tolkes i din favør, og gå videre uten å nevne det"],
      explanation: "Settene tillater egen notasjon, men inkonsistens er en egen post i feilkatalogen. Én linje som oversetter, koster nesten ingenting.",
    },
    {
      question: "Hva er poenget med å avslutte en relasjonsforklaring med hva som er endogent og eksogent?",
      options: ["Det viser hva modellen bestemmer selv og hvor sjokkene treffer, og gjør resten av analysen lesbar", "Det er et rent formkrav uten faglig innhold som veiledningene gir uttelling for", "Det erstatter behovet for å forklare fortegnene", "Det avgjør hvilken figur som skal tegnes i neste delspørsmål"],
      explanation: "Skillet er trinn fire i malen og det som oftest droppes. Uten det vet ikke leseren hvilke variabler analysen faktisk beveger.",
    },
    {
      question: "Hvorfor er det ikke dobbelttelling at renteregelen har både et gapsledd og et eget ledd for kursimpulser?",
      options: ["Fordi gapsleddet fanger prispress fra aktiviteten, mens kursleddet fanger den direkte virkningen på importprisene", "Fordi kursleddet bare gjelder når produksjonsgapet er null, og de to leddene derfor aldri er aktive på samme tidspunkt", "Fordi de to leddene alltid har motsatt fortegn og nøytraliserer hverandre", "Fordi kursleddet er en trykkfeil som er videreført mellom sett"],
      explanation: "Kurssvekkelse løfter konsumprisene med én gang gjennom dyrere import, uavhengig av aktivitetsnivået. Uten kursleddet ville banken reagert bare indirekte og for sent.",
    },
    {
      question: "Hva er den korrekte presiseringen om totalstørrelsene i vekstmodellens likevekt?",
      options: ["Per arbeider-størrelsene står stille, mens samlet kapital og produksjon vokser med befolkningsveksten", "Både per arbeider-størrelsene og totalstørrelsene står stille, siden ingenting endrer seg når økonomien først har nådd likevekten", "Per arbeider-størrelsene vokser, mens totalstørrelsene står stille", "Alt vokser med spareraten $s$, både per arbeider-størrelsene og totalstørrelsene, siden sparingen driver veksten"],
      explanation: "Sensorveiledningen kaller det positivt feil å hevde at samlet kapital og produksjon er konstante i steady state. De vokser med $n$, og med $n+g$ når det er produktivitetsvekst.",
    },
    {
      question: "Hva er det egentlige poenget i spørsmålet om hvorvidt «sparerate» er et dekkende navn på $s$?",
      options: ["At navnet forutsetter lukket økonomi — i en åpen økonomi kan kapitalen også bygges med utenlandske midler", "At $s$ egentlig måler konsumtilbøyeligheten, slik at navnet blander sammen hvor mye som forbrukes og hvor mye som settes av", "At navnet er feil fordi sparingen skjer i banker og ikke i bedrifter", "At $s$ varierer over tid og derfor ikke kan kalles en rate"],
      explanation: "I en lukket økonomi er sparing lik investering, så andelen som spares, er også andelen som investeres. Utenlandske direkteinvesteringer, lån og bistand bryter koblingen.",
    },
  ],
  'econ2310-7-2': [
    {
      question: "Et brått fall i næringslivets investeringsvilje treffer modellen som et sjokk i hvilken variabel?",
      options: ["$Z^D$, etterspørselssjokket", "$Z^E$, valutakursimpulsen, siden investeringene finansieres ute", "$Z^\\pi$, prisimpulsen", "$Y^n$, potensielt BNP, siden mindre kapital senker potensialet"],
      explanation: "$Z^D$ samler alt som flytter etterspørselen uten at rente eller priser er endret, og investeringsvilje er nettopp det. Kurs og priser endres som en FØLGE av sjokket, ikke som sjokket selv.",
    },
    {
      question: "Ved et negativt etterspørselssjokk faller både produksjon og rente. Hva skjer med kronekursen?",
      options: ["Krona svekkes, fordi lavere norsk rente gjør kroneplasseringer mindre attraktive", "Krona styrkes, fordi lavere import gir mindre valutabehov", "Krona er upåvirket, siden sjokket traff etterspørselen", "Krona styrkes, fordi rentekuttet styrker tilliten"],
      explanation: "Paritetsbetingelsen $E = E^e + \\kappa(i^F-i)$ gir høyere $E$, altså svakere krone, når $i$ faller. Kursen reagerer på rentedifferansen, ikke på handelsstrømmene i denne modellen.",
    },
    {
      question: "Hvilke to virkninger kan IKKE signeres entydig ved et negativt etterspørselssjokk i denne modellen?",
      options: ["Privat konsum og konsumprisveksten", "Handelsbalansen og ledigheten, siden begge avhenger av bankens respons", "Renta og produksjonen", "Prisveksten på norske varer og investeringene, siden renteresponsen trekker motsatt vei"],
      explanation: "Konsumet trekkes ned av lavere inntekt og opp av lavere rente. Konsumprisveksten trekkes opp av dyrere import (svakere krone) og ned av svakere prisvekst på norske varer. Handelsbalansen bedres entydig, og ledigheten stiger entydig.",
    },
    {
      question: "Penge- og finanspolitikk doseres slik at produksjonen blir den samme. Hva er hovedforskjellen?",
      options: ["Sammensetningen: pengepolitikk svekker krona og løfter nettoeksport og investeringer, finanspolitikk løfter offentlige kjøp uten kurseffekt", "Ingen reell forskjell, siden produksjonen per forutsetning ender på samme nivå i begge scenarioene — valget blir dermed politisk, ikke økonomisk", "Finanspolitikk gir svakere krone, siden økte offentlige utgifter svekker tilliten til statsfinansene", "Pengepolitikk virker bare på inflasjonen, mens finanspolitikk er det eneste virkemidlet som påvirker produksjonen"],
      explanation: "Valutakurskanalen virker bare når renten endres. Derfor gir de to virkemidlene samme produksjon, men ulik fordeling på konsum, investeringer, offentlige kjøp og nettoeksport — og ulik kurs.",
    },
    {
      question: "Hva skjer i modellen når Phillips-kurven er svært bratt (stor $\\beta$)?",
      options: ["Begge kurvene blir brattere, og et etterspørselssjokk gir nesten uendret produksjon", "Etterspørselskurven blir flatere, slik at et etterspørselssjokk gir stort utslag i produksjonen", "Renteregelen blir flatere, siden banken kan la gapet ligge", "Multiplikatoren blir større, fordi høyere lønnsvekst gir mer konsum"],
      explanation: "Stor $\\beta$ gir kraftig prisdemping av multiplikatoren (brattere etterspørselskurve) og kraftigere respons per gapenhet (brattere renteregel). Produksjonen blir da nesten låst, mens renten bærer tilpasningen — økonomien minner om en bindende tilbudsside.",
    },
  ],
  'econ2310-7-3': [
    {
      question: "Hovedkursmodellen oppgis på eksamen med fire relasjoner. Hvilken må kandidaten legge til selv?",
      options: ["Konsumprisdefinisjonen $\\pi = \\alpha p_i + (1-\\alpha)p_s$", "Lønnsrelasjonen $w = p_k + z_k + k$", "Prisrelasjonen for skjermet sektor $p_s = w - z_s$, som følger av påslagsprising", "Kroneprisrelasjonen $p_i = q_i + v$"],
      explanation: "De tre andre står i settet. Uten konsumprisdefinisjonen finnes ikke konsumprisveksten i modellen, og spørsmål om kjøpekraft kan ikke besvares. Å supplere den er dokumentert god eksamensadferd.",
    },
    {
      question: "Hvorfor er reallønnsveksten $w-\\pi$ upåvirket av valutakursveksten $v$ i hovedkursmodellen?",
      options: ["Fordi kursveksten løfter både lønnsveksten (via frontfaget) og konsumprisveksten i samme takt", "Fordi kursen bare treffer importvarene, som er en liten del av forbruket", "Fordi lønnsveksten er nominelt fastsatt i tariffavtaler og derfor ikke kan reagere på kursendringer", "Fordi kursveksten inngår med motsatt fortegn i de to kroneprisrelasjonene"],
      explanation: "$v$ går inn i kroneprisene i konkurranseutsatt sektor, løfter lønnsveksten gjennom frontfagsrelasjonen, og løfter konsumprisene like mye. Nettovirkningen på kjøpekraften blir null.",
    },
    {
      question: "Hva betyr et krav om «kompensasjon for tapt kjøpekraft» i hovedkursmodellens språk?",
      options: ["Et krav om positiv ekstraordinær lønnsvekst, altså $k > 0$", "Et krav om høyere produktivitetsvekst i den skjermede sektoren", "Et krav om at sentralbanken styrker krona gjennom rentesettingen", "Et krav om lavere importandel i konsumet, slik at prisvekst ute betyr mindre"],
      explanation: "$k$ er lønnsvekst utover hovedkursen. Modellen viser at positiv $k$ løfter reallønnsveksten med $\\alpha k$, men også konsumprisveksten med $(1-\\alpha)k$, og svekker lønnsomheten i konkurranseutsatt sektor.",
    },
    {
      question: "En kronesvekkelse er en $Z^E$-impuls. Hvilke relasjoner treffer den?",
      options: ["Både etterspørselsrelasjonen og renteregelen — derfor skifter to kurver samtidig", "Bare etterspørselsrelasjonen, siden kursen virker gjennom eksport og import og ikke gjennom pengepolitikken", "Bare renteregelen, siden det bare er sentralbanken som reagerer på kursendringer i modellen", "Bare Phillips-kurven, siden svakere krone er et rent prissjokk"],
      explanation: "Kurssvekkelsen bedrer konkurranseevnen (etterspørselen opp) og løfter importprisene, som banken må svare på direkte. Renten stiger entydig, mens produksjonsvirkningen er ubestemt.",
    },
    {
      question: "Hva er broen mellom hovedkursmodellen og den åpne renteregelmodellen?",
      options: ["Valutakursen: rentesettingen påvirker kursen, og kursveksten inngår i kroneprisene", "Produktiviteten, som både bestemmer lønnsevnen i frontfaget og potensielt BNP i renteregelen", "Multiplikatoren, som opptrer i begge modellene og knytter etterspørsel til lønnsdannelse", "Importandelen, som er den eneste parameteren de to relasjonssettene har til felles"],
      explanation: "Renteøkning styrker krona gjennom paritetsbetingelsen, altså lavere $v$, og $v$ står med koeffisient én i uttrykket for konsumprisveksten. Motsatt vei påvirker lønnsoppgjøret ($k$) prispresset og dermed rentebanen.",
    },
  ],
  'econ2310-7-4': [
    {
      question: "Hva skjer med samlet kapital og samlet produksjon når økonomien har nådd likevekt i vekstmodellen?",
      options: ["De vokser med befolkningsveksten $n$, mens størrelsene per arbeider står stille", "De står helt stille, siden likevekt betyr at ingenting i økonomien endrer seg mer", "De vokser med spareraten $s$, siden den bestemmer hvor mye kapital som bygges opp", "De faller gradvis, fordi kapitalslitet fortsetter selv om det ikke investeres mer"],
      explanation: "Med $k$ og $y$ konstante og $L$ voksende med $n$, vokser $K = kL$ og $Y = yL$ med $n$. Å hevde at de står stille er en av de feilene sensorveiledningene flagger sterkest.",
    },
    {
      question: "Kapitalslitet øker varig i en økonomi som starter i likevekt. Hva skjer på kort sikt?",
      options: ["Ingenting med produksjonen per arbeider — kapitalbeholdningen er den samme, men den faller gradvis fra nå av", "Produksjonen per arbeider faller umiddelbart, siden en del av kapitalen forsvinner i samme øyeblikk som slitasjen øker", "Produksjonen per arbeider stiger først, fordi bedriftene må investere mer for å erstatte det som slites ned", "Konsumet per arbeider faller umiddelbart, mens produksjonen per arbeider er upåvirket både på kort og lang sikt"],
      explanation: "Kapitalbeholdningen er en beholdning: den kan ikke hoppe. Det som endrer seg umiddelbart, er at investeringene ikke lenger dekker slitasje og utvanning, så $k$ begynner å falle.",
    },
    {
      question: "Hvorfor kan langtidsvirkningen av en høyere sparerate på konsumet per arbeider ikke signeres?",
      options: ["Fordi produksjonen blir høyere mens andelen som forbrukes blir lavere — utfallet avhenger av om økonomien lå under eller over det konsummaksimerende nivået", "Fordi konsumet avhenger av renten, og modellen sier ingenting om hvordan renten utvikler seg over tid, slik at forbruksbanen blir ubestemmelig i denne rammen", "Fordi det ikke er mulig å måle konsum per arbeider når befolkningen vokser samtidig som kapitalen bygges opp", "Fordi virkningen avhenger av om økonomien er åpen eller lukket, og oppgaven sier ikke hvilken av dem det er"],
      explanation: "Konsumet er $(1-s)f(k^*)$: $f(k^*)$ stiger, $(1-s)$ faller. Ligger økonomien under nivået der $f'(k^*)=n+\\delta$, øker konsumet; ligger den over, faller det.",
    },
    {
      question: "Hva er betingelsen for den spareraten som gir høyest varig konsum per arbeider, og hva betyr den grafisk?",
      options: ["$f'(k^*) = n+\\delta$ — produksjonskurvens helning er lik utvanningslinjens, der avstanden mellom dem er størst", "$s = n+\\delta$ — spareraten skal være lik summen av befolkningsvekst og kapitalslit for at kapitalen skal holde seg", "$f(k^*) = (n+\\delta)k^*$ — produksjonen skal akkurat dekke det som kreves for å opprettholde kapitalen per arbeider", "$s f'(k^*) = \\delta$ — den marginale avkastningen på det som spares, skal være lik kapitalslitet i likevekt"],
      explanation: "Konsumet i likevekt er $c^* = f(k^*)-(n+\\delta)k^*$; deriverer man med hensyn på $k^*$ og setter lik null, får man $f'(k^*)=n+\\delta$. Grafisk er $c^*$ den loddrette avstanden mellom kurven og linjen, og den er størst der helningene er like.",
    },
    {
      question: "Produktivitetsveksten $g$ dobles. Hva skjer?",
      options: ["Kapitalen per effektivitetsenhet faller, men produksjonen per arbeider vokser varig med den nye, høyere raten", "Både kapitalen per effektivitetsenhet og produksjonen per arbeider faller, siden strålen blir brattere i fasediagrammet", "Ingenting endres på lang sikt, siden $g$ bare flytter nivået", "Kapitalen per effektivitetsenhet stiger, siden høyere produktivitet gir mer å investere"],
      explanation: "Strålen $(n+g+\\delta)k$ blir brattere, så $k^*$ per effektivitetsenhet faller. Men enheten vokser selv: produksjonen per arbeider vokser med $g$ i likevekt, og en dobling av $g$ dobler den varige veksttakten. Nivå og bane må skilles.",
    },
  ],
};

export default quizData_econ2310;

import type { QuizQuestion } from './quiz-data';

const quizData_stv1200: Record<string, QuizQuestion[]> = {
  'stv1200-0-1': [
    {
      question: "Hvordan er eksamen i STV1200 satt sammen i dagens format, altså settene fra H2020 til H2025?",
      options: ["Du velger ett av tre langsvarsalternativer og besvarer tre av fem kortsvarsspørsmål", "Du velger to av tre langsvarsalternativer og besvarer to av fem kortsvarsspørsmål", "Du besvarer alle tre langsvarsalternativene og velger tre av fem kortsvarsspørsmål", "Du velger ett av to langsvarsalternativer og besvarer fire av seks kortsvarsspørsmål"],
      explanation: "I dagens format får du tre langsvarsalternativer merket A til C og besvarer ett, og fem kortsvarsspørsmål merket D til H der du besvarer tre. Alternativet med ett av to og fire av seks beskriver formen i H2010 til H2012 og er historikk. De to øvrige beskriver ordninger som ikke finnes i arkivet.",
    },
    {
      question: "Hva er den ene virkelig faste konstanten i STV1200-eksamen gjennom hele arkivperioden 2010 til 2025?",
      options: ["At langsvarsdelen teller 60 prosent og kortsvarsdelen teller 40 prosent", "At kandidaten alltid har hatt tre langsvarsalternativer å velge mellom", "At kortsvarsdelen alltid har bestått av tre av fem spørsmål", "At eksamen alltid har vært gjennomført digitalt i Inspera uten hjelpemidler"],
      explanation: "Vektingen 60 og 40 prosent er lik i alle 16 settene fra H2010 til H2025. Antall langsvarsalternativer og antall kortsvar har derimot skiftet flere ganger, og gjennomføringsformen har også variert, siden H2021 ble avviklet hjemme.",
    },
    {
      question: "En kandidat leverer et langsvar der alle tall og traktatartikler er riktige, men der drøftingsdelen bare gjentar den empiriske delen med andre ord. Hva er den mest sannsynlige karakteren?",
      options: ["C, fordi presis empiri uten drøfting stopper der uansett kunnskapsmengde", "A, fordi presisjon i empiri er det tyngst vektede kravet i faget", "E, fordi et svar uten drøfting ikke oppfyller minimumskravet", "B, fordi presis empiri kompenserer for en tynn drøftingsdel"],
      explanation: "Riktig svar er C. Presisjon i empiri er grunnkravet, ikke løftet, og et redegjørende svar stopper derfor på C uansett hvor mye kandidaten kan. Svaret er ikke E, fordi empirien faktisk er riktig, og det er verken A eller B, fordi anvendelse og drøfting er den aksen som avgjør toppkarakteren.",
    },
    {
      question: "Hva betyr mantraet «anvend, ikke bare gjengi»?",
      options: ["At begreper og teori skal brukes til å bygge et argument, ikke bare forklares", "At besvarelsen bør inneholde flest mulig av pensums begreper og teorier", "At kandidaten bør skrive personlig og bruke sine egne meninger om verdenspolitikk", "At de empiriske detaljene er mindre viktige enn den generelle forståelsen"],
      explanation: "Å anvende betyr å bruke et begrep, en teori eller et tall til å svare på et spørsmål som ikke har ett opplagt svar. Det er ikke det samme som å mene noe personlig, og det gir heller ikke grunn til å slakke på empirien: presis empiri er fortsatt et selvstendig krav.",
    },
    {
      question: "Oppgaven lyder: «Drøft internasjonale organisasjoners betydning med utgangspunkt i minst to av perspektivene realisme, liberalisme og konstruktivisme.» Hvilken sjanger er dette?",
      options: ["T, altså teoridrøfting, der kravet er å kontrastere perspektivene på samme spørsmål", "L, altså vanlig todelt langsvar, der kravet er en presis redegjørelse først", "KR, altså kronikk- og tekstanalyse, der kravet er å identifisere perspektivet i en vedlagt tekst", "KD, altså kortsvar med mini-drøfting, der kravet er en kort pro og contra"],
      explanation: "Formuleringen «med utgangspunkt i minst to av perspektivene» kjennetegner teoridrøftingen, der det harde kravet er kontrastering og ikke beskrivelse. Kronikk- og tekstanalysen forutsetter en vedlagt tekst, og kortsvarsformene hører hjemme i Del 2 med et helt annet tidsbudsjett.",
    },
    {
      question: "En kandidat har god tid igjen og skriver et fjerde kortsvar i tillegg til de tre som kreves. Hva blir konsekvensen?",
      options: ["Ingen uttelling, fordi sensor bare leser det antallet svar som kreves", "Noe uttelling, fordi det beste av de fire svarene blir tellende", "Trekk i karakteren, fordi det regnes som brudd på eksamensreglene", "Uttelling bare hvis det fjerde svaret er bedre enn de tre andre"],
      explanation: "Sensor leser bare det antallet kortsvar som er oppgitt, så et fjerde svar gir null uttelling. Boka fører dette som feil nummer ti, og kostnaden er reell: minuttene er tatt fra langsvaret, som teller 60 prosent av karakteren.",
    },
    {
      question: "Hvilket tema har størst sett-dekning i STV1200-arkivet, målt mot de 16 oppgavesettene?",
      options: ["FNs sikkerhetsråd, som er med i 12 av 16 sett", "EUs institusjoner og beslutningssystem, som er med i 9 av 16 sett", "Sikkerhetsdilemmaet, som er med i 1 av 16 sett", "Europeisering og EUs påvirkning nedover, som er med i 3 av 16 sett"],
      explanation: "FNs sikkerhetsråd er fagets største tema med 12 av 16 sett. EU-institusjonene er nest størst i dekning og er dessuten det sikreste enkeltkortsvaret i de siste settene, men de har lavere samlet dekning. Sikkerhetsdilemmaet og europeisering ligger begge langt nede i tabellen.",
    },
    {
      question: "Hva står i STV1200s læringsmål fra 2021 og framover, men har null forekomster i alle 16 oppgavesettene?",
      options: ["Migrasjon og internasjonalt helsesamarbeid", "Oppbygningen av FN, EU og NATO og hvordan de påvirker stater", "Statssystemets endring og stabilitet over tid", "Handels-, valuta- og finanssystemet i internasjonal politisk økonomi"],
      explanation: "Migrasjon og internasjonalt helsesamarbeid har stått i læringsmålene siden 2021 uten å ha vært eksamensoppgave i noen av de 16 settene. De tre øvrige kunnskapsmålene er alle godt representert i settene, og de bærer flere av bokas tyngste kapitler.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene beskriver boka som A-markøren i et langsvar?",
      options: ["Akse 3, selvstendig struktur og analytisk kreativitet", "Akse 2, presisjon i empiri og begreper", "Akse 1, anvendelse og drøfting av teori og empiri", "Akse 4, riktig bruk av perspektivene og analysenivåene"],
      explanation: "Akse 3 måler om kandidaten selv organiserer diskusjonen, velger forklaringsfaktorer og begrunner valget, og det er dette som løfter et allerede godt svar. Presisjon i empiri er grunnkravet, anvendelse og drøfting er terskelen mot C og oppover, og riktig verktøybruk er et krav der oppgaven ber om det.",
    },
    {
      question: "Hvor mange komplette oppgavesett og hvor mange sensorveiledninger er denne boka kalibrert mot?",
      options: ["16 komplette oppgavesett og 9 sensorveiledninger, til sammen 19 dokumenter", "9 komplette oppgavesett og 16 sensorveiledninger, til sammen 25 dokumenter", "16 komplette oppgavesett og 16 sensorveiledninger, ett par for hver termin", "19 komplette oppgavesett og 9 sensorveiledninger, til sammen 28 dokumenter i alt"],
      explanation: "Arkivet består av 19 dokumenter: 16 komplette oppgavesett fra 2010 til 2025 og 9 sensorveiledninger. Det finnes altså ikke veiledning for hver termin — terminene 2010 til 2015 og 2020 har bare settet selv som kilde, og H2016 mangler helt.",
    },
    {
      question: "Hva er den praktiske hovedregelen når du skal velge hvilket langsvar du besvarer?",
      options: ["Velg det du kan både den empiriske delen og drøftingen av", "Velg det temaet du har lest flest sider om i pensum", "Velg det som har flest delspørsmål, siden hvert av dem gir poeng", "Velg det som ligner mest på en oppgave du har øvd på tidligere"],
      explanation: "Karakteren settes av begge deler, og de kan ikke erstatte hverandre. Derfor er kriteriet drøftbarhet pluss presisjon, ikke kunnskapsmengde, antall delspørsmål eller gjenkjennelse — du kan kunne et tema svært godt og likevel ikke se noen avveining i det.",
    },
    {
      question: "Terminen H2021 skiller seg ut i arkivet. Hva var avviket, og hvordan skal det leses?",
      options: ["Eksamen ble avviklet hjemme med hjelpemidler, og det er historikk, ikke dagens form", "Eksamen hadde en annen vekting enn 60 og 40 prosent, og den vektingen kan komme igjen", "Eksamen manglet kortsvarsdel, slik at hele karakteren hvilte på ett langsvar", "Eksamen ble avholdt om våren, i motsetning til alle de andre terminene i arkivet"],
      explanation: "H2021 ble gjennomført hjemme med tilgang til pensum, litteratur og internett på grunn av smittesituasjonen, mens struktur og vekting var som ellers. Boka trener skoleeksamen uten hjelpemidler, og avviket er verdt å kjenne bare fordi veiledningen der sier så tydelig at faktagjengivelse teller lite når fakta kan slås opp.",
    },
  ],
  'stv1200-0-2': [
    {
      question: "Hva består et langsvar i STV1200 av, og hvordan måles de to delene?",
      options: ["En empirisk del som måles på presisjon, og en drøftingsdel som måles på anvendelse", "En innledning som måles på struktur, og en hoveddel som måles på kunnskapsmengde", "To like store drøftingsdeler som begge måles på anvendelse og selvstendighet", "En teoridel som måles på pensumdekning, og en eksempeldel som måles på aktualitet og bredde"],
      explanation: "Langsvaret er todelt: en empirisk eller redegjørende del som måles på Akse 2, og en drøftingsdel som måles på Akse 1 og Akse 3. Det er ikke to drøftingsdeler, og kunnskapsmengde er ikke en egen akse i vurderingen.",
    },
    {
      question: "Hvor mye av langsvarets skrivetid bør drøftingsdelen få, ifølge tidsbudsjettet i boka?",
      options: ["Rundt 55 av de 90 til 110 minuttene, altså over halvparten", "Rundt 15 av de 90 til 110 minuttene, altså omtrent en sjettedel", "Rundt 30 av de 90 til 110 minuttene, altså omtrent en tredel", "Rundt 80 av de 90 til 110 minuttene, altså nesten hele tiden"],
      explanation: "Fordelingen som virker er rundt 10 minutter til disponering, 15 til den empiriske delen, 55 til drøftingen og 10 til kontroll. Drøftingen får over halvparten fordi den avgjør karakteren, men den empiriske delen og kontrollen kan ikke kuttes helt bort.",
    },
    {
      question: "Hva skiller en analytisk disposisjon fra en innholdsfortegnelse?",
      options: ["Den analytiske disposisjonen begrunner hvorfor akkurat disse faktorene er valgt", "Den analytiske disposisjonen står til slutt i besvarelsen i stedet for i starten", "Den analytiske disposisjonen lister flere punkter og er derfor mer dekkende", "Den analytiske disposisjonen bruker fagbegreper i stedet for hverdagsspråk"],
      explanation: "Forskjellen er begrunnelsen: en disposisjon sier hvorfor nettopp disse forklaringsfaktorene er relevante og hva som dermed utelates. Plassering, antall punkter og ordvalg endrer ikke om et valg faktisk er tatt og begrunnet — og det er valget som treffer Akse 3.",
    },
    {
      question: "Hva vil det si å BEHANDLE et motargument, i motsetning til å nevne det?",
      options: ["Å si hva innvendingen treffer, og deretter enten justere eller begrunne landingen", "Å nevne innvendingen tidlig, slik at leseren vet at du kjenner til den", "Å gjengi innvendingen fullstendig og korrekt før du går videre til neste tema", "Å tilbakevise innvendingen fullt ut, slik at konklusjonen står uten forbehold"],
      explanation: "Behandling betyr at innvendingen får konsekvenser for teksten: du sier hvor langt den rekker, og lander enten justert eller med en begrunnelse for hvorfor den ikke velter påstanden. Å gjengi den korrekt og gå videre er fortsatt bare en nevning, og en full tilbakevisning er verken påkrevd eller alltid ærlig.",
    },
    {
      question: "Hva skiller et eksempel som bygger argumentet fra et eksempel som pynter?",
      options: ["Eksempelet som bygger, kan ikke fjernes uten at argumentet mister belegget sitt", "Eksempelet som bygger, er hentet fra pensum og ikke fra nyhetsbildet", "Eksempelet som bygger, er lengre og mer detaljert enn et rent illustrerende eksempel", "Eksempelet som bygger, står i konklusjonen i stedet for midt i drøftingen"],
      explanation: "Testen er om eksempelet kan strykes uten at noe endrer seg. Bygger det, viser det at mekanismen faktisk opptrer, og argumentet faller uten det. Kilden og lengden avgjør ikke — veiledningene godtar både pensumeksempler og selvvalgte samtidseksempler.",
    },
    {
      question: "Oppgaven navngir analysenivåene individ, stat og system. Hva innebærer det for besvarelsen?",
      options: ["Nivåene skal brukes som ramme for drøftingen, ikke bare nevnes i en bisetning", "Nivåene skal defineres presist i den empiriske delen og deretter kan de utelates", "Nivåene er et tilbud kandidaten kan bruke hvis de passer til eksempelet som velges", "Nivåene skal rangeres etter hvilket av dem pensum behandler mest utførlig"],
      explanation: "Der oppgaven navngir verktøyet, er det et krav, og det skal styre disposisjonen i drøftingen. Å drøfte krigsårsaker uten nivåene omtales i veiledningene som ikke fullgodt, og boka fører utelatelsen som feil nummer to.",
    },
    {
      question: "Hvorfor er det ofte slik at A-versjonen av et langsvar ikke inneholder mer pensumkunnskap enn C-versjonen?",
      options: ["Fordi forskjellen ligger i valg, rangering, behandlet motargument og landing", "Fordi A-versjonen kutter empiri for å få bedre plass til drøftingen", "Fordi C-versjonen som regel har med for mye stoff og blir uoversiktlig", "Fordi sensor i praksis leser mindre nøye jo lengre besvarelsen er"],
      explanation: "Avstanden fra C til A er en annen bruk av den samme kunnskapen, ikke mer kunnskap. A-versjonen kutter ikke empiri — den holder den kort og presis — og C-versjonen er ikke uoversiktlig, den er bare redegjørende.",
    },
    {
      question: "Hva er den vanligste måten å bomme på drøftingsdelen i et langsvar?",
      options: ["Å svare på den med enda en redegjørelse, om et nytt begrep", "Å skrive den for kort, slik at den empiriske delen dominerer i lengde", "Å bruke selvvalgte samtidseksempler i stedet for eksempler fra pensum", "Å ta et tydelig standpunkt i stedet for å holde konklusjonen åpen"],
      explanation: "Feil nummer én er å svare på drøftingsdelen med en ny redegjørelse — da har kandidaten skrevet to redegjørelser. Selvvalgte eksempler er tillatt og premieres, og et tydelig standpunkt er fullt lovlig så lenge det er begrunnet.",
    },
    {
      question: "Hva er det harde kravet i en T-oppgave, altså en oppgave som ber om minst to av teoriperspektivene?",
      options: ["At perspektivene kontrasteres på samme spørsmål, ikke beskrives etter hverandre", "At alle tre perspektivene blir behandlet, siden oppgaveteksten sier minst to av dem", "At kandidaten konkluderer med hvilket av perspektivene som er det riktige", "At hvert perspektiv får sitt eget avsnitt med en presis begrepsavklaring"],
      explanation: "Kravet er kontrasteringen: ett felles spørsmål som begge perspektivene svarer på, og en påpekning av hva de er uenige om. To perspektiver behandlet stringent gir bedre uttelling enn tre ramset opp, og perspektivene skal ikke rangeres som riktige eller gale.",
    },
    {
      question: "Hvorfor skal du aldri hoppe over de korte faktaspørsmålene et flerdelt langsvar åpner med?",
      options: ["De er lette poeng, tar kort tid og inngår eksplisitt i vurderingen", "De er den eneste delen av oppgaven som gir uttelling på Akse 1", "De er som regel den lengste delen av oppgaven og bør derfor prioriteres", "De erstatter kravet om drøfting dersom de besvares helt presist"],
      explanation: "Åpningsspørsmålene har et presist svar, tar sjelden mer enn et kvarter til sammen og teller med i vurderingen. Å hoppe over ett av dem er en variant av feil nummer fem. De måles på presisjon, ikke på anvendelse, og de fritar ikke for drøftingskravet.",
    },
    {
      question: "Hvordan skal regelen om forholdet mellom presis empiri og god drøfting formuleres?",
      options: ["Drøfting reparerer ikke feil empiri, og presis empiri erstatter ikke drøfting", "Sterk drøfting kan kompensere for mindre feil i tall og artikkelnumre", "Presis empiri kan bære et svar til toppkarakter selv uten drøfting", "De to legges sammen til en samlet sum, der den ene kan veie opp den andre"],
      explanation: "Regelen går begge veier og skal alltid sies begge veier. Presisjon er en terskel du er over eller under, mens anvendelse og drøfting er en høyde du når eller ikke når — de to legges ikke sammen til en sum der den ene kan dekke for den andre.",
    },
    {
      question: "Hva er trinn 1 i femtrinnsmalen for langsvaret?",
      options: ["Den presise empiriske kjernen med tall, artikler og definisjoner", "En innledning som forteller leseren hva besvarelsen skal handle om", "Den analytiske disposisjonen med begrunnet valg av forklaringsfaktorer", "En kort gjennomgang av hvilke teoriperspektiver som er relevante"],
      explanation: "Trinn 1 leverer den kunnskapen oppgaven faktisk ba om, presist og kort. En innledning som bare varsler hva som kommer, er ikke trinn 1, og disposisjonen med det begrunnede valget er trinn 2.",
    },
    {
      question: "Hva måler Akse 3 i et langsvar?",
      options: ["Om kandidaten selv organiserer diskusjonen og begrunner utvalget sitt", "Om kandidaten har med de riktige tallene og traktatartiklene", "Om kandidaten bruker analysenivåene der oppgaven ber om dem", "Om kandidaten har lest hele pensum og dekker alle de relevante temaene i faget"],
      explanation: "Akse 3 handler om selvstendig struktur og analytisk kreativitet: å velge forklaringsfaktorer, avgrense fornuftig og begrunne det. Riktige tall hører til Akse 2, bruk av verktøyet hører til Akse 4, og pensumdekning er ikke en egen akse.",
    },
    {
      question: "En kandidat bruker 70 av 90 minutter på den empiriske delen av langsvaret. Hva er problemet?",
      options: ["Akse 2 overoppfylles, mens Akse 1 og Akse 3 blir underoppfylt", "Akse 2 underoppfylles, fordi presisjon i praksis krever mer tid enn det", "Ingenting, så lenge den empiriske delen er helt korrekt", "Problemet er bare at besvarelsen blir for lang totalt sett"],
      explanation: "Det gis ingen ekstra uttelling for mer presisjon enn oppgaven ba om, så de ekstra minuttene i den empiriske delen har ikke noe å løfte. Samtidig rekker tjue minutter sjelden til å velge forklaringsfaktorer, argumentere og behandle et motargument.",
    },
    {
      question: "Hvordan bør en mening du har fått fra nyhetsbildet, konverteres til noe som hører hjemme i en besvarelse?",
      options: ["Den blir en hypotese om en mekanisme, og nyhetssaken illustrerer mekanismen", "Den blir en påstand om hvilken part som handlet klokest, med saken som belegg", "Den holdes utenfor besvarelsen helt, siden sensor bare vurderer pensumstoff", "Den plasseres i innledningen som en aktualisering av temaet"],
      explanation: "Start i begrepet eller perspektivet, og bruk nyhetseksempelet som illustrasjon av mekanismen, aldri som argument i seg selv. Kunnskap fra nyhetsbildet skal ikke holdes utenfor, men den skal heller ikke bli en vurdering av hvem som handlet riktig — sensor vurderer analysen, ikke standpunktet.",
    },
    {
      question: "Hva er varsellampen for at du har begått feil nummer to i et langsvar?",
      options: ["Du kan stryke ordene individ, stat og system uten at noe i teksten endrer seg", "Du har brukt flere sider på den empiriske delen enn på drøftingsdelen", "Du har brukt et selvvalgt samtidseksempel i stedet for et fra pensum", "Du har konkludert skarpt i stedet for å holde landingen åpen"],
      explanation: "Feil nummer to er å utelate analyseramma oppgaven ber om, og testen er om verktøyet faktisk gjør arbeid i teksten. Fordelingen mellom delene, valget av eksempel og hvor skarpt du lander, er andre spørsmål og handler ikke om denne feilen.",
    },
  ],
  'stv1200-0-3': [
    {
      question: "Hvor mange kortsvar besvarer du i dagens format, og hvor mye teller de til sammen?",
      options: ["Tre av fem spørsmål, og de teller 40 prosent av karakteren", "Fem av fem spørsmål, og de teller 40 prosent av karakteren", "Tre av fem spørsmål, og de teller 60 prosent av karakteren", "Fire av seks spørsmål, og de teller 40 prosent av karakteren"],
      explanation: "I settene fra H2020 til H2025 får du fem kortsvarsspørsmål merket D til H og besvarer tre, og de tre teller 40 prosent til sammen. Fire av seks var formen i H2010 til H2012 og er historikk, og 60 prosent er langsvarsdelens vekt.",
    },
    {
      question: "Hvilken av de fire vurderingsaksene bærer et faktabasert kortsvar?",
      options: ["Akse 2, presisjon i empiri og begreper", "Akse 1, anvendelse og drøfting av stoffet", "Akse 3, selvstendig struktur og analytisk kreativitet", "Akse 4, riktig bruk av perspektiver og analysenivåer"],
      explanation: "I Del 2 er presisjon hovedaksen, mens anvendelse og drøfting bærer langsvaret. Anvendelse er likevel ikke helt borte fra kortsvaret: den løftende setningen og mini-drøftingen i et KD-spørsmål er anvendelse i miniatyr.",
    },
    {
      question: "Hva er de fire trinnene i kortsvarsmalen, i riktig rekkefølge?",
      options: ["Presis gjengivelse, den sentrale distinksjonen, ett kort eksempel, én løftende setning", "Innledning, presis gjengivelse, drøfting av fordeler og ulemper, konklusjon", "Den sentrale distinksjonen, presis gjengivelse, to korte eksempler og en kort oppsummering", "Ett kort eksempel, presis gjengivelse, kobling til teori, kritisk vurdering"],
      explanation: "Rekkefølgen er gjengivelse, distinksjon, eksempel og løftende setning. Kortsvaret har verken innledning eller konklusjon i essayforstand, og en drøfting av fordeler og ulemper hører hjemme i et KD-spørsmål, ikke i et faktakortsvar.",
    },
    {
      question: "Et kortsvar definerer anarki som fravær av en overordnet myndighet over statene, og stopper der. Hva mangler først og fremst?",
      options: ["Distinksjonen mot kaos, og konsekvensen selvhjelp", "En vurdering av om anarki-antakelsen er empirisk holdbar", "En gjennomgang av realismens øvrige hovedantakelser", "En historisk redegjørelse for hvordan statssystemet oppsto"],
      explanation: "Definisjonen er riktig, men flat: den mangler skillet mot kaos og den sikkerhetspolitiske konsekvensen. En vurdering av antakelsen er ikke bestilt i et faktaspørsmål, og historikk og øvrige antakelser ville vært korrekt og irrelevant.",
    },
    {
      question: "Hva er forskjellen mellom kollektivt forsvar og kollektiv sikkerhet?",
      options: ["Kollektivt forsvar retter seg mot en ytre trussel, kollektiv sikkerhet mot et medlem som bryter freden", "Kollektivt forsvar gjelder militære midler, kollektiv sikkerhet gjelder økonomiske sanksjoner", "Kollektivt forsvar er frivillig for medlemmene, kollektiv sikkerhet er rettslig bindende", "Kollektivt forsvar gjelder mellom stater, kollektiv sikkerhet gjelder mellom organisasjoner"],
      explanation: "Skillet går på retningen: kollektivt forsvar er en forpliktelse utad mot en ytre motpart, mens kollektiv sikkerhet retter seg innover i en organisasjon mot et medlem som selv bryter freden. Forvekslingen av de to er en dokumentert trekkgrunn i faget.",
    },
    {
      question: "Hva kjennetegner et KD-spørsmål, i motsetning til et K-spørsmål?",
      options: ["Verbet ber om en vurdering, så svaret trenger en kort pro og contra i tillegg til definisjonen", "Temaet er som regel mer omfattende, så svaret får dobbelt så lang tid som et rent faktakortsvar", "Svaret må munne ut i en entydig konklusjon som kandidaten begrunner", "Spørsmålet gjelder teoriperspektivene, mens K-spørsmål gjelder institusjoner"],
      explanation: "Forskjellen ligger i instruksjonsverbet, ikke i temaet eller omfanget. Et KD-svar har samme lengde og samme tidsbudsjett som et K-svar, og veiledningene sier eksplisitt at det ikke behøver å munne ut i en entydig konklusjon.",
    },
    {
      question: "Hvilket kortsvarstema har kommet i hvert eneste av de fem settene fra H2021 til H2025?",
      options: ["EU-organenes roller og hvem de representerer", "Sikkerhetsdilemmaet og usikkerheten om intensjoner", "Komparativt fortrinn definert via alternativkostnad", "Overnasjonalitet og gradene av den i EU"],
      explanation: "EU-organenes roller er det sikreste enkeltkortsvaret faget har, med 5 av 5 sett i H2021 til H2025 og nesten uendret formulering. Sikkerhetsdilemmaet er i 1 av 16 sett, mens komparativt fortrinn og overnasjonalitet begge er i 5 av 16.",
    },
    {
      question: "Hva sier veiledningen for H2019 om hva som skiller nivåene i et kortsvar?",
      options: ["En liste med de relevante poengene kan være nok til C, mens en kommentert liste normalt er nok til B", "En liste er aldri tilstrekkelig, og et kortsvar må alltid inneholde en kort drøfting", "Lengden avgjør, slik at det mest utfyllende svaret normalt får best uttelling", "Poengene må gjengis i samme rekkefølge som i pensum for å gi full uttelling"],
      explanation: "Beskrivelsen er usedvanlig konkret: en ren liste kan holde til C, mens en liste der ett punkt er utviklet eller kommentert av kandidaten normalt holder til B. Terskelen er altså lav, og den handler verken om lengde eller om rekkefølge.",
    },
    {
      question: "Hvordan er FNs sikkerhetsråd satt sammen, og hva er beslutningsregelen?",
      options: ["Femten medlemmer, hvorav fem faste med vetorett og ti valgte, og ni stemmer kreves", "Femten medlemmer, hvorav ti faste med vetorett og fem valgte, og ni av femten stemmer kreves", "Tolv medlemmer, hvorav fem faste med vetorett og sju valgte, og sju stemmer kreves", "Femten medlemmer uten faste plasser, og to tredels flertall kreves for vedtak"],
      explanation: "Rådet har femten medlemmer: fem faste med vetorett og ti valgte for toårsperioder, og et vedtak krever ni av femten stemmer. Fordelingen mellom faste og valgte er fem og ti, ikke omvendt, og de faste plassene er en fast del av ordningen.",
    },
    {
      question: "Hva betyr det at vetoretten er en stansemakt og ikke en vedtaksmakt?",
      options: ["Et fast medlem kan alene hindre et vedtak, men kan ikke alene få det gjennom", "Et fast medlem kan alene få et vedtak gjennom, men kan ikke på egen hånd hindre det", "Vetoretten gjelder bare prosedyrespørsmål og ikke materielle saker", "Vetoretten kan bare brukes når minst to faste medlemmer er enige"],
      explanation: "Ni stemmer er ikke nok dersom ett fast medlem stemmer imot, og ett fast medlem kan derfor stanse et vedtak på egen hånd. Samtidig kan det samme medlemmet ikke tvinge et vedtak gjennom alene, siden ni stemmer fortsatt kreves.",
    },
    {
      question: "En kandidat får spørsmålet «Hva menes med komparativt fortrinn?» og svarer at et land bør produsere det landet er best til. Hva er galt?",
      options: ["Definisjonen mangler alternativkostnad og skillet mot absolutt fortrinn", "Definisjonen er for kort til å gi full uttelling i et kortsvar", "Definisjonen mangler et eksempel fra internasjonal handelspolitikk", "Definisjonen burde vært knyttet til et bestemt teoriperspektiv"],
      explanation: "Komparativt fortrinn defineres via alternativkostnad: landet bør spesialisere seg der det gir opp minst av noe annet, også når det er absolutt dårligere på alt. Å definere det som å være best, er nettopp forvekslingen med absolutt fortrinn, og den flate definisjonen er feil nummer elleve.",
    },
    {
      question: "Etter hvilket kriterium skal du velge de tre kortsvarene du besvarer?",
      options: ["De tre du kan forankre mest presist, med definisjon og distinksjon", "De tre du kan skrive mest om innenfor tidsrammen på et kvarter hver", "De tre som handler om temaer du har lest sist og husker best akkurat nå", "De tre som er formulert kortest, siden de erfaringsmessig er enklest"],
      explanation: "Kriteriet er presisjon, ikke skrivemengde. Test hvert spørsmål med to raske spørsmål til deg selv: kan jeg skrive definisjonen presist, og kan jeg skrive distinksjonen? Er svaret ja på begge, er spørsmålet et trygt valg.",
    },
    {
      question: "Hva er en løftende setning i et kortsvar?",
      options: ["Én setning som utleder en konsekvens eller forklarer hvorfor ordningen er slik", "Et kort avsnitt som veier fordelene og ulempene ved ordningen opp mot hverandre", "En setning som knytter svaret til en navngitt pensumforfatter og et verk", "En avsluttende oppsummering av de viktigste punktene i svaret"],
      explanation: "Den løftende setningen gjør noe med stoffet: den utleder en konsekvens, forklarer begrunnelsen bak ordningen eller setter punktet opp mot noe annet. En avveining av fordeler og ulemper er en drøfting og hører hjemme i et KD-spørsmål, og en oppsummering gjentar bare det som allerede står.",
    },
    {
      question: "Hva er distinksjonen mellom integrasjon og europeisering?",
      options: ["Integrasjon er suverenitetsavståelse oppover, europeisering er påvirkning nedover", "Integrasjon gjelder økonomiske forhold, europeisering gjelder politiske forhold", "Integrasjon gjelder medlemsland, europeisering gjelder bare land utenfor unionen", "Integrasjon er en prosess over tid, europeisering er en tilstand på et gitt tidspunkt"],
      explanation: "Integrasjon er at suverenitet avstås oppover til unionsnivået, mens europeisering er unionens påvirkning nedover på nasjonal politikk, forvaltning og politiske prosesser. Å blande de to har sin egen feilkode i boka, nummer åtte.",
    },
    {
      question: "Hvorfor er Del 2 den delen av eksamen der avkastningen per lest time er høyest?",
      options: ["Fordi spørsmålene er lukkede og temaene gjentar seg med nesten uendret formulering", "Fordi den teller mest av de to delene og derfor er viktigst å prioritere", "Fordi svarene er korte og derfor krever mindre lesing enn langsvarsstoffet", "Fordi sensor vurderer kortsvarene mildere enn langsvaret i helhetsvurderingen"],
      explanation: "Del 2-temaene kan drilles ferdig på forhånd fordi spørsmålene har et presist svar og de samme temaene går igjen. Del 2 teller mindre enn Del 1, ikke mer, og det er ingen grunn til å tro at kortsvarene vurderes mildere.",
    },
    {
      question: "Hva er varsellampen for at et kortsvar mangler distinksjonen?",
      options: ["Svaret inneholder verken ordet «mens» eller uttrykket «i motsetning til»", "Svaret er kortere enn 150 ord og dekker derfor neppe alt spørsmålet ba om", "Svaret nevner ingen navngitt pensumforfatter som eier begrepet", "Svaret avsluttes uten en kort vurdering av ordningens styrker og svakheter"],
      explanation: "Distinksjonen krever en kontrast, og kontraster skrives nesten alltid med ord som markerer motsetning. Lengde alene sier lite, forfatternavn er ikke påkrevd i et kortsvar, og en vurdering er bare bestilt i KD-spørsmål.",
    },
  ],
  'stv1200-1-1': [
    {
      question: "Hva er et teoretisk perspektiv i internasjonal politikk?",
      options: ["Et sett antakelser om hvem som handler, hva som driver dem og hva som avgjør utfallet", "Et politisk standpunkt om hvordan stater bør opptre overfor hverandre i mellomstatlige spørsmål", "En samlet beskrivelse av hvordan det internasjonale systemet faktisk er bygd opp", "En metode for å samle inn og systematisere data om staters utenrikspolitikk"],
      explanation: "Riktig svar er at et perspektiv er et sett antakelser om aktører, drivkrefter og utfall. Et perspektiv er ikke et politisk standpunkt — å analysere noe realistisk er ikke å være kynisk. Det er heller ikke en beskrivelse av verden eller en datainnsamlingsmetode, men et forslag til hvor forklaringen skal letes.",
    },
    {
      question: "Hva betyr anarki i det internasjonale systemet?",
      options: ["At det ikke finnes noen overordnet myndighet over statene som kan håndheve avtaler", "At det internasjonale systemet mangler regler, traktater og faste spilleregler", "At stater opptrer uforutsigbart fordi ingen av dem har stabile interesser", "At internasjonale organisasjoner mangler ressurser til å gjennomføre vedtakene sine"],
      explanation: "Riktig svar er fravær av en overordnet myndighet over statene. Anarki er ikke det samme som kaos eller regelløshet: systemet er tvert imot gjennomregulert med traktater, sedvane og organisasjoner. Det som mangler, er en håndhever over partene. Å skrive «kaos» er den klassiske definisjonsfeilen i faget.",
    },
    {
      question: "Hva er selvhjelp, altså self-help, i realismens framstilling?",
      options: ["At en stat må skaffe sin egen sikkerhet fordi ingen andre kan garantere den", "At en stat bør unngå forpliktende samarbeid for ikke å gjøre seg sårbar", "At en stat prioriterer egne innbyggeres velferd foran internasjonale forpliktelser", "At en stat løser konflikter uten å involvere internasjonale domstoler eller meklere"],
      explanation: "Riktig svar er at staten selv må skaffe sikkerheten sin, siden ingen overordnet instans kan garantere den. Selvhjelp er ikke det samme som isolasjon: en allianse er selvhjelp, ikke et brudd med den. Poenget er hvorfor samarbeidet inngås, ikke om det inngås.",
    },
    {
      question: "Hva menes med relative gevinster?",
      options: ["At staten vurderer utbyttet av en avtale i forhold til hva motparten får", "At staten vurderer om avtalen gir mer enn den kostet å forhandle fram", "At staten vurderer utbyttet i forhold til hva den selv hadde før avtalen", "At staten vurderer om avtalen gir størst mulig samlet gevinst for alle parter"],
      explanation: "Riktig svar er at utbyttet måles mot motpartens. Å måle mot egen utgangsposisjon er derimot absolutte gevinster, som er liberalismens målestokk — det alternativet ligger nær og er nettopp fella. Forskjellen mellom de to er ikke hvor snille statene er, men hva gevinsten måles mot.",
    },
    {
      question: "Hva menes med absolutte gevinster?",
      options: ["At staten vurderer om den kommer bedre ut enn den ville gjort uten avtalen", "At staten vurderer om den kommer bedre ut av avtalen enn motparten gjør", "At staten vurderer gevinsten uavhengig av hvilke kostnader avtalen medfører", "At staten vurderer om gevinsten er stor nok til å forsvare politisk motstand hjemme"],
      explanation: "Riktig svar er at gevinsten måles mot egen utgangsposisjon. Alternativet om å komme bedre ut enn motparten beskriver relative gevinster, som er realismens målestokk. Absolutte gevinster betyr ikke at kostnadene ignoreres, bare at fordelingen mellom partene ikke er det avgjørende.",
    },
    {
      question: "Hva er forskjellen på en nullsumsituasjon og en positivsumsituasjon?",
      options: ["I den første er den enes gevinst den andres tap, i den andre kan begge komme bedre ut", "I den første er gevinsten sikker, i den andre avhenger den av at motparten holder ord", "I den første er gevinsten sikker på forhånd, i den andre avhenger den helt av at motparten holder ord", "I den første er gevinsten økonomisk, i den andre er den politisk eller symbolsk"],
      explanation: "Riktig svar er at nullsum betyr at den enes gevinst er den andres tap, mens positivsum betyr at begge kan komme bedre ut samtidig. Skillet handler om strukturen i situasjonen, ikke om hvor sikker gevinsten er, hvor mange parter som deltar eller hva slags gevinst det er snakk om.",
    },
    {
      question: "Hva er forskjellen på offensiv og defensiv realisme?",
      options: ["Den første hevder at stater maksimerer relativ makt, den andre at de søker nok sikkerhet", "Den første hevder at stater angriper først, den andre at de bare forsvarer seg", "Den første gjelder stormakter, den andre gjelder små og mellomstore stater", "Den første regner gevinster relativt, mens den andre regner dem absolutt slik liberalismen gjør"],
      explanation: "Riktig svar er skillet mellom å maksimere relativ makt og å søke tilstrekkelig sikkerhet. Alternativet om å angripe først ligger nær, men skillet gjelder hvor mye makt som skal til for å være trygg, ikke aggressivitet. Begge varianter bruker relativ målestokk, så påstanden om at den ene av dem regner absolutt slik liberalismen gjør, er utelukket.",
    },
    {
      question: "Hva er mekanismen i sikkerhetsdilemmaet?",
      options: ["At intensjoner ikke kan observeres, så defensive tiltak leses som offensive av andre", "At to rivaliserende stater ruster opp fordi begge forbereder et angrep", "At allianseforpliktelser trekker flere parter inn i en opprinnelig lokal konflikt", "At en stat bryter en avtale når kostnaden ved å følge den blir høyere enn gevinsten"],
      explanation: "Riktig svar er at usikkerheten om intensjoner er mekanismen: naboen ser kapasiteten, ikke hensikten. Uten den usikkerheten er det bare to stater som ruster opp, og det kan ha helt andre grunner. Alternativet om allianser beskriver en spredningsmekanisme, ikke sikkerhetsdilemmaet.",
    },
    {
      question: "Hvordan ser realismen på internasjonale organisasjoner?",
      options: ["Som redskaper for mektige stater, med liten selvstendig egenvekt", "Som arenaer der normer skapes, spres og over tid blir selvfølgelige", "Som ordninger med egenvekt fordi de senker usikkerhet og transaksjonskostnader", "Som overnasjonale myndigheter som kan binde medlemmene mot deres vilje"],
      explanation: "Riktig svar er at organisasjonene i hovedsak er redskaper for mektige stater. Alternativet om normer er konstruktivismens syn, og alternativet om egenvekt er liberal institusjonalismes. Merk at realismen ikke benekter at organisasjonene finnes eller gjør noe — den benekter at de har selvstendig kausal kraft.",
    },
    {
      question: "Hva er realismens blindsone?",
      options: ["At den forklarer dårlig at institusjoner overlever maktskifter mellom medlemmene", "At den er svak på prediksjon og kan forklare både endring og stabilitet i etterkant", "At den undervurderer hvor raskt samarbeid faller sammen når sikkerheten står på spill", "At den ikke tar hensyn til at makt er ujevnt fordelt mellom statene i systemet"],
      explanation: "Riktig svar er at realismen forklarer dårlig at institusjoner overlever maktskifter, og at stater binder seg selv frivillig. Alternativet om prediksjon er konstruktivismens blindsone, og alternativet om raske sammenbrudd er liberalismens. At makten er ujevnt fordelt mellom statene, er tvert imot en påstand realismen selv bygger på.",
    },
    {
      question: "Hva hevder liberal institusjonalisme om internasjonale institusjoner?",
      options: ["At de har egenvekt fordi de senker usikkerhet, kostnader og kollektive handlingsproblemer", "At de i praksis løser de fleste av de problemene som oppstår i forholdet mellom stater over tid", "At de gjenspeiler maktforholdet mellom medlemmene og har liten egen betydning", "At de kan overprøve medlemsstatenes beslutninger når vedtakene er bindende nok"],
      explanation: "Riktig svar er at institusjonene har egenvekt gjennom å redusere usikkerhet og transaksjonskostnader og løse kollektive handlingsproblemer. Alternativet om å løse problemene tilskriver tradisjonen et poeng den ikke har, og alternativet om å overprøve blander egenvekt med overnasjonal myndighet. Alternativet om å gjenspeile makt er realismens syn.",
    },
    {
      question: "Hva kjennetegner et fangens dilemma?",
      options: ["Begge kommer best ut av å bryte mens den andre holder, og begge ender med å tape", "Partene mangler tillit til hverandre fordi de aldri har samarbeidet om noe tidligere", "Den ene parten har informasjon den andre ikke har, og utnytter forspranget", "Gevinsten fordeles skjevt, slik at den ene parten taper på å inngå avtalen"],
      explanation: "Riktig svar er at hver part kommer best ut av å bryte mens den andre holder, og at resultatet blir at begge bryter. Utfallet oppstår også mellom fullt rasjonelle parter som kjenner hverandre godt, så manglende tillit i psykologisk forstand er ikke mekanismen. Det er strukturen som gir det dårlige utfallet.",
    },
    {
      question: "Hvorfor forventer liberalismen at internasjonale institusjoner er utholdende?",
      options: ["Fordi de er dyre å bygge og billige å bruke, så alternativet koster mer", "Fordi medlemmene har forpliktet seg juridisk og ikke uten videre kan trekke seg", "Fordi de mektigste medlemmene har interesse av at ordningen består over tid", "Fordi de fleste internasjonale organisasjoner har egne inntektskilder å drive på"],
      explanation: "Riktig svar er at institusjonene er dyre å bygge og billige å bruke: å bygge en ny ordning koster mer enn å leve med en skjev. Alternativet om at de mektigste har interesse av dem, er realismens forklaring på det motsatte utfallet. Juridiske forpliktelser og egne inntekter forklarer ikke utholdenheten på tvers av ordninger.",
    },
    {
      question: "Hva menes med gjensidig avhengighet mellom stater?",
      options: ["At stater er koblet slik at hendelser i den ene får merkbare følger i den andre", "At stater har inngått forpliktende avtaler som binder begge parter juridisk", "At stater har omtrent like stor militær og økonomisk kapasitet som hverandre", "At stater har felles interesser som gjør at de i praksis opptrer som allierte"],
      explanation: "Riktig svar er at hendelser i den ene får merkbare følger i den andre, gjennom handel, investeringer, energi og bevegelse av mennesker. Gjensidig avhengighet er verken det samme som en avtale, som jevnbyrdighet eller som vennskap — og den er ofte asymmetrisk, slik at den kan bli en maktressurs.",
    },
    {
      question: "Hva er den belagte, dyadiske versjonen av den demokratiske freden?",
      options: ["At demokratier sjelden eller aldri fører krig mot hverandre", "At demokratier generelt er fredeligere enn andre stater", "At demokratier sjelden angriper først, men gjerne svarer med makt", "At demokratier oftere enn andre stater slutter seg til internasjonale avtaler"],
      explanation: "Riktig svar er at demokratier sjelden eller aldri fører krig mot hverandre. Den monadiske versjonen, at demokratier generelt er fredeligere, er svakt belagt — det alternativet ligger nær og er nettopp distinksjonen sensor ser etter. Det er en observert regularitet med omstridte forklaringer, ikke et bevis.",
    },
    {
      question: "Hva består den kantianske triangelen av?",
      options: ["Demokrati, handel og internasjonale organisasjoner som gjensidig forsterkende fredsdrivere", "Analysenivåene individ, stat og system brukt som samlet ramme for å forklare både krig og fred", "Perspektivene realisme, liberalisme og konstruktivisme som fagets tre grunnsyn", "Anarki, selvhjelp og maktbalanse som kjeden realismen bygger forklaringen på"],
      explanation: "Riktig svar er demokrati, handel og internasjonale organisasjoner. Poenget er at de tre henger sammen: demokratier handler mer med hverandre, handel skaper behov for felles ordninger, og ordningene gjør det lettere å binde seg. Analysenivåene og perspektivtriaden er helt andre inndelinger, og forvekslingen er verdt å vokte seg for.",
    },
    {
      question: "Hva er funksjonelt samarbeid?",
      options: ["Samarbeid som starter på et avgrenset teknisk felt der gevinsten er åpenbar", "Samarbeid der statene avgir suverenitet til et felles overnasjonalt organ", "Samarbeid som er begrenset til en fast gruppe land i samme region", "Samarbeid som bare varer så lenge det tjener alle de deltakende partene"],
      explanation: "Riktig svar er samarbeid som starter på et avgrenset teknisk felt med liten konflikt, som postgang, luftfart eller standarder. Alternativet om suverenitetsavståelse beskriver integrasjon, som er noe annet — funksjonelt samarbeid kan foregå helt uten at noen gir fra seg suverenitet.",
    },
    {
      question: "Hva er liberalismens blindsone?",
      options: ["At den undervurderer hvor raskt samarbeid faller sammen når sikkerheten står på spill", "At den forklarer dårlig hvorfor internasjonale institusjoner overlever store maktskifter", "At den ikke kan forutsi hvilken vei en internasjonal norm vil utvikle seg", "At den overser at innenrikspolitiske grupper påvirker utenrikspolitikken"],
      explanation: "Riktig svar er at liberalismen undervurderer hvor raskt gevinstlogikken skifter fra absolutt til relativ når sikkerhetsinteresser kommer i spill. Alternativet om institusjoners utholdenhet er realismens blindsone, og alternativet om prediksjon er konstruktivismens. Innenrikspolitiske grupper er tvert imot noe liberalismen legger stor vekt på.",
    },
    {
      question: "Hva er en norm i konstruktivismens forstand?",
      options: ["En delt forventning om hva som er passende oppførsel for en bestemt type aktør", "En regel som er nedfelt i en traktat og som kan håndheves av en domstol", "En sedvane som har vart så lenge at den regnes som bindende folkerett", "En vurdering av hva som er moralsk riktig i en gitt internasjonal situasjon"],
      explanation: "Riktig svar er en delt forventning om passende oppførsel. Normer er ikke det samme som traktatregler: de virker gjennom forventning, omdømme og selvforståelse, også der ingen kan straffe et brudd. Sedvanerett er et rettslig begrep, og en norm er heller ikke en moralsk vurdering, men en observerbar delt forventning.",
    },
    {
      question: "Hva kjennetegner konstituerende normer?",
      options: ["De skaper rollene og kategoriene som gjør handling mulig i det hele tatt", "De styrer hvilke virkemidler som er akseptable innenfor etablerte roller", "De er nedfelt i traktater og kan derfor håndheves av internasjonale organer", "De gjelder alle stater uavhengig av om de har sluttet seg til dem"],
      explanation: "Riktig svar er at konstituerende normer skaper rollene og kategoriene — for eksempel at et territorium med befolkning og myndighet regnes som en suveren stat. Alternativet om akseptable virkemidler beskriver regulerende normer, og det er nettopp distinksjonen som er fast eksamensstoff.",
    },
    {
      question: "Hva kjennetegner regulerende normer?",
      options: ["De styrer atferd innenfor roller som allerede er etablert", "De definerer hvilke enheter som regnes som aktører i systemet", "De er alltid nedfelt skriftlig og har en fastsatt sanksjonsordning", "De skiller seg fra konstituerende normer ved at de aldri brytes"],
      explanation: "Riktig svar er at regulerende normer styrer atferden innenfor allerede etablerte roller, for eksempel forbud mot bestemte våpentyper. Å definere hvilke enheter som er aktører, er konstituerende normers oppgave. Regulerende normer brytes ofte — og en enkel test er at kategorien overlever bruddet.",
    },
    {
      question: "Hva er en normentreprenør?",
      options: ["En aktør som arbeider for å få en ny norm akseptert som passende oppførsel", "En interessegruppe som forhandler fram avtaler på vegne av medlemmene sine", "En stat som konsekvent følger etablerte internasjonale normer og avtaler", "En internasjonal organisasjon med myndighet til å håndheve normbrudd"],
      explanation: "Riktig svar er en aktør som arbeider for å få en ny norm akseptert. Det er ikke det samme som en pressgruppe som forhandler for medlemmene sine: poenget er at aktøren endrer hva som regnes som passende, og virkningen kan derfor nå lenger enn en avtales medlemskrets.",
    },
    {
      question: "Hva er konstruktivismens kjernepåstand om staters interesser?",
      options: ["At interesser følger av identitet, og at identiteten er sosialt formet", "At interesser følger av statens plassering i maktfordelingen mellom stater", "At interesser utformes av de gruppene innenlands som har mest å tjene", "At interesser i hovedsak er økonomiske og handler om velstand og vekst"],
      explanation: "Riktig svar er at interesser følger av identitet, og at identiteten er sosialt formet. Alternativet om maktfordeling er realismens antakelse, og alternativet om innenlandske grupper er en statsnivåforklaring i liberal tradisjon. Poenget er at to stater med samme ressurser kan få ulike interesser.",
    },
    {
      question: "Hvordan ser konstruktivismen på internasjonale organisasjoner?",
      options: ["Som arenaer der normer skapes, spres og gjøres selvfølgelige over tid", "Som ordninger som senker kostnadene ved å gjøre det medlemmene allerede ville gjort", "Som redskaper de mektigste medlemmene bruker til å sikre sine egne interesser", "Som organer som gradvis overtar oppgaver fra medlemsstatenes forvaltning"],
      explanation: "Riktig svar er at organisasjonene er arenaer der normer skapes og spres. Alternativet om å senke kostnadene er liberalismens syn, og det ligger nær nok til å være verdt å merke seg: liberalismen sier at ordningen gjør det billigere å gjøre det du allerede ville, konstruktivismen at den endrer hva du vil.",
    },
    {
      question: "Hva er konstruktivismens blindsone?",
      options: ["At den er svak på prediksjon og kan forklare både endring og stabilitet i etterkant", "At den ikke kan forklare hvorfor internasjonale normer i det hele tatt oppstår i et system", "At den overser at stater er de viktigste aktørene i internasjonal politikk", "At den undervurderer betydningen av institusjoner og formaliserte avtaler"],
      explanation: "Riktig svar er svakheten på prediksjon: fordi det samme apparatet kan forklare både endring og stabilitet, er det krevende å si på forhånd hva vi burde se. Kritikken handler om etterprøvbarhet. Perspektivet har tvert imot en utviklet forklaring på hvordan normer oppstår, gjennom normentreprenører.",
    },
    {
      question: "Hva vil det si å kontrastere to perspektiver?",
      options: ["Å stille dem opp mot samme spørsmål på samme case og vise hvor de gir ulike svar", "Å gjøre rede for hvert av dem grundig, i hvert sitt avsnitt, med like mye plass", "Å sammenligne hva de sier om aktørsyn, menneskesyn og historisk opphav", "Å velge det perspektivet som passer best, og forklare hvorfor det andre ikke gjør det"],
      explanation: "Riktig svar er å stille dem opp mot samme spørsmål på samme case. Å gjøre rede for hvert i sitt avsnitt er nettopp katalogen som utløser trekk, og en generell sammenligning av kjennetegn er heller ikke drøfting. Testen er om avsnittene kan byttes om uten at noe blir feil.",
    },
    {
      question: "Hva består en konfliktlinje mellom to perspektiver av?",
      options: ["En presis uenighet, en test som ville skilt dem, og en begrunnet landing", "En oppramsing av de viktigste forskjellene mellom de to perspektivene", "En vurdering av hvilket perspektiv som har hatt størst innflytelse i faget", "En framstilling av hvert perspektiv i sin sterkeste versjon, uten å velge"],
      explanation: "Riktig svar er tredelingen uenighet, test og landing. En oppramsing av forskjeller peker ikke mot noe som kunne observeres, og uten testleddet har man bare en sammenstilling. Å framstille begge sterkt er nødvendig, men ikke tilstrekkelig — landingen mangler.",
    },
    {
      question: "Hvorfor kan to perspektiver gi bedre uttelling enn tre i en teoridrøfting?",
      options: ["Fordi å kontrastere to stringent krever mer analyse enn å behandle tre overflatisk", "Fordi oppgaveteksten som regel begrenser antallet perspektiver som kan brukes, til nøyaktig to", "Fordi det tredje perspektivet sjelden har noe å si om spørsmål av denne typen", "Fordi sensor har begrenset tid og premierer korte og oversiktlige besvarelser"],
      explanation: "Riktig svar er at stringent kontrastering av to krever mer analyse enn overflatisk behandling av tre. Oppgavene sier «minst to», så antallet er ikke begrenset ovenfra, og det tredje perspektivet har nesten alltid noe å si. Det er analysedybden, ikke lengden, som avgjør.",
    },
    {
      question: "Hva er feil #4 i bokas feilregister?",
      options: ["Å bruke bare én tradisjon, eller å beskrive to side om side uten å kontrastere", "Å gjengi teorien helt riktig uten å bruke den til å argumentere for noe som helst", "Å utelate den analyseramma oppgaveteksten eksplisitt ber om", "Å hoppe over en sentral distinksjon når et begrep gjøres rede for"],
      explanation: "Riktig svar er feilen som gjelder teoritradisjoner: for få, eller flere uten kontrastering. Ren gjengivelse er feil #1, å utelate analyseramma er feil #2, og manglende distinksjoner er feil #11. De ligger nær hverandre, og det er derfor kodene forklares hver gang de brukes.",
    },
    {
      question: "Hva er en blindsone i bokas bruk av ordet?",
      options: ["Den klassen fenomener et perspektiv systematisk forklarer dårlig", "Et forhold perspektivet bevisst holder utenfor for å avgrense analysen", "En feil i perspektivets grunnantakelser som gjør det mindre brukbart", "Et område der to perspektiver gir samme svar og derfor ikke kan skilles"],
      explanation: "Riktig svar er den klassen fenomener perspektivet systematisk forklarer dårlig. En blindsone er ikke en feil: alle perspektiver har en, og et perspektiv uten blindsone ville vært en beskrivelse av alt. Å påpeke den er ikke å avvise perspektivet, men å si hvor et annet gjør jobben bedre.",
    },
    {
      question: "Når er teoriperspektivene et krav i en eksamensoppgave?",
      options: ["Når oppgaveteksten navngir dem eller ber deg identifisere et perspektiv i en tekst", "Alltid, siden perspektivene er fagets gjennomgående analyseramme i alle eksamensoppgaver", "Når oppgaven er et langsvar, siden Del 1 alltid tester teoriforståelse", "Når oppgaven handler om internasjonale organisasjoner eller om samarbeid"],
      explanation: "Riktig svar er at de er et krav når oppgaveteksten navngir dem eller ber om identifisering. De er ikke alltid et krav: navngir oppgaven analysenivåene i stedet, er det de som er bestilt, og en teoridrøfting hjelper ikke da. Temaet er heller ikke avgrenset til bestemte saksfelt.",
    },
    {
      question: "Hvilken sammenheng er det mellom merkantilisme og marxisme?",
      options: ["Begge er kritiske til frihandelens løfter, men den ene er statssentrert og den andre klassesentrert", "Begge er statssentrerte tradisjoner som vurderer handel utelukkende etter hva den gjør med statens maktposisjon", "Begge er varianter av realismen anvendt på økonomiske spørsmål mellom stater", "Begge hevder at rike land systematisk utnytter fattige land gjennom handelen"],
      explanation: "Riktig svar er at de deler en kritisk konklusjon, men har ulik analyseenhet: merkantilismen ser staten, marxismen ser klasser på tvers av land. At to posisjoner er enige om en konklusjon, betyr ikke at de deler premisser — og sammenblandingen er en dokumentert trekkgrunn.",
    },
    {
      question: "Hvem er det stabile norske ankeret for begrepene anarki og selvhjelp i dette faget?",
      options: ["Hovi og Underdal, Internasjonal politikk", "Claes og Førland, Europeisk integrasjon", "Claes, Hveem og Tranøy, Global politisk økonomi", "Grieco, Ikenberry og Mastanduno, Introduction to International Relations"],
      explanation: "Riktig svar er Hovi og Underdal, som dekker statssystem, teori, FN, NATO og internasjonale organisasjoner. Claes og Førland er ankeret for EU-stoffet, Claes, Hveem og Tranøy for internasjonal politisk økonomi, og Grieco med flere er gjeldende engelskspråklige grunnbok. Begrepene er stabile, men forfatterkoblingene rullerer.",
    },
    {
      question: "Hvorfor rangerer boka aldri de tre perspektivene?",
      options: ["Fordi forklaringskraften alltid er relativ til hvilket spørsmål som stilles", "Fordi det er umulig å avgjøre empirisk hvilket perspektiv som forklarer best", "Fordi sensor ikke har lov til å premiere en bestemt teoretisk posisjon", "Fordi de tre perspektivene i praksis gir samme svar på de fleste spørsmål"],
      explanation: "Riktig svar er at forklaringskraften er relativ til spørsmålet: realismen forklarer sikkerhetsdynamikk godt og normspredning dårlig, konstruktivismen omvendt. Uenigheten er ofte fullt testbar empirisk, og perspektivene gir tvert imot ulike svar — det er hele grunnlaget for kontrastering.",
    },
    {
      question: "Hva er den vanligste formen for feil #1 når teoriperspektivene brukes?",
      options: ["Et påklistret «dette kan også ses realistisk» uten noe analytisk innhold", "At kandidaten velger bare ett perspektiv når oppgaven ber om minst to", "At kandidaten definerer et begrep uten å ta med den sentrale distinksjonen", "At kandidaten svarer på flere spørsmål i Del 2 enn oppgaven ber om"],
      explanation: "Riktig svar er den påklistrede perspektivsetningen uten innhold — teorien nevnes, men brukes ikke til å argumentere. Å velge bare ett perspektiv er feil #4, manglende distinksjon er feil #11, og å svare på for mange kortsvar er feil #10. Testen er om setningen kunne fjernes uten tap.",
    },
  ],
  'stv1200-1-2': [
    {
      question: "Hva er et analysenivå?",
      options: ["Et valg av hvor forklaringen på et fenomen skal letes", "En påstand om hvilke aktører som er viktigst i internasjonal politikk", "En metode for å måle hvor stor virkning en årsak har hatt", "En inndeling av internasjonale saksfelt etter hvor viktige de er"],
      explanation: "Riktig svar er at analysenivået er et valg av hvor forklaringen skal letes: hos personene som bestemmer, i statens innretning, eller i systemet av stater. Det er en sorteringsnøkkel for forklaringsfaktorer, ikke en påstand om verden, en målemetode eller en rangering av saksfelt.",
    },
    {
      question: "Hvilke tre analysenivåer opererer faget med?",
      options: ["Individnivå, statsnivå og systemnivå", "Lokalt nivå, nasjonalt nivå og internasjonalt nivå", "Beslutningsnivå, gjennomføringsnivå og virkningsnivå", "Aktørnivå, institusjonsnivå og strukturnivå"],
      explanation: "Riktig svar er individnivå, statsnivå og systemnivå. De øvrige inndelingene ligner, men brukes ikke i dette faget — og en besvarelse som bruker feil navn på ramma, viser umiddelbart at ramma ikke sitter.",
    },
    {
      question: "Hva er testen for å avgjøre hvilket nivå en forklaringsfaktor hører til?",
      options: ["Å spørre hva som må endres for at faktoren skal forsvinne", "Å spørre hvor stor virkning faktoren har hatt på utfallet", "Å spørre om faktoren er nevnt i den oppgaveteksten man har fått", "Å spørre om faktoren gjelder innenriks- eller utenrikspolitikk"],
      explanation: "Riktig svar er å spørre hva som må endres: personen, statens innretning, eller forholdet mellom statene. Virkningens størrelse er et annet spørsmål, og skillet mellom innenriks og utenriks skjærer på tvers av nivåene — mange innenrikspolitiske faktorer forklarer utenrikspolitiske utfall.",
    },
    {
      question: "Hvilke faktorer hører hjemme på individnivået?",
      options: ["Feiloppfatning, gruppetenkning og overoptimisme hos dem som bestemmer", "Befolkningens holdninger, nasjonalisme og opinionspress før valg", "Regimetype, økonomisk system og forvaltningens organisering", "Anarki, maktfordeling og alliansestrukturen mellom statene"],
      explanation: "Riktig svar er mekanismene hos beslutningstakerne. Befolkningens holdninger og nasjonalisme hører til statsnivået — det er en av de vanligste feilplasseringene, fordi begge deler handler om mennesker. Individnivået gjelder dem som bestemmer, ikke dem som blir styrt.",
    },
    {
      question: "Hva er feiloppfatning som forklaringsfaktor?",
      options: ["At beslutningstakeren tolker ny informasjon inn i et bilde hun allerede har", "At beslutningstakeren mangler tilgang til den informasjonen som ville vært avgjørende", "At beslutningstakeren bevisst gir et misvisende bilde av situasjonen utad", "At partene i en konflikt har ulik informasjon og grunn til å skjule den"],
      explanation: "Riktig svar er at ny informasjon tolkes inn i et eksisterende bilde. Manglende tilgang er noe annet: ofte er informasjonen der, men blir tolket skjevt — og derfor hjelper ikke alltid mer informasjon. Alternativet om ulik informasjon mellom partene beskriver privat informasjon, som er en annen mekanisme.",
    },
    {
      question: "Hva er gruppetenkning?",
      options: ["At en sammensveiset beslutningsgruppe undertrykker motforestillinger for å bevare enighet", "At en samlet beslutningsgruppe blir enig fordi argumentene som ble prøvd, faktisk peker samme vei", "At beslutninger fattes av en gruppe i stedet for av én person alene", "At ulike deler av forvaltningen kjemper om å få gjennomslag for sitt syn"],
      explanation: "Riktig svar er at motforestillinger undertrykkes for å bevare enigheten. Enighet i seg selv er ikke gruppetenkning — mekanismen er at innvendingene aldri ble prøvd. Alternativet om dragkamp mellom forvaltningsorganer beskriver en helt annen mekanisme, som hører til beslutningsmodellene.",
    },
    {
      question: "Hvilke faktorer hører hjemme på statsnivået?",
      options: ["Regimetype, innenrikspolitiske kraftforhold, nasjonalisme og interessegrupper", "Anarki, maktfordeling, polaritet og mønsteret av allianseforpliktelser", "Feiloppfatning, overoptimisme og beslutningsgruppens indre dynamikk", "Traktater, sedvane og de rettslige forpliktelsene stater har påtatt seg"],
      explanation: "Riktig svar er egenskaper ved den enkelte staten: regimetype, innenrikspolitikk, nasjonalisme og interessegrupper. Kjennetegnet er at faktorene overlever et lederskifte, men ikke gjelder alle stater. Anarki og maktfordeling er systemnivå, og beslutningsgruppens dynamikk er individnivå.",
    },
    {
      question: "Hvorfor regnes regimetype som en statsnivåfaktor og ikke som en individfaktor?",
      options: ["Fordi den er en egenskap ved staten som overlever et lederskifte", "Fordi den bare har betydning i demokratier og ikke i andre styreformer", "Fordi den gjelder alle stater i systemet på samme måte", "Fordi den er nedfelt i forfatningen og derfor er et rettslig og ikke politisk forhold"],
      explanation: "Riktig svar er at regimetypen overlever et lederskifte. En autoritær leders personlige risikovilje er individnivå; at systemet mangler institusjoner som kan stoppe henne, er statsnivå. At noe gjelder alle stater likt, ville derimot gjort det til en systemnivåfaktor.",
    },
    {
      question: "Hva er det militær-industrielle komplekset som analytisk begrep?",
      options: ["Et interessefellesskap mellom forsvarssektor, forsvarsindustri og tilknyttede politikere", "Den samlede produksjonskapasiteten et land har for militært utstyr", "Et samarbeid mellom flere staters forsvarsindustrier om felles utvikling", "En påstand om at bestemte navngitte aktører bevisst skaper konflikter for sin egen vinnings skyld"],
      explanation: "Riktig svar er interessefellesskapet mellom forsvarssektor, industri og tilknyttede politikere, med en egeninteresse i høye budsjetter. Det er et analytisk begrep om interessestrukturer, ikke en påstand om skjulte hensikter hos navngitte aktører — brukt som beskyldning hører det ikke hjemme i en besvarelse.",
    },
    {
      question: "Hvilke faktorer hører hjemme på systemnivået?",
      options: ["Anarki, maktfordeling og polaritet, maktforskyvning og alliansestruktur", "Alt som skjer utenfor landets egne grenser og påvirker utenrikspolitikken", "Regimetype, næringsstruktur og hvilke grupper som er politisk organisert", "Beslutningstakernes bilde av motparten og deres vurdering av risiko"],
      explanation: "Riktig svar er egenskaper ved systemet av stater, som er felles for alle og ikke kan endres av én alene. Alternativet om alt utenfor grensene er nettopp fella: en nabostats regjeringsskifte er en statsnivåfaktor hos naboen, ikke en systemnivåfaktor.",
    },
    {
      question: "Hva er forskjellen på maktfordeling, maktforskyvning og maktbalanse?",
      options: ["Den første er en tilstand, den andre en endring, den tredje en mekanisme", "Den første gjelder militær makt, den andre økonomisk, den tredje begge deler", "Den første er et realistisk begrep, de to andre er liberale begreper", "Den første beskriver stormakter, de to andre beskriver hele systemet"],
      explanation: "Riktig svar er skillet mellom tilstand, endring og mekanisme: maktbalanse er at stater slutter seg sammen mot den som blir for sterk. De tre brukes om hverandre i svake besvarelser, og det er en ren presisjonsfeil som trekker ned uansett hvor god drøftingen ellers er.",
    },
    {
      question: "Hva er alliansestruktur som systemnivåfaktor?",
      options: ["Mønsteret av forsvarsforpliktelser mellom statene, og hvor troverdige de er", "En enkelt stats beslutning om å slutte seg til en forsvarsallianse med andre stater", "Fordelingen av militære ressurser mellom medlemmene i en allianse", "Reglene for hvordan en allianse fatter vedtak i en krisesituasjon"],
      explanation: "Riktig svar er mønsteret av forpliktelser i systemet som helhet. Alliansedannelse er en handling en enkelt stat utfører som del av selvhjelp; alliansestrukturen er tilstanden som blir resultatet for alle. Strukturen kan både dempe konflikt og spre den, og hvilket som dominerer, er et drøftingsspørsmål.",
    },
    {
      question: "Hvilken sammenheng er det mellom teoriperspektiv og analysenivå?",
      options: ["En tendens: realismen lener mot systemnivå, liberalismen trekker inn statsnivået", "En identitet: realisme er systemnivå, og liberalisme er statsnivå", "Ingen: perspektiv og nivå er to helt uavhengige valg uten noen kobling mellom seg overhodet", "En rekkefølge: man velger først et nivå, og perspektivet følger av valget"],
      explanation: "Riktig svar er at koblingen er en tendens, ikke en identitet. En realist kan godt forklare en beslutning med feiloppfatning hos den som bestemte, og en liberal analyse kan være rent strukturell. Å skrive likhetstegn mellom perspektiv og nivå er en presisjonsfeil sensor ser umiddelbart.",
    },
    {
      question: "Hva er reduksjonisme i bruken av analysenivåene?",
      options: ["Å forklare et fenomen på ett nivå uten å begrunne at de andre settes til side", "Å bruke alle tre nivåene, men gi det ene av dem klart mest plass i selve besvarelsen", "Å forenkle en sammensatt årsakskjede til noen få hovedpunkter", "Å bruke nivåene på et fenomen de ikke er utviklet for å forklare"],
      explanation: "Riktig svar er å lande på ett nivå uten å si at det er et valg. Det er ikke forbudt å avgrense — en begrunnet avgrensning er tvert imot et tegn på selvstendig struktur. Feilen er å la det se ut som om det ikke fantes noe annet sted å lete.",
    },
    {
      question: "Hva betyr det at nivåene utfyller hverandre?",
      options: ["At de svarer på ulike spørsmål om det samme, og bør sees i sammenheng", "At alle tre nivåene alltid må vektes likt i en besvarelse", "At de tre nivåene alltid peker mot den samme forklaringen til slutt", "At man må bruke alle tre for at et svar skal kunne bestå"],
      explanation: "Riktig svar er at de svarer på ulike spørsmål om det samme fenomenet. Det betyr ikke at de må vektes likt — det betyr at du må si hva hvert nivå forklarer og hva det ikke forklarer. «Alle tre har betydning» uten mer er ikke utfylling, men en tom setning.",
    },
    {
      question: "Hvorfor er «lederen var maktsyk» ikke en individnivåforklaring?",
      options: ["Fordi det er en karakteristikk og ikke en mekanisme som kan etterprøves", "Fordi individnivået bare gjelder beslutningsgrupper og ikke enkeltpersoner", "Fordi personlige egenskaper hører hjemme på statsnivået i denne inndelingen", "Fordi påstander om enkeltpersoner ikke kan brukes i akademiske besvarelser"],
      explanation: "Riktig svar er at det er en karakteristikk, ikke en mekanisme. En individnivåforklaring navngir noe som kunne vært annerledes og som ville gitt et annet utfall — feiloppfatning, gruppetenkning eller overoptimisme. Individnivået gjelder både enkeltpersoner og beslutningsgrupper.",
    },
    {
      question: "Hva skiller outside-in og inside-out fra analysenivåene?",
      options: ["De spør hvor impulsen kommer fra, mens nivåene spør hvor forklaringsfaktoren ligger", "De er to navn på nøyaktig den samme inndelingen, brukt i ulike lærebøker", "De gjelder utenrikspolitikk, mens analysenivåene bare gjelder krigsårsaker", "De er et realistisk begrepspar, mens analysenivåene er et liberalt begrepspar"],
      explanation: "Riktig svar er at de svarer på to ulike spørsmål. Inndelingene overlapper, men er ikke sammenfallende: en impuls utenfra kan godt forklares på individnivå, gjennom hvordan beslutningstakerne tolket presset. Å sette likhetstegn gjør resten av analysen intern inkonsistent.",
    },
    {
      question: "Hva er feil #2 i bokas feilregister?",
      options: ["Å utelate den analyseramma oppgaveteksten eksplisitt ber om", "Å gjengi pensum riktig uten å bruke det til å argumentere", "Å plassere en forklaringsfaktor på feil analysenivå", "Å behandle bare én teoritradisjon når oppgaven ber om minst to"],
      explanation: "Riktig svar er å utelate analyseramma oppgaven ber om, typisk å drøfte krigsårsaker uten nivåene. Ren gjengivelse er feil #1, feilplassering hører under feil #11, og for få tradisjoner er feil #4. Et svar kan være en utmerket drøfting og likevel begå feil #2.",
    },
    {
      question: "Hva forklarer systemnivået dårlig?",
      options: ["Tidspunktet, altså hvorfor akkurat denne staten handlet akkurat nå", "Hvorfor mønstre gjentar seg på tvers av svært ulike stater", "Hvorfor stater med ulik innretning handler likt i samme ytre situasjon", "Hvorfor maktfordelingen mellom statene endrer seg over tid"],
      explanation: "Riktig svar er timingen: systemnivåforklaringer gjelder enhver stat i samme posisjon og sier lite om hvorfor akkurat denne, akkurat nå. De to neste alternativene er tvert imot nettopp det systemnivået forklarer godt, og som er dets styrke.",
    },
    {
      question: "Hvor ofte er analysenivåene navngitt i selve oppgaveteksten i eksamensarkivet?",
      options: ["I 8 av 16 sett, både på krigsårsaker og på utenrikspolitikk", "I 2 av 16 sett, og begge gangene handlet spørsmålet om årsakene til krig", "I 12 av 16 sett, oftest som eget kortsvarsspørsmål", "I 5 av 16 sett, og bare i de eldste terminene i arkivet"],
      explanation: "Riktig svar er 8 av 16 sett. Det gjør analysenivåene til den mest brukte eksplisitte analyseramma i faget — i de siste settene er de faktisk oftere etterspurt enn teoriperspektivene, som er navngitt i 10 av 16 sett, men ikke i H2025.",
    },
  ],
  'stv1200-1-3': [
    {
      question: "Hva studerer internasjonal politisk økonomi?",
      options: ["Samspillet mellom politisk makt og økonomiske markeder over landegrensene", "Hvordan verdenshandelen påvirker den samlede globale verdiskapingen", "Hvordan stater innretter finanspolitikken sin i møte med økonomiske kriser", "Hvordan internasjonale organisasjoner finansierer virksomheten sin"],
      explanation: "Riktig svar er samspillet mellom politisk makt og marked over grensene. Feltets grunnspørsmål er hvem som bestemmer, og hvem som vinner og taper — ikke bare hvor stor den samlede kaken blir. Å svare rent økonomisk i dette faget gir ikke uttelling.",
    },
    {
      question: "Hva kjennetegner merkantilismen?",
      options: ["Den er statssentrert og vurderer økonomisk aktivitet etter hva den gjør med statens makt", "Den er klassesentrert og spør hvem som tilegner seg de verdiene som skapes", "Den er markedsorientert og mener statens oppgave er å sikre rammene for handel", "Den avviser at internasjonal handel skaper økonomiske gevinster for noen av partene i det hele tatt"],
      explanation: "Riktig svar er statssentreringen: markedet er et middel, politisk makt er målet. Merkantilismen benekter ikke at handel skaper gevinster — den bestrider at den samlede gevinsten er det avgjørende hensynet. Klassesentreringen tilhører marxismen.",
    },
    {
      question: "Hva menes med at merkantilismen leser handel med en nullsum-tendens?",
      options: ["At det avgjørende er hvem som kommer best ut, fordi relativ posisjon gir makt", "At handel etter deres syn alltid gjør minst én av partene fattigere enn før", "At gevinsten ved handel er fast og derfor må fordeles gjennom forhandling", "At handelsavtaler alltid inngås på bekostning av tredjeland utenfor avtalen"],
      explanation: "Riktig svar er at det relative utfallet er det avgjørende, fordi posisjon gir makt. Tradisjonen hevder ikke at noen alltid blir fattigere — den bruker en annen målestokk enn den samlede gevinsten. Dette er den økonomiske utgaven av relative gevinster.",
    },
    {
      question: "Hva er infant-industry-argumentet?",
      options: ["At en ny næring kan trenge midlertidig beskyttelse for å rekke å bli konkurransedyktig", "At land bør bygge opp de næringene der de allerede har et klart og målbart absolutt fortrinn", "At nye bedrifter bør slippe skatt til de har nådd en viss omsetning", "At beskyttelse av hjemlig industri alltid er lønnsomt på lang sikt for landet"],
      explanation: "Riktig svar er midlertidig beskyttelse for å bygge kompetanse og skala. Midlertidigheten er hele poenget: argumentet er en oppbyggingsstrategi, ikke et forsvar for varig proteksjonisme — og den vanligste innvendingen er at beskyttelsen sjelden fjernes igjen.",
    },
    {
      question: "Hva er den vanligste innvendingen mot infant-industry-argumentet?",
      options: ["At den beskyttede næringen blir en organisert interesse med noe å tape på endring", "At beskyttelse alltid gjør varen dyrere for forbrukerne i det landet som beskytter", "At argumentet forutsetter at staten kan forutse hvilke næringer som vil lykkes", "At internasjonale handelsavtaler forbyr enhver form for midlertidig beskyttelse"],
      explanation: "Riktig svar er at beskyttelsen sjelden fjernes, fordi den beskyttede næringen blir en organisert interesse. Det er en politisk innvending mot et økonomisk argument, og nettopp den typen kobling faget premierer. De to neste alternativene er reelle poenger, men treffer ikke midlertidigheten.",
    },
    {
      question: "Hva kjennetegner den økonomiske liberalismen?",
      options: ["Den ser frivillig bytte som velstandsskapende og staten som rammesetter", "Den ser handel som et middel til å styrke statens relative posisjon", "Den ser klasseforholdene som det som til sist avgjør hvem som tjener på handel", "Den mener at internasjonal handel bør reguleres av overnasjonale organer"],
      explanation: "Riktig svar er at frivillig bytte skaper velstand og at statens oppgave er å sikre rammene. Analyseenheten er individet og bedriften, og gevinster måles absolutt. Alternativet om statens relative posisjon er merkantilismens syn.",
    },
    {
      question: "Hvordan defineres komparativt fortrinn?",
      options: ["Via alternativkostnad — spesialiser der du gir opp minst av noe annet", "Via produktivitet — spesialiser der du produserer flest enheter per innsatsfaktor", "Via pris — spesialiser der du kan levere varen billigst på verdensmarkedet", "Via ressurser — spesialiser der du har mest av de nødvendige innsatsfaktorene"],
      explanation: "Riktig svar er definisjonen via alternativkostnad. De øvrige beskriver absolutt fortrinn eller konkurranseevne, og en flat definisjon av den typen er en dokumentert trekkgrunn. Poenget er at et land som er absolutt dårligere på alt, likevel har et komparativt fortrinn i noe.",
    },
    {
      question: "Hva er alternativkostnad?",
      options: ["Verdien av det beste du gir avkall på når du velger å bruke ressursene på noe annet", "Den kostnaden som påløper når en produksjon må legges om til noe annet", "Prisforskjellen mellom å produsere en vare selv og å importere den fra utlandet", "Summen av de utgiftene som ikke fanges opp i den bokførte produksjonskostnaden"],
      explanation: "Riktig svar er verdien av det beste alternativet du gir avkall på. Begrepet er nøkkelen til komparativt fortrinn, og det er derfor det er verdt å kunne presist — en definisjon av komparativt fortrinn uten alternativkostnad regnes som ufullstendig.",
    },
    {
      question: "Hva er forskjellen på absolutt og komparativt fortrinn?",
      options: ["Det første handler om hvem som er mest effektiv, det andre om hva hver part gir opp", "Det første gjelder varer, mens det andre også omfatter tjenester og kapital", "Det første er et merkantilistisk begrep, det andre er et liberalt begrep", "Det første gjelder på kort sikt, det andre først når markedene har tilpasset seg"],
      explanation: "Riktig svar er skillet mellom effektivitet og alternativkostnad. Begge begrepene tilhører den økonomiske liberalismens apparat, så alternativet om merkantilistisk mot liberalt er en sammenblanding. Det avgjørende poenget er at et land som er dårligere på alt, likevel bør spesialisere seg.",
    },
    {
      question: "Hva kjennetegner marxismen som tradisjon i internasjonal politisk økonomi?",
      options: ["Den er klassesentrert og ser forholdet mellom klasser på tvers av landegrenser", "Den er statssentrert og ser handel som et middel til å styrke staten", "Den er markedsorientert, men mener gevinsten må omfordeles av staten etterpå", "Den mener at all internasjonal handel bør erstattes av nasjonal selvforsyning"],
      explanation: "Riktig svar er klassesentreringen: analyseenheten er klasser på tvers av land, ikke stater. Statssentreringen tilhører merkantilismen, og sammenblandingen av de to er en dokumentert trekkgrunn fordi begge kritiserer frihandelens løfter.",
    },
    {
      question: "Hva er avhengighetsteoriens hovedpåstand?",
      options: ["At strukturen i handelen holder noen regioner i en varig posisjon i verdikjeden", "At fattige land blir fattigere av all handel med rikere land", "At stater bør gjøre seg minst mulig avhengige av enkeltstående handelspartnere", "At bistand skaper avhengighet som hindrer selvstendig økonomisk utvikling"],
      explanation: "Riktig svar er at strukturen i handelen — hva hver part spesialiserer seg i og hvor verdiskapingen ligger i kjeden — har varige virkninger. Påstanden om at all handel gjør fattige land fattigere, er en overdrivelse tradisjonen ikke hevder. Alternativet om å unngå avhengighet er merkantilistisk.",
    },
    {
      question: "Hvilken tradisjon i internasjonal politisk økonomi svarer til realismen?",
      options: ["Merkantilismen, fordi begge er statssentrerte og måler gevinster relativt", "Den økonomiske liberalismen, fordi begge legger vekt på institusjoner", "Marxismen, fordi begge er kritiske til påstanden om at frihandel tjener alle", "Ingen av dem, fordi tradisjonene og perspektivene er helt atskilte apparater"],
      explanation: "Riktig svar er merkantilismen: samme aktørsyn og samme gevinstlogikk. Merk at koblingen er en parallell og ikke en identitet — merkantilismen er en tradisjon i internasjonal politisk økonomi med egne virkemidler, realismen et generelt perspektiv på internasjonal politikk.",
    },
    {
      question: "Hvorfor har marxismen ingen søsterparallell i teori-triaden?",
      options: ["Fordi den bytter analyseenhet fra stat til klasse", "Fordi den er en politisk ideologi og ikke et analytisk perspektiv", "Fordi den bare behandler økonomiske og ikke sikkerhetspolitiske spørsmål", "Fordi den ble utviklet før de tre perspektivene i teori-triaden oppsto"],
      explanation: "Riktig svar er at den bytter analyseenhet: der de andre ser stater eller bedrifter, ser marxismen klasser på tvers av land. Det er en presis observasjon som viser at man har forstått hva koblingen mellom tradisjon og perspektiv består i.",
    },
    {
      question: "Hva er mekanismen bak at beskyttelse er lettere å innføre enn å fjerne?",
      options: ["Tapene ved åpenhet er konsentrerte og organiserte, gevinstene spredte og små hver", "Toll gir staten inntekter som er politisk vanskelige å erstatte med annen skatt", "Internasjonale handelsavtaler gjør enhver endring juridisk tung å gjennomføre", "Forbrukere merker sjelden prisendringer på enkeltvarer og reagerer derfor ikke"],
      explanation: "Riktig svar er at konsentrerte tap mobiliserer mens spredte gevinster ikke gjør det. Det er et kollektivt handlingsproblem på innenrikspolitisk arena, og mekanismen er organisasjonskostnader. De øvrige alternativene kan spille inn, men er ikke hovedmekanismen.",
    },
    {
      question: "Hva er feil #6 i bokas feilregister?",
      options: ["Å føre et rent økonomisk resonnement uten å koble det til noe politisk", "Å behandle bare én tradisjon når oppgaven ber om minst to", "Å blande merkantilisme og marxisme fordi begge kritiserer frihandel", "Å svare på flere kortsvarsspørsmål enn oppgaven ber om"],
      explanation: "Riktig svar er økonomisk resonnement uten politisk kobling. For få tradisjoner er feil #4, sammenblanding av tradisjoner hører under feil #11, og for mange kortsvar er feil #10. Vaksinen mot feil #6 er én setning: hvem har interesse av dette utfallet, og hvilken kanal har de inn?",
    },
    {
      question: "Hva er proteksjonisme?",
      options: ["Politikk som skjermer hjemlig produksjon mot utenlandsk konkurranse", "En tradisjon i internasjonal politisk økonomi på linje med merkantilismen", "Et forbud mot at utenlandske selskaper eier virksomhet i landet", "En handelspolitikk der staten selv står for eksporten av strategiske varer"],
      explanation: "Riktig svar er politikk som skjermer hjemlig produksjon, gjennom toll, kvoter, subsidier eller tekniske krav. Proteksjonisme er et virkemiddel, ikke en tradisjon — både merkantilistisk og marxistisk orientert analyse kan forsvare det, med helt ulike begrunnelser.",
    },
    {
      question: "Hva sier den økonomiske liberalismen om fordelingsvirkningene av handel?",
      options: ["At handel skaper tapere innenlands, men at gevinsten er stor nok til å kompensere dem", "At handel gagner alle grupper innenfor et land som deltar i den", "At fordelingsvirkninger er et rent innenrikspolitisk spørsmål uten faglig interesse", "At tapere ved handel bør beskyttes med toll inntil de har omstilt seg"],
      explanation: "Riktig svar er at det finnes tapere, men at gevinsten er stor nok til at de kan kompenseres. Om kompensasjonen faktisk gis, er en politisk beslutning — og det er der tradisjonen møter sin sterkeste innvending. At handel er positivsum for land, betyr ikke at den er det for alle inne i dem.",
    },
    {
      question: "Hvor ofte har tradisjonene i internasjonal politisk økonomi vært eget eksamensspørsmål?",
      options: ["I 2 av 16 sett, og i 0 av de 7 siste", "I 8 av 16 sett, og i 3 av de 7 siste", "I 5 av 16 sett, og i 1 av de 7 siste", "I 12 av 16 sett, og i 6 av de 7 siste"],
      explanation: "Riktig svar er 2 av 16 sett og 0 av de 7 siste, nemlig H2018 ordinær og H2018 utsatt. Tradisjonene er likevel fundament for hele delen om internasjonal politisk økonomi, der beslektede temaer som handelsregimet er i 8 av 16 sett.",
    },
    {
      question: "Hva menes med at merkantilismen bygger på makt over marked?",
      options: ["At markedet er et redskap staten kan bruke, ikke en orden staten må tilpasse seg", "At staten bør eie de viktigste bedriftene i de næringene som regnes som strategiske", "At offentlig sektor bør være stor og omfordele inntekt innenlands", "At staten bør fastsette prisene på varer som regnes som livsviktige"],
      explanation: "Riktig svar er at markedet er statens redskap. Dette handler om statens forhold til det internasjonale markedet, ikke om hvor stor offentlig sektor er — en stat kan ha et omfattende velferdssystem og likevel føre en gjennomført liberal handelspolitikk utad.",
    },
    {
      question: "Hvem er det stabile norske ankeret for tradisjonene i internasjonal politisk økonomi?",
      options: ["Claes, Hveem og Tranøy, Global politisk økonomi", "Hovi og Underdal, Internasjonal politikk", "Claes og Førland, Europeisk integrasjon", "Grieco, Ikenberry og Mastanduno, Introduction to International Relations"],
      explanation: "Riktig svar er Claes, Hveem og Tranøy, som dekker handel, komparative fortrinn og tradisjonene. Hovi og Underdal er ankeret for statssystem og internasjonale organisasjoner, Claes og Førland for EU-stoffet. Begrepene er stabile, men forfatterkoblingene rullerer — sjekk gjeldende pensumliste.",
    },
  ],
  'stv1200-2-1': [
    {
      question: "Hva betyr anarki i internasjonal politikk?",
      options: ["Fravær av en overordnet myndighet over statene", "Fravær av bindende regler mellom statene i systemet", "Fravær av forutsigbarhet i hvordan stater vil handle", "Fravær av en jevn maktfordeling mellom de sterkeste statene"],
      explanation: "Riktig svar er fravær av en overordnet myndighet over statene. Anarki er ikke det samme som fravær av regler: systemet er gjennomregulert, det som mangler er en håndhever over partene. Forutsigbarhet og maktfordeling er andre spørsmål som ikke inngår i definisjonen.",
    },
    {
      question: "Hva kalles ordensprinsippet som gjelder innenfor en stat?",
      options: ["Hierarki, der en øverste myndighet kan avgjøre uten partenes samtykke", "Suverenitet, der hver enhet har rett til å bestemme over eget område", "Selvhjelp, der hver enhet må sørge for sin egen sikkerhet alene", "Balansering, der enhetene bygger motvekt mot den som blir sterkest"],
      explanation: "Riktig svar er hierarki, der en øverste myndighet kan avgjøre uten partenes samtykke. Suverenitet beskriver statens status i systemet av stater, ikke ordningen innad, mens selvhjelp og balansering er følger av anarki og hører til det motsatte ordensprinsippet.",
    },
    {
      question: "Hva er håndhevelsesproblemet i folkeretten?",
      options: ["At den mangler tvungen domsmyndighet og en håndhever over partene", "At den bare gjelder de statene som er medlemmer av en organisasjon", "At den endres for raskt til at statene rekker å tilpasse seg reglene", "At den gir ulike rettigheter til store og små stater i samme sak"],
      explanation: "Riktig svar er at folkeretten mangler tvungen domsmyndighet og en håndhever over partene; den bygger på traktater, sedvane og staters samtykke. At den mangler tvungen håndheving betyr ikke at den ikke er rett — den håndheves desentralisert, gjennom omdømmekostnader og press.",
    },
    {
      question: "Hvorfor er orden og anarki forenlige størrelser?",
      options: ["Fordi orden kan oppstå av gjensidig interesse uten en håndhever over partene", "Fordi de sterkeste statene i praksis håndhever reglene på vegne av alle", "Fordi de fleste stater har bundet seg til de samme grunnleggende verdiene", "Fordi internasjonale domstoler har fått stadig videre myndighet over tid"],
      explanation: "Riktig svar er at orden kan oppstå av gjensidig interesse og gjentatt samhandling uten en håndhever over partene. Å tro at orden krever en håndhever, er nettopp det som fører til den klassiske feilen der anarki gjengis som kaos.",
    },
    {
      question: "Hva menes med indre suverenitet?",
      options: ["Statens rett til å bestemme selv innenfor egne grenser", "Statens evne til å håndheve sine egne lover i hele landet", "Statens rett til å inngå avtaler med andre stater som likeverdig part", "Statens plikt til å beskytte egen befolkning mot ytre angrep"],
      explanation: "Riktig svar er statens rett til å bestemme selv innenfor egne grenser. Evnen til å håndheve er et spørsmål om faktisk kapasitet og ikke om rettslig status, og retten til å inngå avtaler som likeverdig part er den ytre siden av suvereniteten.",
    },
    {
      question: "Hvorfor er suverenitet ikke det samme som makt?",
      options: ["Fordi suverenitet er en rettslig status, mens makt er en faktisk ressurs", "Fordi suverenitet gjelder innad, mens makt bare utøves i forhold til andre", "Fordi suverenitet kan avstås ved traktat, mens makt bare kan tapes i konflikt", "Fordi suverenitet forutsetter anerkjennelse, mens makt forutsetter kapasitet"],
      explanation: "Riktig svar er at suverenitet er en rettslig status, mens makt er en faktisk ressurs. En liten stat med svært begrenset spillerom er like suveren som en stormakt, på samme måte som en person uten penger har de samme rettighetene som en med.",
    },
    {
      question: "Hva innebærer anerkjennelse som del av suverenitetsbegrepet?",
      options: ["At suverenitet også er en status andre stater tildeler en enhet", "At en stat må godtas av alle sine naboland for å kunne inngå avtaler", "At en stat mister suvereniteten dersom den mister kontroll over territoriet", "At en stat må være medlem av de store internasjonale organisasjonene"],
      explanation: "Riktig svar er at suverenitet også er en status andre stater tildeler, gjennom diplomatiske forbindelser og traktater. Effektiv kontroll og anerkjennelse er to forskjellige ting, og de faller ikke alltid sammen — en enhet kan ha kontroll uten å være anerkjent.",
    },
    {
      question: "Hva er selvhjelp i internasjonal politikk?",
      options: ["At hver stat i siste instans selv må sørge for sin egen sikkerhet", "At stater helst løser konflikter uten å blande inn tredjeparter", "At stater bare inngår avtaler de tjener mer på enn motparten gjør", "At stater må bygge opp egne styrker framfor å stole på allianser"],
      explanation: "Riktig svar er at hver stat i siste instans selv må sørge for sin egen sikkerhet, siden ingen over den er både forpliktet og i stand til å gjøre det. Selvhjelp utelukker ikke allianser: en allianse er selvhjelp med andre midler, ikke et unntak fra den.",
    },
    {
      question: "Hvordan forholder allianser seg til selvhjelp?",
      options: ["De er en form for selvhjelp, siden garantien kommer fra en part under anarki", "De erstatter selvhjelp, siden ansvaret overføres til alliansen som helhet", "De opphever selvhjelp innad, men ikke overfor stater utenfor alliansen", "De er uavhengige av selvhjelp, siden allianser inngås av politiske grunner"],
      explanation: "Riktig svar er at allianser er en form for selvhjelp, fordi garantien kommer fra en part som selv står under anarki og selv gjør sine avveininger den dagen den skal innfris. Ansvaret kan derfor aldri overføres endelig, og det er nettopp poenget i begrepet.",
    },
    {
      question: "Hva er forskjellen på indre og ytre balansering?",
      options: ["Om staten bygger opp egen kapasitet eller knytter seg til andre stater", "Om staten svarer på en trussel fra en nabo eller fra en makt lenger unna", "Om staten offentliggjør tiltaket eller holder det skjult for motparten", "Om staten svarer på en trussel som finnes eller på en den venter senere"],
      explanation: "Riktig svar er om staten bygger opp egen kapasitet eller knytter seg til andre stater. Begge er balansering med samme mål; de skiller seg i risiko, siden egen oppbygging kan komme for sent og allianser hviler på et løfte som ikke kan håndheves.",
    },
    {
      question: "Hva er motstykket til balansering som strategi overfor en voksende makt?",
      options: ["Å slutte seg til den voksende makten i håp om beskyttelse eller andel", "Å trekke seg ut av alle allianser og satse på nøytralitet i konflikter", "Å bygge opp egen kapasitet raskere enn den voksende makten gjør", "Å bringe saken inn for en internasjonal domstol som begge har godtatt"],
      explanation: "Riktig svar er å slutte seg til den voksende makten i stedet for å bygge motvekt mot den. De to strategiene ser like ut fordi begge er allianser, men logikken er motsatt: den ene søker trygghet i motvekt, den andre i tilslutning.",
    },
    {
      question: "Hvorfor arbeider små stater ofte aktivt for bindende internasjonale regler?",
      options: ["Fordi regler som gjelder alle er den billigste motvekten mot overlegen kapasitet", "Fordi de har mindre å tape på å binde seg enn det store stater har", "Fordi de i mindre grad enn stormakter er utsatt for sikkerhetstrusler", "Fordi de tradisjonelt legger større vekt på felles verdier enn på egen sikkerhetsinteresse"],
      explanation: "Riktig svar er at regler som gjelder alle, er den billigste motvekten mot overlegen kapasitet. Analytisk er dette selvhjelp med de midlene en liten stat faktisk har, og å forklare det med verdier alene overser den forklaringen som er enklest å forsvare.",
    },
    {
      question: "Hva er samarbeidsutfordringen under anarki?",
      options: ["At en avtale kan gagne begge og likevel forskyve styrkeforholdet mellom dem", "At stater sjelden blir enige om hvordan den felles gevinsten skal beregnes og fordeles", "At avtaler mellom stater ikke er bindende uten en godkjennende domstol", "At stormakter kan blokkere avtaler som svekker deres egen posisjon"],
      explanation: "Riktig svar er at en avtale kan gagne begge og likevel forskyve styrkeforholdet, slik at den som vinner minst kan komme dårligere ut sikkerhetsmessig. Utfordringen skyldes at målestokken er relativ, ikke at partene mistror hverandre personlig.",
    },
    {
      question: "Hva skiller frykten for juks fra frykten for relative tap?",
      options: ["Den ene gjelder at avtalen ikke holdes, den andre hva som skjer når den holdes", "Den ene gjelder små stater med lite spillerom, den andre gjelder først og fremst stormaktene", "Den ene gjelder handelsavtaler, den andre gjelder avtaler om sikkerhet", "Den ene er en realistisk innvending, den andre er en liberal innvending"],
      explanation: "Riktig svar er at frykten for juks gjelder at avtalen ikke holdes, mens frykten for relative tap gjelder hva som skjer når den holdes. Skillet er avgjørende fordi institusjoner langt på vei løser det første hinderet, men ikke det andre.",
    },
    {
      question: "Hva menes med skyggen av framtiden?",
      options: ["At utsikten til gjentatte møter gjør det dyrere å bryte en avtale nå", "At usikkerhet om andres framtidige hensikter hindrer samarbeid i dag", "At stater vegrer seg for avtaler som binder etterfølgende regjeringer", "At en avtale blir mer stabil jo lenger den allerede har vart uten brudd"],
      explanation: "Riktig svar er at utsikten til gjentatte møter gjør det dyrere å bryte en avtale nå, siden gevinsten ved ett brudd må veies mot tapet av alle framtidige runder. Det er regnestykket som endres, ikke godviljen — å forklare dette med tillit er upresist.",
    },
    {
      question: "Hva hevder liberal institusjonalisme om institusjoner under anarki?",
      options: ["At de har egenvekt fordi de gjør atferd synlig og senker transaksjonskostnader", "At de opphever anarkiet på de områdene der medlemmene har gitt dem myndighet", "At de i hovedsak gjenspeiler interessene til de mektigste medlemmene", "At de over tid endrer medlemmenes forestillinger om hvem de selv er"],
      explanation: "Riktig svar er at institusjoner har egenvekt fordi de gjør atferd synlig og senker transaksjonskostnader. De opphever ikke anarkiet og kan ikke overstyre et medlem; påstanden om at de gjenspeiler de mektigste er realismens, og påstanden om endrede forestillinger er konstruktivismens.",
    },
    {
      question: "Hva er realismens innvending mot liberal institusjonalisme på samarbeidsspørsmålet?",
      options: ["At institusjoner ikke kan fjerne frykten for at avtalen forskyver styrkeforholdet", "At institusjoner ikke kan hindre at medlemmene bryter de avtalene de selv har inngått", "At institusjoner er for kostbare til å opprettholde over lengre tidsrom", "At institusjoner tar for lang tid å bygge til å løse akutte konflikter"],
      explanation: "Riktig svar er at institusjoner ikke kan fjerne frykten for at avtalen forskyver styrkeforholdet, siden det problemet oppstår når avtalen holdes. Å hindre brudd er derimot noe institusjoner faktisk er gode til, gjennom kontroll og rapportering.",
    },
    {
      question: "Hva hevder konstruktivismen om anarkiets betydning?",
      options: ["At fraværet av en håndhever er likt for alle, mens betydningen av det varierer", "At anarkiet forsvinner når statene slutter å forholde seg til det som gitt", "At anarkiet er mindre viktig enn normer og derfor bør forlates som premiss", "At anarkiet skyldes at de internasjonale organisasjonene mangler reell myndighet over statene"],
      explanation: "Riktig svar er at fraværet av en håndhever er ett og samme faktum for alle, mens betydningen avhenger av hvordan statene forstår hverandre. Konstruktivismen benekter ikke anarkiet — den benekter at fraværet alene bestemmer atferden, og å gjengi den som en benektelse er en karikatur.",
    },
    {
      question: "Hva er realismens blindsone på anarkitemaet?",
      options: ["Den forklarer dårlig at ordninger overlever store maktskifter mellom deltakerne", "Den forklarer dårlig hvorfor stater ruster opp når nabolandet gjør det samme", "Den forklarer dårlig hvorfor små stater søker seg inn i militære allianser", "Den forklarer dårlig hvordan maktfordelingen mellom stormakter endrer seg"],
      explanation: "Riktig svar er at realismen forklarer dårlig at ordninger overlever store maktskifter, og at stater frivillig binder seg til regler som begrenser dem selv i tiår. Opprustning, allianser og endret maktfordeling er derimot forhold realismen forklarer godt.",
    },
    {
      question: "Hva er liberalismens blindsone på anarkitemaet?",
      options: ["Den undervurderer hvor raskt ordninger settes til side når sikkerheten står på spill", "Den undervurderer hvor mye transaksjonskostnader og manglende informasjon betyr for staters valg", "Den undervurderer hvor stor betydning innenrikspolitiske grupper har", "Den undervurderer hvor vanskelig det er å måle gevinsten ved en avtale"],
      explanation: "Riktig svar er at liberalismen undervurderer hvor raskt ordninger settes til side når sikkerhetsinteresser kommer i spill. Kritikken er ikke at institusjoner er virkningsløse, men at virkningen er betinget — og at betingelsen svikter i de sakene som betyr mest.",
    },
    {
      question: "Hva består anarkikjeden av, i riktig rekkefølge?",
      options: ["Definisjonen, deretter selvhjelp, deretter samarbeidsutfordringen", "Definisjonen, deretter suverenitet, deretter anerkjennelse fra andre stater", "Selvhjelp, deretter balansering, deretter maktfordelingen i systemet", "Definisjonen, deretter håndhevelsesproblemet, deretter folkerettens grenser"],
      explanation: "Riktig svar er definisjonen, deretter selvhjelp, deretter samarbeidsutfordringen. De tre er ett resonnement og ikke tre temaer: et svar som stopper ved definisjonen mangler utledningen, og et svar som hopper rett til samarbeid mangler leddet imellom.",
    },
    {
      question: "Hvilket analysenivå hører anarki primært hjemme på?",
      options: ["Systemnivå, siden det beskriver et trekk ved forholdet mellom statene", "Individnivå, siden det virker gjennom beslutningstakernes oppfatninger", "Statsnivå, siden statens innretning avgjør hvordan den møter usikkerhet", "Alle tre likt, siden anarki er en ramme og ikke en forklaringsfaktor"],
      explanation: "Riktig svar er systemnivå, siden anarki beskriver et trekk ved forholdet mellom statene og ikke ved den enkelte staten eller ved personene som styrer den. At mekanismen også virker gjennom hvordan beslutningstakere leser hverandre, gjør ikke anarki til en individnivåfaktor.",
    },
  ],
  'stv1200-2-2': [
    {
      question: "Hva er sikkerhetsdilemmaet?",
      options: ["At defensive tiltak oppfattes som offensive, så begge ruster opp uten å ville krig", "At to stater ruster opp mot hverandre fordi begge to i realiteten forbereder et angrep", "At allianser trekker flere parter inn i en opprinnelig lokal konflikt", "At stater bryter avtaler når kostnaden ved å følge dem blir for høy"],
      explanation: "Riktig svar er at defensive tiltak oppfattes som offensive, slik at begge ruster opp uten å ønske krig. To parter som ruster opp fordi begge planlegger angrep, har et kappløp uten et dilemma — det er nettopp fraværet av aggressive hensikter som gjør mekanismen interessant.",
    },
    {
      question: "Hva er mekanismen som gjør sikkerhetsdilemmaet til et dilemma?",
      options: ["At intensjoner ikke kan observeres, mens kapasitet kan", "At begge parter mangler tillit til hverandre fra tidligere konflikter", "At forsvarsbudsjetter er offentlige og derfor lette å sammenligne", "At allierte sjelden gir troverdige garantier i akutte situasjoner"],
      explanation: "Riktig svar er at intensjoner ikke kan observeres, mens kapasitet kan — og at hensikter dessuten kan endres av neste regjering. Mekanismen virker også mellom parter som stort sett stoler på hverandre, så mistillit i psykologisk forstand er ikke en forutsetning.",
    },
    {
      question: "Hvorfor planlegger stater etter motpartens kapasitet framfor etter erklæringene hennes?",
      options: ["Fordi kapasitet er observerbar og varig, mens hensikter er skjulte og foranderlige", "Fordi erklæringer sjelden er offentlige nok til å kunne kontrolleres", "Fordi kapasitet er lettere å tallfeste i et forsvarsbudsjett enn hensikter", "Fordi folkeretten krever at stater vurderer trusler ut fra faktiske forhold"],
      explanation: "Riktig svar er at kapasitet er observerbar og varig, mens hensikter er skjulte og foranderlige. Selv en fullstendig ærlig forsikring i dag binder ikke den regjeringen som sitter om ti år, og derfor er tilpasningen rasjonell selv om den utløser dilemmaet.",
    },
    {
      question: "Hva kjennetegner en opprustning som IKKE er et sikkerhetsdilemma?",
      options: ["At én part faktisk ønsker å endre situasjonen med makt", "At begge parter øker forsvarsbudsjettene sine samtidig", "At tiltakene begrunnes offentlig og varsles på forhånd", "At partene har hatt en langvarig og uløst grensetvist"],
      explanation: "Riktig svar er at én part faktisk ønsker å endre situasjonen med makt; da er den andres opprustning en riktig lesning av en reell hensikt og ikke en misforståelse. Samtidige budsjettøkninger og gamle tvister forekommer i begge situasjoner og skiller dem derfor ikke.",
    },
    {
      question: "Hva hevder spiralmodellen?",
      options: ["At opptrappingen drives av gjensidig frykt, der hvert tiltak bekrefter den andres mistanke", "At opptrappingen drives av at den ene parten ønsker å endre situasjonen", "At opptrappingen stopper av seg selv når partene har nådd samme styrke", "At opptrappingen skyldes at forsvarsindustrien og forvaltningen har interesse av økt kapasitet"],
      explanation: "Riktig svar er at opptrappingen drives av gjensidig frykt, der hvert tiltak bekrefter den andres mistanke. Forklaringen med den ene partens hensikter er avskrekkingsmodellen, og de to kan ikke begge være riktige om det samme tilfellet.",
    },
    {
      question: "Hvilket råd følger av avskrekkingsmodellen?",
      options: ["Å vise tydelig kapasitet og vilje, slik at motparten regner ut at det ikke lønner seg", "Å begrense de av egne tiltak som ser offensive ut, slik at motparten blir beroliget over tid", "Å bringe uenigheten inn for en internasjonal domstol begge har akseptert", "Å knytte seg til en større allianse framfor å bygge opp egne styrker"],
      explanation: "Riktig svar er å vise tydelig kapasitet og vilje til å svare. Rådet om å begrense tiltak som ser offensive ut, følger av spiralmodellen, og de to rådene er motsatte — det er nettopp derfor valget mellom modellene er risikabelt.",
    },
    {
      question: "Hvorfor er valget mellom spiralmodellen og avskrekkingsmodellen risikabelt?",
      options: ["Fordi valget må tas før man vet hvilken av dem som beskriver situasjonen riktig", "Fordi begge modellene gir samme råd i de fleste konkrete situasjoner", "Fordi modellene bare kan brukes på konflikter mellom omtrent jevnbyrdige parter", "Fordi valget i praksis avgjøres av allierte og ikke av staten selv"],
      explanation: "Riktig svar er at valget må tas før man vet hvilken modell som passer. Feil valg koster begge veier: velger man spiralmodellen mot en part som faktisk vil endre situasjonen, inviterer man til press; velger man avskrekking mot en redd part, driver man selv spiralen videre.",
    },
    {
      question: "Hvordan svarer defensiv realisme på om sikkerhetsdilemmaet kan dempes?",
      options: ["At det i prinsippet kan dempes, siden stater søker tilstrekkelig og ikke maksimal sikkerhet", "At det ikke kan dempes, siden ingen kan vite hvor mye makt som er nok", "At det bare kan dempes gjennom en overnasjonal myndighet med reell håndhevingsmakt overfor statene", "At det dempes av seg selv når partene har omtrent like store styrker"],
      explanation: "Riktig svar er at dilemmaet i prinsippet kan dempes, fordi defensiv realisme antar at stater søker tilstrekkelig sikkerhet og at overekspansjon straffer seg. Svaret om at ingen kan vite hvor mye makt som er nok, tilhører offensiv realisme, som leser dilemmaet som en riktig beskrivelse framfor en misforståelse.",
    },
    {
      question: "Hva er virkemåten til transparens og tillitsskapende tiltak?",
      options: ["De flytter atferd fra det uobserverbare til det observerbare", "De gjør det rettslig bindende for partene å begrense egne styrker", "De overfører kontrollen med opprustningen til en tredjepart", "De reduserer kostnaden ved å bygge opp egne forsvarsstyrker"],
      explanation: "Riktig svar er at slike tiltak flytter atferd fra det uobserverbare til det observerbare, og dermed treffer dilemmaets kjerne. De fjerner likevel ikke usikkerheten om framtidige hensikter, og derfor demper de dilemmaet framfor å oppheve det.",
    },
    {
      question: "Hvilket hinder angriper rustningskontroll med verifikasjon?",
      options: ["Frykten for juks, altså at avtalen ikke blir holdt", "Frykten for relative tap, altså at styrkeforholdet forskyves", "Usikkerheten om hva motparten vil ønske om ti eller tjue år", "Uenigheten om hvilke våpen som er defensive og hvilke som ikke er det"],
      explanation: "Riktig svar er frykten for juks: verifikasjon gjør brudd oppdagbart og dermed dyrt. Den løser ikke frykten for relative tap, siden en avtale som fryser styrkeforholdet gagner den som ligger foran — og derfor er rustningskontroll lettest mellom jevnbyrdige parter.",
    },
    {
      question: "Hvorfor har skillet mellom forsvars- og angrepsmidler betydning for dilemmaet?",
      options: ["Fordi et tydelig skille gjør at en stat kan styrke forsvaret uten å true noen", "Fordi angrepsmidler er dyrere og derfor bare tilgjengelige for stormakter", "Fordi folkeretten forbyr enkelte våpentyper og tillater andre", "Fordi forsvarsmidler krever færre soldater og dermed mindre mobilisering"],
      explanation: "Riktig svar er at et tydelig skille lar en stat styrke forsvaret uten å true noen, slik at dilemmaet svekkes. Skillet er som regel uklart, og spørsmålet gjelder hva et middel kan brukes til — ikke hva det var ment til da det ble anskaffet.",
    },
    {
      question: "Hva er realismens innvending mot at institusjoner kan dempe sikkerhetsdilemmaet?",
      options: ["At ingen stat vil binde seg til gjennomsiktighet i det som avgjør egen overlevelse", "At institusjoner sjelden får nok medlemmer til å dekke hele regionen", "At institusjoner ikke har egne midler til å kontrollere at avtaler holdes", "At institusjoner tar for lang tid å bygge opp til å kunne virke i en akutt sikkerhetskrise"],
      explanation: "Riktig svar er at ingen stat vil binde seg til gjennomsiktighet i de spørsmålene som avgjør dens egen overlevelse. Uenigheten gjelder derfor ikke om institusjoner virker, men hvor de virker — godt i de sakene som betyr minst, dårlig i de som betyr mest.",
    },
    {
      question: "Hva er konstruktivismens svar på hvordan sikkerhetsdilemmaet kan opphøre?",
      options: ["At partene slutter å regne med at makt kan brukes mellom dem", "At partene inngår en bindende avtale om gjensidig innsyn i styrkene", "At partene overlater tvisteløsning til en organisasjon de begge er med i", "At partene oppnår så jevn styrke at ingen kan vinne på å angripe"],
      explanation: "Riktig svar er at partene slutter å regne med at makt kan brukes mellom dem; da mister motpartens kapasitet sin truende betydning selv om anarkiet består. Avtaler om innsyn er liberalismens svar, som endrer kostnadene framfor å endre hvem partene er for hverandre.",
    },
    {
      question: "Hva menes med maktbalanse forstått som en tilstand?",
      options: ["At maktressursene er noenlunde jevnt fordelt, slik at ingen kan dominere", "At stater aktivt bygger motvekt mot den som er i ferd med å bli for sterk", "At antallet stormakter i systemet holder seg stabilt over lengre tid", "At allianser er utformet slik at ingen enkelt stat kan skifte side"],
      explanation: "Riktig svar er at maktressursene er noenlunde jevnt fordelt, slik at ingen kan dominere. Beskrivelsen av at stater aktivt bygger motvekt, er maktbalanse forstått som politikk — tilstanden er et utfall, politikken er en handling.",
    },
    {
      question: "Hva er forskjellen på maktbalanse og polaritet?",
      options: ["Maktbalanse gjelder fordelingen av makt, polaritet gjelder antallet poler", "Maktbalanse gjelder militær styrke, polaritet gjelder økonomisk tyngde", "Maktbalanse er en handling, polaritet er en beskrivelse av allianser", "Maktbalanse gjelder regioner, polaritet gjelder systemet som helhet"],
      explanation: "Riktig svar er at maktbalanse gjelder fordelingen av makt og polaritet antallet poler. De henger sammen, men er ikke synonymer: et bipolart system kan være svært ubalansert, og et multipolart kan være jevnt fordelt.",
    },
    {
      question: "Hvorfor forklarer ikke polaritet et utfall alene?",
      options: ["Fordi det er en beskrivelse som først blir forklaring med et mellomledd", "Fordi antallet poler sjelden lar seg fastslå med tilstrekkelig sikkerhet", "Fordi polaritet endrer seg for raskt til å kunne kobles til enkeltutfall", "Fordi polaritet bare gjelder stormakter og ikke resten av statssystemet"],
      explanation: "Riktig svar er at polaritet er en beskrivelse som først blir en forklaring når man legger til mekanismen — for eksempel at flere poler gjør det vanskeligere å beregne hvem som svarer på hva. Uten mellomleddet har man gjengitt en påstand i stedet for å drøfte den.",
    },
    {
      question: "Hva er argumentet for at bipolaritet gir stabilitet?",
      options: ["At få aktører gir oversiktlighet, slik at feilberegninger blir sjeldnere", "At to omtrent like sterke parter alltid vil avskrekke hverandre", "At koalisjoner kan skifte raskt nok til å hindre at en enkelt konflikt vokser seg altomfattende", "At de to polene har felles interesse av å hindre nye stormakter"],
      explanation: "Riktig svar er at få aktører gir oversiktlighet, slik at feilberegninger blir sjeldnere. Argumentet om skiftende koalisjoner tilhører den motsatte posisjonen, som taler for multipolaritet — og debatten er uavgjort, blant annet fordi antallet historiske systemer er lite.",
    },
    {
      question: "Hva er forskjellen på sikkerhetsdilemmaet og maktforskyvning som konfliktforklaring?",
      options: ["Den ene gjelder usikkerhet om hensikter nå, den andre endring i styrke over tid", "Den ene gjelder to stater, den andre gjelder systemet som helhet", "Den ene er en realistisk forklaring, den andre er en liberal forklaring", "Den ene gjelder militære forhold, den andre gjelder økonomisk kappløp"],
      explanation: "Riktig svar er at sikkerhetsdilemmaet gjelder usikkerhet om hensikter her og nå, mens maktforskyvning gjelder at styrkeforholdet endrer seg over tid og at ingen kan binde seg troverdig til framtidig atferd. Begge er systemnivåforklaringer, og begge gir utfall ingen ønsket.",
    },
  ],
  'stv1200-2-3': [
    {
      question: "Hva kjennetegner det westfalske statssystemet?",
      options: ["Suverene stater med udelt myndighet innenfor et avgrenset territorium", "Et system der de sterkeste statene garanterer for de svakestes sikkerhet", "Et system der internasjonale organisasjoner fordeler myndighet mellom stater", "Et system der grensene mellom stater følger folkegruppenes utbredelse"],
      explanation: "Riktig svar er suverene stater med udelt myndighet innenfor et avgrenset territorium, uten noen myndighet over dem. Fredsslutningene i Westfalen i 1648 brukes som symbolsk merkepæl, men ordningen vokste fram gradvis og ble ikke innført ved ett vedtak.",
    },
    {
      question: "Hva skiller et statssystem fra et imperium?",
      options: ["At myndigheten er udelt innenfor grensen framfor lagdelt og avtakende utover", "At statene i et statssystem er omtrent like store og like mektige", "At statssystemet bygger på skriftlige traktater framfor på sedvane", "At imperier alltid oppstår ved erobring mens stater oppstår ved avtale"],
      explanation: "Riktig svar er at myndigheten er udelt innenfor grensen framfor lagdelt og gradvis avtakende utover. Det er skillet mellom hierarki og anarki som ordensprinsipp, satt inn i historien, og det handler ikke om statenes størrelse eller om hvordan de oppsto.",
    },
    {
      question: "Hvilke fire kjennetegn har en stat i faglig forstand?",
      options: ["Territorium, befolkning, effektiv styring og anerkjennelse fra andre stater", "Territorium, felles språk, egen valuta og medlemskap i FN", "Befolkning, grunnlov, folkevalgt forsamling og eget forsvar", "Territorium, befolkning, felles historie og en anerkjent nasjonalidentitet"],
      explanation: "Riktig svar er territorium, befolkning, effektiv styring og anerkjennelse fra andre stater. Felles språk, historie og identitet kjennetegner en nasjon, ikke en stat, og de to faller sammen i noen tilfeller og ikke i andre.",
    },
    {
      question: "Hva er forskjellen på en stat og en nasjon?",
      options: ["En stat er en styringsordning, en nasjon er et fellesskap som ser seg som ett folk", "En stat er anerkjent av andre stater, en nasjon er anerkjent av sin egen befolkning", "En stat har grenser, en nasjon har medlemmer spredt over flere land", "En stat er en juridisk enhet, en nasjon er en økonomisk enhet"],
      explanation: "Riktig svar er at en stat er en styringsordning over et territorium, mens en nasjon er et fellesskap av mennesker som oppfatter seg som ett folk. Skillet er nødvendig for å kunne skrive presist om nasjonalisme og om stater med flere folkegrupper.",
    },
    {
      question: "Hva slags norm er ikke-innblandingsnormen?",
      options: ["En konstituerende norm, siden den skaper kategorien indre anliggende", "En regulerende norm, siden den styrer hva stater kan gjøre mot hverandre", "En sedvanerettslig norm, siden den ikke er nedfelt i noen traktat", "En rådgivende norm, siden ingen instans kan håndheve den mellom stater"],
      explanation: "Riktig svar er at den er konstituerende: den skaper selve kategorien indre anliggende og dermed rollen som suveren stat. En regulerende norm styrer atferden innenfor gitte roller, og distinksjonen forklarer hvorfor endringer i ikke-innblanding er så inngripende.",
    },
    {
      question: "Hvordan ble statssystemet utbredt til hele verden?",
      options: ["Gjennom kolonisering og deretter avkolonisering, der nye stater overtok grensene", "Gjennom frivillig etterlikning av den europeiske statsmodellen i andre deler av verden", "Gjennom opprettelsen av FN, som forutsatte at alle medlemmer var stater", "Gjennom handelsavtaler som krevde faste grenser for å kunne håndheves"],
      explanation: "Riktig svar er gjennom kolonisering og deretter avkolonisering, der de nye statene i hovedsak overtok grensene og statsformen kolonimaktene hadde etablert. Det forklarer også hvorfor grenser mange steder skjærer på tvers av folkegrupper.",
    },
    {
      question: "Hvilken av kildene til press på suvereniteten rammer den rettslige myndigheten?",
      options: ["Overnasjonalitet, der staten avstår myndighet til et organ som kan binde den", "Globalisering, der økonomiske sammenhenger krysser landegrensene", "Transnasjonale aktører, som opererer utenfor statlig kontroll", "Teknologisk utvikling, som gjør informasjonsstrømmer over grensene vanskelige å styre"],
      explanation: "Riktig svar er overnasjonalitet, som er en frivillig avståelse av rettslig myndighet. De øvrige rammer i hovedsak den faktiske handlefriheten uten å røre den rettslige statusen, og å slå dem sammen er den vanligste kilden til upresise svar om dette temaet.",
    },
    {
      question: "Hvorfor er suverenitetsavståelse ved traktat ikke uten videre systemendring?",
      options: ["Fordi avståelsen skjer ved at staten bruker sin suverenitet og kan sies opp", "Fordi traktater sjelden gjelder mer enn ett avgrenset saksområde", "Fordi avståelsen bare gjelder så lenge regjeringen som inngikk den sitter", "Fordi ingen internasjonal domstol kan håndheve traktaten mot et medlem"],
      explanation: "Riktig svar er at avståelsen skjer ved at staten bruker sin suverenitet, og at den i prinsippet er reversibel. Motargumentet er reelt og hører med: er avståelsen omfattende nok og reverseringen dyr nok, blir frivilligheten formell.",
    },
    {
      question: "Hva menes med endring av systemet, til forskjell fra endring i systemet?",
      options: ["At enhetene eller ordensprinsippet skiftes ut, ikke bare maktfordelingen", "At endringen skjer raskt og samtidig i flere deler av verden", "At endringen er varig og ikke lar seg reversere ved nye avtaler", "At endringen berører alle stater og ikke bare de mektigste"],
      explanation: "Riktig svar er at enhetene ikke lenger er suverene stater, eller at ordensprinsippet ikke lenger er anarki. Endring i systemet er derimot forskyvninger innenfor samme logikk: ny maktfordeling, nye organisasjoner, flere regler.",
    },
    {
      question: "Hvilke tre bestanddeler skiller faget mellom når det analyserer et system?",
      options: ["Enhetene, ordensprinsippet og fordelingen av kapabiliteter", "Statene, organisasjonene og de transnasjonale aktørene", "Territoriet, befolkningen og styringsordningen i hver enhet", "Reglene, håndhevingen og tvisteløsningen mellom enhetene"],
      explanation: "Riktig svar er enhetene, ordensprinsippet og fordelingen av kapabiliteter. Den siste endrer seg hele tiden og er det polaritetsdebatten handler om, mens endring i de to første er sjelden og langt mer dyptgripende.",
    },
    {
      question: "Hva er terskelspørsmålet i debatten om statssystemets endring?",
      options: ["Hva som måtte ha skjedd for at vi skulle si at systemet var erstattet", "Hvor mange stater som må avstå myndighet før endringen er reell", "Hvor lang tid en utvikling må vare før den regnes som varig endring", "Hvilken av de tre bestanddelene som er viktigst for systemets stabilitet"],
      explanation: "Riktig svar er hva som måtte ha skjedd for at vi skulle si at systemet var erstattet. Grepet gjør konklusjonen etterprøvbar uansett hvilken vei den peker, og den som stiller spørsmålet kan like gjerne konkludere med at terskelen nærmer seg.",
    },
    {
      question: "Hvordan leser realismen påstanden om at statssystemet er i endring?",
      options: ["Som endring i systemet: enhetene og ordensprinsippet står, maktfordelingen skifter", "Som endring av systemet, siden organisasjonene har fått myndighet som binder medlemmene", "Som en påstand uten innhold, siden systemer per definisjon ikke kan endres", "Som en endring drevet av normer framfor av statenes egne beslutninger"],
      explanation: "Riktig svar er at realismen leser det som endring i systemet: enhetene er fortsatt stater, ordensprinsippet er fortsatt anarki, og det som skifter er fordelingen av kapabiliteter. Realismen benekter ikke at organisasjonene finnes eller gjør noe — den benekter at de har flyttet ordensprinsippet.",
    },
    {
      question: "Hva hevder liberalismen om suverenitet i lys av tett integrasjon?",
      options: ["At den blir mer en pakke av myndigheter som forvaltes på flere nivåer", "At den forsvinner gradvis etter hvert som overnasjonale organer vokser", "At den blir viktigere, siden statene må forsvare den mot organisasjonene", "At den bare består på papiret mens organisasjonene tar de reelle valgene"],
      explanation: "Riktig svar er at suverenitet blir mer en pakke av myndigheter som kan deles opp og forvaltes på ulike nivåer. Liberalismen hevder ikke at staten er på vei ut, og å tilskrive tradisjonen påstanden om statens bortgang er å gi den et poeng den ikke har.",
    },
    {
      question: "Hva er konstruktivismens særegne bidrag til debatten om statssystemets endring?",
      options: ["At innholdet i rollen som suveren stat kan endres uten at strukturen skiftes ut", "At endring bare kan skje når en ny organisasjon får bindende myndighet", "At statssystemet er en forestilling som opphører når statene slutter å tro på den", "At endring alltid drives av forskyvninger i den økonomiske maktfordelingen"],
      explanation: "Riktig svar er at innholdet i rollen som suveren stat kan endres uten at enhetene eller ordensprinsippet skiftes ut. Det er et annet poeng enn liberalismens: liberalismen peker på ordninger som endrer kostnadene, konstruktivismen på forventninger som endrer hva en stat kan gjøre.",
    },
    {
      question: "Hva er realismens blindsone på spørsmålet om statssystemets endring?",
      options: ["Den forklarer dårlig hvorfor stater bygger ordninger som er svært dyre å forlate", "Den forklarer dårlig hvorfor maktfordelingen mellom stormakter endrer seg", "Den forklarer dårlig hvorfor stater ruster opp når naboene gjør det samme", "Den forklarer dårlig hvorfor små stater søker inn i internasjonale organisasjoner"],
      explanation: "Riktig svar er at realismen forklarer dårlig hvorfor stater bygger ordninger som binder dem selv i tiår og som fortsetter å virke etter at maktforholdet har flyttet seg. Endret maktfordeling, opprustning og småstaters institusjonssøking forklarer den derimot godt.",
    },
    {
      question: "Hvilken feil er det å ramse opp internasjonale organisasjoner i stedet for å drøfte systemet?",
      options: ["Institusjonsoversikt i stedet for svar på det faktiske spørsmålet", "Manglende distinksjoner mellom nærliggende begreper i besvarelsen", "Ensidig behandling av en oppgave som ber om to forhold", "Bruk av bare én teoritradisjon der oppgaven ber om minst to"],
      explanation: "Riktig svar er institusjonsoversikt i stedet for svar på det faktiske spørsmålet. En oppramsing av hvilke organisasjoner som finnes og hva de gjør, er ikke en analyse av systemet — utviklingstrekkene er ikke omstridte, det er tolkningen som er oppgaven.",
    },
  ],
  'stv1200-3-1': [
    {
      question: "Hva betyr det at krigsdefinisjonens tre elementer må være oppfylt samtidig?",
      options: ["At konflikt, væpnet vold over terskelen og organiserte aktører alle må være til stede", "At uforenlighet, krigserklæring og bruk av regulære styrker alle må være til stede", "At territorielt krav, brutte forhandlinger og varig voldsnivå alle må være til stede", "At to stater, folkerettsbrudd og tap av liv i kamphandlinger alle må være til stede"],
      explanation: "Riktig svar er at konflikt, væpnet vold over terskelen og organiserte aktører alle må være til stede. Krigserklæring inngår ikke i den faglige definisjonen, og folkerettsbrudd er en rettslig vurdering som ikke hører hjemme i en empirisk kategori. Alternativet om territorielt krav gjør ett stridstema om til et definisjonskrav.",
    },
    {
      question: "Hva er forskjellen mellom en konflikt og en krig i faglig forstand?",
      options: ["Konflikten er den underliggende uenigheten, krigen er én måte å bære den på", "Konflikten gjelder ikke-militære forhold, krigen gjelder alltid territorium", "Konflikten er avgrenset i tid, krigen varer til en av partene gir opp", "Konflikten står mellom stater, krigen kan også omfatte ikke-statlige grupper"],
      explanation: "Riktig svar er at konflikten er den underliggende uenigheten, mens krigen er én måte å bære den på. Konflikter kan vare i århundrer uten et eneste skudd, og de aller fleste av dem blir aldri kriger. At bare stater kan stå i konflikt er galt: også borgerkriger springer ut av konflikter.",
    },
    {
      question: "Hva krever aktørelementet i krigsdefinisjonen?",
      options: ["At partene har en kommandostruktur som kan gi ordre og inngå avtaler", "At partene er anerkjent av andre stater som legitime parter i konflikten", "At partene har regulære militære styrker under statlig kontroll", "At partene har uttalt et krav som den andre siden har avvist offentlig"],
      explanation: "Riktig svar er at partene må ha en kommandostruktur som kan gi ordre og inngå avtaler. Kravet gjelder struktur, ikke anerkjennelse eller legitimitet: en opprørsbevegelse med kommandostruktur er en organisert aktør selv om ingen stat anerkjenner den. Det er nettopp derfor borgerkriger regnes som kriger.",
    },
    {
      question: "Hvilken terskel bruker Correlates of War, og hvordan måler datasettet?",
      options: ["Minst 1000 kampdøde, målt binært for hele konflikten under ett", "Minst 25 kampdøde i året, målt kontinuerlig fra år til år", "Minst 1000 kampdøde i et enkelt år, målt på to atskilte nivåer", "Minst 100 kampdøde per part, målt symmetrisk for begge sider"],
      explanation: "Riktig svar er minst 1000 kampdøde, målt binært for hele konflikten under ett. Terskelen på 1000 i et enkelt år er UCDPs og PRIOs krigsnivå, ikke COWs, og de to er lette å blande. COW har bare ett nivå, mens UCDP og PRIO har to.",
    },
    {
      question: "Hva er terskelen for væpnet konflikt hos UCDP og PRIO?",
      options: ["Minst 25 kampdøde i løpet av ett kalenderår", "Minst 1000 kampdøde regnet over hele forløpet", "Minst 100 kampdøde i året hos den svakeste parten", "Minst 25 kampdøde per måned i en sammenhengende periode"],
      explanation: "Riktig svar er minst 25 kampdøde i løpet av ett kalenderår. Datasettet har to nivåer: væpnet konflikt fra 25 kampdøde i året, og krig fra 1000 kampdøde i et enkelt år. Terskelen regnet over hele forløpet er COWs framgangsmåte og hører til den binære målingen.",
    },
    {
      question: "Hva omfatter begrepet kampdøde i krigsdatasettene?",
      options: ["Dem som dør i selve kamphandlingene, ikke av følgevirkninger", "Alle som dør i konfliktområdet mens kamphandlingene pågår", "Alle militære tap, uansett om de skjer i kamp eller ikke", "Dem som dør i kamp og av skader påført under kamphandlinger"],
      explanation: "Riktig svar er at kampdøde omfatter dem som dør i selve kamphandlingene, ikke av følgevirkninger. Dødsfall av sult, sykdom og sammenbrutte helsetjenester telles ikke, selv om den gruppen ofte er den største. Det er en av de faste innvendingene mot binær måling.",
    },
    {
      question: "Hva er hovedforskjellen på binær og kontinuerlig måling av krig?",
      options: ["Den binære gir få og store kriger, den kontinuerlige fanger også lavintensive konflikter", "Den binære teller bare mellomstatlig krig, mens den kontinuerlige også dekker borgerkrig", "Den binære teller alle dødsfall, den kontinuerlige bare dem som faller i kamp", "Den binære bygger på offisielle tall, den kontinuerlige på anslag fra flere kilder"],
      explanation: "Riktig svar er at den binære gir få og store kriger, mens den kontinuerlige også fanger opp lavintensive konflikter som varer lenge. Begge målingene dekker både mellomstatlig krig og borgerkrig, og begge teller kampdøde. Forskjellen ligger i terskelen og i at den ene måler år for år.",
    },
    {
      question: "Hvorfor er målevalget verdt å nevne i den empiriske delen av et langsvar?",
      options: ["Fordi valget avgjør hvilke tilfeller som i det hele tatt telles med", "Fordi det viser at kandidaten kjenner flere datasett enn pensum krever", "Fordi tallene fra de to datasettene ellers vil motsi hverandre i teksten", "Fordi sensor forventer at kandidaten oppgir kilden til hvert tall som brukes"],
      explanation: "Riktig svar er at valget avgjør hvilke tilfeller som i det hele tatt telles med. Det handler om operasjonalisering, altså hvordan et begrep gjøres målbart, og det er derfor en påstand om at kriger er blitt sjeldnere alltid hviler på en bestemt målestokk. Tallene motsier ikke hverandre; de svarer på ulike spørsmål.",
    },
    {
      question: "Hva kjennetegner en mellomstatlig krig?",
      options: ["At begge eller alle partene er anerkjente stater", "At kamphandlingene foregår på tvers av en statsgrense", "At minst én part er en stat som opererer utenfor egne grenser", "At konflikten gjelder et territorium som begge parter gjør krav på"],
      explanation: "Riktig svar er at begge eller alle partene er anerkjente stater. At en stat bruker militærmakt utenfor egne grenser gjør ikke konflikten mellomstatlig, dersom motparten er en ikke-statlig gruppe. Verken grensekryssing eller territorialkrav inngår i definisjonen av typen.",
    },
    {
      question: "Hva gjelder uforenligheten i en borgerkrig som regel?",
      options: ["Enten hvem som skal styre staten, eller løsrivelse av et område", "Enten fordelingen av inntekter, eller kontrollen over de væpnede styrkene", "Enten grensedragningen mot naboland, eller adgangen til en delt ressurs", "Enten forholdet til en fremmed makt, eller retten til å inngå traktater"],
      explanation: "Riktig svar er at uforenligheten som regel gjelder enten hvem som skal styre staten, eller løsrivelse av et område. Skillet har betydning for forklaringen: en regjeringskonflikt gjelder kontroll over hele staten, en territorialkonflikt kontroll over en del av den, og de har ulike forhandlingslogikker.",
    },
    {
      question: "Hva kreves for at en borgerkrig skal regnes som internasjonalisert?",
      options: ["At minst én fremmed stat griper inn militært med egne styrker", "At opprørsgruppen mottar våpen, penger og diplomatisk støtte utenfra", "At konflikten sprer seg over grensen og trekker inn nabolandenes befolkning", "At konflikten settes på dagsordenen i internasjonale organer og behandles der"],
      explanation: "Riktig svar er at minst én fremmed stat griper inn militært med egne styrker. Våpen, penger og diplomatisk støtte forekommer i nesten alle borgerkriger og gjør dem ikke internasjonaliserte i denne forstand. Kategorien er analytisk viktig fordi årsaksbildet da blir sammensatt.",
    },
    {
      question: "Hvorfor har krigstypen betydning for hvordan årsaker forklares?",
      options: ["Fordi faktorene som forklarer én type, forklarer en annen type dårlig", "Fordi typene måles med hvert sitt terskeltall i de store datasettene", "Fordi bare mellomstatlig krig kan analyseres med de tre analysenivåene", "Fordi typene har ulik varighet og derfor ulikt samlet antall kampdøde"],
      explanation: "Riktig svar er at faktorene som forklarer én type, forklarer en annen type dårlig. Maktbalanse og alliansestruktur forklarer mellomstatlig krig, mens statens svakhet, ressursinntekter og manglende garantier forklarer borgerkrig. Analysenivåene kan brukes på begge typene.",
    },
    {
      question: "Hva peker individnivået på når krigsårsaker skal forklares?",
      options: ["Beslutningstakernes oppfatninger, risikovurderinger og gruppen rundt dem", "Befolkningens holdninger til konflikten og oppslutningen om militærmakt", "Regimetypen og de institusjonelle begrensningene på den som styrer", "Ledernes formelle fullmakter til å beslutte bruk av væpnet makt"],
      explanation: "Riktig svar er beslutningstakernes oppfatninger, risikovurderinger og gruppen rundt dem. Befolkningens holdninger er en statsnivåfaktor, fordi de er trekk ved staten som politisk system. Regimetype og formelle fullmakter hører også til statsnivået.",
    },
    {
      question: "Hva er feiloppfatning som krigsårsak?",
      options: ["Systematisk gal lesning av motpartens hensikter, styrke eller vilje", "Mangel på etterretning om motpartens faktiske militære kapasitet", "Bevisst overdrivelse av egen styrke for å oppnå bedre vilkår", "Uenighet innad i beslutningsgruppen om hvordan situasjonen skal tolkes"],
      explanation: "Riktig svar er systematisk gal lesning av motpartens hensikter, styrke eller vilje. Mekanismen virker også når informasjonen finnes, fordi den tolkes gjennom forventninger man har fra før. Bevisst overdrivelse av egen styrke er derimot privat informasjon, som er en systemnivåmekanisme.",
    },
    {
      question: "Hva kjennetegner gruppetenkning i en krigsbeslutning?",
      options: ["At gruppen søker enighet framfor prøving, slik at motforestillinger dempes", "At lederen overkjører de øvrige og krever tilslutning til sitt eget syn", "At beslutningen fattes av for mange aktører til at ansvaret kan plasseres", "At gruppen mangler fagkunnskapen som skal til for å vurdere alternativene"],
      explanation: "Riktig svar er at gruppen søker enighet framfor prøving, slik at motforestillinger dempes. Poenget er at gruppen gjør dette mot seg selv, uten at noen behøver å bli tvunget til taushet. Mekanismen forklarer hvorfor feilvurderinger passerer helt fram til vedtak.",
    },
    {
      question: "Hva er overoptimisme som krigsårsak?",
      options: ["Systematisk overvurdering av egne utsikter, typisk troen på en kort krig", "Vilje til å ta stor risiko fordi gevinsten ved seier vurderes som høy", "Tro på at motparten vil gi etter lenge før det kommer til alvorlige kamphandlinger", "Undervurdering av kostnadene ved å la konflikten forbli uløst over tid"],
      explanation: "Riktig svar er systematisk overvurdering av egne utsikter, typisk troen på at krigen blir kort. Overoptimisme er en vurderingsskjevhet, ikke risikovillighet: en leder kan være villig til å ta stor risiko og likevel vurdere den helt riktig. Mekanismen er sterk fordi den kan ramme begge parter samtidig.",
    },
    {
      question: "Hvordan virker en leders korte tidshorisont som krigsårsak?",
      options: ["Et framstøt med gevinst nå og kostnad senere framstår som lønnsomt", "Beslutninger fattes raskere enn etterretningen rekker å bli oppdatert", "Lederen mister evnen til å vurdere motpartens langsiktige planer", "Krisen håndteres uten at forsvaret rekker å forberede seg forsvarlig"],
      explanation: "Riktig svar er at et framstøt med gevinst nå og kostnad senere framstår som lønnsomt. Kort horisont er ikke det samme som overoptimisme: overoptimisten tror kostnaden blir liten, mens den med kort horisont vet at den kommer. Mekanismen kobler individnivået til statsnivået, fordi horisonten avhenger av den politiske ordningen.",
    },
    {
      question: "Hva slags spørsmål er individnivået særlig godt egnet til å besvare?",
      options: ["Hvorfor krigen kom akkurat da, og ikke noe av de foregående årene", "Hvorfor krig i det hele tatt er mulig i et system uten håndhever", "Hvorfor to stater i samme ytre situasjon handler så ulikt som de gjør", "Hvorfor mønsteret gjentar seg på tvers av svært ulike stater og tider"],
      explanation: "Riktig svar er hvorfor krigen kom akkurat da, og ikke noe av de foregående årene. Er de strukturelle forholdene konstante i årevis, kan de ikke forklare en endring, og da må noe ha flyttet seg på individnivå. Variasjon mellom stater hører til statsnivået, og stabile mønstre til systemnivået.",
    },
    {
      question: "Hva kjennetegner en krigsårsak på statsnivå?",
      options: ["At faktoren varierer mellom stater og overlever et lederskifte", "At faktoren gjelder alle statene i systemet på samme måte", "At faktoren endrer seg raskt og derfor kan forklare tidspunktet", "At faktoren gjelder personene som sitter med selve avgjørelsen"],
      explanation: "Riktig svar er at faktoren varierer mellom stater og overlever et lederskifte. Faktorer som gjelder alle statene likt, som anarkiet, hører til systemnivået. Faktorer knyttet til dem som tar avgjørelsen, hører til individnivået.",
    },
    {
      question: "Hvordan virker regimetypen som krigsårsak?",
      options: ["Gjennom hvor mange og hvor sterke begrensninger lederen møter", "Gjennom hvor fredelig innstilt befolkningen i staten er", "Gjennom hvor stor del av statsbudsjettet som årlig går til forsvarssektoren", "Gjennom hvor mange allianser staten har inngått med naboene"],
      explanation: "Riktig svar er gjennom hvor mange og hvor sterke begrensninger lederen møter: forsamling, domstoler, presse og valg. Mekanismen er ikke at demokratier er mer fredsommelige av natur, men at flere vetopunkter gjør beslutningen tregere og dyrere. Dette er grunnlaget for strukturforklaringen av den demokratiske freden.",
    },
    {
      question: "Hva er mekanismen bak argumentet om et militær-industrielt kompleks?",
      options: ["Konsentrerte gevinster og spredte kostnader gir ulik mobiliseringsevne", "Forsvarssektoren kontrollerer informasjonen politikerne bygger vedtak på", "Militære ledere har direkte innflytelse over hvem som styrer staten", "Opprustning skaper arbeidsplasser som velgerne belønner ved valg"],
      explanation: "Riktig svar er at konsentrerte gevinster og spredte kostnader gir ulik mobiliseringsevne. Den siden som er få og har mye å vinne, organiserer seg lettere enn den som er mange og taper litt hver. Argumentet gjelder budsjetter og trusselframstilling, ikke at bestemte aktører utløser kriger.",
    },
    {
      question: "Hvordan virker nasjonalisme som krigsårsak?",
      options: ["Den gjør territorielle krav vanskeligere å dele og senker mobiliseringskostnaden", "Den øker forsvarsbudsjettene og styrker de militære miljøenes stilling innad i staten", "Den svekker statens evne til å inngå bindende avtaler med naboland", "Den gjør at befolkningen overvurderer egne styrkers militære kapasitet"],
      explanation: "Riktig svar er at nasjonalisme gjør territorielle krav vanskeligere å dele og senker den innenrikspolitiske kostnaden ved mobilisering. Et område som defineres som en del av nasjonen, behandles som udelelig. Faget spør hva nasjonalismen gjør med forhandlingsrommet, ikke om den er god eller dårlig.",
    },
    {
      question: "Hvordan brukes kjønn som forklaringsfaktor i studiet av krigsårsaker?",
      options: ["Som spørsmål om beslutningsorganers sammensetning og om forestillinger om styrke", "Som et etablert funn om at stater med flere kvinnelige ledere fører færre kriger", "Som en forklaring på hvorfor menn og kvinner vurderer militær risiko ulikt", "Som en kritikk av at faget har oversett sivile tap i sine krigsdatasett"],
      explanation: "Riktig svar er som spørsmål om beslutningsorganers sammensetning og om forestillinger om styrke, ære og troverdighet. Dette er et forskningsspørsmål med omstridte svar, ikke et etablert funn på linje med den dyadiske demokratiske freden. Den andre varianten er konstruktivistisk i formen: den gjelder normer, ikke egenskaper ved enkeltpersoner.",
    },
    {
      question: "Hva er krigens puslespill?",
      options: ["At krig er kostbar for begge, så det finnes alltid en ordning begge foretrekker", "At kriger bryter ut selv om ingen av partene på forhånd har uttalt noe ønske om det", "At de fleste kriger ender i en avtale som ligner mye på utgangspunktet", "At krig blir hyppigere i perioder der ingen enkeltstat er klart sterkest"],
      explanation: "Riktig svar er at krig er kostbar for begge, slik at det i prinsippet alltid finnes en ordning begge ville foretrukket framfor å slåss. Poenget med å stille problemet slik er at forklaringen må si hvorfor partene ikke nådde fram til den ordningen. Å svare at partene var uenige, flytter spørsmålet uten å besvare det.",
    },
    {
      question: "Hva er privat informasjon som krigsårsak?",
      options: ["Kunnskap om egen styrke og vilje som motparten ikke kan kontrollere", "Etterretning en part har skaffet seg om motpartens militære planer", "Opplysninger som holdes skjult for egen befolkning under en krise", "Uenighet mellom partene om hvordan folkeretten skal tolkes i saken"],
      explanation: "Riktig svar er kunnskap om egen styrke og vilje som motparten ikke kan kontrollere. Problemet er ikke bare at informasjonen er skjult, men at hver part har insentiv til å framstille seg som sterkere enn den er. Derfor blir troverdige signaler dyre, og noen av dem er selv skritt mot krig.",
    },
    {
      question: "Hva er forpliktelsesproblemet?",
      options: ["At partene ikke kan binde seg troverdig til å holde en avtale i framtiden", "At partene ikke kan kontrollere om motparten overholder avtalen i dag", "At en regjering kan bli bundet av avtaler en tidligere regjering inngikk", "At allierte sjelden innfrir garantien den dagen den faktisk skal brukes"],
      explanation: "Riktig svar er at partene ikke kan binde seg troverdig til å holde en avtale i framtiden, fordi ingen håndhever står over dem. Kontroll av om avtalen overholdes nå, er informasjonsproblemet, og de to må holdes fra hverandre. Alliansegarantier er en følge av det samme problemet, ikke definisjonen.",
    },
    {
      question: "Hva skiller informasjonsproblemet fra forpliktelsesproblemet?",
      options: ["Det ene gjelder hva partene vet nå, det andre hva de kan love senere", "Det ene rammer små stater, det andre først og fremst stormaktene", "Det ene gjelder mellomstatlig krig, det andre først og fremst borgerkrig", "Det ene er en realistisk mekanisme, det andre en liberal innvending"],
      explanation: "Riktig svar er at det ene gjelder hva partene vet nå, mens det andre gjelder hva de kan love senere. Den raskeste testen er å spørre hva en god verifikasjonsordning ville løst: den løser det første, ikke det andre. Begge er strukturelle mekanismer som følger av anarkiet.",
    },
    {
      question: "Hvorfor regnes udelelighet som den svakeste av de rasjonalistiske mekanismene?",
      options: ["Fordi svært få goder er udelelige i streng forstand", "Fordi den bare kan brukes på konflikter om territorium", "Fordi den ikke lar seg forene med antakelsen om rasjonelle aktører", "Fordi den forutsetter at partene mangler informasjon om hverandre"],
      explanation: "Riktig svar er at svært få goder er udelelige i streng forstand. Delt myndighet, tidsdeling, kompensasjon og felles forvaltning er alle brukt til å dele goder som ble omtalt som udelelige. Udelelighet er som regel et politisk forhold, og da er man i realiteten tilbake i forpliktelsesproblemet.",
    },
    {
      question: "Hvorfor er maktforskyvning farligere enn maktubalanse?",
      options: ["Fordi den som blir svakere, ikke kan få noe bindende løfte fra den som blir sterkere", "Fordi den gjør styrkeforholdet vanskeligere å måle for begge parter", "Fordi den øker sannsynligheten for at en sterk tredjepart griper inn på den ene siden", "Fordi den fører til at begge parter ruster opp samtidig og raskt"],
      explanation: "Riktig svar er at den som blir svakere, ikke kan få noe bindende løfte fra den som blir sterkere. Ubalanse er et forhold på ett tidspunkt, forskyvning er en endring over tid, og det er endringen som setter forpliktelsesproblemet i sving. Faren er størst når forskyvningen er stor, rask og forventet av begge.",
    },
    {
      question: "Hva menes med at anarki er en nødvendig, men ikke tilstrekkelig betingelse for krig?",
      options: ["Anarkiet gjør krig mulig, men forklarer ikke hvorfor de fleste konflikter ender uten krig", "Anarkiet må kombineres med en klar maktubalanse mellom partene før en krig kan bryte ut", "Anarkiet virker først når statene også mangler felles institusjoner å møtes i", "Anarkiet forklarer krig mellom stater, men ikke krig innenfor én enkelt stat"],
      explanation: "Riktig svar er at anarkiet gjør krig mulig, men ikke forklarer hvorfor de aller fleste konflikter under samme anarki ender uten krig. En besvarelse som stopper ved at systemet er anarkisk, har hoppet over hele forklaringen. Anarkiet virker også i borgerkriger, gjennom manglende garantier mellom partene.",
    },
    {
      question: "Hva er forskjellen på en bakgrunnsårsak og en utløsende årsak?",
      options: ["Den ene gjør krigen mulig over tid, den andre forklarer at den begynte da", "Den ene er en strukturell faktor, den andre en beslutning tatt av en leder", "Den ene kan observeres i ettertid, den andre bare mens konflikten pågår", "Den ene gjelder den ene parten, den andre gjelder forholdet mellom dem"],
      explanation: "Riktig svar er at den ene gjør krigen mulig over tid, mens den andre forklarer at den begynte akkurat da. En bakgrunnsårsak er ikke en uviktig årsak: den er nødvendig, den er bare ikke tilstrekkelig. Skillet er den enkleste måten å svare på vektspørsmålet på.",
    },
    {
      question: "Hvilke tre lesninger kan spørsmålet om hvilke krigsårsaker som veier tyngst, ha?",
      options: ["Nødvendighet, utløsning og generalitet", "Struktur, aktør og tilfeldighet", "Nærhet, styrke og varighet", "Materielle, institusjonelle og ideelle faktorer"],
      explanation: "Riktig svar er nødvendighet, utløsning og generalitet: hva krigen ikke kunne skjedd uten, hva som forklarer tidspunktet, og hva som forklarer flest kriger. De tre gir ulike svar, og å velge én lesning med begrunnelse er selve grepet i denne oppgavetypen. Å avslutte med at alle nivåene har betydning, er ikke en landing.",
    },
    {
      question: "Hva er realismens blindsone på krigsårsaker?",
      options: ["Den forklarer dårlig at samme struktur gir svært ulike utfall", "Den forklarer dårlig hvorfor stater ruster opp i perioder med rivalisering", "Den forklarer dårlig hvorfor maktforskyvning skaper farlige situasjoner", "Den forklarer dårlig hvorfor krig er mulig i et system uten håndhever"],
      explanation: "Riktig svar er at realismen forklarer dårlig at samme struktur gir svært ulike utfall. Opprustning under rivalisering, maktforskyvning og krigens mulighet under anarki er derimot nettopp det den forklarer godt. En blindsone er ikke en feil, men et område perspektivet systematisk forklarer svakt.",
    },
    {
      question: "Hva er den vanligste formen for feil nummer to i et langsvar om krigsårsaker?",
      options: ["Å ordne årsakene etter teoriperspektivene når nivåene er bestilt", "Å gjengi årsakene presist uten å drøfte hvilke som veier tyngst", "Å blande de to terskeltallene fra de store krigsdatasettene", "Å behandle det ene av oppgavens ledd grundig og det andre tynt"],
      explanation: "Riktig svar er å ordne årsakene etter teoriperspektivene når analysenivåene er bestilt. Feil nummer to er å utelate den analyseramma oppgaven ber om, og et slikt svar omtales som ikke fullgodt selv når innholdet er riktig. Å gjengi uten å drøfte er feil nummer én, og å blande terskeltall er feil nummer tre.",
    },
    {
      question: "Hva gjelder nedgangen i krig som oftest omtales i faget?",
      options: ["Krig mellom stater, ikke organisert vold generelt", "All organisert vold, både mellom og innenfor stater", "Antall kampdøde per konflikt, ikke antall konflikter", "Borgerkriger, som er blitt sjeldnere enn før 1945"],
      explanation: "Riktig svar er krig mellom stater, ikke organisert vold generelt. Borgerkrig og internasjonalisert borgerkrig viser ikke det samme mønsteret, og en påstand om at krig er på vei ut uten den presiseringen er upresis empiri. Det aller meste av organisert vold i dag foregår innenfor stater.",
    },
  ],
  'stv1200-3-2': [
    {
      question: "Hva betyr det at en utenrikspolitisk beslutning forklares outside-in?",
      options: ["At impulsen kommer utenfra: en trussel, et press eller en forpliktelse", "At beslutningen er rettet mot forhold utenfor landets egne grenser", "At beslutningen ble kjent utad før den var ferdig behandlet innenlands", "At beslutningen ble tatt av utenriksdepartementet og ikke av regjeringen"],
      explanation: "Riktig svar er at impulsen kommer utenfra: en trussel, et press fra allierte eller en internasjonal forpliktelse. Alternativet om at beslutningen er rettet utad ligger nær, men all utenrikspolitikk er rettet utad. Spørsmålet er hvor impulsen kom fra, ikke hvem som fattet vedtaket.",
    },
    {
      question: "Hva betyr det at en utenrikspolitisk beslutning forklares inside-out?",
      options: ["At den er drevet av forhold inne i staten, som regimetype og interessegrupper", "At den gjelder innenrikspolitiske forhold og bare indirekte berører utlandet", "At den ble forberedt i forvaltningen før den ble lagt fram for regjeringen", "At den bygger på hensyn til egen befolkning framfor hensyn til allierte"],
      explanation: "Riktig svar er at den er drevet av forhold inne i staten, som regimetype, innenrikspolitiske kraftforhold, interessegrupper og forvaltning. Antakelsen bak er at det ytre handlingsrommet ofte er romsligere enn det ser ut, og at valget da avgjøres innenfra. Ytre forhold setter rammen, mens innenrikspolitikken velger innenfor den.",
    },
    {
      question: "Hvorfor er outside-in og inside-out ikke det samme som system- og statsnivå?",
      options: ["Paret spør hvor impulsen kommer fra, nivåene hvor forklaringsfaktoren ligger", "Paret gjelder enkeltbeslutninger, nivåene bare langvarige mønstre over tid", "Paret er utviklet for utenrikspolitikk, nivåene bare for mellomstatlig krig", "Paret rommer to kategorier og nivåene tre, så én kategori blir alltid til overs"],
      explanation: "Riktig svar er at paret spør hvor impulsen kommer fra, mens nivåene spør hvor forklaringsfaktoren ligger. En impuls utenfra kan godt forklares på individnivå, hvis det avgjørende var hvordan beslutningstakerne leste den. De to begrepsparene overlapper, men de er ikke det samme.",
    },
    {
      question: "Hvilken av disse er en systemdrevet kilde til utenrikspolitikk?",
      options: ["Kravet fra en alliansepartner om bidrag i en pågående operasjon", "Forvaltningens faste prioriteringer i et departement som har fulgt saken lenge", "Et valgløfte fra et regjeringsparti om å endre linjen i en bestemt sak", "En næringsgruppe som organiserer seg mot en avtale den vil tape på"],
      explanation: "Riktig svar er kravet fra en alliansepartner om bidrag i en pågående operasjon, som er en ytre impuls. Forvaltningens prioriteringer, valgløfter og næringsgrupper er alle innenriksdrevne kilder. De tre siste er lettere å forveksle med hverandre enn med ytre press.",
    },
    {
      question: "Hva kjennetegner de innenriksdrevne kildene til utenrikspolitikk?",
      options: ["De varierer mellom stater, og forklarer forskjeller bedre enn fellestrekk", "De virker sterkest i akutte kriser der beslutningen må tas svært raskt", "De er vanskeligere å observere enn de ytre, og brukes derfor sjeldnere", "De gjelder bare demokratier, siden autoritære stater mangler slike kanaler"],
      explanation: "Riktig svar er at de varierer mellom stater og derfor forklarer forskjeller bedre enn fellestrekk. I akutte kriser er handlingsrommet trangest, og de indre kildene betyr minst. Også autoritære stater har forvaltninger og innenrikspolitiske kraftforhold; de virker bare gjennom andre kanaler.",
    },
    {
      question: "Hva skiller utenrikspolitikk fra internasjonal politikk som analyseobjekt?",
      options: ["Utenrikspolitikk er den enkelte statens handlinger, internasjonal politikk er samspillet", "Utenrikspolitikk gjelder bilaterale forhold, mens internasjonal politikk gjelder de multilaterale", "Utenrikspolitikk studeres normativt, internasjonal politikk studeres empirisk", "Utenrikspolitikk gjelder fredstid, internasjonal politikk også krig og krise"],
      explanation: "Riktig svar er at utenrikspolitikk er den enkelte statens handlinger, mens internasjonal politikk er samspillet mellom aktørene. Utenrikspolitikk studeres derfor oftest på stats- og individnivå, mens internasjonal politikk ofte studeres på systemnivå. Å blande de to er en utbredt innledningsfeil.",
    },
    {
      question: "Hva er kjernen i Allisons modell én, den rasjonelle aktøren?",
      options: ["Staten behandles som én enhetlig aktør som velger det som best tjener målene", "Staten forstås som summen av alle de organisasjonene som skal sette vedtaket ut i livet", "Staten antas å ville maksimere makt, siden sikkerhet går foran alt annet", "Staten antas å handle konsekvent fordi den er bundet av tidligere vedtak"],
      explanation: "Riktig svar er at staten behandles som én enhetlig aktør som velger det alternativet som best tjener målene. Antakelsen om maktmaksimering er en bestemt realistisk påstand om hva målet er, ikke selve modellen: modell én er nøytral med hensyn til målene. Modellen er en analytisk forenkling, ikke en påstand om at ledere alltid tenker klart.",
    },
    {
      question: "Hva innebærer rasjonalitetsantakelsen i Allisons modell én?",
      options: ["At aktøren har ordnede mål, kjenner alternativene og velger etter konsekvens", "At aktøren handler ut fra en nøktern vurdering av egne militære ressurser", "At aktøren følger de rådene fagmyndighetene gir i den aktuelle saken", "At aktørens mål er fornuftige og lar seg forsvare overfor egen befolkning"],
      explanation: "Riktig svar er at aktøren har ordnede mål, kjenner alternativene og velger etter konsekvens. Rasjonalitet i denne forstand gjelder sammenhengen mellom mål og middel, ikke om målene er fornuftige. Antakelsen svikter når målene er motstridende, alternativene ukjente eller konsekvensene umulige å regne på.",
    },
    {
      question: "Hva forklarer Allisons modell to utfallet med?",
      options: ["Rutinene og standardprosedyrene til de organisasjonene som skal utføre vedtaket", "Dragkampen mellom departementer som ender i et kompromiss ingen av dem egentlig ønsket", "Manglende informasjon om hva motparten faktisk har tenkt å gjøre", "At politisk ledelse overprøver fagmyndighetene når saken blir viktig nok"],
      explanation: "Riktig svar er rutinene og standardprosedyrene til de utførende organisasjonene. Dragkamp mellom departementer er modell tre, og sammenblandingen er den mest utbredte enkeltfeilen i temaet. Modell to handler om hva apparatet er innøvd til å gjøre, ikke om hva noen ønsker.",
    },
    {
      question: "Hvorfor har store organisasjoner standardprosedyrer?",
      options: ["Fordi de må kunne handle raskt, likt og forutsigbart uten å improvisere", "Fordi lovverket krever at forvaltningen dokumenterer sine framgangsmåter", "Fordi de ellers ville blitt overprøvd av den politiske ledelsen hver gang", "Fordi de gir ledelsen mulighet til å plassere ansvar når noe går galt"],
      explanation: "Riktig svar er at de må kunne handle raskt, likt og forutsigbart uten å improvisere. Prisen er at prosedyrene er trege å endre og dårlig tilpasset det uvanlige tilfellet. Forklaringskraften ligger nettopp i at de både muliggjør og begrenser handlingen.",
    },
    {
      question: "Hva forklarer Allisons modell tre utfallet med?",
      options: ["Dragkamp mellom aktører med ulike posisjoner, som ender i et kompromiss", "At forvaltningen er treg og leverer senere enn den politiske ledelsen vil", "At staten følger den linjen som gir størst samlet gevinst av alternativene", "At beslutningen speiler opinionen, fordi ledere må vinne det neste valget"],
      explanation: "Riktig svar er dragkamp mellom aktører med ulike posisjoner, som ender i et kompromiss som ofte er ingens førstevalg. At forvaltningen er treg, beskriver modell to, og det er nettopp den forvekslingen som koster mest. Modellen kartlegger hvem som satt rundt bordet og hvor sterkt hver av dem sto.",
    },
    {
      question: "Hva er den enkleste testen på om en forklaring hører til modell to eller modell tre?",
      options: ["Om forklaringen nevner noen som ønsket noe, eller bare hva apparatet gjorde", "Om forklaringen gjelder en militær beslutning eller en sivil beslutning", "Om forklaringen viser til selve vedtaket eller til gjennomføringen av det", "Om forklaringen gjelder en enkelthendelse eller et mønster over lengre tid"],
      explanation: "Riktig svar er om forklaringen nevner noen som ønsket noe, eller bare hva apparatet gjorde. Nevner den ønsker og styrkeforhold, er man i modell tre; nevner den bare rutiner og kapasitet, er man i modell to. Skillet går på rutine mot interesse, ikke på sakstype eller tidsrom.",
    },
    {
      question: "Hva betyr formuleringen om at hvor du står, avhenger av hvor du sitter?",
      options: ["At standpunktet en aktør tar, følger av aktørens stilling og ansvarsområde", "At embetsverket setter sine egne interesser foran statens når det får anledning til det", "At beslutninger flytter seg oppover i systemet når saken blir følsom", "At aktører skifter standpunkt når de blir stilt til ansvar for følgene"],
      explanation: "Riktig svar er at standpunktet følger av aktørens stilling og ansvarsområde. Mekanismen er strukturell og forutsetter ikke egennytte: aktørene gjør jobben sin, og det er nettopp derfor posisjonene er forutsigbare. En forklaring som gjør dette til en påstand om egeninteresse, mister det som gjør den analytisk brukbar.",
    },
    {
      question: "Hva overser Allisons modell én?",
      options: ["At målene inne i staten kan være motstridende og utfallet et kompromiss", "At beslutningstakere kan feilvurdere motpartens hensikter og styrke", "At internasjonale forpliktelser kan binde staten sterkere enn dens egne mål", "At stater ofte handler ut fra vaner de har opparbeidet over lang tid"],
      explanation: "Riktig svar er at målene inne i staten kan være motstridende og at utfallet kan være et kompromiss ingen ønsket. Feilvurdering av motparten er en individnivåmekanisme fra krigsårsakslæren, ikke det Allison peker på her. Modellen forklarer derfor dårlig hvorfor beslutninger ofte er inkonsekvente eller halvhjertede.",
    },
    {
      question: "Hva er Allisons modell én likevel god til?",
      options: ["Å forklare mønstre som gjentar seg på tvers av stater med ulike apparater", "Å forklare hvorfor et vedtak kom senere enn de allierte hadde ventet", "Å forklare hvorfor et vedtak inneholder unntak for bestemte næringer", "Å forklare hvorfor forvaltningen leverer det samme svaret gang på gang"],
      explanation: "Riktig svar er å forklare mønstre som gjentar seg på tvers av stater med helt ulike apparater. Forsinkelser forklares best av modell to og unntak best av modell tre. En analyse som starter i modell én og forklarer avvikene med de to andre, er som regel sterkere enn en som hopper rett i detaljene.",
    },
    {
      question: "Hva er det anbefalte grepet når flere Allison-modeller skal brukes på samme beslutning?",
      options: ["Å dele utfallet i trekk og se hvilken modell som forklarer hvert trekk", "Å behandle modellene i rekkefølge og vurdere hver som mulig forklaring", "Å velge den modellen som passer med perspektivet oppgaven ellers bruker", "Å bruke modell én som hovedspor og de to andre som forbehold til slutt"],
      explanation: "Riktig svar er å dele utfallet i trekk og se hvilken modell som forklarer hvert trekk. Å behandle modellene i rekkefølge er katalogformen: de beskrives, men brukes ikke på noe. Modell én forklarer typisk retningen, modell to tidsbruken og formen, og modell tre unntakene.",
    },
    {
      question: "Hva skal et begrunnet valg av Allison-modell bygge på?",
      options: ["Hva slags spørsmål oppgaven faktisk stiller om beslutningen", "Hvilken modell som er mest brukt i den nyeste forskningen", "Hvilket perspektiv besvarelsen ellers legger hovedvekten på", "Hvor mye informasjon som er tilgjengelig om den aktuelle saken"],
      explanation: "Riktig svar er hva slags spørsmål oppgaven faktisk stiller om beslutningen. Spør den hvorfor vedtaket kom, er modell én riktig hovedspor; spør den hvorfor vedtaket ble utformet slik det ble, er modell tre det. Å velge modell er ikke å avvise de andre, men å si hva du gjør og hva valget koster.",
    },
    {
      question: "Hvilket analysenivå ligger Allisons modell to nærmest?",
      options: ["Statsnivå, siden forvaltningsapparatets rutiner er et trekk ved staten", "Systemnivå, siden rutinene er utformet for å møte ytre krav og press", "Individnivå, siden prosedyrene til slutt utføres av enkeltpersoner", "Alle tre likt, siden organisasjoner finnes på hvert av de tre nivåene"],
      explanation: "Riktig svar er statsnivå, siden forvaltningsapparatets rutiner er et trekk ved den enkelte staten som varierer mellom stater. Koblingen er et tyngdepunkt, ikke en likhet: modellene er ikke analysenivåer. Modell én ligger nærmest systemnivået, og modell tre mellom stats- og individnivå.",
    },
    {
      question: "Hvordan leser realismen kildene til en stats utenrikspolitikk?",
      options: ["Outside-in og på systemnivå, med statens posisjon i maktfordelingen som forklaring", "Inside-out og på statsnivå, med regimetypen og innenrikspolitikken som de avgjørende faktorene", "Gjennom statens selvforståelse og hvilken rolle den mener å ha i verden", "Gjennom forvaltningens rutiner, siden apparatet begrenser hva som er mulig"],
      explanation: "Riktig svar er outside-in og på systemnivå, med statens posisjon i maktfordelingen som forklaring. Realismen forutsier da at stater i samme strukturelle posisjon handler omtrent likt, uansett styreform. Perspektivet benekter ikke at det foregår dragkamper inne i staten, men hevder at de sjelden avgjør utfallet.",
    },
    {
      question: "Hvordan leser liberalismen kildene til en stats utenrikspolitikk?",
      options: ["Inside-out og på statsnivå, med staten som arena for kamp mellom interesser", "Outside-in og på systemnivå, med det ytre presset som avgjørende faktor", "Gjennom hvilke normer staten har sluttet seg til i internasjonale organer", "Gjennom beslutningstakernes personlige erfaringer og risikovurderinger"],
      explanation: "Riktig svar er inside-out og på statsnivå, med staten som arena for kamp mellom grupper, næringer, partier og forvaltninger. Perspektivet forutsier at stater i samme ytre situasjon handler ulikt, og at et regjeringsskifte kan endre kursen. Det hevder ikke at ytre forhold er uten betydning, men at handlingsrommet er romsligere enn realismen antar.",
    },
    {
      question: "Hvordan leser konstruktivismen kildene til en stats utenrikspolitikk?",
      options: ["Gjennom identitet og rolleforståelse: hva staten mener er passende for en som den", "Gjennom de normene som er nedfelt i de traktatene staten selv har valgt å slutte seg til", "Gjennom hvilke interessegrupper som har fått gjennomslag i den enkelte saken", "Gjennom hvordan maktfordelingen i systemet begrenser statens valgmuligheter"],
      explanation: "Riktig svar er gjennom identitet og rolleforståelse: hva slags stat den mener at den er, og hva som derfor er passende å gjøre. Følgen er at en trussel ikke er en trussel før den blir forstått som en. Perspektivet hevder ikke at interesser er uvirkelige, men at de formes framfor å være gitt av posisjonen.",
    },
    {
      question: "Hva er realismens blindsone på utenrikspolitikk?",
      options: ["Den forklarer dårlig at to stater i samme posisjon likevel velger ulikt", "Den forklarer dårlig hvorfor stater handler raskt under sterkt ytre press", "Den forklarer dårlig hvorfor allianser holder over lange tidsrom", "Den forklarer dårlig hvorfor stormakter har større handlingsrom enn små"],
      explanation: "Riktig svar er at realismen forklarer dårlig at to stater i samme strukturelle posisjon likevel velger ulikt, og at kursen kan skifte ved regjeringsskifte. Handling under sterkt ytre press er derimot nettopp det den forklarer godt. En blindsone er ikke en feil, men et område perspektivet systematisk forklarer svakt.",
    },
    {
      question: "Hva er liberalismens blindsone på utenrikspolitikk?",
      options: ["Den forklarer dårlig at innenrikspolitiske forskjeller betyr lite i akutte kriser", "Den forklarer dårlig at vedtak ofte inneholder unntak og kompromisser", "Den forklarer dårlig at forvaltningen har egne faste prioriteringer", "Den forklarer dårlig at ulike stater har helt ulike styreformer og forvaltningsordninger"],
      explanation: "Riktig svar er at liberalismen forklarer dårlig hvorfor innenrikspolitiske forskjeller betyr så lite i akutte sikkerhetskriser, der svært ulike stater handler påfallende likt. Unntak, kompromisser og forvaltningens prioriteringer er derimot nettopp det perspektivet forklarer godt. Innvendingen gjelder hvor raskt betydningen forsvinner når presset blir stort nok.",
    },
    {
      question: "Hva er konstruktivismens blindsone på utenrikspolitikk?",
      options: ["Den sier lite om når og hvilken vei en rolleforståelse vil endre seg", "Den sier lite om hvordan stater tolker hverandres handlinger i en krise", "Den sier lite om hvilken betydning normer har for hva som anses passende", "Den sier lite om hvorfor stater holder fast ved en linje over lang tid"],
      explanation: "Riktig svar er at den sier lite om når og hvilken vei en rolleforståelse vil endre seg. Tolkning i krise, normers betydning og vedvarende linjer er derimot nettopp det perspektivet forklarer godt. Innvendingen gjelder hvor lett perspektivet kan tilpasses et hvilket som helst utfall i etterkant.",
    },
  ],
  'stv1200-3-3': [
    {
      question: "Hvordan formuleres den demokratiske freden mest presist?",
      options: ["Demokratier fører sjelden eller aldri krig mot hverandre", "Demokratier er gjennomgående fredeligere enn andre styreformer", "Demokratier deltar sjeldnere i militære operasjoner enn andre stater", "Demokratier løser sine konflikter gjennom internasjonale organer"],
      explanation: "Riktig svar er at demokratier sjelden eller aldri fører krig mot hverandre. Ordene mot hverandre må stå der: uten dem har man skrevet den monadiske påstanden, som er svakt belagt. Demokratier fører krig omtrent like ofte som andre stater samlet sett.",
    },
    {
      question: "Hva betyr det at den demokratiske freden er dyadisk?",
      options: ["At mønsteret gjelder par av stater der begge er demokratier", "At mønsteret gjelder to ulike typer konflikt samtidig", "At mønsteret bygger på to uavhengige datasett som gir samme svar", "At mønsteret har to forklaringer som utfyller hverandre"],
      explanation: "Riktig svar er at mønsteret gjelder par av stater der begge er demokratier. Ordet kommer av dyade, altså et par. Påstanden sier ingenting om hvordan et demokrati oppfører seg overfor et ikke-demokrati, og der er atferden ikke påfallende fredelig.",
    },
    {
      question: "Hva er den monadiske versjonen av den demokratiske freden?",
      options: ["At demokratier er generelt fredeligere, uansett hvem motparten er", "At demokratier fører krig bare når de blir angrepet først", "At demokratier fører færre kriger jo lenger de har vært demokratier", "At demokratier avstår fra krig når opinionen er imot den"],
      explanation: "Riktig svar er at demokratier er generelt fredeligere, uansett hvem motparten er. Denne versjonen er svakt belagt: demokratier har deltatt i mange kriger, ofte mot ikke-demokratier. Å skrive den monadiske påstanden når den dyadiske er ment, er en manglende distinksjon som ødelegger drøftingen som følger.",
    },
    {
      question: "Hva var Kants bidrag til den demokratiske freden?",
      options: ["Han leverte den filosofiske ideen, ikke det empiriske belegget", "Han påviste mønsteret i historiske data over flere århundrer", "Han skilte først mellom den dyadiske og den monadiske versjonen", "Han utviklet strukturforklaringen om institusjonelle begrensninger"],
      explanation: "Riktig svar er at Kant leverte den filosofiske ideen, ikke det empiriske belegget. Argumentet hans var at der de som bærer kostnadene ved krig også avgjør om den skal føres, blir terskelen høyere. Mønsteret er kartlagt i senere forskning, og forklaringene på det er fortsatt omstridte.",
    },
    {
      question: "Hva er den kantianske triangelen?",
      options: ["Demokrati, handel og felles internasjonale organisasjoner", "Demokrati, folkerett og kollektiv sikkerhet i regionale organer", "Demokrati, menneskerettigheter og fri presse i den enkelte staten", "Demokrati, avskrekking og et stabilt maktforhold mellom partene"],
      explanation: "Riktig svar er demokrati, handel og felles internasjonale organisasjoner. De tre henger sammen: demokratier handler mer med hverandre, og handelspartnere slutter seg oftere til de samme organisasjonene. Triangelen er den bredere liberale fredsteorien, ikke det samme som den demokratiske freden alene.",
    },
    {
      question: "Hva er kjernen i kulturforklaringen av den demokratiske freden?",
      options: ["Demokratier deler normer for fredelig konfliktløsning og forventer det av hverandre", "Demokratiske borgere er mindre villige til å bruke vold enn andre borgere", "Demokratier deler språk og historie som gjør kommunikasjon mellom dem lettere", "Demokratier har felles kulturelle bånd som gjør konflikter mindre sannsynlige"],
      explanation: "Riktig svar er at demokratier deler normer for at konflikter løses ved forhandling, og at de forventer det samme av hverandre. Mekanismen forklarer pardelen: normen virker bare når begge parter følger den. At demokratiske borgere skulle være mindre voldelige som mennesker, ville vært en monadisk påstand som ikke forklarer pardelen.",
    },
    {
      question: "Hva er kjernen i strukturforklaringen av den demokratiske freden?",
      options: ["Institusjonelle begrensninger gjør krigsbeslutningen treg, åpen og kostbar", "Demokratiske ledere har mindre personlig makt enn autoritære ledere", "Demokratier har svakere militærapparat enn stater med annen styreform", "Demokratier er bundet av folkerettslige forpliktelser i større grad enn andre"],
      explanation: "Riktig svar er at institusjonelle begrensninger gjør krigsbeslutningen treg, åpen og kostbar: en forsamling må gi samtykke, pressen gjør kostnadene kjent, og et valg må vinnes. Forklaringen sier ikke at demokratiske ledere er mindre villige til å bruke makt, men at de møter flere hindre. Mekanismen virker gjensidig fordi begge parter kan se at den andre ikke kan mobilisere i hemmelighet.",
    },
    {
      question: "Hva forutsier kultur- og strukturforklaringen ulikt om nye demokratier?",
      options: ["Strukturforklaringen venter rask virkning, kulturforklaringen gradvis", "Strukturforklaringen venter gradvis virkning, kulturforklaringen umiddelbar", "Strukturforklaringen venter ingen virkning før neste valg er avholdt", "Strukturforklaringen venter virkning bare i stater med lang demokratisk tradisjon"],
      explanation: "Riktig svar er at strukturforklaringen venter rask virkning så snart institusjonene er på plass, mens kulturforklaringen venter at virkningen kommer gradvis fordi normer må sette seg. Det gjør de to etterprøvbare: forskjellen skal vise seg i tidsforløpet etter et regimeskifte. At forklaringene forutsier ulikt, betyr ikke at bare én kan være riktig.",
    },
    {
      question: "Hvorfor er handelsleddet i triangelen en konkurrent til demokratiforklaringen?",
      options: ["Fordi demokratier har handlet mye med hverandre, så handelen kan gjøre arbeidet", "Fordi handelen mellom demokratier er regulert av de samme internasjonale organisasjonene", "Fordi handel skaper konflikter som demokratier må løse ved forhandling", "Fordi handelsavtaler forutsetter en demokratisk godkjenningsprosess"],
      explanation: "Riktig svar er at demokratier historisk har handlet mye med hverandre, slik at handelen kan gjøre arbeidet demokratiet får æren for. Handelsargumentet er en påstand om kostnad, mens kulturforklaringen er en påstand om forventninger. De kan skilles empirisk: handelsargumentet forutsier at virkningen følger handelsvolumet, ikke styreformen.",
    },
    {
      question: "Hva er mekanismen bak organisasjonsleddet i den kantianske triangelen?",
      options: ["Faste arenaer for tvister, synlig atferd og gjentatt samhandling", "Muligheten til å tvinge et medlem til å avstå fra å bruke militærmakt", "Kravet om at medlemmene skal ha demokratisk styreform for å delta", "Adgangen til å avgjøre tvister ved en domstol med bindende myndighet"],
      explanation: "Riktig svar er faste arenaer for tvister, synlig atferd og gjentatt samhandling. Organisasjonene har ingen håndhever over statene, så mekanismen er informasjon og gjentakelse, ikke tvang. Leddet er det svakeste av de tre i debatten, fordi det er vanskeligst å skille fra de to andre.",
    },
    {
      question: "Hva går definisjonsinnvendingen mot den demokratiske freden ut på?",
      options: ["At valgene om hva som telles som demokrati og som krig, påvirker resultatet", "At begrepet demokrati brukes ulikt i ulike deler av forskningen", "At krigsdefinisjonen er hentet fra datasett som ikke dekker borgerkrig", "At funnet gjelder bare stater som selv omtaler seg som demokratier"],
      explanation: "Riktig svar er at valgene om hva som telles som demokrati og som krig, påvirker resultatet. Settes krigsterskelen høyt eller demokratikravet strengt, forsvinner tilfeller som ellers kunne vært motbevis. Dette er ikke en påstand om at forskningen jukser, men den samme operasjonaliseringsdiskusjonen som gjelder krigsdatasettene.",
    },
    {
      question: "Hva går utvalgsinnvendingen mot den demokratiske freden ut på?",
      options: ["At det har vært få demokratipar, så fravær av krig kan skyldes fravær av par", "At forskningen har valgt ut de tilfellene som passer med funnet", "At datasettene bare dekker perioden etter andre verdenskrig", "At små stater er underrepresentert i de datasettene som brukes"],
      explanation: "Riktig svar er at det har vært få demokratipar i store deler av perioden, slik at fraværet av krig delvis kan skyldes fraværet av par. Innvendingen er svakere i dag, fordi antallet demokratier har vokst kraftig og mønsteret har holdt seg. Den angriper det statistiske grunnlaget, ikke tolkningen.",
    },
    {
      question: "Hva går den realistiske innvendingen mot den demokratiske freden ut på?",
      options: ["Mønsteret finnes, men felles allianse og motstander forklarer det, ikke styreformen", "Mønsteret forsvinner helt når man også teller med de lavintensive væpnede konfliktene", "Mønsteret gjelder bare stater som er beskyttet av en sterkere alliert", "Mønsteret skyldes at demokratier sjelden grenser til hverandre geografisk"],
      explanation: "Riktig svar er at mønsteret finnes, men at felles allianse og felles motstander kan forklare det uten regimetype. Innvendingen bestrider årsaken, ikke funnet, og det skiller den fra definisjons- og utvalgsinnvendingene. Den gir en klar forutsigelse: forsvinner de felles interessene, skal freden bli mindre påfallende.",
    },
    {
      question: "Hvordan leser konstruktivismen den demokratiske freden?",
      options: ["Som gjensidig gjenkjennelse, der krig mot en av samme slag blir upassende", "Som et resultat av at demokratier har sluttet seg til de samme traktatene", "Som en følge av at demokratiske ledere har lengre tidshorisont enn andre", "Som et bevis på at normer er viktigere enn maktforhold i verdenspolitikken"],
      explanation: "Riktig svar er gjensidig gjenkjennelse, der krig mot en stat av samme slag framstår som upassende og ikke bare ulønnsomt. Lesningen legger vekt på at identiteten demokrati er blitt til historisk og kan endre seg. Perspektivet bestrider verken funnet eller institusjonenes betydning; det flytter spørsmålet.",
    },
    {
      question: "Hva er liberalismens blindsone på den demokratiske freden?",
      options: ["Den forklarer dårlig hvorfor bremsene ikke gir noen tydelig monadisk effekt", "Den forklarer dårlig hvorfor demokratier inngår allianser med hverandre", "Den forklarer dårlig hvorfor handel gjør krig mellom parter mer kostbar", "Den forklarer dårlig hvorfor institusjoner senker usikkerhet mellom stater"],
      explanation: "Riktig svar er at liberalismen forklarer dårlig hvorfor de institusjonelle bremsene ikke gir noen tydelig monadisk effekt. Bremsen finnes i staten uansett motpart, men virkningen ser bare ut når motparten er et demokrati. Allianser, handel og institusjoner er derimot nettopp det perspektivet forklarer godt.",
    },
    {
      question: "På hvilket analysenivå hører den demokratiske freden primært hjemme?",
      options: ["Statsnivå, siden styreformen er et trekk ved den enkelte staten", "Systemnivå, siden funnet gjelder forholdet mellom to stater", "Individnivå, siden det er lederne som treffer krigsbeslutningen", "Alle tre likt, siden funnet krever forklaringer på hvert nivå"],
      explanation: "Riktig svar er statsnivå, siden styreformen er et trekk ved den enkelte staten som varierer mellom stater. Funnet er likevel uvanlig ved at faktoren virker relasjonelt: det er kombinasjonen hos begge parter som gjør arbeidet. At den virker relasjonelt, gjør den ikke til en systemnivåfaktor, for systemfaktorer er felles for alle.",
    },
    {
      question: "Hva er den dyreste enkeltfeilen i et kortsvar om den demokratiske freden?",
      options: ["Å skrive den monadiske påstanden når den dyadiske er ment", "Å utelate den kantianske triangelen fra framstillingen", "Å nevne bare én av de to hovedforklaringene på funnet", "Å behandle funnet som en teori i stedet for som en observasjon"],
      explanation: "Riktig svar er å skrive den monadiske påstanden når den dyadiske er ment. Feilen er både en manglende distinksjon og en empirifeil, og den ødelegger drøftingen som følger, fordi forklaringene ikke passer til påstanden. Den koster fire ord å unngå.",
    },
    {
      question: "Hva sier sidesporet om demokratisering og krig?",
      options: ["Stater i overgang kan være mer konfliktutsatt enn både etablerte demokratier og stabile autoritære", "Stater som demokratiseres, slutter så å si umiddelbart å føre krig mot både naboland og andre", "Stater som demokratiseres, blir raskt medlemmer av de samme organisasjonene", "Stater i overgang har sjelden ressurser nok til å føre en langvarig krig"],
      explanation: "Riktig svar er at stater i overgang kan være mer konfliktutsatt enn både etablerte demokratier og stabile autoritære stater, fordi gamle institusjoner svekkes før nye virker. Dette er ikke en innvending mot den demokratiske freden, men en påstand om en annen tilstand. Å blande de to er å bytte ut spørsmålet.",
    },
  ],
  'stv1200-4-1': [
    {
      question: "Hvor mange medlemmer har FNs sikkerhetsråd, og hvordan fordeler de seg?",
      options: ["Femten: fem faste medlemmer med vetorett og ti valgte medlemmer uten vetorett", "Femten: ti faste medlemmer med vetorett og fem valgte medlemmer uten vetorett", "Tjue: fem faste medlemmer og femten valgte etter en geografisk fordelingsnøkkel", "Femten medlemmer som alle velges av Generalforsamlingen for toårsperioder"],
      explanation: "Riktig svar er femten medlemmer, fordelt på fem faste med vetorett og ti valgte uten. Å bytte om på fem og ti er den vanligste tallfeilen i temaet. At alle femten velges, er også galt: de fem faste sitter permanent, uten valg.",
    },
    {
      question: "Hvilke fem stater er faste medlemmer av Sikkerhetsrådet?",
      options: ["USA, Russland, Kina, Storbritannia og Frankrike", "USA, Russland, Kina, Storbritannia og Tyskland", "USA, Russland, Kina, Frankrike og India", "USA, Russland, Kina, Frankrike og Japan"],
      explanation: "Riktig svar er USA, Russland, Kina, Storbritannia og Frankrike. De øvrige alternativene bytter ut ett medlem med en stat som ofte nevnes i reformdebatten om å utvide kretsen av faste plasser, og nettopp derfor ligger de nær.",
    },
    {
      question: "Hva kreves for at Sikkerhetsrådet skal fatte vedtak i en materiell sak?",
      options: ["Ni av femten stemmer, og at ingen av de fem faste medlemmene stemmer imot", "Ni av femten stemmer, og at alle de fem faste medlemmene stemmer for saken", "To tredjedels flertall blant de femten, altså minst ti stemmer for forslaget", "Alminnelig flertall blant de femten medlemmene, altså minst åtte stemmer for"],
      explanation: "Riktig svar er ni av femten stemmer og at ingen av de fem faste stemmer imot. Kravet om at ingen stemmer imot er noe annet enn at alle stemmer for: et fast medlem som avstår, blokkerer ikke. Å avrunde til flertall gir bort nettopp det tallet oppgaven spør om.",
    },
    {
      question: "Hva skjer med et forslag når et fast medlem avstår fra å stemme i en materiell sak?",
      options: ["Forslaget kan vedtas, siden avholdenhet ikke teller som å stemme imot", "Forslaget faller, siden alle de fem faste medlemmene må stemme for det", "Avstemningen utsettes til samtlige faste medlemmer har tatt stilling i saken", "Stemmekravet senkes tilsvarende, slik at åtte stemmer er nok for vedtak"],
      explanation: "Riktig svar er at forslaget kan vedtas, fordi avholdenhet ikke er å stemme imot. Muligheten gir de faste medlemmene en mellomposisjon: de kan la et vedtak passere uten å støtte det. En vesentlig del av rådets vedtak i vanskelige saker hviler på det.",
    },
    {
      question: "I hvilke typer spørsmål gjelder vetoretten?",
      options: ["I materielle spørsmål, altså realitetsavgjørelser — ikke i prosedyrespørsmål", "I alle spørsmål Sikkerhetsrådet behandler, uansett hva de gjelder for noe", "Bare i spørsmål som gjelder bruk av militærmakt etter FN-paktens kapittel VII", "Bare når saken gjelder et av de faste medlemmenes eget territorium direkte"],
      explanation: "Riktig svar er at vetoretten gjelder materielle spørsmål, ikke prosedyrespørsmål. Et fast medlem kan derfor stanse vedtaket i en sak, men ikke hindre at saken settes på dagsordenen. At vetoretten gjelder alt, ligger nær og er nettopp det skillet som testes.",
    },
    {
      question: "Hvordan velges de ti valgte medlemmene av Sikkerhetsrådet?",
      options: ["Av Generalforsamlingen for to år, etter geografisk nøkkel, uten umiddelbar gjenvalg", "Av de fem faste medlemmene for to år, etter en fast turnusordning mellom regionene", "Av generalsekretæren for fire år, med adgang til å sitte i to sammenhengende perioder", "Av regionale organisasjoner for tre år, med adgang til gjenvalg én gang etterpå"],
      explanation: "Riktig svar er at Generalforsamlingen velger dem for to år, etter en geografisk fordelingsnøkkel, og at umiddelbar gjenvalg er utelukket. De øvrige alternativene flytter valgmyndigheten til andre organer, og det er en substansiell forskjell, ikke en detalj.",
    },
    {
      question: "Hva har de valgte medlemmene av Sikkerhetsrådet, som de faste også har?",
      options: ["Full stemmerett og adgang til å legge fram forslag i alle saker rådet behandler", "Rett til å stanse et vedtak alene ved å stemme imot det i materielle spørsmål", "Permanent plass i rådet uavhengig av valg og uten noen tidsbegrensning overhodet", "Rett til å avgjøre alene om en sak i det hele tatt skal settes på rådets dagsorden"],
      explanation: "Riktig svar er at de valgte medlemmene har full stemmerett og kan legge fram forslag i alle saker. Det eneste de mangler, er vetoretten. Å skrive at de har begrenset innflytelse generelt, er upresist.",
    },
    {
      question: "Hva fastslår FN-paktens artikkel 39?",
      options: ["At det foreligger en trussel mot freden, et fredsbrudd eller en angrepshandling", "At rådet kan vedta tiltak med væpnet makt når andre tiltak er utilstrekkelige", "At rådet kan pålegge medlemsstatene sanksjoner og andre ikke-militære tiltak", "At medlemsstatene skal søke å løse tvister med fredelige midler seg imellom"],
      explanation: "Riktig svar er at artikkel 39 er konstateringen av en trussel mot freden, et fredsbrudd eller en angrepshandling. Militærmakt hører til artikkel 42 og ikke-militære tiltak til artikkel 41. Uten et vedtak etter artikkel 39 kan rådet ikke gå videre i trappen.",
    },
    {
      question: "Hva gir FN-paktens artikkel 41 Sikkerhetsrådet myndighet til?",
      options: ["Bindende tiltak uten væpnet makt, som sanksjoner, embargo og reiserestriksjoner", "Bindende tiltak med væpnet makt når mildere tiltak anses å være utilstrekkelige", "Å opprette fredsbevarende styrker med samtykke fra partene i konfliktområdet", "Å suspendere en medlemsstats stemmerett i Generalforsamlingen for en periode"],
      explanation: "Riktig svar er bindende tiltak uten væpnet makt: sanksjoner, våpenembargo, reiserestriksjoner og brudd i samferdsel eller diplomatiske forbindelser. Militærmakt hører til artikkel 42. Fredsbevaring er ikke nevnt i pakten i det hele tatt.",
    },
    {
      question: "Hva gir FN-paktens artikkel 42 Sikkerhetsrådet myndighet til?",
      options: ["Tiltak med væpnet makt, når tiltak etter artikkel 41 anses utilstrekkelige", "Tiltak uten væpnet makt, som økonomiske sanksjoner og våpenembargo mot en part", "Å konstatere at det foreligger en trussel mot freden eller en angrepshandling", "Å opprette en internasjonal domstol for individuelt straffansvar i en konflikt"],
      explanation: "Riktig svar er tiltak med væpnet makt, betinget av at tiltak etter artikkel 41 anses utilstrekkelige. Konstateringen hører til artikkel 39 og de ikke-militære tiltakene til artikkel 41. Å bytte om på 41 og 42 er en av de dyreste feilene i temaet.",
    },
    {
      question: "Hvordan gjennomføres et vedtak etter FN-paktens artikkel 42 i praksis?",
      options: ["Rådet gir fullmakt til medlemsstater, som stiller styrkene selv", "Rådet setter inn sine egne stående styrker under FNs eget kommandoapparat", "Generalsekretæren utpeker en operasjonsledelse blant de faste medlemmene", "Generalforsamlingen fordeler styrkebidrag mellom medlemsstatene ved flertall"],
      explanation: "Riktig svar er at rådet gir fullmakt til medlemsstater, som stiller styrkene selv. Sikkerhetsrådet har verken egne styrker eller eget politi, og det er nettopp derfor et bindende vedtak ikke er det samme som et gjennomført vedtak.",
    },
    {
      question: "Hva er kjernen i FN-paktens kapittel VII?",
      options: ["Rådets myndighet til bindende tvangstiltak ved trusler mot freden", "Statenes plikt til å løse tvister seg imellom med fredelige midler først", "Generalforsamlingens myndighet til å vedta resolusjoner med bredt flertall", "Rammene for FNs fredsbevarende operasjoner og deres mandat ute i felt"],
      explanation: "Riktig svar er at kapittel VII rommer rådets tvangsmyndighet: bindende tiltak ved trusler mot freden, fredsbrudd og angrepshandlinger. Fredelig tvisteløsning står i et annet kapittel, og fredsbevaring er ikke nevnt i pakten i det hele tatt.",
    },
    {
      question: "Hvor står FNs formål, og hva er det viktigste av dem?",
      options: ["I FN-paktens artikkel 1, og det viktigste er å opprettholde internasjonal fred og sikkerhet", "I FN-paktens kapittel VII, og det viktigste er å håndheve folkeretten mellom statene", "I Verdenserklæringen om menneskerettighetene, som pakten viser til innledningsvis", "I Generalforsamlingens forretningsorden, som fastsetter organisasjonens oppgaver"],
      explanation: "Riktig svar er FN-paktens artikkel 1, der det viktigste formålet er å opprettholde internasjonal fred og sikkerhet. Kapittel VII gir myndighet til tiltak, men fastsetter ikke formålene. Formål og myndighet er to ulike ting.",
    },
    {
      question: "Hva skiller Generalforsamlingens vedtak fra Sikkerhetsrådets?",
      options: ["Forsamlingens vedtak er som hovedregel anbefalinger; rådets kan være bindende", "Forsamlingens vedtak gjelder økonomiske spørsmål; rådets gjelder militære spørsmål", "Forsamlingens vedtak krever to tredjedels flertall; rådets krever full enstemmighet", "Forsamlingens vedtak binder alle stater; rådets binder bare partene i den enkelte sak"],
      explanation: "Riktig svar er at forskjellen ligger i rettsvirkningen: forsamlingens resolusjoner er som hovedregel anbefalinger, mens rådets vedtak etter kapittel VII binder alle medlemsstatene. Forskjellen er ikke saksområde, og et rådsvedtak binder også dem som ikke sitter i rådet.",
    },
    {
      question: "Hva kjennetegner Generalforsamlingens sammensetning og stemmegivning?",
      options: ["Alle medlemsstater er representert, og hver stat har én stemme", "Alle medlemsstater er representert, med stemmevekt etter folketall", "Bare stater som bidrar til FNs budsjett, har full stemmerett der", "De femten statene i Sikkerhetsrådet har dobbeltstemme også der"],
      explanation: "Riktig svar er at alle medlemsstatene er representert med én stemme hver, uansett folketall, økonomi eller militær styrke. Det er organet som mest direkte uttrykker at stater er juridisk likeverdige.",
    },
    {
      question: "Hva kjennetegner Den internasjonale domstolens myndighet?",
      options: ["Den avgjør tvister mellom stater og har ingen tvungen domsmyndighet", "Den avgjør straffesaker mot enkeltpersoner for de groveste forbrytelsene", "Den kan stevne inn enhver FN-medlemsstat uavhengig av statens samtykke", "Den overprøver Sikkerhetsrådets vedtak når et medlem klager på dem"],
      explanation: "Riktig svar er at domstolen avgjør tvister mellom stater og mangler tvungen domsmyndighet: en stat må ha samtykket for å bli part. Individuelt straffansvar hører til den faste straffedomstolen, og de to forveksles ofte.",
    },
    {
      question: "Hva er generalsekretærens rolle i fredsspørsmål?",
      options: ["Å bringe saker inn for Sikkerhetsrådet og megle, uten selv å kunne vedta tiltak", "Å avgjøre om en situasjon utgjør en trussel mot freden etter FN-paktens artikkel 39", "Å lede Sikkerhetsrådets møter og avgjøre ved stemmelikhet i materielle spørsmål", "Å fordele sanksjonsbyrder mellom medlemsstatene når rådet har vedtatt tiltak"],
      explanation: "Riktig svar er at generalsekretæren kan bringe saker inn for rådet og brukes som megler, men ikke har beslutningsmyndighet i fredsspørsmål. Å skrive at generalsekretæren bestemte noe om tvangstiltak, er en vanlig upresisjon.",
    },
    {
      question: "Hva er et bindende vedtak i denne sammenhengen?",
      options: ["Et vedtak medlemsstatene er rettslig forpliktet til å gjennomføre", "Et vedtak som alle medlemsstatene har stemt for i Generalforsamlingen", "Et vedtak som Sikkerhetsrådet gjennomfører med sine egne styrker i felt", "Et vedtak som ikke kan endres uten et nytt vedtak med samme flertall"],
      explanation: "Riktig svar er at et bindende vedtak er ett medlemsstatene er rettslig forpliktet til å gjennomføre. Bindende betyr rettslig forpliktende, ikke automatisk gjennomført: rådet har ingen egne styrker, og gjennomføringen ligger fortsatt hos statene.",
    },
    {
      question: "Hva kjennetegner klassisk fredsbevaring?",
      options: ["Samtykke fra partene, upartiskhet og maktbruk i hovedsak til selvforsvar", "Hjemmel i FN-paktens artikkel 42 og adgang til å handle mot en parts vilje", "Stående styrker som organisasjonen selv rekrutterer, eier og utstyrer", "Krav om at rådet først har konstatert en angrepshandling etter artikkel 39"],
      explanation: "Riktig svar er samtykke, upartiskhet og maktbruk i hovedsak til selvforsvar. Ordningen er ikke nevnt i FN-pakten og vokste fram i praksis. Å gjennomtvinge fred mot en parts vilje er et tiltak etter kapittel VII og noe helt annet.",
    },
    {
      question: "Hvorfor fikk nettopp de fem faste medlemmene vetorett i 1945?",
      options: ["Fordi ordningen var prisen for at de mektigste statene skulle bli med og bli værende", "Fordi de var de mest folkerike statene i verden på opprettelsestidspunktet", "Fordi de hadde påtatt seg å finansiere hoveddelen av organisasjonens virksomhet", "Fordi de var de eneste som hadde ratifisert pakten før den trådte i kraft"],
      explanation: "Riktig svar er at vetoretten var prisen for at de mektigste statene skulle bli med og bli værende. Begrunnelsen var funksjonell: en fredsorganisasjon uten de sterkeste ville ikke kunne gjøre noe, og forgjengeren Folkeforbundet var det stående eksempelet.",
    },
    {
      question: "Hva menes med at Sikkerhetsrådets handlingslammelse er systematisk?",
      options: ["Den inntreffer der et fast medlem er part eller nær alliert av en part", "Den inntreffer i saker der rådet ikke oppnår ni av femten stemmer for forslaget", "Den inntreffer når Generalforsamlingen har uttalt seg i strid med rådets linje", "Den inntreffer i alle saker som gjelder bruk av militærmakt etter artikkel 42"],
      explanation: "Riktig svar er at lammelsen inntreffer der et fast medlem selv er part eller nær alliert av en part. Det følger direkte av stemmereglene: vetoretten kan brukes i egen sak, og pakten har ingen ordning som utelukker det.",
    },
    {
      question: "Hva er forskjellen på effektivitet og legitimitet som målestokk for Sikkerhetsrådet?",
      options: ["Effektivitet måles mot et mål; legitimitet mot om vedtakene godtas som rettmessige", "Effektivitet måles i antall vedtak per år; legitimitet i antall medlemsstater i FN", "Effektivitet gjelder saker etter kapittel VII; legitimitet gjelder fredelig tvisteløsning", "Effektivitet vurderes av rådet selv; legitimitet vurderes av Den internasjonale domstolen"],
      explanation: "Riktig svar er at effektivitet måles mot et mål, mens legitimitet måles mot om vedtakene godtas som rettmessige. De kan trekke i hver sin retning, og en drøfting som ikke sier hvilken av dem den måler, svarer på to spørsmål samtidig.",
    },
    {
      question: "Hva er kollektiv sikkerhet som prinsipp?",
      options: ["At medlemmene forplikter seg til å reagere samlet mot et medlem som bryter freden", "At medlemmene forplikter seg til å møte et angrep utenfra kretsen samlet og felles", "At medlemmene forplikter seg til å bygge opp forsvaret til et felles avtalt nivå", "At medlemmene overlater bruken av militærmakt til en felles overnasjonal kommando"],
      explanation: "Riktig svar er reaksjon samlet mot et medlem som bryter freden — trusselen kommer altså innenfra kretsen. Å møte et angrep utenfra samlet er kollektivt forsvar, som NATO bygger på, og forvekslingen er en dokumentert enkeltfeil i faget.",
    },
    {
      question: "Hvordan leser realismen Sikkerhetsrådet?",
      options: ["Som en stormaktskonsert der betydningen er avledet av de sterkestes interesser", "Som en ordning uten noen som helst betydning for hva stater faktisk gjør i praksis", "Som en normskaper som definerer hva som regnes som legitim maktbruk mellom stater", "Som en løsning på kollektive handlingsproblemer statene ikke kan løse hver for seg"],
      explanation: "Riktig svar er at realismen ser rådet som en stormaktskonsert med avledet betydning. Den sier ikke at rådet er betydningsløst — bare at betydningen kommer av at mektige stater bruker det. Normskaping er konstruktivismens lesning, og kollektive handlingsproblemer er liberal institusjonalismes.",
    },
    {
      question: "Hva er liberal institusjonalismes hovedargument for at Sikkerhetsrådet betyr noe?",
      options: ["At det løser kollektive handlingsproblemer og gjør forpliktelser troverdige", "At det gir de fem faste medlemmene et forum der de kan avklare interessene sine", "At det setter normer for hva som regnes som legitim maktbruk mellom statene", "At det har egne styrker og dermed kan håndheve vedtakene sine av egen kraft"],
      explanation: "Riktig svar er at rådet løser kollektive handlingsproblemer, reduserer usikkerhet og gjør troverdige forpliktelser mulige. Målestokken er absolutte gevinster: om alle kommer bedre ut med ordningen enn uten. Rådet har ikke egne styrker.",
    },
    {
      question: "Hva legger konstruktivismen mest vekt på ved Sikkerhetsrådet?",
      options: ["At rådet skaper og opprettholder normer om hva som er legitim maktbruk", "At rådet reduserer transaksjonskostnadene ved samarbeid mellom medlemsstatene", "At rådet speiler maktforholdene fra 1945 og fungerer som stormaktenes redskap", "At rådet er det eneste organet med myndighet til å fatte rettslig bindende vedtak"],
      explanation: "Riktig svar er at rådet skaper og opprettholder normer om legitim maktbruk. At stater bruker ressurser på å skaffe autorisasjon de kunne handlet uten, er selve indikasjonen. Transaksjonskostnader er liberal institusjonalismes argument, og 1945-maktforholdene er realismens.",
    },
    {
      question: "Hva er realismens blindsone i lesningen av FN?",
      options: ["Den kostbare etterlevelsen fra stater uten egeninteresse i den enkelte saken", "At rådet er blokkert i saker der et fast medlem selv er part i konflikten", "At reform av pakten krever tilslutning fra de faste medlemmene selv", "At de fem faste fikk plassene sine på grunn av maktforholdene i 1945"],
      explanation: "Riktig svar er den kostbare etterlevelsen uten avsender: sanksjonsregimer fulgt av stater uten egeninteresse, og autorisasjon søkt av stater som kunne handlet uten. De øvrige forholdene er nettopp det realismen forklarer godt.",
    },
    {
      question: "På hvilket analysenivå hører Sikkerhetsrådet primært hjemme?",
      options: ["Systemnivå, siden det er et trekk ved forholdet mellom statene ingen kan endre alene", "Statsnivå, siden hvert medlem stemmer ut fra sine egne innenrikspolitiske hensyn", "Individnivå, siden utfallet avgjøres av forhandlerne og deres personlige relasjoner", "Rådet lar seg ikke plassere på nivåene, siden det er en organisasjon og ikke en faktor"],
      explanation: "Riktig svar er systemnivå: rådet er et trekk ved forholdet mellom statene, felles for alle, og ingen enkeltstat kan endre det alene. Stats- og individnivået forklarer variasjon nivået ikke fanger, men de bærer ikke hoveddisposisjonen.",
    },
  ],
  'stv1200-4-2': [
    {
      question: "Hva står i Atlanterhavspaktens artikkel 5?",
      options: ["At et væpnet angrep mot ett medlem skal betraktes som et angrep mot alle", "At medlemmene skal bruke minst to prosent av bruttonasjonalproduktet på forsvar", "At medlemmene skal stille styrker under en felles overnasjonal kommando i fred", "At alliansen kan sette inn styrker utenfor traktatområdet ved flertallsvedtak"],
      explanation: "Riktig svar er at et væpnet angrep mot ett eller flere medlemmer skal betraktes som et angrep mot alle, og at hvert medlem da skal bistå. Forpliktelsen er ubetinget om at medlemmene skal reagere, men åpen om hvordan.",
    },
    {
      question: "Hva er kollektivt forsvar?",
      options: ["En ordning der en gruppe stater forplikter seg til å møte et angrep utenfra samlet", "En ordning der medlemmene reagerer samlet mot et medlem som bryter freden", "En ordning der stater overlater forsvarspolitikken til et felles overnasjonalt organ", "En ordning der stater lover å ikke bruke militærmakt mot hverandre i noen situasjon"],
      explanation: "Riktig svar er en forpliktelse til å møte et angrep utenfra samlet. Reaksjon mot et medlem innenfra kretsen er kollektiv sikkerhet, som FN-pakten bygger på, og forvekslingen er den mest dokumenterte enkeltfeilen i temaet.",
    },
    {
      question: "Hva skiller kollektivt forsvar fra kollektiv sikkerhet?",
      options: ["Om trusselen kommer fra utenfor eller innenfra kretsen av medlemmer", "Om ordningen bruker militære eller økonomiske midler mot den som bryter freden", "Om ordningen er forankret i en traktat eller bare i en politisk erklæring", "Om ordningen omfatter små stater eller bare stater med betydelig militær kapasitet"],
      explanation: "Riktig svar er hvor trusselen kommer fra: utenfra kretsen ved kollektivt forsvar, innenfra ved kollektiv sikkerhet. Midlene kan være de samme i begge, og begge kan være traktatfestet. Det er retningen som skiller dem.",
    },
    {
      question: "Hvor mange ganger er Atlanterhavspaktens artikkel 5 påberopt?",
      options: ["Én gang, 12. september 2001", "To ganger, begge under den kalde krigen", "Ingen ganger; bestemmelsen har aldri vært utløst", "Flere ganger, senest ved operasjoner utenfor traktatområdet"],
      explanation: "Riktig svar er én gang, 12. september 2001, dagen etter terrorangrepene mot USA. Merk at lav bruksfrekvens ikke er et tegn på liten betydning: avskrekking virker nettopp når den aldri utløses.",
    },
    {
      question: "Hva er den integrerte militære kommandostrukturen?",
      options: ["Et fast felles apparat med stående kommandoer, felles planverk og felles øving", "En felles hær som alliansen selv rekrutterer, utstyrer og betaler lønn til", "En ordning der ett medlemsland leder alle operasjoner i en fastsatt turnus", "Et overnasjonalt organ som kan pålegge medlemmene å sette inn styrker"],
      explanation: "Riktig svar er et fast felles apparat med stående kommandoer, felles planverk, øving og standarder. Styrkene er nasjonale og settes under felles kommando etter nasjonale beslutninger — alliansen har ikke egne styrker.",
    },
    {
      question: "Hva er 2-prosentmålet?",
      options: ["En retningslinje om at hvert medlem skal bruke minst to prosent av BNP på forsvar", "En traktatbestemmelse om at hvert medlem skal stille to prosent av styrkene sine", "En regel om at forsvarsbudsjettet skal vokse med minst to prosent i året", "Et krav om at to prosent av statsbudsjettet skal gå til felles alliansefinansiering"],
      explanation: "Riktig svar er en retningslinje om minst to prosent av bruttonasjonalproduktet til forsvar. Det er en politisk forpliktelse, ikke en traktatbestemmelse, og det finnes ingen sanksjon mot dem som ligger under.",
    },
    {
      question: "Hva måler 2-prosentmålet, og hva måler det ikke?",
      options: ["Det måler innsats, ikke militær evne og ikke nytte for alliansen", "Det måler militær evne, men ikke hvor raskt styrkene kan settes inn", "Det måler risiko, siden det viser hvem som stiller styrker i operasjoner", "Det måler alt et medlem bidrar med, samlet i ett sammenlignbart tall"],
      explanation: "Riktig svar er at målet måler innsats, ikke evne og ikke nytte. Penger brukt på personell teller likt med penger brukt på materiell som faktisk kan settes inn, og et stort land under målet kan bidra mer i absolutte tall enn et lite over.",
    },
    {
      question: "Hva er gratispassasjerproblemet i en allianse?",
      options: ["At avskrekkingen virker for alle medlemmene, også for dem som bidrar lite", "At små medlemsland får dekket kostnadene sine av de større medlemslandene", "At medlemmer melder seg inn uten å ha til hensikt å oppfylle forpliktelsen", "At alliansen tar opp nye medlemmer som ikke kan forsvare seg selv i det hele tatt"],
      explanation: "Riktig svar er at sikkerheten alliansen produserer, i stor grad er et fellesgode: avskrekkingen virker for alle, også for dem som har bidratt lite. Mekanismen er strukturell og forutsetter verken uærlighet eller uvilje hos noe medlem.",
    },
    {
      question: "Hva er de tre leddene som må være på plass for at avskrekking skal virke?",
      options: ["Kapasitet til å påføre kostnaden, kommunisert vilje, og motpartens tro på begge", "Militær overlegenhet, en formell traktat, og enighet blant alle medlemmene", "Styrker på stedet, forhåndslagret materiell, og en felles kommandostruktur", "Et klart definert trusselbilde, et forsvarsbudsjett, og en plan for opptrapping"],
      explanation: "Riktig svar er kapasitet, kommunisert vilje og at motparten tror på begge deler. Det tredje leddet er det som ikke kan kjøpes, og derfor er det der drøftingen av troverdighet hører hjemme.",
    },
    {
      question: "Hva er troverdighetsproblemet i en forsvarsallianse?",
      options: ["At en garanti bare virker hvis motparten tror den vil bli innfridd", "At medlemmene ikke kan kontrollere om de andre øker forsvarsbudsjettene sine", "At alliansen mangler et organ som kan pålegge medlemmene å stille styrker", "At medlemmene er uenige om hvem den ytre motparten egentlig er i dag"],
      explanation: "Riktig svar er at garantien bare virker hvis motparten tror den vil bli innfridd. Kjernen er at intensjoner ikke kan observeres: en stat kan være fullt innstilt på å innfri og likevel ikke kunne bevise det på forhånd.",
    },
    {
      question: "Hva er utvidet avskrekking?",
      options: ["Å avskrekke et angrep på en annen enn seg selv, typisk på en alliert", "Å avskrekke flere ulike typer angrep med den samme militære kapasiteten", "Å utvide avskrekkingen til å gjelde områder utenfor traktatområdet også", "Å bygge opp avskrekkingen gradvis over tid i takt med trusselbildet"],
      explanation: "Riktig svar er å avskrekke angrep på en annen enn seg selv. Det er her troverdighetsproblemet er størst, fordi det er lettere å tro at en stat forsvarer seg selv enn at den tar store tap for en alliert.",
    },
    {
      question: "Hva er avskrekking ved straff?",
      options: ["En trussel om kostnad påført i gjengjeld etter at angrepet er utført", "En trussel om at angrepet vil bli stanset før det når målet sitt", "En trussel om økonomiske sanksjoner i stedet for militære mottiltak", "En trussel om at alliansen vil ta opp flere medlemmer som svar"],
      explanation: "Riktig svar er en trussel om kostnad påført etterpå. Styrken er at den ikke krever at angrepet kan stanses; svakheten er troverdighet, siden en svært ødeleggende gjengjeldelse er vanskelig å tro på for en mindre krenkelse.",
    },
    {
      question: "Hva er avskrekking ved nektelse?",
      options: ["At styrkene på stedet gjør selve angrepet mislykket, slik at det ikke lønner seg", "At angriperen nektes adgang til alliansens felles kommandostruktur og planverk", "At alliansen nekter å forhandle med en motpart som har brutt en avtale tidligere", "At gjengjeldelsen holdes hemmelig, slik at motparten ikke kan planlegge rundt den"],
      explanation: "Riktig svar er at styrkene på stedet gjør angrepet mislykket. Styrken er troverdighet — motparten trenger bare regne på styrkene som allerede står der — og svakheten er prisen, siden nektelse krever styrker på stedet kontinuerlig.",
    },
    {
      question: "Hvorfor styrker militær tilstedeværelse troverdigheten til en forsvarsgaranti?",
      options: ["Fordi styrker som står der, blir rammet av et angrep uansett hva noen bestemmer", "Fordi styrkene som stasjoneres, alltid er store nok til å stanse et angrep alene", "Fordi tilstedeværelsen gjør at alliansen kan handle uten nasjonale beslutninger", "Fordi vertslandet da slipper å bruke to prosent av bruttonasjonalproduktet på forsvar"],
      explanation: "Riktig svar er at styrker på stedet blir rammet uansett, slik at beslutningen om å involvere seg i praksis er tatt på forhånd. Det er derfor tilstedeværelse omtales som en måte å gjøre et løfte selvbindende på — og en liten avdeling kan binde like godt som en stor.",
    },
    {
      question: "Hva var svakheten ved strategien massiv gjengjeldelse?",
      options: ["At en trussel om alt eller ingenting er lite troverdig mot et begrenset angrep", "At den krevde svært store konvensjonelle styrker i alle medlemslandene samtidig", "At den forutsatte enighet blant alle medlemmene før den kunne utløses i praksis", "At den bare kunne brukes mot angrep innenfor selve traktatområdet til alliansen"],
      explanation: "Riktig svar er at en trussel om alt eller ingenting er lite troverdig mot noe lite. Motparten kunne resonnere at ingen ville utløse en total gjengjeldelse for en begrenset handling — og det er skoleeksempelet på troverdighetsproblemet.",
    },
    {
      question: "Hva var poenget med å gå over til fleksibel respons?",
      options: ["Å bygge inn trinn, slik at svaret kunne stå i forhold til handlingen", "Å redusere alliansens samlede kostnader ved å kutte i konvensjonelle styrker", "Å flytte beslutningsmyndigheten fra medlemsstatene til den felles kommandoen", "Å gjøre det mulig å operere utenfor traktatområdet uten et nytt traktatgrunnlag"],
      explanation: "Riktig svar er å bygge inn trinn, slik at et begrenset angrep kunne møtes med begrensede midler. Dette var ikke en nedtrapping: strategien forutsetter mer, ikke mindre, militær kapasitet, fordi de lavere trinnene må finnes.",
    },
    {
      question: "Hva kjennetegner operasjoner utenfor traktatområdet?",
      options: ["De besluttes sak for sak og utløses ikke av Atlanterhavspaktens artikkel 5", "De utløses av artikkel 5 på samme måte som forsvar av medlemmenes territorium", "De krever et forutgående vedtak i Generalforsamlingen med to tredjedels flertall", "De gjennomføres av alliansens egne styrker uten bidrag fra medlemsstatene"],
      explanation: "Riktig svar er at slike operasjoner besluttes sak for sak og ikke utløses av artikkel 5. De forplikter derfor ikke medlemmene på samme måte som forsvarsforpliktelsen, og sammenblandingen er en vanlig feil i temaet.",
    },
    {
      question: "Hvordan leser realismen NATO?",
      options: ["Som ytre balansering: et interessefellesskap som holder så lenge trusselen gjør det", "Som et sikkerhetsfellesskap der medlemmene ikke lenger regner med krig seg imellom", "Som en institusjon med egenvekt fordi den senker kostnadene ved å samarbeide", "Som en overnasjonal ordning som kan binde medlemmene mot deres egen vilje"],
      explanation: "Riktig svar er ytre balansering: stater slutter seg sammen mot en felles trussel fordi de ikke kan møte den alene. Sikkerhetsfellesskap er konstruktivismens lesning, og egenvekt gjennom lavere kostnader er liberal institusjonalismes.",
    },
    {
      question: "Hva er konstruktivismens lesning av NATO?",
      options: ["At alliansen er et sikkerhetsfellesskap der krig mellom medlemmene er utenkelig", "At alliansen er et redskap den tyngste garantisten bruker for å få innflytelse", "At alliansen består fordi apparatet er billigere enn å forhandle på nytt hver gang", "At alliansen er en avtale som må reforhandles når trusselbildet endrer seg"],
      explanation: "Riktig svar er sikkerhetsfellesskapet: en krets stater som har sluttet å regne med krig mellom seg selv og forstår seg selv som å høre sammen. Kjennetegnet er ikke god stemning, men at krig mellom medlemmene har falt ut av planleggingen.",
    },
    {
      question: "Hva er realismens blindsone i lesningen av NATO?",
      options: ["At alliansen bestod og utvidet seg lenge uten et tydelig felles trusselbilde", "At medlemmene er vedvarende uenige om hvordan byrdene skal fordeles mellom dem", "At medlemmenes engasjement varierer med hvor utsatt de selv er geografisk", "At alliansen er avhengig av at det tyngste medlemmet fortsatt stiller opp"],
      explanation: "Riktig svar er alliansens levetid: den mest kjente realistiske prediksjonen var at NATO ville svekkes når trusselen forsvant, og det skjedde ikke. De øvrige forholdene er nettopp det realismen forklarer godt.",
    },
  ],
  'stv1200-4-3': [
    {
      question: "Hvilke fire funksjoner har internasjonale organisasjoner ifølge faget?",
      options: ["Informasjonsdeling, arena for forhandling, regelskaping og overvåking, og operative oppgaver", "Lovgivning, rettshåndhevelse, tvisteløsning og forvaltning av et felles budsjett", "Konfliktforebygging, konfliktløsning, gjenoppbygging og økonomisk bistand til medlemslandene", "Medlemsopptak, regeltolkning, sanksjonering av brudd og utelukkelse av medlemmer"],
      explanation: "Riktig svar er informasjonsdeling, arena, regelskaping med overvåking, og operative oppgaver. De to første gjør samarbeid lettere, de to siste gjør det forpliktende eller utfører noe selv. Organisasjonene driver ikke lovgivning i egentlig forstand.",
    },
    {
      question: "Hvilken funksjon virker mest direkte på frykten for at en avtalepartner jukser?",
      options: ["Informasjonsdelingen, fordi den gjør brudd synlige for alle de andre partene", "Arenaen, fordi partene da møtes jevnlig og kan ta opp problemer med hverandre", "De operative oppgavene, fordi organisasjonen da er til stede der avtalen gjelder", "Regelskapingen, fordi tydelige regler gjør det klarere hva som teller som brudd"],
      explanation: "Riktig svar er informasjonsdelingen: den gjør brudd synlige, og en stat som vet at brudd oppdages, har både svakere insentiv til å bryte og mindre grunn til å frykte at andre gjør det. Å gjøre synlig er likevel ikke det samme som å håndheve.",
    },
    {
      question: "Hva vil det si at en institusjon har selvstendig egenvekt?",
      options: ["At den endrer utfall som ellers ville blitt annerledes", "At den er uavhengig av statene som opprettet og finansierer den", "At den kan fatte vedtak som binder medlemmene uten deres samtykke", "At den har eget budsjett, eget personell og egne lokaler i flere land"],
      explanation: "Riktig svar er at institusjonen endrer utfall som ellers ville blitt annerledes. Påstanden er ikke at den er uavhengig av statene — ingen hevder det — og å angripe den sterkere versjonen er et klassisk feilgrep i denne drøftingen.",
    },
    {
      question: "Hva er realismens syn på internasjonale organisasjoner?",
      options: ["At de er redskaper for mektige stater, med avledet og ikke selvstendig betydning", "At de er uten betydning for hva stater gjør, og derfor ikke verdt å analysere", "At de har egenvekt fordi de senker transaksjonskostnadene ved samarbeid", "At de former statenes interesser gjennom normer om hva som er akseptabelt"],
      explanation: "Riktig svar er at organisasjonene er redskaper med avledet betydning. Realismen sier ikke at de er betydningsløse — en organisasjon kan være svært virksom nettopp fordi de sterkeste ønsker det, men det er ikke egenvekt.",
    },
    {
      question: "Hvilke tre mekanismer bærer liberal institusjonalismes påstand om egenvekt?",
      options: ["Redusert usikkerhet, lavere transaksjonskostnader og troverdige forpliktelser", "Felles regler, felles budsjett og et sekretariat med selvstendig initiativrett", "Overnasjonal myndighet, bindende tvisteløsning og adgang til å ilegge sanksjoner", "Felles normer, felles identitet og et fast forum for å begrunne handlingene sine"],
      explanation: "Riktig svar er redusert usikkerhet, lavere transaksjonskostnader og troverdige forpliktelser. Felles normer og identitet hører til konstruktivismens argument, og overnasjonal myndighet finnes bare i noen få ordninger.",
    },
    {
      question: "Hvilken gevinstlogikk hviler realismens skepsis til samarbeid på?",
      options: ["Relative gevinster: det holder ikke å tjene på avtalen hvis en rival tjener mer", "Absolutte gevinster: spørsmålet er om alle kommer bedre ut med avtalen enn uten", "Positivsum: at samarbeid over tid gir mer til alle enn det koster å opprettholde", "Nullsum i den forstand at all handel mellom stater er et tapsprosjekt for begge"],
      explanation: "Riktig svar er relative gevinster: gevinsten måles mot hva motparten får. Absolutte gevinster er liberalismens målestokk, der spørsmålet er om alle kommer bedre ut med ordningen enn uten den.",
    },
    {
      question: "Hva er det avgjørende empiriske spørsmålet i striden om organisasjoners egenvekt?",
      options: ["Hva som skjer med en ordning når de som opprettet den, mister interessen for den", "Hvor mange stater som er medlemmer av ordningen på et gitt tidspunkt", "Om ordningen har et eget budsjett og et sekretariat med fast ansatte", "Om ordningen ble opprettet ved traktat eller bare ved en politisk erklæring mellom partene"],
      explanation: "Riktig svar er hva som skjer når interessen bak ordningen faller bort. Faller den sammen, styrker det realismen; består den fordi medlemmene sparer kostnader og unngår usikkerhet, styrker det liberal institusjonalisme.",
    },
    {
      question: "Hva er konstruktivismens bidrag til spørsmålet om organisasjoners betydning?",
      options: ["At organisasjonene er steder der staters interesser formes, ikke bare møtes", "At organisasjonene senker kostnadene ved å forhandle fram nye avtaler", "At organisasjonene speiler maktfordelingen blant medlemmene ved opprettelsen", "At organisasjonene er avhengige av bidrag fra noen få store medlemsland"],
      explanation: "Riktig svar er at organisasjonene er steder der interesser formes gjennom normer, ikke bare møtes. Konstituerende normer skaper kategorier som legitim maktbruk; regulerende normer styrer atferden innenfor dem.",
    },
    {
      question: "Hva er folkerettens tre hovedkilder?",
      options: ["Traktater, sedvane og alminnelige rettsprinsipper", "Traktater, resolusjoner fra Generalforsamlingen og nasjonal lovgivning", "Sedvane, avgjørelser fra Den internasjonale domstolen og juridisk teori", "Traktater, vedtak i Sikkerhetsrådet og erklæringer fra regionale organisasjoner"],
      explanation: "Riktig svar er traktater, sedvane og alminnelige rettsprinsipper. Felles for dem er at de hviler på statenes samtykke: en stat er bundet fordi den har sluttet seg til, eller fordi den selv har vært med på å skape praksisen.",
    },
    {
      question: "Hva er håndhevelsesproblemet i folkeretten?",
      options: ["At ingen myndighet over statene kan tvinge dem til å følge reglene", "At reglene er så uklare at det sjelden lar seg fastslå om et brudd har skjedd", "At bare stater som har samtykket, er bundet av traktatene de har sluttet seg til", "At Den internasjonale domstolen har for få saker til å bygge en fast praksis"],
      explanation: "Riktig svar er at ingen myndighet over statene kan tvinge dem. Håndhevelsen må komme fra statene selv, gjennom mottiltak, press og omdømmekostnader — eller gjennom Sikkerhetsrådet etter kapittel VII, den ene ordningen som kan pålegge noe bindende.",
    },
    {
      question: "Hvilke fire forskjeller skiller folkerett fra nasjonal rett?",
      options: ["Håndhevelse, hierarki mellom kildene, domsmyndighet og presedensvirkning", "Innhold, alvorlighetsgrad, geografisk rekkevidde og hvem reglene retter seg mot", "Kilder, tolkningsmetode, språk og hvilke domstoler som behandler saken", "Vedtaksform, ikrafttredelse, endringsadgang og oppsigelsesfrist for partene"],
      explanation: "Riktig svar er håndhevelse, hierarki, domsmyndighet og presedens. Alle fire gjelder apparatet rundt reglene, ikke reglenes innhold eller alvor — et folkerettsbrudd kan ha langt større konsekvenser enn et lovbrudd.",
    },
    {
      question: "Hva betyr det at internasjonale domstoler som hovedregel mangler tvungen domsmyndighet?",
      options: ["At en stat må ha samtykket på en eller annen måte for å kunne bli part i en sak", "At avgjørelsene deres bare er rådgivende og aldri blir bindende for partene i saken", "At de bare kan behandle saker som Sikkerhetsrådet har henvist til dem", "At de bare kan behandle saker mellom stater som er medlemmer av FN"],
      explanation: "Riktig svar er at samtykke kreves: ingen stat kan stevnes inn mot sin vilje slik en privatperson kan stevnes nasjonalt. Det er en direkte følge av at det ikke finnes noen myndighet over statene.",
    },
    {
      question: "Hva er forholdet mellom manglende håndhevelse og folkerettens rettslige karakter?",
      options: ["Reglene er rettslige selv om tvangsapparatet mangler — de har kilder og kan brytes", "Reglene er ikke rettslige i egentlig forstand, siden de ikke kan håndheves", "Reglene er rettslige bare når Sikkerhetsrådet har gjort dem bindende ved vedtak", "Reglene er rettslige bare for de statene som har akseptert en domstols myndighet"],
      explanation: "Riktig svar er at reglene er rettslige selv om tvangsapparatet mangler: de har kilder, de tolkes med rettslige metoder, og brudd kan konstateres. Det som mangler, er ordningen for å reagere på bruddet.",
    },
    {
      question: "Hva er individansvar i folkerettslig forstand?",
      options: ["At enkeltpersoner kan straffes for grove folkerettsbrudd, også når de handlet på ordre", "At en stat kan holdes ansvarlig for handlingene til sine egne tjenestemenn", "At enkeltpersoner kan bringe en sak mot sin egen stat for en internasjonal domstol", "At den enkelte soldat er ansvarlig for å vurdere lovligheten av alle ordrer"],
      explanation: "Riktig svar er at enkeltpersoner kan holdes strafferettslig ansvarlige for de groveste bruddene, og at det å ha handlet på ordre ikke i seg selv fritar. Statsansvar er et eget spor som løper ved siden av.",
    },
    {
      question: "Hva var det prinsipielt nye ved Nürnberg-prosessene?",
      options: ["At enkeltpersoner ble stilt for en internasjonal domstol for handlinger på statens vegne", "At en stat for første gang ble dømt til å betale erstatning til en annen stat", "At en fast internasjonal domstol ble opprettet ved traktat lenge før handlingene skjedde", "At FNs sikkerhetsråd for første gang brukte tvangsmyndigheten sin etter kapittel VII"],
      explanation: "Riktig svar er at enkeltpersoner ble stilt til ansvar for handlinger utført på statens vegne, og at ordre ikke ble godtatt som frifinnelsesgrunn. Domstolen ble opprettet i etterkant for én konflikt, og det er nettopp den innvendingen senere ordninger har forsøkt å svare på.",
    },
    {
      question: "Hva opprettet Roma-vedtekten, og når ble den vedtatt?",
      options: ["En fast internasjonal straffedomstol for individuelt straffansvar, vedtatt i 1998", "En fast domstol for tvister mellom stater, vedtatt sammen med FN-pakten i 1945", "Et system av regionale menneskerettighetsdomstoler, vedtatt på 1950-tallet", "En internasjonal sannhetskommisjon for grove overgrep, vedtatt på 2000-tallet"],
      explanation: "Riktig svar er en fast internasjonal straffedomstol for individuelt straffansvar, vedtatt i 1998. Domstolen for tvister mellom stater ble opprettet med FN-pakten, og de to forveksles ofte i kortsvar om internasjonal rett.",
    },
    {
      question: "Hva betyr det at den faste straffedomstolen er komplementær?",
      options: ["At den trer inn når nasjonale myndigheter ikke kan eller vil forfølge saken selv", "At den behandler saker parallelt med nasjonale domstoler i alle medlemsstater", "At den bare behandler saker som Sikkerhetsrådet har henvist til den ved vedtak", "At den utfyller Den internasjonale domstolen ved å behandle mellomstatlige tvister"],
      explanation: "Riktig svar er at den trer inn når nasjonale myndigheter ikke er i stand til eller villige til å forfølge. Hovedregelen er nasjonal forfølgning, og det er nettopp denne ordningen som gjør at domstolen ikke er et generelt inngrep i suvereniteten.",
    },
    {
      question: "Hva skiller Den internasjonale domstolen fra den faste straffedomstolen?",
      options: ["Den ene avgjør tvister mellom stater; den andre behandler individuelt straffansvar", "Den ene er opprettet ved traktat; den andre er opprettet ved vedtak i Sikkerhetsrådet", "Den ene har tvungen domsmyndighet; den andre krever samtykke fra partene i saken", "Den ene behandler menneskerettighetssaker; den andre behandler handelstvister"],
      explanation: "Riktig svar er at den ene avgjør tvister mellom stater og den andre behandler individuelt straffansvar. Begge hviler på statenes tilslutning, og sammenblandingen er en av de vanligste feilene i denne delen av faget.",
    },
    {
      question: "Hva er de to unntakene fra forbudet mot maktbruk mot en annen stat?",
      options: ["Selvforsvar, og vedtak i Sikkerhetsrådet etter FN-paktens kapittel VII", "Selvforsvar, og avgjørelse fra Den internasjonale domstolen i en tvist", "Vedtak i Generalforsamlingen med to tredjedels flertall, og selvforsvar", "Humanitær intervensjon, og vedtak i en regional forsvarsallianse med konsensus"],
      explanation: "Riktig svar er selvforsvar og vedtak i Sikkerhetsrådet etter kapittel VII. Om det finnes eller bør finnes et videre grunnlag når rådet er blokkert, er nettopp det som drøftes i spørsmålet om humanitær intervensjon.",
    },
    {
      question: "Hva er kjernen i spenningen mellom suverenitet og menneskerettigheter?",
      options: ["At ikke-innblandingsnormen og menneskerettighetsforpliktelsene peker i hver sin retning", "At menneskerettighetene er uklare, mens suvereniteten er presist definert i pakten", "At bare noen stater har sluttet seg til menneskerettighetskonvensjonene", "At menneskerettighetene ikke er en del av folkeretten i egentlig forstand"],
      explanation: "Riktig svar er at begge prinsippene er godt forankret i folkeretten og peker i hver sin retning i samme sak. Uenigheten gjelder ikke fakta, men hvilket prinsipp som skal vike når de kolliderer.",
    },
    {
      question: "Hva er kjernen i tanken om ansvaret for å beskytte?",
      options: ["At suverenitet omformuleres som et ansvar, som går over på fellesskapet ved svikt", "At enhver stat har rett til å gripe inn militært når grove overgrep pågår et annet sted", "At menneskerettighetskonvensjonene skal ha forrang foran alle andre folkerettsregler", "At Den internasjonale domstolen kan pålegge en stat å beskytte sin egen befolkning"],
      explanation: "Riktig svar er at suvereniteten omformuleres som et ansvar som går over på det internasjonale samfunnet når staten selv svikter. Den mest omstridte delen er hvem som da kan handle — og der peker konstruksjonen tilbake til Sikkerhetsrådet og vetoretten.",
    },
    {
      question: "Hvordan virker overvåkingen i et menneskerettighetsregime i hovedsak?",
      options: ["Gjennom rapportering, gjennomgang og omdømmekostnader, ikke gjennom tvang", "Gjennom bindende dommer som kan tvangsfullbyrdes i medlemsstatene", "Gjennom sanksjoner vedtatt av Generalforsamlingen mot stater som bryter reglene", "Gjennom inspeksjoner som gjennomføres uanmeldt uten statens forhåndssamtykke"],
      explanation: "Riktig svar er rapportering, gjennomgang og omdømme. Forpliktelsen er rettslig, men håndhevelsen møter det samme problemet som resten av folkeretten, og derfor er synliggjøring det viktigste virkemiddelet i praksis.",
    },
    {
      question: "Hva kjennetegner en katalogbesvarelse i en teoridrøfting?",
      options: ["Avsnittene kan bytte plass uten at noe blir feil, fordi de ikke svarer på hverandre", "Avsnittene er for korte til at perspektivene blir tilstrekkelig grundig framstilt", "Avsnittene mangler eksempler, slik at påstandene ikke blir empirisk forankret", "Avsnittene tar med alle tre perspektivene i stedet for å velge ut to av dem"],
      explanation: "Riktig svar er at avsnittene kan bytte plass uten at noe blir feil. I en kontrastering kan de ikke det, fordi det andre svaret er formulert som et svar på det første, på samme spørsmål. Å ta med tre perspektiver er i seg selv ikke feil, bare mindre effektivt.",
    },
    {
      question: "Hva er liberal institusjonalismes blindsone på internasjonale organisasjoner?",
      options: ["At håndhevelsen systematisk svikter i de sakene som betyr aller mest", "At ordninger kan overleve endringer i medlemmenes interesser over tid", "At stater etterlever avgjørelser de taper på, i saker med lav innsats", "At organisasjonene reduserer usikkerhet ved å samle og spre informasjon"],
      explanation: "Riktig svar er systematikken i hvor ordningene ikke virker: svikten kommer der et mektig medlem er part, altså der innsatsen er høyest. De øvrige forholdene er nettopp det liberal institusjonalisme forklarer godt.",
    },
    {
      question: "På hvilket analysenivå hører internasjonale organisasjoner primært hjemme?",
      options: ["Systemnivå, siden de er trekk ved forholdet mellom statene som ingen endrer alene", "Statsnivå, siden hvert enkelt medlem slutter seg til ut fra sine egne nasjonale interesser", "Individnivå, siden sekretariatsledere og forhandlere avgjør hva som faktisk skjer", "De hører ikke hjemme på nivåene, siden de er aktører og ikke faktorer"],
      explanation: "Riktig svar er systemnivå: organisasjonene er trekk ved forholdet mellom statene, felles for alle medlemmene. Statsnivået forklarer variasjonen i etterlevelse, og den variasjonen er selve beviset i striden om egenvekt.",
    },
    {
      question: "Hva er en internasjonal organisasjon i fagets forstand?",
      options: ["En organisasjon med stater som medlemmer, opprettet ved traktat og med et sekretariat", "En organisasjon som arbeider på tvers av landegrenser uansett hvem medlemmene i den er", "En organisasjon som kan fatte vedtak som binder medlemmene mot deres egen vilje", "En organisasjon med enkeltpersoner og foreninger som medlemmer i flere land"],
      explanation: "Riktig svar er en organisasjon med stater som medlemmer, opprettet ved traktat, med fast sekretariat og faste møteordninger. Myndigheten er avledet av traktaten. Organisasjoner med enkeltpersoner som medlemmer er ikke-statlige og har intet traktatgrunnlag.",
    },
    {
      question: "Hva sier beslutningsregelen om hva slags organisasjon en ordning er?",
      options: ["Konsensus gir hvert medlem vetorett; flertall kan binde et mindretall mot dets vilje", "Konsensus gir raskere vedtak; flertall gir mer legitime vedtak blant alle medlemmene", "Konsensus brukes i store organisasjoner; flertall brukes i små organisasjoner", "Konsensus gjør vedtakene bindende; flertallsvedtak er bare anbefalinger"],
      explanation: "Riktig svar er at konsensus gir hvert medlem vetorett, mens flertall kan binde et mindretall. Merk at beslutningsregelen sier hvordan vedtak fattes, ikke hvor forpliktende de er: Generalforsamlingen vedtar med flertall og gir likevel bare anbefalinger.",
    },
  ],
  'stv1200-5-1': [
    {
      question: "Hvem representerer Ministerrådet, også kalt Unionsrådet?",
      options: ["Medlemsstatenes regjeringer, med én statsråd fra hvert medlemsland", "Unionen som helhet, uavhengig av det enkelte medlemslandets syn", "Borgerne i medlemsstatene, valgt av dem i direkte valg hvert femte år", "De nasjonale parlamentene, som sender delegasjoner til hvert møte"],
      explanation: "Riktig svar er medlemsstatenes regjeringer, med én statsråd per land. Å representere unionen som helhet er Kommisjonens oppgave, og direkte valg gjelder Europaparlamentet. Å bytte om på hvem organene taler for, er den vanligste feilen i dette temaet.",
    },
    {
      question: "Hvilket organ har initiativretten til nytt EU-regelverk?",
      options: ["Europakommisjonen, som legger fram forslagene til nye rettsakter", "Ministerrådet, som fastsetter dagsordenen for lovgivningsarbeidet", "Europaparlamentet, som fremmer forslag på vegne av unionens borgere", "Det europeiske råd, som staker ut hovedlinjene for unionens arbeid"],
      explanation: "Riktig svar er Europakommisjonen. På det meste av unionens virkeområde kan ingen rettsakt vedtas uten at Kommisjonen har lagt fram forslaget. De to lovgiverne kan be om et forslag, men de kan ikke skrive teksten selv — å vedta og å foreslå er to ulike former for makt.",
    },
    {
      question: "Hva er hovedregelen for kvalifisert flertall i Ministerrådet?",
      options: ["Minst 55 prosent av statene, som samtidig representerer minst 65 prosent av befolkningen", "Minst 65 prosent av statene, som samtidig representerer minst 55 prosent av befolkningen", "To tredjedeler av statene, uten hensyn til hvor mange innbyggere de har til sammen", "Alminnelig flertall av statene, med dobbeltstemme til den som har formannskapet"],
      explanation: "Riktig svar er minst 55 prosent av statene som samtidig representerer minst 65 prosent av befolkningen. Begge leddene må være oppfylt samtidig. Alternativet som bytter om på tallene, ligger nær og er nettopp presisjonen som testes.",
    },
    {
      question: "Hvem representerer Europaparlamentet?",
      options: ["Borgerne i medlemsstatene, som velger representantene i direkte valg", "Medlemsstatene, gjennom representanter utpekt av de nasjonale regjeringene", "De nasjonale parlamentene, som sender medlemmer fra sine egne rekker", "Regionene i medlemsstatene, etter en fast geografisk fordelingsnøkkel"],
      explanation: "Riktig svar er borgerne, gjennom direkte valg. Europaparlamentet er det eneste EU-organet velgerne velger direkte, og det er kjernen i hva som skiller det fra Ministerrådet, der regjeringene sitter.",
    },
    {
      question: "Hva kjennetegner den ordinære lovgivningsprosedyren, også kalt medbestemmelse?",
      options: ["Rettsakten er vedtatt først når Rådet og Parlamentet har sluttet seg til samme tekst", "Kommisjonen legger fram forslaget, og Ministerrådet vedtar det deretter alene", "Parlamentet legger fram forslaget, og Kommisjonen avgjør om det skal fremmes", "Ministerrådet vedtar rettsakten alene etter at Parlamentet har gitt en rådgivende uttalelse"],
      explanation: "Riktig svar er at både Rådet og Parlamentet må slutte seg til samme tekst. Det er derfor Parlamentet i praksis har vetorett i denne prosedyren. Alternativet om en rådgivende uttalelse beskriver en eldre ordning og er den vanligste feillesningen.",
    },
    {
      question: "Hva var Enhetsakten fra 1987 et vendepunkt for?",
      options: ["Målet om å fullføre det indre markedet, med utvidet bruk av kvalifisert flertall", "Opprettelsen av den felles valutaen og av en felles sentralbank for medlemmene", "Innføringen av direkte valg til Europaparlamentet i alle medlemsstatene samtidig", "Etableringen av tollunionen og av den felles handelspolitikken mot tredjeland"],
      explanation: "Riktig svar er målet om å fullføre det indre markedet, sammen med utvidet bruk av kvalifisert flertall. Sammenhengen er poenget: markedsmålet krevde svært mange vedtak, og enstemmighet ville gjort dem praktisk talt umulige å få gjennom.",
    },
    {
      question: "Hva er forskjellen på en forordning og et direktiv?",
      options: ["Forordningen gjelder direkte, mens direktivet må gjennomføres nasjonalt innen en frist", "Forordningen gjelder bare for de statene som slutter seg til den, direktivet for alle", "Forordningen er rettslig bindende, mens direktivet er en anbefaling til medlemsstatene", "Forordningen vedtas av Kommisjonen alene, mens direktivet vedtas av Rådet og Parlamentet"],
      explanation: "Riktig svar er at forordningen gjelder direkte, mens direktivet må gjennomføres i nasjonal rett innen en frist. Direktivet er bindende med hensyn til målet, mens landet velger midlene — det er derfor «anbefaling» ligger nær og likevel er galt.",
    },
    {
      question: "Hva ligger i at Kommisjonen kalles traktatenes vokter?",
      options: ["Den fører tilsyn med at medlemsstatene følger EU-retten, og kan forfølge brudd", "Den har enerett til å tolke traktatene når medlemsstatene er uenige om innholdet", "Den godkjenner nasjonale lover før de kan tre i kraft i medlemsstatene", "Den kan endre traktatene når et flertall av medlemsstatene ber om det"],
      explanation: "Riktig svar er tilsyn med at medlemsstatene følger EU-retten, med mulighet til å forfølge brudd. Å avgjøre tolkningen endelig er EU-domstolens oppgave, ikke Kommisjonens, og det skillet er verdt å ha klart i et kortsvar.",
    },
    {
      question: "På hvilke felt kreves det fortsatt enstemmighet i Ministerrådet?",
      options: ["På blant annet utenriks- og sikkerhetspolitikk, skatt og opptak av nye medlemmer", "På blant annet konkurransepolitikk, forbrukervern og felles produktstandarder i det indre markedet", "Bare i saker som gjelder unionens eget budsjett og indre administrasjon", "På alle felt der en medlemsstat uttrykkelig ber om at saken behandles slik"],
      explanation: "Riktig svar er blant annet utenriks- og sikkerhetspolitikk, skatt og opptak av nye medlemmer. Mønsteret er ikke tilfeldig: enstemmigheten ligger igjen der suvereniteten oppleves som tyngst, og det er et poeng som gir uttelling i en drøfting av tyngdepunktet.",
    },
    {
      question: "Hva er Det europeiske råd?",
      options: ["Toppmøtet av stats- og regjeringssjefer, som staker ut unionens hovedlinjer", "Domstolen som avgjør tvister mellom unionens organer og medlemsstatene", "En menneskerettighetsorganisasjon som står utenfor unionens institusjoner", "Et rådgivende organ for regioner og lokalsamfunn som uttaler seg i saker som berører dem"],
      explanation: "Riktig svar er toppmøtet av stats- og regjeringssjefer. Alternativet om en menneskerettighetsorganisasjon utenfor unionen viser til Europarådet, som er noe helt annet. Navnefella mellom Det europeiske råd, Rådet og Europarådet er reell og felles for mange.",
    },
    {
      question: "Hva kjennetegner EU-domstolens myndighet?",
      options: ["Den har tvungen domsmyndighet: en stat kan bli part uten å ha samtykket i saken", "Den behandler straffesaker mot enkeltpersoner for brudd på unionens regelverk", "Den avgjør bare saker der begge parter på forhånd uttrykkelig har samtykket til å bli part", "Den gir rådgivende uttalelser som medlemsstatene selv velger om de vil følge"],
      explanation: "Riktig svar er at domstolen har tvungen domsmyndighet. Alternativet om samtykke beskriver domstolen for tvister mellom stater i FN-systemet, og forskjellen er ett av de skarpeste enkeltpoengene i en sammenligning mellom EU og andre internasjonale organisasjoner.",
    },
    {
      question: "Hva menes med EUs demokratiske underskudd?",
      options: ["At beslutninger fattes langt fra velgerne, av organer de bare indirekte kan holde ansvarlige", "At unionen mangler et folkevalgt organ, slik at borgerne ikke er representert i det hele tatt", "At medlemsstatene har avstått så mye myndighet at nasjonale valg er avskaffet på disse feltene", "At Kommisjonen kan vedta rettsakter uten at noe annet organ deltar i beslutningen om dem"],
      explanation: "Riktig svar er at beslutninger fattes langt fra velgerne, av organer velgerne bare indirekte kan holde ansvarlige. Påstanden om at unionen mangler et folkevalgt organ, er galt: Europaparlamentet er direkte valgt. Det er avstanden og ansvarslinjene som er problemet.",
    },
    {
      question: "Hva innebærer det at Europaparlamentet har en de facto vetorett?",
      options: ["At ingen rettsakt i den ordinære prosedyren kan vedtas uten Parlamentets tilslutning", "At Parlamentet kan oppheve en rettsakt som allerede er vedtatt av Ministerrådet", "At Parlamentet kan stanse Kommisjonens forslag før de i det hele tatt blir lagt fram for Rådet", "At Parlamentet kan overprøve EU-domstolens avgjørelser i saker om lovgivning"],
      explanation: "Riktig svar er at ingen rettsakt i den ordinære lovgivningsprosedyren kan vedtas uten Parlamentets tilslutning. Vetoretten er altså en følge av selve prosedyren, ikke en egen rettighet Parlamentet kan bruke fritt i andre sammenhenger.",
    },
    {
      question: "Hvem kan tvinge Europakommisjonen av?",
      options: ["Europaparlamentet, gjennom et mistillitsvedtak mot kollegiet som helhet", "Ministerrådet, ved kvalifisert flertall blant medlemsstatenes regjeringer", "Det europeiske råd, ved et enstemmig vedtak fattet på et av toppmøtene", "EU-domstolen, dersom den finner at Kommisjonen har handlet i strid med traktatene"],
      explanation: "Riktig svar er Europaparlamentet, ved mistillitsvedtak mot kollegiet. Dette er Parlamentets sterkeste kontrollmiddel, og det forklarer hvorfor Kommisjonen ikke kan se bort fra Parlamentet over tid, selv om den har initiativretten.",
    },
    {
      question: "Hva betyr det at EU bygger på tildelt myndighet?",
      options: ["At unionen bare kan handle på de feltene og på den måten traktatene gir den myndighet til", "At medlemsstatene når som helst kan trekke tilbake myndigheten ved en nasjonal beslutning", "At Kommisjonen tildeler oppgaver til medlemsstatene etter hvert som behovene oppstår", "At myndigheten er delt likt mellom unionens organer og medlemsstatenes egne myndigheter"],
      explanation: "Riktig svar er at unionen bare kan handle der traktatene gir den myndighet. Alt annet ligger fortsatt hos medlemsstatene, og å utvide myndigheten krever traktatendring som alle statene må slutte seg til og ratifisere hjemme.",
    },
    {
      question: "Hva er initiativretten best beskrevet som?",
      options: ["Dagsordenmakt: retten til å bestemme hva det i det hele tatt skal stemmes over", "Vedtaksmakt: retten til å avgjøre om et forslag skal bli gjeldende rett", "Vetomakt: retten til å stanse et forslag som de to lovgiverne har vedtatt", "Kontrollmakt: retten til å granske hvordan medlemsstatene bruker unionens midler"],
      explanation: "Riktig svar er dagsordenmakt. Den som holder et forslag tilbake, trenger aldri å vinne en avstemning — og det kan være mer avgjørende enn stemmeretten selv. Kommisjonen har samtidig ingen stemme i selve vedtaket, og det er nettopp skillet spørsmålet tester.",
    },
    {
      question: "Hva kjennetegner Kommisjonens sammensetning?",
      options: ["Medlemmene skal handle uavhengig og ikke ta instrukser fra sitt eget hjemland", "Medlemmene taler for hvert sitt hjemland og stemmer etter regjeringens instruks", "Medlemmene velges direkte av velgerne i medlemsstatene ved egne valg til organet", "Medlemmene utpekes av Europaparlamentets partigrupper etter valgresultatet der"],
      explanation: "Riktig svar er at medlemmene skal handle uavhengig og ikke ta instrukser fra hjemlandet. Kravet følger av at organet representerer unionen som helhet. At medlemmene likevel kommer fra hvert sitt land, gjør at forvekslingen med et statsrepresentativt organ ligger nær.",
    },
    {
      question: "Hva er Ministerrådets viktigste rolle i unionen?",
      options: ["Å være det tyngste lov- og budsjettorganet, sammen med Europaparlamentet", "Å legge fram forslag til nytt regelverk på unionens ulike saksområder", "Å føre tilsyn med at medlemsstatene gjennomfører regelverket riktig hjemme", "Å avgjøre tvister om hvordan traktatene skal forstås i den enkelte saken"],
      explanation: "Riktig svar er rollen som det tyngste lov- og budsjettorganet sammen med Parlamentet. De tre andre beskriver henholdsvis Kommisjonens initiativrett, Kommisjonens tilsynsrolle og EU-domstolens oppgave.",
    },
    {
      question: "Hva menes med legitimitet gjennom deltakelse, i motsetning til gjennom resultater?",
      options: ["At ordningen begrunnes med hvordan beslutningene blir til, ikke med hva de fører til", "At ordningen begrunnes med hvor mange medlemsstater som har sluttet seg til den", "At ordningen begrunnes med at den er nedfelt i en traktat alle har ratifisert", "At ordningen begrunnes med at et bredt flertall i befolkningen støtter den når de blir spurt"],
      explanation: "Riktig svar er at legitimitet gjennom deltakelse handler om hvordan beslutningene blir til — hvem som er med og kan holdes ansvarlig. Legitimitet gjennom resultater handler derimot om hva ordningen leverer. Skillet er nyttig fordi EU skårer ulikt på de to.",
    },
    {
      question: "Hvordan leser realismen EUs beslutningssystem?",
      options: ["Som et redskap statene har bygd, og som virker fordi det tjener de tyngste medlemmene", "Som en ordning med egenvekt, fordi den senker kostnadene ved å samarbeide over grensene", "Som et rollefellesskap der medlemskapet har formet hva statene oppfatter som passende", "Som et system der overnasjonale organer har fortrengt statene som selvstendige aktører"],
      explanation: "Riktig svar er at systemet leses som statenes redskap. Enstemmighetsfeltene, toppmøtenes rolle og kravet om enighet ved traktatendring leses da ikke som rester, men som grensene statene selv har satt. De øvrige alternativene beskriver liberal institusjonalisme og konstruktivisme.",
    },
    {
      question: "Hvordan leser liberal institusjonalisme EUs beslutningssystem?",
      options: ["Som institusjoner med egenvekt, fordi de gjør forpliktelsene mellom statene troverdige", "Som en avledet ordning som virker akkurat så lenge de største medlemmene er tjent med den", "Som et sett normer som avgjør hva slags opptreden medlemmene ser som passende", "Som et mellomstatlig forhandlingssystem der utfallet følger av statenes relative størrelse"],
      explanation: "Riktig svar er at institusjonene tillegges egenvekt fordi de gjør forpliktelser troverdige og senker kostnadene ved samarbeid. Flertallsvedtak som hovedregel, dagsordenmakten og tvungen domsmyndighet endrer hva statene kan oppnå — det er kjernen i lesningen.",
    },
    {
      question: "Hva er realismens blindsone når det gjelder EUs beslutningssystem?",
      options: ["Hverdagslovgivningen: mengder av rettsakter som blir til uten at noen stormakt bryr seg", "Enstemmighetsfeltene: at statene har beholdt vetoretten der suvereniteten er tyngst", "Toppmøtenes rolle: at stats- og regjeringssjefene staker ut de store veivalgene selv", "Traktatendringene: at ingen ny myndighet kan gis unionen uten at samtlige stater sier ja til det"],
      explanation: "Riktig svar er hverdagslovgivningen. Et perspektiv som forklarer utfall med de sterkestes interesser, har lite å si om de mange rettsaktene som blir til og gjennomført uten at noen stormakt engasjerer seg. De tre andre alternativene er nettopp det realismen forklarer godt.",
    },
    {
      question: "På hvilket analysenivå hører EUs beslutningssystem primært hjemme?",
      options: ["Systemnivået, siden ordningen er et trekk ved forholdet mellom statene", "Individnivået, siden utfallet avhenger av hvem som forhandler i den enkelte saken", "Statsnivået, siden hvert medlemsland selv avgjør hvordan det stiller seg i Rådet", "Nivåene er likestilte her, siden ingen av dem forklarer mer enn de andre gjør"],
      explanation: "Riktig svar er systemnivået: beslutningssystemet er et trekk ved forholdet mellom statene som ingen av dem kan endre alene. Statsnivået forklarer likevel variasjon systemnivået ikke fanger, og et svar som bruker begge der de tilfører noe, viser riktig verktøybruk.",
    },
    {
      question: "Hva er feil #7 i dette temaet?",
      options: ["Å gi en generell institusjonsoversikt i stedet for å svare på det oppgaven spør om", "Å bytte om på hvilke organer som representerer hvem i unionens beslutningssystem", "Å bruke bare én teoritradisjon når oppgaven ber om minst to av perspektivene", "Å svare på flere kortsvar enn oppgaven ber om, slik at tiden brukes uten uttelling"],
      explanation: "Riktig svar er institusjonsoversikt i stedet for svar på det faktiske spørsmålet. De tre andre alternativene beskriver andre feilkoder: upresis empiri, bruk av bare én tradisjon, og å besvare flere kortsvar enn oppgitt.",
    },
    {
      question: "Hvem eier begrepsapparatet om EUs institusjoner i pensum?",
      options: ["Claes og Førland, som er et stabilt norsk anker gjennom hele arkivperioden", "Hovi og Underdal, som eier statssystemet og de internasjonale organisasjonene", "Claes, Hveem og Tranøy, som eier handel og internasjonal politisk økonomi", "Grieco med flere, som er den gjeldende engelskspråklige innføringsboken"],
      explanation: "Riktig svar er Claes og Førland. De øvrige er reelle pensumankere, men på andre felt: statssystemet og organisasjonene, den politiske økonomien, og den generelle innføringen i internasjonal politikk. Sjekk alltid gjeldende pensumliste, siden avsenderne rullerer.",
    },
    {
      question: "Hva er Rådets formannskap?",
      options: ["En rolle som går på omgang mellom medlemsstatene og styrer arbeidet i perioden", "Et fast lederverv som velges av Europaparlamentet for hele valgperioden", "En stilling som innehas av Europakommisjonens president så lenge kollegiet hans eller hennes sitter", "Et sekretariat av embetsfolk som forbereder sakene uten å lede møtene selv"],
      explanation: "Riktig svar er at formannskapet går på omgang mellom medlemsstatene og styrer arbeidet i perioden. Rollen gir innflytelse over dagsorden og framdrift, men ikke over stemmereglene — og det er en presisering som er verdt å ha med.",
    },
    {
      question: "Hvorfor er ikke merkelappen overnasjonal det samme som mektig i EU-systemet?",
      options: ["Fordi merkelappen sier hvem organet taler for, ikke hvor tungt det veier i vedtakene", "Fordi overnasjonale organer alltid har mindre myndighet enn de mellomstatlige organene har", "Fordi bare organer med egne inntekter kan sies å ha reell makt i beslutningene", "Fordi merkelappen bare gjelder på de feltene der det kreves enstemmighet i Rådet"],
      explanation: "Riktig svar er at merkelappen sier hvem organet taler for, ikke hvor tungt det veier. Rådet er det mest mellomstatlige organet og samtidig det viktigste lov- og budsjettorganet, mens Kommisjonen er overnasjonal og ikke vedtar lovene selv.",
    },
    {
      question: "Hva er den vanligste formen for upresis empiri i kortsvar om EUs organer?",
      options: ["Å tillegge Kommisjonen lovgivende myndighet eller Parlamentet en rådgivende rolle", "Å skrive at Rådet er sammensatt av statsråder fra medlemsstatenes regjeringer", "Å skrive at Kommisjonen har initiativretten på det meste av unionens virkeområde", "Å skrive at Europaparlamentet velges direkte av borgerne i alle unionens medlemsstater"],
      explanation: "Riktig svar er å gi Kommisjonen lovgivende myndighet eller Parlamentet en rådgivende rolle. De tre andre påstandene er korrekte og hører hjemme i et godt kortsvar — de er tatt med nettopp for å vise hva som skal stå, ikke for å felle en grundig leser.",
    },
  ],
  'stv1200-5-2': [
    {
      question: "Hva menes med overnasjonalitet?",
      options: ["At et organ over statene kan treffe avgjørelser som binder medlemmene, også mot en stats vilje", "At flere stater samarbeider tett og forplikter seg til det de selv uttrykkelig har sluttet seg til", "At en organisasjon har flere medlemsstater enn den hadde da den ble opprettet", "At en organisasjons vedtak gjelder på tvers av landegrenser når statene ønsker det"],
      explanation: "Riktig svar er at et organ over statene kan treffe avgjørelser som binder medlemmene, også mot en medlemsstats vilje. Alternativet om at hver stat bare er bundet av det den selv har sluttet seg til, beskriver mellomstatlig samarbeid — den nære kontrasten spørsmålet tester.",
    },
    {
      question: "Hva kjennetegner mellomstatlig samarbeid?",
      options: ["At hver stat bare er bundet av det den selv har sluttet seg til i den enkelte saken", "At vedtak fattes med flertall, men bare gjelder for de statene som stemte for dem", "At samarbeidet skjer mellom regjeringer og aldri involverer nasjonalforsamlingene", "At organisasjonen har egne inntekter og derfor ikke er avhengig av medlemsbidrag"],
      explanation: "Riktig svar er at hver stat bare er bundet av det den selv har sluttet seg til. Det er dette vetoretten i praksis beskytter i mellomstatlige organisasjoner, og det er kjernekontrasten til overnasjonalitet.",
    },
    {
      question: "Hva er det første kriteriet for overnasjonalitet?",
      options: ["At organet kan fatte bindende vedtak, ikke bare gi anbefalinger til medlemmene", "At organet kan håndheve vedtakene sine gjennom et eget tvangsapparat", "At organet har egne inntekter og dermed er økonomisk uavhengig av medlemmene", "At medlemmene ikke kan melde seg ut av organisasjonen med umiddelbar virkning"],
      explanation: "Riktig svar er at organet kan fatte bindende vedtak. De tre andre alternativene er også kriterier på lista, men de kommer senere: håndhevelse, finansiell autonomi og utmelding. Rekkefølgen er verdt å kunne, siden de to første handler om å bestemme og de tre siste om det som skjer etterpå.",
    },
    {
      question: "Hva er det andre kriteriet for overnasjonalitet?",
      options: ["At vedtak kan fattes mot et medlems vilje, altså ved flertall og ikke ved enighet", "At vedtak binder medlemmene rettslig og ikke bare politisk når de først er fattet", "At vedtakene kan settes i verk uten at medlemsstatene selv må foreta seg noe som helst med dem", "At organet kan straffe medlemsstater som ikke gjennomfører vedtakene i tide"],
      explanation: "Riktig svar er at vedtak kan fattes mot et medlems vilje, altså ved flertall. Alternativet om at vedtakene binder rettslig, er kriterium én — og å slå de to sammen er den vanligste feilen på denne lista, fordi de ligger så nær hverandre.",
    },
    {
      question: "Hvorfor sier vi at kriteriene måler grader av overnasjonalitet?",
      options: ["Fordi de danner en skala der en organisasjon kan skåre høyt på noen og lavt på andre", "Fordi hvert kriterium teller like mye og summen avgjør om organisasjonen er overnasjonal", "Fordi kriteriene endrer seg over tid og derfor må vurderes på nytt for hvert tiår", "Fordi ulike forfattere legger ulikt innhold i hva overnasjonal myndighet skal bety"],
      explanation: "Riktig svar er at kriteriene danner en skala der en organisasjon kan skåre høyt på noen og lavt på andre. Det er derfor et ja- eller nei-svar på om EU er overnasjonal, er feil svarform — spørsmålet er hvor og hvor mye.",
    },
    {
      question: "Hvordan skårer EU på de to første kriteriene?",
      options: ["Høyt: unionen fatter bindende vedtak, og de kan fattes mot en medlemsstats vilje", "Lavt: unionen fatter vedtak ved konsensus og kan derfor ikke overkjøre et medlem", "Ulikt: bindende vedtak ja, men flertallsvedtak bare på områder utenfor det indre markedet", "Høyt på det ene og lavt på det andre, siden vedtakene binder, men aldri kan fattes mot noen"],
      explanation: "Riktig svar er høyt på begge: unionen fatter bindende vedtak, og kvalifisert flertall er hovedregelen i Ministerrådet. Det er på de tre siste kriteriene — håndhevelse, finansiell autonomi og utmelding — at skåren blir mer sammensatt.",
    },
    {
      question: "Hvorfor skårer EU sterkt, men ikke maksimalt, på håndhevelseskriteriet?",
      options: ["Fordi håndhevelsen skjer gjennom medlemsstatenes egne myndigheter og domstoler", "Fordi unionen mangler en domstol som kan avgjøre om regelverket er brutt", "Fordi bare medlemsstatene selv kan avgjøre om et brudd har funnet sted i saken", "Fordi vedtak må godkjennes i hvert lands nasjonalforsamling før de kan håndheves"],
      explanation: "Riktig svar er at håndhevelsen skjer gjennom medlemsstatenes egne myndigheter og domstoler. Unionen har både domstol og tilsyn, men ikke et eget tvangsapparat — det er nettopp derfor skåren er sterk uten å være maksimal.",
    },
    {
      question: "Hva innebærer direkte virkning i EU-retten?",
      options: ["At EU-regler under visse vilkår kan påberopes av private for nasjonale domstoler", "At EU-regler gjelder i medlemsstatene uten at nasjonale domstoler kan tolke dem", "At EU-organene kan gripe direkte inn overfor bedrifter uten å gå veien om statene", "At regler vedtatt i unionen trer i kraft samtidig i alle medlemsstatene automatisk"],
      explanation: "Riktig svar er at EU-regler under visse vilkår kan påberopes av private for nasjonale domstoler. Det er denne mekanismen som gjør at regelverket virker innenfra i medlemsstatene, i motsetning til folkerett som i hovedsak virker mellom stater.",
    },
    {
      question: "Hva innebærer forrang i EU-retten?",
      options: ["At EU-regelen går foran den nasjonale ved motstrid på felt unionen har myndighet", "At EU-retten erstatter nasjonal rett fullstendig på alle områder den berører", "At nasjonale domstoler må sende alle saker om EU-rett til unionens egen domstol", "At medlemsstatene må endre grunnloven sin før de kan slutte seg til unionen"],
      explanation: "Riktig svar er at EU-regelen går foran den nasjonale ved motstrid, på felt unionen har myndighet. Forrang gjelder altså i konflikttilfellet, og bare der unionen har fått myndighet — den erstatter ikke nasjonal rett generelt.",
    },
    {
      question: "Hvordan skårer FNs sikkerhetsråd på kriteriet om vedtak mot et medlems vilje?",
      options: ["Svakt for de fem faste medlemmene, siden vetoretten hindrer vedtak mot dem", "Høyt for alle medlemsstatene, siden vedtak etter kapittel VII binder alle", "Svakt for alle stater, siden rådet bare kan gi anbefalinger og ikke pålegg", "Høyt bare for de statene som selv har stemt for vedtaket i den enkelte saken"],
      explanation: "Riktig svar er at skåren er svak for de fem faste medlemmene, fordi vetoretten hindrer vedtak mot dem. Rådet fatter bindende vedtak — det er kriterium én — men bare på fred og sikkerhet, og vetoet svekker nettopp kriterium to.",
    },
    {
      question: "Hvorfor skårer NATO lavt på kriteriet om vedtak mot et medlems vilje?",
      options: ["Fordi alliansen fatter vedtak ved konsensus, slik at ingen kan overkjøres", "Fordi vedtakene bare er politiske anbefalinger uten rettslig forpliktelse", "Fordi alliansen mangler et fast organ som kan fatte vedtak mellom toppmøtene", "Fordi medlemmene når som helst kan tre ut av alliansen med umiddelbar virkning"],
      explanation: "Riktig svar er at alliansen fatter vedtak ved konsensus. Lav skår på dette kriteriet betyr likevel ikke at alliansen er svakt forpliktende: den gjensidige forsvarsforpliktelsen er blant de sterkeste som finnes, og det viser at redskapet måler myndighetsform, ikke styrke.",
    },
    {
      question: "Hva viste uttreden av EU om det femte kriteriet?",
      options: ["At utmelding er mulig, men at den følger en traktatfestet og tidkrevende framgangsmåte", "At utmelding i praksis er umulig, siden ingen medlemsstat kan forlate unionen", "At utmelding kan skje umiddelbart dersom nasjonalforsamlingen vedtar det selv", "At utmelding krever uttrykkelig samtykke fra samtlige gjenværende medlemsstater i unionen"],
      explanation: "Riktig svar er at utmelding er mulig, men følger en traktatfestet og tidkrevende framgangsmåte. Det trekker EUs skår ned på det femte kriteriet, som handler om at medlemmer ikke skal kunne melde seg ut umiddelbart.",
    },
    {
      question: "Hva skiller en høyt overnasjonal organisasjon fra en føderasjon?",
      options: ["Føderasjonen har egen beskatningsrett, egne tvangsmidler og normalt ingen utmeldingsadgang", "Føderasjonen har flere medlemmer og dekker derfor et større geografisk område", "Føderasjonen fatter vedtak ved flertall, mens organisasjonen krever full enighet", "Føderasjonen har en domstol, mens den overnasjonale organisasjonen mangler dette"],
      explanation: "Riktig svar er egen beskatningsrett, egne tvangsmidler og normalt ingen utmeldingsadgang. EU har ingen av delene, og det setter en øvre grense for hvor høyt unionen kan skåre på skalaen — en presisering som løfter en drøfting av graden.",
    },
    {
      question: "Hva er suverenitetsavståelse?",
      options: ["At staten overfører utøvelsen av myndighet på bestemte felt til et organ over seg, ved traktat", "At staten mister sin selvstendighet som folkerettslig subjekt i det internasjonale statssystemet", "At staten forplikter seg politisk til å følge vedtak den har vært med på å fatte selv", "At staten lar en annen stat bestemme over deler av sitt eget territorium i en periode"],
      explanation: "Riktig svar er at staten overfører utøvelsen av myndighet på bestemte felt til et organ over seg, ved traktat. Det er utøvelsen som overføres, ikke suvereniteten som sådan — og distinksjonen er selve grunnlaget for at avståelse kan trekkes tilbake ved utmelding.",
    },
    {
      question: "Hvilken posisjon svarer til at suverenitetsavståelse er en måte å utøve selvstyre på?",
      options: ["At staten oppnår mer av det den vil ved å binde seg sammen med andre enn den kan alene", "At staten uansett ikke har noe reelt selvstyre i en verden av gjensidig avhengighet", "At staten bør avstå myndighet fordi felles løsninger som regel er faglig bedre", "At staten beholder full handlefrihet fordi den kan tre ut av ordningen når som helst"],
      explanation: "Riktig svar er at staten oppnår mer av det den vil ved å binde seg sammen med andre. Motposisjonen er at et vedtak fattet et sted velgerne ikke kan holde ansvarlig, er et reelt tap av selvstyre. Begge posisjonene er velbegrunnede, og boka rangerer dem ikke.",
    },
    {
      question: "Hvordan leser realismen overnasjonal myndighet?",
      options: ["Som lånt myndighet, avgitt så lenge ordningen tjener de tyngste medlemmene", "Som en teknologi for troverdige forpliktelser statene ikke kunne skaffet alene", "Som en rolle medlemmene har tatt på seg, med forventninger som følger med rollen", "Som et første skritt mot en europeisk stat der medlemsstatene forsvinner over tid"],
      explanation: "Riktig svar er at myndigheten leses som lånt og avledet. De tre siste kriteriene — håndhevelse, finansiell autonomi og utmelding — leses da som beviset. De øvrige alternativene beskriver liberal institusjonalisme og konstruktivisme.",
    },
    {
      question: "Hva er konstruktivismens blindsone når det gjelder overnasjonalitet?",
      options: ["Den sier lite om når normen gir etter, og om stater som setter seg åpent på tvers", "Den kan ikke forklare hvorfor stater i det hele tatt følger regler de er uenige i", "Den overser at ordninger uten tvangsapparat likevel kan ha høy etterlevelse", "Den behandler ikke hvordan medlemsstatene selv oppfatter sin egen rolle i rettsfellesskapet"],
      explanation: "Riktig svar er at perspektivet sier lite om når normen gir etter. Det forklarer godt hvorfor etterlevelsen er høy uten tvang, men gir liten veiledning i å forutsi brudd — og et perspektiv som forklarer alt i ettertid, er svakt der det trengs mest.",
    },
    {
      question: "På hvilket analysenivå hører overnasjonalitet primært hjemme?",
      options: ["Systemnivået, siden ordningen er et trekk ved forholdet mellom statene", "Individnivået, siden det avhenger av hvem som forhandlet fram traktaten", "Statsnivået, siden hver stat selv avgjør hvor mye myndighet den vil avstå", "Nivåene er likestilte, siden overnasjonalitet ikke lar seg plassere på ett av dem"],
      explanation: "Riktig svar er systemnivået: overnasjonalitet er et trekk ved forholdet mellom statene som ingen av dem kan endre alene. Statsnivået forklarer likevel variasjonen mellom medlemmer, og et svar som bruker begge der de tilfører noe, viser riktig verktøybruk.",
    },
    {
      question: "Hva er feil #11 i dette temaet?",
      options: ["Å svare ja eller nei på om EU er overnasjonal, i stedet for å plassere unionen på skalaen", "Å bruke plassen på unionens historie i stedet for på kriteriene oppgaven spør om", "Å drøfte overnasjonalitet uten å nevne noen av de tre teoretiske perspektivene", "Å blande sammen integrasjon og europeisering når oppgaven spør om påvirkningen på nasjonal politikk"],
      explanation: "Riktig svar er å svare ja eller nei i stedet for å plassere unionen på skalaen. Feilen har to søskenformer: å slå sammen de to første kriteriene, og å sette likhetstegn mellom overnasjonalitet og styrke. De andre alternativene er andre feilkoder.",
    },
    {
      question: "Hvem eier de fem kriteriene for overnasjonalitet i pensum?",
      options: ["Hovi og Underdal, som er et stabilt norsk anker gjennom hele arkivperioden", "Claes og Førland, som eier EU-institusjonene og den europeiske integrasjonen", "Claes, Hveem og Tranøy, som eier handel og internasjonal politisk økonomi", "Grieco med flere, som er den gjeldende engelskspråklige innføringsboken i faget"],
      explanation: "Riktig svar er Hovi og Underdal. Claes og Førland eier EU-stoffet og brukes til å måle unionen langs kriteriene, mens de to øvrige eier andre felt. Sjekk alltid gjeldende pensumliste, siden avsenderne rullerer og begrepene ikke gjør det.",
    },
  ],
  'stv1200-5-3': [
    {
      question: "Hva står ØMU for?",
      options: ["Den økonomiske og monetære unionen, EUs ordning for felles valuta og pengepolitikk", "Den økonomiske markedsunionen, EUs ordning for fri bevegelse av varer og tjenester", "Den offentlige monetære unionen, samarbeidet mellom medlemslandenes sentralbanker", "Den europeiske monetære unionen, avtalen om faste vekslingskurser mellom valutaene"],
      explanation: "Riktig svar er Den økonomiske og monetære unionen. Navnet peker på begge benene: det monetære, som er felles valuta og felles pengepolitikk, og det økonomiske, som er samordningen av medlemslandenes øvrige økonomiske politikk.",
    },
    {
      question: "Hvilken traktat la grunnlaget for ØMU?",
      options: ["Maastricht-traktaten fra 1992, som også fastsatte kravene for å kunne delta", "Enhetsakten fra 1987, som satte målet om å fullføre det indre markedet", "Roma-traktaten, som opprettet det økonomiske fellesskapet mellom medlemmene", "Stabilitets- og vekstpakten, som kom til noen år etter at euroen var vedtatt"],
      explanation: "Riktig svar er Maastricht-traktaten fra 1992. Enhetsakten gjaldt det indre markedet, mens stabilitets- og vekstpakten er regelverket som viderefører budsjettkravene etter at et land er kommet med.",
    },
    {
      question: "Hva er ECB?",
      options: ["Den europeiske sentralbanken, som setter renta for hele eurosonen", "Det europeiske budsjettrådet, som godkjenner medlemslandenes statsbudsjetter", "Den europeiske clearingbanken, som gjør opp betalinger mellom medlemslandene", "Det europeiske kredittbyrået, som vurderer medlemsstatenes betalingsevne"],
      explanation: "Riktig svar er Den europeiske sentralbanken. Banken setter styringsrenta for hele eurosonen under ett og er traktatfestet uavhengig av medlemsstatenes regjeringer og av unionens politiske organer, med prisstabilitet som fremste mål.",
    },
    {
      question: "Hva kjennetegner ECBs stilling i EU-systemet?",
      options: ["Den er traktatfestet uavhengig og skal ikke ta instrukser fra regjeringer eller EU-organer", "Den styres av Ministerrådet, som fastsetter rentenivået etter forslag fra Europakommisjonen", "Den ledes av Kommisjonens president og rapporterer til Europaparlamentet hvert kvartal", "Den er underlagt Det europeiske råd, som avgjør pengepolitikken på sine toppmøter"],
      explanation: "Riktig svar er at banken er traktatfestet uavhengig. Uavhengigheten er selve konstruksjonen og ikke en detalj: den er bygd inn for at pengepolitikken ikke skal kunne brukes til kortsiktige politiske formål — og det er nettopp derfor ordningen er politisk omstridt.",
    },
    {
      question: "Hvilket av konvergenskriteriene gjelder budsjettunderskuddet?",
      options: ["Underskuddet skal være under 3 prosent av bruttonasjonalproduktet", "Underskuddet skal være under 60 prosent av bruttonasjonalproduktet", "Underskuddet skal være under 3 prosent av statens samlede utgifter", "Underskuddet skal ligge nær nivået i de landene som har lavest gjeld"],
      explanation: "Riktig svar er under 3 prosent av bruttonasjonalproduktet. Tallet 60 gjelder den samlede offentlige gjelden, og å bytte om på de to er den enkeltfeilen som oftest trekker ned i den redegjørende delen av ØMU-oppgaven.",
    },
    {
      question: "Hvilket av konvergenskriteriene gjelder den offentlige gjelden?",
      options: ["Gjelden skal være under 60 prosent av bruttonasjonalproduktet", "Gjelden skal være under 3 prosent av bruttonasjonalproduktet", "Gjelden skal være under 60 prosent av statens årlige skatteinntekter", "Gjelden skal ligge nær nivået i de landene som har lavest prisvekst"],
      explanation: "Riktig svar er under 60 prosent av bruttonasjonalproduktet. Kravet finnes fordi et land uten egen sentralbank ikke kan skape penger for å betjene sin egen gjeld: den må betjenes i en valuta landet ikke selv styrer.",
    },
    {
      question: "Hva er forskjellen på underskuddskravet og gjeldskravet?",
      options: ["Underskuddet er strømmen i år, mens gjelden er beholdningen bygd opp fra før", "Underskuddet gjelder staten, mens gjelden også omfatter kommunene og fylkene", "Underskuddet måles mot skatteinntektene, mens gjelden måles mot produksjonen", "Underskuddet vurderes ved inntreden, mens gjelden først vurderes noen år etter"],
      explanation: "Riktig svar er skillet mellom strøm og beholdning. Et land kan ha lavt underskudd i år og likevel høy gjeld fra før, eller motsatt — og de to tilfellene peker mot ulike svar, siden gjeldsandelen også kan falle ved at produksjonen vokser.",
    },
    {
      question: "Hva krever prisstabilitetskriteriet?",
      options: ["At inflasjonen ligger nær nivået i de medlemslandene som har lavest prisvekst", "At inflasjonen ligger under en fast tallgrense fastsatt i selve traktatteksten", "At inflasjonen har vært null eller negativ i en periode før innføringen av euro", "At inflasjonen ligger nær gjennomsnittet for hele unionen de siste tre årene"],
      explanation: "Riktig svar er at inflasjonen skal ligge nær nivået i de landene som gjør det best. Kriteriet har altså ingen fast tallgrense, i motsetning til kravene om underskudd og gjeld — og det er bare to av de fem kriteriene som er tallfestet.",
    },
    {
      question: "Hva krever valutakurskriteriet?",
      options: ["At valutaen har ligget stabil i kurssamarbeidet før innføringen, uten egen devaluering", "At valutaen har vært fast knyttet til euroen helt siden den felles valutaen først ble innført", "At landet har avviklet all handel med valuta før medlemskapet trer i kraft", "At kursen har steget jevnt mot euroen i perioden før landet søker om deltakelse"],
      explanation: "Riktig svar er stabil kurs i det avtalte kurssamarbeidet, uten devaluering på eget initiativ. Kriteriet måler ikke økonomiens tilstand, men politikkens utholdenhet: landet viser at det tåler å leve uten devalueringsventilen før den forsvinner for godt.",
    },
    {
      question: "Hva er stabilitets- og vekstpakten?",
      options: ["Regelverket som viderefører budsjettkravene etter at et land er kommet med", "Avtalen som fastsetter hvor mye hvert medlemsland skal betale inn til unionen", "Programmet for felles investeringer i de delene av unionen som henger etter", "Ordningen som gir kriserammede medlemsland lån mot at de gjennomfører reformer"],
      explanation: "Riktig svar er regelverket som viderefører budsjettkravene etter inntreden. Konvergenskriteriene er inngangsbilletten, mens pakten er husreglene — og krav overfor et land som allerede er medlem, er langt vanskeligere å håndheve enn krav ved inngangen.",
    },
    {
      question: "Hva skjer med et euromedlems pengepolitikk?",
      options: ["Den overføres til ECB, som setter én rente for hele eurosonen under ett", "Den blir værende nasjonal, men må godkjennes av Kommisjonen hvert år", "Den avvikles helt, siden en valutaunion ikke trenger noen rentesetting", "Den deles mellom ECB og landets egen sentralbank etter en fast fordelingsnøkkel"],
      explanation: "Riktig svar er at pengepolitikken overføres til ECB. Landets egen sentralbank består, men som del av et felles system og ikke som selvstendig rentesetter — og det betyr at et land i nedgang ikke får lavere rente av den grunn.",
    },
    {
      question: "Hva skjer med et euromedlems valutapolitikk?",
      options: ["Den forsvinner som virkemiddel, siden landet ikke har en egen kurs å endre", "Den overføres til Ministerrådet, som fastsetter kursen mot andre valutaer", "Den blir værende nasjonal, men kan bare brukes etter samtykke fra ECB", "Den erstattes av en ordning der kursen justeres automatisk etter inflasjonen"],
      explanation: "Riktig svar er at valutapolitikken forsvinner som eget virkemiddel. Dette er det tapet som betyr mest i praksis: kursfall virker raskt og krever ingen upopulære vedtak, mens alternativet innenfor unionen må vedtas av noen og tar år.",
    },
    {
      question: "Hva skjer med et euromedlems finanspolitikk?",
      options: ["Den blir værende nasjonal, men bindes av felles krav til underskudd og gjeld", "Den overføres til unionen, som vedtar medlemslandenes statsbudsjetter", "Den blir helt fri, siden pengepolitikken allerede er overført til ECB", "Den avgjøres av ECB i samråd med landets eget finansdepartement hvert eneste år"],
      explanation: "Riktig svar er at finanspolitikken blir værende nasjonal, men bindes. Statsbudsjettet vedtas fortsatt av nasjonalforsamlingen, og det er en viktig presisering — skjevheten er at det eneste virkemiddelet som er igjen, også er det eneste som krever et upopulært vedtak.",
    },
    {
      question: "Hva menes med intern asymmetri i eurosonen?",
      options: ["At én felles pengepolitikk treffer medlemslandene ulikt fordi økonomiene er ulike", "At noen medlemsland betaler mer inn til unionen enn de får tilbake fra den", "At de store medlemslandene har flere stemmer enn de små når renta fastsettes", "At medlemslandene har ulike skattesatser og derfor konkurrerer om bedriftenes etableringer"],
      explanation: "Riktig svar er at én felles pengepolitikk treffer ulike økonomier ulikt. Mekanismen forsterker forskjeller i stedet for å dempe dem: landet som går dårligst, får den strammeste renta målt mot sin egen situasjon, og landet som går best, får den løseste.",
    },
    {
      question: "Hva er et asymmetrisk sjokk?",
      options: ["Et sjokk som rammer ett eller noen få medlemsland, ikke sonen samlet", "Et sjokk som rammer alle medlemslandene i sonen omtrent like hardt samtidig", "Et sjokk som kommer fra land utenfor unionen og treffer eksporten", "Et sjokk som slår ut i prisene før det slår ut i arbeidsledigheten"],
      explanation: "Riktig svar er et sjokk som rammer ett eller få medlemsland. Skillet mot symmetriske sjokk avgjør om felles pengepolitikk er et problem: mot symmetriske sjokk virker den felles renta like godt for alle, mot asymmetriske er den feil for de rammede.",
    },
    {
      question: "Hvilke tilpasningskanaler står igjen når renta og kursen er borte?",
      options: ["Lønns- og prisjustering, flytting av arbeidskraft og overføringer mellom områder", "Devaluering, rentekutt og økt pengemengde besluttet av landets egen sentralbank", "Toll på import, eksportstøtte og andre handelspolitiske virkemidler mot utlandet", "Kapitalkontroll, valutarasjonering og midlertidig uttreden av valutasamarbeidet"],
      explanation: "Riktig svar er lønns- og prisjustering, flytting av arbeidskraft og overføringer. Alle tre finnes innenfor en enkeltstat, men er svakere over landegrenser i EU — og det er den skjevheten hele drøftingen av handlefrihetstapet kan bygges på.",
    },
    {
      question: "Hva er intern devaluering?",
      options: ["Å få lønninger og priser ned direkte når valutakursen ikke kan svekkes", "Å svekke valutakursen ved en beslutning i landets egen sentralbank", "Å redusere pengemengden slik at prisene faller uten at lønningene endres", "Å flytte skattebyrden fra bedriftene til husholdningene i en periode"],
      explanation: "Riktig svar er å få lønninger og priser ned direkte. Virkningen ligner en devaluering, men veien er en annen: den krever synlige vedtak, tar år og rammer ulikt, mens en devaluering skjer i én beslutning uten at noen kan peke på hvem som bestemte hva.",
    },
    {
      question: "Hva kjennetegnet eurokrisen 2010 til 2012?",
      options: ["En gjelds- og tillitskrise der rentene på statslån sprikte kraftig mellom medlemsland", "En bankkrise som startet utenfor unionen og aldri fikk noen følger for statsgjelden", "En valutakrise der flere medlemsland devaluerte for å bedre konkurransekraften", "En inflasjonskrise der ECB satte renta kraftig ned for å holde prisveksten oppe"],
      explanation: "Riktig svar er en gjelds- og tillitskrise der rentene sprikte. Långiverne begynte å skille skarpt mellom euroland de tidligere hadde behandlet nærmest likt, og høyere rente gjorde gjelden dyrere å betjene, noe som i sin tur bekreftet frykten.",
    },
    {
      question: "Hvorfor lå rentene på statslån tett på hverandre i eurosonen før krisen?",
      options: ["Fordi markedet i praksis priset all statsgjeld i sonen som omtrent like sikker", "Fordi ECB fastsatte renta på statslån for hvert enkelt medlemsland direkte", "Fordi konvergenskriteriene krevde at rentene skulle være identiske etter inntreden", "Fordi medlemslandene hadde omtrent like høy gjeld da valutaen ble innført"],
      explanation: "Riktig svar er at markedet priset all statsgjeld i sonen som omtrent like sikker. De lave rentene var i seg selv en del av årsaken til krisen, fordi de gjorde det billig å bygge opp gjeld — ordningen bidro altså til å skape problemet den senere ble målt på.",
    },
    {
      question: "Hva menes med at kriselånene til medlemsland var betingede?",
      options: ["At de ble gitt mot at mottakerlandet gjennomførte fastsatte innstramminger og reformer", "At de ble gitt bare til de landene som allerede oppfylte samtlige konvergenskriterier", "At de måtte godkjennes av Europaparlamentet før de kunne utbetales til landet", "At de ble gitt som gaver dersom landet forpliktet seg til å bli i eurosonen"],
      explanation: "Riktig svar er at lånene ble gitt mot fastsatte innstramminger og reformer. Ordningen er omstridt: den ene posisjonen ser betingelsene som nødvendige for at fellesskapet ikke skal belønne regelbrudd, den andre ser dem som en flytting av politiske avgjørelser bort fra det rammede landet.",
    },
    {
      question: "Hva er den økonomiske lesningen av hvorfor euroen ble innført?",
      options: ["At felles valuta fullfører det indre markedet ved å fjerne kursrisiko og vekslingskostnader", "At felles valuta binder medlemslandene sammen på en måte som er vanskelig å reversere", "At felles valuta var nødvendig for at unionen skulle kunne opptre samlet utenrikspolitisk", "At felles valuta gjør det mulig for sentralbanken å styre medlemslandenes budsjettpolitikk direkte"],
      explanation: "Riktig svar er at felles valuta fullfører det indre markedet. Den politiske lesningen er at ordningen binder landene sammen på en måte som er svært vanskelig å reversere — og de to lesningene måler suksess på ulike ting, i handel og kostnader mot samhold og uoppløselighet.",
    },
    {
      question: "Hva er liberal institusjonalismes lesning av pengeunionen?",
      options: ["En ordning som løser et kollektivt handlingsproblem og gjør løfter troverdige", "En ordning de tyngste medlemmene har bygd fordi den tjener deres egne interesser", "Et fellesskapsmerke som gjør et abstrakt fellesskap konkret i folks dagligliv", "Et første skritt mot en felles stat der medlemslandene mister sin selvstendighet"],
      explanation: "Riktig svar er at ordningen løser et kollektivt handlingsproblem og gjør løfter troverdige. En uavhengig sentralbank leses da som en bindingsmekanisme, og gevinstene er absolutte: alle deltakerne kommer bedre ut enn uten ordningen, selv om noen kommer bedre ut enn andre.",
    },
    {
      question: "Hva er liberalismens blindsone når det gjelder pengeunionen?",
      options: ["Fordelingen: at gevinsten kan være stor og likevel svært ujevnt fordelt mellom medlemmene", "Bindingen: at en uavhengig sentralbank gjør løftet om lav og stabil inflasjon troverdig over tid", "Kostnaden: at valutarisiko og vekslingsgebyrer forsvinner innad i valutaområdet", "Symbolikken: at en felles valuta også er en markør for hvem man hører sammen med"],
      explanation: "Riktig svar er fordelingen. En ordning der noen medlemmer bærer tilpasningskostnaden gjennom år med intern devaluering mens andre får lavere lånekostnader, er dårlig beskrevet med at alle kom bedre ut enn uten — og fortsatt medlemskap kan også bety at utgangen var stengt.",
    },
    {
      question: "Hva er feil #6, den faste svakheten i ØMU-oppgaven?",
      options: ["Å levere et rent økonomisk resonnement uten å koble det til hvem som bestemmer", "Å gjengi konvergenskriteriene med feil tall eller å bytte om på de to grensene", "Å bruke bare én teoritradisjon når oppgaven ber om minst to av perspektivene", "Å beskrive pengeunionens historie i stedet for å svare på det oppgaven spør om"],
      explanation: "Riktig svar er rent økonomisk resonnement uten politisk kobling. Vaksinen er én setning etter hvert økonomisk ledd: hvem tok denne beslutningen før, hvem tar den nå, og hvem kan velgerne holde ansvarlig for den? De andre alternativene er andre feilkoder.",
    },
  ],
  'stv1200-5-4': [
    {
      question: "Hva er europeisering?",
      options: ["EUs påvirkning på nasjonal politikk, forvaltning og politiske prosesser", "Medlemsstatenes overføring av myndighet oppover til unionens felles organer", "Prosessen der stadig flere land i Europa søker om medlemskap i unionen", "Samordningen av medlemsstatenes utenrikspolitikk overfor land utenfor unionen"],
      explanation: "Riktig svar er EUs påvirkning på nasjonal politikk, forvaltning og politiske prosesser. Definisjonen sier ingenting om medlemskap eller myndighetsoverføring — og det er nettopp derfor et ikke-medlem også kan bli sterkt europeisert.",
    },
    {
      question: "Hvilken vei peker integrasjon og europeisering?",
      options: ["Integrasjon peker oppover mot unionen, europeisering nedover mot statene", "Integrasjon peker nedover mot statene, europeisering oppover mot unionen", "Begge peker oppover, men integrasjon gjelder rett og europeisering politikk", "Begge peker nedover, men integrasjon gjelder stater og europeisering borgere"],
      explanation: "Riktig svar er at integrasjon peker oppover og europeisering nedover. Integrasjon handler om hvem som har myndigheten, europeisering om hva som skjer med landet — og å blande de to er den faste feilen i dette temaet.",
    },
    {
      question: "Hva er polity-dimensjonen av europeisering?",
      options: ["Europeisering av institusjonene og reglene, altså selve forvaltningsapparatet", "Europeisering av de politiske prosessene, altså hvem som deltar og hvor", "Europeisering av den konkrete politikken, altså regelverket på saksfeltet", "Europeisering av borgernes holdninger, altså hva folk mener om unionen"],
      explanation: "Riktig svar er institusjonene og reglene. De to neste alternativene beskriver politics og policy, som er de to andre dimensjonene. Holdningsendring er ikke en av de tre, selv om den kan følge av dem.",
    },
    {
      question: "Hva er politics-dimensjonen av europeisering?",
      options: ["Europeisering av de politiske prosessene: hvem som deltar, og hvor kampen står", "Europeisering av institusjonene: hvilke organer som finnes og hva de gjør", "Europeisering av regelverket: hvilke krav som gjelder på det enkelte saksfeltet", "Europeisering av rettssystemet: hvilke domstoler som avgjør tvister om reglene"],
      explanation: "Riktig svar er de politiske prosessene: hvem som deltar, hvordan interesser organiserer seg, og hva som blir stridsspørsmål. Dette er den dimensjonen som lettest overses, fordi den ikke etterlater spor som lar seg telle slik nye regler og nye organer gjør.",
    },
    {
      question: "Hva er policy-dimensjonen av europeisering?",
      options: ["Europeisering av innholdet i politikken: regelverk, virkemidler og ideer på feltet", "Europeisering av valgordningen: hvordan representanter velges til nasjonale organer", "Europeisering av forvaltningen: hvilke enheter som opprettes for å følge opp", "Europeisering av partisystemet: hvilke partier som får oppslutning ved valgene"],
      explanation: "Riktig svar er innholdet i politikken. Dette er den mest synlige formen og den som lettest lar seg dokumentere, siden regler tas inn og ordninger legges om — men synligheten gjør den ikke viktigere enn de to andre dimensjonene.",
    },
    {
      question: "Hva forklarer best at samme EU-regelverk gir ulike utslag fra land til land?",
      options: ["Avstanden mellom ordningene som gjelder fra før og dem som skal innføres", "Hvor lenge landet har vært medlem av unionen sammenlignet med de andre", "Hvor mange representanter landet har i Europaparlamentet etter siste valg", "Hvor stor andel av landets handel som går til andre land i det indre markedet"],
      explanation: "Riktig svar er avstanden mellom det som gjelder fra før og det som skal innføres. Et land med ordninger som allerede ligner, tilpasser seg med små justeringer, mens et land med svært ulike ordninger må endre mye — og det er en forskjell på statsnivået.",
    },
    {
      question: "Hva menes med forvaltningens dobbeltrolle i europeiseringen?",
      options: ["At et direktorat både er underlagt eget departement og deltar i europeiske fagnettverk", "At forvaltningen både utreder saker for regjeringen og avgjør klager fra borgerne", "At embetsverket både forbereder nasjonale vedtak og stemmer i unionens organer", "At tilsynene både fører kontroll med bedriftene og gir dem faglige råd underveis"],
      explanation: "Riktig svar er at direktoratet både er underlagt eget departement og deltar i europeiske fagnettverk. Ingen instruerer noen; virkningen går gjennom felles faglighet og felles tidsplaner, og det er en mer interessant mekanisme enn styring ovenfra.",
    },
    {
      question: "Hva kjennetegner den numeriske kanalen?",
      options: ["Valgkanalen, der innflytelsen fordeles etter antall stemmer og gir ansvarliggjøring", "Interessekanalen, der innflytelsen fordeles etter organisering og fagkunnskap", "Domstolskanalen, der borgere kan få prøvd om reglene er anvendt riktig i saken", "Mediekanalen, der oppmerksomhet avgjør hvilke saker som når politisk dagsorden"],
      explanation: "Riktig svar er valgkanalen. Navnet peker på at innflytelsen fordeles etter antall — én stemme per person — og det er den eneste kanalen som gir ansvarliggjøring, siden velgerne kan kaste dem som har bestemt.",
    },
    {
      question: "Hva kjennetegner den korporative kanalen?",
      options: ["Organiserte interessers deltakelse i høringer, utredninger og ekspertfora", "Borgernes deltakelse gjennom valg til nasjonalforsamlingen hvert fjerde år", "Regjeringens direkte kontakt med andre lands regjeringer i mellomstatlige møter", "Domstolenes prøving av om vedtak er i samsvar med gjeldende regelverk på feltet"],
      explanation: "Riktig svar er organiserte interessers deltakelse i høringer, utredninger og ekspertfora. Kanalen er en anerkjent del av hvordan politikk blir til, men den gir innflytelse uten ansvarliggjøring: ingen velger deltakerne, og ingen kan stemme dem ut.",
    },
    {
      question: "Hvordan er kanalene stilt for et land som er tilknyttet EU uten å være medlem?",
      options: ["Den korporative kanalen står i praksis åpen, mens den numeriske er stengt", "Den numeriske kanalen står åpen, mens den korporative er forbeholdt medlemmer", "Begge kanalene er stengt, slik at landet ikke har noen innflytelse i det hele tatt", "Begge kanalene står åpne, men innflytelsen er svakere enn for medlemsstatene"],
      explanation: "Riktig svar er at den korporative kanalen står åpen mens den numeriske er stengt: landet har verken stemmerett i Ministerrådet eller representanter i Europaparlamentet, men fagfolk og organisasjoner kan delta i faglige fora. Innflytelsen forsvinner ikke — den skifter kanal.",
    },
    {
      question: "Hva omfatter EØS-avtalen?",
      options: ["Tilslutning til det indre marked, med løpende innlemmelse av regelverk", "Fullt medlemskap i tollunionen og i unionens felles handelspolitikk", "Deltakelse i den felles utenriks- og sikkerhetspolitikken på like vilkår", "Tilslutning til pengeunionen uten stemmerett i sentralbankens organer"],
      explanation: "Riktig svar er tilslutning til det indre marked med løpende innlemmelse av regelverk. Landbruk og fiskeri, tollunionen, den felles handelspolitikken, pengeunionen og utenriks- og sikkerhetspolitikken ligger i hovedsak utenfor avtalen.",
    },
    {
      question: "Hva menes med at Norge tar inn regler uten stemmerett?",
      options: ["At regelverket blir til i organer der Norge verken stemmer eller er representert", "At Stortinget ikke får behandle reglene før de gjelder som norsk rett", "At norske myndigheter ikke kan delta i noen del av utformingen av reglene", "At reglene gjelder i Norge uten at de er gjennomført i norsk lovgivning"],
      explanation: "Riktig svar er at regelverket blir til i organer der Norge verken har stemmerett eller representanter. Norsk deltakelse skjer på det faglige stadiet, før forslaget er ferdig — å skrive at Norge er uten innflytelse, er derfor like upresist som å skrive at Norge deltar på lik linje.",
    },
    {
      question: "Hva er reservasjonsadgangen i EØS-avtalen?",
      options: ["En traktatfestet adgang til å la være å ta en rettsakt inn i avtalen", "En rett til å utsette gjennomføringen av en rettsakt i inntil fem år", "En rett til å kreve at en rettsakt endres før den kan tas inn i avtalen", "En adgang til å tre ut av avtalen midlertidig og deretter komme inn igjen"],
      explanation: "Riktig svar er en traktatfestet adgang til å la være å ta en rettsakt inn. Adgangen er reell, men lite brukt: en reservasjon kan få følger for den delen av avtalen rettsakten hører til, og terskelen oppleves derfor som høy. Formell og reell handlefrihet er ikke det samme.",
    },
    {
      question: "Hvorfor er Norge et lærebokeksempel på europeisering?",
      options: ["Fordi landet er lite integrert i unionen og samtidig sterkt europeisert", "Fordi landet har avstått mer myndighet til unionen enn de fleste medlemsland", "Fordi landet har vært medlem lenger enn de fleste andre land i Europa", "Fordi landet har reservert seg mot en stor del av regelverket i avtalen"],
      explanation: "Riktig svar er at landet er lite integrert og sterkt europeisert samtidig. Det viser at de to prosessene lar seg skille: europeisering følger av påvirkning og ikke av myndighetsoverføring, og nettopp derfor kan et ikke-medlem være dypt påvirket.",
    },
    {
      question: "Hvordan leser realismen tilpasningen i et ikke-medlem?",
      options: ["Som prisen for adgang til et marked landet er avhengig av", "Som en gjensidig gevinst der begge parter kommer bedre ut enn før", "Som en følge av at felles faglige standarder er blitt det selvfølgelige", "Som et første skritt på veien mot fullt medlemskap i unionen på sikt"],
      explanation: "Riktig svar er at tilpasningen leses som prisen for adgang. Perspektivet forventer da at tilpasningen er dypest der avhengigheten er størst. De to neste alternativene beskriver liberal institusjonalisme og konstruktivisme.",
    },
    {
      question: "Hva er realismens blindsone når det gjelder europeisering?",
      options: ["Overoppfyllelsen: tilpasning på felt der ingen markedsadgang står på spill", "Avhengigheten: at et lite land er henvist til å følge et stort markeds regler", "Maktforholdet: at den som utformer reglene, står sterkere enn den som tar dem inn", "Kostnaden: at det å stå helt utenfor markedet ville vært dyrere enn å tilpasse seg"],
      explanation: "Riktig svar er overoppfyllelsen. Tilpasning som går lenger enn avtalen krever, på felt uten markedskonsekvenser, passer dårlig i en forklaring bygd på pris og avhengighet. De tre andre alternativene er nettopp det realismen forklarer godt.",
    },
    {
      question: "Hvilket analysenivå forklarer mest i temaet europeisering?",
      options: ["Statsnivået, siden tilpasningens dybde avhenger av trekk ved det enkelte landet", "Individnivået, siden alt avhenger av hvilke embetsfolk som sitter i nettverkene", "Systemnivået, siden asymmetrien mellom unionen og landet forklarer variasjonen", "Alle tre likt, siden europeisering ikke lar seg plassere på noe enkelt nivå"],
      explanation: "Riktig svar er statsnivået: tilpasningens dybde avhenger av avstanden mellom eksisterende ordninger og dem som kommer. Systemnivået forklarer retningen — at påvirkningen går én vei — men ikke hvorfor to like avhengige land tilpasser seg ulikt dypt.",
    },
    {
      question: "Hva er feil #8?",
      options: ["Å blande integrasjon og europeisering når oppgaven spør om påvirkning", "Å bruke bare én teoritradisjon der oppgaven ber om minst to perspektiver", "Å svare på flere kortsvar enn oppgaven ber om, og dermed sløse med tiden", "Å gjengi teorien riktig uten å bruke den til å argumentere for noe som helst"],
      explanation: "Riktig svar er å blande integrasjon og europeisering. Testen er enkel: handler avsnittet om hvem som har myndigheten, skriver du om integrasjon. De tre andre alternativene beskriver andre feilkoder i registeret.",
    },
    {
      question: "Hva er det sterkeste motargumentet mot at EØS-avtalen forklarer tilpasningen?",
      options: ["At bedrifter som selger inn i et marked, uansett må følge markedets regler", "At Norge har reservert seg mot en stor del av regelverket i avtalen", "At tilpasningen bare gjelder saksfelt uten betydning for norsk økonomi", "At Stortinget kan endre reglene fritt når de først er gjennomført i norsk rett"],
      explanation: "Riktig svar er at bedrifter som selger inn i et marked, uansett må følge markedets regler. Da er avtalen mindre årsak enn den ser ut til. Motargumentet mot det igjen er at avtalen gjør tilpasningen løpende, forpliktende og bred, også på felt der markedstvangen alene ville vært svak.",
    },
    {
      question: "Hvem eier begrepet europeisering i pensum?",
      options: ["Claes og Førland, som er et stabilt norsk anker gjennom hele arkivperioden", "Hovi og Underdal, som eier statssystemet og de internasjonale organisasjonene", "Claes, Hveem og Tranøy, som eier handel og internasjonal politisk økonomi", "Wig, som er den gjeldende norske boken om årsakene til at stater går til krig"],
      explanation: "Riktig svar er Claes og Førland. De øvrige er reelle pensumankere på andre felt: statssystemet og organisasjonene, den politiske økonomien, og krigsårsakene. Sjekk alltid gjeldende pensumliste, siden avsenderne rullerer og begrepene ikke gjør det.",
    },
  ],
  'stv1200-6-1': [
    {
      question: "Hva krever bestevilkårsprinsippet, også kalt most favoured nation?",
      options: ["At vilkårene et medlem gir sin best behandlede partner, skal gjelde alle medlemmene", "At importerte varer skal behandles like godt som tilsvarende hjemlige varer", "At et medlem kan gi sin viktigste handelspartner særlig gunstige vilkår", "At medlemmene senker sine tollsatser i samme takt over en fastsatt periode"],
      explanation: "Riktig svar er at de beste vilkårene ett medlem gir, skal gjelde alle. Navnet ser ut som særbehandling, men virkningen er den motsatte. Alternativet om importerte varer beskriver nasjonal behandling, som er det nabobegrepet forvekslingen oftest skjer med.",
    },
    {
      question: "Hva krever prinsippet om nasjonal behandling?",
      options: ["At en importert vare innenfor grensen behandles minst like godt som en tilsvarende hjemlig vare", "At alle handelspartnere skal behandles helt likt i det øyeblikket varene passerer grensen til landet", "At hvert medlem selv kan bestemme reglene for varer som produseres innenlands", "At nasjonale myndigheter godkjenner alle importerte varer før de kan omsettes"],
      explanation: "Riktig svar er at importerte varer ikke skal diskrimineres innenfor grensen. Alternativet om lik behandling ved grensen ligger nær og beskriver bestevilkårsprinsippet. Huskeregelen er hvor grensen går: bestevilkår ved grensen, nasjonal behandling innenfor den.",
    },
    {
      question: "Hvorfor er gjennomsiktighet en forutsetning for de øvrige prinsippene?",
      options: ["Fordi en regel om likebehandling er verdiløs dersom ingen kan kontrollere om den følges", "Fordi åpne regler senker produksjonskostnadene for varene som handles mellom medlemmene", "Fordi tvisteløsningen forutsetter at partene er enige om faktum før saken behandles", "Fordi medlemmene ellers ikke kan enes om hvilke varegrupper avtalen skal omfatte"],
      explanation: "Riktig svar er at likebehandling ikke kan håndheves uten innsyn. Dette er også den direkte koblingen til liberal institusjonalisme, som forklarer institusjoners virkning med at de reduserer usikkerhet og gjør juks synlig.",
    },
    {
      question: "Hva innebærer prinsippet om gjensidig nedbygging av handelshindre?",
      options: ["At medlemmene reduserer sine egne hindre mot at de andre reduserer sine, gjennom forhandlinger", "At handelshindrene skal fjernes helt innen en frist medlemmene fastsetter sammen", "At medlemmene betaler kompensasjon til de statene som senker hindrene sine mest", "At de største økonomiene skal gå foran og senke sine egne hindre før de mindre medlemmene følger etter"],
      explanation: "Riktig svar er at innrømmelser byttes i forhandlinger. Poenget er politisk så vel som økonomisk: gjensidigheten gir regjeringen noe å vise fram hjemme, nemlig adgang til andres markeder for egne eksportnæringer.",
    },
    {
      question: "Hva er et internasjonalt regime?",
      options: ["Et sett regler, normer og prosedyrer statene har sluttet seg til på et bestemt saksområde", "En organisasjon med sekretariat og faste organer som forvalter en gruppe avtaler", "En overnasjonal myndighet som kan fatte vedtak mot enkeltstaters uttrykte vilje", "En gruppe stater som har inngått en gjensidig forpliktende forsvarsavtale med hverandre om felles innsats"],
      explanation: "Riktig svar er at et regime er regelverket og forventningene på et saksområde. Alternativet om sekretariat og organer beskriver en internasjonal organisasjon; WTO er begge deler samtidig, og det er nettopp derfor skillet er verdt å ha klart.",
    },
    {
      question: "Hva er forskjellen på toll og et ikke-tollmessig handelshinder?",
      options: ["Toll er en avgift ved grensen, mens ikke-tollmessige hindre er krav og ordninger som vanskeliggjør salg", "Toll gjelder bare industrivarer, mens de ikke-tollmessige hindrene gjelder tjenester og immaterielle rettigheter", "Toll fastsettes av regjeringen, mens ikke-tollmessige hindre fastsettes av nasjonalforsamlingen", "Toll rammer alle handelspartnere likt, mens ikke-tollmessige hindre rammer bare enkeltland"],
      explanation: "Riktig svar er at toll er en grenseavgift, mens ikke-tollmessige hindre er kvoter, tekniske krav, innkjøpsregler og subsidier. Skillet er politisk viktig: toll er lett å måle og forhandle bort, mens de andre hindrene ofte har en legitim begrunnelse i behold.",
    },
    {
      question: "Hva kjennetegnet tvisteløsningen under GATT?",
      options: ["En avgjørelse kunne stanses av den parten den gikk imot, siden den krevde tilslutning fra alle", "Avgjørelsene ble truffet av en fast domstol med myndighet til å ilegge partene bøter", "Tvistene ble avgjort av de største handelsnasjonene i fellesskap, på egne forhandlingsmøter mellom dem", "Avgjørelsene var bindende, men kunne ankes til en klageinstans oppnevnt av sekretariatet"],
      explanation: "Riktig svar er at den tapende parten kunne blokkere konklusjonen. Merk presiseringen: det var ikke reglene som var svake under GATT, det var håndhevelsen — og det er den distinksjonen et langsvar bør ha med.",
    },
    {
      question: "Når ble WTO opprettet?",
      options: ["I 1995, som en fast organisasjon med bindende tvisteløsning", "I 1947, samtidig med den generelle avtalen om tolltariffer og handel", "I 1987, som del av arbeidet med å fullføre det europeiske indre markedet", "I 2001, da en ny forhandlingsrunde om handelsregler ble innledet"],
      explanation: "Riktig svar er 1995. Det avgjørende ved opprettelsen var ikke navnet, men at regimet fikk håndhevelse: en fast organisasjon, et bredere saksområde og en tvisteløsning som den tapende parten ikke kan blokkere.",
    },
    {
      question: "Hva betyr det at WTOs tvisteløsning er bindende?",
      options: ["At avgjørelsen står selv om den tapende parten er uenig, og ikke kan blokkeres av denne", "At organisasjonen selv gjennomfører avgjørelsen dersom parten ikke retter seg frivillig", "At avgjørelsen kan tvangsfullbyrdes gjennom domstolene i det medlemslandet som tapte", "At alle medlemmene må slutte seg til avgjørelsen før den kan få virkning for partene"],
      explanation: "Riktig svar er at avgjørelsen ikke kan blokkeres av taperen. Håndhevelsen er likevel desentralisert: organisasjonen gjennomfører ingenting selv, men kan gi den vinnende parten adgang til autoriserte mottiltak.",
    },
    {
      question: "Hvordan vedtas nye regler i WTO i praksis?",
      options: ["Ved konsensus, slik at hvert enkelt medlem kan stanse et forslag", "Ved kvalifisert flertall blant medlemmene, med vekt etter handelsvolum", "Ved simpelt flertall i organisasjonens øverste organ, med én stemme per medlem", "Av sekretariatet, etter innstilling fra de største handelsnasjonene i fellesskap"],
      explanation: "Riktig svar er konsensus. Regelen legitimerer og lammer samtidig, og den skaper en institusjonell asymmetri: det er vanskelig å lage nye regler, men lettere å håndheve de gamle, siden tvisteløsningen ikke krever konsensus.",
    },
    {
      question: "Hva er hovedunntaket fra bestevilkårsprinsippet?",
      options: ["Regionale frihandelsområder og tollunioner, der en gruppe stater gir hverandre bedre vilkår", "Varer som anses å ha betydning for medlemsstatenes nasjonale sikkerhet i krisetid", "Land som nylig er blitt medlemmer, og som får en overgangsperiode med egne satser", "Tjenester og immaterielle rettigheter, som ligger utenfor regimets saklige virkeområde"],
      explanation: "Riktig svar er regionale frihandelsområder og tollunioner. Unntaket er politisk forståelig og analytisk brysomt: det åpner nettopp den sorteringen av handelspartnere som hovedregelen skulle hindre.",
    },
    {
      question: "Hvilken struktur har handelspolitikk mellom to land som begge fristes til toll?",
      options: ["Et fangens dilemma, der begge taper på gjensidig proteksjonisme, men hver enkelt fristes til å bryte", "En ren interessekonflikt, der partene ønsker seg helt ulike utfall av forhandlingene", "Et nullsumspill, der den enes gevinst nøyaktig tilsvarer den andres tap i handelen", "Et koordineringsproblem, der partene bare trenger å bli enige om hvilken felles standard de skal bruke seg imellom"],
      explanation: "Riktig svar er fangens dilemma. Alternativet om ren interessekonflikt ligger nær og er galt på ett viktig punkt: i fangens dilemma er partene enige om hva som er best for begge, og det er derfor institusjoner kan løse problemet.",
    },
    {
      question: "Hva menes med skyggen av framtiden?",
      options: ["At et dilemma som gjentas, spilles annerledes enn ett som spilles bare én gang", "At stater vektlegger framtidige generasjoners interesser når de inngår handelsavtaler", "At usikkerhet om framtidige priser gjør at stater vegrer seg mot å binde seg langsiktig", "At avtaler som er inngått for lenge siden, gradvis mister sin bindende virkning"],
      explanation: "Riktig svar er at gjentakelse endrer regnestykket: tapet ved å miste samarbeidet i morgen veier mot gevinsten ved å bryte i dag. Det er denne mekanismen betinget samarbeid utnytter, og som gjør samarbeid mulig uten en håndhever over partene.",
    },
    {
      question: "Hva er betinget samarbeid?",
      options: ["Å bidra så lenge de andre bidrar, og å svare med det samme dersom noen bryter", "Å bidra bare dersom en overordnet myndighet kan håndheve avtalen mellom partene", "Å knytte deltakelsen i en avtale til at motparten oppfyller krav på et annet område", "Å delta i en avtale på prøve, med rett til å tre ut innen en fastsatt frist"],
      explanation: "Riktig svar er å holde sin del så lenge den andre holder sin. Strategien gjør samarbeidet selvhåndhevende uten at noen står over partene, og det er derfor den passer i et system uten overordnet myndighet.",
    },
    {
      question: "Hva forklarer liberal institusjonalisme med transaksjonskostnader?",
      options: ["At et fast regelverk sparer statene for å forhandle alt fra bunnen hver gang de samhandler", "At handel med varer over lange avstander koster mer enn handel mellom land som ligger nær hverandre", "At statene betaler et årlig bidrag for å holde organisasjonens sekretariat i drift", "At toll og avgifter øker prisen på varen i det landet som importerer den"],
      explanation: "Riktig svar er at faste regler sparer forhandlings- og kontrollkostnader. Påstanden er ikke at institusjoner gjør stater mindre egeninteresserte, men at de endrer regnestykket egeninteressen gjøres på — og det er den versjonen som tåler realismens innvending.",
    },
    {
      question: "Hvorfor skaper bestevilkårsprinsippet et gratispassasjerproblem?",
      options: ["Fordi enhver innrømmelse må gis til alle, slik at et medlem kan nyte andres nedbygging uten å gi noe", "Fordi de minste medlemmene betaler en lavere andel av organisasjonens felles utgifter", "Fordi kontrollen med etterlevelsen i stor grad hviler på frivillig rapportering fra hvert enkelt medlem", "Fordi tollinntektene faller bort for de medlemmene som senker satsene sine først"],
      explanation: "Riktig svar er at innrømmelser må gis til alle, slik at man kan nyte godt av andres uten å gi noe selv. Merk at problemet skapes av regimets eget hovedprinsipp, og at gjensidighetsprinsippet er det som demmer opp for det.",
    },
    {
      question: "Hva menes med embedded liberalism, altså forankret liberalisme?",
      options: ["At en åpen handelsorden utad ble forankret i nasjonale ordninger som dempet omstillingskostnadene", "At frihandelen ble innebygd i systemet og dermed vanskelig å reversere for enkeltland", "At liberal økonomisk tenkning ble lagt til grunn da de internasjonale organisasjonene ble opprettet", "At handelsregimet ble forankret i en traktat som binder medlemmene rettslig overfor hverandre"],
      explanation: "Riktig svar er kompromisset mellom åpenhet utad og kompensasjon innad. Alternativet om at frihandelen var innebygd i systemet, er den klassiske feillesningen av ordet embedded — den fjerner nettopp det politiske innholdet i begrepet.",
    },
    {
      question: "Hvem knyttes begrepet embedded liberalism til?",
      options: ["Ruggie, med Polanyi som faghistorisk bakteppe", "Ricardo, med List som faghistorisk motstemme", "Hovi og Underdal, i framstillingen av internasjonale regimer", "Claes og Førland, i framstillingen av europeisk integrasjon"],
      explanation: "Riktig svar er Ruggie, med Polanyi som bakteppe. Polanyis bidrag er den eldre innsikten at markeder ikke oppstår av seg selv, men innrettes politisk — og det er den innsikten begrepet bygger videre på.",
    },
    {
      question: "Hvorfor er tapene ved frihandel politisk tyngre enn gevinstene?",
      options: ["Fordi tapene er konsentrerte og merkbare, mens gevinstene er spredt tynt utover mange", "Fordi tapene samlet sett er større enn gevinstene når man regner for hele økonomien under ett", "Fordi de som taper, som regel har flere stemmer ved valg enn de som vinner", "Fordi gevinstene tilfaller utlandet, mens tapene bæres av produsenter innenlands"],
      explanation: "Riktig svar er fordelingen av oppmerksomhet: en gruppe som taper mye hver, er lettere å organisere enn en gruppe som vinner litt hver. Det er ikke en påstand om at regnestykket går i minus, men om hvem som mobiliserer.",
    },
    {
      question: "Hva er realismens lesning av handelsregimet?",
      options: ["At reglene er et redskap for de mektigste medlemmene, utformet der de tjener på åpenhet", "At reglene har selvstendig kraft fordi de reduserer usikkerhet mellom medlemmene", "At reglene uttrykker en norm om åpenhet som stater etter hvert tar for gitt", "At reglene er et forsøk på å erstatte statenes suverenitet med en overnasjonal myndighet"],
      explanation: "Riktig svar er redskapslesningen. Det avgjørende spørsmålet mellom realismen og liberal institusjonalisme er om reglene har egenvekt, altså om de virker også når de går imot en mektig stats umiddelbare interesse.",
    },
    {
      question: "Hva er realismens blindsone på handelsregimet?",
      options: ["Utholdenheten: at reglene har overlevd forskyvninger i maktforholdene uten å bli skrevet om", "Fordelingen: at gevinsten kan være stor og likevel svært ujevnt fordelt mellom medlemmene", "Prediksjonen: at perspektivet sier lite om når en etablert norm gir etter for kostnader", "Mekanismen: at perspektivet ikke forklarer hvorfor gjensidig proteksjonisme rammer alle"],
      explanation: "Riktig svar er utholdenheten. Er reglene bare et uttrykk for maktforholdene, skulle de fulgt maktforholdene tettere enn de har gjort. Alternativet om fordelingen beskriver liberalismens blindsone, ikke realismens.",
    },
    {
      question: "Hva er liberal institusjonalismes blindsone på handelsregimet?",
      options: ["Fordelingen: at summen kan være positiv samtidig som gevinsten er svært ujevnt fordelt", "Utholdenheten: at reglene består selv når tyngdepunktet mellom medlemmene forskyver seg", "Mekanismen: at perspektivet ikke forklarer hvorfor samarbeid er vanskelig under anarki", "Prediksjonen: at perspektivet sier lite om hvor mye press en etablert norm faktisk tåler"],
      explanation: "Riktig svar er fordelingen. At summen øker, sier ingenting om hvem som får hva — verken mellom medlemsland eller mellom grupper innad i dem. Det er nettopp derfor embedded liberalism er et nødvendig tillegg og ikke en variant av samme påstand.",
    },
    {
      question: "Hvordan leser konstruktivismen handelsregimet?",
      options: ["Som normer som over tid har endret hva som regnes som normal handelspolitikk", "Som et redskap de sterkeste medlemmene utformet der de selv tjente på åpenhet", "Som en løsning på et fangens dilemma, der reglene gjør atferd forutsigbar", "Som en overnasjonal ordning der medlemmene har avstått myndighet til fellesorganer"],
      explanation: "Riktig svar er normlesningen. Institusjonalismen sier at regimet endrer regnestykket aktørene gjør; konstruktivismen sier at det endrer hva som i det hele tatt oppfattes som et alternativ. Det er to ulike påstander om samme regime.",
    },
    {
      question: "Hva er institusjonalisering, slik overgangen fra GATT til WTO viser?",
      options: ["At et samarbeid får egne organer og faste prosedyrer, og blir dyrere å komme seg ut av", "At statene overfører myndighet oppover, slik at vedtak kan fattes over hodet på dem", "At samarbeidet utvides til nye saksområder som tidligere lå utenfor avtalen", "At flere stater slutter seg til en avtale som opprinnelig gjaldt en mindre krets"],
      explanation: "Riktig svar er at samarbeidet får fastere former. Distinksjonen mot integrasjon er verdt å ha klar: WTO er sterkt institusjonalisert og lite integrert, siden medlemmene ikke har gitt fra seg myndighet til å vedta regler mot sin vilje.",
    },
    {
      question: "Hvilket analysenivå bør bære hoveddisposisjonen i et langsvar om handelsregimets holdbarhet?",
      options: ["Systemnivået, siden strukturen i samarbeidsproblemet er et trekk ved forholdet mellom statene", "Statsnivået, siden det er der interessegruppene og de innenlandske koalisjonene faktisk sitter", "Individnivået, siden det er forhandlerne som utformet reglene i de avgjørende rundene", "Ingen av nivåene, siden handelspolitikk ligger utenfor rammeverket for analysenivåer"],
      explanation: "Riktig svar er systemnivået. Statsnivået skal likevel med, fordi det bærer variasjonen: hvorfor to medlemmer i samme situasjon fører ulik handelspolitikk. Å bruke begge, og si hvorfor, er det Akse 4 måler.",
    },
    {
      question: "Hva består feil #6 i, anvendt på handelsregimet?",
      options: ["Å føre et rent økonomisk resonnement uten å komme til hvem som bestemmer og hvem som taper", "Å utelate den analyseramma oppgaven ber om, slik at perspektivene aldri blir tatt aktivt i bruk", "Å bruke bare én teoritradisjon der oppgaven ber om minst to av dem", "Å svare på flere kortsvar enn oppgaven ber om, slik at tiden brukes uten uttelling"],
      explanation: "Riktig svar er økonomi uten politisk kobling. Vaksinen er én setning etter hvert økonomisk ledd: hvem har interesse av dette, og hvem kan stanse det? Alternativene beskriver feil #2, #4 og #10.",
    },
    {
      question: "Hva er den vanligste enkeltfeilen i redegjørelsen for GATT og WTO?",
      options: ["Å skrive at WTO bare er et nytt navn på GATT, og dermed overse håndhevelsen", "Å tro at GATT var en fast organisasjon med sekretariat og egne faste organer", "Å plassere de fire prinsippene til WTO alene, uten forløpet i den eldre avtalen", "Å skrive at beslutninger i WTO fattes med flertall blant medlemsstatene"],
      explanation: "Riktig svar er navnebytte-feilen. Det som skjedde i 1995, var at regimet fikk en håndhevelsesmekanisme — reglene var langt på vei de samme før og etter, og det er nettopp derfor institusjonaliseringen er poenget.",
    },
    {
      question: "Hva er den institusjonelle asymmetrien i WTO?",
      options: ["Nye regler krever konsensus, mens håndhevingen av gamle regler ikke gjør det", "Store medlemmer har flere stemmer enn små når nye regler skal vedtas", "Tvister avgjøres raskt, mens forhandlinger om tollsatser tar flere år", "Sekretariatet kan foreslå regler, men medlemmene kan ikke foreslå noe selv"],
      explanation: "Riktig svar er asymmetrien mellom regelskaping og håndhevelse. Konsekvensen er at et regime kan være sterkt og handlingslammet på én gang — en presis måte å beskrive situasjonen på uten å ta stilling til den.",
    },
  ],
  'stv1200-6-2': [
    {
      question: "Hva er alternativkostnaden ved å gjøre noe?",
      options: ["Det beste man gir opp for å gjøre det, her målt i mengden av den andre varen", "Summen av alle utgiftene som påløper mens arbeidet med varen pågår", "Prisen varen ville hatt i et annet land med et annet kostnadsnivå", "Forskjellen mellom det varen koster å lage og det den selges for i markedet"],
      explanation: "Riktig svar er det man gir opp. Merk at kostnaden ikke måles i penger her, men i den andre varen — og det er derfor begrepet virker like godt mellom land med helt ulike priser og valutaer.",
    },
    {
      question: "Hva vil det si at et land har komparativt fortrinn i en vare?",
      options: ["At det produserer varen med lavest alternativkostnad, altså gir opp minst av noe annet", "At det produserer varen med færre arbeidstimer enn andre land bruker på den", "At det er bedre til å lage nettopp denne varen enn til å lage noen av de andre varene sine", "At det selger varen til lavere pris enn konkurrentene i det samme markedet"],
      explanation: "Riktig svar er lavest alternativkostnad. Alternativet om færre arbeidstimer beskriver absolutt fortrinn, og den forvekslingen er den klassiske feilen: komparativt fortrinn handler om hva landet gir opp, ikke om hvem som er raskest.",
    },
    {
      question: "Hva er den avgjørende distinksjonen mellom absolutt og komparativt fortrinn?",
      options: ["Absolutt fortrinn sammenligner to land på samme vare, komparativt fortrinn to varer i samme land", "Absolutt fortrinn gjelder varer, mens komparativt fortrinn gjelder tjenester og immaterielle rettigheter", "Absolutt fortrinn måles i penger, mens komparativt fortrinn måles i antall arbeidstimer", "Absolutt fortrinn gjelder på kort sikt, mens komparativt fortrinn gjelder på lang sikt"],
      explanation: "Riktig svar er hva som sammenlignes med hva. Den doble sammenligningen er hele poenget: et land kan mangle absolutt fortrinn i alt og likevel ha komparativt fortrinn i noe, fordi alternativkostnadene ikke kan være høyest i begge varer samtidig.",
    },
    {
      question: "Hvem knyttes læren om komparative fortrinn til?",
      options: ["Ricardo", "List", "Ruggie", "Polanyi"],
      explanation: "Riktig svar er Ricardo. List er knyttet til infant-industry-argumentet, mens Ruggie og Polanyi hører til framstillingen av forankret liberalisme og av markeder som politisk innrettede ordninger.",
    },
    {
      question: "Hva er kjernepåstanden i læren om komparative fortrinn?",
      options: ["At spesialisering gir gevinst for begge parter, også når det ene landet er absolutt best på alt", "At hvert land bør produsere nettopp de varene som det er absolutt best til å produsere på egen hånd", "At land med like kostnadsforhold tjener mest på å handle med hverandre", "At handel gir gevinst bare når hvert land er best på hver sin vare"],
      explanation: "Riktig svar er at gevinsten oppstår også når det ene landet er best på alt. Det er nettopp dette tilfellet som gjør innsikten kontraintuitiv, og det er derfor et talleksempel bør konstrueres slik at det ene landet er absolutt best på begge varer.",
    },
    {
      question: "Land A bruker 2 timer på en enhet korn og 4 timer på en enhet tekstil. Hva er alternativkostnaden for én enhet korn i A?",
      options: ["En halv enhet tekstil", "To enheter tekstil", "Fire enheter tekstil", "En og en halv enhet tekstil"],
      explanation: "Riktig svar er en halv enhet tekstil: de to timene som går med til én enhet korn, kunne gitt en halv enhet tekstil. Alternativet om to enheter er den samme brøken snudd, og den gir alternativkostnaden for tekstil målt i korn.",
    },
    {
      question: "Hvorfor kan et land ikke ha komparativt fortrinn i begge varer?",
      options: ["Fordi alternativkostnadene måles mot hverandre, og begge kan ikke være lavest samtidig", "Fordi ingen land har nok arbeidskraft til å produsere begge varene i tilstrekkelig omfang", "Fordi handelsavtaler forbyr at ett land dominerer to markeder samtidig", "Fordi det ville krevd at landet var absolutt best på begge varene samtidig"],
      explanation: "Riktig svar følger av at alternativkostnaden er en sammenligning innad i landet. Er den lav for den ene varen, er den høy for den andre — og derfor havner fortrinnene alltid i hver sin vare.",
    },
    {
      question: "Hva er bytteforholdet i handelen mellom to land?",
      options: ["Hvor mye av den ene varen som gis for en enhet av den andre i handelen mellom dem", "Forholdet mellom den samlede eksporten og den samlede importen for hvert av de to landene", "Forholdet mellom tollsatsene de to landene har på hverandres varer", "Andelen av produksjonen hvert land velger å selge ut av landet"],
      explanation: "Riktig svar er hvor mye som gis for hva. For at begge skal tjene, må bytteforholdet ligge mellom de to landenes alternativkostnader — og hvor i det intervallet det lander, avgjør hvordan gevinsten fordeles mellom dem.",
    },
    {
      question: "Hva er kilden til gevinsten ved spesialisering etter komparativt fortrinn?",
      options: ["Omfordelingen alene: de samme ressursene brukes der de gir opp minst av noe annet", "Ny teknologi som blir tilgjengelig når landene begynner å handle med hverandre", "Økt arbeidsinnsats, siden konkurransen tvinger begge land til å produsere mer", "Tilgang på nye råvarer som ingen av landene hadde tilgang til på egen hånd"],
      explanation: "Riktig svar er omfordelingen. Ingen nye ressurser tilføres, ingen jobber hardere, og ingen får ny teknologi — hele gevinsten kommer av at timene brukes der de gir opp minst.",
    },
    {
      question: "Hva sier infant-industry-argumentet?",
      options: ["At en ung næring kan trenge midlertidig vern for å bli konkurransedyktig", "At en næring i tilbakegang bør vernes til de ansatte har nådd pensjonsalder", "At nye næringer bør subsidieres permanent fordi de skaper arbeidsplasser", "At land bør verne de næringene der de allerede har komparativt fortrinn"],
      explanation: "Riktig svar er midlertidig vern av unge næringer, et argument knyttet til List. Merk hvilken forutsetning det angriper: at produktiviteten er gitt. Er produktivitet noe som bygges, er dagens fortrinn ikke naturgitt.",
    },
    {
      question: "Hvilken forutsetning i modellen angriper infant-industry-argumentet?",
      options: ["At produktiviteten er gitt og ikke endrer seg av at landet spesialiserer seg", "At ressursene lar seg flytte fritt mellom næringer innenfor landet", "At det ikke finnes skalafordeler som gjør den største produsenten billigst", "At fordelingen innad i landet ikke er en del av regnestykket"],
      explanation: "Riktig svar er forutsetningen om gitt produktivitet. Å kunne knytte hver innvending til den forutsetningen den treffer, er et sikkert pluss-punkt — de tre andre alternativene er reelle forutsetninger, men de treffes av andre innvendinger.",
    },
    {
      question: "Hva er skalafordeler?",
      options: ["At kostnaden per enhet faller når produksjonen øker, slik at den som er stor, blir billigst", "At de store landene har langt flere naturressurser enn de små å bygge sin egen produksjon på over tid", "At store bedrifter har lettere tilgang på lån enn små bedrifter i samme næring", "At kostnadene stiger raskere enn produksjonen når en næring vokser for fort"],
      explanation: "Riktig svar er fallende enhetskostnad ved økende produksjon. Virkningen er politisk interessant: den som kom i gang først, kan bli billigst uten å ha vært best i utgangspunktet, og da er fortrinnet et resultat av rekkefølgen.",
    },
    {
      question: "Hva betyr det at handelen er positivsum?",
      options: ["At den samlede produksjonen øker, slik at begge land kan komme bedre ut enn uten handel", "At alle grupper i begge landene kommer bedre ut enn de var før handelen mellom dem begynte", "At begge land kommer like mye bedre ut av avtalen som de inngår med hverandre", "At handelen alltid gir overskudd på handelsbalansen for begge de to landene"],
      explanation: "Riktig svar er en påstand om summen, ikke om noen enkelt part. Fra at begge land kan komme bedre ut, følger verken at alle i begge land gjør det, eller at de kommer like mye bedre ut — begge de slutningene er vanlige og gale.",
    },
    {
      question: "Hva er merkantilismens innvending mot frihandelsargumentet?",
      options: ["At statens posisjon i forhold til andre stater er målestokken, ikke den samlede gevinsten", "At handel mellom land alltid gir mindre samlet produksjon enn produksjon hjemme", "At frihandel bare gagner de landene som allerede har den største økonomien", "At gevinstene ved handel er for små til å veie opp for kostnadene ved den omstillingen som kreves"],
      explanation: "Riktig svar er at målestokken er en annen. Merkantilismen bestrider ikke nødvendigvis at summen kan øke, men at summen er det relevante målet — og det er en langt mer presis framstilling av striden enn å si at den ene er mot handel.",
    },
    {
      question: "Hva er koblingen mellom merkantilisme og realismens relative gevinster?",
      options: ["Begge måler utfallet mot motpartens posisjon i stedet for mot situasjonen uten avtale", "Begge hevder at handel mellom stater samlet sett gir mindre enn den koster", "Begge legger vekt på at internasjonale institusjoner har selvstendig egenvekt", "Begge forklarer staters valg med normer og med hva som regnes som akseptabelt"],
      explanation: "Riktig svar er den felles målestokken. Distinksjonen mellom dem er sjangeren: merkantilismen er en økonomisk-politisk tradisjon med anbefalinger, realismen et analytisk perspektiv på hvorfor stater handler som de gjør.",
    },
    {
      question: "Hva er sårbarhetsargumentet mot spesialisering?",
      options: ["At avhengighet av andres leveranser kan utnyttes politisk i kriser og konflikter", "At en spesialisert økonomi rammes hardere av svingninger i verdensmarkedsprisene", "At arbeidskraften mister bredden i kompetansen når produksjonen snevres inn", "At land som spesialiserer seg, mister muligheten til å delta i handelsforhandlinger"],
      explanation: "Riktig svar er at avhengighet er en sårbarhet. Motposisjonen er like reell og skal med i en drøfting: gjensidig avhengighet gjør også brudd dyrt for motparten, og hvilken virkning som dominerer, varierer med varen og med antall alternative leverandører.",
    },
    {
      question: "Hva er den økonomiske liberalismens blindsone i dette temaet?",
      options: ["Fordelingen: at summen øker sier ingenting om hvem som vinner og hvem som taper", "Utholdenheten: at handelsmønstre består selv når kostnadsforholdene endrer seg", "Mekanismen: at perspektivet ikke forklarer hvorfor spesialisering gir gevinst", "Prediksjonen: at perspektivet sier lite om når en etablert norm vil gi etter"],
      explanation: "Riktig svar er fordelingen. Blindsonen er skarpest der omstillingen er treg: modellen forutsetter at ressursene flyttes, og der de ikke flyttes, beskriver den samlede gevinsten dårlig hva folk faktisk opplever.",
    },
    {
      question: "Hva er realismens blindsone i dette temaet?",
      options: ["Den samlede gevinsten: konsekvent avståelse gjør landet fattigere, og det er også en svakhet", "Fordelingen: perspektivet ser ikke hvem som vinner og taper innad i landet", "Mekanismen: at perspektivet ikke forklarer hvorfor spesialisering øker den samlede produksjonen", "Strukturen: perspektivet mangler et begrep om hva et handelsregime egentlig er"],
      explanation: "Riktig svar er den samlede gevinsten. Blindsonen er også empirisk: perspektivet forutsetter at økonomisk gevinst omsettes i politisk innflytelse, uten alltid å si hvor raskt eller på hvilke felter det faktisk skjer.",
    },
    {
      question: "Hvilket analysenivå bør bære drøftingen i et langsvar om frihandel og proteksjonisme?",
      options: ["Statsnivået, siden det er der interessene og de utsatte gruppene sitter", "Systemnivået, siden arbeidsdelingen mellom land er en struktur ingen kan endre alene", "Individnivået, siden beslutningstakernes oppfatninger avgjør hva som blir vedtatt", "Ingen av nivåene, siden handelspolitikk er et økonomisk og ikke et politisk spørsmål"],
      explanation: "Riktig svar er statsnivået. Systemnivået bærer den redegjørende delen, siden mekanismen ligger der, men drøftingen om vern avgjøres av interesser innenlands — og å si hvorfor man velger som man gjør, er Akse 4.",
    },
    {
      question: "Hva består feil #11 i, anvendt på dette temaet?",
      options: ["Å definere komparativt fortrinn uten alternativkostnad, altså den flate definisjonen", "Å bruke bare én tradisjon der oppgaven ber om minst to av dem", "Å føre et rent økonomisk resonnement uten å nevne hvem som bestemmer", "Å behandle den ene delen av en todelt oppgave svært grundig og den andre delen altfor tynt"],
      explanation: "Riktig svar er begrepet uten distinksjonen. Formuleringen om at land bør produsere det de er best til, beskriver absolutt fortrinn. Alternativene beskriver feil #4, #6 og #5.",
    },
    {
      question: "Hva skiller frihandel og proteksjonisme fra økonomisk liberalisme og merkantilisme?",
      options: ["De første er politiske standpunkter, de siste analytiske tradisjoner med hvert sitt begrepsapparat", "De første gjelder varer, de siste gjelder kapital og investeringer over landegrensene", "De første er begreper fra økonomifaget, de siste er begreper fra statsvitenskapen", "De første beskriver dagens politikk, mens de siste beskriver hvordan politikken var i tidligere tider"],
      explanation: "Riktig svar er skillet mellom standpunkt og tradisjon. Å blande de to nivåene gjør drøftingen til en meningsutveksling i stedet for en analyse, og boka tar ikke stilling i selve stridsspørsmålet.",
    },
    {
      question: "Hva forutsetter modellen om ressursene innenfor et land?",
      options: ["At de lar seg flytte mellom næringer når produksjonen legges om", "At de er like fordelt mellom de næringene landet har fra før", "At de kan flyttes fritt også mellom land, ikke bare innad i landet", "At de øker i omfang etter hvert som landet spesialiserer seg mer"],
      explanation: "Riktig svar er at ressursene forutsettes å være flyttbare innad i landet. Nettopp derfor treffer innvendingen om trege omstillinger: der arbeidskraft og lokalsamfunn ikke lar seg flytte, blir tapene større og mer langvarige enn modellen legger opp til.",
    },
  ],
  'stv1200-6-3': [
    {
      question: "Hva er en negativ eksternalitet?",
      options: ["En kostnad ved en handling som veltes over på en tredjepart og ikke bæres av den som handler", "En kostnad som påløper senere enn gevinsten ved den samme handlingen gjør", "En kostnad som er større enn den gevinsten handlingen gir den som utfører den", "En kostnad som staten dekker over sitt eget budsjett i stedet for den aktøren som forårsaket den"],
      explanation: "Riktig svar er at kostnaden faller utenfor regnestykket til den som bestemmer. Faller den på aktøren selv, er den ingen eksternalitet — og da finnes heller ikke problemet begrepet skal forklare.",
    },
    {
      question: "Hva kjennetegner et globalt fellesgode?",
      options: ["At ingen kan stenges ute fra det, og at det strekker seg på tvers av statsgrenser", "At det forvaltes av en internasjonal organisasjon på vegne av alle statene", "At alle stater har forpliktet seg ved traktat til å bidra til å opprettholde det", "At det finnes i begrenset mengde og derfor må fordeles mellom statene"],
      explanation: "Riktig svar er ikke-ekskluderbarheten. Et gode ingen kan stenges ute fra, er et gode ingen kan kreve betaling for — og derfor er markedet en dårlig ordning for fellesgoder, som havner i politikkens fang i stedet.",
    },
    {
      question: "Hva skiller en allmenningsressurs fra et rent fellesgode?",
      options: ["Allmenningsressursen er også rivaliserende: det den ene bruker, er borte for de andre", "Allmenningsressursen er ekskluderbar, slik at brukere kan stenges ute fra den", "Allmenningsressursen forvaltes av staten, mens fellesgodet forvaltes av internasjonale organer", "Allmenningsressursen fornyer seg selv, mens fellesgodet må vedlikeholdes aktivt"],
      explanation: "Riktig svar er rivaliseringen. Skillet avgjør hva slags problem man står overfor: et rent fellesgode har et produksjonsproblem, mens en allmenningsressurs har et forvaltningsproblem — og de krever ulike løsninger.",
    },
    {
      question: "Hva er gratispassasjerproblemet?",
      options: ["At et gode kommer alle til del uansett hvem som betaler, så det lønner seg å la andre bære kostnaden", "At noen stater bevisst bryter avtaler de har inngått, for å oppnå en fordel", "At de rikeste statene betaler en lavere andel av kostnadene enn de fattigste gjør", "At stater deltar i forhandlingene uten å ha til hensikt å slutte seg til det resultatet som kommer ut av dem"],
      explanation: "Riktig svar er at godet kommer alle til del uansett hvem som betaler. Merk at en gratispassasjer ikke er likegyldig til godet: den kan ønske det inderlig og likevel finne det rasjonelt å la andre betale.",
    },
    {
      question: "Hva beskriver allmenningens tragedie?",
      options: ["At en felles ressurs overforbrukes fordi gevinsten er privat mens kostnaden fordeles på alle", "At felles ressurser forvaltes dårligere av stater enn av private eiere", "At ressurser blir knappe fordi befolkningen vokser raskere enn produksjonen", "At stater med felles grense oftere kommer i konflikt om naturressurser enn stater som ligger langt fra hverandre"],
      explanation: "Riktig svar er misforholdet mellom privat gevinst og felles kostnad. Poenget er at ingen av brukerne handler irrasjonelt — det er mekanismen og ikke moralen som er saken, og derfor hjelper det ikke å formane noen.",
    },
    {
      question: "Hvilken struktur har allmenningens tragedie?",
      options: ["Et fangens dilemma med mange deltakere, altså et kollektivt handlingsproblem", "En ren interessekonflikt der partene ønsker seg helt ulike utfall", "Et nullsumspill der den enes gevinst tilsvarer den andres tap nøyaktig", "Et koordineringsproblem der partene bare må enes om én felles standard"],
      explanation: "Riktig svar er fangens dilemma. Alternativet om interessekonflikt ligger nær og er galt på et viktig punkt: her er partene enige om at samarbeid er best for alle, og problemet er at ingen tør gå først.",
    },
    {
      question: "Hvorfor hjelper det ikke å overbevise flere om at et miljøproblem er alvorlig?",
      options: ["Fordi hindret er at den enkelte taper på å gå først, ikke at noen er uenige om målet", "Fordi statene mangler den tekniske kunnskapen som trengs for å iverksette effektive tiltak", "Fordi internasjonale avtaler krever enstemmighet blant alle berørte parter", "Fordi virkningene av tiltak først kan måles etter flere tiår med innsats"],
      explanation: "Riktig svar er at hindret ligger i strukturen. I et fangens dilemma er partene allerede enige om at samarbeid er best for alle — og det er derfor løsningen må endre den enkeltes regnestykke, ikke holdningen.",
    },
    {
      question: "Hvilke tre forhold gjør kollektive handlingsproblemer vanskeligere?",
      options: ["Antall aktører, ujevn fordeling av kostnader og gevinster, og tidsforskjellen mellom dem", "Antall aktører, geografisk avstand mellom dem, og ulikheter i språk og kultur", "Ressursens verdi, antallet alternative ressurser, og prisen på ressursen i verdensmarkedet", "Statenes styresett, deres militære styrke, og deres medlemskap i allianser"],
      explanation: "Riktig svar er de tre forholdene som varierer mellom saker. Klimaproblemet skårer høyt på alle tre, og det er den mest presise forklaringen faget kan gi på hvorfor det er tyngre enn andre miljøavtaler.",
    },
    {
      question: "Hvorfor er klimasamarbeid vanskeligere enn en avtale om en delt fiskebestand?",
      options: ["Fordi partene er langt flere, gevinsten kommer senere, og etterlevelsen er vanskeligere å måle", "Fordi statene er mer uenige om at klimaendringer er et reelt problem", "Fordi klimaavtaler krever endringer i nasjonal lovgivning, mens fiskeriavtaler sjelden gjør det", "Fordi ingen internasjonal organisasjon har mandat til å behandle klimaspørsmål"],
      explanation: "Riktig svar er trekkene ved problemet: antall parter, tidsforskjell og kontrollmuligheter. Forklaringen er mekanistisk og forutsetter ingenting om aktørenes vilje — og det er nettopp det som gjør den til en analyse.",
    },
    {
      question: "Hvordan kan institusjoner løse kollektive handlingsproblemer uten tvangsmakt?",
      options: ["Ved å fastsette bidrag, overvåke etterlevelsen og gjøre reaksjoner på brudd forutsigbare", "Ved å ilegge økonomiske sanksjoner mot de medlemmene som ikke oppfyller sine forpliktelser", "Ved å overta myndighet fra statene på de områdene avtalen omfatter", "Ved å kompensere alle deltakerne fullt ut for kostnadene ved tiltakene"],
      explanation: "Riktig svar er de tre grepene som virker uten myndighet over statene. De virker fordi hindret i et fangens dilemma er usikkerhet om den andre, ikke uenighet om målet.",
    },
    {
      question: "Hvorfor er overvåking en forutsetning og ikke en formalitet i miljøavtaler?",
      options: ["Fordi et løfte ingen kan kontrollere, ikke gir noen andre grunn til selv å bidra", "Fordi rapporteringen gir grunnlag for å beregne hvor store utslippene faktisk er", "Fordi avtalene krever at partene bruker de samme målemetodene i alle land", "Fordi organisasjonen må vite hvem som skal betale den største andelen av utgiftene"],
      explanation: "Riktig svar er at kontroll er det som gjør det trygt for andre å bidra. Koblingen til handelsregimet er direkte: gjennomsiktighetsprinsippet gjør nøyaktig det samme der, og en avtale uten kontrollmekanisme er en hensiktserklæring.",
    },
    {
      question: "Hva menes med at en miljøavtale gjør samarbeidet til et gjentatt spill?",
      options: ["At faste runder gir framtidige fordeler som det koster å miste ved å bryte i dag", "At avtalen må reforhandles i sin helhet med jevne mellomrom mellom partene", "At partene bytter på hvem som bærer den største kostnaden fra én runde til den neste", "At avtalen gjelder for en prøveperiode før den eventuelt gjøres permanent"],
      explanation: "Riktig svar er at gjentakelsen gir framtidige runder en verdi. Det er skyggen av framtiden satt i system, og mekanismen er betinging og ikke straff — den virker også uten at noen har makt til å straffe.",
    },
    {
      question: "Hva er realismens lesning av internasjonale miljøavtaler?",
      options: ["At avtalene i hovedsak registrerer atferd statene uansett var villige til", "At avtalene reduserer usikkerhet og dermed gjør samarbeid mulig under anarki", "At avtalene uttrykker en norm om at stater skal ha en miljøpolitikk", "At avtalene overfører myndighet fra statene til internasjonale organer"],
      explanation: "Riktig svar er at avtalene registrerer mer enn de flytter. Uenigheten mot liberal institusjonalisme gjelder ikke om avtaler inngås, men om de endrer atferd — og det er det spørsmålet en drøfting skal stille.",
    },
    {
      question: "Hva er liberal institusjonalismes blindsone på miljøsamarbeid?",
      options: ["Fordelingsstriden: at mye av uenigheten gjelder hvem som skal betale, ikke usikkerhet", "Mekanismen: at perspektivet ikke forklarer hvorfor samarbeid er vanskelig under anarki", "Endringen: at perspektivet ikke forklarer hvorfor miljø kom på dagsordenen", "Prediksjonen: at perspektivet sier lite om når en etablert norm vil gi etter"],
      explanation: "Riktig svar er fordelingsstriden. Perspektivet behandler ofte problemet som et koordineringsproblem der alle vil det samme, og det forklarer hvorfor avtaler kan være godt konstruert på papiret og likevel stå stille.",
    },
    {
      question: "Hva er realismens blindsone på miljøsamarbeid?",
      options: ["Endringen: at miljø i det hele tatt er blitt fast post på den internasjonale dagsordenen", "Fordelingen: at kostnadene ved tiltak fordeler seg ujevnt mellom statene", "Strukturen: at perspektivet mangler et begrep om kollektive handlingsproblemer", "Mekanismen: at perspektivet ikke forklarer hvorfor felles ressurser blir overforbrukt over tid"],
      explanation: "Riktig svar er endringen. At stater bruker tid og ressurser på forhandlinger med usikker gevinst, er vanskelig å utlede av egeninteresse alene — og blindsonen er skarpest der en stat har påtatt seg klart kostbare forpliktelser.",
    },
    {
      question: "Hva legger konstruktivismen vekt på i miljøsamarbeid?",
      options: ["Normendring og normentreprenører som gjør en bestemt forståelse til den selvsagte", "At avtaler bare inngås der de tjener partenes egeninteresse fra før", "At institusjoner reduserer usikkerhet og senker kostnadene ved å samarbeide", "At ressursknapphet skjerper konflikten mellom stater som deler et område"],
      explanation: "Riktig svar er normendring og normentreprenører. De to andre perspektivene spør om avtalen lønner seg og for hvem; konstruktivismen spør hvordan noe ble regnet som et internasjonalt problem i det hele tatt.",
    },
    {
      question: "Hvilket analysenivå bør bære hoveddisposisjonen i et svar om hvorfor klimasamarbeid er vanskelig?",
      options: ["Systemnivået, siden strukturen i problemet er et trekk ved forholdet mellom statene", "Statsnivået, siden næringsstruktur og innenlandske interesser avgjør politikken", "Individnivået, siden forhandlernes oppfatninger avgjør hva som blir vedtatt", "Ingen av nivåene, siden klimaspørsmål hører hjemme i naturfagene"],
      explanation: "Riktig svar er systemnivået. Statsnivået skal likevel med, siden det bærer variasjonen: hvorfor to stater i samme situasjon fører ulik politikk. Å bruke begge, og si hvorfor, er det Akse 4 måler.",
    },
    {
      question: "Hva står om migrasjon og internasjonalt helsesamarbeid i emnets læringsmål?",
      options: ["At de er del av pensum, selv om de har null forekomster i alle 16 settene i arkivet", "At de er blant de mest sentrale temaene og bør vektes tungt i forberedelsen", "At de er tatt ut av læringsmålene i den nyeste versjonen av emnebeskrivelsen ved instituttet", "At de bare gjelder for studenter som skriver semesteroppgave i emnet"],
      explanation: "Riktig svar er at temaene står i læringsmålene fra 2021 uten å ha vært eksamensoppgave i arkivperioden. De skal dekkes kort og ikke vektes — men strukturen er den samme som i resten av kapitlet, så begrepsapparatet er overførbart.",
    },
  ],
  'stv1200-7-1': [
    {
      question: "Hvor mye av karakteren teller langsvaret i Del 1?",
      options: ["60 prosent, mens de tre kortsvarene til sammen teller 40 prosent", "40 prosent, mens de tre kortsvarene til sammen teller 60 prosent", "50 prosent, slik at de to delene av eksamen veier nøyaktig likt", "75 prosent, fordi kortsvarene bare fungerer som en justering av karakteren"],
      explanation: "Riktig svar er at langsvaret teller 60 prosent og kortsvarsdelen 40. Vektingen har vært den samme i alle 16 settene siden H2010, og den er fagets eneste virkelig faste konstant. Alternativet som snur tallene, tester den vanligste forvekslingen.",
    },
    {
      question: "Hvor mange langsvarsalternativer får du i dagens format, og hvor mange besvarer du?",
      options: ["Tre alternativer merket A til C, og du besvarer ett av dem", "To alternativer merket A og B, og du besvarer ett av dem", "Fem alternativer merket A til E, og du besvarer to av dem", "Fire alternativer merket A til D, og du velger fritt mellom dem"],
      explanation: "Riktig svar er tre alternativer, og du besvarer ett. Formen har ligget fast i settene fra H2020 til H2025, og bokstavkodingen A til C er ny fra H2020. Formen med to alternativer er historikk fra tidligere terminer.",
    },
    {
      question: "Hvor mye av langsvarets skrivetid bør gå til drøftingsdelen?",
      options: ["Rundt 55 minutter, altså over halvparten av de 90 til 110 minuttene", "Rundt 15 minutter, siden drøftingen bygger på den empiriske delen", "Rundt 30 minutter, slik at de to delene får omtrent like mye tid", "Rundt 80 minutter, slik at det knapt blir tid til den empiriske delen"],
      explanation: "Riktig svar er rundt 55 minutter. Fordelingen er rundt 10 minutter disponering, rundt 15 minutter empirisk del, rundt 55 minutter drøfting og rundt 10 minutter kontroll. Drøftingen får mest fordi det er der karakteren avgjøres.",
    },
    {
      question: "Hva er den empiriske delens tak?",
      options: ["At mer korrekt bakgrunnsstoff ikke gir ekstra uttelling når tallene først er riktige", "At den empiriske delen ikke bør overstige et bestemt antall linjer i besvarelsen", "At bare de tallene som står i pensumboka, kan brukes i den redegjørende delen", "At feil i den empiriske delen kan repareres dersom drøftingen er tilstrekkelig sterk og selvstendig"],
      explanation: "Riktig svar er at mengden fakta har et tak, mens presisjonen ikke har det. Alternativet om at drøfting reparerer feil empiri, er nettopp den påstanden veiledningene avviser: regelen går begge veier, og presis empiri uten drøfting stopper på C.",
    },
    {
      question: "Hva skiller en analytisk disposisjon fra en innholdsfortegnelse?",
      options: ["Den sier hvorfor akkurat de faktorene er valgt, og hva som er valgt bort", "Den står i innledningen i stedet for å stå i begynnelsen av drøftingsdelen", "Den lister forklaringsfaktorene i den rekkefølgen de behandles senere i teksten", "Den viser til pensumkapitlene der hver forklaringsfaktor er behandlet nærmere"],
      explanation: "Riktig svar er begrunnelsen for utvalget. En innholdsfortegnelse sier hva som kommer; den analytiske disposisjonen sier hvorfor, og det er et faglig valg. Dette er den tydeligste markøren for Akse 3, selvstendig struktur.",
    },
    {
      question: "Hva vil det si å behandle et motargument, i motsetning til å nevne det?",
      options: ["Å si hvor langt innvendingen treffer, og hvorfor du likevel lander som du gjør", "Å plassere innvendingen i et eget avsnitt med en tydelig overskrift foran", "Å gjengi innvendingen i sin svakeste form, slik at den blir lett å tilbakevise", "Å nevne innvendingen tidlig, slik at leseren vet at du kjenner motforestillingene"],
      explanation: "Riktig svar er at behandlingen ligger i setningen etterpå: hvor langt treffer innvendingen, og hva følger av det. Alternativet om svakeste form beskriver en stråmann, som sensor gjenkjenner umiddelbart fordi den mangler konkret belegg.",
    },
    {
      question: "Hvordan skiller du et eksempel som bygger argumentet, fra et som pynter?",
      options: ["Ved å dekke over eksempelet: mister argumentet belegget sitt, bygde eksempelet", "Ved å telle setningene: et eksempel på under tre setninger er for tynt", "Ved å sjekke om eksempelet står i pensum, siden selvvalgte eksempler er pynt", "Ved å se om eksempelet kommer før eller etter påstanden det skal underbygge"],
      explanation: "Riktig svar er håndtesten. Står argumentet like sterkt uten eksempelet, var det pynt. Merk at selvvalgte samtidseksempler er tillatt og premieres — det er den analytiske bruken som avgjør, ikke hvor eksempelet er hentet fra.",
    },
    {
      question: "Hvilken analyseramme er navngitt i oppgaveteksten i flest av de 16 settene?",
      options: ["Analysenivåene individ, stat og system, som er navngitt i 8 av 16 sett", "Perspektivene realisme, liberalisme og konstruktivisme, i alle de 16 settene", "Allisons tre beslutningsmodeller, som er navngitt i 12 av de 16 settene", "Tradisjonene i internasjonal politisk økonomi, i 10 av de 16 settene"],
      explanation: "Riktig svar er analysenivåene, navngitt i 8 av 16 sett. Perspektivene kreves i 10 av 16 sett og i 6 av de 7 siste, men H2025 har ingen oppgave som navngir dem — derfor er ingen av rammene garantert.",
    },
    {
      question: "Hvilke to kriterier styrer valget mellom de tre langsvarsalternativene?",
      options: ["Om du kan den empiriske delen presist, og om du har noe å drøfte", "Om temaet er behandlet i pensumboka, og om det har kommet før", "Om oppgaven er kortest formulert, og om den har færrest delspørsmål", "Om du finner temaet interessant, og om du har lest kapitlet nylig"],
      explanation: "Riktig svar er presisjon i den empiriske delen og noe å drøfte, i den rekkefølgen. Alternativet om interesse ligger nær og er en dårlig avgjørelse: en kandidat som kan mye om et tema uten å ha tenkt over det, skriver en redegjørelse.",
    },
    {
      question: "Hva er bestillingstellingen?",
      options: ["Å telle instruksjonsverbene og spørsmålstegnene før du begynner å skrive", "Å telle hvor mange minutter hvert delspørsmål bør få av skrivetiden", "Å telle hvor mange kilder og eksempler besvarelsen bør inneholde", "Å telle hvor mange avsnitt drøftingsdelen skal bestå av til slutt"],
      explanation: "Riktig svar er å telle bestillingene i oppgaveteksten. Poenget er å få et tall å krysse av mot. Å hoppe over en av bestillingene er feil #5, ensidig behandling av en flerdelt oppgave.",
    },
    {
      question: "Hvorfor er de korte faktaspørsmålene nyere langsvar åpner med, viktige?",
      options: ["De er lette poeng og inngår eksplisitt i vurderingen av besvarelsen", "De avgjør hvilket av de tre alternativene sensor forventer at du velger", "De erstatter den empiriske delen, slik at drøftingen kan begynne raskere", "De teller separat og trekkes fra kortsvarsdelens 40 prosent av karakteren"],
      explanation: "Riktig svar er at de er lette poeng som inngår i vurderingen. H2024 og H2025 har skoleeksempler på formen. Alternativet om at de erstatter den empiriske delen, er galt: de er en del av den.",
    },
    {
      question: "I hvor mange av de 16 settene har krigsårsaker vært tema?",
      options: ["I 10 av 16 sett, med langsvar i fire av de fem siste settene", "I 4 av 16 sett, alle sammen blant de eldste settene i arkivet", "I 16 av 16 sett, slik at temaet er den eneste sikre posten", "I 2 av 16 sett, siden temaet hører til et utgått pensum"],
      explanation: "Riktig svar er 10 av 16 sett, og temaet har vært langsvarsalternativ i H2021, H2023, H2024 og H2025. Krigsdefinisjonen og krigstypologien kom inn som eksplisitte tilleggskrav i H2023 og H2024.",
    },
    {
      question: "Hva kjennetegner pengeunionen som oppgavefamilie?",
      options: ["Den er med i 5 av 16 sett og kommer alltid som langsvar, aldri som kortsvar", "Den er med i 12 av 16 sett og kommer nesten alltid som kortsvar i Del 2", "Den er med i 3 av 16 sett og har alltid ligget som alternativ C i Del 1", "Den er med i 8 av 16 sett og veksler jevnt mellom langsvar og kortsvar"],
      explanation: "Riktig svar er 5 av 16 sett, alltid som langsvar — i H2011, H2015, H2019, H2022 og H2025. Fra H2025 er konvergenskriteriene eksplisitt krevd. Alternativet om alternativ C beskriver kronikkoppgaven, som er en annen familie.",
    },
    {
      question: "Hva er kravet i en T-oppgave, altså en teoridrøfting?",
      options: ["At minst to perspektiver kontrasteres systematisk på det samme spørsmålet", "At alle tre perspektivene beskrives, siden bredde premieres i denne sjangeren", "At du velger det perspektivet som forklarer temaet best, og forsvarer det", "At perspektivene presenteres i rekkefølge etter når de oppsto faghistorisk"],
      explanation: "Riktig svar er systematisk kontrastering av minst to. To perspektiver kontrastert slår tre ramset opp, og det er sensors egen vurdering. Alternativet om å beskrive alle tre er nettopp feil #4, som er den vanligste grunnen til at et kunnskapsrikt T-svar havner på C.",
    },
    {
      question: "Hva er det avgjørende ved en landing i et langsvar?",
      options: ["At den svarer på spørsmålet som ble stilt, med det drøftingen har gjort sannsynlig", "At den lander avveiende, siden en skarp konklusjon lett virker lite reflektert på sensor", "At den oppsummerer hovedpunktene i besvarelsen i komprimert form til slutt", "At den peker på hva videre forskning på området ville måtte undersøke"],
      explanation: "Riktig svar er at landingen trekker konsekvensen av drøftingen. Standpunktet er fritt: både en skarp og en avveiende landing kan gi toppkarakter. Det som ikke gir uttelling, er en avveining uten grunner, som er feil #1 i ny drakt.",
    },
    {
      question: "Hva slags feil er det å drøfte krigsårsaker uten å bruke analysenivåene når oppgaven ber om dem?",
      options: ["Feil #2, å utelate analyseramma oppgaven ber om, omtalt som ikke fullgodt", "Feil #3, altså upresis empiri i den redegjørende delen av selve besvarelsen", "Feil #10, å svare på flere spørsmål i settet enn oppgaveteksten faktisk ber om", "Feil #8, å blande sammen de to begrepene integrasjon og europeisering"],
      explanation: "Riktig svar er feil #2. Varsellampen er at oppgaveteksten navngir et verktøy og disposisjonen din ikke gjør det. Feil #3 gjelder gale tall og forvekslede artikler, som er en annen og like kostbar feil.",
    },
    {
      question: "Hva er den vanligste formen for feil #1 i et langsvar?",
      options: ["At to tredjedeler er redegjørelse og drøftingen består av noen få linjer", "At kandidaten drøfter grundig uten å ha den empiriske delen på plass", "At kandidaten svarer på to av de tre langsvarsalternativene i Del 1", "At kandidaten bruker selvvalgte eksempler i stedet for pensumeksempler"],
      explanation: "Riktig svar er den lange redegjørelsen med kort drøfting. Den redegjørende delen har et tak, og alt over taket stjeler tid fra den delen som avgjør karakteren. Selvvalgte eksempler er derimot tillatt og premieres.",
    },
    {
      question: "Hvor lang tid bør du bruke på å lese settet og velge langsvarsalternativ?",
      options: ["Rundt 10 til 15 minutter, inkludert en stikkordsdisposisjon for valget", "Rundt 2 minutter, slik at mest mulig av den samlede tiden går til selve skrivingen", "Rundt 40 minutter, siden valget avgjør hele resultatet på Del 1", "Rundt 25 minutter, fordelt likt mellom lesing av Del 1 og Del 2"],
      explanation: "Riktig svar er rundt 10 til 15 minutter på hele settet, valget og en stikkordsdisposisjon. Merk at de 90 til 110 minuttene for langsvaret er ren skrivetid; lesing, valg og gjennomlesing kommer i tillegg innenfor de 240 minuttene.",
    },
  ],
  'stv1200-7-2': [
    {
      question: "Hvor mange kortsvarsspørsmål får du i dagens format, og hvor mange besvarer du?",
      options: ["Fem spørsmål merket D til H, og du besvarer tre av dem", "Fire spørsmål merket D til G, og du besvarer to av dem", "Seks spørsmål merket C til H, og du besvarer fire av dem", "Tre spørsmål merket D til F, og du besvarer alle sammen"],
      explanation: "Riktig svar er fem spørsmål, og du besvarer tre. Formen har ligget fast fra H2018 til H2025, og bokstavkodingen D til H er ny fra H2020. Formene med fire av seks og tre av fire er historikk fra eldre terminer.",
    },
    {
      question: "Hvilket kortsvarstema har kommet i hvert eneste av de fem siste settene?",
      options: ["EU-organenes roller, som er i 5 av 5 sett i H2021 til H2025", "Sikkerhetsrådets sammensetning, som er i 5 av 5 av de siste settene", "Handelsregimets fire prinsipper, som er i 5 av 5 av de siste settene", "Krigsdefinisjonen, som er i 5 av 5 sett i den samme perioden"],
      explanation: "Riktig svar er EU-organene, det sikreste enkeltkortsvaret i faget. Sikkerhetsrådet er derimot fagets største tema totalt, med i 12 av 16 sett, og handelsregimet er med i 8 av 16 sett.",
    },
    {
      question: "Hva er trinn 2 i firetrinnsmalen for kortsvaret?",
      options: ["Den sentrale distinksjonen mot nabobegrepet svaret forveksles med", "Et konkret eksempel som viser at begrepet kan brukes til noe", "En kort drøfting av styrker og svakheter ved ordningen", "En henvisning til hvilken pensumforfatter begrepet stammer fra"],
      explanation: "Riktig svar er distinksjonen. Trinn 3 er eksempelet og trinn 4 den løftende setningen. Et svar uten distinksjonen er ikke galt, men flatt — og et flatt svar er C-stoff. Mangelen føres som feil #11.",
    },
    {
      question: "Hva sier H2019-veiledningen om hva som skiller nivåene i et kortsvar?",
      options: ["At en liste med relevante poeng kan gi C, mens en kommentert liste normalt gir B", "At et kortsvar må inneholde minst ett ordrett pensumsitat for å komme over C", "At lengden på svaret er den beste indikatoren på kandidatens kunnskap", "At et kortsvar må munne ut i en entydig konklusjon for å nå toppkarakter"],
      explanation: "Riktig svar er skillet mellom en liste og en kommentert liste. Terskelen er lav: det kreves ikke ny innsikt, bare at ett punkt blir bearbeidet. Alternativet om entydig konklusjon er galt — veiledningene sier eksplisitt at et KD-svar ikke behøver å lande entydig.",
    },
    {
      question: "Hvordan ser du om et spørsmål er K eller KD?",
      options: ["På instruksjonsverbet: «kan» og «diskuter kort» signaliserer mini-drøfting", "På lengden: KD-spørsmål er alltid formulert med to eller flere setninger", "På plasseringen: de to siste spørsmålene i Del 2 er alltid mini-drøftinger av et begrep", "På temaet: institusjonsspørsmål er K, mens teorispørsmål alltid er KD"],
      explanation: "Riktig svar er instruksjonsverbet. «Gjør rede for» og «hva menes med» er K; «kan», «diskuter kort» og «i hvilken grad» er KD. Å svare i feil sjanger koster uansett hvor godt innholdet er.",
    },
    {
      question: "Hva representerer Europakommisjonen?",
      options: ["Unionen som helhet, og kommissærene skal opptre uavhengig av hjemstaten", "Medlemsstatenes regjeringer, med én statsråd fra hvert medlemsland", "Borgerne i medlemsstatene, gjennom direkte valg hvert femte år", "Stats- og regjeringssjefene, som fastsetter unionens overordnede retning"],
      explanation: "Riktig svar er unionen som helhet. Ministerrådet representerer regjeringene og Europaparlamentet borgerne; stats- og regjeringssjefene utgjør Det europeiske råd, som gir politisk retning, men ikke lovgir.",
    },
    {
      question: "Hva er kvalifisert flertall i Ministerrådet?",
      options: ["Et dobbelt flertall: minst 55 prosent av statene og 65 prosent av befolkningen", "Et flertall på minst to tredeler av statene, uansett folketall i statene", "Et simpelt flertall blant medlemsstatene, med Kommisjonens uttrykkelige tilslutning", "Et flertall der de fire største medlemsstatene må være blant flertallet"],
      explanation: "Riktig svar er det doble flertallet: 55 prosent av statene og 65 prosent av befolkningen, samtidig. Et blokkerende mindretall må bestå av minst fire stater. Regelen står i motsetning til enstemmighet, som fortsatt gjelder blant annet på skatt og utenrikspolitikk.",
    },
    {
      question: "Hvor mange stemmer kreves for et materielt vedtak i Sikkerhetsrådet?",
      options: ["Ni av femten, og i tillegg at ingen av de fem faste stemmer imot", "Åtte av femten, og i tillegg at minst tre faste medlemmer stemmer for", "To tredeler av de femten, uten tilleggskrav om de faste medlemmene", "Elleve av femten, som er flertallet blant de ti valgte medlemmene"],
      explanation: "Riktig svar er ni av femten, kombinert med at ingen fast medlem stemmer imot. Å avstå fra å stemme er ikke det samme som å stemme imot og blokkerer dermed ikke vedtaket.",
    },
    {
      question: "Hva er distinksjonen mellom kollektivt forsvar og kollektiv sikkerhet?",
      options: ["Forsvar retter forpliktelsen utad, sikkerhet retter reaksjonen innover i kretsen", "Forsvar gjelder de militære midlene, mens sikkerhet gjelder de økonomiske virkemidlene", "Forsvar gjelder mellom naboland, sikkerhet gjelder globale organisasjoner", "Forsvar bygger på traktat, sikkerhet bygger på uformelle forventninger"],
      explanation: "Riktig svar er retningen: NATO er kollektivt forsvar mot en ytre trussel, FN bygger på kollektiv sikkerhet mot et medlem som bryter freden. Forvekslingen er en dokumentert feil #3, altså upresis empiri.",
    },
    {
      question: "Hvilket av handelsregimets prinsipper virker innenfor grensen?",
      options: ["Nasjonal behandling, som beskytter importerte varer mot diskriminering", "Bestevilkårsprinsippet, som gir alle medlemmer de beste vilkårene", "Gjennomsiktighet, som krever at reglene er offentlig kjent og kontrollerbare", "Gjensidig nedbygging, der medlemmene bytter innrømmelser i forhandlinger"],
      explanation: "Riktig svar er nasjonal behandling. Huskeregelen er hvor grensen går: bestevilkår sammenligner utenlandske partnere med hverandre, nasjonal behandling sammenligner utenlandsk med innenlandsk vare.",
    },
    {
      question: "Hvordan defineres komparativt fortrinn presist?",
      options: ["Som den varen landet produserer med lavest alternativkostnad", "Som den varen landet produserer med minst bruk av ressurser", "Som den varen landet eksporterer mest av i et gitt handelsår", "Som den varen landet produserer billigere enn alle andre land"],
      explanation: "Riktig svar er alternativkostnad — der landet gir opp minst av noe annet. Alternativet om minst ressursbruk beskriver absolutt fortrinn, og den forvekslingen er den klassiske feil #11 i dette temaet.",
    },
    {
      question: "Hva skiller Allisons modell II fra modell III?",
      options: ["Modell II handler om rutiner, modell III om dragkamp mellom aktører", "Modell II handler om militære etater, modell III om sivile departementer", "Modell II gjelder små stater, modell III gjelder stormaktenes beslutninger", "Modell II forklarer utfall, modell III forklarer hvordan de begrunnes utad"],
      explanation: "Riktig svar er rutine mot dragkamp. Modell II er organisasjonsprosess der apparatet gjør det det er innøvd til; modell III er byråkratisk politikk, der hvor du står avhenger av hvor du sitter. Sammenblandingen er en dokumentert feil #11.",
    },
    {
      question: "Hva er de to tallfestede konvergenskriteriene?",
      options: ["Budsjettunderskudd under 3 prosent og offentlig gjeld under 60 prosent av BNP", "Budsjettunderskudd under 6 prosent og offentlig gjeld under 30 prosent av BNP hvert år", "Inflasjon under 3 prosent og langsiktig rente under 6 prosent årlig", "Offentlig gjeld under 3 prosent og budsjettunderskudd under 60 prosent"],
      explanation: "Riktig svar er 3 prosent underskudd og 60 prosent gjeld. Underskuddet er strømmen i ett år, gjelden er beholdningen fra før — og å bytte om på de to er den vanligste formen for feil #3 i dette temaet.",
    },
    {
      question: "Hva er retningen i begrepet europeisering?",
      options: ["EUs påvirkning nedover på nasjonal politikk, forvaltning og prosesser", "Medlemsstatenes avståelse av suverenitet oppover til selve unionsnivået", "Spredningen av europeiske normer til stater utenfor verdensdelen", "Utvidelsen av unionen med nye medlemsstater i flere runder"],
      explanation: "Riktig svar er påvirkning nedover. Integrasjon er suverenitetsavståelse oppover. Sammenblandingen har sin egen kode i registeret, feil #8, og huskeregelen er nettopp retningen.",
    },
    {
      question: "Hva er feil #10?",
      options: ["Å svare på flere kortsvar enn oppgaven faktisk ber om", "Å svare med bare en definisjon der oppgaven ber om vurdering", "Å utelate den distinksjonen begrepet i spørsmålet eier", "Å bruke et eksempel som ikke er hentet fra pensumlitteraturen"],
      explanation: "Riktig svar er å svare på for mange. Sensor leser uansett bare antallet som kreves, og tiden er tatt fra langsvaret som teller 60 prosent. De to andre feilene finnes, men har kodene #1 og #11.",
    },
    {
      question: "Hvilke tre kortsvar bør du velge blant de fem?",
      options: ["De tre du kan forankre mest presist, med tall og distinksjon på plass", "De tre som er kortest formulert, siden de krever minst skrivetid", "De tre som handler om temaer du synes er faglig mest interessante", "De tre første i rekkefølgen, siden de erfaringsmessig er de enkleste"],
      explanation: "Riktig svar er presisjon som eneste kriterium. Har du tallene og distinksjonen på tre av dem, er valget tatt. Presisjon slår bredde, og tre solide svar slår fem tynne.",
    },
    {
      question: "Hva er den vanligste formen for feil #3 i Del 2?",
      options: ["Gale tall og forvekslede traktatartikler i den presise gjengivelsen", "For lange svar som gjentar det samme poenget flere ganger", "Å bruke selvvalgte eksempler i stedet for eksempler fra pensum", "Å svare med en drøfting der oppgaven ba om en ren gjengivelse"],
      explanation: "Riktig svar er gale tall og forvekslede artikler. Vaksinen er å skrive tallene på kladden før du formulerer noe. De andre alternativene beskriver reelle svakheter, men de hører til feil #1 og til sjangervalget.",
    },
    {
      question: "Hvilke tre former kan den løftende setningen ha?",
      options: ["Utlede en konsekvens, sette punktet opp mot et annet, eller forklare begrunnelsen", "Vise til pensum, vise til et tidligere eksamenssett, eller vise til en navngitt forfatter", "Innlede med en definisjon, fortsette med et eksempel, og lande med en dom", "Nevne et perspektiv, nevne et analysenivå, og nevne en aktuell hendelse"],
      explanation: "Riktig svar er de tre bearbeidingsformene. Poenget er at én av punktene i svaret gjøres noe med. Å bare nevne et perspektiv uten innhold er derimot feil #1 i ny drakt.",
    },
  ],
  'stv1200-7-3': [
    {
      question: "I hvor mange av de 16 settene finnes kronikk- og tekstanalyseoppgaven?",
      options: ["I 3 av 16 sett, og alltid som langsvarsalternativ C i Del 1", "I 8 av 16 sett, fordelt jevnt mellom langsvar og kortsvar", "I 12 av 16 sett, som gjør den til fagets største oppgavetype", "I 1 av 16 sett, og den er derfor knapt verdt å forberede"],
      explanation: "Riktig svar er 3 av 16 sett — H2018 ordinær, H2020 og H2022 — alltid som alternativ C. Sjangeren er ikke brukt siden H2022 og skal regnes som sannsynlig, men ikke sikker.",
    },
    {
      question: "Hva er de tre bestillingene i en kronikkoppgave?",
      options: ["Identifiser perspektivet, vis aktørene og interessene, og kritiser konklusjonen", "Referer teksten kort, vurder om påstandene stemmer, og skriv din egen konklusjon", "Plasser teksten på analysenivåene, finn feilene, og foreslå en bedre løsning", "Sammenlign teksten med pensum, finn avvikene, og forklar hva de skyldes"],
      explanation: "Riktig svar er identifisering, aktøranalyse og motkritikk, i den rekkefølgen. Å referere teksten er feil #1 i denne sjangeren: sensor har lest vedlegget, og oppgaven ber om analyse av hva teksten forutsetter.",
    },
    {
      question: "Hva må en identifisering av perspektivet inneholde for å telle?",
      options: ["Belegg hentet fra tekstens egne resonnementer, ikke bare navnet på perspektivet", "En henvisning til hvilken pensumforfatter perspektivet er hentet fra i litteraturen", "En vurdering av om forfatterens standpunkt er faglig holdbart eller ikke", "En sammenligning med hvordan de to andre perspektivene ville sett saken"],
      explanation: "Riktig svar er belegg fra teksten. En identifisering uten belegg er en påstand. Tre kilder til belegg er alltid tilgjengelige: hvilke aktører teksten regner med, hvordan gevinsten måles, og hva som forutsettes uten å bli sagt.",
    },
    {
      question: "Hva vurderes en kronikkanalyse på?",
      options: ["Indre konsistens mellom identifisering, aktøranalyse og motkritikk", "Om kandidaten treffer det perspektivet oppgavestilleren hadde i tankene", "Om kandidatens eget standpunkt i den politiske saken er godt begrunnet", "Om kandidaten klarer å påvise faktafeil i den vedlagte teksten"],
      explanation: "Riktig svar er indre konsistens. En tekst kan ofte leses forsvarlig på mer enn én måte, og en godt begrunnet avvikende lesning kan gi toppkarakter. Friheten gjelder tolkningen, ikke belegget.",
    },
    {
      question: "Hvilke fire ledd har en reell motkritikk?",
      options: ["Navngi perspektivet, pek på premisset, vis hva det ser, og si hva det gjør med konklusjonen", "Referer konklusjonen, si deg uenig i den, gi et moteksempel, og foreslå deretter et alternativ", "Presenter perspektivet, forklar dets historie, gi et eksempel, og oppsummer", "Finn en faktafeil, korriger den, vis konsekvensen, og gjenta konklusjonen"],
      explanation: "Riktig svar er de fire analytiske leddene. Det fjerde mangler oftest, og uten det er kritikken bare en presentasjon av et annet perspektiv ved siden av det første — som er feil #9.",
    },
    {
      question: "Hva er feil #9?",
      options: ["Å identifisere perspektivet godt, men la motkritikken bli en presentasjon", "Å bruke bare én av teoritradisjonene der oppgaven uttrykkelig ber om minst to", "Å blande sammen begrepene integrasjon og europeisering i EU-stoffet", "Å svare på flere av oppgavesettets spørsmål enn oppgaven ber om"],
      explanation: "Riktig svar er kronikkoppgavens egen feil. Varsellampen er enkel: hvis siste del av besvarelsen kunne vært skrevet uten å ha lest vedlegget, er den ikke en motkritikk. Feil #4 og #8 er de to neste alternativene.",
    },
    {
      question: "Hvilket trekk peker sterkest mot at en tekst resonnerer realistisk?",
      options: ["At utfallet måles mot hva motparten får, ikke mot situasjonen uten avtalen", "At teksten er kritisk og pessimistisk i tonen gjennom hele sitt resonnement", "At teksten avviser samarbeid med andre stater som prinsipielt uklokt", "At teksten legger vekt på militære spørsmål framfor økonomiske spørsmål"],
      explanation: "Riktig svar er gevinstmålingen, altså relative gevinster. Kriteriet er hva teksten regner med, ikke hvilken stemning den har: en tekst kan være dypt bekymret og likevel liberalistisk, hvis bekymringen gjelder at institusjonene er for svake.",
    },
    {
      question: "Hvilket trekk peker sterkest mot at en tekst resonnerer liberalistisk?",
      options: ["At regelverk og avtaler tillegges selvstendig virkning på partenes atferd", "At teksten er positiv til at land samarbeider om et felles problem", "At teksten viser til at ordningen har vart lenge og er godt innarbeidet", "At teksten omtaler økonomiske gevinster framfor sikkerhetspolitiske hensyn"],
      explanation: "Riktig svar er at institusjoner tillegges egenvekt. En realistisk tekst kan gjerne anbefale samarbeid, men begrunner det med at det tjener statens egen posisjon — ikke med at regelverket i seg selv endrer hva partene kan regne med.",
    },
    {
      question: "Hvilket trekk peker sterkest mot at en tekst resonnerer konstruktivistisk?",
      options: ["At forventninger og selvforståelse gjør forklaringsarbeidet i teksten", "At teksten omtaler verdier og moral i vurderingen av situasjonen", "At teksten legger vekt på historiske forhold framfor dagens situasjon", "At teksten kritiserer både realistiske og liberalistiske argumenter"],
      explanation: "Riktig svar er at forventningene forklarer noe. En tekst er ikke konstruktivistisk bare fordi den nevner verdier — kriteriet er at den mener aktøren handlet slik fordi et alternativ ikke lenger var reelt tenkbart.",
    },
    {
      question: "Hva gjør du med en tekst som blander to perspektiver?",
      options: ["Utpeker det perspektivet som bærer konklusjonen, og plasserer det andre", "Velger det perspektivet du selv kan best, og analyserer teksten ut fra det", "Skriver at teksten er en blanding, og lar det bli stående som svar", "Analyserer teksten to ganger, én gang ut fra hvert av de to perspektivene"],
      explanation: "Riktig svar er å utpeke hovedperspektivet og plassere innslaget av det andre. Å konstatere at teksten inneholder litt av hvert og la det bli stående, er å levere en observasjon i stedet for en analyse.",
    },
    {
      question: "Hva er den empiriske delen i en kronikkoppgave?",
      options: ["Den presise framstillingen av perspektivene, der feiltilskrivning koster", "Faktaopplysningene i den vedlagte teksten, som kandidaten skal kontrollere", "Tallene og traktatartiklene som hører til temaet teksten handler om", "Redegjørelsen for hvilke sett kronikksjangeren tidligere har kommet i"],
      explanation: "Riktig svar er framstillingen av perspektivene. Å skrive at realismen alltid vil ha mest mulig makt, uten å skille offensiv fra defensiv realisme, er en feil på presisjonsaksen — like kostbar som gale tall i et institusjonsspørsmål.",
    },
    {
      question: "Hva er den sterkeste motkritikken mot en realistisk tekst?",
      options: ["At institusjoner har egenvekt fordi de gjør brudd synlige og reaksjoner forutsigbare", "At realismen er et utdatert perspektiv som forskningen for lengst har forlatt helt", "At teksten undervurderer betydningen av moralske hensyn i utenrikspolitikken", "At realismen ikke kan forklare hvorfor stater i det hele tatt inngår avtaler"],
      explanation: "Riktig svar er argumentet om egenvekt, gjennom usikkerhetsreduksjon og transaksjonskostnader. Boka rangerer aldri perspektivene, så alternativet om at realismen er utdatert, er ikke en analytisk kritikk — det er en rangering.",
    },
    {
      question: "Hva er den sterkeste motkritikken mot en konstruktivistisk tekst?",
      options: ["At normkonform atferd like gjerne kan forklares med interesse — årsaksretningen mangler", "At normer ikke finnes i internasjonal politikk, ettersom det ikke finnes noen felles lovgiver", "At konstruktivismen bare beskriver og aldri kan brukes til å forutsi noe", "At forfatteren blander sammen konstituerende og regulerende normer i teksten"],
      explanation: "Riktig svar er det metodiske angrepet på årsaksretningen. Prøven på en norm er hva som skjer når den blir dyr: så lenge kostnaden er lav, kan norm og interesse ikke skilles fra hverandre utenfra.",
    },
    {
      question: "Hva skiller merkantilistiske fra marxistiske markører i en tekst?",
      options: ["Merkantilismen er statssentrert, mens marxismen er klassesentrert", "Merkantilismen kritiserer frihandel, mens marxismen forsvarer den", "Merkantilismen er økonomisk, mens marxismen er rent politisk i formen", "Merkantilismen gjelder industri, mens marxismen gjelder jordbruk og råvarer"],
      explanation: "Riktig svar er statssentrert mot klassesentrert. Begge kritiserer frihandel, men fra ulikt hold: merkantilismen vil styrke egen stat, marxismen spør hvem som tjener på ordningen på tvers av statsgrensene. Å blande dem er feil #11.",
    },
    {
      question: "Hvordan finner du fram til den sterkeste motkritikken?",
      options: ["Skriv ned konklusjonen, list premissene, og finn det ett annet perspektiv ikke godtar", "Les teksten en gang til og noter ned alle de påstandene du selv er faglig uenig i", "Velg det perspektivet som er mest ulikt tekstens, og presenter det grundig", "Finn de faktaopplysningene i teksten som er upresise, og korriger dem"],
      explanation: "Riktig svar er premissanalysen på kladden. Forskjellen vises i teksten: å skrive at et annet perspektiv ville sett annerledes på saken, er en plassering; å vise at et bestemt premiss faller, er en kritikk.",
    },
    {
      question: "Hva bør du holde utenfor en kronikkbesvarelse?",
      options: ["Din egen politiske mening om saken teksten handler om", "Alle eksempler som ikke er hentet fra den vedlagte teksten selv", "Perspektiver som ikke er nevnt eksplisitt i oppgaveteksten", "Alle henvisninger til pensum, siden teksten skal stå alene"],
      explanation: "Riktig svar er egen politisk mening. Oppgaven ber om en analyse av et resonnement, og sensor vurderer analysen, ikke standpunktet. Egne eksempler og pensumforankring er derimot både tillatt og ønsket.",
    },
  ],
  'stv1200-7-4': [
    {
      question: "Hvor mange feilkoder har registeret i denne boka?",
      options: ["Elleve koder, nummerert fra #1 til og med #11", "Tolv, der den siste gjelder flerdelte langsvar", "Ti, én for hver av de vanligste trekkgrunnene", "Ni, én for hver av sensorveiledningene i arkivet"],
      explanation: "Riktig svar er elleve koder. Å hoppe over de korte faktaspørsmålene et flerdelt langsvar åpner med, er ikke en tolvte kode — det er en variant av feil #5, ensidig behandling av en flerdelt oppgave.",
    },
    {
      question: "Hva er feil #1?",
      options: ["Ren gjengivelse der oppgaveteksten ber om drøfting", "Upresis empiri i den redegjørende delen av svaret", "Å utelate den analyseramma oppgaveteksten navngir", "Å behandle bare én av flere etterspurte tradisjoner"],
      explanation: "Riktig svar er ren gjengivelse. Den er den hyppigste enkeltårsaken til at et svar med mye kunnskap havner på C. De tre andre alternativene er feil #3, #2 og #4.",
    },
    {
      question: "Hvilken varsellampe fanger feil #1?",
      options: ["Har jeg en påstand her som noen kunne vært uenig i?", "Har jeg skrevet et tall jeg ikke er sikker på?", "Navngir oppgaveteksten et verktøy jeg ikke har brukt?", "Har jeg svart på nøyaktig det antallet som ble bedt om?"],
      explanation: "Riktig svar er spørsmålet om påstanden. Består avsnittet av setninger ingen ville bestridt, er det gjengivelse. De tre andre varsellampene hører til feil #3, #2 og #10.",
    },
    {
      question: "Hvilke to feil kan ikke repareres av kvalitet et annet sted i besvarelsen?",
      options: ["Feil #3, upresis empiri, og feil #2, manglende analyseramme", "Feil #1, ren gjengivelse, og feil #10, for mange kortsvar", "Feil #7, institusjonsoversikt, og feil #8, integrasjon mot europeisering", "Feil #9, manglende motkritikk, og feil #11, manglende distinksjon"],
      explanation: "Riktig svar er #3 og #2. Sensors egen formulering er at feil i den empiriske delen ikke kan oppveies av sterk drøfting, og at krigsårsaker uten nivåene ikke er fullgodt. De andre feilene senker karakteren gradvis; disse to setter et tak.",
    },
    {
      question: "Hva kjennetegner feil #7?",
      options: ["At avsnittet kunne stått i en hvilken som helst besvarelse om samme institusjon", "At kandidaten har byttet om på to av traktatartiklene i den empiriske delen", "At kandidaten forklarer økonomiske sammenhenger uten politisk kobling", "At kandidaten svarer på flere av spørsmålene i settet enn det som kreves"],
      explanation: "Riktig svar er institusjonsoversikten. Feilen rammer kandidater som kan systemet godt og skriver det ut uavhengig av spørsmålet. De tre andre beskriver feil #3, #6 og #10.",
    },
    {
      question: "Hva er distinksjonen mellom feil #4 og feil #9?",
      options: ["I #4 mangler kontrasteringen, i #9 mangler retningen mot tekstens konklusjon", "I #4 mangler empirien, mens det i #9 mangler en analytisk disposisjon", "I #4 er det for få perspektiver, mens i #9 er det for mange perspektiver", "I #4 gjelder feilen langsvar, mens i #9 gjelder den bare kortsvarsdelen"],
      explanation: "Riktig svar er kontrastering mot retning. I feil #9 er begge perspektivene nevnt — det som mangler, er at det andre brukes til å angripe tekstens konkrete konklusjon.",
    },
    {
      question: "Hva er vaksinen mot feil #6?",
      options: ["Én setning etter hvert økonomisk ledd om hvem som bestemmer og hvem som taper", "Å utelate økonomisk teori helt, siden emnet er statsvitenskap og ikke økonomi", "Å legge alle økonomiske resonnementer til slutten av drøftingsdelen", "Å bruke flere talleksempler, slik at resonnementet blir mer presist"],
      explanation: "Riktig svar er den politiske koblingen etter hvert økonomisk ledd. Å utelate økonomien er ikke løsningen — den er en del av stoffet i internasjonal politisk økonomi. Det er koblingen som mangler, ikke innholdet.",
    },
    {
      question: "Hva er varsellampen for feil #8?",
      options: ["Peker påvirkningen jeg beskriver, oppover eller nedover?", "Har jeg oppgitt hvilket årstall avtalen ble inngått?", "Har jeg nevnt både medlemsland og land utenfor unionen?", "Har jeg brukt begrepet suverenitet minst én gang i avsnittet?"],
      explanation: "Riktig svar er retningsspørsmålet. Integrasjon er suverenitetsavståelse oppover til unionsnivået; europeisering er EUs påvirkning nedover på nasjonal politikk. Retningen er hele distinksjonen.",
    },
    {
      question: "Hvorfor er feil #10 kostbar, og ikke bare virkningsløs?",
      options: ["Fordi tiden er tatt fra langsvaret, som teller 60 prosent av karakteren", "Fordi sensor trekker eksplisitt for hvert svar ut over det oppgitte antallet", "Fordi svarene da blir vurdert samlet, og det svakeste trekker de andre ned", "Fordi kandidaten da mister retten til å velge hvilke svar som skal vurderes"],
      explanation: "Riktig svar er tidstapet. Sensor leser uansett bare antallet som kreves, og tolv minutter brukt på et fjerde kortsvar er tolv minutter tatt fra den delen som veier tyngst.",
    },
    {
      question: "Hvilke fem feil bør fanges allerede på disposisjonsstadiet?",
      options: ["#1, #2, #4, #5 og #7, fordi de alle krever at disposisjonen endres", "#3, #6, #8, #10 og #11, fordi de alle kan rettes med én setning", "#2, #3, #9, #10 og #11, fordi de rammer den empiriske delen", "#1, #3, #6, #7 og #9, fordi de gjelder drøftingsdelen alene"],
      explanation: "Riktig svar er de fem som krever kursendring. Oppdager du feil #4 etter at drøftingen er skrevet, koster den tjue minutter du ikke har; oppdager du den etter disposisjonen, koster den to.",
    },
    {
      question: "Hva er den flate definisjonen av komparativt fortrinn, og hvorfor er den feil?",
      options: ["At land bør produsere det de er best til — det beskriver absolutt fortrinn", "At land bør produsere det de eksporterer mest av — det beskriver handelsbalansen", "At land bør produsere alt de kan selv — det beskriver proteksjonisme", "At land bør produsere det som gir høyest pris — det beskriver markedstilpasning"],
      explanation: "Riktig svar er den vanligste flate definisjonen. Komparativt fortrinn defineres via alternativkostnad: der landet gir opp minst av noe annet. Forvekslingen er både en feil #11 og en feil #3.",
    },
    {
      question: "Hva skiller feil #2 fra feil #5 når en flerdelt oppgave er ufullstendig besvart?",
      options: ["Feil #2 gjelder når det utelatte er en ramme oppgaven navngav", "Feil #2 gjelder bare langsvar, mens feil #5 gjelder bare kortsvar", "Feil #2 gjelder når empirien er gal, feil #5 når den er ufullstendig", "Feil #2 gjelder når kandidaten svarer for kort på hele oppgaven"],
      explanation: "Riktig svar er om det utelatte er en navngitt ramme. En sensor kan godt føre begge kodene på samme passasje, men #2 er den presise når oppgaveteksten navngav analysenivåene eller perspektivene.",
    },
    {
      question: "Hva er riktig framstilling av realismens syn på makt?",
      options: ["Offensiv realisme maksimerer relativ makt, defensiv søker tilstrekkelig sikkerhet", "Realismen mener at alle stater alltid søker mest mulig makt, helt uten unntak", "Realismen mener makt er mindre viktig enn institusjoner i moderne politikk", "Realismen mener makt bare betyr militær kapasitet og ikke økonomisk styrke"],
      explanation: "Riktig svar er skillet mellom offensiv og defensiv realisme. Å skrive at stater alltid vil ha mest mulig makt, uten distinksjonen, er en dokumentert feil #11 og en feiltilskrivning.",
    },
    {
      question: "Hva endret seg da WTO ble opprettet i 1995?",
      options: ["Håndhevelsen: tvisteløsningen ble bindende og kan ikke blokkeres av taperen", "Prinsippene: de fire hovedprinsippene ble innført for første gang i regimet", "Medlemskretsen: organisasjonen ble åpnet for stater utenfor Europa og Nord-Amerika", "Beslutningsregelen: nye regler skulle heretter vedtas med kvalifisert flertall"],
      explanation: "Riktig svar er håndhevelsen. Prinsippene ble videreført fra GATT; nye regler vedtas fortsatt i praksis ved konsensus. Å skrive at WTO bare er et nytt navn på GATT, er en klassisk feil #3.",
    },
    {
      question: "Hvorfor rammer flere av feilkodene kandidater som kan stoffet godt?",
      options: ["Fordi feilene handler om anvendelse og utvalg, ikke om mangel på kunnskap", "Fordi kandidater med mye kunnskap oftere velger de vanskeligste oppgavene", "Fordi sensor stiller strengere krav til kandidater som viser bredde i stoffet", "Fordi kunnskapsrike kandidater oftere skriver for kort under tidspress"],
      explanation: "Riktig svar er anvendelse og utvalg. Feil #7 forutsetter at du kan hele institusjonen, og feil #1 forutsetter at du har mye å gjengi. Kunnskapen er ikke problemet; det er hva som gjøres med den.",
    },
    {
      question: "Hvordan skal feilkodene brukes i selve eksamensbesvarelsen?",
      options: ["De skal ikke brukes der i det hele tatt — de er bokas verktøy, ikke fagets", "De bør nevnes i innledningen for å vise at kandidaten kjenner vurderingskriteriene", "De bør brukes i margen for å markere hvor kandidaten har vurdert alternativer", "De bør nevnes i konklusjonen som en kort selvevaluering av besvarelsen"],
      explanation: "Riktig svar er at de aldri skal skrives inn i besvarelsen. Sensor kjenner ikke registeret, og henvisninger til det tilfører ingenting. Kodene er et arbeidsverktøy for lesing og selvretting.",
    },
  ],
  'stv1200-7-5': [
    {
      question: "Hva skiller en besvarelse på god nivå fra en på beste nivå i dette langsvaret?",
      options: ["Om kunnskapen brukes til å hevde noe, ikke hvor mye kunnskap som er der", "Om kandidaten har fått med enda flere begreper fra pensum i drøftingsdelen", "Om språket er faglig presist gjennom hele besvarelsens drøftingsdel", "Om besvarelsen har med flere empiriske eksempler fra ulike verdensdeler"],
      explanation: "Riktig svar er anvendelsen. Besvarelsen på god nivå i dette kapitlet har flere begreper enn den på midtnivå og lander likevel lavere, fordi begrepene defineres etter hverandre uten å brukes til noe.",
    },
    {
      question: "Hvilke tre elementer inngår i krigsdefinisjonen?",
      options: ["Uforenlig interesse, væpnet vold over en terskel, og organiserte aktører", "To eller flere stater, militære styrker, og en formell krigserklæring", "Territorielt krav, økonomiske motiver, og en utløsende enkelthendelse", "Uenighet mellom partene, tap av menneskeliv, og internasjonal fordømmelse"],
      explanation: "Riktig svar er de tre elementene, og alle tre må være til stede. Kravet om organiserte aktører skiller krig fra omfattende vold uten organisering, og kravet om uforenlig interesse skiller den fra vold uten politisk innhold.",
    },
    {
      question: "Hva er de to måletersklene for krig?",
      options: ["1000 kampdøde i den binære målingen, 25 kampdøde per år i den kontinuerlige", "100 kampdøde i den binære målingen, og 10 kampdøde per år i den kontinuerlige", "1000 døde totalt i begge tradisjonene, men målt over ulike tidsrom", "25 kampdøde i den binære målingen, 1000 kampdøde i den kontinuerlige"],
      explanation: "Riktig svar er 1000 og 25. Merk at tersklene gjelder kampdøde, ikke døde generelt — den upresisheten er liten i ord og betydelig i innhold, og den er en typisk feil på midtnivå.",
    },
    {
      question: "Hva kjennetegner en internasjonalisert borgerkrig?",
      options: ["At en utenforstående stat deltar militært med egne styrker på minst én side", "At konflikten får omfattende internasjonal oppmerksomhet og fordømmelse", "At en utenforstående stat gir økonomisk eller politisk støtte til en av partene", "At konflikten sprer seg over landegrensen til minst ett nabolands territorium"],
      explanation: "Riktig svar er militær deltakelse med egne styrker. Alternativet om økonomisk eller politisk støtte ligger nær og er ikke tilstrekkelig, og alternativet om oppmerksomhet er en gjetning ut fra ordet.",
    },
    {
      question: "Hva er forskjellen på feiloppfatning og privat informasjon?",
      options: ["Feiloppfatning er at en part tar feil, privat informasjon at ingen kan vise at de har rett", "Feiloppfatning gjelder militære forhold, mens privat informasjon gjelder økonomiske forhold", "Feiloppfatning oppstår før krigen bryter ut, privat informasjon underveis i krigen", "Feiloppfatning gjelder ledere, mens privat informasjon gjelder etterretningstjenester"],
      explanation: "Riktig svar er skillet mellom en psykologisk og en strukturell mekanisme. Derfor ligger de på hvert sitt analysenivå: feiloppfatning på individnivå, privat informasjon på systemnivå.",
    },
    {
      question: "Hva sier forpliktelsesproblemet?",
      options: ["At partene ikke kan binde seg troverdig til hvordan de vil handle i framtiden", "At stater sjelden overholder de avtalene de har inngått med hverandre", "At internasjonale avtaler mangler en domstol med tvungen domsmyndighet", "At partene i en konflikt ikke er villige til å forplikte seg til forhandlinger"],
      explanation: "Riktig svar er den manglende troverdige bindingen til framtidig atferd. Poenget er at ingen av partene behøver å være fiendtlig innstilt — problemet følger av at ingen tredjepart kan håndheve en avtale.",
    },
    {
      question: "Hvorfor forklarer anarkiet i seg selv lite om krig?",
      options: ["Fordi anarkiet er konstant, mens krig er sjeldent", "Fordi anarkiet er et begrep fra realismen og ikke fra fredsforskningen", "Fordi anarkiet bare gjelder forholdet mellom stormakter og ikke andre stater", "Fordi anarkiet er en normativ og ikke en analytisk beskrivelse av systemet"],
      explanation: "Riktig svar er at et konstant forhold forklarer variasjon dårlig. Det er derfor de to mekanismene privat informasjon og forpliktelsesproblemet gjør arbeidet på systemnivå — de varierer med om forhandlinger faktisk bryter sammen.",
    },
    {
      question: "Hva er en analytisk disposisjon i dette langsvaret?",
      options: ["To setninger som velger forklaringsfaktorer og sier hvorfor de er valgt", "En innledning som forteller hvilke temaer besvarelsen skal ta for seg", "En liste over alle forklaringsfaktorene pensum nevner på de tre nivåene", "En oversikt over hvilke pensumkapitler drøftingen bygger på videre"],
      explanation: "Riktig svar er det begrunnede utvalget. Det er den tydeligste markøren for Akse 3, selvstendig struktur — og en fullstendig liste ser grundigere ut, men viser ikke at et faglig valg er tatt.",
    },
    {
      question: "Hvorfor ble besvarelsen på god nivå ikke bedre enn den ble?",
      options: ["Fordi den mangler en påstand med en grunn, ikke fordi den mangler stoff", "Fordi den mangler flere av begrepene fra pensum på systemnivået", "Fordi den empiriske delen er dårligere enn i besvarelsen på beste nivå", "Fordi den ikke bruker analysenivåene som ramme for framstillingen"],
      explanation: "Riktig svar er den manglende påstanden. Den empiriske delen er like god som i besvarelsen på beste nivå, og nivåene brukes som ramme — det som mangler, er at kunnskapen brukes til å hevde noe.",
    },
    {
      question: "Hva er de tre grepene som skiller midtnivå fra beste nivå?",
      options: ["Begrunnet utvalg, mekanismene under anarkiet, og behandlet motargument", "Bedre språk, flere eksempler, og en lengre empirisk innledning", "Flere begreper, flere kilder, og en tydeligere avslutning til slutt", "Riktige tall, riktig ramme, og et tydeligere valg av krigstype"],
      explanation: "Riktig svar er de tre grepene, hvert på om lag to setninger. Ingen av dem handler om språk: en besvarelse i enkelt førsteårsspråk med disse tre grepene ligger høyere enn en velformulert uten dem.",
    },
    {
      question: "Hva kjennetegner besvarelsen på klart mangelfullt nivå her?",
      options: ["Gale terskeltall, begreper gjettet ut fra ordlyden, og ingen bruk av analysenivåene", "Riktige begreper, men en drøfting som ikke tar stilling til det spørsmålet som ble stilt", "En for lang empirisk del som stjeler tid fra drøftingsdelen av besvarelsen", "Et standpunkt som er for skarpt formulert til å kunne forsvares faglig"],
      explanation: "Riktig svar er kombinasjonen av gal empiri og manglende ramme. Merk skillet nedover: en besvarelse med riktig empiri og ingen drøfting er en god besvarelse, mens en med gal empiri og ingen drøfting er klart mangelfull.",
    },
    {
      question: "Hvilken versjon av den demokratiske freden er den belagte?",
      options: ["Den dyadiske: demokratier fører sjelden eller aldri krig mot hverandre", "Den monadiske: demokratier er generelt fredeligere enn andre stater", "Den institusjonelle: demokratier kan ikke vedta krig uten folkeavstemning", "Den økonomiske: demokratier handler mer og har derfor mindre å tjene på krig"],
      explanation: "Riktig svar er den dyadiske versjonen. Den monadiske er svakt belagt, og å bruke den som om den var den belagte, er en dokumentert feil #11 — manglende distinksjon.",
    },
    {
      question: "Hvilket kriterium brukes for å avgjøre hvilket analysenivå som veier tyngst?",
      options: ["Hvilket forklaringsledd som varierer mest systematisk med utfallet", "Hvilket nivå som er mest omtalt i pensumlitteraturen om krigsårsaker", "Hvilket nivå som gir flest konkrete eksempler å bygge argumentet på", "Hvilket nivå som ligger nærmest den utløsende hendelsen i konflikten"],
      explanation: "Riktig svar er variasjon med utfallet. Standpunktet er likevel fritt: at statsnivået bærer, fordi det er der variasjonen mellom stater ligger, er en like god landing når den er like stringent begrunnet.",
    },
    {
      question: "Hvorfor er det feil #5 å hoppe over de korte faktaspørsmålene i oppgaven?",
      options: ["Fordi de er lette poeng som inngår eksplisitt i vurderingen av besvarelsen", "Fordi sensor da ikke får vurdert om kandidaten har lest hele pensum", "Fordi de utgjør en fastsatt andel av karakteren på selve langsvaret", "Fordi drøftingsdelen ikke kan forstås uten at de er besvart først"],
      explanation: "Riktig svar er at de er lette poeng som teller. De tar til sammen rundt et kvarter, og nyere langsvar åpner typisk med tre til fire av dem — H2024 og H2025 har skoleeksempler på formen.",
    },
  ],
  'stv1200-7-6': [
    {
      question: "Hva er et kontrasteringsspørsmål i en teoridrøfting?",
      options: ["Ett spørsmål begge perspektivene har et klart og uforenlig svar på", "Et spørsmål om hvilket av perspektivene som er faglig mest holdbart", "Et spørsmål om hvordan perspektivene har utviklet seg faghistorisk", "Et spørsmål om hvilke temaer hvert av perspektivene passer best på"],
      explanation: "Riktig svar er det felles spørsmålet med uforenlige svar. Et tema er ikke et spørsmål: institusjoners betydning kan begge perspektivene snakke om i hver sin retning, mens spørsmålet tvinger dem til å svare på det samme.",
    },
    {
      question: "Hvordan tester du om en teoridrøfting katalogiserer i stedet for å kontrastere?",
      options: ["Om avsnittene kan bytte plass uten at noe går tapt", "Om alle tre perspektivene er nevnt i besvarelsen", "Om begrepene fra hvert perspektiv er korrekt gjengitt", "Om drøftingen er lengre enn den redegjørende delen"],
      explanation: "Riktig svar er ombyttingstesten. Kan avsnittene stå i vilkårlig rekkefølge, besvarer de ikke det samme spørsmålet — og det er feil #4, den vanligste grunnen til at et kunnskapsrikt teorisvar havner på god og ikke beste nivå.",
    },
    {
      question: "Hva er det avgjørende empiriske spørsmålet i institusjonsdebatten?",
      options: ["Om en tung medlemsstat har handlet mot sin umiddelbare interesse på grunn av ordningen", "Om organisasjonen har et klart flertall av verdens stater blant sine medlemmer i dag", "Om organisasjonen har egne styrker eller et eget håndhevingsapparat", "Om medlemmene betaler kontingenten sin og møter på de faste sesjonene"],
      explanation: "Riktig svar er spørsmålet om atferd mot egen interesse, sammen med om regelverket har overlevd maktforskyvninger uten å bli skrevet om. At uenigheten lar seg prøve, er selve poenget.",
    },
    {
      question: "Hva er realismens blindsone på institusjonsspørsmålet?",
      options: ["At organisasjoner overlever de maktkonstellasjonene som skapte dem", "At stater av og til samarbeider selv når det ikke tjener deres interesser", "At små stater kan påvirke utfallet i internasjonale forhandlinger", "At normer og identitet har betydning for staters selvforståelse"],
      explanation: "Riktig svar er utholdenheten. Har reglene egentlig ingen kraft, burde de vært skrevet om i takt med at maktforholdene endret seg. Alternativet om normer er konstruktivismens tema, ikke realismens blindsone på dette spørsmålet.",
    },
    {
      question: "Hva er liberalismens blindsone på institusjonsspørsmålet?",
      options: ["Fordelingen — hvem som får hva, mellom medlemmene og innad i dem", "Mekanismen — hvordan institusjoner faktisk reduserer usikkerhet", "Historien — hvordan de fleste organisasjonene ble opprettet", "Rekkevidden — hvor mange stater som faktisk deltar i hver enkelt ordning"],
      explanation: "Riktig svar er fordelingen. Liberalismen leser dessuten lett fravær av åpen konflikt som samarbeid. Mekanismen er derimot liberalismens styrke, ikke dens blindsone.",
    },
    {
      question: "Er en skarp konklusjon forenlig med beste nivå?",
      options: ["Ja — forbehold er et verktøy, ikke obligatorisk garnityr", "Nei — en toppbesvarelse skal alltid veie perspektivene mot hverandre", "Bare i kortsvar, der det ikke er plass til å nyansere", "Bare når kandidaten viser til empiriske funn fra pensumlitteraturen"],
      explanation: "Riktig svar er ja. En godt begrunnet, tydelig konklusjon er en fullgod toppform, og det motsatte standpunktet ville fått samme karakter om det var like stringent begrunnet. Det er begrunnelseskvaliteten som premieres.",
    },
    {
      question: "Hva skiller en begrunnet konklusjon fra en rangering av perspektivene?",
      options: ["Konklusjonen sier hva som forklarer dette spørsmålet best, rangeringen hva som er riktig", "Konklusjonen står til slutt i teksten, mens rangeringen kommer tidlig i selve drøftingen", "Konklusjonen nevner to perspektiver, mens rangeringen nevner alle tre", "Konklusjonen bygger på eksempler, mens rangeringen bygger på teori alene"],
      explanation: "Riktig svar er skillet mellom forklaringskraft og riktighet. Perspektivene er konkurrerende analyseverktøy, ikke politiske standpunkter, og en påstand om at ett er mer realistisk enn et annet, er en verdivurdering.",
    },
    {
      question: "Hva betyr det at en institusjon har egenvekt?",
      options: ["At medlemsstatene handler annerledes med den enn de ville gjort uten den", "At institusjonen har myndighet til å tvinge medlemmene til å følge reglene", "At institusjonen er viktig som møteplass for medlemsstatenes forhandlinger", "At institusjonen har et budsjett og et sekretariat uavhengig av medlemmene"],
      explanation: "Riktig svar er den selvstendige forskjellen. Merk at en organisasjon godt kan være svært viktig som arena uten å ha egenvekt, hvis alt som skjer der, følger av medlemmenes maktforhold. Å ikke skille de to er den vanligste uklarheten her.",
    },
    {
      question: "Hva er varsellampen for feil #9 i en kronikkanalyse?",
      options: ["Kunne siste del vært skrevet uten å ha lest vedlegget?", "Har jeg navngitt alle tre perspektivene i besvarelsen?", "Har jeg gjengitt tekstens hovedpunkter korrekt og fullstendig?", "Har jeg oppgitt hvilket sett kronikkoppgaven sist kom i?"],
      explanation: "Riktig svar er spørsmålet om vedlegget. Kunne kritikken vært skrevet uten teksten, er den en presentasjon av et perspektiv og ikke en motkritikk. En variant er å gjenta en innvending forfatteren allerede har besvart.",
    },
    {
      question: "Hva er det sterkeste enkeltgrepet i en motkritikk?",
      options: ["Å bruke tekstens egne opplysninger mot konklusjonen", "Å påvise faktafeil i de opplysningene teksten bygger på", "Å vise til hva pensum sier om det samme temaet", "Å presentere det motsatte perspektivet så grundig som mulig"],
      explanation: "Riktig svar er å bruke tekstens eget materiale. En kronikk som selv oppgir hvor mange medlemmer en ordning har, har levert materialet til en innvending om rekkevidde. Å påpeke faktafeil er derimot ikke en analytisk kritikk.",
    },
    {
      question: "Hvilke fire ledd har en fullstendig motkritikk?",
      options: ["Navngi perspektivet, pek på premisset, vis hva det ser, og si hva det gjør med konklusjonen", "Referer teksten kort, navngi perspektivet, gi et eksempel, og oppsummer poengene til slutt", "Finn premisset, gi et moteksempel, sammenlign med pensum, og konkluder", "Identifiser forfatteren, plasser teksten i tid, vurder kilden, og kritiser"],
      explanation: "Riktig svar er de fire analytiske leddene. Det fjerde mangler oftest, og uten det er kritikken ferdig før den har gjort noe med det den kritiserer.",
    },
    {
      question: "Kan en motkritikk på beste nivå forsterke deler av tekstens konklusjon?",
      options: ["Ja — den kan svekke begrunnelsen samtidig som den støtter anbefalingen", "Nei — en motkritikk må avvise hele konklusjonen for å telle som kritikk", "Bare hvis kandidaten oppgir at hun er enig med forfatteren i saken", "Bare i teoridrøftinger, ikke i kronikk- og tekstanalyseoppgaver"],
      explanation: "Riktig svar er ja. En kritikk som forsterker anbefalingen mens den svekker begrunnelsen, er mer presis enn total avvisning — og den viser at kandidaten har lest teksten og ikke bare perspektivene.",
    },
    {
      question: "Hva skiller internasjonal strafferett fra menneskerettighetsregimer?",
      options: ["Strafferetten gjelder individansvar, regimene statens forpliktelser overfor innbyggerne", "Strafferetten gjelder væpnet konflikt, mens menneskerettighetsregimene gjelder forhold i fredstid", "Strafferetten er regional, mens menneskerettighetsregimene alltid er globale", "Strafferetten bygger på sedvane, mens menneskerettighetsregimene bygger på traktat"],
      explanation: "Riktig svar er individansvar mot statens forpliktelser. Å blande de to er en feil på presisjonsaksen — i disse sjangrene er den empiriske delen framstillingen av perspektivene og institusjonene.",
    },
    {
      question: "Hvordan diagnostiserer du raskt om en ukjent tekst er realistisk eller liberal?",
      options: ["Se hva den sammenligner med: motpartens utbytte, eller situasjonen uten ordningen", "Se om teksten er gjennomgående positiv eller negativ til internasjonalt samarbeid", "Se om den nevner militære spørsmål eller økonomiske spørsmål oftest", "Se om den skriver om stormakter eller om små og mellomstore stater"],
      explanation: "Riktig svar er målestokken. Sammenligner teksten med motpartens utbytte, måler den relative gevinster og er realistisk; sammenligner den med situasjonen uten ordningen, måler den absolutte gevinster og er liberal.",
    },
  ],
};

export default quizData_stv1200;

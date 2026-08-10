import type { QuizQuestion } from './quiz-data';

const quizData_matematikk_9: Record<string, QuizQuestion[]> = {
  '9-1-1': [
    {
      question: 'Hva er $2^3 \\cdot 2^4$?',
      options: ['$2^7 = 128$', '$2^{12}$', '$2^7 = 64$', '$4^7$'],
      explanation: 'Produktregelen: $2^3 \\cdot 2^4 = 2^{3+4} = 2^7 = 128$.',
    },
    {
      question: 'Hva er $\\frac{5^7}{5^3}$?',
      options: ['$5^4 = 625$', '$5^{10}$', '$5^4 = 125$', '$1^4$'],
      explanation: 'Kvotientregelen: $5^{7-3} = 5^4 = 625$.',
    },
    {
      question: 'Hva er $4^{-2}$?',
      options: ['$\\frac{1}{16}$', '$-16$', '$16$', '$-8$'],
      explanation: 'Negativ eksponent: $4^{-2} = \\frac{1}{4^2} = \\frac{1}{16}$.',
    },
    {
      question: 'Forenkle $\\sqrt{50}$.',
      options: ['$5\\sqrt{2}$', '$25\\sqrt{2}$', '$2\\sqrt{5}$', '$10\\sqrt{5}$'],
      explanation: '$\\sqrt{50} = \\sqrt{25 \\cdot 2} = 5\\sqrt{2}$.',
    },
    {
      question: 'Hva er $8^{\\frac{2}{3}}$?',
      options: ['$4$', '$8$', '$16$', '$2$'],
      explanation: '$8^{\\frac{2}{3}} = (\\sqrt[3]{8})^2 = 2^2 = 4$.',
    },
  ],
  '9-1-2': [
    {
      question: 'Regn ut og forkort $\\frac{2}{3} \\cdot \\frac{5}{4}$.',
      options: ['$\\frac{5}{6}$', '$\\frac{10}{12}$', '$\\frac{7}{12}$', '$\\frac{8}{15}$'],
      explanation: '$\\frac{2 \\cdot 5}{3 \\cdot 4} = \\frac{10}{12} = \\frac{5}{6}$.',
    },
    {
      question: 'Regn ut $\\frac{3}{4} \\div \\frac{9}{8}$.',
      options: ['$\\frac{2}{3}$', '$\\frac{27}{32}$', '$\\frac{3}{2}$', '$\\frac{12}{36}$'],
      explanation: 'Gang med den omvendte: $\\frac{3}{4} \\cdot \\frac{8}{9} = \\frac{24}{36} = \\frac{2}{3}$.',
    },
    {
      question: 'Regn ut $\\frac{2}{3} + \\frac{1}{4}$.',
      options: ['$\\frac{11}{12}$', '$\\frac{3}{7}$', '$\\frac{3}{12}$', '$\\frac{5}{12}$'],
      explanation: 'Fellesnevner 12: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.',
    },
    {
      question: 'Hva blir $\\frac{2}{\\frac{3}{4}}$?',
      options: ['$\\frac{8}{3}$', '$\\frac{3}{8}$', '$\\frac{2}{3}$', '$\\frac{6}{4}$'],
      explanation: '$2 \\div \\frac{3}{4} = 2 \\cdot \\frac{4}{3} = \\frac{8}{3}$.',
    },
    {
      question: '$\\frac{2}{5}$ av klassen er gutter, og $\\frac{3}{4}$ av guttene spiller fotball. Hvilken andel av klassen er fotballgutter?',
      options: ['$\\frac{3}{10}$', '$\\frac{6}{9}$', '$\\frac{5}{20}$', '$\\frac{1}{2}$'],
      explanation: '$\\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}$.',
    },
  ],
  '9-1-3': [
    {
      question: 'En vare på 800 kr øker med 15 %. Hva er ny pris?',
      options: ['$920$ kr', '$815$ kr', '$680$ kr', '$1200$ kr'],
      explanation: 'Vekstfaktor $1,15$: $800 \\cdot 1,15 = 920$ kr.',
    },
    {
      question: 'En aksjekurs stiger fra 250 kr til 300 kr. Hva er prosentvis økning?',
      options: ['$20\\%$', '$50\\%$', '$120\\%$', '$16,7\\%$'],
      explanation: '$\\frac{300 - 250}{250} \\cdot 100\\% = \\frac{50}{250} \\cdot 100\\% = 20\\%$.',
    },
    {
      question: 'Etter 20 % økning koster en vare 480 kr. Hva var opprinnelig pris?',
      options: ['$400$ kr', '$460$ kr', '$384$ kr', '$576$ kr'],
      explanation: '$K_0 = \\frac{480}{1,20} = 400$ kr.',
    },
    {
      question: 'En pris øker først 10 %, deretter 20 %. Hva er total økning?',
      options: ['$32\\%$', '$30\\%$', '$22\\%$', '$2\\%$'],
      explanation: 'Total vekstfaktor $1,10 \\cdot 1,20 = 1,32$, altså 32 % økning.',
    },
    {
      question: 'Hva er vekstfaktoren ved 30 % nedgang?',
      options: ['$0,70$', '$1,30$', '$0,30$', '$1,70$'],
      explanation: 'Vekstfaktor ved nedgang $= 1 - 0,30 = 0,70$.',
    },
  ],
  '9-1-4': [
    {
      question: 'Skriv $5\\,800\\,000$ på standardform.',
      options: ['$5,8 \\times 10^6$', '$5,8 \\times 10^5$', '$58 \\times 10^5$', '$5,8 \\times 10^7$'],
      explanation: 'Flytt komma 6 plasser: $5,8 \\times 10^6$.',
    },
    {
      question: 'Skriv $0,000047$ på standardform.',
      options: ['$4,7 \\times 10^{-5}$', '$4,7 \\times 10^{5}$', '$47 \\times 10^{-6}$', '$4,7 \\times 10^{-4}$'],
      explanation: 'Flytt komma 5 plasser til høyre: $4,7 \\times 10^{-5}$.',
    },
    {
      question: 'Skriv $3,5 \\times 10^4$ som vanlig tall.',
      options: ['$35\\,000$', '$3500$', '$350\\,000$', '$0,00035$'],
      explanation: 'Flytt komma 4 plasser til høyre: $35\\,000$.',
    },
    {
      question: 'Regn ut $(3 \\times 10^4) \\cdot (2 \\times 10^5)$.',
      options: ['$6 \\times 10^9$', '$6 \\times 10^{20}$', '$5 \\times 10^9$', '$6 \\times 10^4$'],
      explanation: 'Gang tallene og legg sammen eksponentene: $6 \\times 10^{4+5} = 6 \\times 10^9$.',
    },
    {
      question: 'Regn ut $\\frac{8 \\times 10^9}{4 \\times 10^3}$.',
      options: ['$2 \\times 10^6$', '$2 \\times 10^3$', '$2 \\times 10^{12}$', '$4 \\times 10^6$'],
      explanation: 'Del tallene og trekk fra eksponentene: $2 \\times 10^{9-3} = 2 \\times 10^6$.',
    },
  ],
  '9-2-1': [
    {
      question: 'Hva betyr det å faktorisere et uttrykk?',
      options: ['Å skrive det som et produkt av faktorer', 'Å multiplisere ut alle parentesene slik at uttrykket blir en sum av ledd', 'Å legge sammen ledd med samme variabel', 'Å avrunde alle tallene i uttrykket'],
      explanation: 'Faktorisering er å skrive et uttrykk som et produkt av faktorer — motsatt av å gange ut.',
    },
    {
      question: 'Faktoriser $12x + 18$.',
      options: ['$6(2x + 3)$', '$3(4x + 6)$', '$2(6x + 9)$', '$6(2x + 18)$'],
      explanation: 'SFF(12, 18) $= 6$: $12x + 18 = 6(2x + 3)$.',
    },
    {
      question: 'Faktoriser $x^2 + 5x$.',
      options: ['$x(x + 5)$', '$x^2(1 + 5)$', '$5x(x + 1)$', '$(x + 5)^2$'],
      explanation: 'Felles faktor $x$: $x^2 + 5x = x(x + 5)$.',
    },
    {
      question: 'Faktoriser $6x^2 - 15x$.',
      options: ['$3x(2x - 5)$', '$3(2x^2 - 5x)$', '$x(6x - 15)$', '$6x(x - 15)$'],
      explanation: 'Felles faktor $3x$: $6x^2 - 15x = 3x(2x - 5)$.',
    },
    {
      question: 'Hva er primtallsfaktoriseringen av $84$?',
      options: ['$2^2 \\cdot 3 \\cdot 7$', '$2 \\cdot 3 \\cdot 7$', '$2^3 \\cdot 3$', '$4 \\cdot 21$'],
      explanation: '$84 = 2 \\cdot 2 \\cdot 3 \\cdot 7 = 2^2 \\cdot 3 \\cdot 7$.',
    },
  ],
  '9-2-2': [
    {
      question: 'Hva er første kvadratsetning?',
      options: ['$(a + b)^2 = a^2 + 2ab + b^2$', '$(a + b)^2 = a^2 + b^2$', '$(a - b)^2 = a^2 - 2ab + b^2$', '$(a + b)(a - b) = a^2 - b^2$'],
      explanation: 'Første kvadratsetning: $(a + b)^2 = a^2 + 2ab + b^2$.',
    },
    {
      question: 'Regn ut $(x + 3)^2$.',
      options: ['$x^2 + 6x + 9$', '$x^2 + 9$', '$x^2 + 3x + 9$', '$x^2 + 6x + 6$'],
      explanation: '$(x + 3)^2 = x^2 + 2 \\cdot x \\cdot 3 + 9 = x^2 + 6x + 9$.',
    },
    {
      question: 'Regn ut $(x - 7)^2$.',
      options: ['$x^2 - 14x + 49$', '$x^2 + 49$', '$x^2 - 49$', '$x^2 - 14x - 49$'],
      explanation: '$(x - 7)^2 = x^2 - 2 \\cdot x \\cdot 7 + 49 = x^2 - 14x + 49$.',
    },
    {
      question: 'Regn ut $(x + 4)(x - 4)$ med konjugatsetningen.',
      options: ['$x^2 - 16$', '$x^2 + 16$', '$x^2 - 8x - 16$', '$x^2 - 8$'],
      explanation: 'Konjugatsetningen: $(a + b)(a - b) = a^2 - b^2 = x^2 - 16$.',
    },
    {
      question: 'Faktoriser $y^2 - 16$.',
      options: ['$(y + 4)(y - 4)$', '$(y - 4)^2$', '$(y + 4)^2$', '$(y - 16)(y + 1)$'],
      explanation: 'Differanse av kvadrater: $y^2 - 16 = (y + 4)(y - 4)$.',
    },
  ],
  '9-2-3': [
    {
      question: 'Hva er første steg når en likning inneholder brøker?',
      options: ['Multiplisere alle ledd med fellesnevneren', 'Legge til 1 på begge sider av likhetstegnet før man regner videre', 'Forkorte hver enkelt brøk så langt det lar seg gjøre', 'Snu likningen så høyresiden kommer først'],
      explanation: 'Vi multipliserer alle ledd med fellesnevneren, slik at brøkene forsvinner.',
    },
    {
      question: 'Løs $\\frac{x}{3} = 4$.',
      options: ['$x = 12$', '$x = \\frac{4}{3}$', '$x = 7$', '$x = 1$'],
      explanation: 'Gang begge sider med 3: $x = 12$.',
    },
    {
      question: 'Løs $\\frac{x}{2} + \\frac{x}{3} = 5$.',
      options: ['$x = 6$', '$x = 5$', '$x = 30$', '$x = 1$'],
      explanation: 'Gang med 6: $3x + 2x = 30$, så $5x = 30$, $x = 6$.',
    },
    {
      question: 'Løs $\\frac{2x + 1}{3} = 5$.',
      options: ['$x = 7$', '$x = 8$', '$x = 2$', '$x = 16$'],
      explanation: 'Gang med 3: $2x + 1 = 15$, så $2x = 14$, $x = 7$.',
    },
    {
      question: 'Løs $\\frac{x - 1}{2} = \\frac{x + 3}{4}$.',
      options: ['$x = 5$', '$x = 2$', '$x = -5$', '$x = 1$'],
      explanation: 'Gang med 4: $2(x - 1) = x + 3$, så $2x - 2 = x + 3$, $x = 5$.',
    },
  ],
  '9-2-4': [
    {
      question: 'Hva betyr symbolet $\\geq$?',
      options: ['Større enn eller lik', 'Mindre enn, men ikke lik', 'Større enn, men ikke lik', 'Ulik, altså forskjellig fra'],
      explanation: '$\\geq$ betyr «større enn eller lik».',
    },
    {
      question: 'Løs ulikheten $x + 3 > 7$.',
      options: ['$x > 4$', '$x > 10$', '$x < 4$', '$x > 21$'],
      explanation: '$x > 7 - 3 = 4$.',
    },
    {
      question: 'Løs ulikheten $-2x > 8$.',
      options: ['$x < -4$', '$x > -4$', '$x > 4$', '$x < 4$'],
      explanation: 'Del med $-2$ og snu tegnet: $x < -4$.',
    },
    {
      question: 'Når må vi snu ulikhetstegnet?',
      options: ['Ved multiplikasjon/divisjon med negativt tall', 'Ved addisjon av samme tall på begge sider av ulikhetstegnet', 'Ved subtraksjon av samme tall på begge sider av tegnet', 'Aldri — tegnet skal alltid stå uendret'],
      explanation: 'Vi snur tegnet når vi ganger eller deler med et negativt tall.',
    },
    {
      question: 'Løs ulikheten $3x \\leq 12$.',
      options: ['$x \\leq 4$', '$x \\geq 4$', '$x \\leq 36$', '$x \\leq 9$'],
      explanation: 'Del på 3: $x \\leq 4$.',
    },
  ],
  '9-3-1': [
    {
      question: 'Hva er $f(2)$ for $f(x) = 3x + 1$?',
      options: ['$7$', '$6$', '$5$', '$4$'],
      explanation: '$f(2) = 3 \\cdot 2 + 1 = 7$.',
    },
    {
      question: 'I $f(x) = ax + b$, hva er $b$?',
      options: ['Konstantleddet (der linjen krysser y-aksen)', 'Stigningstallet, altså hvor mye y øker per enhet x', 'Nullpunktet, altså der grafen er null', 'Skjæringspunktet mellom grafen og den vannrette x-aksen'],
      explanation: '$b$ er konstantleddet — der grafen krysser y-aksen.',
    },
    {
      question: 'En graf går gjennom $(0, 4)$ og $(2, 8)$. Hva er funksjonsuttrykket?',
      options: ['$f(x) = 2x + 4$', '$f(x) = 4x + 2$', '$f(x) = 2x + 8$', '$f(x) = x + 4$'],
      explanation: '$b = 4$ (fra $(0,4)$) og $a = \\frac{8-4}{2-0} = 2$, så $f(x) = 2x + 4$.',
    },
    {
      question: 'En taxi tar 50 kr i oppstart og 15 kr/km. Hva er prisfunksjonen?',
      options: ['$P(x) = 15x + 50$', '$P(x) = 50x + 15$', '$P(x) = 65x$', '$P(x) = 15 + 50x$'],
      explanation: 'Fast gebyr 50, variabel 15 per km: $P(x) = 15x + 50$.',
    },
    {
      question: 'Hva slags graf har en lineær funksjon?',
      options: ['En rett linje', 'En parabel som buer oppover', 'En sirkel med fast radius', 'En kurve som bøyer av'],
      explanation: 'Lineære funksjoner gir alltid en rett linje.',
    },
  ],
  '9-3-2': [
    {
      question: 'Finn stigningstallet til linjen gjennom $(1, 3)$ og $(4, 9)$.',
      options: ['$2$', '$3$', '$6$', '$\\frac{1}{2}$'],
      explanation: '$a = \\frac{9 - 3}{4 - 1} = \\frac{6}{3} = 2$.',
    },
    {
      question: 'Hva er stigningstall og konstantledd i $f(x) = -3x + 7$?',
      options: ['$a = -3$, $b = 7$', '$a = 7$, $b = -3$', '$a = 3$, $b = 7$', '$a = -3$, $b = -7$'],
      explanation: 'Sammenlign med $ax + b$: $a = -3$, $b = 7$.',
    },
    {
      question: 'En graf går gjennom $(2, 5)$ og $(4, 11)$. Finn funksjonsuttrykket.',
      options: ['$f(x) = 3x - 1$', '$f(x) = 3x + 1$', '$f(x) = 2x + 1$', '$f(x) = 3x - 5$'],
      explanation: '$a = \\frac{11-5}{4-2} = 3$, og $5 = 3 \\cdot 2 + b$ gir $b = -1$.',
    },
    {
      question: 'Når er to linjer parallelle?',
      options: ['Når de har samme stigningstall', 'Når de har samme konstantledd', 'Når de krysser hverandre', 'Når stigningstallene ganger til $-1$'],
      explanation: 'To linjer er parallelle når de har samme stigningstall.',
    },
    {
      question: 'Hva betyr et negativt stigningstall?',
      options: ['Linjen synker mot høyre', 'Linjen stiger mot høyre', 'Linjen er horisontal', 'Linjen er vertikal'],
      explanation: 'Negativt stigningstall betyr at linjen synker mot høyre.',
    },
  ],
  '9-3-3': [
    {
      question: 'Hva betyr en flat (horisontal) del av en graf?',
      options: ['Verdien er konstant', 'Verdien øker', 'Verdien minker jevnt over tid', 'Rask endring'],
      explanation: 'En flat graf betyr konstant verdi.',
    },
    {
      question: 'Drivstofforbruk er lineært med $0,08$ liter/km. Hvor mye etter 50 km?',
      options: ['$4$ liter', '$8$ liter', '$0,4$ liter', '$50$ liter'],
      explanation: '$0,08 \\cdot 50 = 4$ liter.',
    },
    {
      question: 'Med forbruk $0,08$ liter/km, hvor langt kan du kjøre på 12 liter?',
      options: ['$150$ km', '$96$ km', '$1,5$ km', '$12$ km'],
      explanation: '$x = \\frac{12}{0,08} = 150$ km.',
    },
    {
      question: 'Leverandør A: $0,80x + 100$, B: $1,00x + 50$. Når koster de likt?',
      options: ['Ved 250 kWh', 'Ved 50 kWh', 'Ved 150 kWh', 'Ved 100 kWh'],
      explanation: '$0,80x + 100 = 1,00x + 50$ gir $50 = 0,20x$, så $x = 250$ kWh.',
    },
    {
      question: 'Hva betyr en brattere graf?',
      options: ['Raskere endring', 'Saktere endring', 'Ingen endring', 'Konstant verdi'],
      explanation: 'En brattere graf betyr raskere endring (større stigningstall).',
    },
  ],
  '9-4-1': [
    {
      question: 'En rettvinklet trekant har kateter 3 cm og 4 cm. Hva er hypotenusen?',
      options: ['$5$ cm', '$7$ cm', '$6$ cm', '$12$ cm'],
      explanation: '$c = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$ cm.',
    },
    {
      question: 'Hypotenusen er 13 cm og en katet 5 cm. Finn den andre kateten.',
      options: ['$12$ cm', '$8$ cm', '$18$ cm', '$144$ cm'],
      explanation: '$b = \\sqrt{13^2 - 5^2} = \\sqrt{144} = 12$ cm.',
    },
    {
      question: 'Finn diagonalen i et rektangel med sider 9 cm og 12 cm.',
      options: ['$15$ cm', '$21$ cm', '$225$ cm', '$11$ cm'],
      explanation: '$d = \\sqrt{9^2 + 12^2} = \\sqrt{225} = 15$ cm.',
    },
    {
      question: 'Hva er Pytagoras\' setning?',
      options: ['$a^2 + b^2 = c^2$', '$a + b = c$', '$a^2 - b^2 = c^2$', '$a \\cdot b = c$'],
      explanation: 'For en rettvinklet trekant: $a^2 + b^2 = c^2$, der $c$ er hypotenusen.',
    },
    {
      question: 'Hva er avstandsformelen mellom to punkter?',
      options: ['$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$', '$d = (x_2 - x_1) + (y_2 - y_1)$', '$d = \\sqrt{x_2 + y_2}$', '$d = x_2 - x_1$'],
      explanation: 'Avstandsformelen følger av Pytagoras: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.',
    },
  ],
  '9-4-2': [
    {
      question: 'Hva kjennetegner formlike figurer?',
      options: ['Like vinkler og samme forholdstall mellom sider', 'Nøyaktig samme areal, selv om vinklene er forskjellige', 'Nøyaktig samme omkrets, uansett hvilken form figurene har', 'Parvis like lange sider, men ikke nødvendigvis like vinkler'],
      explanation: 'Formlike figurer har like vinkler og samme forholdstall mellom tilsvarende sider.',
    },
    {
      question: 'To formlike trekanter har sider 3, 4, 5 cm og 6, 8, 10 cm. Hva er forholdstallet?',
      options: ['$2$', '$3$', '$0,5$', '$5$'],
      explanation: '$k = \\frac{6}{3} = 2$ (samme for alle sidene).',
    },
    {
      question: 'På målestokk 1:50 er et rom 4 cm bredt på tegningen. Hvor bredt i virkeligheten?',
      options: ['$200$ cm', '$50$ cm', '$54$ cm', '$2$ cm'],
      explanation: '$4 \\cdot 50 = 200$ cm $= 2$ m.',
    },
    {
      question: 'Hvis forholdstallet er $k$, hva er forholdet mellom arealene?',
      options: ['$k^2$', '$k$', '$k^3$', '$2k$'],
      explanation: 'Arealet skaleres med $k^2$.',
    },
    {
      question: 'Et tre kaster 15 m skygge. En pinne på 1 m kaster 0,75 m skygge. Hvor høyt er treet?',
      options: ['$20$ m', '$15$ m', '$11,25$ m', '$0,75$ m'],
      explanation: '$k = \\frac{15}{0,75} = 20$, så treet er $1 \\cdot 20 = 20$ m.',
    },
  ],
  '9-4-3': [
    {
      question: 'Finn arealet av en trekant med grunnlinje 8 cm og høyde 5 cm.',
      options: ['$20 \\text{ cm}^2$', '$40 \\text{ cm}^2$', '$13 \\text{ cm}^2$', '$26 \\text{ cm}^2$'],
      explanation: '$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = 20 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er formelen for volum av en kule?',
      options: ['$V = \\frac{4}{3} \\pi r^3$', '$V = \\pi r^2 h$', '$V = \\frac{1}{3} \\pi r^2 h$', '$V = 4\\pi r^2$'],
      explanation: 'Volum av kule: $V = \\frac{4}{3} \\pi r^3$.',
    },
    {
      question: 'Finn volumet av en sylinder med radius 3 cm og høyde 10 cm.',
      options: ['$90\\pi \\text{ cm}^3$', '$30\\pi \\text{ cm}^3$', '$60\\pi \\text{ cm}^3$', '$9\\pi \\text{ cm}^3$'],
      explanation: '$V = \\pi r^2 h = \\pi \\cdot 9 \\cdot 10 = 90\\pi \\text{ cm}^3$.',
    },
    {
      question: 'Hva er formelen for volum av en kjegle?',
      options: ['$V = \\frac{1}{3} \\pi r^2 h$', '$V = \\pi r^2 h$', '$V = \\frac{4}{3} \\pi r^3$', '$V = \\frac{1}{3} G \\cdot h$'],
      explanation: 'Volum av kjegle: $V = \\frac{1}{3} \\pi r^2 h$.',
    },
    {
      question: 'Hva er overflaten av en sylinder?',
      options: ['$2\\pi r^2 + 2\\pi r h$', '$\\pi r^2 h$', '$4\\pi r^2$', '$2\\pi r h$'],
      explanation: 'To grunnflater $2\\pi r^2$ pluss mantel $2\\pi r h$.',
    },
  ],
  '9-4-4': [
    {
      question: 'Hvilke verktøy bruker vi til geometriske konstruksjoner?',
      options: ['Passer og umerket linjal', 'Gradskive, kalkulator og vinkelmåler', 'Linjal med målestokk', 'Vinkelhake og passer, uten linjal'],
      explanation: 'Konstruksjoner gjøres med passer og umerket linjal — uten å måle.',
    },
    {
      question: 'Hva er midtnormalen til et linjestykke AB?',
      options: ['Linjen vinkelrett på AB gjennom midtpunktet', 'En linje som går parallelt med AB gjennom midtpunktet', 'En vinkelhalveringslinje ut fra det ene endepunktet', 'En diagonal i en firkant over AB'],
      explanation: 'Midtnormalen står vinkelrett på AB og går gjennom midtpunktet.',
    },
    {
      question: 'Hva gjør en halveringslinje?',
      options: ['Deler en vinkel i to like deler', 'Deler en av sidene i to like deler', 'Tegner en sirkel rundt hjørnet', 'Lager en rett vinkel'],
      explanation: 'Halveringslinjen deler en vinkel i to like store deler.',
    },
    {
      question: 'Hvilken vinkel får vi naturlig fra en likesidet trekant?',
      options: ['$60°$', '$90°$', '$45°$', '$30°$'],
      explanation: 'En likesidet trekant har vinkler på $60°$, som vi konstruerer med passer.',
    },
    {
      question: 'Hva er den omskrevne sirkelen til en trekant?',
      options: ['Sirkelen gjennom alle hjørnene', 'Sirkelen som tangerer alle sidene', 'En sirkel med radius lik en side', 'Sirkelen rundt tyngdepunktet'],
      explanation: 'Den omskrevne sirkelen går gjennom alle hjørnene (finnes med midtnormaler).',
    },
  ],
  '9-5-1': [
    {
      question: 'Hva er formelen for rentesrente?',
      options: ['$K_n = K_0 \\cdot (1 + r)^n$', '$K_n = K_0 \\cdot r \\cdot n$', '$K_n = K_0 + r \\cdot n$', '$K_n = K_0 \\cdot n$'],
      explanation: 'Rentesrente: $K_n = K_0 \\cdot (1 + r)^n$.',
    },
    {
      question: 'Du setter inn 10 000 kr med 3 % rente. Hvor mye rente får du etter 1 år (enkel rente)?',
      options: ['$300$ kr', '$3000$ kr', '$30$ kr', '$103$ kr'],
      explanation: 'Rente $= K \\cdot r = 10\\,000 \\cdot 0,03 = 300$ kr.',
    },
    {
      question: 'Hva er vekstfaktoren ved 3 % rente?',
      options: ['$1,03$', '$0,97$', '$3$', '$0,03$'],
      explanation: 'Vekstfaktor $= 1 + r = 1,03$.',
    },
    {
      question: '10 000 kr med 3 % rente i 3 år (rentesrente) gir omtrent:',
      options: ['$10\\,927$ kr', '$10\\,900$ kr', '$10\\,300$ kr', '$13\\,000$ kr'],
      explanation: '$10\\,000 \\cdot 1,03^3 \\approx 10\\,927$ kr.',
    },
    {
      question: 'Hvordan finner du startkapitalen når du kjenner sluttverdien?',
      options: ['$K_0 = \\frac{K_n}{(1 + r)^n}$', '$K_0 = K_n \\cdot (1 + r)^n$', '$K_0 = K_n - r$', '$K_0 = K_n \\cdot r$'],
      explanation: 'Vi deler sluttverdien på vekstfaktoren: $K_0 = \\frac{K_n}{(1 + r)^n}$.',
    },
  ],
  '9-5-2': [
    {
      question: 'Hva kjennetegner et serielån?',
      options: ['Like store avdrag hver termin', 'Like store terminbeløp gjennom hele lånetiden', 'Ingen renter i det hele tatt gjennom lånetiden', 'Bare ett avdrag til slutt'],
      explanation: 'Serielån har like store avdrag; terminbeløpet synker over tid.',
    },
    {
      question: 'Hva er terminbeløpet?',
      options: ['Avdrag + rente', 'Bare avdraget', 'Bare renten på lånet', 'Den gjenstående restgjelden'],
      explanation: 'Terminbeløp $=$ avdrag $+$ rente.',
    },
    {
      question: 'Et serielån på 60 000 kr over 3 år. Hva er det årlige avdraget?',
      options: ['$20\\,000$ kr', '$60\\,000$ kr', '$3600$ kr', '$23\\,600$ kr'],
      explanation: 'Avdrag $= \\frac{60\\,000}{3} = 20\\,000$ kr.',
    },
    {
      question: 'Serielån 60 000 kr, 6 % rente. Hva er renten første år?',
      options: ['$3600$ kr', '$2400$ kr', '$6000$ kr', '$600$ kr'],
      explanation: 'Rente $= 60\\,000 \\cdot 0,06 = 3600$ kr.',
    },
    {
      question: 'Hva kjennetegner et annuitetslån?',
      options: ['Like store terminbeløp', 'Like store avdrag hver termin', 'Synkende terminbeløp', 'Stigende rentesats'],
      explanation: 'Annuitetslån har like store terminbeløp hele nedbetalingstiden.',
    },
  ],
  '9-5-3': [
    {
      question: 'Hva er overskudd i et budsjett?',
      options: ['Inntekt minus utgifter', 'Utgifter minus inntekt', 'Bare inntekt', 'Bare utgifter'],
      explanation: 'Overskudd $=$ inntekt $-$ utgifter (positivt = du sparer).',
    },
    {
      question: 'Emil har 8000 kr inntekt og 5950 kr i utgifter. Hva er overskuddet?',
      options: ['$2050$ kr', '$3000$ kr', '$13\\,950$ kr', '$5950$ kr'],
      explanation: '$8000 - 5950 = 2050$ kr.',
    },
    {
      question: 'Hva er forskjellen på faste og variable utgifter?',
      options: ['Faste er like hver måned, variable varierer', 'Faste varierer, variable er like', 'Begge utgiftstypene er like store hver eneste måned', 'Begge utgiftstypene varierer fra måned til måned'],
      explanation: 'Faste utgifter (husleie) er like hver måned; variable (mat, klær) varierer.',
    },
    {
      question: 'Etter 50/30/20-regelen, hvor mye av 25 000 kr går til sparing?',
      options: ['$5000$ kr', '$12\\,500$ kr', '$7500$ kr', '$2500$ kr'],
      explanation: '20 % til sparing: $25\\,000 \\cdot 0,20 = 5000$ kr.',
    },
    {
      question: 'Sara vil spare 24 000 kr på 12 måneder. Hvor mye per måned?',
      options: ['$2000$ kr', '$24\\,000$ kr', '$1200$ kr', '$240$ kr'],
      explanation: '$\\frac{24\\,000}{12} = 2000$ kr per måned.',
    },
  ],
  '9-6-1': [
    {
      question: 'Finn gjennomsnittet av $4, 7, 2, 7, 5, 7, 3$.',
      options: ['$5$', '$7$', '$4$', '$35$'],
      explanation: 'Sum $= 35$, antall $= 7$: $\\frac{35}{7} = 5$.',
    },
    {
      question: 'Hva er typetallet i $4, 7, 2, 7, 5, 7, 3$?',
      options: ['$7$', '$5$', '$4$', '$2$'],
      explanation: 'Typetallet er verdien som forekommer oftest, her $7$ (3 ganger).',
    },
    {
      question: 'Finn variasjonsbredden til $10, 15, 12, 18, 14$.',
      options: ['$8$', '$18$', '$10$', '$14$'],
      explanation: 'Variasjonsbredde $= 18 - 10 = 8$.',
    },
    {
      question: 'Hva er medianen til $2, 3, 4, 5, 7, 7, 7$ (7 verdier)?',
      options: ['$5$', '$4$', '$7$', '$4,5$'],
      explanation: 'Med 7 sorterte verdier er medianen den 4. verdien: $5$.',
    },
    {
      question: 'Hvilket sentralmål er mest robust mot ekstremverdier?',
      options: ['Median', 'Gjennomsnitt', 'Variasjonsbredde', 'Sum'],
      explanation: 'Medianen påvirkes lite av ekstremverdier, mens gjennomsnittet påvirkes sterkt.',
    },
  ],
  '9-6-2': [
    {
      question: 'Hvilket diagram passer best for utvikling over tid?',
      options: ['Linjediagram', 'Sektordiagram', 'Stolpediagram', 'Histogram'],
      explanation: 'Linjediagram viser utvikling over tid.',
    },
    {
      question: 'Hvilket diagram passer best for andeler av en helhet?',
      options: ['Sektordiagram', 'Linjediagram over tid', 'Histogram med søyler', 'Punktdiagram med to variabler'],
      explanation: 'Sektordiagram (kakediagram) viser andeler som summer til 100 %.',
    },
    {
      question: 'En kategori utgjør 40 %. Hvor stor sektorvinkel gir det?',
      options: ['$144°$', '$40°$', '$90°$', '$360°$'],
      explanation: '$0,40 \\cdot 360° = 144°$.',
    },
    {
      question: 'Hvorfor kan et diagram med y-akse som starter på 950 villede?',
      options: ['Små forskjeller ser dramatiske ut', 'Det er alltid feil å vise data i et diagram med akser', 'Alle tallene blir negative', 'Det viser altfor mange datapunkter samtidig'],
      explanation: 'Når y-aksen ikke starter på 0, ser små forskjeller mye større ut enn de er.',
    },
    {
      question: 'Hvilket diagram passer best for å sammenligne antall elever per fag?',
      options: ['Stolpediagram', 'Linjediagram', 'Sektordiagram', 'Boksplott'],
      explanation: 'Stolpediagram er best for å sammenligne kategoriske data.',
    },
  ],
  '9-6-3': [
    {
      question: 'Hva er $P(\\text{ess})$ ved trekking fra en kortstokk på 52 kort?',
      options: ['$\\frac{1}{13}$', '$\\frac{1}{4}$', '$\\frac{4}{13}$', '$\\frac{1}{52}$'],
      explanation: '4 ess av 52 kort: $\\frac{4}{52} = \\frac{1}{13}$.',
    },
    {
      question: 'Du kaster en mynt og en terning. Hva er $P(\\text{kron og 6})$?',
      options: ['$\\frac{1}{12}$', '$\\frac{1}{8}$', '$\\frac{2}{8}$', '$\\frac{1}{6}$'],
      explanation: 'Produktregelen: $\\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$.',
    },
    {
      question: 'En pose har 4 røde, 3 blå, 5 grønne. Hva er $P(\\text{rød eller blå})$?',
      options: ['$\\frac{7}{12}$', '$\\frac{1}{12}$', '$\\frac{4}{12}$', '$\\frac{12}{12}$'],
      explanation: 'Sumregelen: $\\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$.',
    },
    {
      question: 'Du kaster to terninger. Hva er $P(\\text{sum} = 7)$?',
      options: ['$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{7}{36}$', '$\\frac{1}{36}$'],
      explanation: '6 gunstige utfall av 36: $\\frac{6}{36} = \\frac{1}{6}$.',
    },
    {
      question: 'Hva er komplementregelen?',
      options: ['$P(\\text{ikke } A) = 1 - P(A)$', '$P(\\text{ikke } A) = P(A)$', '$P(\\text{ikke } A) = 1 + P(A)$', '$P(\\text{ikke } A) = \\frac{1}{P(A)}$'],
      explanation: 'Komplementregelen: $P(\\text{ikke } A) = 1 - P(A)$.',
    },
  ],
  '9-7-1': [
    {
      question: 'Hva er formelen for det $n$-te leddet i en aritmetisk følge?',
      options: ['$a_n = a_1 + (n - 1) \\cdot d$', '$a_n = a_1 \\cdot k^{n-1}$', '$a_n = a_1 + n \\cdot d$', '$a_n = n^2$'],
      explanation: 'For en aritmetisk følge: $a_n = a_1 + (n - 1) \\cdot d$.',
    },
    {
      question: 'Hva er det 20. leddet i følgen $4, 9, 14, 19, \\ldots$?',
      options: ['$99$', '$95$', '$104$', '$100$'],
      explanation: '$d = 5$: $a_{20} = 4 + 19 \\cdot 5 = 4 + 95 = 99$.',
    },
    {
      question: 'Hva er kvotienten i den geometriske følgen $2, 6, 18, 54, \\ldots$?',
      options: ['$3$', '$4$', '$2$', '$6$'],
      explanation: '$k = \\frac{6}{2} = 3$.',
    },
    {
      question: 'En bakteriekultur starter med 50 og dobles hver time. Hvor mange etter 10 timer?',
      options: ['$51\\,200$', '$500$', '$5120$', '$1024$'],
      explanation: '$a_{11} = 50 \\cdot 2^{10} = 50 \\cdot 1024 = 51\\,200$.',
    },
    {
      question: 'Hva er formelen for det $n$-te leddet i en geometrisk følge?',
      options: ['$a_n = a_1 \\cdot k^{n-1}$', '$a_n = a_1 + (n-1)d$', '$a_n = a_1 \\cdot k^n$', '$a_n = k \\cdot n$'],
      explanation: 'For en geometrisk følge: $a_n = a_1 \\cdot k^{n-1}$.',
    },
  ],
  '9-7-2': [
    {
      question: 'Hva er formelen for trekanttall nr. $n$?',
      options: ['$T_n = \\frac{n(n+1)}{2}$', '$T_n = n^2$', '$T_n = 2n$', '$T_n = n + 1$'],
      explanation: '$T_n = 1 + 2 + \\cdots + n = \\frac{n(n+1)}{2}$.',
    },
    {
      question: 'Hva er $T_{10}$ (det 10. trekanttallet)?',
      options: ['$55$', '$45$', '$66$', '$50$'],
      explanation: '$T_{10} = \\frac{10 \\cdot 11}{2} = 55$.',
    },
    {
      question: 'Hva er formelen for femkanttall?',
      options: ['$P_n = \\frac{n(3n - 1)}{2}$', '$P_n = n^2$', '$P_n = \\frac{n(n+1)}{2}$', '$P_n = 5n$'],
      explanation: 'Femkanttall: $P_n = \\frac{n(3n - 1)}{2}$.',
    },
    {
      question: 'For et fyrstikkmønster $4, 7, 10, 13$, hva er formelen for figur $n$?',
      options: ['$F_n = 3n + 1$', '$F_n = 4n$', '$F_n = 3n - 1$', '$F_n = n + 3$'],
      explanation: 'Aritmetisk med $d = 3$, $a_1 = 4$: $F_n = 4 + (n-1) \\cdot 3 = 3n + 1$.',
    },
    {
      question: 'Hva gir summen av to påfølgende trekanttall, $T_{n-1} + T_n$?',
      options: ['Et kvadrattall $n^2$', 'Et femkanttall', 'Et primtall uten unntak', 'Et oddetall, aldri et partall'],
      explanation: '$T_{n-1} + T_n = n^2$, et kvadrattall. F.eks. $T_2 + T_3 = 3 + 6 = 9 = 3^2$.',
    },
  ],
  '9-7-3': [
    {
      question: 'Når er formelen for et mønster lineær?',
      options: ['Når de første differansene er konstante', 'Når de andre differansene mellom leddene er konstante', 'Når alle leddene i følgen er primtall', 'Når kvotienten mellom to nabo-ledd er konstant'],
      explanation: 'Konstante første differanser gir en lineær formel $a_n = dn + c$.',
    },
    {
      question: 'For mønsteret $6, 11, 16, 21$, hva er formelen?',
      options: ['$F_n = 5n + 1$', '$F_n = 5n$', '$F_n = 6n$', '$F_n = 5n - 1$'],
      explanation: '$d = 5$, $a_1 = 6 = 5 \\cdot 1 + c$ gir $c = 1$, så $F_n = 5n + 1$.',
    },
    {
      question: 'Med formelen $F_n = 5n + 1$, hvilken figur har 201 fyrstikker?',
      options: ['Figur 40', 'Figur 41', 'Figur 200', 'Figur 39'],
      explanation: '$5n + 1 = 201$ gir $5n = 200$, så $n = 40$.',
    },
    {
      question: 'Når er formelen for et mønster kvadratisk?',
      options: ['Når de andre differansene er konstante', 'Når de første differansene er konstante', 'Når leddene dobles', 'Aldri'],
      explanation: 'Konstante andre differanser gir en kvadratisk formel $a_n = an^2 + bn + c$, der $a = \\frac{\\Delta_2}{2}$.',
    },
    {
      question: 'For følgen $3, 8, 15, 24, 35$ er andre differanse 2. Hva er formelen?',
      options: ['$a_n = n^2 + 2n$', '$a_n = n^2$', '$a_n = 2n^2$', '$a_n = n^2 + n$'],
      explanation: '$a = \\frac{2}{2} = 1$, og innsetting gir $a_n = n^2 + 2n = n(n+2)$.',
    },
  ],
  '9-7-4': [
    {
      question: 'Hva kjennetegner en rekursiv formel?',
      options: ['Den beskriver hvert ledd ut fra de foregående', 'Den gir leddet direkte fra $n$', 'Den trenger ingen oppgitt startverdi i det hele tatt', 'Den gjelder bare for kvadrattall'],
      explanation: 'En rekursiv formel beregner hvert ledd ut fra forrige ledd og trenger en startverdi.',
    },
    {
      question: 'For $a_1 = 4$, $a_{n+1} = a_n + 6$, hva er den eksplisitte formelen?',
      options: ['$a_n = 6n - 2$', '$a_n = 6n + 4$', '$a_n = 4n + 6$', '$a_n = 6n$'],
      explanation: 'Aritmetisk med $a_1 = 4$, $d = 6$: $a_n = 4 + (n-1) \\cdot 6 = 6n - 2$.',
    },
    {
      question: 'For $a_n = 6n - 2$, hva er $a_{50}$?',
      options: ['$298$', '$300$', '$302$', '$296$'],
      explanation: '$a_{50} = 6 \\cdot 50 - 2 = 298$.',
    },
    {
      question: 'For den eksplisitte formelen $a_n = 3 \\cdot 2^{n-1}$, hva er den rekursive?',
      options: ['$a_1 = 3$, $a_{n+1} = 2a_n$', '$a_1 = 3$, $a_{n+1} = a_n + 2$', '$a_1 = 2$, $a_{n+1} = 3a_n$', '$a_1 = 3$, $a_{n+1} = 3a_n$'],
      explanation: 'Geometrisk med $k = 2$: $a_1 = 3$, $a_{n+1} = 2a_n$.',
    },
    {
      question: 'Hvilket tall nærmer forholdet $\\frac{a_{n+1}}{a_n}$ seg i Fibonacci-følgen?',
      options: ['Det gylne snitt $\\approx 1,618$', '$2$', '$1$', '$1,5$'],
      explanation: 'Forholdet nærmer seg det gylne snitt $\\varphi = \\frac{1 + \\sqrt{5}}{2} \\approx 1,618$.',
    },
  ],
  '9-8-1': [
    {
      question: 'Hva er vinkelsummen i en polygon med $n$ sider?',
      options: ['$(n - 2) \\cdot 180°$', '$n \\cdot 180°$', '$(n - 1) \\cdot 180°$', '$360°$'],
      explanation: 'Vinkelsummen er $S = (n - 2) \\cdot 180°$.',
    },
    {
      question: 'Hva er vinkelsummen i en femkant?',
      options: ['$540°$', '$360°$', '$720°$', '$180°$'],
      explanation: '$(5 - 2) \\cdot 180° = 3 \\cdot 180° = 540°$.',
    },
    {
      question: 'Hva er hver vinkel i en regulær åttekant?',
      options: ['$135°$', '$120°$', '$108°$', '$1080°$'],
      explanation: 'Vinkelsum $= 1080°$, delt på 8 gir $135°$.',
    },
    {
      question: 'Hva er summen av de ytre vinklene i enhver konveks polygon?',
      options: ['$360°$', '$180°$', '$(n-2) \\cdot 180°$', '$540°$'],
      explanation: 'Summen av de ytre vinklene er alltid $360°$.',
    },
    {
      question: 'En regulær polygon har indre vinkler på $150°$. Hvor mange sider?',
      options: ['$12$', '$10$', '$8$', '$15$'],
      explanation: 'Ytre vinkel $= 30°$, og $n = \\frac{360°}{30°} = 12$.',
    },
  ],
  '9-8-2': [
    {
      question: 'Hva betyr det at to figurer er kongruente?',
      options: ['De har nøyaktig samme form og størrelse', 'De har nøyaktig samme form, men ulik størrelse', 'De har nøyaktig samme areal, men kan ha ulik form', 'De har nøyaktig samme omkrets, men kan ha ulik form'],
      explanation: 'Kongruente figurer har nøyaktig samme form og størrelse.',
    },
    {
      question: 'Hva sier SSS-setningen?',
      options: ['Tre par like sider gir kongruens', 'To sider og en vinkel gir kongruens', 'To vinkler og en side gir kongruens', 'Tre like vinkler gir kongruens'],
      explanation: 'SSS (Side-Side-Side): tre par like sider gir kongruente trekanter.',
    },
    {
      question: 'Hva må gjelde for vinkelen i SAS-setningen?',
      options: ['Den må ligge mellom de to kjente sidene', 'Den må være en rett vinkel på nøyaktig 90 grader', 'Den må være den største vinkelen i trekanten', 'Den kan ligge hvor som helst'],
      explanation: 'I SAS må vinkelen ligge mellom de to kjente sidene.',
    },
    {
      question: 'Hva står ASA for?',
      options: ['Vinkel-Side-Vinkel', 'Side-Vinkel-Side', 'Side-Side-Side', 'Vinkel-Vinkel-Vinkel'],
      explanation: 'ASA: to vinkler og siden mellom dem gir kongruens.',
    },
    {
      question: 'En trekant har vinkler $40°$ og $60°$. Hva er den tredje?',
      options: ['$80°$', '$100°$', '$60°$', '$90°$'],
      explanation: '$180° - 40° - 60° = 80°$.',
    },
  ],
  '9-8-3': [
    {
      question: 'Hva sier trekantutlikheten?',
      options: ['Summen av to sider er alltid større enn den tredje', 'Alle sidene i en trekant er alltid nøyaktig like lange', 'Vinkelsummen i trekanten er $180°$', 'Hypotenusen er alltid den lengste siden i enhver trekant'],
      explanation: 'I enhver trekant er summen av to sider større enn den tredje.',
    },
    {
      question: 'Kan sidene 2, 3 og 8 danne en trekant?',
      options: ['Nei, fordi $2 + 3 < 8$', 'Ja', 'Nei, fordi de er ulike', 'Ja, fordi $8 > 5$'],
      explanation: '$2 + 3 = 5 < 8$, så de kan ikke danne en trekant.',
    },
    {
      question: 'Hva er en median i en trekant?',
      options: ['Linjestykke fra et hjørne til midtpunktet på motstående side', 'Linjen som står vinkelrett på en av sidene i trekanten fra hjørnet', 'Halveringslinjen til en av vinklene i trekanten, ut fra hjørnet', 'Den lengste av de tre sidene i trekanten'],
      explanation: 'En median går fra et hjørne til midtpunktet på den motstående siden.',
    },
    {
      question: 'I hvilket forhold deler tyngdepunktet hver median (fra hjørnet)?',
      options: ['$2:1$', '$1:1$', '$3:1$', '$1:2$'],
      explanation: 'Tyngdepunktet deler hver median i forholdet $2:1$ fra hjørnet.',
    },
    {
      question: 'Etter midtpunktssetningen: hvis $BC = 12$ cm, hva er $MN$ (mellom midtpunktene)?',
      options: ['$6$ cm', '$12$ cm', '$24$ cm', '$3$ cm'],
      explanation: '$MN = \\frac{1}{2} \\cdot BC = \\frac{1}{2} \\cdot 12 = 6$ cm.',
    },
  ],
  '9-9-1': [
    {
      question: 'Hva er volumet av en eske $25 \\times 15 \\times 10$ cm?',
      options: ['$3750 \\text{ cm}^3$', '$1550 \\text{ cm}^3$', '$375 \\text{ cm}^3$', '$50 \\text{ cm}^3$'],
      explanation: '$V = 25 \\cdot 15 \\cdot 10 = 3750 \\text{ cm}^3$.',
    },
    {
      question: 'Hva er overflaten av boksen $25 \\times 15 \\times 10$ cm?',
      options: ['$1550 \\text{ cm}^2$', '$3750 \\text{ cm}^2$', '$775 \\text{ cm}^2$', '$3100 \\text{ cm}^2$'],
      explanation: '$O = 2(375 + 250 + 150) = 2 \\cdot 775 = 1550 \\text{ cm}^2$.',
    },
    {
      question: 'Hva er volumet av en sylinder med radius 4 cm og høyde 11 cm?',
      options: ['$176\\pi \\text{ cm}^3$', '$44\\pi \\text{ cm}^3$', '$88\\pi \\text{ cm}^3$', '$120\\pi \\text{ cm}^3$'],
      explanation: '$V = \\pi r^2 h = \\pi \\cdot 16 \\cdot 11 = 176\\pi \\text{ cm}^3$.',
    },
    {
      question: 'Hvor mange liter er $3750 \\text{ cm}^3$?',
      options: ['$3,75$ liter', '$37,5$ liter', '$0,375$ liter', '$375$ liter'],
      explanation: '$1$ liter $= 1000 \\text{ cm}^3$, så $\\frac{3750}{1000} = 3,75$ liter.',
    },
    {
      question: 'Hva er formelen for volum av et prisme?',
      options: ['$V = G \\cdot h$', '$V = \\frac{1}{3} G \\cdot h$', '$V = \\pi r^2$', '$V = 2G + M$'],
      explanation: 'Volum av prisme: grunnflate ganger høyde, $V = G \\cdot h$.',
    },
  ],
  '9-9-2': [
    {
      question: 'Hva er formelen for volum av en kjegle?',
      options: ['$V = \\frac{1}{3} \\pi r^2 h$', '$V = \\pi r^2 h$', '$V = \\frac{4}{3} \\pi r^3$', '$V = \\frac{1}{3} G$'],
      explanation: 'Volum av kjegle: $V = \\frac{1}{3} \\pi r^2 h$.',
    },
    {
      question: 'En kjegle har radius 5 cm og høyde 12 cm. Hva er skråhøyden?',
      options: ['$13$ cm', '$17$ cm', '$7$ cm', '$60$ cm'],
      explanation: '$s = \\sqrt{r^2 + h^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm.',
    },
    {
      question: 'Hva er volumet av en pyramide med kvadratisk grunnflate side 6 cm og høyde 8 cm?',
      options: ['$96 \\text{ cm}^3$', '$288 \\text{ cm}^3$', '$48 \\text{ cm}^3$', '$144 \\text{ cm}^3$'],
      explanation: '$V = \\frac{1}{3} G \\cdot h = \\frac{1}{3} \\cdot 36 \\cdot 8 = 96 \\text{ cm}^3$.',
    },
    {
      question: 'Volumet av en kjegle er hvor stor del av en tilsvarende sylinder?',
      options: ['En tredjedel', 'Halvparten', 'Like stor', 'En fjerdedel'],
      explanation: 'Tredjedelsregelen: kjeglevolumet er $\\frac{1}{3}$ av tilsvarende sylinder.',
    },
    {
      question: 'En kjegle har radius 5 cm og skråhøyde 13 cm. Hva er overflaten?',
      options: ['$90\\pi \\text{ cm}^2$', '$65\\pi \\text{ cm}^2$', '$25\\pi \\text{ cm}^2$', '$120\\pi \\text{ cm}^2$'],
      explanation: '$O = \\pi r^2 + \\pi r s = 25\\pi + 65\\pi = 90\\pi \\text{ cm}^2$.',
    },
  ],
  '9-9-3': [
    {
      question: 'Hva er formelen for volum av en kule?',
      options: ['$V = \\frac{4}{3} \\pi r^3$', '$V = 4\\pi r^2$', '$V = \\frac{1}{3} \\pi r^2 h$', '$V = \\pi r^2 h$'],
      explanation: 'Volum av kule: $V = \\frac{4}{3} \\pi r^3$.',
    },
    {
      question: 'Hva er overflaten av en kule?',
      options: ['$4\\pi r^2$', '$\\frac{4}{3}\\pi r^3$', '$2\\pi r^2$', '$\\pi r^2$'],
      explanation: 'Overflate av kule: $O = 4\\pi r^2$.',
    },
    {
      question: 'En basketball har diameter 24 cm. Hva er volumet?',
      options: ['$2304\\pi \\text{ cm}^3$', '$576\\pi \\text{ cm}^3$', '$1728\\pi \\text{ cm}^3$', '$288\\pi \\text{ cm}^3$'],
      explanation: 'Radius $12$: $V = \\frac{4}{3}\\pi \\cdot 12^3 = \\frac{4}{3}\\pi \\cdot 1728 = 2304\\pi \\text{ cm}^3$.',
    },
    {
      question: 'Hva er volumet av en halvkule?',
      options: ['$\\frac{2}{3}\\pi r^3$', '$\\frac{4}{3}\\pi r^3$', '$\\frac{1}{3}\\pi r^3$', '$2\\pi r^3$'],
      explanation: 'Halvparten av kulevolumet: $V = \\frac{2}{3}\\pi r^3$.',
    },
    {
      question: 'En massiv sylinder ($250\\pi$) får et kjegleformet hull ($50\\pi$). Hva er volumet igjen?',
      options: ['$200\\pi \\text{ cm}^3$', '$300\\pi \\text{ cm}^3$', '$150\\pi \\text{ cm}^3$', '$50\\pi \\text{ cm}^3$'],
      explanation: '$250\\pi - 50\\pi = 200\\pi \\text{ cm}^3$.',
    },
  ],
  '9-10-1': [
    {
      question: 'Hva er interkvartilbredden (IQR)?',
      options: ['$Q_3 - Q_1$', '$Q_3 + Q_1$', '$Q_2 - Q_1$', 'Største − minste'],
      explanation: 'IQR $= Q_3 - Q_1$, spredningen til de midterste 50 %.',
    },
    {
      question: 'For sortert datasett med 11 verdier, hvilken er medianen ($Q_2$)?',
      options: ['Den 6. verdien', 'Den 5. verdien', 'Gjennomsnittet av 5. og 6.', 'Den 11. verdien'],
      explanation: 'Med 11 verdier er medianen verdi nummer 6.',
    },
    {
      question: 'Hvilke fem verdier viser et boksplott (femtallsoversikt)?',
      options: ['Min, $Q_1$, median, $Q_3$, maks', 'Min, gjennomsnitt, median, typetall, maks', 'Min, median, maks, sum, antall', '$Q_1$, $Q_2$, $Q_3$, $Q_4$, $Q_5$'],
      explanation: 'Femtallsoversikten: minimum, $Q_1$, median ($Q_2$), $Q_3$ og maksimum.',
    },
    {
      question: 'Hvordan defineres en uteligger (øvre)?',
      options: ['Større enn $Q_3 + 1,5 \\cdot \\text{IQR}$', 'Alt som er større enn $Q_3$', 'Større enn medianen i datasettet', 'Større enn gjennomsnittet av alle observasjonene'],
      explanation: 'En øvre uteligger ligger over $Q_3 + 1,5 \\cdot \\text{IQR}$.',
    },
    {
      question: 'For $12, 15, 18, 20, 25$ med gjennomsnitt 18, hva er summen av kvadrerte avvik?',
      options: ['$98$', '$90$', '$24,5$', '$49$'],
      explanation: '$36 + 9 + 0 + 4 + 49 = 98$.',
    },
  ],
  '9-10-2': [
    {
      question: 'Hva er problemet med en avkortet y-akse?',
      options: ['Små forskjeller ser dramatiske ut', 'Tallene på aksen blir feil', 'Den viser altfor mye data på én gang', 'Den er alltid ulovlig å bruke i statistikk'],
      explanation: 'Når y-aksen ikke starter på 0, overdrives små forskjeller.',
    },
    {
      question: 'Hva er cherry-picking?',
      options: ['Å velge bare data som støtter det man vil vise', 'Å regne ut gjennomsnittet av alle observasjonene', 'Å lage et sektordiagram i stedet for et søylediagram', 'Å bruke kalkulator i stedet for å regne det ut i hodet'],
      explanation: 'Cherry-picking er å velge ut bare de data eller tidsrom som passer.',
    },
    {
      question: 'Hva er forskjellen på korrelasjon og kausalitet?',
      options: ['Korrelasjon er samvariasjon; kausalitet er at en forårsaker den andre', 'De to begrepene betyr nøyaktig det samme', 'Kausalitet betyr samvariasjon, mens korrelasjon betyr en årsakssammenheng', 'Korrelasjon betyr alltid at den ene størrelsen er årsak til den andre endringen'],
      explanation: 'Korrelasjon = samvariasjon. Kausalitet = at A faktisk forårsaker B.',
    },
    {
      question: 'Iskremsalg og drukninger korrelerer. Hva er den skjulte variabelen?',
      options: ['Varmt vær', 'Iskrem', 'Svømmebasseng', 'Alder'],
      explanation: 'Varmt vær gir både mer iskremsalg og mer bading — en skjult variabel.',
    },
    {
      question: 'Flere brannbiler henger sammen med større brannskade. Hva forklarer dette?',
      options: ['Brannens størrelse (skjult variabel)', 'Brannbilene selv forårsaker skaden på bygningen', 'Ren tilfeldighet uten sammenheng', 'Skaden tilkaller brannbilene direkte til stedet'],
      explanation: 'Store branner gir både mer skade og krever flere brannbiler — brannstørrelsen er skjult variabel.',
    },
  ],
  '9-10-3': [
    {
      question: 'Hva er framing (innramming)?',
      options: ['Å presentere informasjon for å påvirke hvordan den oppfattes', 'Å regne ut medianen i et datasett der tallene er sortert etter størrelse', 'Å tegne et diagram som viser tallene fra en tabell', 'Å samle inn data fra et tilfeldig og representativt utvalg av befolkningen'],
      explanation: 'Framing er å presentere de samme tallene på en måte som påvirker inntrykket.',
    },
    {
      question: 'Hva er et ledende spørsmål?',
      options: ['Et spørsmål formulert for å styre svaret', 'Et nøytralt spørsmål', 'Et matematisk spørsmål', 'Et tilfeldig spørsmål'],
      explanation: 'Et ledende spørsmål er formulert slik at det styrer svaret i en bestemt retning.',
    },
    {
      question: 'En vare øker 40 % og settes så ned 40 %. Sammenlignet med originalprisen er den nå:',
      options: ['Lavere enn originalen', 'Lik originalen', 'Høyere enn originalen', 'Dobbelt så høy'],
      explanation: 'Prosentene beregnes fra ulike utgangspunkt, så den ender lavere. F.eks. $1000 \\to 1400 \\to 840$.',
    },
    {
      question: 'En jakke på 1000 kr øker 40 % og settes så ned 40 %. Hva er prisen?',
      options: ['$840$ kr', '$1000$ kr', '$600$ kr', '$1400$ kr'],
      explanation: '$1000 \\cdot 1,40 = 1400$, deretter $1400 \\cdot 0,60 = 840$ kr.',
    },
    {
      question: 'Hva spør vi om i kildekritikk av statistikk?',
      options: ['Hvem, hvordan, hva og hvorfor', 'Bare hvor mye', 'Bare gjennomsnittet', 'Bare tallene'],
      explanation: 'Sjekklisten: Hvem står bak? Hvordan ble data samlet? Hva vises (og ikke)? Hvorfor?',
    },
  ],
  '9-11-1': [
    {
      question: 'Hvilken operator bruker vi for å lage en variabel i Python?',
      options: ['`=` (tilordning)', '`==`', '`+`', '`:`'],
      explanation: 'Vi bruker tilordningsoperatoren `=`, f.eks. `alder = 14`.',
    },
    {
      question: 'Hva gir alltid `input()` tilbake?',
      options: ['Tekst (streng)', 'Et heltall', 'Et desimaltall', 'En liste'],
      explanation: '`input()` gir alltid tekst; bruk `int()` eller `float()` for å få tall.',
    },
    {
      question: 'Hva betyr modulo-operatoren `%`?',
      options: ['Resten ved divisjon', 'Multiplikasjon av to tall', 'Prosentandelen av et tall', 'Potens, altså opphøyd i'],
      explanation: '`%` gir resten ved divisjon, f.eks. `15 % 3 == 0`.',
    },
    {
      question: 'Hvilke tall gir `range(1, 101)`?',
      options: ['$1$ til $100$', '$1$ til $101$', '$0$ til $100$', '$1$ til $99$'],
      explanation: '`range(1, 101)` gir tallene fra 1 til, men ikke med, 101 — altså 1 til 100.',
    },
    {
      question: 'På hvilken indeks starter elementene i en Python-liste?',
      options: ['$0$', '$1$', '$-1$', 'Det varierer'],
      explanation: 'Lister er indeksert fra 0, så `liste[0]` er det første elementet.',
    },
  ],
  '9-11-2': [
    {
      question: 'Hvilken funksjon gir et tilfeldig heltall mellom 1 og 6?',
      options: ['`random.randint(1, 6)`', '`random.random()`', '`random.choice(6)`', '`random.range(1, 6)`'],
      explanation: '`random.randint(1, 6)` gir et tilfeldig heltall mellom 1 og 6 (begge inkludert).',
    },
    {
      question: 'Hva er en simulering?',
      options: ['Å gjenta et tilfeldig forsøk mange ganger med datamaskin', 'Å regne ut den teoretiske sannsynligheten ved hjelp av en formel', 'Å tegne et diagram over alle resultatene fra et enkelt forsøk', 'Å sortere tallene i datasettet etter størrelse'],
      explanation: 'Simulering er å bruke datamaskinen til å gjenta et tilfeldig forsøk mange ganger.',
    },
    {
      question: 'Hva er den simulerte sannsynligheten om hendelsen skjer $k$ ganger av $n$ forsøk?',
      options: ['$\\frac{k}{n}$', '$\\frac{n}{k}$', '$k \\cdot n$', '$k - n$'],
      explanation: 'Simulert sannsynlighet $P(A) \\approx \\frac{k}{n}$.',
    },
    {
      question: 'Hva sier store talls lov?',
      options: ['Simulert sannsynlighet nærmer seg den teoretiske ved mange forsøk', 'Sannsynligheten er alltid helt eksakt, uansett hvor mange forsøk man gjør', 'Flere forsøk gir alltid større avvik fra teorien', 'Sannsynligheter er helt tilfeldige tall'],
      explanation: 'Store talls lov: med mange forsøk nærmer den relative frekvensen seg den teoretiske sannsynligheten.',
    },
    {
      question: 'Hva er den teoretiske $P(\\text{sum} = 7)$ med to terninger?',
      options: ['$\\frac{6}{36}$', '$\\frac{7}{36}$', '$\\frac{1}{36}$', '$\\frac{1}{12}$'],
      explanation: '6 gunstige utfall av 36: $\\frac{6}{36} = \\frac{1}{6}$.',
    },
  ],
  '9-11-3': [
    {
      question: 'Hva er den matematiske modellen for lineær vekst?',
      options: ['$y = ax + b$', '$y = a \\cdot b^x$', '$y = x^2$', '$y = \\frac{a}{x}$'],
      explanation: 'Lineær vekst: $y = ax + b$, med fast endring $a$ per steg.',
    },
    {
      question: 'Hva er den matematiske modellen for eksponentiell vekst?',
      options: ['$y = a \\cdot b^x$', '$y = ax + b$', '$y = x^2$', '$y = a + bx$'],
      explanation: 'Eksponentiell vekst: $y = a \\cdot b^x$, med vekstfaktor $b$ per steg.',
    },
    {
      question: 'Ola sparer 500 kr/mnd, starter på 2000 kr. Når når han 10 000 kr?',
      options: ['Etter 16 måneder', 'Etter 20 måneder', 'Etter 12 måneder', 'Etter 8 måneder'],
      explanation: '$500x + 2000 = 10\\,000$ gir $500x = 8000$, så $x = 16$ måneder.',
    },
    {
      question: 'Hva er vekstfaktoren ved 5 % vekst?',
      options: ['$1,05$', '$0,95$', '$5$', '$1,5$'],
      explanation: 'Vekstfaktor $= 1 + \\frac{5}{100} = 1,05$.',
    },
    {
      question: 'Hva er numerisk løsning av en likning?',
      options: ['Å finne en tilnærmet løsning ved systematisk prøving', 'Å løse likningen helt eksakt ved hjelp av en kjent formel', 'Å tegne grafen til funksjonen', 'Å gjette på ett enkelt tall'],
      explanation: 'Numerisk løsning er å prøve mange verdier og finne den som gir minst avvik.',
    },
  ],
  '9-12-1': [
    {
      question: 'Hvis alle lengder ganges med $k$, hva skjer med arealet?',
      options: ['Det ganges med $k^2$', 'Det ganges med $k$', 'Det ganges med $k^3$', 'Det er uendret'],
      explanation: 'Areal skaleres med $k^2$ når alle lengder ganges med $k$.',
    },
    {
      question: 'Hvis alle lengder dobles ($k = 2$), hva skjer med volumet?',
      options: ['Det blir 8 ganger så stort', 'Det blir 4 ganger så stort', 'Det blir 2 ganger så stort', 'Det er uendret'],
      explanation: 'Volum skaleres med $k^3 = 2^3 = 8$.',
    },
    {
      question: 'Hva er høyden i en likesidet trekant med side 8?',
      options: ['$4\\sqrt{3}$', '$8\\sqrt{3}$', '$\\sqrt{48}$ er feil', '$4$'],
      explanation: '$h^2 + 4^2 = 8^2$ gir $h = \\sqrt{48} = 4\\sqrt{3} \\approx 6,93$.',
    },
    {
      question: 'En sylinder har $r = 10$, $h = 30$. Hva blir volumet hvis radien dobles?',
      options: ['4 ganger så stort', '2 ganger så stort', '8 ganger så stort', 'Uendret'],
      explanation: 'Radien står i annen potens, så dobling gir $2^2 = 4$ ganger volumet.',
    },
    {
      question: 'Et tre kaster 12 m skygge, en pinne på 1,5 m kaster 2 m. Hvor høyt er treet?',
      options: ['$9$ m', '$16$ m', '$12$ m', '$6$ m'],
      explanation: '$\\frac{h}{12} = \\frac{1,5}{2}$ gir $h = 12 \\cdot 0,75 = 9$ m.',
    },
  ],
  '9-12-2': [
    {
      question: 'Hva er Polyas fire steg for problemløsning?',
      options: ['Forstå, planlegge, gjennomføre, se tilbake', 'Lese oppgaven, regne ut, svare og levere besvarelsen', 'Tegne figur, måle, regne og sjekke', 'Gjette, prøve, feile og så til slutt gi opp'],
      explanation: 'Polya: forstå problemet, lag en plan, gjennomfør planen, se tilbake.',
    },
    {
      question: 'Hva betyr å jobbe baklengs?',
      options: ['Starte med svaret og jobbe tilbake til utgangspunktet', 'Lese oppgaveteksten baklengs fra slutten', 'Snu alle tallene i oppgaven rundt før man begynner å regne', 'Regne fra høyre mot venstre i stedet for fra venstre mot høyre'],
      explanation: 'Å jobbe baklengs er å starte med det kjente resultatet og gjøre omvendte operasjoner.',
    },
    {
      question: 'Et jorde har omkrets 56 m, og lengden er 4 m mer enn bredden. Hva er bredden?',
      options: ['$12$ m', '$16$ m', '$14$ m', '$10$ m'],
      explanation: '$2(b+4) + 2b = 56$ gir $4b + 8 = 56$, så $b = 12$ m.',
    },
    {
      question: 'To tall har sum 25 og produkt 150. Hva er tallene?',
      options: ['10 og 15', '5 og 20', '12 og 13', '8 og 17'],
      explanation: '$10 + 15 = 25$ og $10 \\cdot 15 = 150$.',
    },
    {
      question: 'Hva er en god grunn til å tegne en figur i en geometrioppgave?',
      options: ['Det gjør sammenhenger lettere å se', 'Det er alltid raskere enn å regne ut svaret', 'Man slipper å bruke formler', 'Det gir automatisk svaret'],
      explanation: 'En figur hjelper deg å se sammenhenger og identifisere rettvinklede trekanter osv.',
    },
  ],
  '9-12-3': [
    {
      question: 'Hvor mange deler er tentamen i matematikk vanligvis?',
      options: ['To deler (med og uten hjelpemidler)', 'Én sammenhengende del med alle hjelpemidler', 'Tre deler med hver sine hjelpemiddelregler', 'Fire deler fordelt over to eksamensdager'],
      explanation: 'Tentamen er vanligvis delt i Del 1 (uten hjelpemidler) og Del 2 (med hjelpemidler).',
    },
    {
      question: 'Hva er typisk for Del 1 av tentamen?',
      options: ['Ingen kalkulator eller hjelpemidler', 'Fri bruk av kalkulator og alle hjelpemidler', 'Bare tekstoppgaver uten regning', 'Gruppearbeid med en medelev'],
      explanation: 'Del 1 er uten hjelpemidler — tester grunnleggende ferdigheter.',
    },
    {
      question: 'Hvorfor bør du alltid vise fremgangsmåten?',
      options: ['Du kan få delpoeng selv om sluttsvaret er feil', 'Det er ikke nødvendig å vise noen som helst utregning', 'Bare det endelige sluttsvaret teller ved vurderingen', 'For å bruke opp mest mulig av tiden'],
      explanation: 'Delpoeng gis for riktig fremgangsmåte selv om sluttsvaret er feil.',
    },
    {
      question: 'Hvilke emner dekker en typisk tentamen i 9. klasse?',
      options: ['Tallregning, algebra, geometri, statistikk og sannsynlighet', 'Bare algebra og likninger, uten geometri, statistikk eller tallregning', 'Bare geometri og måling, uten algebra, statistikk eller tallregning', 'Bare statistikk og sannsynlighet, ikke algebra'],
      explanation: 'Tentamen dekker tallregning, algebra, geometri, statistikk og sannsynlighet.',
    },
    {
      question: 'Hva er en god forberedelse før tentamen?',
      options: ['Repetere viktige formler og løse gamle oppgaver', 'Lese helt nye emner kvelden før selve prøvedagen', 'Hoppe over søvnen natten før', 'Bare lese teorien i boka'],
      explanation: 'Repeter formler (areal, volum, Pytagoras, prosent), løs gamle oppgaver og sov godt.',
    },
  ],

};

export default quizData_matematikk_9;

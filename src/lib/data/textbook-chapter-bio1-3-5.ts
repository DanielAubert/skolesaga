/**
 * Biologi 1 - Kapittel 3.5: Mendels lover og arvemønstre
 *
 * Innhold:
 * - Gregor Mendel og hans erteplante-eksperimenter
 * - Sentrale begreper: gen, allel, genotype, fenotype, homozygot, heterozygot
 * - Mendels 1. lov (segregasjonsloven) med monohybrid krysning
 * - Mendels 2. lov (loven om uavhengig sortering) med dihybrid krysning
 * - Sannsynlighetsregler i genetikk
 * - Dominansvariasjoner: komplett, ufullstendig og kodominans
 * - Multiple alleler: ABO-blodtypesystemet
 * - Kjønnsbundet arv
 * - Stamtavleanalyse
 * - Unntak fra Mendels lover
 */
import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_BIO1_3_5: TextbookChapter = {
  id: 'bio1-3-5',
  courseId: 'biologi-1',
  chapterNumber: '3.5',
  title: 'Mendels lover og arvemønstre',
  description:
    'Monohybrid og dihybrid arv, dominansforhold, kjønnsbundet arv og stamtavleanalyse.',
  estimatedMinutes: 90,
  competenceGoals: [
    'Forklare Mendels 1. og 2. lov og anvende dem på genetiske krysninger',
    'Sette opp Punnett-ruter for monohybride og dihybride krysninger',
    'Beregne sannsynligheter for ulike genotyper og fenotyper i avkom',
    'Gjøre rede for ufullstendig dominans, kodominans og multiple alleler',
    'Forklare kjønnsbundet arv og hvorfor X-bundet recessiv arv rammer menn oftere',
    'Analysere stamtavler for å bestemme arvemønster',
    'Diskutere unntak fra Mendels lover, inkludert koblede gener, epistasi og polygen arv',
  ],

  // ---------------------------------------------------------------------------
  // INNHOLDSBLOKKER
  // ---------------------------------------------------------------------------
  content: [
    // ── 1. Introduksjon ─────────────────────────────────────────────────
    {
      id: 'bio1-3-5-intro',
      type: 'text' as const,
      title: 'Gregor Mendel og genetikkens fødsel',
      content:
        'Gregor Johann Mendel (1822--1884) var en augustinermunk fra det som i dag er Tsjekkia. I klosterhagen i Brno utførte han på 1860-tallet systematiske krysningsforsøk med erteplanter (*Pisum sativum*). Over åtte år studerte han tusener av planter og registrerte nøye hvordan egenskaper som frøfarge, blomsterfarge, plantehøyde og frøform ble overført fra foreldre til avkom.\n\nMendel valgte erteplanter fordi de var lette å kontrollere: han kunne både selvbefrukte og kryssbestøve dem. Han konsentrerte seg om syv egenskaper som bare fantes i to tydelig forskjellige varianter -- for eksempel gule eller grønne frø, høye eller lave planter, glatte eller rynkede frø.\n\nDet geniale med Mendels arbeid var at han brukte matematikk og statistikk. Han talte avkom i hver generasjon og oppdaget bestemte tallforhold. Resultatene publiserte han i 1866, men de ble ignorert i over 30 år. Først rundt 1900 ble Mendels arbeid gjenoppdaget uavhengig av tre forskere: Hugo de Vries, Carl Correns og Erich von Tschermak. I dag regnes Mendel som «genetikkens far».\n\nI dette kapitlet skal vi se nærmere på de lovmessighetene Mendel fant, og utvide perspektivet til arvemønstre han selv aldri kjente til.',
    },

    // ── 2. Sentrale begreper ────────────────────────────────────────────
    {
      id: 'bio1-3-5-begreper',
      type: 'text' as const,
      title: 'Sentrale begreper i genetikken',
      content:
        'For å forstå Mendels lover trenger vi et presist vokabular. Mennesker er diploide organismer -- vi har to kopier av hvert kromosom (ett fra mor og ett fra far). Et **gen** er et bestemt avsnitt av DNA som koder for en egenskap. **Locus** (flertall: loci) er den bestemte plasseringen av genet på kromosomet.\n\nHvert gen kan forekomme i ulike versjoner kalt **alleler**. Siden vi har to kopier av hvert kromosom, har vi også to alleler for hvert gen. Dersom begge allelene er like, er individet **homozygot** for dette genet. Dersom allelene er forskjellige, er individet **heterozygot**.\n\nKombinasjonen av alleler et individ har, kalles **genotypen**. Det vi kan observere -- den synlige egenskapen -- kalles **fenotypen**. Et allel som uttrykkes i fenotypen selv når individet er heterozygot, kalles **dominant** (skrives med stor bokstav, f.eks. **A**). Et allel som bare uttrykkes når individet er homozygot for det, kalles **recessivt** (skrives med liten bokstav, f.eks. **a**).\n\nI et monohybrid kryss ser vi på arv av én egenskap. I et dihybrid kryss ser vi på to egenskaper samtidig.',
    },

    // ── 3. Definisjoner ─────────────────────────────────────────────────
    {
      id: 'bio1-3-5-def-gen',
      type: 'definition' as const,
      title: 'Gen',
      content:
        'Et gen er et bestemt avsnitt av DNA på et kromosom som koder for en egenskap eller et protein. Hvert gen har en bestemt plassering (locus) på kromosomet.',
    },
    {
      id: 'bio1-3-5-def-allel',
      type: 'definition' as const,
      title: 'Allel',
      content:
        'En bestemt variant av et gen. For eksempel kan genet for frøfarge hos erteplanter ha allelet for gul farge (Y) eller allelet for grønn farge (y). Diploide organismer har to alleler for hvert gen.',
    },
    {
      id: 'bio1-3-5-def-genotype',
      type: 'definition' as const,
      title: 'Genotype',
      content:
        'Den genetiske sammensetningen til et individ for et bestemt gen eller sett av gener. Genotypen skrives med bokstavsymboler, for eksempel **YY** (homozygot dominant), **Yy** (heterozygot) eller **yy** (homozygot recessiv).',
    },
    {
      id: 'bio1-3-5-def-fenotype',
      type: 'definition' as const,
      title: 'Fenotype',
      content:
        'Det observerbare uttrykket av genotypen -- altså den synlige egenskapen. Fenotypen påvirkes av genotypen, men kan også påvirkes av miljøfaktorer. For eksempel er fenotypen «gule frø» et resultat av genotypen YY eller Yy.',
    },
    {
      id: 'bio1-3-5-def-dominant',
      type: 'definition' as const,
      title: 'Dominant allel',
      content:
        'Et allel som uttrykkes i fenotypen når det er til stede i minst én kopi. Et dominant allel «maskerer» effekten av det recessive allelet i heterozygote individer. Skrives vanligvis med stor bokstav (f.eks. A).',
    },
    {
      id: 'bio1-3-5-def-recessiv',
      type: 'definition' as const,
      title: 'Recessivt allel',
      content:
        'Et allel som bare uttrykkes i fenotypen når individet er homozygot for dette allelet (har to kopier). I heterozygote individer «skjules» det recessive allelet av det dominante. Skrives vanligvis med liten bokstav (f.eks. a).',
    },
    {
      id: 'bio1-3-5-def-heterozygot',
      type: 'definition' as const,
      title: 'Heterozygot',
      content:
        'Et individ som har to ulike alleler for et bestemt gen (f.eks. Aa). En heterozygot for et gen med dominant/recessiv arv vil ha den dominante fenotypen, men bærer det recessive allelet videre til avkommet.',
    },
    {
      id: 'bio1-3-5-def-homozygot',
      type: 'definition' as const,
      title: 'Homozygot',
      content:
        'Et individ som har to like alleler for et bestemt gen. Kan være **homozygot dominant** (AA) eller **homozygot recessiv** (aa). Homozygote individer produserer bare én type gamet for dette genet.',
    },

    // ── 4. Mendels 1. lov ───────────────────────────────────────────────
    {
      id: 'bio1-3-5-lov1',
      type: 'text' as const,
      title: 'Mendels 1. lov -- segregasjonsloven',
      content:
        'Mendels 1. lov, også kalt **segregasjonsloven** eller **spaltingsloven**, sier:\n\n> *De to allelene for en egenskap separeres (segregeres) under dannelsen av kjønnsceller (gameter), slik at hver gamet bare får ett allel.*\n\nDette betyr at et individ med genotypen Pp produserer gameter der halvparten bærer allelet P og halvparten bærer allelet p. Ved befruktning kombineres gameter tilfeldig.\n\nMendel oppdaget dette da han krysset to reinrasede (homozygote) ertelinjer: én med lilla blomster (PP) og én med hvite blomster (pp). Alle avkom i første filialgerasjon (F₁) fikk lilla blomster og genotypen Pp. Da han deretter lot F₁-plantene selvbefrukte, fikk han i F₂-generasjonen et fenotypisk forhold på omtrent **3 lilla : 1 hvit**.\n\nDette 3:1-forholdet kan forklares med en **Punnett-rute** (oppkalt etter Reginald Punnett). Ruten viser alle mulige kombinasjoner av gameter fra to foreldre:\n\n| | **P** | **p** |\n|---|---|---|\n| **P** | PP | Pp |\n| **p** | Pp | pp |\n\nGenotypeforholdet i F₂ blir **1 PP : 2 Pp : 1 pp**, altså 1:2:1.\n\nFenotypisk ser vi 3 lilla (PP + Pp + Pp) og 1 hvit (pp), altså **3:1**.',
    },
    {
      id: 'bio1-3-5-note-testcross',
      type: 'note' as const,
      title: 'Testkrysning',
      content:
        'For å finne ut om et individ med dominant fenotype er homozygot (PP) eller heterozygot (Pp), kan man utføre en **testkrysning**. Individet krysses da med et homozygot recessivt individ (pp).\n\n- Hvis **alle** avkom har dominant fenotype → forelderen var sannsynligvis PP.\n- Hvis omtrent **halvparten** av avkommet har recessiv fenotype → forelderen var Pp.\n\nEn testkrysning Pp × pp gir: 50 % Pp (dominant fenotype) og 50 % pp (recessiv fenotype).',
    },

    // ── 5. Eksempel: Monohybrid krysning ────────────────────────────────
    {
      id: 'bio1-3-5-ex-monohybrid',
      type: 'example' as const,
      title: 'Eksempel: Monohybrid krysning hos erteplanter',
      problem:
        'Hos erteplanter er gult frø (Y) dominant over grønt frø (y). To planter som begge er heterozygote (Yy) krysses. Sett opp en Punnett-rute og finn:\n\na) Genotypeforholdet i avkommet\nb) Fenotypforholdet i avkommet\nc) Sannsynligheten for at et tilfeldig avkom har grønne frø',
      solution:
        '**Punnett-rute for Yy × Yy:**\n\n| | **Y** | **y** |\n|---|---|---|\n| **Y** | YY | Yy |\n| **y** | Yy | yy |\n\n**a) Genotypeforhold:**\n- 1 YY : 2 Yy : 1 yy\n- Altså 25 % YY, 50 % Yy, 25 % yy\n\n**b) Fenotypforhold:**\n- Gult frø (YY + Yy) = 3/4 = 75 %\n- Grønt frø (yy) = 1/4 = 25 %\n- Forholdet er **3 gul : 1 grønn**\n\n**c) Sannsynlighet for grønne frø:**\n- P(yy) = 1/4 = **0,25 = 25 %**',
    },

    // ── 6. Mendels 2. lov ───────────────────────────────────────────────
    {
      id: 'bio1-3-5-lov2',
      type: 'text' as const,
      title: 'Mendels 2. lov -- loven om uavhengig sortering',
      content:
        'Mendels 2. lov, også kalt **loven om uavhengig sortering** (independent assortment), sier:\n\n> *Alleler for ulike gener sorteres uavhengig av hverandre under gametdannelsen, forutsatt at genene ligger på forskjellige kromosomer.*\n\nDette betyr at nedarvingen av frøfarge (Y/y) ikke påvirker nedarvingen av frøform (R/r) dersom disse genene ligger på forskjellige kromosompar.\n\nNår vi ser på to egenskaper samtidig, kaller vi det en **dihybrid krysning**. Et individ som er heterozygot for to gener, f.eks. YyRr, produserer fire typer gameter i like store andeler: YR, Yr, yR og yr.\n\nKrysningen YyRr × YyRr gir en 4 × 4 Punnett-rute med 16 mulige kombinasjoner. Det klassiske fenotypiske forholdet blir:\n\n**9 : 3 : 3 : 1**\n\n- 9/16 har begge dominante fenotyper (gul, glatt)\n- 3/16 har første dominant, andre recessiv (gul, rynket)\n- 3/16 har første recessiv, andre dominant (grønn, glatt)\n- 1/16 har begge recessive fenotyper (grønn, rynket)',
    },

    // ── 7. Eksempel: Dihybrid krysning ──────────────────────────────────
    {
      id: 'bio1-3-5-ex-dihybrid',
      type: 'example' as const,
      title: 'Eksempel: Dihybrid krysning hos erteplanter',
      problem:
        'Hos erteplanter er gult frø (Y) dominant over grønt (y), og glatt frø (R) er dominant over rynket (r). To planter som begge har genotypen YyRr krysses. Bruk en 4 × 4 Punnett-rute til å finne:\n\na) Fenotypforholdet i avkommet\nb) Sannsynligheten for et avkom med grønne, glatte frø\nc) Sannsynligheten for et avkom som er heterozygot for begge egenskaper',
      solution:
        '**Gameter fra YyRr:** YR, Yr, yR, yr (hver med sannsynlighet 1/4)\n\n**4 × 4 Punnett-rute:**\n\n| | **YR** | **Yr** | **yR** | **yr** |\n|---|---|---|---|---|\n| **YR** | YYRR | YYRr | YyRR | YyRr |\n| **Yr** | YYRr | YYrr | YyRr | Yyrr |\n| **yR** | YyRR | YyRr | yyRR | yyRr |\n| **yr** | YyRr | Yyrr | yyRr | yyrr |\n\n**a) Fenotypforhold (av 16):**\n- Gul, glatt (Y\\_R\\_): 9/16\n- Gul, rynket (Y\\_rr): 3/16\n- Grønn, glatt (yyR\\_): 3/16\n- Grønn, rynket (yyrr): 1/16\n- Forholdet er **9 : 3 : 3 : 1**\n\n**b) P(grønn, glatt) = P(yyR\\_):**\n- Fra ruten: yyRR + yyRr + yyRr = 3 ruter av 16\n- P = 3/16 ≈ **18,75 %**\n\n**c) P(YyRr) -- heterozygot for begge:**\n- Fra ruten: 4 ruter med YyRr av 16\n- P = 4/16 = 1/4 = **25 %**',
    },

    // ── 8. Greindiagram-metoden ─────────────────────────────────────────
    {
      id: 'bio1-3-5-greindiagram',
      type: 'text' as const,
      title: 'Greindiagram-metoden (branch diagram)',
      content:
        'For dihybride (og flergenetiske) krysninger kan et **greindiagram** være enklere enn en stor Punnett-rute. Metoden utnytter at genene sorteres uavhengig, slik at vi kan beregne sannsynlighetene separat og deretter multiplisere.\n\n**Eksempel:** YyRr × YyRr\n\nFor frøfarge (Yy × Yy):\n- 3/4 gul, 1/4 grønn\n\nFor frøform (Rr × Rr):\n- 3/4 glatt, 1/4 rynket\n\nKombinert (multiplikasjonsregelen):\n- Gul og glatt: 3/4 × 3/4 = 9/16\n- Gul og rynket: 3/4 × 1/4 = 3/16\n- Grønn og glatt: 1/4 × 3/4 = 3/16\n- Grønn og rynket: 1/4 × 1/4 = 1/16\n\nDette gir det kjente 9:3:3:1-forholdet uten å tegne en hel 4 × 4 rute.',
    },

    // ── 9. Sannsynlighetsregler ─────────────────────────────────────────
    {
      id: 'bio1-3-5-sannsynlighet',
      type: 'text' as const,
      title: 'Sannsynlighetsregler i genetikk',
      content:
        'To grunnleggende sannsynlighetsregler er sentrale i genetikk:\n\n**Multiplikasjonsregelen (OG-regelen):**\nSannsynligheten for at to uavhengige hendelser skjer *samtidig* er produktet av enkelt-sannsynlighetene.\n\n$$P(A \\text{ og } B) = P(A) \\times P(B)$$\n\n*Eksempel:* Sannsynligheten for at et avkom fra Yy × Yy er homozygot recessiv for frøfarge (yy) **og** fra Rr × Rr er homozygot recessiv for frøform (rr):\n\n$$P(yy \\text{ og } rr) = \\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}$$\n\n**Addisjonsregelen (ELLER-regelen):**\nSannsynligheten for at *minst én* av to gjensidig utelukkende hendelser skjer, er summen av enkelt-sannsynlighetene.\n\n$$P(A \\text{ eller } B) = P(A) + P(B)$$\n\n*Eksempel:* Sannsynligheten for at avkommet fra Yy × Yy har genotypen YY **eller** Yy:\n\n$$P(YY \\text{ eller } Yy) = \\frac{1}{4} + \\frac{2}{4} = \\frac{3}{4}$$\n\nDisse reglene gjør det mulig å løse komplekse genetikkproblemer uten store Punnett-ruter.',
    },

    // ── 10. Dominansvariasjoner ──────────────────────────────────────────
    {
      id: 'bio1-3-5-dominans',
      type: 'text' as const,
      title: 'Variasjoner i dominansforhold',
      content:
        'Mendel studerte egenskaper med komplett dominans, men ikke alle gener følger dette mønsteret. Det finnes tre hovedtyper dominansforhold:\n\n**1. Komplett (fullstendig) dominans**\nDet dominante allelet maskerer det recessive fullstendig. Heterozygoten ser ut nøyaktig som den homozygot dominante. Eksempel: Lilla blomster (PP og Pp ser like ut) hos erteplanter.\n\n**2. Ufullstendig dominans (intermediær arv)**\nHeterozygoten har en fenotype som ligger mellom de to homozygotene. Ingen av allelene er helt dominant.\n\n*Eksempel:* Hos løvemunn (snapdragon) gir krysning av rød (RR) × hvit (R\'R\') rosa (RR\') blomster i F₁. I F₂ får man **1 rød : 2 rosa : 1 hvit** (1:2:1).\n\n**3. Kodominans**\nBegge allelene uttrykkes fullt ut i heterozygoten -- de «blandes» ikke, men opptrer side om side.\n\n*Eksempel:* ABO-blodtypesystemet. En person med genotypen I^A I^B har blodtype AB, der både A- og B-antigener finnes på de røde blodcellene. Verken I^A eller I^B dominerer over den andre.',
    },
    {
      id: 'bio1-3-5-def-kodominans',
      type: 'definition' as const,
      title: 'Kodominans',
      content:
        'Et dominansforhold der begge allelene uttrykkes fullt ut i heterozygoten. I stedet for blanding eller at ett allel maskerer det andre, vises begge fenotypene samtidig. Klassisk eksempel: blodtype AB der både A- og B-antigener finnes på de røde blodcellene.',
    },
    {
      id: 'bio1-3-5-warning-dominans',
      type: 'warning' as const,
      title: 'Vanlig misforståelse om dominans',
      content:
        'Dominant betyr **ikke** at allelet er vanligere i populasjonen, og det betyr **ikke** at det er «bedre». Dominans handler bare om hvordan allelet uttrykkes i fenotypen hos heterozygote individer. Et sjeldent allel kan godt være dominant, og et vanlig allel kan være recessivt.',
    },

    // ── 11. Multiple alleler: ABO-blodtyper ─────────────────────────────
    {
      id: 'bio1-3-5-abo',
      type: 'text' as const,
      title: 'Multiple alleler -- ABO-blodtypesystemet',
      content:
        'Selv om et diploid individ bare kan ha to alleler for hvert gen, kan det finnes **flere enn to alleler** i populasjonen som helhet. Et klassisk eksempel er **ABO-blodtypesystemet**, som styres av et gen med tre alleler:\n\n- **I^A** -- koder for A-antigen på røde blodceller\n- **I^B** -- koder for B-antigen\n- **i** -- koder for verken A- eller B-antigen\n\nDominansforholdene er:\n- I^A og I^B er **kodominante** med hverandre (begge uttrykkes i AB)\n- Begge er **dominante** over i\n\n**Genotyper og fenotyper:**\n\n| Genotype | Fenotype (blodtype) | Antigener | Antistoffer i plasma |\n|---|---|---|---|\n| I^A I^A eller I^A i | **A** | A | Anti-B |\n| I^B I^B eller I^B i | **B** | B | Anti-A |\n| I^A I^B | **AB** | A og B | Ingen |\n| ii | **O** | Ingen | Anti-A og Anti-B |\n\nBlodtype O kalles «universell giver» fordi de røde blodcellene mangler A- og B-antigener og dermed ikke utløser immunrespons hos mottaker. Blodtype AB kalles «universell mottaker» fordi plasmaet mangler antistoffer mot A og B.\n\n**Rh-faktoren** er et annet blodtypesystem styrt av et eget gen. Rh-positiv (Rh+) er dominant over Rh-negativ (Rh−). Kombinasjonen av ABO og Rh gir oss de vanlige blodtypebetegnelsene som A+, O−, AB+ osv.',
    },

    // ── 12. Eksempel: Blodtype-arv ──────────────────────────────────────
    {
      id: 'bio1-3-5-ex-blodtype',
      type: 'example' as const,
      title: 'Eksempel: Arv av blodtype',
      problem:
        'En kvinne med blodtype A og en mann med blodtype B får et barn med blodtype O.\n\na) Hva er foreldrenes genotyper?\nb) Hvilke blodtyper kan de øvrige barna deres ha, og med hvilke sannsynligheter?\nc) Hva er sannsynligheten for at neste barn har blodtype AB?',
      solution:
        '**a) Foreldrenes genotyper:**\nBarnet har blodtype O, altså genotype **ii**. Barnet må ha fått ett i-allel fra hver forelder.\n- Moren har blodtype A, men bærer et i-allel → genotype **I^A i**\n- Faren har blodtype B, men bærer et i-allel → genotype **I^B i**\n\n**b) Punnett-rute for I^A i × I^B i:**\n\n| | **I^B** | **i** |\n|---|---|---|\n| **I^A** | I^A I^B | I^A i |\n| **i** | I^B i | ii |\n\nMulige blodtyper:\n- **AB** (I^A I^B): 1/4 = 25 %\n- **A** (I^A i): 1/4 = 25 %\n- **B** (I^B i): 1/4 = 25 %\n- **O** (ii): 1/4 = 25 %\n\nAlle fire blodtyper er mulige, hver med 25 % sannsynlighet.\n\n**c)** P(blodtype AB) = P(I^A I^B) = **1/4 = 25 %**',
    },

    // ── 13. Kjønnsbundet arv ────────────────────────────────────────────
    {
      id: 'bio1-3-5-kjonnsbundet',
      type: 'text' as const,
      title: 'Kjønnsbundet arv',
      content:
        'Mennesket har 23 par kromosomer: 22 par autosomer og 1 par kjønnskromosomer. Kvinner har to X-kromosomer (XX) og menn har ett X og ett Y (XY). Gener som ligger på kjønnskromosomene, nedarves forskjellig fra gener på autosomene.\n\n**X-bundet recessiv arv** er den vanligste formen for kjønnsbundet arv. Eksempler inkluderer:\n- **Rød-grønn fargeblindhet** (omtrent 8 % av menn, < 1 % av kvinner)\n- **Hemofili** (blødersykdom)\n- **Duchennes muskeldystrofi**\n\nVi bruker notasjonen X^A for det dominante allelet og X^a for det recessive allelet:\n\n| Genotype | Fenotype |\n|---|---|\n| X^A X^A | Normal kvinne |\n| X^A X^a | Bærer-kvinne (normal fenotype, bærer det recessive allelet) |\n| X^a X^a | Rammet kvinne |\n| X^A Y | Normal mann |\n| X^a Y | Rammet mann |\n\n**Hvorfor rammes menn oftere?**\nMenn har bare ett X-kromosom. Dersom de arver det recessive allelet fra mor, har de ingen «reservekopi» fra et andre X-kromosom. Kvinner må arve det recessive allelet fra *begge* foreldrene for å bli rammet.\n\nEn bærerkvinna (X^A X^a) har 50 % sjanse for å overføre det recessive allelet til hvert barn. Sønner som arver det, blir rammet. Døtre som arver det, blir bærere (med mindre faren også er rammet).\n\n**X-bundet dominant arv** er sjelden, men forekommer (f.eks. vitamin D-resistent rakitt). Her er det nok med ett dominant allel på X-kromosomet for å uttrykke egenskapen.\n\n**Y-bundet arv** er svært sjelden fordi Y-kromosomet har få gener. SRY-genet (som utløser mannlig utvikling) er et eksempel.',
    },

    // ── 14. Eksempel: X-bundet arv (fargeblindhet) ─────────────────────
    {
      id: 'bio1-3-5-ex-fargeblind',
      type: 'example' as const,
      title: 'Eksempel: X-bundet arv -- fargeblindhet',
      problem:
        'En kvinne med normalt fargesyn har en far som er fargeblind. Hun gifter seg med en mann med normalt fargesyn.\n\na) Hva er genotypene til kvinnen, hennes far, og mannen hennes?\nb) Sett opp en Punnett-rute for krysningen.\nc) Hva er sannsynligheten for at en sønn er fargeblind?\nd) Hva er sannsynligheten for at en datter er bærer?',
      solution:
        'La X^N = normalt syn (dominant) og X^n = fargeblindhet (recessiv).\n\n**a) Genotyper:**\n- Farens far (fargeblind mann): X^n Y\n- Faren ga sitt X-kromosom (X^n) til datteren.\n- Kvinnen har normalt syn, men fikk X^n fra far → **X^N X^n** (bærer)\n- Mannen har normalt syn → **X^N Y**\n\n**b) Punnett-rute for X^N X^n × X^N Y:**\n\n| | **X^N** | **Y** |\n|---|---|---|\n| **X^N** | X^N X^N | X^N Y |\n| **X^n** | X^N X^n | X^n Y |\n\n**c) Sannsynlighet for fargeblind sønn:**\nSønnene er X^N Y (normalt syn) og X^n Y (fargeblind).\n- Av sønnene er 1/2 fargeblinde.\n- P(fargeblind sønn blant alle barn) = 1/4 = **25 %**\n- P(fargeblind gitt at barnet er gutt) = 1/2 = **50 %**\n\n**d) Sannsynlighet for bærer-datter:**\nDøtrene er X^N X^N (normal) og X^N X^n (bærer).\n- Av døtrene er 1/2 bærere.\n- P(bærer-datter blant alle barn) = 1/4 = **25 %**\n- P(bærer gitt at barnet er jente) = 1/2 = **50 %**',
    },

    // ── 15. Stamtavleanalyse ────────────────────────────────────────────
    {
      id: 'bio1-3-5-stamtavle',
      type: 'text' as const,
      title: 'Stamtavleanalyse (pedigree analysis)',
      content:
        'En **stamtavle** (pedigree) er et diagram som viser forekomsten av en egenskap gjennom generasjoner i en familie. Stamtavler brukes i humangenetikk fordi vi ikke kan utføre kontrollerte krysninger med mennesker.\n\n**Symboler i stamtavler:**\n- **Sirkel** = kvinne\n- **Firkant** = mann\n- **Fylt symbol** = rammet (har egenskapen/sykdommen)\n- **Åpent symbol** = ikke rammet\n- **Halvfylt sirkel** = bærer (kjent eller antatt)\n- **Horisontal linje mellom par** = parring\n- **Vertikal linje ned** = avkom\n- **Romerske tall** = generasjon (I, II, III...)\n\n**Hvordan identifisere arvemønsteret:**\n\n**Autosomal dominant:**\n- Egenskapen hopper sjelden over generasjoner\n- Rammede individer har vanligvis minst én rammet forelder\n- Rammer begge kjønn omtrent likt\n\n**Autosomal recessiv:**\n- Egenskapen kan hoppe over generasjoner (bærere)\n- To ikke-rammede foreldre kan få rammede barn\n- Rammer begge kjønn omtrent likt\n- Vanligere i familier med inngifte\n\n**X-bundet recessiv:**\n- Rammer primært menn\n- Overføres fra bærer-mødre til sønner\n- Rammede menn har vanligvis ikke-rammede foreldre\n- Aldri far-til-sønn-overføring (sønner får Y fra far)\n- Alle døtre av rammede menn er bærere',
    },

    // ── 16. Eksempel: Stamtavleanalyse ──────────────────────────────────
    {
      id: 'bio1-3-5-ex-stamtavle',
      type: 'example' as const,
      title: 'Eksempel: Stamtavleanalyse',
      problem:
        'I en familie observerer du følgende:\n- I generasjon I er begge foreldrene friske.\n- I generasjon II har de fire barn: to friske døtre, én frisk sønn og én sønn med en sjelden sykdom.\n- I generasjon III har den ene friske datteren i gen. II fått barn med en frisk mann: tre friske barn og én rammet sønn.\n\na) Er sykdommen mest sannsynlig autosomal dominant, autosomal recessiv eller X-bundet recessiv? Begrunn svaret.\nb) Bestem genotypene til individene i generasjon I.\nc) Hva er sannsynligheten for at den andre friske datteren i generasjon II er bærer?',
      solution:
        '**a) Arvemønster:**\n\n- Sykdommen er **ikke autosomal dominant** fordi begge foreldrene i gen. I er friske, men har syke barn. Ved autosomal dominant arv ville minst én forelder vanligvis vært rammet.\n\n- **Autosomal recessiv** eller **X-bundet recessiv** er mulig. La oss sjekke:\n  - Bare gutter er rammet → passer med X-bundet recessiv.\n  - I gen. III får en frisk kvinne (datter av et bærerpar) rammede sønner med en frisk mann. Dette passer godt med X-bundet recessiv arv der moren er bærer.\n  - Ingen far-til-sønn-overføring → støtter X-bundet.\n\nMest sannsynlig: **X-bundet recessiv arv**.\n\n**b) Genotyper i generasjon I:**\n- Faren: X^A Y (frisk mann -- han har normalt allel)\n- Moren: X^A X^a (bærerkvinna -- hun må bære det recessive allelet for at sønner skal bli rammet)\n\n**c) Sannsynlighet for at den andre datteren er bærer:**\n- Morens genotype: X^A X^a → sender X^A eller X^a med lik sannsynlighet\n- Farens genotype: X^A Y → sender X^A til alle døtre\n- Døtrene kan bli X^A X^A (ikke bærer) eller X^A X^a (bærer), med lik sannsynlighet.\n- Vi vet at datteren er frisk (ikke rammet), men vet ikke om hun er bærer.\n- **P(bærer) = 1/2 = 50 %**',
    },

    // ── 17. Unntak fra Mendels lover ────────────────────────────────────
    {
      id: 'bio1-3-5-unntak',
      type: 'text' as const,
      title: 'Unntak og utvidelser av Mendels lover',
      content:
        'Mendels lover gir et solid grunnlag, men arv er ofte mer komplisert enn de enkle mønstrene han beskrev.\n\n**1. Koblede gener (linked genes)**\nGener som ligger nær hverandre på *samme* kromosom, bryter med Mendels 2. lov fordi de ikke sorteres uavhengig. De arves som regel sammen. Kobling kan brytes ved **overkrysning** (crossing over) under meiose, der homologe kromosomer bytter biter. Jo lengre fra hverandre genene ligger på kromosomet, desto oftere skjer overkrysning.\n\n**2. Epistasi**\nNoen ganger påvirker et gen uttrykket av et *annet* gen. For eksempel styrer ett gen hos labrador retriever om pigment skal produseres (E/e), mens et annet gen bestemmer fargen på pigmentet (B/b). Hunder med genotypen ee blir gule uansett hva B/b-genotypen er, fordi pigmentproduksjonen er «slått av».\n\n**3. Polygen arv**\nMange egenskaper påvirkes av flere gener samtidig. Høyde hos mennesker styres av hundrevis av gener, og fenotypen varierer gradvis (kontinuerlig variasjon) i stedet for å falle i tydelige kategorier. Andre eksempler er hudfarge, vekt og intelligens.\n\n**4. Pleiotropi**\nEtt gen kan påvirke *flere* forskjellige fenotypiske egenskaper. Sigdcelleanemi skyldes en mutasjon i hemoglobin-genet. Det ene avvikende allelet påvirker ikke bare de røde blodcellenes form, men også sirkulasjon, miltfunksjon, motstand mot malaria og mange andre kroppsfunksjoner.\n\n**5. Miljøpåvirkning på fenotype**\nFenotypen er et resultat av samspill mellom genotype og miljø. Eksempler:\n- Siamesiske katter har mørkere pels på kjølige kroppsdeler (ører, poter, hale) på grunn av et temperatur-sensitivt enzym.\n- Plantehøyde påvirkes av vann, næring og lys i tillegg til genene.\n- Eneeggede tvillinger kan utvikle seg forskjellig i ulike miljøer.',
    },

    {
      id: 'bio1-3-5-note-polygen',
      type: 'note' as const,
      title: 'Polygen arv og normalfordelingskurven',
      content:
        'Når mange gener bidrar til en egenskap, og miljøet også spiller en rolle, blir fenotypfordelingen i populasjonen ofte en **normalfordelingskurve** (klokkeformet kurve). De fleste individer havner nær gjennomsnittet, og svært få befinner seg i ytterkantene. Dette er grunnen til at svært korte eller svært høye mennesker er sjeldne.',
    },

    // ── 18. Oppsummering ────────────────────────────────────────────────
    {
      id: 'bio1-3-5-oppsummering',
      type: 'text' as const,
      title: 'Oppsummering',
      content:
        '**Mendels 1. lov (segregasjonsloven):** De to allelene for et gen separeres under gametdannelsen, slik at hver gamet bare får ett allel. Monohybrid krysning mellom to heterozygote gir genotypeforhold 1:2:1 og fenotypforhold 3:1.\n\n**Mendels 2. lov (loven om uavhengig sortering):** Alleler for ulike gener på forskjellige kromosomer sorteres uavhengig. Dihybrid krysning mellom to dobbelt heterozygote gir fenotypforholdet 9:3:3:1.\n\n**Dominansvariasjoner:** Komplett dominans (3:1), ufullstendig dominans (1:2:1), kodominans (begge uttrykkes).\n\n**Multiple alleler:** ABO-blodtypesystemet har tre alleler (I^A, I^B, i) som gir fire fenotyper.\n\n**Kjønnsbundet arv:** X-bundne recessive sykdommer rammer menn oftere fordi menn bare har ett X-kromosom.\n\n**Stamtavleanalyse:** Brukes til å identifisere arvemønstre i familier. Kjennetegn hjelper oss å skille mellom autosomal dominant, autosomal recessiv og X-bundet recessiv.\n\n**Unntak fra Mendel:** Koblede gener, epistasi, polygen arv, pleiotropi og miljøpåvirkning gjør at ikke all arv følger Mendels enkle mønstre.',
    },
  ],

  // ---------------------------------------------------------------------------
  // OPPGAVER
  // ---------------------------------------------------------------------------
  exercises: [
    // ── Oppgave 1: Begreper (flervalg, lett) ────────────────────────────
    {
      id: 'bio1-3-5-ex1',
      number: '3.5.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr det at et individ er heterozygot for et gen?',
      options: [
        {
          id: 'a',
          text: 'Individet har to like alleler for genet',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Individet har to ulike alleler for genet',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Individet mangler genet helt',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Individet har tre kopier av genet',
          isCorrect: false,
        },
      ],
      solution:
        'Heterozygot betyr at individet har to *ulike* alleler for et gen, for eksempel Aa. Homozygot betyr to like alleler (AA eller aa).',
      topic: 'Begreper',
    },

    // ── Oppgave 2: Mendels 1. lov (flervalg, lett) ──────────────────────
    {
      id: 'bio1-3-5-ex2',
      number: '3.5.2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva sier Mendels 1. lov (segregasjonsloven)?',
      options: [
        {
          id: 'a',
          text: 'Gener på forskjellige kromosomer arves alltid sammen',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'De to allelene for et gen separeres under gametdannelsen slik at hver gamet bare får ett allel',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Dominante alleler er alltid vanligere enn recessive i en populasjon',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Alle egenskaper styres av nøyaktig to alleler',
          isCorrect: false,
        },
      ],
      solution:
        'Mendels 1. lov sier at de to allelene for et gen separeres (segregeres) under gametdannelsen. Hver gamet inneholder bare ett av de to allelene. Ved befruktning kombineres gameter tilfeldig.',
      topic: 'Mendels 1. lov',
    },

    // ── Oppgave 3: Monohybrid krysning (klassisk, lett) ─────────────────
    {
      id: 'bio1-3-5-ex3',
      number: '3.5.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hos erteplanter er lang stengel (T) dominant over kort stengel (t). En heterozygot plante (Tt) krysses med en homozygot recessiv plante (tt).',
      subTasks: [
        {
          label: 'a',
          task: 'Sett opp en Punnett-rute for krysningen.',
          solution:
            '| | **T** | **t** |\n|---|---|---|\n| **t** | Tt | tt |\n| **t** | Tt | tt |\n\nResultat: 2 Tt og 2 tt.',
        },
        {
          label: 'b',
          task: 'Hva er fenotypforholdet i avkommet?',
          solution:
            'Tt = lang stengel, tt = kort stengel. Fenotypforhold: **1 lang : 1 kort** (50 % : 50 %).',
          multipleChoiceOptions: [
            '1 lang : 1 kort',
            '3 lang : 1 kort',
            '1 lang : 3 kort',
            'Alle lange',
          ],
        },
        {
          label: 'c',
          task: 'Hva slags krysning kalles dette, og hva er formålet med den?',
          solution:
            'Dette er en **testkrysning**. Formålet er å finne genotypen til et individ med dominant fenotype. Ved å krysse med et homozygot recessivt individ og observere avkommet, kan man finne ut om individet er homozygot eller heterozygot.',
        },
      ],
      solution:
        'Krysningen Tt × tt gir 50 % Tt (lang) og 50 % tt (kort), altså fenotypforhold 1:1. Dette kalles en testkrysning.',
      topic: 'Monohybrid krysning',
    },

    // ── Oppgave 4: Punnett-rute (klassisk, medium) ──────────────────────
    {
      id: 'bio1-3-5-ex4',
      number: '3.5.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hos mennesker er brune øyne (B) dominant over blå øyne (b). Både Anna og Per har brune øyne. De får et barn med blå øyne.',
      subTasks: [
        {
          label: 'a',
          task: 'Hva er genotypene til Anna og Per?',
          solution:
            'Barnet har blå øyne (bb), og må ha fått ett b-allel fra hver forelder. Anna og Per har begge brune øyne, men bærer et b-allel. Genotyper: **Anna = Bb, Per = Bb**.',
        },
        {
          label: 'b',
          task: 'Sett opp en Punnett-rute og finn sannsynligheten for at neste barn har brune øyne.',
          solution:
            'Punnett-rute for Bb × Bb:\n\n| | B | b |\n|---|---|---|\n| B | BB | Bb |\n| b | Bb | bb |\n\nBrune øyne (BB + Bb + Bb) = 3/4 = **75 %**.',
        },
        {
          label: 'c',
          task: 'Hva er sannsynligheten for at et barn med brune øyne er heterozygot?',
          solution:
            'Av de 3 barna med brune øyne er 1 BB og 2 Bb. P(heterozygot | brune øyne) = 2/3 ≈ **66,7 %**.',
        },
      ],
      solution:
        'Begge foreldre er Bb. P(brune øyne) = 3/4 = 75 %. P(heterozygot gitt brune øyne) = 2/3 ≈ 66,7 %.',
      topic: 'Monohybrid krysning',
    },

    // ── Oppgave 5: Dihybrid krysning (flervalg, medium) ─────────────────
    {
      id: 'bio1-3-5-ex5',
      number: '3.5.5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'I en dihybrid krysning mellom to individer som begge er heterozygote for to uavhengige gener (AaBb × AaBb), hva er det forventede fenotypforholdet i avkommet?',
      options: [
        {
          id: 'a',
          text: '3:1',
          isCorrect: false,
        },
        {
          id: 'b',
          text: '9:3:3:1',
          isCorrect: true,
        },
        {
          id: 'c',
          text: '1:2:1',
          isCorrect: false,
        },
        {
          id: 'd',
          text: '1:1:1:1',
          isCorrect: false,
        },
      ],
      solution:
        'Krysningen AaBb × AaBb gir fenotypforhold **9:3:3:1** når begge genene viser komplett dominans og ligger på forskjellige kromosomer. 9/16 har begge dominante, 3/16 har A-dominant + B-recessiv, 3/16 har A-recessiv + B-dominant, 1/16 har begge recessive.',
      topic: 'Dihybrid krysning',
    },

    // ── Oppgave 6: Dihybrid med sannsynlighet (klassisk, medium) ────────
    {
      id: 'bio1-3-5-ex6',
      number: '3.5.6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hos marsvin er svart pels (B) dominant over brun (b), og kort pels (K) er dominant over lang (k). En svart, korthåret marsvin (BbKk) krysses med en brun, langhåret marsvin (bbkk).',
      subTasks: [
        {
          label: 'a',
          task: 'Hvilke typer gameter produserer hvert individ?',
          solution:
            'BbKk produserer fire typer gameter: BK, Bk, bK, bk (hver med sannsynlighet 1/4).\nbbkk produserer bare én type gamet: bk.',
        },
        {
          label: 'b',
          task: 'Sett opp en Punnett-rute og finn fenotypforholdet i avkommet.',
          solution:
            '| | **bk** |\n|---|---|\n| **BK** | BbKk (svart, kort) |\n| **Bk** | Bbkk (svart, lang) |\n| **bK** | bbKk (brun, kort) |\n| **bk** | bbkk (brun, lang) |\n\nFenotypforhold: **1 svart/kort : 1 svart/lang : 1 brun/kort : 1 brun/lang** (1:1:1:1).',
        },
        {
          label: 'c',
          task: 'Hva er sannsynligheten for at et avkom er brunt med kort pels?',
          solution:
            'Brun, kort pels = bbKk. Fra ruten: 1 av 4 ruter.\nP(brun, kort) = 1/4 = **25 %**.\n\nAlternativ med multiplikasjonsregelen: P(bb) = 1/2 × P(Kk) = 1/2 → 1/2 × 1/2 = 1/4 = 25 %.',
        },
      ],
      solution:
        'Krysningen BbKk × bbkk gir fenotypforhold 1:1:1:1 (fire fenotyper i like andeler, 25 % hver).',
      topic: 'Dihybrid krysning',
    },

    // ── Oppgave 7: Ufullstendig dominans (flervalg, medium) ─────────────
    {
      id: 'bio1-3-5-ex7',
      number: '3.5.7',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hos en blomsterart viser blomsterfargen ufullstendig dominans: RR gir røde blomster, RR\' gir rosa blomster, og R\'R\' gir hvite blomster. Hva er det forventede fenotypforholdet i avkommet når to rosa planter (RR\') krysses?',
      options: [
        {
          id: 'a',
          text: '3 røde : 1 hvit',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Alle rosa',
          isCorrect: false,
        },
        {
          id: 'c',
          text: '1 rød : 2 rosa : 1 hvit',
          isCorrect: true,
        },
        {
          id: 'd',
          text: '1 rød : 1 rosa : 1 hvit',
          isCorrect: false,
        },
      ],
      solution:
        'Ved ufullstendig dominans har heterozygoten en mellomliggende fenotype. Krysningen RR\' × RR\' gir: 1 RR (rød) : 2 RR\' (rosa) : 1 R\'R\' (hvit), altså **1:2:1**. Genotypeforholdet og fenotypforholdet er det samme fordi alle tre genotypene har ulik fenotype.',
      topic: 'Ufullstendig dominans',
    },

    // ── Oppgave 8: Blodtype (klassisk, medium) ──────────────────────────
    {
      id: 'bio1-3-5-ex8',
      number: '3.5.8',
      type: 'classic',
      difficulty: 'medium',
      task: 'En kvinne med blodtype AB gifter seg med en mann med blodtype O.',
      subTasks: [
        {
          label: 'a',
          task: 'Hva er genotypene til kvinnen og mannen?',
          solution:
            'Kvinnen med blodtype AB har genotype **I^A I^B**.\nMannen med blodtype O har genotype **ii**.',
        },
        {
          label: 'b',
          task: 'Sett opp en Punnett-rute og bestem hvilke blodtyper barna kan få.',
          solution:
            '| | **i** | **i** |\n|---|---|---|\n| **I^A** | I^A i | I^A i |\n| **I^B** | I^B i | I^B i |\n\nMulige genotyper: I^A i (blodtype A) og I^B i (blodtype B).\nBarna kan **bare** ha blodtype A eller blodtype B, 50 % av hvert.',
        },
        {
          label: 'c',
          task: 'Kan dette paret få et barn med blodtype O eller AB? Begrunn svaret.',
          solution:
            '**Blodtype O (ii):** Nei. Barnet må få I^A eller I^B fra moren -- hun har ikke noe i-allel å gi.\n**Blodtype AB (I^A I^B):** Nei. Barnet får bare ett allel fra mor (enten I^A eller I^B) og ett i-allel fra far.',
        },
      ],
      solution:
        'I^A I^B × ii gir bare barn med blodtype A (I^A i) eller B (I^B i), 50 % av hvert. Verken O eller AB er mulig.',
      topic: 'ABO-blodtyper',
    },

    // ── Oppgave 9: Blodtype-detektiv (klassisk, vanskelig) ──────────────
    {
      id: 'bio1-3-5-ex9',
      number: '3.5.9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'I en rettssak hevder en mann at han er faren til et barn. Moren har blodtype A, barnet har blodtype O, og mannen har blodtype AB. Kan mannen være faren? Begrunn svaret med genotyper.',
      solution:
        '**Morens genotype:** Blodtype A → I^A I^A eller I^A i. Barnet har blodtype O (ii), og må ha fått et i-allel fra mor. Altså er moren **I^A i**.\n\n**Mannens genotype:** Blodtype AB → **I^A I^B**. Han kan bare gi I^A eller I^B til barnet.\n\n**Barnets genotype:** Blodtype O → **ii**. Barnet trenger et i-allel fra hver forelder.\n\nMannen har **ingen** i-alleler å gi. Barnet har to i-alleler, men kan bare ha fått i fra mor. Fra far trengs også et i-allel, som denne mannen ikke har.\n\n**Konklusjon: Mannen kan IKKE være faren til barnet.** Barnets biologiske far må ha minst ett i-allel (genotype I^A i, I^B i, eller ii).',
      hints: [
        'Tenk over hvilke alleler mannen med blodtype AB kan gi til barnet.',
        'Hva trenger barnet med blodtype O (genotype ii) å ha fått fra faren?',
      ],
      topic: 'ABO-blodtyper',
    },

    // ── Oppgave 10: Kjønnsbundet arv (flervalg, medium) ─────────────────
    {
      id: 'bio1-3-5-ex10',
      number: '3.5.10',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Rød-grønn fargeblindhet er en X-bundet recessiv egenskap. En bærerkvinna (X^N X^n) og en fargeblind mann (X^n Y) får barn. Hva er sannsynligheten for at en datter er fargeblind?',
      options: [
        {
          id: 'a',
          text: '0 % -- ingen døtre kan bli fargeblinde',
          isCorrect: false,
        },
        {
          id: 'b',
          text: '25 % av alle barn',
          isCorrect: false,
        },
        {
          id: 'c',
          text: '50 % av døtrene',
          isCorrect: true,
        },
        {
          id: 'd',
          text: '100 % av døtrene',
          isCorrect: false,
        },
      ],
      solution:
        'Punnett-rute for X^N X^n × X^n Y:\n\n| | **X^n** | **Y** |\n|---|---|---|\n| **X^N** | X^N X^n (bærer-datter) | X^N Y (normal sønn) |\n| **X^n** | X^n X^n (fargeblind datter) | X^n Y (fargeblind sønn) |\n\nDøtrene: 1 bærer (X^N X^n) og 1 fargeblind (X^n X^n). Altså er **50 % av døtrene fargeblinde**.',
      topic: 'Kjønnsbundet arv',
    },

    // ── Oppgave 11: Kjønnsbundet arv (klassisk, vanskelig) ──────────────
    {
      id: 'bio1-3-5-ex11',
      number: '3.5.11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hemofili (blødersykdom) er en X-bundet recessiv sykdom. En frisk kvinne (som har en far med hemofili) gifter seg med en frisk mann.',
      subTasks: [
        {
          label: 'a',
          task: 'Bestem genotypen til kvinnen. Begrunn svaret.',
          solution:
            'Kvinnens far har hemofili → genotype X^h Y. Han gir sitt X-kromosom (X^h) til alle døtre. Kvinnen er frisk → hun har minst ett normalt allel X^H. Genotype: **X^H X^h** (bærer).',
        },
        {
          label: 'b',
          task: 'Sett opp en Punnett-rute for paret og bestem sannsynligheten for at en sønn har hemofili.',
          solution:
            'Kvinne: X^H X^h, Mann: X^H Y\n\n| | **X^H** | **Y** |\n|---|---|---|\n| **X^H** | X^H X^H | X^H Y |\n| **X^h** | X^H X^h | X^h Y |\n\nSønner: X^H Y (frisk) og X^h Y (hemofili) → P(hemofili gitt sønn) = **1/2 = 50 %**\nP(hemofili-sønn blant alle barn) = 1/4 = 25 %.',
        },
        {
          label: 'c',
          task: 'Kan en datter fra dette paret ha hemofili? Forklar.',
          solution:
            'Nei, en datter kan ikke ha hemofili i dette tilfellet. For å ha hemofili trenger datteren genotypen X^h X^h. Faren gir X^H (han er frisk), så alle døtre får minst ett X^H-allel. Døtrene kan bli X^H X^H (frisk) eller X^H X^h (bærer), men aldri X^h X^h.',
        },
      ],
      solution:
        'Kvinnen er X^H X^h (bærer). 50 % av sønnene vil ha hemofili. Ingen døtre kan ha hemofili fordi faren gir X^H.',
      topic: 'Kjønnsbundet arv',
    },

    // ── Oppgave 12: Stamtavle (klassisk, vanskelig) ─────────────────────
    {
      id: 'bio1-3-5-ex12',
      number: '3.5.12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'I stamtavlen nedenfor vises en arvelig sykdom i tre generasjoner. Rammede individer er markert med fylt symbol.\n\nGenerasjon I: Frisk mor (sirkel), frisk far (firkant).\nGenerasjon II: Rammet sønn, frisk datter, frisk sønn, frisk datter.\nGenerasjon III: Den friske datteren (nr. 2 i gen. II) gifter seg med en frisk mann og får: frisk datter, rammet sønn, frisk sønn.',
      subTasks: [
        {
          label: 'a',
          task: 'Er sykdommen autosomal dominant, autosomal recessiv eller X-bundet recessiv? Begrunn svaret med minst to argumenter.',
          solution:
            'Sykdommen er mest sannsynlig **X-bundet recessiv** av følgende grunner:\n1. **Bare gutter er rammet** -- i generasjon II er den rammede personen en sønn, og i generasjon III er det en sønn som er rammet. Ingen jenter er rammet.\n2. **Friske foreldre kan få rammede sønner** -- dette passer med at moren er bærer (X-bundet recessiv) eller at begge foreldre bærer et recessivt allel (autosomal recessiv). Men at bare gutter er rammet, peker sterkest mot X-bundet.\n3. **Ingen far-til-sønn-overføring** -- faren i gen. I er frisk, og den rammede i gen. II er hans sønn. Sønner får Y (ikke X) fra far, så faren kan ikke ha overført et X-bundet allel til sønnen. Sykdommen kommer fra moren.',
        },
        {
          label: 'b',
          task: 'Bestem genotypene til alle individer i generasjon I og II.',
          solution:
            '**Generasjon I:**\n- Mor: X^A X^a (bærer -- hun må ha gitt X^a til den rammede sønnen)\n- Far: X^A Y (frisk)\n\n**Generasjon II:**\n- Rammet sønn: X^a Y\n- Frisk datter (nr. 2): X^A X^A eller X^A X^a (hun kan ha arvet X^a fra mor)\n- Frisk sønn (nr. 3): X^A Y\n- Frisk datter (nr. 4): X^A X^A eller X^A X^a\n\nSiden datter nr. 2 i gen. II har en rammet sønn i gen. III, må hun være bærer: **X^A X^a**.',
        },
        {
          label: 'c',
          task: 'Hva er sannsynligheten for at datter nr. 4 i generasjon II er bærer?',
          solution:
            'Morens genotype i gen. I: X^A X^a. Farens genotype: X^A Y.\nDøtrene får X^A fra far, og X^A eller X^a fra mor med lik sannsynlighet.\n- P(X^A X^A) = 1/2\n- P(X^A X^a) = 1/2\n\nVi vet at datter nr. 4 er frisk, men ikke om hun har rammede barn. Uten mer informasjon er **P(bærer) = 1/2 = 50 %**.',
        },
      ],
      solution:
        'Sykdommen er X-bundet recessiv. Mor i gen. I er X^A X^a, far er X^A Y. Datter nr. 2 i gen. II er X^A X^a (bærer, bekreftet av rammet sønn). Datter nr. 4 har 50 % sjanse for å være bærer.',
      topic: 'Stamtavleanalyse',
    },

    // ── Oppgave 13: Sannsynlighet og flere gener (klassisk, vanskelig) ──
    {
      id: 'bio1-3-5-ex13',
      number: '3.5.13',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Hos en plante er høy stengel (H) dominant over lav (h), røde blomster (R) dominant over hvite (r), og runde blader (D) dominant over spisse (d). Alle tre genene ligger på forskjellige kromosomer. En plante med genotypen HhRrDd krysses med en plante med genotypen hhRrdd.',
      subTasks: [
        {
          label: 'a',
          task: 'Bruk greindiagram-metoden til å finne sannsynligheten for et avkom som er høyt med hvite blomster og runde blader.',
          solution:
            'Vi beregner sannsynlighetene for hvert gen separat:\n\n**H-genet (Hh × hh):**\n- P(høy, H\\_) = 1/2\n\n**R-genet (Rr × Rr):**\n- P(hvit, rr) = 1/4\n\n**D-genet (Dd × dd):**\n- P(rund, D\\_) = 1/2\n\nMultiplikasjonsregelen:\nP(høy og hvit og rund) = 1/2 × 1/4 × 1/2 = **1/16 = 6,25 %**',
        },
        {
          label: 'b',
          task: 'Hva er sannsynligheten for et avkom som er lavt med røde blomster og spisse blader?',
          solution:
            '**H-genet (Hh × hh):**\n- P(lav, hh) = 1/2\n\n**R-genet (Rr × Rr):**\n- P(rød, R\\_) = 3/4\n\n**D-genet (Dd × dd):**\n- P(spiss, dd) = 1/2\n\nP(lav og rød og spiss) = 1/2 × 3/4 × 1/2 = **3/16 = 18,75 %**',
        },
        {
          label: 'c',
          task: 'Hvor mange forskjellige fenotyper er mulige i avkommet?',
          solution:
            'Hvert gen gir 2 mulige fenotyper:\n- H-gen: høy eller lav (2)\n- R-gen: rød eller hvit (2)\n- D-gen: rund eller spiss (2)\n\nTotalt antall fenotyper: 2 × 2 × 2 = **8 forskjellige fenotyper**.',
        },
      ],
      solution:
        'P(høy, hvit, rund) = 1/16. P(lav, rød, spiss) = 3/16. Det finnes 8 mulige fenotyper.',
      topic: 'Sannsynlighet og flere gener',
    },

    // ── Oppgave 14: Kodominans og blodtyper (flervalg, medium) ──────────
    {
      id: 'bio1-3-5-ex14',
      number: '3.5.14',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken blodtype er umulig å få hos et barn dersom moren har blodtype O og faren har blodtype A?',
      options: [
        {
          id: 'a',
          text: 'Blodtype A',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'Blodtype O',
          isCorrect: false,
        },
        {
          id: 'c',
          text: 'Blodtype B',
          isCorrect: true,
        },
        {
          id: 'd',
          text: 'Det er mulig å få alle blodtypene',
          isCorrect: false,
        },
      ],
      solution:
        'Morens genotype: ii (blodtype O). Farens genotype: I^A I^A eller I^A i (blodtype A). Moren kan bare gi i-allel. Faren kan gi I^A eller i. Mulige genotyper hos barnet: I^A i (blodtype A) eller ii (blodtype O). **Blodtype B krever minst ett I^B-allel, som ingen av foreldrene har. Blodtype B og AB er derfor umulige.**',
      topic: 'ABO-blodtyper',
    },

    // ── Oppgave 15: Unntak fra Mendel (flervalg, vanskelig) ─────────────
    {
      id: 'bio1-3-5-ex15',
      number: '3.5.15',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Sigdcelleanemi er et eksempel på pleiotropi fordi:',
      options: [
        {
          id: 'a',
          text: 'Sykdommen styres av mange gener',
          isCorrect: false,
        },
        {
          id: 'b',
          text: 'En mutasjon i ett gen påvirker mange ulike kroppsfunksjoner (blodcelleform, sirkulasjon, miltfunksjon osv.)',
          isCorrect: true,
        },
        {
          id: 'c',
          text: 'Sykdommen viser ufullstendig dominans',
          isCorrect: false,
        },
        {
          id: 'd',
          text: 'Genet for sigdcelleanemi er koblet til et annet gen',
          isCorrect: false,
        },
      ],
      solution:
        '**Pleiotropi** betyr at ett gen påvirker flere forskjellige fenotypiske egenskaper. Ved sigdcelleanemi endrer en mutasjon i hemoglobin-genet (HbS) formen på de røde blodcellene fra runde til sigdformede. Denne ene endringen gir konsekvenser for mange organsystemer: dårligere oksygentransport, blokkering av blodårer, miltskade, smertekriser, og økt motstand mot malaria. Alt skyldes én genetisk endring.',
      topic: 'Unntak fra Mendel',
    },

    // ── Oppgave 16: Sammensatt oppgave (klassisk, vanskelig) ────────────
    {
      id: 'bio1-3-5-ex16',
      number: '3.5.16',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Cystisk fibrose (CF) er en autosomal recessiv sykdom. Rød-grønn fargeblindhet er X-bundet recessiv. Et par der begge har normalt syn og ingen CF ønsker å vite risikoen for barna sine. Begge er bekreftet som bærere av CF-allelet (Cc). Kvinnens bror er fargeblind.',
      subTasks: [
        {
          label: 'a',
          task: 'Hva er sannsynligheten for at kvinnen er bærer av fargeblindhet-allelet?',
          solution:
            'Kvinnens bror er fargeblind (X^n Y). Han fikk X^n fra moren. Moren er altså bærer: X^N X^n. Faren har normalt syn: X^N Y.\n\nKvinnens mulige genotyper fra mor: X^N eller X^n (50 % hver). Hun får alltid X^N fra far.\n- X^N X^N: 1/2\n- X^N X^n: 1/2\n\n**P(bærer av fargeblindhet) = 1/2 = 50 %**',
        },
        {
          label: 'b',
          task: 'Dersom kvinnen er bærer av fargeblindhet, hva er sannsynligheten for at et barn er en gutt med BÅDE cystisk fibrose og fargeblindhet?',
          solution:
            'Gitt at kvinnen er X^N X^n og mannen er X^N Y, og begge er Cc:\n\n**CF (Cc × Cc):** P(cc) = 1/4\n\n**Fargeblindhet (X^N X^n × X^N Y):** P(fargeblind gutt, X^n Y) = 1/4\n\n**Genene er uavhengige (autosomal vs. X-bundet):**\nP(gutt med CF og fargeblindhet) = 1/4 × 1/4 = **1/16 = 6,25 %**',
        },
        {
          label: 'c',
          task: 'Hva er den totale sannsynligheten for at paret får en gutt med både CF og fargeblindhet (inkludert usikkerheten om kvinnen er bærer)?',
          solution:
            'Vi bruker den totale sannsynligheten:\n\nP(gutt med CF og fargeblindhet) = P(kvinnen er bærer) × P(gutt med begge | bærer) + P(kvinnen er ikke bærer) × P(gutt med begge | ikke bærer)\n\n= 1/2 × 1/16 + 1/2 × 0\n= 1/32\n= **3,125 %**\n\nDersom kvinnen ikke er bærer av fargeblindhet, kan ingen sønner bli fargeblinde (fra dette paret), så sannsynligheten blir 0 i den grenen.',
        },
      ],
      solution:
        'P(kvinnen er bærer) = 1/2. Gitt bærer: P(gutt med CF + fargeblindhet) = 1/16. Total sannsynlighet = 1/32 ≈ 3,1 %.',
      hints: [
        'Løs CF og fargeblindhet som to uavhengige problemer, og kombiner med multiplikasjonsregelen.',
        'Husk å ta hensyn til usikkerheten om kvinnens genotype for fargeblindhet.',
      ],
      topic: 'Sammensatt genetikk',
    },
  ],
};

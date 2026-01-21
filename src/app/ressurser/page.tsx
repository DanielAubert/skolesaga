import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { BookOpen, Download, Calculator, Code, Shapes, Binary, FunctionSquare, PlusCircle, Divide, Variable, SquareFunction, type LucideIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis læringsressurser - Matematikk og programmering",
  description: "Last ned gratis læringshefte med videogjennomganger. Hoderegning, brøkregning, algebra, Python-programmering og GeoGebra. Perfekt for elever og lærere.",
  keywords: "gratis læringsressurser, matematikk hefte, Python programmering, hoderegning, algebra, brøkregning, GeoGebra, undervisningsmateriell, læringshefte",
  openGraph: {
    title: "Gratis læringsressurser - Matematikk og programmering",
    description: "Last ned gratis læringshefte med videogjennomganger for matematikk og programmering",
    type: "website",
    locale: "nb_NO",
  },
  alternates: {
    canonical: "https://skolesaga.no/ressurser"
  }
};

interface Resource {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  fileName: string;
  icon: LucideIcon;
  colorVariant: "blue" | "red" | "orange" | "amber" | "purple" | "teal" | "green" | "indigo" | "emerald";
  category: "formelark" | "hoderegning" | "grunnleggende" | "avansert" | "programmering" | "verktoy";
  level: string[];
  hasQR: boolean;
}

// Helper function to get Tailwind classes for resource colors
const getResourceColors = (colorVariant: string) => {
  const colorMap = {
    blue: {
      cardClasses: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-blue-600 dark:text-blue-400',
      buttonClasses: 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white'
    },
    red: {
      cardClasses: 'bg-red-50 dark:bg-red-950 border-red-200 dark:border-red-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-red-600 dark:text-red-400',
      buttonClasses: 'bg-red-600 dark:bg-red-500 hover:bg-red-700 dark:hover:bg-red-600 text-white'
    },
    orange: {
      cardClasses: 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-orange-600 dark:text-orange-400',
      buttonClasses: 'bg-orange-600 dark:bg-orange-500 hover:bg-orange-700 dark:hover:bg-orange-600 text-white'
    },
    amber: {
      cardClasses: 'bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-amber-600 dark:text-amber-400',
      buttonClasses: 'bg-amber-600 dark:bg-amber-500 hover:bg-amber-700 dark:hover:bg-amber-600 text-white'
    },
    purple: {
      cardClasses: 'bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-purple-600 dark:text-purple-400',
      buttonClasses: 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white'
    },
    teal: {
      cardClasses: 'bg-teal-50 dark:bg-teal-950 border-teal-200 dark:border-teal-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-teal-600 dark:text-teal-400',
      buttonClasses: 'bg-teal-600 dark:bg-teal-500 hover:bg-teal-700 dark:hover:bg-teal-600 text-white'
    },
    green: {
      cardClasses: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-green-600 dark:text-green-400',
      buttonClasses: 'bg-green-600 dark:bg-green-500 hover:bg-green-700 dark:hover:bg-green-600 text-white'
    },
    indigo: {
      cardClasses: 'bg-indigo-50 dark:bg-indigo-950 border-indigo-200 dark:border-indigo-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-indigo-600 dark:text-indigo-400',
      buttonClasses: 'bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white'
    },
    emerald: {
      cardClasses: 'bg-emerald-50 dark:bg-emerald-950 border-emerald-200 dark:border-emerald-800',
      iconBgClasses: 'bg-white/70 dark:bg-white/10',
      iconClasses: 'text-emerald-600 dark:text-emerald-400',
      buttonClasses: 'bg-emerald-600 dark:bg-emerald-500 hover:bg-emerald-700 dark:hover:bg-emerald-600 text-white'
    }
  };
  return colorMap[colorVariant as keyof typeof colorMap] || colorMap.blue;
};

const resources: Resource[] = [
  {
    id: "gh-pluss-minus",
    title: "Grunnleggende hoderegning: Pluss og minus",
    shortTitle: "GH: Pluss og minus",
    description: "Lær hvordan erfarne matematikere regner i hodet! Dette heftet avslører teknikkene som gjør hoderegning raskt og enkelt. Perfekt for elever som vil bli bedre til å regne uten kalkulator.",
    fileName: "gh-pluss-minus.pdf",
    icon: PlusCircle,
    colorVariant: "blue",
    category: "hoderegning",
    level: ["5-7", "8-10", "VG1"],
    hasQR: false
  },
  {
    id: "gh-gange-tallrekker",
    title: "Grunnleggende hoderegning: Gange, tallrekker og kvadratrot",
    shortTitle: "GH: Gange & tallrekker",
    description: "Del 2 av hoderegningsserie! Mestre multiplikasjon, identifiser mønstre i tallrekker, og lær smarte triks for kvadratrøtter. Med disse teknikkene blir hoderegning en lek!",
    fileName: "gh-gange-tallrekker-kvadratrot.pdf",
    icon: Calculator,
    colorVariant: "blue",
    category: "hoderegning",
    level: ["5-7", "8-10", "VG1"],
    hasQR: false
  },
  {
    id: "fortegn-regnerekkefolge",
    title: "Fortegn og regnerekkefølge",
    shortTitle: "Fortegn & regnerekkefølge",
    description: "Det mest grunnleggende må være på plass! Dette miniheftet brukes av undervisere for å sikre at elever har kontroll på fortegn (+ og -) og riktig rekkefølge i utregninger. Essensielt for alle som skal lære matematikk.",
    fileName: "qr-fortegn-regnerekkefolge.pdf",
    icon: Binary,
    colorVariant: "red",
    category: "grunnleggende",
    level: ["5-7", "8-10"],
    hasQR: true
  },
  {
    id: "brokregning",
    title: "Brøkregning med videogjennomgang",
    shortTitle: "Brøkregning",
    description: "Brøk behøver ikke være vanskelig! Hver eksempel og oppgave har QR-kode som leder til videogjennomgang. Lær i ditt eget tempo med visuell forklaring av addisjon, subtraksjon, multiplikasjon og divisjon av brøker.",
    fileName: "qr-brokregning.pdf",
    icon: Divide,
    colorVariant: "amber",
    category: "grunnleggende",
    level: ["5-7", "8-10", "VG1"],
    hasQR: true
  },
  {
    id: "algebra",
    title: "Algebra: Fra bokstavregning til parenteser",
    shortTitle: "Algebra",
    description: "Bokstavregning demystifisert! Lær hvordan bokstaver fungerer som tall, og mestre multiplikasjon med parenteser. QR-koder gir tilgang til forklaringer på alle eksempler. Perfekt overgang fra tall til algebra!",
    fileName: "qr-algebra.pdf",
    icon: Variable,
    colorVariant: "purple",
    category: "grunnleggende",
    level: ["8-10", "VG1"],
    hasQR: true
  },
  {
    id: "potenser",
    title: "Potenser: Grunnleggende potensregning",
    shortTitle: "Potenser",
    description: "Oppdage kraften i potenser! Lær potensreglene fra bunnen av, forstå negative og rasjonale eksponenter, og mestre potenslikninger. Essensielt for videregående matematikk.",
    fileName: "qr-potenser.pdf",
    icon: SquareFunction,
    colorVariant: "teal",
    category: "avansert",
    level: ["9-10", "VG1", "VG2"],
    hasQR: true
  },
  {
    id: "forstegradslikninger",
    title: "Førstegradslikninger med videogjennomgang",
    shortTitle: "Førstegradslikninger",
    description: "Løs likninger som en proff! Fra enkle likninger til likninger med parenteser og brøker. Hver oppgave er støttet av videoforklaring via QR-kode. Bygg solid forståelse trinn for trinn.",
    fileName: "qr-forstegradslikninger.pdf",
    icon: FunctionSquare,
    colorVariant: "green",
    category: "avansert",
    level: ["8-10", "VG1"],
    hasQR: true
  },
  {
    id: "faktorisering",
    title: "Faktorisering og kvadratsetningene",
    shortTitle: "Faktorisering",
    description: "Fra enkel til kompleks faktorisering! Mestre kvadratsetningene, abc-formelen, og nullpunktsfaktorisering. Dette heftet er nøkkelen til å forstå annengradslikninger og polynomer. Fremdeles under forbedring, men helt brukbart!",
    fileName: "qr-faktorisering-kvadratsetningene.pdf",
    icon: Shapes,
    colorVariant: "indigo",
    category: "avansert",
    level: ["9-10", "VG1", "VG2"],
    hasQR: true
  },
  {
    id: "geogebra",
    title: "CAS-guide til GeoGebra 5",
    shortTitle: "GeoGebra 5 CAS",
    description: "Bli en GeoGebra-mester! Enkelt og grundig introduksjonshefte til CAS-funksjonene i GeoGebra 5. QR-koder leder til videoforklaringer av alle eksempler. Perfekt for elever som skal bruke digitale verktøy i matematikk.",
    fileName: "qr-cas-guide-geogebra5.pdf",
    icon: Calculator,
    colorVariant: "emerald",
    category: "verktoy",
    level: ["VG1", "VG2", "VG3"],
    hasQR: true
  },
  {
    id: "python",
    title: "Python-programmering for ungdomsskole og VGS",
    shortTitle: "Python-programmering",
    description: "Lær å programmere! Alt en ungdomsskoleelev bør kunne av Python ved utgangen av 10. trinn. Fra variabler og løkker til funksjoner og lister. Praktiske eksempler og oppgaver gjør det lett å komme i gang.",
    fileName: "qr-python-programmering.pdf",
    icon: Code,
    colorVariant: "orange",
    category: "programmering",
    level: ["8-10", "VG1"],
    hasQR: true
  },
  {
    id: "python-losning",
    title: "Løsningsforslag til Python-programmering",
    shortTitle: "Python - løsninger",
    description: "Fasit for Python-heftet! Løsningsforslag til alle innføringsoppgaver 1.1-1.48. Ikke glem å se videoløsningene hvis du står fast - de gir ofte bedre forståelse enn bare å lese koden.",
    fileName: "python-losningsforslag.pdf",
    icon: Code,
    colorVariant: "orange",
    category: "programmering",
    level: ["8-10", "VG1"],
    hasQR: false
  },
  {
    id: "python-repetisjon",
    title: "Python repetisjonsark (Grunnleggende ferdigheter)",
    shortTitle: "Python - repetisjon",
    description: "Perfekt for oppstart på VGS! Repetisjonsark med fasit for både 1P og 1T. Oppgavene er selvforklarende og refererer tilbake til relevante kapitler i Python-heftet. Ideelt for å sjekke at det grunnleggende sitter.",
    fileName: "python-repetisjonsark.pdf",
    icon: Code,
    colorVariant: "orange",
    category: "programmering",
    level: ["VG1"],
    hasQR: false
  },
  {
    id: "python-formelark-ungdomsskole",
    title: "Python formelark - Ungdomsskole og VGS",
    shortTitle: "Formelark 8-VG3",
    description: "Kompakt formelark med alt det grunnleggende du trenger å vite om i Python for ungdomsskolen og VGS. Dekker variabler, løkker, funksjoner, lister og vanlige mønstre. Perfekt til eksamen eller repetisjon.",
    fileName: "python-formelark-ungdomsskole.pdf",
    icon: Code,
    colorVariant: "blue",
    category: "formelark",
    level: ["8-10", "VG1", "VG2", "VG3"],
    hasQR: false
  },
  {
    id: "python-formelark-vgs",
    title: "Python formelark - VGS (faginndelt)",
    shortTitle: "Formelark VGS",
    description: "Omfattende formelark organisert etter fag (1P, 1T, 2P, S1, R1, S2, R2). Inkluderer statistikk, numerisk derivasjon, integrasjon, simulering og mer. Tilpasset eksamen på alle nivåer.",
    fileName: "python-formelark-vgs.pdf",
    icon: Code,
    colorVariant: "purple",
    category: "formelark",
    level: ["VG1", "VG2", "VG3"],
    hasQR: false
  },
  {
    id: "geogebra-formelark-ungdomsskole",
    title: "GeoGebra 6 formelark - Ungdomsskole og VGS",
    shortTitle: "GeoGebra 8-VG3",
    description: "Kompakt formelark med de viktigste GeoGebra-kommandoene for ungdomsskolen og VGS. Dekker CAS, likninger, funksjoner, grafer, geometri og statistikk. Perfekt til eksamen.",
    fileName: "geogebra-formelark-ungdomsskole.pdf",
    icon: Calculator,
    colorVariant: "emerald",
    category: "formelark",
    level: ["8-10", "VG1", "VG2", "VG3"],
    hasQR: false
  },
  {
    id: "geogebra-formelark-vgs",
    title: "GeoGebra 6 formelark - VGS (faginndelt)",
    shortTitle: "GeoGebra VGS",
    description: "Omfattende GeoGebra-formelark organisert etter fag (1P, 1T, 2P, S1, R1, S2, R2). Inkluderer derivasjon, integrasjon, statistikk, sannsynlighet og mer. Tilpasset eksamen på alle nivåer.",
    fileName: "geogebra-formelark-vgs.pdf",
    icon: Calculator,
    colorVariant: "teal",
    category: "formelark",
    level: ["VG1", "VG2", "VG3"],
    hasQR: false
  }
];

const categoryNames = {
  formelark: "Formelark",
  hoderegning: "Hoderegning",
  grunnleggende: "Grunnleggende matematikk",
  avansert: "Avansert matematikk",
  programmering: "Programmering",
  verktoy: "Digitale verktøy"
};

export default function RessurserPage() {
  const categories = Object.keys(categoryNames) as Array<keyof typeof categoryNames>;

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-background via-background to-muted/5">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container max-w-6xl mx-auto py-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Ressurser</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container max-w-6xl mx-auto pb-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl md:text-5xl font-bold">Gratis læringsressurser</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Last ned hefte med videogjennomganger for matematikk og programmering.
              Alle ressurser er gratis og laget for norske elever.
            </p>
          </div>

          <div className="space-y-12">
            {categories.map((category) => {
              const categoryResources = resources.filter(r => r.category === category);
              if (categoryResources.length === 0) return null;

              return (
                <div key={category}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    {categoryNames[category]}
                  </h2>
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {categoryResources.map((resource) => {
                      const Icon = resource.icon;
                      const colors = getResourceColors(resource.colorVariant);
                      return (
                        <Card
                          key={resource.id}
                          className={`overflow-hidden transition-all hover:shadow-lg ${colors.cardClasses}`}
                        >
                          <CardHeader>
                            <div className="flex items-start justify-between mb-3">
                              <div className={`p-2 rounded-lg ${colors.iconBgClasses}`}>
                                <Icon className={`h-6 w-6 ${colors.iconClasses}`} />
                              </div>
                              <div className="flex gap-2 flex-wrap justify-end">
                                {resource.hasQR && (
                                  <Badge variant="outline" className="text-xs">
                                    QR/Video
                                  </Badge>
                                )}
                              </div>
                            </div>
                            <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                            <CardDescription className="text-sm mt-2">
                              {resource.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex flex-wrap gap-1">
                                {resource.level.map((level) => (
                                  <Badge
                                    key={level}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {level}
                                  </Badge>
                                ))}
                              </div>
                              <a
                                href={`/ressurser/${resource.fileName}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md font-medium text-sm transition-colors ${colors.buttonClasses}`}
                              >
                                <Download className="h-4 w-4" />
                                Last ned PDF
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 bg-muted/30 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Om ressursene</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Alle hefte er utviklet av erfarne matematikklærere og brukes aktivt i undervisning.
                Hefte merket med &quot;QR/Video&quot; inneholder QR-koder som leder til videogjennomganger av eksempler og oppgaver.
                Dette gjør det enkelt å lære i eget tempo og gå tilbake til forklaringer når du trenger det.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Ressursene er helt gratis å bruke for både elever og lærere. Del gjerne med andre som kan ha nytte av dem!
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tilgjengelighetserklæring",
  description: "Skolesagas tilgjengelighetserklæring – status for universell utforming (WCAG 2.1 AA) og hvordan du kan melde fra om barrierer.",
};

export default function TilgjengelighetPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container py-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Hjem</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Tilgjengelighetserklæring</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Tilgjengelighetserklæring</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <p className="text-muted-foreground">
              Denne erklæringen gjelder nettstedet skolesaga.no. Vi arbeider for at innholdet
              skal være tilgjengelig for alle, i tråd med kravene til universell utforming av IKT.
            </p>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">1. Samsvarsstatus</h2>
              <p>
                Nettstedet er <strong>delvis i samsvar</strong> med kravene i forskrift om universell
                utforming av IKT-løsninger, som stiller krav om at nettsteder skal følge{" "}
                <strong>WCAG 2.1 på nivå AA</strong>. «Delvis i samsvar» betyr at deler av innholdet
                ennå ikke fullt ut oppfyller alle krav. Kjente avvik er listet under, og vi retter
                disse løpende.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">2. Tiltak som er på plass</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Hopp-til-innhold-lenker og tydelige landemerker (navigasjon, hovedinnhold)</li>
                <li>Tastaturnavigasjon med synlig fokusindikator på interaktive elementer</li>
                <li>Tekstalternativer på bilder, ikon-knapper og illustrasjoner</li>
                <li>Dialoger med fokushåndtering, og som kan lukkes med Escape</li>
                <li>Skjemafeil som varsles til skjermlesere</li>
                <li>Mulighet for å zoome inn til minst 200 %</li>
                <li>Lydbøker med tilhørende tekstversjon av innholdet</li>
                <li>Støtte for lys/mørk modus</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">3. Kjente avvik vi jobber med</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  Noen sammensatte skjemaer mangler full programmatisk kobling mellom feilmelding og
                  felt (WCAG 3.3.1).
                </li>
                <li>
                  Enkelte sider har overskrifter som ikke følger et strengt nivåhierarki (WCAG 1.3.1).
                </li>
                <li>
                  Innhold på nynorsk og nordsamisk merkes foreløpig ikke alltid med eget
                  språkattributt på innholdsnivå (WCAG 3.1.2).
                </li>
                <li>
                  Enkelte interaktive grafer/figurer har begrenset tekstalternativ for dataene de
                  viser (WCAG 1.1.1).
                </li>
                <li>
                  Noen visuelle valg-tilstander (f.eks. valgt svaralternativ) formidles ennå ikke
                  fullt ut til hjelpemidler (WCAG 4.1.2).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">4. Meld fra om barrierer</h2>
              <p>
                Opplever du barrierer eller mangler ved tilgjengeligheten på nettstedet, vil vi gjerne
                høre fra deg. Send en e-post til{" "}
                <a href="mailto:studenthjelp@gmail.com" className="underline">
                  studenthjelp@gmail.com
                </a>{" "}
                eller bruk «Meld feil eller forbedring»-knappen nederst i kapitlene, så følger vi opp
                så raskt vi kan. Vi besvarer normalt henvendelser innen rimelig tid.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">5. Tilsyn</h2>
              <p>
                Tilsynet for universell utforming av IKT (Digitaliseringsdirektoratet) fører tilsyn
                med at kravene til universell utforming følges. Er du ikke fornøyd med hvordan vi
                følger opp en henvendelse, kan du kontakte tilsynet.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">6. Om erklæringen</h2>
              <p>
                Erklæringen bygger på en intern gjennomgang av nettstedet mot WCAG 2.1 AA,
                gjennomført i juni 2026 med både manuell vurdering og automatisert testing
                (axe-core). Den oppdateres etter hvert som avvik rettes og ny funksjonalitet
                kommer til. Erklæringen gjelder for skolesaga.no og utgis av Studenthjelp
                Privatundervisning AS (org.nr 913 117 387).
              </p>
              <p className="mt-3">
                Sist oppdatert: 7. juli 2026.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

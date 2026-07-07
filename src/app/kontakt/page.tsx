import { MainNav } from "@/components/navigation/main-nav";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktinformasjon for Skolesaga.no – Studenthjelp Privatundervisning AS.",
};

export default function KontaktPage() {
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
                <BreadcrumbPage>Kontakt</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <section className="container pb-12 max-w-3xl">
          <h1 className="text-3xl font-bold mb-8">Kontakt oss</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">Hvem står bak Skolesaga?</h2>
              <p>
                Skolesaga.no eies og drives av <strong>Studenthjelp Privatundervisning AS</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Organisasjonsnummer: 913 117 387</li>
                <li>Adresse: Aksel Olsens vei 10B, 1597 Moss</li>
                <li>
                  E-post:{" "}
                  <a href="mailto:studenthjelp@gmail.com" className="underline">
                    studenthjelp@gmail.com
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mt-8 mb-4">Hva gjelder henvendelsen?</h2>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>
                  <strong>Feil i innholdet:</strong> Bruk «Meld feil eller forbedring»-knappen
                  nederst i hvert kapittel – da får vi med nøyaktig hvilken side det gjelder.
                </li>
                <li>
                  <strong>Personvern:</strong> Se{" "}
                  <Link href="/personvern" className="underline">personvernerklæringen</Link>{" "}
                  for dine rettigheter. Du kan laste ned eller slette dataene dine selv fra
                  profilsiden.
                </li>
                <li>
                  <strong>Tilgjengelighet:</strong> Opplever du barrierer, se{" "}
                  <Link href="/tilgjengelighet" className="underline">tilgjengelighetserklæringen</Link>{" "}
                  eller send oss en e-post.
                </li>
                <li>
                  <strong>Skoler og kommuner:</strong> Ta kontakt på e-post for spørsmål om
                  databehandleravtale, Feide-innlogging eller bruk av Skolesaga i undervisningen.
                </li>
              </ul>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

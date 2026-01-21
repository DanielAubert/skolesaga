import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileQuestion, Home, BookOpen } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container max-w-4xl mx-auto py-16">
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              {/* 404 Icon */}
              <div className="rounded-full bg-muted p-8 mb-6">
                <FileQuestion className="h-24 w-24 text-muted-foreground" />
              </div>

              {/* 404 Title */}
              <div className="mb-4">
                <span className="text-6xl font-bold text-muted-foreground">404</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Siden finnes ikke
              </h1>

              {/* Description */}
              <p className="text-muted-foreground mb-8 max-w-md">
                Vi fant ikke siden du leter etter. Den kan ha blitt flyttet,
                slettet eller eksisterer ikke.
              </p>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Gå til forsiden
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="gap-2">
                  <Link href="/bok">
                    <BookOpen className="h-4 w-4" />
                    Se lærebøker
                  </Link>
                </Button>
              </div>

              {/* Quick Links */}
              <div className="w-full max-w-2xl">
                <p className="text-sm text-muted-foreground mb-4">
                  Velg klassetrinn
                </p>
                <div className="flex gap-3 justify-center flex-wrap">
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/8">8. klasse</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/9">9. klasse</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/10">10. klasse</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/vg1">VG1</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/vg2">VG2</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/bok/trinn/vg3">VG3</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

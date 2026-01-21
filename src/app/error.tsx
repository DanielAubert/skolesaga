'use client';

import { useEffect } from 'react';
import { MainNav } from '@/components/navigation/main-nav';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { AlertCircle, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console for debugging
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main id="main-content" className="flex-1">
        <div className="container max-w-2xl mx-auto py-16">
          <Card className="p-8">
            <div className="flex flex-col items-center text-center">
              {/* Error Icon */}
              <div className="rounded-full bg-destructive/10 p-6 mb-6">
                <AlertCircle className="h-16 w-16 text-destructive" />
              </div>

              {/* Error Title */}
              <h1 className="text-3xl font-bold mb-4">
                Noe gikk galt
              </h1>

              {/* Error Description */}
              <p className="text-muted-foreground mb-8 max-w-md">
                Vi beklager, men det oppstod et problem ved lasting av siden.
                Dette kan være midlertidig. Prøv å laste siden på nytt.
              </p>

              {/* Error Details (only in development) */}
              {process.env.NODE_ENV === 'development' && (
                <div className="w-full mb-6 p-4 bg-muted rounded-lg text-left">
                  <p className="text-sm font-mono text-destructive break-all">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Button
                  onClick={reset}
                  size="lg"
                  className="gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Prøv igjen
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Gå til forsiden
                  </Link>
                </Button>
              </div>

              {/* Help Text */}
              <p className="text-sm text-muted-foreground mt-8">
                Hvis problemet vedvarer, vennligst kontakt oss eller prøv igjen senere.
              </p>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { useEffect, useState } from "react";

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-muted/20 mt-auto">
      <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_top,transparent_20%,black)]" />
      <div className="container relative py-12 md:py-16">
        <div className="flex justify-center">
          <div className="max-w-md text-center">
            <Link href="/" className="inline-flex items-center space-x-2 group">
              {mounted && (
                <div className="rounded-lg bg-primary/10 p-1.5 transition-all group-hover:bg-primary/20">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
              )}
              <span className="font-bold text-lg">Skolesaga</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Gratis interaktive lærebøker for norsk skole.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center gap-4">
            <Link
              href="/bok"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {mounted && <BookOpen className="h-4 w-4" />}
              Lærebok
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/personvern" className="hover:text-foreground transition-colors">
                Personvern
              </Link>
              <Link href="/vilkar" className="hover:text-foreground transition-colors">
                Vilkår
              </Link>
            </div>
            <p className="text-center text-sm text-muted-foreground font-medium">
              © 2025 Skolesaga · Alle rettigheter forbeholdt
            </p>
            <p className="text-center text-xs text-muted-foreground/70 mt-2">
              Deler av innholdet er utviklet med hjelp av AI-verktøy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

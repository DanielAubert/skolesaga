'use client';

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { getAdjacentChapters } from "@/lib/data/book-chapters";

interface ChapterNavigationProps {
  currentChapterId: string;
}

export function ChapterNavigation({ currentChapterId }: ChapterNavigationProps) {
  const { prev, next } = getAdjacentChapters(currentChapterId);

  return (
    <div className="mt-12 sm:mt-16 mb-6 sm:mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        {/* Previous Chapter */}
        {prev ? (
          <Link href={prev.url} className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group active:scale-95">
              <CardContent className="pt-5 pb-5 px-4 sm:pt-6 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
                    <ArrowLeft className="h-5 w-5 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Forrige kapittel</p>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                      {prev.number}: {prev.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {prev.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Link href="/book" className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group border-dashed active:scale-95">
              <CardContent className="pt-5 pb-5 px-4 sm:pt-6 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 sm:p-2.5 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors shrink-0">
                    <BookOpen className="h-5 w-5 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Tilbake til</p>
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                      Kapitteloversikt
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}

        {/* Next Chapter */}
        {next ? (
          <Link href={next.url} className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group active:scale-95">
              <CardContent className="pt-5 pb-5 px-4 sm:pt-6 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0 text-left md:text-right">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Neste kapittel</p>
                    <h3 className="font-semibold text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">
                      {next.number}: {next.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                      {next.description}
                    </p>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors shrink-0 order-first md:order-last">
                    <ArrowRight className="h-5 w-5 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ) : (
          <Link href="/book" className="block">
            <Card className="h-full transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer group border-dashed active:scale-95">
              <CardContent className="pt-5 pb-5 px-4 sm:pt-6 sm:px-6">
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0 text-left md:text-right">
                    <p className="text-xs sm:text-sm text-muted-foreground mb-1">Gratulerer! 🎉</p>
                    <h3 className="font-semibold text-base sm:text-lg group-hover:text-primary transition-colors">
                      Alle kapitler fullført
                    </h3>
                  </div>
                  <div className="p-2 sm:p-2.5 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors shrink-0 order-first md:order-last">
                    <BookOpen className="h-5 w-5 sm:h-5 sm:w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        )}
      </div>

      {/* Keyboard shortcuts hint */}
      <div className="mt-3 sm:mt-4 text-center hidden sm:block">
        <p className="text-xs sm:text-sm text-muted-foreground">
          Tips: Bruk <kbd className="px-2 py-1 bg-muted rounded text-xs">←</kbd> og{" "}
          <kbd className="px-2 py-1 bg-muted rounded text-xs">→</kbd> piltaster for å navigere
        </p>
      </div>
    </div>
  );
}

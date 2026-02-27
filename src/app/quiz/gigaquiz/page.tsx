import { Metadata } from 'next';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TextbookHeader } from '@/components/textbook/textbook-header';
import { GIGAQUIZ_HISTORIE } from '@/lib/data/gigaquiz-data-historie';
import type { GigaquizConfig } from '@/lib/data/gigaquiz-data-historie';
import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Layers,
  HelpCircle,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Diagnostisk quiz – Eksamensforberedelse',
  description: 'Test deg selv på tvers av alle kapitler i et fag. Resultater oppdateres etter hvert svar.',
};

const AVAILABLE_GIGAQUIZZES: GigaquizConfig[] = [
  GIGAQUIZ_HISTORIE,
];

export default function GigaquizIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <TextbookHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/quiz"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Tilbake til quizer
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Diagnostisk quiz</h1>
            <p className="text-muted-foreground">
              Eksamensforberedelse som tester deg på alle kapitler i et fag.
              Resultater oppdateres etter hvert svar – du trenger ikke fullføre alt.
            </p>
          </div>

          <div className="space-y-4">
            {AVAILABLE_GIGAQUIZZES.map((quiz) => {
              const totalQuestions = quiz.chapters.reduce((sum, ch) => sum + ch.questions.length, 0);
              const estimatedMinutes = Math.ceil(totalQuestions * 0.6);
              const vg2Count = quiz.chapters.filter(ch => ch.level === 'VG2').length;
              const vg3Count = quiz.chapters.filter(ch => ch.level === 'VG3').length;

              return (
                <Link key={quiz.id} href={`/quiz/gigaquiz/${quiz.id}`}>
                  <Card className="hover:border-primary/50 hover:shadow-md transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
                          <Trophy className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h2 className="text-lg font-bold">{quiz.title}</h2>
                            <Badge variant="secondary" className="text-xs">Ny</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3">{quiz.subtitle}</p>

                          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Layers className="w-3.5 h-3.5" />
                              {quiz.chapters.length} kapitler
                              {vg2Count > 0 && vg3Count > 0 && (
                                <span className="text-muted-foreground/60">({vg2Count} VG2 + {vg3Count} VG3)</span>
                              )}
                            </span>
                            <span className="flex items-center gap-1">
                              <HelpCircle className="w-3.5 h-3.5" />
                              {totalQuestions} spørsmål
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              ~{estimatedMinutes} min
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground shrink-0 mt-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

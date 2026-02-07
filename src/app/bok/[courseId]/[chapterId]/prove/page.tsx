'use client';

/**
 * Prøveside for kapittel
 *
 * Viser prøve med åpne spørsmål og AI-retting
 */

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Clock, Send, CheckCircle2, AlertCircle, TrendingUp, TrendingDown, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import type { ChapterExam, ExamAnswer, ExamAIGrading } from '@/lib/types/textbook';

// Importer prøven direkte for nå (kan flyttes til en API senere)
import { EXAM_HISTORIE_1_2 } from '@/lib/data/exams/historie-1-2-exam';

export default function ExamPage() {
  const params = useParams();
  const { chapterId } = params as { courseId: string; chapterId: string };

  const [exam, setExam] = useState<ChapterExam | null>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [grading, setGrading] = useState<ExamAIGrading | null>(null);
  const [startTime] = useState<Date>(new Date());
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [examStarted, setExamStarted] = useState(false);

  // Last prøve basert på kapittel-ID
  useEffect(() => {
    // For nå, hardkodet til historie-1-2
    if (chapterId === 'historie-1-2') {
      setExam(EXAM_HISTORIE_1_2);
    }
  }, [chapterId]);

  // Timer
  useEffect(() => {
    if (!examStarted || grading) return;

    const timer = setInterval(() => {
      const elapsed = Math.floor((new Date().getTime() - startTime.getTime()) / 1000 / 60);
      setTimeElapsed(elapsed);
    }, 1000);

    return () => clearInterval(timer);
  }, [examStarted, startTime, grading]);

  const handleAnswerChange = (questionNumber: number, answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questionNumber]: answer,
    }));
  };

  const handleSubmit = async () => {
    if (!exam) return;

    setIsSubmitting(true);

    try {
      const examAnswers: ExamAnswer[] = exam.questions.map(q => ({
        questionId: q.id,
        questionNumber: q.number,
        answer: answers[q.number] || '',
        wordCount: (answers[q.number] || '').split(/\s+/).filter(Boolean).length,
      }));

      const response = await fetch('/api/exams/grade', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          exam,
          answers: examAnswers,
        }),
      });

      const data = await response.json();

      if (data.success && data.grading) {
        setGrading(data.grading);
      } else {
        alert('Kunne ikke vurdere prøven: ' + (data.error || 'Ukjent feil'));
      }
    } catch (error) {
      console.error('Feil ved innsending:', error);
      alert('Noe gikk galt. Prøv igjen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getGradeColor = (grade: number): string => {
    if (grade >= 5) return 'bg-green-500';
    if (grade >= 4) return 'bg-blue-500';
    if (grade >= 3) return 'bg-yellow-500';
    if (grade >= 2) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const getGradeEmoji = (grade: number): string => {
    if (grade === 6) return '🌟';
    if (grade === 5) return '✨';
    if (grade === 4) return '👍';
    if (grade === 3) return '📚';
    if (grade === 2) return '💪';
    return '📖';
  };

  if (!exam) {
    return (
      <div className="container mx-auto py-8">
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">Ingen prøve funnet for dette kapittelet.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Vis resultat etter retting
  if (grading) {
    return (
      <div className="container mx-auto py-8 max-w-4xl">
        <Card className="mb-8">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className={`w-24 h-24 rounded-full ${getGradeColor(grading.overallGrade)} flex items-center justify-center text-white`}>
                <span className="text-4xl font-bold">{grading.overallGrade}</span>
              </div>
            </div>
            <CardTitle className="text-2xl">
              {getGradeEmoji(grading.overallGrade)} Din karakter: {grading.overallGrade}
            </CardTitle>
            <CardDescription>
              {grading.totalPoints} av {exam.gradingCriteria.totalPoints} poeng
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={(grading.totalPoints / exam.gradingCriteria.totalPoints) * 100} className="h-3 mb-6" />

            <div className="space-y-6">
              {/* Overordnet tilbakemelding */}
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Samlet vurdering</h3>
                <p>{grading.overallFeedback}</p>
              </div>

              {/* Hvorfor ikke høyere/lavere */}
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Hvorfor ikke høyere karakter?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{grading.whyNotHigher}</p>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50 dark:bg-green-950/20">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm flex items-center gap-2">
                      <TrendingDown className="w-4 h-4" />
                      Hvorfor ikke lavere karakter?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{grading.whyNotLower}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Styrker og forbedringer */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    Styrker
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {grading.strengths.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600" />
                    Forbedringsområder
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {grading.areasForImprovement.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detaljert tilbakemelding per spørsmål */}
        <h2 className="text-xl font-semibold mb-4">Detaljert tilbakemelding</h2>
        <div className="space-y-4">
          {grading.questionGradings.map((qg) => {
            const question = exam.questions.find(q => q.number === qg.questionNumber);
            return (
              <Card key={qg.questionId}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Spørsmål {qg.questionNumber}</CardTitle>
                    <Badge variant={qg.points >= qg.maxPoints * 0.75 ? 'default' : qg.points >= qg.maxPoints * 0.5 ? 'secondary' : 'destructive'}>
                      {qg.points}/{qg.maxPoints} poeng
                    </Badge>
                  </div>
                  <CardDescription className="prose prose-sm dark:prose-invert">
                    <ReactMarkdown>
                      {question?.question || ''}
                    </ReactMarkdown>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Ditt svar */}
                  <div>
                    <h4 className="font-medium text-sm mb-1">Ditt svar:</h4>
                    <p className="text-sm bg-muted p-3 rounded-md whitespace-pre-wrap">
                      {answers[qg.questionNumber] || '(Ikke besvart)'}
                    </p>
                  </div>

                  <Separator />

                  {/* Tilbakemelding */}
                  <div>
                    <h4 className="font-medium text-sm mb-1">Tilbakemelding:</h4>
                    <p className="text-sm">{qg.feedback}</p>
                  </div>

                  {/* Styrker og forbedringer */}
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    {qg.strengths.length > 0 && (
                      <div>
                        <h5 className="font-medium text-green-600 mb-1">Bra:</h5>
                        <ul className="list-disc list-inside">
                          {qg.strengths.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    )}
                    {qg.improvements.length > 0 && (
                      <div>
                        <h5 className="font-medium text-amber-600 mb-1">Kunne vært bedre:</h5>
                        <ul className="list-disc list-inside">
                          {qg.improvements.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Manglende elementer */}
                  {qg.missingElements.length > 0 && (
                    <div className="text-sm">
                      <h5 className="font-medium text-red-600 mb-1">Manglet:</h5>
                      <ul className="list-disc list-inside">
                        {qg.missingElements.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}

                  {/* Nøkkelbegreper */}
                  <div className="flex flex-wrap gap-2">
                    {qg.keyTermsUsed.map((term, i) => (
                      <Badge key={i} variant="outline" className="bg-green-50 dark:bg-green-950/20">
                        ✓ {term}
                      </Badge>
                    ))}
                    {qg.keyTermsMissing.map((term, i) => (
                      <Badge key={i} variant="outline" className="bg-red-50 dark:bg-red-950/20 text-muted-foreground">
                        ✗ {term}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // Startskjerm
  if (!examStarted) {
    return (
      <div className="container mx-auto py-8 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>{exam.title}</CardTitle>
            <CardDescription>{exam.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Tid: {exam.duration} minutter</span>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Kompetansemål som testes:</h3>
              <ul className="list-disc list-inside text-sm text-muted-foreground">
                {exam.competenceGoals.map((goal, i) => (
                  <li key={i}>{goal}</li>
                ))}
              </ul>
            </div>

            <div className="bg-muted p-4 rounded-lg prose prose-sm dark:prose-invert">
              <ReactMarkdown>
                {exam.instructions}
              </ReactMarkdown>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={() => setExamStarted(true)}
            >
              Start prøven
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Prøveskjerm
  return (
    <div className="container mx-auto py-8 max-w-3xl">
      {/* Header med timer */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur py-4 mb-6 border-b">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">{exam.title}</h1>
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${timeElapsed >= exam.duration ? 'text-red-500' : ''}`}>
              <Clock className="w-4 h-4" />
              <span>{timeElapsed} / {exam.duration} min</span>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Retter...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Lever besvarelse
                </>
              )}
            </Button>
          </div>
        </div>
        <Progress value={(timeElapsed / exam.duration) * 100} className="h-1 mt-2" />
      </div>

      {/* Spørsmål */}
      <div className="space-y-8">
        {exam.questions.map((question, index) => (
          <Card key={question.id}>
            <CardHeader>
              <CardTitle className="text-lg">
                Spørsmål {question.number} av {exam.questions.length}
              </CardTitle>
              <CardDescription>
                Maks {question.maxPoints} poeng
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>{question.question}</ReactMarkdown>
              </div>

              <Textarea
                placeholder="Skriv ditt svar her..."
                value={answers[question.number] || ''}
                onChange={(e) => handleAnswerChange(question.number, e.target.value)}
                rows={8}
                className="resize-y min-h-[200px]"
              />

              <div className="text-sm text-muted-foreground">
                Antall ord: {(answers[question.number] || '').split(/\s+/).filter(Boolean).length}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Lever-knapp nederst */}
      <div className="mt-8 flex justify-center">
        <Button
          size="lg"
          onClick={handleSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Retter prøven...
            </>
          ) : (
            <>
              <Send className="w-4 h-4 mr-2" />
              Lever besvarelse
            </>
          )}
        </Button>
      </div>
    </div>
  );
}

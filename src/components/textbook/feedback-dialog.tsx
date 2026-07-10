'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Flag, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface FeedbackDialogProps {
  courseId?: string;
  chapterId?: string;
  chapterTitle?: string;
}

export function FeedbackDialog({ courseId, chapterId, chapterTitle }: FeedbackDialogProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState<'feil' | 'forbedring'>('feil');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    setError(null);
    if (message.trim().length < 10) {
      setError('Beskriv feilen eller forbedringen med minst 10 tegn.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          category,
          message: message.trim(),
          email: email.trim() || undefined,
          courseId,
          chapterId,
          chapterTitle,
          url: pathname,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Kunne ikke sende tilbakemeldingen.');
      }
    } catch {
      setError('Kunne ikke sende tilbakemeldingen. Sjekk nettforbindelsen.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (next: boolean) => {
    setOpen(next);
    if (!next) {
      // Nullstill skjemaet når dialogen lukkes etter innsending
      if (submitted) {
        setSubmitted(false);
        setMessage('');
        setEmail('');
        setCategory('feil');
      }
      setError(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Flag className="h-4 w-4" />
          Meld feil eller forbedring
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                Takk for tilbakemeldingen!
              </DialogTitle>
              <DialogDescription>
                Meldingen din er mottatt og blir gjennomgått. Feil rettes fortløpende —
                ofte samme dag.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button onClick={() => handleOpenChange(false)}>Lukk</Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Meld feil eller forbedring</DialogTitle>
              <DialogDescription>
                {chapterTitle
                  ? `Gjelder kapittel «${chapterTitle}».`
                  : 'Fortell oss hva som kan bli bedre.'}{' '}
                Alle meldinger leses, og feil rettes fortløpende.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <RadioGroup
                value={category}
                onValueChange={(value) => setCategory(value as 'feil' | 'forbedring')}
                className="flex gap-6"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="feil" id="feedback-feil" />
                  <Label htmlFor="feedback-feil">Feil i innholdet</Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="forbedring" id="feedback-forbedring" />
                  <Label htmlFor="feedback-forbedring">Forslag til forbedring</Label>
                </div>
              </RadioGroup>

              <div className="space-y-2">
                <Label htmlFor="feedback-message">
                  {category === 'feil'
                    ? 'Hva er feil? Pek gjerne på avsnitt, oppgave eller fasit.'
                    : 'Hva kan bli bedre?'}
                </Label>
                <Textarea
                  id="feedback-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "feedback-error" : undefined}
                  placeholder={
                    category === 'feil'
                      ? 'F.eks.: «I oppgave 3b står det at svaret er 12, men riktig svar er 14 fordi ...»'
                      : 'F.eks.: «Forklaringen av brøk kunne hatt et eksempel med pizza ...»'
                  }
                  rows={5}
                  maxLength={4000}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="feedback-email">E-post (valgfritt, hvis du vil ha svar)</Label>
                <Input
                  id="feedback-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="din@epost.no"
                />
              </div>

              {error && <p id="feedback-error" role="alert" className="text-sm text-destructive">{error}</p>}
            </div>

            <DialogFooter>
              <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={isSubmitting}>
                Avbryt
              </Button>
              <Button onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? 'Sender...' : 'Send tilbakemelding'}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

/**
 * KI-deklarasjon med innebygd tilbakemeldingsknapp.
 * Vises nederst i hvert kapittel.
 */
export function AiDisclosureNotice({ courseId, chapterId, chapterTitle }: FeedbackDialogProps) {
  return (
    <div className="mt-12 p-4 bg-muted/50 border rounded-lg">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2 text-sm text-muted-foreground">
          <Sparkles className="h-4 w-4 mt-0.5 shrink-0" />
          <p>
            Dette kapitlet er skrevet av Anthropics toppmodeller (Claude Opus og Claude
            Fable) og er foreløpig ikke manuelt
            gjennomgått — kvalitetskontrollen gjøres av uavhengige KI-agenter, og innmeldte
            feil rettes fortløpende. Funnet en feil? Meld fra, så retter vi den.{' '}
            <Link href="/vilkar#ki-deklarasjon" className="underline hover:text-foreground">
              Les mer om hvordan innholdet lages
            </Link>
            .
          </p>
        </div>
        <div className="shrink-0">
          <FeedbackDialog courseId={courseId} chapterId={chapterId} chapterTitle={chapterTitle} />
        </div>
      </div>
    </div>
  );
}

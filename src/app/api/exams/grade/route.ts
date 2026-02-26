/**
 * API-endepunkt for AI-retting av prøver
 *
 * POST /api/exams/grade
 *
 * Mottar elevbesvarelse og returnerer detaljert tilbakemelding med:
 * - Karakter 1-6
 * - Poeng per spørsmål
 * - Forklaring på hvorfor denne karakteren
 * - Forklaring på hvorfor ikke høyere karakter
 * - Forklaring på hvorfor ikke lavere karakter
 * - Styrker og forbedringsområder
 */

import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import type { ChapterExam, ExamAnswer, ExamAIGrading, QuestionAIGrading } from '@/lib/types/textbook';

const anthropic = new Anthropic();

interface GradeRequest {
  exam: ChapterExam;
  answers: ExamAnswer[];
  studentId?: string;
}

interface GradeResponse {
  success: boolean;
  grading?: ExamAIGrading;
  error?: string;
}

export async function POST(request: Request): Promise<NextResponse<GradeResponse>> {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ success: false, error: 'Du må være innlogget' }, { status: 401 });
    }

    const body = await request.json() as GradeRequest;
    const { exam, answers } = body;

    if (!exam || !answers || answers.length === 0) {
      return NextResponse.json({
        success: false,
        error: 'Mangler prøve eller besvarelser',
      }, { status: 400 });
    }

    // Bygg prompt for AI-retting
    const gradingPrompt = buildGradingPrompt(exam, answers);

    // Kall Claude API
    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4096,
      messages: [
        {
          role: 'user',
          content: gradingPrompt,
        },
      ],
    });

    // Parse responsen
    const responseText = message.content[0].type === 'text' ? message.content[0].text : '';
    const grading = parseGradingResponse(responseText, exam, answers);

    return NextResponse.json({
      success: true,
      grading,
    });
  } catch (error) {
    console.error('Feil ved AI-retting:', error);
    return NextResponse.json({
      success: false,
      error: 'Kunne ikke gjennomføre retting. Prøv igjen senere.',
    }, { status: 500 });
  }
}

function buildGradingPrompt(exam: ChapterExam, answers: ExamAnswer[]): string {
  const questionsWithAnswers = exam.questions.map((q, i) => {
    const answer = answers.find(a => a.questionNumber === q.number);
    return `
### Spørsmål ${q.number}:
${q.question}

**Maks poeng:** ${q.maxPoints}

**Vurderingsveiledning:**
- Forventet innhold: ${q.gradingGuide.expectedContent.join(', ')}
- Nøkkelbegreper som bør brukes: ${q.gradingGuide.keyTerms.join(', ')}
- Vanlige feil: ${q.gradingGuide.commonMistakes.join(', ')}

**Eksempel på utmerket svar (6):**
${q.gradingGuide.excellentAnswer}

**Eksempel på godt svar (4-5):**
${q.gradingGuide.goodAnswer}

**Eksempel på bestått svar (2-3):**
${q.gradingGuide.passingAnswer}

**Elevens svar:**
${answer?.answer || '(Ikke besvart)'}

---`;
  }).join('\n');

  const gradeDescriptions = exam.gradingCriteria.gradeDescriptions.map(g =>
    `**Karakter ${g.grade} (${g.description}):**\n${g.requirements.map(r => `- ${r}`).join('\n')}`
  ).join('\n\n');

  return `Du er en erfaren historielærer som skal vurdere en elevbesvarelse på en prøve om "${exam.title}".

## Prøvens kompetansemål:
${exam.competenceGoals.map(g => `- ${g}`).join('\n')}

## Karakterskala og krav:
${gradeDescriptions}

## Poenggrenser:
${exam.gradingCriteria.pointsToGrade.map(p => `- Karakter ${p.grade}: ${p.minPoints}-${p.maxPoints} poeng`).join('\n')}

## Elevens besvarelse:
${questionsWithAnswers}

---

## Din oppgave:

Vurder elevens besvarelse og gi:

1. **For hvert spørsmål:**
   - Poeng (0-${exam.questions[0].maxPoints})
   - Konkret tilbakemelding
   - Hva var bra (styrker)
   - Hva kunne vært bedre (forbedringer)
   - Hva manglet
   - Hvilke nøkkelbegreper ble brukt
   - Hvilke nøkkelbegreper manglet

2. **Samlet vurdering:**
   - Total poengsum (0-${exam.gradingCriteria.totalPoints})
   - Endelig karakter (1-6)
   - Overordnet tilbakemelding
   - Styrker ved besvarelsen
   - Områder for forbedring
   - **VIKTIG: Forklar hvorfor eleven IKKE får en høyere karakter** (hva mangler for å oppnå neste karakternivå)
   - **VIKTIG: Forklar hvorfor eleven IKKE får en lavere karakter** (hva eleven har gjort bra som sikrer denne karakteren)

Svar i følgende JSON-format:

\`\`\`json
{
  "overallGrade": 4,
  "totalPoints": 65,
  "overallFeedback": "Samlet tilbakemelding på besvarelsen...",
  "whyNotHigher": "For å oppnå karakter 5 måtte du ha...",
  "whyNotLower": "Du får ikke lavere karakter fordi...",
  "strengths": ["Styrke 1", "Styrke 2"],
  "areasForImprovement": ["Forbedring 1", "Forbedring 2"],
  "questionGradings": [
    {
      "questionNumber": 1,
      "points": 14,
      "maxPoints": 20,
      "feedback": "Tilbakemelding på dette svaret...",
      "strengths": ["Bra 1"],
      "improvements": ["Bedre 1"],
      "missingElements": ["Mangler 1"],
      "keyTermsUsed": ["begrep1"],
      "keyTermsMissing": ["begrep2"]
    }
  ]
}
\`\`\`

Vær rettferdig, konstruktiv og pedagogisk i tilbakemeldingene. Fokuser på hva eleven kan lære og hvordan de kan forbedre seg.`;
}

function parseGradingResponse(
  responseText: string,
  exam: ChapterExam,
  answers: ExamAnswer[]
): ExamAIGrading {
  try {
    // Finn JSON-blokken i responsen
    const jsonMatch = responseText.match(/```json\s*([\s\S]*?)\s*```/);
    if (!jsonMatch) {
      throw new Error('Kunne ikke finne JSON i responsen');
    }

    const parsed = JSON.parse(jsonMatch[1]);

    // Bygg ExamAIGrading objekt
    const questionGradings: QuestionAIGrading[] = parsed.questionGradings.map((qg: {
      questionNumber: number;
      points: number;
      maxPoints: number;
      feedback: string;
      strengths: string[];
      improvements: string[];
      missingElements: string[];
      keyTermsUsed: string[];
      keyTermsMissing: string[];
    }) => {
      const question = exam.questions.find(q => q.number === qg.questionNumber);
      return {
        questionId: question?.id || `q${qg.questionNumber}`,
        questionNumber: qg.questionNumber,
        points: qg.points,
        maxPoints: qg.maxPoints,
        feedback: qg.feedback,
        strengths: qg.strengths || [],
        improvements: qg.improvements || [],
        missingElements: qg.missingElements || [],
        keyTermsUsed: qg.keyTermsUsed || [],
        keyTermsMissing: qg.keyTermsMissing || [],
      };
    });

    return {
      overallGrade: parsed.overallGrade,
      totalPoints: parsed.totalPoints,
      questionGradings,
      overallFeedback: parsed.overallFeedback,
      whyNotHigher: parsed.whyNotHigher,
      whyNotLower: parsed.whyNotLower,
      strengths: parsed.strengths || [],
      areasForImprovement: parsed.areasForImprovement || [],
      gradedAt: new Date(),
    };
  } catch (error) {
    console.error('Feil ved parsing av AI-respons:', error);
    // Returner en fallback-respons ved parsefeil
    return {
      overallGrade: 1,
      totalPoints: 0,
      questionGradings: [],
      overallFeedback: 'Kunne ikke tolke AI-responsen. Vennligst ta kontakt med lærer for manuell vurdering.',
      whyNotHigher: 'Teknisk feil ved vurdering.',
      whyNotLower: 'Teknisk feil ved vurdering.',
      strengths: [],
      areasForImprovement: [],
      gradedAt: new Date(),
    };
  }
}

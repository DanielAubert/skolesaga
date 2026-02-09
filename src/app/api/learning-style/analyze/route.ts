import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { LearningResult } from '@/lib/types/learning-style';
import { STYLE_LABELS, STYLE_ORDER } from '@/lib/types/learning-style';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const result = await request.json() as LearningResult;

    if (!result || !result.styleScores || !result.dominantStyle) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    const styleSummary = STYLE_ORDER.map(style => {
      const score = result.styleScores[style];
      return `- ${STYLE_LABELS[style]}: snitt ${score.rawMean.toFixed(2)}/5, persentil ${score.percentile}% (${score.label})`;
    }).join('\n');

    const dominant = STYLE_LABELS[result.dominantStyle];
    const secondary = STYLE_LABELS[result.secondaryStyle];

    const prompt = `Du er en pedagogisk rådgiver som analyserer resultatene fra en læringstiltest (VARK-modellen). Gi en personlig analyse på norsk rettet mot en elev på videregående skole.

## Testresultat
- Dominerende stil: ${dominant}
- Sekundær stil: ${secondary}

## Stilscorer
${styleSummary}

## Instruksjoner
Skriv en engasjerende, personlig analyse (maks 400 ord) med disse seksjonene:

1. **Din læringstilprofil** — Beskriv hva det betyr å ha ${dominant} som dominerende stil med ${secondary} som støtte
2. **Slik lærer du best** — Konkrete eksempler på studieteknikker som passer denne profilen
3. **I klasserommet** — Hvordan eleven kan utnytte sin stil i undervisningen og gruppearbeid
4. **Eksamen og prøver** — Strategier for å forberede seg til prøver basert på profilen
5. **Utfordringer og tips** — Situasjoner som kan være vanskelige og hvordan håndtere dem

Vær oppmuntrende og praktisk. Gi konkrete, handlingsrettede tips. Bruk norsk. Skriv som om du snakker med eleven direkte. Unngå å nevne persentiler — beskriv heller med naturlig språk.

Skriv KUN analyseteksten i markdown-format, uten ekstra innpakning.`;

    const message = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    });

    const analysis = message.content[0].type === 'text' ? message.content[0].text : '';

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error('Feil ved AI-analyse:', error);
    return NextResponse.json(
      { error: 'Kunne ikke generere analyse' },
      { status: 500 },
    );
  }
}

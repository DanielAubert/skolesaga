import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import type { EQResult } from '@/lib/types/eq-test';
import { DIMENSION_LABELS, DIMENSION_ORDER } from '@/lib/types/eq-test';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Du må være innlogget' }, { status: 401 });
    }

    const result = await request.json() as EQResult;

    if (!result || !result.dimensionScores || !result.dominantDimension) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    const dimSummary = DIMENSION_ORDER.map(dim => {
      const score = result.dimensionScores[dim];
      return `- ${DIMENSION_LABELS[dim]}: snitt ${score.rawMean.toFixed(2)}/5, persentil ${score.percentile}% (${score.label})`;
    }).join('\n');

    const strongest = DIMENSION_LABELS[result.dominantDimension];

    const sorted = DIMENSION_ORDER
      .map(d => result.dimensionScores[d])
      .sort((a, b) => b.percentile - a.percentile);
    const weakest = DIMENSION_LABELS[sorted[sorted.length - 1].dimension];

    const prompt = `Du er en psykolog som spesialiserer seg på emosjonell intelligens. Gi en personlig analyse på norsk rettet mot en elev på videregående skole.

## Testresultat
- Total EQ-skår: persentil ${result.totalEQ}%
- Sterkeste dimensjon: ${strongest}
- Svakeste dimensjon: ${weakest}

## Dimensjonscorer
${dimSummary}

## Instruksjoner
Skriv en engasjerende, personlig analyse (maks 400 ord) med disse seksjonene:

1. **Din EQ-profil** — Gi et helhetsbilde av personens emosjonelle intelligens. Beskriv hva det betyr å ha ${strongest} som sterkeste side.
2. **Dine EQ-styrker** — Konkrete eksempler på hvordan personens styrker viser seg i hverdagen
3. **Utviklingsområder** — Hva personen kan jobbe med (skriv positivt og konstruktivt, unngå å si "dårlig")
4. **I skole og relasjoner** — Hvordan EQ-profilen påvirker vennskap, gruppearbeid og skolearbeid
5. **Treningsplan for EQ** — 3-4 konkrete øvelser personen kan gjøre for å styrke sin emosjonelle intelligens

Vær oppmuntrende og praktisk. Understrek at EQ kan trenes. Skriv som om du snakker med eleven direkte. Unngå å nevne persentiler direkte.

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

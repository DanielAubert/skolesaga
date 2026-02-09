import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { P16Result } from '@/lib/types/personality-16';
import {
  DIMENSION_LABELS, DIMENSION_ORDER, TYPE_NICKNAMES, TYPE_DESCRIPTIONS,
} from '@/lib/types/personality-16';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const result = await request.json() as P16Result;

    if (!result || !result.type || !result.dimensions) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    const dimSummary = DIMENSION_ORDER.map(dim => {
      const score = result.dimensions[dim];
      const [labelA, labelB] = DIMENSION_LABELS[dim];
      return `- ${labelA} vs ${labelB}: ${score.scoreA}% vs ${score.scoreB}% → ${score.winner}`;
    }).join('\n');

    const nickname = TYPE_NICKNAMES[result.type] || result.type;
    const typeDesc = TYPE_DESCRIPTIONS[result.type] || '';

    const prompt = `Du er en personlighetspsykolog som analyserer resultatene fra en personlighetstype-test basert på Jungs typeteori. Gi en personlig analyse på norsk.

## Testresultat
- Type: ${result.type} — "${nickname}"
- Beskrivelse: ${typeDesc}

## Dimensjonsscorer
${dimSummary}

## Instruksjoner
Skriv en engasjerende, personlig analyse (maks 400 ord) med disse seksjonene:

1. **Din type: ${result.type} — ${nickname}** — Levende beskrivelse av hva denne typen er kjent for
2. **Dine styrker** — Hva som gjør denne typen verdifull, med konkrete eksempler
3. **I skole og arbeidsliv** — Hvordan denne typen lærer best, samarbeider, og hvilke karrierer som passer
4. **Relasjoner** — Hvordan denne typen er i vennskap og sosiale sammenhenger
5. **Tips for utvikling** — 2-3 konkrete forslag basert på dimensjonsscorene

Vær oppmuntrende og engasjerende. Bruk norsk. Unngå å nevne prosentandeler direkte. Skriv som om du presenterer resultatene ansikt til ansikt.

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

import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { IQResult, CognitiveDomain } from '@/lib/types/iq-test';
import { DOMAIN_LABELS } from '@/lib/types/iq-test';

const anthropic = new Anthropic();

const DOMAIN_ORDER: CognitiveDomain[] = [
  'tallresonnering', 'verbal', 'logisk',
  'monstergjenkjenning', 'romlig', 'arbeidsminne',
];

export async function POST(request: Request) {
  try {
    const result = await request.json() as IQResult;

    if (!result || !result.domainScores || !result.estimatedIQ) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    // Bygg domeneoversikt
    const domainSummary = DOMAIN_ORDER.map(domain => {
      const score = result.domainScores[domain];
      return `- ${DOMAIN_LABELS[domain]}: ${score.correct}/${score.total} riktige, persentil ${score.percentile}%, gjennomsnittlig vanskelighetsgrad ${score.avgDifficulty.toFixed(1)}`;
    }).join('\n');

    // Sorter domener etter percentil
    const sorted = DOMAIN_ORDER
      .map(d => ({ domain: d, ...result.domainScores[d] }))
      .sort((a, b) => b.percentile - a.percentile);

    const strongest = sorted.slice(0, 2).map(s => DOMAIN_LABELS[s.domain]).join(' og ');
    const weakest = sorted.slice(-2).map(s => DOMAIN_LABELS[s.domain]).join(' og ');

    const prompt = `Du er en kognitiv psykolog som analyserer resultatene fra en adaptiv IQ-test. Gi en kort, personlig analyse på norsk.

## Testresultat
- Estimert IQ: ${result.estimatedIQ} (95% KI: ${result.confidenceInterval.low}–${result.confidenceInterval.high})
- Totalt: ${result.correctCount} av ${result.totalQuestions} riktige (${Math.round(result.correctCount / result.totalQuestions * 100)}%)
- Standardfeil: ${result.se.toFixed(2)}

## Domenescorer
${domainSummary}

## Observasjoner
- Sterkeste domener: ${strongest}
- Svakeste domener: ${weakest}

## Instruksjoner
Skriv en kort, personlig analyse (maks 300 ord) med disse seksjonene:

1. **Overordnet vurdering** — Kort om hva IQ-estimatet betyr og hvor testpersonen plasserer seg
2. **Kognitive styrker** — Hva testpersonen er spesielt god på, basert på domenescorene
3. **Utviklingsområder** — Hvor det er rom for forbedring
4. **Mønster** — Interessante mønstre i profilen (f.eks. stor forskjell mellom verbal og romlig)

Vær oppmuntrende men ærlig. Bruk norsk. Ikke nevn at dette er en online test eller en forenklet test. Skriv som om du presenterer resultatene ansikt til ansikt.

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

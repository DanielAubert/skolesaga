import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import type { PersonalityResult, PersonalityTrait } from '@/lib/types/personality-test';
import { TRAIT_LABELS, FACET_LABELS, TRAIT_ORDER } from '@/lib/types/personality-test';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const result = await request.json() as PersonalityResult;

    if (!result || !result.traitScores) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    // Build trait summary
    const traitSummary = TRAIT_ORDER.map(trait => {
      const score = result.traitScores[trait];
      const facetDetails = score.facetScores
        .map(fs => `${FACET_LABELS[fs.facet]}: ${fs.mean.toFixed(1)}/5`)
        .join(', ');
      return `- ${TRAIT_LABELS[trait]}: snitt ${score.rawMean.toFixed(2)}/5, persentil ${score.percentile}% (${score.label})\n  Fasetter: ${facetDetails}`;
    }).join('\n');

    // Sort by percentile
    const sorted = TRAIT_ORDER
      .map(t => ({ traitKey: t, ...result.traitScores[t] }))
      .sort((a, b) => b.percentile - a.percentile);

    const strongest = sorted.slice(0, 2).map(s => TRAIT_LABELS[s.traitKey]).join(' og ');
    const lowest = sorted.slice(-2).map(s => TRAIT_LABELS[s.traitKey]).join(' og ');

    const prompt = `Du er en personlighetspsykolog som analyserer resultatene fra en Big Five personlighetstest. Gi en kort, personlig analyse på norsk.

## Testresultat (Big Five / OCEAN)
${traitSummary}

## Observasjoner
- Høyeste trekk: ${strongest}
- Laveste trekk: ${lowest}

## Instruksjoner
Skriv en kort, personlig analyse (maks 400 ord) med disse seksjonene:

1. **Din personlighetsprofil** — Kort overordnet beskrivelse av profilen og hva den sier om personen
2. **Dine styrker** — Hva som kjennetegner personen basert på de sterkeste trekkene, med konkrete eksempler
3. **Interessante mønstre** — Fasetter eller trekk-kombinasjoner som skiller seg ut
4. **I skole og arbeidsliv** — Praktiske implikasjoner for læring, samarbeid og karriere
5. **Tips for personlig utvikling** — 2-3 konkrete forslag basert på profilen

Vær oppmuntrende men ærlig. Bruk norsk. Skriv som om du presenterer resultatene ansikt til ansikt. Unngå å nevne persentiler direkte — beskriv heller med naturlig språk (f.eks. "du scorer høyere enn de fleste" eller "du har en moderat tendens til...").

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

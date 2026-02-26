import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import type { EnneagramResult } from '@/lib/types/enneagram';
import { TYPE_NAMES, TYPE_SUBTITLES, ENNEAGRAM_ORDER } from '@/lib/types/enneagram';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Du må være innlogget' }, { status: 401 });
    }

    const result = await request.json() as EnneagramResult;

    if (!result || !result.typeScores || !result.dominantType) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    const typeSummary = ENNEAGRAM_ORDER.map(t => {
      const score = result.typeScores[t];
      return `- Type ${t} (${TYPE_NAMES[t]}): snitt ${score.rawMean.toFixed(2)}/5, persentil ${score.percentile}% (${score.label})`;
    }).join('\n');

    const dominant = `Type ${result.dominantType} — ${TYPE_NAMES[result.dominantType]} (${TYPE_SUBTITLES[result.dominantType]})`;
    const wing = `Type ${result.wing} — ${TYPE_NAMES[result.wing]}`;

    const prompt = `Du er en enneagram-ekspert som analyserer resultatene fra en enneagramtest. Gi en personlig analyse på norsk rettet mot en elev på videregående skole.

## Testresultat
- Dominerende type: ${dominant}
- Vinge: ${wing}

## Typescorer
${typeSummary}

## Instruksjoner
Skriv en engasjerende, personlig analyse (maks 450 ord) med disse seksjonene:

1. **Din enneagramtype** — Beskriv hva det betyr å være ${TYPE_NAMES[result.dominantType]} med vinge ${result.wing}. Forklar kort hva enneagrammet sier om deres grunnleggende motivasjon.
2. **Dine styrker** — Konkrete styrker som kjennetegner denne typen
3. **Vekstmuligheter** — Områder der denne typen kan vokse og utvikle seg (skriv positivt og oppmuntrende)
4. **I skole og relasjoner** — Hvordan typen fungerer i skolearbeid, vennskap og samarbeid
5. **Tips for personlig utvikling** — 3-4 konkrete, handlingsrettede tips

Vær oppmuntrende og innsiktsfull. Skriv som om du snakker med eleven direkte. Unngå å nevne persentiler — beskriv heller med naturlig språk. Fokuser på vekst og muligheter.

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

import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import type { RIASECResult } from '@/lib/types/riasec';
import { AREA_LABELS, AREA_ORDER, AREA_CAREERS } from '@/lib/types/riasec';

const anthropic = new Anthropic();

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Du må være innlogget' }, { status: 401 });
    }

    const result = await request.json() as RIASECResult;

    if (!result || !result.areaScores || !result.hollandCode) {
      return NextResponse.json(
        { error: 'Mangler testresultat' },
        { status: 400 },
      );
    }

    const areaSummary = AREA_ORDER.map(area => {
      const score = result.areaScores[area];
      return `- ${AREA_LABELS[area]} (${area}): snitt ${score.rawMean.toFixed(2)}/5, persentil ${score.percentile}% (${score.label})`;
    }).join('\n');

    const sorted = AREA_ORDER
      .map(a => result.areaScores[a])
      .sort((a, b) => b.percentile - a.percentile);

    const topAreas = sorted.slice(0, 3);
    const topCareers = topAreas
      .map(s => `${AREA_LABELS[s.area]}: ${AREA_CAREERS[s.area].join(', ')}`)
      .join('\n');

    const prompt = `Du er en karriereveileder som analyserer resultatene fra en RIASEC yrkesinteressetest (Hollands modell). Gi en personlig analyse på norsk rettet mot en norsk elev på videregående skole.

## Testresultat
- Holland-kode: ${result.hollandCode}
- Sterkeste områder: ${topAreas.map(s => AREA_LABELS[s.area]).join(', ')}

## Interessescorer
${areaSummary}

## Relevante yrker
${topCareers}

## Instruksjoner
Skriv en engasjerende, personlig analyse (maks 400 ord) med disse seksjonene:

1. **Din interesseprofil** — Hva Holland-koden ${result.hollandCode} forteller om personens interesser
2. **Dine sterkeste sider** — Hva som kjennetegner personen basert på toppområdene
3. **Studieretninger** — Konkrete studieretninger på VGS og høyere utdanning som passer profilen
4. **Karrieremuligheter** — 5-8 konkrete yrker som passer godt, med kort forklaring for hvert
5. **Tips for videre utforsking** — 2-3 konkrete ting eleven kan gjøre for å utforske sine interesser

Vær oppmuntrende og konkret. Tilpass til norsk kontekst (norske studieretninger, norske yrkestitler). Unngå å nevne persentiler direkte. Skriv som om du snakker med eleven.

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

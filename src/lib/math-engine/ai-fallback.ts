/**
 * Matematikkmotor - AI Fallback
 *
 * Bruker Claude API for å validere komplekse matematiske løsninger
 * som den regelbaserte motoren ikke kan håndtere.
 */

import Anthropic from '@anthropic-ai/sdk';
import type { ValidationResult, ValidationStep } from './types';

const anthropic = new Anthropic();

export interface AIValidationRequest {
  problem: string;
  steps: string[];
  expectedAnswer?: string;
  targetVariable?: string;
}

export interface AIValidationResponse {
  isValid: boolean;
  isComplete: boolean;
  stepsAnalysis: {
    stepIndex: number;
    isValid: boolean;
    feedback: string;
    rule?: string;
  }[];
  finalAnswer?: string;
  feedback: string;
  suggestions: string[];
}

/**
 * Validerer en matematisk løsning med Claude
 */
export async function validateWithAI(
  request: AIValidationRequest
): Promise<ValidationResult> {
  const { problem, steps, expectedAnswer, targetVariable } = request;

  const prompt = buildValidationPrompt(problem, steps, expectedAnswer, targetVariable);

  try {
    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    // Parse responsen
    const content = response.content[0];
    if (content.type !== 'text') {
      throw new Error('Unexpected response type');
    }

    const aiResponse = parseAIResponse(content.text);
    return convertToValidationResult(aiResponse, steps);
  } catch (error) {
    console.error('AI validation error:', error);
    // Returner en feilmelding som fallback
    return {
      isValid: false,
      isComplete: false,
      steps: steps.map((step, i) => ({
        stepIndex: i,
        expression: step,
        isValid: true, // Anta gyldig siden vi ikke kan verifisere
        feedback: 'Kunne ikke verifisere med AI.',
        confidence: 0.3,
      })),
      feedback: 'Kunne ikke fullføre AI-verifisering. Prøv igjen senere.',
      usedAIFallback: true,
    };
  }
}

/**
 * Bygger prompt for validering
 */
function buildValidationPrompt(
  problem: string,
  steps: string[],
  expectedAnswer?: string,
  targetVariable?: string
): string {
  const stepsText = steps.map((s, i) => `Steg ${i + 1}: ${s}`).join('\n');

  return `Du er en matematikklærer som skal vurdere en elevs steg-for-steg løsning av en matematikkoppgave for 8. klasse.

Oppgave: ${problem}
${targetVariable ? `Finn verdien av: ${targetVariable}` : ''}
${expectedAnswer ? `Forventet svar: ${expectedAnswer}` : ''}

Elevens løsning:
${stepsText}

Analyser hvert steg og gi tilbakemelding på norsk. Svar i følgende JSON-format:
{
  "isValid": true/false (er hele løsningen matematisk korrekt?),
  "isComplete": true/false (har eleven kommet frem til det endelige svaret?),
  "stepsAnalysis": [
    {
      "stepIndex": 0,
      "isValid": true/false,
      "feedback": "Tilbakemelding på norsk",
      "rule": "Navn på matematisk regel som ble brukt (valgfritt)"
    }
  ],
  "finalAnswer": "Det endelige svaret hvis funnet",
  "feedback": "Overordnet tilbakemelding til eleven",
  "suggestions": ["Tips for å forbedre løsningen"]
}

Viktig:
- Vær oppmuntrende men ærlig
- Forklar hva som er feil på en pedagogisk måte
- Gi konkrete tips for hvordan eleven kan forbedre seg
- Svar KUN med JSON, ingen annen tekst`;
}

/**
 * Parser AI-respons til strukturert format
 */
function parseAIResponse(text: string): AIValidationResponse {
  try {
    // Finn JSON i responsen (kan være omgitt av markdown code blocks)
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No JSON found in response');
    }

    const parsed = JSON.parse(jsonMatch[0]);

    return {
      isValid: Boolean(parsed.isValid),
      isComplete: Boolean(parsed.isComplete),
      stepsAnalysis: Array.isArray(parsed.stepsAnalysis)
        ? parsed.stepsAnalysis.map((s: {
            stepIndex?: number;
            isValid?: boolean;
            feedback?: string;
            rule?: string;
          }, i: number) => ({
            stepIndex: s.stepIndex ?? i,
            isValid: Boolean(s.isValid),
            feedback: String(s.feedback || ''),
            rule: s.rule,
          }))
        : [],
      finalAnswer: parsed.finalAnswer,
      feedback: String(parsed.feedback || 'Ingen tilbakemelding.'),
      suggestions: Array.isArray(parsed.suggestions)
        ? parsed.suggestions.map(String)
        : [],
    };
  } catch (error) {
    console.error('Error parsing AI response:', error);
    return {
      isValid: false,
      isComplete: false,
      stepsAnalysis: [],
      feedback: 'Kunne ikke tolke AI-respons.',
      suggestions: [],
    };
  }
}

/**
 * Konverterer AI-respons til standard ValidationResult
 */
function convertToValidationResult(
  aiResponse: AIValidationResponse,
  steps: string[]
): ValidationResult {
  const validationSteps: ValidationStep[] = steps.map((step, i) => {
    const analysis = aiResponse.stepsAnalysis.find(a => a.stepIndex === i);
    return {
      stepIndex: i,
      expression: step,
      isValid: analysis?.isValid ?? true,
      feedback: analysis?.feedback || '',
      rule: analysis?.rule,
      confidence: 0.85, // AI har generelt høy konfidensgrad
    };
  });

  return {
    isValid: aiResponse.isValid,
    isComplete: aiResponse.isComplete,
    steps: validationSteps,
    finalAnswer: aiResponse.finalAnswer,
    feedback: aiResponse.feedback,
    suggestions: aiResponse.suggestions.length > 0 ? aiResponse.suggestions : undefined,
    usedAIFallback: true,
  };
}

/**
 * Sjekker om et problem er for komplekst for regelbasert validering
 */
export function isComplexProblem(problem: string): boolean {
  // Sjekk for tegn på kompleksitet
  const complexityIndicators = [
    // Høyere grad likninger
    /x\^[3-9]|x\^\d{2,}/,
    // Røtter
    /sqrt|\\sqrt/,
    // Trigonometri
    /sin|cos|tan|cot/,
    // Logaritmer
    /log|ln/,
    // Sammensatte brøker
    /\\frac\{.*\\frac/,
    // Lange uttrykk
    /.{80,}/,
  ];

  return complexityIndicators.some(pattern => pattern.test(problem));
}

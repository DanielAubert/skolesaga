/**
 * KI-sensorens modellstige — to synlige nivåer (panel-testet juli 2026).
 *
 * Designbeslutning (produkteier): INGEN synlig Haiku-tier — et tynt gratisnivå
 * vaksinerer mot produktet («nesten verdiløst» — toppjegeren). Gratis-smaken er
 * samme kvalitet som standard (Sonnet); kostnaden (~0,4–0,8 kr/vurdering) er
 * marginal. Haiku finnes kun som skjult nødbrems via AI_SENSOR_MODEL_OVERRIDE.
 *
 * Navnene sier hva man FÅR (3 av 4 paneltestere ba om det uavhengig).
 */

export interface SensorTier {
  id: 1 | 2;
  navn: string;
  beskrivelse: string;
  model: string;
  maxOutputTokens: number;
  klipp: number;
}

export const SENSOR_TIERS: Record<number, SensorTier> = {
  1: {
    id: 1,
    navn: 'Karakter + hvorfor',
    beskrivelse:
      'Bokstavkarakter, kort dom, og en vurdering som siterer dine egne formuleringer og kobler dem til det sensor faktisk ser etter.',
    model: process.env.AI_SENSOR_MODEL_OVERRIDE || 'claude-sonnet-4-6',
    maxOutputTokens: 2000,
    klipp: 1,
  },
  2: {
    id: 2,
    navn: 'Ditt avsnitt til A',
    beskrivelse:
      'Alt fra standard + A-stresstest (sterkeste innvending? betingelsen som snur? bar veiingen?), ett av dine avsnitt omskrevet til toppnivå, og anbefalt neste øvelse.',
    model: process.env.AI_SENSOR_MODEL_OVERRIDE || 'claude-opus-4-8',
    maxOutputTokens: 3500,
    klipp: 3,
  },
};

export function getTier(id: unknown): SensorTier {
  const n = typeof id === 'number' ? id : parseInt(String(id ?? '1'), 10);
  return SENSOR_TIERS[n] ?? SENSOR_TIERS[1];
}

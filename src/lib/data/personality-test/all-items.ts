import type { PersonalityItem } from '@/lib/types/personality-test';
import { opennessItems } from './items-openness';
import { conscientiousnessItems } from './items-conscientiousness';
import { extraversionItems } from './items-extraversion';
import { agreeablenessItems } from './items-agreeableness';
import { neuroticismItems } from './items-neuroticism';

const traitGroups = [
  opennessItems,
  conscientiousnessItems,
  extraversionItems,
  agreeablenessItems,
  neuroticismItems,
];

/**
 * Interleave items round-robin across traits for better test experience.
 * Each "round" picks one item from each trait, so traits alternate.
 */
function interleaveItems(): PersonalityItem[] {
  const result: PersonalityItem[] = [];
  const maxLen = Math.max(...traitGroups.map(g => g.length));

  for (let i = 0; i < maxLen; i++) {
    for (const group of traitGroups) {
      if (i < group.length) {
        result.push(group[i]);
      }
    }
  }

  return result;
}

export const allPersonalityItems: PersonalityItem[] = interleaveItems();
export const TOTAL_ITEMS = allPersonalityItems.length; // 60

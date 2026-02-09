import type { EQItem } from '@/lib/types/eq-test';
import { selfAwarenessItems } from './items-self-awareness';
import { selfRegulationItems } from './items-self-regulation';
import { motivationItems } from './items-motivation';
import { empathyItems } from './items-empathy';
import { socialSkillsItems } from './items-social-skills';

const groups = [
  selfAwarenessItems, selfRegulationItems, motivationItems,
  empathyItems, socialSkillsItems,
];

function interleaveItems(): EQItem[] {
  const result: EQItem[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

export const allEQItems: EQItem[] = interleaveItems();
export const TOTAL_EQ_ITEMS = allEQItems.length;

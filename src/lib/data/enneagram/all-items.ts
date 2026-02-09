import type { EnneagramItem } from '@/lib/types/enneagram';
import { type1Items } from './items-type1';
import { type2Items } from './items-type2';
import { type3Items } from './items-type3';
import { type4Items } from './items-type4';
import { type5Items } from './items-type5';
import { type6Items } from './items-type6';
import { type7Items } from './items-type7';
import { type8Items } from './items-type8';
import { type9Items } from './items-type9';

const groups = [
  type1Items, type2Items, type3Items,
  type4Items, type5Items, type6Items,
  type7Items, type8Items, type9Items,
];

function interleaveItems(): EnneagramItem[] {
  const result: EnneagramItem[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

export const allEnneagramItems: EnneagramItem[] = interleaveItems();
export const TOTAL_ENNEAGRAM_ITEMS = allEnneagramItems.length;

import type { P16Item } from '@/lib/types/personality-16';
import { eiItems } from './items-ei';
import { snItems } from './items-sn';
import { tfItems } from './items-tf';
import { jpItems } from './items-jp';

const groups = [eiItems, snItems, tfItems, jpItems];

function interleaveItems(): P16Item[] {
  const result: P16Item[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

export const allP16Items: P16Item[] = interleaveItems();
export const TOTAL_P16_ITEMS = allP16Items.length;

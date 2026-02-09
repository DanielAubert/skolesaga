import type { RIASECItem } from '@/lib/types/riasec';
import { realisticItems } from './items-realistic';
import { investigativeItems } from './items-investigative';
import { artisticItems } from './items-artistic';
import { socialItems } from './items-social';
import { enterprisingItems } from './items-enterprising';
import { conventionalItems } from './items-conventional';

const groups = [realisticItems, investigativeItems, artisticItems, socialItems, enterprisingItems, conventionalItems];

function interleaveItems(): RIASECItem[] {
  const result: RIASECItem[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

export const allRIASECItems: RIASECItem[] = interleaveItems();
export const TOTAL_RIASEC_ITEMS = allRIASECItems.length;

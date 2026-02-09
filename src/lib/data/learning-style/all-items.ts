import type { LearningItem } from '@/lib/types/learning-style';
import { visualItems } from './items-visual';
import { auditoryItems } from './items-auditory';
import { readwriteItems } from './items-readwrite';
import { kinestheticItems } from './items-kinesthetic';

const groups = [visualItems, auditoryItems, readwriteItems, kinestheticItems];

function interleaveItems(): LearningItem[] {
  const result: LearningItem[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

export const allLearningItems: LearningItem[] = interleaveItems();
export const TOTAL_LEARNING_ITEMS = allLearningItems.length;

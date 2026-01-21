'use client';

import { Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getReadingTimeBadgeVariant } from '@/lib/utils/reading-time';

export interface ReadingTimeBadgeProps {
  minutes: number;
  className?: string;
}

export function ReadingTimeBadge({ minutes, className }: ReadingTimeBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium",
        getReadingTimeBadgeVariant(minutes),
        className
      )}
    >
      <Clock className="h-3.5 w-3.5" />
      <span>{minutes} min lesetid</span>
    </div>
  );
}

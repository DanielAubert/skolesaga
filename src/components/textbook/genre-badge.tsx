'use client';

import { Badge } from '@/components/ui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import type { GenreTag } from '@/lib/textbook/genre-tag';

interface GenreBadgeProps {
  tag: GenreTag;
  className?: string;
}

/**
 * Liten hoverbar badge som viser sjanger-/drill-prefikset til en oppgave.
 * Selve prefiks-teksten er tatt ut av brødteksten (se extractGenreTag) og vises
 * her i stedet, med forklaring av koden + oppgavens forankring i en tooltip.
 * (Ikke title-attributt — den ga dobbel tooltip oppå den stylede.)
 */
export function GenreBadge({ tag, className }: GenreBadgeProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="outline"
            className={`cursor-help text-[0.7rem] font-medium text-muted-foreground border-muted-foreground/30 ${className ?? ''}`}
          >
            {tag.label}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-sm text-xs leading-snug whitespace-pre-line">
          {tag.tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

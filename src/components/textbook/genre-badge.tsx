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
 * her i stedet, med hele parentes-innholdet i en tooltip. Fallback via
 * title-attributt for touch-enheter uten hover.
 */
export function GenreBadge({ tag, className }: GenreBadgeProps) {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge
            variant="outline"
            title={tag.tooltip}
            className={`cursor-help text-[0.7rem] font-medium text-muted-foreground border-muted-foreground/30 ${className ?? ''}`}
          >
            {tag.label}
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs text-xs leading-snug">
          {tag.tooltip}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

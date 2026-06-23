'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CompetenceGoalsDropdownProps {
  goals: string[];
}

export function CompetenceGoalsDropdown({ goals }: CompetenceGoalsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!goals || goals.length === 0) {
    return null;
  }

  return (
    <div className="mt-4">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="gap-2 text-muted-foreground hover:text-foreground"
      >
        <Target className="h-4 w-4" />
        <span>Kompetansemål ({goals.length})</span>
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </Button>

      {isOpen && (
        <div className="mt-3 p-4 bg-muted/50 rounded-lg border">
          <h3 className="text-sm font-medium mb-3 text-foreground">
            Dette kapitlet dekker følgende kompetansemål (LK20):
          </h3>
          <ul className="space-y-2">
            {goals.map((goal, index) => (
              <li
                key={index}
                className="text-sm text-muted-foreground flex items-start gap-2"
              >
                <span className="text-primary font-medium shrink-0">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

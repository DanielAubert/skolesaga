"use client";

import { useHoderegningStats } from "@/lib/hoderegning/stats";
import { Calculator } from "lucide-react";

interface StatsCounterProps {
  className?: string;
  compact?: boolean;
}

export function StatsCounter({ className = "", compact = false }: StatsCounterProps) {
  const { dailyProblems, totalProblems } = useHoderegningStats();

  if (compact) {
    return (
      <div className={`flex items-center gap-3 text-sm text-muted-foreground ${className}`}>
        <span>I dag: <strong className="text-foreground">{dailyProblems}</strong></span>
        <span className="text-muted-foreground/50">|</span>
        <span>Totalt: <strong className="text-foreground">{totalProblems}</strong></span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 p-3 rounded-lg bg-muted/50 ${className}`}>
      <Calculator className="h-5 w-5 text-muted-foreground" />
      <div className="flex gap-4 text-sm">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-primary">{dailyProblems}</span>
          <span className="text-xs text-muted-foreground">i dag</span>
        </div>
        <div className="w-px bg-border" />
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold">{totalProblems}</span>
          <span className="text-xs text-muted-foreground">totalt</span>
        </div>
      </div>
    </div>
  );
}

'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { DynamicMathExample } from "./dynamic-math-example";

interface Exercise {
  id: string;
  number: string;
  name: string;
  description: string;
  gradient: string;
  subTasks: { task: string }[];
}

interface ExerciseCardsProps {
  exercises: Exercise[];
  basePath: string;  // f.eks. "/hoderegning/gh-algebra/trening"
  gridCols?: string; // f.eks. "lg:grid-cols-5"
}

export function ExerciseCards({ exercises, basePath, gridCols = "lg:grid-cols-5" }: ExerciseCardsProps) {
  return (
    <div className={`grid md:grid-cols-2 ${gridCols} gap-3`}>
      {exercises.map((ex) => (
        <Card key={ex.id} className={`bg-gradient-to-br ${ex.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
          <CardContent className="p-3 text-center space-y-1.5">
            <h3 className="text-sm font-bold text-white leading-tight">
              Oppgave {ex.number}
            </h3>
            <p className="text-xs text-white/90 leading-tight font-medium">
              {ex.name}
            </p>
            <p className="text-xs text-white/70 leading-tight">
              {ex.description}
            </p>
            <DynamicMathExample
              examples={ex.subTasks.slice(0, 2).map(st => st.task.replace(/\$/g, ''))}
            />
            <div className="grid grid-cols-1 gap-1 pt-1">
              <Link href={`${basePath}/${ex.id}`}>
                <Button size="sm" className="w-full bg-white text-gray-700 hover:bg-white/90 h-7 text-xs px-2">
                  <Dumbbell className="mr-1 h-3 w-3" />
                  Tren
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Target, Trophy, Award, Play, Swords, Dumbbell } from "lucide-react";
import Link from "next/link";
import { MathExampleBox } from "./math-example-box";
import { DynamicMathExample } from "./dynamic-math-example";
import type { LucideIcon } from "lucide-react";

interface Module {
  id: number;
  name: string;
  description: string;
  examples: string[];
  gradient: string;
  icon: LucideIcon;
  textColor: string;
}

interface Exercise {
  id: string;
  number: string;
  name: string;
  description: string;
  gradient: string;
  subTasks: { task: string }[];
}

const modules: Module[] = [
  {
    id: 1,
    name: "Grunnleggende potenser",
    description: "Enkle potenser som 2³ og 5²",
    examples: ["2^3 = __", "5^2 = __"],
    gradient: "from-amber-400 to-orange-600",
    icon: Target,
    textColor: "text-amber-600"
  },
  {
    id: 2,
    name: "Potens ganger tall",
    description: "Potens multiplisert med tall",
    examples: ["4 · 3^2 = __", "2 · 5^3 = __"],
    gradient: "from-orange-400 to-red-600",
    icon: Trophy,
    textColor: "text-orange-600"
  },
  {
    id: 3,
    name: "Produkt av potenser",
    description: "To potenser ganget sammen",
    examples: ["2^2 · 3^2 = __", "2^3 · 5^2 = __"],
    gradient: "from-red-400 to-rose-600",
    icon: Award,
    textColor: "text-red-600"
  },
  {
    id: 4,
    name: "Blandet potensregning",
    description: "Kombinasjon av alle typer",
    examples: ["3^2 · 2 = __", "2^2 · 3^2 = __"],
    gradient: "from-rose-400 to-pink-600",
    icon: Brain,
    textColor: "text-rose-600"
  },
];

export function PotenserModuleCards() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
      {modules.map((module) => {
        const IconComponent = module.icon;
        return (
          <Card key={module.id} className={`bg-gradient-to-br ${module.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full`}>
            <CardContent className="p-3 text-center space-y-1.5">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                <IconComponent className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-sm font-bold text-white leading-tight">
                Oppgave {module.id}: {module.name}
              </h3>
              <p className="text-xs text-white/80 leading-tight">
                {module.description}
              </p>
              <MathExampleBox examples={module.examples} />
              <div className="grid grid-cols-2 gap-1 pt-1">
                <Link href={`/hoderegning/gh-potenser/oppgave-${module.id}/trening`}>
                  <Button size="sm" className={`w-full bg-white ${module.textColor} hover:bg-white/90 h-7 text-xs px-2`}>
                    <Play className="mr-1 h-3 w-3" />
                    Trening
                  </Button>
                </Link>
                <Link href={`/hoderegning/gh-potenser/oppgave-${module.id}/challenge`}>
                  <Button size="sm" variant="outline" className="w-full bg-white/20 text-white border-white/40 hover:bg-white/30 h-7 text-xs px-2">
                    <Swords className="mr-1 h-3 w-3" />
                    Challenge
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export function PotenserExerciseCards({ exercises }: { exercises: Exercise[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
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
              <Link href={`/hoderegning/gh-potenser/trening/${ex.id}`}>
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

"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import {
  Search,
  BookOpen,
  GraduationCap,
  Calculator,
  Brain,
  Sparkles,
  FileText,
  Code,
} from "lucide-react";
import type { TextbookCourse } from "@/lib/types/textbook";

type StaticItem = {
  id: string;
  label: string;
  hint?: string;
  href: string;
  icon: React.ReactNode;
  keywords?: string;
};

const GRADE_ITEMS: StaticItem[] = [
  { id: "grade-5", label: "5. klasse", href: "/bok/trinn/5", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-6", label: "6. klasse", href: "/bok/trinn/6", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-7", label: "7. klasse", href: "/bok/trinn/7", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-8", label: "8. klasse", href: "/bok/trinn/8", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-9", label: "9. klasse", href: "/bok/trinn/9", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-10", label: "10. klasse", href: "/bok/trinn/10", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-vg1", label: "VG1", href: "/bok/trinn/vg1", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-vg2", label: "VG2", href: "/bok/trinn/vg2", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-vg3", label: "VG3", href: "/bok/trinn/vg3", icon: <GraduationCap className="h-4 w-4" /> },
  { id: "grade-hoyere", label: "Høyere utdanning", href: "/bok/trinn/hoyere", icon: <GraduationCap className="h-4 w-4" /> },
];

const TOOL_ITEMS: StaticItem[] = [
  { id: "tool-poeng", label: "Poengkalkulator", hint: "Beregn opptakspoeng", href: "/poengkalkulator", icon: <Calculator className="h-4 w-4" /> },
  { id: "tool-hoderegning", label: "Hoderegning", hint: "Treningsoppgaver", href: "/hoderegning", icon: <Brain className="h-4 w-4" /> },
  { id: "tool-geogebra", label: "GeoGebra", href: "/geogebra", icon: <Calculator className="h-4 w-4" /> },
  { id: "tool-python", label: "Python", hint: "Programmering", href: "/book", icon: <Code className="h-4 w-4" /> },
  { id: "tool-ressurser", label: "Ressurser", href: "/ressurser", icon: <FileText className="h-4 w-4" /> },
];

const TEST_ITEMS: StaticItem[] = [
  { id: "test-iq", label: "IQ-test", href: "/iq-test/test", icon: <Sparkles className="h-4 w-4" />, keywords: "intelligens" },
  { id: "test-eq", label: "EQ-test", href: "/eq-test/test", icon: <Sparkles className="h-4 w-4" />, keywords: "følelser emosjonell" },
  { id: "test-pers", label: "Personlighetstest (Big Five)", href: "/personlighetstest/test", icon: <Sparkles className="h-4 w-4" />, keywords: "big five trekk" },
  { id: "test-pers16", label: "16 personlighetstyper", href: "/personlighetstyper/test", icon: <Sparkles className="h-4 w-4" />, keywords: "mbti myers briggs" },
  { id: "test-enn", label: "Enneagram", href: "/enneagram/test", icon: <Sparkles className="h-4 w-4" /> },
  { id: "test-laer", label: "Læringsstil", href: "/laeringsstil/test", icon: <Sparkles className="h-4 w-4" /> },
  { id: "test-yrke", label: "Yrkesinteresser (RIASEC)", href: "/yrkesinteresser/test", icon: <Sparkles className="h-4 w-4" />, keywords: "riasec holland" },
  { id: "test-overview", label: "Alle tester", href: "/test-deg-selv", icon: <Sparkles className="h-4 w-4" /> },
];

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [courses, setCourses] = useState<TextbookCourse[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  useEffect(() => {
    if (open && !loaded) {
      import("@/lib/data/textbook-courses").then((mod) => {
        setCourses(mod.TEXTBOOK_COURSES);
        setLoaded(true);
      });
    }
  }, [open, loaded]);

  const go = useCallback(
    (href: string) => {
      setOpen(false);
      setQuery("");
      router.push(href);
    },
    [router],
  );

  const showChapters = query.length >= 2;
  const courseItems = courses.map((c) => ({
    id: `course-${c.id}`,
    label: c.title,
    hint: c.level,
    href: `/bok/${c.id}`,
    keywords: c.description,
  }));

  const chapterItems = showChapters
    ? courses.flatMap((c) =>
        c.chapters.map((ch) => ({
          id: `chap-${ch.id}`,
          label: `${ch.number} ${ch.title}`,
          hint: c.title,
          href: `/bok/${c.id}/${ch.id}`,
          keywords: ch.topics?.join(" ") ?? "",
        })),
      )
    : [];

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setOpen(true)}
        className="relative h-9 justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-56"
        aria-label="Åpne søk"
      >
        <Search className="mr-2 h-4 w-4" />
        <span className="hidden lg:inline-flex">Søk i Skolesaga…</span>
        <span className="inline-flex lg:hidden">Søk…</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>

      <CommandDialog
        open={open}
        onOpenChange={setOpen}
        title="Søk i Skolesaga"
        description="Søk etter lærebøker, kapitler, trinn og verktøy"
      >
        <CommandInput
          placeholder="Søk etter lærebok, kapittel eller trinn…"
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>Ingen treff.</CommandEmpty>

          <CommandGroup heading="Trinn">
            {GRADE_ITEMS.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.keywords ?? ""}`}
                onSelect={() => go(item.href)}
              >
                {item.icon}
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Lærebøker">
            {courseItems.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.hint ?? ""} ${item.keywords ?? ""}`}
                onSelect={() => go(item.href)}
              >
                <BookOpen className="h-4 w-4" />
                <div className="flex flex-col">
                  <span>{item.label}</span>
                  {item.hint && <span className="text-xs text-muted-foreground">{item.hint}</span>}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          {showChapters && chapterItems.length > 0 && (
            <>
              <CommandSeparator />
              <CommandGroup heading="Kapitler">
                {chapterItems.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.label} ${item.hint} ${item.keywords}`}
                    onSelect={() => go(item.href)}
                  >
                    <FileText className="h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{item.label}</span>
                      <span className="text-xs text-muted-foreground">{item.hint}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          <CommandSeparator />

          <CommandGroup heading="Verktøy">
            {TOOL_ITEMS.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.hint ?? ""}`}
                onSelect={() => go(item.href)}
              >
                {item.icon}
                <div className="flex flex-col">
                  <span>{item.label}</span>
                  {item.hint && <span className="text-xs text-muted-foreground">{item.hint}</span>}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Tester">
            {TEST_ITEMS.map((item) => (
              <CommandItem
                key={item.id}
                value={`${item.label} ${item.keywords ?? ""}`}
                onSelect={() => go(item.href)}
              >
                {item.icon}
                <span>{item.label}</span>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}

'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, BookCheck, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { OrganizedQuizData } from '@/lib/data/quiz-data';

interface QuizBrowserProps {
  data: OrganizedQuizData[];
}

// Grade level categories for filtering
const gradeCategories = [
  { id: 'barneskole', name: 'Barneskole', grades: ['5', '6', '7'] },
  { id: 'ungdomsskole', name: 'Ungdomsskole', grades: ['8', '9', '10'] },
  { id: 'vgs', name: 'Videregående', grades: ['vg1', 'vg2', 'vg3', '1', '2', '3'] },
];

export function QuizBrowser({ data }: QuizBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGradeCategory, setSelectedGradeCategory] = useState<string | null>(null);
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());

  // Filter data based on search and grade category
  const filteredData = useMemo(() => {
    let filtered = data;

    // Filter by grade category
    if (selectedGradeCategory) {
      const category = gradeCategories.find(c => c.id === selectedGradeCategory);
      if (category) {
        filtered = filtered
          .map(subject => ({
            ...subject,
            grades: subject.grades.filter(g =>
              category.grades.some(cg => g.grade === cg || g.grade.toLowerCase() === cg)
            ),
          }))
          .filter(subject => subject.grades.length > 0);
      }
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(subject =>
        subject.subject.name.toLowerCase().includes(query) ||
        subject.subject.id.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [data, searchQuery, selectedGradeCategory]);

  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => {
      const next = new Set(prev);
      if (next.has(subjectId)) {
        next.delete(subjectId);
      } else {
        next.add(subjectId);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedSubjects(new Set(filteredData.map(s => s.subject.id)));
  };

  const collapseAll = () => {
    setExpandedSubjects(new Set());
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Filters */}
      <div className="bg-card rounded-xl border p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Søk etter fag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Grade Category Filter */}
        <div className="flex flex-wrap items-center gap-2">
          <Filter className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground mr-2">Klassetrinn:</span>
          <Button
            variant={selectedGradeCategory === null ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedGradeCategory(null)}
          >
            Alle
          </Button>
          {gradeCategories.map(category => (
            <Button
              key={category.id}
              variant={selectedGradeCategory === category.id ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedGradeCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-2 text-sm">
          <button
            onClick={expandAll}
            className="text-primary hover:underline"
          >
            Vis alle
          </button>
          <span className="text-muted-foreground">·</span>
          <button
            onClick={collapseAll}
            className="text-primary hover:underline"
          >
            Skjul alle
          </button>
          {(searchQuery || selectedGradeCategory) && (
            <>
              <span className="text-muted-foreground">·</span>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGradeCategory(null);
                }}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1"
              >
                <X className="w-3 h-3" />
                Nullstill filter
              </button>
            </>
          )}
        </div>
      </div>

      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Viser {filteredData.length} fag
        {selectedGradeCategory && ` for ${gradeCategories.find(c => c.id === selectedGradeCategory)?.name.toLowerCase()}`}
      </div>

      {/* Subject list */}
      <div className="space-y-3">
        {filteredData.map(subject => {
          const isExpanded = expandedSubjects.has(subject.subject.id);
          const totalChapters = subject.grades.reduce((sum, g) => sum + g.chapters.length, 0);
          const totalQuestions = subject.grades.reduce(
            (sum, g) => sum + g.chapters.reduce((cs, c) => cs + c.questionCount, 0),
            0
          );

          return (
            <div
              key={subject.subject.id}
              className="bg-card rounded-xl border overflow-hidden"
            >
              {/* Subject header */}
              <button
                onClick={() => toggleSubject(subject.subject.id)}
                className="w-full flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors text-left"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.subject.color} flex items-center justify-center flex-shrink-0`}
                >
                  <BookCheck className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg truncate">{subject.subject.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {subject.grades.map(g => g.gradeName).join(', ')}
                  </p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="text-right hidden sm:block">
                    <div className="text-sm font-medium">{totalChapters} kapitler</div>
                    <div className="text-xs text-muted-foreground">{totalQuestions} spørsmål</div>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                  />
                </div>
              </button>

              {/* Expanded content */}
              {isExpanded && (
                <div className="border-t bg-muted/30 p-4 space-y-4">
                  {subject.grades.map(grade => (
                    <div key={grade.grade}>
                      <h4 className="font-medium text-sm text-muted-foreground mb-2">
                        {grade.gradeName}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                        {grade.chapters.map(chapter => (
                          <Link
                            key={chapter.chapterId}
                            href={`/quiz/${chapter.chapterId}`}
                            className="flex items-center justify-between p-3 bg-background rounded-lg border hover:border-primary hover:shadow-sm transition-all group"
                          >
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                              {chapter.chapterName}
                            </span>
                            <Badge variant="secondary" className="text-xs">
                              {chapter.questionCount} spm
                            </Badge>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        {filteredData.length === 0 && (
          <div className="text-center py-12">
            <BookCheck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-medium text-lg mb-2">Ingen quizer funnet</h3>
            <p className="text-muted-foreground">
              Prøv å justere søket eller filteret ditt
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

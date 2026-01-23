'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  ChevronLeft,
  BookCheck,
  BookOpen,
  Library
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { OrganizedQuizData } from '@/lib/data/quiz-data';

interface QuizBrowserProps {
  data: OrganizedQuizData[];
}

// All grades in order (3x3 grid: 5-7, 8-10, VG1-VG3)
const allGrades = [
  { id: '5', name: '5. klasse', color: 'from-green-500 to-emerald-600' },
  { id: '6', name: '6. klasse', color: 'from-green-500 to-emerald-600' },
  { id: '7', name: '7. klasse', color: 'from-green-500 to-emerald-600' },
  { id: '8', name: '8. klasse', color: 'from-blue-500 to-indigo-600' },
  { id: '9', name: '9. klasse', color: 'from-blue-500 to-indigo-600' },
  { id: '10', name: '10. klasse', color: 'from-blue-500 to-indigo-600' },
  { id: 'vg1', name: 'VG1', color: 'from-purple-500 to-violet-600' },
  { id: 'vg2', name: 'VG2', color: 'from-purple-500 to-violet-600' },
  { id: 'vg3', name: 'VG3', color: 'from-purple-500 to-violet-600' },
];

// Grade display names
const gradeDisplayNames: Record<string, string> = {
  '5': '5. klasse',
  '6': '6. klasse',
  '7': '7. klasse',
  '8': '8. klasse',
  '9': '9. klasse',
  '10': '10. klasse',
  'vg1': 'VG1',
  'vg2': 'VG2',
  'vg3': 'VG3',
  'vg': 'VG1',
  '1': 'VG1',
  '2': 'VG2',
  '3': 'VG3',
};

type NavigationStep = 'grade' | 'subject' | 'chapters';

export function QuizBrowser({ data }: QuizBrowserProps) {
  const [currentStep, setCurrentStep] = useState<NavigationStep>('grade');
  const [selectedGrade, setSelectedGrade] = useState<string | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Get grades with quiz counts
  const gradesWithCounts = useMemo(() => {
    return allGrades.map(grade => {
      // Count subjects and questions for this grade
      const gradeSubjects = data.filter(subject =>
        subject.grades.some(g =>
          g.grade === grade.id ||
          g.grade.toLowerCase() === grade.id ||
          // Handle VG variants
          (grade.id === 'vg1' && (g.grade === 'vg' || g.grade === '1')) ||
          (grade.id === 'vg2' && g.grade === '2') ||
          (grade.id === 'vg3' && g.grade === '3')
        )
      );
      const subjectCount = gradeSubjects.length;
      const questionCount = gradeSubjects.reduce((sum, subject) => {
        const relevantGrades = subject.grades.filter(g =>
          g.grade === grade.id ||
          g.grade.toLowerCase() === grade.id ||
          (grade.id === 'vg1' && (g.grade === 'vg' || g.grade === '1')) ||
          (grade.id === 'vg2' && g.grade === '2') ||
          (grade.id === 'vg3' && g.grade === '3')
        );
        return sum + relevantGrades.reduce((gs, g) =>
          gs + g.chapters.reduce((cs, c) => cs + c.questionCount, 0), 0
        );
      }, 0);

      return {
        ...grade,
        subjectCount,
        questionCount,
        hasContent: subjectCount > 0,
      };
    });
  }, [data]);

  // Helper to check if a grade matches
  const gradeMatches = (gradeData: string, selectedId: string) => {
    if (gradeData === selectedId || gradeData.toLowerCase() === selectedId) return true;
    // Handle VG variants
    if (selectedId === 'vg1' && (gradeData === 'vg' || gradeData === '1')) return true;
    if (selectedId === 'vg2' && gradeData === '2') return true;
    if (selectedId === 'vg3' && gradeData === '3') return true;
    return false;
  };

  // Get available subjects for selected grade
  const availableSubjects = useMemo(() => {
    if (!selectedGrade) return [];

    return data
      .filter(subject =>
        subject.grades.some(g => gradeMatches(g.grade, selectedGrade))
      )
      .map(subject => {
        const gradeData = subject.grades.find(g => gradeMatches(g.grade, selectedGrade));
        const chapterCount = gradeData?.chapters.length || 0;
        const questionCount = gradeData?.chapters.reduce((sum, c) => sum + c.questionCount, 0) || 0;
        return {
          ...subject,
          chapterCount,
          questionCount,
        };
      })
      .sort((a, b) => a.subject.name.localeCompare(b.subject.name, 'nb'));
  }, [selectedGrade, data]);

  // Get chapters for selected subject and grade
  const availableChapters = useMemo(() => {
    if (!selectedSubject || !selectedGrade) return [];

    const subject = data.find(s => s.subject.id === selectedSubject);
    if (!subject) return [];

    const gradeData = subject.grades.find(g => gradeMatches(g.grade, selectedGrade));
    return gradeData?.chapters || [];
  }, [selectedSubject, selectedGrade, data]);

  // Get selected subject data
  const selectedSubjectData = useMemo(() => {
    if (!selectedSubject) return null;
    return data.find(s => s.subject.id === selectedSubject);
  }, [selectedSubject, data]);

  // Navigation handlers
  const selectGrade = (gradeId: string) => {
    setSelectedGrade(gradeId);
    setSelectedSubject(null);
    setCurrentStep('subject');
  };

  const selectSubject = (subjectId: string) => {
    setSelectedSubject(subjectId);
    setCurrentStep('chapters');
  };

  const goBack = () => {
    if (currentStep === 'chapters') {
      setSelectedSubject(null);
      setCurrentStep('subject');
    } else if (currentStep === 'subject') {
      setSelectedGrade(null);
      setCurrentStep('grade');
    }
  };

  // Breadcrumb
  const getBreadcrumb = () => {
    const parts: { label: string; onClick?: () => void }[] = [];

    if (selectedGrade) {
      parts.push({
        label: gradeDisplayNames[selectedGrade] || selectedGrade,
        onClick: currentStep !== 'subject' ? () => {
          setSelectedSubject(null);
          setCurrentStep('subject');
        } : undefined,
      });
    }

    if (selectedSubject && selectedSubjectData) {
      parts.push({
        label: selectedSubjectData.subject.name,
      });
    }

    return parts;
  };

  const breadcrumb = getBreadcrumb();

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Breadcrumb navigation */}
      {currentStep !== 'grade' && (
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            variant="ghost"
            size="sm"
            onClick={goBack}
            className="gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            Tilbake
          </Button>
          <span className="text-muted-foreground">|</span>
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => {
                setSelectedGrade(null);
                setSelectedSubject(null);
                setCurrentStep('grade');
              }}
              className="text-muted-foreground hover:text-foreground"
            >
              Quiz
            </button>
            {breadcrumb.map((part, idx) => (
              <span key={idx} className="flex items-center gap-1">
                <ChevronRight className="w-3 h-3 text-muted-foreground" />
                {part.onClick ? (
                  <button
                    onClick={part.onClick}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    {part.label}
                  </button>
                ) : (
                  <span className="font-medium">{part.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Step 1: Select grade (3x3 grid from 5. klasse to VG3) */}
      {currentStep === 'grade' && (
        <div className="space-y-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Velg klassetrinn</h2>
            <p className="text-muted-foreground">Hvilken klasse går du i?</p>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {gradesWithCounts.map(grade => (
              <button
                key={grade.id}
                onClick={() => grade.hasContent && selectGrade(grade.id)}
                disabled={!grade.hasContent}
                className={`group bg-card rounded-xl border p-6 text-center transition-all ${
                  grade.hasContent
                    ? 'hover:border-primary hover:shadow-lg cursor-pointer'
                    : 'opacity-50 cursor-not-allowed'
                }`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${grade.color} flex items-center justify-center mx-auto mb-3 ${
                  grade.hasContent ? 'group-hover:scale-110' : ''
                } transition-transform`}>
                  <span className="text-xl font-bold text-white">
                    {grade.id.startsWith('vg') ? grade.id.toUpperCase().replace('VG', '') : grade.id}
                  </span>
                </div>
                <div className={`text-lg font-bold mb-1 ${grade.hasContent ? 'group-hover:text-primary' : ''} transition-colors`}>
                  {grade.name}
                </div>
                <p className="text-sm text-muted-foreground">
                  {grade.hasContent ? `${grade.subjectCount} fag` : 'Kommer snart'}
                </p>
                {grade.hasContent && (
                  <div className="mt-3 flex items-center justify-center text-primary font-medium text-sm">
                    Velg
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Select subject */}
      {currentStep === 'subject' && (
        <div className="space-y-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Velg fag</h2>
            <p className="text-muted-foreground">
              {availableSubjects.length} fag tilgjengelig for {gradeDisplayNames[selectedGrade!] || selectedGrade}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {availableSubjects.map(subject => (
              <button
                key={subject.subject.id}
                onClick={() => selectSubject(subject.subject.id)}
                className="group bg-card rounded-xl border p-4 text-left hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${subject.subject.color} flex items-center justify-center flex-shrink-0`}>
                    <BookCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                      {subject.subject.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {subject.chapterCount} kapitler · {subject.questionCount} spørsmål
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                </div>
              </button>
            ))}
          </div>

          {availableSubjects.length === 0 && (
            <div className="text-center py-12">
              <Library className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">Ingen fag funnet</h3>
              <p className="text-muted-foreground">
                Det finnes ingen quizer for dette klassetrinnet ennå.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Step 4: Show chapters */}
      {currentStep === 'chapters' && selectedSubjectData && (
        <div className="space-y-4">
          <div className="text-center mb-8">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedSubjectData.subject.color} flex items-center justify-center mx-auto mb-4`}>
              <BookCheck className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{selectedSubjectData.subject.name}</h2>
            <p className="text-muted-foreground">
              {gradeDisplayNames[selectedGrade!] || selectedGrade} · {availableChapters.length} kapitler
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {availableChapters.map(chapter => (
              <Link
                key={chapter.chapterId}
                href={`/quiz/${chapter.chapterId}`}
                className="group flex items-center justify-between p-4 bg-card rounded-xl border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <BookOpen className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="font-medium group-hover:text-primary transition-colors">
                    {chapter.chapterName}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {chapter.questionCount} spørsmål
                  </Badge>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>

          {availableChapters.length === 0 && (
            <div className="text-center py-12">
              <BookCheck className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-medium text-lg mb-2">Ingen kapitler funnet</h3>
              <p className="text-muted-foreground">
                Det finnes ingen quizer for dette faget ennå.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

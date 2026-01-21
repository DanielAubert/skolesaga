"use client";

import { useState, useEffect, use } from "react";
import { useSearchParams } from "next/navigation";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  User,
  CheckCircle,
  XCircle,
  Dumbbell,
  Target,
  Clock,
  TrendingUp,
} from "lucide-react";

interface StudentInfo {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface SubtaskDetails {
  [label: string]: "completed" | "skipped" | "pending";
}

interface ExerciseCompletion {
  id: string;
  exerciseId: string;
  chapterId: string;
  courseId: string;
  totalSubtasks: number;
  completedSubtasks: number;
  skippedSubtasks: number;
  subtaskDetails?: SubtaskDetails;
  isPassed: boolean;
  startedAt: string | null;
  completedAt: string;
}

interface TrainingSession {
  id: string;
  exerciseId: string;
  chapterId: string;
  courseId: string;
  questionsAnswered: number;
  questionsCorrect: number;
  timeSpentMs: number;
  isSeriousAttempt: boolean;
  startedAt: string;
  endedAt: string | null;
  createdAt: string;
}

interface ChapterStats {
  completedSubtasks: number;
  skippedSubtasks: number;
  totalSubtasks: number;
  completedExercises: number;
  totalExercises: number;
  lastActivity: string | null;
}

interface ExerciseProgressData {
  student: StudentInfo;
  completions: ExerciseCompletion[];
  trainingSessions: TrainingSession[];
  trainingCountByExercise: Record<string, { total: number; serious: number }>;
  chapterProgress: Record<string, Record<string, ChapterStats>>;
  summary: {
    totalExercisesCompleted: number;
    totalExercisesPassed: number;
    passRate: number;
    totalTrainingSessions: number;
    seriousTrainingAttempts: number;
  };
}

export default function StudentExercisesPage({ params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = use(params);
  const searchParams = useSearchParams();
  const classId = searchParams.get("classId");
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const [data, setData] = useState<ExerciseProgressData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchExerciseProgress = async () => {
      try {
        const response = await fetch(`/api/teacher/students/${studentId}/exercise-progress`);
        if (response.ok) {
          const result = await response.json();
          setData(result);
        }
      } catch (error) {
        console.error("Error fetching exercise progress:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchExerciseProgress();
  }, [studentId]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Kunne ikke laste data</p>
      </div>
    );
  }

  const { student, completions, trainingSessions, chapterProgress, summary } = data;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("nb-NO", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDuration = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    if (minutes > 0) {
      return `${minutes}m ${secs}s`;
    }
    return `${secs}s`;
  };

  // Group completions by course
  const completionsByCourse = completions.reduce((acc, c) => {
    if (!acc[c.courseId]) acc[c.courseId] = [];
    acc[c.courseId].push(c);
    return acc;
  }, {} as Record<string, ExerciseCompletion[]>);

  // Group training sessions by course
  const trainingByCourse = trainingSessions.reduce((acc, t) => {
    if (!acc[t.courseId]) acc[t.courseId] = [];
    acc[t.courseId].push(t);
    return acc;
  }, {} as Record<string, TrainingSession[]>);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Skolesaga</span>
          </Link>
          <Link href={classId ? `/dashboard/teacher/students/${studentId}?classId=${classId}` : `/dashboard/teacher/students/${studentId}`}>
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbake
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4 py-8">
        <div className="space-y-8">
          {/* Student header */}
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{student.name}</h1>
              <p className="text-muted-foreground">Oppgaveprogresjon</p>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid gap-4 md:grid-cols-5">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Oppgaver fullfort</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.totalExercisesCompleted}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bestatt</CardTitle>
                <CheckCircle className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{summary.totalExercisesPassed}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bestattprosent</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.passRate}%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Treningsokter</CardTitle>
                <Dumbbell className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{summary.totalTrainingSessions}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Seriose forsok</CardTitle>
                <Clock className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{summary.seriousTrainingAttempts}</div>
              </CardContent>
            </Card>
          </div>

          {/* Chapter Progress Overview */}
          {Object.keys(chapterProgress || {}).length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Kapittelfremgang
                </CardTitle>
                <CardDescription>
                  Oversikt over elevens fremgang per kapittel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(chapterProgress).map(([courseId, chapters]) => (
                    <div key={courseId} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Kurs: {courseId.toUpperCase()}
                      </h3>
                      <div className="space-y-3">
                        {Object.entries(chapters)
                          .sort(([a], [b]) => a.localeCompare(b))
                          .map(([chapterId, stats]) => {
                            const attemptedSubtasks = stats.completedSubtasks + stats.skippedSubtasks;
                            const greenRatio = attemptedSubtasks > 0 ? stats.completedSubtasks / attemptedSubtasks : 1;
                            const progressPercent = stats.totalSubtasks > 0
                              ? (attemptedSubtasks / stats.totalSubtasks) * 100
                              : 0;

                            return (
                              <div key={chapterId} className="p-3 bg-muted/50 rounded-lg">
                                <div className="flex items-center justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <span className="font-medium text-sm">
                                      Kapittel {chapterId.split("-").pop()}
                                    </span>
                                    {stats.lastActivity && (
                                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Clock className="h-3 w-3" />
                                        Sist aktiv: {formatDate(stats.lastActivity)}
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    <span className="flex items-center gap-1">
                                      <span className="text-green-600 font-medium">{stats.completedSubtasks}</span>
                                      {stats.skippedSubtasks > 0 && (
                                        <>
                                          <span>/</span>
                                          <span className="text-red-500 font-medium">{stats.skippedSubtasks}</span>
                                        </>
                                      )}
                                      <span>deloppgaver</span>
                                    </span>
                                    <span>{stats.completedExercises} / {stats.totalExercises} oppgaver</span>
                                  </div>
                                </div>
                                {/* Progress bar */}
                                <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                                  <div
                                    className="h-full flex transition-all duration-300"
                                    style={{ width: `${progressPercent}%` }}
                                  >
                                    <div
                                      className="bg-green-500 h-full"
                                      style={{ width: `${greenRatio * 100}%` }}
                                    />
                                    {attemptedSubtasks > 0 && stats.skippedSubtasks > 0 && (
                                      <div
                                        className="bg-red-500 h-full"
                                        style={{ width: `${(1 - greenRatio) * 100}%` }}
                                      />
                                    )}
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* "Los oppgaven" completions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Los oppgaven - Resultater
              </CardTitle>
              <CardDescription>
                Oversikt over fullforte oppgaver med bestatt/ikke bestatt status
              </CardDescription>
            </CardHeader>
            <CardContent>
              {completions.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  <Target className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen fullforte oppgaver enna</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(completionsByCourse).map(([courseId, courseCompletions]) => (
                    <div key={courseId} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Kurs: {courseId.toUpperCase()}
                      </h3>
                      <div className="space-y-2">
                        {courseCompletions.map((completion) => (
                          <div
                            key={completion.id}
                            className="p-3 bg-muted/50 rounded-lg"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                {completion.isPassed ? (
                                  <CheckCircle className="h-5 w-5 text-green-500" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-red-500" />
                                )}
                                <div>
                                  <p className="text-sm font-medium">
                                    Kapittel {completion.chapterId.split("-").pop()} - Oppgave {completion.exerciseId.split("-").pop()}
                                  </p>
                                  <p className="text-xs text-muted-foreground">
                                    {completion.completedSubtasks}/{completion.totalSubtasks} deloppgaver
                                    {completion.skippedSubtasks > 0 && (
                                      <span className="text-red-500"> ({completion.skippedSubtasks} hoppet over)</span>
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant={completion.isPassed ? "default" : "destructive"}>
                                  {completion.isPassed ? "Bestatt" : "Ikke bestatt"}
                                </Badge>
                                <div className="text-xs text-muted-foreground text-right">
                                  {completion.startedAt && (
                                    <p className="flex items-center gap-1 justify-end">
                                      <Clock className="h-3 w-3" />
                                      Startet: {formatDate(completion.startedAt)}
                                    </p>
                                  )}
                                  <p className="flex items-center gap-1 justify-end">
                                    <CheckCircle className="h-3 w-3" />
                                    Fullfort: {formatDate(completion.completedAt)}
                                  </p>
                                </div>
                              </div>
                            </div>

                            {/* Deloppgave-status visning (som eleven ser det) */}
                            {completion.subtaskDetails && Object.keys(completion.subtaskDetails).length > 0 && (
                              <div className="mt-3 pt-3 border-t">
                                <p className="text-xs text-muted-foreground mb-2">Deloppgaver:</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {Object.entries(completion.subtaskDetails)
                                    .sort(([a], [b]) => a.localeCompare(b))
                                    .map(([label, status]) => {
                                      let bgColor = "bg-muted text-muted-foreground"; // pending
                                      if (status === "completed") {
                                        bgColor = "bg-green-500 text-white";
                                      } else if (status === "skipped") {
                                        bgColor = "bg-red-500 text-white";
                                      }
                                      return (
                                        <div
                                          key={label}
                                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${bgColor}`}
                                          title={`${label}) ${status === "completed" ? "Riktig" : status === "skipped" ? "Hoppet over" : "Ikke gjort"}`}
                                        >
                                          {label}
                                        </div>
                                      );
                                    })}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Training sessions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Dumbbell className="h-5 w-5 text-blue-500" />
                Tren - Treningsokter
              </CardTitle>
              <CardDescription>
                Oversikt over treningsokter med seriose forsok markert
              </CardDescription>
            </CardHeader>
            <CardContent>
              {trainingSessions.length === 0 ? (
                <div className="py-8 text-center text-muted-foreground">
                  <Dumbbell className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen treningsokter enna</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.entries(trainingByCourse).map(([courseId, courseSessions]) => (
                    <div key={courseId} className="border rounded-lg p-4">
                      <h3 className="font-medium mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        Kurs: {courseId.toUpperCase()}
                      </h3>
                      <div className="space-y-2">
                        {courseSessions.map((session) => (
                          <div
                            key={session.id}
                            className={`flex items-center justify-between p-3 rounded-lg ${
                              session.isSeriousAttempt
                                ? "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800"
                                : "bg-muted/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Dumbbell className={`h-5 w-5 ${session.isSeriousAttempt ? "text-blue-500" : "text-muted-foreground"}`} />
                              <div>
                                <p className="text-sm font-medium">
                                  Kapittel {session.chapterId.split("-").pop()} - Oppgave {session.exerciseId.split("-").pop()}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {session.questionsCorrect}/{session.questionsAnswered} riktige
                                  {" - "}
                                  {formatDuration(session.timeSpentMs)}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              {session.isSeriousAttempt && (
                                <Badge variant="default" className="bg-blue-500">
                                  Seriost forsok
                                </Badge>
                              )}
                              <span className="text-xs text-muted-foreground">
                                {formatDate(session.createdAt)}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect, use } from "react";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  Users,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trash2,
  Loader2,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

interface StudentProgress {
  id: string;
  name: string;
  email: string;
  completedExercises: number;
  totalExercises: number;
  status: string;
  lastActivity: string | null;
}

interface AssignmentDetail {
  id: string;
  title: string;
  course_id: string;
  chapter_ids: string[];
  exercise_ids: string[] | null;
  due_date: string;
  description: string | null;
  created_at: string;
  assignment_targets: {
    id: string;
    class_id: string | null;
    student_id: string | null;
    className: string | null;
  }[];
}

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400 hover:bg-green-100">
          Ferdig
        </Badge>
      );
    case "completed_late":
      return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400 hover:bg-green-100">
          Ferdig (sent)
        </Badge>
      );
    case "in_progress":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400 hover:bg-yellow-100">
          Pågår
        </Badge>
      );
    case "overdue":
      return (
        <Badge className="bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400 hover:bg-red-100">
          Forfalt
        </Badge>
      );
    case "not_started":
    default:
      return (
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 hover:bg-blue-100">
          Ikke startet
        </Badge>
      );
  }
}

export default function AssignmentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const [assignment, setAssignment] = useState<AssignmentDetail | null>(null);
  const [students, setStudents] = useState<StudentProgress[]>([]);
  const [totalExercises, setTotalExercises] = useState(0);
  const [courseName, setCourseName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const response = await fetch(`/api/assignments/${id}`);
        if (response.ok) {
          const data = await response.json();
          setAssignment(data.assignment);
          setStudents(data.students);
          setTotalExercises(data.totalExercises);
          setCourseName(data.courseName);
        }
      } catch (error) {
        console.error("Error fetching assignment:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAssignment();
  }, [id]);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/assignments/${id}`, { method: "DELETE" });
      if (response.ok) {
        router.push("/dashboard/teacher");
      }
    } catch (error) {
      console.error("Error deleting assignment:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!assignment) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Lekse ikke funnet</p>
      </div>
    );
  }

  const completedCount = students.filter(
    (s) => s.status === "completed" || s.status === "completed_late"
  ).length;
  const inProgressCount = students.filter((s) => s.status === "in_progress").length;
  const notStartedCount = students.filter((s) => s.status === "not_started").length;
  const overdueCount = students.filter((s) => s.status === "overdue").length;
  const isPastDue = new Date(assignment.due_date) < new Date();

  const classNames = assignment.assignment_targets
    .filter((t) => t.className)
    .map((t) => t.className)
    .join(", ");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Skolesaga</span>
          </Link>
          <Link href="/dashboard/teacher">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Tilbake
            </Button>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{assignment.title}</h1>
              <p className="text-muted-foreground mt-1">
                {courseName} &bull; {classNames || "Direkte tildelt"}
              </p>
              {assignment.description && (
                <p className="text-sm mt-2">{assignment.description}</p>
              )}
            </div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Slett
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Slett lekse?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Dette vil permanent slette leksen &quot;{assignment.title}&quot;. Elevenes
                    oppgavebesvarelser påvirkes ikke.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Avbryt</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleDelete}
                    disabled={isDeleting}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                  >
                    {isDeleting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sletter...
                      </>
                    ) : (
                      "Slett lekse"
                    )}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          {/* Info-kort */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Frist</CardTitle>
                <Calendar className={`h-4 w-4 ${isPastDue ? "text-red-500" : "text-muted-foreground"}`} />
              </CardHeader>
              <CardContent>
                <div className={`text-lg font-bold ${isPastDue ? "text-red-600 dark:text-red-400" : ""}`}>
                  {new Date(assignment.due_date).toLocaleDateString("nb-NO", {
                    day: "numeric",
                    month: "short",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </div>
                {isPastDue && <p className="text-xs text-red-500">Frist passert</p>}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Totalt</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{students.length}</div>
                <p className="text-xs text-muted-foreground">elever</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ferdig</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  {completedCount}
                </div>
                <p className="text-xs text-muted-foreground">
                  av {students.length} elever
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {overdueCount > 0 ? "Forfalt" : "Pågår"}
                </CardTitle>
                {overdueCount > 0 ? (
                  <AlertCircle className="h-4 w-4 text-red-500" />
                ) : (
                  <Clock className="h-4 w-4 text-yellow-500" />
                )}
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${overdueCount > 0 ? "text-red-600 dark:text-red-400" : "text-yellow-600 dark:text-yellow-400"}`}>
                  {overdueCount > 0 ? overdueCount : inProgressCount}
                </div>
                <p className="text-xs text-muted-foreground">
                  {notStartedCount > 0 && `${notStartedCount} ikke startet`}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Total fremdrift */}
          {students.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Samlet fremdrift</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-muted-foreground">
                    {completedCount} av {students.length} elever ferdig
                  </span>
                  <span className="text-sm font-medium">
                    {Math.round((completedCount / students.length) * 100)}%
                  </span>
                </div>
                <Progress
                  value={(completedCount / students.length) * 100}
                  className="h-3"
                />
              </CardContent>
            </Card>
          )}

          {/* Elevliste */}
          <Card>
            <CardHeader>
              <CardTitle>Elever</CardTitle>
              <CardDescription>
                Fullføringsstatus per elev ({totalExercises} oppgaver totalt)
              </CardDescription>
            </CardHeader>
            <CardContent>
              {students.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen elever tildelt</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {students.map((student) => {
                    const percent = totalExercises > 0
                      ? Math.round((student.completedExercises / totalExercises) * 100)
                      : 0;
                    return (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-medium truncate">{student.name}</p>
                            {getStatusBadge(student.status)}
                          </div>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                        <div className="flex items-center gap-4 ml-4">
                          <div className="w-32 hidden md:block">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-muted-foreground">
                                {student.completedExercises}/{totalExercises}
                              </span>
                              <span className="text-xs font-medium">{percent}%</span>
                            </div>
                            <Progress value={percent} className="h-2" />
                          </div>
                          {student.lastActivity && (
                            <span className="text-xs text-muted-foreground hidden lg:block">
                              {new Date(student.lastActivity).toLocaleDateString("nb-NO", {
                                day: "numeric",
                                month: "short",
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

"use client";

import { useState, useEffect, use } from "react";
import { useSearchParams } from "next/navigation";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
  BookOpen,
  ArrowLeft,
  User,
  FileText,
  Calendar,
  Clock,
  ExternalLink,
  PenTool,
  CheckCircle,
  MessageSquare,
  Target,
  Dumbbell,
  ImageIcon,
  ZoomIn,
  Send,
  X,
} from "lucide-react";

interface StudentInfo {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
}

interface CanvasData {
  dataUrl?: string;
  strokes?: Array<{
    points: Array<{ x: number; y: number }>;
    color: string;
    size: number;
    tool: string;
  }>;
}

interface Submission {
  id: string;
  exerciseId: string;
  chapterId: string;
  courseId: string;
  submissionType: string;
  content: string | null;
  canvasData: CanvasData | null;
  imageUrl: string | null;
  teacherFeedback: string | null;
  isCorrect: boolean | null;
  createdAt: string;
  updatedAt: string;
}

interface GroupedSubmissions {
  [courseId: string]: {
    [chapterId: string]: Submission[];
  };
}

export default function StudentDetailPage({ params }: { params: Promise<{ studentId: string }> }) {
  const { studentId } = use(params);
  const searchParams = useSearchParams();
  const classId = searchParams.get("classId");
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const [student, setStudent] = useState<StudentInfo | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [feedbackText, setFeedbackText] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const response = await fetch(`/api/teacher/students/${studentId}/submissions`);
        if (response.ok) {
          const data = await response.json();
          setStudent(data.student);
          setSubmissions(data.submissions);
        }
      } catch (error) {
        console.error("Error fetching student data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStudentData();
  }, [studentId]);

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Elev ikke funnet</p>
      </div>
    );
  }

  // Grupper besvarelser etter kurs og kapittel
  const groupedSubmissions: GroupedSubmissions = submissions.reduce((acc, sub) => {
    if (!acc[sub.courseId]) {
      acc[sub.courseId] = {};
    }
    if (!acc[sub.courseId][sub.chapterId]) {
      acc[sub.courseId][sub.chapterId] = [];
    }
    acc[sub.courseId][sub.chapterId].push(sub);
    return acc;
  }, {} as GroupedSubmissions);

  // Hjelpefunksjon for å hente bilde-URL fra submission
  const getSubmissionImageUrl = (submission: Submission): string | null => {
    if (submission.canvasData?.dataUrl) {
      return submission.canvasData.dataUrl;
    }
    if (submission.imageUrl) {
      return submission.imageUrl;
    }
    return null;
  };

  // Åpne dialog for å se bilde
  const openImageDialog = (submission: Submission) => {
    setSelectedSubmission(submission);
    setFeedbackText(submission.teacherFeedback || "");
  };

  // Send tilbakemelding
  const sendFeedback = async () => {
    if (!selectedSubmission || !feedbackText.trim()) return;

    setIsSendingFeedback(true);
    try {
      const response = await fetch(`/api/textbook/submissions/${selectedSubmission.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          teacherFeedback: feedbackText,
        }),
      });

      if (response.ok) {
        // Oppdater submissions-listen
        setSubmissions((prev) =>
          prev.map((s) =>
            s.id === selectedSubmission.id
              ? { ...s, teacherFeedback: feedbackText }
              : s
          )
        );
        setSelectedSubmission((prev) =>
          prev ? { ...prev, teacherFeedback: feedbackText } : null
        );
      }
    } catch (error) {
      console.error("Error sending feedback:", error);
    } finally {
      setIsSendingFeedback(false);
    }
  };

  const getSubmissionTypeIcon = (type: string) => {
    switch (type) {
      case "canvas-drawing":
        return <PenTool className="h-4 w-4" />;
      case "image":
        return <ImageIcon className="h-4 w-4" />;
      case "multiple-choice":
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getSubmissionTypeLabel = (type: string) => {
    switch (type) {
      case "canvas-drawing":
        return "Tegning";
      case "image":
        return "Bilde";
      case "multiple-choice":
        return "Flervalg";
      case "text":
        return "Tekst";
      case "math-input":
        return "Matematikk";
      default:
        return type;
    }
  };

  // Sjekk om submission har et bilde som kan vises
  const hasViewableImage = (submission: Submission): boolean => {
    return !!(submission.canvasData?.dataUrl || submission.imageUrl);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("nb-NO", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Skolesaga</span>
          </Link>
          <Link href={classId ? `/dashboard/teacher/classes/${classId}` : "/dashboard/teacher/classes"}>
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
              <p className="text-muted-foreground">{student.email}</p>
            </div>
          </div>

          {/* Summary stats */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Totalt besvarelser</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{submissions.length}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Med kommentar</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {submissions.filter((s) => s.teacherFeedback).length}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Kapitler jobbet med</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Object.values(groupedSubmissions).reduce(
                    (sum, chapters) => sum + Object.keys(chapters).length,
                    0
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Link to exercise progress */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-green-500" />
                Oppgaveprogresjon
              </CardTitle>
              <CardDescription>
                Se elevens resultater fra &quot;Los oppgaven&quot; og &quot;Tren&quot;
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link href={`/dashboard/teacher/students/${studentId}/exercises${classId ? `?classId=${classId}` : ""}`}>
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  <Dumbbell className="h-4 w-4 mr-2" />
                  Se oppgaveprogresjon
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Submissions by course/chapter */}
          {Object.keys(groupedSubmissions).length === 0 ? (
            <Card>
              <CardContent className="py-8 text-center text-muted-foreground">
                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Ingen besvarelser ennå</p>
                <p className="text-sm mt-1">Eleven har ikke levert noen oppgaver</p>
              </CardContent>
            </Card>
          ) : (
            Object.entries(groupedSubmissions).map(([courseId, chapters]) => (
              <Card key={courseId}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Kurs: {courseId.toUpperCase()}
                  </CardTitle>
                  <CardDescription>
                    Elevens besvarelser i dette kurset
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(chapters).map(([chapterId, chapterSubmissions]) => (
                      <div key={chapterId} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-medium">Kapittel: {chapterId}</h3>
                          <Link href={`/bok/${courseId}/${chapterId}?studentId=${studentId}`}>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Se i læreboka
                            </Button>
                          </Link>
                        </div>
                        <div className="space-y-3">
                          {chapterSubmissions.map((submission) => {
                            const imageUrl = getSubmissionImageUrl(submission);
                            return (
                              <div
                                key={submission.id}
                                className="p-3 bg-muted/50 rounded-lg"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    {getSubmissionTypeIcon(submission.submissionType)}
                                    <div>
                                      <p className="text-sm font-medium">
                                        Oppgave {submission.exerciseId.split("-").pop()}
                                      </p>
                                      <div className="text-xs text-muted-foreground">
                                        <p className="flex items-center gap-1">
                                          <Calendar className="h-3 w-3" />
                                          Levert: {formatDate(submission.createdAt)}
                                        </p>
                                        {submission.createdAt !== submission.updatedAt && (
                                          <p className="flex items-center gap-1 text-blue-600 dark:text-blue-400">
                                            <Clock className="h-3 w-3" />
                                            Oppdatert: {formatDate(submission.updatedAt)}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <Badge variant="secondary">
                                      {getSubmissionTypeLabel(submission.submissionType)}
                                    </Badge>
                                    {submission.teacherFeedback && (
                                      <Badge variant="outline" className="bg-blue-50 dark:bg-blue-950">
                                        <MessageSquare className="h-3 w-3 mr-1" />
                                        Kommentert
                                      </Badge>
                                    )}
                                    {submission.isCorrect !== null && (
                                      <Badge
                                        variant={submission.isCorrect ? "default" : "destructive"}
                                        className={submission.isCorrect ? "bg-green-500" : ""}
                                      >
                                        {submission.isCorrect ? "Riktig" : "Feil"}
                                      </Badge>
                                    )}
                                    {hasViewableImage(submission) && (
                                      <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => openImageDialog(submission)}
                                        className="ml-2"
                                      >
                                        <ZoomIn className="h-4 w-4 mr-1" />
                                        Se bilde
                                      </Button>
                                    )}
                                  </div>
                                </div>

                                {/* Vis miniatyrbilde hvis tilgjengelig */}
                                {imageUrl && (
                                  <div className="mt-3 pt-3 border-t">
                                    <button
                                      onClick={() => openImageDialog(submission)}
                                      className="relative group cursor-pointer rounded-lg overflow-hidden border bg-white dark:bg-gray-900"
                                    >
                                      <img
                                        src={imageUrl}
                                        alt="Elevens besvarelse"
                                        className="max-h-32 w-auto object-contain"
                                      />
                                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <ZoomIn className="h-6 w-6 text-white" />
                                      </div>
                                    </button>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      {/* Dialog for å se bilde i full størrelse */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {selectedSubmission && getSubmissionTypeIcon(selectedSubmission.submissionType)}
              {selectedSubmission && (
                <>Oppgave {selectedSubmission.exerciseId.split("-").pop()}</>
              )}
            </DialogTitle>
            <DialogDescription>
              {selectedSubmission && (
                <>
                  {getSubmissionTypeLabel(selectedSubmission.submissionType)} - {" "}
                  Levert {formatDate(selectedSubmission.updatedAt)}
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {/* Bilde */}
          {selectedSubmission && getSubmissionImageUrl(selectedSubmission) && (
            <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-900 rounded-lg p-4 flex items-center justify-center min-h-[300px]">
              <img
                src={getSubmissionImageUrl(selectedSubmission)!}
                alt="Elevens besvarelse"
                className="max-w-full max-h-[50vh] object-contain rounded border shadow-lg"
              />
            </div>
          )}

          {/* Tilbakemelding */}
          <div className="space-y-3 pt-4 border-t">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium">Tilbakemelding til eleven</label>
              {selectedSubmission?.teacherFeedback && (
                <Badge variant="outline" className="bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300">
                  <CheckCircle className="h-3 w-3 mr-1" />
                  Sendt
                </Badge>
              )}
            </div>
            <Textarea
              placeholder="Skriv en tilbakemelding til eleven..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              rows={3}
              className="resize-none"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                onClick={() => setSelectedSubmission(null)}
              >
                <X className="h-4 w-4 mr-2" />
                Lukk
              </Button>
              <Button
                onClick={sendFeedback}
                disabled={isSendingFeedback || !feedbackText.trim()}
              >
                {isSendingFeedback ? (
                  <>
                    <div className="h-4 w-4 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sender...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send tilbakemelding
                  </>
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

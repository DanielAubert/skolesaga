"use client";

import { useState, useEffect, use } from "react";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  BookOpen,
  Users,
  Copy,
  Check,
  ArrowLeft,
  Trash2,
  TrendingUp,
  Target,
  User,
  UserPlus,
  Building2,
  Loader2,
  Dumbbell,
  ChevronRight,
} from "lucide-react";

interface OrganizationStudent {
  id: string;
  name: string;
  email: string;
  grade_level: string | null;
  classes: string[];
}

interface Student {
  id: string;
  name: string;
  email: string;
  avatarUrl: string | null;
  joinedAt: string;
  stats: {
    totalAttempts: number;
    correctAttempts: number;
    correctRate: number;
  };
}

interface ClassDetail {
  id: string;
  name: string;
  grade_level: string | null;
  subject: string | null;
  invite_code: string | null;
  created_at: string;
}

export default function ClassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const [classData, setClassData] = useState<ClassDetail | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Organization students
  const [orgStudents, setOrgStudents] = useState<OrganizationStudent[]>([]);
  const [orgName, setOrgName] = useState<string | null>(null);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [addingStudents, setAddingStudents] = useState(false);

  // Hent klassedata
  useEffect(() => {
    const fetchClass = async () => {
      try {
        const response = await fetch(`/api/classes/${id}`);
        if (response.ok) {
          const data = await response.json();
          setClassData(data.class);
          setStudents(data.students);
        } else if (response.status === 403) {
          router.push("/dashboard/teacher/classes");
        }
      } catch (error) {
        console.error("Error fetching class:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClass();
  }, [id, router]);

  // Hent organisasjons-elever
  useEffect(() => {
    const fetchOrgStudents = async () => {
      try {
        const response = await fetch("/api/organizations/students");
        if (response.ok) {
          const data = await response.json();
          setOrgStudents(data.students || []);
          setOrgName(data.organizationName || null);
        }
      } catch (error) {
        console.error("Error fetching org students:", error);
      }
    };

    fetchOrgStudents();
  }, []);

  // Legg til elever fra organisasjonen
  const handleAddStudents = async () => {
    if (selectedStudents.length === 0) return;

    setAddingStudents(true);
    try {
      const response = await fetch(`/api/classes/${id}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentIds: selectedStudents }),
      });

      if (response.ok) {
        // Refresh class data to show new students
        const classResponse = await fetch(`/api/classes/${id}`);
        if (classResponse.ok) {
          const data = await classResponse.json();
          setStudents(data.students);
        }
        // Refresh org students to update their class info
        const orgResponse = await fetch("/api/organizations/students");
        if (orgResponse.ok) {
          const orgData = await orgResponse.json();
          setOrgStudents(orgData.students || []);
        }
        setAddDialogOpen(false);
        setSelectedStudents([]);
      }
    } catch (error) {
      console.error("Error adding students:", error);
    } finally {
      setAddingStudents(false);
    }
  };

  // Toggle student selection
  const toggleStudent = (studentId: string) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  // Filter out students already in this class
  const availableOrgStudents = orgStudents.filter(
    (orgStudent) => !students.some((s) => s.id === orgStudent.id)
  );

  // Kopier invitasjonskode
  const copyInviteCode = async () => {
    if (classData?.invite_code) {
      await navigator.clipboard.writeText(classData.invite_code);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Slett klasse
  const handleDeleteClass = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(`/api/classes/${id}`, { method: "DELETE" });
      if (response.ok) {
        router.push("/dashboard/teacher/classes");
      }
    } catch (error) {
      console.error("Error deleting class:", error);
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

  if (!classData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Klasse ikke funnet</p>
      </div>
    );
  }

  // Beregn klassens statistikk
  const classStats = {
    totalStudents: students.length,
    totalAttempts: students.reduce((sum, s) => sum + s.stats.totalAttempts, 0),
    averageCorrectRate:
      students.length > 0
        ? Math.round(students.reduce((sum, s) => sum + s.stats.correctRate, 0) / students.length)
        : 0,
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
          <Link href="/dashboard/teacher/classes">
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
          {/* Class header */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">{classData.name}</h1>
              <p className="text-muted-foreground mt-1">
                {classData.grade_level && `${classData.grade_level} • `}
                {classData.subject || "Ingen fag valgt"}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Slett klasse
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Er du sikker?</AlertDialogTitle>
                    <AlertDialogDescription>
                      Dette vil permanent slette klassen &quot;{classData.name}&quot; og fjerne alle
                      elevkoblinger. Denne handlingen kan ikke angres.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Avbryt</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={handleDeleteClass}
                      disabled={isDeleting}
                      className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      {isDeleting ? "Sletter..." : "Slett klasse"}
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>

          {/* Invite code and add from organization */}
          <div className="grid gap-4 md:grid-cols-2">
            {/* Invite code card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Inviter med kode</CardTitle>
                <CardDescription>
                  Del denne koden med elevene dine
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <div className="flex-1 p-4 bg-muted rounded-lg text-center">
                    <p className="text-xs text-muted-foreground mb-1">Invitasjonskode</p>
                    <p className="font-mono font-bold text-2xl tracking-[0.3em]">
                      {classData.invite_code || "Ingen kode"}
                    </p>
                  </div>
                  <Button onClick={copyInviteCode} disabled={!classData.invite_code} size="sm">
                    {copiedCode ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Add from organization card */}
            {orgName && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    Legg til fra {orgName}
                  </CardTitle>
                  <CardDescription>
                    {availableOrgStudents.length} elev{availableOrgStudents.length !== 1 ? "er" : ""} tilgjengelig
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setAddDialogOpen(true)}
                    disabled={availableOrgStudents.length === 0}
                    className="w-full"
                  >
                    <UserPlus className="h-4 w-4 mr-2" />
                    Legg til elever
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Antall elever</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classStats.totalStudents}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Oppgaver løst</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classStats.totalAttempts}</div>
                <p className="text-xs text-muted-foreground">Siste 7 dager</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Klassesnitt</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{classStats.averageCorrectRate}%</div>
                <p className="text-xs text-muted-foreground">Riktige svar</p>
              </CardContent>
            </Card>
          </div>

          {/* Students list */}
          <Card>
            <CardHeader>
              <CardTitle>Elever</CardTitle>
              <CardDescription>
                Oversikt over alle elever i klassen og deres fremgang
              </CardDescription>
            </CardHeader>
            <CardContent>
              {students.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen elever ennå</p>
                  <p className="text-sm mt-1">Del invitasjonskoden for å få elever med</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {students.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/50"
                    >
                      <Link
                        href={`/dashboard/teacher/students/${student.id}?classId=${id}`}
                        className="flex items-center gap-3 flex-1 hover:opacity-80 transition-opacity"
                      >
                        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{student.name}</p>
                          <p className="text-sm text-muted-foreground">{student.email}</p>
                        </div>
                      </Link>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="text-center">
                          <p className="font-medium">{student.stats.totalAttempts}</p>
                          <p className="text-muted-foreground">oppgaver</p>
                        </div>
                        <div className="text-center">
                          <p className="font-medium">{student.stats.correctRate}%</p>
                          <p className="text-muted-foreground">riktig</p>
                        </div>
                        <div
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            student.stats.correctRate >= 80
                              ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                              : student.stats.correctRate >= 50
                              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400"
                              : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400"
                          }`}
                        >
                          {student.stats.correctRate >= 80
                            ? "Bra!"
                            : student.stats.correctRate >= 50
                            ? "OK"
                            : "Trenger hjelp"}
                        </div>
                        <Link
                          href={`/dashboard/teacher/students/${student.id}/exercises?classId=${id}`}
                          className="flex items-center gap-1 text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 transition-colors"
                          title="Se oppgaveprogresjon"
                        >
                          <Dumbbell className="h-4 w-4" />
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Add students from organization dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="max-w-md max-h-[80vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle>Legg til elever fra {orgName}</DialogTitle>
            <DialogDescription>
              Velg elever du vil legge til i {classData.name}
            </DialogDescription>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto py-4">
            {availableOrgStudents.length === 0 ? (
              <p className="text-center text-muted-foreground py-4">
                Ingen tilgjengelige elever
              </p>
            ) : (
              <div className="space-y-2">
                {availableOrgStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer"
                    onClick={() => toggleStudent(student.id)}
                  >
                    <Checkbox
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={() => toggleStudent(student.id)}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{student.name}</p>
                      <p className="text-sm text-muted-foreground truncate">
                        {student.email}
                      </p>
                    </div>
                    {student.grade_level && (
                      <span className="text-xs bg-muted px-2 py-1 rounded">
                        {student.grade_level}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setAddDialogOpen(false);
                setSelectedStudents([]);
              }}
            >
              Avbryt
            </Button>
            <Button
              onClick={handleAddStudents}
              disabled={selectedStudents.length === 0 || addingStudents}
            >
              {addingStudents ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Legger til...
                </>
              ) : (
                <>Legg til {selectedStudents.length} elev{selectedStudents.length !== 1 ? "er" : ""}</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BookOpen,
  Plus,
  Users,
  Copy,
  Check,
  ChevronRight,
  School,
  ArrowLeft,
  Loader2,
  Building2,
  UserPlus,
} from "lucide-react";

interface ClassData {
  id: string;
  name: string;
  grade_level: string | null;
  subject: string | null;
  invite_code: string | null;
  created_at: string;
  studentCount: number;
}

interface OrganizationStudent {
  id: string;
  name: string;
  email: string;
  grade_level: string | null;
  classes: string[];
  isTeacher?: boolean;
}

export default function TeacherClassesPage() {
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Form state
  const [newClassName, setNewClassName] = useState("");
  const [newGradeLevel, setNewGradeLevel] = useState("");
  const [newSubject, setNewSubject] = useState("");

  // Organization students
  const [orgStudents, setOrgStudents] = useState<OrganizationStudent[]>([]);
  const [orgName, setOrgName] = useState<string | null>(null);
  const [orgLoading, setOrgLoading] = useState(true);

  // Add to class dialog
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [addingStudents, setAddingStudents] = useState(false);

  // Hent klasser
  const fetchClasses = async () => {
    try {
      const response = await fetch("/api/classes");
      if (response.ok) {
        const data = await response.json();
        setClasses(data.classes);
      }
    } catch (error) {
      console.error("Error fetching classes:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

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
      } finally {
        setOrgLoading(false);
      }
    };

    fetchOrgStudents();
  }, []);

  // Legg elever til klasse
  const handleAddToClass = async () => {
    if (!selectedClass || selectedStudents.length === 0) return;

    setAddingStudents(true);
    try {
      const response = await fetch(`/api/classes/${selectedClass}/students`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ studentIds: selectedStudents }),
      });

      if (response.ok) {
        const data = await response.json();
        // Refresh data
        await fetchClasses();
        const orgResponse = await fetch("/api/organizations/students");
        if (orgResponse.ok) {
          const orgData = await orgResponse.json();
          setOrgStudents(orgData.students || []);
        }
        setAddDialogOpen(false);
        setSelectedStudents([]);
        setSelectedClass("");
        alert(`${data.added} elev${data.added !== 1 ? "er" : ""} lagt til i klassen!`);
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

  // Opprett ny klasse
  const handleCreateClass = async () => {
    if (!newClassName.trim()) return;

    setIsCreating(true);
    try {
      const response = await fetch("/api/classes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newClassName,
          gradeLevel: newGradeLevel || null,
          subject: newSubject || null,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setClasses([...classes, data.class]);
        setDialogOpen(false);
        setNewClassName("");
        setNewGradeLevel("");
        setNewSubject("");
      }
    } catch (error) {
      console.error("Error creating class:", error);
    } finally {
      setIsCreating(false);
    }
  };

  // Kopier invitasjonskode
  const copyInviteCode = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
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

      {/* Main content */}
      <main className="container px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Mine klasser</h1>
              <p className="text-muted-foreground mt-1">
                Administrer klassene dine og inviter elever
              </p>
            </div>
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Opprett klasse
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Opprett ny klasse</DialogTitle>
                  <DialogDescription>
                    Fyll inn informasjon om klassen. Du vil få en invitasjonskode som elevene kan bruke for å bli med.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="className">Klassenavn *</Label>
                    <Input
                      id="className"
                      placeholder="f.eks. 1STA Matematikk"
                      value={newClassName}
                      onChange={(e) => setNewClassName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gradeLevel">Trinn</Label>
                    <Select value={newGradeLevel} onValueChange={setNewGradeLevel}>
                      <SelectTrigger>
                        <SelectValue placeholder="Velg trinn" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="8">8. klasse</SelectItem>
                        <SelectItem value="9">9. klasse</SelectItem>
                        <SelectItem value="10">10. klasse</SelectItem>
                        <SelectItem value="vg1">VG1</SelectItem>
                        <SelectItem value="vg2">VG2</SelectItem>
                        <SelectItem value="vg3">VG3</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Fag</Label>
                    <Select value={newSubject} onValueChange={setNewSubject}>
                      <SelectTrigger>
                        <SelectValue placeholder="Velg fag" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="matematikk">Matematikk</SelectItem>
                        <SelectItem value="norsk">Norsk</SelectItem>
                        <SelectItem value="engelsk">Engelsk</SelectItem>
                        <SelectItem value="naturfag">Naturfag</SelectItem>
                        <SelectItem value="samfunnsfag">Samfunnsfag</SelectItem>
                        <SelectItem value="annet">Annet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setDialogOpen(false)}>
                    Avbryt
                  </Button>
                  <Button onClick={handleCreateClass} disabled={!newClassName.trim() || isCreating}>
                    {isCreating ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Oppretter...
                      </>
                    ) : (
                      "Opprett klasse"
                    )}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Organization students section */}
          {orgName && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="h-5 w-5" />
                      Elever i {orgName}
                    </CardTitle>
                    <CardDescription>
                      {orgStudents.length} elev{orgStudents.length !== 1 ? "er" : ""} registrert i din organisasjon
                    </CardDescription>
                  </div>
                  {orgStudents.length > 0 && classes.length > 0 && (
                    <Button onClick={() => setAddDialogOpen(true)}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Legg til i klasse
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                {orgLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                  </div>
                ) : orgStudents.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Ingen elever registrert ennå</p>
                    <p className="text-sm mt-1">Elever som registrerer seg med din organisasjon vises her</p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {orgStudents.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">{student.name}</p>
                            {student.isTeacher && (
                              <span className="text-xs bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                                Lærer
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {student.email}
                            {student.grade_level && ` • ${student.grade_level}`}
                          </p>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {student.classes.length > 0 ? (
                            <span className="text-green-600 dark:text-green-400">
                              {student.classes.length} klasse{student.classes.length !== 1 ? "r" : ""}
                            </span>
                          ) : (
                            <span className="text-yellow-600 dark:text-yellow-400">
                              Ikke i noen klasse
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Classes list */}
          {classes.length === 0 ? (
            <Card>
              <CardContent className="py-16">
                <div className="text-center text-muted-foreground">
                  <School className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-medium mb-2">Ingen klasser ennå</h3>
                  <p className="mb-4">Opprett din første klasse for å komme i gang</p>
                  <Button onClick={() => setDialogOpen(true)}>
                    <Plus className="h-4 w-4 mr-2" />
                    Opprett klasse
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {classes.map((cls) => (
                <Card key={cls.id} className="hover:border-primary/50 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{cls.name}</CardTitle>
                        <CardDescription>
                          {cls.grade_level && `${cls.grade_level} • `}
                          {cls.subject || "Ingen fag valgt"}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{cls.studentCount}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Invitasjonskode */}
                    {cls.invite_code && (
                      <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Invitasjonskode</p>
                          <p className="font-mono font-bold text-lg tracking-wider">{cls.invite_code}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyInviteCode(cls.invite_code!)}
                        >
                          {copiedCode === cls.invite_code ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    )}

                    <Link href={`/dashboard/teacher/classes/${cls.id}`}>
                      <Button variant="outline" className="w-full">
                        Se klasse
                        <ChevronRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Add students to class dialog */}
      <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Legg elever til klasse</DialogTitle>
            <DialogDescription>
              Velg elever fra {orgName} og hvilken klasse de skal legges til i
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {/* Class selector */}
            <div className="space-y-2">
              <Label>Velg klasse</Label>
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger>
                  <SelectValue placeholder="Velg en klasse" />
                </SelectTrigger>
                <SelectContent>
                  {classes.map((cls) => (
                    <SelectItem key={cls.id} value={cls.id}>
                      {cls.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Student list */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Velg elever</Label>
                <span className="text-sm text-muted-foreground">
                  {selectedStudents.length} valgt
                </span>
              </div>
              <div className="border rounded-lg max-h-[300px] overflow-y-auto">
                {orgStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center gap-3 p-3 border-b last:border-b-0 hover:bg-muted/50"
                  >
                    <Checkbox
                      id={`student-${student.id}`}
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={() => toggleStudent(student.id)}
                    />
                    <label
                      htmlFor={`student-${student.id}`}
                      className="flex-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{student.name}</p>
                        {student.isTeacher && (
                          <span className="text-xs bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 px-2 py-0.5 rounded-full">
                            Lærer
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {student.email}
                        {student.classes.length > 0 && (
                          <span className="ml-2 text-green-600 dark:text-green-400">
                            (i {student.classes.join(", ")})
                          </span>
                        )}
                      </p>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAddDialogOpen(false)}>
              Avbryt
            </Button>
            <Button
              onClick={handleAddToClass}
              disabled={addingStudents || !selectedClass || selectedStudents.length === 0}
            >
              {addingStudents ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Legger til...
                </>
              ) : (
                <>
                  <UserPlus className="h-4 w-4 mr-2" />
                  Legg til {selectedStudents.length} elev{selectedStudents.length !== 1 ? "er" : ""}
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

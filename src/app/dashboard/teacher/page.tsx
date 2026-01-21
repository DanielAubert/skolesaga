"use client";

import { useState, useEffect } from "react";
import { useRequireAuth, useAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  BookOpen,
  TrendingUp,
  Clock,
  BarChart3,
  ChevronRight,
  Plus,
  School,
  Copy,
  Check,
  BookMarked,
  GraduationCap,
  Calculator,
  LogOut,
  Building2,
  UserPlus,
  Loader2,
  UserSearch,
  Dumbbell,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface Organization {
  id: string;
  name: string;
}

interface OrganizationStudent {
  id: string;
  name: string;
  email: string;
  grade_level: string | null;
  classes: string[];
  isTeacher?: boolean;
}

interface ClassData {
  id: string;
  name: string;
  grade_level: string | null;
  subject: string | null;
  invite_code: string | null;
  studentCount: number;
}

interface TeacherStats {
  totalStudents: number;
  totalClasses: number;
  activeToday: number;
  weeklyCompletions: number;
  averagePassRate: number;
}

interface RecentActivity {
  id: string;
  type: "completion" | "training";
  studentId: string;
  studentName: string;
  exerciseId: string;
  chapterId: string;
  courseId: string;
  timestamp: string;
  // For completions
  isPassed?: boolean;
  completedSubtasks?: number;
  totalSubtasks?: number;
  // For training
  questionsAnswered?: number;
  questionsCorrect?: number;
  isSeriousAttempt?: boolean;
}

export default function TeacherDashboard() {
  const { isLoading: authLoading } = useRequireAuth("teacher");
  const { logout } = useAuth();
  const [classes, setClasses] = useState<ClassData[]>([]);
  const [stats, setStats] = useState<TeacherStats>({
    totalStudents: 0,
    totalClasses: 0,
    activeToday: 0,
    weeklyCompletions: 0,
    averagePassRate: 0,
  });
  const [recentActivity, setRecentActivity] = useState<RecentActivity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  // Organization students
  const [orgStudents, setOrgStudents] = useState<OrganizationStudent[]>([]);
  const [orgName, setOrgName] = useState<string | null>(null);
  const [orgLoading, setOrgLoading] = useState(true);

  // Add to class dialog
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [addingStudents, setAddingStudents] = useState(false);

  // Searchable as student toggle
  const [searchableAsStudent, setSearchableAsStudent] = useState(false);
  const [searchableLoading, setSearchableLoading] = useState(true);
  const [searchableUpdating, setSearchableUpdating] = useState(false);

  // Organization selector
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [changeOrgDialogOpen, setChangeOrgDialogOpen] = useState(false);
  const [selectedOrgId, setSelectedOrgId] = useState<string>("");
  const [changingOrg, setChangingOrg] = useState(false);
  const [currentOrgId, setCurrentOrgId] = useState<string | null>(null);

  // Hent data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Hent klasser
        const classesResponse = await fetch("/api/classes");
        let totalClasses = 0;
        if (classesResponse.ok) {
          const classesData = await classesResponse.json();
          setClasses(classesData.classes);
          totalClasses = classesData.classes.length;
        }

        // Hent statistikk fra lærer-API
        const statsResponse = await fetch("/api/teacher/stats");
        if (statsResponse.ok) {
          const statsData = await statsResponse.json();
          setStats({
            totalStudents: statsData.totalStudents,
            totalClasses,
            activeToday: statsData.activeToday,
            weeklyCompletions: statsData.weeklyCompletions,
            averagePassRate: statsData.averagePassRate,
          });
          setRecentActivity(statsData.recentActivity || []);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Hent organisasjons-elever
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

  useEffect(() => {
    fetchOrgStudents();
  }, []);

  // Hent tilgjengelige organisasjoner
  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await fetch("/api/organizations");
        if (response.ok) {
          const data = await response.json();
          setOrganizations(data.organizations || []);
        }
        // Hent brukerens nåværende organisasjon
        const userOrgResponse = await fetch("/api/user/organization");
        if (userOrgResponse.ok) {
          const userOrgData = await userOrgResponse.json();
          setCurrentOrgId(userOrgData.organizationId);
        }
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, []);

  // Hent søkbar-status
  useEffect(() => {
    const fetchSearchableStatus = async () => {
      try {
        const response = await fetch("/api/user/searchable");
        if (response.ok) {
          const data = await response.json();
          setSearchableAsStudent(data.searchable ?? false);
        }
      } catch (error) {
        console.error("Error fetching searchable status:", error);
      } finally {
        setSearchableLoading(false);
      }
    };

    fetchSearchableStatus();
  }, []);

  // Toggle søkbar-status
  const toggleSearchable = async (checked: boolean) => {
    setSearchableUpdating(true);
    try {
      const response = await fetch("/api/user/searchable", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ searchable: checked }),
      });

      if (response.ok) {
        const data = await response.json();
        setSearchableAsStudent(data.searchable);
      }
    } catch (error) {
      console.error("Error toggling searchable status:", error);
    } finally {
      setSearchableUpdating(false);
    }
  };

  // Bytt organisasjon
  const handleChangeOrganization = async () => {
    if (!selectedOrgId) return;

    setChangingOrg(true);
    try {
      const response = await fetch("/api/user/organization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ organizationId: selectedOrgId }),
      });

      if (response.ok) {
        const data = await response.json();
        setOrgName(data.organizationName);
        setCurrentOrgId(data.organizationId);
        setChangeOrgDialogOpen(false);
        setSelectedOrgId("");
        // Oppdater elevlisten
        setOrgLoading(true);
        fetchOrgStudents();
      }
    } catch (error) {
      console.error("Error changing organization:", error);
    } finally {
      setChangingOrg(false);
    }
  };

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
        // Refresh org students to update class info
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-green-100 dark:bg-green-950/30 px-3 py-1 rounded-full">
              <School className="h-4 w-4 text-green-600" />
              <span className="text-sm font-medium text-green-700 dark:text-green-400">Lærer</span>
            </div>
            <Link href="/profil">
              <Button variant="outline" size="sm">
                Min profil
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={() => logout()}>
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4 py-8">
        <div className="space-y-8">
          {/* Welcome section */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Lærer-dashboard</h1>
              <p className="text-muted-foreground mt-1">Følg med på elevenes progresjon</p>
            </div>
            <div className="flex items-center gap-4">
              {/* Searchable as student toggle */}
              <div className="flex items-center gap-3 bg-muted/50 rounded-lg px-4 py-2">
                <UserSearch className="h-4 w-4 text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <Switch
                    id="searchable-toggle"
                    checked={searchableAsStudent}
                    onCheckedChange={toggleSearchable}
                    disabled={searchableLoading || searchableUpdating}
                  />
                  <Label
                    htmlFor="searchable-toggle"
                    className="text-sm cursor-pointer"
                  >
                    Synlig som elev
                  </Label>
                </div>
                {searchableUpdating && (
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                )}
              </div>
              <Link href="/dashboard/teacher/classes">
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Opprett klasse
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Totalt elever</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.totalStudents}</div>
                <p className="text-xs text-muted-foreground">
                  {stats.totalStudents === 0
                    ? "Ingen elever tilknyttet ennå"
                    : `I ${stats.totalClasses} klasse${stats.totalClasses !== 1 ? "r" : ""}`}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Aktive i dag</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.activeToday}</div>
                <p className="text-xs text-muted-foreground">Elever som har øvd i dag</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Oppgaver fullført</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.weeklyCompletions}</div>
                <p className="text-xs text-muted-foreground">Denne uken</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Beståttprosent</CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {stats.averagePassRate > 0 ? `${stats.averagePassRate}%` : "-"}
                </div>
                <p className="text-xs text-muted-foreground">Klassesnitt</p>
              </CardContent>
            </Card>
          </div>

          {/* Classes section */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Mine klasser</CardTitle>
                    <CardDescription>Administrer klassene dine</CardDescription>
                  </div>
                  <Link href="/dashboard/teacher/classes">
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Ny klasse
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                {classes.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <School className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Ingen klasser ennå</p>
                    <p className="text-sm mt-1">Opprett din første klasse for å komme i gang</p>
                    <Link href="/dashboard/teacher/classes">
                      <Button className="mt-4" variant="outline">
                        <Plus className="h-4 w-4 mr-2" />
                        Opprett klasse
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {classes.slice(0, 3).map((cls) => (
                      <Link
                        key={cls.id}
                        href={`/dashboard/teacher/classes/${cls.id}`}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <div>
                          <p className="font-medium">{cls.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {cls.studentCount} elev{cls.studentCount !== 1 ? "er" : ""}
                          </p>
                        </div>
                        {cls.invite_code && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                              e.preventDefault();
                              copyInviteCode(cls.invite_code!);
                            }}
                          >
                            {copiedCode === cls.invite_code ? (
                              <Check className="h-4 w-4 text-green-500" />
                            ) : (
                              <Copy className="h-4 w-4" />
                            )}
                          </Button>
                        )}
                      </Link>
                    ))}
                    {classes.length > 3 && (
                      <Link href="/dashboard/teacher/classes">
                        <Button variant="link" className="w-full">
                          Se alle {classes.length} klasser
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Trenger oppmerksomhet</CardTitle>
                <CardDescription>Elever som sliter eller er inaktive</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen varsler</p>
                  <p className="text-sm mt-1">Når elever trenger hjelp, vises de her</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Organization students section */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="h-5 w-5" />
                    {orgName ? `Elever i ${orgName}` : "Min organisasjon"}
                  </CardTitle>
                  <CardDescription>
                    {orgName
                      ? `${orgStudents.length} elev${orgStudents.length !== 1 ? "er" : ""} registrert i din organisasjon`
                      : "Du er ikke tilknyttet en organisasjon ennå"}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSelectedOrgId(currentOrgId || "");
                      setChangeOrgDialogOpen(true);
                    }}
                  >
                    <Building2 className="h-4 w-4 mr-2" />
                    {orgName ? "Bytt organisasjon" : "Velg organisasjon"}
                  </Button>
                  {orgName && orgStudents.length > 0 && classes.length > 0 && (
                    <Button onClick={() => setAddDialogOpen(true)}>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Legg til i klasse
                    </Button>
                  )}
                </div>
              </div>
            </CardHeader>
              <CardContent>
                {!orgName ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Building2 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Velg en organisasjon for å se elever</p>
                    <p className="text-sm mt-1">Klikk &quot;Velg organisasjon&quot; for å komme i gang</p>
                  </div>
                ) : orgLoading ? (
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
                    {orgStudents.slice(0, 5).map((student) => (
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
                    {orgStudents.length > 5 && (
                      <p className="text-sm text-center text-muted-foreground pt-2">
                        + {orgStudents.length - 5} flere elever
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>

          {/* Lærebøker og ressurser */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Lærebøker og ressurser</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <Link href="/bok/1t">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/50">
                        <BookMarked className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">1T Matematikk</CardTitle>
                        <CardDescription className="text-xs">Lærebok VG1</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs text-muted-foreground">67 kapitler</span>
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <Link href="/book">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/50">
                        <BookOpen className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Python-hefte</CardTitle>
                        <CardDescription className="text-xs">Programmering</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs text-muted-foreground">Interaktive oppgaver</span>
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <Link href="/matematikk">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-950/50">
                        <GraduationCap className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Eksamensoppgaver</CardTitle>
                        <CardDescription className="text-xs">Tidligere eksamener</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs text-muted-foreground">Alle fag og nivåer</span>
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-primary/50 transition-colors cursor-pointer">
                <Link href="/hoderegning">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/50">
                        <Calculator className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Hoderegning</CardTitle>
                        <CardDescription className="text-xs">Treningsøkter</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <span className="text-xs text-muted-foreground">Pluss, minus, gange, dele</span>
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>

          {/* Quick links */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <Link href="/dashboard/teacher/classes">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/50">
                      <School className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Klasseoversikt</CardTitle>
                      <CardDescription>Se alle klasser</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{stats.totalClasses} klasser</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <Link href="/dashboard/teacher/classes">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-950/50">
                      <Users className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Elevoversikt</CardTitle>
                      <CardDescription>Se alle elever</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">{stats.totalStudents} elever</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Link>
            </Card>

            <Card className="hover:border-primary/50 transition-colors cursor-pointer">
              <Link href="/bok">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-950/50">
                      <BookMarked className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Alle lærebøker</CardTitle>
                      <CardDescription>Se alle tilgjengelige bøker</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">1T, 1P, S1, R1, R2</span>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardContent>
              </Link>
            </Card>
          </div>

          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Siste elevaktivitet</CardTitle>
              <CardDescription>Hva elevene har gjort nylig</CardDescription>
            </CardHeader>
            <CardContent>
              {recentActivity.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen aktivitet ennå</p>
                  <p className="text-sm mt-1">Når elever øver, vises aktiviteten her</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <Link
                      key={activity.id}
                      href={`/dashboard/teacher/students/${activity.studentId}/exercises`}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        {activity.type === "completion" ? (
                          activity.isPassed ? (
                            <CheckCircle className="h-5 w-5 text-green-500" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500" />
                          )
                        ) : (
                          <Dumbbell className={`h-5 w-5 ${activity.isSeriousAttempt ? "text-blue-500" : "text-muted-foreground"}`} />
                        )}
                        <div>
                          <p className="font-medium text-sm">{activity.studentName}</p>
                          <p className="text-xs text-muted-foreground">
                            {activity.type === "completion" ? (
                              <>
                                Fullførte oppgave i {activity.courseId.toUpperCase()} - {activity.completedSubtasks}/{activity.totalSubtasks} deloppgaver
                              </>
                            ) : (
                              <>
                                Trente på oppgave i {activity.courseId.toUpperCase()} - {activity.questionsCorrect}/{activity.questionsAnswered} riktige
                              </>
                            )}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {activity.type === "completion" && (
                          <span className={`text-xs px-2 py-0.5 rounded ${
                            activity.isPassed
                              ? "bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400"
                              : "bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400"
                          }`}>
                            {activity.isPassed ? "Bestått" : "Ikke bestått"}
                          </span>
                        )}
                        {activity.type === "training" && activity.isSeriousAttempt && (
                          <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400">
                            Seriøst forsøk
                          </span>
                        )}
                        <span className="text-xs text-muted-foreground">
                          {new Date(activity.timestamp).toLocaleDateString("nb-NO", {
                            day: "numeric",
                            month: "short",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
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
              <label className="text-sm font-medium">Velg klasse</label>
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
                <label className="text-sm font-medium">Velg elever</label>
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
                      id={student.id}
                      checked={selectedStudents.includes(student.id)}
                      onCheckedChange={() => toggleStudent(student.id)}
                    />
                    <label
                      htmlFor={student.id}
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

      {/* Change organization dialog */}
      <Dialog open={changeOrgDialogOpen} onOpenChange={setChangeOrgDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Velg organisasjon</DialogTitle>
            <DialogDescription>
              Velg hvilken organisasjon du tilhører. Du vil se elever fra den valgte organisasjonen.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Organisasjon</label>
              <Select value={selectedOrgId} onValueChange={setSelectedOrgId}>
                <SelectTrigger>
                  <SelectValue placeholder="Velg en organisasjon" />
                </SelectTrigger>
                <SelectContent>
                  {organizations.map((org) => (
                    <SelectItem key={org.id} value={org.id}>
                      {org.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {organizations.length === 0 && (
              <p className="text-sm text-muted-foreground text-center py-4">
                Ingen organisasjoner tilgjengelig. Kontakt administrator.
              </p>
            )}
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setChangeOrgDialogOpen(false)}>
              Avbryt
            </Button>
            <Button
              onClick={handleChangeOrganization}
              disabled={changingOrg || !selectedOrgId}
            >
              {changingOrg ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Oppdaterer...
                </>
              ) : (
                <>
                  <Building2 className="h-4 w-4 mr-2" />
                  Velg organisasjon
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

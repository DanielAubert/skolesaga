"use client";

import { useEffect, useState } from "react";
import { useRequireAuth, useAuth } from "@/lib/auth/hooks";
import { useProgress } from "@/lib/progress/hooks";
import { useStudentCourses } from "@/lib/hooks/use-student-courses";
import { TEXTBOOK_COURSES } from "@/lib/data/textbook-courses";
import { COURSE_IMAGES } from "@/lib/data/course-images";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  GraduationCap,
  Calculator,
  BookOpen,
  TrendingUp,
  Clock,
  Target,
  ChevronRight,
  Flame,
  CheckCircle2,
  XCircle,
  School,
  UserPlus,
  BookMarked,
  Users,
  LogOut,
  Plus,
  X
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface StudentClass {
  id: string;
  name: string;
  gradeLevel: string | null;
  subject: string | null;
  teacherName: string;
  joinedAt: string;
}

export default function StudentDashboard() {
  const { user, isLoading } = useRequireAuth();
  const { logout } = useAuth();
  const weekProgress = useProgress({ period: "week" });
  const allProgress = useProgress({ period: "all" });
  const { courses: selectedCourses, removeCourse, isLoading: coursesLoading } = useStudentCourses();
  const [myClasses, setMyClasses] = useState<StudentClass[]>([]);
  const [_classesLoading, setClassesLoading] = useState(true);

  // Hent kursdata for valgte fag
  const selectedCourseData = selectedCourses
    .map(courseId => TEXTBOOK_COURSES.find(c => c.id === courseId))
    .filter(Boolean);

  // Hent data når komponenten laster
  useEffect(() => {
    weekProgress.refetch();
    allProgress.refetch();

    // Hent elevens klasser
    const fetchClasses = async () => {
      try {
        const res = await fetch("/api/student/classes");
        if (res.ok) {
          const data = await res.json();
          setMyClasses(data.classes || []);
        }
      } catch (error) {
        console.error("Error fetching classes:", error);
      } finally {
        setClassesLoading(false);
      }
    };
    fetchClasses();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const weekStats = weekProgress.data?.stats;
  const _allStats = allProgress.data?.stats;
  const recentAttempts = allProgress.data?.attempts?.slice(0, 10) || [];

  // Beregn streak (forenket versjon - teller sammenhengende dager)
  const calculateStreak = () => {
    const attempts = allProgress.data?.attempts || [];
    if (attempts.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const uniqueDays = new Set<string>();
    attempts.forEach(a => {
      const date = new Date(a.created_at);
      date.setHours(0, 0, 0, 0);
      uniqueDays.add(date.toISOString());
    });

    let streak = 0;
    const checkDate = new Date(today);

    while (true) {
      const dateStr = checkDate.toISOString();
      if (uniqueDays.has(dateStr)) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else if (streak === 0) {
        // Sjekk om de øvde i går
        checkDate.setDate(checkDate.getDate() - 1);
        const yesterdayStr = checkDate.toISOString();
        if (uniqueDays.has(yesterdayStr)) {
          streak++;
          checkDate.setDate(checkDate.getDate() - 1);
        } else {
          break;
        }
      } else {
        break;
      }
    }

    return streak;
  };

  const streak = calculateStreak();

  // Formater tid
  const formatTime = (minutes: number) => {
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return mins > 0 ? `${hours}t ${mins}m` : `${hours} timer`;
  };

  // Formater øvelsestype
  const formatExerciseType = (type: string) => {
    const types: Record<string, string> = {
      hoderegning: "Hoderegning",
      eksamen: "Eksamen",
      book: "Python-hefte",
    };
    return types[type] || type;
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
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Hei, {user?.name?.split(" ")[0]}!
            </span>
            <Link href="/profil">
              <Button variant="outline" size="sm">
                Min profil
              </Button>
            </Link>
            <ThemeToggle />
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
              <h1 className="text-3xl font-bold tracking-tight">
                Velkommen tilbake, {user?.name?.split(" ")[0]}!
              </h1>
              <p className="text-muted-foreground mt-1">
                Her er en oversikt over din fremgang
              </p>
            </div>
            {streak > 0 && (
              <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-950/30 px-4 py-2 rounded-full">
                <Flame className="h-5 w-5 text-orange-500" />
                <span className="font-medium text-orange-700 dark:text-orange-400">
                  {streak} dagers streak!
                </span>
              </div>
            )}
          </div>

          {/* Stats cards */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Oppgaver gjort</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weekStats?.totalAttempts || 0}</div>
                <p className="text-xs text-muted-foreground">
                  {weekStats?.totalAttempts ? "Denne uken" : "Start med å øve i dag!"}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Riktige svar</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{weekStats?.correctRate || 0}%</div>
                <p className="text-xs text-muted-foreground">
                  {weekStats?.correctAttempts || 0} av {weekStats?.totalAttempts || 0} riktig
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total tid</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatTime(weekStats?.totalTimeMinutes || 0)}
                </div>
                <p className="text-xs text-muted-foreground">
                  Denne uken
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Streak</CardTitle>
                <Flame className={`h-4 w-4 ${streak > 0 ? "text-orange-500" : "text-muted-foreground"}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{streak} dager</div>
                <p className="text-xs text-muted-foreground">
                  {streak > 0 ? "Fortsett sånn!" : "Øv daglig for å bygge streak"}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Join class card */}
          <Card className="border-dashed border-2 hover:border-primary/50 transition-colors bg-muted/30">
            <Link href="/join">
              <CardContent className="flex items-center justify-between py-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/50">
                    <UserPlus className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Bli med i en klasse</p>
                    <p className="text-sm text-muted-foreground">Skriv inn invitasjonskoden fra læreren din</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </CardContent>
            </Link>
          </Card>

          {/* Mine fag */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Mine fag</h2>
              <Link href="/bok">
                <Button variant="outline" size="sm" className="gap-2">
                  <Plus className="h-4 w-4" />
                  Legg til fag
                </Button>
              </Link>
            </div>

            {coursesLoading ? (
              <div className="flex items-center justify-center py-8">
                <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            ) : selectedCourseData.length === 0 ? (
              <Card className="border-dashed border-2">
                <CardContent className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="p-3 rounded-full bg-muted mb-4">
                    <BookMarked className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">Ingen fag lagt til ennå</h3>
                  <p className="text-sm text-muted-foreground mb-4 max-w-sm">
                    Legg til fag fra lærebøkene for å få rask tilgang til dem her på dashboardet ditt.
                  </p>
                  <Link href="/bok">
                    <Button className="gap-2">
                      <Plus className="h-4 w-4" />
                      Utforsk lærebøker
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {selectedCourseData.map((course) => course && (
                  <div key={course.id} className="group relative">
                    {/* Fjern-knapp */}
                    <button
                      onClick={() => removeCourse(course.id)}
                      className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
                      title="Fjern fra mine fag"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <Link href={`/bok/${course.id}`} className="block">
                      <div className="relative overflow-hidden rounded-xl aspect-[16/10] transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                        {(course.coverImage || COURSE_IMAGES[course.id]) ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={course.coverImage || COURSE_IMAGES[course.id]}
                            alt={course.title}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <span className="text-4xl">{course.icon || "📚"}</span>
                          </div>
                        )}
                        {/* Tittel-overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 text-white bg-gradient-to-t from-black/60 to-transparent">
                          <h3 className="font-bold text-sm line-clamp-1">{course.title}</h3>
                          <p className="text-xs opacity-80">{course.level}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}

                {/* Legg til flere kort */}
                <Link href="/bok" className="block">
                  <div className="relative overflow-hidden rounded-xl aspect-[16/10] border-2 border-dashed border-muted-foreground/30 flex flex-col items-center justify-center text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                    <Plus className="h-8 w-8 mb-2" />
                    <span className="text-sm font-medium">Legg til fag</span>
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Mine klasser */}
          {myClasses.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <CardTitle>Mine klasser</CardTitle>
                </div>
                <CardDescription>Klasser du er med i</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {myClasses.map((cls) => (
                    <div
                      key={cls.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/50">
                          <School className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{cls.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {cls.teacherName}
                            {cls.subject && ` • ${cls.subject}`}
                          </p>
                        </div>
                      </div>
                      {cls.gradeLevel && (
                        <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                          {cls.gradeLevel}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Øving og trening */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Øving og trening</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:border-primary/50 transition-colors">
                <Link href="/hoderegning">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/50">
                        <Calculator className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Hoderegning</CardTitle>
                        <CardDescription>Tren regneferdighetene</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pluss, minus, gange, dele</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <Link href="/matematikk">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/50">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Eksamensoppgaver</CardTitle>
                        <CardDescription>Øv med tidligere eksamener</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Alle fag og nivåer</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Link>
              </Card>

              <Card className="hover:border-primary/50 transition-colors">
                <Link href="/bok">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-950/50">
                        <BookOpen className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">Alle lærebøker</CardTitle>
                        <CardDescription>Se alle tilgjengelige bøker</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">1T, 1P, S1, S2, R1, R2</span>
                    <ChevronRight className="h-5 w-5 text-muted-foreground" />
                  </CardContent>
                </Link>
              </Card>
            </div>
          </div>

          {/* Recent activity */}
          <Card>
            <CardHeader>
              <CardTitle>Siste aktivitet</CardTitle>
              <CardDescription>Din øvingshistorikk</CardDescription>
            </CardHeader>
            <CardContent>
              {recentAttempts.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Clock className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Ingen aktivitet ennå</p>
                  <p className="text-sm mt-1">Start med å gjøre noen oppgaver!</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentAttempts.map((attempt) => (
                    <div
                      key={attempt.id}
                      className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        {attempt.correct === true ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : attempt.correct === false ? (
                          <XCircle className="h-5 w-5 text-red-500" />
                        ) : (
                          <Target className="h-5 w-5 text-muted-foreground" />
                        )}
                        <div>
                          <p className="font-medium">
                            {formatExerciseType(attempt.exercise_type)}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {attempt.subject && `${attempt.subject} • `}
                            {new Date(attempt.created_at).toLocaleDateString("nb-NO", {
                              day: "numeric",
                              month: "short",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </p>
                        </div>
                      </div>
                      {attempt.score !== null && attempt.max_score !== null && (
                        <div className="text-right">
                          <p className="font-medium">
                            {attempt.score}/{attempt.max_score}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {Math.round((attempt.score / attempt.max_score) * 100)}%
                          </p>
                        </div>
                      )}
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

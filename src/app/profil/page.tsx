"use client";

import { useState, useEffect } from "react";
import { useAuth, useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BookOpen,
  User,
  Mail,
  Shield,
  LogOut,
  ArrowLeft,
  School,
  GraduationCap,
  Building2,
  Calendar,
  Phone,
  Pencil,
} from "lucide-react";

interface UserProfile {
  name: string;
  email: string;
  role: string;
  organization?: string;
  birthYear?: number;
  gradeLevel?: string;
  phone?: string;
  subscriptionTier?: string;
}

const GRADE_LABELS: Record<string, string> = {
  "5": "5. klasse",
  "6": "6. klasse",
  "7": "7. klasse",
  "8": "8. klasse",
  "9": "9. klasse",
  "10": "10. klasse",
  "vg1": "VG1",
  "vg2": "VG2",
  "vg3": "VG3",
  "other": "Annet",
};

export default function ProfilePage() {
  const { user, isLoading } = useRequireAuth();
  const { logout } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [profileLoading, setProfileLoading] = useState(true);

  // Fetch full profile from API
  useEffect(() => {
    async function fetchProfile() {
      if (!user?.id) return;

      try {
        const response = await fetch("/api/user/profile");
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      } finally {
        setProfileLoading(false);
      }
    }

    if (user) {
      fetchProfile();
    }
  }, [user]);

  if (isLoading || profileLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const displayProfile = profile || {
    name: user?.name || "Bruker",
    email: user?.email || "",
    role: user?.role || "student",
  };

  const isTeacher = user?.role === "teacher" || user?.role === "admin";
  const dashboardUrl = isTeacher ? "/dashboard/teacher" : "/dashboard/student";

  const getRoleLabel = () => {
    switch (displayProfile.role) {
      case "teacher":
        return "Lærer";
      case "admin":
        return "Administrator";
      case "student":
      default:
        return "Elev";
    }
  };

  const getRoleIcon = () => {
    switch (displayProfile.role) {
      case "teacher":
        return <School className="h-5 w-5 text-green-600" />;
      case "admin":
        return <Shield className="h-5 w-5 text-purple-600" />;
      case "student":
      default:
        return <GraduationCap className="h-5 w-5 text-blue-600" />;
    }
  };

  const getRoleBadgeColor = () => {
    switch (displayProfile.role) {
      case "teacher":
        return "bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400";
      case "admin":
        return "bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400";
      case "student":
      default:
        return "bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400";
    }
  };

  const calculateAge = (birthYear: number) => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
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
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${getRoleBadgeColor()}`}>
              {getRoleIcon()}
              <span className="text-sm font-medium">{getRoleLabel()}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4 py-8 max-w-2xl mx-auto">
        <div className="space-y-6">
          {/* Back link */}
          <Link
            href={dashboardUrl}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Tilbake til dashboard
          </Link>

          {/* Profile card */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Min profil</CardTitle>
                <CardDescription>Administrer kontoinformasjonen din</CardDescription>
              </div>
              <Link href="/onboarding">
                <Button variant="outline" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Rediger
                </Button>
              </Link>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar/Name section */}
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{displayProfile.name}</h2>
                  <div className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-medium mt-1 ${getRoleBadgeColor()}`}>
                    {getRoleIcon()}
                    {getRoleLabel()}
                  </div>
                </div>
              </div>

              {/* Info sections */}
              <div className="space-y-3 pt-4 border-t">
                {/* E-post */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Mail className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">E-post</p>
                    <p className="font-medium truncate">{displayProfile.email}</p>
                  </div>
                </div>

                {/* Organisasjon */}
                {displayProfile.organization && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Building2 className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">Skole / Organisasjon</p>
                      <p className="font-medium">{displayProfile.organization}</p>
                    </div>
                  </div>
                )}

                {/* Klassetrinn */}
                {displayProfile.gradeLevel && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <GraduationCap className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Klassetrinn</p>
                      <p className="font-medium">{GRADE_LABELS[displayProfile.gradeLevel] || displayProfile.gradeLevel}</p>
                    </div>
                  </div>
                )}

                {/* Alder */}
                {displayProfile.birthYear && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Calendar className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Alder</p>
                      <p className="font-medium">{calculateAge(displayProfile.birthYear)} år (født {displayProfile.birthYear})</p>
                    </div>
                  </div>
                )}

                {/* Telefon */}
                {displayProfile.phone && (
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                    <Phone className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Telefon</p>
                      <p className="font-medium">{displayProfile.phone}</p>
                    </div>
                  </div>
                )}

                {/* Rolle */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                  <Shield className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">Rolle</p>
                    <p className="font-medium">{getRoleLabel()}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 border-t space-y-3">
                <Link href={dashboardUrl} className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Gå til dashboard
                  </Button>
                </Link>

                <Link href="/endre-passord" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    <Shield className="h-4 w-4 mr-2" />
                    Endre passord
                  </Button>
                </Link>

                <Button
                  variant="destructive"
                  className="w-full justify-start"
                  onClick={() => logout()}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logg ut
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick links based on role */}
          <Card>
            <CardHeader>
              <CardTitle>Hurtiglenker</CardTitle>
              <CardDescription>Gå direkte til det du trenger</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:grid-cols-2">
                {isTeacher ? (
                  <>
                    <Link href="/dashboard/teacher/classes">
                      <Button variant="outline" className="w-full justify-start">
                        <School className="h-4 w-4 mr-2" />
                        Mine klasser
                      </Button>
                    </Link>
                    <Link href="/bok/1t">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        1T Lærebok
                      </Button>
                    </Link>
                    <Link href="/matematikk">
                      <Button variant="outline" className="w-full justify-start">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Eksamensoppgaver
                      </Button>
                    </Link>
                    <Link href="/bok">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Alle lærebøker
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/join">
                      <Button variant="outline" className="w-full justify-start">
                        <School className="h-4 w-4 mr-2" />
                        Bli med i klasse
                      </Button>
                    </Link>
                    <Link href="/bok/1t">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        1T Lærebok
                      </Button>
                    </Link>
                    <Link href="/hoderegning">
                      <Button variant="outline" className="w-full justify-start">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        Hoderegning
                      </Button>
                    </Link>
                    <Link href="/matematikk">
                      <Button variant="outline" className="w-full justify-start">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Eksamensoppgaver
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

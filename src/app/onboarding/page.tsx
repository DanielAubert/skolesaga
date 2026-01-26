"use client";

import { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useUser } from "@/lib/auth/hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BookOpen, User, Building2, Calendar, GraduationCap, Loader2, AlertCircle, CheckCircle2, Plus, Users } from "lucide-react";

interface Organization {
  id: string;
  name: string;
}

const GRADE_LEVELS = [
  { value: "5", label: "5. klasse" },
  { value: "6", label: "6. klasse" },
  { value: "7", label: "7. klasse" },
  { value: "8", label: "8. klasse" },
  { value: "9", label: "9. klasse" },
  { value: "10", label: "10. klasse" },
  { value: "vg1", label: "VG1" },
  { value: "vg2", label: "VG2" },
  { value: "vg3", label: "VG3" },
  { value: "other", label: "Annet" },
];

// Generate birth years (current year - 5 to current year - 80)
const currentYear = new Date().getFullYear();
const BIRTH_YEARS = Array.from({ length: 76 }, (_, i) => currentYear - 5 - i);

function OnboardingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user, isAuthenticated, isLoading: userLoading } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Form fields
  const [name, setName] = useState("");
  const [organizationId, setOrganizationId] = useState<string>("");
  const [birthYear, setBirthYear] = useState<string>("");
  const [gradeLevel, setGradeLevel] = useState<string>("");
  const [phone, setPhone] = useState("");
  const [classCode, setClassCode] = useState("");

  // Organizations
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [orgsLoading, setOrgsLoading] = useState(true);

  // New organization dialog (for teachers)
  const [showNewOrgDialog, setShowNewOrgDialog] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const [newOrgLoading, setNewOrgLoading] = useState(false);
  const [newOrgSuccess, setNewOrgSuccess] = useState(false);

  // Pre-fill name from user data
  useEffect(() => {
    if (user?.name) {
      setName(user.name);
    }
  }, [user]);

  // Fetch organizations
  useEffect(() => {
    async function fetchOrganizations() {
      try {
        const response = await fetch("/api/organizations");
        if (response.ok) {
          const data = await response.json();
          setOrganizations(data.organizations || []);
        }
      } catch (error) {
        console.error("Failed to fetch organizations:", error);
      } finally {
        setOrgsLoading(false);
      }
    }
    fetchOrganizations();
  }, []);

  // Redirect if not authenticated
  useEffect(() => {
    if (!userLoading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, userLoading, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Find organization name from ID
    const selectedOrg = organizations.find(o => o.id === organizationId);

    // Handle special organization values
    let orgId = organizationId || null;
    let orgName = selectedOrg?.name || null;

    if (organizationId === "none") {
      orgId = null;
      orgName = null;
    } else if (organizationId === "studenthjelp") {
      orgId = "studenthjelp";
      orgName = "Studenthjelp Privatundervisning";
    }

    try {
      const response = await fetch("/api/auth/onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name.trim(),
          organizationId: orgId,
          organization: orgName,
          birthYear: birthYear ? parseInt(birthYear) : null,
          gradeLevel: gradeLevel || null,
          phone: phone.trim() || null,
          classCode: classCode.trim().toUpperCase() || null,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Kunne ikke lagre informasjonen");
      }

      setSuccess(true);

      // Redirect to dashboard or callback URL
      const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
      setTimeout(() => {
        router.push(callbackUrl);
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noe gikk galt");
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewOrgSubmit = async () => {
    if (!newOrgName.trim()) return;

    setNewOrgLoading(true);
    try {
      const response = await fetch("/api/organizations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newOrgName.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setNewOrgSuccess(true);
        // Refresh organizations list
        const orgsResponse = await fetch("/api/organizations");
        if (orgsResponse.ok) {
          const orgsData = await orgsResponse.json();
          setOrganizations(orgsData.organizations || []);
        }
        // Close dialog after a moment
        setTimeout(() => {
          setShowNewOrgDialog(false);
          setNewOrgName("");
          setNewOrgSuccess(false);
        }, 2000);
      } else {
        setError(data.error || "Kunne ikke sende forespørsel");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Noe gikk galt");
    } finally {
      setNewOrgLoading(false);
    }
  };

  const isTeacher = user?.role === "teacher" || user?.role === "admin";

  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen flex flex-col">
        <header className="border-b">
          <div className="container flex h-16 items-center px-4">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <BookOpen className="h-6 w-6" />
              <span>Skolesaga</span>
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <Card className="w-full max-w-md">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold">Velkommen!</h2>
                <p className="text-muted-foreground">
                  Informasjonen din er lagret. Du blir nå sendt videre...
                </p>
                <div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <BookOpen className="h-6 w-6" />
            <span>Skolesaga</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">
              Fullfør registreringen
            </h1>
            <p className="text-muted-foreground">
              Fortell oss litt om deg selv så vi kan tilpasse opplevelsen
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Din informasjon</CardTitle>
              <CardDescription>
                Denne informasjonen hjelper oss å gi deg bedre innhold
              </CardDescription>
            </CardHeader>
            <CardContent>
              {error && (
                <div className="flex items-center gap-2 p-3 mb-4 text-sm text-red-600 bg-red-50 dark:bg-red-950/50 dark:text-red-400 rounded-lg">
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Navn */}
                <div className="space-y-2">
                  <Label htmlFor="name">Fullt navn *</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ola Nordmann"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-10"
                      required
                      disabled={isLoading}
                    />
                  </div>
                </div>

                {/* E-post (read-only) */}
                <div className="space-y-2">
                  <Label>E-post</Label>
                  <Input
                    type="email"
                    value={user?.email || ""}
                    disabled
                    className="bg-muted"
                  />
                  <p className="text-xs text-muted-foreground">
                    E-postadressen kan ikke endres her
                  </p>
                </div>

                {/* Skole/Organisasjon */}
                <div className="space-y-2">
                  <Label htmlFor="organization">Skole / Organisasjon</Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select
                      value={organizationId}
                      onValueChange={setOrganizationId}
                      disabled={isLoading || orgsLoading}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder={orgsLoading ? "Laster..." : "Velg organisasjon"} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Ingen</SelectItem>
                        <SelectItem value="studenthjelp">Studenthjelp Privatundervisning</SelectItem>
                        {organizations.map((org) => (
                          <SelectItem key={org.id} value={org.id}>
                            {org.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Skolen eller firmaet du får undervisning gjennom
                  </p>
                  {isTeacher && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="text-xs"
                      onClick={() => setShowNewOrgDialog(true)}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Legg til ny organisasjon
                    </Button>
                  )}
                </div>

                {/* Fødselsår */}
                <div className="space-y-2">
                  <Label htmlFor="birthYear">Fødselsår</Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={birthYear} onValueChange={setBirthYear} disabled={isLoading}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Velg fødselsår" />
                      </SelectTrigger>
                      <SelectContent>
                        {BIRTH_YEARS.map((year) => (
                          <SelectItem key={year} value={year.toString()}>
                            {year}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Klassetrinn */}
                <div className="space-y-2">
                  <Label htmlFor="gradeLevel">Klassetrinn</Label>
                  <div className="relative">
                    <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10" />
                    <Select value={gradeLevel} onValueChange={setGradeLevel} disabled={isLoading}>
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Velg klassetrinn" />
                      </SelectTrigger>
                      <SelectContent>
                        {GRADE_LEVELS.map((grade) => (
                          <SelectItem key={grade.value} value={grade.value}>
                            {grade.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Klassekode (valgfritt, kun for elever) */}
                {!isTeacher && (
                  <div className="space-y-2">
                    <Label htmlFor="classCode">Klassekode (valgfritt)</Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="classCode"
                        type="text"
                        placeholder="F.eks. ABC123"
                        value={classCode}
                        onChange={(e) => setClassCode(e.target.value.toUpperCase())}
                        className="pl-10 font-mono tracking-widest"
                        maxLength={10}
                        disabled={isLoading}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Har du fått en klassekode fra læreren? Skriv den inn her for å bli med i klassen.
                    </p>
                  </div>
                )}

                {/* Telefon (valgfritt, kun for lærere) */}
                {isTeacher && (
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefonnummer (valgfritt)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+47 123 45 678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={isLoading}
                    />
                    <p className="text-xs text-muted-foreground">
                      Brukes kun for viktige varsler
                    </p>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isLoading || !name.trim()}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Lagrer...
                    </>
                  ) : (
                    "Fullfør registrering"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground">
            Ved å fortsette godtar du våre{" "}
            <Link href="/vilkar" className="underline hover:text-primary">
              brukervilkår
            </Link>{" "}
            og{" "}
            <Link href="/personvern" className="underline hover:text-primary">
              personvernerklæring
            </Link>
          </p>
        </div>
      </main>

      {/* New Organization Dialog (for teachers) */}
      <Dialog open={showNewOrgDialog} onOpenChange={setShowNewOrgDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Legg til ny organisasjon</DialogTitle>
            <DialogDescription>
              Skriv inn navnet på organisasjonen. Forespørselen vil bli godkjent av en administrator.
            </DialogDescription>
          </DialogHeader>
          {newOrgSuccess ? (
            <div className="flex flex-col items-center gap-4 py-6">
              <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <p className="text-center text-muted-foreground">
                Forespørselen er sendt! Du vil få tilgang når den er godkjent.
              </p>
            </div>
          ) : (
            <>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="newOrgName">Organisasjonsnavn</Label>
                  <Input
                    id="newOrgName"
                    placeholder="F.eks. Studenthjelp Privatundervisning"
                    value={newOrgName}
                    onChange={(e) => setNewOrgName(e.target.value)}
                    disabled={newOrgLoading}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setShowNewOrgDialog(false)}
                  disabled={newOrgLoading}
                >
                  Avbryt
                </Button>
                <Button
                  onClick={handleNewOrgSubmit}
                  disabled={newOrgLoading || !newOrgName.trim()}
                >
                  {newOrgLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sender...
                    </>
                  ) : (
                    "Send forespørsel"
                  )}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function OnboardingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <OnboardingContent />
    </Suspense>
  );
}

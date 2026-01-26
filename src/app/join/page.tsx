"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRequireAuth } from "@/lib/auth/hooks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BookOpen, ChevronLeft, Users, Loader2, CheckCircle2, XCircle } from "lucide-react";

export default function JoinClassPage() {
  const { user, isLoading: authLoading } = useRequireAuth();
  const router = useRouter();
  const [code, setCode] = useState("");
  const [isJoining, setIsJoining] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!code.trim()) {
      setError("Vennligst skriv inn en invitasjonskode");
      return;
    }

    setIsJoining(true);

    try {
      const res = await fetch("/api/student/join-class", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: code.trim().toUpperCase() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Kunne ikke bli med i klassen");
        return;
      }

      setSuccess(`Du er nå med i klassen "${data.className}"!`);
      setCode("");

      // Redirect til dashboard etter 2 sekunder
      setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } catch (err) {
      setError("Noe gikk galt. Prøv igjen senere.");
    } finally {
      setIsJoining(false);
    }
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
        </div>
      </header>

      {/* Main content */}
      <main className="container px-4 py-8">
        <div className="max-w-md mx-auto">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Tilbake til dashboard
          </Link>

          <Card>
            <CardHeader className="text-center">
              <div className="mx-auto p-3 rounded-full bg-blue-100 dark:bg-blue-950/50 w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl">Bli med i en klasse</CardTitle>
              <CardDescription>
                Skriv inn invitasjonskoden du har fått fra læreren din
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="code">Invitasjonskode</Label>
                  <Input
                    id="code"
                    placeholder="F.eks. ABC123"
                    value={code}
                    onChange={(e) => setCode(e.target.value.toUpperCase())}
                    className="text-center text-lg font-mono tracking-widest"
                    maxLength={10}
                    disabled={isJoining}
                  />
                </div>

                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-red-100 dark:bg-red-950/30 text-red-700 dark:text-red-400 text-sm">
                    <XCircle className="h-4 w-4 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {success && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 text-sm">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                    <span>{success}</span>
                  </div>
                )}

                <Button type="submit" className="w-full" disabled={isJoining || !code.trim()}>
                  {isJoining ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Blir med...
                    </>
                  ) : (
                    "Bli med i klassen"
                  )}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t text-center text-sm text-muted-foreground">
                <p>Har du ikke fått en kode?</p>
                <p>Spør læreren din om invitasjonskoden til klassen.</p>
              </div>

              <div className="mt-4 p-3 rounded-lg bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 text-sm text-center">
                Denne funksjonen er under utvikling og vil være tilgjengelig snart.
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

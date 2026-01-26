"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useUser } from "@/lib/auth/hooks";
import { LoginForm } from "@/components/auth/login-form";
import { SignupForm } from "@/components/auth/signup-form";
import { ProviderButtons } from "@/components/auth/provider-buttons";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { BookOpen, GraduationCap } from "lucide-react";
import { Logo } from "@/components/ui/logo";

function LoginPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isAuthenticated, isLoading } = useUser();
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");

  // Les tab fra URL-parameter
  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "signup") {
      setActiveTab("signup");
    }
  }, [searchParams]);

  // Redirect hvis allerede logget inn
  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center px-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo size="sm" />
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md space-y-6">
          {/* Welcome text */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Logo size="lg" />
            </div>
            <p className="text-muted-foreground">
              Logg inn for å spore din progresjon og få tilgang til alle funksjoner
            </p>
          </div>

          {/* Auth card */}
          <Card>
            <CardHeader className="space-y-1 pb-4">
              <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as "login" | "signup")}>
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Logg inn
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Registrer
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* SSO Providers */}
              <ProviderButtons showFeide={false} />

              {/* Divider - vises bare hvis det er OAuth-providers */}
              <div className="relative" id="email-divider">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    eller med e-post
                  </span>
                </div>
              </div>

              {/* Forms */}
              {activeTab === "login" ? (
                <LoginForm onSwitchToRegister={() => setActiveTab("signup")} />
              ) : (
                <SignupForm onSwitchToLogin={() => setActiveTab("login")} />
              )}
            </CardContent>
          </Card>

          {/* Info text */}
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
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <LoginPageContent />
    </Suspense>
  );
}

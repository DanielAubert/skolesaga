"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/lib/auth/hooks";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (isLoading) return;

    if (!isAuthenticated) {
      router.replace("/login");
      return;
    }

    // Redirect basert på rolle
    if (user?.role === "teacher" || user?.role === "admin") {
      router.replace("/dashboard/teacher");
    } else {
      router.replace("/dashboard/student");
    }
  }, [user, isLoading, isAuthenticated, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

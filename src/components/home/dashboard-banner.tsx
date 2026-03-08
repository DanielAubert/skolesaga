"use client";

import Link from "next/link";
import { LayoutDashboard, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStudentCourses } from "@/lib/contexts/student-courses-context";
import { useUser } from "@/lib/auth/hooks";

export function DashboardBanner() {
  const { isAuthenticated } = useUser();
  const { courses } = useStudentCourses();

  if (!isAuthenticated || courses.length === 0) return null;

  return (
    <Link href="/dashboard/student" className="block group mb-6">
      <div className="flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 shadow-md hover:shadow-lg transition-all hover:scale-[1.01]">
        <div className="flex items-center gap-3 text-white">
          <LayoutDashboard className="h-5 w-5 shrink-0" />
          <span className="font-semibold">Mitt dashbord</span>
        </div>
        <Button size="sm" variant="secondary" className="shrink-0">
          Gå til dashbord
          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </Link>
  );
}

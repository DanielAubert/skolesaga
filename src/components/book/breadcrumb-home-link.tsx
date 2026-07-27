"use client";

import Link from "next/link";
import { useStudentCourses } from "@/lib/contexts/student-courses-context";

export function BreadcrumbHomeLink({ className }: { className?: string }) {
  const ctx = useStudentCourses();
  const hasCourses = ctx && ctx.courses.length > 0;

  return (
    <Link href={hasCourses ? "/dashboard/student" : "/"} className={className}>
      {hasCourses ? "Dashbord" : "Bøker"}
    </Link>
  );
}

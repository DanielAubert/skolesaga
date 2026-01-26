"use client";

import { useState } from "react";
import { GraduationCap, Check, Loader2 } from "lucide-react";
import { useStudentCourses } from "@/lib/hooks/use-student-courses";
import { useUser } from "@/lib/auth/hooks";
import { cn } from "@/lib/utils";

interface AddCourseButtonProps {
  courseId: string;
  className?: string;
  variant?: "icon" | "full";
  showWhenAdded?: boolean;
}

export function AddCourseButton({
  courseId,
  className,
  variant = "icon",
  showWhenAdded = true,
}: AddCourseButtonProps) {
  const { isAuthenticated } = useUser();
  const { hasCourse, toggleCourse, isStudent, isLoading: coursesLoading } = useStudentCourses();
  const [isToggling, setIsToggling] = useState(false);

  // Ikke vis for ikke-innloggede eller ikke-elever
  if (!isAuthenticated || !isStudent) {
    return null;
  }

  const isAdded = hasCourse(courseId);

  // Skjul hvis allerede lagt til og showWhenAdded er false
  if (isAdded && !showWhenAdded) {
    return null;
  }

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isToggling || coursesLoading) return;

    setIsToggling(true);
    await toggleCourse(courseId);
    setIsToggling(false);
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        disabled={isToggling || coursesLoading}
        className={cn(
          "absolute top-3 right-3 z-20 p-2 rounded-full transition-all duration-200",
          isAdded
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-white/90 text-gray-700 hover:bg-white hover:scale-110 shadow-lg",
          (isToggling || coursesLoading) && "opacity-50 cursor-not-allowed",
          className
        )}
        title={isAdded ? "Fjern fra dashboard" : "Legg til på dashboard"}
      >
        {isToggling ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : isAdded ? (
          <Check className="h-5 w-5" />
        ) : (
          <GraduationCap className="h-5 w-5" />
        )}
      </button>
    );
  }

  // Full button variant
  return (
    <button
      onClick={handleClick}
      disabled={isToggling || coursesLoading}
      className={cn(
        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200",
        isAdded
          ? "bg-green-500 text-white hover:bg-green-600"
          : "bg-blue-500 text-white hover:bg-blue-600",
        (isToggling || coursesLoading) && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {isToggling ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : isAdded ? (
        <Check className="h-4 w-4" />
      ) : (
        <GraduationCap className="h-4 w-4" />
      )}
      <span>{isAdded ? "Lagt til" : "Legg til på dashboard"}</span>
    </button>
  );
}

"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/lib/auth/hooks";
import { Progress } from "@/components/ui/progress";
import { ClipboardList, Clock, AlertCircle } from "lucide-react";

interface AssignmentInfo {
  id: string;
  title: string;
  courseId: string;
  chapterIds: string[];
  dueDate: string;
  teacherName: string;
  className?: string | null;
  status: string;
  completedSubtasks: number;
  totalSubtasks: number;
  percentComplete: number;
}

interface AssignmentBannerProps {
  courseId: string;
  chapterId: string;
  /** Compact mode for exercise pages */
  compact?: boolean;
}

function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return `Forfalt for ${Math.abs(diffDays)} d siden`;
  if (diffDays === 0) return "I dag";
  if (diffDays === 1) return "I morgen";
  if (diffDays <= 7) return `Om ${diffDays} dager`;
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "short",
  });
}

export function AssignmentBanner({ courseId, chapterId, compact = false }: AssignmentBannerProps) {
  const { user } = useUser();
  const [assignments, setAssignments] = useState<AssignmentInfo[]>([]);

  useEffect(() => {
    if (!user?.id || user.role === "teacher" || user.role === "admin") return;

    const fetchAssignments = async () => {
      try {
        const res = await fetch("/api/student/assignments");
        if (res.ok) {
          const data = await res.json();
          // Filtrer til lekser som inneholder dette kapittelet
          const relevant = (data.assignments || []).filter(
            (a: AssignmentInfo) =>
              a.courseId === courseId &&
              a.chapterIds.includes(chapterId) &&
              a.status !== "completed" &&
              a.status !== "completed_late"
          );
          setAssignments(relevant);
        }
      } catch {
        // Ignorer feil
      }
    };

    fetchAssignments();
  }, [user?.id, user?.role, courseId, chapterId]);

  if (assignments.length === 0) return null;

  // Vis den mest presserende leksen (sortert etter frist)
  const assignment = assignments.sort(
    (a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  )[0];

  const isOverdue = assignment.status === "overdue";
  const relativeTime = getRelativeTime(assignment.dueDate);

  if (compact) {
    return (
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
          isOverdue
            ? "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50"
            : "bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50"
        }`}
      >
        <ClipboardList className={`h-4 w-4 shrink-0 ${isOverdue ? "text-red-500" : "text-amber-500"}`} />
        <span className="truncate">
          <span className="font-medium">Lekse:</span> {assignment.title}
        </span>
        <span className={`shrink-0 text-xs font-medium ${isOverdue ? "text-red-600 dark:text-red-400" : "text-amber-600 dark:text-amber-400"}`}>
          {relativeTime}
        </span>
      </div>
    );
  }

  return (
    <div
      className={`p-4 rounded-lg border ${
        isOverdue
          ? "bg-red-50 dark:bg-red-950/30 border-red-200 dark:border-red-900/50"
          : "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/50"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <div className={`p-2 rounded-lg shrink-0 ${isOverdue ? "bg-red-100 dark:bg-red-900/50" : "bg-amber-100 dark:bg-amber-900/50"}`}>
            <ClipboardList className={`h-5 w-5 ${isOverdue ? "text-red-600" : "text-amber-600"}`} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm">Lekse</p>
              {isOverdue ? (
                <span className="inline-flex items-center gap-1 text-xs font-medium text-red-600 dark:text-red-400">
                  <AlertCircle className="h-3 w-3" />
                  Forfalt
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  Frist: {relativeTime}
                </span>
              )}
            </div>
            <p className="text-sm truncate">{assignment.title}</p>
            {assignment.className && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {assignment.className} &bull; {assignment.teacherName}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Lekse-fremdrift */}
      <div className="mt-3">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-muted-foreground">
            Leksefremdrift: {assignment.completedSubtasks}/{assignment.totalSubtasks} deloppgaver
          </span>
          <span className="text-xs font-medium">
            {assignment.percentComplete}%
          </span>
        </div>
        <Progress value={assignment.percentComplete} className="h-2" />
      </div>

      {/* Lenke til andre kapitler i leksen hvis mer enn dette */}
      {assignment.chapterIds.length > 1 && (
        <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
          <span>Leksen omfatter {assignment.chapterIds.length} kapitler</span>
        </div>
      )}
    </div>
  );
}

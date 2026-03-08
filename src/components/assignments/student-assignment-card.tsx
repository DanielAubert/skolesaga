"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, CheckCircle2, AlertCircle, BookOpen } from "lucide-react";

interface StudentAssignment {
  id: string;
  title: string;
  courseId: string;
  chapterIds: string[];
  dueDate: string;
  description?: string;
  teacherName: string;
  className?: string | null;
  status: string;
  completedSubtasks: number;
  totalSubtasks: number;
  percentComplete: number;
}

interface StudentAssignmentCardProps {
  assignment: StudentAssignment;
}

function getRelativeTime(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = date.getTime() - now.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return `Forfalt for ${Math.abs(diffDays)} dager siden`;
  if (diffDays === 0) return "I dag";
  if (diffDays === 1) return "I morgen";
  if (diffDays <= 7) return `Om ${diffDays} dager`;
  return new Date(dateStr).toLocaleDateString("nb-NO", {
    day: "numeric",
    month: "short",
  });
}

function getStatusBadge(status: string) {
  switch (status) {
    case "completed":
      return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400 hover:bg-green-100">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Ferdig
        </Badge>
      );
    case "completed_late":
      return (
        <Badge className="bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-400 hover:bg-green-100">
          <CheckCircle2 className="h-3 w-3 mr-1" />
          Ferdig (sent)
        </Badge>
      );
    case "in_progress":
      return (
        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-950/50 dark:text-yellow-400 hover:bg-yellow-100">
          <Clock className="h-3 w-3 mr-1" />
          Pågår
        </Badge>
      );
    case "overdue":
      return (
        <Badge className="bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400 hover:bg-red-100">
          <AlertCircle className="h-3 w-3 mr-1" />
          Forfalt
        </Badge>
      );
    case "not_started":
    default:
      return (
        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400 hover:bg-blue-100">
          <BookOpen className="h-3 w-3 mr-1" />
          Ikke startet
        </Badge>
      );
  }
}

export function StudentAssignmentCard({ assignment }: StudentAssignmentCardProps) {
  const relativeTime = getRelativeTime(assignment.dueDate);
  const isOverdue = assignment.status === "overdue";
  const isCompleted = assignment.status === "completed" || assignment.status === "completed_late";

  // Lenke til første uferdig kapittel
  const targetChapter = assignment.chapterIds[0];
  const href = targetChapter
    ? `/bok/${assignment.courseId}/${targetChapter}`
    : `/bok/${assignment.courseId}`;

  return (
    <Link
      href={href}
      className={`block p-4 rounded-lg border transition-colors hover:bg-muted/50 ${
        isOverdue ? "border-red-200 dark:border-red-900/50" : ""
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-medium text-sm truncate">{assignment.title}</h3>
            {getStatusBadge(assignment.status)}
          </div>
          <p className="text-xs text-muted-foreground">
            {assignment.className && `${assignment.className} • `}
            {assignment.teacherName}
          </p>
          {assignment.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
              {assignment.description}
            </p>
          )}
        </div>
        <div className="text-right shrink-0">
          <p className={`text-xs font-medium ${isOverdue ? "text-red-600 dark:text-red-400" : "text-muted-foreground"}`}>
            {relativeTime}
          </p>
        </div>
      </div>

      {!isCompleted && (
        <div className="mt-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-muted-foreground">
              {assignment.completedSubtasks}/{assignment.totalSubtasks} deloppgaver
            </span>
            <span className="text-xs font-medium">{assignment.percentComplete}%</span>
          </div>
          <Progress value={assignment.percentComplete} className="h-2" />
        </div>
      )}
    </Link>
  );
}

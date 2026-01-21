"use client";

import { useState, useEffect } from "react";
import { useAddTeacherComment, Submission } from "@/lib/textbook/hooks";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Send, Check, Loader2, Edit2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface TeacherCommentPanelProps {
  submission: Submission;
  onCommentSaved?: (submission: Submission) => void;
}

export function TeacherCommentPanel({
  submission,
  onCommentSaved,
}: TeacherCommentPanelProps) {
  const [comment, setComment] = useState(submission.teacher_grade_feedback || "");
  const [isEditing, setIsEditing] = useState(!submission.teacher_grade_feedback);
  const [showSaved, setShowSaved] = useState(false);
  const { addComment, isSubmitting, error } = useAddTeacherComment();

  // Oppdater kommentar når submission endres
  useEffect(() => {
    setComment(submission.teacher_grade_feedback || "");
    setIsEditing(!submission.teacher_grade_feedback);
  }, [submission.id, submission.teacher_grade_feedback]);

  const handleSave = async () => {
    if (!comment.trim()) return;

    try {
      const updated = await addComment(submission.id, comment.trim());
      setIsEditing(false);
      setShowSaved(true);
      setTimeout(() => setShowSaved(false), 2000);
      onCommentSaved?.(updated);
    } catch {
      // Error håndteres av hook
    }
  };

  const hasExistingComment = !!submission.teacher_grade_feedback;

  return (
    <Card className="border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-blue-700 dark:text-blue-300">
          <MessageSquare className="h-4 w-4" />
          Lærerkommentar
          {hasExistingComment && !isEditing && (
            <Button
              variant="ghost"
              size="sm"
              className="ml-auto h-7 text-xs"
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className="h-3 w-3 mr-1" />
              Rediger
            </Button>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-3">
            <Textarea
              value={comment}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value)}
              placeholder="Skriv en kommentar til eleven..."
              className="min-h-[80px] bg-white dark:bg-background resize-none"
              disabled={isSubmitting}
            />
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <div className="flex items-center gap-2">
              <Button
                onClick={handleSave}
                disabled={isSubmitting || !comment.trim()}
                size="sm"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Lagrer...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Lagre kommentar
                  </>
                )}
              </Button>
              {hasExistingComment && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setComment(submission.teacher_grade_feedback || "");
                    setIsEditing(false);
                  }}
                >
                  Avbryt
                </Button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="text-sm whitespace-pre-wrap">{comment}</p>
            {submission.teacher_graded_at && (
              <p className="text-xs text-muted-foreground">
                Sist oppdatert: {new Date(submission.teacher_graded_at).toLocaleString("nb-NO")}
              </p>
            )}
          </div>
        )}

        {/* Saved indicator */}
        <div
          className={cn(
            "flex items-center gap-1 text-sm text-green-600 dark:text-green-400 transition-opacity duration-300",
            showSaved ? "opacity-100" : "opacity-0"
          )}
        >
          <Check className="h-4 w-4" />
          Lagret!
        </div>
      </CardContent>
    </Card>
  );
}

// Vis eksisterende lærerkommentar (for elev-visning)
export function TeacherCommentDisplay({ submission }: { submission: Submission }) {
  if (!submission.teacher_grade_feedback) return null;

  return (
    <Card className="border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-950/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2 text-green-700 dark:text-green-300">
          <MessageSquare className="h-4 w-4" />
          Kommentar fra lærer
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm whitespace-pre-wrap">{submission.teacher_grade_feedback}</p>
        {submission.teacher_graded_at && (
          <p className="text-xs text-muted-foreground mt-2">
            {new Date(submission.teacher_graded_at).toLocaleString("nb-NO")}
          </p>
        )}
      </CardContent>
    </Card>
  );
}

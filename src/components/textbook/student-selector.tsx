"use client";

import { useState, useMemo } from "react";
import { useTeacherStudents } from "@/lib/textbook/hooks";
import { useUser } from "@/lib/auth/hooks";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, X, Eye } from "lucide-react";

interface StudentSelectorProps {
  selectedStudentId: string | null;
  onSelectStudent: (studentId: string | null) => void;
}

export function StudentSelector({
  selectedStudentId,
  onSelectStudent,
}: StudentSelectorProps) {
  const { user } = useUser();
  const [selectedClassId, setSelectedClassId] = useState<string | null>(null);
  const { students, classes, isLoading } = useTeacherStudents(selectedClassId || undefined);

  // Kun vis for lærere
  const isTeacher = user?.role === "teacher" || user?.role === "admin";

  // Filtrer elever basert på valgt klasse - må være før early return
  const filteredStudents = useMemo(() => {
    if (!selectedClassId) return students;
    return students.filter((s) => s.classes.some((c) => c.id === selectedClassId));
  }, [students, selectedClassId]);

  // Finn valgt elev
  const selectedStudent = students.find((s) => s.id === selectedStudentId);

  if (!isTeacher) return null;

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-muted/50 rounded-lg animate-pulse">
        <div className="h-4 w-24 bg-muted rounded" />
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground">
        <Users className="h-4 w-4" />
        <span>Ingen elever i klassene dine</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
      <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
        <Eye className="h-4 w-4" />
        <span className="text-sm font-medium">Lærervisning:</span>
      </div>

      {/* Klassefilter */}
      {classes.length > 1 && (
        <Select
          value={selectedClassId || "all"}
          onValueChange={(value) => setSelectedClassId(value === "all" ? null : value)}
        >
          <SelectTrigger className="w-[160px] h-8 text-sm bg-white dark:bg-background">
            <SelectValue placeholder="Alle klasser" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Alle klasser</SelectItem>
            {classes.map((c) => (
              <SelectItem key={c.id} value={c.id}>
                {c.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      {/* Elevvelger */}
      <Select
        value={selectedStudentId || "none"}
        onValueChange={(value) => onSelectStudent(value === "none" ? null : value)}
      >
        <SelectTrigger className="w-[200px] h-8 text-sm bg-white dark:bg-background">
          <SelectValue placeholder="Velg elev..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">
            <span className="text-muted-foreground">Ingen valgt</span>
          </SelectItem>
          {filteredStudents.map((student) => (
            <SelectItem key={student.id} value={student.id}>
              <div className="flex items-center gap-2">
                <span>{student.name}</span>
                {classes.length > 1 && student.classes.length > 0 && (
                  <span className="text-xs text-muted-foreground">
                    ({student.classes[0].name})
                  </span>
                )}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Vis valgt elev */}
      {selectedStudent && (
        <div className="flex items-center gap-2 ml-2">
          <Badge variant="secondary" className="flex items-center gap-2 pr-1">
            <Avatar className="h-5 w-5">
              <AvatarImage src={selectedStudent.avatarUrl || undefined} />
              <AvatarFallback className="text-xs">
                {selectedStudent.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <span className="text-sm">{selectedStudent.name}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-5 w-5 hover:bg-destructive/20"
              onClick={() => onSelectStudent(null)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      )}
    </div>
  );
}

// Kompakt versjon for bruk i header
export function StudentSelectorCompact({
  selectedStudentId,
  onSelectStudent,
}: StudentSelectorProps) {
  const { user } = useUser();
  const { students, isLoading } = useTeacherStudents();

  const isTeacher = user?.role === "teacher" || user?.role === "admin";
  if (!isTeacher) return null;

  const selectedStudent = students.find((s) => s.id === selectedStudentId);

  if (isLoading || students.length === 0) return null;

  return (
    <div className="flex items-center gap-2">
      <Select
        value={selectedStudentId || "none"}
        onValueChange={(value) => onSelectStudent(value === "none" ? null : value)}
      >
        <SelectTrigger className="w-[180px] h-8 text-sm">
          <div className="flex items-center gap-2">
            <Eye className="h-3 w-3 text-muted-foreground" />
            <SelectValue placeholder="Se som elev..." />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="none">
            <span className="text-muted-foreground">Normal visning</span>
          </SelectItem>
          {students.map((student) => (
            <SelectItem key={student.id} value={student.id}>
              {student.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedStudent && (
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8"
          onClick={() => onSelectStudent(null)}
        >
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}

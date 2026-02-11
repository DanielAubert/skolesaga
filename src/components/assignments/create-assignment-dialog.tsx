"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { TEXTBOOK_COURSES, getChaptersBySection, getSectionNames } from "@/lib/data/textbook-courses";
import type { TextbookChapterMeta } from "@/lib/types/textbook";
import { ArrowLeft, ArrowRight, Loader2, BookOpen, Calendar, Users, User } from "lucide-react";

interface ClassData {
  id: string;
  name: string;
}

interface CreateAssignmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  classes: ClassData[];
  preselectedClassId?: string;
  onCreated?: () => void;
}

export function CreateAssignmentDialog({
  open,
  onOpenChange,
  classes,
  preselectedClassId,
  onCreated,
}: CreateAssignmentDialogProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [selectedCourseId, setSelectedCourseId] = useState("");
  const [selectedChapterIds, setSelectedChapterIds] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [selectedClassIds, setSelectedClassIds] = useState<string[]>(
    preselectedClassId ? [preselectedClassId] : []
  );
  const [targetMode, setTargetMode] = useState<"class" | "student">("class");
  const [selectedStudentIds, setSelectedStudentIds] = useState<string[]>([]);
  const [availableStudents, setAvailableStudents] = useState<
    { id: string; name: string; email: string; className: string }[]
  >([]);
  const [studentsLoading, setStudentsLoading] = useState(false);

  // Hent elever fra alle klasser
  const fetchStudents = useCallback(async () => {
    if (classes.length === 0) return;
    setStudentsLoading(true);
    try {
      const allStudents: { id: string; name: string; email: string; className: string }[] = [];
      const seenIds = new Set<string>();
      for (const cls of classes) {
        const res = await fetch(`/api/classes/${cls.id}`);
        if (res.ok) {
          const data = await res.json();
          for (const s of data.students || []) {
            if (!seenIds.has(s.id)) {
              seenIds.add(s.id);
              allStudents.push({ id: s.id, name: s.name, email: s.email, className: cls.name });
            }
          }
        }
      }
      setAvailableStudents(allStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setStudentsLoading(false);
    }
  }, [classes]);

  useEffect(() => {
    if (open) fetchStudents();
  }, [open, fetchStudents]);

  const selectedCourse = TEXTBOOK_COURSES.find((c) => c.id === selectedCourseId);
  const sectionMap = selectedCourseId ? getChaptersBySection(selectedCourseId) : new Map();
  const sectionNames = selectedCourseId ? getSectionNames(selectedCourseId) : {};

  const totalExercises = selectedChapterIds.reduce((sum, chId) => {
    const chapter = selectedCourse?.chapters.find((c) => c.id === chId);
    return sum + (chapter?.exerciseCount || 0);
  }, 0);

  const reset = () => {
    setStep(1);
    setSelectedCourseId("");
    setSelectedChapterIds([]);
    setTitle("");
    setDescription("");
    setDueDate("");
    setSelectedClassIds(preselectedClassId ? [preselectedClassId] : []);
    setSelectedStudentIds([]);
    setTargetMode("class");
    setIsSubmitting(false);
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) reset();
    onOpenChange(isOpen);
  };

  const toggleChapter = (chapterId: string) => {
    setSelectedChapterIds((prev) =>
      prev.includes(chapterId)
        ? prev.filter((id) => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const toggleSection = (sectionChapters: { id: string }[]) => {
    const allSelected = sectionChapters.every((c) => selectedChapterIds.includes(c.id));
    if (allSelected) {
      setSelectedChapterIds((prev) =>
        prev.filter((id) => !sectionChapters.some((c) => c.id === id))
      );
    } else {
      const newIds = sectionChapters
        .filter((c) => !selectedChapterIds.includes(c.id))
        .map((c) => c.id);
      setSelectedChapterIds((prev) => [...prev, ...newIds]);
    }
  };

  const toggleClass = (classId: string) => {
    setSelectedClassIds((prev) =>
      prev.includes(classId)
        ? prev.filter((id) => id !== classId)
        : [...prev, classId]
    );
  };

  const toggleStudent = (studentId: string) => {
    setSelectedStudentIds((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/assignments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          courseId: selectedCourseId,
          chapterIds: selectedChapterIds,
          dueDate: new Date(dueDate).toISOString(),
          description: description || null,
          targets: [
            ...selectedClassIds.map((classId) => ({
              type: "class",
              classId,
            })),
            ...selectedStudentIds.map((studentId) => ({
              type: "student",
              studentId,
            })),
          ],
        }),
      });

      if (response.ok) {
        handleClose(false);
        onCreated?.();
      } else {
        const data = await response.json();
        alert(data.message || "Kunne ikke opprette lekse");
      }
    } catch (error) {
      console.error("Error creating assignment:", error);
      alert("En feil oppstod");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-generate title when course and chapters are selected
  const generateTitle = () => {
    if (!selectedCourse || selectedChapterIds.length === 0) return "";
    const chapters = selectedChapterIds
      .map((id) => selectedCourse.chapters.find((c) => c.id === id))
      .filter(Boolean);
    if (chapters.length === 1) {
      return `${selectedCourse.title} - ${chapters[0]!.number} ${chapters[0]!.title}`;
    }
    return `${selectedCourse.title} - ${chapters.length} kapitler`;
  };

  const canProceedStep1 = selectedCourseId !== "";
  const canProceedStep2 = selectedChapterIds.length > 0;
  const canProceedStep3 = dueDate !== "";
  const canProceedStep4 = selectedClassIds.length > 0 || selectedStudentIds.length > 0;
  const canSubmit = title.trim() !== "" && canProceedStep1 && canProceedStep2 && canProceedStep3 && canProceedStep4;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[85vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>
            {step === 1 && "Velg fag"}
            {step === 2 && "Velg kapitler"}
            {step === 3 && "Sett frist"}
            {step === 4 && "Velg mottakere"}
            {step === 5 && "Bekreft lekse"}
          </DialogTitle>
          <DialogDescription>
            Steg {step} av 5
          </DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto py-4 min-h-0">
          {/* Steg 1: Velg fag */}
          {step === 1 && (
            <div className="space-y-4">
              <Select value={selectedCourseId} onValueChange={(val) => {
                setSelectedCourseId(val);
                setSelectedChapterIds([]);
              }}>
                <SelectTrigger>
                  <SelectValue placeholder="Velg et fag" />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {TEXTBOOK_COURSES.map((course) => (
                    <SelectItem key={course.id} value={course.id}>
                      {course.title} ({course.level})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedCourse && (
                <div className="p-3 rounded-lg bg-muted/50">
                  <p className="font-medium">{selectedCourse.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {selectedCourse.level} &bull; {selectedCourse.chapters.length} kapitler
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Steg 2: Velg kapitler */}
          {step === 2 && selectedCourse && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {selectedChapterIds.length} kapitler valgt ({totalExercises} oppgaver)
              </p>
              <div className="space-y-4">
                {Array.from(sectionMap.entries()).map(([sectionNum, chapters]: [string, TextbookChapterMeta[]]) => {
                  const allSelected = chapters.every((c) => selectedChapterIds.includes(c.id));
                  const someSelected = chapters.some((c) => selectedChapterIds.includes(c.id));
                  return (
                    <div key={sectionNum} className="space-y-1">
                      <div
                        className="flex items-center gap-2 py-1 cursor-pointer hover:bg-muted/50 rounded px-2"
                        onClick={() => toggleSection(chapters)}
                      >
                        <Checkbox
                          checked={allSelected}
                          className={someSelected && !allSelected ? "opacity-50" : ""}
                          onCheckedChange={() => toggleSection(chapters)}
                        />
                        <span className="font-medium text-sm">
                          {sectionNames[sectionNum]
                            ? `${sectionNum}. ${sectionNames[sectionNum]}`
                            : `Seksjon ${sectionNum}`}
                        </span>
                      </div>
                      <div className="ml-6 space-y-0.5">
                        {chapters.map((chapter) => (
                          <div
                            key={chapter.id}
                            className="flex items-center gap-2 py-1 cursor-pointer hover:bg-muted/50 rounded px-2"
                            onClick={() => toggleChapter(chapter.id)}
                          >
                            <Checkbox
                              checked={selectedChapterIds.includes(chapter.id)}
                              onCheckedChange={() => toggleChapter(chapter.id)}
                            />
                            <span className="text-sm flex-1">
                              {chapter.number} {chapter.title}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {chapter.exerciseCount} oppg.
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Steg 3: Sett frist */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Frist</label>
                <input
                  type="datetime-local"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Tittel</label>
                <input
                  type="text"
                  value={title || generateTitle()}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Gi leksen en tittel"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Beskrivelse (valgfritt)</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Eventuell beskjed til elevene..."
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm min-h-[80px]"
                />
              </div>
            </div>
          )}

          {/* Steg 4: Velg mottakere */}
          {step === 4 && (
            <div className="space-y-4">
              {/* Tabs */}
              <div className="flex gap-1 p-1 bg-muted rounded-lg">
                <button
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    targetMode === "class"
                      ? "bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setTargetMode("class")}
                >
                  <Users className="h-4 w-4" />
                  Klasser
                  {selectedClassIds.length > 0 && (
                    <Badge variant="secondary" className="text-xs ml-1">
                      {selectedClassIds.length}
                    </Badge>
                  )}
                </button>
                <button
                  className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    targetMode === "student"
                      ? "bg-background shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setTargetMode("student")}
                >
                  <User className="h-4 w-4" />
                  Enkeltindivider
                  {selectedStudentIds.length > 0 && (
                    <Badge variant="secondary" className="text-xs ml-1">
                      {selectedStudentIds.length}
                    </Badge>
                  )}
                </button>
              </div>

              {/* Klasser */}
              {targetMode === "class" && (
                <>
                  <p className="text-sm text-muted-foreground">
                    Velg klasser som skal få denne leksen
                  </p>
                  {classes.length === 0 ? (
                    <p className="text-center text-muted-foreground py-4">
                      Du har ingen klasser ennå
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {classes.map((cls) => (
                        <div
                          key={cls.id}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer"
                          onClick={() => toggleClass(cls.id)}
                        >
                          <Checkbox
                            checked={selectedClassIds.includes(cls.id)}
                            onCheckedChange={() => toggleClass(cls.id)}
                          />
                          <span className="font-medium">{cls.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Enkeltindivider */}
              {targetMode === "student" && (
                <>
                  <p className="text-sm text-muted-foreground">
                    Velg elever som skal få denne leksen
                  </p>
                  {studentsLoading ? (
                    <div className="flex items-center justify-center py-8">
                      <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                    </div>
                  ) : availableStudents.length === 0 ? (
                    <p className="text-center text-muted-foreground py-4">
                      Ingen elever i klassene dine ennå
                    </p>
                  ) : (
                    <div className="space-y-1">
                      {availableStudents.map((student) => (
                        <div
                          key={student.id}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted cursor-pointer"
                          onClick={() => toggleStudent(student.id)}
                        >
                          <Checkbox
                            checked={selectedStudentIds.includes(student.id)}
                            onCheckedChange={() => toggleStudent(student.id)}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm truncate">{student.name}</p>
                            <p className="text-xs text-muted-foreground truncate">
                              {student.email} &bull; {student.className}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {/* Sammendrag av valgte */}
              {(selectedClassIds.length > 0 || selectedStudentIds.length > 0) && (
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-sm">
                  {selectedClassIds.length > 0 && (
                    <span>
                      {selectedClassIds.length} klasse{selectedClassIds.length !== 1 ? "r" : ""}
                    </span>
                  )}
                  {selectedClassIds.length > 0 && selectedStudentIds.length > 0 && (
                    <span> + </span>
                  )}
                  {selectedStudentIds.length > 0 && (
                    <span>
                      {selectedStudentIds.length} enkeltindivid{selectedStudentIds.length !== 1 ? "er" : ""}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Steg 5: Bekreft */}
          {step === 5 && (
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Fag:</span>
                  <span className="text-sm">{selectedCourse?.title}</span>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="text-sm font-medium">Kapitler:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {selectedChapterIds.map((chId) => {
                        const chapter = selectedCourse?.chapters.find((c) => c.id === chId);
                        return (
                          <Badge key={chId} variant="secondary" className="text-xs">
                            {chapter?.number} {chapter?.title}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">Frist:</span>
                  <span className="text-sm">
                    {dueDate
                      ? new Date(dueDate).toLocaleDateString("nb-NO", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })
                      : "-"}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div>
                    <span className="text-sm font-medium">Mottakere:</span>
                    <div className="text-sm mt-0.5">
                      {selectedClassIds.length > 0 && (
                        <p>{selectedClassIds.map((id) => classes.find((c) => c.id === id)?.name).join(", ")}</p>
                      )}
                      {selectedStudentIds.length > 0 && (
                        <p>
                          {selectedStudentIds
                            .map((id) => availableStudents.find((s) => s.id === id)?.name)
                            .filter(Boolean)
                            .join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                {title && (
                  <div className="p-3 rounded-lg bg-muted/50">
                    <p className="font-medium">{title || generateTitle()}</p>
                    {description && (
                      <p className="text-sm text-muted-foreground mt-1">{description}</p>
                    )}
                  </div>
                )}
                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-950/30 text-sm">
                  Totalt {totalExercises} oppgaver i {selectedChapterIds.length} kapitler
                </div>
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="flex-row justify-between">
          <div>
            {step > 1 && (
              <Button variant="outline" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Tilbake
              </Button>
            )}
          </div>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => handleClose(false)}>
              Avbryt
            </Button>
            {step < 5 ? (
              <Button
                onClick={() => {
                  if (step === 3 && !title) {
                    setTitle(generateTitle());
                  }
                  setStep(step + 1);
                }}
                disabled={
                  (step === 1 && !canProceedStep1) ||
                  (step === 2 && !canProceedStep2) ||
                  (step === 3 && !canProceedStep3) ||
                  (step === 4 && !canProceedStep4)
                }
              >
                Neste
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting || !canSubmit}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Oppretter...
                  </>
                ) : (
                  "Opprett lekse"
                )}
              </Button>
            )}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

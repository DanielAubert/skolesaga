"use client";

import { createContext, useContext, useState, useEffect, useCallback, useRef, ReactNode } from "react";
import { useUser } from "@/lib/auth/hooks";

const STORAGE_KEY = "skolesaga-selected-courses";

interface StudentCoursesContextType {
  courses: string[];
  isLoading: boolean;
  hasCourse: (courseId: string) => boolean;
  addCourse: (courseId: string) => Promise<boolean>;
  removeCourse: (courseId: string) => Promise<boolean>;
  toggleCourse: (courseId: string) => Promise<boolean>;
  isStudent: boolean;
}

const StudentCoursesContext = createContext<StudentCoursesContextType | null>(null);

export function StudentCoursesProvider({ children }: { children: ReactNode }) {
  const { user, isAuthenticated } = useUser();
  const [courses, setCourses] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Ref for å alltid ha tilgang til siste courses-verdi
  const coursesRef = useRef<string[]>([]);

  // Hold ref synkronisert med state
  useEffect(() => {
    coursesRef.current = courses;
  }, [courses]);

  // Hent elevens fag ved oppstart (fra localStorage + API)
  useEffect(() => {
    if (!isAuthenticated) {
      setIsLoading(false);
      return;
    }

    const fetchCourses = async () => {
      try {
        // Først sjekk localStorage for rask lasting
        const localCourses = localStorage.getItem(STORAGE_KEY);
        if (localCourses) {
          const parsed = JSON.parse(localCourses);
          setCourses(parsed);
          coursesRef.current = parsed;
        }

        // Prøv å hente fra API
        const res = await fetch("/api/student/courses");
        if (res.ok) {
          const data = await res.json();
          const apiCourses = data.courses || [];
          setCourses(apiCourses);
          coursesRef.current = apiCourses;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(apiCourses));
        }
      } catch (error) {
        console.log("Using localStorage for courses");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses();
  }, [isAuthenticated]);

  // Sjekk om et fag er lagt til
  const hasCourse = useCallback(
    (courseId: string) => coursesRef.current.includes(courseId),
    []
  );

  // Legg til fag
  const addCourse = useCallback(async (courseId: string) => {
    if (coursesRef.current.includes(courseId)) {
      return true;
    }

    const newCourses = [...coursesRef.current, courseId];
    coursesRef.current = newCourses;
    setCourses(newCourses);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCourses));

    try {
      await fetch("/api/student/courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });
    } catch (error) {
      console.log("API unavailable, using localStorage");
    }
    return true;
  }, []);

  // Fjern fag
  const removeCourse = useCallback(async (courseId: string) => {
    const newCourses = coursesRef.current.filter(id => id !== courseId);
    coursesRef.current = newCourses;
    setCourses(newCourses);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newCourses));

    try {
      await fetch("/api/student/courses", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseId }),
      });
    } catch (error) {
      console.log("API unavailable, using localStorage");
    }
    return true;
  }, []);

  // Toggle fag
  const toggleCourse = useCallback(
    async (courseId: string) => {
      if (coursesRef.current.includes(courseId)) {
        return removeCourse(courseId);
      } else {
        return addCourse(courseId);
      }
    },
    [addCourse, removeCourse]
  );

  return (
    <StudentCoursesContext.Provider
      value={{
        courses,
        isLoading,
        hasCourse,
        addCourse,
        removeCourse,
        toggleCourse,
        isStudent: user?.role === "student",
      }}
    >
      {children}
    </StudentCoursesContext.Provider>
  );
}

export function useStudentCourses() {
  const context = useContext(StudentCoursesContext);

  // Hvis ikke i provider, returner en fallback som bruker localStorage direkte
  if (!context) {
    // Fallback for komponenter utenfor provideren
    return {
      courses: [] as string[],
      isLoading: false,
      hasCourse: (courseId: string) => {
        if (typeof window === "undefined") return false;
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored).includes(courseId) : false;
      },
      addCourse: async (courseId: string) => {
        if (typeof window === "undefined") return false;
        const stored = localStorage.getItem(STORAGE_KEY);
        const courses = stored ? JSON.parse(stored) : [];
        if (!courses.includes(courseId)) {
          courses.push(courseId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
        }
        return true;
      },
      removeCourse: async (courseId: string) => {
        if (typeof window === "undefined") return false;
        const stored = localStorage.getItem(STORAGE_KEY);
        const courses = stored ? JSON.parse(stored) : [];
        const newCourses = courses.filter((id: string) => id !== courseId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newCourses));
        return true;
      },
      toggleCourse: async (courseId: string) => {
        if (typeof window === "undefined") return false;
        const stored = localStorage.getItem(STORAGE_KEY);
        const courses = stored ? JSON.parse(stored) : [];
        if (courses.includes(courseId)) {
          const newCourses = courses.filter((id: string) => id !== courseId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(newCourses));
        } else {
          courses.push(courseId);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
        }
        return true;
      },
      isStudent: false,
    };
  }

  return context;
}

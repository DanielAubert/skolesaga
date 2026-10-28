import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

export type UserRole = "student" | "teacher" | "admin";
// Speiler users.subscription_tier i den delte databasen (eksamenssett.no eier verdiene). Vises aldri på Skolesaga.
export type SubscriptionTier = "free" | "premium" | "school";
export type AuthProvider = "email" | "google" | "microsoft" | "feide";

export interface ExtendedUser extends DefaultUser {
  id: string;
  role: UserRole;
  schoolId?: string;
  subscriptionTier: SubscriptionTier;
  authProvider?: AuthProvider;
  onboardingCompleted?: boolean;
  gradeLevel?: string;
}

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: ExtendedUser;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends ExtendedUser {}
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: UserRole;
    schoolId?: string;
    subscriptionTier: SubscriptionTier;
    onboardingCompleted?: boolean;
    gradeLevel?: string;
  }
}

export interface School {
  id: string;
  feideOrgId?: string;
  name: string;
  createdAt: Date;
}

export interface Class {
  id: string;
  schoolId: string;
  name: string;
  gradeLevel?: string;
  subject?: string;
  createdAt: Date;
}

export interface ClassMembership {
  id: string;
  classId: string;
  userId: string;
  role: "student" | "teacher";
  joinedAt: Date;
}

export interface ExerciseAttempt {
  id: string;
  userId: string;
  exerciseType: string;
  exerciseId: string;
  subject?: string;
  level?: string;
  score?: number;
  maxScore?: number;
  correct?: boolean;
  timeSpentMs?: number;
  startedAt: Date;
  completedAt?: Date;
  createdAt: Date;
}


export type Lang = 'ru' | 'kk' | 'en';
export type UserRole = 'teacher' | 'admin' | 'parent' | 'student';

export interface User {
  name: string;
  role: UserRole;
  level?: 'beginner' | 'advanced';
  track?: string;
  surveyMsg?: string;
}

export interface LocalizedText {
  ru?: string;
  kk?: string;
  en?: string;
  [key: string]: string | undefined;
}

export interface Lesson {
  id: string;
  title: LocalizedText | string;
  link?: string;
  min?: number;
  done?: boolean;
}

export interface Chapter {
  id: string;
  title: LocalizedText | string;
  icon?: string;
  tint?: string;
  lessons: Lesson[];
}

export interface Track {
  id: string;
  name: LocalizedText | string;
  color?: string;
  locked?: boolean;
  programs?: string[];
  chapters: Chapter[];
}

export interface AppState {
  user: User | null;
  lang: Lang;
  points: number;
  friendsOn: boolean;
  plan: string;
  tracks: Track[];
  posts: Record<string, unknown>[];
  lessons: Record<string, unknown>[];
  competitions: Record<string, unknown>[];
  pupils: Record<string, unknown>[];
  materials: Record<string, unknown>[];
  achievements: Record<string, unknown>[];
  coach: Record<string, unknown>[];
  crm?: Record<string, unknown>;
}

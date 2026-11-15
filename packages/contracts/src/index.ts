export type Language = 'en' | 'vi';
export type MessageOrigin = 'text' | 'voice' | 'student';
export type SpeakerRole = 'teacher' | 'student';
export type StudentState = 'idle' | 'listening' | 'thinking' | 'confused' | 'hand-raised' | 'speaking';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface DiscussionMessage {
  id: string;
  sessionId: string;
  speaker: string;
  role: SpeakerRole;
  origin: MessageOrigin;
  content: string;
  createdAt: string;
}

export interface ClassroomSession {
  id: string;
  status: 'active' | 'ended';
  referenceNoteId?: string;
  boardState?: Record<string, unknown>;
  boardSnapshotUrl?: string;
  startedAt: string;
  endedAt?: string;
}

export interface UserPreferences {
  displayLanguage: Language;
  teachingLanguage: Language;
  theme: 'light';
}

export interface ApiError {
  statusCode: number;
  code: string;
  message: string;
  details?: unknown;
}

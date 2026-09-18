// ─── Course Data Types ───────────────────────────────────────────

export interface Topic {
  id: string;
  title: string;
}

export interface Note {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "markdown" | "ppt" | "doc" | "other";
  url?: string;
  downloadUrl?: string;
}

export interface Question {
  id: string;
  moduleId: string;
  question: string;
  type: "short" | "long" | "numerical" | "conceptual" | "viva";
}

export interface Module {
  id: string;
  number: number;
  title: string;
  description: string;
  overview: string;
  topics: Topic[];
  notes: Note[];
  importantQuestions: Question[];
  resources?: string[];
}

export interface Lab {
  id: string;
  number: number;
  title: string;
  objective: string;
  theory: string;
  requirements: string[];
  procedure: string[];
  code: string;
  codeLanguage: string;
  expectedOutput: string;
  vivaQuestions: string[];
  resources: string[];
  manualUrl?: string;
}

export interface Project {
  id: string;
  title: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  description: string;
  objective: string;
  technologies: string[];
  implementationSteps: string[];
  expectedOutcome: string;
  futureScope: string[];
  resources: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  edition?: string;
  description: string;
  coverColor?: string;
  url?: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  year: number;
  topic: string;
  abstract?: string;
  url?: string;
}

export interface VideoResource {
  id: string;
  title: string;
  topic: string;
  duration: string;
  url: string;
  platform: string;
}

export interface CollaborationLink {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  platform: string;
}

export interface ExternalLink {
  id: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  description: string;
  longDescription: string;
  prerequisites: string[];
  learningObjectives: string[];
  modules: Module[];
  labs: Lab[];
  projects: Project[];
  books: Book[];
  publications: Publication[];
  videoResources: VideoResource[];
  externalLinks: ExternalLink[];
  collaborationLinks: CollaborationLink[];
}

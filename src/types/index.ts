export interface CourseModule {
  title: string;
  skills: string[];
  activities: string[];
  icon: string;
}

export interface CourseData {
  id: string;
  grade: string;
  title: string;
  modules: CourseModule[];
  description: string;
  color: CourseColor;
}

export type CourseColor =
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "purple";

export interface FAQItem {
  question: string;
  answer: string;
}

// Theme context types
export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}
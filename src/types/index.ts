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

export interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export type UserClass = "teacher" | "school";
export interface User {
  userToken: string;
  userClass: UserClass;
};

export interface UserContextType {
  user: User | null,
  setUser: (u: User | null) => void;
};
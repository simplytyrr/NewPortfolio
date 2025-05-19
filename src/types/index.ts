
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
}

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0-100
  icon?: string;
  order: number;
}

export enum SkillCategory {
  PROGRAMMING = "Programming",
  MULTIMEDIA = "Multimedia & Graphics",
  SPECIALIZED = "Specialized Technologies",
  LANGUAGES = "Languages",
  OTHER = "Other"
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  avatarUrl: string;
  resumeUrl: string;
  education: Education[];
  socialLinks: SocialLink[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username?: string;
}

export enum SocialPlatform {
  LINKEDIN = "linkedin",
  GITHUB = "github",
  WHATSAPP = "whatsapp",
  EMAIL = "email",
  TWITTER = "twitter",
  INSTAGRAM = "instagram"
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  certificateUrl?: string;
}

export interface AdminStats {
  totalProjects: number;
  totalSkills: number;
  featuredProjects: number;
  lastUpdated: Date;
}

export interface ThemeSettings {
  primaryColor: string;
  accentColor: string;
  darkMode: boolean;
}

import portfolioDataJson from './portfolio-data.json';
import contactDataJson from './contact-data.json';

export interface DockLink {
  title: string;
  href: string;
  icon: string;
}

export interface AboutData {
  resumeUrl: string;
  socialLinks: DockLink[];
}

export interface ExperienceProject {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface ExperienceEntry {
  company: string;
  startDate: string;
  endDate: string;
  projects: ExperienceProject[];
}

export interface PersonalProject {
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  imageAlt: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface EducationEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AchievementEntry {
  period: string;
  title: string;
  subtitle: string;
  description: string;
  bullets?: string[];
  tags?: string[];
}

export interface ContactData {
  email: string;
  location: string;
  responseTime: string;
  formSubmitEmail: string;
  subjectPrefix: string;
  successMessage: string;
  errorMessage: string;
  intro: string;
  about: string;
}

export interface PortfolioData {
  meta: {
    name: string;
    title: string;
    headline: string;
  };
  about: AboutData;
  experience: ExperienceEntry[];
  projects: PersonalProject[];
  techStack: TechItem[];
  education: EducationEntry[];
  achievements: AchievementEntry[];
}

export const portfolioData = portfolioDataJson as PortfolioData;
export const aboutData = portfolioData.about;
export const experienceData = portfolioData.experience;
export const personalProjectsData = portfolioData.projects;
export const techStackData = portfolioData.techStack;
export const educationData = portfolioData.education;
export const achievementsData = portfolioData.achievements;
export const contactData = contactDataJson as ContactData;

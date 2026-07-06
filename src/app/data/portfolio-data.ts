import siteContentJson from './site-content.json';

export interface DockLink {
  title: string;
  href: string;
  icon: string;
}

export interface AboutData {
  name: string;
  role: string;
  image: {
    src: string;
    alt: string;
  };
  bio: string[];
  codeSnippets: string[];
  resume: {
    label: string;
    url: string;
  };
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

export interface NavigationLink {
  id:
    | 'about'
    | 'experience'
    | 'projects'
    | 'tech'
    | 'problem-solving'
    | 'education'
    | 'achievements'
    | 'contact';
  label: string;
}

export interface SiteContent {
  site: {
    meta: PortfolioData['meta'];
    assets: {
      logo: { src: string; alt: string };
      profileImage: { src: string; alt: string };
    };
  };
  pages: {
    splash: {
      name: string;
      revealDelayMs: number;
      cursorDurationMs: number;
      totalDurationMs: number;
      fadeDurationMs: number;
    };
    navigation: {
      brandAriaLabel: string;
      mobileToggleAriaLabel: string;
      links: NavigationLink[];
      cta: NavigationLink;
    };
    about: AboutData & {
      sectionId: string;
      greetingFallback: string;
      greetingSuffix: string;
    };
    experience?: {
      sectionId: string;
      title: string;
      dateSeparator: string;
      githubLabel: string;
      githubShortLabel: string;
      liveLabel: string;
      liveShortLabel: string;
      entries: ExperienceEntry[];
    };
    projects: {
      sectionId: string;
      title: string;
      hoverHint: string;
      touchHint: string;
      featuresTitle: string;
      githubLabel: string;
      liveLabel: string;
      items: PersonalProject[];
    };
    techStack: {
      sectionId: string;
      title: string;
      logoAltSuffix: string;
      items: TechItem[];
    };
    contributions: {
      sectionId: string;
      title: string;
      platforms: {
        github: {
          label: string;
          username: string;
          failedMessage: string;
          countSuffix: string;
          defaultViewLabel: string;
        };
        leetcode: {
          label: string;
          failedMessage: string;
          countSuffix: string;
          dataUrl: string;
          baseStreak: number;
          baseDate: string;
          totalQuestionsOffset: number;
        };
      };
      legend: { less: string; more: string };
      stats: {
        streakLabel: string;
        rankLabel: string;
        solvedLabel: string;
      };
      monthNames: string[];
      availableLeetCodeYears: number[];
      excludedGitHubYears: number[];
    };
    education: {
      sectionId: string;
      title: string;
      stepPrefix: string;
      entries: EducationEntry[];
    };
    achievements: {
      sectionId: string;
      title: string;
      entries: AchievementEntry[];
    };
    contact: {
      sectionId: string;
      title: string;
      subtitle: string;
      infoTitle: string;
      description: string;
      details: Array<{ key: string; label: string; value: string }>;
      form: {
        submitEmail: string;
        subjectPrefix: string;
        labels: Record<string, string>;
        placeholders: Record<string, string>;
        subjectPlaceholder: string;
        subjects: Array<{ value: string; label: string }>;
        requiredMark: string;
        tip: string;
        sendingLabel: string;
        submitLabel: string;
        successMessage: string;
        errorMessage: string;
      };
    };
  };
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

export const siteContent = siteContentJson as SiteContent;
export const pageContent = siteContent.pages;
export const portfolioData = {
  meta: siteContent.site.meta,
  about: pageContent.about,
  experience: pageContent.experience?.entries ?? [],
  projects: pageContent.projects.items,
  techStack: pageContent.techStack.items,
  education: pageContent.education.entries,
  achievements: pageContent.achievements.entries,
} as PortfolioData;
export const aboutData = pageContent.about;
export const experienceData = pageContent.experience?.entries ?? [];
export const personalProjectsData = pageContent.projects.items;
export const techStackData = pageContent.techStack.items;
export const educationData = pageContent.education.entries;
export const achievementsData = pageContent.achievements.entries;
export const contactData = {
  email: pageContent.contact.details.find((detail) => detail.key === 'email')?.value ?? '',
  location: pageContent.contact.details.find((detail) => detail.key === 'location')?.value ?? '',
  responseTime:
    pageContent.contact.details.find((detail) => detail.key === 'responseTime')?.value ?? '',
  formSubmitEmail: pageContent.contact.form.submitEmail,
  subjectPrefix: pageContent.contact.form.subjectPrefix,
  successMessage: pageContent.contact.form.successMessage,
  errorMessage: pageContent.contact.form.errorMessage,
  intro: pageContent.contact.subtitle,
  about: pageContent.contact.description,
} as ContactData;

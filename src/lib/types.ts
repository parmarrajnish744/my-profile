export interface Project {
  id: string;
  title: string;
  category: "All" | "Full Stack" | "Mobile" | "Web / UI" | "Systems";
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featured?: boolean;
  metrics?: string;
  highlights?: string[];
}

export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile & DB" | "Tools & Cloud";
  percentage: number;
  iconName: string;
  level: "Expert" | "Advanced" | "Proficient";
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  type: "Full-Time" | "Contract" | "Freelance";
  description: string;
  achievements: string[];
  techStack: string[];
  companyLogo?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  details: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: "primary" | "secondary" | "tertiary";
  features: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
  category: "Cloud" | "Frontend" | "Backend" | "Mobile";
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  tags: string[];
  coverImage: string;
}

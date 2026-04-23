export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin?: string;
  github?: string;
  web?: string;
}

export interface Experience {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  highlights: string[];
  tools?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  highlights?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface AboutMe {
  title: string;
  content: string;
}

export interface CVData {
  name: string;
  title: string;
  contact: ContactInfo;
  aboutMe?: AboutMe;
  summary?: string;
  experience: Experience[];
  education: Education[];
  skills?: SkillCategory[];
  languages?: string[];
}

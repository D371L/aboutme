export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link: string;
  imageUrl: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: 'shield' | 'book' | 'scroll';
}

export interface TechCategory {
  name: string;
  skills: string[];
}
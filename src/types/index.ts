export interface Project {
  _id?: string;
  id?: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  preview?: string;
  image?: string;
  href?: string;
  githubUrl?: string;
  order: number;
  featured: boolean;
  isPublished: boolean;
  overview?: string;
  features?: string[];
  architecture?: string;
  challengesSolved?: string;
}

export interface Certificate {
  title: string;
  issuer: string;
  year?: string;
  image?: string;
  description?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type Theme = 'light' | 'dark';

export interface ServiceItem {
  id: string;
  title: string;
  category: 'mobile' | 'web' | 'enterprise' | 'ai_cloud';
  iconName: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  techStack: string[];
  deliverables: string[];
}

export interface TechItem {
  name: string;
  icon: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Cloud' | 'Mobile';
  level: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: 'Mobile Apps' | 'Web Applications' | 'Enterprise Software' | 'SaaS' | 'E-Commerce';
  image: string;
  shortDesc: string;
  fullChallenge: string;
  solution: string;
  impact: string[];
  tags: string[];
  liveUrl?: string;
  metrics: { label: string; value: string }[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  popular?: boolean;
  monthlyPrice: number;
  annualPrice: number;
  features: string[];
  deliverables: string[];
  recommendedFor: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: 'AI' | 'Mobile Development' | 'Web Development' | 'Cloud' | 'Cybersecurity';
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string; // Full-time, Remote, Hybrid
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface ContactFormState {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface OfferItem {
  title: string;
  desc: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  desc: string;
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  heading: string;
  subheading: string;
  metaDescription: string;
  keywords: string[];
  intro: string[];
  offers: OfferItem[];
  experienceHighlight: string;
  caseStudies: string[];
  technologies: TechCategory[];
  process: ProcessItem[];
  faqs: FAQItem[];
}

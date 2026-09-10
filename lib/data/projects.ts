import projectsData from "./projects.json";

export interface Project {
  id: string;
  title: string;
  desc: string;
  overview: string;
  tech: string[];
  image: string;
  category: string;
  projectType: "Personal" | "Company" | "Client";
  role: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  impact: string;
  liveUrl?: string;
}

export const projects: Project[] = projectsData as Project[];


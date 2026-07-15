import projectsData from "./projects.json";

export interface Project {
  id: string;
  title: string;
  desc: string;
  overview: string;
  tech: string[];
  image: string;
  category: string;
  role: string;
  duration: string;
  challenges: string[];
  solutions: string[];
  impact: string;
}

export const projects: Project[] = projectsData as Project[];


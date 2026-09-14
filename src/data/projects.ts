export type ProjectStatus = "shipped" | "in-progress" | "hackathon";

export interface Project {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  tags: readonly string[];
  status: ProjectStatus;
  statusLabel: string;
  featured: boolean;
}

export const projects: readonly Project[] = [
  {
    slug: "hospital-management-system",
    name: "Smart Hospital Management System",
    description:
      "Java · priority-queue triage engine, Strategy & Observer patterns, JDBC/MySQL, JavaFX GUI.",
    longDescription:
      "A Java mini-project for the OOPs course: a priority-queue triage engine deciding who gets seen next, built with Strategy and Observer patterns, JDBC/MySQL for persistence, and a JavaFX/Swing interface on top.",
    tags: ["Java", "JDBC", "MySQL", "JavaFX", "OOP"],
    status: "in-progress",
    statusLabel: "in progress",
    featured: true,
  },
  {
    slug: "autodoc-ai",
    name: "AutoDoc AI",
    description:
      "FastAPI + LangChain pipeline that generates READMEs, API docs, and architecture diagrams from a repo.",
    longDescription:
      "An AI documentation generator that points at a GitHub repo and writes the README, API docs, and architecture diagrams that usually go stale first. Built the pipeline end to end — FastAPI serving requests, Celery and Redis handling the heavier generation jobs in the background.",
    tags: ["FastAPI", "LangChain", "Celery", "Redis"],
    status: "shipped",
    statusLabel: "team project",
    featured: true,
  },
  {
    slug: "buildx26-edtech",
    name: "BUILDX'26 — AI-Driven EdTech Platform",
    description: "Led a 4-member team to a working AI-driven prototype in a 12-hour hackathon.",
    longDescription:
      "Led a four-person team to a working prototype in twelve hours, mapping what a learner already knows to the courses, certifications, and jobs that make sense next — with accessibility considered from the first wireframe, not bolted on after.",
    tags: ["Team lead", "Prototype", "12-hour build"],
    status: "hackathon",
    statusLabel: "hackathon · team lead",
    featured: true,
  },
  {
    slug: "weather-app",
    name: "Weather App",
    description: "React/Vite weather app, deployed to GitHub Pages.",
    longDescription:
      "A React/Vite weather app, rebuilt and deployed to GitHub Pages after untangling a broken CI/CD workflow and a Vite base-path bug that kept breaking the live build.",
    tags: ["React", "Vite", "GitHub Actions", "GitHub Pages"],
    status: "shipped",
    statusLabel: "shipped",
    featured: false,
  },
  {
    slug: "whatsapp-web-replica",
    name: "WhatsApp Web Homepage Replica",
    description: "Responsive front-end replica built during a five-day front-end intensive.",
    longDescription:
      "A responsive front-end replica of the WhatsApp Web homepage, built during a five-day front-end intensive — first real practice with Git branches and a GitHub-based deploy workflow.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    status: "shipped",
    statusLabel: "shipped",
    featured: false,
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const earlierWorkNote =
  "Earlier builds: a themed Diwali webpage and a multi-page school information site — both static HTML/CSS projects shipped via GitHub Pages during coursework.";

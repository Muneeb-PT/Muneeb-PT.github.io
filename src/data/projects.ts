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
  repositoryUrl?: string;
  caseStudyUrl?: string;
}

export const projects: readonly Project[] = [
  {
    slug: "hospital-management-system",
    name: "MediNexus — Smart Hospital Management System",
    description:
      "Java · JavaFX/FXML · JDBC/MySQL · role-based access · appointment prioritisation · OOP design patterns.",
    longDescription:
      "A desktop hospital-management application developed for a Java OOP project. It brings together role-based workflows for administrators, doctors, receptionists, and patients; appointment prioritisation; and database-backed records using JDBC and MySQL. Supporting modules include identity-verification workflows, notifications, payments, and medicine inventory. The project has a packaged Windows installer and an automated test suite. It is an academic project, not certified clinical software, and still needs broader installation testing outside the development environment.",
    tags: ["Java", "JavaFX", "FXML", "JDBC", "MySQL", "RBAC", "JUnit"],
    status: "in-progress",
    statusLabel: "release validation",
    featured: true,
    repositoryUrl: "https://github.com/Muneeb-PT/MediNexus",
    caseStudyUrl: "https://github.com/Muneeb-PT/Muneeb-PT.github.io/blob/main/docs/case-studies/medinexus.md",
  },
  {
    slug: "autodoc-ai",
    name: "AutoDoc AI",
    description:
      "Team-built AI documentation tool for generating project documentation from a GitHub repository.",
    longDescription:
      "An AI-assisted documentation project designed to turn a GitHub repository into useful technical documentation, including README content, API documentation, and architecture diagrams. The project uses a FastAPI service with a LangChain-based generation workflow; Celery and Redis support background processing. It was developed as a team project, so the technologies listed describe the project stack rather than a claim of equal depth in every tool.",
    tags: ["FastAPI", "LangChain", "Celery", "Redis"],
    status: "shipped",
    statusLabel: "team project",
    featured: true,
    repositoryUrl: "https://github.com/Muneeb-PT/AutoDoc-AI",
    caseStudyUrl: "https://github.com/Muneeb-PT/Muneeb-PT.github.io/blob/main/docs/case-studies/autodoc-ai.md",
  },
  {
    slug: "buildx26-edtech",
    name: "BUILDX'26 — AI-Driven EdTech Platform",
    description: "Led a 4-member team to a working AI-driven prototype in a 12-hour hackathon.",
    longDescription:
      "Led a four-person team to a working prototype in twelve hours. The idea was to map what a learner already knows to relevant courses, certifications, and possible next-step roles, while considering accessibility from the first wireframe.",
    tags: ["Team lead", "Prototype", "12-hour build"],
    status: "hackathon",
    statusLabel: "hackathon · team lead",
    featured: true,
  },
  {
    slug: "weather-app",
    name: "Weather App",
    description: "React/Vite weather app using Open-Meteo, deployed to GitHub Pages.",
    longDescription:
      "A React/Vite weather app that uses Open-Meteo for location search and forecast data. During development, I worked through a broken CI/CD workflow and a Vite base-path issue before deploying it to GitHub Pages.",
    tags: ["React", "Vite", "Open-Meteo", "GitHub Actions", "GitHub Pages"],
    status: "shipped",
    statusLabel: "shipped",
    featured: false,
    repositoryUrl: "https://github.com/Muneeb-PT/Weather_App",
  },
  {
    slug: "whatsapp-web-replica",
    name: "WhatsApp Web Homepage Replica",
    description: "Responsive front-end replica built during a five-day front-end intensive.",
    longDescription:
      "A responsive front-end recreation of the WhatsApp Web homepage, built during a five-day front-end intensive. It was a practical exercise in HTML, CSS, JavaScript, Git branches, and a GitHub-based deployment workflow.",
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    status: "shipped",
    statusLabel: "shipped",
    featured: false,
    repositoryUrl: "https://github.com/Muneeb-PT/add-on_class_profile",
  },
] as const;

export const featuredProjects = projects.filter((p) => p.featured);

export const earlierWorkNote =
  "Earlier coursework and practice: a themed Diwali webpage and a multi-page school information site, both built with static HTML/CSS and published through GitHub Pages.";

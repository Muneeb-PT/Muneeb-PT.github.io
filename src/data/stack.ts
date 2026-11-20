export interface StackGroup {
  title: string;
  items: readonly string[];
}

export const stackGroups: readonly StackGroup[] = [
  {
    title: "Programming languages",
    items: ["C++", "Python", "C", "Java (actively learning)", "SQL"],
  },
  {
    title: "Web development",
    items: ["HTML5", "CSS3", "JavaScript", "React"],
  },
  {
    title: "Backend & AI project technologies",
    items: ["FastAPI", "LangChain", "Celery", "Redis"],
  },
  {
    title: "Tools & platforms",
    items: ["Git", "GitHub", "MySQL", "VS Code"],
  },
  {
    title: "Foundations I'm developing",
    items: ["Data Structures & Algorithms", "OOP", "Machine Learning fundamentals", "Prompt engineering"],
  },
];

export const glanceStack = [
  "Python",
  "C++",
  "Java",
  "JavaScript",
  "React",
  "FastAPI",
  "MySQL",
  "Git & GitHub",
];
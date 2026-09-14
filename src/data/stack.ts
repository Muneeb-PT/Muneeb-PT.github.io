export interface StackGroup {
  title: string;
  items: readonly string[];
}

export const stackGroups: readonly StackGroup[] = [
  {
    title: "Languages",
    items: ["C++", "Python", "C", "Java (in progress)", "SQL"],
  },
  {
    title: "Web development",
    items: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "AI/ML & backend ecosystem",
    items: ["FastAPI", "LangChain", "Celery", "Redis"],
  },
  {
    title: "Tools & platforms",
    items: ["Git", "GitHub", "MySQL", "VS Code"],
  },
  {
    title: "Core concepts",
    items: ["Data Structures & Algorithms", "OOP", "ML fundamentals", "Prompt engineering"],
  },
];

export const glanceStack = [
  "Python",
  "C++",
  "Java",
  "FastAPI",
  "LangChain",
  "React",
  "MySQL",
  "Git & GitHub",
];

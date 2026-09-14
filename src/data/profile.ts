export const profile = {
  name: "Mohammed Muneeb PT",
  shortName: "Muneeb PT",
  role: "B.Tech CSE · KMEA Engineering College",
  location: "Perinthalmanna, Kerala, India",
  focus: "AI infrastructure · backend engineering",
  status: "Open to SWE internships",
  avatar: "https://avatars.githubusercontent.com/u/247439067?v=4",
  email: "mohammedmuneebptcsa@gmail.com",
  bio: "I started with C++ and the usual data-structures coursework, then found my way into web development and, more recently, the tooling underneath large language models. I'd rather understand why something works than paste together a version that happens to run — slower some days, but it's held up better than the alternative.",
  headline:
    "CS engineering undergrad in Kerala, working through the fundamentals — data structures, systems design, and enough backend plumbing to know where things usually break.",
} as const;

export const social = [
  { label: "GitHub", handle: "github", href: "https://github.com/Muneeb-PT" },
  {
    label: "LinkedIn",
    handle: "linkedin",
    href: "https://www.linkedin.com/in/mohammed-muneeb-pt",
  },
  {
    label: "TinkerHub",
    handle: "tinkerhub",
    href: "https://tinkerhub.org/@muneebpt",
  },
  {
    label: "Instagram",
    handle: "instagram",
    href: "https://www.instagram.com/mohammed_muneeb_pt",
  },
  {
    label: "Facebook",
    handle: "facebook",
    href: "https://www.facebook.com/share/19UAkcJsvG/",
  },
] as const;

export const currentlyList = [
  "Building a Java hospital management system, end to end",
  "Keeping a daily DSA habit going",
  "Preparing for GATE",
  "Class Representative for a 60-student CSE batch",
] as const;

export const terminalLines = [
  { cmd: "whoami", out: "mohammed muneeb pt" },
  { cmd: "cat focus.txt", out: "ai infrastructure & backend systems" },
  { cmd: "cat status.txt", out: "open to swe internships" },
] as const;

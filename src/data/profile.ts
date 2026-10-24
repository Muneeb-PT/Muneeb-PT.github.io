export const profile = {
  name: "Mohammed Muneeb PT",
  shortName: "Muneeb PT",
  role: "B.Tech CSE Student · KMEA Engineering College",
  location: "Kerala, India",
  focus: "Software engineering · AI/ML · backend systems",
  status: "Open to software engineering internships",
  avatar: "https://avatars.githubusercontent.com/u/247439067?v=4",
  email: "mohammedmuneebptcsa@gmail.com",
  bio: "I'm a Computer Science and Engineering undergraduate who enjoys understanding how software works beneath the surface. I build practical projects, strengthen my programming and data-structures fundamentals, and explore backend engineering and AI/ML. My recent work includes MediNexus, a JavaFX and MySQL hospital-management application, alongside web-development projects and team-based builds.",
  headline:
    "B.Tech CSE student at KMEA Engineering College, building practical software while developing stronger foundations in problem-solving, data structures, backend systems, and AI/ML.",
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
  "Developing and validating MediNexus, a JavaFX and MySQL hospital-management system",
  "Strengthening programming, data structures, and problem-solving fundamentals",
  "Exploring AI/ML and backend engineering",
  "Serving as an ACE Representative for S3 CSE-A",
] as const;

export const terminalLines = [
  { cmd: "whoami", out: "mohammed muneeb pt" },
  { cmd: "cat focus.txt", out: "software engineering, backend & ai/ml" },
  { cmd: "cat status.txt", out: "open to software engineering internships" },
] as const;

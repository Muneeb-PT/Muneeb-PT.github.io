export const profile = {
  name: "Mohammed Muneeb PT",
  shortName: "Muneeb PT",
  role: "B.Tech CSE Student · KMEA Engineering College",
  location: "Kerala, India",
  focus: "Software engineering · AI/ML foundations · backend systems",
  status: "Open to software engineering internships",
  avatar: "https://avatars.githubusercontent.com/u/247439067?v=4",
  email: "mohammedmuneebptcsa@gmail.com",
  bio: "I'm a Computer Science and Engineering undergraduate who likes figuring out how software works beneath the surface. I learn by building, breaking, and improving practical projects. Lately, that has meant working on MediNexus, a JavaFX and MySQL hospital-management application, building smaller web projects, and exploring backend engineering and AI/ML.",
  headline:
    "B.Tech CSE student at KMEA Engineering College, building practical software and strengthening my foundations in programming, problem-solving, backend systems, and AI/ML.",
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
  "Maintaining and validating MediNexus, a JavaFX and MySQL hospital-management application",
  "Strengthening programming, data structures, and problem-solving fundamentals",
  "Learning more about AI/ML and backend engineering through practical work",
  "Serving as an ACE Representative for S3 CSE-A",
] as const;

export const terminalLines = [
  { cmd: "whoami", out: "mohammed muneeb pt" },
  { cmd: "cat focus.txt", out: "software engineering, backend & ai/ml" },
  { cmd: "cat status.txt", out: "open to software engineering internships" },
] as const;
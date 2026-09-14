export interface TimelineEntry {
  hash: string;
  title: string;
  date: string;
  org: string;
  points: readonly string[];
}

export const timeline: readonly TimelineEntry[] = [
  {
    hash: "a91f3c",
    title: "Class Representative",
    date: "Jan 2026 – Present",
    org: "KMEA Engineering College · Aluva, Kerala",
    points: [
      "Sole academic liaison between a 60-student CSE cohort and faculty — course updates, schedule conflicts, exam-scheduling pushback",
      "Organized peer study sessions and coordinated the batch's participation in department events",
    ],
  },
  {
    hash: "7c2e91",
    title: "Team Lead, BUILDX'26 Hackathon",
    date: "12-hour build",
    org: "KAPRICIOUS'26, KMEA",
    points: [
      "Directed a four-member team from idea to working prototype",
      "Owned the personalized learning-path logic and the accessibility requirements",
    ],
  },
  {
    hash: "1d4a6e",
    title: "Unit Leader, Junior Red Cross",
    date: "Jul 2020 – Mar 2023",
    org: "GHSS Pattikkad · Indian Red Cross Society, Perinthalmanna",
    points: [
      "Ran training sessions, drills, and community-service events for a school cadet unit across three years",
      "Earned the State C-Level Certificate; named Best Cadet of the Year",
    ],
  },
];

export interface CredentialItem {
  label: string;
  year: string;
}

export const credentials: {
  certifications: readonly CredentialItem[];
  achievements: readonly CredentialItem[];
  education: readonly CredentialItem[];
} = {
  certifications: [
    { label: "Machine Learning — NPTEL", year: "2026" },
    { label: "Software Engineering — IBM", year: "2026" },
    { label: "Digital Edge 101 — NASSCOM", year: "2026" },
    { label: "Placement Prep — eDC, IIT Delhi", year: "2026" },
    { label: "Front-End Web Dev Intensive", year: "2026" },
    { label: "Interview Readiness — K-DISC", year: "2026" },
    { label: "Prompt Engineering — Great Learning", year: "2026" },
    { label: "IEEE Student Membership", year: "2025–26" },
  ],
  achievements: [
    { label: "AICTE Tuition Fee Waiver", year: "2025" },
    { label: "Best Cadet of the Year, JRC", year: "2023" },
    { label: "EXCELLENTIA'25 Plus Two Award", year: "2025" },
    { label: "Maths Fair — 1st Sub-Dist. (Still)", year: "2025" },
    { label: "Maths Fair — 1st Sub-Dist. (Working)", year: "2022–23" },
    { label: "Science & IT Fest — 1st Grade", year: "2023" },
    { label: "BYJU'S Merit Certificate", year: "2023" },
  ],
  education: [
    { label: "B.Tech CSE — KMEA Engineering College", year: "2025–29" },
    { label: "HSE, Computer Science — 88.08%", year: "2023–25" },
    { label: "SSLC — Full A+", year: "2022–23" },
  ],
};

export const leadershipPages = [
  {
    slug: "msf",
    name: "MSF",
    fullName: "Muslim Students Federation",
    unit: "Manathmangalam Unit",
    blurb: "Grassroots leadership — student empowerment, Ramadan relief, and civic outreach since 2019.",
    accent: "#0b6b3a",
  },
  {
    slug: "skssf",
    name: "SKSSF",
    fullName: "Samastha Kerala Sunni Students Federation",
    unit: "Manathmangalam Unit · Perinthalmanna Cluster",
    blurb: "General Secretary to Working Secretary — organizational leadership and community fundraising.",
    accent: "#d7b56d",
  },
];

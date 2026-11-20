import { ArrowLeft, Download, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { profile, social } from "../data/profile";
import { credentials, timeline } from "../data/journey";
import { projects } from "../data/projects";
import { stackGroups } from "../data/stack";
import "../resume-print.css";

const selectedProjects = projects.filter((project) =>
  ["hospital-management-system", "autodoc-ai", "weather-app"].includes(project.slug),
);

export default function Resume() {
  return (
    <main className="resume-page mx-auto my-8 w-full max-w-[850px] px-6 py-8 sm:px-10 print:my-0 print:px-0 print:py-0">
      <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
        <Link to="/" className="inline-flex min-h-10 items-center gap-2 rounded-md border border-border px-3 text-sm text-text-muted hover:text-accent">
          <ArrowLeft size={15} /> Back to portfolio
        </Link>
        <button type="button" onClick={() => window.print()} className="inline-flex min-h-10 items-center gap-2 rounded-md bg-accent px-4 text-sm font-semibold text-[#17120a]">
          <Download size={15} /> Save as PDF
        </button>
      </div>

      <header className="resume-header border-b-2 pb-5">
        <p className="resume-kicker">Software Engineering · AI/ML Foundations</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-base">{profile.role} · {profile.location}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {social.filter((item) => ["GitHub", "LinkedIn"].includes(item.label)).map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
          <a href="https://muneeb-pt.github.io/">Portfolio</a>
        </div>
      </header>

      <section className="resume-section">
        <h2>Profile</h2>
        <p>{profile.headline} I learn through practical projects, iterative debugging and deliberate development of computer science fundamentals.</p>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <div className="resume-row">
          <strong>B.Tech — Computer Science and Engineering</strong>
          <span>2025–2029</span>
        </div>
        <p>KMEA Engineering College · Kerala, India</p>
        <div className="resume-row mt-3">
          <strong>Higher Secondary — Computer Science</strong>
          <span>2023–2025</span>
        </div>
        <p>88.08%</p>
        <div className="resume-row mt-3">
          <strong>SSLC</strong>
          <span>2022–2023</span>
        </div>
        <p>Full A+</p>
      </section>

      <section className="resume-section">
        <h2>Selected Projects</h2>
        {selectedProjects.map((project) => (
          <article key={project.slug} className="resume-item">
            <div className="resume-row">
              <strong>{project.name}</strong>
              <span>{project.statusLabel}</span>
            </div>
            <p>{project.longDescription}</p>
            <p className="resume-links">
              {project.repositoryUrl && <a href={project.repositoryUrl}>Source repository</a>}
              {project.caseStudyUrl && <a href={project.caseStudyUrl}>Engineering case study</a>}
            </p>
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        {stackGroups.map((group) => (
          <p key={group.title} className="resume-skill"><strong>{group.title}:</strong> {group.items.join(", ")}</p>
        ))}
      </section>

      <section className="resume-section">
        <h2>Leadership & Activities</h2>
        {timeline.slice(0, 3).map((entry) => (
          <article key={entry.hash} className="resume-item">
            <div className="resume-row">
              <strong>{entry.title}</strong>
              <span>{entry.date}</span>
            </div>
            <p>{entry.org}</p>
            <ul>{entry.points.map((point) => <li key={point}>{point}</li>)}</ul>
          </article>
        ))}
      </section>

      <section className="resume-section">
        <h2>Certifications & Development</h2>
        <ul className="resume-credentials">
          {credentials.certifications.map((item) => (
            <li key={item.label}>{item.label} <span>({item.year})</span></li>
          ))}
        </ul>
      </section>

      <footer className="resume-footer">
        <span>Portfolio: muneeb-pt.github.io</span>
        <span>Prepared from the public portfolio record · Updated November 2026</span>
      </footer>
      <div className="no-print mt-5 text-xs text-text-dim">
        <ExternalLink size={12} className="mr-1 inline" /> Use “Save as PDF” in your browser print dialog. Review the generated document before sharing.
      </div>
    </main>
  );
}

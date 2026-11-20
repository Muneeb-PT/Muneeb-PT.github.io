import { Page, PageHeader, SectionHead, Chip } from "../components/ui/Primitives";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Footer } from "../components/layout/Footer";
import { Reveal } from "../components/ui/Reveal";
import { stackGroups } from "../data/stack";
import { projects, earlierWorkNote } from "../data/projects";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Work() {
  usePageMeta(
    "Work — Mohammed Muneeb PT",
    "Projects and technical stack — Mohammed Muneeb PT, B.Tech CSE student.",
  );

  return (
    <>
      <Page>
        <PageHeader eyebrow="/work" title="Stack & projects" lede="Everything I've built so far, from course projects to a hackathon prototype, plus the languages and tools I reach for most." />
        <Reveal>
          <section className="mb-16">
            <SectionHead eyebrow="stack / 01" title="Tools I work with" />
            <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
              {stackGroups.map((group) => (
                <div key={group.title} className={group.title === "Core concepts" ? "sm:col-span-2" : ""}>
                  <h3 className="mb-3 text-[14.5px] font-semibold text-text">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">{group.items.map((item) => <Chip key={item}>{item}</Chip>)}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section className="mb-16">
            <SectionHead eyebrow="skills in practice / 02" title="Evidence behind the stack" />
            <p className="mb-5 max-w-[64ch] text-[13.5px] leading-relaxed text-text-muted">A technology is listed here with the project context where it appears. Team-project technologies are identified as team work; listing a tool is not a claim of professional mastery.</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { title: "Java · JavaFX · JDBC · MySQL", detail: "Desktop application, role-aware workflows and relational persistence.", project: "MediNexus", href: "https://github.com/Muneeb-PT/MediNexus", role: "Academic project" },
                { title: "FastAPI · LangChain · Celery · Redis", detail: "AI-assisted documentation workflow and background processing.", project: "AutoDoc AI", href: "https://github.com/Muneeb-PT/AutoDoc-AI", role: "Team project" },
                { title: "React · Vite · API integration", detail: "Weather application with location search and forecast data.", project: "Weather App", href: "https://github.com/Muneeb-PT/Weather_App", role: "Personal project" },
                { title: "HTML · CSS · JavaScript", detail: "Responsive multi-page front-end practice from an intensive programme.", project: "Front-end training work", href: "https://github.com/Muneeb-PT/add-on_class_profile", role: "Training assignment" },
              ].map((item) => (
                <article key={item.title} className="rounded-lg border border-border bg-raised/60 p-5">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[.12em] text-accent">{item.role}</p>
                  <h3 className="mb-2 text-[14px] font-semibold text-text">{item.title}</h3>
                  <p className="mb-3 text-[13px] leading-relaxed text-text-muted">{item.detail}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-[12px] text-text underline decoration-border underline-offset-4 hover:text-accent">{item.project} — view source ↗</a>
                </article>
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal>
          <section>
            <SectionHead eyebrow="selected builds / 03" title="Projects" />
            <div className="grid gap-4 sm:grid-cols-2">
              {projects.map((project, i) => <ProjectCard key={project.slug} project={project} delay={i * 70} />)}
            </div>
            <p className="mt-6 text-[13px] text-text-dim">{earlierWorkNote}</p>
          </section>
        </Reveal>
      </Page>
      <Footer />
    </>
  );
}

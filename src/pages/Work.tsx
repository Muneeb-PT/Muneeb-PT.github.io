import { Page, PageHeader, SectionHead, Chip } from "../components/ui/Primitives";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Footer } from "../components/layout/Footer";
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
        <PageHeader
          eyebrow="/work"
          title="Stack & projects"
          lede="Everything I've built so far, from course projects to a hackathon prototype, plus the languages and tools I reach for most."
        />

        <section className="mb-16">
          <SectionHead eyebrow="stack" title="Stack" />
          <div className="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {stackGroups.map((group) => (
              <div key={group.title} className={group.title === "Core concepts" ? "sm:col-span-2" : ""}>
                <h3 className="mb-3 text-[14.5px] font-semibold text-text">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Chip key={item}>{item}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHead eyebrow="projects" title="Projects" />
          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <p className="mt-6 text-[13px] text-text-dim">{earlierWorkNote}</p>
        </section>
      </Page>
      <Footer />
    </>
  );
}

import { Terminal } from "../components/ui/Terminal";
import { Button, Chip, SectionHead } from "../components/ui/Primitives";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Footer } from "../components/layout/Footer";
import { profile, currentlyList, social } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { glanceStack } from "../data/stack";
import { leadershipPages } from "../data/journey";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Mohammed Muneeb PT — Software Engineer",
    "Mohammed Muneeb PT — B.Tech CSE student at KMEA Engineering College, building toward AI infrastructure and backend engineering.",
  );

  return (
    <>
      <section className="border-b border-border-soft px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-24">
        <div className="mx-auto grid max-w-(--wide-max) gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <p className="mb-5 font-mono text-[13px] text-text-dim">{profile.location}</p>
            <h1 className="mb-6 text-[42px] leading-[1.08] sm:text-[52px]">{profile.name}</h1>
            <p className="mb-7 max-w-[54ch] text-[16px] leading-relaxed text-text-muted">
              {profile.headline} Most of what I build starts as a fix for something that was mildly
              annoying me.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/work">See projects</Button>
              <Button href={`mailto:${profile.email}`} variant="ghost">
                Get in touch
              </Button>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-(--wide-max)">
          <SectionHead eyebrow="about" title="Who I am" />
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
            <p className="max-w-[62ch] text-[15px] leading-relaxed text-text-muted">{profile.bio}</p>
            <div className="rounded-lg border border-border bg-raised p-6">
              <h3 className="mb-4 font-mono text-[12.5px] text-text-dim">currently</h3>
              <ul className="flex flex-col">
                {currentlyList.map((item, i) => (
                  <li
                    key={item}
                    className={
                      "flex gap-2.5 py-2.5 text-[13.5px] text-text-muted " +
                      (i !== 0 ? "border-t border-border-soft" : "")
                    }
                  >
                    <span className="text-accent">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-(--wide-max)">
          <SectionHead eyebrow="featured" title="Featured work" action={{ label: "All projects", to: "/work" }} />
          <div className="grid gap-4 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} compact />
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {glanceStack.map((s) => (
              <Chip key={s}>{s}</Chip>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-(--wide-max)">
          <SectionHead eyebrow="beyond code" title="Community leadership" />
          <div className="grid gap-4 sm:grid-cols-2">
            {leadershipPages.map((page) => (
              <a
                key={page.slug}
                href={`/${page.slug}`}
                className="group rounded-lg border border-border bg-raised p-6 transition-colors hover:border-accent-line"
              >
                <div className="mb-3 flex items-center gap-2.5">
                  <span
                    aria-hidden
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ background: page.accent }}
                  />
                  <span className="font-mono text-[12.5px] text-text-dim">{page.name}</span>
                </div>
                <h3 className="mb-2 text-[16px] font-sans font-semibold text-text">{page.fullName}</h3>
                <p className="text-[13.5px] leading-relaxed text-text-muted">{page.blurb}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:px-12 md:py-20" id="connect">
        <div className="mx-auto max-w-(--wide-max)">
          <p className="mb-3 font-mono text-[12.5px] text-text-dim">connect</p>
          <h2 className="mb-4 text-[28px]">Let's talk</h2>
          <p className="mb-8 max-w-[56ch] text-[15.5px] text-text-muted">
            Software engineering internships, open-source collabs, or just talking through a gnarly
            bug — my inbox is open.
          </p>
          <div className="mb-8">
            <Button href={`mailto:${profile.email}`}>{profile.email}</Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {social.map((s) => (
              <a
                key={s.handle}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-3.5 py-2 font-mono text-[12.5px] text-text-muted transition-colors hover:border-accent-line hover:text-text"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

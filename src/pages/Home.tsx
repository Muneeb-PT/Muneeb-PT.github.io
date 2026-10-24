import { ArrowUpRight, Code2, Sparkles } from "lucide-react";
import { Terminal } from "../components/ui/Terminal";
import { Button, Chip, SectionHead } from "../components/ui/Primitives";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Footer } from "../components/layout/Footer";
import { Reveal } from "../components/ui/Reveal";
import { profile, currentlyList, social } from "../data/profile";
import { featuredProjects } from "../data/projects";
import { glanceStack } from "../data/stack";
import { leadershipPages } from "../data/journey";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta(
    "Mohammed Muneeb PT — Software Engineer",
    "Mohammed Muneeb PT — B.Tech CSE student at KMEA Engineering College, building practical software and exploring backend engineering and AI/ML.",
  );

  return (
    <>
      <section className="hero-section relative overflow-hidden border-b border-border-soft px-6 pb-16 pt-14 md:px-12 md:pb-24 md:pt-24">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-(--wide-max) gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="hero-copy">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-raised/80 px-3 py-1.5 font-mono text-[11px] text-text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-live opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-live" />
              </span>
              {profile.status}
            </div>
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[.2em] text-accent">{profile.location} <span className="text-text-dim">/</span> {profile.role}</p>
            <h1 className="hero-title mb-6 max-w-[13ch] text-[42px] leading-[1.08] sm:text-[54px] lg:text-[60px]">
              Building ideas into <span className="text-accent">working software.</span>
            </h1>
            <p className="mb-8 max-w-[54ch] text-[16px] leading-relaxed text-text-muted">
              {profile.headline} Most of what I build starts as a fix for something that was mildly annoying me.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/work"><span className="inline-flex items-center gap-2">Explore my work <ArrowUpRight size={15} /></span></Button>
              <Button href={`mailto:${profile.email}`} variant="ghost">Get in touch</Button>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-text-dim">
              <span className="inline-flex items-center gap-2"><Code2 size={13} className="text-accent" /> Building in public</span>
              <span className="inline-flex items-center gap-2"><Sparkles size={13} className="text-accent" /> Learning by shipping</span>
            </div>
          </div>
          <div className="hero-terminal"><Terminal /></div>
        </div>
        <div className="hero-bottom-line" aria-hidden="true"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></div>
      </section>

      <Reveal>
        <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-(--wide-max)">
            <SectionHead eyebrow="about / 01" title="Curious by default. Practical by design." />
            <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
              <p className="max-w-[62ch] text-[15px] leading-[1.9] text-text-muted">{profile.bio}</p>
              <div className="rounded-lg border border-border bg-raised/80 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-mono text-[12px] uppercase tracking-[.15em] text-text-dim">Currently exploring</h3>
                <ul className="flex flex-col">
                  {currentlyList.map((item, i) => (
                    <li key={item} className={"flex gap-2.5 py-3 text-[13.5px] text-text-muted " + (i !== 0 ? "border-t border-border-soft" : "")}>
                      <span className="text-accent">↳</span><span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-(--wide-max)">
            <SectionHead eyebrow="selected work / 02" title="A few things I've built" action={{ label: "View all projects ↗", to: "/work" }} />
            <div className="grid gap-4 md:grid-cols-3">
              {featuredProjects.map((project, i) => <ProjectCard key={project.slug} project={project} compact delay={i * 100} />)}
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {glanceStack.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-b border-border-soft px-6 py-16 md:px-12 md:py-20">
          <div className="mx-auto max-w-(--wide-max)">
            <SectionHead eyebrow="beyond code / 03" title="Community & leadership" />
            <div className="grid gap-4 sm:grid-cols-2">
              {leadershipPages.map((page) => (
                <a key={page.slug} href={`/${page.slug}`} className="leadership-card group rounded-lg border border-border bg-raised/70 p-6 backdrop-blur-sm">
                  <div className="mb-3 flex items-center gap-2.5">
                    <span aria-hidden className="h-2.5 w-2.5 rounded-full" style={{ background: page.accent }} />
                    <span className="font-mono text-[12px] uppercase tracking-[.14em] text-text-dim">{page.name}</span>
                  </div>
                  <h3 className="mb-2 text-[16px] font-sans font-semibold text-text">{page.fullName}</h3>
                  <p className="text-[13.5px] leading-relaxed text-text-muted">{page.blurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] text-accent">Explore <ArrowUpRight size={13} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="px-6 py-16 md:px-12 md:py-20" id="connect">
          <div className="mx-auto max-w-(--wide-max)">
            <p className="mb-3 font-mono text-[12px] uppercase tracking-[.2em] text-accent">connect / 04</p>
            <h2 className="mb-4 text-[30px] sm:text-[36px]">Have a good problem? <span className="text-text-dim">Let's solve it.</span></h2>
            <p className="mb-8 max-w-[56ch] text-[15.5px] text-text-muted">Software engineering internships, open-source collaborations, or just talking through a gnarly bug — my inbox is open.</p>
            <div className="mb-8"><Button href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight className="ml-1 inline" size={14} /></Button></div>
            <div className="flex flex-wrap gap-2">
              {social.map((s) => <a key={s.handle} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill rounded-md border border-border px-3.5 py-2 font-mono text-[12px] text-text-muted">{s.label}<ArrowUpRight className="ml-1 inline" size={12} /></a>)}
            </div>
          </div>
        </section>
      </Reveal>

      <Footer />
    </>
  );
}

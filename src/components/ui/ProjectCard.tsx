import clsx from "clsx";
import type { CSSProperties } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";
import type { Project } from "../../data/projects";
import { Chip } from "./Primitives";

const statusColor: Record<Project["status"], string> = {
  shipped: "bg-live",
  "in-progress": "bg-accent",
  hackathon: "bg-text-muted",
};

export function ProjectCard({ project, compact = false, delay = 0 }: { project: Project; compact?: boolean; delay?: number }) {
  return (
    <article className="project-card relative overflow-hidden rounded-lg border border-border bg-raised/85 p-5 backdrop-blur-sm" style={{ "--card-delay": `${delay}ms` } as CSSProperties}>
      <span aria-hidden className={clsx("project-accent absolute left-0 top-0 h-full w-[3px]", statusColor[project.status])} />
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-text-dim">/{project.slug}</span>
        <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.12em] text-text-dim">
          <span className={clsx("h-1.5 w-1.5 rounded-full", statusColor[project.status])} />{project.statusLabel}
        </span>
      </div>
      <h3 className={clsx("mb-2 font-sans font-semibold text-text", compact ? "text-[16px]" : "text-[18px]")}>{project.name}</h3>
      <p className="mb-5 text-[13.5px] leading-relaxed text-text-muted">{compact ? project.description : project.longDescription}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => <Chip key={tag}>{tag}</Chip>)}
      </div>
      <div className="project-card-footer mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-border-soft pt-3 font-mono text-[10.5px] uppercase tracking-[.12em] text-text-dim">
        {project.caseStudyUrl && (
          <a href={project.caseStudyUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 rounded-sm text-text-muted hover:text-accent focus-visible:outline-accent" aria-label={`Read the ${project.name} engineering case study`}>
            <BookOpen size={13} className="text-accent" /> Case study <ArrowUpRight size={13} />
          </a>
        )}
        {project.repositoryUrl ? (
          <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center gap-1.5 rounded-sm text-text-muted hover:text-accent focus-visible:outline-accent" aria-label={`View ${project.name} source code on GitHub`}>
            View source <ArrowUpRight size={13} className="text-accent" />
          </a>
        ) : <span>Project overview</span>}
      </div>
    </article>
  );
}

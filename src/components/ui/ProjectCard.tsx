import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";
import { Chip } from "./Primitives";

const statusColor: Record<Project["status"], string> = {
  shipped: "bg-live",
  "in-progress": "bg-accent",
  hackathon: "bg-text-muted",
};

export function ProjectCard({ project, compact = false, delay = 0 }: { project: Project; compact?: boolean; delay?: number }) {
  return (
    <article className="project-card relative overflow-hidden rounded-lg border border-border bg-raised/85 p-5 backdrop-blur-sm" style={{ "--card-delay": `${delay}ms` } as React.CSSProperties}>
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
      <div className="project-card-footer mt-5 flex items-center justify-between border-t border-border-soft pt-3 font-mono text-[10.5px] uppercase tracking-[.12em] text-text-dim">
        <span>Project details</span><ArrowUpRight size={14} className="text-accent" />
      </div>
    </article>
  );
}

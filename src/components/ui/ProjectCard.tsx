import clsx from "clsx";
import type { Project } from "../../data/projects";
import { Chip } from "./Primitives";

const statusColor: Record<Project["status"], string> = {
  shipped: "bg-live",
  "in-progress": "bg-accent",
  hackathon: "bg-text-muted",
};

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-border bg-raised pl-5 pr-5 py-5 transition-colors hover:border-accent-line">
      <span
        aria-hidden
        className={clsx("absolute left-0 top-0 h-full w-[3px]", statusColor[project.status])}
      />
      <div className="mb-3 flex items-center justify-between gap-3">
        <span className="font-mono text-[11.5px] text-text-dim">/{project.slug}</span>
        <span className="font-mono text-[10.5px] uppercase tracking-wide text-text-dim">
          {project.statusLabel}
        </span>
      </div>
      <h3 className={clsx("mb-2 font-sans font-semibold text-text", compact ? "text-[16px]" : "text-[18px]")}>
        {project.name}
      </h3>
      <p className="mb-4 text-[13.5px] leading-relaxed text-text-muted">
        {compact ? project.description : project.longDescription}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Chip key={tag}>{tag}</Chip>
        ))}
      </div>
    </article>
  );
}

import type { ReactNode } from "react";
import clsx from "clsx";

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-border bg-raised px-2.5 py-1 font-mono text-[12px] text-text-muted transition-colors hover:border-accent-line hover:text-text">
      {children}
    </span>
  );
}

export function SectionHead({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: { label: string; to: string };
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-3 border-b border-border-soft pb-5">
      <div>
        <p className="mb-1.5 font-mono text-[12.5px] text-text-dim">{eyebrow}</p>
        <h2 className="text-[26px]">{title}</h2>
      </div>
      {action && (
        <a
          href={action.to}
          className="border-b border-border pb-0.5 font-mono text-[12.5px] text-text-muted transition-colors hover:border-accent-line hover:text-accent"
        >
          {action.label}
        </a>
      )}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 font-mono text-[13.5px] font-medium transition-all",
        variant === "primary"
          ? "bg-accent text-[#17120a] hover:opacity-90"
          : "border border-border text-text hover:border-accent-line hover:text-accent",
      )}
    >
      {children}
    </a>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return <div className="mx-auto max-w-(--content-max) px-6 py-14 md:px-12 md:py-20">{children}</div>;
}

export function PageHeader({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <div className="mb-14">
      <p className="mb-3 font-mono text-[12.5px] text-text-dim">{eyebrow}</p>
      <h1 className="mb-4 text-[34px] leading-[1.1]">{title}</h1>
      <p className="max-w-[58ch] text-[15.5px] text-text-muted">{lede}</p>
    </div>
  );
}

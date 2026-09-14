import { useState, type ReactNode } from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FolderGit2,
  GitCommitVertical,
  Users,
  Landmark,
  Sparkle,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { SiGithub, SiInstagram, SiFacebook } from "@icons-pack/react-simple-icons";
import { profile, social } from "../../data/profile";
import clsx from "clsx";

const routes = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/work", label: "Work", icon: FolderGit2, end: false },
  { to: "/journey", label: "Journey", icon: GitCommitVertical, end: false },
  { to: "/msf", label: "MSF", icon: Users, end: false },
  { to: "/skssf", label: "SKSSF", icon: Landmark, end: false },
] as const;

/** LinkedIn's mark isn't in lucide or simple-icons (both dropped it
 *  over licensing), so a plain text glyph stands in — same treatment,
 *  no logo redrawn. */
function LinkedInGlyph({ size = 14 }: { size?: number }) {
  return (
    <span
      aria-hidden
      style={{ fontSize: size * 0.85 }}
      className="font-mono font-semibold leading-none"
    >
      in
    </span>
  );
}

const socialIcons: Record<string, (props: { size?: number }) => ReactNode> = {
  github: (p) => <SiGithub size={p.size} color="currentColor" />,
  linkedin: (p) => <LinkedInGlyph size={p.size} />,
  tinkerhub: (p) => <Sparkle size={p.size} strokeWidth={2} />,
  instagram: (p) => <SiInstagram size={p.size} color="currentColor" />,
  facebook: (p) => <SiFacebook size={p.size} color="currentColor" />,
};

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <ul className="relative flex flex-col gap-0.5 pl-1">
      <span
        aria-hidden
        className="absolute left-[15px] top-3 bottom-3 w-px bg-border"
      />
      {routes.map((route) => (
        <li key={route.to} className="relative">
          <NavLink
            to={route.to}
            end={route.end}
            onClick={onNavigate}
            className={({ isActive }) =>
              clsx(
                "group relative flex items-center gap-3 rounded-md px-2 py-2.5 text-[13.5px] transition-colors",
                isActive ? "text-text" : "text-text-muted hover:text-text",
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={clsx(
                    "relative z-10 grid h-[30px] w-[30px] place-items-center rounded-full border transition-colors",
                    isActive
                      ? "border-accent bg-accent/15 text-accent"
                      : "border-border bg-bg text-text-dim group-hover:text-text-muted",
                  )}
                >
                  <route.icon size={14} strokeWidth={2} />
                </span>
                <span className="font-sans font-medium">{route.label}</span>
              </>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export function NavRail() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop rail */}
      <header className="fixed inset-y-0 left-0 z-40 hidden w-(--rail-w) flex-col border-r border-border-soft bg-bg px-5 py-7 md:flex">
        <a href="/" className="mb-9 flex items-center gap-2 font-mono text-[15px] font-semibold text-text">
          <span className="text-accent">~/</span>muneeb-pt
        </a>

        <nav aria-label="Primary">
          <NavList />
        </nav>

        <div className="mt-auto flex flex-col gap-4 pt-8">
          <div className="flex items-center gap-2.5 text-[12.5px] text-text-muted">
            <span
              aria-hidden
              className="relative flex h-2 w-2 shrink-0 rounded-full bg-live"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-live opacity-60" />
            </span>
            {profile.status}
          </div>

          <div className="flex flex-wrap gap-2">
            {social.map((s) => {
              const renderIcon = socialIcons[s.handle];
              return (
                <a
                  key={s.handle}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="grid h-8 w-8 place-items-center rounded-md border border-border text-text-dim transition-colors hover:border-accent-line hover:text-accent"
                >
                  {renderIcon({ size: 14 })}
                </a>
              );
            })}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-2 rounded-md border border-border py-2.5 font-mono text-[12.5px] text-text transition-colors hover:border-accent-line hover:text-accent"
          >
            <Mail size={13} /> Say hello
          </a>
        </div>
      </header>

      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-border-soft bg-bg/90 px-5 backdrop-blur-md md:hidden">
        <a href="/" className="flex items-center gap-2 font-mono text-[15px] font-semibold text-text">
          <span className="text-accent">~/</span>muneeb-pt
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-9 w-9 place-items-center rounded-md border border-border text-text"
        >
          {open ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      {/* Mobile sheet */}
      {open && (
        <div className="fixed inset-0 top-16 z-30 flex flex-col bg-bg px-5 py-7 md:hidden">
          <nav aria-label="Primary">
            <NavList onNavigate={() => setOpen(false)} />
          </nav>
          <div className="mt-8 flex flex-wrap gap-2">
            {social.map((s) => {
              const renderIcon = socialIcons[s.handle];
              return (
                <a
                  key={s.handle}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-md border border-border text-text-dim"
                >
                  {renderIcon({ size: 15 })}
                </a>
              );
            })}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="mt-4 flex items-center justify-center gap-2 rounded-md border border-border py-3 font-mono text-[13px] text-text"
          >
            <Mail size={14} /> Say hello
          </a>
        </div>
      )}
    </>
  );
}

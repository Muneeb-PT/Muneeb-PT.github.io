export function Footer() {
  return (
    <footer className="mt-16 border-t border-border-soft px-6 py-8 md:px-12">
      <div className="mx-auto flex max-w-(--content-max) flex-col gap-2 font-mono text-[12px] text-text-dim sm:flex-row sm:items-center sm:justify-between">
        <span>built with react, vite &amp; tailwind — no CMS, just data files</span>
        <span>© {new Date().getFullYear()} Mohammed Muneeb PT</span>
      </div>
    </footer>
  );
}

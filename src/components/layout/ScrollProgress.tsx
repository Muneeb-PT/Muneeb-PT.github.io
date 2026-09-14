import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function ScrollProgress() {
  const [pct, setPct] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    function update() {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    }
    // New route starts at the top of the page (AppShell scrolls to
    // 0 on navigation), so this reflects that immediately rather
    // than showing the previous page's leftover progress.
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-50 h-[3px] bg-accent transition-[width] duration-150 ease-out md:left-(--rail-w)"
      style={{ width: `${pct}%` }}
    />
  );
}

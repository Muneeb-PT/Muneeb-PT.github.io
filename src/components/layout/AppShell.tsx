import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { NavRail } from "./NavRail";
import { ScrollProgress } from "./ScrollProgress";

export function AppShell() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <NavRail />
      <div className="min-h-screen pt-16 md:pl-(--rail-w) md:pt-0">
        <main id="main">
          <Outlet />
        </main>
      </div>
    </>
  );
}

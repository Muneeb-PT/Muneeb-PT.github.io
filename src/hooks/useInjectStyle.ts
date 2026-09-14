import { useEffect } from "react";

/**
 * Mounts a raw <style> block in <head> for as long as the calling
 * component is mounted, then removes it on unmount.
 *
 * The MSF and SKSSF pages are deliberately separate "sub-brand"
 * templates with their own type, palette and even body background —
 * closer to microsites than sections of the main portfolio. Rather
 * than fight that with CSS Modules and rewritten selectors, this
 * hook reproduces exactly how the original static pages behaved
 * (their own full-page stylesheet) while keeping it from leaking
 * into the rest of the single-page app once the user navigates away.
 */
export function useInjectStyle(css: string, id: string): void {
  useEffect(() => {
    const tag = document.createElement("style");
    tag.setAttribute("data-scoped-style", id);
    tag.textContent = css;
    document.head.appendChild(tag);
    return () => {
      document.head.removeChild(tag);
    };
  }, [css, id]);
}

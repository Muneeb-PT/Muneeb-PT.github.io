import { useEffect } from "react";

/**
 * Small, dependency-free interaction layer for pointer devices.
 * Touch users and people who prefer reduced motion keep the full layout
 * without the cursor-following effects.
 */
export function InteractiveEffects() {
  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    let frame = 0;
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;

    const onMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${pointerX}px`);
        root.style.setProperty("--pointer-y", `${pointerY}px`);
        frame = 0;
      });

      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(".project-card, .leadership-card")
        : null;

      document.querySelectorAll<HTMLElement>(".pointer-tilt").forEach((card) => {
        if (card !== target) card.classList.remove("pointer-tilt");
      });

      if (target) {
        const rect = target.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width;
        const y = (event.clientY - rect.top) / rect.height;
        target.style.setProperty("--tilt-x", `${(x - 0.5) * 3.2}deg`);
        target.style.setProperty("--tilt-y", `${(0.5 - y) * 3.2}deg`);
        target.style.setProperty("--spot-x", `${x * 100}%`);
        target.style.setProperty("--spot-y", `${y * 100}%`);
        target.classList.add("pointer-tilt");
      }
    };

    const onLeave = (event: PointerEvent) => {
      const target = event.target instanceof Element
        ? event.target.closest<HTMLElement>(".project-card, .leadership-card")
        : null;
      if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
      target.classList.remove("pointer-tilt");
      target.style.removeProperty("--tilt-x");
      target.style.removeProperty("--tilt-y");
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerout", onLeave, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerout", onLeave);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--pointer-x");
      root.style.removeProperty("--pointer-y");
    };
  }, []);

  return <div className="interactive-spotlight" aria-hidden="true" />;
}

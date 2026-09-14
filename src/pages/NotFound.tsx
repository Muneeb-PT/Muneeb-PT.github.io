import { Button } from "../components/ui/Primitives";
import { usePageMeta } from "../hooks/usePageMeta";

export default function NotFound() {
  usePageMeta("404 — Mohammed Muneeb PT");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="mb-3 font-mono text-[13px] text-text-dim">error</p>
      <h1 className="mb-4 font-mono text-[64px] leading-none text-accent">404</h1>
      <p className="mb-8 max-w-[46ch] text-[15px] text-text-muted">
        Nothing's here. The page moved, or the path was never a real route to begin with.
      </p>
      <Button href="/">Back to home</Button>
    </div>
  );
}

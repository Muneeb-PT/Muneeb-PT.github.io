import { useEffect, useState } from "react";

interface Line {
  cmd: string;
  out: string;
}

interface RenderedLine {
  cmd: string;
  out: string;
  cmdDone: boolean;
  outDone: boolean;
}

const CHAR_DELAY = 22;
const LINE_PAUSE = 260;

/**
 * Types out a short sequence of `$ command` / output pairs, one
 * character at a time, then stops. This is the one deliberate,
 * non-looping motion moment on the site — everything else only
 * animates in response to a hover or a click.
 */
export function useTerminalBoot(lines: readonly Line[], reduced: boolean) {
  const [rendered, setRendered] = useState<RenderedLine[]>(() =>
    reduced
      ? lines.map((l) => ({ cmd: l.cmd, out: l.out, cmdDone: true, outDone: true }))
      : [],
  );
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) return;

    let cancelled = false;
    const result: RenderedLine[] = lines.map((l) => ({
      cmd: l.cmd,
      out: l.out,
      cmdDone: false,
      outDone: false,
    }));
    setRendered(result.map((l) => ({ ...l, cmd: "", out: "" })));

    async function run() {
      for (let li = 0; li < lines.length; li++) {
        const line = lines[li];
        for (let i = 1; i <= line.cmd.length; i++) {
          if (cancelled) return;
          await sleep(CHAR_DELAY);
          setRendered((prev) => patch(prev, li, { cmd: line.cmd.slice(0, i) }));
        }
        setRendered((prev) => patch(prev, li, { cmdDone: true }));
        await sleep(LINE_PAUSE);
        for (let i = 1; i <= line.out.length; i++) {
          if (cancelled) return;
          await sleep(CHAR_DELAY * 0.6);
          setRendered((prev) => patch(prev, li, { out: line.out.slice(0, i) }));
        }
        setRendered((prev) => patch(prev, li, { outDone: true }));
        await sleep(LINE_PAUSE);
      }
      if (!cancelled) setDone(true);
    }

    run();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced]);

  return { rendered, done };
}

function patch(
  prev: RenderedLine[],
  index: number,
  partial: Partial<RenderedLine>,
): RenderedLine[] {
  const next = prev.slice();
  next[index] = { ...next[index], ...partial };
  return next;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

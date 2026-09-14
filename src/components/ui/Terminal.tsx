import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useTerminalBoot } from "../../hooks/useTerminalBoot";
import { terminalLines } from "../../data/profile";

export function Terminal() {
  const reduced = useReducedMotion();
  const { rendered, done } = useTerminalBoot(terminalLines, reduced);

  return (
    <div className="w-full rounded-lg border border-border bg-raised shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 border-b border-border-soft px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-border" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/70" />
        <span className="ml-2 font-mono text-[11.5px] text-text-dim">muneeb@kmea:~</span>
      </div>
      <div className="min-h-[168px] px-5 py-5 font-mono text-[13px] leading-[1.9]">
        {rendered.map((line, i) => (
          <div key={i}>
            <div>
              <span className="text-accent">$</span> <span className="text-text">{line.cmd}</span>
              {!line.cmdDone && <Caret />}
            </div>
            {line.cmdDone && (
              <div className="pl-3.5 text-text-muted">
                {line.out}
                {!line.outDone && <Caret />}
              </div>
            )}
          </div>
        ))}
        {done && (
          <div className="mt-1">
            <span className="text-accent">$</span> <Caret />
          </div>
        )}
      </div>
    </div>
  );
}

function Caret() {
  return (
    <span
      aria-hidden
      className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[1px] animate-[blink_1s_step-end_infinite] bg-text align-middle"
    />
  );
}

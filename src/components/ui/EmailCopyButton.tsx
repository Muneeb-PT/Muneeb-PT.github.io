import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

export function EmailCopyButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={`mailto:${email}`}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] font-medium text-[#17120a] transition-opacity hover:opacity-90"
      >
        <Mail size={14} /> Email me
      </a>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 font-mono text-[12px] text-text-muted transition-colors hover:border-accent-line hover:text-accent"
        aria-live="polite"
      >
        {copied ? <Check size={13} /> : <Copy size={13} />}
        {copied ? "Copied!" : "Copy email"}
      </button>
      <span className="sr-only" role="status">{copied ? "Email address copied to clipboard." : ""}</span>
    </div>
  );
}

"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CopyButton({
  value,
  labelCopy,
  labelCopied,
}: {
  value: string;
  labelCopy: string;
  labelCopied: string;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={copied ? labelCopied : labelCopy}
      title={copied ? labelCopied : labelCopy}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        } catch {
          // Clipboard access can be denied; failing silently is better than a crash.
        }
      }}
      className="rounded-md p-1.5 text-faint transition-colors hover:bg-surface-2 hover:text-fg"
    >
      {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
    </button>
  );
}

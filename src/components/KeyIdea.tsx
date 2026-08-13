import { Sparkles } from "lucide-react";

/**
 * The one sentence a learner should leave with, stated before the lesson starts.
 *
 * Every lesson opens with this. It gives someone skimming a reason to stay, and
 * gives someone studying a thread to hang the rest of the page on.
 */
export function KeyIdea({ children }: { children: React.ReactNode }) {
  return (
    <aside className="group relative my-7 overflow-hidden rounded-[var(--radius-card)] border border-violet/35 bg-gradient-to-br from-violet-soft to-transparent px-5 py-4">
      <span
        aria-hidden
        className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-violet to-emerald"
      />
      <p className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.1em] text-violet">
        <Sparkles size={13} className="transition-transform group-hover:rotate-12" />
        Key idea
      </p>
      <div className="mt-1.5 text-[16.5px] font-medium leading-relaxed text-fg [&>*:last-child]:mb-0">
        {children}
      </div>
    </aside>
  );
}

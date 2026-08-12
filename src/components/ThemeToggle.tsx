"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { t, type Lang } from "@/lib/i18n";
import { useMounted } from "@/lib/use-mounted";

/**
 * Explicit three-way control rather than a single toggle: the learner can pin
 * light or dark, or follow the operating system.
 */
export function ThemeToggle({ lang }: { lang: Lang }) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  const copy = t(lang).theme;

  const options = [
    { value: "light", label: copy.light, Icon: Sun },
    { value: "dark", label: copy.dark, Icon: Moon },
    { value: "system", label: copy.system, Icon: Monitor },
  ] as const;

  return (
    <div
      role="radiogroup"
      aria-label={copy.toggle}
      className="flex items-center gap-0.5 rounded-lg border border-line bg-surface-2 p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={[
              "rounded-md p-1.5 transition-colors",
              active
                ? "bg-surface text-violet shadow-sm"
                : "text-faint hover:text-fg",
            ].join(" ")}
          >
            <Icon size={15} />
          </button>
        );
      })}
    </div>
  );
}

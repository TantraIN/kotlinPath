import {
  Blocks,
  Boxes,
  Cloud,
  Compass,
  Cpu,
  Database,
  FlaskConical,
  Gauge,
  LayoutTemplate,
  Layers,
  Network,
  Plug,
  Rocket,
  Smartphone,
  Sparkles,
  Waves,
  type LucideIcon,
} from "lucide-react";

/**
 * Maps the icon name stored in `curriculum.ts` to a real component.
 *
 * The curriculum stays plain serialisable data — it has to cross the server /
 * client boundary and feed the search index — so it can only carry the name.
 */
const MAP: Record<string, LucideIcon> = {
  Compass,
  Blocks,
  Boxes,
  Waves,
  Smartphone,
  LayoutTemplate,
  Layers,
  Network,
  Database,
  Plug,
  Cpu,
  FlaskConical,
  Gauge,
  Cloud,
  Rocket,
  Sparkles,
};

export function PhaseIcon({
  name,
  size = 15,
  className,
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = MAP[name] ?? Layers;
  return <Icon size={size} className={className} strokeWidth={2.1} aria-hidden />;
}

"use client";

import { motion, useReducedMotion } from "motion/react";

export type PipelineStage = {
  /** Short label inside the box. */
  label: string;
  /** Smaller line under the label — the artefact or tool at this step. */
  sub?: string;
  accent?: "violet" | "emerald" | "amber" | "sky" | "rose";
};

const FILL: Record<string, string> = {
  violet: "var(--violet)",
  emerald: "var(--emerald)",
  amber: "var(--amber)",
  sky: "var(--sky)",
  rose: "var(--rose)",
};

/**
 * A left-to-right pipeline: source, transformation, artefact, runtime.
 *
 * Boxes fade in one after another and the connecting arrows draw themselves,
 * so the reader sees the direction of flow rather than having to infer it.
 */
export function PipelineDiagram({
  stages,
  title,
  description,
}: {
  stages: PipelineStage[];
  /** SVG accessible name. */
  title: string;
  /** Text alternative describing what the diagram shows. */
  description: string;
}) {
  const reduced = useReducedMotion();

  const boxW = 132;
  const boxH = 74;
  const gap = 46;
  const padX = 8;
  const width = padX * 2 + stages.length * boxW + (stages.length - 1) * gap;
  const height = 104;
  const top = (height - boxH) / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-labelledby="pipeline-title pipeline-desc"
      className="mx-auto block max-w-full"
      style={{ minWidth: Math.min(width, 560) }}
    >
      <title id="pipeline-title">{title}</title>
      <desc id="pipeline-desc">{description}</desc>

      {stages.map((stage, index) => {
        const x = padX + index * (boxW + gap);
        const colour = FILL[stage.accent ?? "violet"];
        const delay = reduced ? 0 : index * 0.16;

        return (
          <g key={stage.label}>
            {index > 0 && (
              <motion.path
                d={`M ${x - gap + 6} ${height / 2} L ${x - 10} ${height / 2}`}
                stroke="var(--border-strong)"
                strokeWidth="1.75"
                strokeLinecap="round"
                markerEnd="url(#pipeline-arrow)"
                initial={reduced ? undefined : { pathLength: 0, opacity: 0 }}
                whileInView={reduced ? undefined : { pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.32, delay: delay - 0.08 }}
              />
            )}

            <motion.g
              initial={reduced ? undefined : { opacity: 0, y: 8 }}
              whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <rect
                x={x}
                y={top}
                width={boxW}
                height={boxH}
                rx="11"
                fill={colour}
                fillOpacity="0.1"
                stroke={colour}
                strokeOpacity="0.4"
                strokeWidth="1.25"
              />
              <text
                x={x + boxW / 2}
                y={stage.sub ? top + 32 : top + 42}
                textAnchor="middle"
                fontSize="13"
                fontWeight="600"
                fill="var(--text)"
              >
                {stage.label}
              </text>
              {stage.sub && (
                <text
                  x={x + boxW / 2}
                  y={top + 50}
                  textAnchor="middle"
                  fontSize="10.5"
                  fill="var(--text-muted)"
                  fontFamily="var(--font-mono)"
                >
                  {stage.sub}
                </text>
              )}
            </motion.g>
          </g>
        );
      })}

      <defs>
        <marker
          id="pipeline-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="5"
          markerHeight="5"
          orient="auto-start-reverse"
        >
          <path d="M 0 1 L 9 5 L 0 9 z" fill="var(--border-strong)" />
        </marker>
      </defs>
    </svg>
  );
}

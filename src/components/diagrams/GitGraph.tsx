"use client";

import { motion, useReducedMotion } from "motion/react";

export type GitNode = {
  label: string;
  /** 0 = main line, 1 = the branch above it. */
  lane?: 0 | 1;
  /** Short caption under the node. */
  note?: string;
  /** Draws this node as a merge, joining the branch back into main. */
  merge?: boolean;
};

/**
 * A two-lane commit graph.
 *
 * Beginners meet branching as an abstraction; drawing it as two lines that
 * split and rejoin makes "a branch is just a pointer to a commit" visible.
 * The connecting edges draw themselves in order, so the reader sees history
 * being built left to right.
 */
export function GitGraph({
  nodes,
  title,
  description,
  mainLabel = "main",
  branchLabel = "feature",
}: {
  nodes: GitNode[];
  title: string;
  description: string;
  mainLabel?: string;
  branchLabel?: string;
}) {
  const reduced = useReducedMotion();

  const stepX = 96;
  // Wide enough that the first node clears the lane captions on the left.
  const padX = 128;
  const laneY = { 0: 96, 1: 40 } as const;
  const width = padX + nodes.length * stepX;
  const height = 148;
  const r = 9;

  const x = (index: number) => padX + index * stepX - stepX / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      role="img"
      aria-labelledby="git-title git-desc"
      className="mx-auto block max-w-full"
      style={{ minWidth: Math.min(width, 560) }}
    >
      <title id="git-title">{title}</title>
      <desc id="git-desc">{description}</desc>

      {/* Lane captions */}
      <text x={8} y={laneY[1] + 4} fontSize="11" fontWeight="600" fill="var(--emerald)">
        {branchLabel}
      </text>
      <text x={8} y={laneY[0] + 4} fontSize="11" fontWeight="600" fill="var(--violet)">
        {mainLabel}
      </text>

      {nodes.map((node, index) => {
        if (index === 0) return null;
        const prev = nodes[index - 1];
        const from = { x: x(index - 1), y: laneY[prev.lane ?? 0] };
        const to = { x: x(index), y: laneY[node.lane ?? 0] };
        const midX = (from.x + to.x) / 2;
        const d =
          from.y === to.y
            ? `M ${from.x + r} ${from.y} L ${to.x - r} ${to.y}`
            : `M ${from.x + r} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - r} ${to.y}`;

        return (
          <motion.path
            key={`edge-${index}`}
            d={d}
            fill="none"
            stroke={(node.lane ?? 0) === 1 ? "var(--emerald)" : "var(--violet)"}
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            initial={reduced ? undefined : { pathLength: 0 }}
            whileInView={reduced ? undefined : { pathLength: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.18 - 0.1 }}
          />
        );
      })}

      {/* A merge pulls the branch lane back down into main. */}
      {nodes.map((node, index) => {
        if (!node.merge || index === 0) return null;
        const source = nodes.findLastIndex((n, i) => i < index && (n.lane ?? 0) === 1);
        if (source < 0) return null;
        const from = { x: x(source), y: laneY[1] };
        const to = { x: x(index), y: laneY[0] };
        const midX = (from.x + to.x) / 2;
        return (
          <motion.path
            key={`merge-${index}`}
            d={`M ${from.x + r} ${from.y} C ${midX} ${from.y}, ${midX} ${to.y}, ${to.x - r} ${to.y}`}
            fill="none"
            stroke="var(--emerald)"
            strokeOpacity="0.5"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 4"
            initial={reduced ? undefined : { pathLength: 0 }}
            whileInView={reduced ? undefined : { pathLength: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.35, delay: reduced ? 0 : index * 0.18 }}
          />
        );
      })}

      {nodes.map((node, index) => {
        const lane = node.lane ?? 0;
        const cx = x(index);
        const cy = laneY[lane];
        const colour = lane === 1 ? "var(--emerald)" : "var(--violet)";

        return (
          <motion.g
            key={`node-${index}`}
            initial={reduced ? undefined : { opacity: 0, scale: 0.6 }}
            whileInView={reduced ? undefined : { opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.18, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <circle cx={cx} cy={cy} r={r} fill="var(--bg)" stroke={colour} strokeWidth="2.5" />
            {node.merge && <circle cx={cx} cy={cy} r={3.5} fill={colour} />}
            <text
              x={cx}
              y={cy - 17}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="var(--text)"
              fontFamily="var(--font-mono)"
            >
              {node.label}
            </text>
            {node.note && (
              <text x={cx} y={cy + 26} textAnchor="middle" fontSize="10" fill="var(--text-muted)">
                {node.note}
              </text>
            )}
          </motion.g>
        );
      })}
    </svg>
  );
}

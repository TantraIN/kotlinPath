/**
 * The brand mark: a path that branches — the "K" of Kotlin drawn as a route
 * with waypoints, echoing the name.
 */
export function Logo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kp-mark" x1="4" y1="4" x2="28" y2="28" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--violet)" />
          <stop offset="0.55" stopColor="var(--rose)" />
          <stop offset="1" stopColor="var(--amber)" />
        </linearGradient>
      </defs>

      <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#kp-mark)" opacity="0.14" />
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="9"
        stroke="url(#kp-mark)"
        strokeWidth="1.25"
        opacity="0.5"
      />

      {/* The vertical stem */}
      <path
        d="M11 8v16"
        stroke="url(#kp-mark)"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* The two branches */}
      <path
        d="M11 16.5 21 8M11 15.5 21 24"
        stroke="url(#kp-mark)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Waypoints */}
      <circle cx="21" cy="8" r="2.4" fill="var(--surface)" stroke="url(#kp-mark)" strokeWidth="1.8" />
      <circle cx="21" cy="24" r="2.4" fill="var(--surface)" stroke="url(#kp-mark)" strokeWidth="1.8" />
    </svg>
  );
}

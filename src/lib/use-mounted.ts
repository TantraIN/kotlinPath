"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

/**
 * True only after hydration.
 *
 * Components that read browser-only state — the resolved theme, `document.body`
 * for a portal — must render the server result on the first client pass or
 * React reports a hydration mismatch. `useSyncExternalStore` expresses that
 * without a state-setting effect, so nothing renders twice.
 */
export function useMounted(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

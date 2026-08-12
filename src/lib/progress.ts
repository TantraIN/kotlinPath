"use client";

import { useCallback, useSyncExternalStore } from "react";

import { ALL_LESSONS, CURRICULUM } from "@/content/curriculum";

/**
 * Which lessons the learner has marked complete.
 *
 * Entirely local to the browser: no account, no server, nothing leaves the
 * device. `localStorage` keyed by lesson path, storing the timestamp so a future
 * "recently finished" view needs no migration.
 *
 * Progress is deliberately language-agnostic — finishing a lesson in Hinglish
 * marks it complete in all three.
 */

const KEY = "kotlinpath-progress";

export type Progress = Record<string, number>;

const EMPTY: Progress = Object.freeze({});

let cache: Progress | null = null;
const listeners = new Set<() => void>();

function read(): Progress {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as unknown) : null;
    cache =
      parsed && typeof parsed === "object" && !Array.isArray(parsed) ? (parsed as Progress) : EMPTY;
  } catch {
    // Private browsing, quota, or corrupt JSON — progress is a nicety, not
    // something worth breaking the page over.
    cache = EMPTY;
  }
  return cache;
}

function write(next: Progress) {
  cache = next;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    // Ignore: the in-memory cache still keeps this session consistent.
  }
  for (const listener of listeners) listener();
}

function subscribe(listener: () => void) {
  listeners.add(listener);

  // Keep other tabs of the same course in step.
  const onStorage = (event: StorageEvent) => {
    if (event.key === KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** The whole progress map. Returns `{}` during server rendering. */
export function useProgress(): Progress {
  return useSyncExternalStore(
    subscribe,
    read,
    () => EMPTY,
  );
}

export function useIsComplete(path: string): boolean {
  const progress = useProgress();
  return Boolean(progress[path]);
}

export function useToggleLesson() {
  return useCallback((path: string) => {
    const current = read();
    const next = { ...current };
    if (next[path]) delete next[path];
    else next[path] = Date.now();
    write(next);
  }, []);
}

export function useResetProgress() {
  return useCallback(() => write({}), []);
}

/** Completed / total for one phase. */
export function usePhaseProgress(phaseSlug: string): { done: number; total: number } {
  const progress = useProgress();
  const phase = CURRICULUM.find((item) => item.slug === phaseSlug);
  if (!phase) return { done: 0, total: 0 };

  let done = 0;
  for (const lesson of phase.lessons) {
    if (progress[`${phaseSlug}/${lesson.slug}`]) done += 1;
  }
  return { done, total: phase.lessons.length };
}

/** Completed / total across the whole course. */
export function useCourseProgress(): { done: number; total: number; percent: number } {
  const progress = useProgress();
  const total = ALL_LESSONS.length;
  let done = 0;
  for (const ref of ALL_LESSONS) {
    if (progress[ref.path]) done += 1;
  }
  return { done, total, percent: total === 0 ? 0 : Math.round((done / total) * 100) };
}

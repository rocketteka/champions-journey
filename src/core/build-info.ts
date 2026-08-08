/** Build identity baked in at `vite build` time. */

export function appVersion(): string {
  return String(import.meta.env.VITE_APP_VERSION || '0.0.0');
}

export function buildTimeIso(): string {
  return String(import.meta.env.VITE_BUILD_TIME || '');
}

/** e.g. "v2.0.0 · 2026-08-08 09:26" */
export function appVersionLabel(): string {
  const v = appVersion();
  const iso = buildTimeIso();
  if (!iso) return `v${v}`;
  const day = iso.slice(0, 10);
  const hm = iso.slice(11, 16);
  return hm ? `v${v} · ${day} ${hm}` : `v${v} · ${day}`;
}

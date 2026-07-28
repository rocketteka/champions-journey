const THEME_KEY = 'cj_theme';

export function isDark(): boolean {
  return document.documentElement.dataset.theme === 'dark';
}

export function loadTheme(): void {
  try {
    if (localStorage.getItem(THEME_KEY) === 'dark') {
      document.documentElement.dataset.theme = 'dark';
    } else {
      delete document.documentElement.dataset.theme;
    }
  } catch {
    /* ignore */
  }
  applyThemeColor();
}

export function applyThemeColor(): void {
  const m = document.querySelector('meta[name="theme-color"]');
  if (m) m.setAttribute('content', isDark() ? '#131F24' : '#58CC02');
}

export function toggleTheme(): void {
  if (isDark()) {
    delete document.documentElement.dataset.theme;
    try { localStorage.setItem(THEME_KEY, 'light'); } catch { /* */ }
  } else {
    document.documentElement.dataset.theme = 'dark';
    try { localStorage.setItem(THEME_KEY, 'dark'); } catch { /* */ }
  }
  applyThemeColor();
}

export function setTheme(mode: 'light' | 'dark'): void {
  if (mode === 'dark') document.documentElement.dataset.theme = 'dark';
  else delete document.documentElement.dataset.theme;
  try { localStorage.setItem(THEME_KEY, mode); } catch { /* */ }
  applyThemeColor();
}

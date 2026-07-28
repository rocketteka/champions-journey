export const ROUTES: Record<string, string> = {
  home: '/app/home.html',
  journey: '/app/journey.html',
  feed: '/app/feed.html',
  profile: '/app/profile.html',
  crm: '/app/crm.html',
  cal: '/app/calendar.html',
  materials: '/app/materials.html',
  achievements: '/app/achievements.html',
  subs: '/app/subs.html',
  settings: '/app/settings.html',
  coach: '/app/coach.html',
  assess: '/app/assess.html',
};

export function routeUrl(key: string): string {
  return ROUTES[key] ?? ROUTES.home;
}

export function goTo(key: string): void {
  const url = routeUrl(key);
  window.location.href = url;
}

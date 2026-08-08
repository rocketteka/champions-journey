import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

const pages = {
  main: resolve(__dirname, 'index.html'),
  login: resolve(__dirname, 'pages/login.html'),
  auth: resolve(__dirname, 'pages/auth.html'),
  apply: resolve(__dirname, 'pages/apply.html'),
  home: resolve(__dirname, 'app/home.html'),
  journey: resolve(__dirname, 'app/journey.html'),
  feed: resolve(__dirname, 'app/feed.html'),
  profile: resolve(__dirname, 'app/profile.html'),
  crm: resolve(__dirname, 'app/crm.html'),
  calendar: resolve(__dirname, 'app/calendar.html'),
  materials: resolve(__dirname, 'app/materials.html'),
  achievements: resolve(__dirname, 'app/achievements.html'),
  subs: resolve(__dirname, 'app/subs.html'),
  settings: resolve(__dirname, 'app/settings.html'),
  coach: resolve(__dirname, 'app/coach.html'),
  assess: resolve(__dirname, 'app/assess.html'),
};

const pkg = JSON.parse(readFileSync(resolve(__dirname, 'package.json'), 'utf8')) as { version?: string };
const appVersion = pkg.version || '0.0.0';
const buildTime = new Date().toISOString();

export default defineConfig({
  resolve: {
    alias: { '@': resolve(__dirname, 'src') },
  },
  define: {
    'import.meta.env.VITE_APP_VERSION': JSON.stringify(appVersion),
    'import.meta.env.VITE_BUILD_TIME': JSON.stringify(buildTime),
  },
  build: {
    rollupOptions: { input: pages },
  },
});

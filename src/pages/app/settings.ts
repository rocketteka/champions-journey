import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'settings', screenClass: 'settings' });
initPwa();

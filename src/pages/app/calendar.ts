import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'cal', screenClass: 'cal' });
initPwa();

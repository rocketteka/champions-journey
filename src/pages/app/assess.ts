import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'assess', screenClass: 'assess' });
initPwa();

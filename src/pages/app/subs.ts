import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'subs', screenClass: 'subs' });
initPwa();

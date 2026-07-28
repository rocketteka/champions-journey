import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'achievements', screenClass: 'achievements' });
initPwa();

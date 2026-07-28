import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'materials', screenClass: 'materials' });
initPwa();

import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'crm', screenClass: 'crm' });
initPwa();

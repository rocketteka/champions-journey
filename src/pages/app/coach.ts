import { mountAppPage, initPwa } from '@/app/app-engine';

mountAppPage({ route: 'profile', sub: 'coach', screenClass: 'coach' });
initPwa();

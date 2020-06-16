import { lazyLoadView } from '../utils/index';

export const allRoutes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    component: () => lazyLoadView(import('../components/RuleMain.vue')),
    name: 'Rule of Thumb'
  },
  {
    path: '/past',
    name: 'Past Trials'
  },
  {
    path: '/how',
    name: 'How it works'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => lazyLoadView(import('../components/Login.vue'))
  },
]
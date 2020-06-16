import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase';
import { allRoutes } from './routes';
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    ...allRoutes
  ]
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser

  if (requiresAuth && !currentUser) {
      next('/login')
  } else if (requiresAuth && currentUser) {
      next()
  } else {
      next()
  }
})

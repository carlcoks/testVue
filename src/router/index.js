import Vue from 'vue'
import Router from 'vue-router'

import IndexPage from '../pages/index';
import FavoritesPage from '../pages/favorites';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/favorites',
      component: FavoritesPage
    },
  ]
})

export default router;

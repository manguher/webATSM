import Router from 'vue-router';
import Vue from 'vue';

import Home from './components/StoryHome'
import Calendar from './components/StoryCalendar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/calendar',
      name: 'about',
      component: Calendar,
    },
  ],
});
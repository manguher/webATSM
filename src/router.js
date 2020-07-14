import Router from 'vue-router';
import Vue from 'vue';
import Calendar from './components/StoryCalendar';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'calendar',
      component: Calendar,
    }
  ],
});
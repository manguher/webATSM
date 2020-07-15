import Vue from 'vue'
import App from './App.vue'
import router from './router';
import StoryblokVue from 'storyblok-vue';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)


Vue.config.productionTip = false
Vue.use(StoryblokVue);
 
new Vue({
  router,
  render: function (h) { return h(App) },
}).$mount('#app')

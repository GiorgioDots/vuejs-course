import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes.js';
import store from './store/store.js';
import VueResource from 'vue-resource';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = "https://vuejs-stock-trader-e6556.firebaseio.com/";

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
})

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

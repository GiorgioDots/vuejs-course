import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = "https://arcane-icon-246213.firebaseio.com/"//manca data.json alla fine dell'url, è stata aggiunta come "resource" in App.vue

/*REQUESTS INTERCEPTOR*/
/*Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if (request.method == 'POST') {
    request.method = 'PUT';
  }
  next(response => {
    response.json = () => { return { messages: response.body } }
  });
});*/

new Vue({
  el: '#app',
  render: h => h(App)
})

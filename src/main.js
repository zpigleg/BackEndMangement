// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store'
import ElementUI from 'element-ui';

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(ElementUI);



new Vue({
  el: '#app',
  router,
  store,
  render: h =>{
    return h(App)
 }
});

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HomeStore from './data/HomeStore'
import PubSub from 'pubsub-js';
import infiniteScroll from 'vue-infinite-scroll'
import 'whatwg-fetch'

Vue.use(infiniteScroll)

require('es6-promise').polyfill()

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  HomeStore.page = 1;
  window.scrollTop = 0;
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

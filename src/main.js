import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import HomeStore from './data/HomeStore'

require('es6-promise').polyfill()

Vue.config.productionTip = false

const $window = $(window)

router.beforeEach((to, from, next) => {
  HomeStore.page = 1;
  $window.scrollTop(0)
  next();
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'

// const app = createApp(App);

// app.mount('#app').use(router);

import Vue from 'vue'
import App from './App.vue'
import router from './router/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
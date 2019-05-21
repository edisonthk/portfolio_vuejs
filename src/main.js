import Vue from 'vue'
import App from './App.vue'

import router from './plugins/vue-router';

Vue.config.productionTip = false

new Vue({

  /**
   * The router.
   */
  router,

  render: h => h(App),
}).$mount('#app')

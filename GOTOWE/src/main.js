// Core
import Vue from 'vue'

// AT-UI
import AtComponents from 'at-ui'
import 'at-ui-style'

// State
import VueState from './plugins/state'

// Main Component
import App from './App.vue'

Vue.use(VueState, state)
Vue.use(AtComponents)

// Router
import router from './router'

// State
import state from './state'



Vue.config.productionTip = false

new Vue({
  data: state,
  router,
  render: h => h(App)
}).$mount('#app')

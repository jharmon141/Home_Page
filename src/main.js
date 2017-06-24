// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VeeValidate from 'vee-validate'
// or import all icons if you don't care about bundle size
import 'vue-awesome/icons'
import VueSweetAlert from 'vue-sweetalert'

/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueSweetAlert)

Vue.component('icon', Icon)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

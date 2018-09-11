// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import moduleA from './module/moduleA'
import moduleB from './module/moduleB'
import moduleTodo from './module/moduleTodo'
import counter from './module/counter'
Vue.config.productionTip = false
Vue.prototype.$http = axios
Vuex.Store.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'lidanqiu'
  },
  modules: {
    introduce: moduleB,
    calculator: moduleA,
    todo: moduleTodo,
    counter: counter

  }

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

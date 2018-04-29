import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/router/Counter/index.vue'
import Introduce from '@/router/Introduce/index.vue'
import Todo from '@/router/Todo/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    }

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Counter from '@/router/Counter/index.vue'
import Introduce from '@/router/Introduce/index.vue'
import Todo from '@/router/Todo/index.vue'
import Table from '@/router/Table/index.vue'
import UserList from '@/router/User/UserList/index.vue'
import UserDetail from '@/router/User/UserDetail/index.vue'
import UserChild from '@/router/User/UserChild/index.vue'
import Jishuiqi from '@/router/Jishuqi/index'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/user',
      name: 'user',
      component: UserList
    },
    {
      path: '/jishuqi',
      component: Jishuiqi
    },
    {
      path: '/user/:id',
      name: 'user_detail',
      component: UserDetail,
      props: true
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce,
      children: [
        {
          path: 'child',
          component: UserChild
        }
      ]
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    }

  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router

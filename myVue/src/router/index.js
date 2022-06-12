import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      // component: HelloWorld
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home/index.vue'),
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('../views//Home/index/index.vue')
        },
        {
          path: '/stats',
          name: 'stats',
          component: () => import('../views//Home/index/index.vue')
        },
        {
          path: '/wms',
          name: 'wms',
          component: () => import('../views//Home/index/index.vue'),
          children: [
            {
              path: '/wms/list',
              name: 'wmslist',
              component: () => import('../views//Home/index/index.vue')
            },
          ]
        },
      ]
    }
  ]
})

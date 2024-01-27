import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory('/'),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Layout/LoginLayout.vue'),
      // meta: { breadcrumb: '' },
      children: [
        {
          path: '',
          // name: 'home',
          component: () => import('@/views/UserLogin.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/UserRegister.vue')
        }
      ]
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: () => import('@/views/FunctionLayout.vue')
    //   // meta: { breadcrumb: '' },
    // },
    {
      path: '/',
      // name: 'home',
      component: () => import('@/views/Layout/MainLayout.vue'),
      meta: { breadcrumb: '' },
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeIndex.vue')
        }
      ]
    }

    // {
    //   path: '/',
    //   // name: 'home',
    //   component: () => import('@/views/MainLayout.vue'),
    //   meta: { breadcrumb: '' },
    //   children: [
    //     {
    //       path: '',
    //       name: 'home',
    //       component: () => import('@/views/HomeIndex.vue')
    //     }
    //   ]
    // }
  ]
})

export default router

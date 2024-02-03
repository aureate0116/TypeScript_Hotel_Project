import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory('/'),
  routes: [
    {
      path: '/login',
      name: '',
      component: () => import('@/views/Layout/LoginLayout.vue'),
      // meta: { breadcrumb: '' },
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('@/views/Visiter/UserLogin.vue')
        },
        {
          path: '/register',
          name: 'register',
          component: () => import('@/views/Visiter/UserRegister.vue')
        }
      ]
    },
   
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
        },

        {
          path: '/userCenter',
          name: 'userCenter',
          component: () => import('@/views/Layout/UserLayout.vue')
          // meta: { breadcrumb: '' },
          // children: [
          //   {
          //     path: '',
          //     name: 'userCenter',
          //     component: () => import('@/views/Visiter/UserLogin.vue')
          //   },
          //   {
          //     path: '/register',
          //     name: 'register',
          //     component: () => import('@/views/Visiter/UserRegister.vue')
          //   }
          // ]
        }
      ]
    }

    // {
    //   path: '/userCenter',
    //   name: '',
    //   component: () => import('@/views/Layout/userLayout.vue'),
    //   // meta: { breadcrumb: '' },
    //   children: [
    //     {
    //       path: '',
    //       name: 'userCenter',
    //       component: () => import('@/views/Visiter/UserLogin.vue')
    //     },
    //     {
    //       path: '/register',
    //       name: 'register',
    //       component: () => import('@/views/Visiter/UserRegister.vue')
    //     }
    //   ]
    // }

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

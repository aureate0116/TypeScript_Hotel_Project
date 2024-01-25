import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: () => import('@/views/MainLayout.vue'),
      meta: { breadcrumb: '' },
      children:[
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeIndex.vue')
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   component: () => import('@/views/aboutUs/AboutIndex.vue')
        // },
        //  {
        //   path: '/solutions',
        //   name: 'solutions',
        //   // component: () => import('@/views/aboutUs/AboutIndex.vue')
        //   children:[
        //     //  {
        //     //   path: 'solution-enms',
        //     //   name: 'solutionEnMS',
        //     //   component: () => import('@/views/solutions/SolutionEnMS.vue')
        //     // },
        //     // {
        //     //   path: 'solution-cfm',
        //     //   name: 'solutionCFM',
        //     //   component: () => import('@/views/solutions/SolutionCFM.vue')
        //     // },
        //     //  {
        //     //   path: 'solution-ghg',
        //     //   name: 'solutionGHG',
        //     //   component: () => import('@/views/solutions/SolutionGHG.vue')
        //     // },
        //   ]
        // },
      ]
    },
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const tab1Route = '@/views/Tab1.vue';
const tab2Route = '@/views/Tab2.vue';
const tab3Route = '@/views/Tab3.vue';

// var as = ["max","jack","sam"];  
// var s = as.sort(func);  

// function func(a, b) {  
//   return 0.5 - Math.random();
// }  

// console.log(s);

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'tab1'
      },
      {
        path: 'tab1',
        // component: () => import('@/views/Tab1.vue')
        component: () => import('@/views/Tab1.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

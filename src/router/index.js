import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    children: [
      {
        path: "",
        name: "index",
        component: () => import('@/views/IndexView.vue'),
      },
      {
        path: ':slug',
        name: 'project',
        component: () => import('@/views/ProjectView.vue'),
      }
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
  }
];

const router = createRouter({
  //history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes
});


export default router;

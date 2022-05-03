import { createRouter, createWebHistory } from 'vue-router'

import Home from "./views/Home.vue"
import NotFound from "./views/404.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
];

export default createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash }
    }
  },
  routes,
})

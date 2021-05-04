import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/:title',
    name: 'Detail',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Detail.vue'),
  },
  {
    path: '/result/:keyword',
    name: 'Result',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/SearchResult.vue'),
  },
  {
    path: '/visited',
    name: 'Visited',
    // component: Visited,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Visited.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

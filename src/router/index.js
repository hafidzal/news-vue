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
    path: 'title',
    name: 'title',
    props: true,
    component: () => import(/* webpackChunkName: "title" */ '../views/Detail.vue'),
  },
  {
    path: '/result/:keyword',
    name: 'result',
    props: true,
    component: () => import(/* webpackChunkName: "result" */ '../views/SearchResult.vue'),
  },
  {
    path: '/filter/:filterkey',
    name: 'filter',
    props: true,
    component: () => import(/* webpackChunkName: "filter" */ '../views/FilterResult.vue'),
  },
  {
    path: '/wrong-api',
    name: 'wrong-api',
    props: true,
    component: () => import(/* webpackChunkName: "filter" */ '../views/WrongApi.vue'),
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import(/* webpackChunkName: "filter" */ '../views/NotFound.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

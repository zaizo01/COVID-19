import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45d0c9fe = () => interopDefault(import('..\\pages\\countries.vue' /* webpackChunkName: "pages_countries" */))
const _52e335cc = () => interopDefault(import('..\\pages\\Globalstatistics.vue' /* webpackChunkName: "pages_Globalstatistics" */))
const _3f6cbdf9 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages_news" */))
const _6eb7421c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/countries",
    component: _45d0c9fe,
    name: "countries"
  }, {
    path: "/Globalstatistics",
    component: _52e335cc,
    name: "Globalstatistics"
  }, {
    path: "/news",
    component: _3f6cbdf9,
    name: "news"
  }, {
    path: "/",
    component: _6eb7421c,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

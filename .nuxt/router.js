import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _626d281a = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _0e4bef84 = () => interopDefault(import('../pages/link.vue' /* webpackChunkName: "pages/link" */))
const _6d9cb9ca = () => interopDefault(import('../pages/work.vue' /* webpackChunkName: "pages/work" */))
const _22fd7290 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _626d281a,
    name: "about"
  }, {
    path: "/link",
    component: _0e4bef84,
    name: "link"
  }, {
    path: "/work",
    component: _6d9cb9ca,
    name: "work"
  }, {
    path: "/",
    component: _22fd7290,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}

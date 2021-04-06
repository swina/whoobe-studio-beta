import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Dashboard from '@/views/Dashboard.vue'
import Components from '@/views/Components.vue'
import Moka from '@/views/Moka.vue'
import Logout from '@/views/Logout.vue'
import Preview from '@/components/moka/moka.window.preview'
import Desktop from '@/views/Desktop'
import ImageEditor from '@/components/media/editor/whoobe.filerobot'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  { 
    path: '/desktop',
    name: 'Desktop',
    component: Desktop
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/components',
    name: 'Components',
    component: Components
  },
  {
    path: '/moka',
    name: 'Moka',
    component: Moka
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/imageeditor',
    name: 'Image Editor',
    component: ImageEditor
  },
  {
    path: '/component/:path',
    name: 'Component',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "whoobe" */ '../' + path)
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

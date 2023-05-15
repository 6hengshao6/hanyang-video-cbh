import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import AmapLayout from '@/layout/AmapLayout'
import ArcgisLayout from '@/layout/ArcgisLayout'
import BasicLayout from '@/layout/BasicLayout'

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRouterMap = [
  {
    path: '/',
    component: ArcgisLayout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'ArcgisHome',
        component: () => import('@/views/home/index'),
        meta: { title: '综合态势' }
      }
    ]
  },
  {
    path: '/amap',
    component: AmapLayout,
    children: [
      {
        path: 'home',
        name: 'AmapHome',
        component: () => import('@/views/home/index'),
        meta: { title: '综合态势' }
      }
    ]
  },
  {
    path: '/basic',
    component: BasicLayout,
    children: [
      {
        path: 'scene',
        name: 'Scene',
        component: () => import('@/views/scene/index'),
        meta: { title: '专题场景' }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录' }
  },
  {
    path: '/error/404',
    name: 'Page404',
    component: () => import('@/views/error/404'),
    meta: { title: '404', hidden: true }
  },
  // 404 必须放在最后
  { path: '*', redirect: '/error/404', hidden: true }
]

export const asyncRouterMap = []

export const viewsList = []

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    routes: constantRouterMap,
    linkActiveClass: 'is-active',
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {
          x: 0,
          y: 0
        }
      }
    }
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

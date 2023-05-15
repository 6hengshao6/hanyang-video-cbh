import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['Login', 'Page404', 'ArcGIS'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)
  store.commit('app/SET_PAGETITLE', to.meta.title)
  store.commit('app/SET_MENUCODE', to.name)

  // 获取token
  const token = sessionStorage.getItem('token')
  const username = sessionStorage.getItem('username')
  if (token && username) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      if (username) {
        await store.dispatch('common/GetUserInfo', username)
        await store.dispatch('common/GetStreetList')
        await store.dispatch('common/GetSceneList')
      }
      next()
    }
  } else {
    // has no token
    if (whiteList.indexOf(to.name) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})

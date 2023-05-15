import axios from 'axios'
import { Notification } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { resetRouter } from '@/router/index'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout 使用代理后，此设置项无效
  headers: {
    // IE模式下取消请求缓存
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache'
  }
})

// const pending = {}
// const CancelToken = axios.CancelToken
// const removePending = (key, isRequest = false) => {
//   if (pending[key] && isRequest) {
//     pending[key]('取消重复请求')
//   }
//   delete pending[key]
// }
// const getRequestIdentify = (config, isReuest = false) => {
//   let url = config.url
//   if (isReuest) {
//     url = config.baseURL + config.url.substring(1, config.url.length)
//   }
//   return config.method === 'get' ? encodeURIComponent(url + JSON.stringify(config.params)) : encodeURIComponent(config.url + JSON.stringify(config.data))
// }

const startLoading = () => {
  store.dispatch('app/setLoadingNum', 1)
}
const endLoading = () => {
  store.dispatch('app/setLoadingNum', -1)
}

// request interceptor
service.interceptors.request.use(
  (config) => {
    config.url = encodeURI(config.url) // 解决IE下get方法url参数中文乱码问题
    // do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token--['Admin-Token']为自定义key 请根据实际情况自行修改
      config.headers['Admin-Token'] = getToken()
    }

    // 拦截重复请求(即当前正在进行的相同请求)
    // const requestData = getRequestIdentify(config, true)
    // removePending(requestData, true)
    // config.cancelToken = new CancelToken((c) => {
    //   pending[requestData] = c
    // })

    startLoading()
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  (response) => {
    // debugger
    // 把已经完成的请求从 pending 中移除
    // const requestData = getRequestIdentify(response.config)
    // removePending(requestData)
    /**
     * 下面的注释为通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    const res = response.data
    endLoading()
    if (response.config.url === '/sockjs-node/info') {
      return res
    }

    if (res.status === 200 || res.code === 200 || res.code === '00') {
      return res
    } else if (res.code === 401) {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('name')
      resetRouter

      this.$router.push({ path: '/login' })
    } else {
      const blackList = [
        '/api/login',
        '/api/admin/user/front/menus',
        '/api/admin/user/front/info',
        '/api/admin/user/front/menu/all',
        '/api/admin/element/list',
        '/api/admin/menu/tree',
        '/api/admin/group/tree',
        '/api/admin/groupType/all',
        '/api/auth/code/get'
      ]
      const blackList2 = ['/dataOperate/', '/excel/']
      if (blackList.includes(response.config.url) || blackList2.some((item) => response.config.url.includes(item))) {
        return res
      } else {
        Notification({
          title: '错误',
          message: res.msg,
          type: 'error'
        })
        return Promise.reject(new Error(res.message || 'Error'))
      }
    }
  },
  (error) => {
    endLoading()
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = '错误请求'
          break
        case 401:
          error.message = '未授权，请重新登录'
          break
        case 403:
          error.message = '拒绝访问'
          break
        case 404:
          error.message = '请求错误,未找到该资源'
          break
        case 405:
          error.message = '请求方法未允许'
          break
        case 408:
          error.message = '请求超时'
          break
        case 500:
          error.message = '服务器端出错'
          break
        case 501:
          error.message = '网络未实现'
          break
        case 502:
          error.message = '网络错误'
          break
        case 503:
          error.message = '服务不可用'
          break
        case 504:
          error.message = '网络超时'
          break
        case 505:
          error.message = 'http版本不支持该请求'
          break
        default:
          error.message = `未知错误${error.response.status}`
      }
    } else {
      error.message = '连接到服务器失败'
    }
    Notification({
      title: '错误',
      message: error.message,
      type: 'error'
    })
    return Promise.reject(error)
  }
)

export default service

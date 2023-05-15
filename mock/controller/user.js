module.exports = [
  {
    url: '/login',
    type: 'post',
    response(config) {
      const { username, password } = config.body
      if (username === 'admin' && password === '123456') {
        return {
          code: '00',
          message: '登录成功',
          data: 'nichengjing19910912'
        }
      } else {
        return {
          code: '01',
          message: '用户名或密码错误'
        }
      }
    }
  },
  {
    url: '/user/info',
    type: 'get',
    response(config) {
      const { token } = config.query
      if (token) {
        return {
          code: '00',
          message: 'success',
          data: {
            id: 1,
            name: '管理员',
            avatar: 'https://i.gtimg.cn/club/item/face/img/2/15922_100.gif'
          }
        }
      } else {
        return {
          code: '01',
          message: 'token不能为空'
        }
      }
    }
  },
  {
    url: '/logout',
    type: 'post',
    response() {
      return {
        code: '00',
        message: 'success'
      }
    }
  }
]

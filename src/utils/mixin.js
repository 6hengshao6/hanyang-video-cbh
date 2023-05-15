/*
 * @Author: your name
 * @Date: 2020-12-15 18:00:50
 * @LastEditTime: 2020-12-16 09:21:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \wru-portal\src\utils\mixin.js
 */
const mixin = {
  data() {
    return {
      accessToken: sessionStorage.getItem('token')
    }
  },
  computed: {
    menuCode() {
      return this.$store.state.app.menuCode
    },
    pageTitle() {
      return this.$store.state.app.pageTitle
    },
    isAdmin() {
      const ids = []
      const roles = this.$store.getters.userInfo?.roles || []
      roles?.forEach((item) => {
        ids.push(item.id)
      })
      return ids.includes(1)
    }
  },
  methods: {
    // 返回上一页
    backPage() {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.go(-1)
      }
    },

    // 过滤搜索输入框中的%
    filterPercentChar(e) {
      e.target.value = e.target.value.replace(/%/g, '')
    }
  }
}
export default mixin

const state = {
  device: 'desktop',
  language: 'zh',
  loadingNum: 0, // 全局loading请求数量
  menuCode: '',
  pageTitle: ''
}

const mutations = {
  SET_LOADINGNUM: (state, num) => {
    state.loadingNum += num
  },
  SET_MENUCODE: (state, menuCode) => {
    state.menuCode = menuCode
  },
  SET_PAGETITLE: (state, pageTitle) => {
    state.pageTitle = pageTitle
  }
}

const actions = {
  setLoadingNum({ commit }, num) {
    commit('SET_LOADINGNUM', num)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

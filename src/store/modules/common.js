/**
 * 共享公共数据
 */
import { getUserInfo, getStreetsInfo } from '@/api/common'
import { getSceneList } from '@/api/home/scene'

const state = {
  // 点击地图上摄像头图标后，将点位信息传递给对话框
  markerInfo: {},
  // 当前选中街道
  streetId: undefined,
  // 选中的节点
  selectedNode: {},
  // 树状目录数据 不包括视频节点的
  regionTree: {},
  // 列表目录数据 不包括视频节点 用于回显区域名称
  regionList: [],
  // 用户信息
  userInfo: {},
  // 街道列表
  streetList: [],
  // 场景列表
  sceneList: []
}

const mutations = {
  SET_MARKERINFO: (state, markerInfo) => {
    state.markerInfo = markerInfo
  },
  SET_STREETID: (state, streetId) => {
    state.streetId = streetId
  },
  SET_SELECTEDNODE: (state, selectedNode) => {
    state.selectedNode = selectedNode
  },
  SET_REGIONTREE: (state, regionTree) => {
    state.regionTree = regionTree
  },
  SET_REGIONLIST: (state, regionList) => {
    state.regionList = regionList
  },
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_STREETLIST: (state, streetList) => {
    state.streetList = streetList
  },
  SET_SCENELIST: (state, sceneList) => {
    state.sceneList = sceneList
  }
}

const actions = {
  GetUserInfo({ commit }, username) {
    return new Promise((resolve, reject) => {
      getUserInfo({ username })
        .then((res) => {
          commit('SET_USERINFO', res.data || {})
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  GetStreetList({ commit }) {
    return new Promise((resolve, reject) => {
      getStreetsInfo({})
        .then((res) => {
          const streetList = res.data?.filter((item) => item.id !== 9999)
          commit('SET_STREETLIST', streetList || [])
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  GetSceneList({ commit }) {
    return new Promise((resolve, reject) => {
      getSceneList({ page: 1, count: 1000 })
        .then((res) => {
          commit('SET_SCENELIST', res.data?.records || [])
          resolve()
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

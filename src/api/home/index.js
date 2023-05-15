import request from '@/utils/request'

const baseApi = process.env.VUE_APP_BASE_API

// 登陆
export function login(obj) {
  return request({
    url: baseApi + '/login',
    method: 'post',
    data: obj
  })
}

// 退出登陆
export function logout(obj) {
  return request({
    url: baseApi + '/logout',
    method: 'post',
    data: obj
  })
}

// GIS标记列表查询
export function getGisMarkerList(obj) {
  return request({
    url: baseApi + '/gisMarker/list',
    method: 'post',
    data: obj
  })
}

// 区域列表
export function getRegionList(obj) {
  return request({
    url: baseApi + '/region/list',
    method: 'post',
    data: obj
  })
}

// 点击区域后，获取视频节点列表
export function getStreamnodeList(obj) {
  return request({
    url: baseApi + '/streamnode/list',
    method: 'post',
    data: obj
  })
}

// 云台控制
export function ptzControl(obj) {
  return request({
    url: baseApi + '/streamnode/ptzControl',
    method: 'post',
    data: obj
  })
}

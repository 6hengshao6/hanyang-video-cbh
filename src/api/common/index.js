import request from '@/utils/request'

const shytApi = process.env.VUE_APP_SHYT_API

// 生成视频调阅和登陆日志
export function saveLog(data) {
  return request({
    url: shytApi + '/operationlog/save',
    method: 'post',
    data
  })
}

// 根据用户名获取用户信息
export function getUserInfo(data) {
  return request({
    url: shytApi + '/user/getInfo',
    method: 'post',
    data
  })
}

// 街道数据字典
export function getStreetsInfo(data) {
  return request({
    url: shytApi + '/department/list',
    method: 'post',
    data
  })
}

// 各街道视频数统计
export function getStreetsStatistics(data) {
  return request({
    url: shytApi + '/department/streetStatistics',
    method: 'post',
    data
  })
}

// 总接入量统计
export function getAccessStatistics(data) {
  return request({
    url: shytApi + '/streamnode/accessQuantityStatistics',
    method: 'post',
    data
  })
}

// 调用统计
export function getCallStatistics(data) {
  return request({
    url: shytApi + '/operationlog/callStatistics',
    method: 'post',
    data
  })
}

// 各区域在线率查询
export function getRegionsStatistics(data) {
  return request({
    url: shytApi + '/streamnode/statusStatistics',
    method: 'post',
    data
  })
}

import request from '@/utils/request'

const shytApi = process.env.VUE_APP_SHYT_API

// 查询场景
export function getSceneList(data) {
  return request({
    url: shytApi + '/label/page',
    method: 'post',
    data
  })
}

// 添加场景
export function addScene(data) {
  return request({
    url: shytApi + '/label/save',
    method: 'post',
    data
  })
}

// 编辑场景
export function updateScene(data) {
  return request({
    url: shytApi + '/label/update',
    method: 'post',
    data
  })
}

// 删除场景
export function delScene(data) {
  return request({
    url: shytApi + '/label/delete',
    method: 'post',
    data
  })
}

// 通过设备id查询关联的场景 或 通过场景id查询关联的摄像机
export function sceneAndCamera(data) {
  return request({
    url: shytApi + '/userLabel/getLabelsMapping',
    method: 'post',
    data: Object.assign(data || {}, { username: 'admin' })
  })
}

// 为摄像机关联场景
export function linkScene(data) {
  return request({
    url: shytApi + '/userLabel/setLabels',
    method: 'post',
    data: Object.assign(data || {}, { username: 'admin', type: '2' })
  })
}

// 为场景关联摄像机
export function linkCamera(data) {
  return request({
    url: shytApi + '/userLabel/setLabels',
    method: 'post',
    data: Object.assign(data || {}, { username: 'admin', type: '1' })
  })
}

// 查询场景和当前用户下关联的摄像机
const userName = sessionStorage.getItem('username')
export function getSceneCameras(data) {
  return request({
    url: shytApi + '/streamnode/labelList',
    method: 'post',
    data: Object.assign(data || {}, { userName })
  })
}

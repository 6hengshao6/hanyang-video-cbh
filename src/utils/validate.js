/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/* 密码由字母、数字、符号组成，长度为6位以上 */
export function isPassWord(str) {
  return /^[0-9A-Za-z\W]{6,}$/.test(str)
}

/**
 * 上面是正则验证返回true或false  用is开头
 * ==============================================================================================
 * 下面是表单验证规则  用valid开头
 */

/* 由字母、数字、下划线组成 */
export function validCode(rule, value, callback) {
  if (value) {
    const reg = /^[0-9a-zA-Z_]{1,}$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('由字母、数字、下划线组成'))
    }
  } else {
    if (rule.required) {
      // 必填
      return callback(new Error('请输入必填项'))
    } else {
      // 非必填
      callback()
    }
  }
}

/* 由正整数组成 */
export function validInt(rule, value, callback) {
  if (value) {
    const reg = /^[1-9]\d*|0$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('由正整数组成'))
    }
  } else {
    if (rule.required) {
      // 必填
      return callback(new Error('请输入必填项'))
    } else {
      // 非必填
      callback()
    }
  }
}

/* 由浮点数组成 */
export function validFloat(rule, value, callback) {
  if (value) {
    const reg = /^(-?\d+)(\.\d+)?$/
    if (reg.test(value)) {
      callback()
    } else {
      return callback(new Error('输入整数或小数'))
    }
  } else {
    if (rule.required) {
      // 必填
      return callback(new Error('请输入必填项'))
    } else {
      // 非必填
      callback()
    }
  }
}

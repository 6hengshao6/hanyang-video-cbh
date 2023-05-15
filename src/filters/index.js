// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'

/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize(time, label) {
  if (time === 1) {
    return time + label
  }
  return time + label + 's'
}

/**
 * @param {number} time
 */
export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time)
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute')
  } else if (between < 86400) {
    return pluralize(~~(between / 3600), ' hour')
  } else {
    return pluralize(~~(between / 86400), ' day')
  }
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
  const si = [
    { value: 1e18, symbol: 'E' },
    { value: 1e15, symbol: 'P' },
    { value: 1e12, symbol: 'T' },
    { value: 1e9, symbol: 'G' },
    { value: 1e6, symbol: 'M' },
    { value: 1e3, symbol: 'k' }
  ]
  for (let i = 0; i < si.length; i++) {
    if (num >= si[i].value) {
      return (num / si[i].value).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
    }
  }
  return num.toString()
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * 分类层级
 * @param {Number} level
 */
export function levelFilter(level) {
  const levelMap = {
    1: 'info',
    2: 'success',
    3: 'warning',
    4: 'danger'
  }
  if (level > 4) {
    return 'info'
  } else {
    return levelMap[level]
  }
}

/**
 * 发布状态颜色
 * @param {String} status
 */
export function publishStatusColorFilter(status) {
  const statusMap = {
    '0': 'info',
    '1': 'success',
    '2': 'warning',
    '3': 'danger'
  }
  return statusMap[status]
}

/**
 * 性别
 * @param {String} sex
 */
export function sexFilter(sex) {
  const sexMap = {
    '0': '未知',
    '1': '男',
    '2': '女'
  }
  return sexMap[sex]
}

/**
 * 是否
 * @param {String} value
 */
export function isFilter(value) {
  const isMap = {
    '0': '否',
    '1': '是'
  }
  return isMap[value]
}

/**
 * 处理状态
 * @param {String} value
 */
export function statusFilter(value) {
  const statusMap = {
    '-1': '未处理',
    '1': '核实中',
    '2': '已核实',
    '3': '处理中',
    '4': '已处理'
  }
  return statusMap[value]
}

/**
 * 真实故障或误报
 * @param {String} value
 */
export function realFilter(value) {
  const realMap = {
    '1': '误报',
    '2': '真实故障'
  }
  return realMap[value]
}

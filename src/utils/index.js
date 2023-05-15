/**
 * Parse the time to string 日期格式化
 * @param {(Object|string|number)} time
 * @param {string} cFormat
 * @returns {string | null}
 */
export function parseTime(time, cFormat) {
  if (arguments.length === 0 || !time) {
    return null
  }
  const format = cFormat || '{y}-{m}-{d} {h}:{i}:{s}'
  let date
  if (typeof time === 'object') {
    date = time
  } else {
    if (typeof time === 'string') {
      if (/^[0-9]+$/.test(time)) {
        // support "1548221490638"
        time = parseInt(time)
      } else {
        // support safari
        // https://stackoverflow.com/questions/4310953/invalid-date-in-safari
        time = time.replace(new RegExp(/-/gm), '/')
      }
    }

    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000
    }
    date = new Date(time)
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  }
  const time_str = format.replace(/{([ymdhisa])+}/g, (result, key) => {
    const value = formatObj[key]
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value]
    }
    return value.toString().padStart(2, '0')
  })
  return time_str
}

/**
 * 评论时间格式化
 * @param {number} time
 * @param {string} option
 * @returns {string}
 */
export function formatTime(time, option) {
  if (('' + time).length === 10) {
    time = parseInt(time) * 1000
  } else {
    time = +time
  }
  const d = new Date(time)
  const now = Date.now()

  const diff = (now - d) / 1000

  if (diff < 30) {
    return '刚刚'
  } else if (diff < 3600) {
    // less 1 hour
    return Math.ceil(diff / 60) + '分钟前'
  } else if (diff < 3600 * 24) {
    return Math.ceil(diff / 3600) + '小时前'
  } else if (diff < 3600 * 24 * 2) {
    return '1天前'
  }
  if (option) {
    return parseTime(time, option)
  } else {
    return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
  }
}

/**
 * 获取url后面的参数
 * @param {string} url
 * @returns {Object}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach((v) => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * 防抖函数
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function (...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}

/**
 *  判断是否为空
 *  @param {?All} 任意值
 *  @return {boolean}
 *  例：isEmpty(element.children)
 */
export function isEmpty(obj) {
  if (
    typeof obj === 'undefined' ||
    obj === null ||
    obj === '' ||
    obj === 'undefined' ||
    obj === 'null' ||
    JSON.stringify(obj) === '[]' ||
    JSON.stringify(obj) === '{}'
  ) {
    return false
  } else {
    return true
  }
}

/**
 * 遍历后台返回的对象数组格式的菜单或分类数据，添加层级属性，删除空的children属性
 * @param {Array} data
 * @param {number} level
 * @return {null}
 */
export function addLevel(data, level = 1) {
  if (!data) {
    return false
  }
  data.forEach((v) => {
    v.level = level
    if (isEmpty(v.children)) {
      addLevel(v.children, level + 1)
    } else {
      delete v.children
    }
  })
}

/**
 *  通过id查找完整的父级id数组
 *  @param {Number} key - 父级id
 *  @param {Object} treeData - 分类数据
 *  @param {boolean} flag - 默认为不删除最后一层，传入true删除最后一层
 *  @return {Array}
 *  例：getTreeDeepArr(data.id,this.cateList);
 */
export function getTreeDeepArr(key, treeData, flag) {
  const arr = [] // 在递归时操作的数组
  let returnArr = [] // 存放结果的数组
  let depth = 0 // 定义全局层级
  function truncate(arr) {
    return arr.filter((v, i, ar) => i !== ar.length - 1)
  }
  // 定义递归函数
  function childrenEach(childrenData, depthN) {
    for (let j = 0; j < childrenData.length; j++) {
      depth = depthN // 将执行的层级赋值 到 全局层级
      arr[depthN] = childrenData[j].id
      // eslint-disable-next-line eqeqeq
      if (childrenData[j].id == key) {
        // returnArr = arr; // 原写法不行, 因此赋值存在指针关系
        returnArr = arr.slice(0, depthN + 1) // 将目前匹配的数组，截断并保存到结果数组，
        break
      } else {
        if (childrenData[j].children) {
          depth++
          childrenEach(childrenData[j].children, depth)
        }
      }
    }
    return returnArr
  }
  if (flag) {
    return truncate(childrenEach(treeData, depth))
  } else {
    return childrenEach(treeData, depth)
  }
}

/**
 * 返回处理状态下拉框的数据
 * @return {Object}
 */
export const resultStatusList = [
  {
    id: 1,
    value: '-1',
    label: '未处理'
  },
  // {
  //   id: 2,
  //   value: '1',
  //   label: '核实中'
  // },
  // {
  //   id: 3,
  //   value: '2',
  //   label: '已核实'
  // },
  {
    id: 4,
    value: '3',
    label: '处理中'
  },
  {
    id: 5,
    value: '4',
    label: '已处理'
  }
]

/**
 * 生成一个用不重复的ID
 * @param { Number } randomLength
 */
export function getUuiD(randomLength) {
  return Number(Math.random().toString().substr(2, randomLength) + Date.now()).toString(36)
}

/**
 * 数组转换成tree结构
 * @param { Array } data 数组
 * @param { Object } attributes {id: 'id', parentId: 'parentId'}
 */
export function formatToTree(data, attributes) {
  const resData = data
  const tree = []

  // 找寻根节点
  for (let i = 0; i < resData.length; i++) {
    resData[i].children = resData[i].children || []
    // eslint-disable-next-line eqeqeq
    if (!resData[i][attributes.parentId] || resData[i][attributes.parentId] == 0) {
      const obj = JSON.parse(JSON.stringify(resData[i]))
      obj.type = 'dir'
      tree.push(obj)
      resData.splice(i, 1)
      i--
    }
  }

  // 找寻子树
  var run = function (chiArr) {
    if (resData.length !== 0) {
      for (let i = 0; i < chiArr.length; i++) {
        for (let j = 0; j < resData.length; j++) {
          if (chiArr[i][attributes.id] === resData[j][attributes.parentId]) {
            const obj = JSON.parse(JSON.stringify(resData[j]))
            obj.type = 'dir'
            if (!chiArr[i].children) {
              chiArr[i].children = []
            }
            chiArr[i].children.push(obj)
            resData.splice(j, 1)
            j--
          }
        }
        run(chiArr[i].children)
      }
    }
  }

  run(tree)
  return tree
}

/**
 * 根据指定节点获取所有父级
 * @param { Array } tree 数组
 * @param { Function } func  (item) => item.id === 5
 */
export function getParentList(tree, func, path = []) {
  if (!tree) return []
  for (const data of tree) {
    // 这里按照你的需求来存放最后返回的内容吧
    path.push(data.id)
    if (func(data)) return path
    if (data.children) {
      const findChildren = getParentList(data.children, func, path)
      if (findChildren.length) return findChildren
    }
    path.pop()
  }
  return []
}

/**
 * 根据区域tree下指定节点获取所有子级
 * @param { Array } tree 数组
 * @param { Function } func  (item) => item.id === 5
 * console.log(getChild(datasource,'Menu1',[]));
 */
export function getChildList(nodes, item, arr) {
  for (const el of nodes) {
    if (el.parentRegionId === item) {
      arr.push(el.id)
      if (el.children) {
        childNodesDeep(el.children, arr)
      }
    } else if (el.children) {
      getChildList(el.children, item, arr)
    }
  }
  return arr
}
function childNodesDeep(nodes, arr) {
  if (nodes) {
    nodes.forEach((ele) => {
      arr.push(ele.id)
      if (ele.children) {
        childNodesDeep(ele.children, arr)
      }
    })
  }
}

/**
 * 街道点位
 */
export const streetMarkers = [
  {
    id: 1,
    position: [114.244086, 30.560332],
    text: '晴川街'
  },
  {
    id: 10001,
    position: [114.279166, 30.547129],
    text: '建桥街'
  },
  {
    id: 10006,
    position: [114.268199, 30.53696],
    text: '鹦鹉街'
  },
  {
    id: 10007,
    position: [114.254213, 30.520559],
    text: '洲头街'
  },
  {
    id: 10008,
    position: [114.248921, 30.554775],
    text: '五里墩街'
  },
  {
    id: 10009,
    position: [114.220618, 30.508419],
    text: '江堤街'
  },
  {
    id: 10011,
    position: [114.214725, 30.55506],
    text: '琴断口街'
  },
  {
    id: 10012,
    position: [114.216264, 30.534118],
    text: '四新街'
  },
  {
    id: 10013,
    position: [114.203271, 30.571513],
    text: '江汉二桥街'
  },
  {
    id: 10014,
    position: [114.190254, 30.538453],
    text: '龙阳街'
  },
  {
    id: 10015,
    position: [114.173867, 30.566228],
    text: '永丰街'
  }
]

const watermark = {}

const setWatermark = (text, sourceBody) => {
  const id = Math.random() * 10000 + '-' + Math.random() * 10000 + '/' + Math.random() * 10000

  if (document.getElementById(id) !== null) {
    document.body.removeChild(document.getElementById(id))
  }

  // 水印图片
  const can = document.createElement('canvas')
  can.width = 150
  can.height = 120

  const cans = can.getContext('2d')
  cans.rotate((-20 * Math.PI) / 180) // 水印旋转角度
  cans.font = '15px Vedana' // 字体大小
  cans.fillStyle = 'rgba(247, 247, 247, 0.5)' // 水印的颜色
  cans.textAlign = 'left'
  cans.textBaseline = 'Middle'
  // 参数说明：文本、x轴开始位置、y轴开始位置
  cans.fillText(text, can.width / 20, can.height / 2, 120)

  // 创建div，将canvas图片作为背景插入到body或指定父元素中
  const water_div = document.createElement('div')
  water_div.id = id
  water_div.style.pointerEvents = 'none'
  water_div.style.overflow = 'hidden'
  water_div.style.background = 'url(' + can.toDataURL('image/png') + ') left top repeat'
  if (sourceBody) {
    // 插入到指定父元素
    sourceBody.style.position = 'relative'
    water_div.style.width = '100%'
    water_div.style.height = '100%'
    water_div.style.position = 'absolute'
    water_div.style.top = '0'
    water_div.style.left = '0'
    water_div.style.zIndex = 10000
    sourceBody.appendChild(water_div)
  } else {
    // 插入到body
    water_div.style.top = '3px'
    water_div.style.left = '0px'
    water_div.style.position = 'fixed'
    water_div.style.zIndex = '9999'
    water_div.style.width = document.documentElement.clientWidth + 'px'
    water_div.style.height = document.documentElement.clientHeight + 'px'
    document.body.appendChild(water_div)
  }

  return id
}

/**
 *  该方法只允许调用一次
 *  @param:
 *  @text == 水印内容
 *  @sourceBody == 水印添加在哪里，不传就是body
 * */
// watermark.set = (text, sourceBody) => {
//   let id = setWatermark(text, sourceBody)
//   setInterval(() => {
//     if (document.getElementById(id) === null) {
//       id = setWatermark(text, sourceBody)
//     }
//   }, 2000)
//   window.onresize = () => {
//     setWatermark(text, sourceBody)
//   }
// }

watermark.set = (text, sourceBody) => {
  setTimeout(() => {
    setWatermark(text, sourceBody)
  }, 1000) // 延迟加载
}

export default watermark

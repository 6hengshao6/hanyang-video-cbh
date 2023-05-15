/* 图表混入公共代码 */
const mixin = {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myChart: null
    }
  },
  watch: {
    options: {
      handler(newV, oldV) {
        this.myChart.changeData(newV.data)
      },
      deep: true
      // immediate: true
    }
  },
  beforeDestroy() {
    this.myChart.destroy()
  }
}
export default mixin

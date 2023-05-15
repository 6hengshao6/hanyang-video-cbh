<template>
  <div :id="id" :class="className" />
</template>

<script>
import { Line } from '@antv/g2plot'
import chartMixin from './mixin'
import { Axis1 } from '@/utils/chart-options'
export default {
  mixins: [chartMixin],
  data() {
    return {
      hoverData: {}
    }
  },
  mounted() {
    if (!this.options.xAxis || !this.options.yAxis) {
      const options = Object.assign(this.options, Axis1)
      this.myChart = new Line(this.id, options)
    } else {
      this.myChart = new Line(this.id, this.options)
    }
    this.myChart.on('tooltip:change', (e) => {
      this.hoverData = e
    })
    this.myChart.on('plot:click', (e) => {
      this.$emit('chartClick', this.hoverData.data)
    })
    this.myChart.render()
  }
}
</script>
<style lang="scss" scoped></style>

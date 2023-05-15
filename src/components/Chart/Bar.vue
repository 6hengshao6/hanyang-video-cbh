<template>
  <div :id="id" :class="className" />
</template>

<script>
import { Bar } from '@antv/g2plot'
import chartMixin from './mixin'
import { Axis2 } from '@/utils/chart-options'
export default {
  mixins: [chartMixin],
  mounted() {
    if (!this.options.xAxis || !this.options.yAxis) {
      const options = Object.assign(this.options, Axis2)
      this.myChart = new Bar(this.id, options)
    } else {
      this.myChart = new Bar(this.id, this.options)
    }

    this.myChart.render()
  }
}
</script>

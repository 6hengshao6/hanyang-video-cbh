<template>
  <div :id="id" :class="className" />
</template>

<script>
import { Column } from '@antv/g2plot'
import chartMixin from './mixin'
import { Axis1 } from '@/utils/chart-options'
export default {
  mixins: [chartMixin],
  mounted() {
    if (!this.options.xAxis || !this.options.yAxis) {
      const options = Object.assign(this.options, Axis1)
      this.myChart = new Column(this.id, options)
    } else {
      this.myChart = new Column(this.id, this.options)
    }
    this.myChart.on('element:click', (e) => {
      console.log(e)
    })
    this.myChart.render()
  }
}
</script>

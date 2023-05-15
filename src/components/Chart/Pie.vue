<template>
  <div :id="id" :class="className" />
</template>

<script>
import { Pie } from '@antv/g2plot'
import chartMixin from './mixin'
export default {
  mixins: [chartMixin],
  mounted() {
    this.myChart = new Pie(this.id, this.options)
    this.myChart.on('element:click', (e) => {
      console.log(e)
    })
    this.myChart.render()
  }
}
</script>

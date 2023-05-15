<template>
  <div :id="id" :class="className" />
</template>

<script>
import { RingProgress } from '@antv/g2plot'
import chartMixin from './mixin'
export default {
  mixins: [chartMixin],
  mounted() {
    this.myChart = new RingProgress(this.id, this.options)
    this.myChart.render()
  }
}
</script>

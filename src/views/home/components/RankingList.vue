<template>
  <table>
    <!-- <thead>
      <tr>
        <th>序号</th>
        <th>单位名称</th>
        <th>单位类型</th>
        <th>报警数</th>
      </tr>
    </thead> -->
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td v-for="(value, key) in item" :key="key">
          <span
            :class="[
              { alarm: key === 'alarm' },
              { ranking: key === 'ranking' },
              { 'ranking-1': key === 'ranking' && index === 0 },
              { 'ranking-2': key === 'ranking' && index === 1 },
              { 'ranking-3': key === 'ranking' && index === 2 }
            ]"
          >
            {{ value }}
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  border-spacing: 0;
  thead {
    tr {
      height: 38px;
      background: #053355;
    }
    th {
      color: #00c6ff;
      font-weight: normal;
    }
  }
  tbody {
    tr {
      height: 36px;
      td {
        text-align: center;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.2);
      }
    }
    .ranking {
      width: 28px;
      height: 30px;
      line-height: 30px;
      background-image: url('~@/assets/images/common/ranking_default.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
      display: inline-block;
      color: $--color-primary;
    }
    .ranking-1 {
      background-image: url('~@/assets/images/common/ranking_1.png');
      color: #ffcc00;
    }
    .ranking-2 {
      background-image: url('~@/assets/images/common/ranking_2.png');
      color: #fefefe;
    }
    .ranking-3 {
      background-image: url('~@/assets/images/common/ranking_3.png');
      color: #ff6c00;
    }
    .alarm {
      background: #ffcc00;
      color: #06162a;
      padding: 0 5px;
      min-width: 40px;
      height: 18px;
      line-height: 18px;
      display: inline-block;
    }
  }
}
</style>

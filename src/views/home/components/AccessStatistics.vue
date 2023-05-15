<template>
  <!-- 接入统计 -->
  <div class="access-statistics">
    <!-- 1 -->
    <div class="access-item access-item-primary">
      <div class="access-item-top">
        <span class="num">{{ data.departmentNum || 0 }}</span>
        <span class="unit">个</span>
      </div>
      <div class="access-item-bottom">
        <span>接入单位数量</span>
      </div>
    </div>
    <!-- 2 -->
    <div class="access-item access-item-info">
      <div class="access-item-top">
        <span class="num">{{ data.total }}</span>
        <span class="unit">个</span>
      </div>
      <div class="access-item-bottom">
        <span>接入视频数量</span>
      </div>
    </div>
    <!-- 3 -->
    <div class="access-item access-item-success">
      <div class="access-item-top">
        <span class="num">{{ data.online }}</span>
        <span class="unit">个</span>
      </div>
      <div class="access-item-bottom">
        <span>视频在线数量</span>
      </div>
    </div>
    <!-- 4 -->
    <div class="access-item access-item-error">
      <div class="access-item-top">
        <span class="num">{{ data.offline }}</span>
        <span class="unit">个</span>
      </div>
      <div class="access-item-bottom">
        <span>视频离线数量</span>
      </div>
    </div>
    <!-- 5 -->
    <div class="access-item access-item-warning">
      <div class="access-item-top">
        <span class="num">{{ data.onlineRate }}</span>
        <span class="unit">%</span>
      </div>
      <div class="access-item-bottom">
        <span>视频在线率</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getAccessStatistics } from '@/api/common/index'
export default {
  data() {
    return {
      data: {
        total: 0,
        online: 0,
        offline: 0,
        onlineRate: '100%',
        departmentNum: 0
      }
    }
  },
  created() {
    this.handleAccessData()
  },
  methods: {
    async handleAccessData() {
      try {
        const {
          data: { totalCount, offlineCount, departmentNum }
        } = await getAccessStatistics({})
        const total = totalCount || 0
        const offline = offlineCount || 0
        const online = total - offline
        const onlineRate = ((100 * online) / total).toFixed(2)
        this.data = { total, online, offline, onlineRate, departmentNum }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.access-statistics {
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 4;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.access-item {
  width: 18%;
  height: 100px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: 100% 100% !important;
  background: rgba(9, 33, 65, 0.5);
  .num {
    font-size: 30px;
  }
  .unit {
    font-size: 12px;
  }
  .access-item-bottom {
    margin-top: 10px;
  }
}
.access-item-primary {
  background-image: url('~@/assets/images/home/access_item_1.png');
  .access-item-top {
    background: linear-gradient(0deg, #3669fd 0%, #c0dbff 100%);
    // color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.access-item-info {
  background-image: url('~@/assets/images/home/access_item_2.png');
  .access-item-top {
    background: linear-gradient(0deg, #00e2fb 0%, #8fdffe 100%);
    // color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.access-item-warning {
  .access-item-top {
    // background: linear-gradient(to bottom, rgba(128, 242, 255, 1) 40%, rgba(81, 151, 255, 0));
    background: linear-gradient(0deg, #fed52f 0%, #ffe88c 100%);
    // color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  background-image: url('~@/assets/images/home/access_item_3.png');
}
.access-item-success {
  .access-item-top {
    background: linear-gradient(0deg, #06bb70 0%, #08ef8b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  background-image: url('~@/assets/images/home/access_item_4.png');
}
.access-item-error {
  .access-item-top {
    background: linear-gradient(0deg, #ff1b1b 2.05078125%, #ff8989 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  background-image: url('~@/assets/images/home/access_item_5.png');
}
</style>

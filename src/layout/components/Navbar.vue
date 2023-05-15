<template>
  <div class="navbar">
    <div class="header-title">汉阳区视频汇聚共享平台</div>
    <div class="header-left user-info">
      <img class="user-icon" :src="require('@/assets/images/common/user_icon.png')" />
      <span class="user-name">{{ name }}</span>
      <span>|</span>
      <span class="logout" @click="handleLogout">退出</span>
    </div>
    <div class="header-right">
      <!-- <div class="tool-bar"><img :src="require('@/assets/images/common/tool_bar_icon_1.png')" />手动框选</div>
      <div class="tool-bar"><img :src="require('@/assets/images/common/tool_bar_icon_2.png')" />点位巡航</div> -->
      <span>{{ nowDate }}</span>
      <span>|</span>
      <span id="screenfull" @click="handleFullScreen()">{{ isFullscreen ? '退出全屏' : '全屏显示' }}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import screenfull from 'screenfull'
import moment from 'moment'
import { logout } from '@/api/home'
import { resetRouter } from '@/router/index'

export default {
  data() {
    return {
      nowDate: '',
      nowTimer: null,
      isFullscreen: false,
      name: ''
    }
  },
  computed: {
    ...mapGetters(['menuCode', 'userInfo'])
  },
  created() {
    this.name = this.userInfo?.fullname || '游客'
    if (screenfull.enabled) {
      this.screenfullChange()
      screenfull.on('change', this.screenfullChange)
    }
  },
  mounted() {
    this.nowTimes()
  },
  beforeDestroy() {
    clearInterval(this.nowTimer)
    this.nowTimer = null
    if (screenfull.enabled) {
      screenfull.off('change', this.screenfullChange)
    }
  },
  methods: {
    screenfullChange() {
      this.isFullscreen = screenfull.isFullscreen
    },
    handleFullScreen(ele) {
      if (screenfull.enabled) {
        if (ele) {
          screenfull.toggle(ele)
        } else {
          console.log('object')
          screenfull.toggle()
        }
      } else {
        this.$notify({
          title: '提示',
          message: '你的浏览器不支持全屏模式',
          type: 'warning'
        })
      }
    },
    nowTimes() {
      this.nowTimer = setInterval(() => {
        this.nowDate = moment().format('YYYY.M.D HH:mm')
      }, 1000)
    },
    async handleLogout() {
      try {
        await logout({ accessToken: this.accessToken })
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('name')
        resetRouter

        this.$router.push({ path: '/login' })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss">
.navbar {
  font-family: pangmenzhengdao;
  z-index: 10;
  height: 122px;
  overflow: hidden;
  position: relative;
  background: url('~@/assets/images/common/header_bg.png') no-repeat center 0;
  background-size: auto 100%;
  display: flex;
  justify-content: center;
  .header-title {
    text-align: center;
    font-size: 36px;
    line-height: 60px;
    color: $--color-text-primary;
  }
  .header-left,
  .header-right {
    font-size: 16px;
    position: absolute;
    right: 30px;
    top: 30px;
    display: flex;
    align-items: center;
  }
  .header-left {
    top: 2px;
    left: 30px;
  }
  .header-right {
    top: 20px;
    right: 30px;
    span {
      padding: 0 6px;
    }
  }

  .tool-bar {
    background: url('~@/assets/images/common/tool_bar_bg.png') no-repeat 0 0;
    background-size: 100% 100%;
    height: 36px;
    width: 120px;
    border-radius: 4px;
    margin-right: 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      margin-right: 10px;
    }
  }

  .user-info {
    // width: 300px;
    // height: 36px;
    .user-icon {
      width: 52px;
      height: 52px;
      margin-left: -12px;
    }
    .arrow-down-icon {
      width: 21px;
      height: 9px;
      margin-left: 10px;
    }
    span {
      padding: 0 6px;
    }
    .logout {
      cursor: pointer;
    }
  }
}

#screenfull {
  cursor: pointer;
}
</style>

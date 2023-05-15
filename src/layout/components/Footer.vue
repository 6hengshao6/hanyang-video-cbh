<template>
  <div class="footer">
    <div v-if="menuData && menuData.length" class="footer-nav">
      <div class="menu-list">
        <router-link v-for="menu in menuData" :key="menu.id" :to="menu.path" class="menu-item">
          <svg-icon :icon-class="menu.icon" />{{ menu.text }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuData: [
        // {
        //   id: 1,
        //   path: '/home',
        //   text: '综合态势',
        //   icon: 'overview'
        // },
        // {
        //   id: 2,
        //   path: '/error/404',
        //   text: '视频监控',
        //   icon: 'alarm'
        // },
        // {
        //   id: 3,
        //   path: '/error/404',
        //   text: '系统管理',
        //   icon: 'forecast'
        // }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  font-family: pangmenzhengdao;
  z-index: 4;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  // &::before {
  //   content: '';
  //   position: absolute;
  //   left: 0;
  //   bottom: 0;
  //   width: 100vw;
  //   height: 312px;
  //   background: url('~@/assets/images/common/bottom_bg.png') no-repeat center 0;
  //   background-size: 100% 100%;
  // }
  .footer-nav {
    z-index: 10;
    width: 1155px;
    height: 60px;
    background-image: url('~@/assets/images/common/footer_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    .menu-list {
      width: 640px;
      display: flex;
      justify-content: space-around;
    }
    .menu-item {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 39px;
      color: $--color-text-primary;
      font-size: 18px;
      padding: 0 15px;
      background-image: url('~@/assets/images/common/menu_default.png');
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .svg-icon {
        font-size: 20px;
        margin-right: 5px;
      }
      &.is-active {
        color: $--color-warning;
        background-image: url('~@/assets/images/common/menu_active.png');
      }
    }
  }
}
</style>

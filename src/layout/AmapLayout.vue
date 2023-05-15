<template>
  <div class="app-wrapper">
    <navbar />
    <app-main />
    <Footer />
    <my-map />
  </div>
</template>

<script>
import { Navbar, Footer, AppMain, MyMap } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer,
    AppMain,
    MyMap
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100vh;
  background: #000;
  // background: url('~@/assets/images/common/body_bg.png') no-repeat 0 0;
  // background-size: 100% 100%;
  // background-attachment: fixed;
}
</style>

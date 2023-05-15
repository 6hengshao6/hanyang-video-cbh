<template>
  <div class="app-wrapper">
    <navbar />
    <app-main />
    <Footer />
  </div>
</template>

<script>
import { Navbar, Footer, AppMain } from './components'
export default {
  name: 'Layout',
  components: {
    Navbar,
    Footer,
    AppMain
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
}
</style>

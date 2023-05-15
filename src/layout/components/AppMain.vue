<template>
  <section v-loading.body="loading" element-loading-background="rgba(0, 0, 0, 0.1)" class="app-main">
    <router-view :key="key" />
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'AppMain',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    key() {
      return this.$route.path
    },
    ...mapState({
      loadingNum: (state) => state.app.loadingNum
    })
  },
  watch: {
    loadingNum(newVal, old) {
      if (newVal <= 0) {
        setTimeout(() => {
          this.loading = false
        }, 300)
      } else {
        this.loading = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
  overflow-y: auto;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>

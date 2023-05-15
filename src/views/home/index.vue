<template>
  <div class="home">
    <!-- 左边区域 -->
    <div class="left-box">
      <n-card title="汉阳区视频目录">
        <video-directory />
      </n-card>
    </div>
    <!-- 中间区域 -->
    <div class="middle-box">
      <access-statistics />
    </div>
    <!-- 右边区域 -->
    <div class="right-box">
      <n-card title="当前场景">
        <current-scene :height="isAdmin ? '6.5rem' : '9.5rem'" />
      </n-card>
      <n-card v-if="isAdmin" title="调用统计">
        <ranking-list :data="videoCallData" />
      </n-card>
    </div>
    <el-dialog
      width="10rem"
      top="5vh"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      @close="onDialogClose"
    >
      <camera-detail :data="markerInfo" :dialog-visible="dialogVisible" />
      <div slot="title" class="dialog-title">
        <div class="title-left">
          <img class="icon" :src="require('@/assets/images/home/icon_camera_dialog_1.png')" />
          <span class="title">{{ markerInfo.name }}</span>
          <!-- <span class="tag tag-1">小区</span> -->
        </div>
        <!-- <div class="title-right">
          <span>码率：4M/s</span>
          <span>fps：60fps</span>
          <span>编码：H.264</span>
        </div> -->
      </div>
    </el-dialog>
  </div>
</template>

<script>
import NCard from '@/views/components/NCard'
import VideoDirectory from './components/VideoDirectory'
import AccessStatistics from './components/AccessStatistics'
import CurrentScene from './components/currentScene'
import RankingList from './components/RankingList'
import CameraDetail from './components/CameraDetail'
import moment from 'moment'
import { mapGetters } from 'vuex'
import { getCallStatistics } from '@/api/common'

export default {
  components: { NCard, VideoDirectory, AccessStatistics, CurrentScene, RankingList, CameraDetail },
  data() {
    return {
      dialogVisible: false,
      videoCallData: []
    }
  },
  computed: {
    ...mapGetters(['markerInfo'])
  },
  watch: {
    markerInfo: {
      handler(newV) {
        if (newV && JSON.stringify(newV) !== '{}') {
          this.dialogVisible = true
        }
      },
      deep: true
    }
  },
  created() {
    this.handleVideoCallData()
  },
  methods: {
    onDialogClose() {
      this.$store.commit('common/SET_MARKERINFO', {})
    },
    async handleVideoCallData() {
      try {
        const params = {
          count: 5,
          startDate: moment().startOf('months').format('YYYY-MM-DD HH:mm:ss'),
          endDate: moment().format('YYYY-MM-DD HH:mm:ss')
        }
        const { data } = await getCallStatistics(params)
        this.videoCallData = data?.map((item, index) => {
          return {
            ranking: index + 1,
            userName: item.userName,
            count: item.count
          }
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: space-between;
  padding-top: 75px;
}
</style>

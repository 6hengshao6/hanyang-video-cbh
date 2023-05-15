<template>
  <div class="scene">
    <!-- 左边区域 -->
    <div class="left-box">
      <n-card :title="treeTitle">
        <scene-video-directory :tree-data="treeData" />
      </n-card>
    </div>

    <!-- 底部地图区域 -->
    <scene-arcgis-map :street-data="streetLayerData" :feature-data="featureLayerData" />

    <!-- 视频详情 对话框 -->
    <el-dialog
      width="10rem"
      top="5vh"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      append-to-body
      @close="onDialogClose"
    >
      <camera-detail :data="markerInfo" :dialog-visible="dialogVisible" is-scene />
      <div slot="title" class="dialog-title">
        <div class="title-left">
          <img class="icon" :src="require('@/assets/images/home/icon_camera_dialog_1.png')" />
          <span class="title">{{ markerInfo.name }}</span>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
/**
 * 功能描述：
 * 1.左侧树形列表，共3层，汉阳区 => 街道 => 视频
 * 2.地图，先显示各街道视频数量，再显示详细点位
 * 3.共用数据，各街道视频数量和离线数统计，用于左侧树形二级目录和地图街道图层
 */
import NCard from '@/views/components/NCard'
import SceneVideoDirectory from './components/SceneVideoDirectory'
import SceneArcgisMap from './components/SceneArcgisMap'
import CameraDetail from '../home/components/CameraDetail'
import { getSceneCameras } from '@/api/home/scene'
import isEmpty from 'lodash.isempty'
import { mapGetters } from 'vuex'
export default {
  name: 'Scene',
  components: { NCard, SceneVideoDirectory, SceneArcgisMap, CameraDetail },
  data() {
    return {
      dialogVisible: false,
      treeData: [], // 左侧树形列表数据
      streetLayerData: [], // 地图街道图层数据
      featureLayerData: [] // 视频节点图层数据
    }
  },
  computed: {
    ...mapGetters(['streetList', 'markerInfo']),
    query() {
      return this.$route.query
    },
    treeTitle() {
      return this.query.name || '专题场景'
    }
  },
  watch: {
    markerInfo: {
      handler(newV) {
        if (!isEmpty(newV)) {
          this.dialogVisible = true
        }
      },
      deep: true
    }
  },
  created() {
    this.handleSceneCameras()
  },
  methods: {
    onDialogClose() {
      this.$store.commit('common/SET_MARKERINFO', {})
    },
    async handleSceneCameras() {
      try {
        /* 一级目录 */
        const firstDir = {
          id: 'hanyang',
          name: '汉阳区',
          type: 'dir',
          streamNodeCount: 0,
          streamNodeOfflineCount: 0,
          children: []
        }

        /* 获取二级目录统计对象 */
        const secondDirObj = {}
        this.streetList.forEach((item) => {
          secondDirObj[item.id] = {
            streamNodeCount: 0,
            streamNodeOfflineCount: 0,
            streamNodeArr: []
          }
        })
        secondDirObj['other'] = {
          streamNodeCount: 0,
          streamNodeOfflineCount: 0,
          streamNodeArr: []
        }

        /* 根据场景id获取摄像机 */
        const { id } = this.query
        if (!id) return
        const { data } = await getSceneCameras({ labelId: id })

        /* 循环视频数组，先根据所属街道分类，再判断是否离线 */
        data?.forEach((item) => {
          item.longitude = Number(item.longitude || 0)
          item.latitude = Number(item.latitude || 0)
          const streetId = item.auxMonitoringDeviceOwnerDepartmentId
          // 判断是否离线或视频丢失
          const isOffline =
            // eslint-disable-next-line eqeqeq
            (item.encoderAlarmState == 1 && item.encoderEventTypeSet == 1) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 2) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 16 && item.eventSubTypeSet == 32) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 32)

          firstDir.streamNodeCount += 1
          if (isOffline) firstDir.streamNodeOfflineCount += 1

          if (streetId && secondDirObj[streetId]) {
            // 视频节点属于某个街道
            secondDirObj[streetId].streamNodeCount += 1
            if (isOffline) {
              item.isOffline = true
              secondDirObj[streetId].streamNodeOfflineCount += 1
            }
            secondDirObj[streetId].streamNodeArr.push(item)
          } else {
            // 视频节点属于其他
            secondDirObj['other'].streamNodeCount += 1
            if (isOffline) {
              item.isOffline = true
              secondDirObj['other'].streamNodeOfflineCount += 1
            }
            secondDirObj['other'].streamNodeArr.push(item)
          }
        })

        this.featureLayerData = data

        /* 获取二级目录 */
        const secondDir = this.streetList.map((item) => {
          return { ...item, type: 'dir', isStreet: true }
        })
        secondDir.push({ id: 'other', name: '其他', type: 'dir', isStreet: false })

        /* 循环二级目录，赋值 streamNodeCount、streamNodeOfflineCount、streamNodeArr */
        secondDir.forEach((item) => {
          const { streamNodeCount, streamNodeOfflineCount, streamNodeArr } = secondDirObj[item.id]
          item.streamNodeCount = streamNodeCount
          item.streamNodeOfflineCount = streamNodeOfflineCount
          item.children = streamNodeArr
        })

        /* 生成树形列表的数据 */
        firstDir.children = secondDir.filter((item) => item.streamNodeCount > 0)
        this.treeData = [firstDir]

        /* 生成地图街道图层数据 除了过滤掉空目录还要把其他过滤掉 */
        this.streetLayerData = secondDir
          .filter((item) => item.streamNodeCount > 0 && item.isStreet)
          .map((item) => {
            const { id, name, deptcode, remark, streamNodeCount, streamNodeOfflineCount } = item
            return {
              id,
              name,
              deptcode,
              remark,
              streamNodeCount,
              streamNodeOfflineCount
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
.scene {
  display: flex;
  justify-content: space-between;
  padding-top: 75px;
}
</style>

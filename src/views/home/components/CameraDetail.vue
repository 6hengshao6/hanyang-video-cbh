<template>
  <div class="camera-detail">
    <el-row>
      <el-col :span="24">
        <div class="video-box">
          <Jessibuca
            ref="Jessibuca"
            height="4.5rem"
            :video-url="formatData.videoUrl"
            autoplay
            :visible="dialogVisible"
            @onPlay="handleSaveLog('success')"
          />
        </div>
      </el-col>
      <el-col class="pd20" :span="12">
        <div class="basic-info">
          <div class="title">基础信息</div>
          <ul>
            <li>
              <span class="label">名称：</span>
              <span class="value">{{ formatData.name }}</span>
            </li>
            <li>
              <span class="label">所属区域：</span>
              <span class="value">{{ formatData.regionName }}</span>
            </li>
            <li>
              <span class="label">所属街道：</span>
              <span class="value">{{ formatData.streetName }}</span>
            </li>
            <li>
              <span class="label">接入状态：</span>
              <span class="value">{{ formatData.alarmStateName }}</span>
            </li>
            <li>
              <span class="label">流量访问模式：</span>
              <span class="value">{{ formatData.streamOpenModeName }}</span>
            </li>
            <li>
              <span class="label">接入通道号：</span>
              <span class="value">{{ formatData.encoderVideoInputNum }}</span>
            </li>
            <li>
              <span class="label">摄像机类型：</span>
              <span class="value">{{ formatData.streamObjectKindName }}</span>
            </li>
            <!-- <li>
              <span class="label">品牌：</span>
              <span class="value">球机</span>
            </li> -->
            <li>
              <span class="label">经度：</span>
              <span class="value">{{ formatData.longitude }}</span>
            </li>
            <li>
              <span class="label">纬度：</span>
              <span class="value">{{ formatData.latitude }}</span>
            </li>
            <!-- <li>
              <span class="label">所属辖区：</span>
              <span class="value">琴断派出所</span>
            </li> -->
            <!-- <li>
              <span class="label">应用场景：</span>
              <span class="value">小区</span>
            </li> -->
          </ul>
        </div>
        <div class="scene">
          <div class="title row-between">
            <div>应用场景</div>
            <!-- 管理员可编辑 -->
            <el-popover v-if="isAdmin && !isScene" placement="top" width="360" trigger="click">
              <div class="scene-select">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox v-for="item in sceneList" :key="item.id" :label="item.id">{{ item.name }}</el-checkbox>
                </el-checkbox-group>
                <div class="btn-box row-end">
                  <el-tag size="small" type="info" @click="resetScene">重置</el-tag>
                  <el-tag size="small" @click="submitScene">保存</el-tag>
                </div>
              </div>
              <el-tag slot="reference" size="small" style="cursor: pointer"><i class="el-icon-setting" /></el-tag>
            </el-popover>
          </div>
          <div class="scene-tags">
            <!-- 普通用户仅查看 -->
            <el-tag v-for="item in curScenes" :key="item.id" size="medium">{{ item.name }}</el-tag>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="operate pd20">
          <!-- 标签页 -->
          <div class="ncj-tabs">
            <span class="tab-item active">云台控制</span>
            <!-- <span class="tab-item">视频回放</span> -->
          </div>
          <!-- 标签页内容 -->
          <div class="ncj-tabs-content">
            <!-- 云台方向 -->
            <div class="yuntai-direction row-center">
              <div class="yuntai-pic">
                <div class="direction-btn top" @click="handleDirection('top')" />
                <div class="direction-btn right" @click="handleDirection('right')" />
                <div class="direction-btn bottom" @click="handleDirection('bottom')" />
                <div class="direction-btn left" @click="handleDirection('left')" />
                <div class="direction-btn outer" @click="handleDirection('outer')" />
                <div class="direction-btn inner" @click="handleDirection('inner')" />
              </div>
            </div>
            <!-- 云台速度 -->
            <div class="yuntai-speed">
              <span>云台速度</span>
              <el-slider v-model="speed" show-input :min="1" :max="10" input-size="mini" :show-tooltip="false" />
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Jessibuca from '@/components/Jessibuca/Jessibuca'
import { mapGetters } from 'vuex'
import { ptzControl } from '@/api/home'
import isEmpty from 'lodash.isempty'
import { saveLog } from '@/api/common'
import { sceneAndCamera, linkScene } from '@/api/home/scene'

export default {
  components: { Jessibuca },
  props: {
    data: {
      type: Object,
      required: true
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    isScene: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      speed: 5,
      username: '',
      checkList: [], // 设置场景中 选中的场景id
      curSceneIds: [] // 当前已关联的场景id
    }
  },
  computed: {
    ...mapGetters(['streetList', 'sceneList']),
    formatData() {
      const data = JSON.parse(JSON.stringify(this.data))
      if (isEmpty(data)) return {}
      const formatData = {}
      const regionList = JSON.parse(localStorage.getItem('regionList'))
      if (this.isScene) {
        // shty视频节点接口
        try {
          // 名称
          formatData.name = data.name

          // 所属区域
          const curRegion = regionList?.find((item) => item.id === data.regionid)
          formatData.regionName = curRegion?.name

          // 所属街道
          const curStreet = this.streetList?.find(
            // eslint-disable-next-line eqeqeq
            (item) => item.id == data.auxMonitoringDeviceOwnerDepartmentId || item.id == data.ownerDepartmentId
          )
          formatData.streetName = curStreet?.name

          // 接入状态
          const alarmStateMap = {
            0: '正常',
            1: '报警',
            2: '未知',
            3: '离线'
          }
          formatData.alarmStateName = alarmStateMap[data?.alarmstate]

          // 流量访问模式
          const streamOpenModeMap = {
            0: '主码流',
            1: '辅码流1',
            2: '辅码流2'
          }
          formatData.streamOpenModeName = streamOpenModeMap[data?.streamopenmode]

          // 接入通道号
          formatData.encoderVideoInputNum = data.encodervideoinputnum

          // 摄像机类型
          const streamObjectKindMap = {
            0: '网络高速球',
            1: '网络中速球',
            2: '轨道机摄像机',
            14: '高清全景摄像机'
          }
          formatData.streamObjectKindName = streamObjectKindMap[data?.streamobjectkind]

          // 经纬度
          formatData.longitude = data.longitude
          formatData.latitude = data.latitude

          formatData.videoUrl = data.accessToken
            ? `ws://${data.streamServerIp}:${data.streamServerPort3}/wsflv/${data.id}.flv?app=live&streamOpenMode=${data.streamopenmode}&audioEnabled=false&accessToken=${data.accessToken}`
            : ''

          return formatData
        } catch (error) {
          console.log(error)
        }
      } else {
        // 叶师傅平台视频节点接口
        try {
          // 名称
          formatData.name = data.name

          // 所属区域
          const curRegion = regionList?.find((item) => item.id === data.regionId)
          formatData.regionName = curRegion?.name

          // 所属街道
          const curStreet = this.streetList?.find(
            // eslint-disable-next-line eqeqeq
            (item) => item.id == data.auxMonitoringDeviceOwnerDepartmentId || item.id == data.ownerDepartmentId
          )
          formatData.streetName = curStreet?.name

          // 接入状态
          const alarmStateMap = {
            0: '正常',
            1: '报警',
            2: '未知',
            3: '离线'
          }
          formatData.alarmStateName = alarmStateMap[data?.alarmState]

          // 流量访问模式
          const streamOpenModeMap = {
            0: '主码流',
            1: '辅码流1',
            2: '辅码流2'
          }
          formatData.streamOpenModeName = streamOpenModeMap[data?.streamOpenMode]

          // 接入通道号
          formatData.encoderVideoInputNum = data.encoderVideoInputNum

          // 摄像机类型
          const streamObjectKindMap = {
            0: '网络高速球',
            1: '网络中速球',
            2: '轨道机摄像机',
            14: '高清全景摄像机'
          }
          formatData.streamObjectKindName = streamObjectKindMap[data?.streamObjectKind]

          // 经纬度
          formatData.longitude = data.longitude
          formatData.latitude = data.latitude

          formatData.videoUrl = data.accessToken
            ? `ws://${data.streamServerIp}:${data.streamServerPort3}/wsflv/${data.id}.flv?app=live&streamOpenMode=${data.streamOpenMode}&audioEnabled=false&accessToken=${data.accessToken}`
            : ''
        } catch (error) {
          console.log(error)
        }
      }

      return formatData
    },
    curScenes() {
      const scenes = this.sceneList.filter((item) => this.curSceneIds.includes(item.id))
      return scenes
    }
  },
  watch: {
    dialogVisible: {
      handler(newV) {
        if (newV) {
          this.handleLinkedScenes()
        } else {
          this.checkList = this.curSceneIds = []
        }
      },
      immediate: true
    }
  },
  created() {
    this.username = sessionStorage.getItem('username')
  },
  methods: {
    handleDirection(direction) {
      const _this = this
      _this.handleStartDirection(direction)
      setTimeout(() => {
        _this.handleEndDirection(direction)
      }, 100)
    },
    async handleStartDirection(direction) {
      try {
        const directionMap = {
          top: [769, 773],
          bottom: [770, 774],
          left: [771, 775],
          right: [772, 776],
          outer: [1537, 1539],
          inner: [1538, 1540]
        }

        const params = {
          accessToken: this.accessToken,
          nodeId: this.data.id,
          hSpeed: this.speed,
          vSpeed: this.speed,
          ptzCmd: directionMap[direction][0]
        }
        console.log('start')
        await ptzControl(params)
      } catch (error) {
        console.log(error)
      }
    },
    async handleEndDirection(direction) {
      try {
        const directionMap = {
          top: [769, 773],
          bottom: [770, 774],
          left: [771, 775],
          right: [772, 776],
          outer: [1537, 1539],
          inner: [1538, 1540]
        }

        const params = {
          accessToken: this.accessToken,
          nodeId: this.data.id,
          hSpeed: this.speed,
          vSpeed: this.speed,
          ptzCmd: directionMap[direction][1]
        }
        console.log('end')
        await ptzControl(params)
      } catch (error) {
        console.log(error)
      }
    },
    async handleSaveLog(type) {
      try {
        if (!this.username) return
        const videoName = this.formatData.name
        const msgMap = {
          success: `打开【${videoName}】实时视频成功`,
          close: `关闭【${videoName}】实时视频`,
          error: `打开【${videoName}】实时视频失败！原因：未知`,
          timeout: `打开【${videoName}】实时视频失败！原因：连接超时`
        }
        await saveLog({
          userName: this.username,
          logtype: '1',
          logcontent: msgMap[type]
        })
      } catch (error) {
        console.log(error)
      }
    },
    // 获取视频关联的场景
    async handleLinkedScenes() {
      try {
        const linkedScenes = []
        const { data } = await sceneAndCamera({ streamNodeId: this.data?.id })
        if (data?.length) {
          data.forEach((item) => {
            linkedScenes.push(item.labelId)
          })
        }
        this.checkList = [...linkedScenes]
        this.curSceneIds = [...linkedScenes]
      } catch (error) {
        console.log(error)
      }
    },
    resetScene() {
      this.checkList = [...this.curSceneIds]
    },
    async submitScene() {
      try {
        await linkScene({ id: this.data?.id, ids: this.checkList.join(',') })
        this.curSceneIds = [...this.checkList]
        this.$notify.success({
          title: '成功',
          message: '关联场景成功！'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.basic-info {
  li {
    line-height: 28px;
    display: flex;
    .label {
      width: 120px;
    }
    .value {
      width: calc(100% - 120px);
    }
  }
}
.title {
  color: $--color-primary;
  font-weight: bold;
  margin-bottom: 10px;
}

.operate {
  background-color: #0e1d2d;
  height: 400px;
  .yuntai-direction {
    position: relative;
    height: 300px;
  }
  .yuntai-pic {
    width: 200px;
    height: 200px;
    background: url('~@/assets/images/home/yuntai.png') no-repeat 0 0;
    background-size: 100% 100%;
    position: relative;
    .direction-btn {
      position: absolute;
      cursor: pointer;
    }
    .top,
    .bottom {
      width: 90px;
      height: 40px;
      left: 55px;
    }
    .top {
      top: 15px;
    }
    .bottom {
      bottom: 15px;
    }
    .left,
    .right {
      width: 40px;
      height: 90px;
      top: 55px;
    }
    .right {
      right: 15px;
    }
    .left {
      left: 15px;
    }

    .outer,
    .inner {
      width: 40px;
      height: 60px;
      top: 70px;
    }
    .outer {
      left: 60px;
    }
    .inner {
      right: 60px;
    }
  }
}

.scene {
  padding-top: 10px;
  .scene-tags {
    .el-tag {
      margin-right: 10px;
      margin-top: 10px;
    }
  }
}
.scene-select {
  .btn-box {
    margin-top: 10px;
    .el-tag {
      margin-left: 10px;
      cursor: pointer;
    }
  }
}
</style>

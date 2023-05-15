<template>
  <!-- 视频目录 -->
  <div class="video-directory">
    <el-input v-model="filterText" prefix-icon="el-icon-search" placeholder="请输入关键字" />

    <el-tree
      ref="tree"
      class="filter-tree"
      node-key="id"
      :data="treeData"
      :props="defaultProps"
      :default-expanded-keys="[1]"
      :filter-node-method="filterNode"
      :expand-on-click-node="true"
      :highlight-current="true"
      accordion
      @node-click="clickNode"
    >
      <span slot-scope="{ node, data }" class="custom-tree-node">
        <template v-if="data.type === 'dir'">
          <span class="icon icon-directory" />
          <span>{{
            `${node.label}(${data.streamNodeCount - data.streamNodeOfflineCount}/${data.streamNodeCount})`
          }}</span>
        </template>
        <template v-else>
          <span
            :class="[
              'icon',
              (data.encoderAlarmState == 1 && data.encoderEventTypeSet == 1) ||
              (data.alarmState == 1 && data.eventTypeSet == 2) ||
              (data.alarmState == 1 && data.eventTypeSet == 16 && data.eventSubTypeSet == 32) ||
              (data.alarmState == 1 && data.eventTypeSet == 32)
                ? 'icon-camera-1-disabled'
                : 'icon-camera-1'
            ]"
          />
          <span>{{ node.label }}</span>
        </template>
      </span>
    </el-tree>
  </div>
</template>

<script>
/**
 * 功能描述：
 * 1.从区域接口获取目录结构
 * 2.点击行业后，该行业所有摄像头图标高亮
 *
 */
import { getRegionList, getStreamnodeList } from '@/api/home/index'
import { getRegionsStatistics } from '@/api/common/index'
import { formatToTree } from '@/utils/index'
import isEmpty from 'lodash.isempty'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      filterText: '',
      treeData: [],
      defaultProps: {
        children: 'children',
        label: 'name',
        disabled: 'disabled'
      }
    }
  },
  computed: {
    ...mapGetters(['streetId'])
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter({ name: val, streetId: this.streetId })
      if (!val) {
        const nodes = this.$refs.tree.store.nodesMap
        for (const key in nodes) {
          // eslint-disable-next-line eqeqeq
          if (key == 1) {
            nodes[key].expanded = true
          } else {
            nodes[key].expanded = false
          }
        }
      }
    },
    streetId(val) {
      this.$refs.tree.filter({ name: this.filterText, streetId: val })
      if (!this.filterText) {
        const nodes = this.$refs.tree.store.nodesMap
        for (const key in nodes) {
          // eslint-disable-next-line eqeqeq
          if (key == 1) {
            nodes[key].expanded = true
          } else {
            nodes[key].expanded = false
          }
        }
      }
    }
  },
  created() {
    this.handleRegionList()
  },
  methods: {
    filterNode(value, data) {
      // 筛选条件有名称和街道，但是街道只对摄像头起作用
      if (value.name && value.streetId) {
        // 1.同时按名称和街道筛选
        if (data.type === 'dir') {
          return data.name.indexOf(value.name) !== -1
        } else {
          return data.name.indexOf(value.name) !== -1 && data.auxMonitoringDeviceOwnerDepartmentId === value.streetId
        }
      } else if (value.name && !value.streetId) {
        // 2.按名称筛选
        return data.name.indexOf(value.name) !== -1
      } else if (!value.name && value.streetId) {
        // 3.按街道筛选
        if (data.type === 'dir') {
          return true
        } else {
          return data.auxMonitoringDeviceOwnerDepartmentId === value.streetId
        }
      } else {
        return true
      }
    },

    async handleRegionList() {
      try {
        // 获取在线率数据
        const username = sessionStorage.getItem('username')
        const statisticsObj = {}
        if (username) {
          const { data: statistics } = await getRegionsStatistics({ username })
          statistics.forEach((item) => {
            statisticsObj[item.id] = item
          })
        }
        const params = {
          accessToken: this.accessToken,
          pageNum: 1,
          pageSize: 1000,
          parentRegionId: 0,
          regionId: 0,
          regionKind: 0,
          totalPage: 0
        }
        const { data } = await getRegionList(params)
        localStorage.setItem('regionList', JSON.stringify(data || []))
        if (!isEmpty(statisticsObj)) {
          data.forEach((item) => {
            const statisticsItem = statisticsObj[item.id]
            if (!isEmpty(statisticsItem)) {
              const { onlineCount, offlineCount } = statisticsItem
              item.streamNodeCount = onlineCount + offlineCount
              item.streamNodeOfflineCount = offlineCount
            }
          })
        }
        this.$store.commit('common/SET_REGIONLIST', JSON.parse(JSON.stringify(data)))

        const treeData = formatToTree(data, { id: 'id', parentId: 'parentRegionId' })
        this.treeData = treeData
        this.$store.commit('common/SET_REGIONTREE', JSON.parse(JSON.stringify(treeData)))
      } catch (error) {
        console.log(error)
      }
    },
    async clickNode(data, node, obj) {
      try {
        this.$store.commit('common/SET_SELECTEDNODE', data)
        if (data.type === 'dir') {
          if (data.children && data.children.length) {
            return false
          }
          console.log('加载视频节点')
          const params = {
            accessToken: this.accessToken,
            encoderStateRequired: 1,
            pageNum: 1,
            pageSize: 1000,
            regionId: data.id,
            streamServerInfoRequired: 1,
            gpsRequired: 1,
            amdConstructionInfoRequired: 1
          }
          const { data: cameras } = await getStreamnodeList(params)
          if (cameras && cameras.length) {
            data.children = cameras
            node.expanded = true
          }
          // 要先通过筛选条件后，才能添加到树上
          // const filterPassNodes = []
          // const filter = { name: this.filterText, streetId: this.streetId }
          // if (cameras && cameras.length) {
          //   cameras.forEach((item) => {
          //     let hasName = true
          //     let hasStreetId = true
          //     if (filter.name && item.name.indexOf(filter.name) === -1) {
          //       hasName = false
          //     }
          //     if (filter.streetId && item.auxMonitoringDeviceOwnerDepartmentId !== filter.streetId) {
          //       hasStreetId = false
          //     }

          //     if (hasName && hasStreetId) {
          //       filterPassNodes.push(item)
          //     }
          //   })

          //   if (filterPassNodes.length) {
          //     data.children = filterPassNodes
          //     node.expanded = true
          //   }
          // }
        } else {
          // 此时是摄像头，获取其携带的数据
          const markerData = JSON.parse(JSON.stringify(data))
          markerData.accessToken = this.accessToken
          this.$store.commit('common/SET_MARKERINFO', markerData)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.filter-tree {
  margin-top: 10px;
  // height: calc(100vh - 220px);
  height: 725px;
}
</style>

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
export default {
  props: {
    treeData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'name',
        disabled: 'disabled'
      }
    }
  },
  watch: {
    filterText(val) {
      this.$refs.tree.filter(val)
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
    }
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    async clickNode(data, node, obj) {
      try {
        this.$store.commit('common/SET_SELECTEDNODE', data)
        if (data.type !== 'dir') {
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

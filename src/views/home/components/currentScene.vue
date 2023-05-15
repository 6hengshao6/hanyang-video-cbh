<template>
  <!-- 当前场景 -->
  <div class="current-scene" :style="{ height }">
    <!-- 专题场景 -->
    <div class="scene-title">专题场景</div>
    <ul class="scene-list">
      <template v-for="(item, index) in sceneList">
        <!-- eslint-disable-next-line vue/require-v-for-key -->
        <div v-if="index % 3 !== 0" class="divider-box"><span class="divider" /></div>
        <li :key="item.id" class="scene-item pointer ellipsis" @click="toScene(item)">{{ item.name }}</li>
      </template>
    </ul>

    <!-- 行政区域 -->
    <div class="scene-title" @click="handleAllStreet">
      <span class="scene-title-right">行政区域</span>
      <span class="scene-title-right">全部</span>
    </div>
    <!-- <el-select v-model="value" placeholder="请选择">
      <el-option v-for="item in scene2" :key="item.id" :label="item.label" :value="item.id" />
    </el-select> -->
    <template v-for="item1 in scene2">
      <div
        :key="item1.id"
        :class="['scene-subtitle', { active: streetId === item1.id }]"
        @click="handleStreet(item1.id)"
      >
        <img class="icon-street" :src="item1.icon" />
        {{ item1.label }}
      </div>
      <!-- eslint-disable-next-line vue/require-v-for-key -->
      <ul class="scene-list">
        <template v-for="(item2, index) in item1.children">
          <!-- eslint-disable-next-line vue/require-v-for-key -->
          <div v-if="index % 3 !== 0" class="divider-box"><span class="divider" /></div>
          <li :key="item2.id" class="scene-item ellipsis">{{ item2.label }}</li>
        </template>
      </ul>
    </template>
  </div>
</template>

<script>
/**
 * 功能描述：
 * 1.点击街道后，地图中心和级别移动到街道视角，该街道所有摄像头图标高亮
 * 实现逻辑：
 * 点击街道获取其街道编码，重新渲染图标，通过ownerDepartmentId字段判断是否属于该街道，最后渲染不同的图标
 */
import { mapGetters } from 'vuex'
export default {
  props: {
    height: {
      type: String,
      default: '6.5rem'
    }
  },
  data() {
    return {
      scene2: [
        {
          id: 1,
          label: '晴川街道',
          icon: require('@/assets/images/map/street/1.png'),
          children: [
            { id: 101, label: '国棉社区' },
            { id: 102, label: '汉汽社区' },
            { id: 103, label: '龙灯社区' },
            { id: 104, label: '铁桥社区' },
            { id: 105, label: '华园社区' }
          ]
        },
        {
          id: 10001,
          label: '建桥街',
          icon: require('@/assets/images/map/street/10001.png'),
          children: [
            { id: 1000101, label: '钟家村社区' },
            { id: 1000102, label: '西大街社区' },
            { id: 1000103, label: '青石社区' },
            { id: 1000104, label: '南城社区' },
            { id: 1000105, label: '显正街社区' },
            { id: 1000106, label: '古楼社区' },
            { id: 1000107, label: '大桥社区' },
            { id: 1000108, label: '白鹤社区' },
            { id: 1000109, label: '琴台社区' },
            { id: 1000110, label: '车站社区' },
            { id: 1000111, label: '归元社区' },
            { id: 1000112, label: '冰糖社区' }
          ]
        },
        {
          id: 10006,
          label: '鹦鹉街道',
          icon: require('@/assets/images/map/street/10006.png'),
          children: [
            { id: 1000601, label: '杨泗社区' },
            { id: 1000602, label: '瓜堤社区' },
            { id: 1000603, label: '桥机社区' },
            { id: 1000604, label: '夹河社区' },
            { id: 1000605, label: '钢管社区' },
            { id: 1000606, label: '鹦鹉花园社区' },
            { id: 1000607, label: '自力社区' },
            { id: 1000608, label: '锦绣长江社区' }
          ]
        },
        {
          id: 10007,
          label: '洲头街道',
          icon: require('@/assets/images/map/street/10007.png'),
          children: [
            { id: 1000701, label: '红建社区' },
            { id: 1000702, label: '建港社区' },
            { id: 1000703, label: '怡畅园社区' },
            { id: 1000704, label: '向阳社区' },
            { id: 1000705, label: '洲头社区' },
            { id: 1000706, label: '新五里社区' }
          ]
        },
        {
          id: 10008,
          label: '五里墩街道',
          icon: require('@/assets/images/map/street/10008.png'),
          children: [
            { id: 1000801, label: '五琴里社区' },
            { id: 1000802, label: '五合里社区' },
            { id: 1000803, label: '五麒里社区' },
            { id: 1000804, label: '五湖里社区' },
            { id: 1000805, label: '五麟里社区' },
            { id: 1000806, label: '五红里社区' },
            { id: 1000807, label: '五福里社区' },
            { id: 1000808, label: '五园里社区' },
            { id: 1000809, label: '五墨里社区' },
            { id: 1000810, label: '五春里社区' },
            { id: 1000811, label: '五丰里社区' },
            { id: 1000812, label: '五荣里社区' },
            { id: 1000813, label: '五瑞里社区' },
            { id: 1000814, label: '五玉里社区' }
          ]
        },
        {
          id: 10009,
          label: '江堤街道',
          icon: require('@/assets/images/map/street/10009.png'),
          children: [
            { id: 1000901, label: '三里民居社区' },
            { id: 1000902, label: '江博社区' },
            { id: 1000903, label: '向阳村社区' },
            { id: 1000904, label: '江腾社区' },
            { id: 1000905, label: '鲤鱼洲社区' },
            { id: 1000906, label: '丰收社区' },
            { id: 1000907, label: '江欣苑社区' },
            { id: 1000908, label: '墨水湖社区' },
            { id: 1000909, label: '汉博佳园社区' },
            { id: 1000910, label: '江城明珠社区' },
            { id: 1000911, label: '老关社区' },
            { id: 1000912, label: '新新社区' },
            { id: 1000913, label: '潮江社区' }
          ]
        },
        {
          id: 10011,
          label: '琴断口街道',
          icon: require('@/assets/images/map/street/10011.png'),
          children: [
            { id: 1001101, label: '龙祥社区' },
            { id: 1001102, label: '十里景秀社区' },
            { id: 1001103, label: '冯家畈社区' },
            { id: 1001104, label: '紫荆花社区' },
            { id: 1001105, label: '七里庙社区' },
            { id: 1001106, label: '七里一村社区' },
            { id: 1001107, label: '桃花岛社区' },
            { id: 1001108, label: '汇福园社区' },
            { id: 1001109, label: '金龙花园社区' },
            { id: 1001110, label: '七里晴川社区' },
            { id: 1001111, label: '星火社区' },
            { id: 1001112, label: '百灵社区' },
            { id: 1001113, label: '江花社区' },
            { id: 1001114, label: '龙兴社区' }
          ]
        },
        {
          id: 10012,
          label: '四新街道',
          icon: require('@/assets/images/map/street/10012.png'),
          children: [
            { id: 1001201, label: '澜菲溪岸' },
            { id: 1001202, label: '太子观澜' },
            { id: 1001203, label: '梅林都汇' },
            { id: 1001204, label: '墨兰湖畔' },
            { id: 1001205, label: '上太子溪' },
            { id: 1001206, label: '总港西岸' }
          ]
        },
        {
          id: 10013,
          label: '江汉二桥街道',
          icon: require('@/assets/images/map/street/10013.png'),
          children: [
            { id: 1001301, label: '知音东苑社区' },
            { id: 1001302, label: '知音西苑社区' },
            { id: 1001303, label: '玫瑰西园社区' },
            { id: 1001304, label: '水仙里社区' },
            { id: 1001305, label: '郭茨口社区' },
            { id: 1001306, label: '桥西社区' },
            { id: 1001307, label: '玫瑰东苑社区' },
            { id: 1001308, label: '桥东社区' },
            { id: 1001309, label: '十里铺社区' },
            { id: 1001310, label: '赫山社区' }
          ]
        },
        {
          id: 10014,
          label: '龙阳街',
          icon: require('@/assets/images/map/street/10014.png'),
          children: [
            { id: 1001401, label: '陶家岭社区' },
            { id: 1001402, label: '陶园社区' },
            { id: 1001403, label: '龙阳新村' },
            { id: 1001404, label: '汉城社区' },
            { id: 1001405, label: '南国明珠' },
            { id: 1001406, label: '汤山社区' },
            { id: 1001407, label: '龙湖东岸' },
            { id: 1001408, label: '龙阳湖社区' }
          ]
        },
        {
          id: 10015,
          label: '永丰街道',
          icon: require('@/assets/images/map/street/10015.png'),
          children: [
            { id: 1001501, label: '仙山社区' },
            { id: 1001502, label: '燎原社区' },
            { id: 1001503, label: '磨山社区' },
            { id: 1001504, label: '惠民苑社区' },
            { id: 1001505, label: '汉琴社区' },
            { id: 1001506, label: '汉沙社区' },
            { id: 1001507, label: '玫瑰西苑社区' },
            { id: 1001508, label: '黄金口社区' },
            { id: 1001509, label: '三眼桥社区' },
            { id: 1001510, label: '四台社区' },
            { id: 1001511, label: '米粮社区' },
            { id: 1001512, label: '陈家咀社区' },
            { id: 1001513, label: '徐湾社区' },
            { id: 1001514, label: '快活岭社区' },
            { id: 1001515, label: '罗家咀社区' },
            { id: 1001516, label: '董家店社区' },
            { id: 1001517, label: '郑家咀社区' },
            { id: 1001518, label: '黄金口岸社区' },
            { id: 1001519, label: '龙磨社区' }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['streetId', 'sceneList'])
  },
  methods: {
    handleStreet(id) {
      this.$store.commit('common/SET_STREETID', id)
    },
    handleAllStreet() {
      this.$store.commit('common/SET_STREETID', undefined)
    },
    toScene(record) {
      const route = this.$router.resolve({ path: '/basic/scene', query: record })
      window.open(route.href, '_blank')
    }
  }
}
</script>

<style lang="scss" scoped>
.current-scene {
  overflow: auto;
}
.scene-title {
  color: #00ffff;
  font-weight: bold;
  height: 20px;
  line-height: 20px;
  position: relative;
  padding-left: 12px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  &::before {
    content: '';
    width: 3px;
    height: 14px;
    background-color: #00ffff;
    position: absolute;
    top: 3px;
    left: 0;
  }
  &::after {
    content: '';
    width: 140px;
    height: 14px;
    background-image: url('~@/assets/images/home/scene_title_bg.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 3px;
    left: 80px;
  }
}
.scene-subtitle {
  height: 14px;
  position: relative;
  padding-left: 12px;
  margin-top: 5px;
  margin-bottom: 16px;
  background-color: rgba(94, 95, 109, 0.5);
  cursor: pointer;
  &::before {
    content: '';
    width: 3px;
    height: 14px;
    background-color: #00ffff;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.active {
    background-color: rgba(24, 175, 202, 0.9);
  }
  .icon-street {
    width: 40px;
    height: 44.3px;
    position: absolute;
    top: -13px;
    right: 0;
  }
}
.scene-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .scene-item {
    width: 30%;
    line-height: 20px;
    padding-bottom: 10px;
    text-align: center;
    white-space: nowrap;
  }
}
.divider-box {
  width: 5%;
  display: flex;
  justify-content: center;
  padding-bottom: 10px;
  .divider {
    width: 2px;
    height: 20px;
    background-image: url('~@/assets/images/home/scene_item_divider.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>

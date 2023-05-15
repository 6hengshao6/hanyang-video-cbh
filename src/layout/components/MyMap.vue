<template>
  <div id="container" />
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader'
import { getGisMarkerList } from '@/api/home/index'
import { wgs84togcj02, gcj02towgs84 } from '@/utils/transformLngLat'
import { mapGetters } from 'vuex'
import isEmpty from 'lodash.isempty'
import { getChildList } from '@/utils/index'

export default {
  data() {
    return {
      map: null,
      AMap: null,
      cluster: null,
      selectedMarker: null,
      iconNormalMarker: require('@/assets/images/map/mark_normal.png'),
      iconAbnormalMarker: require('@/assets/images/map/mark_abnormal.png'),
      iconSelectedMarker: require('@/assets/images/map/mark_red.png'),
      iconRegionMarker: require('@/assets/images/map/mark_purple.png'),
      // 街道点位
      streetMarkers: [
        {
          id: 1,
          position: [114.244086, 30.560332],
          text: '晴川街',
          count: 525
        },
        {
          id: 10001,
          position: [114.279166, 30.547129],
          text: '建桥街',
          count: 932
        },
        {
          id: 10006,
          position: [114.268199, 30.53696],
          text: '鹦鹉街',
          count: 385
        },
        {
          id: 10007,
          position: [114.254213, 30.520559],
          text: '洲头街',
          count: 609
        },
        {
          id: 10008,
          position: [114.248921, 30.554775],
          text: '五里墩街',
          count: 562
        },
        {
          id: 10009,
          position: [114.220618, 30.508419],
          text: '江堤街',
          count: 479
        },
        {
          id: 10011,
          position: [114.214725, 30.55506],
          text: '琴断口街',
          count: 545
        },
        {
          id: 10012,
          position: [114.216264, 30.534118],
          text: '四新街',
          count: 380
        },
        {
          id: 10013,
          position: [114.203271, 30.571513],
          text: '江汉二桥街',
          count: 497
        },
        {
          id: 10014,
          position: [114.190254, 30.538453],
          text: '龙阳街',
          count: 283
        },
        {
          id: 10015,
          position: [114.173867, 30.566228],
          text: '永丰街',
          count: 690
        }
      ],
      // 街道图标
      streetIcons: {
        1: require('@/assets/images/map/street/1.png'),
        10001: require('@/assets/images/map/street/10001.png'),
        10006: require('@/assets/images/map/street/10006.png'),
        10007: require('@/assets/images/map/street/10007.png'),
        10008: require('@/assets/images/map/street/10008.png'),
        10009: require('@/assets/images/map/street/10009.png'),
        10011: require('@/assets/images/map/street/10011.png'),
        10012: require('@/assets/images/map/street/10012.png'),
        10013: require('@/assets/images/map/street/10013.png'),
        10014: require('@/assets/images/map/street/10014.png'),
        10015: require('@/assets/images/map/street/10015.png')
      },
      // 当前选中节点的区域集合
      regionIds: []
    }
  },
  computed: {
    ...mapGetters(['streetId', 'selectedNode', 'regionTree'])
  },
  watch: {
    streetId(newV) {
      try {
        if (!newV) return false
        const record = this.streetMarkers.find((item) => item.id === newV)
        this.map.setZoomAndCenter(18.1, record.position)
      } catch (error) {
        console.log(error)
      }
    },
    selectedNode: {
      handler(newV) {
        console.log(newV)
        try {
          if (isEmpty(newV)) return false

          if (newV.type === 'dir') {
            // 找出区域id集合
            const regionIds = getChildList(this.regionTree, newV.id, [])
            regionIds.push(newV.id)
            console.log(regionIds)
            this.regionIds = regionIds
            this.handleGisMarkerList()
          } else {
            this.regionIds = []
            // 点击了摄像头
            if (newV.longitude === 0 || newV.latitude === 0) return false

            const position = wgs84togcj02(newV.longitude, newV.latitude)
            this.map.setZoomAndCenter(19, position)

            this.selectedMarker.setExtData(newV)
            this.selectedMarker.setPosition(position)
            this.selectedMarker.setzIndex(100)
            this.map.add(this.selectedMarker)
          }
        } catch (error) {
          console.log(error)
        }
      },
      deep: false
    }
  },
  mounted() {
    // DOM初始化完成进行地图初始化
    this.initMap()
  },
  methods: {
    initMap() {
      const _this = this
      AMapLoader.load({
        key: '14d457d3f35b030b5df746762572ff05', // 申请好的Web端开发者Key，首次调用 load 时必填
        version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ['AMap.MarkerCluster'], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        Loca: {
          // 是否加载 Loca， 缺省不加载
          version: '2.0.0' // Loca 版本，缺省 1.3.2
        }
      })
        .then((AMap) => {
          _this.AMap = AMap
          const map = new AMap.Map('container', {
            zoom: 13.6,
            center: [114.234998, 30.541778],
            zooms: [12, 22],
            pitch: 30,
            rotation: 0,
            showLabel: true,
            showIndoorMap: false,
            mapStyle: 'amap://styles/5bc7b4c624b3d980380368b3569abf7a',
            viewMode: '3D'
          })
          _this.map = map

          AMap.plugin(['AMap.ToolBar', 'AMap.ControlBar'], function () {
            // 在图面添加工具条控件, 工具条控件只有缩放功能
            map.addControl(new AMap.ToolBar({ position: { bottom: '0.25rem', right: '4.75rem' } }))
            // 工具条方向盘
            map.addControl(
              new AMap.ControlBar({
                position: { bottom: '1.1rem', right: 'calc(4.75rem - 30px)' }
                // position: { bottom: '-200px', right: 'calc(5rem - 30px)', transform: 'scale(0.4)' }
              })
            )
          })

          /**
           * 地图加载完成
           * */
          function getStyle(data, total, index) {
            const count = data.count
            const text = data.text
            let content = ''
            const colors = [
              '8,60,156',
              '66,130,198',
              '170,150,48',
              '78,200,211',
              '102,179,71',
              '232,140,80',
              '101,99,152',
              '188,79,151',
              '244,217,73',
              '105,49,246',
              '107,174,214'
            ]
            const size = Math.round(30 + Math.pow(count / total, 1 / 5) * 70)
            content = '<span class="showName">' + text + '</span>' + '<span class="showCount">' + count + '</span>'

            var style = {
              bgColor: 'rgba(' + colors[index] + ',.8)',
              borderColor: 'rgba(' + colors[index] + ',1)',
              text: content,
              size: size,
              color: '#ffffff',
              textAlign: 'center',
              boxShadow: '0px 0px 5px rgba(0,0,0,0.8)'
            }
            return style
          }
          map.on('complete', function () {
            console.log('地图加载完成')
            const markers = _this.streetMarkers
            let total = 0
            markers.forEach((item) => {
              total += item.count
            })
            markers.forEach((item, index) => {
              // 自定义点标记样式
              var styleObj = getStyle(item, total, index)
              var div = document.createElement('div')
              div.className = 'marker-street'
              div.style.backgroundColor = styleObj.bgColor
              div.style.width = styleObj.size + 'px'
              div.style.height = styleObj.size + 'px'
              div.style.border = 'solid 1px ' + styleObj.borderColor
              div.style.borderRadius = styleObj.size + 'px'
              div.innerHTML = styleObj.text
              div.style.color = styleObj.color
              div.style.textAlign = styleObj.textAlign
              div.style.boxShadow = styleObj.boxShadow

              const offsetSize = styleObj.size / 2

              const marker = new AMap.Marker({
                content: div,
                position: item.position, // 基点位置
                zooms: [10, 15],
                offset: new AMap.Pixel(-offsetSize, -offsetSize), // 相对于基点的偏移位置
                extData: { id: item.id }
              })
              // 自定义点击事件
              marker.on('click', function (e) {
                // var curZoom = map.getZoom()
                // if (curZoom < 20) {
                //   curZoom += 1
                // }
                const { id } = e.target.getExtData()
                _this.$store.commit('common/SET_STREETID', id)
                map.setZoomAndCenter(18.1, e.lnglat)
              })
              markers.push(marker)
            })

            map.add(markers)

            _this.selectedMarker = new AMap.Marker({
              icon: _this.iconSelectedMarker,
              offset: new AMap.Pixel(-32, -36)
            })

            _this.selectedMarker.on('click', (e) => {
              const markerData = e.target.getExtData()
              console.log(markerData)
              markerData.accessToken = _this.accessToken
              _this.$store.commit('common/SET_MARKERINFO', markerData)
            })
          })

          /**
           * 地图移动事件
           * 功能描述：地图移动时，给地图标记摄像头点位，此时请求点位接口需要传递的参数包括最大经纬度、最小经纬度、地图级别等。
           * 1.最大和最小经纬度 经纬度矩形边界为一个矩形的经纬度范围，用西南角和东北角的两个经纬度来描述，这两个经纬度分别代表边界的最小值和最大值。
           * 2.当前地图级别  var zoom = map.getZoom()
           * */
          map.on('moveend', () => {
            console.log('地图移动结束')
            // console.log('当前地图级别为' + map.getZoom())
            // console.log('获取东北角坐标' + map.getBounds().getNorthEast())
            // console.log('获取西南角坐标' + map.getBounds().getSouthWest())
            if (!_this.accessToken) {
              return false
            }
            this.handleGisMarkerList()
          })

          /**
           * 地图缩放事件
           * */
          map.on('zoomend', () => {
            console.log('地图层级变化')
            if (!_this.accessToken) {
              return false
            }
            this.handleGisMarkerList()
          })

          /**
           * 地图点击事件
           * */
          map.on('click', (e) => {
            console.log(e.lnglat.getLng() + ',' + e.lnglat.getLat())
          })
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 点聚合
    markerCluster(markers) {
      const _this = this
      const count = markers.length

      // 自定义聚合点样式
      const _renderClusterMarker = function (context) {
        const factor = Math.pow(context.count / count, 1 / 18)
        const div = document.createElement('div')
        const Hue = 180 - factor * 180
        const bgColor = 'hsla(' + Hue + ',100%,40%,0.7)'
        const fontColor = 'hsla(' + Hue + ',100%,90%,1)'
        const borderColor = 'hsla(' + Hue + ',100%,40%,1)'
        const shadowColor = 'hsla(' + Hue + ',100%,90%,1)'
        div.style.backgroundColor = bgColor
        const size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
        div.style.width = div.style.height = size + 'px'
        div.style.border = 'solid 1px ' + borderColor
        div.style.borderRadius = size / 2 + 'px'
        div.style.boxShadow = '0 0 5px ' + shadowColor
        div.innerHTML = context.count
        div.style.lineHeight = size + 'px'
        div.style.color = fontColor
        div.style.fontSize = '14px'
        div.style.textAlign = 'center'
        context.marker.setOffset(new _this.AMap.Pixel(-size / 2, -size / 2))
        context.marker.setContent(div)

        // 聚合点的点击事件
        context.marker.on('click', (e) => {
          let curZoom = _this.map.getZoom()
          if (curZoom < 20) {
            curZoom += 1
          }
          _this.map.setZoomAndCenter(curZoom, e.lnglat)
        })
      }

      // 自定义非聚合点样式
      const _renderMarker = function (context) {
        const data = context.data[0].data
        const street = data?.ownerDepartmentId
        // 图标优先级 故障 > 行业 > 街道 > 普通（无所属街道和所属行业）
        let icon
        if (
          // eslint-disable-next-line eqeqeq
          (data.encoderAlarmState == 1 && data.encoderEventTypeSet == 1) ||
          // eslint-disable-next-line eqeqeq
          (data.alarmState == 1 && data.eventTypeSet == 2) ||
          // eslint-disable-next-line eqeqeq
          (data.alarmState == 1 && data.eventTypeSet == 16 && data.eventSubTypeSet == 32) ||
          // eslint-disable-next-line eqeqeq
          (data.alarmState == 1 && data.eventTypeSet == 32)
        ) {
          icon = _this.iconAbnormalMarker
        } else {
          if (!isEmpty(_this.regionIds) && _this.regionIds.includes(data.regionId)) {
            icon = _this.iconRegionMarker
          } else {
            icon = _this.streetIcons[street] || _this.iconNormalMarker
          }
        }

        // 点标记样式
        const content = `<div style="width: 65px;height: 72px;"><img style="width: 100%;height: 100%;" src="${icon}"></div>`
        const offset = new _this.AMap.Pixel(-32, -36)
        context.marker.setContent(content)
        context.marker.setOffset(offset)
        // 设置标记携带的数据，点击事件会使用
        context.marker.setExtData(data)
        // 单个标记点击事件
        context.marker.on('click', (e) => {
          const position = e.target.getPosition()
          _this.selectedMarker.setPosition(position)
          _this.map.add(_this.selectedMarker)

          // 获取标记携带的数据
          const markerData = e.target.getExtData()
          markerData.accessToken = _this.accessToken
          _this.$store.commit('common/SET_MARKERINFO', markerData)

          _this.selectedMarker.setExtData(markerData)

          // if (_this.selectedNode.type !== 'dir') {
          //   _this.$store.commit('common/SET_SELECTEDNODE', {})
          // }
        })
      }

      // 完全自定义
      if (_this.cluster) {
        _this.cluster.setMap(null)
      }
      _this.cluster = new _this.AMap.MarkerCluster(_this.map, markers, {
        gridSize: 100, // 设置网格像素大小
        renderClusterMarker: _renderClusterMarker, // 自定义聚合点样式
        renderMarker: _renderMarker, // 自定义非聚合点样式
        maxZoom: 18 // 最大的聚合级别，大于该级别就不进行相应的聚合
      })
    },
    // 地图移动或缩放后重新加载数据
    async handleGisMarkerList() {
      try {
        const map = this.map
        // 地图移动结束后请求接口获取点标记数据
        const zoom = map.getZoom()
        if (zoom < 15) {
          this.markerCluster([])
          this.map.remove(this.selectedMarker)
          return false
        }
        const northEastLngLat = map.getBounds().getNorthEast()
        const southWestLngLat = map.getBounds().getSouthWest()
        // 坐标转换
        const maxLngLat = gcj02towgs84(northEastLngLat.lng, northEastLngLat.lat)
        const minLngLat = gcj02towgs84(southWestLngLat.lng, southWestLngLat.lat)
        const params = {
          accessToken: this.accessToken,
          encoderStateRequired: 1,
          filterText: '',
          geographyCoordinateFiltered: 1,
          maxLatitude: maxLngLat[1],
          maxLongitude: maxLngLat[0],
          minLatitude: minLngLat[1],
          minLongitude: minLngLat[0],
          minZoom: zoom,
          pageNum: 1,
          pageSize: 1000,
          regionId: 0,
          resourceId: 0,
          resourceKind: 21,
          resourceSubType: 255,
          streamServerInfoRequired: 1
        }
        const { data } = await getGisMarkerList(params)
        if (data && data.length) {
          const markers = []

          for (var i = 0; i < data.length; i++) {
            const curPosition = wgs84togcj02(data[i].longitude, data[i].latitude)
            const marker = {
              lnglat: curPosition,
              data: data[i]
            }
            markers.push(marker)
          }
          this.markerCluster(markers)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style lang="scss">
.marker-street {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
}
.showCount,
.showName {
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 90%;
  line-height: 20px;
}
</style>
<style lang="scss" scoped>
#container {
  padding: 0px;
  margin: 0px;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
}
</style>

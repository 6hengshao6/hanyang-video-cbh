<template>
  <div id="viewDiv" />
</template>

<script>
import { loadModules } from 'esri-loader'
import debounce from 'lodash.debounce'
import isEmpty from 'lodash.isempty'
import trim from 'lodash.trim'
import { getGisMarkerList } from '@/api/home/index'
import { getStreetsStatistics } from '@/api/common/index'
import { mapGetters } from 'vuex'
import { getChildList } from '@/utils/index'

export default {
  name: 'ArcGIS',
  data() {
    return {
      map: null,
      view: null,
      camerasLayer: null,
      streetCamerasLayer: null,
      webMercatorUtils: null,
      // 当前选中节点的区域集合
      regionIds: []
    }
  },
  computed: {
    ...mapGetters(['streetId', 'selectedNode', 'regionTree', 'streetList'])
  },
  watch: {
    streetId(newV) {
      try {
        if (newV) {
          const street = this.streetList.find((item) => item.id === newV)
          if (!street?.deptcode) return
          const position = street.deptcode.split(',')
          const center = [Number(trim(position[0])), Number(trim(position[1]))]
          this.view.goTo({ center, zoom: 15 }).then(() => {
            this.getMarkersData()
          })
        } else {
          this.resetMap()
        }
      } catch (error) {
        console.log(error)
      }
    },
    selectedNode: {
      handler(newV) {
        try {
          if (isEmpty(newV)) return false

          if (newV.type === 'dir') {
            const nodeId = newV.id
            // eslint-disable-next-line eqeqeq
            if (nodeId == 1) {
              this.regionIds = []
            } else {
              // 找出区域id集合
              const regionIds = getChildList(this.regionTree, nodeId, [])
              regionIds.push(nodeId)
              this.regionIds = regionIds
            }

            this.getMarkersData()
          } else {
            this.regionIds = []
            // 点击了摄像头
            if (newV.longitude === 0 || newV.latitude === 0) return false
            this.view.goTo({ center: [newV.longitude, newV.latitude], zoom: 18 }).then(() => {
              this.getMarkersData()
            })
          }
        } catch (error) {
          console.log(error)
        }
      },
      deep: false
    }
  },
  mounted() {
    this.createMapView()
  },
  beforeDestroy() {
    this.map && this.map.destroy()
    this.view && this.view.destroy()
    this.map = null
    this.view = null
  },
  methods: {
    // 创建二维场景
    async createMapView() {
      const _this = this
      const options = {
        url: '/arcgis/api/4.26/init.js',
        css: '/arcgis/api/4.26/esri/themes/light/main.css'
      }

      const [
        Basemap,
        TileLayer,
        Map,
        MapView,
        FeatureLayer,
        BasemapGallery,
        LocalBasemapsSource,
        Home,
        Legend,
        Expand,
        webMercatorUtils
      ] = await loadModules(
        [
          'esri/Basemap',
          'esri/layers/TileLayer',
          'esri/Map',
          'esri/views/MapView',
          'esri/layers/FeatureLayer',
          'esri/widgets/BasemapGallery',
          'esri/widgets/BasemapGallery/support/LocalBasemapsSource',
          'esri/widgets/Home',
          'esri/widgets/Legend',
          'esri/widgets/Expand',
          'esri/geometry/support/webMercatorUtils'
        ],
        options
      )

      _this.webMercatorUtils = webMercatorUtils

      const baseLayerMap = {
        1: 'http://10.34.4.103:8010/ServiceAdapter/MAP/EMAP_DEEPWEB/7f458ae683f64325937291c9b215f22d',
        2: 'http://10.34.4.103:8010/ServiceAdapter/MAP/EMAP_WEB/7f458ae683f64325937291c9b215f22d',
        3: 'http://10.34.4.103:8010/ServiceAdapter/MAP/JingTaiSanWei_WEB/7f458ae683f64325937291c9b215f22d'
      }

      // 创建切片底图
      const darkLayer = new TileLayer({
        url: baseLayerMap[1]
      })
      const lightLayer = new TileLayer({
        url: baseLayerMap[2]
      })
      const sceneLayer = new TileLayer({
        url: baseLayerMap[3]
      })

      // 创建底图对象
      const darkMap = new Basemap({
        baseLayers: [darkLayer],
        title: '政务电子地图（夜光版）',
        id: 1,
        thumbnailUrl: require('@/assets/images/arcgis/basemap/dark.png')
      })
      const lightMap = new Basemap({
        baseLayers: [lightLayer],
        title: '政务电子地图（标准版）',
        id: 2,
        thumbnailUrl: require('@/assets/images/arcgis/basemap/light.png')
      })
      const sceneMap = new Basemap({
        baseLayers: [sceneLayer],
        title: '静态三维地图',
        id: 3,
        thumbnailUrl: require('@/assets/images/arcgis/basemap/scene.png')
      })

      // 创建区界线、街界线、社区界线底图
      const qjxLayer = new FeatureLayer({
        id: 'qjxLayer',
        title: '区界线',
        url: 'http://10.34.4.103:8010/ServiceAdapter/MAP/QuJieXian/7f458ae683f64325937291c9b215f22d/0',
        visible: true,
        popupEnabled: false
      })
      const jjxLayer = new FeatureLayer({
        id: 'jjxLayer',
        title: '街界线',
        url: 'http://10.34.4.103:8010/ServiceAdapter/MAP/JieJieXian/7f458ae683f64325937291c9b215f22d/0',
        visible: false,
        popupEnabled: false
      })
      const sqjxLayer = new FeatureLayer({
        id: 'sqjxLayer',
        title: '社区界线',
        url: 'http://10.34.4.103:8010/ServiceAdapter/MAP/SheQuJieXian/7f458ae683f64325937291c9b215f22d/0',
        visible: false,
        popupEnabled: false
      })

      // 聚合点配置
      const clusterConfig = {
        type: 'cluster',
        clusterRadius: '100px',
        clusterMinSize: '24px',
        clusterMaxSize: '60px',
        symbol: {
          type: 'simple-marker',
          style: 'circle',
          color: '#69dcff',
          outline: {
            color: 'rgba(255, 255, 255, 0.5)',
            width: 1
          }
        },
        labelingInfo: [
          {
            deconflictionStrategy: 'none',
            labelExpressionInfo: {
              expression: "Text($feature.cluster_count, '#,###')"
            },
            symbol: {
              type: 'text',
              color: 'rgba(0, 0, 0, 0.4)',
              font: {
                weight: 'bold',
                family: 'Noto Sans',
                size: '14px'
              }
            },
            labelPlacement: 'center-center'
          }
        ]
      }

      // 摄像机点位图层
      const camerasUniqueValueInfos = [
        {
          value: 'online',
          label: '在线',
          symbol: {
            type: 'picture-marker',
            url: require('@/assets/images/arcgis/mark/mark_normal.png'),
            width: '36px',
            height: '36px'
          }
        },
        {
          value: 'offline',
          label: '离线',
          symbol: {
            type: 'picture-marker',
            url: require('@/assets/images/arcgis/mark/mark_abnormal.png'),
            width: '36px',
            height: '36px'
          }
        },
        {
          value: 'region',
          label: '区域',
          symbol: {
            type: 'picture-marker',
            url: require('@/assets/images/arcgis/mark/mark_purple.png'),
            width: '36px',
            height: '36px'
          }
        }
      ]
      _this.streetList.forEach((item) => {
        camerasUniqueValueInfos.push({
          value: 'street-' + item.id,
          label: item.name,
          symbol: {
            type: 'picture-marker',
            url: require(`@/assets/images/arcgis/mark/street/${item.id}.png`),
            width: '36px',
            height: '36px'
          }
        })
      })
      const camerasLayer = new FeatureLayer({
        id: 'camerasLayer',
        title: '点位图例',
        source: [],
        outFields: ['*'],
        fields: [
          {
            name: 'ObjectID',
            alias: 'ObjectID',
            type: 'oid'
          },
          {
            name: 'name',
            alias: 'name',
            type: 'string'
          },
          {
            name: 'regionId',
            alias: 'regionId',
            type: 'integer'
          },
          {
            name: 'ownerDepartmentId',
            alias: 'ownerDepartmentId',
            type: 'integer'
          },
          {
            name: 'streamOpenMode',
            alias: 'streamOpenMode',
            type: 'integer'
          },
          {
            name: 'alarmState',
            alias: 'alarmState',
            type: 'integer'
          },
          {
            name: 'streamObjectKind',
            alias: 'streamObjectKind',
            type: 'integer'
          },
          {
            name: 'streamServerIp',
            alias: 'streamServerIp',
            type: 'string'
          },
          {
            name: 'streamServerPort3',
            alias: 'streamServerPort3',
            type: 'integer'
          },
          {
            name: 'id',
            alias: 'id',
            type: 'integer'
          },
          {
            name: 'longitude',
            alias: 'longitude',
            type: 'double'
          },
          {
            name: 'latitude',
            alias: 'latitude',
            type: 'double'
          },
          {
            name: 'encoderVideoInputNum',
            alias: 'encoderVideoInputNum',
            type: 'string'
          },
          {
            name: 'icon',
            alias: 'icon',
            type: 'string'
          }
        ],
        objectIdField: 'ObjectID',
        geometryType: 'point',
        spatialReference: { wkid: 4326 },
        // 聚合点位
        featureReduction: clusterConfig,
        // 实际点位 根据摄像机状态不同，显示的不同状态的图标
        renderer: {
          type: 'unique-value',
          legendOptions: {
            title: '图标'
          },
          field: 'icon',
          defaultSymbol: {
            type: 'picture-marker',
            url: require('@/assets/images/arcgis/mark/mark_normal.png'),
            width: '36px',
            height: '36px'
          },
          uniqueValueInfos: camerasUniqueValueInfos,
          visualVariables: [
            {
              type: 'color',
              field: 'cluster_count',
              legendOptions: {
                title: '聚合点颜色'
              },
              stops: [
                { value: 1, color: 'rgba(255, 255, 255, 0.8)' },
                { value: 5, color: 'rgba(156, 204, 0, 0.8)' },
                { value: 10, color: 'rgba(204, 197, 0, 0.8)' },
                { value: 20, color: 'rgba(204, 139, 0, 0.8)' },
                { value: 50, color: 'rgba(204, 75, 0, 0.8)' },
                { value: 100, color: 'rgba(204, 0, 0, 0.8)' }
              ]
            },
            {
              type: 'size',
              field: 'cluster_count',
              legendOptions: {
                title: '聚合点大小'
              },
              stops: [
                { value: 1, size: 30 },
                { value: 5, size: 30 },
                { value: 10, size: 36 },
                { value: 20, size: 48 },
                { value: 50, size: 60 },
                { value: 100, size: 72 }
              ]
            }
          ]
        }
      })
      _this.camerasLayer = camerasLayer

      // 街道统计点位图层
      const streetCamerasLayer = new FeatureLayer({
        id: 'streetCamerasLayer',
        title: '街道点位统计',
        source: [],
        outFields: ['*'],
        fields: [
          {
            name: 'ObjectID',
            alias: 'ObjectID',
            type: 'oid'
          },
          {
            name: 'text',
            alias: 'text',
            type: 'string'
          },
          {
            name: 'count',
            alias: 'count',
            type: 'integer'
          },
          {
            name: 'id',
            alias: 'id',
            type: 'integer'
          }
        ],
        objectIdField: 'ObjectID',
        geometryType: 'point',
        spatialReference: { wkid: 4326 },
        // 实际点位 根据街道id，显示不同的颜色
        renderer: {
          type: 'unique-value',
          legendOptions: {
            title: '街道颜色'
          },
          field: 'id',
          defaultSymbol: {
            type: 'simple-marker',
            size: 60,
            color: 'rgba(105,220,255,0.8)',
            outline: {
              color: 'rgba(0, 139, 174, 0.5)',
              width: 1
            }
          }
        },
        labelingInfo: [
          {
            deconflictionStrategy: 'none',
            labelExpressionInfo: {
              expression: `
                  var count = Text($feature.count, '#,###');
                  var text = $feature.text;
                  return text + \`\n\${count}\`;
                `
            },
            symbol: {
              type: 'text',
              color: 'rgba(255, 255, 255, 0.8)',
              font: {
                weight: 'bold',
                size: '14px'
              }
            },
            labelPlacement: 'center-center'
          }
        ]
      })
      _this.streetCamerasLayer = streetCamerasLayer

      const map = new Map({
        basemap: darkMap,
        layers: [camerasLayer, streetCamerasLayer, qjxLayer, jjxLayer, sqjxLayer]
      })
      _this.map = map

      const view = new MapView({
        container: 'viewDiv',
        map,
        center: [114.21057787571793, 30.543974850338206], // 墨水湖经纬度
        zoom: 13, // 默认层级
        highlightOptions: {
          color: [255, 27, 27],
          fillOpacity: 0.4
          // haloOpacity: 0.1 // 外围光圈
        }
      })

      // view.ui.components = [] // 清除掉地图左上角默认的缩放图标
      view.ui.remove('attribution') // 清除地图下方自带的esri官方标志
      _this.view = view

      // 图例部件
      const legendExpand = new Expand({
        view,
        content: new Legend({ view, layerInfos: [{ layer: camerasLayer }] }),
        group: 'top-left'
      })
      // 创建底图切换控件
      const basemapGallery = new BasemapGallery({
        view,
        source: new LocalBasemapsSource({
          basemaps: [darkMap, lightMap, sceneMap]
        })
      })
      const bgExpand = new Expand({ view, content: basemapGallery, group: 'top-left' })
      // Home部件
      const home = new Home({ view })
      view.ui.add([legendExpand, bgExpand, home], 'top-left')

      view.when(() => {
        // 监听zoom变化
        view.watch(
          'zoom',
          debounce(function (zoom) {
            console.log('zoom变为' + zoom)
            // 区/街道/社区 界线显示隐藏
            qjxLayer.visible = false
            jjxLayer.visible = false
            sqjxLayer.visible = false
            if (zoom <= 13) {
              qjxLayer.visible = true
            } else if (zoom > 13 && zoom < 16) {
              jjxLayer.visible = true
            } else {
              sqjxLayer.visible = true
            }
            if (zoom >= 17) {
              // 关闭聚合
              camerasLayer.featureReduction = null
            } else {
              // 开启聚合
              camerasLayer.featureReduction = clusterConfig
            }
            _this.getMarkersData()
          }, 300)
        )

        // 监听地图拖动
        view.on(
          'drag',
          debounce(function (event) {
            // 从event中获取鼠标移动前后的绝对距离，大于某一值的时候才请求数据
            const x = Math.abs(event.x - event.origin.x)
            const y = Math.abs(event.y - event.origin.y)
            if (Math.hypot(x, y) > 80) {
              _this.getMarkersData()
            }
          }, 300)
        )

        // 加载摄像机点位图层后，绑定点击事件
        view.whenLayerView(camerasLayer).then(function (layerView) {
          let highlightSelect, currentId
          const clickEventHandler1 = (event) => {
            view.hitTest(event, { include: camerasLayer }).then((response) => {
              const graphicHits = response.results?.filter((hitResult) => hitResult.type === 'graphic')
              if (graphicHits?.length > 0) {
                const graphic = graphicHits[0].graphic
                const isAggregate = graphic.isAggregate
                const attributes = graphic.attributes
                const id = attributes.id

                if (isAggregate) {
                  // 聚合点 不高亮 层级+1
                  view.goTo({
                    target: graphic,
                    zoom: view.zoom + 1
                  })
                  if (highlightSelect) {
                    highlightSelect.remove()
                    highlightSelect = null
                  }
                } else {
                  // 普通点 高亮 打开点位详情对话框

                  if (highlightSelect && currentId !== id) {
                    // 选中了新的点
                    highlightSelect.remove()
                    highlightSelect = null
                  }

                  if (highlightSelect) {
                    // 选中了相同的点
                    return
                  }

                  highlightSelect = layerView.highlight(graphic)
                  currentId = id

                  const markerData = Object.assign(attributes, { accessToken: _this.accessToken })
                  _this.$store.commit('common/SET_MARKERINFO', markerData)
                }
              } else {
                console.log('没有选中点')
                if (highlightSelect) {
                  highlightSelect.remove()
                  highlightSelect = null
                }
              }
            })
          }
          view.on('click', clickEventHandler1)
        })

        // 加载街道点位图层后，绑定点击事件
        view.whenLayerView(streetCamerasLayer).then(function (layerView) {
          const clickEventHandler2 = (event) => {
            view.hitTest(event, { include: streetCamerasLayer }).then((response) => {
              const graphicHits = response.results?.filter((hitResult) => hitResult.type === 'graphic')
              if (graphicHits?.length > 0) {
                const graphic = graphicHits[0].graphic
                const attributes = graphic.attributes
                const id = attributes.id
                _this.$store.commit('common/SET_STREETID', id)
                view
                  .goTo({
                    target: graphic,
                    zoom: 15
                  })
                  .then(() => {
                    setTimeout(() => {
                      _this.getMarkersData()
                    }, 300)
                  })
              }
            })
          }
          view.on('click', clickEventHandler2)
        })

        // 获取街道数据
        _this.addStreetsFeatures()
      })
    },
    getMarkersData: debounce(async function () {
      const { zoom } = this.view
      if (zoom >= 15) {
        this.streetCamerasLayer.visible = false
        this.camerasLayer.visible = true
        const extent = this.getExtentLngLat()
        const params = Object.assign(
          {
            accessToken: this.accessToken,
            encoderStateRequired: 1,
            filterText: '',
            geographyCoordinateFiltered: 1,
            minZoom: zoom,
            pageNum: 1,
            pageSize: 1000,
            regionId: 0,
            resourceId: 0,
            resourceKind: 21,
            resourceSubType: 255,
            streamServerInfoRequired: 1
          },
          extent
        )
        const { data } = await getGisMarkerList(params)
        // 动态生成icon图标
        data?.forEach((item) => {
          const street = item.ownerDepartmentId
          // 图标优先级 故障 > 行业 > 街道 > 普通（无所属街道和所属行业）
          let icon
          if (
            // eslint-disable-next-line eqeqeq
            (item.encoderAlarmState == 1 && item.encoderEventTypeSet == 1) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 2) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 16 && item.eventSubTypeSet == 32) ||
            // eslint-disable-next-line eqeqeq
            (item.alarmState == 1 && item.eventTypeSet == 32)
          ) {
            icon = 'offline'
          } else {
            if (!isEmpty(this.regionIds) && this.regionIds.includes(item.regionId)) {
              icon = 'region'
            } else {
              icon = street ? 'street-' + street : 'online'
            }
          }
          item.icon = icon
        })
        const features = data?.map((item) => {
          return {
            attributes: item,
            geometry: {
              type: 'point',
              longitude: item.longitude,
              latitude: item.latitude
            }
          }
        })
        await this.removeFeatures()
        await this.addFeatures(features)
        console.log('更新了点位数据')
      } else {
        this.streetCamerasLayer.visible = true
        this.camerasLayer.visible = false
        this.$store.commit('common/SET_STREETID', undefined)
        await this.removeFeatures()
      }
    }, 500),
    async addFeatures(features) {
      if (isEmpty(features)) return
      const addEdits = {
        addFeatures: features
      }
      await this.camerasLayer.applyEdits(addEdits)
    },
    async removeFeatures() {
      const results = await this.camerasLayer.queryFeatures()
      if (results.features.length) {
        const deleteEdits = {
          deleteFeatures: results.features
        }
        await this.camerasLayer.applyEdits(deleteEdits)
      }
    },
    // 获取东北角坐标和西南角坐标
    getExtentLngLat() {
      try {
        if (!this.view || !this.webMercatorUtils) return
        const {
          extent: { xmax, xmin, ymax, ymin }
        } = this.view
        const maxLngLat = this.webMercatorUtils.xyToLngLat(xmax, ymax)
        const minLngLat = this.webMercatorUtils.xyToLngLat(xmin, ymin)
        return {
          maxLatitude: maxLngLat[1],
          maxLongitude: maxLngLat[0],
          minLatitude: minLngLat[1],
          minLongitude: minLngLat[0]
        }
      } catch (error) {
        console.log(error)
      }
    },
    async addStreetsFeatures() {
      try {
        // const colors = [
        //   '8,60,156',
        //   '66,130,198',
        //   '170,150,48',
        //   '78,200,211',
        //   '102,179,71',
        //   '232,140,80',
        //   '101,99,152',
        //   '188,79,151',
        //   '244,217,73',
        //   '105,49,246',
        //   '107,174,214'
        // ]
        // const streetsData = [
        //   {
        //     id: 1,
        //     position: [114.2386660568723, 30.56280648324918],
        //     text: '晴川街',
        //     count: 525
        //   },
        //   {
        //     id: 10001,
        //     position: [114.27375205900131, 30.549592540993864],
        //     text: '建桥街',
        //     count: 932
        //   },
        //   {
        //     id: 10006,
        //     position: [114.26279007362953, 30.539436614033832],
        //     text: '鹦鹉街',
        //     count: 385
        //   },
        //   {
        //     id: 10007,
        //     position: [114.24880340369438, 30.52304701520484],
        //     text: '洲头街',
        //     count: 609
        //   },
        //   {
        //     id: 10008,
        //     position: [114.24350541657881, 30.557252014225575],
        //     text: '五里墩街',
        //     count: 562
        //   },
        //   {
        //     id: 10009,
        //     position: [114.21516933260655, 30.51089565969355],
        //     text: '江堤街',
        //     count: 479
        //   },
        //   {
        //     id: 10011,
        //     position: [114.20926053148483, 30.557514747547355],
        //     text: '琴断口街',
        //     count: 545
        //   },
        //   {
        //     id: 10012,
        //     position: [114.21080453632905, 30.53658170266917],
        //     text: '四新街',
        //     count: 380
        //   },
        //   {
        //     id: 10013,
        //     position: [114.19777891515261, 30.57394613125737],
        //     text: '江汉二桥街',
        //     count: 497
        //   },
        //   {
        //     id: 10014,
        //     position: [114.18473080664094, 30.540876289578787],
        //     text: '龙阳街',
        //     count: 283
        //   },
        //   {
        //     id: 10015,
        //     position: [114.16829478951666, 30.568611547507622],
        //     text: '永丰街',
        //     count: 690
        //   }
        // ]
        this.streetCamerasLayer.renderer.uniqueValueInfos = this.streetList.map((item) => {
          const { id, name, remark } = item
          return {
            value: id,
            label: name,
            symbol: {
              type: 'simple-marker',
              size: 60,
              color: `rgba(${remark || '105,220,255'},0.8)`,
              outline: {
                color: `rgba(${remark || '105,220,255'},0.1)`,
                width: 1
              }
            }
          }
        })
        const { data } = await getStreetsStatistics({})
        const features = this.streetList.map((street) => {
          const { id, name, deptcode } = street
          const position = deptcode.split(',') || []
          // eslint-disable-next-line eqeqeq
          const totalCount = data?.find((item) => item.id == street.id).totalCount || 0
          return {
            attributes: {
              id,
              text: name,
              count: totalCount
            },
            geometry: {
              type: 'point',
              longitude: position[0],
              latitude: position[1]
            }
          }
        })
        this.streetCamerasLayer.applyEdits({ addFeatures: features })
      } catch (error) {
        console.log(error)
      }
    },
    resetMap() {
      this.view.goTo({
        center: [114.21057787571793, 30.543974850338206], // 墨水湖经纬度
        zoom: 13 // 默认层级
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/arcgis.scss';
</style>

<style lang="scss" scoped>
#viewDiv {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
::v-deep .esri-ui-top-left {
  top: 200px;
  left: 360px;
}
</style>

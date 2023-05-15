<template>
  <div
    :id="'video' + id"
    ref="videoContainer"
    class="jessibuca"
    :style="`position: relative;width: 100%;height:${height};`"
  />
</template>

<script>
import watermark from '@/utils/watermark.js'
import { mapGetters } from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Jessibuca',
  props: {
    // id
    id: {
      type: Number,
      default: 0
    },
    // 播放地址
    videoUrl: {
      type: String,
      default: ''
    },
    // 静音，不对音频数据解码
    hasAudio: {
      type: Boolean,
      default: false
    },
    // 播放器高度
    height: {
      type: String,
      default: '500px'
    },
    // 是否自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 显示隐藏
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      jessibuca: null,
      version: '',
      wasm: false,
      vc: 'ff',
      playing: false,
      quieting: true,
      loaded: false, // mute
      showOperateBtns: true,
      showBandwidth: true,
      err: '',
      speed: 0,
      performance: '',
      fps: '',
      volume: 1,
      rotate: 0,
      useWCS: false,
      useMSE: true,
      useOffscreen: false,
      recording: false,
      isDebug: false,
      recordType: 'mp4',
      scale: 0
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  watch: {
    videoUrl(newV, oldV) {
      if (!this.autoplay && !oldV) return
      this.play(newV)
    },
    visible(newV, oldV) {
      if (!newV) {
        this.destroy()
      }
    }
  },
  mounted() {
    window.onerror = (msg) => (this.err = msg)
    this.$nextTick(() => {
      setTimeout(() => {
        this.autoplay ? this.play(this.videoUrl) : ''
      }, 300)
    })
    const name = this.userInfo?.fullname || '游客'
    if (name) {
      watermark.set(name, this.$refs.videoContainer)
    }
  },
  destroyed() {
    this.destroy()
  },
  methods: {
    create(options) {
      options = options || {}
      this.jessibuca = new window.Jessibuca(
        Object.assign(
          {
            container: this.$refs.videoContainer,
            videoBuffer: 0.5, // 缓存时长
            isResize: false,
            useWCS: this.useWCS,
            useMSE: this.useMSE,
            text: '',
            // background: "bg.jpg",
            loadingText: '加载中...', // 视频加载转圈时的提示文字
            hasAudio: this.hasAudio, // 是否有音频，如果设置为false，则不对音频数据解码，提升性能
            debug: false, // 是否开启控制台调试打印
            hotKey: true,
            supportDblclickFullscreen: true, // 是否支持屏幕的双击事件，触发全屏和取消全屏事件
            showBandwidth: this.showBandwidth, // 显示网速
            operateBtns: {
              fullscreen: this.showOperateBtns, // 全屏按钮
              screenshot: this.showOperateBtns, // 截图按钮
              play: this.showOperateBtns, // 播放暂停按钮
              audio: this.showOperateBtns, // 声音按钮
              record: this.showOperateBtns && false // 录制按钮
            },
            vod: this.vod,
            forceNoOffscreen: !this.useOffscreen, // 是否不使用离屏模式，提升渲染能力
            isNotMute: true, // 是否开启声音，默认是关闭声音播放的
            timeout: 20
          },
          options
        )
      )
      var _this = this
      this.jessibuca.on('load', function () {
        console.log('on load')
      })

      this.jessibuca.on('log', function (msg) {
        console.log('on log', msg)
      })
      this.jessibuca.on('record', function (msg) {
        console.log('on record:', msg)
      })
      this.jessibuca.on('pause', function () {
        console.log('on pause')
        _this.playing = false
      })
      this.jessibuca.on('play', function () {
        console.log('on play')
        _this.playing = true
        _this.$emit('onPlay')
      })
      this.jessibuca.on('fullscreen', function (msg) {
        console.log('on fullscreen', msg)
      })

      this.jessibuca.on('mute', function (msg) {
        console.log('on mute', msg)
        _this.quieting = msg
      })

      // this.jessibuca.on("mute", function (msg) {
      //   console.log("on mute2", msg);
      // });

      this.jessibuca.on('audioInfo', function (msg) {
        console.log('audioInfo', msg)
      })

      // this.jessibuca.on("bps", function (bps) {
      //   // console.log('bps', bps);
      // });
      // let _ts = 0;
      // this.jessibuca.on("timeUpdate", function (ts) {
      //     console.log('timeUpdate,old,new,timestamp', _ts, ts, ts - _ts);
      //     _ts = ts;
      // });

      this.jessibuca.on('videoInfo', function (info) {
        console.log('videoInfo', info)
      })

      this.jessibuca.on('error', function (error) {
        console.log('error', error)
        // _this.handleSaveLog('error')
      })

      this.jessibuca.on('timeout', function () {
        console.log('timeout')
        // _this.handleSaveLog('timeout')
      })

      this.jessibuca.on('start', function () {
        console.log('frame start')
      })

      this.jessibuca.on('performance', function (performance) {
        var show = '卡顿'
        if (performance === 2) {
          show = '非常流畅'
        } else if (performance === 1) {
          show = '流畅'
        }
        _this.performance = show
      })
      this.jessibuca.on('buffer', function (buffer) {
        console.log('buffer', buffer)
      })

      this.jessibuca.on('stats', function (stats) {
        console.log('stats', stats)
        _this.fps = stats.fps
      })

      this.jessibuca.on('kBps', function (kBps) {
        console.log('kBps', kBps)
      })

      // this.jessibuca.on('play', () => {
      //   this.playing = true
      //   this.loaded = true
      //   this.quieting = this.jessibuca.isMute()
      // })

      this.jessibuca.on('recordingTimestamp', (ts) => {
        console.log('recordingTimestamp', ts)
      })

      this.jessibuca.on('playToRenderTimes', (times) => {
        console.log(times)
      })
      // console.log(this.jessibuca);
    },
    play(url) {
      if (!url || !url.length === 0) {
        console.log('当前摄像头出错，请稍后重试')
        this.pause()
        return
      }

      if (this.jessibuca) {
        this.destroy()
      }

      this.create()
      // this.jessibuca.on('play', () => {
      //   this.playing = true
      // })

      if (this.jessibuca.hasLoaded()) {
        this.jessibuca.play(url)
      } else {
        this.jessibuca.on('load', () => {
          this.jessibuca.play(url)
        })
      }
    },
    playBtnClick() {
      this.play(this.videoUrl)
    },
    mute() {
      this.jessibuca.mute()
    },
    cancelMute() {
      this.jessibuca.cancelMute()
    },

    pause() {
      if (this.jessibuca) {
        this.jessibuca.pause()
      }
      this.playing = false
      this.err = ''
      this.performance = ''
    },
    volumeChange() {
      this.jessibuca.setVolume(this.volume)
    },
    rotateChange() {
      this.jessibuca.setRotate(this.rotate)
    },
    destroy() {
      if (this.jessibuca) {
        this.jessibuca.destroy()
      }
      // this.create();
      this.jessibuca = null
      this.playing = false
      this.loaded = false
      this.performance = ''
    },

    fullscreen() {
      this.jessibuca.setFullscreen(true)
    },

    clearView() {
      this.jessibuca.clearView()
    },

    startRecord() {
      const time = new Date().getTime()
      this.jessibuca.startRecord(time, this.recordType)
    },

    stopAndSaveRecord() {
      this.jessibuca.stopRecordAndSave()
    },

    screenShot() {
      this.jessibuca.screenshot()
    },

    restartPlay(type) {
      if (type === 'mse') {
        this.useWCS = false
        this.useOffscreen = false
      } else if (type === 'wcs') {
        this.useMSE = false
      } else if (type === 'offscreen') {
        this.useMSE = false
      }

      this.destroy()
      setTimeout(() => {
        this.play()
      }, 100)
    },

    changeBuffer() {
      this.jessibuca.setBufferTime(Number(this.$refs.buffer.value))
    },

    scaleChange() {
      this.jessibuca.setScaleMode(this.scale)
    }
  }
}
</script>
<style scoped></style>

module.exports = [
  {
    url: '/home/industry',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取就业行业数据成功',
        data: [
          {
            type: '旅游行业',
            value: 200
          },
          {
            type: '教育培训',
            value: 300
          },
          {
            type: '游戏行业',
            value: 300
          },
          {
            type: '医疗行业',
            value: 900
          },
          {
            type: '电商行业',
            value: 1500
          },
          {
            type: '社交行业',
            value: 1200
          },
          {
            type: '金融行业',
            value: 600
          }
        ]
      }
    }
  },
  {
    url: '/home/person',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取人员变化数据成功',
        data: {
          x: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
          y: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
          ]
        }
      }
    }
  },
  {
    url: '/home/age',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取年龄分布数据成功',
        data: [
          { value: 1, name: '0岁以下' },
          { value: 4, name: '20-29岁' },
          { value: 2, name: '30-39岁' },
          { value: 2, name: '40-49岁' },
          { value: 1, name: '50岁以上' }
        ]
      }
    }
  },
  {
    url: '/home/skill',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取技能掌握数据成功',
        data: [
          {
            name: 'HTML5',
            value: 70
          },
          {
            name: 'CSS3',
            value: 34
          },
          {
            name: 'JavaScript',
            value: 60
          },
          {
            name: 'Vue',
            value: 78
          },
          {
            name: 'Node',
            value: 69
          }
        ]
      }
    }
  },
  {
    url: '/home/play',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取播放量数据成功',
        data: {
          x: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
          y: [
            [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 60, 20, 40, 20, 40],
            [50, 30, 50, 60, 10, 50, 30, 50, 60, 40, 60, 40, 80, 30, 50, 60, 10, 50, 30, 70, 20, 50, 10, 40, 50, 30, 70, 20, 50, 10, 40]
          ]
        }
      }
    }
  },
  {
    url: '/home/area',
    type: 'get',
    response() {
      return {
        code: '00',
        message: '获取地区分布数据成功',
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '深圳' },
          { value: 42, name: '广东' }
        ]
      }
    }
  }
]

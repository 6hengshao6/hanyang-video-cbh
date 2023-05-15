/**
 * 柱状图、折线图等的x轴和y轴样式配置
 * @return {Object}
 */
export const Axis1 = {
  xAxis: {
    label: {
      style: {
        fontSize: 12,
        fill: '#fff'
      }
    },
    grid: {
      line: {
        style: {
          stroke: '#1F63A3',
          lineWidth: 1,
          strokeOpacity: 0.2
        }
      }
    }
  },
  yAxis: {
    label: {
      style: {
        fontSize: 12,
        fill: '#fff'
      }
    },
    line: null,
    tickLine: null,
    grid: {
      line: {
        style: {
          stroke: '#1F63A3',
          lineWidth: 1,
          strokeOpacity: 0.2
        }
      }
    }
  }
}

/**
 * 条形图等的x轴和y轴样式配置
 * @return {Object}
 */
export const Axis2 = {
  xAxis: false,
  yAxis: {
    label: {
      style: {
        fontSize: 12,
        fill: '#fff'
      }
    },
    line: null,
    tickLine: null,
    grid: {
      line: {
        style: {
          stroke: '#1F63A3',
          lineWidth: 1,
          strokeOpacity: 0.2
        }
      }
    }
  }
}

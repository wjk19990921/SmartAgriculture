var myChart = echarts.init(document.getElementById('left3'));
const colors = ['#5470C6', '#91CC75', '#EE6666'];
      // 指定图表的配置项和数据
var option = {
    title: {
        text: '产量/种植面积',
        left: 'center',
        textStyle:{
                fontSize: 18,//字体大小
                color: 'white'//字体颜色
              },
  },
  color: colors,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  grid: {
    right: '15%',
    left:'20%'
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['产量', '种植面积', 'Temperature'],
    textStyle:{
                fontSize: 10,//字体大小
                color: 'white'//字体颜色
              },
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      // prettier-ignore
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '产量',
      position: 'right',
      alignTicks: true,
      offset: 0,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[1]
        }
      },
      axisLabel: {
        formatter: '{value} 顿'
      }
    },
    {
      type: 'value',
      name: '种植面积',
      position: 'left',
      alignTicks: true,
      axisLine: {
        show: true,
        lineStyle: {
          color: colors[2]
        }
      },
      axisLabel: {
        formatter: '{value} 亩'
      }
    }
  ],
  series: [
    {
      name: '产量',
      type: 'bar',
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '种植面积',
      type: 'bar',
      yAxisIndex: 1,
      data: [
        1.6, 2.9, 3,4.4,5.7,9.7,21.6,23.2,6.7,4.8,3.0,13.0]
    },

  ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
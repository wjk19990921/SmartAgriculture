var myChart = echarts.init(document.getElementById('left2'));
// 指定图表的配置项和数据
var option = {
  title: {
    text: '蔬菜类别',
    left: 'center',
    textStyle:{
        //文字颜色
        color:'#ccc',
        //字体风格,'normal','italic','oblique'
        fontStyle:'normal',
        //字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
        fontWeight:'bold',
        //字体系列
        fontFamily:'sans-serif',
        //字体大小
　　　　 fontSize:18
    }
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle:{
                fontSize: 10,//字体大小
                color: '#'//字体颜色
              },

  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['20%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#804e4e',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bolder'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 848, name: '白菜' },
        { value: 735, name: '西红柿' },
        { value: 680, name: '茄子' },
        { value: 484, name: '辣椒' },
        { value: 300, name: '大蒜' },
        { value: 348, name: '莴笋' },
        { value: 235, name: '洋芋' },
        { value: 280, name: '藕' },
        { value: 284, name: '豌豆' },
        { value: 100, name: '玉米' },


      ]
    }
  ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
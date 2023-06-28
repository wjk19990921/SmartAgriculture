var myChart = echarts.init(document.getElementById('center3'));

var option = {
    backgroundColor: '#333',
   title: {
        text: '占比',
        left: 'center',
        textStyle:{
                fontSize: 18,//字体大小
                color: 'white'//字体颜色
              },
  },
   grid: {
      left: "5%",
      right: "5%",
      bottom: "5%",
      top: "5%",
      containLabel: true,
   },
   tooltip: {
      show: true,
      formatter: "{b}<br/>{c}%",
      textStyle: {
         fontWeight: "bold",
         fontSize: 16,
      },
   },
   yAxis: [{
      type: "category",
      inverse: true,
      axisLabel: {
         show: true,
         color: "#FFFFFF",
         fontSize: 15,
      },
      splitLine: {
         show: false,
         lineStyle: {
            color: "#707070",
         },
      },
      axisLine: {
         show: true,
         lineStyle: {
            color: "#707070",
            width: 1,
         },
      },
      axisTick: {
         show: false,
      },
      data: ["藕片", "洋芋", "莴笋", "大蒜", "辣椒", "茄子", "西红柿", "白菜"]
   },],
   xAxis: [{
      type: "value",
      axisTick: {
         show: false,
      },
      max: 25,

      axisLine: {
         show: true,
         lineStyle: {
            color: "#707070",
            width: 1,
         },
      },
      splitLine: {
         show: false,
      },
      nameTextStyle: {
         color: 'red',
      },
      // nameLocation: "end",
      name: "",
      axisLabel: {
         inside: false,
         textStyle: {
            color: "#fff",
            fontSize: 17,
         },
         interval: 0,
         // rotate: 25,
         formatter: '{value}%'
      },
   },],
   series: [{
      name: "assist",
      type: "bar",
      stack: "1",
      itemStyle: {
         normal: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
         },
         emphasis: {
            barBorderColor: "rgba(0,0,0,0)",
            color: "rgba(0,0,0,0)",
         },
      },
      tooltip: {
         trigger: "none",
      },
      data: [],
   }, //设置两个柱状图进行重叠，第一层柱子设置透明度,由此来实现柱子与坐标轴之间的距离  stack:''设置重叠效果
   {
      type: "bar",
      stack: "1",
      barWidth: 12,
      barBorderRadius: 30,
      itemStyle: {
         normal: {
            barBorderRadius: 20,
            color: function (params) {
               // console.log('测试',_that.checkName)
               // if (_that.platName == params.name) {
               //    return 'yellow';
               // } else {
                  return {
                     type: "linear",
                     x: 1,
                     y: 0,
                     x2: 0,
                     y2: 0,
                     colorStops: [{
                        offset: 0,
                        color: "#80BDF6", // 0% 处的颜色
                     },
                     {
                        offset: 0.9,
                        color: "#188DF0", // 100% 处的颜色
                     },
                     ],

                  // }
               }
            },
         },
      },
      // zlevel: 2,
      data: [12.88, 21.46, 17.17, 10.73, 2.15, 7.73, 4.29, 23.64]
   },
   ],
      };

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
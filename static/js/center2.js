var myChart = echarts.init(document.getElementById('center2'));
var chinaGeoCoordMap = {
   黑龙江: [127.9688, 45.368],
   内蒙古: [110.3467, 41.4899],
   吉林: [125.8154, 44.2584],
   北京市: [116.4551, 40.2539],
   辽宁: [123.1238, 42.1216],
   河北: [114.4995, 38.1006],
   天津: [117.4219, 39.4189],
   山西: [112.3352, 37.9413],
   陕西: [109.1162, 34.2004],
   甘肃: [103.5901, 36.3043],
   宁夏: [106.3586, 38.1775],
   青海: [101.4038, 36.8207],
   新疆: [87.9236, 43.5883],
   西藏: [91.11, 29.97],
   四川: [103.9526, 30.7617],
   重庆: [108.384366, 30.439702],
   山东: [117.1582, 36.8701],
   河南: [113.4668, 34.6234],
   江苏: [118.8062, 31.9208],
   安徽: [117.29, 32.0581],
   湖北: [114.3896, 30.6628],
   浙江: [119.5313, 29.8773],
   福建: [119.4543, 25.9222],
   江西: [116.0046, 28.6633],
   湖南: [113.0823, 28.2568],
   贵州: [106.6992, 26.7682],
   云南: [102.9199, 25.4663],
   广东: [113.12244, 23.009505],
   广西: [108.479, 23.1152],
   海南: [110.3893, 19.8516],
   上海: [121.4648, 31.2891],
};


var chinaDatas = [
   [
      {
         name: '黑龙江',
         value: 5,
      },
   ],
   [
      {
         name: '内蒙古',
         value: 3,
      },
   ],
   [
      {
         name: '北京市',
         value: 20,
      },
   ],
   [
      {
         name: '吉林',
         value: 3,
      },
   ],
   [
      {
         name: '辽宁',
         value: 5,
      },
   ],
   [
      {
         name: '河北',
         value: 6,
      },
   ],
   [
      {
         name: '天津',
         value: 5,
      },
   ],
   [
      {
         name: '山西',
         value: 7,
      },
   ],
   [
      {
         name: '陕西',
         value: 6,
      },
   ],
   [
      {
         name: '甘肃',
         value: 5,
      },
   ],
   [
      {
         name: '宁夏',
         value: 5,
      },
   ],
   [
      {
         name: '青海',
         value: 7,
      },
   ],
   [
      {
         name: '新疆',
         value: 3,
      },
   ],
   [
      {
         name: '西藏',
         value: 3,
      },
   ],
   [
      {
         name: '四川',
         value: 10,
      },
   ],
   [
      {
         name: '重庆',
         value: 9,
      },
   ],
   [
      {
         name: '广东',
         value: 10,
      },
   ],
   [
      {
         name: '山东',
         value: 6,
      },
   ],
   [
      {
         name: '河南',
         value: 8,
      },
   ],
   [
      {
         name: '江苏',
         value: 10,
      },
   ],
   [
      {
         name: '安徽',
         value: 9,
      },
   ],
   [
      {
         name: '湖北',
         value: 10,
      },
   ],
   [
      {
         name: '浙江',
         value: 16,
      },
   ],
   [
      {
         name: '福建',
         value: 9,
      },
   ],

   [
      {
         name: '湖南',
         value: 14,
      },
   ],
   [
      {
         name: '贵州',
         value: 8,
      },
   ],
   [
      {
         name: '广西',
         value: 7,
      },
   ],
   [
      {
         name: '海南',
         value: 7,
      },
   ],
   [
      {
         name: '上海',
         value: 17,
      },
   ],
];


var convertData = function (data) {
   var res = [];
   for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];
      var fromCoord = chinaGeoCoordMap[dataItem[0].name];
      var toCoord = [112.3352, 37.9413];
      if (fromCoord && toCoord) {
         res.push([
            {
               coord: toCoord,
               value: dataItem[0].value,
            },
            {
               coord: fromCoord,
            },
         ]);
      }
   }
   return res;
};


var series = [];
[['山西', chinaDatas]].forEach(function (item, i) {
   console.log(item);
   series.push(
      {
         type: 'lines',
         zlevel: 1,
         effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.1, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 10, //图标大小
         },
         lineStyle: {
            normal: {
               width: 1, //尾迹线条宽度
               opacity: 1, //尾迹线条透明度
               curveness: 0.3, //尾迹线条曲直度
            },
         },
         data: convertData(item[1]),
      },
      {
         type: 'effectScatter',
         coordinateSystem: 'geo',
         zlevel: 2,
         rippleEffect: {
            //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 10, //波纹圆环最大限制，值越大波纹越大
         },
         label: {
            normal: {
               show: true,
               position: 'right', //显示位置
               offset: [5, 0], //偏移设置
               formatter: function (params) {
                  //圆环显示文字
                  return params.data.name;
               },
               fontSize: 10,
            },
            emphasis: {
               show: true,
            },
         },
         symbol: 'circle',
         symbolSize: function (val) {
            return 3 + val[2] * 1; //圆环大小
         },
         itemStyle: {
            normal: {
               show: false,
               color: '#FFA54F',
            },
         },
         data: item[1].map(function (dataItem) {
            return {
               name: dataItem[0].name,
               value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
            };
         }),
      },
      //被攻击点
      {
         type: 'scatter',
         coordinateSystem: 'geo',
         zlevel: 2,
         rippleEffect: {
            period: 4,
            brushType: 'stroke',
            scale: 4,
         },
         label: {
            normal: {
               show: true,
               position: 'right',
               //offset:[5, 0],
               color: '#0f0',
               formatter: '{b}',
               textStyle: {
                  color: '#0f0',
               },
            },
            emphasis: {
               show: true,
               color: '#FFA54F',
            },
         },
         symbol: 'pin',
         symbolSize: 50,
         data: [
            {
               name: item[0],
               value: chinaGeoCoordMap[item[0]].concat([10]),
            },
         ],
      }
   );
});

option = {
   title: {
        text: '农业分布',
        left: 'center',
        textStyle:{
                fontSize: 28,//字体大小
                color: 'white'//字体颜色
              },
  },
   tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(166, 200, 76, 0.82)',
      borderColor: '#FFFFCC',
      showDelay: 0,
      hideDelay: 0,
      enterable: true,
      transitionDuration: 0,
      extraCssText: 'z-index:100',
      formatter: function (params, ticket, callback) {
         //根据业务自己拓展要显示的内容
         var res = '';
         var name = params.name;
         var value = params.value[params.seriesIndex + 1];
         res = "<span style='color:#fff;'>" + name + '</span><br/>数据：' + value;
         return res;
      },
   },
   backgroundColor: '#333333',
   visualMap: {
      //图例值控制
      min: 1,
      max: 30,
      calculable: true,
      show: true,
      color: ['#f44336', '#fc9700', '#ffde00', '#ffde00', '#00eaff'],
      textStyle: {
         color: '#fff',
      },
   },
   geo: {
      map: 'china',
      zoom: 1.2,
      label: {
         emphasis: {
            show: false,
         },
      },
      roam: true, //是否允许缩放
      itemStyle: {
         normal: {
            color: '#333', //地图背景色
            borderColor: '#00fcff', //省市边界线00fcff 516a89
            borderWidth: 1,
         },
         emphasis: {
            color: '#13297B', //悬浮背景
         },
      },
   },
   series: series,
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);










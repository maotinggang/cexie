<template>
  <div>
    <ve-line
      :title="title"
      :grid="{top: 40,bottom: 45}"
      :toolbox="toolbox"
      :width="size.width"
      :height="size.height"
      :legend="{top: '5px',right: '100px'}"
      :xAxis="xAxis"
      :yAxis="yAxis"
      :series="series"
    ></ve-line>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Object,
      default: null
    },
    name: {
      type: String,
      default: "变化量"
    },
    chartData: {
      type: Object,
      default: () => {
        return {
          columns: ["depth", "20190805", "20190806"],
          rows: [
            { depth: 0, "20190805": 0, "20190806": 0 },
            { depth: 5, "20190805": 2, "20190806": 1 },
            { depth: 10, "20190805": 3, "20190806": 3 },
            { depth: 15, "20190805": 4, "20190806": 5 }
          ]
        };
      }
    }
  },
  data() {
    return {
      title: {
        text: "变化量",
        left: "25px",
        top: "5px",
        textStyle: { fontWeight: "lighter", fontSize: 15 }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "value",
        position: "top",
        min: -10,
        max: 10,
        minInterval: 1,
        maxInterval: 2
      },
      yAxis: {
        type: "value",
        // axisLine: { onZero: false },
        // boundaryGap: false,
        min: -20,
        max: 0,
        minInterval: 1,
        maxInterval: 2
        // data: ["20", "15", "10", "0"]
      },
      series: [
        {
          name: "20190807",
          type: "line",
          data: [[0, -20], [1, -15], [2, -10], [6, -5], [3, 0]]
        },
        {
          name: "20190808",
          type: "line",
          data: [[0, -20], [2, -15], [3, -10], [2, -5], [1, 0]]
        }
      ]
    };
  }
};
</script>
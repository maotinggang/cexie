<template>
  <div>
    <ve-line
      :title="title"
      :grid="{top: 40,bottom: 45}"
      :toolbox="toolbox"
      :width="size.width"
      :height="size.height"
      :legend="legend"
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
    series: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      title: {
        text: this.name,
        left: "25px",
        top: "5px",
        textStyle: { fontWeight: "lighter", fontSize: 15 }
      },
      legend: {
        orient: "vertical",
        itemWidth: 20,
        itemGap: 4,
        itemHeight: 8,
        bottom: 45,
        right: 10
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        },
        right: 20
      },
      xAxis: {
        type: "value",
        position: "top",
        min: -10,
        max: 10,
        interval: 1
      },
      yAxis: {
        type: "value",
        min: -20,
        max: 0,
        minInterval: 1,
        maxInterval: 2
      }
    };
  }
};
</script>
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
    params: {
      type: Object,
      default: null
    },
    series: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      title: {
        text: this.params.imgName,
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
        min: () => {
          return Math.round(this.params.maxChange + 5) * -1;
        },
        max: () => {
          return Math.round(this.params.maxChange + 5);
        },
        interval: 1
      },
      yAxis: {
        type: "value",
        max: 0,
        interval: 1
      }
    };
  }
};
</script>
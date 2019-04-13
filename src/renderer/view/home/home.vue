<template>
  <div class="home">
    <Row>
      <Col>
        <load-file v-on:input="getFile" style="margin-left:20px;"></load-file>
        <Button @click="refresh" icon="md-refresh" class="home-refresh-btn">刷新</Button>
      </Col>
    </Row>
    <Row>
      <!-- <Col :style="{height: windowSize.height-100 + 'px'}"> -->
      <!-- <Split v-model="split" mode="vertical" min="200">
      <div slot="top">-->
      <Col span="12">
        <line-cexie :size="sizeChart" :params="paramsX" :series="seriesX"></line-cexie>
      </Col>
      <Col span="12">
        <line-cexie :size="sizeChart" :params="paramsY" :series="seriesY"></line-cexie>
      </Col>
      <!-- </div> -->
      <!-- <div slot="bottom">table</div>
      </Split>-->
    </Row>
  </div>
</template>

<script src="./home.js">
</script>

<style scoped src="./home.css">
</style>


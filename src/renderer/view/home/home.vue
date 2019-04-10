<template>
  <div class="home">
    <Row>
      <Col span="18">
        <load-file v-on:input="getFile"></load-file>
      </Col>
      <Col span="6">
        <save-file-btn></save-file-btn>
      </Col>
    </Row>
    <Row>
      <Col :style="{height: windowSize.height-100 + 'px'}">
        <Split v-model="split" mode="vertical" min="200">
          <div slot="top">
            <Col span="12">
              <line-cexie :size="sizeChart" :name="'X变化量(毫米)'" :series="seriesX"></line-cexie>
            </Col>
            <Col span="12">
              <line-cexie :size="sizeChart" :name="'Y变化量(毫米)'" :series="seriesY"></line-cexie>
            </Col>
          </div>
          <div slot="bottom">table</div>
        </Split>
      </Col>
    </Row>
  </div>
</template>

<script src="./home.js">
</script>

<style scoped src="./home.css">
</style>


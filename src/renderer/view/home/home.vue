<template>
  <div class="home">
    <Row>
      <Col span="18">
        <load-file :input="input"></load-file>
      </Col>
      <Col span="6">
        <save-file-btn></save-file-btn>
      </Col>
    </Row>
    <Row>
      <Col span="12">
        <Card>
          <line-cexie></line-cexie>
        </Card>
      </Col>
      <Col span="12">
        <Card>
          <line-cexie></line-cexie>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col></Col>
    </Row>
  </div>
</template>

<script src="./home.js">
</script>

<style scoped src="./home.css">
</style>


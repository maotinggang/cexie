<template>
  <div>
    <Table
      stripe
      border
      size="small"
      :height="height"
      :columns="columns"
      :data="stateTable10List"
      :row-class-name="rowClassName"
    ></Table>
    <Page
      class="page"
      size="small"
      :total="stateAllData.length"
      show-elevator
      :page-size="10"
      show-total
      @on-change="onPageChange"
    />
  </div>
</template>
<script src="./table.js">
</script>
<style>
  .ivu-table .table-info-row td {
    padding-top: 5px;
    height: 20px;
  }
  .page {
    position: relative;
    padding-top: 3px;
    text-align: center;
  }
</style>


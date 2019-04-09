
<template>
  <div>
    <Upload action="#" :before-upload="handleUpload">
      <Button icon="md-arrow-round-down">下载</Button>
    </Upload>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "请输入"
    }
  },
  methods: {
    handleUpload(file) {
      this.$emit("filename", file.path);
      return false;
    }
  }
};
</script>

<style scoped>
</style>
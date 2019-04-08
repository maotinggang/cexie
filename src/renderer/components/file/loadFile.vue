<template>
  <div>
    <Input
      v-model="filename"
      :placeholder="placeholder"
      clearable
      @input="$emit('input',filename)"
      style="width: 300px;"
    ></Input>
    <Upload action="#" :before-upload="handleUpload" style="display: inline;">
      <Button icon="md-arrow-round-up">上传</Button>
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
  data() {
    return {
      // TODO for test
      filename:
        "C:/Users/mg/Documents/comnav/work/部标机车辆数据分析/数据/test.txt"
    };
  },
  methods: {
    handleUpload(file) {
      this.filename = file.path;
      this.$emit("input", this.filename);
      return false;
    }
  }
};
</script>
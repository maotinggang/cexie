import { LoadFile, SaveFileBtn } from '@/components/file'
import { mapActions, mapState } from 'vuex'
import { LineCexie } from '@/components/charts'
export default {
  name: 'home',
  components: {
    LoadFile,
    SaveFileBtn,
    LineCexie
  },
  data() {
    return {
      split: 0.7
    }
  },
  created() {
    // 监听窗口尺寸变化
    window.onresize = () => {
      this.actionWindowSize()
    }
    window.onload = () => {
      this.actionWindowSize()
    }
  },
  methods: {
    ...mapActions('home', ['actionWindowSize', 'actionsReadFile']),
    getFile(filename) {
      this.actionsReadFile(filename)
    }
  },
  computed: {
    ...mapState('home', ['windowSize']),
    sizeChart() {
      return {
        height: (this.windowSize.height - 100) * this.split + 'px',
        width: this.windowSize.width / 2 + 'px'
      }
    },
    heightTable() {
      return (this.windowSize.height - 100) * (1 - this.split) - 30
    }
  }
}

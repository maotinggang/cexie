import { LoadFile, SaveFileBtn } from '@/components/file'
import { mapActions, mapState } from 'vuex'
import { LineCexie } from '@/components/charts'
import collection from 'lodash/collection'
export default {
  name: 'home',
  components: {
    LoadFile,
    SaveFileBtn,
    LineCexie
  },
  data() {
    return {
      split: 0.8
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
    ...mapState('home', ['windowSize', 'changeData']),
    sizeChart() {
      return {
        height: (this.windowSize.height - 100) * this.split + 'px',
        width: this.windowSize.width / 2 + 'px'
      }
    },
    heightTable() {
      return (this.windowSize.height - 100) * (1 - this.split) - 30
    },
    seriesX() {
      let ret = []
      collection.forEach(this.changeData, value => {
        let isExist = collection.find(ret, { name: value.time })
        if (isExist) {
          isExist.data.push([value.x, value.depth * -1])
        } else {
          ret.push({
            name: value.time,
            type: 'line',
            data: [[0, -20], [value.x, value.depth * -1]]
          })
        }
      })
      return ret
    },
    seriesY() {
      let ret = []
      collection.forEach(this.changeData, value => {
        let isExist = collection.find(ret, { name: value.time })
        if (isExist) {
          isExist.data.push([value.y, value.depth * -1])
        } else {
          ret.push({
            name: value.time,
            type: 'line',
            data: [[0, -20], [value.y, value.depth * -1]]
          })
        }
      })
      return ret
    }
  }
}

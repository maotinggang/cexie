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
      split: 0.8,
      filename: '',
      symbol: [
        'emptyCircle',
        'circle',
        'emptyRect',
        'rect',
        'emptyTriangle',
        'triangle',
        'emptyDiamond',
        'diamond'
      ]
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
      this.filename = filename
      this.actionsReadFile(filename)
    },
    refresh() {
      this.actionsReadFile(this.filename)
    }
  },
  computed: {
    ...mapState('home', ['windowSize', 'changeData', 'maxChange']),
    sizeChart() {
      return {
        height: this.windowSize.height - 50 + 'px',
        width: this.windowSize.width / 2 - 15 + 'px'
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
          isExist.data.push([value.x, value.depth])
        } else {
          ret.push({
            name: value.time,
            type: 'line',
            symbol: this.symbol[ret.length % 8],
            symbolSize: 6,
            data: [[0, value.depthAll], [value.x, value.depth]]
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
          isExist.data.push([value.y, value.depth])
        } else {
          ret.push({
            name: value.time,
            type: 'line',
            symbol: this.symbol[ret.length % 8],
            symbolSize: 6,
            data: [[0, value.depthAll], [value.y, value.depth]]
          })
        }
      })
      return ret
    },
    paramsX() {
      return {
        imgName: 'X方向变化量(毫米)',
        maxChange: this.maxChange
      }
    },
    paramsY() {
      return {
        imgName: 'Y方向变化量(毫米)',
        maxChange: this.maxChange
      }
    }
  }
}

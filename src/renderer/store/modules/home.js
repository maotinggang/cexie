import collection from 'lodash/collection'
import * as xlsx from 'xlsx'
import * as fs from 'fs'
const state = {
  windowSize: { height: window.innerHeight, width: window.innerWidth },
  changeData: '',
  maxChange: ''
}

const mutations = {
  WINDOW_SIZE(state, value) {
    state.windowSize = value
  },
  READ_FILE(state, value) {
    state.changeData = value
  },
  MAX_CHANGE(state, value) {
    state.maxChange = value
  }
}

const actions = {
  actionWindowSize({ commit }) {
    commit('WINDOW_SIZE', {
      height: window.innerHeight,
      width: window.innerWidth
    })
  },
  actionsReadFile({ commit }, filename) {
    let workbook = xlsx.readFile(filename)
    let value = xlsx.utils.sheet_to_json(
      workbook.Sheets[workbook.SheetNames[0]]
    )
    let maxChange = 0
    for (let i = 0; i < value.length; i++) {
      value[i].x =
        value[i].G *
        value[i].L *
        (Math.sin((value[i].x * Math.PI) / 180) -
          Math.sin((value[i].x0 * Math.PI) / 180))
      value[i].y =
        value[i].G *
        value[i].L *
        (Math.sin((value[i].y * Math.PI) / 180) -
          Math.sin((value[i].y0 * Math.PI) / 180))
      value[i].depth *= -1
      value[i].depthAll *= -1
      if (Math.abs(value[i].x) > maxChange) maxChange = Math.abs(value[i].x)
      if (Math.abs(value[i].y) > maxChange) maxChange = Math.abs(value[i].y)
    }
    let test = xlsx.utils.json_to_sheet(value)
    var stream = xlsx.stream.to_csv(test)
    stream.pipe(fs.createWriteStream(filename + '.csv'))
    commit('MAX_CHANGE', maxChange)
    commit('READ_FILE', collection.sortBy(value, ['name', 'time', 'depth']))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import collection from 'lodash/collection'
import * as xlsx from 'xlsx'
const state = {
  windowSize: { height: window.innerHeight, width: window.innerWidth },
  changeData: ''
}

const mutations = {
  WINDOW_SIZE(state, value) {
    state.windowSize = value
  },
  READ_FILE(state, value) {
    state.changeData = value
  }
}

const actions = {
  actionWindowSize({ commit }) {
    commit('WINDOW_SIZE', {
      height: window.innerHeight,
      width: window.innerWidth
    })
  },
  actionsReadFile({ commit }, value) {
    let workbook = xlsx.readFile(value)
    value = xlsx.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
    for (let i = 0; i < value.length; i++) {
      value[i].x =
        value[i].G *
        value[i].L *
        1000 *
        (Math.sin((value[i].x * Math.PI) / 360) -
          Math.sin((value[i].x0 * Math.PI) / 360))
      value[i].y =
        value[i].G *
        value[i].L *
        1000 *
        (Math.sin((value[i].y * Math.PI) / 360) -
          Math.sin((value[i].y0 * Math.PI) / 360))
      value[i].depth *= -1
      value[i].depthAll *= -1
    }
    commit('READ_FILE', collection.sortBy(value, ['name', 'time', 'depth']))
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

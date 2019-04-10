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
      let ret = this.degreeToDistant(value[i])
      value[i].x = ret.x
      value[i].y = ret.y
    }
    commit('READ_FILE', collection.sortBy(value, ['name', 'time', 'depth']))
  },
  degreeToDistant(value) {
    return { x: 1, y: 2 }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

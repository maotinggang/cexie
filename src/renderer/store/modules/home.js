const state = {
  windowSize: { height: window.innerHeight, width: window.innerWidth }
}

const mutations = {
  WINDOW_SIZE(state, value) {
    state.windowSize = value
  }
}

const actions = {
  actionWindowSize({ commit }) {
    commit('WINDOW_SIZE', {
      height: window.innerHeight,
      width: window.innerWidth
    })
  },
  actionsReadFile({ commit }, value) {}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

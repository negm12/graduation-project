import { createStore } from 'vuex'

export default createStore({
  state: {
    toggle_sidebar: 0,
    active_link: 0
  },
  getters: {
  },
  mutations: {
    togglesidebar(state){
      state.toggle_sidebar=!state.toggle_sidebar
    },
    change_activelink(state , link){
      state.active_link = link
    }
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    salt: 50,
    title: "치킨이 맛있당"


  },
  getters: {
  },
  mutations: {

    SET_MY_NAME(state, data)
    {
      state.title = data;
    },
    SET_MY_G(state, data)
    {
      state.salt = data;
    }

  },
  actions: {
  },
  modules: {
  }
})

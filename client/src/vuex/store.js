import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import swal from 'sweetalert2'

const http = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.use(Vuex)

const state = {
  users: [],
  photos: []
}

const mutations = {
  getAllPhoto (state, payload) {
    state.photos = payload
  }
}

const actions = {
  getAllPhoto ({ commit }) {
    http.get('api/photos/').then(({data}) => {
      console.log(data)
      commit('getAllPhoto', data)
    }).catch(err => {
      console.error(err)
    })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store

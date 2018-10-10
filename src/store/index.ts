import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { meetup } from './meetup'
import { place } from './place'
import { snackbar } from './snackbar'
import { user } from './user'
import { socket } from './socket'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    token: localStorage.getItem('token'),
    name: '',
    version: '1.0.0'
  },
  modules: {
    user,
    meetup,
    socket,
    place,
    snackbar
  },
  mutations: {
    SET_TOKEN (state, payload: string) {
      localStorage.setItem('token', payload)
      state.token = payload
    },
    CLEAR_TOKEN (state) {
      localStorage.removeItem('token')
      state.token = null
    },
    SET_NAME (state, payload: string) {
      state.name = payload
    }
  },
  getters: {
    auth (state) {
      return { headers: { Authorization: `bearer ${state.token}` } }
    },
    name (state) {
      return state.name
    }
  }
}

export default new Vuex.Store<RootState>(store)

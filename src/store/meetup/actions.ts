import { ActionTree } from 'vuex'
import axios from '@/axios'
import { MeetupState } from './types'
import { RootState } from '../types'
import router from '@/router'

export const actions: ActionTree<MeetupState, RootState> = {
  async loadMeetup ({ rootGetters, commit, dispatch }) {
    const { data: { success, meetup, meetups, name, message } } = await axios.get('/meetups', rootGetters.auth)

    if (!success && message) commit('snackbar/showError', message, { root: true })
    if (!name) {
      commit('CLEAR_TOKEN', '', { root: true })
      return router.push({ name: 'Login' })
    }

    console.log('meetups', meetups)
    console.log('name', name)
    commit('SET_NAME', name, { root: true })
    commit('SET_MEETUP', meetup)
    if (meetup) return dispatch('joinChat', meetup._id, { root: true })
    commit('SET_MEETUPS', meetups)
  },
  async joinMeetup ({ rootGetters, commit }, meetupId: string) {
    const { data: { meetup, meetups, message } } = await axios.post('/meetups/join', { meetupId }, rootGetters.auth)
    commit('SET_MEETUP', meetup)
    commit('SET_MEETUPS', meetups)
    commit('snackbar/showSuccess', message, { root: true })
  },
  async leaveMeetup ({ rootGetters, commit }) {
    const { data: { meetup, meetups, message } } = await axios.post('/meetups/leave', {}, rootGetters.auth)
    commit('SET_MEETUP', meetup)
    commit('SET_MEETUPS', meetups)
    commit('snackbar/showSuccess', message, { root: true })
  }
}

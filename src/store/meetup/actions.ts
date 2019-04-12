import { ActionTree } from 'vuex'
import axios from '@/axios'
import { MeetupState } from './types'
import { RootState } from '../types'
import router from '@/router'

export const actions: ActionTree<MeetupState, RootState> = {
  async loadMeetup ({ rootGetters, commit, dispatch }) {
    try {
      commit('SET_LOADING', true, { root: true })
      const { data: { success, meetup, meetups, name, message, token } } = await axios.get('/meetups', rootGetters.auth)
      if (!success) commit('snackbar/showError', message, { root: true })
      if (!name) {
        commit('CLEAR_TOKEN', '', { root: true })
        return router.push({ name: 'Login' })
      }

      console.log('meetups', meetups)
      console.log('name', name)

      commit('SET_TOKEN', token, { root: true })
      commit('SET_NAME', name, { root: true })
      commit('SET_MEETUP', meetup)
      if (meetup) return dispatch('joinChat', meetup._id, { root: true })
      commit('SET_MEETUPS', meetups)
    } catch (e) {
      commit('snackbar/showError', e.message, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
  async joinMeetup ({ rootGetters, commit }, meetupId: string) {
    try {
      commit('SET_LOADING', true, { root: true })
      const { data: { success, meetup, meetups, message, name } } = await axios.post('/meetups/join', { meetupId }, rootGetters.auth)

      if (!success) throw new Error(message)

      commit('SET_MEETUP', meetup)
      commit('SET_NAME', name, { root: true })
      router.push({ name: 'Chat' })
      commit('SET_MEETUPS', meetups)
      commit('snackbar/showSuccess', message, { root: true })
    } catch (e) {
      console.error(e)
      commit('snackbar/showError', e.message, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  },
  async leaveMeetup ({ rootGetters, commit }) {
    try {
      commit('SET_LOADING', true, { root: true })
      const { data: { meetup, meetups, message } } = await axios.post('/meetups/leave', {}, rootGetters.auth)
      commit('SET_MEETUP', meetup)
      commit('SET_MEETUPS', meetups)
      router.push({ name: 'Meetups' })
      commit('snackbar/showSuccess', message, { root: true })
    } catch (e) {
      console.error(e)
      commit('snackbar/showError', e.message, { root: true })
    } finally {
      commit('SET_LOADING', false, { root: true })
    }
  }
}

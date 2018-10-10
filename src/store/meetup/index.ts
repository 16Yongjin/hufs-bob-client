import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { MeetupState } from './types'
import { RootState } from '../types'

export const state: MeetupState = {
  meetups: [],
  meetup: null
}

const namespaced: boolean = true

export const meetup: Module<MeetupState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

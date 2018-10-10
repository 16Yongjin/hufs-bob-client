import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { UserState } from './types'
import { RootState } from '../types'

export const state: UserState = {
  user: undefined
}

const namespaced: boolean = true

export const user: Module<UserState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
}

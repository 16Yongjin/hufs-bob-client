import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { PlaceState } from './types'
import { RootState } from '../types'
import places from './places'

export const state: PlaceState = {
  places
}

const namespaced: boolean = true

export const place: Module<PlaceState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}

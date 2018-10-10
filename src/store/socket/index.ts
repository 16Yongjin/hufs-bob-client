import { Module } from 'vuex'
import { actions } from './actions'
import { mutations } from './mutations'
import { SocketState } from './types'
import { RootState } from '../types'

export const state: SocketState = {
  isConnected: false
}

export const socket: Module<SocketState, RootState> = {
  state,
  actions,
  mutations
}

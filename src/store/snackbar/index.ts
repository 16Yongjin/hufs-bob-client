import { Module } from 'vuex'
import { mutations } from './mutations'
import { SnackbarState } from './types'
import { RootState } from '../types'

export const state: SnackbarState = {
  show: false,
  color: 'primary',
  message: '',
  timeout: 3000
}

const namespaced: boolean = true

export const snackbar: Module<SnackbarState, RootState> = {
  namespaced,
  state,
  mutations
}

import { MutationTree } from 'vuex'
import { SnackbarState } from './types'

export const mutations: MutationTree<SnackbarState> = {
  showError (state, message: string) {
    state.color = 'error'
    state.message = message
    state.show = true
  },
  showSuccess (state, message: string) {
    state.color = 'success'
    state.message = message
    state.show = true
  },
  showWarning (state, message: string) {
    state.color = 'warning'
    state.message = message
    state.show = true
  }
}
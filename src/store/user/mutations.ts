import { MutationTree } from 'vuex'
import { User, UserState } from './types'

export const mutations: MutationTree<UserState> = {
  set (state, payload: User) {
    state.user = payload
  }
}

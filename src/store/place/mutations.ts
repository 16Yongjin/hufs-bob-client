import { MutationTree } from 'vuex'
import { Place, PlaceState } from './types'

export const mutations: MutationTree<PlaceState> = {
  add (state, payload: Place) {
    state.places.push(payload)
  }
}

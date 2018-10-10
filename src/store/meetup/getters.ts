import { GetterTree } from 'vuex'
import { MeetupState } from './types'
import { RootState } from '../types'

export const getters: GetterTree<MeetupState, RootState> = {
  meetupId (state) {
    return state.meetup && state.meetup._id
  }
}

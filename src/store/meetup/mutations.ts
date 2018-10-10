import { MutationTree } from 'vuex'
import { MeetupState, Meetup, Chat } from './types'

export const mutations: MutationTree<MeetupState> = {
  SET_MEETUP (state, payload: Meetup) {
    state.meetup = payload
  },
  SET_MEETUPS (state, payload: Array<Meetup>) {
    state.meetups = payload
  },
  ADD_CHAT (state, chat: Chat) {
    if (!state.meetup) return

    console.log('add chat', chat)
    state.meetup.chats = [...state.meetup.chats, chat]
  },
  UPDATE_MEETUP (state, payload: Meetup) {
    state.meetup = { ...state.meetup, ...payload }
  }
}

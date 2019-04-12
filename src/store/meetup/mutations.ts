import { MutationTree } from 'vuex'
import { MeetupState, Meetup, Chat } from './types'
import Vue from 'vue'

export const mutations: MutationTree<MeetupState> = {
  SET_MEETUP (state, payload: Meetup) {
    state.meetup = payload
  },
  SET_MEETUPS (state, payload: Array<Meetup>) {
    state.meetups = payload
  },
  UPDATE_MEETUPS (state, payload: Meetup) {
    if (!payload._id) return

    const idx = state.meetups.findIndex(m => m._id === payload._id)
    if (idx >= 0) {
      Vue.set(state.meetups, idx, payload)
    } else {
      state.meetups = [...state.meetups, payload]
    }
  },
  REMOVE_MEETUP (state, payload: Meetup) {
    state.meetups = state.meetups.filter(m => m._id !== payload._id)
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

import { ActionTree } from 'vuex'
import { SocketState } from './types'
import { Chat, Meetup } from '../meetup/types'
import { RootState } from '../types'

export const actions: ActionTree<SocketState, RootState> = {
  socket_connect ({ getters, dispatch }) {
    console.log('connected on actions')
    console.log(getters['meetups/meetupId'])
  },
  socket_message ({ commit }, chat: Chat) {
    console.log('message on actions', chat)
    commit('meetup/ADD_CHAT', chat)
  },
  socket_updateMeetup ({ commit }, payload: Meetup) {
    commit('meetup/UPDATE_MEETUP', payload)
  },
  socket_updateMeetups ({ commit, getters }, payload: Array<Meetup>) {
    const meetupId: string = getters['meetup/meetupId']

    if (meetupId) return

    commit('meetup/SET_MEETUPS', payload)
  },
  joinChat (context, payload: string) {
    console.log('joinChat', payload);
    ((this._vm as any).$socket).emit('JOIN_CHAT', payload)
  },
  sendMessage ({ getters }, chat: Chat) {
    console.log('sendMessage payload', chat)
    const meetupId: string = getters['meetup/meetupId'];
    ((this._vm as any).$socket).emit('SEND_MESSAGE', { meetupId, chat })
  }
}

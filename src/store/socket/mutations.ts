import { MutationTree } from 'vuex'
import { SocketState } from './types'
import { Chat } from '../meetup/types'
import socketio from 'socket.io-client'

export const mutations: MutationTree<SocketState> = {
  SOCKET_CONNECT (state) {
    console.log('hi')
    // ((this._vm as any).$socket as SocketIOClient.Socket).emit('MESSAGE', 'hellow')
    state.isConnected = true
  },
  SOCKET_DISCONNECT (state) {
    state.isConnected = false
    console.log('disconnected')
  }
}

import Vue from 'vue'
import socketio from 'socket.io-client'
import VueSocketIO from 'vue-socket.io-extended'
import store from '@/store'

Vue.use(VueSocketIO, socketio('http://localhost:3000'), { store })

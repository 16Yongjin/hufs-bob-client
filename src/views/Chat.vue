<template lang="pug">
div(v-if="loading")
  v-toolbar(app fixed color="white" height="56px")
    v-btn(flat icon @click="back")
      v-icon arrow_back
    v-toolbar-title.ml-0 로딩 중...
  .text-xs-center.mt-5(v-if="loading")
    v-progress-circular(indeterminate color="primary")

div(v-else)
  v-navigation-drawer(v-model="drawer" app fixed right persistent )
    v-toolbar(flat)
      v-list
        v-list-tile
          v-list-tile-title.title
            | 내 모임
    v-divider
    v-list.pt-0(dense)
      v-list-tile(@click)
        v-list-tile-action
          v-icon event
        v-list-tile-content
          v-list-tile-title(v-text="meetupName")
      v-list-tile(@click)
        v-list-tile-action
          v-icon place
        v-list-tile-content
          v-list-tile-title(v-text="meetupPlace")
      v-card.elevation-0
        v-card-text
          v-img(src="https://api.lento.in/public/maps/eeb50.png")
      v-list-tile(@click)
        v-list-tile-action
          v-icon access_time
        v-list-tile-content
          v-list-tile-title(v-text="meetup && meetup.time")
      v-list-tile(@click)
        v-list-tile-action
          v-icon people
        v-list-tile-content
          v-list-tile-title(v-text="peopleStatus + '명'")
      v-list-tile.exit(@click="leaveMeetup")
        v-list-tile-action
          v-icon exit_to_app
        v-list-tile-content
          v-list-tile-title 나가기

  v-toolbar(app fixed color="white" height="56px")
    v-btn(flat icon @click="back")
      v-icon arrow_back
    v-toolbar-title.ml-0
      span.title.font-weight-bold(v-text="meetupName")
      span.title.ml-2.primary--text(v-text="peopleStatus")
    v-spacer
    v-toolbar-side-icon(@click.stop="drawer = !drawer")

  v-card.elevation-0#chats
    chat-messages(:chats="meetup ? meetup.chats : []")

  div.text-xs-center.new-message-chip(v-show="unshownMessage")
    v-chip.white--text(@click="checkNewMessage" color="primary") 새 메시지

  v-text-field.bottom.elevation-2(solo autofocus hide-details fill-width @keypress.enter="onSendMessage" v-model="message" label="Message")
    div(slot="append")
      v-icon(color="blue" :disabled="!isValidMessage" @click="onSendMessage") send
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import io from 'socket.io-client'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { MeetupState, Meetup, Chat } from '@/store/meetup/types'
import ChatMessages from '@/components/ChatMessages.vue'
import { formatTime } from '@/utils'

@Component({
  components: {
  ChatMessages
  }
  })
export default class MeetupChat extends Vue {
  @State(state => state.meetup.meetup) meetup: Meetup
  @Getter('name') name: string
  @Getter('loading') loading: boolean
  @Action('loadMeetup', { namespace: 'meetup' }) loadMeetup: any
  @Action('sendMessage') sendMessage: any
  @Action('leaveMeetup', { namespace: 'meetup' }) leaveMeetup: any

  drawer = false
  message: string = ''
  unshownMessage = false
  unsubscribe: any = () => void 0

  get isValidMessage (): boolean {
    return !!(this.name && this.message)
  }

  get meetupName () {
    if (this.meetup) return this.meetup.name.length > 11 ? `${this.meetup.name.substr(0, 11)}...` : this.meetup.name
    else return '메시지 가져오는 중...'
  }

  get meetupPlace () {
    return this.meetup ? this.meetup.place : ''
  }

  get meetupId () {
    return this.meetup._id
  }

  get peopleStatus () {
    return this.meetup ? `${this.meetup.people} / ${this.meetup.peopleLimit}` : ''
  }

  onSendMessage (e: Event) {
    e.preventDefault()

    if (!this.isValidMessage) return

    this.sendMessage({
      name: this.name,
      message: this.message
    })

    this.message = ''
  }

  checkNewMessage () {
    this.unshownMessage = false
    window.scrollTo(0, document.body.scrollHeight)
  }

  back () {
    this.$router.go(-1)
  }

  onScrollHandler () {
    if (this.unshownMessage && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.unshownMessage = false
    }
  }

  async created () {
    await this.loadMeetup()

    if (!this.meetup) return this.$router.push({ name: 'Meetups' })

    this.unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'meetup/ADD_CHAT') {
        Vue.nextTick(() => {
          if (mutation.payload.name === this.name || (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
            window.scrollTo(0, document.body.scrollHeight)
          } else {
            this.unshownMessage = true
          }
        })
      }
    })

    window.scrollTo(0, document.body.scrollHeight)
    document.addEventListener('scroll', this.onScrollHandler)
  }

  beforeDestroy () {
    this.unsubscribe()
    document.removeEventListener('scroll', this.onScrollHandler)
  }
}
</script>

<style scoped lang="scss">
.rel {
  position: relative;
}

#chats {
  margin-bottom: 48px;
  overflow-y: scroll
}

.bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
}

.new-message-chip {
  width: 100%;
  position: fixed;
  bottom: 48px;
}

.exit {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>

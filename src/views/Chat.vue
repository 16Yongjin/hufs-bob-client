<template lang="pug">
div
  v-toolbar(app fixed color="white" height="56px")
    v-btn(flat icon @click="back")
      v-icon arrow_back
    v-toolbar-title.ml-0
      span.title.font-weight-bold(v-text="meetup ? meetup.name : '메시지 가져오는 중...'")
      span.title.ml-2.primary--text(v-text="peopleStatus")

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
  @Action('loadMeetup', { namespace: 'meetup' }) loadMeetup: any
  @Action('sendMessage') sendMessage: any

  message: string = ''
  unshownMessage = false
  unsubscribe: any = () => void 0

  get isValidMessage (): boolean {
    return !!(this.name && this.message)
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
</style>

<template lang="pug">
.text-xs-center.mt-5(v-if="loading")
  v-progress-circular(indeterminate color="primary")
component(v-else :is="meetup.meetup ? 'my-meetup' : 'meetup-list'")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { MeetupState, Meetup } from '@/store/meetup/types'
import MeetupList from '@/views/MeetupList.vue'
import MyMeetup from '@/views/MyMeetup.vue'
import axios from 'axios'
const serverUrl = 'http://192.168.0.11:3000'
const namespace: string = 'meetup'

@Component({
  components: {
  MeetupList,
  MyMeetup
  }
  })
export default class Meetups extends Vue {
  @State('meetup') meetup: MeetupState
  @Action('loadMeetup', { namespace }) loadMeetup: any
  loading = false

  async created () {
    this.loading = true
    await this.loadMeetup()
    this.loading = false
  }
}
</script>

<style scoped>

</style>

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
  @Getter('loading') loading: boolean

  async created () {
    await this.loadMeetup()
  }
}
</script>

<style scoped>

</style>

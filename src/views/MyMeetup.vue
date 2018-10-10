<template lang="pug">
v-container(fluid fill-height)
  v-layout(align-center justify-center row fill-height)
    v-layout(align-center justify-center row fill-height)
      v-flex(xs12 sm8 md6 lg4)
        MyMeetupCard(:meetup="meetup.meetup" :leaveMeetup="leaveMeetup")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { MeetupState, Meetup } from '@/store/meetup/types'
import MyMeetupCard from '@/components/MyMeetupCard.vue'

const namespace: string = 'meetup'

@Component({
  components: {
  MyMeetupCard
  }
  })
export default class MeetupList extends Vue {
  @State('meetup') meetup: MeetupState
  @Action('leaveMeetup', { namespace }) leaveMeetup: any
}
</script>

<style scoped>

</style>

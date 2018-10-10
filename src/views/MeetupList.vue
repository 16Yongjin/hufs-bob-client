<template lang="pug">
v-container.pa-0(fluid)
  v-layout(row wrap)
    v-flex
      v-list(two-line)
        template(v-for="meetup, index in meetup.meetups")
          v-list-tile(avatar ripple :key="meetup._id" @click="join(meetup._id)" :disabled="!meetup.available")
            v-list-tile-content
              v-list-tile-title {{ meetup.name }}
              v-list-tile-sub-title.text--primary {{ meetup.place }}
              v-list-tile-sub-title {{ meetup.people }} / {{ meetup.peopleLimit }}
            v-list-tile-action
              v-list-tile-action-text {{ meetup.time }}
              v-icon(color="grey lighten-1") star_border
          v-divider
        v-list-tile(avatar ripple to="/meetups/new")
          v-list-tile-action
            v-icon(icon large) add
          v-list-tile-content
            v-list-tile-sub-title 가고 싶은 맛집이 없나요?
            v-list-tile-title 모임을 만드세요!
        v-divider
      //- v-card
        v-card-title.title(v-text="meetup.name")
        v-card-text
          span(v-text="meetup.place")
          div
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { MeetupState, Meetup } from '@/store/meetup/types'
const namespace: string = 'meetup'

@Component
export default class MeetupList extends Vue {
  @State('meetup') meetup: MeetupState
  @Action('joinMeetup', { namespace }) joinMeetup: any

  join (meetupId: string) {
    this.joinMeetup(meetupId)
      .then(() => this.$router.push({ name: 'Chat' }))
  }
}
</script>

<style scoped>

</style>

<template lang="pug">
v-card.title(:to="{ name: 'Chat' }")
  v-toolbar.elevation-1(color="green lighten-5")
    v-toolbar-title 내 모임
    v-spacer
    v-menu(bottom left)
      v-btn(slot="activator" @click.prevent icon)
        v-icon more_vert
      v-list
        v-list-tile(@click="leaveMeetup")
          v-list-tile-title 나가기

  v-card-text
    v-icon event
    span.pl-2.title {{ meetup.name }}
  v-card-text.title
    v-icon pin_drop
    span.pl-2 {{ meetup.place }}
  v-card-text.title
    v-icon people
    span.pl-2 {{ meetup.people || 1 }} / {{ meetup.peopleLimit }}명
  v-card-text.title
    v-icon access_time
    span.pl-2 {{ meetup.time }}
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Meetup } from '@/store/meetup/types'

@Component
export default class PlaceCard extends Vue {
  @Prop() meetup: Meetup
  @Prop() leaveMeetup: any
}
</script>

<style scoped>
</style>

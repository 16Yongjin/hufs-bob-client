<template lang="pug">
v-flex(lg3 md4 sm6 xs12)
  v-card(ripple style="border-radius: 5px;" height="100%")
    v-img(v-if="place.images.length" :src="getImageUrl(place)" height="200")
    v-card-title.title.pb-0(v-text="place.name")
    v-card-text.pt-1
      div(v-text="place.type")
      div.truncate-text(v-text="place.menu")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Place } from '@/store/place/types'

@Component
export default class PlaceCard extends Vue {
  @Prop() place: Place

  getImageUrl (place: Place) {
    return `https://api.lento.in/public/images/${place.images[0]}`
  }
}
</script>

<style scoped>
.truncate-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>

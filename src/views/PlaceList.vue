<template lang="pug">
v-container(grid-list-lg fluid)
  v-layout(row wrap)
    place-card(v-for="place in place.places" :place="place" :key="place._id")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { Place, PlaceState } from '@/store/place/types'
import PlaceCard from '@/components/PlaceCard.vue'
const namespace: string = 'place'

@Component({
  components: {
  PlaceCard
  }
  })
export default class PlaceList extends Vue {
  @State('place') place: PlaceState

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

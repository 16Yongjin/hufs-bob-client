<template lang="pug">
transition(name="slide-down")
  v-bottom-nav(v-show="show" :active.sync="bottomNav" :value="true" fixed :app="show" color="white")
    v-btn.pb-0(color="teal" flat value="Meetups")
      v-icon(large) people
    v-btn.pb-0(color="teal" flat value="Places")
      v-icon(large) place
    v-btn.pb-0(color="teal" flat value="More")
      v-icon(large) more_horiz
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const showNav: { [index:string]: boolean } = {
  Meetups: true,
  Places: true,
  More: true
}

@Component
export default class BottomNav extends Vue {
  get bottomNav (): string {
    return this.$route.name || ''
  }

  set bottomNav (name: string) {
    this.$router.push({ name })
  }

  get show (): boolean {
    const routeName = this.$route.name || ''
    return showNav[routeName]
  }
}
</script>

<style scoped>
.slide-down-enter-active {
  transition: all .3s ease;
}
.slide-down-leave-active {
  transition: all .3s ease;
}
.slide-down-enter, .slide-down-leave-to {
  transform: translateY(56px);
  /* opacity: 0; */
}
</style>

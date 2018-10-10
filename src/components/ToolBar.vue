<template lang="pug">
v-toolbar(v-show="show" :app="show" fixed color="white")
  v-btn(v-if="title === 'Chat'" flat icon @click="back")
    v-icon arrow_back
  v-toolbar-title.title.ml-0.font-weight-bold(v-text="title")
  v-spacer
  v-btn(v-if="!$store.state.meetup.meetup && title === '모임'" flat icon to="/meetups/new")
    v-icon add
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

const showToolbar: { [index:string]: string } = {
  Meetups: '모임',
  Places: '장소',
  More: '더보기'
}

@Component
export default class ToolBar extends Vue {
  get title () {
    return showToolbar[this.$route.name || '']
  }

  back () {
    this.$router.go(-1)
  }

  get show (): boolean {
    return !!this.title
  }
}
</script>

<style scoped>

</style>

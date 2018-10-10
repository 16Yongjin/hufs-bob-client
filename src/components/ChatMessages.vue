<template lang="pug">
v-card-text
  v-list
    v-list-tile(v-for="chat, i in chats" :key="i")
      v-list-tile-content(v-if="chat.system")
        v-list-tile-sub-title
          .body-2.text-xs-center(v-text="chat.message")

      v-list-tile-content(v-else)
        v-list-tile-sub-title
          span.body-2(v-text="chat.name")
          span.caption.ml-2(v-text="chat.time")
        v-list-tile-title(v-text="chat.message")
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Meetup } from '@/store/meetup/types'

@Component
export default class ChatMessages extends Vue {
  @Prop() chats: Array<Meetup>
}
</script>

<style scoped>
</style>

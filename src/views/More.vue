<template lang="pug">
v-container(grid-list-lg fluid)
  v-layout(row wrap)
    v-flex(xs12)
      v-card(style="border-radius: 5px;" height="100%")
        v-card-title.title 공사중
        v-card-actions
          v-spacer
          v-btn(flat color="red" @click="logout") 로그아웃
    //- v-flex(xs12)
    //-   .headline My Profile
    //- v-flex(xs12)
    //-   v-card(ripple style="border-radius: 5px;" height="100%")
    //-     v-card-title.title.pb-0 이름
    //-     v-card-text 안녕하세요
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State, Action, Getter, Mutation } from 'vuex-class'
import { Place, PlaceState } from '@/store/place/types'
import PlaceCard from '@/components/PlaceCard.vue'
import socketio from 'socket.io-client'
const namespace: string = 'place'

@Component({
  components: {
  PlaceCard
  }
  })
export default class More extends Vue {
  @State('place') place: PlaceState
  @Mutation('CLEAR_TOKEN') clearToken: any

  logout () {
    // 밋업 없애기
    // 소켓 방 나가기
    ((this as any).$socket as SocketIOClient.Socket).close()
    this.clearToken()
    this.$router.push({ name: 'Landing' })
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

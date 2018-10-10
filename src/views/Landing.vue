<template lang="pug">
div
  transition(name="slide-up")
    v-toolbar(v-show="scrolled" color="white" fixed)
      v-toolbar-title.title 앱 이름 아직 못정함
  .page.pl-3.pr-3.bg-blue.white--text
    div.display-2 밥
    div.display-2 같이
    div.display-2 먹어요
    div.display-1 @한국외대
  .page.bg-gray.pl-3.pr-3.pt-5
    div.display-2 오늘도 혼밥이구나
  .page.pa-3
    div.display-2 배고파요
  div.start-button(:class="{ scrolled }")
    v-btn.round.ma-0(block large color="primary" to="login") 시작하기

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class PlaceList extends Vue {
  scrolled = false

  onScrollHandler () {
    if (!this.scrolled && window.scrollY) {
      this.scrolled = true
    }
    if (this.scrolled && !window.scrollY) {
      this.scrolled = false
    }
  }

  mounted () {
    window.addEventListener('scroll', this.onScrollHandler)
  }

  destroyed () {
    window.removeEventListener('scroll', this.onScrollHandler)
  }
}
</script>

<style scoped lang="scss">
.page {
  height: calc(100vh);
}

.bg-blue {
  padding-top: 112px;
  background: rgb(159,197,255);
}

.bg-gray {
  background: #fafafa
}

.start-button {
    width: 100%;
    position: fixed;
    bottom: 54px;
    padding: 0 54px;
    transition: 0.3s;
}

.scrolled {
  bottom: 0px;
  padding: 0;
}

.scrolled > .round {
  border-radius: 0;
}

.round {
  border-radius: 6px;
}

.slide-up-enter-active {
  animation: fadeInDown .3s ease;
}
.slide-up-leave-active {
  animation: fadeOutUp .3s ease;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeOutUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 0%, 0);
    transform: translate3d(0, 0%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}
</style>

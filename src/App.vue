<template lang="pug">
#app
  v-app
    tool-bar
    v-snackbar(top v-model="snackbar.show" :color="snackbar.color" :timeout="snackbar.timeout") {{ snackbar.message }}
    v-content.h100vh.white--background
      router-view
    bottom-nav
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'
import { SnackbarState } from '@/store/snackbar/types'
import BottomNav from './components/BottomNav.vue'
import ToolBar from './components/ToolBar.vue'

@Component({
  components: {
  BottomNav,
  ToolBar
  }
  })
export default class App extends Vue {
  @State('snackbar')
  snackbar: SnackbarState
}
</script>

<style lang="scss">
#app {
  font-family: Godo, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

.h100p {
  height: 100%;
}

.h100vh {
  min-height: 100vh;
}

.w100p {
  width: 100%;
}

.white--background {
  background-color: white;
}

#nav {
  text-align: center;

  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

@font-face {
  font-family: 'Godo';
  font-style: normal;
  font-weight: 400;
  src: url('https://cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff2')
      format('woff2'),
    url('https://cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoM.woff')
      format('woff');
}

@font-face {
  font-family: 'Godo';
  font-style: normal;
  font-weight: 700;
  src: url('https://cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff2')
      format('woff2'),
    url('https://cdn.jsdelivr.net/korean-webfonts/1/corps/godo/Godo/GodoB.woff')
      format('woff');
}
.godo * {
  font-family: 'Godo', sans-serif;
}

.display-4 {
  font-size: 112px !important;
  font-weight: 300;
  line-height: 1 !important;
  letter-spacing: -0.04em !important;
  font-family: 'Godo', sans-serif !important;
}
.display-3 {
  font-size: 56px !important;
  font-weight: 400;
  line-height: 1.35 !important;
  letter-spacing: -0.02em !important;
  font-family: 'Godo', sans-serif !important;
}
.display-2 {
  font-size: 45px !important;
  font-weight: 400;
  line-height: 48px !important;
  letter-spacing: normal !important;
  font-family: 'Godo', sans-serif !important;
}
.display-1 {
  font-size: 34px !important;
  font-weight: 400;
  line-height: 40px !important;
  letter-spacing: normal !important;
  font-family: 'Godo', sans-serif !important;
}
.headline {
  font-size: 24px !important;
  font-weight: 400;
  line-height: 32px !important;
  letter-spacing: normal !important;
  font-family: 'Godo', sans-serif !important;
}
.title {
  font-size: 20px !important;
  font-weight: 500;
  line-height: 1 !important;
  letter-spacing: 0.02em !important;
  font-family: 'Godo', sans-serif !important;
}
.subheading {
  font-size: 16px !important;
  font-weight: 400;
}
.body-2 {
  font-size: 14px !important;
  font-weight: 500;
}
.body-1 {
  font-size: 14px !important;
  font-weight: 400;
}
.caption {
  font-size: 12px !important;
  font-weight: 400;
}
</style>

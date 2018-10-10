<template lang="pug">
v-container.loginOverlay(fluid fill-height)
  v-layout(flex align-center justify-center)
    v-flex(xs12 sm6 md4 elevation-6)
      v-toolbar.pt-5.primary
        v-toolbar-title.white--text
          h4 시작하기
      v-card.card
          v-stepper(v-model="step")
            v-stepper-items
              v-stepper-content.pa-0(step="1")
                v-card-text.pt-4
                  v-form
                    v-text-field(label="학번을 입력해주세요." v-model="id" required)
                    v-text-field(@keyup.enter="login" label="비밀번호를 입력해주세요." v-model="password" type="password" required)
                    v-layout(justify-space-between)
                      v-btn.primary(block @click="login" :disabled="!valid") Login
              v-stepper-content.pa-0(step="2")
                v-card-title.title 개인정보 수집 동의
                v-card-text
                  div 1. 로그인을 통한 개인정보(학번, 성별)은 식사 모임 조직을 위해 사용됩니다.
                  div 3. 위의 개인 정보는 서비스 유지를 위해 서비스 운용기간 동안 유지됩니다.
                  div 4. 위의 개인정보활용을 거부할 수 있으며 거부할 경우 서비스를 이용하실 수 없습니다.
                  v-btn.mt-4.primary(block @click="signup") 동의합니다.
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'
import axios from 'axios'
import socketio from 'socket.io-client'

const serverUrl = 'http://192.168.0.11:3000'

@Component
export default class PlaceList extends Vue {
  @Mutation('SET_TOKEN') setToken: any
  @Mutation('showError', { namespace: 'snackbar' }) showError: any
  @Mutation('showSuccess', { namespace: 'snackbar' }) showSuccess: any
  @Mutation('showWarning', { namespace: 'snackbar' }) showWarning: any

  id = ''
  password = ''
  step = 1

  get valid () {
    return !!(this.id && this.password)
  }

  async login () {
    if (!this.valid) return
    try {
      const { id, password } = this
      const { data: { success, token, message, signUpRequired } } = await axios.post(`${serverUrl}/login`, { id, password })

      if (success) {
        this.setToken(token);
        ((this as any).$socket).connect()
        return this.$router.push({ name: 'Meetups' })
        // return this.showSuccess(message)
      }

      if (signUpRequired) {
        this.step = 2
        return this.showWarning(message)
      }

      this.showError(message)
    } catch ({ message }) {
      console.log(message)
      this.showError(message)
    }
  }

  async signup () {
    // TODO: 회원가입 요청
    // TODO: data.token 저장
    // TODO: meetups 페이지로 리다이렉트
    if (!this.valid) return

    try {
      const { id, password } = this
      const { data: { success, token, message } } =
        await axios.post(`${serverUrl}/signup`, { id, password })

      if (success) {
        this.setToken(token);
        ((this as any).$socket).connect()
        this.$router.push({ name: 'Meetups' })
        return this.showSuccess(message)
      }

      this.showError(message)
    } catch ({ message }) {
      console.log(message)
      this.showError(message)
    }
  }
}
</script>

<style scoped>
.loginOverlay {
  background:rgba(33,150,243,0.3);
}

.card {
  height: auto;
  transition: 0.3s;
}
</style>

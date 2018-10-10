<template lang="pug">
div.h100p
  v-toolbar(fixed color="white" app height="56px")
    v-btn(v-if="step <= 1" flat icon @click="back")
      v-icon close
    v-btn(v-else flat icon @click="previousStep")
      v-icon arrow_back
    v-spacer
    v-toolbar-title.ma-0.title Create Meetup
    v-spacer
    v-btn(v-if="step <= 4" flat icon @click="nextStep" :disabled="!stepValidation")
      v-icon.next.pb-1 다음
    v-btn(v-else flat icon @click="createMeetup" :disabled="!stepValidation")
      v-icon.next.pb-1(color="blue") 완료

  v-stepper.h100p(v-model="step")
    v-stepper-items.text-xs-center
      v-stepper-content(step="1")
        div(style="width: 100%;").title.mt-4.mb-4 모임 이름을 입력해주세요.
        v-text-field(v-model="name" label="모임 이름" counter="30" single-line)

      v-stepper-content(step="2")
        div(style="width: 100%;").title.mt-4.mb-4 식당 이름을 입력해주세요.
        v-text-field(v-model="place" label="식당 이름" counter="30" single-line)

      v-stepper-content(step="3")
        div(style="width: 100%;").title.mt-4.mb-4 인원을 선택해 주세요.

        span.people-limit-text {{ peopleLimit }} 명
        v-rating(v-model="peopleLimit" length="6" full-icon="person" empty-icon="person_outline" color="blue" size="25")

      v-stepper-content(step="4")
        div(style="width: 100%;").title.mt-4.mb-4 시간을 선택해 주세요.
        div.d-flex
          v-select(v-model="hour" :items="hours" label="시간" solo)
          v-select(v-model="minute" :items="minutes" label="분" solo)

      v-stepper-content(step="5").text-xs-left
        v-card
          v-card-title
            v-icon event
            span.pl-2.headline {{ name }}
          v-card-text.title
            v-icon pin_drop
            span.pl-2 {{ place }}
          v-card-text.title
            v-icon people
            span.pl-2 {{ peopleLimit }}명
          v-card-text.title
            v-icon access_time
            span.pl-2 {{ `${hour} ${minute === '0분' ? '' : minute}` }}
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { State, Action, Mutation } from 'vuex-class'
import axios from 'axios'
const serverUrl = 'http://192.168.0.11:3000'

@Component
export default class CreateMeetup extends Vue {
  @Mutation('SET_MEETUP', { namespace: 'meetup' }) setMeetup: any
  @Mutation('showError', { namespace: 'snackbar' }) showError: any
  @Mutation('showSuccess', { namespace: 'snackbar' }) showSuccess: any

  step = 1
  name = '맛쵸킹 ㄱ'
  place = 'BHC 치킨'
  peopleLimit = 4
  hour = '오후 6시'
  hours = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20].filter(i => i >= new Date().getHours()).map(this.getHours)
  minute = '0분'
  minutes = [0, 10, 20, 30, 40, 50].map(i => `${i}분`)

  @Watch('peopleLimit')
  onPeopleLimitChanged (v: number) {
    if (v <= 1) {
      Vue.nextTick(() => {
        this.peopleLimit = 2
      })
    }
  }

  get stepValidation (): boolean {
    switch (this.step) {
      case 1:
        return this.name.length >= 1 && this.name.length <= 30
      case 2:
        return this.place.length >= 2 && this.place.length <= 30
      case 4:
        return !!(this.hour && this.minute)
      case 5:
        return !!(this.name.length >= 1 &&
                  this.name.length <= 30 &&
                  this.place.length >= 2 &&
                  this.place.length <= 30 &&
                  this.hour && this.minute)
      default:
        return true
    }
  }

  getHours (h: number): string {
    return h <= 11 ? `오전 ${h}시` : h === 12 ? '오후 12시' : `오후 ${h - 12}시`
  }

  back () {
    this.$router.go(-1)
  }

  previousStep () {
    this.step--
  }

  nextStep () {
    this.step++
  }

  async createMeetup () {
    try {
      const { name, place, peopleLimit, hour, minute } = this
      const time = `${hour} ${minute === '0분' ? '' : minute}`.trim()
      this.setMeetup({ name, place, peopleLimit, time })
      const { data: { success, message, meetup } } =
        await axios.post(
          `${serverUrl}/meetups/create`,
          { name, place, peopleLimit, time },
          { headers: { Authorization: `bearer ${this.$store.state.token}` } })

      if (success) {
        this.showSuccess(message)
        return this.$router.push({ name: 'Meetups' })
      }

      this.showError(message)
    } catch ({ message }) {
      this.showError(message)
    }
  }
}
</script>

<style scoped>
.next {
  font-size: 18px;
  font-weight: 500;
}

.people-limit-text {
  font-size: 40px;
}
</style>

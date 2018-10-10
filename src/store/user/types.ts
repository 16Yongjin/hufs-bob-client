import { Meetup } from '../meetup/types'

export interface User {
  _id: string,
  id: string,
  name: string,
  gender: string,
  meetup: Meetup | null
}

export interface UserState {
  user: User | undefined
}
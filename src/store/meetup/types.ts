export interface Chat {
  name: string,
  message: string,
  time: string
}

export interface Meetup {
  _id: string,
  name: string,
  place: string,
  people: number,
  peopleLimit: number,
  time: string,
  chats: Array<Chat>
}

export interface MeetupState {
  meetups: Array<Meetup>
  meetup: Meetup | null
}
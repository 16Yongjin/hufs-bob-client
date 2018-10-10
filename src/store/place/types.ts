export interface Place {
	_id: string,
  name: string,
  type: string,
  time: string,
  lng: number,
  lat: number,
  menu: string,
  images: Array<string>,
  honbab?: number,
  sensei?: string,

}

export interface PlaceState {
  places: Array<Place>
}

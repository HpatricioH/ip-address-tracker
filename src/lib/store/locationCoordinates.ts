import { create } from 'zustand'

interface LocationCoordinates {
  lat: number
  lng: number
  setLat: (lat: number) => void
  setLng: (lng: number) => void
}

export const useLocationCoordinates = create<LocationCoordinates>((set) => ({
  lat: 0,
  setLat: (lat) => { set({ lat }) },
  lng: 0,
  setLng: (lng) => { set({ lng }) }
}))

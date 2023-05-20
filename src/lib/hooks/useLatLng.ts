import { useEffect, useState } from 'react'
import { useLocationCoordinates } from '../store/locationCoordinates'

export interface LatLngType {
  lat: number
  lng: number
  mapKey: number
}

export const useLatLng = () => {
  const { lat, lng } = useLocationCoordinates()
  const [mapKey, setMapKey] = useState(Date.now())

  useEffect(() => {
    if (lat !== null && lng !== null) {
      setMapKey(Date.now()) // Update the map key to re-mount the MapContainer
    }
  }, [lat, lng])

  return { lat, lng, mapKey }
}

import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, AttributionControl } from 'react-leaflet'
import L from 'leaflet'
import { useEffect, useState } from 'react'
import { useLocationCoordinates } from 'components/lib/store/locationCoordinates'

const icon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [23, 56]
})

export default function Map () {
  const { lat, lng } = useLocationCoordinates()
  const [mapKey, setMapKey] = useState(Date.now())

  useEffect(() => {
    if (lat !== null && lng !== null) {
      setMapKey(Date.now()) // Update the map key to re-mount the MapContainer
    }
  }, [lat, lng])

  return (
    <MapContainer
      key={mapKey} // Update the key to re-mount the MapContainer
      center={[lat, lng]}
      style={{ height: '100vh', width: '100%', zIndex: 1 }}
      zoom={100}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <AttributionControl prefix='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors' />

      <Marker position={[lat, lng]} icon={icon} />

    </MapContainer>
  )
}

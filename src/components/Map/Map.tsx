import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, AttributionControl } from 'react-leaflet'
import L from 'leaflet'
import { type LatLngType, useLatLng } from 'components/lib/hooks/useLatLng'

const icon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [23, 56]
})

export default function Map () {
  const { lat, lng, mapKey } = useLatLng() as LatLngType

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

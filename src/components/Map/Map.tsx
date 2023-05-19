import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, AttributionControl } from 'react-leaflet'
import L, { type LatLngTuple } from 'leaflet'
import { useLocationCoordinates } from 'components/lib/store/locationCoordinates'

const icon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [23, 56]
})

export default function Map () {
  const { lat, lng } = useLocationCoordinates()

  if (!lat || !lng) return null

  const position: LatLngTuple = [lat, lng]

  return (
    <MapContainer
      center={position}
      style={{ height: '100vh', width: '100%', zIndex: 1 }}
      zoom={13}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position} icon={icon}>
      </Marker>
    </MapContainer>
  )
}

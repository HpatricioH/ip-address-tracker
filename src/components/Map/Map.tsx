import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, AttributionControl } from 'react-leaflet'
import L, { type LatLngTuple } from 'leaflet'

const icon = L.icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [46, 56],
  iconAnchor: [23, 56]
})

export default function Map () {
  const defaultLatLng: LatLngTuple = [48.865572, 2.283523]
  const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'

  return (
    <MapContainer
      id="mapId"
      center={defaultLatLng}
      style={{ height: '100vh', width: '100%' }}
      zoom={100}
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <AttributionControl prefix={attribution} />
      <Marker position={defaultLatLng} icon={icon}>
      </Marker>
    </MapContainer>
  )
}

import dynamic from 'next/dynamic'

const Map = dynamic(async () => await import('components/components/Map/Map'), {
  ssr: false
})

export default Map

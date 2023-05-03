import Header from 'components/components/Header/Header'
import Map from 'components/components/Map'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home () {
  return (
    <>
      <Header />
      <main
        className={`${inter.className}`}
      >
        <Map />
      </main>
    </>
  )
}

import axios from 'axios'
import { useEffect, useState } from 'react'
import { type IpType } from 'components/lib/types/types'
import { useIpData } from 'components/lib/store/ipData'
import { useLocationCoordinates } from 'components/lib/store/locationCoordinates'

export default function IpInformation () {
  const { ip } = useIpData()
  const { setLat, setLng } = useLocationCoordinates()
  const [ipData, setIpData] = useState<IpType | null >(null)
  const regionString = ipData?.location.region
  const KEY = process.env.NEXT_PUBLIC_KEY_API as string
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=${ip}`

  const getIpInfo = async () => {
    // make a request to the ip geolocation api
    try {
      const response = await axios.get(URL)
      if (response.data) {
        setIpData(response.data)
        setLat(response.data.location.lat)
        setLng(response.data.location.lng)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getIpInfo()
  }, [URL])

  return (
    <section className="absolute -top-24 z-10 w-full p-[1.5rem]">
      <div
        className="bg-white rounded-[0.85rem] py-6 flex flex-col justify-center items-center [&_h3]:text-[#878383] [&_h3]:font-bold [&_h3]:text-[0.60rem] [&_h3]:uppercase [&_h3]:tracking-widest [&_h3]:pb-1 [&_p]:capitalize [&_p]:font-bold [&_p]:pb-6 [&_p]:text-xl" >
        <h3>ip address</h3>
          <p>{ipData?.ip}</p>
        <h3>location</h3>
          <p>{ipData?.location?.city}, <span className='uppercase'>{regionString?.substring(0, 2)}</span> {ipData?.location.postalCode}</p>
        <h3>timezone</h3>
          <p>UTC {ipData?.location.timezone}</p>
        <h3>isp</h3>
          <p className='text-center'>{ipData?.isp}</p>
      </div>
    </section>
  )
}

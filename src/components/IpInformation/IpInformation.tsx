// import axios from 'axios'
import { useEffect, useState } from 'react'
import data from '../../lib/data/data.json'

interface IpType {
  ip: string
  location: {
    country: string
    region: string
    city: string
    lat: number
    lng: number
    postalCode: string
    timezone: string
    geonameId: number
  }
  domains: string[]
  as: {
    asn: number
    name: string
    route: string
    domain: string
    type: string
  }
  isp: string
}

export default function IpInformation () {
  const [ipData, setIpData] = useState<IpType | null >(null)
  const regionString = ipData?.location.region
  // const KEY = process.env.NEXT_PUBLIC_KEY_API as string
  // const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=8.8.8.8`

  // const getIpInfo = async () => {
  //   // make a request to the ip geolocation api
  //   try {
  //     const response = await axios.get(URL)
  //     if (response.data) {
  //       setIpData(response.data)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  useEffect(() => {
    // getIpInfo()
    setIpData(data)
  }, [])

  console.log(ipData)

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
          <p>{ipData?.isp}</p>
      </div>
    </section>
  )
}

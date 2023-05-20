import { useEffect, useState } from 'react'
import { useIpData } from '../store/ipData'
import { useLocationCoordinates } from '../store/locationCoordinates'
import { type IpType } from '../types/types'
import axios from 'axios'

export interface IpInfoType {
  ipData: IpType | null
  regionString: string | undefined
}

export function useIpInfo () {
  const { ip } = useIpData()
  const { setLat, setLng } = useLocationCoordinates()
  const [ipData, setIpData] = useState<IpType | null >(null)
  const regionString = ipData?.location.region
  const KEY = process.env.NEXT_PUBLIC_KEY_API as string
  const URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${KEY}&ipAddress=${ip}`

  useEffect(() => {
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
        throw new Error('API request failed!')
      }
    }

    getIpInfo()
  }, [ip, URL, setLat, setLng])

  return { ipData, regionString }
}

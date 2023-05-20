import { useIpInfo, type IpInfoType } from 'components/lib/hooks/useIpInfo'

export default function IpInformation () {
  const { ipData, regionString } = useIpInfo() as IpInfoType

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

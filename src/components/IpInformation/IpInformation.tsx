import { useIpInfo, type IpInfoType } from 'components/lib/hooks/useIpInfo'

export default function IpInformation () {
  const { ipData, regionString } = useIpInfo() as IpInfoType

  return (
    <section className="w-full flex justify-center items-center">
      <div className="absolute -top-24 z-10 w-full p-[1.5rem] md:w-[45rem]">
        <div
          className="bg-white rounded-[0.85rem] py-6 flex flex-col justify-center items-center [&_h3]:text-[#878383] [&_h3]:font-bold [&_h3]:text-[0.60rem] [&_h3]:uppercase [&_h3]:tracking-widest [&_h3]:pb-1 [&_p]:capitalize [&_p]:font-bold [&_p]:pb-6 [&_p]:text-xl md:flex-row md:justify-evenly" >
          <div className='text-center md:border-r md:pr-6 md:text-left'>
            <h3>ip address</h3>
              <p>{ipData?.ip}</p>
          </div>
          <div className='text-center md:border-r md:pr-6 md:text-left'>
            <h3>location</h3>
              <p>{ipData?.location?.city},
                <span className='uppercase'>{regionString?.substring(0, 2)}</span>
                {ipData?.location.postalCode}
              </p>
          </div>
          <div className='text-center md:border-r md:pr-6 md:text-left'>
            <h3>timezone</h3>
              <p>UTC {ipData?.location.timezone}</p>
          </div>
          <div className='text-center md:text-left'>
            <h3>isp</h3>
              <p className='text-center'>{ipData?.isp}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

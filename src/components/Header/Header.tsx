import { useIpData } from 'components/lib/store/ipData'
import Image from 'next/image'
// import { type FormEvent } from 'react'

export default function Header () {
  const { setIp } = useIpData()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { ipAddress } = Object.fromEntries(
      new window.FormData(e.currentTarget).entries()
    )
    setIp(ipAddress as string)
  }

  return (
    <header>
      <div className="flex flex-col gap-4 justify-center items-center relative">
        <Image src='/images/pattern-bg-mobile.png' alt='background image' width={400} height={100} quality={100} />
        <h1 className='absolute top-6 text-[1.30rem] font-semibold text-[#F2F2F2] tracking-wider'>IP Address Tracker</h1>
        <div className='absolute top-20 px-4 w-[19rem]'>
          <form className='relative' onSubmit={handleSubmit}>
            <button className='flex justify-center items-center absolute bg-black h-14 w-[3.5rem] rounded-r-xl left-[13.5rem]'>
              <Image src='/images/icon-arrow.svg' alt='arrow icon' width={11} height={11} />
            </button>
            <input
              type='text'
              name='ipAddress'
              id='ipAddress'
              placeholder="Search for any IP address or domain"
              className='rounded-[0.85rem] h-14 w-full p-4 focus:outline-0 placeholder:text-xs'
            />
          </form>
        </div>
      </div>
    </header>
  )
}

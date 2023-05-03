import Image from 'next/image'

export default function Header () {
  return (
    <header>
      <div className="flex flex-col gap-4 justify-center items-center relative">
        <Image
          src='/images/pattern-bg-mobile.png'
          alt='background image'
          width={400}
          height={100}
          quality={100}
        />
        <h1 className='absolute top-6 text-[1.30rem] font-semibold text-[#F2F2F2] tracking-wider'>IP Address Tracker</h1>
        <div className='absolute top-20 px-4 w-[24rem]'>
          <form className='relative'>
            <button className='flex justify-center items-center absolute bg-black h-14 w-[3.5rem] rounded-r-xl left-[18.5rem]'>
              <Image
                src='/images/icon-arrow.svg'
                alt='arrow icon'
                width={11}
                height={11}
              />
            </button>
            <input
              type="text"
              placeholder="Search for any IP address or domain"
              className='rounded-[0.85rem] h-14 w-full p-4 focus:outline-0 '/>
          </form>
        </div>
      </div>
    </header>
  )
}

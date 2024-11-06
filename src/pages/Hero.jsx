import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen mt-[5rem] max-h-screen'>
      <div className='relative'>
        <img
          src="assets/kos-land.jpg"
          alt="Hero"
          className='w-full object-contain h-[500px]'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>
      <div className='absolute top-[5rem] text-white px-4 md:px-[80px]'>
        <div className='font-bold text-4xl mt-32'>
          Welcome to Rumah Klaten Asri
        </div>
        <div className='text-xl'>
          Kos Putri Rumah Kembar
        </div>
        <div>
          <div className='mt-10 bg-green-100 text-green-600 p-2'>Sewa Sekarang</div>
        </div>
      </div>
    </div>
  )
}

export default Hero
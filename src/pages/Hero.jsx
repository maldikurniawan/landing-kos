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
        <div className='mt-10 mb-4 inline-block bg-green-100 font-bold text-green-600 p-2 cursor-pointer rounded-lg'>
          Sewa Sekarang
        </div>
        <div className='flex gap-4'>
          <div className='inline-block bg-green-600 text-white p-6 rounded-lg'>
            <div className='font-bold text-2xl'>
              Mengapa Memilih Rumah Klaten Asri?
            </div>
            <div className='mt-10'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam incidunt neque consequuntur earum ipsam obcaecati exercitationem, libero minima quas maxime dolorem, assumenda nemo. Quidem nisi ad nam nemo dolores.
            </div>
          </div>
          <div className='bg-white text-black p-10 rounded-lg shadow-lg my-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem molestiae ad quo illum, itaque, eum odio unde ipsa, consequatur sed esse ratione! Ratione, officiis explicabo eum ea exercitationem aliquid.
          </div>
          <div className='bg-white text-black p-10 rounded-lg shadow-lg my-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem molestiae ad quo illum, itaque, eum odio unde ipsa, consequatur sed esse ratione! Ratione, officiis explicabo eum ea exercitationem aliquid.
          </div>
          <div className='bg-white text-black p-10 rounded-lg shadow-lg my-10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem molestiae ad quo illum, itaque, eum odio unde ipsa, consequatur sed esse ratione! Ratione, officiis explicabo eum ea exercitationem aliquid.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
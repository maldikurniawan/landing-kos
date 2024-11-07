import React, { useState } from 'react';
import { BsMoonStars } from 'react-icons/bs';

const Hero = () => {
  const [hero] = useState([
    {
      title: "Lorem",
      description: "Lorem ipsum.",
      icon: <BsMoonStars />,
    },
    {
      title: "Lorem",
      description: "Lorem ipsum.",
      icon: <BsMoonStars />,
    },
    {
      title: "Lorem",
      description: "Lorem ipsum.",
      icon: <BsMoonStars />,
    },
  ]);

  return (
    <div id='Hero' className='h-screen mt-[5rem] max-h-screen relative'>
      {/* Background Image Section */}
      <div className='relative'>
        <img
          src="assets/kos-land.jpg"
          alt="Hero"
          className='w-full h-[300px] md:h-[500px] object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Overlay Content */}
      <div className='absolute inset-0 top-[5rem] flex flex-col items-center text-center text-white px-4 md:px-[80px]'>
        <div className='font-bold text-2xl sm:text-4xl mt-20 md:mt-32'>
          Welcome to Rumah Klaten Asri
        </div>
        <div className='text-lg sm:text-xl'>
          Kos Putri Dengan Desain Rumah Kembar
        </div>
        <div className='mt-6 md:mt-10 mb-4 inline-block bg-green-100 font-bold text-green-600 p-2 cursor-pointer rounded-lg'>
          Sewa Sekarang
        </div>

        {/* Main Content Section */}
        <div className='flex flex-col lg:flex-row gap-4 mt-6 w-full max-w-6xl px-4'>
          {/* Left Panel */}
          <div className='bg-green-600 text-white p-6 rounded-lg flex-1'>
            <div className='font-bold text-xl sm:text-2xl'>
              Mengapa Memilih Rumah Klaten Asri?
            </div>
            <div className='mt-4 sm:mt-10 text-sm sm:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum numquam incidunt neque consequuntur earum ipsam obcaecati exercitationem, libero minima quas maxime dolorem, assumenda nemo. Quidem nisi ad nam nemo dolores.
            </div>

          </div>
          {/* Right Pannel */}
          <div className='flex flex-col gap-4 mt-6'>
            {hero.map((item, itemIdx) => (
              <div key={itemIdx} className='flex items-center gap-2'>
                <div className='text-lg'>{item.icon}</div>
                <div>
                  <div className='font-bold'>{item.title}</div>
                  <div className='text-sm'>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

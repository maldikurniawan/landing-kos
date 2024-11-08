import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsHouseCheck } from 'react-icons/bs';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { GrMapLocation } from 'react-icons/gr';
import { LiaBroomSolid } from 'react-icons/lia';

const Hero = () => {
  const [hero] = useState([
    {
      title: "Tempat yang bersih",
      description: "Membuat suasana hati lebih tenang dan nyaman.",
      icon: <LiaBroomSolid />,
      animation: 'fade-up',
      delay: 100,
    },
    {
      title: "Fasilitas",
      description: "Dengan fasilitas yang lenkap dapat membantu semua aktifitas kamu di kos-kosan.",
      icon: <BsHouseCheck />,
      animation: 'fade-up',
      delay: 200,
    },
    {
      title: "Dekat kemana saja",
      description: "Dengan lokasi yang strategis yang bisa menjangkau tujuan anda.",
      icon: <GrMapLocation />,
      animation: 'fade-up',
      delay: 300,
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='Hero' className='xl:h-[720px] lg:h-[1060px] md:h-[1240px] sm:h-[1160px] h-[1330px] mt-[5rem] relative bg-gray-100'>
      {/* Background Image Section */}
      <div className='relative' data-aos="fade-in">
        <img
          src="assets/kos-land.jpg"
          alt="Hero"
          className='w-full h-[300px] md:h-[500px] object-cover'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
      </div>

      {/* Overlay Content */}
      <div className='absolute inset-0 flex flex-col items-start text-white px-4 md:px-[80px]'>
        <div className='font-bold text-2xl sm:text-4xl mt-20 md:mt-32' data-aos="fade-up">
          Welcome to Rumah Klaten Asri
        </div>
        <div className='text-lg sm:text-xl' data-aos="fade-up" data-aos-delay="200">
          Kos Putri Dengan Desain Rumah Kembar
        </div>
        <div className='mt-6 md:mt-10 mb-4 inline-block bg-green-100 hover:bg-green-600 hover:text-green-100 font-bold text-green-600 p-2 rounded-lg' data-aos="fade-up" data-aos-delay="400">
          <a href="https://wa.me/6281369304112" target="_blank" rel="noopener noreferrer">
            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <FaArrowAltCircleRight />
              </div>
              <div>
                Sewa Sekarang
              </div>
            </div>
          </a>
        </div>

        {/* Main Content Section */}
        <div className='flex flex-col lg:flex-row gap-6 mt-6 w-full max-w-6xl'>
          {/* Left Panel (1/4 width) */}
          <div className='bg-green-600 text-white p-6 rounded-lg xl:w-1/4 lg:w-[360px] h-fit flex-shrink-0' data-aos="fade-right">
            <div className='font-bold text-xl sm:text-2xl'>
              Mengapa Memilih Rumah Klaten Asri?
            </div>
            <div className='mt-4 text-sm sm:text-base'>
              Dengan lokasi yang strategis, tempat yang nyaman, serta fasilitas yang sangat lengkap, pengalaman Anda akan menjadi lebih menyenangkan. Tempat ini juga cocok dijadikan homestay untuk menginap hanya dalam hitungan hari.
            </div>
          </div>

          {/* Right Panel (3/4 width) */}
          <div className='lg:w-3/4 grid grid-cols-1 xl:grid-cols-3 gap-4'>
            {hero.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className='bg-white dark:bg-white p-10 xl:my-10 rounded-lg flex flex-col items-center text-center gap-3 shadow-lg'
                data-aos={item.animation}
                data-aos-delay={item.delay}
              >
                <div className='text-green-600 mb-4 text-4xl'>{item.icon}</div>
                <div className='space-y-6'>
                  <div className='font-bold text-green-800 text-xl'>{item.title}</div>
                  <div className='text-gray-700 text-sm text-start'>{item.description}</div>
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

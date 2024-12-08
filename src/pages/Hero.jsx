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
      description: "Dengan fasilitas yang lengkap dapat membantu semua aktivitas kamu di kos-kosan.",
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
    <div id="Hero" className="bg-gray-100 py-10 xl:h-[770px]">
      {/* Background Image Section */}
      <div className="relative">
        <img
          src="assets/rumahdepan.jpg"
          alt="Hero"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 md:px-[80px] text-white">
          <div className="font-bold text-xl sm:text-4xl" data-aos="fade-up">
            Welcome to Rumah Klaten Asri
          </div>
          <div className="text-md sm:text-xl mt-2" data-aos="fade-up" data-aos-delay="200">
            Kos Putri Berdesain Rumah Kembar
          </div>
          <div
            className="mt-6 inline-block bg-green-100 hover:bg-green-600 hover:text-green-100 font-bold text-green-600 p-2 rounded-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a href="https://wa.me/6281369304112" target="_blank" rel="noopener noreferrer">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaArrowAltCircleRight />
                <span>Sewa Sekarang</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div
        className="container mx-auto px-4 mt-10 relative xl:absolute xl:top-[400px] xl:left-1/2 xl:-translate-x-1/2 xl:z-30"
      >
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Panel */}
          <div
            className="bg-green-600 text-white p-6 rounded-lg lg:w-1/3"
            data-aos="fade-up"
          >
            <h2 className="font-bold text-xl sm:text-2xl">Mengapa Memilih Rumah Klaten Asri?</h2>
            <p className="mt-4 text-sm sm:text-base text-justify">
              Dengan lokasi yang strategis, tempat yang nyaman, serta fasilitas yang sangat lengkap,
              pengalaman Anda akan menjadi lebih menyenangkan. Tempat ini juga cocok dijadikan
              homestay untuk menginap hanya dalam hitungan hari.
            </p>
          </div>

          {/* Right Panel */}
          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {hero.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg flex flex-col items-center text-center shadow-lg"
                data-aos={item.animation}
                data-aos-delay={item.delay}
              >
                <div className="text-green-600 mb-4 text-4xl">{item.icon}</div>
                <h3 className="font-bold text-green-800 text-lg">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

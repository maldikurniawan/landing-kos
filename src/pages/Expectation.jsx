import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Expectation = () => {
  const [expectation] = useState([
    {
      title: "Misi Kami",
      description: "Menciptakan lingkungan kos yang nyaman, aman, dan menyenangkan, di mana para penghuni merasa seperti di rumah sendiri.",
      image: "assets/ruangtamu1.jpg",
    },
    {
      title: "Rencana Kami",
      description: "Menghadirkan aksesibilitas yang tinggi, memudahkan para penghuni kos untuk mencapai berbagai fasilitas umum dan kebutuhan sehari-hari.",
      image: "assets/halaman3.jpg",
    },
    {
      title: "Visi Kami",
      description: "Menyediakan hunian yang berfokus pada kenyamanan dan keamanan, dirancang khusus untuk mendukung putri-putri yang tinggal di kos kami.",
      image: "assets/dapur2.jpg",
    },
    {
      title: "Bantuan Kami",
      description: "Menawarkan fasilitas lengkap untuk mendukung kebutuhan para penghuni kos, menjadikan pengalaman tinggal lebih praktis dan nyaman.",
      image: "assets/kamar2.jpg",
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='Expectation' className='h-fit bg-white px-4 md:px-20 py-16'>
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-green-600 text-center'>
        Expectation
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {expectation.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="group bg-white hover:bg-green-600 rounded-lg w-[300px] sm:w-[350px] md:w-full overflow-hidden shadow-md transition-colors duration-300"
            data-aos="fade-up" // AOS animation type
            data-aos-delay={itemIdx * 100} // Stagger animation for each item
          >
            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
            <div className='p-6 flex flex-col items-center text-center transition-colors duration-300'>
              <div className='font-semibold text-green-600 text-lg mb-2 group-hover:text-white'>{item.title}</div>
              <div className='text-gray-600 group-hover:text-white text-justify'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expectation;

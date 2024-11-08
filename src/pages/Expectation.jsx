import React, { useState } from 'react';

const Expectation = () => {
  const [expectation] = useState([
    {
      title: "Misi Kami",
      description: "Menciptakan lingkungan kos yang nyaman, aman, dan menyenangkan, di mana para penghuni merasa seperti di rumah sendiri.",
      image: "assets/kos-land.jpg",
    },
    {
      title: "Rencana Kami",
      description: "Menghadirkan aksesibilitas yang tinggi, memudahkan para penghuni kos untuk mencapai berbagai fasilitas umum dan kebutuhan sehari-hari.",
      image: "assets/kos-land.jpg",
    },
    {
      title: "Visi Kami",
      description: "Menyediakan hunian yang berfokus pada kenyamanan dan keamanan, dirancang khusus untuk mendukung putri-putri yang tinggal di kos kami.",
      image: "assets/kos-land.jpg",
    },
    {
      title: "Bantuan Kami",
      description: "Menawarkan fasilitas lengkap untuk mendukung kebutuhan para penghuni kos, menjadikan pengalaman tinggal lebih praktis dan nyaman.",
      image: "assets/kos-land.jpg",
    },
  ]);

  return (
    <div id='Expectation' className='h-fit bg-white dark:bg-white px-4 md:px-20 py-16'>
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-8 text-green-600 text-center'>
        Expectation
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {expectation.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="group bg-white dark:bg-white hover:bg-green-600 rounded-lg w-[300px] sm:w-[350px] md:w-full overflow-hidden shadow-md transition-colors duration-300"
          >
            <img src={item.image} alt={item.title} className='w-full h-48 object-cover' />
            <div className='p-6 flex flex-col items-center text-center transition-colors duration-300'>
              <div className='font-semibold text-green-600 text-lg mb-2 group-hover:text-white'>{item.title}</div>
              <div className='text-gray-600 group-hover:text-white'>{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Expectation;

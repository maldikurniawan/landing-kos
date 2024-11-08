import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
  const [contentReadMore] = useState([
    {
      title: "Sewa Perbulan",
      price: "1.500.000 / Bulan",
      detail: [
        "Sudah Termasuk Kompor",
        "Spring Bed",
        "Lemari Pakaian",
        "Kamar Mandi Dalam Kamar",
      ],
    },
    {
      title: "Sewa Pertahun",
      price: "16.000.000 / Tahun",
      detail: [
        "Sudah Termasuk Kompor",
        "Spring Bed",
        "Lemari Pakaian",
        "Kamar Mandi Dalam Kamar",
      ],
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='Pricing' className='h-fit bg-white px-4 md:px-[80px] py-16 md:py-[5rem]'>
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-10 text-green-600 text-center'>
        Pricing
      </div>
      {/* Grid for content */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6 sm:gap-8 xl:gap-10">
        {contentReadMore.map((item, index) => (
          <div
            key={index}
            className="rounded-lg bg-white hover:scale-105 hover:shadow shadow-md transition-all duration-300"
            data-aos="fade-up" // AOS animation type
            data-aos-delay={index * 100} // Stagger animation for each item
          >
            <div className="text-lg font-semibold mb-2 bg-green-600 text-white rounded-t-lg p-4 text-center">{item.title}</div>
            <div className='text-green-600 font-bold px-4 my-6 text-xl sm:text-2xl'>{`Rp ${item.price}`}</div>
            <ol className="text-base mb-4 text-fade space-y-4 font-light px-4">
              {item.detail.map((detail, index) => (
                <li key={index} className="list-disc list-inside pl-2">
                  {detail}
                </li>
              ))}
            </ol>
            <div className='bg-gray-200 p-4'>
              <div className='bg-green-600 text-white text-center p-1 whitespace-nowrap cursor-pointer rounded-lg'>
                Sewa Sekarang
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;

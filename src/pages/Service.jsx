import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsFuelPump, BsMoonStars } from 'react-icons/bs';
import { CiMedicalCase } from 'react-icons/ci';
import { GiWaterPolo } from 'react-icons/gi';
import { IoIosSchool } from 'react-icons/io';
import { LuBaggageClaim } from 'react-icons/lu';

const Service = () => {
  const [service] = useState([
    {
      title: "Dekat dengan Masjid",
      description: "Nikmati kemudahan untuk sholat berjamaah tepat waktu dengan lokasi yang sangat dekat dari masjid.",
      icon: <BsMoonStars />,
    },
    {
      title: "3 Menit ke Apotek Terdekat",
      description: "Akses cepat ke apotek, memudahkan Anda untuk membeli obat dan kebutuhan kesehatan lainnya tanpa harus menunggu lama.",
      icon: <CiMedicalCase />,
    },
    {
      title: "10 Menit ke Kampus ITERA",
      description: "Lokasi strategis bagi mahasiswa ITERA! Hanya perlu 10 menit perjalanan untuk mencapai kampus.",
      icon: <IoIosSchool />,
    },
    {
      title: "10 Menit ke Water World Lampung",
      description: "Pilihan rekreasi ideal untuk melepas penat. Habiskan waktu seru di Water World Lampung yang hanya 10 menit dari sini.",
      icon: <GiWaterPolo />,
    },
    {
      title: "7 Menit ke SPBU",
      description: "Tidak perlu khawatir kehabisan bahan bakar, SPBU terdekat bisa dijangkau hanya dalam 7 menit.",
      icon: <BsFuelPump />,
    },
    {
      title: "Dekat dengan Warung dan Minimarket",
      description: "Bagi yang gemar ngemil atau ingin kebutuhan sehari-hari, warung dan minimarket terdekat dapat diakses dengan mudah.",
      icon: <LuBaggageClaim />,
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='Service' className='h-fit bg-gray-100 px-2 md:px-20 py-16'>
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-16 text-green-600 text-center'>
        Service
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {service.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-white dark:bg-white rounded-lg w-[300px] lg:w-[280px] xl:w-[350px] p-4 mb-10 flex flex-col items-center text-center shadow-md"
            data-aos="fade-up" // AOS animation type
            data-aos-delay={itemIdx * 100} // Stagger animation for each item
          >
            <div className='text-4xl text-white hover:text-green-600 hover:bg-white outline mb-4 bg-green-600 p-4 rounded-full absolute -mt-12'>
              {item.icon}
            </div>
            <div className='font-semibold text-lg mb-2 mt-10'>{item.title}</div>
            <div className='text-gray-600 text-start p-4'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

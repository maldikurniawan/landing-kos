import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  const [aboutUs] = useState({
    title: "Tentang Kami",
    description:
      "Rumah Klaten Asri adalah kos-kosan khusus wanita yang sedang berkembang di Bandar Lampung. Dilengkapi dengan fasilitas lengkap dan berlokasi strategis, sehingga memudahkan akses ke berbagai tempat, memungkinkan kamu mengatur waktu tanpa perlu terburu-buru mencapai tujuan.",
    image: "/assets/kos-land.jpg",
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div id='About' className='h-fit bg-white dark:bg-white grid grid-cols-1 md:grid-cols-12 px-6 py-16 md:px-[80px] md:py-[5rem] gap-6'>
      <div className="col-span-full md:col-span-6" data-aos="fade-up">
        <img src={aboutUs.image} alt="about" className="w-full rounded-xl" />
      </div>
      <div className="col-span-full md:col-span-6" data-aos="fade-up" data-aos-delay="200">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-left mb-4 md:mb-10 text-green-600">
          {aboutUs.title}
        </div>
        <p
          style={{ alignSelf: "stretch" }}
          className="text-left text-base text-gray-600 sm:text-lg md:text-xl leading-7 md:leading-9"
        >
          {aboutUs.description}
        </p>
      </div>
    </div>
  );
};

export default About;

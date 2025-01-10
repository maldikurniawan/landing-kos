import React, { useState, useEffect } from 'react';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [contact] = useState([
    {
      title: "Alamat Kami",
      description: "Jl. Kelengkeng 10, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Bandar Lampung",
      icon: <IoLocationOutline />,
    },
    {
      title: "Email Kami",
      description: "rumahklatenasri@gmail.com",
      icon: <IoMailOutline />,
    },
    {
      title: "Hubungi Kami",
      description: "0813-6930-4112",
      icon: <BsTelephone />,
    },
  ]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <div
      id='Contact'
      className='relative bg-gray-100 px-4 sm:px-6 lg:px-20 py-10 lg:py-16'
    >
      {/* Section Title */}
      <div
        className='relative z-10 font-bold text-2xl sm:text-3xl lg:text-4xl mb-8 text-green-600 text-center'
      >
        Kontak Kami
      </div>

      {/* Map Section */}
      <div
        className="relative overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] rounded-lg mb-12"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d828.8856720248264!2d105.31449099999999!3d-5.3489580000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40c3005a872cfb%3A0x789fb35923f0f286!2sRumah%20Kost%20Klaten%20Asri!5e1!3m2!1sid!2sid!4v1731480189546!5m2!1sid!2sid"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Contact Information */}
      <div
        className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10'
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        {contact.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-white shadow-lg rounded-md p-6 flex flex-col justify-center items-center text-center"
          >
            <div className='text-3xl lg:text-4xl text-green-600 mb-3'>{item.icon}</div>
            <div className='font-semibold text-lg lg:text-xl mb-2'>{item.title}</div>
            <div className='text-sm lg:text-base text-gray-600'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

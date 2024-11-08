import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
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
      description: "0813 6930 4112",
      icon: <BsTelephone />,
    },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a default duration of 1000ms
  }, []);

  return (
    <div id='Contact' className='relative xl:h-[800px] md:h-[1100px] bg-gray-100 px-4 md:px-[80px] py-16 md:py-[5rem]'>
      {/* Main content */}
      <div className='relative z-10 font-bold text-2xl md:text-4xl mb-2 text-green-600 text-center' data-aos="fade-up">
        Kontak Kami
        <div className="absolute inset-0 h-screen -z-10 px-4 md:px-[80px] pb-[11rem] pt-24" data-aos="fade-up">
          <MapContainer
            center={[-5.349023596526887, 105.31452228437999]}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution=''
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-5.349023596526887, 105.31452228437999]}>
              <Popup>
                Jl. Kelengkeng 10, Way Huwi, Kec. Jati Agung, Kabupaten Lampung Selatan, Lampung 35365
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>

      {/* Contact Information section */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 mt-[460px] max-[450px]:mt-[650px] justify-center items-center'>
        {contact.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-white shadow-lg rounded-md p-6 flex flex-col justify-center items-center text-center"
            data-aos="fade-up"  // Add AOS animation here
          >
            <div className='text-4xl text-green-600 mb-2'>{item.icon}</div>
            <div className='font-semibold text-lg mb-1'>{item.title}</div>
            <div className='text-gray-600'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;

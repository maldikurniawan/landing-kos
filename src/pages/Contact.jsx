import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BsMoonStars } from 'react-icons/bs';

const Contact = () => {
  const [contact] = useState([
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
    <div id='Contact' className='relative h-[750px] bg-green-50 px-4 md:px-[80px] py-0 md:py-[5rem]'>
      {/* This is the main content */}
      <div className='relative z-10 font-bold text-2xl md:text-4xl mb-2 text-green-600 text-center'>
        Kontak Kami
        <div className="absolute inset-0 h-screen -z-10 px-4 md:px-[80px] pb-[11rem] pt-24">
          <MapContainer
            center={[-5.349023596526887, 105.31452228437999]}
            zoom={16}
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
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
      <div className='absolute bottom-0'>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center py-8">
          {contact.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="bg-[#E2E8F0] rounded-md w-[380px] p-6 flex flex-col items-center text-center"
            >
              <div className='text-4xl text-green-600 mb-2'>{item.icon}</div>
              <div className='font-semibold text-lg mb-1'>{item.title}</div>
              <div className='text-gray-600'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

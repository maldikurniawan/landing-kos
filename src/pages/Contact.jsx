import React, { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { BsTelephone } from 'react-icons/bs';
import { IoLocationOutline, IoMailOutline } from 'react-icons/io5';

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

  return (
    <div id='Contact' className='relative xl:h-[800px] md:h-[1100px] bg-green-50 px-4 md:px-[80px] py-16 md:py-[5rem]'>
      <div className='text-center font-bold text-2xl md:text-4xl mb-8 text-green-600'>
        Kontak Kami
      </div>

      {/* Map section */}
      <div className="relative h-96 w-full mb-8">
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

      {/* Contact Information section */}
      <div className='grid grid-cols-1 xl:grid-cols-3 gap-4 justify-center items-center'>
        {contact.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-white shadow-lg rounded-md p-6 flex flex-col justify-center items-center text-center"
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

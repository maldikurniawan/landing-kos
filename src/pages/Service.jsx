import React, { useState } from 'react';
import { BsMoonStars } from 'react-icons/bs';

const Service = () => {
  const [service] = useState([
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
    <div id='Service' className='h-fit bg-gray-50 px-4 md:px-[80px] py-16 md:py-[5rem]'>
      <div className='font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-10 text-green-600 text-center'>
        Service
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {service.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-[#E2E8F0] rounded-md w-[300px] sm:w-[350px] md:w-[380px] p-6 flex flex-col items-center text-center"
          >
            <div className='text-4xl text-green-600 mb-2'>{item.icon}</div>
            <div className='font-semibold text-lg mb-1'>{item.title}</div>
            <div className='text-gray-600'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;

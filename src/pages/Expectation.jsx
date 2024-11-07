import React, { useState } from 'react'
import { BsMoonStars } from 'react-icons/bs';

const Expectation = () => {
  const [expectation] = useState([
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
    <div id='Expectation' className='h-fit bg-emerald-50 px-4 md:px-[80px] py-0 md:py-[5rem]'>
      <div className='font-bold text-2xl md:text-4xl mb-2 md:mb-10 text-green-600 text-center'>
        Harapan Kami
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
        {expectation.map((item, itemIdx) => (
          <div
            key={itemIdx}
            className="bg-[#E2E8F0] rounded-md w-[580px] h-[200px] p-6 flex flex-col items-center text-center"
          >
            <div className='text-4xl text-green-600 mb-2'>{item.icon}</div>
            <div className='font-semibold text-lg mb-1'>{item.title}</div>
            <div className='text-gray-600'>{item.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Expectation;

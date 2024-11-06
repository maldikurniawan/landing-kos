import React, { useState } from 'react'

const About = () => {
  const [aboutUs] = useState({
    title: "Tentang Kami",
    description:
      "Rumah Klaten Asri adalah kos-kosan khusus wanita yang sedang berkembang di Bandar Lampung. Dilengkapi dengan fasilitas lengkap dan berlokasi strategis, sehingga memudahkan akses ke berbagai tempat, memungkinkan kamu mengatur waktu tanpa perlu terburu-buru mencapai tujuan.",
    image: "/assets/kos-land.jpg",
  });

  return (
    <div className='h-fit bg-green-50 grid grid-cols-12 px-4 md:px-[80px] py-0 md:py-[5rem] gap-6'>
      <div className="col-span-full md:col-span-6">
        <img src={aboutUs.image} alt="about" className="rounded-xl" />
      </div>
      <div className="col-span-full md:col-span-6">
        <div className="font-bold text-2xl md:text-4xl text-left mb-2 md:mb-10 text-green-600">
          {aboutUs.title}
        </div>
        <p
          style={{ alignSelf: "stretch" }}
          className="text-left text-base md:text-[1.25rem] leading-7 md:leading-9"
        >
          {aboutUs.description}
        </p>
      </div>

    </div>
  )
}

export default About
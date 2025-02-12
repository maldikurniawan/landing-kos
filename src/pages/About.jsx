import React, { useState } from 'react';
import { Button, Modal } from '@/components';

const About = () => {
  const [aboutUs] = useState({
    title: "Tentang Kami",
    description:
      "Rumah Klaten Asri adalah kos-kosan khusus wanita yang sedang berkembang di Bandar Lampung, berlokasi strategis dekat ITERA. Dilengkapi dengan fasilitas lengkap, kos ini memudahkan akses ke berbagai tempat penting, memungkinkan kamu mengatur waktu tanpa perlu terburu-buru mencapai tujuan.",
    image: "/assets/kos-land.jpg",
  });

  const [isModalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(!isModalOpen);

  return (
    <div id="About" className="h-fit bg-white grid grid-cols-1 md:grid-cols-12 px-6 py-16 md:px-[80px] md:py-[5rem] gap-6">
      <div className="col-span-full md:col-span-6" data-aos="fade-right" data-aos-delay="100">
        <div className="relative">
          <img src={aboutUs.image} alt="about" className="w-full rounded-xl" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Button onClick={closeModal} />
          </div>
        </div>
      </div>
      <div className="col-span-full md:col-span-6" data-aos="fade-left" data-aos-delay="100">
        <div className="font-bold text-2xl sm:text-3xl md:text-4xl text-left mb-4 md:mb-10 text-green-600">
          {aboutUs.title}
        </div>
        <p
          style={{ alignSelf: "stretch" }}
          className="text-justify text-base text-gray-600 sm:text-lg md:text-xl leading-7 md:leading-9"
        >
          {aboutUs.description}
        </p>
      </div>

      {/* Reusable Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="relative w-full pb-[56.25%]"> {/* This sets a 16:9 aspect ratio */}
          <iframe
            src="assets/kosan.mp4"
            className="absolute top-0 left-0 w-full h-full"
            allow="autoplay"
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import { IoChevronDown, IoChevronForward } from "react-icons/io5";
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const toggleCollapse = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: "Apakah kosan putri ini memiliki jam malam?",
      answer:
        "Ya, kosan putri ini memiliki jam malam. Penghuni diharapkan sudah berada di kosan maksimal pukul 22:00 untuk menjaga keamanan dan ketertiban. Pastikan untuk menjaga volume suara, terutama ketika berbicara atau mendengarkan musik, agar tidak mengganggu tetangga yang sedang beristirahat.",
    },
    {
      question: "Apakah kosan putri ini menerima tamu laki-laki?",
      answer:
        "Umumnya tamu laki-laki tidak diperbolehkan masuk ke area kamar. Namun, tamu laki-laki dapat berkunjung ke area umum atau ruang tamu dengan batasan waktu tertentu sesuai aturan kos.",
    },
    {
      question: "Bolehkah saya menggandakan kunci kamar atau gerbang kosan?",
      answer:
        "Tidak, penghuni tidak diperbolehkan menggandakan kunci kamar atau gerbang. Apabila kunci hilang, segera hubungi pengelola kos untuk penanganan lebih lanjut.",
    },
    {
      question: "Apakah penghuni kos wajib memberikan informasi identitas diri?",
      answer:
        "Ya, setiap penghuni wajib memberikan informasi identitas diri sebagai syarat tinggal di kos. Hal ini penting untuk keamanan dan administrasi.",
    },
    {
      question: "Apa yang harus saya lakukan jika hendak keluar area kos?",
      answer:
        "Pastikan pintu gerbang kos tertutup dan terkunci dengan baik saat Anda keluar. Ini untuk memastikan keamanan semua penghuni kos.",
    },
    {
      question:
        "Apa yang harus dilakukan jika ada fasilitas yang rusak atau ada masalah listrik?",
      answer:
        "Jika ada kerusakan fasilitas, seperti masalah listrik atau sumur bor, segera laporkan kepada pengelola kos. Pengelola akan segera menindaklanjuti permasalahan tersebut untuk kenyamanan penghuni.",
    },
  ];

  return (
    <div id='FAQ' className='space-y-[3rem]'>
      <div className="w-full bg-white overflow-hidden mb-[3rem]">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
          }}
          className="py-14 px-6 text-center bg-gradient-to-r from-green-600 to-lime-500 mb-4"
        >
          <div
            style={{
              backgroundImage: "url('/assets/landing/layer.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.2,
            }}
            className="absolute inset-0 z-0"
          ></div>
          <div className="relative z-10">
            <h1 className="text-xl md:text-4xl font-bold text-white">
              Paling Sering Ditanyakan
            </h1>
            <p className="text-white mt-2">
              Berikut adalah peraturan yang harus ditaati oleh setiap putri yang tinggal di Rumah Klaten Asri.
            </p>
          </div>
        </div>

        <div className="mx-4 sm:mx-6 md:mx-[80px] ">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleCollapse(index)}
                data-aos="fade-up" // AOS animation type
                data-aos-delay={index * 100} // Stagger animation for each item
              >
                {/* Title */}
                <div className="font-medium flex justify-between">
                  {item.question}

                  {/* Chevron Icon */}
                  <div>
                    {activeIndex === index ? (
                      <IoChevronDown className="text-2xl" />
                    ) : (
                      <IoChevronForward className="text-2xl" />
                    )}
                  </div>
                </div>

                {/* Content */}
                {activeIndex === index && (
                  <div className="font-light mt-2">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;

import React, { useEffect } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
  }, []);

  const faq = [
    {
      rule: "Penghuni wajib memberikan informasi identitas diri saat mendaftar sebagai bentuk persyaratan dan untuk tujuan keamanan."
    },
    {
      rule: "Tamu pria dilarang memasuki area kamar kosan. Namun, tamu pria diperbolehkan berada di ruang tamu atau area umum sesuai dengan batasan waktu yang telah ditentukan oleh pengelola."
    },
    {
      rule: "Penghuni diharapkan menjaga kebersihan dan merawat fasilitas bersama setiap hari. Pastikan area umum selalu dalam kondisi bersih dan rapi setelah digunakan."
    },
    {
      rule: "Penghuni wajib meminimalisasi kebisingan setelah pukul 22:00 demi kenyamanan bersama. Hindari aktivitas yang menimbulkan suara keras, seperti mendengarkan musik dengan volume tinggi atau berbicara dengan suara lantang."
    },
    {
      rule: "Menggandakan kunci kamar atau gerbang kosan tanpa izin dari pengelola sangat dilarang. Jika kunci hilang, segera laporkan kepada pengelola untuk penanganan lebih lanjut."
    },
    {
      rule: "Segera laporkan kepada pengelola jika terdapat kerusakan pada fasilitas, terutama dalam kasus konsleting listrik atau masalah pada sumur bor. Hal ini penting untuk menjaga keamanan dan kenyamanan seluruh penghuni."
    },
    {
      rule: "Penghuni diharapkan menjaga tata tertib dan ketertiban lingkungan sekitar, serta menghormati tetangga dan sesama penghuni untuk menciptakan lingkungan yang aman dan nyaman bagi semua."
    }
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
                data-aos="fade-up" // AOS animation type
                data-aos-delay={index * 100} // Stagger animation for each item
              >
                {/* Title */}
                <div className="font-bold flex gap-2">
                  <div>
                    <FaRegQuestionCircle className="text-2xl" />
                  </div>
                  {item.rule}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ;

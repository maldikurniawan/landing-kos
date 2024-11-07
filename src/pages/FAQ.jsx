import React, { useState } from 'react';
import { IoChevronDown, IoChevronForward } from "react-icons/io5";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleCollapse = (index) => {
    // Jika item yang diklik adalah yang sedang aktif, tutup dengan mengeset null
    // Jika tidak, buka item yang diklik
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faq = [
    {
      question: "Apakah kosan putri ini memiliki jam malam?",
      answer:
        "Ya, kosan putri ini memiliki jam malam. Penghuni diharapkan sudah berada di kosan maksimal pukul 22:00 untuk menjaga keamanan dan ketertiban.",
    },
    {
      question: "Apakah kosan putri ini menerima tamu laki-laki?",
      answer:
        "Umumnya tamu laki-laki tidak diperbolehkan masuk ke area kamar. Namun, tamu laki-laki dapat berkunjung ke area umum atau ruang tamu dengan batasan waktu tertentu sesuai aturan kos.",
    },
    {
      question: "Apakah ada fasilitas dapur bersama di kosan ini?",
      answer:
        "Ya, kosan ini menyediakan dapur bersama yang bisa digunakan oleh semua penghuni. Penghuni diharapkan menjaga kebersihan dan kerapihan dapur setelah menggunakannya.",
    },
    {
      question: "Apakah kosan ini menyediakan fasilitas laundry?",
      answer:
        "Beberapa kosan menyediakan fasilitas laundry, baik berupa mesin cuci atau layanan laundry berbayar. Harap pastikan fasilitas ini saat melakukan survei atau bertanya langsung ke pemilik kos.",
    },
    {
      question: "Bagaimana sistem pembayaran di kosan ini?",
      answer:
        "Pembayaran biasanya dilakukan bulanan, namun ada juga yang menawarkan pembayaran per tiga bulan atau per tahun dengan potongan harga. Harap tanyakan kepada pemilik kos mengenai detail pembayaran dan jatuh tempo.",
    },
    {
      question:
        "Apakah kosan putri ini aman dari gangguan luar?",
      answer:
        "Kosan putri ini dilengkapi dengan sistem keamanan seperti CCTV dan penjaga kos, serta akses pintu yang hanya bisa dibuka oleh penghuni untuk menjaga keamanan.",
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
              opacity: 0.2, // Set the opacity of the background image here
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

export default FAQ
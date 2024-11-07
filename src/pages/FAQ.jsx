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
      question: "Apa itu ERPSKRIP ?",
      answer:
        "ERPSKRIP merupakan perangkat lunak yang didesign berbasis Enterprise Resources Planing berfokus pada otomasi dan optimasi pengelolaan perusahaan penyelenggara jasa internet dengan mengintegrasikan berbagai aspek operasional guna memudahkan proses integrasi pelanggan, inventori, manajemen proyek, pengelolaan keuangan, manajemen pengelolaan mitra jasa jual kembali dan lain - lain.",
    },
    {
      question: "Apa saja fitur ERPSKRIP ?",
      answer:
        "Proses Penunjang Marketing, Optimasi dengan Zero Touch Network, Otomasi Manajemen Layanan, dan lain lain",
    },
    {
      question: "Bagaimana Sistem Generate Invoice Suspend dan Isolir",
      answer:
        "Tagihan Pelanggan, Suspend ,dan Isolir Akan otomatis di buat sesuai kesepakatan dengan client menggunakan Whatsapp Blasting.",
    },
    {
      question: "Ada Berapa Support Payment di ERPSKRIP ?",
      answer:
        "Ada 2 pilihan tipe pembayaran yakni Pacabayar (Bayar di Akhir) dan Prabayar (Bayar Di Awal). ",
    },
    {
      question: "Payment Gateway apa yang digunakan ERPSKRIP ?",
      answer:
        "Kami menggunakan Payment Gateway yang kami miliki sendiri sehingga lebih mudah dan aman untuk melakukan transaksi tanpa ada kesulitan.",
    },
    {
      question:
        "Apakah ERPSKRIP memiliki Fitur WhatsApp menggunakan Nomor Client ?",
      answer:
        "Kami telah menyediakan Scan QR Code di halaman akun Anda untuk menggunakan nomor WhatsApp pribadi Anda.",
    },
  ];

  return (
    <div className='space-y-[3rem]'>
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
import React, { useEffect, useRef, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { SlMagnifierAdd } from 'react-icons/sl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Gallery = () => {
  const allTabs = [
    { id: "all", name: "ALL" },
    { id: "rumah", name: "RUMAH" },
    { id: "ruangan", name: "RUANGAN" },
    { id: "kamar", name: "KAMAR" },
  ];

  const tabsRef = useRef([]);
  const modalRef = useRef(null);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [fadeOutImages, setFadeOutImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  useEffect(() => {
    setFadeOutImages(visibleImages);
    const exitTimer = setTimeout(() => {
      setVisibleImages(tabImages[allTabs[activeTabIndex].id]);
      setFadeOutImages([]);
    }, 100);

    return () => clearTimeout(exitTimer);
  }, [activeTabIndex]);

  const openModal = (imageIndex) => {
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  useOnClickOutside(modalRef, closeModal);

  const tabImages = {
    all: [
      "assets/kos-potrait.jpg",
      "assets/kos-land.jpg",
      "assets/kos-potrait.jpg",
    ],
    rumah: [
      "assets/kos-potrait.jpg",
      "assets/kos-land.jpg",
    ],
    ruangan: [
      "assets/kos-land.jpg",
      "assets/kos-potrait.jpg",
    ],
    kamar: [
      "assets/kos-potrait.jpg",
      "assets/kos-land.jpg",
    ],
  };

  return (
    <div id="Gallery" className="h-fit bg-gray-100 px-4 md:px-[80px] py-16 md:py-[5rem]">
      <div className="font-bold text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-10 text-green-600 text-center">
        Gallery
      </div>
      <div className="relative mx-auto max-w-full md:max-w-[600px] h-12 text-center justify-center rounded-3xl border flex border-black/40 bg-green-600 px-2 backdrop-blur-sm">
        <span
          className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl py-2 transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        >
          <span className="h-full w-full rounded-3xl bg-gray-200/30" />
        </span>
        {allTabs.map((tab, index) => {
          const isActive = activeTabIndex === index;
          return (
            <button
              key={tab.id}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`${isActive ? 'font-semibold text-white' : 'hover:text-neutral-300'
                } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white md:text-lg sm:text-md`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {tabImages[allTabs[activeTabIndex].id].map((imageSrc, index) => (
          <div key={index} className="relative group">
            <img
              src={imageSrc}
              alt={`Gallery Image ${index}`}
              className={`w-full object-cover xl:h-[260px] sm:h-[200px] h-[300px] rounded-lg shadow-lg ${fadeOutImages.includes(imageSrc) ? 'fade-out' : 'fade-in'}`}
            />
            <button
              onClick={() => openModal(index)}
              className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white font-semibold rounded-lg"
            >
              <SlMagnifierAdd className='w-16 h-16' />
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div ref={modalRef} className="relative w-full max-w-screen-lg">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              centeredSlides={true}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              navigation={true}
              modules={[Autoplay, Navigation, Pagination]}
              initialSlide={currentImageIndex}
              className="w-full"
            >
              {tabImages[allTabs[activeTabIndex].id].map((imageSrc, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={imageSrc}
                    alt={`Slide ${index}`}
                    className="w-full h-[600px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full hover:border z-50"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

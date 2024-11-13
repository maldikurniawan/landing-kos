import React, { useEffect, useRef, useState } from 'react';

const Gallery = () => {
  const allTabs = [
    {
      id: "all",
      name: "ALL",
    },
    {
      id: "rumah",
      name: "RUMAH",
    },
    {
      id: "ruangan",
      name: "RUANGAN",
    },
    {
      id: "kamar",
      name: "KAMAR",
    },
  ];

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);
  const [fadeOutImages, setFadeOutImages] = useState([]);

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  useEffect(() => {
    // Trigger the exit animation for the current images
    setFadeOutImages(visibleImages);

    // Start the fade-out process, then replace with new images after delay
    const exitTimer = setTimeout(() => {
      setVisibleImages(tabImages[allTabs[activeTabIndex].id]);
      setFadeOutImages([]); // Reset fadeOutImages once new images are loaded
    }, 100); // Delay for fade-out animation duration

    return () => clearTimeout(exitTimer);
  }, [activeTabIndex]);

  // Image mapping based on active tab
  const tabImages = {
    all: [
      "assets/kos-land.jpg",
      "assets/kos-potrait.jpg",
    ],
    rumah: [
      "assets/kos-land.jpg",
      "assets/kos-potrait.jpg",
    ],
    ruangan: [
      "assets/kos-potrait.jpg",
      "assets/kos-land.jpg",
    ],
    kamar: [
      "assets/kos-land.jpg",
      "assets/kos-potrait.jpg",
    ],
  };

  return (
    <div id="Gallery" className="h-screen bg-gray-100 px-4 md:px-[80px] py-16 md:py-[5rem]">
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

      {/* Display the image based on the active tab */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
        {tabImages[allTabs[activeTabIndex].id].map((imageSrc, index) => (
          <img
            key={index}
            src={imageSrc}
            alt={`Gallery Image ${index}`}
            className={`w-full max-h-[170px] rounded-lg shadow-lg ${fadeOutImages.includes(imageSrc) ? 'fade-out' : 'fade-in'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

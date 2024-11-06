import React, { useEffect, useRef, useState } from 'react'

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

  useEffect(() => {
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex]);

  return (
    <div className='h-screen bg-gray-50 px-4 md:px-[80px] py-0 md:py-[5rem]'>
      <div className='font-bold text-2xl md:text-4xl mb-2 md:mb-10 text-green-600 text-center'>
        Gallery
      </div>
      <div className="relative mx-[420px] h-12 text-center justify-center rounded-3xl border flex border-black/40 bg-green-900 px-2 backdrop-blur-sm">
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
              className={`${isActive ? '' : 'hover:text-neutral-300'
                } my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-white`}
              onClick={() => setActiveTabIndex(index)}
            >
              {tab.name}
            </button>
          );
        })}
      </div>
    </div>
  )
}

export default Gallery
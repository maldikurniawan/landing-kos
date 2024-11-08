import { Footer, Header } from "@/components";
import {
  Hero,
  About,
  Service,
  Expectation,
  Gallery,
  Pricing,
  FAQ,
  Contact,
} from "@/pages";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { RotatingLines } from "react-loader-spinner";

export default function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {
        loading ?
          <div className='bg-white h-[100vh] flex justify-center items-center'>
            <RotatingLines
              visible={true}
              height="96"
              width="96"
              color="green"
              strokeWidth="5"
              animationDuration="0.75"
              ariaLabel="rotating-lines-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
          :
          <div>
            <Header />
            <Hero />
            <About />
            <Service />
            <Expectation />
            <Gallery />
            <Pricing />
            <FAQ />
            <Contact />
            <Footer />
            {showScrollToTop && (
              <button
                onClick={scrollToTop}
                className='opacity-100 z-50'
                style={{
                  position: 'fixed',
                  bottom: '20px',
                  right: '20px',
                  color: '#FFF',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>
                <FaArrowUp className='w-10 h-10 p-2 bg-green-600 rounded-full' />
              </button>
            )}
          </div>
      }
    </>
  )
}
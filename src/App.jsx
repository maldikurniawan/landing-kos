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

export default function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

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
          className='opacity-100 z-40'
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
  )
}
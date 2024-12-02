import React, { useRef, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const Modal = ({ isOpen, onClose, children }) => {
  const [isClosing, setIsClosing] = useState(false);
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, () => handleClose());

  // Handle modal closing with delay
  const handleClose = () => {
    setIsClosing(true);
    // Delay the onClose action
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset closing state after the modal is removed
    }, 300); // 300ms delay
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scrolling when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      // Enable scrolling when modal is closed
      document.body.style.overflow = '';
    }

    // Cleanup function to restore overflow on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen && !isClosing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 bg-black text-white p-2 rounded-full hover:border z-50"
      >
        <FaTimes className="w-6 h-6" />
      </button>
      <div
        ref={modalRef}
        className={`relative w-full max-w-screen-lg bg-white rounded-lg shadow-lg transition-opacity ${isClosing ? 'opacity-0' : 'opacity-100'
          }`}
      >
        {/* Modal content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

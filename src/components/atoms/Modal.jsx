import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Disable interaksi pada elemen di belakang modal (termasuk sentuhan)
      document.body.style.overflow = 'hidden'; // Menonaktifkan scroll
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.overflow = ''; // Mengaktifkan scroll kembali
      document.body.style.pointerEvents = '';
    }
    return () => {
      document.body.style.overflow = ''; // Reset scroll
      document.body.style.pointerEvents = ''; // Reset pointer events
    };
  }, [isOpen]);

  useOnClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-black text-white p-2 rounded-full hover:border z-50"
      >
        <FaTimes className="w-6 h-6" />
      </button>
      <div ref={modalRef} className="relative w-full max-w-screen-lg bg-white rounded-lg shadow-lg">
        {/* Close Button */}
        {children}
      </div>
    </div>
  );
};

export default Modal;

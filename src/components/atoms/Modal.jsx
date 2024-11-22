import React, { useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  useOnClickOutside(modalRef, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
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

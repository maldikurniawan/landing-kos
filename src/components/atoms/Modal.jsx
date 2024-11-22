import React, { useRef, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef(null);

  // Menambahkan dan menghapus pointer-events pada body
  useEffect(() => {
    if (isOpen) {
      document.body.style.pointerEvents = 'none';
    } else {
      document.body.style.pointerEvents = '';
    }
    return () => {
      document.body.style.pointerEvents = '';
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
        {children}
      </div>
    </div>
  );
};

export default Modal;

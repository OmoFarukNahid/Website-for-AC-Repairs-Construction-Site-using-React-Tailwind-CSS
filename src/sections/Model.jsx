// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-xl max-w-lg w-full p-6 relative shadow-xl border border-gray-700">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-yellow-500"
        >
          ✕
        </button>

        {/* Title */}
        {title && (
          <h2 className="text-yellow-500 text-xl font-bold mb-4">{title}</h2>
        )}

        {/* Content */}
        <div className="text-gray-300 space-y-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

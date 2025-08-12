// src/sections/useLegalModel.jsx
import React, { useState } from "react";
import Modal from "../sections/Model";

// Import license images
import licensePage1 from "../assets/license-Page1.png";
import licensePage2 from "../assets/license-Page2.png";
import licensePage3 from "../assets/license-page3.png";

export default function useLegalModal() {
  const [modalType, setModalType] = useState(null);
  const [modalData, setModalData] = useState(null);

  const openModal = (type, data = null) => {
    setModalType(type);
    setModalData(data);
  };

  const closeModal = () => {
    setModalType(null);
    setModalData(null);
  };

  const modalContent = {
    privacy: (
      <p>
        This is our Privacy Policy. We respect your privacy and ensure that
        your data is handled securely and responsibly.
      </p>
    ),
    terms: (
      <p>
        These are our Terms of Service. By using our services, you agree to
        follow our guidelines and conditions.
      </p>
    ),
    licenses: (
      <div className="space-y-4 overflow-y-auto max-h-[75vh] sm:max-h-[80vh] px-1 sm:px-2">
        <p className="mb-2 text-sm sm:text-base">Our official licenses:</p>
        <img src={licensePage1} alt="License Page 1" className="rounded-lg w-full max-w-full sm:max-w-[90%] mx-auto" />
        <img src={licensePage2} alt="License Page 2" className="rounded-lg w-full max-w-full sm:max-w-[90%] mx-auto" />
        <img src={licensePage3} alt="License Page 3" className="rounded-lg w-full max-w-full sm:max-w-[90%] mx-auto" />
      </div>
    ),
    project: modalData && (
      <div className="space-y-4 overflow-y-auto max-h-[75vh] sm:max-h-[80vh] px-1 sm:px-2">
        <p className="mb-4 text-white text-center font-medium">{modalData.title}</p>
        {modalData.images.map((src, index) => {
          const isVideo =
            typeof src === "string" &&
            (src.toLowerCase().endsWith(".mp4") ||
              src.toLowerCase().endsWith(".webm") ||
              src.toLowerCase().endsWith(".ogg"));

          return isVideo ? (
            <video
              key={index}
              src={src}
              controls
              className="rounded-lg w-full max-w-full sm:max-w-[90%] mx-auto"
            />
          ) : (
            <img
              key={index}
              src={src}
              alt={`Project ${index + 1}`}
              loading="lazy"
              className="rounded-lg w-full max-w-full sm:max-w-[90%] mx-auto"
            />
          );
        })}
      </div>
    ),
  };

  const modalElement = (
    <Modal
      isOpen={modalType !== null}
      onClose={closeModal}
      title={
        modalType === "project"
          ? "Project Gallery"
          : modalType === "privacy"
          ? "Privacy Policy"
          : modalType === "terms"
          ? "Terms of Service"
          : modalType === "licenses"
          ? "Licenses"
          : ""
      }
    >
      {modalType && modalContent[modalType]}
    </Modal>
  );

  return { openModal, modalElement };
}

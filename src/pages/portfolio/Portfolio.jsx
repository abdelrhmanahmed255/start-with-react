import React, { useState } from 'react';
import './Portfolio.css';

export default function Portfolio() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage('');
  };

  const images = [
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png",
    "https://routeegy.github.io/startFramework/assets/images/poert1.png",
    "https://routeegy.github.io/startFramework/assets/images/port2.png",
    "https://routeegy.github.io/startFramework/assets/images/port3.png"
  ];

  return (
    <>
      <section className="portfolio text-slate-700 flex justify-center items-center pb-9 pt-12">
        <div className="portfolio-contant mt-16">
          <div>
            <h2 className='text-center font-bold text-4xl uppercase py-3'>Portfolio Component</h2>
            <div className="flex justify-center items-center my-2">
              <div className="line bg-slate-700 w-20 h-1"></div>
              <i className="fa-solid fa-star mx-3"></i>
              <div className="line bg-slate-700 w-20 h-1"></div>
            </div>
          </div>
          <div className="container pt-4 mt-4 px-28">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {images.map((image, index) => (
                <div key={index} className="card m-3 rounded-lg overflow-hidden relative">
                  <img src={image} className='w-full rounded-lg' alt="" />
                  <div onClick={() => openModal(image)} className='layer cursor-pointer flex justify-center items-center w-full h-full absolute left-0 top-0 bg-main-color opacity-0 transition-all duration-500 hover:opacity-100'>
                    <i className="text-white fa-solid fa-plus fa-6x"></i>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {modalIsOpen && (<div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeModal} className="close-button"><i class="fa-solid fa-circle-xmark"></i></button>
            <img src={selectedImage}  className="modal-image" alt='' />
          </div>
        </div>
      )}
    </>
  );
}

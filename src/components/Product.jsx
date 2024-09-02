import { useState, useEffect } from 'react';
import softwareImage from "../assets/images/software.jpeg";
import repairImage from "../assets/images/repair.jpg";
import traineImage from "../assets/images/traine.jpg";

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      src: softwareImage,
      title: 'Software Development',
      description: 'Desktop | Web | Mobile Application'
    },
    {
      src: repairImage,
      title: 'Repairs and Maintenance',
      description: 'PC troubleshooting | Data Recovery | Sale of Accessories'
    },
    {
      src: traineImage,
      title: 'Training',
      description: 'MS Office Suite | Scientific Programming Languages'
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 2000); 

    return () => clearInterval(interval); 
  },);

  return (
    <div className="relative mt-9">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold pt-4">
          PRODUCTS
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-auto object-cover"
          style={{ height: '450px' }} // Adjust the height as needed
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black bg-opacity-50">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-2">{images[currentIndex].title}</h2>
          <p className="text-lg text-white">{images[currentIndex].description}</p>
        </div>
      </div>
      <div className="section-slider-footer slider-navigation text-white absolute inset-0 flex items-center justify-between px-4">
        <a
          className="left cursor-pointer"
          onClick={handlePrev}
          role="button"
          aria-label="Previous Slide"
        >
          <span className="btn btn-arrow bg-gray-800 p-2 rounded-full">
            <span className="icon">
              <span className="arrow-left text-white">&#9664;</span>
            </span>
          </span>
        </a>
        <a
          className="right cursor-pointer"
          onClick={handleNext}
          role="button"
          aria-label="Next Slide"
        >
          <span className="btn btn-arrow bg-gray-800 p-2 rounded-full">
            <span className="icon">
              <span className="arrow-right text-white">&#9654;</span>
            </span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Product;

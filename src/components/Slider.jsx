import React, { useState } from "react";

function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1607083206968-13611e3d76db",
    "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    "https://i.pinimg.com/1200x/52/bd/c3/52bdc377d12ba08af67ba4a1c4bbd281.jpg",
    "https://i.pinimg.com/1200x/aa/3e/89/aa3e8938e1a47d493d470c44785bda16.jpg"
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[800px] overflow-hidden">


      <img
        src={images[current]}
        alt="slider"
        className="w-full h-full object-cover"
      />

 
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/50 text-white px-3 py-1 rounded"
      >
        ◀
      </button>

      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/20 text-white px-3 py-1 rounded"
      >
        ▶
      </button>

    </div>
  );
}

export default Slider;
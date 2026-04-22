import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Slider() {
  const navigate = useNavigate();
  const images = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      title: "Electronics Store",
      subtitle: "Phones, laptops, tablets and more",
      cta: "Shop Electronics",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=1600&q=80",
      title: "Smart Devices",
      subtitle: "Click the banner to open the electronics page",
      cta: "View Products",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1600&q=80",
      title: "Latest Gadgets",
      subtitle: "Explore your electronics collection",
      cta: "Explore Now",
    },
  ];

  const [current, setCurrent] = useState(0);
  const activeSlide = images[current];

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[520px] overflow-hidden bg-black">
      <img
        src={activeSlide.image}
        alt={activeSlide.title}
        className="w-full h-full object-cover cursor-pointer"
        onClick={() => navigate("/electronics")}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      <div className="absolute inset-0 flex items-center px-6 md:px-16">
        <div className="max-w-xl text-white">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
            Featured Electronics
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            {activeSlide.title}
          </h2>
          <p className="mt-4 text-base text-gray-200 md:text-lg">
            
            {activeSlide.subtitle}
          </p>
          <button
            onClick={() => navigate("/electronics")}
            className="mt-6 rounded-lg bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:bg-yellow-300"
          >
            {activeSlide.cta}
          </button>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white backdrop-blur"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/30 px-3 py-2 text-white backdrop-blur"
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;

import React, { useState } from "react";
import HeadingLineArrow from "../../assets/heading_line_arw.png";

import Car01 from "../../assets/car_01.png";
import Car02 from "../../assets/car_02.png";
import Car03 from "../../assets/car_03.png";
import Car04 from "../../assets/car_04.png";

import AddIcon from "../../assets/Plus.png";
import PrevIcon from "../../assets/back.png";
import NextIcon from "../../assets/next.png";

function CarModel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carModels = [
    {
      carModelName: "2014 Q50",
      carImage: Car01,
      price: "Starting at $37,500",
    },
    {
      carModelName: "2014 QX70",
      carImage: Car02,
      price: "Starting at $53,350",
    },
    {
      carModelName: "2014 QX50",
      carImage: Car03,
      price: "Starting at $37,900",
    },
    {
      carModelName: "2014 QX60",
      carImage: Car04,
      price: "Starting at $43,000",
    },
  ];

  const nextSlide = () =>
    setCurrentIndex((prev) =>
      prev === carModels.length - 1 ? 0 : prev + 1
    );

  const prevSlide = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? carModels.length - 1 : prev - 1
    );

  // Reusable Card
  const CarCard = ({ model, whiteBg = false }) => (
    <div
      className={`relative flex min-h-80 flex-col items-center border border-gray-300 px-6 py-8 text-center transition-all duration-300 group hover:shadow-xl hover:-translate-y-1.5 cursor-pointer ${
        whiteBg ? "bg-white" : "bg-[#f5f5f5]"
      }`}
    >
      <h3 className="mb-5 text-[20px] font-bold text-gray-600 transition-colors group-hover:text-[#6b4ba3]">
        {model.carModelName}
      </h3>

      <div className="flex h-45 items-center justify-center overflow-hidden">
        <img
          src={model.carImage}
          alt={model.carModelName}
          className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <p className="mt-4 text-[18px] font-semibold text-gray-500 transition-colors group-hover:text-gray-800">
        {model.price}
      </p>

      <img
        src={AddIcon}
        alt="add"
        className="absolute bottom-0 right-0 h-8 w-8 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110"
      />
    </div>
  );

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="mx-auto mt-12 w-full max-w-7xl px-4 sm:px-6 lg:px-0">
        <div className="relative inline-block lg:ml-15 lg:mt-5">
          <p className="border-b-2 border-[#6B4BA3] pb-1 text-[20px] font-bold tracking-[0.08em] text-[#6B4BA3] sm:text-[22px] lg:text-[24px]">
            MODEL SHOWROOM
          </p>

          <img
            src={HeadingLineArrow}
            alt=""
            className="absolute -left-1 top-[calc(100%-1px)] h-3 w-5 sm:h-4 sm:w-6 lg:-left-1.5 lg:top-10"
          />
        </div>
      </div>

      {/* Cards */}
      <div className="relative mt-8 overflow-hidden border-y border-gray-300 bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-0">

          {/* Mobile Slider */}
          <div className="relative block py-8 sm:hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
            >
              <img src={PrevIcon} alt="prev" className="w-4" />
            </button>

            <div className="mx-auto max-w-[320px]">
              <CarCard
                model={carModels[currentIndex]}
                whiteBg={true}
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md"
            >
              <img src={NextIcon} alt="next" className="w-4" />
            </button>
          </div>

          {/* Tablet & Desktop */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4">
            {carModels.map((model, index) => (
              <CarCard
                key={index}
                model={model}
                whiteBg={index % 2 !== 0}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default CarModel;
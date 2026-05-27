import { Fragment } from "react";
import CarModel from "./CarModel";

// Vehicles and Icons
import Cta01 from "../../assets/cta_01.png";
import Cta02 from "../../assets/cta_02.png";
import Cta03 from "../../assets/book_white.png";
import Cta04 from "../../assets/cta_04.png";

import ShadowIcon from "../../assets/shadow.png";
import BgDottedLine from "../../assets/bg_dotted_Line.png";

import ArrowIcon from "../../assets/cta_arw.png";
import ArrowIconViolet from "../../assets/cta_violet.png";

function CarModelSection() {
  const vehicles = [
    {
      icon: Cta01,
      text: "Shop New Vehicles",
    },
    {
      icon: Cta02,
      text: "Shop Used Vehicles",
    },
    {
      icon: Cta03,
    },
    {
      icon: Cta04,
      text: "Specials",
    },
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-14 lg:py-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
        <img
          src={BgDottedLine}
          alt=""
          className="pointer-events-none absolute left-[53%] -top-12.5 hidden w-[80%] -translate-x-1/2 lg:block"
        />

        <div className="relative z-10 flex flex-col items-center gap-10 sm:grid sm:grid-cols-2 sm:gap-y-12 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-0">
          {vehicles.map((vehicle, index) => {
            const active = index === 2;

            return (
              <Fragment key={index}>
                <div className="relative flex flex-col items-center group cursor-pointer">
                  {active && (
                    <img
                      src={ArrowIconViolet}
                      alt=""
                      className="absolute left-1/2 -top-3 z-20 h-5 -translate-x-1/2 sm:-top-4 lg:h-auto transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  )}

                  <div
                    className={`flex h-40 w-40 flex-col items-center justify-center rounded-full border-4 px-4 sm:h-43.75 sm:w-43.75 lg:h-47.5 lg:w-47.5 transition-all duration-300
                    ${
                      active
                        ? "border-[#B5A8C7] bg-[#6B4BA3] hover:border-[#6B4BA3] hover:shadow-[0_0_20px_rgba(107,75,163,0.5)] hover:scale-105"
                        : "border-[#808080] bg-white hover:border-[#6B4BA3] hover:scale-105 hover:shadow-lg"
                    }`}
                  >
                    <img
                      src={vehicle.icon}
                      alt={vehicle.text || "Vehicle icon"}
                      className="mb-3 w-8 sm:w-auto transition-transform duration-300 group-hover:scale-110"
                    />

                    <p
                      className={`w-full max-w-30-center text-[15px] leading-5 font-medium sm:text-[17px] sm:leading-5.5 lg:text-[18px] text-center transition-colors duration-300
                      ${active ? "text-white" : "text-[#707070] group-hover:text-purple-700"}`}
                    >
                      {vehicle.text || ""}
                    </p>
                  </div>

                  {!active && (
                    <img
                      src={ArrowIcon}
                      alt=""
                      className="-mt-0.5 h-4 sm:h-auto transition-transform duration-300 group-hover:translate-y-1"
                    />
                  )}

                  <img
                    src={ShadowIcon}
                    alt="shadow"
                    className="mt-3 w-25 sm:mt-4 sm:w-30 transition-opacity duration-300 group-hover:opacity-80"
                  />
                </div>

                {index !== vehicles.length - 1 && (
                  <div className="hidden lg:block h-32 border-r-2 border-dotted border-gray-300 self-center" />
                )}
              </Fragment>
            );
          })}
        </div>
      </div>

      <CarModel />
    </section>
  );
}

export default CarModelSection;

import React from "react";
import Map from "../../assets/map.png";

// Icons
import { Phone, Clock3, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${Map})`,
          minHeight: "380px",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-white">
            <div className="lg:border-r lg:border-dashed lg:border-white/40 lg:pr-6">
              <h3 className="mb-4 text-lg font-normal tracking-wide">
                Address
              </h3>
              <p className="text-sm font-bold leading-snug">
                4340 Hwy 7 E, Markham, ON L3R 1L9
              </p>
            </div>

            <div className="lg:border-r lg:border-dashed lg:border-white/40 lg:px-6">
              <h3 className="mb-4 text-lg font-normal tracking-wide">Phone</h3>
              <p className="text-sm font-bold">(905) 752-0881</p>
            </div>

            <div className="lg:border-r lg:border-dashed lg:border-white/40 lg:px-6">
              <h3 className="mb-4 text-lg font-normal tracking-wide">Email</h3>
              <p className="text-sm font-bold break-all">
                william@markhaminfiniti.com
              </p>
            </div>

            <div className="lg:pl-6">
              <h3 className="mb-5 text-lg font-normal tracking-wide">
                Follow us on
              </h3>

              <div className="flex gap-3 md:justify-start lg:justify-center">
                <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-all duration-300 hover:bg-[#6a4298] hover:scale-110 cursor-pointer">
                  <FaFacebookF className="text-base text-black transition-colors duration-300 group-hover:text-white" />
                </button>

                <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-all duration-300 hover:bg-[#6a4298] hover:scale-110 cursor-pointer">
                  <FaTwitter className="text-base text-black transition-colors duration-300 group-hover:text-white" />
                </button>

                <button className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 transition-all duration-300 hover:bg-[#6a4298] hover:scale-110 cursor-pointer">
                  <FaYoutube className="text-base text-black transition-colors duration-300 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="mb-14 flex justify-center">
            <div className="relative group">
              <div
                className="absolute left-1/2 -translate-x-1/2 rotate-45 bg-[#6a4298] transition-colors duration-300 group-hover:bg-[#5a3588]"
                style={{
                  width: 20,
                  height: 20,
                  top: -8,
                  zIndex: 50,
                }}
              />

              <button className="relative z-10 flex items-center gap-3 rounded bg-[#6a4298] px-6 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-300 group-hover:bg-[#5a3588] sm:px-10 sm:py-5 sm:text-base cursor-pointer">
                <Phone size={26} strokeWidth={1.7} />
                Contact Us
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10 lg:gap-20">
            <div className="group flex h-18 w-full max-w-[280px] items-center gap-5 rounded bg-white px-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-l-4 hover:border-[#6a4298] cursor-pointer">
              <Clock3
                size={40}
                strokeWidth={1.2}
                className="shrink-0 text-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:text-[#6a4298]"
              />

              <span className="text-[16px] font-semibold text-[#333] sm:text-[17px] transition-colors duration-300 group-hover:text-[#6a4298]">
                Dealership Hours
              </span>
            </div>

            <div className="group flex h-18 w-full max-w-[280px] items-center gap-5 rounded bg-white px-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-l-4 hover:border-[#6a4298] cursor-pointer">
              <MapPin
                size={40}
                strokeWidth={1.4}
                className="shrink-0 text-gray-800 transition-all duration-300 group-hover:scale-110 group-hover:text-[#6a4298]"
              />

              <span className="text-[16px] font-semibold text-[#333] sm:text-[17px] transition-colors duration-300 group-hover:text-[#6a4298]">
                Location
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

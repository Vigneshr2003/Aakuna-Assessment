import React from "react";

// Images
import EventCarImage from "../../assets/event.png";

function OurCompany() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left Section */}
          <div>
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold uppercase text-[#5b3c92]">
                News And Events
              </h2>

              <div className="mt-2 flex items-center">
                <div className="h-0.5 w-56 bg-gray-300"></div>

                <div
                  className="ml-2 h-0 w-0 border-t-12 border-r-12
                  border-t-[#8a8a8a] border-r-transparent"
                />
              </div>
            </div>

            {/* Title */}
            <p className="mb-5 border-l-4 border-gray-300 pl-3 text-2xl text-gray-600">
              Infiniti reveals Q30 Concept
            </p>

            {/* Image */}
            <img
              src={EventCarImage}
              alt="Event Car"
              className="w-full object-cover"
            />

            {/* Description */}
            <p className="mt-5 text-base leading-7 text-gray-600">
              Infiniti today revealed the next step in its strategy to expand
              into new premium segments with the debut of the Q30 Concept at
              the Frankfurt Motor Show. The sleek, seductive Q30 Concept...
              <span className="cursor-pointer font-semibold text-black hover:text-[#5b3c92] hover:underline transition-colors duration-300">
                {" "}
                Read more »
              </span>
            </p>
          </div>

          {/* Right Section */}
          <div>
            {/* Heading */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold uppercase text-[#5b3c92]">
                Promotional Video
              </h2>

              <div className="mt-2 flex items-center">
                <div className="h-0.5 w-56 bg-gray-300"></div>

                <div
                  className="ml-2 h-0 w-0 border-t-12 border-r-12
                  border-t-[#8a8a8a] border-r-transparent"
                />
              </div>
            </div>

            {/* Title */}
            <p className="mb-5 border-l-4 border-gray-300 pl-3 text-2xl text-gray-600">
              Infiniti Canada fan surprised with Trip of a Lifetime
            </p>

            {/* YouTube Video */}
            <div className="overflow-hidden shadow-lg aspect-video w-full rounded">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/tYSo0LsHhvo?si=_kP3acQ2epIhoomc"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCompany;
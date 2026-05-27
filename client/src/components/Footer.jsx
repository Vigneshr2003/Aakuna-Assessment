import { Fragment } from "react";

const quickLinks = [
  "Home",
  "New Vehicles",
  "Used Vehicles",
  "Service",
  "Parts",
  "Financial Services",
  "Contact Us",
  "Sitemap",
];

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      {/* Quick Links Bar */}
      <div className="bg-gray-100">
        <div className="flex flex-col sm:flex-row sm:items-stretch">
          {/* Quick Links Box */}
          <div
            className="flex items-center justify-center bg-white px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 shrink-0 w-full sm:w-auto [clip-path:none] sm:[clip-path:polygon(0_0,82%_0,100%_50%,82%_100%,0_100%)] lg:ml-10"
            style={{
              minWidth: "140px",
            }}
          >
            <span className="text-sm md:text-base font-medium text-gray-600">
              Quick Links
            </span>
          </div>

          {/* Links */}
          <nav
            className="
              flex flex-wrap items-center
              px-3 py-3
              sm:px-5 sm:py-4
              md:px-6
              gap-y-2
            "
            aria-label="Quick links"
          >
            {quickLinks.map((link) => (
              <Fragment key={link}>
                <span
                  className="mx-1 text-gray-300 text-lg md:text-2xl font-bold"
                  aria-hidden="true"
                >
                  ›
                </span>

                <a
                  href="#"
                  className="
                    text-xs sm:text-sm
                    text-gray-600
                    hover:text-[#5e418c]
                    transition-colors
                    duration-300
                    whitespace-nowrap
                  "
                >
                  {link}
                </a>
              </Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Copyright Bar */}
      <div
        className="
          flex flex-col md:flex-row
          items-center justify-between
          gap-2
          px-4 md:px-6
          py-3
          border-b border-gray-200
          text-center md:text-left
          text-xs text-gray-400
        "
      >
        <span>© Copyright 2014 Markham Infiniti. All Rights Reserved.</span>

        <div className="flex items-center gap-1">
          <span>powered by</span>

          <span className="italic font-bold text-gray-600">
            <span className="text-green-600">e</span>-DEALER.CA
          </span>
        </div>
      </div>
    </footer>
  );
}

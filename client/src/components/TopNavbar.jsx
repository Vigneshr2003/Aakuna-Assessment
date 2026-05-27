import React, { useState } from "react";

// Social media icons and logo
import fbIcon from "../assets/fb.png";
import twIcon from "../assets/tw.png";
import ytIcon from "../assets/yt.png";
import CtaArrow from "../assets/cta_arw.png";
import logoImage from "../assets/Logo.png";

// ContactItem icons
import locationIcon from "../assets/location.png";
import phoneIcon from "../assets/call.png";
import salesIcon from "../assets/toll-free.png";
import hoursIcon from "../assets/arw.png";

// HeaderStrip img
import headerStrip from "../assets/Header_strip.png";

const navLinks = [
  "Home",
  "New Vehicles",
  "Used Vehicles",
  "Service",
  "Parts",
  "Financial Services",
  "Contact Us",
];

const contactItems = [
  {
    icon: locationIcon,
    text: "4340 Hwy 7 E, Markham, ON L3R 1L9",
  },
  {
    icon: phoneIcon,
    text: "(905) 752-0881",
  },
  {
    icon: salesIcon,
    text: "Sales : (866) 798-1346",
  },
  {
    icon: null,
    dropdownIcon: hoursIcon,
    text: "Dealership Hours",
  },
];

const socialLinks = [
  { alt: "Facebook", icon: fbIcon },
  { alt: "Twitter", icon: twIcon },
  { alt: "YouTube", icon: ytIcon },
];

const dropdownItems = {
  "New Vehicles": [
    { label: "Shop New Vehicles", href: "#newvehicles" },
    { label: "New Specials", href: "#specials" },
    { label: "Book a Test Drive", href: "#book-test-drive" },
  ],
  "Used Vehicles": [
    { label: "Shop Used Vehicles", href: "#usedvehicles" },
    { label: "Certified Pre-Owned", href: "#usedvehicles" },
    { label: "Trade-In Estimator", href: "#contactus" },
  ],
  "Service": [
    { label: "Schedule Service", href: "#service" },
    { label: "Service Specials", href: "#service" },
    { label: "Maintenance Guide", href: "#service" },
  ],
  "Parts": [
    { label: "Order Parts", href: "#parts" },
    { label: "Parts Department", href: "#parts" },
    { label: "Accessories Store", href: "#parts" },
  ],
  "Financial Services": [
    { label: "Apply for Financing", href: "#financialservices" },
    { label: "Lease vs Buy Info", href: "#financialservices" },
    { label: "Payment Calculator", href: "#financialservices" },
  ],
};

function TopNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);

  return (
    <div className="fixed top-0 left-1/2 z-50 w-full max-w-6xl -translate-x-1/2 font-sans shadow-sm">
      <div className="absolute left-4 top-13 z-50 hidden md:block lg:left-6 lg:top-11">
        <img
          src={logoImage}
          alt="Logo"
          className="h-auto w-20 md:w-24 lg:w-28 xl:w-32 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div
        className="hidden w-full items-stretch justify-between border-b border-gray-200 sm:flex"
        style={{
          backgroundImage: `url(${headerStrip})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#f3f4f6",
        }}
      >
        {/* Contact items */}
        <div className="flex flex-1 flex-wrap items-center gap-x-3 gap-y-2 px-3 py-2 text-[11px] text-gray-600 sm:px-4 sm:text-[12px] md:text-[13px]">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 relative ${
                index === 0 ? "w-full sm:w-auto" : ""
              } ${index === 2 ? "hidden md:flex" : ""}`}
            >
              <div 
                className="flex items-center space-x-1.5 cursor-pointer relative"
                onMouseEnter={() => index === 3 && setShowHours(true)}
                onMouseLeave={() => index === 3 && setShowHours(false)}
                onClick={() => index === 3 && setShowHours(!showHours)}
              >
                {index !== 3 ? (
                  <>
                    <img
                      src={item.icon}
                      alt="icon"
                      className="h-3 w-3 opacity-70 sm:h-3.5 sm:w-3.5 transition-transform duration-300 hover:scale-110"
                    />
                    <span className={`${index === 0 ? "truncate" : ""} hover:text-purple-700 transition-colors`}>
                      {item.text}
                    </span>
                  </>
                ) : (
                  <div className="ml-1 relative flex items-center space-x-2 border border-gray-300 bg-white/60 px-2 py-1 transition hover:bg-white sm:px-3">
                    <span>{item.text}</span>
                    <img
                      src={item.dropdownIcon}
                      alt="dropdown arrow"
                      className={`h-2.5 w-2.5 opacity-60 transition-transform duration-300 ${
                        showHours ? "rotate-180" : ""
                      }`}
                    />

                    {/* Dealership Hours Dropdown */}
                    {showHours && (
                      <div className="absolute top-full right-0 mt-2 z-50 w-56 rounded border border-gray-200 bg-white p-3 shadow-lg text-left text-[11px] text-gray-700">
                        <div className="font-semibold border-b pb-1 mb-1.5 text-[#5e418c] uppercase tracking-wider">
                          Dealership Hours
                        </div>
                        <div className="space-y-1.5">
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Sales (Mon-Fri):</span>
                            <span className="font-bold text-gray-800">9:00 AM - 7:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Sales (Sat):</span>
                            <span className="font-bold text-gray-800">9:00 AM - 6:00 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Service (Mon-Fri):</span>
                            <span className="font-bold text-gray-800">7:30 AM - 5:30 PM</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium text-gray-500">Sunday:</span>
                            <span className="font-bold text-red-600">Closed</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {index < contactItems.length - 1 && (
                <span className="text-gray-300 font-light">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.alt}`}
              className="flex h-10 w-8 items-center justify-center border-l border-gray-500 bg-[#4a4a4a] transition-colors hover:bg-[#5e418c] sm:h-12"
            >
              <img
                src={link.icon}
                alt={link.alt}
                className="h-6 w-6 sm:h-8 sm:w-8 transition-transform duration-300 hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>

      <div className="w-full bg-white border-b border-gray-200">
        <nav className="mx-auto max-w-6xl px-3 sm:px-4 md:pl-24 lg:pl-36 xl:pl-44">
          <div className="flex items-center justify-between py-3 md:hidden">
            <img
              src={logoImage}
              alt="Logo"
              className="h-7 w-auto max-w-24 sm:h-8 sm:max-w-28"
            />

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="rounded border border-gray-300 px-3 py-2 text-gray-700 hover:bg-gray-50 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 6L18 18M6 18L18 6" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>

          <div className="w-full bg-white relative z-10 hidden md:block">
            <ul className="w-full items-center justify-between py-3 md:flex lg:py-4">
              {navLinks.map((link, index) => {
                const hasDropdown = dropdownItems[link];
                return (
                  <li
                    key={index}
                    className={`flex flex-1 items-center justify-center ${
                      index !== navLinks.length - 1
                        ? "border-r-2 border-dotted border-gray-300"
                        : ""
                    }`}
                  >
                    <div 
                      className="relative flex flex-col items-center py-1.5"
                      onMouseEnter={() => hasDropdown && setActiveDropdown(link)}
                      onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
                    >
                      <a
                        href={hasDropdown ? undefined : `#${link.replace(/\s+/g, "").toLowerCase()}`}
                        className={`px-1 text-[10px] md:text-[11px] lg:px-2 lg:text-[13px] xl:text-[15px] transition-colors hover:text-purple-700 ${
                          link === "Home"
                            ? "text-[#5e418c] font-semibold"
                            : "text-gray-600 font-medium"
                        }`}
                      >
                        {link}
                      </a>

                      {link !== "Home" && (
                        <div className="absolute top-[85%] z-20 flex h-4 w-4 items-center justify-center rounded-full bg-white p-0.5 shadow-sm cursor-pointer lg:h-5 lg:w-5 lg:p-1 transition-transform duration-300">
                          <img
                            src={CtaArrow}
                            alt="Arrow"
                            className={`h-full w-full object-contain transition-transform duration-300 ${
                              activeDropdown === link ? "rotate-180" : ""
                            }`}
                          />
                        </div>
                      )}

                      {/* Dropdown Menu */}
                      {activeDropdown === link && hasDropdown && (
                        <div className="absolute top-[110%] left-1/2 z-50 mt-2 w-48 -translate-x-1/2 rounded-md border border-gray-100 bg-white p-1.5 shadow-xl transition-all duration-300">
                          {dropdownItems[link].map((subItem) => (
                            <a
                              key={subItem.label}
                              href={subItem.href}
                              className="block rounded px-2.5 py-1.5 text-left text-[11px] font-semibold text-gray-600 transition-colors hover:bg-[#f4effb] hover:text-[#5e418c]"
                            >
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile dropdown menu */}
          {isMobileMenuOpen && (
            <ul className="space-y-1 pb-4 md:hidden">
              {navLinks.map((link) => {
                const hasDropdown = dropdownItems[link];
                const isOpen = mobileDropdownOpen === link;
                return (
                  <li key={link} className="border-b border-gray-100 last:border-b-0 pb-1">
                    <div className="flex items-center justify-between">
                      <a
                        href={hasDropdown ? undefined : `#${link.replace(/\s+/g, "").toLowerCase()}`}
                        onClick={() => {
                          if (hasDropdown) {
                            setMobileDropdownOpen(isOpen ? null : link);
                          } else {
                            setIsMobileMenuOpen(false);
                          }
                        }}
                        className={`flex-1 rounded px-3 py-2 text-sm transition-colors hover:bg-gray-100 hover:text-purple-700 cursor-pointer ${
                          link === "Home"
                            ? "bg-[#f4effb] font-semibold text-[#5e418c]"
                            : "font-medium text-gray-600"
                        }`}
                      >
                        {link}
                      </a>
                      {hasDropdown && (
                        <button
                          onClick={() => setMobileDropdownOpen(isOpen ? null : link)}
                          className="p-2 text-gray-400 hover:text-[#5e418c] transition-colors focus:outline-none cursor-pointer"
                        >
                          <svg
                            className={`h-4 w-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Accordion Submenu */}
                    {hasDropdown && isOpen && (
                      <ul className="pl-6 pr-4 py-1 space-y-1 bg-gray-50/50 rounded-md mt-1">
                        {dropdownItems[link].map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setMobileDropdownOpen(null);
                              }}
                              className="block rounded px-3 py-1.5 text-xs font-semibold text-gray-500 hover:bg-[#f4effb] hover:text-[#5e418c] transition-colors"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
}

export default TopNavbar;

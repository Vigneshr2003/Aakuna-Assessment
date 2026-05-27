import React from "react";
import bannerImage from "../../assets/banner.png";
import logoImage from "../../assets/Logo.png";

function Header() {
  return (
    <section className="relative w-full">
      <img
        src={bannerImage}
        alt="Banner"
        className="w-full h-auto block"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
    </section>
  );
}

export default Header;
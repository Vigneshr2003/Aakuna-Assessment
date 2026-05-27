import React from "react";
import Header from "../components/home/Header";
import CarModelSection from "../components/home/CarModelSection";
import WelcomeSection from "../components/home/WelcomeSection";
import OurCompany from "../components/home/OurCompany";
import Contact from "../components/home/Contact";

function Home() {
  return (
    <>
    <Header />
    <CarModelSection />
    <WelcomeSection />
    <OurCompany />
    <Contact />
    </>
  );
}

export default Home;

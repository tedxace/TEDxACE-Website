import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import HeroImage from "../assets/hero.svg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-[92vh] w-screen flex flex-col justify-center items-center gap-8 overflow-hidden"
    >
      <section className="grid grid-cols-4 grid-rows-6 sm:grid-cols-6 sm:grid-rows-5 md:grid-cols-8 md:grid-row-6 clip-path-circularPolygon overflow-hidden lg:grid-cols-12 lg:grid-rows-12 w-full h-full absolute top-0 z-[-100] left-0 gap-[2px] bg-white/5 scale-110">
        <section className="absolute bg-white top-0 left-0 clip-path-circularPolygon w-[40%] h-auto md:w-[30%] lg:[20%]"></section>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
        <div className="bg-tedx-dark"></div>
      </section>
      <img
        className="w-[50%] sm:w-[40%] md:w-[30%] lg:w-[20%] h-auto drop-shadow-xl z-[100]"
        src={HeroImage}
        alt="Hero Section"
      />
      <button
        type="button"
        className="rounded-full bg-tedx-blue/50 p-4 flex items-center justify-center transition-colors duration-200 hover:bg-tedx-pink"
      >
        <FontAwesomeIcon className="h-10 w-10" icon={faPlay} />
      </button>
    </section>
  );
};

export default HeroSection;

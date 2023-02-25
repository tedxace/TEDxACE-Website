import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { config } from "../common";
import HeroImage from "../assets/hero.svg";

const HeroSection = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await loadFull(container);
  }, []);
  return (
    <section
      id="home"
      className="relative h-[92vh] w-screen flex flex-col py-32 md:py-0 justify-end md:justify-center items-center gap-6 overflow-hidden md:-translate-y-10 -translate-y-0"
    >
      <section className="flex absolute top-0 z-[-100] left-0 w-full h-full translate-y-16">
        <section className="grid grid-cols-3 grid-rows-6 sm:grid-cols-3 sm:grid-rows-5 md:grid-cols-4 md:grid-row-5 clip-path-speakerPolygon overflow-hidden lg:grid-cols-6 lg:grid-rows-6 w-full h-full gap-[2px] md:gap-[3px] bg-gradient-to-r bg-300 from-tedx-blue animate-glow to-tedx-pink scale-95">
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
        <section className="grid grid-cols-3 grid-rows-6 sm:grid-cols-3 sm:grid-rows-5 md:grid-cols-4 md:grid-row-5 clip-path-speakerPolygon overflow-hidden lg:grid-cols-6 lg:grid-rows-6 w-full h-full gap-[2px] md:gap-[3px] bg-gradient-to-r bg-300 from-tedx-blue animate-glow to-tedx-pink scale-95">
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
        <h1 className="text-[4rem] md:text-[5rem] lg:text-[8rem] text-center w-[80%] md:w-[60%] sm:bottom-[80%] md:bottom-[15%] absolute lg:bottom-[5%] font-extrabold left-[0] right-[0] ml-auto mr-auto">
          <span id="theme">Pieces Of A Puzzle</span>
        </h1>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={config}
        />
      </section>
      <img
        className="w-[40%] sm:w-[35%] md:opacity-80 opacity-100 hover:opacity-100 md:w-[25%] lg:w-[25%] h-auto drop-shadow-xl z-[100]"
        src={HeroImage}
        alt="Hero Section"
      />
      <button
        type="button"
        title="play"
        className="rounded-full bg-tedx-blue/50 p-4 hover:scale-105 flex items-center justify-center transition-all duration-200 hover:bg-tedx-pink"
      >
        <FontAwesomeIcon className="h-10 w-10" icon={faPlay} />
      </button>
    </section>
  );
};

export default HeroSection;

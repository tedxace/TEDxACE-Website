import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { config } from "../../common";
import HeroImage from "../../assets/hero.svg";
import { cn } from "../../lib/utils";
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
      className={`relative h-[92vh]  w-screen flex flex-col py-0 justify-end md:bg-left-top bg-center   md:justify-center bg-cover items-center gap-6 overflow-hidden  md:-translate-y-10 -translate-y-0 `}
      style={{ backgroundImage: `url(${require("../../assets/bg.jpeg")})` }}
    >
      <div
        className={cn(
          `flex flex-col md:flex-row bg-gradient-to-b from-transparent h-full w-full to-tedx-bg/100  items-center justify-center   md:px-24 lg:px-32`
        )}
      ></div>
    </section>
  );
};

export default HeroSection;

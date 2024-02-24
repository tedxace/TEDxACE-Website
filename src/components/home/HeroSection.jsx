import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { config } from "../../common";
import Tedxlogo from "../../assets/TEDLogo.svg";

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
      className={`relative h-[92vh]  w-screen flex flex-col py-0 justify-center md:bg-left-top bg-center   md:justify-center bg-cover items-center gap-6 overflow-hidden  md:-translate-y-10 -translate-y-0 `}
      style={{ backgroundImage: `url(${require("../../assets/bg.jpeg")})` }}
    >
      <div className="flex flex-col  w-full h-full  items-center justify-between   md:px-24 lg:px-32">
        <div>..</div>
        <div className="flex flex-col items-center justify-end ">
          <img
            src={Tedxlogo}
            className=" w-96 relative top-24  "
            alt="tedxlogo"
          />
          <img src={require("../../assets/hero.png")} alt="Hero" />
        </div>
      </div>
      <div
        className={cn(
          ` absolute bg-gradient-to-b from-transparent h-full w-full via-transparent to-tedx-bg/100 `
        )}
      ></div>
    </section>
  );
};

export default HeroSection;

// 
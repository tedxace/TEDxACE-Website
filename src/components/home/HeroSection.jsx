import React from "react";
import Tedxlogo from "../../assets/TEDLogo.svg";

import { cn } from "../../lib/utils";
const HeroSection = () => {
  return (
    <section
      id="home"
      className={cn(
        `relative h-[100dvh] transform   transition duration-500 ease-in    w-screen flex flex-col py-0 justify-center md:bg-left-top bg-center   md:justify-center bg-cover items-center gap-6   md:-translate-y-10 -translate-y-0 `,
        window.scrollY > 0 ? "py-10" : "py-0"
      )}
      style={{ backgroundImage: `url(${require("../../assets/bg.jpeg")})` }}
    >
      <div className="flex flex-col  w-full h-full  items-center justify-center lg:justify-between   md:px-24 lg:px-32">
        <div></div>
        <div className="flex flex-col items-center md:justify-end ">
          <img
            src={Tedxlogo}
            className=" w-[200px] md:w-96 relative top-[10%]  "
            alt="tedxlogo"
          />
          <img
            src={require("../../assets/hero.png")}
            alt="Hero"
            className="px-10"
          />
        </div>
      </div>
      <div
        className={cn(
          ` absolute bg-gradient-to-b from-transparent h-full w-full via-transparent to-tedx-bg `
        )}
      ></div>
    </section>
  );
};

export default HeroSection;

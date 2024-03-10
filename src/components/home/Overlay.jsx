import React from "react";
import TEDXLogo from "../../assets/TEDLogo.svg";
import Button from "./Button";
import Theme from "../../assets/tedxtheme.png";

const Overlay = () => {
  return (
    <div className=" h-screen sm:h-[100vh] flex  justify-center  items-center  ">
      <div className="p-5 sticky text-5xl bg-gradient-to-b from-tedx-dark via-black/10 to-tedx-dark/80  w-full h-full flex items-center justify-center text-center font-bold ">
        <div
          className=" h-auto lg:h-[700px]  flex hover:scale-105 transition-all ease-in-out bg-cover items-center rounded-lg shadow shadow-black/50 border border-tedx-red justify-center flex-col md:px-10 px-3 py-5"
          style={{
            backgroundImage: `url(${require("../../assets/TicketBG.png")})`,
          }}
        >
          <p className="flex text-lg md:text-4xl font-['Inter'] items-center">
            <img
              src={TEDXLogo}
              className=" -m-3 md:-m-7 md:w-[200px] w-[100px]"
              alt="tedx-logo"
            />{" "}
            '24
          </p>
          <img src={Theme} alt="theme" className="w-[200px] md:w-[20vw]" />

          <p className="text-xl font-['Eczar'] text-white ">
            IDEAS WORTH SPREADING
          </p>

          <div className="flex space-x-3 items-center md:pt-20">
            <div className="p-2 md:p-4 border-r-2 ">
              <h1 className="text-xl md:text-2xl font-['Eczar'] text-tedx-heading ">
                15TH MAR, 2024
              </h1>
              <p className="text-sm">11 PM ONWARDS</p>
            </div>
            <p className="text-base md:text-xl font-['Eczar'] text-tedx-heading ">
              @ATHARVACOE,
              <br /> MALAD
            </p>
          </div>

          <Button text={"Reserve a Seat"} className={"scale-105"} />
        </div>
      </div>
      {/* <div className="absolute h-full w-full bg-gradient-to-t from-black/30 via-transparent to-black/60"></div> */}
    </div>
  );
};

export default Overlay;

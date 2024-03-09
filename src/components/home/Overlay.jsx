import React from "react";
import TEDXLogo from "../../assets/TEDxLogo.svg";
import Button from "./Button";

const Overlay = () => {
  return (
    <div className=" h-screen sm:h-[100vh] flex  justify-center  items-center  ">
      <div className="p-5 sticky text-5xl bg-gradient-to-b from-tedx-dark via-black/10 to-tedx-dark/80  w-full h-full flex items-center justify-center text-center font-bold ">
        <div className="h-auto flex hover:scale-105 transition-all ease-in-out items-center rounded-lg shadow shadow-black/50 border border-tedx-red justify-center flex-col bg-tedx-dark px-10 py-5">
          <p className="flex text-3xl items-center">
            <img src={TEDXLogo} className="p-3" alt="tedx-logo" /> '24
          </p>
          <p className="text-4xl font-['Eczar'] text-tedx-heading ">
            15 March 2024
          </p>
          <img
            src={require(`../../assets/Parallax-Body.png`)}
            alt="parallax-body"
            className="w-[200px] md:w-[20vw] md:h-[20vw] object-cover"
          />
          <Button />
        </div>
      </div>
      {/* <div className="absolute h-full w-full bg-gradient-to-t from-black/30 via-transparent to-black/60"></div> */}
    </div>
  );
};

export default Overlay;

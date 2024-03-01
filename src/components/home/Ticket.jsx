import React from "react";
import TicketImg from "../../assets/Ticket.png";
import Button from "./Button";
const Ticket = () => {
  return (
    <div className="h-screen  flex  w-full items-center p-10 bg-tedx-dark justify-between">
      <div
        className="w-full h-full bg-cover bg-center p-10 lg:flex-row flex-col bg-tedx-brown flex items-center mb-10 justify-center"
        style={{
          backgroundImage: `url(${require("../../assets/TicketBG.png")})`,
        }}
      >
        <div className="content  lg:w-[20vw] h-1/2 flex flex-col justify-center px-10 ">
          <h1 className="text-4xl font-['Eczar'] font-bold text-tedx-heading">
            Get Your <br /> Passes Today
          </h1>
          <Button />
        </div>
        <div
          id="image"
          className="group flex items-center justify-center md:w-[60vw] md:h-[60vh] w-[400px] relative "
        >
          <img
            src={TicketImg}
            alt=""
            className=" object-cover relative group-hover:translate-y-10 group-hover:translate-x-2 md:group-hover:translate-y-24 md:group-hover:translate-x-10 group-hover:rotate-12  transition-all ease-in-out duration-300 w-full h-full"
          />
          <img
            src={TicketImg}
            alt=""
            className=" object-cover absolute transition-all ease-in-out duration-300  w-full h-full  cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;

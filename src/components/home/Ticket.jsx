import React from "react";
import TicketImg from "../../assets/Ticket.png";
import Button from "./Button";
const Ticket = () => {
  return (
    <div className="h-full md:h-screen px-10 flex items-center  justify-between ">
      <div
        className="w-full h-full bg-cover bg-center lg:flex-row flex-col  flex items-center justify-center"
        style={{
          backgroundImage: `url(${require("../../assets/TicketBG.png")})`,
        }}
      >
        <div className="lg:w-[20vw] h-1/2 flex flex-col justify-center items-start">
          <h1 className="text-4xl font-['Eczar'] font-bold text-tedx-heading">
            Get Your <br className="hidden md:block" /> Passes Today
          </h1>
          <Button />
        </div>
        <div
          id="image"
          className="group flex items-center justify-center min-w-[300px] md:w-[60vw] md:h-[60vh] relative "
        >
          <img
            src={TicketImg}
            alt="Purchase Ticket"
            className="object-cover relative group-hover:translate-y-10 group-hover:translate-x-2 md:group-hover:translate-y-24 md:group-hover:translate-x-10 group-hover:rotate-12 transition-all ease-in-out duration-300 w-full h-full"
          />
          <img
            src={TicketImg}
            alt="Purchase Ticket Replica"
            className="object-cover absolute transition-all ease-in-out duration-300 w-full h-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Ticket;

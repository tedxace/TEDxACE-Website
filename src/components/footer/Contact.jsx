import { motion } from "framer-motion";
import TedXlogo from "../../assets/TEDxLogo.svg";
import React, { useState } from "react";
import { TextField } from "@mui/material";

const pop = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
    },
  },
};

const Contact = () => {
  const [formButtonText, setFormButtonText] = useState("Subscribe");
  const onContactFormButtonClick = () => {
    setFormButtonText("Thank you for subscribing!");
  };
  return (
    <section
      id="contact"
      className="flex justify-evenly pt-72 items-center flex-col  relative w-full h-full "
    >
      <div className="grid md:grid-cols-2 grid-rows-2 w-full  ">
        <div className="">
          <img src={TedXlogo} alt={"tedxlogo"} className="w-[200px] " />
          <div className="flex uppercase font-bold  space-x-8 ">
            <div className=" py-4 space-y-4 flex flex-col ">
              <a href="#" className="hover:text-tedx-heading transition">
                About
              </a>
              <a href="#" className="hover:text-tedx-heading transition">
                Sponsor
              </a>
              <a href="#" className="hover:text-tedx-heading transition">
                Teams
              </a>
            </div>
            <div className=" p-4 space-y-4 flex flex-col">
              <a href="#" className="hover:text-tedx-heading transition">
                Speakers
              </a>
              <a href="#" className="hover:text-tedx-heading trasition">
                Tickets
              </a>
            </div>
          </div>
        </div>
        <div className=" p-4 flex flex-col justify-center ">
          <h1 className="font-bold text-xl">
            GET LATEST UPDATE on <span className="text-red-500">TEDx</span>ACE
          </h1>
          <div className=" flex items-center h-full w-full md:w-[80%] relative">
            <TextField className="p-4 my-3 w-full border-none focus:border-none focus:outline-0 focus-visible:border-0  relative rounded-xl bg-white" />
            <button className="p-4 my-1 uppercase   absolute -right-1 text-black hover:bg-tedx-dark hover:text-white transition-all rounded-xl font-bold  ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full m-3 border-2" />
        <h1 className="text-right w-full font-bold">
          COPYRIGHTS @ 2024 TEDXACE
        </h1>
      </div>
    </section>
  );
};

export default Contact;

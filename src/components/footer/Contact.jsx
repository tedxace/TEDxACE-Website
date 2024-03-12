import { motion } from "framer-motion";
import TedXlogo from "../../assets/TEDxLogo.svg";
import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

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
  function clickedme(e) {
    e.preventDefault();
    document.getElementById("btnsub").innerHTML = "SUBSCRIBED";

    setTimeout(() => {
      document.getElementById("btnsub").innerHTML = "SUBSCRIBE";
    }, 1500);
  }
  return (
    <section
      id="contact"
      className="flex justify-evenly pt-72 items-center flex-col  relative w-full h-full "
    >
      <Link to="/" className="md:self-start">
        <img
          src={TedXlogo}
          alt={"tedxlogo"}
          className="w-[200px] md:self-start "
        />
      </Link>
      <div className="grid md:grid-cols-2 grid-rows-2 w-full place-content-center md:place-content-between md:place-items-stretch  place-items-center">
        <div className="grid grid-cols-2 w-full">
          <div className="flex uppercase font-bold  space-x-8 ">
            <div className=" py-4 space-y-4 flex flex-col ">
              <Link to="/about" className="hover:text-tedx-heading transition">
                About
              </Link>
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
        <div className="flex flex-col md:justify-center  m-3">
          <h1 className="font-bold text-xl">
            GET LATEST UPDATE on <span className="text-red-500">TEDx</span>ACE
          </h1>
          <div className=" flex items-center  md:justify-left m-auto my-5  h-full w-full  relative mr-5">
            <form onSubmit={clickedme}>
              <TextField
                type="email"
                className=" w-36 md:w-48 lg:w-max border-none focus:border-none focus:outline-0 focus-visible:border-0 relative rounded-l-lg bg-tedx-white "
                required
                placeholder="Enter Email.."
              />
              <button
                type="submit"
                id="btnsub"
                className="p-4 my-1 uppercase absolute bottom-[-4px] bg-red-700 text-tedx-white transition-all rounded-r-xl font-bold "
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
      <div>
        <hr className="w-full mb-5 border-2" />
        <h1 className="text-right text-sm lg:text-base w-full font-bold pb-10">
          COPYRIGHTS @ 2024 TEDXACE
        </h1>
      </div>
    </section>
  );
};

export default Contact;

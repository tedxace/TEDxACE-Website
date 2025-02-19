import React, { useState } from "react";
// import Menoheaven from "../assets/Menoheaven.png";

const SpeakerCard = ({ image, name, role, description }: { image: any, name: any, role: any, description: any }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="md:w-[337px] md:h-[504px] flex flex-col items-center justify-center " onClick={()=>setModal(!modal)}>
        <div className="relative   w-[200px] h-[300px] md:w-[337px] md:h-[470.39px] rounded-[66px]  overflow-hidden shadow-md group">
          {/* Speaker Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:brightness-[0.05] transition-all duration-300"
          />

          {/* Text Container */}
          <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 ">
            {/* Name */}
            <p className="text-[27px] font-semibold group-hover:translate-y-[-50%] transition-transform duration-300">
              {name}
            </p>

            {/* Role */}
            <p className="text-[18px] text-gray-300 group-hover:translate-y-[-50%] transition-transform duration-300">
              {role}
            </p>

            {/* Description (Visible on hover) */}
            <div className="opacity-0 group-hover:opacity-100  transition-opacity duration-300">
              <p className="mt-4 text-sm text-gray-400">{description}</p>
            </div>

          </div>
        </div>
        {/* Menoheaven Image */}
        <img
          src={"./Menohaven.png"}
          alt="Menoheaven"
          className="relative left-[10px] bottom-[23px] w-[310px] h-[82px] z-30"
        />

      </section>
      {modal && (
        <div className="fixed w-full h-full  flex items-center justify-center top-0 left-0 border bg-transparent backdrop-blur-3xl text-white z-50" onClick={()=>setModal(false)}>
          <div className="bg-black m-4 md:h-[500px] md:w-[800px] border rounded-xl flex items-center justify-evenly md:flex-row flex-col">
            
            <div className="bg-[#9F9F9F] h-[400px] w-[300px] rounded-2xl my-6 md:my-0">
            <img  src={"./Menohaven.png"} className="relative top-[370px] left-[5pxpx] w-[310px]"></img>
            </div>
            <div className="p-4 grid gap-14 align-text-top w-[400px] items-center ">
              <div>
                <h1 className="text-4xl font-bold text-[#9C6EDD]">{name}</h1>
                <h2 className="text-xl italic text-[18px] text-[#B890F0]">{role}</h2>
                <p className="text-wrap text-base pt-4 text-[#808588]">{description}</p>
              </div>
              <div className="flex justify-center ">
                <button className="bg-[#9B0BAE] p-2.5 rounded-xl hover:bg-[#7c098b]">BUY TICKETS</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeakerCard;
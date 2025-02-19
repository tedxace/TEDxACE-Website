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
          <div className="bg-black m-4 md:h-[400px] md:w-[400px] border flex items-center justify-center flex-col">
            
            <h1>{name}</h1>
            <p className="text-wrap">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default SpeakerCard;
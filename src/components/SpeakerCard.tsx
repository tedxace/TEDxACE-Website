import  { useState } from "react";
// import Menoheaven from "../assets/Menoheaven.png";

const SpeakerCard = ({ image, name, position, text }: { image: any, name: any, position: any, text: any }) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <section className="md:w-[337px] hover:cursor-pointer relative md:h-[504px] flex flex-col items-center justify-center " onClick={()=>setModal(!modal)}>
        <div className="relative   w-[200px] h-[300px] md:w-[337px] md:h-[470.39px] rounded-[66px] overflow-hidden shadow-md group">
          {/* Speaker Image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover bg-gray-400 group-hover:brightness-[0.05] transition-all duration-300 "
          />

          {/* Text Container */}
          <div className="absolute bottom-0 left-0 w-full text-center text-white p-4 ">
            {/* Name */}
            <p className="text-[27px] font-semibold group-hover:translate-y-[-50%] transition-transform duration-300 ">
              {name}
            </p>

            {/* Role */}
            <p className="text-[18px] text-gray-300 group-hover:translate-y-[-50%] transition-transform duration-300">
              {position}
            </p>

            {/* Description (Visible on hover) */}
            <div className="hidden group-hover:inline group-hover:opacity-100  transition-opacity duration-300">
              <p className="mt-4 text-sm text-gray-400">{text[0]}</p>
            </div>

          </div>
        </div>
        {/* Menoheaven Image */}
        {/* <div className="absolute top-0 left-0 w-full h-[140%]  bg-gradient-to-b from-black/40 via-black/98 to-black bg-opacity-50"></div> */}
        <img
          src={"./Menohaven.png"}
          alt="Menoheaven"
          className="relative left-[10px] bottom-[23px] w-[310px] h-[82px] z-30"
        />

      </section>
      {modal && (
        <div className="hidden fixed w-[80%] h-[70%] md:w-full md:h-full  items-center justify-center my-auto top-[20%] md:top-0 md:left-0 border bg-transparent backdrop-blur-3xl text-white z-40" onClick={()=>setModal(false)}>
          <div className="bg-black md:m-4 h-full w-[100%] md:h-[500px] md:w-[800px] border rounded-xl flex items-center justify-evenly md:flex-row flex-col z-50">
            <div className="hidden md:block">
              <div className="bg-[#9F9F9F] mx-4 h-[80%] md:h-[400px] md:w-[300px] rounded-2xl my-6 md:my-0">
              <img  src={"./Menohaven.png"} className="md:relative md:top-[370px] md:left-[5px] w-[310px]"></img>
            </div>  
            </div>
            <div className="block md:hidden">
              <img src={image} className="w-auto h-1/3 mx-auto" alt="" />  
              <img src={"./Menohaven.png"} className=" w-[310px]"></img>
            </div>
            <div className="p-4 grid gap-14 align-text-top md:w-[400px] items-center ">
              <div>
                <h1 className="text-xl md:text-4xl font-bold text-[#9C6EDD]">{name}</h1>
                <h2 className="text-md md:text-xl italic text-[18px] text-[#B890F0]">{position}</h2>
                <p className="text-wrap text-base pt-4 text-[#808588]">{text[0]}</p>
              </div>
              <div className="flex justify-center ">
                <a href="https://forms.gle/rD8xDgdUmwZDeFen6" target="_blank" className="bg-[#9B0BAE] p-2.5 rounded-xl hover:bg-[#7c098b]" >BUY TICKETS</a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default SpeakerCard;
import React from "react";
import hehe from "../../assets/hehe.jpg";
import redscroll from "../../assets/redscroll.png";

export default function Reasons() {
  return (
    <>
      <section
        className={`relative bg-fixed h-full md:h-full w-screen flex flex-col py-0 px-2 md:px-5 lg:px-7 pt-10  justify-center md:bg-left-top bg-center md:justify-center bg-cover items-center pb-5 `}
        style={{
          backgroundImage: `url(${require("../../assets/Reason-BG.png")})`,
        }}
      >
        <div className="relative flex items-center justify-center mt-0 mb-7 pt-0 ">
          
          <h1
            className={`text-center font-eczar font-bold text-tedx-heading cursor-default text-2xl lg:p-10 lg:text-4xl drop-shadow-lg `}
          >
            WHY SHOULD YOU ATTEND ?
          </h1>
        </div>
        <div className="flex flex-wrap">
          <div className={` grid grid-cols-1 md:grid-cols-2 gap-3`}>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28 mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-400 px-1 ">
                  Learn From The Best
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Be The Part Of Community
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Discovery Sessions
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Find The Magic
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Build Life Long Connections
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={hehe}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Join Movement
                </h1>
                <p className="text-tedx-preasons line-clamp-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nihil, libero repudiandae. Veniam fuga necessitatibus
                  cupiditate autem. Exercitationem inventore voluptas quaerat!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

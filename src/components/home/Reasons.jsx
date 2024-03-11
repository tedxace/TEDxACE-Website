import React from "react";
import hehe from "../../assets/hehe.jpg";
import magic from "../../assets/magic.jpg";
import network from "../../assets/network.jpg";
import discovery from "../../assets/discovery.jpg";
import join from "../../assets/join.jpg";
import lob from "../../assets/lob.jpg";

export default function Reasons() {
  return (
    <>
      <section
        className={`relative bg-fixed h-full md:h-full w-screen flex flex-col py-0 px-2 md:px-5 lg:px-7  justify-center md:bg-left-top bg-center md:justify-center bg-cover items-center pt-24 pb-24 `}
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
                src={lob}
                alt="error"
                className="md:w-36 w-28 mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-400 px-1 ">
                  Learn From The Best
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0 ">
                 Get inspires to view the world through different lenses, igniting curiosity and sparking creativity with captivating speakers, philanthropists and innovators.
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
                  Ideas Worth Spreading
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0 ">
                  TEDx events showcase transformative ideas and innovations that have the potential to make a significant impact on society. By sharing these ideas, contribute to positive change and shape the future.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={discovery}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Discovery Sessions
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0 ">
                TEDx events offer diverse perspectives on a wide range of topics, fostering intellectual curiosity. Speakers often share valuable insights and practical advice that can positively impact your life.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={magic}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Find The Magic
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0 ">
                  Broaden your horizons, envision your prophecy and discover the uncharted, unviel mysteries of life with precursors of destiny.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={network}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Network With Innovators
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0 ">
                 Connect with forward-thinkers, industry leaders, and passionate individuals. These opportunities foster collaborations and idea exchanges, enriching personal and professional networks.
                </p>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center w-full text-center">
              <img
                src={join}
                alt="error"
                className="md:w-36 w-28  mx-7 mb-5 rounded-full object-cover shadow-md shadow-yellow-500 hover:scale-105 duration-300 ease-in-out"
              ></img>
              <div className="flex flex-col">
                <h1 className="mb-5 text-xl font-semibold text-tedx-heading  decoration-amber-300 px-1  ">
                  Join Movement
                </h1>
                <p className="text-tedx-preasons pb-5 lg:pb-0">
                  Get a chance to discover, present and cultivate ideas within you. Let the sparks of tranquility fulfill your endeavours with relishness and prosperity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

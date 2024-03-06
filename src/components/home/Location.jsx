import React from "react";
import Button from "./Button";
// import LocationImg from "../../assets/Location.png";
import image from "../../assets/Auditorium.jpg";
const Location = () => {
  return (
    <div
      className="w-full bg-fixed bg-150 pt-10 md:pt-20 bg-center bg-tedx-dark"
      style={{
        backgroundImage: `url('${require("../../assets/LocationBG.png")}')`,
      }}
    >
      <h1 className=" flex justify-center text-4xl md:text-xl lg:text-4xl font-bold text-tedx-heading mb-10">
          LOCATION
        </h1>
      <div
        className="bg-cover mx-10 pt-2 rounded-lg h-[300px] md:h-[350px] lg:h-[350px] bg-center bg-tedx-dark flex  justify-center"
        style={{
          backgroundImage: `url(${require("../../assets/Location.png")})`,
        }}
      >
      </div>
      <div className="p-10">
        <h1 className="text-2xl md:text-2xllg:text-4xl font-['Eczar'] font-bold ">
          AUDITORIUM , PHASE THREE, ATHARVA COLLEGE OF ENGINEERING , MALAD{" "}
        </h1>
        <p className="py-3 font-['Inika'] ">
          <span className="font-bold text-sm md:text-base lg:text-md">
            PHASE THREE
          </span>{" "}
          MAIN BUILDING 4TH FLOOR{" "}
        </p>
        <div className="py-10">
          <div className="flex md:flex-row flex-col justify-between items-center ">
            <div className="">
              <p className="md:w-[50vw] p-2 text-xs md:text-sm lg:text-base text-[#C7C7C7]">
                ACE's auditorium isn't just a stage, it's a vibrant hub. From
                high-tech conferences to student showcases, it buzzes with
                learning, inspiration, and community spirit.
                <br />
                <br />
                Its modern design boasts crystal-clear audio, flexible staging,
                and ample seating, making it the perfect platform for knowledge
                and creativity to flourish. More than just a venue, it's a
                testament to the college's commitment to a rich and enriching
                experience for all.
              </p>
              <p className="py-3 lg:py-10 md:w-[40vw] font-['Inika'] text-sm lg:text-base">
                <b>ADDRESS</b> - Malad Marve Road, Shri Sevantilal Khandwala
                Marg, Charkop Naka, Malad West, Mumbai, Maharashtra 400095
              </p>
              <Button text={"Get Directions"} className={"scale-110"} />
            </div>
            <div className="grid grid-cols-2 gap-[2vw]  ">
              <div className="space-y-10 translate-y-[10%]">
                <img
                  src={image}
                  className="w-[200px] h-[200px] object-cover  rounded-lg "
                  alt=""
                />
                <img
                  src={image}
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                  alt=""
                />
              </div>
              <div className="space-y-10 -translate-y-[10%]">
                <img
                  src={image}
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                  alt=""
                />
                <img
                  src={image}
                  className="w-[200px] h-[200px] object-cover rounded-lg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;

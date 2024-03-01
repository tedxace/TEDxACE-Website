import React from "react";
import Button from "./Button";
// import LocationImg from "../../assets/Location.png";
import image from "../../assets/Auditorium.jpg";
const Location = () => {
  return (
    <div
      className="md:h-[170vh] w-full bg-fixed bg-150 pt-10 md:pt-20 bg-center bg-tedx-dark"
      style={{
        backgroundImage: `url('${require("../../assets/LocationBG.png")}')`,
      }}
    >
      <div
        className="bg-cover mx-10 pt-2 rounded-lg h-[90vh] bg-center bg-tedx-dark flex  justify-center"
        style={{
          backgroundImage: `url(${require("../../assets/Location.png")})`,
        }}
      >
        <h1 className="p-20 text-8xl font-['Eczar'] font-bold text-tedx-heading uppercase">
          Location
        </h1>
      </div>
      <div className="p-10">
        <h1 className="text-4xl font-['Eczar'] font-bold ">
          AUDITORIUM , PHASE THREE, ATHARVA COLLEGE OF ENGINEERING , MALAD{" "}
        </h1>
        <p className="py-3 font-['Inika'] ">
          <span className="font-bold">PHASE THREE</span> MAIN BUILDING 4TH FLOOR{" "}
        </p>
        <div className="py-10">
          <div className="flex md:flex-row flex-col justify-between items-center ">
            <div className="">
              <p className="md:w-[50vw] p-2 text-2xl text-[#C7C7C7]">
                ACE’s auditorium isn't just a stage, it's a vibrant hub. From
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
              <p className="py-10 md:w-[40vw] font-['Inika']">
                <b>ADDRESS</b> - Malad Marve Road, Shri Sevantilal Khandwala
                Marg, Charkop Naka, Malad West, Mumbai, Maharashtra 400095
              </p>
              <Button text={"Get Directions"} className={"scale-110"} />
            </div>
            <div className="grid grid-cols-2 gap-[2vw]  ">
              <div className="space-y-10 mt-20">
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
              <div className="space-y-10">
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

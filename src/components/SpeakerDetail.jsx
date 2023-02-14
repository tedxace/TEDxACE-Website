import React from "react";

const SpeakerDetail = ({ details }) => {
  const {
    speaker: { image, name, position, text, list },
  } = details;
  return (
    <article className="flex flex-col gap-4 md:gap-10 md:grid md:grid-cols-[1fr_1fr]">
      <div className="grid place-items-center">
        <img
          src={image}
          alt={name}
          className="w-[50%] h-auto rounded-md md:w-auto"
        />
      </div>
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-tedx-white/90 font-bold text-center">
            {name}
          </h2>
          <p className="text-base text-md md:text-lg lg:text-xl text-tedx-white/50 font-semibold text-center">
            {position}
          </p>
        </div>
        {text?.map((para) => {
          return (
            <p
              key={name}
              className="text-xs sm:text-sm md:text-md py-1 lg:text-lg px-3"
            >
              {para}
            </p>
          );
        })}
        <ul className="list-disc pl-4 md:pl-10 text-xs py-2 sm:text-sm md:text-md lg:text-lg">
          {list?.map((listItem) => {
            return <li key={name}>{listItem}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default SpeakerDetail;

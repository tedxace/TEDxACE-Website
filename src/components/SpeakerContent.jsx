import React from "react";

const SpeakerContent = ({ speakers }) => {
  // let gridStyle;
  // if (speakers?.length % 2 === 0 && speakers?.length < 2) {
  //   gridStyle = "grid-cols-2";
  // } else {
  //   gridStyle = "grid-cols-3";
  // }
  return (
    <section>
      <header>
        <h2 className="text-4xl font-bold text-center uppercase">Speakers</h2>
      </header>
      <article
        id="speakers"
        className={`flex flex-wrap justify-center gap-3 items-center py-10`}
      >
        {speakers?.map((speaker) => {
          const { name, image, position, href } = speaker;
          return (
            <section
              key={name}
              className="group flex flex-col justify-center items-center clip md:clip-path-speakerPolygon cursor-pointer bg-tedx-blue/30 bg-clip-border gap-y-2 p-2 transition-opacity duration-200 hover:opacity-100 opacity-100 md:opacity-60 border-transparent border-b-2 hover:border-tedx-white rounded-md md:w-[40vh] w-[25vh] h-[25vh] md:h-[40vh] overflow-hidden"
            >
              <img
                loading="lazy"
                src={image}
                alt={name}
                className="h-[125px] w-[125px] md:w-[150px] md:h-[150px] lg:h-[200px] lg:w-[200px] ease-in-out rounded-full"
              />
              <h3 className="transition-transform text-sm md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
                {name}
              </h3>
              <h4 className=" visible md:invisible group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%] md:w-[60%]">
                {position}
              </h4>
              <a
                href={href}
                className={`relative w-full rounded-full p-4`}
                rel="noreferrer"
                target={"_blank"}
              >
                {/* <FontAwesomeIcon
              className="w-5 h-5 absolute right-0 left-0 ml-auto mr-auto duration-200 hover:h-6 hover:w-6"
              icon={social[0]}
            /> */}
              </a>
            </section>
          );
        })}
      </article>
    </section>
  );
};

export default SpeakerContent;

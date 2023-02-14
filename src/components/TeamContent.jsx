import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const TeamContent = ({ team }) => {
  let gridStyle;
  if (team.length % 2 === 0 && team.length < 2) {
    gridStyle = "grid-cols-2";
  } else {
    gridStyle = "grid-cols-3";
  }
  return (
    <article
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 place-items-center md:${gridStyle}`}
    >
      {team?.map((member) => {
        const { name, image, position, social } = member;
        return (
          <section
            key={name}
            className="group flex flex-col justify-center items-center gap-2 gap-y-2 p-2 transition-opacity duration-200 hover:opacity-100 opacity-100 md:opacity-60 border-transparent border-b-2 hover:border-tedx-white rounded-md"
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="h-[150px] w-[150px] md:w-[200px] md:h-[200px] lg:h-[250px] lg:w-[250px] ease-in-out rounded-full"
            />
            <h3 className="transition-transform text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
              {name}
            </h3>
            <h4 className="invisible group-hover:visible">{position}</h4>
            <a
              href={social[1]}
              className={`relative w-full rounded-full p-4`}
              rel="noreferrer"
              target={"_blank"}
            >
              <FontAwesomeIcon
                className="w-5 h-5 absolute right-0 left-0 ml-auto mr-auto duration-200 hover:h-6 hover:w-6"
                icon={social[0]}
              />
            </a>
          </section>
        );
      })}
    </article>
  );
};

export default TeamContent;

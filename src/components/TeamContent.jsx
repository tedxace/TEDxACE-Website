import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const TeamContent = ({ team }) => {
  return (
    <article
      className={`grid grid-cols-1 gap-y-4 sm:grid-cols-2 place-items-center md:grid-cols-3`}
    >
      {team?.map((member) => {
        const { name, image, position, social } = member;
        return (
          <motion.section
            key={name}
            className="group flex flex-col justify-center items-center gap-y-1 p-2 transition-all hover:opacity-100 opacity-100 md:opacity-60 px-6 clip-path-framePolygon duration-700 bg-tedx-blue/10 hover:clip-path-none hover:bg-tedx-pink/20 border-transparent border-b-2 hover:border-tedx-white"
            whileHover={{ scale: 1.02 }}
            onTap={{ scale: 0.98 }}
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="md:h-[150px] md:w-[150px] lg:w-[200px] lg:h-[200px] h-[100px] w-[100px] ease-in-out rounded-full"
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
          </motion.section>
        );
      })}
    </article>
  );
};

export default TeamContent;

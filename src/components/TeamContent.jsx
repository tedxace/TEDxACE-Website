import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const TeamContent = ({ team }) => {
  return (
    <article
      className={`grid gap-y-4 grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4`}
    >
      {team?.map((member) => {
        const { name, image, position, social } = member;
        return (
          <motion.section
            key={name}
            className="group flex flex-col justify-center items-center gap-y-3 transition-all hover:opacity-100 opacity-100 md:opacity-60 px-6 md:clip-path-framePolygon duration-700 bg-tedx-blue/10 hover:clip-path-none hover:bg-tedx-pink/20 border-transparent border-b-2 hover:border-tedx-white"
            whileHover={{ scale: 1.02 }}
            onTap={{ scale: 0.98 }}
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="md:h-[150px] md:w-[150px] lg:w-[200px] lg:h-[200px] h-[100px] w-[100px] ease-in-out rounded-full"
            />
            <div className="grid grid-cols-2 translate-x-2">
              <h3 className="transition-transform text-xs sm:text-sm md:text-base lg:text-md font-semibold duration-200">
                {name}
              </h3>
              <motion.a
                href={social[1]}
                className={`relative w-full rounded-full`}
                rel="noreferrer"
                target={"_blank"}
                whileHover={{ scale: 1.02 }}
              >
                <FontAwesomeIcon
                  className="md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 absolute right-0 left-0 ml-auto mr-auto duration-200"
                  icon={social[0]}
                />
              </motion.a>
            </div>
            <h4 className="invisible group-hover:visible text-xs lg:text-base">
              {position}
            </h4>
          </motion.section>
        );
      })}
    </article>
  );
};

export default TeamContent;

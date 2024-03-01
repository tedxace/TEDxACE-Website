import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";

const TeamContent = ({ team }) => {
  return (
    <article
      className={`grid gap-y-4 grid-cols-2 place-items-center gap-2 md:grid-cols-3 lg:grid-cols-4 
      `}
    >
      {team?.map((member) => {
        const { name, image, position, social } = member;
        return (
          <motion.section
            key={name}
            className="group flex flex-col justify-center items-center w-full pl-2 pt-20 pb-20 opacity-80 hover:opacity-100 bg-center cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onTap={{ scale: 0.98 }}
            style={{
              backgroundImage: `url(${require("../../assets/teamscroll.png")})`,
            }}
          >
            <img
              loading="lazy"
              src={image}
              alt={name}
              className="md:h-[150px] md:w-[150px] lg:w-[160px] lg:h-[160px] h-[100px] w-[100px] ease-in-out rounded-full m-auto ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading bg-white"
            />
            <h3 className="transition-transform text-xs sm:text-sm md:text-base lg:text-md font-semibold duration-200 my-2 m-auto">
              {name}
            </h3>
            <motion.a
              href={social[1]}
              className={`relative w-full -translate-y-1 rounded-full`}
              rel="noreferrer"
              target={"_blank"}
              whileHover={{ scale: 1.02 }}
            >
              <FontAwesomeIcon
                className="md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 absolute right-0 left-0 mr-auto duration-200 -my-0.5 m-auto"
                icon={social[0]}
              />
            </motion.a>
          </motion.section>
        );
      })}
    </article>
  );
};

export default TeamContent;

// @ts-nocheck
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TeamContent = ({ team }: { team: any }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    team?.map((member) => {
      if (member.position === "Lead") {
        setCount(count + 1);
      }
    }
    )
  }, [team])
  let teamCount = team?.length;
  return (
    <article
      className={`grid md:grid-cols-4 grid-cols-2 place-items-center gap-10 `}
    >
      {team?.map((member, index) => {
        const { name, image, position, social } = member;

        return (
          <motion.a
            href={social[1]}
            className={`text-xs md:text-sm lg:text-md font-semibold text-violet-400 duration-200`}
            rel="noreferrer"
            target={"_blank"}
            whileHover={{ scale: 1.02 }}

          >
            <motion.section
              key={name}
              className={teamCount > 4 && position == "Lead" ? `group flex flex-col justify-center items-center w-full p-3 opacity-80 hover:opacity-100 bg-center cursor-pointer col-span-1` : "group flex flex-col justify-center items-center w-full pl-2 p-2 opacity-80 hover:opacity-100 bg-center cursor-pointer "}
              whileHover={{ scale: 1.02 }}
              style={{
                backgroundImage: `url(${("../../assets/teamscroll.png")})`,
              }}
            >
              <img
                loading="lazy"
                src={image}
                alt={name}
                className="md:h-[150px] md:w-[150px] lg:w-[160px] lg:h-[160px] h-[100px] w-[100px] ease-in-out rounded-full m-auto ring-2  object-cover object-top "
              />
              <h3 className="transition-transform text-white text-sm pt-2 sm:text-sm md:text-base lg:text-md font-semibold duration-200 my-2 m-auto">
                {name}
              </h3>
              <FontAwesomeIcon
                className=""
                icon={social[0]}
              />
              <p className="">{position}</p>
            </motion.section>
          </motion.a>

        );
      })}
    </article>
  );
};

export default TeamContent;

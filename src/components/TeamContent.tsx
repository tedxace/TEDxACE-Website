
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const TeamContent = ({ team }:{team:any}) => {
  const [count,setCount]=useState(0);
  useEffect(()=>{
    team?.map((member)=>{
      if(member.position==="Lead"){
        setCount(count+1);
      }
    }
    )
  },[team])
  let teamCount=team?.length;
  return (
    <article
      className={`grid md:grid-cols-4 grid-cols-2 place-items-center gap-10 `}
    >
      {team?.map((member,index) => {
        const { name, image, position, social } = member;
        
        return (
          <motion.section
            key={name}
            className={teamCount>4 && position=="Lead" ? `group flex flex-col justify-center items-center w-full p-3 opacity-80 hover:opacity-100 bg-center cursor-pointer col-span-1`:"group flex flex-col justify-center items-center w-full pl-2 p-2 opacity-80 hover:opacity-100 bg-center cursor-pointer "}
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundImage: `url(${("../../assets/teamscroll.png")})`,
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
              className={` `}
              rel="noreferrer"
              target={"_blank"}
              whileHover={{ scale: 1.02 }}
            >
             {position}
            </motion.a>
          </motion.section>
        );
      })}
    </article>
  );
};

export default TeamContent;

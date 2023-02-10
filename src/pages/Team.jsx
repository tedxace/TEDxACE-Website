import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const team = [
  {
    name: "Jamil Shaikh",
    image: "/jamil-shaikh.png",
    position: "Marketing and Development member",
    connect: "https://bamjam101.github.io/portfolio",
    iconType: faGlobe,
  },
  {
    name: "Suhani Bhansali",
    image: "/suhani-bhansali.png",
    position: "Marketing and Development member",
    connect: "https://instagram.com/suhani_.bh?igshid=NTdlMDg3MTY=",
    iconType: faInstagram,
  },
];

const Teams = () => {
  return (
    <article className="flex flex-col gap-4 my-6 justify-center min-h-screen items-center">
      <header>
        <h1 className="text-4xl font-bold text-center">Team of TEDx ACE</h1>
      </header>
      <main className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {team?.map((member) => {
          const { name, image, position, connect, iconType } = member;
          return (
            <section
              key={name}
              className="group flex flex-col justify-center items-center gap-2 gap-y-4 p-4 transition-opacity duration-200 hover:opacity-100 opacity-60 border-transparent border-b-2 hover:border-tedx-white rounded-md"
            >
              <img
                src={image}
                alt={name}
                className="h-[200px] w-[200px] md:w-[300px] md:h-[300px] rounded-md"
              />
              <h3 className="transition-transform text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
                {name}
              </h3>
              <h4 className="invisible group-hover:visible">{position}</h4>
              <a href={connect} className="relative w-full rounded-full p-4">
                <FontAwesomeIcon
                  className="w-6 h-6 absolute right-0 left-0 ml-auto mr-auto duration-200 hover:h-8 hover:w-8"
                  icon={iconType}
                />
              </a>
            </section>
          );
        })}
      </main>
      <footer></footer>
    </article>
  );
};

export default Teams;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const SpeakerContent = ({ speakers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [speakerDetails, setSpeakerDetails] = useState({});
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  return (
    <section className="relative">
      <header>
        <h2 className="text-4xl font-bold text-center uppercase">Speakers</h2>
      </header>
      <article
        id="speakers"
        className={`flex flex-wrap justify-center gap-3 items-center py-10`}
      >
        {speakers?.map((speaker) => {
          const { name, image, position } = speaker;
          return (
            <motion.section
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              key={name}
              className="group flex flex-col justify-center items-center clip md:clip-path-speakerPolygon cursor-pointer bg-tedx-blue/30 bg-clip-border gap-y-2 p-2 transition-opacity duration-200 hover:opacity-100 opacity-100 md:opacity-60 border-transparent border-b-2 hover:border-tedx-white rounded-md md:w-[40vh] w-[25vh] h-[25vh] md:h-[40vh] overflow-hidden"
              onClick={(event) => {
                event.stopPropagation();
                modalOpen ? close() : open();
                setSpeakerDetails({ speaker });
              }}
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
              {/* <a
                href={href}
                className={`relative w-full rounded-full p-4`}
                rel="noreferrer"
                target={"_blank"}
              >
              </a> */}
              {/* <motion.button
                className="absolute top-0 left-0 w-full h-full outline-none border-none z-10"
              >
                Hi
              </motion.button> */}
            </motion.section>
          );
        })}
      </article>
      <footer>
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && <Modal details={speakerDetails} handleClose={close} />}
        </AnimatePresence>
      </footer>
    </section>
  );
};

export default SpeakerContent;

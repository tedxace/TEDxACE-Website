import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";

const SpeakerContent = ({ speakers }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isHeads, setIsHeads] = useState(false);
  const [speakerDetails, setSpeakerDetails] = useState({});
  const close = () => {
    setModalOpen(false);
  };
  const open = () => {
    setModalOpen(true);
  };
  console.log(speakers?.length);
  useEffect(() => {
    if (speakers?.length < 3) {
      setIsHeads(true);
    }
  }, [speakers?.length]);
  return (
    <section className="relative">
      <header
        id="speakers"
        className={` ${isHeads ? "h-auto" : "min-h-[10vh]"}`}
      >
        <h2
          className={`text-center uppercase ${
            isHeads ? "text-lg" : "text-4xl  font-bold"
          }`}
        >
          {isHeads ? "Heads" : "Speakers"}
        </h2>
      </header>
      <article
        className={`flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10`}
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

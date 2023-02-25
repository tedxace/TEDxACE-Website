import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  useEffect(() => {
    if (speakers?.length < 3) {
      setIsHeads(true);
    }
  }, [speakers?.length]);
  return (
    <section className="relative">
      <header id="speakers" className={` ${isHeads ? "h-auto" : ""}`}>
        <h2
          className={`text-center uppercase my-0 p-0 ${
            isHeads
              ? "text-md md:text-lg"
              : "text-xl md:text-2xl lg:text-3xl font-bold"
          }`}
        >
          {isHeads ? "Heads" : "Speakers"}
        </h2>
      </header>
      <article
        className={`flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10`}
      >
        {speakers?.map((speaker) => {
          const { name, image, position, social } = speaker;
          return (
            <motion.section
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              key={name}
              className={`group flex flex-col justify-center items-center clip md:clip-path-speakerPolygon cursor-pointer bg-tedx-blue/30 bg-clip-border gap-y-2 ${
                isHeads ? "px-12 py-2" : "p-2"
              } transition-opacity duration-200 hover:opacity-100 opacity-100 md:opacity-80 border-transparent border-b-2 hover:border-tedx-white rounded-md md:w-[40vh] w-[25vh] h-[25vh] min-w-[300px] min-h-[300px]  md:h-[40vh] overflow-hidden`}
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
                className={`h-full max-h-[220px] w-full md:w-[150px] object-contain md:h-[150px] lg:h-[200px] lg:w-[200px] ease-in-out ${
                  isHeads ? "rounded-full" : "rounded-none"
                }`}
              />
              <h3 className="transition-transform text-center text-sm md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
                {name}
              </h3>
              {isHeads ? (
                <motion.a
                  href={social[1]}
                  className={`relative w-full flex justify-center items-center rounded-full`}
                  rel="noreferrer"
                  target={"_blank"}
                  whileHover={{ scale: 1.02 }}
                >
                  <FontAwesomeIcon
                    className="md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 duration-200"
                    icon={social[0]}
                  />
                </motion.a>
              ) : null}
              <h4
                className={`visible md:invisible group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%] md:w-[${
                  isHeads ? "80%" : "60%"
                }]`}
              >
                {position}
              </h4>
            </motion.section>
          );
        })}
      </article>
      <footer>
        {isHeads ? null : (
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && (
              <Modal details={speakerDetails} handleClose={close} />
            )}
          </AnimatePresence>
        )}
      </footer>
    </section>
  );
};

export default SpeakerContent;

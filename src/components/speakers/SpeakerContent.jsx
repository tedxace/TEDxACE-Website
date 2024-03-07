import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { cn } from "../../lib/utils";

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
    <section className="relative p-20   bg-fixed  h-full w-full">
      <header id="speakers" className={cn(isHeads ? "h-auto" : "")}>
        <h2
          className={cn(
            "text-center uppercase my-0 p-0 ",
            isHeads
              ? "text-md md:text-lg"
              : "text-4xl md:text-4xl lg:text-4xl font-bold text-tedx-heading"
          )}
        >
          {isHeads ? "LICENSEE & CO-ORGANIZER" : "SPEAKERS"}
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
              key={name}
              className={cn(
                "group flex flex-col justify-center items-center bg-cover px-20 h-full py-28 cursor-pointer opacity-80 hover:opacity-100"
              )}
              style={{
                backgroundImage: `url(${require("../../assets/teamscroll.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
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
                className={cn(
                  "max-w-[100px] md:max-w-[140px] aspect-square lg:max-w-[180px] ease-in-out rounded-full ml-20 mr-20 mt-6 ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading ",
                  isHeads ? "rounded-full" : "rounded-none"
                )}
              />
              <h3 className="transition-transform text-center my-3 text-sm md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
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
                className={cn(
                  "visible md:invisible group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%]",
                  isHeads ? "md:w-80%" : "md:w-60%"
                )}
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

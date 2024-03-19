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
    if (speakers?.length < 4) {
      setIsHeads(true);
    }
  }, [speakers?.length]);
  return (
    <section
      className="relative pt-24 pb-24   bg-fixed  h-full w-100"
      style={{
        backgroundImage: isHeads
          ? ``
          : ` url(${require("../../assets/about_rectangle.png")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        // backgroundAttachment: "fixed",
      }}
    >
      <header id="speakers" className={cn(isHeads ? "h-auto" : "")}>
        <h2
          className={cn(
            "text-center uppercase m-auto ",
            isHeads
              ? "text-md md:text-lg"
              : "text-4xl md:text-4xl font-eczar text-center m-auto lg:text-4xl font-bold text-tedx-heading"
          )}
        >
          {isHeads ? "FACULTY , LICENSEE & CO-ORGANIZER" : "SPEAKERS"}
        </h2>
      </header>
      <article
        className={`flex flex-wrap md:px-24 lg-px-32 justify-center gap-3 items-center py-10`}
      >
        {speakers?.map((speaker) => {
          const { name, image, position, social } = speaker;
          return (
            <section
              whileHover={{ scale: 1.02 }}
              key={name}
              className={cn(
                "group flex flex-col justify-center items-center m-auto bg-cover my-5 px-10  w-[220px] h-[220px] lg:px-0 lg:w-[400px] lg:h-[400px] cursor-pointer opacity-80 hover:opacity-100"
              )}
              style={{
                backgroundImage: `url(${require("../../assets/whitescroll.png")})`,
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
                  "w-[80px] md:w-[140px] lg:w-[180px] lg:h-[180px] object-cover object-center ease-in-out rounded-full ml-10 mr-10 mt-6 ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading ",
                  isHeads ? "rounded-full" : "rounded-full"
                )}
                style={{
                  backgroundImage: `url(${require("../../assets/bggg.jpg")})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
              <h3 className="transition-transform text-center text-black font-eczar my-3 text-[12px] md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
                {name}
              </h3>
              {isHeads ? (
                <a
                  href={social[1]}
                  className={`relative w-full flex justify-center items-center rounded-full`}
                  rel="noreferrer"
                  target={"_blank"}
                  whileHover={{ scale: 1.02 }}
                >
                  <FontAwesomeIcon
                    className="md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 text-black duration-200"
                    icon={social[0]}
                  />
                </a>
              ) : null}
              <h4
                className={cn(
                  "visible md:invisible text-black font-eczar group-hover:visible text-xs sm:text-sm md:text-lg text-center w-[90%]",
                  isHeads ? "md:w-80%" : "md:w-60%"
                )}
              >
                {position}
              </h4>
            </section>
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

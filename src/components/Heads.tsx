//@ts-nocheck
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import Modal from "../Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heads = ({ speakers }) => {
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
      className="relative pt-24 pb-24   bg-fixed  h-full w-full"
      style={{
        
        // backgroundAttachment: "fixed",
      }}
    >
      <header id="speakers" className={"h-auto"}>
        <h2
          className={"text-center uppercase m-auto text-md md:text-lg"}
        >
          FACULTY , LICENSEE & CO-ORGANIZER
        </h2>
      </header>
      <div>
      <div
        className={`flex flex-col md:flex-row w-full  px-10   justify-center  items-center py-10 `}
      >
        {speakers?.map((speaker) => {
          const { name, image, position, social } = speaker;
          return (
            <motion.section
              whileHover={{ scale: 1.02 }}
              key={name}
              className={(
                "group flex flex-col justify-center text-white items-center bg-cover  md:px-10    w-[320px] h-[320px]  lg:w-[400px] lg:h-[400px] cursor-pointer opacity-80 hover:opacity-100"
              )}
              style={{
                backgroundImage: `url(${("../../assets/whitescroll.png")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              
            >
              <img
                loading="lazy"
                src={image}
                alt={name}
                className={
                  "w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[160px] lg:h-[160px] object-cover object-center scale-110 ease-in-out rounded-full ml-10 mr-10 mt-6 ring-2 ring-tedx-heading ring-offset-4 ring-offset-tedx-heading "                
                }
              
              />
              <h3 className="transition-transform text-center text-white font-eczar my-3 text-md md:text-lg font-semibold duration-200 translate-y-2 group-hover:translate-y-0">
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
                    className="md:w-4 md:h-4 w-3 h-3 lg:w-5 lg:h-5 text-white duration-200"
                    icon={social[0]}
                  />
                </motion.a>
              ) : null}
              <h4
                className={
                  "visible  text-white font-eczar  text-xs sm:text-sm md:text-lg text-center w-[90%] md:w-80%"
                }
              >
                {position}
              </h4>
            </motion.section>
          );
        })}
      </div>
      </div>
      {/* <footer>
        {isHeads ? null : (
          <AnimatePresence initial={false} mode="wait">
            {modalOpen && (
              <Modal details={speakerDetails} handleClose={close} />
            )}
          </AnimatePresence>
        )}
      </footer> */}
    </section>
  );
};

export default Heads;

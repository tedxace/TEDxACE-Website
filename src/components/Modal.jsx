import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import SpeakerDetail from "./speakers/SpeakerDetail";

const dropInAnimate = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ details, handleClose }) => {
  return (
    <motion.section
      className="fixed top-0 left-0 h-screen z-[999] w-full grid place-items-center bg-tedx-dark/80 overflow-hidden"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.article
        className="bg-tedx-red-medium w-[90%] relative h-[70%] sm:h-[80%] p-2 md:p-4 md:w-[80%] md:h-[70%] grid place-items-center rounded-lg"
        onClick={(e) => e.stopPropagation()}
        variants={dropInAnimate}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <SpeakerDetail details={details} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
          className="absolute top-5 right-5"
        >
          <FontAwesomeIcon className="h-8 w-8" icon={faClose} />
        </motion.button>
      </motion.article>
    </motion.section>
  );
};

export default Modal;

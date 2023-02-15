import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React, { useState } from "react";

const pop = {
  hidden: {
    y: "10vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
    },
  },
};

const Contact = () => {
  const [formButtonText, setFormButtonText] = useState("Subscribe");
  const onContactFormButtonClick = () => {
    setFormButtonText("Thank you for subscribing!");
  };
  return (
    <section id="contact" className="grid grid-rows-2 pt-20">
      <div className="flex flex-col gap-3 md:gap-6 justify-center items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
        <h3 className="text-xl md:text-2xl">Subscribe To Stay Updated!</h3>
        <h6 className="text-sm sm:text-base">We promise to not spam you!</h6>
        <div className="w-full flex justify-center">
          <form
            action="https://send.pageclip.co/VWRbpiEfAP0hzrGU6zYxtwrvxEXHt79l"
            className="relative h-full md:w-[50%] lg:w-[40%] w-[80%]"
            method="post"
          >
            <input
              className="absolute top-0 left-0 rounded-full w-full bg-tedx-white/80 text-tedx-dark/80 px-4 py-2 drop-shadow-xl shadow-tedx-white"
              name="email"
              type="email"
              placeholder="subscribe@tedxace.com"
              required
            />

            <button
              className="absolute rounded-full bg-tedx-blue transition-colors duration-200 hover:bg-tedx-pink text-tedx-dark capitalize font-semibold  z-10 right-0 top-0 w-[30%] md:w-[20%] py-2"
              type="submit"
              onClick={onContactFormButtonClick}
            >
              {formButtonText}
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center relative md:grid md:grid-cols-2 h-[20vh] px-4 md:px-[20vw]">
        <div className="flex flex-col gap-6 px-10">
          <h3 className="text-lg hidden md:block md:text-2xl font-semibold">
            Social Media
          </h3>
          <div className="flex justify-center items-center">
            <motion.a
              href="https://twitter.com/tedxace"
              className={`relative w-full rounded-full`}
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              variants={pop}
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="w-8 h-8 absolute right-0 left-0 duration-200"
                icon={faTwitter}
              />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/tedxace2020/"
              className={`relative w-full rounded-full`}
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              variants={pop}
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="w-8 h-8 absolute right-0 left-0 duration-200"
                icon={faFacebook}
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tedxace/"
              className={`relative w-full rounded-full`}
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              variants={pop}
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="w-8 h-8 absolute right-0 left-0 duration-200"
                icon={faInstagram}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/company/tedxace/"
              className={`relative w-full rounded-full`}
              whileHover={{ scale: 1.02 }}
              onTap={{ scale: 0.98 }}
              variants={pop}
              initial="hidden"
              animate="visible"
            >
              <FontAwesomeIcon
                className="w-8 h-8 absolute right-0 left-0 duration-200"
                icon={faLinkedin}
              />
            </motion.a>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:pl-28 px-10 text-center md:text-left">
          <h3 className="text-lg invisible md:visible md:text-2xl font-semibold">
            Email
          </h3>
          <p>
            <a
              href="mailto:tedxatharva@gmail.com"
              className="text-tedx-blue/60 transition-colors text-lg md:text-xl duration-200 hover:text-tedx-pink/80"
            >
              tedxatharva@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

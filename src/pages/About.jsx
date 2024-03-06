import {
  faInstagram,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./about.css";
import useMediaQuery from "../hooks/useMediaQuery";

const About = () => {
  const { isMobile } = useMediaQuery();
  return (
    <main>
      <div
        className="bg-cover"
        style={{
          backgroundImage: `url(${require("../assets/about_page_bg.png")})`,
        }}
      >
        <div class="text-center text-tedx-heading text-2xl md:text-4xl lgtext-6xl pt-16 font-bold">
          <p>ABOUT</p>
        </div>
        <div class="text-custom-gray px-5 pt-6 leading-snug">
          <p class="text-lg md:text-2xl lg:text-4xl font-bold">
            About TEDx, x = independently organized event
          </p>
          <p class="text-sm md:text-md lg:text-base font-semibold text-tedx-preasons">
            In the spirit of ideas worth spreading, TEDx is a program of local,
            self-organized events that bring people together to share a TED-like
            experience. At a TEDx event, TED Talks video and live speakers
            combine to spark deep discussion and connection. These local,
            self-organized events are branded TEDx, where x = independently
            organized TED event. The TED Conference provides general guidance
            for the TEDx program, but individual TEDx events are self-organized.
            (Subject to certain rules and regulations.)
          </p>
        </div>
        <div class="text-custom-gray px-5 pt-12">
          <p class="text-xl md:text-2xl lg:text-4xl font-bold">About TED</p>
          <div class="flex flex-col md:flex-row gap-y-4 md:gap-x-4 justify-between">
            <div class="md:w-1/2">
              <p class="text-sm lg:text-base font-semibold text-tedx-preasons">
                TED is a nonprofit organization devoted to Ideas Worth
                Spreading. Started as a four-day conference in California 30
                years ago, TED has grown to support its mission with multiple
                initiatives. The two annual TED Conferences invite the world's
                leading thinkers and doers to speak for 18 minutes or less. Many
                of these talks are then made available, free, at TED.com. TED
                speakers have included Bill Gates, Jane Goodall, Elizabeth
                Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck,
                Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
              </p>
            </div>
            <div class="md:w-1/2">
              <p class="text-sm lg:text-base font-semibold text-tedx-preasons">
                The annual TED Conference takes place each spring in Vancouver,
                British Columbia. TED's media initiatives include TED.com, where
                new TED Talks are posted daily; TED Translators, which provides
                subtitles and interactive transcripts as well as translations
                from volunteers worldwide; the educational initiative TED-Ed.
                TED has established The Audacious Project that takes a
                collaborative approach to funding ideas with the potential to
                create change at thrilling scale; TEDx, which supports
                individuals or groups in hosting local, self- organized
                TED-style events around the world, and the TED Fellows program,
                helping world-changing innovators from around the globe to
                amplify the impact of their remarkable projects and activities.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center py-8 mt-10">
          <p className="text-tedx-heading font-bold text-xl md:text-2xl lg:text-4xl">
            FOLLOW TED ON
          </p>
          <div class="flex items-center justify-around w-1/4 pt-4">
            <a className="text-2xl hover:text-tedx-heading" href="https://www.youtube.com/@TEDx" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>

            <a className="text-2xl hover:text-tedx-heading" href="https://www.instagram.com/tedxace/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>

            <a className="text-2xl hover:text-tedx-heading" href="https://www.linkedin.com/company/tedxace/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl text-tedx-heading max-sm:px-6 font-bold mt-5 text-center">
          SOME GLIMPSES OF OUR PAST EVENTS
        </p>
        <div className="wrapper flex flex-wrap justify-center gap-5">
          <div className="flex flex-col items-center">
            <iframe
              className="w-full"
              style={{
                width: isMobile ? "280px" : "420px",
                height: isMobile ? "200px" : "315px",
              }}
              src="https://www.youtube.com/embed/KeQRirsphKo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-2xl text-tedx-heading font-semibold mt-5 cursor-pointer hover:text-white hover:underline underline-offset-8 ">
              2023
            </p>
          </div>
          <div className="flex flex-col items-center">
            <iframe
              className="w-full"
              style={{
                width: isMobile ? "280px" : "420px",
                height: isMobile ? "200px" : "315px",
              }}
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-2xl text-tedx-heading font-semibold mt-5 cursor-pointer hover:text-white hover:underline underline-offset-8">
              2022
            </p>
          </div>
          <div className="flex flex-col items-center">
            <iframe
              className="w-full"
              style={{
                width: isMobile ? "280px" : "420px",
                height: isMobile ? "200px" : "315px",
              }}
              src="https://www.youtube.com/embed/TLlDOCexrN0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="text-2xl text-tedx-heading font-semibold mt-5 cursor-pointer hover:text-white hover:underline underline-offset-8">
              2021
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;

import React from "react";
import HeroSection from "../components/home/HeroSection";
import SpeakerContent from "../components/speakers/SpeakerContent";
import Sponsors from "../components/home/Sponsors";
import { useSpeakerData, useSponsorData } from "../context/ContextProvider";
import ParallaxSection from "../components/home/ParallaxSection";
import { AnimatePresence } from "framer-motion";
import Reasons from "../components/home/Reasons";
import PastSpeakers from "../components/home/PastSpeakers";
import Ticket from "../components/home/Ticket";
import Location from "../components/home/Location";
import { Box } from "@mui/material";

const Home = () => {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <main className=" bg-tedx-bg">
      <AnimatePresence>
        <HeroSection />

        <ParallaxSection />
        <Box
          sx={{ width: "100%" }}
          className={`relative h-fit bg-center bg-cover bg-no-repeat bg-fixed `}
          style={{
            backgroundImage: `url(${require("../assets/Teams.png")})`,
          }}
        >
          <Box
            className={`h-full w-full bg-gradient-to-b from-tedx-bg via-transparent to-tedx-bg z-10`}
          >
            <SpeakerContent speakers={speakers} />
          </Box>
        </Box>
        <Ticket />
        <Reasons />
        <PastSpeakers />
        <Sponsors sponsors={sponsors} />
        <Location />
      </AnimatePresence>
    </main>
  );
};

export default Home;

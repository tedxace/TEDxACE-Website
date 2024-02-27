import React from "react";
import HeroSection from "../components/home/HeroSection";
import SpeakerContent from "../components/speakers/SpeakerContent";
import Sponsors from "../components/home/Sponsors";
import { useSpeakerData, useSponsorData } from "../Context/ContextProvider";
import ParallaxSection from "../components/home/ParallaxSection";
import { AnimatePresence } from "framer-motion";
import Reasons from "../components/home/Reasons";

const Home = () => {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <main className="overflow-x-hidden bg-tedx-bg">
      <AnimatePresence>
        <HeroSection />

        <ParallaxSection />
        <SpeakerContent speakers={speakers} />
        <Reasons />
        <Sponsors sponsors={sponsors} />
      </AnimatePresence>
    </main>
  );
};

export default Home;

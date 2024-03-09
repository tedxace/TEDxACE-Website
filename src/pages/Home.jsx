import React from "react";
import HeroSection from "../components/home/HeroSection";
import Sponsors from "../components/home/Sponsors";
import { useSpeakerData, useSponsorData } from "../context/ContextProvider";
import ParallaxSection from "../components/home/ParallaxSection";
import { AnimatePresence } from "framer-motion";
import Reasons from "../components/home/Reasons";
import PastSpeakers from "../components/home/PastSpeakers";
import Ticket from "../components/home/Ticket";
import Location from "../components/home/Location";

const Home = () => {
  const { sponsors } = useSponsorData();
  return (
    <main className=" bg-tedx-bg">
      <AnimatePresence>
        <HeroSection />

        <ParallaxSection />
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

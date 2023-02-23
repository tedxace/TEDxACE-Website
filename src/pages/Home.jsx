import React from "react";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import SpeakerContent from "../components/SpeakerContent";
import Sponsors from "../components/Sponsors";
import { useSpeakerData } from "../Context/ContextProvider";

const Home = () => {
  const { speakers } = useSpeakerData();
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpeakerContent speakers={speakers} />
      <Sponsors />
      <Contact />
    </main>
  );
};

export default Home;

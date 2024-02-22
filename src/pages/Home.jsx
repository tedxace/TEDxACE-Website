import React from "react";
import HeroSection from "../components/home/HeroSection";
import SpeakerContent from "../components/speakers/SpeakerContent";
import Sponsors from "../components/home/Sponsors";
import { useSpeakerData, useSponsorData } from "../Context/ContextProvider";

const Home = () => {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpeakerContent speakers={speakers} />
      <Sponsors sponsors={sponsors} />
    </main>
  );
};

export default Home;

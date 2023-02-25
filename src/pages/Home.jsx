import React from "react";
import HeroSection from "../components/HeroSection";
import SpeakerContent from "../components/SpeakerContent";
import Sponsors from "../components/Sponsors";
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

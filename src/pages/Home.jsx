import React from "react";
import HeroSection from "../components/home/HeroSection";
import SpeakerContent from "../components/speakers/SpeakerContent";
import Sponsors from "../components/home/Sponsors";
import { useSpeakerData, useSponsorData } from "../Context/ContextProvider";
import Reasons from "../components/home/Reasons";

const Home = () => {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  return (
    <main className="overflow-x-hidden bg-tedx-bg">
      <HeroSection />
      <SpeakerContent speakers={speakers} />
      <Reasons />
      <Sponsors sponsors={sponsors} />
    </main>
  );
};

export default Home;

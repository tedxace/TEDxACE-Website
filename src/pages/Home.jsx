import React from "react";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import SpeakerContent from "../components/SpeakerContent";
import Sponsors from "../components/Sponsors";
import { useSpeakerData, useSponsorData } from "../Context/ContextProvider";

const Home = () => {
  const { speakers } = useSpeakerData();
  const { sponsors } = useSponsorData();
  console.log(sponsors);
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpeakerContent speakers={speakers} />
      <Sponsors sponsors={sponsors} />
      <Contact />
    </main>
  );
};

export default Home;

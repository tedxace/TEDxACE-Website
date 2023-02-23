import React from "react";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import SpeakerContent from "../components/SpeakerContent";
import { useSpeakerData } from "../Context/ContextProvider";

const Home = () => {
  const { speakerState } = useSpeakerData();
  console.log(speakerState);
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <SpeakerContent speakers={speakerState} />
      <Contact />
    </main>
  );
};

export default Home;

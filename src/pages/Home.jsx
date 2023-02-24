import React, { useEffect } from "react";
import Contact from "../components/Contact";
import HeroSection from "../components/HeroSection";
import SpeakerContent from "../components/SpeakerContent";
import Sponsors from "../components/Sponsors";
import {
  heads2022,
  heads2023,
  speakers2022,
  speakers2023,
  team2022,
  team2023,
} from "../common";
import { useSpeakerData, useTeamData } from "../Context/ContextProvider";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { setSpeakers, speakers } = useSpeakerData();
  const { setTeams, setHeads } = useTeamData();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/previous-event") {
      setSpeakers(speakers2022);
      setTeams(team2022);
      setHeads(heads2022);
    } else {
      setSpeakers(speakers2023);
      setTeams(team2023);
      setHeads(heads2023);
    }
  });
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

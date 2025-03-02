// @ts-nocheck

import React, { createContext, useContext, useState } from "react";
import {
  heads2025,
  speakers2025,
  sponsors2025,
  team2025,
} from "../constants/2025";

const HeadContext = createContext(null);
const TeamContext = createContext(null);
const SpeakerContext = createContext(null);
const SponsorContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [heads, setHeads] = useState(heads2025);
  const [teams, setTeams] = useState(team2025);
  const [speakers, setSpeakers] = useState(speakers2025);
  const [sponsors, setSponsors] = useState(sponsors2025);
  return (
    <TeamContext.Provider value={{ teams, setTeams }}>
      <HeadContext.Provider value={{ heads, setHeads }}>
        <SponsorContext.Provider value={{ sponsors, setSponsors }}>
          <SpeakerContext.Provider
            value={{
              speakers,
              setSpeakers,
            }}
          >
            {children}
          </SpeakerContext.Provider>
        </SponsorContext.Provider>
      </HeadContext.Provider>
    </TeamContext.Provider>
  );
};

export default ContextProvider;

export const useTeamData = () => useContext(TeamContext);
export const useSpeakerData = () => useContext(SpeakerContext);
export const useSponsorData = () => useContext(SponsorContext);
export const useHeadData = () => useContext(HeadContext);

import React, { createContext, useContext, useState } from "react";
import {
  heads2024,
  speakers2024,
  sponsors2024,
  team2024,
} from "../constants/2024";

const HeadContext = createContext(null);
const TeamContext = createContext(null);
const SpeakerContext = createContext(null);
const SponsorContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [heads, setHeads] = useState(heads2024);
  const [teams, setTeams] = useState(team2024);
  const [speakers, setSpeakers] = useState(speakers2024);
  const [sponsors, setSponsors] = useState(sponsors2024);
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

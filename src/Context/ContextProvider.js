import React, { createContext, useContext, useState } from "react";
import { heads2023, speakers2023, team2023 } from "../common";

const TeamContext = createContext(null);
const SpeakerContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [heads, setHeads] = useState(heads2023);
  const [teams, setTeams] = useState(team2023);
  const [speakers, setSpeakers] = useState(speakers2023);
  return (
    <TeamContext.Provider value={{ teams, setTeams, heads, setHeads }}>
      <SpeakerContext.Provider value={{ speakers, setSpeakers }}>
        {children}
      </SpeakerContext.Provider>
    </TeamContext.Provider>
  );
};

export default ContextProvider;

export const useTeamData = () => useContext(TeamContext);
export const useSpeakerData = () => useContext(SpeakerContext);

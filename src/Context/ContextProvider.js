import React, { createContext, useContext, useState } from "react";
import { speakers2022, team2023 } from "../common";

const TeamContext = createContext(null);
const SpeakerContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [teamState, setTeamState] = useState(team2023);
  const [speakerState, setSpeakerState] = useState(speakers2022);
  return (
    <TeamContext.Provider value={{ teamState, setTeamState }}>
      <SpeakerContext.Provider value={{ speakerState, setSpeakerState }}>
        {children}
      </SpeakerContext.Provider>
    </TeamContext.Provider>
  );
};

export default ContextProvider;

export const useTeamData = () => useContext(TeamContext);
export const useSpeakerData = () => useContext(SpeakerContext);

import React, { createContext, useContext, useState } from 'react'
import { tech, curator, designer, social, market, decor, video, speakers } from "../common";

const TeamContext = createContext(null);
const SpeakerContext = createContext(null);

const ContextProvider = ({ children }) => {
    const teamState = [{ "name": "tech", members: [...tech] }, { "name": "curator", members: [...curator] }, { "name": "designer", members: [...designer] }, { "name": "social", members: [...social] }, { "name": "market", members: [...market] }, { "name": "decor", members: [...decor] }, { "name": "video", members: [...video] }];
    const speakerState = speakers;
    return (
        <TeamContext.Provider value={teamState}>
            <SpeakerContext.Provider value={speakerState}>
                {children}
            </SpeakerContext.Provider>
        </TeamContext.Provider>
    )
}

export default ContextProvider;

export const useTeamData = () => useContext(TeamContext);
export const useSpeakerData = () => useContext(SpeakerContext);
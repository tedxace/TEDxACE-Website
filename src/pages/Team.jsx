import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useHeadData, useTeamData } from "../context/ContextProvider";
import TeamContent from "../components/teams/TeamContent";
import SpeakerContent from "../components/speakers/SpeakerContent";
import { useState } from "react";
import { Typography } from "@mui/material";

import useMediaQuery from "../hooks/useMediaQuery";

const Teams = () => {
  const { teams } = useTeamData();
  const { heads } = useHeadData();
  const { isMobile } = useMediaQuery();
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{ width: "100%" }}
      className={`relative h-fit bg-center bg-cover bg-no-repeat`}
      style={{
        backgroundImage: `url(${require("../assets/teamsectionbg.png")})`,
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", position: "relative" }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
              width: "100%",
            }}
          >
            <Typography
              variant="h5"
              component={"h2"}
              sx={{
                fontWeight: "bolder",
                padding: "2rem 0 1rem 0",
                textTransform: "capitalize",
              }}
            >
              <h3 className={`text-3xl text-tedx-heading`}>OUR TEAM</h3>
            </Typography>
            <SpeakerContent speakers={heads} />
          </Box>
          <a href="#list" id="list">
            <TabList
              onChange={handleChange}
              aria-label="TEDx Team Members"
              centered
              sx={{
                "& .css-wlpw4n-MuiButtonBase-root-MuiTab-root.Mui-selected ": {
                  color: "#F19F00",
                },
                "& .MuiTabs-root": { color: "#F19F00" },
                "& .MuiTabs-scroller": {},
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
                "& .MuiTabs-indicator": {
                  height: isMobile ? "0px" : "2px",
                  color: "#F19F00",
                  background: "#F19F00",
                },
                "& .Mui-selected": { color: "#F19F00" },
                "& .css-1aquho2-MuiTabs-indicator": { background: "#F19F00" },
              }}
            >
              <Tab
                label={teams[0].name}
                value="1"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[1].name}
                value="2"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[2].name}
                value="3"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[3].name}
                value="4"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[4].name}
                value="5"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[5].name}
                value="6"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
              <Tab
                label={teams[6].name}
                value="7"
                sx={{ color: "#C7C7C7", fontWeight: "bold" }}
              />
            </TabList>
          </a>
        </Box>
        <Box sx={{ minHeight: "90vh" }}>
          <TabPanel value="1">
            <TeamContent team={teams[0].members} />
          </TabPanel>
          <TabPanel value="2">
            <TeamContent team={teams[1].members} />
          </TabPanel>
          <TabPanel value="3">
            <TeamContent team={teams[2].members} />
          </TabPanel>
          <TabPanel value="4">
            <TeamContent team={teams[3].members} />
          </TabPanel>
          <TabPanel value="5">
            <TeamContent team={teams[4].members} />
          </TabPanel>
          <TabPanel value="6">
            <TeamContent team={teams[5].members} />
          </TabPanel>
          <TabPanel value="7">
            <TeamContent team={teams[6].members} />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default Teams;

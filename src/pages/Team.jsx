import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useTeamData } from "../Context/ContextProvider";
import TeamContent from "../components/TeamContent";
import SpeakerContent from "../components/SpeakerContent";
import { useState } from "react";
import { Typography } from "@mui/material";

const Teams = () => {
  const { teams, heads } = useTeamData();
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    }
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
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
              Our Team
            </Typography>
            <SpeakerContent speakers={heads} />
          </Box>
          <a href="#list" id="list">
            <TabList
              onChange={handleChange}
              aria-label="TEDx Team Members"
              centered
              sx={{
                "& .MuiTabs-root": {},
                "& .MuiTabs-scroller": {},
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                },
                "& .MuiTabs-indicator": {
                  height: isMobile ? "0px" : "2px",
                },
              }}
            >
              <Tab
                label={teams[0].name}
                value="1"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[1].name}
                value="2"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[2].name}
                value="3"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[3].name}
                value="4"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[4].name}
                value="5"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[5].name}
                value="6"
                sx={{ color: "common.white" }}
              />
              <Tab
                label={teams[6].name}
                value="7"
                sx={{ color: "common.white" }}
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

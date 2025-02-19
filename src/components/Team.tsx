import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useHeadData, useTeamData } from "../context/ContextProvider";
import TeamContent from "../components/TeamContent";
import { useState } from "react";
import { Typography } from "@mui/material";
import Heads from "./Heads";
import { motion } from "framer-motion";

const Teams = () => {
  const { teams } = useTeamData();
  const { heads } = useHeadData();
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Animation variants for fade-in effect
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <Box
      sx={{ width: "100%" }}
      className={`relative h-fit bg-center bg-black text-white bg-cover bg-no-repeat `}
    >
      <TabContext value={value} >
        {/* Header Section */}
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "2rem",
                width: "100%",
                paddingTop: "5rem",
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
                <span className={`text-3xl pt-24 l text-tedx-heading`}>
                  OUR TEAM
                </span>
              </Typography>
              <Heads speakers={heads} />
            </Box>
            <a href="#list" id="list">
              <TabList
                onChange={handleChange}
                aria-label="TEDx Team Members"
                className="text-white pt-32  "
                centered
                sx={{
                  "& .css-wlpw4n-MuiButtonBase-root-MuiTab-root.Mui-selected ": {
                    color: "#fff",
                  },
                  "& .MuiTabs-root": { color: "#fff" },
                  "& .MuiTabs-scroller": {},
                  "& .MuiTabs-flexContainer": {
                    flexWrap: "wrap",
                  },
                  "& .MuiTabs-indicator": {
                    color: "#fff",
                    background: "#000",
                  },
                  "& .Mui-selected": {
                    background:"#8940B2",
                    borderRadius:"50px"
                  },
                  
                  "& .css-1aquho2-MuiTabs-indicator": { background: "#000",color: "#fff" },
                }}
              >
                {teams.map((team, index) => (
                  <Tab
                    key={index}
                    label={team.name}
                    className="z-10 rounded text-white "
                    value={(index + 1).toString()}
                    sx={{ color: "#FFF", fontWeight: "bold" ,
                  
                    }}
                  />
                ))}
              </TabList>
            </a>
          </Box>
        </motion.div>

        {/* Tab Panels */}
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.2 }}
        >
          <Box sx={{ minHeight: "90vh" }}>
            {teams.map((team, index) => (
              <TabPanel
                key={index}
                value={(index + 1).toString()}
                className="flex items-center justify-center"
              >
                <TeamContent team={team.members} />
              </TabPanel>
            ))}
          </Box>
        </motion.div>
      </TabContext>
    </Box>
  );
};

export default Teams;
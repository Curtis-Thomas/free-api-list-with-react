import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import NavBar from "../navigation/NavBar";
import BoxTestCrud from "./components/BoxTestCrud";
import AdvancedBoxTestCrud from "./components/AdvancedBoxTestCrud";
import BoxTestImg from "./components/BoxTestImg";

const Tools = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        height: "200vh",
      }}
    >
      <NavBar route2="/Tools" />
      <Box>
        <Box>
          <Typography sx={{ color: theme.palette.text.primary }}>
            CRUD Testing
          </Typography>
          <BoxTestCrud />
        </Box>
        <Box>
          <Typography sx={{ color: theme.palette.text.primary }}>
            Advanced CRUD Testing
          </Typography>
          <AdvancedBoxTestCrud />{" "}
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ color: theme.palette.text.primary }}>
            IMG Testing
          </Typography>
          <BoxTestImg />
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;

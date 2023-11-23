import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../navigation/NavBar";
import BoxTestCrud from "./components/BoxTestCrud";
import AdvancedBoxTestCrud from "./components/AdvancedBoxTestCrud";
import BoxTestImg from "./components/BoxTestImg";

const Tools = () => {
  return (
    <Box>
      <NavBar route2="/Tools" />
      <Box>
        <Box>
          <Typography>CRUD Testing</Typography>
          <BoxTestCrud />
        </Box>
        <Box>
          <Typography>Advanced CRUD Testing</Typography>
          <AdvancedBoxTestCrud />{" "}
        </Box>
      </Box>
      <Box>
        <Box>
          <Typography>IMG Testing</Typography>
          <BoxTestImg />
        </Box>
      </Box>
    </Box>
  );
};

export default Tools;

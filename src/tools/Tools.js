import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../core/main/navigation/NavBar";

const Tools = () => {
  return (
    <Box>
      <NavBar route2="/Tools" />
      <Typography variant="h2">Tools Page</Typography>
    </Box>
  );
};

export default Tools;

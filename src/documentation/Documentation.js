import React from "react";
import { Box, Typography } from "@mui/material";
import NavBar from "../core/main/navigation/NavBar";

/**
 * The Documentation component returns a simple div element containing an h1 heading.
 *  Add your documentation content or components within the div as needed.
 */
const Documentation = () => {
  return (
    <Box>
      <NavBar />
      <Typography variant="h2">Documentation Page</Typography>
      {/* Add your content here */}
    </Box>
  );
};

export default Documentation;

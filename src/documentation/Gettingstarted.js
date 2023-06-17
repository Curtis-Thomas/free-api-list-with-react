import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import GettingStartedContent from "./GettingStartedContent";

const GettingStarted = () => {
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  const toggleGettingStarted = () => {
    setShowGettingStarted(!showGettingStarted);
  };

  return (
    <Box sx={{ border: "solid 1px #333333" }}>
      <Button onClick={toggleGettingStarted}>
        <Typography>Getting Started</Typography>
      </Button>
      {showGettingStarted && <GettingStartedContent />}
    </Box>
  );
};

export default GettingStarted;

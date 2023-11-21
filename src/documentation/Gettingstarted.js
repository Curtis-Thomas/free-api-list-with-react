import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import GettingStartedContent from "./GettingStartedContent";

const GettingStarted = () => {
  const [showGettingStarted, setShowGettingStarted] = useState(false);

  const toggleGettingStarted = () => {
    setShowGettingStarted(!showGettingStarted);
  };

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2, marginBottom: 3 }}>
      <Button
        onClick={toggleGettingStarted}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="button">
          {showGettingStarted ? "Hide Getting Started" : "Show Getting Started"}
        </Typography>
      </Button>
      {showGettingStarted && <GettingStartedContent />}
    </Box>
  );
};

export default GettingStarted;

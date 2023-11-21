import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import StylingTheming from "./stylingTheming/StylingTheming";

const ReferenceGuide = () => {
  const [showStyling, setShowStyling] = useState(false);

  const toggleStyling = () => {
    setShowStyling(!showStyling);
  };

  return (
    <Box sx={{ border: "solid 1px #333333", padding: 2, marginBottom: 3 }}>
      <Button
        onClick={toggleStyling}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="button">
          {showStyling
            ? "Hide Styling & Theming Guide"
            : "Show Styling & Theming Guide"}
        </Typography>
      </Button>
      {showStyling && <StylingTheming />}
    </Box>
  );
};

export default ReferenceGuide;

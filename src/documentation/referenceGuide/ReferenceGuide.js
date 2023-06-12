import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import StylingTheming from "./stylingTheming/StylingTheming";

const ReferenceGuide = () => {
  const [showStyling, setShowStyling] = useState(false);

  const toggleStyling = () => {
    setShowStyling(!showStyling);
  };

  return (
    <Box sx={{ border: "solid 1px #333333" }}>
      <Button onClick={toggleStyling}>
        <Typography>Reference Guide</Typography>
      </Button>
      {showStyling && <StylingTheming />}
    </Box>
  );
};

export default ReferenceGuide;
